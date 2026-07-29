import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Lang = 'pt' | 'it' | 'de' | 'en';

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'pt',
  setLang: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    const saved = localStorage.getItem('lang') as Lang;
    return saved === 'it' || saved === 'de' || saved === 'en' ? saved : 'pt';
  });

  const setLang = (newLang: Lang) => {
    setLangState(newLang);
    localStorage.setItem('lang', newLang);
  };

  useEffect(() => {
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : lang === 'it' ? 'it' : lang === 'de' ? 'de' : 'en';
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
