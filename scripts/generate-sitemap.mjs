// Regenerates public/sitemap.xml. Run manually with `node scripts/generate-sitemap.mjs`
// whenever a route is added/removed/renamed (routes.tsx and seoMeta.ts are the source of truth).
//
// Update SITE_URL here (and in src/app/data/seoMeta.ts) when the final domain goes live.
import { writeFileSync } from 'fs';

const SITE_URL = 'https://lucaminic.github.io/FFB-SALVADOR';

const pages = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/la-fundacao', priority: '0.8', changefreq: 'monthly' },
  { path: '/la-fraternita', priority: '0.7', changefreq: 'monthly' },
  { path: '/il-centro', priority: '0.9', changefreq: 'monthly' },
  { path: '/storia-del-centro', priority: '0.6', changefreq: 'monthly' },
  { path: '/asilo', priority: '0.9', changefreq: 'monthly' },
  { path: '/progetto-scuola', priority: '0.9', changefreq: 'monthly' },
  { path: '/dona-ora', priority: '0.9', changefreq: 'monthly' },
  { path: '/cosa-puoi-fare-tu', priority: '0.8', changefreq: 'monthly' },
  { path: '/contatti', priority: '0.7', changefreq: 'yearly' },
  { path: '/riconoscimenti-istituzionali', priority: '0.5', changefreq: 'monthly' },
  { path: '/iniziative', priority: '0.6', changefreq: 'monthly' },
  { path: '/aiutiamo-valentina', priority: '0.5', changefreq: 'monthly' },
  { path: '/trasparenza', priority: '0.6', changefreq: 'monthly' },
  { path: '/alimento-que-acolhe', priority: '0.6', changefreq: 'monthly' },
  { path: '/rota-solidaria', priority: '0.6', changefreq: 'monthly' },
  { path: '/jovens-de-betania', priority: '0.6', changefreq: 'monthly' },
  { path: '/noticias/eventos-especiais', priority: '0.5', changefreq: 'monthly' },
  { path: '/documentari-racconti', priority: '0.6', changefreq: 'monthly' },
  { path: '/progetti-pedagogici', priority: '0.6', changefreq: 'monthly' },
  { path: '/accoglienza-quotidiana', priority: '0.6', changefreq: 'monthly' },
  { path: '/educazione', priority: '0.6', changefreq: 'monthly' },
  { path: '/cura-e-nutrizione', priority: '0.6', changefreq: 'monthly' },
  { path: '/accompagnamento-famiglie', priority: '0.6', changefreq: 'monthly' },
  { path: '/documentari-racconti/intervista-centro', priority: '0.4', changefreq: 'yearly' },
  { path: '/documentari-racconti/visita-presidente', priority: '0.4', changefreq: 'yearly' },
  { path: '/documentari-racconti/dieci-anni-creche', priority: '0.4', changefreq: 'yearly' },
  { path: '/documentari-racconti/posa-prima-pietra', priority: '0.4', changefreq: 'yearly' },
  { path: '/documentari-racconti/auto-idea-tutti', priority: '0.4', changefreq: 'yearly' },
  { path: '/documentari-racconti/ricordi-narrazioni', priority: '0.4', changefreq: 'yearly' },
  { path: '/avanzamento-lavori', priority: '0.6', changefreq: 'weekly' },
  { path: '/sostegno-a-distanza', priority: '0.8', changefreq: 'monthly' },
  { path: '/atelier', priority: '0.5', changefreq: 'monthly' },
  { path: '/nossa-metodologia', priority: '0.6', changefreq: 'monthly' },
  { path: '/projetos-permanentes', priority: '0.5', changefreq: 'monthly' },
  { path: '/mostras-pedagogicas', priority: '0.5', changefreq: 'monthly' },
  { path: '/alimentacao-saudavel', priority: '0.6', changefreq: 'monthly' },
  { path: '/relatorios', priority: '0.7', changefreq: 'monthly' },
  { path: '/relatorios/alimentazione-sana', priority: '0.6', changefreq: 'monthly' },
  { path: '/relatorios/identita-e-cultura', priority: '0.6', changefreq: 'monthly' },
  { path: '/relatorios/mondo-in-movimento', priority: '0.6', changefreq: 'monthly' },
  { path: '/relatorios/piccoli-animali-e-natura', priority: '0.6', changefreq: 'monthly' },
  { path: '/noticias', priority: '0.7', changefreq: 'weekly' },
  { path: '/noticias/tonelada-de-amor', priority: '0.4', changefreq: 'yearly' },
];

const urlEntries = pages
  .map(
    (p) => `  <url>
    <loc>${SITE_URL}${p.path}</loc>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`
  )
  .join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>
`;

writeFileSync(new URL('../public/sitemap.xml', import.meta.url), xml);
console.log(`sitemap.xml written with ${pages.length} URLs`);
