import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { useLanguage, useT } from '../context/LanguageContext';

const EXTERNAL_DONATION_URL: Record<'pt' | 'it' | 'de' | 'en', string> = {
  it: 'https://www.ffbetania.net/dona-ora/',
  en: 'https://www.ffbetania.net/en/donate-now/',
  de: 'https://www.ffbetania.net/de/jetzt-spenden/',
  pt: 'https://www.ffbetania.net/pt-br/doe-agora/',
};

export function DonaOraExternalPage() {
  const t = useT();
  const { lang } = useLanguage();
  const [iframeFailed, setIframeFailed] = useState(false);
  const externalUrl = EXTERNAL_DONATION_URL[lang];

  return (
    <div className="bg-white">
      <section className="py-10 md:py-14">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl text-[var(--deep-blue)] text-center mb-8">
            {t({ pt: 'Doar agora', it: 'Dona ora', de: 'Jetzt spenden', en: 'Donate now' })}
          </h1>

          {!iframeFailed ? (
            <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200">
              <iframe
                src={externalUrl}
                title={t({ pt: 'Doar agora', it: 'Dona ora', de: 'Jetzt spenden', en: 'Donate now' })}
                className="w-full h-[80vh] min-h-[600px]"
                onError={() => setIframeFailed(true)}
              />
            </div>
          ) : null}

          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">
              {t({
                pt: 'Se a página não for exibida corretamente, podes abri-la diretamente numa nova aba.',
                it: 'Se la pagina non viene visualizzata correttamente, puoi aprirla direttamente in una nuova scheda.',
                de: 'Falls die Seite nicht korrekt angezeigt wird, können Sie sie direkt in einem neuen Tab öffnen.',
                en: 'If the page does not display correctly, you can open it directly in a new tab.',
              })}
            </p>
            <a
              href={externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-br from-[#f5b942] via-[#f7c968] to-[#f5b942] text-white text-lg font-medium rounded-xl shadow-md hover:shadow-lg transition-all"
            >
              {t({ pt: 'Abrir em nova aba', it: 'Apri in una nuova scheda', de: 'In neuem Tab öffnen', en: 'Open in a new tab' })}
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
