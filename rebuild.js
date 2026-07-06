#!/usr/bin/env node
// Пересборка data/candidates-<cc>.json из всех raw-файлов (без API-запросов).
const fs = require('fs');
const path = require('path');
const cc = (process.argv[2] || 'us').toLowerCase();
const RAW = path.join('data', 'raw', cc);

const src = fs.readFileSync('scan.js', 'utf8');
const m = src.match(/const KEYWORDS = (\{[\s\S]*?\n\});/);
const KEYWORDS = eval('(' + m[1] + ')');
const kw2cat = {};
for (const c in KEYWORDS)
  for (const k of KEYWORDS[c]) kw2cat[k.toLowerCase().replace(/[^a-z0-9]+/g, '-')] = { cat: c, kw: k };

const norm = (ad) => {
  const s = ad.snapshot || {};
  return {
    ad_archive_id: ad.ad_archive_id,
    page_name: ad.page_name || s.page_name,
    start_date: ad.start_date,
    collation_count: ad.collation_count,
    title: s.title,
    body: (s.body && (s.body.text || s.body)) || '',
    link_url: s.link_url,
    cta_text: s.cta_text,
  };
};

const out = [];
for (const f of fs.readdirSync(RAW)) {
  const slug = f.replace(/\.json$/, '');
  const info = kw2cat[slug] || { cat: slug.replace(/-/g, ' '), kw: slug.replace(/-/g, ' ') };
  const data = JSON.parse(fs.readFileSync(path.join(RAW, f), 'utf8'));
  for (const ad of data.ads || []) out.push({ category: info.cat, keyword: info.kw, country: cc.toUpperCase(), ...norm(ad) });
}
const seen = new Set();
const ded = out.filter((c) => {
  const k = ((c.page_name || '') + '|' + (c.title || '') + '|' + String(c.body || '').slice(0, 80)).toLowerCase();
  if (seen.has(k)) return false;
  seen.add(k);
  return true;
});
fs.writeFileSync(`data/candidates-${cc}.json`, JSON.stringify(ded, null, 1));
console.log(`[${cc}] raw: ${fs.readdirSync(RAW).length} | объявлений: ${out.length} | уникальных: ${ded.length}`);
