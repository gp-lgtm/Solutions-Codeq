// Builds dist/ for Cloudflare Pages: only what the site serves, none of the repo docs
// (CLAUDE.md, README.md, design-system previews/ui kits). Run: node build.mjs
import { cpSync, existsSync, readdirSync, rmSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const OUT = 'dist';
const DS  = 'design-system';

rmSync(OUT, { recursive: true, force: true });
mkdirSync(OUT);

// Every page and its CSS/JS in the repo root, plus Cloudflare config files.
// .mjs is not matched, so this script itself stays out.
const rootFiles = readdirSync('.').filter(f => /\.(html|css|js)$/.test(f) || f === '_headers' || f === '_redirects');
for (const f of rootFiles) cpSync(f, join(OUT, f));

// The design-system parts the pages load: tokens + images/video.
for (const p of [`${DS}/colors_and_type.css`, `${DS}/assets`]) {
  if (!existsSync(p)) throw new Error(`Missing ${p}`);
  cpSync(p, join(OUT, p), { recursive: true });
}

console.log(`dist/ ready: ${rootFiles.join(', ')}, ${DS}/colors_and_type.css, ${DS}/assets/`);
