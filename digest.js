#!/usr/bin/env node
/**
 * Компактный дайджест кандидатов для анализа.
 * node digest.js <candidates-file> [категория ...]
 * Показывает по каждому ключу: насыщенность и объявления 45+ дней (или самые старые).
 */
const path = require('path');
const file = process.argv[2] || 'data/candidates-us.json';
const cats = process.argv.slice(3);
const c = require(path.resolve(file));
const CUT = Date.now() - 45 * 864e5;
const byKw = {};
for (const x of c) {
  if (cats.length && !cats.includes(x.category)) continue;
  (byKw[x.keyword] = byKw[x.keyword] || []).push(x);
}
for (const kw of Object.keys(byKw)) {
  const ads = byKw[kw];
  const pages = new Set(ads.map((a) => a.page_name));
  const old = ads.filter((a) => new Date(a.start_date).getTime() <= CUT);
  const oldPages = new Set(old.map((a) => a.page_name));
  console.log(`=== ${kw} | ads:${ads.length} pages:${pages.size} | 45d+: ${old.length}/${oldPages.size}p`);
  old.sort((a, b) => new Date(a.start_date) - new Date(b.start_date));
  for (const a of old.slice(0, 7)) {
    const txt = ((a.title || '') + ' :: ' + String(a.body || '')).replace(/\s+/g, ' ').slice(0, 110);
    console.log(`  ${(a.start_date || '').slice(0, 10)} ${(a.page_name || '').slice(0, 26)} v${a.collation_count || 1} | ${txt}`);
    if (a.link_url) console.log(`    ${a.link_url.slice(0, 95)}`);
  }
}
