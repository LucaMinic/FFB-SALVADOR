import { Button } from './Button';
import { AnimatedSection } from './AnimatedSection';
import { ImpactNumbers } from './ImpactNumbers';
import { ChevronDown } from 'lucide-react';
import { useT } from '../context/LanguageContext';
import heroImg from '../../imports/nuove/33.jpeg';
import chiSiamoImg from '../../imports/fundacao-gruppo-comunita.jpeg';
import mappaItaliaImg from '../../imports/mappa_Italia_mondo.png';
import fraternitaLegameImg from '../../imports/fundacao-fraternita-legame.jpeg';

export function FundacaoPage() {
  const t = useT();
  return (
    <div className="bg-white">
      {/* SECTION 1 - HERO */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt={t({ pt: 'Fundação Betania ONLUS', it: 'Fundação Betania ONLUS' })}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--deep-blue)]/70 via-[var(--deep-blue)]/50 to-[var(--deep-blue)]/70"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <AnimatedSection>
            <h1 className="text-5xl md:text-6xl mb-6">
              {t({ pt: 'A Fundação Betania ONLUS', it: 'La Fundação Betania ONLUS' })}
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-xl md:text-2xl mb-10 leading-relaxed max-w-3xl mx-auto">
              {t({
                pt: 'Uma presença ao lado das crianças e das famílias mais vulneráveis.',
                it: "Un'organizzazione al servizio dei bambini e delle famiglie più fragili."
              })}
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" href="#intro-section" className="text-lg px-8 py-4">
                {t({ pt: 'Conheça a Fundação', it: 'Scopri la Fundação' })}
              </Button>
              <Button variant="secondary" to="/dona-ora" className="text-lg px-8 py-4 bg-white/10 backdrop-blur-sm border-white hover:bg-white/20">
                {t({ pt: 'Doe agora', it: 'Dona ora' })}
              </Button>
            </div>
          </AnimatedSection>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-white/80" />
          </div>
        </div>
      </section>

      {/* SECTION 2 - CHI SIAMO */}
      <section id="intro-section" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl text-[var(--deep-blue)] mb-6">
                {t({ pt: 'Quem somos', it: 'Chi siamo' })}
              </h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  {t({ pt: 'A Fundação Betania ONLUS é uma entidade criada para perseguir finalidades de solidariedade social em favor de crianças e jovens que vivem dificuldades materiais, familiares e espirituais.', it: 'La Fundação Betania ONLUS è un ente nato per perseguire finalità di solidarietà sociale a favore di bambini e giovani che vivono difficoltà materiali, familiari e spirituali.' })}
                </p>
                <p>
                  {t({ pt: 'É expressão de uma experiência nascida na Itália e desenvolvida concretamente no Brasil, com uma presença estável em Salvador da Bahia.', it: "È espressione di un'esperienza nata in Italia e sviluppata concretamente in Brasile, con una presenza stabile a Salvador de Bahia." })}
                </p>
                <p>
                  {t({ pt: 'A fundação atua para oferecer percursos de crescimento através de educação, acompanhamento e apoio concreto.', it: 'La fondazione opera per offrire percorsi di crescita attraverso educazione, accompagnamento e sostegno concreto.' })}
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={chiSiamoImg}
                  alt="La Fundação Betania"
                  className="w-full h-96 object-cover"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* SECTION 4 - FINALITÀ */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl text-[var(--deep-blue)] mb-12 text-center">
              {t({ pt: 'As finalidades da Fundação', it: 'Le finalità della Fundação' })}
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-10 text-center max-w-3xl mx-auto">
              {t({ pt: 'A fundação atua para melhorar as condições de vida das crianças e dos jovens, sobretudo nos contextos mais frágeis.', it: 'La fondazione opera per migliorare le condizioni di vita dei bambini e dei giovani, soprattutto nei contesti più fragili.' })}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { text: t({ pt: 'Sustentar o desenvolvimento humano, cultural e social', it: 'Sostenere lo sviluppo umano, culturale e sociale' }), color: 'from-[var(--soft-green)] to-[#7ab89a]' },
                { text: t({ pt: 'Favorecer a integração na sociedade', it: "Favorire l'integrazione nella società" }), color: 'from-[var(--warm-orange-light)] to-[var(--warm-orange)]' },
                { text: t({ pt: 'Promover a dignidade da pessoa', it: 'Promuovere la dignità della persona' }), color: 'from-[var(--deep-blue)] to-[#4d6374]' },
                { text: t({ pt: 'Oferecer percursos de crescimento também espiritual', it: 'Offrire percorsi di crescita anche spirituale' }), color: 'from-[var(--soft-green)] to-[#7ab89a]' }
              ].map((item, index) => (
                <div key={index} className={`bg-gradient-to-br ${item.color} text-white p-6 rounded-xl shadow-md`}>
                  <p className="text-lg">{item.text}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 5 - COSA FA */}
      <section className="py-20 bg-gradient-to-b from-white to-[var(--beige)]">
        <div className="max-w-5xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl text-[var(--deep-blue)] mb-8 text-center">
              {t({ pt: 'O que faz a Fundação', it: 'Cosa fa la Fundação' })}
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-10 text-center max-w-3xl mx-auto">
              {t({ pt: 'Para realizar as suas finalidades, a fundação desenvolve e sustenta atividades e estruturas dedicadas às crianças e às suas famílias.', it: 'Per realizzare le proprie finalità, la fondazione sviluppa e sostiene attività e strutture dedicate ai bambini e alle loro famiglie.' })}
            </p>
            <div className="bg-white rounded-2xl p-10 shadow-md">
              <p className="text-lg text-gray-700 mb-6 font-medium">{t({ pt: 'Atua através de:', it: 'Opera attraverso:' })}</p>
              <ul className="space-y-3 text-lg text-gray-700">
                <li className="flex items-start">
                  <span className="text-[var(--soft-green)] mr-3 text-2xl">•</span>
                  <span>{t({ pt: 'Serviços educativos', it: 'Servizi educativi' })}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--soft-green)] mr-3 text-2xl">•</span>
                  <span>{t({ pt: 'Acolhimento quotidiano', it: 'Accoglienza quotidiana' })}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--soft-green)] mr-3 text-2xl">•</span>
                  <span>{t({ pt: 'Apoio às famílias', it: 'Sostegno alle famiglie' })}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--soft-green)] mr-3 text-2xl">•</span>
                  <span>{t({ pt: 'Atividades sociais e educativas', it: 'Attività sociali ed educative' })}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--soft-green)] mr-3 text-2xl">•</span>
                  <span>{t({ pt: 'Formação de educadores e voluntários', it: 'Formazione di operatori e volontari' })}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--soft-green)] mr-3 text-2xl">•</span>
                  <span>{t({ pt: 'Promoção do crescimento humano e espiritual', it: 'Promozione della crescita umana e spirituale' })}</span>
                </li>
              </ul>
              <p className="text-lg text-gray-600 mt-6 italic">
                {t({ pt: 'Em alguns contextos contribui também para a melhoria das condições sanitárias.', it: 'In alcuni contesti contribuisce anche al miglioramento delle condizioni sanitarie.' })}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-24" style={{ display: 'block', marginBottom: '-1px' }}>
        <path d="M0,50 C300,90 600,10 900,50 C1050,70 1150,50 1200,50 L1200,120 L0,120 Z" fill="var(--beige)" />
      </svg>

      {/* SECTION 6 - COME OPERA */}
      <section className="py-20 bg-[var(--beige)]">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl text-[var(--deep-blue)] mb-8 text-center">
              {t({ pt: 'Como atua', it: 'Come opera' })}
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-10 text-center">
              {t({ pt: 'A Fundação trabalha através de projetos concretos, construídos a partir das necessidades reais das pessoas.', it: 'La Fundação lavora attraverso progetti concreti, costruiti a partire dai bisogni reali delle persone.' })}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                t({ pt: 'Presença quotidiana no território', it: 'Presenza quotidiana sul territorio' }),
                t({ pt: 'Relações diretas com as famílias', it: 'Relazioni dirette con le famiglie' }),
                t({ pt: 'Colaboração com educadores e voluntários', it: 'Collaborazione con educatori e volontari' }),
                t({ pt: 'Continuidade no tempo', it: 'Continuità nel tempo' })
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                  <p className="text-lg text-gray-700 text-center">{item}</p>
                </div>
              ))}
            </div>
            <p className="text-lg text-gray-600 mt-10 text-center italic">
              {t({ pt: 'O objetivo é acompanhar percursos de crescimento duradouros.', it: "L'obiettivo è accompagnare percorsi di crescita duraturi." })}
            </p>
          </AnimatedSection>
        </div>
      </section>
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-24" style={{ display: 'block', marginBottom: '-1px' }}>
        <path d="M0,50 C300,90 600,10 900,50 C1050,70 1150,50 1200,50 L1200,120 L0,120 Z" fill="var(--beige)" />
      </svg>

      {/* SECTION 7 - STRUTTURA E ORIGINE */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="rounded-2xl overflow-hidden shadow-lg bg-white p-8 flex items-center justify-center">
                <img
                  src={mappaItaliaImg}
                  alt="Italia e Brasile"
                  className="w-full h-auto object-contain"
                />
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <h2 className="text-3xl md:text-4xl text-[var(--deep-blue)] mb-6">
                {t({ pt: 'Uma realidade entre Itália e Brasil', it: 'Una realtà tra Italia e Brasile' })}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {t({ pt: 'A Fundação Betania ONLUS nasce na Itália e se desenvolve no Brasil.', it: 'La Fundação Betania ONLUS nasce in Italia e si sviluppa in Brasile.' })}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {t({ pt: 'Esta dimensão permite unir:', it: 'Questa dimensione permette di unire:' })}
              </p>
              <ul className="space-y-3 text-lg text-gray-700 mb-6">
                <li className="flex items-start">
                  <span className="text-[var(--deep-blue)] mr-3 text-2xl">•</span>
                  <span>{t({ pt: 'Apoio internacional', it: 'Sostegno internazionale' })}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--deep-blue)] mr-3 text-2xl">•</span>
                  <span>{t({ pt: 'Conhecimento do território local', it: 'Conoscenza del territorio locale' })}</span>
                </li>
              </ul>
              <p className="text-lg text-gray-600 italic">
                {t({ pt: 'Garantindo continuidade e desenvolvimento das atividades.', it: 'Garantendo continuità e sviluppo delle attività.' })}
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* SECTION 3 - IL CENTRO SUL TERRITORIO */}
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-24" style={{ display: 'block', marginTop: '-1px' }}>
        <path d="M0,50 C300,10 600,90 900,50 C1050,30 1150,50 1200,50 L1200,0 L0,0 Z" fill="var(--beige)" />
      </svg>
      <section className="py-20 bg-[var(--beige)]">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection>
            <div className="bg-white rounded-3xl p-12 shadow-lg text-center">
              <h2 className="text-3xl md:text-4xl text-[var(--deep-blue)] mb-6">
                {t({ pt: 'Uma presença concreta no território', it: 'Una presenza concreta sul territorio' })}
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                {t({ pt: 'As atividades da Fundação Betania ONLUS tomam forma concreta no:', it: 'Le attività della Fundação Betania ONLUS prendono forma concreta nel:' })}
              </p>
              <p className="text-2xl font-semibold text-[var(--deep-blue)] mb-6">
                Centro Nossa Senhora Aparecida
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                {t({ pt: 'É aqui que cada dia se realizam acolhimento, educação e acompanhamento.', it: 'È qui che ogni giorno si realizzano accoglienza, educazione e accompagnamento.' })}
                <br />
                {t({ pt: 'O Centro representa a presença viva da fundação no território e o lugar em que a missão se torna experiência concreta.', it: 'Il Centro rappresenta la presenza viva della fondazione nel territorio e il luogo in cui la missione diventa esperienza concreta.' })}
              </p>
              <Button variant="secondary" to="/#il-centro">{t({ pt: 'Conheça o Centro', it: 'Scopri il Centro' })}</Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-24" style={{ display: 'block', marginBottom: '-1px' }}>
        <path d="M0,50 C300,90 600,10 900,50 C1050,70 1150,50 1200,50 L1200,120 L0,120 Z" fill="var(--beige)" />
      </svg>

      {/* SECTION 8 - LEGAME CON LA FRATERNITÀ */}
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-24" style={{ display: 'block', marginTop: '-1px' }}>
        <path d="M0,50 C300,10 600,90 900,50 C1050,30 1150,50 1200,50 L1200,0 L0,0 Z" fill="#f8f9fb" />
      </svg>
      <section className="py-20 bg-gradient-to-b from-[#f8f9fb] to-white">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl text-[var(--deep-blue)] mb-4 text-center">
              {t({ pt: 'A Fraternidade Franciscana de Betânia', it: 'La Fraternità Francescana di Betania' })}
            </h2>
            <p className="text-2xl text-gray-700 mb-8 text-center font-light">
              {t({ pt: 'Um vínculo que garante continuidade', it: 'Un legame che garantisce continuità' })}
            </p>
            <div className="rounded-2xl overflow-hidden shadow-lg mb-8">
              <img
                src={fraternitaLegameImg}
                alt={t({ pt: 'A Fraternidade Franciscana de Betânia', it: 'La Fraternità Francescana di Betania' })}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="bg-white rounded-2xl p-10 shadow-md">
              <p className="text-xl text-gray-700 leading-relaxed mb-8 text-center">
                {t({ pt: 'A Fundação está estreitamente ligada à Fraternidade Franciscana de Betânia.', it: 'La Fundação è strettamente legata alla Fraternità Francescana di Betania.' })}
              </p>
              <p className="text-lg text-gray-700 mb-6">{t({ pt: 'Este vínculo garante:', it: 'Questo legame garantisce:' })}</p>
              <ul className="space-y-3 text-lg text-gray-700">
                <li className="flex items-start">
                  <span className="text-[var(--warm-orange)] mr-3 text-2xl">•</span>
                  <span>{t({ pt: 'Continuidade nas atividades', it: 'Continuità nelle attività' })}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--warm-orange)] mr-3 text-2xl">•</span>
                  <span>{t({ pt: 'Uma visão compartilhada', it: 'Una visione condivisa' })}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--warm-orange)] mr-3 text-2xl">•</span>
                  <span>{t({ pt: 'Atenção à pessoa', it: 'Attenzione alla persona' })}</span>
                </li>
              </ul>
              <p className="text-lg text-gray-600 mt-8 italic text-center">
                {t({ pt: 'A dimensão relacional e espiritual é parte integrante da ação.', it: "La dimensione relazionale e spirituale è parte integrante dell'azione." })}
              </p>
              <div className="text-center mt-8">
                <Button variant="secondary" to="/la-fraternita">{t({ pt: 'Conheça a Fraternidade Franciscana de Betânia', it: 'Scopri la Fraternità Francescana di Betania' })}</Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-24" style={{ display: 'block', marginBottom: '-1px' }}>
        <path d="M0,50 C300,90 600,10 900,50 C1050,70 1150,50 1200,50 L1200,120 L0,120 Z" fill="white" />
      </svg>

      {/* SECTION 9 - RESPONSABILITÀ E TRASPARENZA */}
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-24" style={{ display: 'block', marginTop: '-1px' }}>
        <path d="M0,50 C300,10 600,90 900,50 C1050,30 1150,50 1200,50 L1200,0 L0,0 Z" fill="var(--beige)" />
      </svg>
      <section className="py-20 bg-[var(--beige)]">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl text-[var(--deep-blue)] mb-8 text-center">
              {t({ pt: 'Responsabilidade e transparência', it: 'Responsabilità e trasparenza' })}
            </h2>
            <div className="bg-white rounded-2xl p-10 shadow-md text-center">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {t({ pt: 'A Fundação adota práticas de gestão responsáveis para garantir um uso correto dos recursos.', it: 'La Fundação adotta pratiche di gestione responsabili per garantire un uso corretto delle risorse.' })}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {t({ pt: 'Cada atividade é orientada exclusivamente ao bem das crianças e das famílias.', it: 'Ogni attività è orientata esclusivamente al bene dei bambini e delle famiglie.' })}
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8 italic">
                {t({ pt: 'A transparência é um elemento fundamental da relação de confiança.', it: 'La trasparenza è un elemento fondamentale del rapporto di fiducia.' })}
              </p>
              <Button variant="secondary">{t({ pt: 'Ver Transparência', it: 'Vai alla Trasparenza' })}</Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-24" style={{ display: 'block', marginBottom: '-1px' }}>
        <path d="M0,50 C300,90 600,10 900,50 C1050,70 1150,50 1200,50 L1200,120 L0,120 Z" fill="var(--beige)" />
      </svg>

      {/* SECTION 10 - IMPATTO (compact) */}
      <div className="bg-white">
        <ImpactNumbers />
      </div>

      {/* SECTION 11 - CTA FINALE */}
      <section className="py-24 bg-gradient-to-br from-[var(--deep-blue)] to-[#2c5f7f] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl mb-6">
              {t({ pt: 'Apoie o trabalho da Fundação', it: 'Sostieni il lavoro della Fundação' })}
            </h2>
            <p className="text-xl leading-relaxed mb-10 opacity-90">
              {t({ pt: 'A sua ajuda permite continuar estas atividades e apoiar cada vez mais crianças e famílias.', it: 'Il tuo aiuto permette di continuare queste attività e sostenere sempre più bambini e famiglie.' })}
            </p>
            <Button to="/dona-ora">{t({ pt: 'Doar agora', it: 'Dona ora' })}</Button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
