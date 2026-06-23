import { useState } from 'react';
import { Button } from './Button';
import { AnimatedSection, AnimatedImage } from './AnimatedSection';
import { ChevronDown, Copy, Check, Heart } from 'lucide-react';
import { useT } from '../context/LanguageContext';
import heroImg from '../../imports/11.jpeg';
import childrenImg from '../../imports/15-1.jpeg';
import familyImg from '../../imports/12.jpeg';
import finalCtaImg from '../../imports/21.jpeg';
import flagBrasil from '../../imports/brasil.png';
import flagItalia from '../../imports/italia.png';

export function SostegnoADistanzaPage() {
  const t = useT();
  const [copiedIbanSostegnoIt, setCopiedIbanSostegnoIt] = useState(false);
  const [copiedIbanSostegnoBr, setCopiedIbanSostegnoBr] = useState(false);

  const copyToClipboard = (text: string, setCopied: (val: boolean) => void) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white">

      {/* HERO */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt={t({ pt: 'Criança do Centro', it: 'Bambino del Centro' })}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/45 to-black/65"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <AnimatedSection>
            <h1 className="text-5xl md:text-6xl mb-6 leading-tight">
              {t({ pt: 'Sostegno a distanza', it: 'Sostegno a distanza' })}
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-xl md:text-2xl mb-10 leading-relaxed max-w-3xl mx-auto">
              {t({
                pt: 'Um vínculo real entre você e uma criança que cresce — educação, cuidado e nutrição todos os dias.',
                it: "Un legame reale tra te e un bambino che cresce — educazione, cura e nutrimento ogni giorno."
              })}
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" href="#come-sostenere" className="text-lg px-8 py-4">
                {t({ pt: 'Sostegno a distanza', it: 'Sostieni ora' })}
              </Button>
              <Button variant="secondary" href="#cosa-e" className="text-lg px-8 py-4 bg-white/10 backdrop-blur-sm border-white hover:bg-white/20">
                {t({ pt: 'Scopri di più', it: 'Scopri di più' })}
              </Button>
            </div>
          </AnimatedSection>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-white/80" />
          </div>
        </div>
      </section>

      {/* COS'È IL SOSTEGNO A DISTANZA */}
      <section id="cosa-e" className="py-24 bg-gradient-to-b from-white to-[var(--beige)] scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <div className="flex items-center gap-3 mb-6">
                <Heart className="w-10 h-10 text-[var(--warm-orange)]" />
                <h2 className="text-3xl md:text-4xl lg:text-5xl text-[var(--deep-blue)]">
                  {t({ pt: 'Uma escolha concreta de proximidade', it: 'Una scelta concreta di vicinanza' })}
                </h2>
              </div>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-6">
                {t({
                  pt: "O sostegno a distanza é uma forma direta e pessoal de acompanhar uma criança da creche que a Fraternidade Franciscana de Betânia gerencia em Salvador da Bahia.",
                  it: "Il sostegno a distanza è un modo diretto e personale di accompagnare un bambino dell'asilo che la Fraternità Francescana di Betania gestisce a Salvador de Bahia."
                })}
              </p>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-8">
                {t({
                  pt: 'Com a tua contribuição ajudas a garantir-lhe educação, cuidado e nutrição todos os dias — um vínculo real entre te e uma criança que cresce.',
                  it: 'Con il tuo contributo aiuti a garantirgli educazione, cura e nutrimento ogni giorno — un legame reale tra te e un bambino che cresce.'
                })}
              </p>
              <Button variant="primary" href="#come-sostenere">
                {t({ pt: 'Come sostenere', it: 'Come sostenere' })}
              </Button>
            </AnimatedSection>

            <AnimatedImage delay={0.2}>
              <div className="group overflow-hidden rounded-[2rem] shadow-[0_10px_40px_rgba(0,0,0,0.12)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.2)] transition-all duration-500">
                <img
                  src={childrenImg}
                  alt={t({ pt: 'Crianças do Centro', it: 'Bambini del Centro' })}
                  className="w-full h-[480px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </AnimatedImage>
          </div>
        </div>
      </section>

      {/* COME FUNZIONA */}
      <section className="py-24 bg-[var(--beige)]">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-[var(--deep-blue)] text-center mb-16">
              {t({ pt: 'Como funciona', it: 'Come funziona' })}
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🤝',
                title: t({ pt: 'Escolhes apoiar', it: 'Scegli di sostenere' }),
                description: t({
                  pt: 'Decidas contribuir mensalmente ou anualmente para o percurso de uma criança da creche.',
                  it: "Decidi di contribuire mensilmente o annualmente al percorso di un bambino dell'asilo."
                })
              },
              {
                icon: '📚',
                title: t({ pt: 'A tua contribuição chega ao Centro', it: 'Il tuo contributo arriva al Centro' }),
                description: t({
                  pt: 'Os fundos garantem educação, nutrição, cuidado e acompanhamento para a criança que apoias.',
                  it: 'I fondi garantiscono educazione, nutrizione, cura e accompagnamento per il bambino che sostieni.'
                })
              },
              {
                icon: '🌱',
                title: t({ pt: 'Uma criança cresce', it: 'Un bambino cresce' }),
                description: t({
                  pt: 'O teu apoio transforma-se em presença concreta todos os dias — um laço real entre te e uma criança.',
                  it: 'Il tuo sostegno si trasforma in presenza concreta ogni giorno — un legame reale tra te e un bambino.'
                })
              }
            ].map((item, index) => (
              <AnimatedSection key={index} delay={0.1 * index}>
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all h-full flex flex-col items-center text-center">
                  <div className="text-5xl mb-5">{item.icon}</div>
                  <h3 className="text-xl text-[var(--deep-blue)] mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* COSA GARANTISCE */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedImage>
              <div className="group overflow-hidden rounded-[2rem] shadow-[0_10px_40px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.18)] transition-all duration-500">
                <img
                  src={familyImg}
                  alt={t({ pt: 'Família no Centro', it: 'Famiglia al Centro' })}
                  className="w-full h-[480px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </AnimatedImage>

            <AnimatedSection delay={0.2} direction="right">
              <h2 className="text-3xl md:text-4xl lg:text-5xl text-[var(--deep-blue)] mb-8">
                {t({ pt: 'O que o teu apoio garante', it: 'Cosa garantisce il tuo sostegno' })}
              </h2>

              <div className="space-y-5">
                {[
                  {
                    icon: '🍽️',
                    label: t({ pt: '5 refeições por dia', it: '5 pasti al giorno' }),
                    desc: t({ pt: 'Nutrição completa e de qualidade para cada criança', it: 'Nutrizione completa e di qualità per ogni bambino' })
                  },
                  {
                    icon: '📖',
                    label: t({ pt: 'Educação diária', it: 'Educazione quotidiana' }),
                    desc: t({ pt: 'Percursos educativos estruturados e cuidados', it: 'Percorsi educativi strutturati e curati' })
                  },
                  {
                    icon: '💙',
                    label: t({ pt: 'Cuidado e saúde', it: 'Cura e salute' }),
                    desc: t({ pt: 'Acompanhamento da saúde e bem-estar da criança', it: 'Accompagnamento della salute e del benessere del bambino' })
                  },
                  {
                    icon: '👨‍👩‍👧',
                    label: t({ pt: 'Apoio à família', it: 'Sostegno alla famiglia' }),
                    desc: t({ pt: 'Acompanhamento contínuo das famílias em dificuldade', it: 'Accompagnamento continuo delle famiglie in difficoltà' })
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-gradient-to-r from-[var(--beige)] to-white rounded-xl border border-gray-100">
                    <span className="text-3xl flex-shrink-0">{item.icon}</span>
                    <div>
                      <p className="text-[var(--deep-blue)] font-semibold text-lg mb-1">{item.label}</p>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* COME SOSTENERE - IBANs */}
      <section id="come-sostenere" className="py-20 bg-gradient-to-b from-[#f8f9fb] to-white scroll-mt-24">
        <div className="max-w-5xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl text-[var(--deep-blue)] text-center mb-4">
              {t({ pt: 'Come sostenere', it: 'Come sostenere' })}
            </h2>
            <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-12">
              {t({
                pt: 'Escolhe a modalidade de doação de acordo com o teu país de residência.',
                it: 'Scegli la modalità di donazione in base al tuo paese di residenza.'
              })}
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href="#sostegno-brasile"
                className="flex items-center justify-center gap-4 px-8 py-5 bg-[var(--soft-green)] text-white text-lg rounded-2xl shadow-lg hover:shadow-xl hover:brightness-90 transition-all"
              >
                <img src={flagBrasil} alt="Brasil" className="w-10 h-auto rounded shadow-sm" />
                <span>{t({ pt: 'Se você doa do Brasil — clique aqui', it: 'Se sostieni dal Brasile — clicca qui' })}</span>
              </a>
              <a
                href="#sostegno-italia"
                className="flex items-center justify-center gap-4 px-8 py-5 bg-[var(--deep-blue)] text-white text-lg rounded-2xl shadow-lg hover:shadow-xl hover:bg-blue-800 transition-all"
              >
                <img src={flagItalia} alt="Italia" className="w-10 h-auto rounded shadow-sm" />
                <span>{t({ pt: "Se você doa da Itália — clique aqui", it: "Se sostieni dall'Italia — clicca qui" })}</span>
              </a>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="bg-gradient-to-br from-[var(--soft-green)]/10 to-white p-8 md:p-10 rounded-2xl shadow-xl border-2 border-[var(--soft-green)]/30">
              <div className="flex items-center gap-3 mb-8">
                <span className="text-4xl">🤝</span>
                <h3 className="text-2xl md:text-3xl text-[var(--deep-blue)]">
                  {t({ pt: 'Adoção à distância', it: 'Sostegno a distanza' })}
                </h3>
              </div>

              <div className="space-y-8">
                {/* Dal Brasile */}
                <div id="sostegno-brasile" className="border-l-4 border-[var(--soft-green)] pl-6 scroll-mt-32">
                  <h4 className="text-xl text-[var(--deep-blue)] mb-4 flex items-center gap-3">
                    <img src={flagBrasil} alt="Brasil" className="w-9 h-auto rounded shadow-sm" />
                    {t({ pt: 'Se você doa do Brasil', it: 'Se sostieni dal Brasile' })}
                  </h4>
                  <div className="bg-white p-6 rounded-xl border border-gray-200">
                    <p className="text-sm text-gray-600 mb-2">IBAN:</p>
                    <div className="flex items-center gap-3">
                      <code className="flex-1 text-base md:text-lg font-mono text-[var(--deep-blue)] break-all">
                        [INSERT IBAN BRASILE SOSTEGNO]
                      </code>
                      <button
                        onClick={() => copyToClipboard('[INSERT IBAN BRASILE SOSTEGNO]', setCopiedIbanSostegnoBr)}
                        className="flex-shrink-0 p-3 bg-[var(--soft-green)] text-white rounded-lg hover:brightness-90 transition-all"
                        aria-label={t({ pt: 'Copiar IBAN', it: 'Copia IBAN' })}
                      >
                        {copiedIbanSostegnoBr ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Dall'Italia */}
                <div id="sostegno-italia" className="border-l-4 border-[var(--deep-blue)] pl-6 scroll-mt-32">
                  <h4 className="text-xl text-[var(--deep-blue)] mb-4 flex items-center gap-3">
                    <img src={flagItalia} alt="Italia" className="w-9 h-auto rounded shadow-sm" />
                    {t({ pt: 'Se você doa da Itália', it: "Se sostieni dall'Italia" })}
                  </h4>
                  <div className="space-y-5">
                    <div className="bg-[var(--deep-blue)]/5 rounded-xl px-5 py-4">
                      <p className="text-sm text-gray-500 mb-1">{t({ pt: 'Beneficiário:', it: 'Beneficiario:' })}</p>
                      <p className="text-[var(--deep-blue)] font-semibold text-lg leading-snug">
                        Fraternità Francescana di Betania Fondazione ETS
                      </p>
                    </div>
                    <div className="bg-white p-6 rounded-xl border border-gray-200">
                      <p className="text-sm text-gray-500 mb-1">{t({ pt: 'Banco:', it: 'Banca:' })}</p>
                      <p className="text-[var(--deep-blue)] font-medium mb-4">INTESA SANPAOLO S.P.A</p>
                      <p className="text-sm text-gray-500 mb-2">IBAN:</p>
                      <div className="flex items-center gap-3">
                        <code className="flex-1 text-base md:text-lg font-mono text-[var(--deep-blue)] break-all tracking-wide">
                          IT44X0306909606100000150294
                        </code>
                        <button
                          onClick={() => copyToClipboard('IT44X0306909606100000150294', setCopiedIbanSostegnoIt)}
                          className="flex-shrink-0 p-3 bg-[var(--deep-blue)] text-white rounded-lg hover:bg-blue-700 transition-all"
                          aria-label={t({ pt: 'Copiar IBAN', it: 'Copia IBAN' })}
                        >
                          {copiedIbanSostegnoIt ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                        </button>
                      </div>
                    </div>
                    <div className="bg-[var(--deep-blue)]/5 border border-[var(--deep-blue)]/15 rounded-xl px-5 py-4">
                      <p className="text-sm text-gray-500 mb-2">{t({ pt: 'Motivo da transferência:', it: 'Causale:' })}</p>
                      <p className="text-[var(--deep-blue)] font-medium italic text-base mb-3">
                        {t({ pt: 'Adoção à distância — Nome e Sobrenome (do doador)', it: 'Sostegno a distanza — nome e cognome (del donatore)' })}
                      </p>
                      <p className="text-sm text-gray-500 leading-relaxed">
                        {t({
                          pt: 'Substitua "Nome e Sobrenome" pelo seu nome e sobrenome completos.',
                          it: 'Sostituire "nome e cognome" con il proprio nome e cognome per esteso.'
                        })}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* QUOTE / IMPATTO */}
      <section className="py-24 bg-gradient-to-b from-[var(--beige)] to-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <blockquote className="text-2xl md:text-3xl text-[var(--deep-blue)] leading-relaxed italic mb-10">
              "{t({
                pt: 'Ogni bambino sostenuto è un percorso di vita che diventa possibile — educazione, cura e presenza concreta ogni giorno.',
                it: 'Ogni bambino sostenuto è un percorso di vita che diventa possibile — educazione, cura e presenza concreta ogni giorno.'
              })}"
            </blockquote>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-lg text-gray-600 leading-relaxed">
              {t({
                pt: 'O teu sostegno a distanza não é só uma doação — é uma relação, um compromisso, uma presença que acompanha uma criança no crescimento.',
                it: "Il tuo sostegno a distanza non è solo una donazione — è una relazione, un impegno, una presenza che accompagna un bambino nella crescita."
              })}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA CONTATTI */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl text-[var(--deep-blue)] mb-6">
              {t({ pt: 'Hai domande?', it: 'Hai domande?' })}
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="text-lg text-gray-700 leading-relaxed mb-10">
              {t({
                pt: 'Per qualsiasi informazione sul sostegno a distanza puoi contattarci direttamente.',
                it: 'Per qualsiasi informazione sul sostegno a distanza puoi contattarci direttamente.'
              })}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" to="/contatti">
                {t({ pt: 'Entre em contato', it: 'Contattaci' })}
              </Button>
              <Button variant="secondary" to="/dona-ora">
                {t({ pt: 'Altre forme di donazione', it: 'Altre forme di donazione' })}
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={finalCtaImg}
            alt="Centro Nossa Senhora Aparecida"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl mb-6">
              {t({ pt: 'Acompanha uma criança que cresce', it: 'Accompagna un bambino che cresce' })}
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-xl md:text-2xl mb-10 leading-relaxed">
              {t({
                pt: 'Com o teu sostegno a distanza garantes presença, cuidado e futuro a uma criança da creche em Salvador da Bahia.',
                it: "Con il tuo sostegno a distanza garantisci presenza, cura e futuro a un bambino dell'asilo a Salvador de Bahia."
              })}
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" href="#come-sostenere" className="text-lg px-8 py-4">
                {t({ pt: 'Sostegno a distanza', it: 'Sostieni ora' })}
              </Button>
              <Button variant="secondary" to="/contatti" className="text-lg px-8 py-4 bg-white/10 backdrop-blur-sm border-white hover:bg-white/20">
                {t({ pt: 'Entre em contato', it: 'Contattaci' })}
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

    </div>
  );
}
