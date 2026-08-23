import { useState } from 'react';
import { ExternalLink, Copy, Check } from 'lucide-react';
import { useLanguage, useT } from '../context/LanguageContext';
import flagBrasil from '../../imports/brasil.png';
import flagItalia from '../../imports/italia.png';
import flagEu from '../../imports/eu.svg';
import qrPix from '../../imports/qr-pix.png.jpeg';

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
  const [copiedPix, setCopiedPix] = useState(false);
  const externalUrl = EXTERNAL_DONATION_URL[lang];

  const copyToClipboard = (text: string, setCopied: (val: boolean) => void) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white">
      <section className="py-10 md:py-14">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl text-[var(--deep-blue)] text-center mb-4">
            {t({ pt: 'Doar agora', it: 'Dona ora', de: 'Jetzt spenden', en: 'Donate now' })}
          </h1>
          <p className="text-lg md:text-xl text-gray-700 text-center mb-2 leading-relaxed">
            {t({
              pt: 'Juntos, com a ajuda de Deus, podemos fazer muito para quem precisa.',
              it: "Insieme, con l'aiuto di Dio, possiamo fare molto per chi ha bisogno.",
              de: 'Gemeinsam, mit Gottes Hilfe, können wir viel für Bedürftige tun.',
              en: "Together, with God's help, we can do much for those in need.",
            })}
          </p>
          <p className="text-base text-gray-500 text-center mb-8">
            {t({
              pt: 'Escolhe como doar de acordo com o país em que te encontras.',
              it: 'Scegli come donare in base al paese in cui ti trovi.',
              de: 'Wählen Sie, wie Sie je nach Ihrem Land spenden möchten.',
              en: 'Choose how to donate depending on the country you are in.',
            })}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
            <a
              href="#doni-brasile"
              className="flex flex-col items-center justify-center text-center gap-3 px-8 py-8 h-full bg-[var(--soft-green)] text-white text-lg rounded-2xl shadow-lg hover:shadow-xl hover:brightness-90 transition-all"
            >
              <img loading="lazy" src={flagBrasil} alt="Brasil" className="w-12 h-auto rounded shadow-sm flex-shrink-0" />
              <span>{t({ pt: 'Se você doa do Brasil — clique aqui', it: 'Se doni dal Brasile — clicca qui', de: 'Wenn Sie aus Brasilien spenden — hier klicken', en: 'If you are donating from Brazil — click here' })}</span>
            </a>
            <a
              href="#doni-italia"
              className="flex flex-col items-center justify-center text-center gap-3 px-8 py-8 h-full bg-[var(--deep-blue)] text-white text-lg rounded-2xl shadow-lg hover:shadow-xl hover:bg-blue-800 transition-all"
            >
              <span className="flex items-center gap-1.5 flex-shrink-0">
                <img loading="lazy" src={flagItalia} alt="Italia" className="w-12 h-auto rounded shadow-sm" />
                <img loading="lazy" src={flagEu} alt="Unione Europea" className="w-12 h-auto rounded shadow-sm" />
              </span>
              <span>{t({ pt: 'Se você doa da Itália ou de um país da União Europeia — clique aqui', it: "Se doni dall'Italia o da un paese dell'Unione Europea — clicca qui", de: 'Wenn Sie aus Italien oder einem Land der Europäischen Union spenden — hier klicken', en: 'If you are donating from Italy or a European Union country — click here' })}</span>
            </a>
          </div>

          <div className="space-y-16 mb-16">

            {/* Se doni dal Brasile */}
            <div id="doni-brasile" className="border-l-4 border-[var(--soft-green)] pl-6 scroll-mt-32">
              <h2 className="text-xl md:text-2xl text-[var(--deep-blue)] mb-4 flex items-center gap-3">
                <img loading="lazy" src={flagBrasil} alt="Brasil" className="w-9 h-auto rounded shadow-sm flex-shrink-0" />
                {t({ pt: 'Se você doa do Brasil', it: 'Se doni dal Brasile', de: 'Wenn Sie aus Brasilien spenden', en: 'If you are donating from Brazil' })}
              </h2>
              <div className="space-y-4">
                {/* PIX */}
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                  <p className="text-sm text-gray-600 mb-2 font-semibold uppercase tracking-wide">PIX</p>
                  <div className="flex items-center gap-3">
                    <code className="flex-1 text-base md:text-lg font-mono text-[var(--deep-blue)] break-all">
                      21610717/0001-25 (CNPJ)
                    </code>
                    <button
                      onClick={() => copyToClipboard('21610717/0001-25', setCopiedPix)}
                      className="flex-shrink-0 p-3 bg-[var(--soft-green)] text-white rounded-lg hover:opacity-90 transition-all"
                      aria-label={t({ pt: 'Copiar chave PIX', it: 'Copia chiave PIX', de: 'PIX-Schlüssel kopieren', en: 'Copy PIX key' })}
                    >
                      {copiedPix ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                    </button>
                  </div>
                  <p className="text-sm text-gray-500 mt-3">Fundação Betânia Onlus</p>
                  <div className="mt-4 flex justify-center">
                    <img loading="lazy" src={qrPix} alt="QR Code PIX" className="w-40 h-40 object-contain rounded-lg border border-gray-200 p-2 bg-white" />
                  </div>
                </div>
                {/* Dados bancários */}
                <div className="bg-[var(--soft-green)]/8 p-6 rounded-xl border border-[var(--soft-green)]/30">
                  <p className="text-sm text-gray-600 mb-3 font-semibold uppercase tracking-wide">
                    {t({ pt: 'Dados bancários', it: 'Dati bancari', de: 'Bankverbindung', en: 'Bank details' })}
                  </p>
                  <div className="space-y-1 text-[var(--deep-blue)]">
                    <p className="font-bold text-base">ITAÚ</p>
                    <p className="text-sm text-gray-700">{t({ pt: 'Agência', it: 'Agenzia', de: 'Filiale', en: 'Branch' })}: <span className="font-mono font-semibold">7421</span></p>
                    <p className="text-sm text-gray-700">C/C: <span className="font-mono font-semibold">30014-1</span></p>
                    <p className="text-sm text-gray-700 mt-2">Fundação Betânia ONLUS</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Se doni dall'Italia o UE */}
            <div id="doni-italia" className="border-l-4 border-[var(--deep-blue)] pl-6 scroll-mt-32">
              <h2 className="text-xl md:text-2xl text-[var(--deep-blue)] mb-4 flex items-center gap-3 flex-wrap">
                <span className="flex items-center gap-1.5 flex-shrink-0">
                  <img loading="lazy" src={flagItalia} alt="Italia" className="w-9 h-auto rounded shadow-sm" />
                  <img loading="lazy" src={flagEu} alt="Unione Europea" className="w-9 h-auto rounded shadow-sm" />
                </span>
                {t({ pt: 'Se você doa da Itália ou de um país da União Europeia', it: "Se doni dall'Italia o da un paese dell'Unione Europea", de: 'Wenn Sie aus Italien oder einem Land der Europäischen Union spenden', en: 'If you are donating from Italy or a European Union country' })}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {t({
                  pt: 'Podes doar diretamente através do formulário abaixo, disponibilizado pelo nosso site.',
                  it: 'Puoi donare direttamente tramite il modulo qui sotto, messo a disposizione dal nostro sito.',
                  de: 'Sie können direkt über das untenstehende, von unserer Website bereitgestellte Formular spenden.',
                  en: 'You can donate directly through the form below, provided by our website.',
                })}
              </p>
            </div>

          </div>

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
