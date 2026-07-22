import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { ArrowRight, X } from 'lucide-react';
import { useT } from '../context/LanguageContext';
import { entries } from './AvanzamentoLavoriPage';

const STORAGE_KEY = 'avanzamento-banner-dismissed-id';

export function AvanzamentoBanner() {
  const t = useT();
  const latest = entries[0];
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const dismissedId = sessionStorage.getItem(STORAGE_KEY);
    setVisible(dismissedId !== latest.id);
  }, [latest.id]);

  if (!visible) return null;

  const handleDismiss = () => {
    sessionStorage.setItem(STORAGE_KEY, latest.id);
    setVisible(false);
  };

  return (
    <div className="relative z-20 bg-[var(--warm-orange)] text-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-2.5 sm:py-3.5 flex items-start sm:items-center gap-2 sm:gap-4">
        <span className="relative flex-shrink-0 flex h-2.5 w-2.5 mt-1.5 sm:mt-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white" />
        </span>

        <p className="flex-1 min-w-0 text-sm sm:text-base leading-snug">
          <span className="font-extrabold">
            {t({ it: 'News costruzione scuola:', pt: 'Notícia obra da escola:', de: 'News Schulbau:' })}
          </span>
          <br className="sm:hidden" />
          <span className="hidden sm:inline">{' '}</span>
          <span className="font-medium">{t(latest.title)}</span>
        </p>

        <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0 mt-0.5 sm:mt-0">
          <Link
            to="/avanzamento-lavori"
            aria-label={t({ it: 'Scopri di più', pt: 'Saiba mais', de: 'Mehr erfahren' })}
            className="flex-shrink-0 flex items-center justify-center gap-1.5 w-8 h-8 sm:w-auto sm:h-auto text-xs sm:text-sm font-bold text-[var(--warm-orange)] bg-white rounded-full whitespace-nowrap shadow-sm hover:shadow-md hover:-translate-y-px transition-all sm:px-4 sm:py-1.5"
          >
            <span className="hidden sm:inline">{t({ it: 'Scopri di più', pt: 'Saiba mais', de: 'Mehr erfahren' })}</span>
            <ArrowRight className="w-4 h-4 sm:hidden" />
          </Link>

          <button
            onClick={handleDismiss}
            aria-label={t({ it: 'Chiudi', pt: 'Fechar', de: 'Schließen' })}
            className="flex-shrink-0 p-1 rounded-full hover:bg-white/20 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
