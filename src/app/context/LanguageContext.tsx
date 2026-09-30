import { createContext, useContext, useEffect, ReactNode } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { HTML_LANG, langFromPath, localizePath, type Lang } from '../i18n/localePaths';

export type { Lang };

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'pt',
  setLang: () => {},
});

// The language comes from the URL (/it/..., /de/..., /en/..., root = pt);
// switching language navigates to the same page under the new prefix.
export function LanguageProvider({ children }: { children: ReactNode }) {
  const location = useLocation();
  const navigate = useNavigate();
  const lang = langFromPath(location.pathname);

  const setLang = (newLang: Lang) => {
    if (newLang === lang) return;
    try {
      localStorage.setItem('lang', newLang);
    } catch {}
    navigate({ pathname: localizePath(location.pathname, newLang), search: location.search, hash: location.hash });
  };

  // A visitor who previously picked another language and lands on a Portuguese URL
  // is sent to their language once. Only an explicit earlier choice triggers this
  // (never the browser language), so crawlers always see every version as-is.
  useEffect(() => {
    let saved: string | null = null;
    try {
      saved = localStorage.getItem('lang');
    } catch {}
    if (lang === 'pt' && (saved === 'it' || saved === 'de' || saved === 'en')) {
      navigate({ pathname: localizePath(location.pathname, saved), search: location.search, hash: location.hash }, { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    document.documentElement.lang = HTML_LANG[lang];
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

export function useT() {
  const { lang } = useLanguage();
  return (obj: { pt: string; it: string; de: string; en: string }) => obj[lang];
}
