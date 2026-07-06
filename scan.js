#!/usr/bin/env node
/**
 * Ad-Scout: сканер Meta Ad Library через SearchAPI.io.
 * Использование: node scan.js ["категория" ...]  (без аргументов — все категории)
 * Требует переменную окружения SEARCHAPI_KEY (можно положить в .env).
 */
const fs = require('fs');
const path = require('path');

// Простая загрузка .env без зависимостей
const envPath = path.join(__dirname, '.env');
if (fs.existsSync(envPath)) {
  for (const line of fs.readFileSync(envPath, 'utf8').split('\n')) {
    const m = line.match(/^\s*([\w.]+)\s*=\s*(.*)\s*$/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2];
  }
}

const API_KEY = process.env.SEARCHAPI_KEY;
if (!API_KEY) {
  console.error('SEARCHAPI_KEY не задан (окружение или .env)');
  process.exit(1);
}

const ALL_CATEGORIES = [
  'pet products',
  'kitchen gadgets',
  'baby safety',
  'posture corrector',
  'skincare tools',
  'travel accessories',
  'desk accessories',
  'home gym',
  'gardening tools',
  'personalized gifts',
  'everyday carry',
];

const categories = process.argv.slice(2).length ? process.argv.slice(2) : ALL_CATEGORIES;
const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-');
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const RAW_DIR = path.join(__dirname, 'data', 'raw');
fs.mkdirSync(RAW_DIR, { recursive: true });

async function fetchCategory(q) {
  const url = new URL('https://www.searchapi.io/api/v1/search');
  url.searchParams.set('engine', 'meta_ad_library');
  url.searchParams.set('ad_category', 'all');
  url.searchParams.set('q', q);
  url.searchParams.set('country', 'US');
  url.searchParams.set('active_status', 'active');
  url.searchParams.set('media_type', 'video');
  url.searchParams.set('api_key', API_KEY);

  const res = await fetch(url);
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`HTTP ${res.status} для "${q}": ${body.slice(0, 300)}`);
  }
  return res.json();
}

// Приводим объявление к компактному виду для анализа
function normalizeAd(ad) {
  const snap = ad.snapshot || {};
  return {
    ad_archive_id: ad.ad_archive_id || ad.id,
    page_name: ad.page_name || snap.page_name,
    page_like_count: snap.page_like_count,
    start_date: ad.start_date || ad.ad_delivery_start_time,
    total_active_time: ad.total_active_time,
    collation_count: ad.collation_count, // число вариаций объявления
    title: snap.title,
    body: (snap.body && (snap.body.text || snap.body)) || ad.ad_creative_body,
    caption: snap.caption,
    link_url: snap.link_url,
    cta_text: snap.cta_text,
    display_format: snap.display_format,
  };
}

(async () => {
  const candidates = [];
  for (const cat of categories) {
    process.stdout.write(`Сканирую: ${cat} ... `);
    try {
      const data = await fetchCategory(cat);
      const rawFile = path.join(RAW_DIR, `${slug(cat)}.json`);
      fs.writeFileSync(rawFile, JSON.stringify(data, null, 2));
      const ads = data.ads || data.results || data.organic_results || [];
      console.log(`${ads.length} объявлений -> ${path.relative(__dirname, rawFile)}`);
      for (const ad of ads) {
        candidates.push({ category: cat, ...normalizeAd(ad) });
      }
    } catch (e) {
      console.log(`ОШИБКА: ${e.message}`);
    }
    await sleep(1200);
  }

  // Дедупликация по page_name + title
  const seen = new Set();
  const deduped = candidates.filter((c) => {
    const key = `${(c.page_name || '').toLowerCase()}|${(c.title || '').toLowerCase()}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });

  const outFile = path.join(__dirname, 'data', 'candidates.json');
  fs.writeFileSync(outFile, JSON.stringify(deduped, null, 2));
  console.log(`\nИтого: ${candidates.length} объявлений, ${deduped.length} уникальных кандидатов -> data/candidates.json`);
})();
