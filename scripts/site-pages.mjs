// Shared by generate-sitemap.mjs and prerender.mjs.
// Keep `pages` in sync with src/app/routes.tsx and LANGS with src/app/i18n/localePaths.ts.
import { readFileSync } from 'fs';

// The site URL lives in .env (VITE_SITE_URL) so the app, index.html and these scripts share it.
const env = readFileSync(new URL('../.env', import.meta.url), 'utf8');
export const SITE_URL = env.match(/^VITE_SITE_URL=(.*)$/m)[1].trim().replace(/\/$/, '');

export const pages = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/a-fundacao', priority: '0.8', changefreq: 'monthly' },
  { path: '/a-fraternidade', priority: '0.7', changefreq: 'monthly' },
  { path: '/o-centro', priority: '0.9', changefreq: 'monthly' },
  { path: '/historia-do-centro', priority: '0.6', changefreq: 'monthly' },
  { path: '/creche', priority: '0.9', changefreq: 'monthly' },
  { path: '/projeto-escola', priority: '0.9', changefreq: 'monthly' },
  { path: '/doe-agora', priority: '0.9', changefreq: 'monthly' },
  { path: '/como-ajudar', priority: '0.8', changefreq: 'monthly' },
  { path: '/contatos', priority: '0.7', changefreq: 'yearly' },
  { path: '/reconhecimentos-institucionais', priority: '0.5', changefreq: 'monthly' },
  { path: '/iniciativas', priority: '0.6', changefreq: 'monthly' },
  { path: '/ajudamos-valentina', priority: '0.5', changefreq: 'monthly' },
  { path: '/transparencia', priority: '0.6', changefreq: 'monthly' },
  { path: '/alimento-que-acolhe', priority: '0.6', changefreq: 'monthly' },
  { path: '/rota-solidaria', priority: '0.6', changefreq: 'monthly' },
  { path: '/jovens-de-betania', priority: '0.6', changefreq: 'monthly' },
  { path: '/noticias/eventos-especiais', priority: '0.5', changefreq: 'monthly' },
  { path: '/laboratorios', priority: '0.6', changefreq: 'monthly' },
  { path: '/acolhimento-diario', priority: '0.6', changefreq: 'monthly' },
  { path: '/educacao', priority: '0.6', changefreq: 'monthly' },
  { path: '/cuidado-e-nutricao', priority: '0.6', changefreq: 'monthly' },
  { path: '/acompanhamento-das-familias', priority: '0.6', changefreq: 'monthly' },
  { path: '/laboratorios/auto-uma-ideia-de-todos', priority: '0.4', changefreq: 'yearly' },
  { path: '/laboratorios/memorias-e-narrativas-africanas', priority: '0.4', changefreq: 'yearly' },
  { path: '/andamento-das-obras', priority: '0.6', changefreq: 'weekly' },
  { path: '/apoio-a-distancia', priority: '0.8', changefreq: 'monthly' },
  { path: '/atelie', priority: '0.5', changefreq: 'monthly' },
  { path: '/nossa-metodologia', priority: '0.6', changefreq: 'monthly' },
  { path: '/projetos-permanentes', priority: '0.5', changefreq: 'monthly' },
  { path: '/mostras-pedagogicas', priority: '0.5', changefreq: 'monthly' },
  { path: '/alimentacao-saudavel', priority: '0.6', changefreq: 'monthly' },
  { path: '/relatorios', priority: '0.7', changefreq: 'monthly' },
  { path: '/relatorios/alimentacao-saudavel', priority: '0.6', changefreq: 'monthly' },
  { path: '/relatorios/identidade-e-cultura', priority: '0.6', changefreq: 'monthly' },
  { path: '/relatorios/mundo-em-movimento', priority: '0.6', changefreq: 'monthly' },
  { path: '/relatorios/pequenos-animais-e-natureza', priority: '0.6', changefreq: 'monthly' },
  { path: '/noticias', priority: '0.7', changefreq: 'weekly' },
  { path: '/noticias/tonelada-de-amor', priority: '0.4', changefreq: 'yearly' },
  { path: '/noticias/entrevista-ao-centro', priority: '0.4', changefreq: 'yearly' },
  { path: '/noticias/visita-do-presidente', priority: '0.4', changefreq: 'yearly' },
  { path: '/noticias/dez-anos-da-creche', priority: '0.4', changefreq: 'yearly' },
  { path: '/noticias/pedra-fundamental', priority: '0.4', changefreq: 'yearly' },
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
