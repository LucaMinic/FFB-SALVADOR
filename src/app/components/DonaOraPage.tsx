import { useState, useEffect } from 'react';
import { Button } from './Button';
import { AnimatedSection } from './AnimatedSection';
import { ChevronDown, Copy, Check, FileText } from 'lucide-react';
import { useT } from '../context/LanguageContext';
import heroImg from '../../imports/19.jpeg';
import finalCtaImg from '../../imports/21.jpeg';
import flagBrasil from '../../imports/brasil.png';
import flagItalia from '../../imports/italia.png';
import qrPix from '../../imports/qr-pix.png.jpeg';

export function DonaOraPage() {
  const t = useT();
  const [copiedIbanIntesa, setCopiedIbanIntesa] = useState(false);
  const [copiedIbanBper, setCopiedIbanBper] = useState(false);
  const [copiedIbanBrasile, setCopiedIbanBrasile] = useState(false);
  const [copiedCf, setCopiedCf] = useState(false);

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (!hash) return;
    const el = document.getElementById(hash);
    if (el) {
      setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
    }
  }, []);

  const copyToClipboard = (text: string, setCopied: (val: boolean) => void) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white">
      {/* SECTION 1 - HERO */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt={t({ pt: 'Crianças do Centro', it: 'Bambini del Centro' })}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <AnimatedSection>
            <h1 className="text-5xl md:text-6xl mb-6">
              {t({ pt: 'Apoie o Centro Nossa Senhora Aparecida', it: 'Sostieni il Centro Nossa Senhora Aparecida' })}
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-xl md:text-2xl mb-10 leading-relaxed max-w-3xl mx-auto">
              {t({ pt: 'Cada contribuição ajuda concretamente crianças e famílias a viver um percurso de educação, cuidado e crescimento.', it: 'Ogni contributo aiuta concretamente bambini e famiglie a vivere un percorso di educazione, cura e crescita.' })}
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <div className="flex justify-center">
              <Button variant="primary" href="#come-donare" className="text-lg px-8 py-4">
                {t({ pt: 'Doar agora', it: 'Dona ora' })}
              </Button>
            </div>
          </AnimatedSection>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-white/80" />
          </div>
        </div>
      </section>

      {/* SECTION 4 - COME DONARE */}
      <section id="come-donare" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl text-[var(--deep-blue)] text-center mb-10">
              {t({ pt: 'Como doar', it: 'Come donare' })}
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href="#doni-brasile"
                className="flex items-center justify-center gap-4 px-8 py-5 bg-[var(--soft-green)] text-white text-lg rounded-2xl shadow-lg hover:shadow-xl hover:brightness-90 transition-all"
              >
                <img loading="lazy" src={flagBrasil} alt="Brasil" className="w-10 h-auto rounded shadow-sm" />
                <span>{t({ pt: 'Se você doa do Brasil — clique aqui', it: 'Se doni dal Brasile — clicca qui' })}</span>
              </a>
              <a
                href="#doni-italia"
                className="flex items-center justify-center gap-4 px-8 py-5 bg-[var(--deep-blue)] text-white text-lg rounded-2xl shadow-lg hover:shadow-xl hover:bg-blue-800 transition-all"
              >
                <img loading="lazy" src={flagItalia} alt="Italia" className="w-10 h-auto rounded shadow-sm" />
                <span>{t({ pt: 'Se você doa da Itália — clique aqui', it: "Se doni dall'Italia — clicca qui" })}</span>
              </a>
            </div>
          </AnimatedSection>

          <div className="space-y-8">
            {/* Bonifico bancario */}
            <AnimatedSection>
              <div className="bg-gradient-to-br from-[var(--beige)] to-white p-8 md:p-10 rounded-2xl shadow-xl border-2 border-[var(--deep-blue)]/10">
                <h3 className="text-2xl md:text-3xl text-[var(--deep-blue)] mb-6">
                  {t({ pt: 'Apoie o Projeto', it: 'Sostieni il Progetto' })}
                </h3>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  {t({
                    pt: 'A tua doação contribui concretamente para a vida quotidiana do Centro e das crianças que nele vivem. Escolhe como queres apoiar esta missão.',
                    it: 'La tua donazione contribuisce concretamente alla vita quotidiana del Centro e dei bambini che lo abitano. Scegli come vuoi sostenere questa missione.'
                  })}
                </p>

                <div className="space-y-8">
                  {/* Se doni dal Brasile */}
                  <div id="doni-brasile" className="border-l-4 border-[var(--soft-green)] pl-6 scroll-mt-32">
                    <h4 className="text-xl text-[var(--deep-blue)] mb-4 flex items-center gap-3">
                      <img loading="lazy" src={flagBrasil} alt="Brasil" className="w-9 h-auto rounded shadow-sm" />
                      {t({ pt: 'Se você doa do Brasil', it: 'Se doni dal Brasile' })}
                    </h4>
                    <div className="space-y-4">
                      {/* PIX */}
                      <div className="bg-white p-6 rounded-xl border border-gray-200">
                        <p className="text-sm text-gray-600 mb-2 font-semibold uppercase tracking-wide">PIX</p>
                        <div className="flex items-center gap-3">
                          <code className="flex-1 text-base md:text-lg font-mono text-[var(--deep-blue)] break-all">
                            21610717/0001-25 (CNPJ)
                          </code>
                          <button
                            onClick={() => copyToClipboard('21610717/0001-25', setCopiedIbanBrasile)}
                            className="flex-shrink-0 p-3 bg-[var(--soft-green)] text-white rounded-lg hover:opacity-90 transition-all"
                            aria-label={t({ pt: 'Copiar chave PIX', it: 'Copia chiave PIX' })}
                          >
                            {copiedIbanBrasile ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
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
                          {t({ pt: 'Dados bancários', it: 'Dati bancari' })}
                        </p>
                        <div className="space-y-1 text-[var(--deep-blue)]">
                          <p className="font-bold text-base">ITAÚ</p>
                          <p className="text-sm text-gray-700">{t({ pt: 'Agência', it: 'Agenzia' })}: <span className="font-mono font-semibold">7421</span></p>
                          <p className="text-sm text-gray-700">C/C: <span className="font-mono font-semibold">30014-1</span></p>
                          <p className="text-sm text-gray-700 mt-2">Fundação Betânia ONLUS</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Se doni dall'Italia */}
                  <div id="doni-italia" className="border-l-4 border-[var(--deep-blue)] pl-6 scroll-mt-32">
                    <h4 className="text-xl text-[var(--deep-blue)] mb-5 flex items-center gap-3">
                      <img loading="lazy" src={flagItalia} alt="Italia" className="w-9 h-auto rounded shadow-sm" />
                      {t({ pt: 'Se você doa da Itália', it: "Se doni dall'Italia" })}
                    </h4>
                    <div className="space-y-5">
                      <div className="bg-[var(--deep-blue)]/5 rounded-xl px-5 py-4">
                        <p className="text-sm text-gray-500 mb-1">{t({ pt: 'Beneficiário:', it: 'Beneficiario:' })}</p>
                        <p className="text-[var(--deep-blue)] font-semibold text-lg leading-snug">
                          Fraternità Francescana di Betania Fondazione ETS
                        </p>
                      </div>
                      <div className="bg-white p-6 rounded-xl border border-gray-200">
                        <div className="flex items-center gap-2 mb-4">
                          <span className="bg-[var(--deep-blue)] text-white text-sm font-medium px-3 py-1 rounded-full">
                            {t({ pt: 'Opção 1', it: 'Opzione 1' })}
                          </span>
                          <span className="text-gray-600 text-sm font-medium">INTESA SANPAOLO S.P.A</span>
                        </div>
                        <p className="text-sm text-gray-500 mb-2">IBAN:</p>
                        <div className="flex items-center gap-3">
                          <code className="flex-1 text-base md:text-lg font-mono text-[var(--deep-blue)] break-all tracking-wide">
                            IT48O0306909606100000106797
                          </code>
                          <button
                            onClick={() => copyToClipboard('IT48O0306909606100000106797', setCopiedIbanIntesa)}
                            className="flex-shrink-0 p-3 bg-[var(--deep-blue)] text-white rounded-lg hover:bg-blue-700 transition-all"
                            aria-label={t({ pt: 'Copiar IBAN', it: 'Copia IBAN' })}
                          >
                            {copiedIbanIntesa ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                          </button>
                        </div>
                        <p className="text-xs text-amber-700 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2 mt-4 leading-relaxed">
                          ⚠️ {t({ pt: 'Atenção ao 5º e 6º caractere: são uma O (de Otranto) e um 0 (número).', it: 'Attenzione al quinto e sesto carattere: sono una O (di Otranto) e uno 0 (numero).' })}
                        </p>
                      </div>
                      <div className="bg-white p-6 rounded-xl border border-gray-200">
                        <div className="flex items-center gap-2 mb-4">
                          <span className="bg-[var(--deep-blue)] text-white text-sm font-medium px-3 py-1 rounded-full">
                            {t({ pt: 'Opção 2', it: 'Opzione 2' })}
                          </span>
                          <span className="text-gray-600 text-sm font-medium">
                            {t({ pt: "Banco Popular da Emília Romanha (filial de Molfetta)", it: "Banca Popolare dell'Emilia Romagna (filiale di Molfetta)" })}
                          </span>
                        </div>
                        <p className="text-sm text-gray-500 mb-2">IBAN:</p>
                        <div className="flex items-center gap-3">
                          <code className="flex-1 text-base md:text-lg font-mono text-[var(--deep-blue)] break-all tracking-wide">
                            IT75F0538741562000002260111
                          </code>
                          <button
                            onClick={() => copyToClipboard('IT75F0538741562000002260111', setCopiedIbanBper)}
                            className="flex-shrink-0 p-3 bg-[var(--deep-blue)] text-white rounded-lg hover:bg-blue-700 transition-all"
                            aria-label={t({ pt: 'Copiar IBAN', it: 'Copia IBAN' })}
                          >
                            {copiedIbanBper ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                          </button>
                        </div>
                      </div>
                      <div className="bg-[var(--deep-blue)]/5 border border-[var(--deep-blue)]/15 rounded-xl px-5 py-4">
                        <p className="text-sm text-gray-500 mb-1">{t({ pt: 'Motivo da transferência:', it: 'Causale:' })}</p>
                        <p className="text-[var(--deep-blue)] font-medium italic text-base">
                          {t({ pt: 'Doação liberal para o Projeto Brasil', it: 'Erogazione liberale per il Progetto Brasile' })}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* 5x1000 */}
            <AnimatedSection delay={0.1}>
              <div className="bg-gradient-to-br from-[var(--soft-green)] to-[#7ab89a] text-white rounded-2xl shadow-xl py-14 px-8 md:py-20 md:px-16 flex flex-col items-center text-center">
                <div className="flex items-center justify-center gap-3 mb-5">
                  <FileText className="w-10 h-10 text-white flex-shrink-0" />
                  <h3 className="text-2xl md:text-3xl text-white">
                    {t({ pt: 'Doe o seu 5x1000', it: 'Dona il tuo 5x1000' })}
                  </h3>
                </div>
                <p className="text-lg leading-relaxed mb-10 opacity-95 max-w-2xl">
                  {t({
                    pt: 'Um gesto simples que pode contribuir concretamente para os projetos educativos e sociais da Fraternidade Franciscana de Betânia.',
                    it: 'Un gesto semplice che può contribuire concretamente ai progetti educativi e sociali della Fraternità Francescana di Betania.'
                  })}
                </p>
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl px-10 py-8">
                  <p className="text-base mb-3 opacity-90 tracking-wide uppercase text-sm">
                    {t({ pt: 'Código fiscal:', it: 'Codice fiscale:' })}
                  </p>
                  <div className="flex items-center justify-center gap-4">
                    <code className="text-3xl md:text-4xl font-mono tracking-widest">
                      93346130722
                    </code>
                    <button
                      onClick={() => copyToClipboard('93346130722', setCopiedCf)}
                      className="flex-shrink-0 p-3 bg-white/30 hover:bg-white/50 text-white rounded-lg transition-all"
                      aria-label={t({ pt: 'Copiar código fiscal', it: 'Copia codice fiscale' })}
                    >
                      {copiedCf ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                    </button>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Rimanda alla pagina dedicata */}
            <AnimatedSection delay={0.25}>
              <div className="bg-gradient-to-br from-[var(--soft-green)]/10 to-white p-8 md:p-10 rounded-2xl shadow-xl border-2 border-[var(--soft-green)]/30 text-center">
                <span className="text-5xl mb-5 block">🤝</span>
                <h3 className="text-2xl md:text-3xl text-[var(--deep-blue)] mb-4">
                  {t({ pt: 'Adoção à distância', it: 'Sostegno a distanza' })}
                </h3>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed max-w-2xl mx-auto">
                  {t({
                    pt: 'Acompanha concretamente o percurso educativo de uma criança da creche, ajudando-a a crescer em um ambiente estável e acolhedor.',
                    it: "Accompagna concretamente il percorso educativo di un bambino dell'asilo, aiutandolo a crescere in un ambiente stabile e accogliente."
                  })}
                </p>
                <Button variant="primary" to="/sostegno-a-distanza" className="text-lg px-8 py-4">
                  {t({ pt: 'Scopri il sostegno a distanza', it: 'Scopri il sostegno a distanza' })}
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* SECTION 2 - PERCHÉ DONARE */}
      <section id="perche-donare" className="py-20 bg-white scroll-mt-24">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl text-[var(--deep-blue)] text-center mb-8">
              {t({ pt: 'Por que a sua ajuda é importante', it: 'Perché il tuo aiuto è importante' })}
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="text-xl text-gray-700 text-center max-w-4xl mx-auto mb-16 leading-relaxed">
              {t({ pt: 'Todos os dias o Centro Nossa Senhora Aparecida acolhe crianças e famílias que vivem situações de fragilidade social.', it: 'Ogni giorno il Centro Nossa Senhora Aparecida accoglie bambini e famiglie che vivono situazioni di fragilità sociale.' })}
              <br /><br />
              {t({ pt: 'Através da creche, dos projetos educativos e da futura escola, o Centro constrói uma presença concreta feita de educação, cuidado, nutrição e relações.', it: "Attraverso l'asilo, i progetti educativi e la futura scuola, il Centro costruisce una presenza concreta fatta di educazione, cura, nutrizione e relazioni." })}
              <br /><br />
              {t({ pt: 'Doar significa tornar tudo isso possível.', it: 'Donare significa rendere possibile tutto questo.' })}
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: t({ pt: 'Educação cotidiana', it: 'Educazione quotidiana' }),
                description: t({ pt: 'Percursos educativos estruturados para cada criança', it: 'Percorsi educativi strutturati per ogni bambino' }),
                icon: '📚'
              },
              {
                title: t({ pt: '5 refeições por dia', it: '5 pasti al giorno' }),
                description: t({ pt: 'Nutrição completa e de qualidade', it: 'Nutrizione completa e di qualità' }),
                icon: '🍽️'
              },
              {
                title: t({ pt: 'Apoio às famílias', it: 'Supporto alle famiglie' }),
                description: t({ pt: 'Acompanhamento contínuo e relações de confiança', it: 'Accompagnamento continuo e relazioni di fiducia' }),
                icon: '🤝'
              },
              {
                title: t({ pt: 'Construção da nova escola', it: 'Costruzione della nuova scuola' }),
                description: t({ pt: 'Um futuro educativo dos 6 aos 18 anos', it: 'Un futuro educativo dai 6 ai 18 anni' }),
                icon: '🏫'
              }
            ].map((item, index) => (
              <AnimatedSection key={index} delay={0.1 * index}>
                <div className="bg-gradient-to-br from-[var(--beige)] to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all h-full flex flex-col items-center text-center">
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="text-xl text-[var(--deep-blue)] mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 - COSA SOSTIENE UNA DONAZIONE */}
      <section className="py-20 bg-gradient-to-b from-[#f8f9fb] to-white">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl text-[var(--deep-blue)] text-center mb-16">
              {t({ pt: 'O que a sua contribuição sustenta', it: 'Cosa sostiene il tuo contributo' })}
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { label: t({ pt: 'Refeições cotidianas', it: 'Pasti quotidiani' }), color: 'from-[var(--warm-orange)] to-[var(--warm-orange-light)]' },
              { label: t({ pt: 'Materiais educativos', it: 'Materiali educativi' }), color: 'from-[var(--deep-blue)] to-blue-400' },
              { label: t({ pt: 'Cuidado e higiene', it: 'Cura e igiene' }), color: 'from-[var(--soft-green)] to-green-300' },
              { label: t({ pt: 'Atividades educativas', it: 'Attività educative' }), color: 'from-purple-500 to-purple-300' },
              { label: t({ pt: 'Apoio às famílias', it: 'Sostegno alle famiglie' }), color: 'from-pink-500 to-pink-300' },
              { label: t({ pt: 'Construção dos espaços da escola', it: 'Costruzione degli spazi della scuola' }), color: 'from-amber-500 to-amber-300' }
            ].map((item, index) => (
              <AnimatedSection key={index} delay={0.1 * (index % 3)}>
                <div className={`bg-gradient-to-br ${item.color} text-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-105`}>
                  <p className="text-xl text-center">{item.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      {/* SECTION 7 - TRASPARENZA */}
      <section className="py-20 bg-gradient-to-b from-[#f8f9fb] to-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl text-[var(--deep-blue)] mb-8">
              {t({ pt: 'Transparência e responsabilidade', it: 'Trasparenza e responsabilità' })}
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="text-xl text-gray-700 leading-relaxed mb-10">
              {t({ pt: 'Cada contribuição é utilizada para apoiar concretamente as atividades educativas, sociais e estruturais do Centro.', it: 'Ogni contributo viene utilizzato per sostenere concretamente le attività educative, sociali e strutturali del Centro.' })}
              <br /><br />
              {t({ pt: 'A Fundação Betania ONLUS opera com responsabilidade e atenção, para garantir continuidade aos projetos e uma utilização transparente dos recursos.', it: 'La Fundação Betania ONLUS opera con responsabilità e attenzione, per garantire continuità ai progetti e un utilizzo trasparente delle risorse.' })}
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <Button variant="secondary" to="/trasparenza" className="text-lg px-8 py-3">
              {t({ pt: 'Ir à seção transparência', it: 'Vai alla sezione trasparenza' })}
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 9 - BENEFICI FISCALI */}
      <section className="py-20 bg-gradient-to-br from-[var(--deep-blue)] via-[#2c5f7f] to-[#234a61] text-white">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl mb-6">
                {t({ pt: 'Benefícios fiscais', it: 'Benefici fiscali' })}
              </h2>
              <p className="text-xl leading-relaxed max-w-3xl mx-auto opacity-90">
                {t({ pt: 'As doações à Fundação permitem aceder a benefícios fiscais de acordo com a normativa do Terceiro Setor.', it: 'Le donazioni alla Fondazione permettono di accedere ad agevolazioni fiscali secondo la normativa del Terzo Settore.' })}
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            {/* Left Column - Persone fisiche */}
            <AnimatedSection delay={0.2}>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 h-full">
                <h3 className="text-2xl md:text-3xl mb-6">
                  {t({ pt: 'Benefícios fiscais para pessoas físicas', it: 'Agevolazioni fiscali per le persone fisiche' })}
                </h3>
                <div className="space-y-4 text-lg leading-relaxed">
                  <p className="flex items-start gap-3">
                    <span className="text-[var(--warm-orange)] mt-1">•</span>
                    <span>{t({ pt: 'doações em dinheiro e em espécie dedutíveis em 30% até um máximo de € 30.000 por cada período de imposto;', it: 'donazioni in denaro e in natura detraibili al 30% fino ad un massimo di € 30.000 per ciascun periodo di imposta;' })}</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-[var(--warm-orange)] mt-1">•</span>
                    <span>{t({ pt: 'em alternativa, as doações em dinheiro ou em espécie são dedutíveis até 10% do rendimento total declarado.', it: 'in alternativa, le donazioni in denaro o in natura sono deducibili fino al 10% del reddito complessivo dichiarato.' })}</span>
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Right Column - Aziende ed enti */}
            <AnimatedSection delay={0.3}>
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 h-full">
                <h3 className="text-2xl md:text-3xl mb-6">
                  {t({ pt: 'Benefícios fiscais para empresas e entidades', it: 'Agevolazioni fiscali per aziende ed enti' })}
                </h3>
                <div className="space-y-4 text-lg leading-relaxed">
                  <p className="flex items-start gap-3">
                    <span className="text-[var(--warm-orange)] mt-1">•</span>
                    <span>{t({ pt: 'doações em dinheiro e em espécie dedutíveis até 10% do rendimento total declarado;', it: 'donazioni in denaro e in natura deducibili fino al 10% del reddito complessivo dichiarato;' })}</span>
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-[var(--warm-orange)] mt-1">•</span>
                    <span>{t({ pt: 'eventuais excessos podem ser deduzidos nos períodos subsequentes de acordo com a normativa vigente.', it: 'eventuali eccedenze possono essere dedotte nei periodi successivi secondo la normativa vigente.' })}</span>
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={0.4}>
            <div className="text-center">
              <p className="text-base opacity-70 max-w-3xl mx-auto leading-relaxed">
                {t({ pt: 'Tais disposições estão contidas no Código do Terceiro Setor e são aplicáveis de acordo com a normativa fiscal vigente.', it: 'Tali disposizioni sono contenute nel Codice del Terzo Settore e sono applicabili secondo la normativa fiscale vigente.' })}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 10 - CTA FINALE */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img loading="lazy"
            src={finalCtaImg}
            alt="Centro Nossa Senhora Aparecida"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl mb-6">
              {t({ pt: 'Ajude-nos a continuar esta presença', it: 'Aiutaci a continuare questa presenza' })}
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-xl md:text-2xl mb-10 leading-relaxed">
              {t({ pt: 'Até uma pequena contribuição pode fazer a diferença na vida de tantas crianças e das suas famílias.', it: 'Anche un piccolo contributo può fare la differenza nella vita di tanti bambini e delle loro famiglie.' })}
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" href="#come-donare" className="text-lg px-8 py-4">
                {t({ pt: 'Doar agora', it: 'Dona ora' })}
              </Button>
              <Button variant="secondary" to="/contatti" className="text-lg px-8 py-4 bg-white/10 backdrop-blur-sm border-white hover:bg-white/20">
                {t({ pt: 'Contate-nos', it: 'Contattaci' })}
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
