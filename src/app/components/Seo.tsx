import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { useLanguage } from '../context/LanguageContext';
import { seoMeta, defaultMeta, SITE_URL, SITE_NAME } from '../data/seoMeta';
import { relatorioAreas } from '../data/relatoriosData';
import { LANGS, DEFAULT_LANG, OG_LOCALE, localizePath, stripLang } from '../i18n/localePaths';

function setMetaTag(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setLinkTag(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

function resolveMeta(pathname: string) {
  if (seoMeta[pathname]) return seoMeta[pathname];

  const areaMatch = pathname.match(/^\/relatorios\/([^/]+)$/);
  if (areaMatch) {
    const area = relatorioAreas.find((a) => a.slug === areaMatch[1]);
    if (area) {
      return {
        title: {
          pt: `${area.name.pt} — Relatórios — ${SITE_NAME}`,
          it: `${area.name.it} — Relazioni — ${SITE_NAME}`,
          de: `${area.name.de} — Berichte — ${SITE_NAME}`,
          en: `${area.name.en} — Reports — ${SITE_NAME}`,
        },
        description: area.tagline,
      };
    }
  }

  return defaultMeta;
}

// One <link rel="alternate" hreflang="..."> per language plus x-default, so search
// engines know the four URLs are translations of the same page.
function setAlternateLinks(basePath: string) {
  document.head.querySelectorAll('link[rel="alternate"][hreflang]').forEach((el) => el.remove());
  const entries: [string, string][] = [
    ...LANGS.map((l): [string, string] => [l === 'pt' ? 'pt-BR' : l, absoluteUrl(localizePath(basePath, l))]),
    ['x-default', absoluteUrl(localizePath(basePath, DEFAULT_LANG))],
  ];
  for (const [hreflang, href] of entries) {
    const el = document.createElement('link');
    el.setAttribute('rel', 'alternate');
    el.setAttribute('hreflang', hreflang);
    el.setAttribute('href', href);
    document.head.appendChild(el);
  }
}

function absoluteUrl(path: string) {
  return `${SITE_URL}${path === '/' ? '/' : path}`;
}

export function Seo() {
  const { pathname } = useLocation();
  const { lang } = useLanguage();

  useEffect(() => {
    const basePath = stripLang(pathname);
    const meta = resolveMeta(basePath);
    const title = meta.title[lang];
    const description = meta.description[lang];
    const url = absoluteUrl(localizePath(basePath, lang));

    document.title = title;
    setMetaTag('name', 'description', description);
    setLinkTag('canonical', url);
    setAlternateLinks(basePath);

    setMetaTag('property', 'og:type', 'website');
    setMetaTag('property', 'og:site_name', SITE_NAME);
    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:url', url);
    setMetaTag('property', 'og:locale', OG_LOCALE[lang]);

    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', title);
    setMetaTag('name', 'twitter:description', description);
  }, [pathname, lang]);

  return null;
}
