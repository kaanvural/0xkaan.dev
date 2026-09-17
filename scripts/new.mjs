#!/usr/bin/env node
// Scaffold a new content entry from a fixed template so every writeup / note /
// project comes out in the same standard.
//
//   npm run new -- writeup htb-keeper "HTB: Keeper"
//   npm run new -- note   osint-workflow "Building my OSINT workflow"
//   npm run new -- project subenum "subenum.sh"
//
// Creates src/content/<type>s/<slug>.md from templates/<type>.md with today's
// date and (optionally) the title filled in. It starts as draft: true.

import { readFile, writeFile, access } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join, resolve } from 'node:path';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');

const TYPES = {
  writeup: 'writeups',
  note: 'notes',
  project: 'projects',
};

function fail(msg) {
  console.error(`\n  ✗ ${msg}\n`);
  console.error('  usage: npm run new -- <writeup|note|project> <slug> ["Title"]');
  console.error('  e.g.:  npm run new -- writeup htb-keeper "HTB: Keeper"\n');
  process.exit(1);
}

const [, , typeArg, slugArg, ...titleParts] = process.argv;

if (!typeArg || !TYPES[typeArg]) fail(`unknown type "${typeArg ?? ''}" — pick writeup, note or project`);
if (!slugArg) fail('missing <slug>');

const slug = slugArg
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/^-+|-+$/g, '');
if (!slug) fail(`"${slugArg}" is not a usable slug`);

const dir = TYPES[typeArg];
const target = join(ROOT, 'src', 'content', dir, `${slug}.md`);
const templatePath = join(ROOT, 'templates', `${typeArg}.md`);

const today = new Date().toISOString().slice(0, 10);
const title = titleParts.join(' ').trim();

try {
  await access(target);
  fail(`src/content/${dir}/${slug}.md already exists — pick another slug`);
} catch (e) {
  if (e?.message?.includes('already exists')) process.exit(1);
}

let tpl = await readFile(templatePath, 'utf8');
// stamp today's date
tpl = tpl.replace(/^date:.*$/m, `date: ${today}`);
// fill the title if one was passed
if (title) {
  const safe = title.replace(/"/g, '\\"');
  tpl = tpl.replace(/^title:.*$/m, `title: "${safe}"`);
}

await writeFile(target, tpl, 'utf8');

console.log(`\n  ✓ created src/content/${dir}/${slug}.md`);
console.log(`    → fill it in, set draft: false when ready, then commit + push.\n`);
