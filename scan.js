#!/usr/bin/env node
/**
 * Ad-Scout: сканер Meta Ad Library через SearchAPI.io.
 * Использование:
 *   node scan.js [--country=US] [--keywords=full|basic] ["категория" ...]
 * Без категорий — все. --country: US (дефолт), GB, AU.
 * Требует SEARCHAPI_KEY (окружение или .env).
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

// Расширенные ключи: категория -> [ключевые слова]
const KEYWORDS = {
  'pet products': [
    'pet hair remover for couch', 'dog paw cleaner', 'cat anxiety relief',
    'pet odor eliminator', 'dog grooming brush', 'pet water fountain',
  ],
  'kitchen gadgets': [
    'vegetable chopper', 'kitchen sink organizer', 'meal prep containers',
    'oil sprayer for cooking', 'electric spice grinder', 'kitchen drain hair catcher',
  ],
  'baby safety': [
    'baby corner protector', 'cabinet locks child safety', 'anti tip furniture strap',
    'baby stair gate', 'outlet covers baby proofing', 'baby car seat mirror',
  ],
  'posture corrector': [
    'posture corrector', 'back pain relief device', 'neck stretcher',
    'lumbar support pillow', 'posture trainer', 'shoulder brace',
  ],
  'skincare tools': [
    'ice roller for face', 'gua sha tool', 'red light therapy wand',
    'scalp massager', 'dermaplaning tool', 'facial steamer',
  ],
  'travel accessories': [
    'travel jewelry organizer', 'packing cubes', 'airplane footrest',
    'travel bottle containers', 'luggage cup holder', 'digital luggage scale',
  ],
  'desk accessories': [
    'desk cable organizer', 'laptop stand adjustable', 'under desk footrest',
    'ergonomic wrist rest', 'desk pad leather', 'monitor light bar',
  ],
  'home gym': [
    'resistance bands set', 'ab roller wheel', 'pull up bar doorway',
    'massage gun deep tissue', 'grip strength trainer', 'jump rope weighted',
  ],
  'gardening tools': [
    'garden kneeler seat', 'stand up weeding tool', 'plant watering globes',
    'expandable garden hose', 'electric pruning shears', 'herb garden kit indoor',
  ],
  'personalized gifts': [
    'personalized pet necklace', 'custom star map', 'personalized cutting board',
    'custom pet portrait', 'engraved bracelet for mom', 'personalized night light',
  ],
  'everyday carry': [
    'minimalist wallet', 'keychain multi tool', 'edc flashlight',
    'key organizer', 'slim card holder', 'titanium pen',
  ],
};

const argv = process.argv.slice(2);
const flags = Object.fromEntries(
  argv.filter((a) => a.startsWith('--')).map((a) => a.slice(2).split('='))
);
const catArgs = argv.filter((a) => !a.startsWith('--'));
const COUNTRY = (flags.country || 'US').toUpperCase();
const categories = catArgs.length ? catArgs : Object.keys(KEYWORDS);
// --kw="key1;key2" — сканировать только эти ключи (для мультирыночных проверок)
const kwFilter = flags.kw ? new Set(flags.kw.split(';').map((s) => s.trim())) : null;

const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-');
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const RAW_DIR = path.join(__dirname, 'data', 'raw', COUNTRY.toLowerCase());
fs.mkdirSync(RAW_DIR, { recursive: true });

async function fetchKeyword(q) {
  const url = new URL('https://www.searchapi.io/api/v1/search');
  url.searchParams.set('engine', 'meta_ad_library');
  url.searchParams.set('ad_category', 'all');
  url.searchParams.set('q', q);
  url.searchParams.set('country', COUNTRY);
  url.searchParams.set('active_status', 'active');
  url.searchParams.set('media_type', 'video');
  url.searchParams.set('api_key', API_KEY);
  const res = await fetch(url);
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`HTTP ${res.status} для "${q}": ${body.slice(0, 200)}`);
  }
  return res.json();
}

function normalizeAd(ad) {
  const snap = ad.snapshot || {};
  return {
    ad_archive_id: ad.ad_archive_id || ad.id,
    page_name: ad.page_name || snap.page_name,
    page_like_count: snap.page_like_count,
    start_date: ad.start_date || ad.ad_delivery_start_time,
    collation_count: ad.collation_count,
    title: snap.title,
    body: (snap.body && (snap.body.text || snap.body)) || ad.ad_creative_body,
    link_url: snap.link_url,
    cta_text: snap.cta_text,
  };
}

(async () => {
  const candidates = [];
  let requests = 0;
  for (const cat of categories) {
    const kws = (KEYWORDS[cat] || [cat]).filter((k) => !kwFilter || kwFilter.has(k));
    for (const kw of kws) {
      const rawFile = path.join(RAW_DIR, `${slug(kw)}.json`);
      if (fs.existsSync(rawFile)) {
        // уже сканировали (докачка после обрыва)
        const data = JSON.parse(fs.readFileSync(rawFile, 'utf8'));
        for (const ad of data.ads || []) candidates.push({ category: cat, keyword: kw, country: COUNTRY, ...normalizeAd(ad) });
        continue;
      }
      process.stdout.write(`[${COUNTRY}] ${cat} :: ${kw} ... `);
      try {
        const data = await fetchKeyword(kw);
        requests++;
        fs.writeFileSync(rawFile, JSON.stringify(data, null, 2));
        const ads = data.ads || [];
        console.log(`${ads.length}`);
        for (const ad of ads) candidates.push({ category: cat, keyword: kw, country: COUNTRY, ...normalizeAd(ad) });
      } catch (e) {
        console.log(`ОШИБКА: ${e.message}`);
      }
      await sleep(1100);
    }
  }

  // Дедупликация по page_name + title + body-префиксу
  const seen = new Set();
  const deduped = candidates.filter((c) => {
    const key = `${(c.page_name || '').toLowerCase()}|${(c.title || '').toLowerCase()}|${String(c.body || '').slice(0, 80).toLowerCase()}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });

  const outFile = path.join(__dirname, 'data', `candidates-${COUNTRY.toLowerCase()}.json`);
  fs.writeFileSync(outFile, JSON.stringify(deduped, null, 2));
  console.log(`\n[${COUNTRY}] API-запросов: ${requests}; объявлений: ${candidates.length}; уникальных: ${deduped.length} -> ${path.relative(__dirname, outFile)}`);
})();
