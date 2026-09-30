// Pre-renders every page in every language to static HTML after `vite build`,
// so search engines and link previews (WhatsApp, Facebook...) get the real title,
// description, hreflang tags and content without running JavaScript.
//
// Output: dist/noticias.html, dist/it/noticias.html, dist/it.html, ... (pt home = dist/index.html).
// The server maps /it/noticias -> it/noticias.html (see public/.htaccess).
// Needs Google Chrome or Microsoft Edge installed on the machine running the build.
import { preview } from 'vite';
import { chromium } from 'playwright-core';
import { mkdirSync, writeFileSync, cpSync, rmSync, mkdtempSync } from 'fs';
import { tmpdir } from 'os';
import { dirname, join } from 'path';
import { pages, LANGS } from './site-pages.mjs';

const CONCURRENCY = 8;
const distDir = join(process.cwd(), 'dist');

async function launchBrowser() {
  for (const channel of ['chrome', 'msedge', undefined]) {
    try {
      return await chromium.launch({ channel });
    } catch {}
  }
  throw new Error('Pre-rendering needs Google Chrome or Microsoft Edge installed.');
}

// '/' + it -> 'it.html', '/noticias' + it -> 'it/noticias.html', '/' + pt -> 'index.html'
function outputFile(prefix, path) {
  const full = `${prefix}${path === '/' ? '' : path}`;
  return full === '' ? 'index.html' : `${full.slice(1)}.html`;
}

const server = await preview({ preview: { port: 4174, strictPort: true, open: false }, logLevel: 'silent' });
const base = server.config.base.replace(/\/$/, '');
const origin = `http://localhost:${server.config.preview.port}${base}`;

// Rendered files go to a temp dir first, so the preview server keeps serving
// the plain app shell while we crawl.
const outDir = mkdtempSync(join(tmpdir(), 'prerender-'));
const browser = await launchBrowser();
const context = await browser.newContext({ viewport: { width: 1280, height: 900 } });
// Only the site's own code is needed to produce the HTML: photos, videos and external
// content (YouTube embeds, fonts, donation iframe...) are skipped to keep the crawl fast.
await context.route('**/*', (route) => {
  const request = route.request();
  const external = !request.url().startsWith('http://localhost:');
  return external || ['image', 'media'].includes(request.resourceType()) ? route.abort() : route.continue();
});

const jobs = pages.flatMap((p) => LANGS.map((l) => ({ path: p.path, prefix: l.prefix })));
const failures = [];
let done = 0;

// With several pages in parallel one can occasionally time out: retry before giving up.
async function render(job) {
  const url = `${origin}${job.prefix}${job.path === '/' ? (job.prefix ? '' : '/') : job.path}`;
  for (let attempt = 1; ; attempt++) {
    try {
      await renderOnce(url, job);
      break;
    } catch (e) {
      if (attempt < 3) continue;
      failures.push(`${url}: ${e.message}`);
      break;
    }
  }
  done++;
  if (done % 20 === 0 || done === jobs.length) console.log(`prerender: ${done}/${jobs.length}`);
}

async function renderOnce(url, { path, prefix }) {
  const page = await context.newPage();
  const errors = [];
  page.on('pageerror', (e) => errors.push(e.message));
  try {
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60000 });
    await page.waitForSelector('main h1', { state: 'attached', timeout: 30000 });
    await page.waitForTimeout(1000);
    if (errors.length) throw new Error(errors.join('; '));
    const html = '<!DOCTYPE html>\n' + (await page.evaluate(() => {
      // Sections below the fold are still in their "before reveal" state
      // (opacity 0 + offset): show them in the static HTML.
      for (const el of document.querySelectorAll('#root [style*="opacity: 0;"][style*="transform"]')) {
        el.style.removeProperty('opacity');
        el.style.removeProperty('transform');
      }
      return document.documentElement.outerHTML;
    }));
    const file = join(outDir, outputFile(prefix, path));
    mkdirSync(dirname(file), { recursive: true });
    writeFileSync(file, html);
  } finally {
    await page.close();
  }
}

try {
  const queue = [...jobs];
  await Promise.all(
    Array.from({ length: CONCURRENCY }, async () => {
      while (queue.length) await render(queue.shift());
    })
  );
} finally {
  await browser.close();
  await new Promise((resolve) => server.httpServer.close(resolve));
}

if (failures.length) {
  rmSync(outDir, { recursive: true, force: true });
  console.error(`prerender failed for ${failures.length} page(s):\n` + failures.join('\n'));
  process.exit(1);
}

cpSync(outDir, distDir, { recursive: true });
rmSync(outDir, { recursive: true, force: true });
console.log(`prerender: ${jobs.length} pages written to dist/`);
