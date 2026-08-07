import { Button } from './Button';
import { AnimatedSection } from './AnimatedSection';
import { ImpactNumbers } from './ImpactNumbers';
import { useT } from '../context/LanguageContext';
import heroImg from '../../imports/nuove/33.jpeg';
import chiSiamoVideo from '../../imports/video_fundacao_chi_siamo.mp4';
import mappaItaliaImg from '../../imports/mappa_Italia_mondo.jpg';
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
            alt={t({ pt: 'Fundação Betania ONLUS', it: 'Fundação Betania ONLUS', de: "Fundação Betania ONLUS", en: "Fundação Betania ONLUS" })}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--deep-blue)]/70 via-[var(--deep-blue)]/50 to-[var(--deep-blue)]/70"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <AnimatedSection>
            <h1 className="text-5xl md:text-6xl mb-6">
              {t({ pt: 'A Fundação Betania ONLUS', it: 'La Fundação Betania ONLUS', de: "Die Fundação Betania ONLUS", en: "Fundação Betania ONLUS" })}
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-xl md:text-2xl mb-10 leading-relaxed max-w-3xl mx-auto">
              {t({
                pt: 'Uma presença ao lado das crianças e das famílias mais vulneráveis.',
                it: "Un'organizzazione al servizio dei bambini e delle famiglie più fragili.",
                de: "Eine Organisation im Dienst der bedürftigsten Kinder und Familien.",
                en: "An organisation serving the most vulnerable children and families."
              })}
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" href="#intro-section" className="text-lg px-8 py-4 bg-white/10 backdrop-blur-sm border-white hover:bg-white/20">
                {t({ pt: 'Conheça a Fundação', it: 'Scopri la Fundação', de: "Entdecken Sie die Fundação", en: "Discover the Fundação" })}
              </Button>
              <Button variant="primary" to="/dona-ora" className="text-lg px-8 py-4">
                {t({ pt: 'Doe agora', it: 'Dona ora', de: "Jetzt spenden", en: "Donate now" })}
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 2 - CHI SIAMO */}
      <section id="intro-section" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl text-[var(--deep-blue)] mb-6">
                {t({ pt: 'Quem somos', it: 'Chi siamo', de: "Wer wir sind", en: "Who we are" })}
              </h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  {t({ pt: 'A Fundação Betania ONLUS é uma entidade criada para perseguir finalidades de solidariedade social em favor de crianças e jovens que vivem dificuldades materiais, familiares e espirituais.', it: 'La Fundação Betania ONLUS è un ente nato per perseguire finalità di solidarietà sociale a favore di bambini e giovani che vivono difficoltà materiali, familiari e spirituali.', de: "Die Fundação Betania ONLUS ist eine Organisation, die gegründet wurde, um Ziele der sozialen Solidarität zugunsten von Kindern und Jugendlichen zu verfolgen, die materielle, familiäre und spirituelle Schwierigkeiten erleben.", en: "Fundação Betania ONLUS is an organisation created to pursue goals of social solidarity for children and young people facing material, family and spiritual difficulties." })}
                </p>
                <p>
                  {t({ pt: 'É expressão de uma experiência nascida na Itália e desenvolvida concretamente no Brasil, com uma presença estável em Salvador da Bahia.', it: "È espressione di un'esperienza nata in Italia e sviluppata concretamente in Brasile, con una presenza stabile a Salvador de Bahia.", de: "Sie ist Ausdruck einer Erfahrung, die in Italien entstanden und in Brasilien konkret gewachsen ist, mit einer festen Präsenz in Salvador de Bahia.", en: "It is the expression of an experience born in Italy and developed concretely in Brazil, with a stable presence in Salvador de Bahia." })}
                </p>
                <p>
                  {t({ pt: 'A fundação atua para oferecer percursos de crescimento através de educação, acompanhamento e apoio concreto.', it: 'La fondazione opera per offrire percorsi di crescita attraverso educazione, accompagnamento e sostegno concreto.', de: "Die Stiftung setzt sich dafür ein, Wachstumswege durch Bildung, Begleitung und konkrete Unterstützung zu ermöglichen.", en: "The foundation works to offer paths of growth through education, support and concrete help." })}
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <video
                  src={chiSiamoVideo}
                  controls
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full aspect-video object-cover"
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
              {t({ pt: 'As finalidades da Fundação', it: 'Le finalità della Fundação', de: "Die Ziele der Fundação", en: "The Fundação's aims" })}
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-10 text-center max-w-3xl mx-auto">
              {t({ pt: 'A fundação atua para melhorar as condições de vida das crianças e dos jovens, sobretudo nos contextos mais frágeis.', it: 'La fondazione opera per migliorare le condizioni di vita dei bambini e dei giovani, soprattutto nei contesti più fragili.', de: "Die Stiftung setzt sich dafür ein, die Lebensbedingungen von Kindern und Jugendlichen zu verbessern, insbesondere in den schwächsten Lebensverhältnissen.", en: "The foundation works to improve the living conditions of children and young people, especially in the most vulnerable contexts." })}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { text: t({ pt: 'Sustentar o desenvolvimento humano, cultural e social', it: 'Sostenere lo sviluppo umano, culturale e sociale', de: "Die menschliche, kulturelle und soziale Entwicklung fördern", en: "Support human, cultural and social development" }), color: 'from-[var(--soft-green)] to-[#7ab89a]' },
                { text: t({ pt: 'Favorecer a integração na sociedade', it: "Favorire l'integrazione nella società", de: "Die Integration in die Gesellschaft fördern", en: "Foster integration into society" }), color: 'from-[var(--warm-orange-light)] to-[var(--warm-orange)]' },
                { text: t({ pt: 'Promover a dignidade da pessoa', it: 'Promuovere la dignità della persona', de: "Die Würde des Menschen fördern", en: "Promote human dignity" }), color: 'from-[var(--deep-blue)] to-[#4d6374]' },
                { text: t({ pt: 'Oferecer percursos de crescimento também espiritual', it: 'Offrire percorsi di crescita anche spirituale', de: "Auch geistliche Wachstumswege anbieten", en: "Offer paths of growth, including spiritual growth" }), color: 'from-[var(--soft-green)] to-[#7ab89a]' }
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
              {t({ pt: 'O que faz a Fundação', it: 'Cosa fa la Fundação', de: "Was die Fundação tut", en: "What the Fundação does" })}
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-10 text-center max-w-3xl mx-auto">
              {t({ pt: 'Para realizar as suas finalidades, a fundação desenvolve e sustenta atividades e estruturas dedicadas às crianças e às suas famílias.', it: 'Per realizzare le proprie finalità, la fondazione sviluppa e sostiene attività e strutture dedicate ai bambini e alle loro famiglie.', de: "Um ihre Ziele zu verwirklichen, entwickelt und unterstützt die Stiftung Aktivitäten und Einrichtungen für Kinder und ihre Familien.", en: "To achieve its aims, the foundation develops and supports activities and facilities dedicated to children and their families." })}
            </p>
            <div className="bg-white rounded-2xl p-10 shadow-md">
              <p className="text-lg text-gray-700 mb-6 font-medium">{t({ pt: 'Atua através de:', it: 'Opera attraverso:', de: "Sie handelt durch:", en: "It works through:" })}</p>
              <ul className="space-y-3 text-lg text-gray-700">
                <li className="flex items-start">
                  <span className="text-[var(--soft-green)] mr-3 text-2xl">•</span>
                  <span>{t({ pt: 'Serviços educativos', it: 'Servizi educativi', de: "Bildungsangebote", en: "Educational services" })}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--soft-green)] mr-3 text-2xl">•</span>
                  <span>{t({ pt: 'Acolhimento quotidiano', it: 'Accoglienza quotidiana', de: "Tägliche Betreuung", en: "Daily care" })}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--soft-green)] mr-3 text-2xl">•</span>
                  <span>{t({ pt: 'Apoio às famílias', it: 'Sostegno alle famiglie', de: "Unterstützung für Familien", en: "Support for families" })}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--soft-green)] mr-3 text-2xl">•</span>
                  <span>{t({ pt: 'Atividades sociais e educativas', it: 'Attività sociali ed educative', de: "Soziale und pädagogische Aktivitäten", en: "Social and educational activities" })}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--soft-green)] mr-3 text-2xl">•</span>
                  <span>{t({ pt: 'Formação de educadores e voluntários', it: 'Formazione di operatori e volontari', de: "Ausbildung von Fachkräften und Freiwilligen", en: "Training for staff and volunteers" })}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--soft-green)] mr-3 text-2xl">•</span>
                  <span>{t({ pt: 'Promoção do crescimento humano e espiritual', it: 'Promozione della crescita umana e spirituale', de: "Förderung des menschlichen und geistlichen Wachstums", en: "Promotion of human and spiritual growth" })}</span>
                </li>
              </ul>
              <p className="text-lg text-gray-600 mt-6 italic">
                {t({ pt: 'Em alguns contextos contribui também para a melhoria das condições sanitárias.', it: 'In alcuni contesti contribuisce anche al miglioramento delle condizioni sanitarie.', de: "In manchen Zusammenhängen trägt sie auch zur Verbesserung der gesundheitlichen Bedingungen bei.", en: "In some contexts it also contributes to improving health conditions." })}
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
              {t({ pt: 'Como atua', it: 'Come opera', de: "Wie sie arbeitet", en: "How it works" })}
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-10 text-center">
              {t({ pt: 'A Fundação trabalha através de projetos concretos, construídos a partir das necessidades reais das pessoas.', it: 'La Fundação lavora attraverso progetti concreti, costruiti a partire dai bisogni reali delle persone.', de: "Die Fundação arbeitet mit konkreten Projekten, die auf den tatsächlichen Bedürfnissen der Menschen aufbauen.", en: "The Fundação works through concrete projects, built on people's real needs." })}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                t({ pt: 'Presença quotidiana no território', it: 'Presenza quotidiana sul territorio', de: "Tägliche Präsenz vor Ort", en: "A daily presence in the local area" }),
                t({ pt: 'Relações diretas com as famílias', it: 'Relazioni dirette con le famiglie', de: "Direkter Kontakt mit den Familien", en: "Direct relationships with families" }),
                t({ pt: 'Colaboração com educadores e voluntários', it: 'Collaborazione con educatori e volontari', de: "Zusammenarbeit mit Erziehern und Freiwilligen", en: "Collaboration with educators and volunteers" }),
                t({ pt: 'Continuidade no tempo', it: 'Continuità nel tempo', de: "Kontinuität über die Zeit", en: "Continuity over time" })
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                  <p className="text-lg text-gray-700 text-center">{item}</p>
                </div>
              ))}
            </div>
            <p className="text-lg text-gray-600 mt-10 text-center italic">
              {t({ pt: 'O objetivo é acompanhar percursos de crescimento duradouros.', it: "L'obiettivo è accompagnare percorsi di crescita duraturi.", de: "Das Ziel ist es, dauerhafte Wachstumswege zu begleiten.", en: "The goal is to accompany lasting paths of growth." })}
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
                <img loading="lazy"
                  src={mappaItaliaImg}
                  alt="Italia e Brasile"
                  className="w-full h-auto object-contain"
                />
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <h2 className="text-3xl md:text-4xl text-[var(--deep-blue)] mb-6">
                {t({ pt: 'Uma realidade entre Itália e Brasil', it: 'Una realtà tra Italia e Brasile', de: "Eine Realität zwischen Italien und Brasilien", en: "A reality between Italy and Brazil" })}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {t({ pt: 'A Fundação Betania ONLUS nasce na Itália e se desenvolve no Brasil.', it: 'La Fundação Betania ONLUS nasce in Italia e si sviluppa in Brasile.', de: "Die Fundação Betania ONLUS wurde in Italien gegründet und hat sich in Brasilien entwickelt.", en: "Fundação Betania ONLUS was born in Italy and developed in Brazil." })}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {t({ pt: 'Esta dimensão permite unir:', it: 'Questa dimensione permette di unire:', de: "Diese Dimension ermöglicht es, zu verbinden:", en: "This dimension makes it possible to combine:" })}
              </p>
              <ul className="space-y-3 text-lg text-gray-700 mb-6">
                <li className="flex items-start">
                  <span className="text-[var(--deep-blue)] mr-3 text-2xl">•</span>
                  <span>{t({ pt: 'Apoio internacional', it: 'Sostegno internazionale', de: "Internationale Unterstützung", en: "International support" })}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--deep-blue)] mr-3 text-2xl">•</span>
                  <span>{t({ pt: 'Conhecimento do território local', it: 'Conoscenza del territorio locale', de: "Kenntnis des lokalen Umfelds", en: "Knowledge of the local area" })}</span>
                </li>
              </ul>
              <p className="text-lg text-gray-600 italic">
                {t({ pt: 'Garantindo continuidade e desenvolvimento das atividades.', it: 'Garantendo continuità e sviluppo delle attività.', de: "So werden Kontinuität und Weiterentwicklung der Aktivitäten gewährleistet.", en: "Ensuring continuity and development of the activities." })}
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
                {t({ pt: 'Uma presença concreta no território', it: 'Una presenza concreta sul territorio', de: "Eine konkrete Präsenz vor Ort", en: "A concrete presence in the local area" })}
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                {t({ pt: 'As atividades da Fundação Betania ONLUS tomam forma concreta no:', it: 'Le attività della Fundação Betania ONLUS prendono forma concreta nel:', de: "Die Aktivitäten der Fundação Betania ONLUS nehmen konkrete Gestalt an im:", en: "The activities of Fundação Betania ONLUS take concrete shape at the:" })}
              </p>
              <p className="text-2xl font-semibold text-[var(--deep-blue)] mb-6">
                Centro Nossa Senhora Aparecida
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                {t({ pt: 'É aqui que cada dia se realizam acolhimento, educação e acompanhamento.', it: 'È qui che ogni giorno si realizzano accoglienza, educazione e accompagnamento.', de: "Hier finden jeden Tag Aufnahme, Bildung und Begleitung statt.", en: "It is here that welcome, education and support are carried out every day." })}
                <br />
                {t({ pt: 'O Centro representa a presença viva da fundação no território e o lugar em que a missão se torna experiência concreta.', it: 'Il Centro rappresenta la presenza viva della fondazione nel territorio e il luogo in cui la missione diventa esperienza concreta.', de: "Das Zentrum ist die lebendige Präsenz der Stiftung vor Ort und der Ort, an dem die Mission zu konkreter Erfahrung wird.", en: "The Centre represents the foundation's living presence in the local area and the place where the mission becomes concrete experience." })}
              </p>
              <Button variant="secondary" to="/il-centro">{t({ pt: 'Conheça o Centro', it: 'Scopri il Centro', de: "Entdecken Sie das Zentrum", en: "Discover the Centre" })}</Button>
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
              {t({ pt: 'A Fraternidade Franciscana de Betânia', it: 'La Fraternità Francescana di Betania', de: "Die Franziskanische Gemeinschaft von Betania", en: "The Franciscan Fraternity of Betania" })}
            </h2>
            <p className="text-2xl text-gray-700 mb-8 text-center font-light">
              {t({ pt: 'Um vínculo que garante continuidade', it: 'Un legame che garantisce continuità', de: "Eine Verbindung, die Kontinuität garantiert", en: "A bond that guarantees continuity" })}
            </p>
            <div className="rounded-2xl overflow-hidden shadow-lg mb-8">
              <img loading="lazy"
                src={fraternitaLegameImg}
                alt={t({ pt: 'A Fraternidade Franciscana de Betânia', it: 'La Fraternità Francescana di Betania', de: "Die Franziskanische Gemeinschaft von Betania", en: "The Franciscan Fraternity of Betania" })}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="bg-white rounded-2xl p-10 shadow-md">
              <p className="text-xl text-gray-700 leading-relaxed mb-8 text-center">
                {t({ pt: 'A Fundação está estreitamente ligada à Fraternidade Franciscana de Betânia.', it: 'La Fundação è strettamente legata alla Fraternità Francescana di Betania.', de: "Die Fundação ist eng mit der Franziskanischen Gemeinschaft von Betania verbunden.", en: "The Fundação is closely linked to the Franciscan Fraternity of Betania." })}
              </p>
              <p className="text-lg text-gray-700 mb-6">{t({ pt: 'Este vínculo garante:', it: 'Questo legame garantisce:', de: "Diese Verbindung garantiert:", en: "This bond guarantees:" })}</p>
              <ul className="space-y-3 text-lg text-gray-700">
                <li className="flex items-start">
                  <span className="text-[var(--warm-orange)] mr-3 text-2xl">•</span>
                  <span>{t({ pt: 'Continuidade nas atividades', it: 'Continuità nelle attività', de: "Kontinuität in den Aktivitäten", en: "Continuity in activities" })}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--warm-orange)] mr-3 text-2xl">•</span>
                  <span>{t({ pt: 'Uma visão compartilhada', it: 'Una visione condivisa', de: "Eine gemeinsame Vision", en: "A shared vision" })}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--warm-orange)] mr-3 text-2xl">•</span>
                  <span>{t({ pt: 'Atenção à pessoa', it: 'Attenzione alla persona', de: "Aufmerksamkeit für den Menschen", en: "Attention to the person" })}</span>
                </li>
              </ul>
              <p className="text-lg text-gray-600 mt-8 italic text-center">
                {t({ pt: 'A dimensão relacional e espiritual é parte integrante da ação.', it: "La dimensione relazionale e spirituale è parte integrante dell'azione.", de: "Die zwischenmenschliche und geistliche Dimension ist fester Bestandteil des Handelns.", en: "The relational and spiritual dimension is an integral part of the work." })}
              </p>
              <div className="text-center mt-8">
                <Button variant="secondary" to="/la-fraternita">{t({ pt: 'Conheça a Fraternidade Franciscana de Betânia', it: 'Scopri la Fraternità Francescana di Betania', de: "Entdecken Sie die Franziskanische Gemeinschaft von Betania", en: "Discover the Franciscan Fraternity of Betania" })}</Button>
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
              {t({ pt: 'Responsabilidade e transparência', it: 'Responsabilità e trasparenza', de: "Verantwortung und Transparenz", en: "Accountability and transparency" })}
            </h2>
            <div className="bg-white rounded-2xl p-10 shadow-md text-center">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {t({ pt: 'A Fundação adota práticas de gestão responsáveis para garantir um uso correto dos recursos.', it: 'La Fundação adotta pratiche di gestione responsabili per garantire un uso corretto delle risorse.', de: "Die Fundação wendet verantwortungsvolle Managementpraktiken an, um den korrekten Einsatz der Mittel zu gewährleisten.", en: "The Fundação adopts responsible management practices to ensure the correct use of resources." })}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {t({ pt: 'Cada atividade é orientada exclusivamente ao bem das crianças e das famílias.', it: 'Ogni attività è orientata esclusivamente al bene dei bambini e delle famiglie.', de: "Jede Aktivität ist ausschließlich am Wohl der Kinder und Familien ausgerichtet.", en: "Every activity is aimed exclusively at the good of children and families." })}
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8 italic">
                {t({ pt: 'A transparência é um elemento fundamental da relação de confiança.', it: 'La trasparenza è un elemento fondamentale del rapporto di fiducia.', de: "Transparenz ist ein grundlegendes Element des Vertrauensverhältnisses.", en: "Transparency is a fundamental element of the relationship of trust." })}
              </p>
              <Button variant="secondary">{t({ pt: 'Ver Transparência', it: 'Vai alla Trasparenza', de: "Zur Transparenz", en: "Go to Transparency" })}</Button>
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
              {t({ pt: 'Apoie o trabalho da Fundação', it: 'Sostieni il lavoro della Fundação', de: "Unterstützen Sie die Arbeit der Fundação", en: "Support the Fundação's work" })}
            </h2>
            <p className="text-xl leading-relaxed mb-10 opacity-90">
              {t({ pt: 'A sua ajuda permite continuar estas atividades e apoiar cada vez mais crianças e famílias.', it: 'Il tuo aiuto permette di continuare queste attività e sostenere sempre più bambini e famiglie.', de: "Ihre Hilfe ermöglicht es, diese Aktivitäten fortzusetzen und immer mehr Kinder und Familien zu unterstützen.", en: "Your help makes it possible to continue these activities and support more and more children and families." })}
            </p>
            <Button to="/dona-ora">{t({ pt: 'Doar agora', it: 'Dona ora', de: "Jetzt spenden", en: "Donate now" })}</Button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
