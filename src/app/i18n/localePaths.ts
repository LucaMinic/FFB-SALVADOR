// Every language has its own URL so search engines can index all of them:
// Portuguese lives at the root (/noticias), the others under a prefix (/it/noticias).
// Page slugs are the same in every language.

export type Lang = 'pt' | 'it' | 'de' | 'en';

export const LANGS: Lang[] = ['pt', 'it', 'de', 'en'];
export const DEFAULT_LANG: Lang = 'pt';
export const PREFIXED_LANGS = LANGS.filter((l) => l !== DEFAULT_LANG);

export const HTML_LANG: Record<Lang, string> = { pt: 'pt-BR', it: 'it', de: 'de', en: 'en' };
export const OG_LOCALE: Record<Lang, string> = { pt: 'pt_BR', it: 'it_IT', de: 'de_DE', en: 'en_US' };

/** Language encoded in a router pathname (basename already removed). */
export function langFromPath(pathname: string): Lang {
  const first = pathname.split('/')[1];
  return (PREFIXED_LANGS as string[]).includes(first) ? (first as Lang) : DEFAULT_LANG;
}

/** Pathname without the language prefix: '/it/noticias' -> '/noticias', '/it' -> '/'. */
export function stripLang(pathname: string): string {
  const lang = langFromPath(pathname);
  if (lang === DEFAULT_LANG) return pathname || '/';
  const rest = pathname.slice(lang.length + 1);
  return rest === '' ? '/' : rest;
}

/** Adds the language prefix to an app-absolute path: ('/noticias', 'it') -> '/it/noticias'. */
export function localizePath(path: string, lang: Lang): string {
  if (!path.startsWith('/')) return path;
  const base = stripLang(path);
  if (lang === DEFAULT_LANG) return base;
  return base === '/' ? `/${lang}` : `/${lang}${base}`;
}
