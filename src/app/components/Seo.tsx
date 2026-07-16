import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { useLanguage } from '../context/LanguageContext';
import { seoMeta, defaultMeta, SITE_URL, SITE_NAME } from '../data/seoMeta';
import { relatorioAreas } from '../data/relatoriosData';

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
        },
        description: area.tagline,
      };
    }
  }

  return defaultMeta;
}

export function Seo() {
  const { pathname } = useLocation();
  const { lang } = useLanguage();

  useEffect(() => {
    const meta = resolveMeta(pathname);
    const title = meta.title[lang];
    const description = meta.description[lang];
    const canonicalPath = pathname === '/' ? '' : pathname;
    const url = `${SITE_URL}${canonicalPath}`;
    const locale = lang === 'pt' ? 'pt_BR' : lang === 'it' ? 'it_IT' : 'de_DE';

    document.title = title;
    setMetaTag('name', 'description', description);
    setLinkTag('canonical', url);

    setMetaTag('property', 'og:type', 'website');
    setMetaTag('property', 'og:site_name', SITE_NAME);
    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:url', url);
    setMetaTag('property', 'og:locale', locale);

    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', title);
    setMetaTag('name', 'twitter:description', description);
  }, [pathname, lang]);

  return null;
}
