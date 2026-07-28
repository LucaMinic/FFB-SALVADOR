import { useState } from 'react';
import { Button } from './Button';
import { AnimatedSection, AnimatedImage } from './AnimatedSection';
import { Copy, Check, Heart } from 'lucide-react';
import { useT } from '../context/LanguageContext';
import heroImg from '../../imports/nuove/_DSF1945.jpg';
import childrenImg from '../../imports/nuove/2P9A9067.jpg';
import familyImg from '../../imports/nuove/17.jpeg';
import finalCtaImg from '../../imports/nuove/R1.jpg';
import flagBrasil from '../../imports/brasil.png';
import flagItalia from '../../imports/italia.png';
import flagEu from '../../imports/eu.svg';
import qrPix from '../../imports/qr-pix.png.jpeg';

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
            alt={t({ pt: 'Criança do Centro', it: 'Bambino del Centro', de: "Kind des Centro" })}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/45 to-black/65"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <AnimatedSection>
            <h1 className="text-5xl md:text-6xl mb-6 leading-tight">
              {t({ pt: 'Sostegno a distanza', it: 'Sostegno a distanza', de: "Patenschaft" })}
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-xl md:text-2xl mb-10 leading-relaxed max-w-3xl mx-auto">
              {t({
                pt: 'Um vínculo real entre você e uma criança que cresce — educação, cuidado e nutrição todos os dias.',
                it: "Un legame reale tra te e un bambino che cresce — educazione, cura e nutrimento ogni giorno.",
                de: "Eine echte Verbindung zwischen Ihnen und einem heranwachsenden Kind — Bildung, Fürsorge und Ernährung, jeden Tag."
              })}
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" href="#come-sostenere" className="text-lg px-8 py-4">
                {t({ pt: 'Sostegno a distanza', it: 'Sostieni ora', de: "Jetzt Pate werden" })}
              </Button>
              <Button variant="secondary" href="#cosa-e" className="text-lg px-8 py-4 bg-white/10 backdrop-blur-sm border-white hover:bg-white/20">
                {t({ pt: 'Scopri di più', it: 'Scopri di più', de: "Erfahren Sie mehr" })}
              </Button>
            </div>
          </AnimatedSection>
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
                  {t({ pt: 'Uma escolha concreta de proximidade', it: 'Una scelta concreta di vicinanza', de: "Eine konkrete Entscheidung für Nähe" })}
                </h2>
              </div>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-6">
                {t({
                  pt: "O sostegno a distanza é uma forma direta e pessoal de acompanhar uma criança da creche que a Fraternidade Franciscana de Betânia gerencia em Salvador da Bahia.",
                  it: "Il sostegno a distanza è un modo diretto e personale di accompagnare un bambino dell'asilo che la Fraternità Francescana di Betania gestisce a Salvador de Bahia.",
                  de: "Die Patenschaft ist eine direkte und persönliche Art, ein Kind der Kita zu begleiten, die die Franziskanische Bruderschaft von Betania in Salvador de Bahia führt."
                })}
              </p>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-8">
                {t({
                  pt: 'Com a tua contribuição ajudas a garantir-lhe educação, cuidado e nutrição todos os dias — um vínculo real entre te e uma criança que cresce.',
                  it: 'Con il tuo contributo aiuti a garantirgli educazione, cura e nutrimento ogni giorno — un legame reale tra te e un bambino che cresce.',
                  de: "Mit Ihrem Beitrag helfen Sie, ihm täglich Bildung, Fürsorge und Ernährung zu sichern — eine echte Verbindung zwischen Ihnen und einem heranwachsenden Kind."
                })}
              </p>
              <Button variant="primary" href="#come-sostenere">
                {t({ pt: 'Come sostenere', it: 'Come sostenere', de: "So können Sie helfen" })}
              </Button>
            </AnimatedSection>

            <AnimatedImage delay={0.2}>
              <div className="group overflow-hidden rounded-[2rem] shadow-[0_10px_40px_rgba(0,0,0,0.12)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.2)] transition-all duration-500">
                <img loading="lazy"
                  src={childrenImg}
                  alt={t({ pt: 'Crianças do Centro', it: 'Bambini del Centro', de: "Kinder des Centro" })}
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
              {t({ pt: 'Como funciona', it: 'Come funziona', de: "So funktioniert es" })}
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🤝',
                title: t({ pt: 'Escolhes apoiar', it: 'Scegli di sostenere', de: "Sie entscheiden sich zu helfen" }),
                description: t({
                  pt: 'Decidas contribuir mensalmente ou anualmente para o percurso de uma criança da creche.',
                  it: "Decidi di contribuire mensilmente o annualmente al percorso di un bambino dell'asilo.",
                  de: "Sie entscheiden sich, monatlich oder jährlich zum Weg eines Kita-Kindes beizutragen."
                })
              },
              {
                icon: '📚',
                title: t({ pt: 'A tua contribuição chega ao Centro', it: 'Il tuo contributo arriva al Centro', de: "Ihr Beitrag erreicht das Centro" }),
                description: t({
                  pt: 'Os fundos garantem educação, nutrição, cuidado e acompanhamento para a criança que apoias.',
                  it: 'I fondi garantiscono educazione, nutrizione, cura e accompagnamento per il bambino che sostieni.',
                  de: "Die Mittel sichern Bildung, Ernährung, Fürsorge und Begleitung für das Kind, das Sie unterstützen."
                })
              },
              {
                icon: '🌱',
                title: t({ pt: 'Uma criança cresce', it: 'Un bambino cresce', de: "Ein Kind wächst heran" }),
                description: t({
                  pt: 'O teu apoio transforma-se em presença concreta todos os dias — um laço real entre te e uma criança.',
                  it: 'Il tuo sostegno si trasforma in presenza concreta ogni giorno — un legame reale tra te e un bambino.',
                  de: "Ihre Unterstützung wird jeden Tag zu konkreter Präsenz — eine echte Verbindung zwischen Ihnen und einem Kind."
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
                <img loading="lazy"
                  src={familyImg}
                  alt={t({ pt: 'Família no Centro', it: 'Famiglia al Centro', de: "Familie im Centro" })}
                  className="w-full h-[480px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </AnimatedImage>

            <AnimatedSection delay={0.2} direction="right">
              <h2 className="text-3xl md:text-4xl lg:text-5xl text-[var(--deep-blue)] mb-8">
                {t({ pt: 'O que o teu apoio garante', it: 'Cosa garantisce il tuo sostegno', de: "Was Ihre Unterstützung sichert" })}
              </h2>

              <div className="space-y-5">
                {[
                  {
                    icon: '🍽️',
                    label: t({ pt: '5 refeições por dia', it: '5 pasti al giorno', de: "5 Mahlzeiten täglich" }),
                    desc: t({ pt: 'Nutrição completa e de qualidade para cada criança', it: 'Nutrizione completa e di qualità per ogni bambino', de: "Vollständige, hochwertige Ernährung für jedes Kind" })
                  },
                  {
                    icon: '📖',
                    label: t({ pt: 'Educação diária', it: 'Educazione quotidiana', de: "Tägliche Bildung" }),
                    desc: t({ pt: 'Percursos educativos estruturados e cuidados', it: 'Percorsi educativi strutturati e curati', de: "Strukturierte und sorgfältig gestaltete Bildungswege" })
                  },
                  {
                    icon: '💙',
                    label: t({ pt: 'Cuidado e saúde', it: 'Cura e salute', de: "Fürsorge und Gesundheit" }),
                    desc: t({ pt: 'Acompanhamento da saúde e bem-estar da criança', it: 'Accompagnamento della salute e del benessere del bambino', de: "Begleitung der Gesundheit und des Wohlbefindens des Kindes" })
                  },
                  {
                    icon: '👨‍👩‍👧',
                    label: t({ pt: 'Apoio à família', it: 'Sostegno alla famiglia', de: "Unterstützung der Familie" }),
                    desc: t({ pt: 'Acompanhamento contínuo das famílias em dificuldade', it: 'Accompagnamento continuo delle famiglie in difficoltà', de: "Kontinuierliche Begleitung von Familien in schwierigen Lebenslagen" })
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
              {t({ pt: 'Come sostenere', it: 'Come sostenere', de: "So können Sie helfen" })}
            </h2>
            <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-12">
              {t({
                pt: 'Escolhe a modalidade de doação de acordo com o teu país de residência.',
                it: 'Scegli la modalità di donazione in base al tuo paese di residenza.',
                de: "Wählen Sie die Spendenmethode entsprechend Ihrem Wohnsitzland."
              })}
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href="#sostegno-brasile"
                className="flex items-center justify-center gap-4 px-8 py-5 bg-[var(--soft-green)] text-white text-lg rounded-2xl shadow-lg hover:shadow-xl hover:brightness-90 transition-all"
              >
                <img loading="lazy" src={flagBrasil} alt="Brasil" className="w-10 h-auto rounded shadow-sm flex-shrink-0" />
                <span>{t({ pt: 'Se você doa do Brasil — clique aqui', it: 'Se sostieni dal Brasile — clicca qui', de: "Wenn Sie aus Brasilien spenden — klicken Sie hier" })}</span>
              </a>
              <a
                href="#sostegno-italia"
                className="flex items-center justify-center gap-4 px-8 py-5 bg-[var(--deep-blue)] text-white text-lg rounded-2xl shadow-lg hover:shadow-xl hover:bg-blue-800 transition-all flex-wrap sm:flex-nowrap"
              >
                <span className="flex items-center gap-1.5 flex-shrink-0">
                  <img loading="lazy" src={flagItalia} alt="Italia" className="w-10 h-auto rounded shadow-sm" />
                  <img loading="lazy" src={flagEu} alt="Unione Europea" className="w-10 h-auto rounded shadow-sm" />
                </span>
                <span>{t({ pt: 'Se você doa da Itália ou de um país da União Europeia — clique aqui', it: "Se sostieni dall'Italia o da un paese dell'Unione Europea — clicca qui", de: "Wenn Sie aus Italien oder einem Land der Europäischen Union spenden — klicken Sie hier" })}</span>
              </a>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="bg-gradient-to-br from-[var(--soft-green)]/10 to-white p-8 md:p-10 rounded-2xl shadow-xl border-2 border-[var(--soft-green)]/30">
              <div className="flex items-center gap-3 mb-8">
                <span className="text-4xl">🤝</span>
                <h3 className="text-2xl md:text-3xl text-[var(--deep-blue)]">
                  {t({ pt: 'Adoção à distância', it: 'Sostegno a distanza', de: "Patenschaft" })}
                </h3>
              </div>

              <div className="space-y-8">
                {/* Dal Brasile */}
                <div id="sostegno-brasile" className="border-l-4 border-[var(--soft-green)] pl-6 scroll-mt-32">
                  <h4 className="text-xl text-[var(--deep-blue)] mb-4 flex items-center gap-3">
                    <img loading="lazy" src={flagBrasil} alt="Brasil" className="w-9 h-auto rounded shadow-sm" />
                    {t({ pt: 'Se você doa do Brasil', it: 'Se sostieni dal Brasile', de: "Wenn Sie aus Brasilien spenden" })}
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
                          onClick={() => copyToClipboard('21610717/0001-25', setCopiedIbanSostegnoBr)}
                          className="flex-shrink-0 p-3 bg-[var(--soft-green)] text-white rounded-lg hover:brightness-90 transition-all"
                          aria-label={t({ pt: 'Copiar chave PIX', it: 'Copia chiave PIX', de: "PIX-Schlüssel kopieren" })}
                        >
                          {copiedIbanSostegnoBr ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
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
                        {t({ pt: 'Dados bancários', it: 'Dati bancari', de: "Bankverbindung" })}
                      </p>
                      <div className="space-y-1 text-[var(--deep-blue)]">
                        <p className="font-bold text-base">ITAÚ</p>
                        <p className="text-sm text-gray-700">{t({ pt: 'Agência', it: 'Agenzia', de: "Filiale" })}: <span className="font-mono font-semibold">7421</span></p>
                        <p className="text-sm text-gray-700">C/C: <span className="font-mono font-semibold">30014-1</span></p>
                        <p className="text-sm text-gray-700 mt-2">Fundação Betânia ONLUS</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Dall'Italia */}
                <div id="sostegno-italia" className="border-l-4 border-[var(--deep-blue)] pl-6 scroll-mt-32">
                  <h4 className="text-xl text-[var(--deep-blue)] mb-4 flex items-center gap-3 flex-wrap">
                    <span className="flex items-center gap-1.5 flex-shrink-0">
                      <img loading="lazy" src={flagItalia} alt="Italia" className="w-9 h-auto rounded shadow-sm" />
                      <img loading="lazy" src={flagEu} alt="Unione Europea" className="w-9 h-auto rounded shadow-sm" />
                    </span>
                    {t({ pt: 'Se você doa da Itália ou de um país da União Europeia', it: "Se sostieni dall'Italia o da un paese dell'Unione Europea", de: "Wenn Sie aus Italien oder einem Land der Europäischen Union spenden" })}
                  </h4>
                  <div className="space-y-5">
                    <div className="bg-[var(--deep-blue)]/5 rounded-xl px-5 py-4">
                      <p className="text-sm text-gray-500 mb-1">{t({ pt: 'Beneficiário:', it: 'Beneficiario:', de: "Begünstigter:" })}</p>
                      <p className="text-[var(--deep-blue)] font-semibold text-lg leading-snug">
                        Fraternità Francescana di Betania Fondazione ETS
                      </p>
                    </div>
                    <div className="bg-white p-6 rounded-xl border border-gray-200">
                      <p className="text-sm text-gray-500 mb-1">{t({ pt: 'Banco:', it: 'Banca:', de: "Bank:" })}</p>
                      <p className="text-[var(--deep-blue)] font-medium mb-4">INTESA SANPAOLO S.P.A</p>
                      <p className="text-sm text-gray-500 mb-2">IBAN:</p>
                      <div className="flex items-center gap-3">
                        <code className="flex-1 text-base md:text-lg font-mono text-[var(--deep-blue)] break-all tracking-wide">
                          IT44X0306909606100000150294
                        </code>
                        <button
                          onClick={() => copyToClipboard('IT44X0306909606100000150294', setCopiedIbanSostegnoIt)}
                          className="flex-shrink-0 p-3 bg-[var(--deep-blue)] text-white rounded-lg hover:bg-blue-700 transition-all"
                          aria-label={t({ pt: 'Copiar IBAN', it: 'Copia IBAN', de: "IBAN kopieren" })}
                        >
                          {copiedIbanSostegnoIt ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                        </button>
                      </div>
                    </div>
                    <div className="bg-[var(--deep-blue)]/5 border border-[var(--deep-blue)]/15 rounded-xl px-5 py-4">
                      <p className="text-sm text-gray-500 mb-2">{t({ pt: 'Motivo da transferência:', it: 'Causale:', de: "Verwendungszweck:" })}</p>
                      <p className="text-[var(--deep-blue)] font-medium italic text-base mb-3">
                        {t({ pt: 'Adoção à distância — Nome e Sobrenome (do doador)', it: 'Sostegno a distanza — nome e cognome (del donatore)', de: "Patenschaft — Vor- und Nachname (des Spenders)" })}
                      </p>
                      <p className="text-sm text-gray-500 leading-relaxed">
                        {t({
                          pt: 'Substitua "Nome e Sobrenome" pelo seu nome e sobrenome completos.',
                          it: 'Sostituire "nome e cognome" con il proprio nome e cognome per esteso.',
                          de: "Ersetzen Sie \"Vor- und Nachname\" durch Ihren vollständigen Vor- und Nachnamen."
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
                it: 'Ogni bambino sostenuto è un percorso di vita che diventa possibile — educazione, cura e presenza concreta ogni giorno.',
                de: "Jedes unterstützte Kind ist ein Lebensweg, der möglich wird — Bildung, Fürsorge und konkrete Präsenz, jeden Tag."
              })}"
            </blockquote>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-lg text-gray-600 leading-relaxed">
              {t({
                pt: 'O teu sostegno a distanza não é só uma doação — é uma relação, um compromisso, uma presença que acompanha uma criança no crescimento.',
                it: "Il tuo sostegno a distanza non è solo una donazione — è una relazione, un impegno, una presenza che accompagna un bambino nella crescita.",
                de: "Ihre Patenschaft ist mehr als eine Spende — sie ist eine Beziehung, ein Engagement, eine Präsenz, die ein Kind beim Aufwachsen begleitet."
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
              {t({ pt: 'Hai domande?', it: 'Hai domande?', de: "Haben Sie Fragen?" })}
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="text-lg text-gray-700 leading-relaxed mb-10">
              {t({
                pt: 'Per qualsiasi informazione sul sostegno a distanza puoi contattarci direttamente.',
                it: 'Per qualsiasi informazione sul sostegno a distanza puoi contattarci direttamente.',
                de: "Für weitere Informationen zur Patenschaft können Sie uns direkt kontaktieren."
              })}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" to="/contatti">
                {t({ pt: 'Entre em contato', it: 'Contattaci', de: "Kontaktieren Sie uns" })}
              </Button>
              <Button variant="secondary" to="/dona-ora">
                {t({ pt: 'Altre forme di donazione', it: 'Altre forme di donazione', de: "Weitere Möglichkeiten zu spenden" })}
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FINAL CTA */}
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
              {t({ pt: 'Acompanha uma criança que cresce', it: 'Accompagna un bambino che cresce', de: "Begleiten Sie ein heranwachsendes Kind" })}
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-xl md:text-2xl mb-10 leading-relaxed">
              {t({
                pt: 'Com o teu sostegno a distanza garantes presença, cuidado e futuro a uma criança da creche em Salvador da Bahia.',
                it: "Con il tuo sostegno a distanza garantisci presenza, cura e futuro a un bambino dell'asilo a Salvador de Bahia.",
                de: "Mit Ihrer Patenschaft sichern Sie einem Kita-Kind in Salvador de Bahia Präsenz, Fürsorge und Zukunft."
              })}
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" href="#come-sostenere" className="text-lg px-8 py-4">
                {t({ pt: 'Sostegno a distanza', it: 'Sostieni ora', de: "Jetzt Pate werden" })}
              </Button>
              <Button variant="secondary" to="/contatti" className="text-lg px-8 py-4 bg-white/10 backdrop-blur-sm border-white hover:bg-white/20">
                {t({ pt: 'Entre em contato', it: 'Contattaci', de: "Kontaktieren Sie uns" })}
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

    </div>
  );
}
