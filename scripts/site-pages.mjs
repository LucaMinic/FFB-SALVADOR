// Shared by generate-sitemap.mjs and prerender.mjs.
// Keep `pages` in sync with src/app/routes.tsx and LANGS with src/app/i18n/localePaths.ts.
import { readFileSync } from 'fs';

// The site URL lives in .env (VITE_SITE_URL) so the app, index.html and these scripts share it.
const env = readFileSync(new URL('../.env', import.meta.url), 'utf8');
export const SITE_URL = env.match(/^VITE_SITE_URL=(.*)$/m)[1].trim().replace(/\/$/, '');

export const pages = [
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
  { path: '/progetti-pedagogici', priority: '0.6', changefreq: 'monthly' },
  { path: '/accoglienza-quotidiana', priority: '0.6', changefreq: 'monthly' },
  { path: '/educazione', priority: '0.6', changefreq: 'monthly' },
  { path: '/cura-e-nutrizione', priority: '0.6', changefreq: 'monthly' },
  { path: '/accompagnamento-famiglie', priority: '0.6', changefreq: 'monthly' },
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
  { path: '/noticias/intervista-centro', priority: '0.4', changefreq: 'yearly' },
  { path: '/noticias/visita-presidente', priority: '0.4', changefreq: 'yearly' },
  { path: '/noticias/dieci-anni-creche', priority: '0.4', changefreq: 'yearly' },
  { path: '/noticias/posa-prima-pietra', priority: '0.4', changefreq: 'yearly' },
];

// Every page exists in 4 languages: pt at the root, the others under /it, /de, /en
// (keep in sync with src/app/i18n/localePaths.ts). Each URL lists all its
// translations as hreflang alternates, plus x-default pointing at pt.
export const LANGS = [
  { code: 'pt', hreflang: 'pt-BR', prefix: '' },
  { code: 'it', hreflang: 'it', prefix: '/it' },
  { code: 'de', hreflang: 'de', prefix: '/de' },
  { code: 'en', hreflang: 'en', prefix: '/en' },
];
