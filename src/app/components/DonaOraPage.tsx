import { useState } from 'react';
import { Button } from './Button';
import { AnimatedSection } from './AnimatedSection';
import { ChevronDown, Copy, Check } from 'lucide-react';
import { useT } from '../context/LanguageContext';
import heroImg from '../../imports/19.jpeg';
import centroImg from '../../imports/13-2.jpeg';
import scuolaRender from '../../imports/immagine_compressa_leggera.jpg';
import finalCtaImg from '../../imports/21.jpeg';

export function DonaOraPage() {
  const t = useT();
  const [copiedIban1, setCopiedIban1] = useState(false);
  const [copiedIban2, setCopiedIban2] = useState(false);
  const [copiedCf, setCopiedCf] = useState(false);

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
              <Button variant="primary" href="#perche-donare" className="text-lg px-8 py-4">
                {t({ pt: 'Doar agora', it: 'Dona ora' })}
              </Button>
            </div>
          </AnimatedSection>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-white/80" />
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

      {/* SECTION 4 - COME DONARE */}
      <section id="come-donare" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl text-[var(--deep-blue)] text-center mb-16">
              {t({ pt: 'Como doar', it: 'Come donare' })}
            </h2>
          </AnimatedSection>

          <div className="space-y-8">
            {/* Bonifico bancario */}
            <AnimatedSection>
              <div className="bg-gradient-to-br from-[var(--beige)] to-white p-8 md:p-10 rounded-2xl shadow-xl border-2 border-[var(--deep-blue)]/10">
                <h3 className="text-2xl md:text-3xl text-[var(--deep-blue)] mb-6">
                  {t({ pt: 'Transferência bancária', it: 'Bonifico bancario' })}
                </h3>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  {t({ pt: 'Você pode apoiar o projeto através de transferência bancária.', it: 'Puoi sostenere il progetto tramite bonifico bancario.' })}
                </p>

                <div className="space-y-8">
                  <div>
                    <p className="text-gray-600 mb-2">{t({ pt: 'A favor de:', it: 'Intestazione:' })}</p>
                    <p className="text-xl text-[var(--deep-blue)] mb-6">
                      Fundação Betânia Onlus
                    </p>
                  </div>

                  {/* Se doni dall'Italia */}
                  <div className="border-l-4 border-[var(--deep-blue)] pl-6">
                    <h4 className="text-xl text-[var(--deep-blue)] mb-4">
                      {t({ pt: 'Se você doa da Itália', it: "Se doni dall'Italia" })}
                    </h4>

                    <div className="space-y-4">
                      <div className="bg-white p-6 rounded-xl border border-gray-200">
                        <p className="text-sm text-gray-600 mb-2">IBAN Intesa Sanpaolo:</p>
                        <div className="flex items-center gap-3">
                          <code className="flex-1 text-base md:text-lg font-mono text-[var(--deep-blue)] break-all">
                            [INSERT IBAN ITALIA]
                          </code>
                          <button
                            onClick={() => copyToClipboard('[INSERT IBAN ITALIA]', setCopiedIban1)}
                            className="flex-shrink-0 p-3 bg-[var(--deep-blue)] text-white rounded-lg hover:bg-blue-700 transition-all"
                            aria-label={t({ pt: 'Copiar IBAN', it: 'Copia IBAN' })}
                          >
                            {copiedIban1 ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Se doni dal Brasile */}
                  <div className="border-l-4 border-[var(--warm-orange)] pl-6">
                    <h4 className="text-xl text-[var(--deep-blue)] mb-4">
                      {t({ pt: 'Se você doa do Brasil', it: 'Se doni dal Brasile' })}
                    </h4>

                    <div className="space-y-4">
                      <div className="bg-white p-6 rounded-xl border border-gray-200">
                        <p className="text-sm text-gray-600 mb-2">IBAN:</p>
                        <div className="flex items-center gap-3">
                          <code className="flex-1 text-base md:text-lg font-mono text-[var(--deep-blue)] break-all">
                            [INSERT IBAN BRASILE]
                          </code>
                          <button
                            onClick={() => copyToClipboard('[INSERT IBAN BRASILE]', setCopiedIban2)}
                            className="flex-shrink-0 p-3 bg-[var(--deep-blue)] text-white rounded-lg hover:bg-blue-700 transition-all"
                            aria-label={t({ pt: 'Copiar IBAN', it: 'Copia IBAN' })}
                          >
                            {copiedIban2 ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* 5x1000 */}
            <AnimatedSection delay={0.2}>
              <div className="bg-gradient-to-br from-[var(--warm-orange-light)] to-white p-8 md:p-10 rounded-2xl shadow-xl border-2 border-[var(--warm-orange)]/30">
                <h3 className="text-2xl md:text-3xl text-[var(--deep-blue)] mb-6">
                  {t({ pt: 'Doe o seu 5x1000', it: 'Dona il tuo 5x1000' })}
                </h3>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  {t({ pt: 'Insira o código fiscal da Fundação na sua declaração de renda.', it: 'Inserisci il codice fiscale della Fondazione nella tua dichiarazione dei redditi.' })}
                </p>

                <div className="bg-white p-6 rounded-xl border-2 border-[var(--warm-orange)]">
                  <p className="text-sm text-gray-600 mb-2">{t({ pt: 'Código fiscal:', it: 'Codice fiscale:' })}</p>
                  <div className="flex items-center gap-3">
                    <code className="flex-1 text-2xl md:text-3xl font-mono text-[var(--deep-blue)] tracking-wider">
                      93346130722
                    </code>
                    <button
                      onClick={() => copyToClipboard('93346130722', setCopiedCf)}
                      className="flex-shrink-0 p-3 bg-[var(--warm-orange)] text-white rounded-lg hover:bg-orange-600 transition-all"
                      aria-label={t({ pt: 'Copiar código fiscal', it: 'Copia codice fiscale' })}
                    >
                      {copiedCf ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                    </button>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* SECTION 5 - UN PROGETTO REALE */}
      <section className="py-20 bg-gradient-to-b from-[#f8f9fb] to-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={centroImg}
                  alt="Centro Nossa Senhora Aparecida"
                  className="w-full h-auto object-cover"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div>
                <h2 className="text-4xl md:text-5xl text-[var(--deep-blue)] mb-6">
                  {t({ pt: 'Uma obra concreta, todos os dias', it: "Un'opera concreta, ogni giorno" })}
                </h2>
                <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                  <p>
                    {t({ pt: 'O Centro Nossa Senhora Aparecida não é um projeto temporário.', it: 'Il Centro Nossa Senhora Aparecida non è un progetto temporaneo.' })}
                  </p>
                  <p>
                    {t({ pt: 'É uma presença cotidiana em Salvador de Bahia, construída ao longo do tempo pela Fundação Betania ONLUS e pela Fraternidade Franciscana de Betânia.', it: 'È una presenza quotidiana a Salvador de Bahia, costruita nel tempo dalla Fundação Betania ONLUS e dalla Fraternità Francescana di Betania.' })}
                  </p>
                  <p>
                    {t({ pt: 'Cada doação sustenta atividades reais, pessoas reais e um percurso educativo que continua todos os dias.', it: 'Ogni donazione sostiene attività reali, persone reali e un percorso educativo che continua ogni giorno.' })}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* SECTION 6 - LA NUOVA SCUOLA */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div>
                <h2 className="text-4xl md:text-5xl text-[var(--deep-blue)] mb-6">
                  {t({ pt: 'Ajude-nos a construir a nova escola', it: 'Aiutaci a costruire la nuova scuola' })}
                </h2>
                <div className="space-y-4 text-lg text-gray-700 leading-relaxed mb-8">
                  <p>
                    {t({ pt: 'A nova escola permitirá acompanhar as crianças também após a creche, oferecendo um percurso educativo completo dos 6 aos 18 anos.', it: "La nuova scuola permetterà di accompagnare i bambini anche dopo l'asilo, offrendo un percorso educativo completo dai 6 ai 18 anni." })}
                  </p>
                  <p>
                    {t({ pt: 'A construção já começou.', it: 'La costruzione è già iniziata.' })}
                  </p>
                </div>
                <Button variant="primary" to="/progetto-scuola" className="text-lg px-8 py-3">
                  {t({ pt: 'Conheça o projeto escola', it: 'Scopri il progetto scuola' })}
                </Button>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={scuolaRender}
                  alt={t({ pt: 'Render da nova escola', it: 'Render della nuova scuola' })}
                  className="w-full h-auto object-cover"
                />
              </div>
            </AnimatedSection>
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

      {/* SECTION 8 - IMPATTO */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl text-[var(--deep-blue)] text-center mb-16">
              {t({ pt: 'Todos os dias, concretamente', it: 'Ogni giorno, concretamente' })}
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {[
              { number: '100+', label: t({ pt: 'crianças acolhidas', it: 'bambini accolti' }) },
              { number: '5', label: t({ pt: 'refeições cotidianas', it: 'pasti quotidiani' }) },
              { number: '365', label: t({ pt: 'dias de presença educativa', it: 'giorni di presenza educativa' }) },
              { number: '1', label: t({ pt: 'projeto escola em construção', it: 'progetto scuola in costruzione' }) }
            ].map((item, index) => (
              <AnimatedSection key={index} delay={0.1 * index}>
                <div className="text-center p-8 bg-gradient-to-br from-[var(--beige)] to-white rounded-2xl shadow-lg">
                  <div className="text-5xl md:text-6xl text-[var(--deep-blue)] mb-4">
                    {item.number}
                  </div>
                  <p className="text-lg text-gray-700">{item.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.4}>
            <p className="text-xl text-gray-600 text-center italic">
              {t({ pt: 'Cada número representa rostos, histórias e relações reais.', it: 'Ogni numero rappresenta volti, storie e relazioni reali.' })}
            </p>
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
