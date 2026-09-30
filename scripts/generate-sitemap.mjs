// Regenerates public/sitemap.xml. Run manually with `node scripts/generate-sitemap.mjs`
// whenever a route is added/removed/renamed (routes.tsx and seoMeta.ts are the source of truth).
//
// The site URL comes from VITE_SITE_URL in .env; the page list from site-pages.mjs.
import { writeFileSync } from 'fs';
import { SITE_URL, pages, LANGS } from './site-pages.mjs';

const urlFor = (prefix, path) => `${SITE_URL}${path === '/' ? prefix || '/' : prefix + path}`;

const urlEntries = pages
  .flatMap((p) => {
    const alternates = [
      ...LANGS.map((l) => `    <xhtml:link rel="alternate" hreflang="${l.hreflang}" href="${urlFor(l.prefix, p.path)}"/>`),
      `    <xhtml:link rel="alternate" hreflang="x-default" href="${urlFor('', p.path)}"/>`,
    ].join('\n');
    return LANGS.map(
      (l) => `  <url>
    <loc>${urlFor(l.prefix, p.path)}</loc>
${alternates}
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`
    );
  })
  .join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urlEntries}
</urlset>
`;

writeFileSync(new URL('../public/sitemap.xml', import.meta.url), xml);
console.log(`sitemap.xml written with ${pages.length * LANGS.length} URLs (${pages.length} pages x ${LANGS.length} languages)`);
