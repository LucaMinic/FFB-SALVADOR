import { Button } from './Button';
import { AnimatedSection } from './AnimatedSection';
import { Link } from 'react-router';
import { useT } from '../context/LanguageContext';
import heroImg from '../../imports/centro-convento-aereo.jpeg';
import centroImg from '../../imports/8-3.jpeg';
import giornataImg1 from '../../imports/centro-giornata-relazione.jpeg';
import giornataImg2 from '../../imports/centro-giornata-brincadeira.jpeg';
import documentariImg from '../../imports/centro-documentari-racconti.jpeg';
import iniziativeImg from '../../imports/2.jpeg';

export function CentroPage() {
  const t = useT();
  return (
    <div className="bg-white">
      {/* SECTION 1 - HERO */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt={t({ pt: 'Centro Nossa Senhora Aparecida', it: 'Centro Nossa Senhora Aparecida', de: "Centro Nossa Senhora Aparecida", en: "Centro Nossa Senhora Aparecida" })}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--deep-blue)]/70 via-[var(--deep-blue)]/50 to-[var(--deep-blue)]/70"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <AnimatedSection>
            <h1 className="text-5xl md:text-6xl mb-6">
              {t({ pt: 'O Centro Nossa Senhora Aparecida', it: 'Il Centro Nossa Senhora Aparecida', de: "Das Centro Nossa Senhora Aparecida", en: "The Centro Nossa Senhora Aparecida" })}
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-xl md:text-2xl mb-10 leading-relaxed max-w-3xl mx-auto">
              {t({
                pt: 'Uma presença diária no coração de Salvador da Bahia.',
                it: 'Una presenza quotidiana nel cuore di Salvador de Bahia.',
                de: "Eine tägliche Präsenz im Herzen von Salvador de Bahia.",
                en: "A daily presence in the heart of Salvador de Bahia."
              })}
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" href="#intro-section" className="text-lg px-8 py-4 bg-white/10 backdrop-blur-sm border-white hover:bg-white/20">
                {t({ pt: 'Conheça o Centro', it: "Scopri il Centro", de: "Entdecken Sie das Centro", en: "Discover the Centre" })}
              </Button>
              <Button variant="primary" to="/dona-ora" className="text-lg px-8 py-4">
                {t({ pt: 'Doe agora', it: 'Dona ora', de: "Jetzt spenden", en: "Donate now" })}
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 1B - INTRO TEXT */}
      <section id="intro-section" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  {t({ pt: 'O Centro Nossa Senhora Aparecida é o lugar em que cada dia a Fundação Betania ONLUS está presente ao lado das crianças e das famílias.', it: 'Il Centro Nossa Senhora Aparecida è il luogo in cui ogni giorno la Fundação Betania ONLUS è presente accanto ai bambini e alle famiglie.', de: "Das Centro Nossa Senhora Aparecida ist der Ort, an dem die Fundação Betania ONLUS jeden Tag an der Seite der Kinder und Familien präsent ist.", en: "The Centro Nossa Senhora Aparecida is the place where, every day, Fundação Betania ONLUS is present alongside children and families." })}
                </p>
                <p>
                  {t({ pt: 'Não é apenas um espaço, mas uma presença concreta feita de relações, acolhimento e vida partilhada.', it: 'Non è solo uno spazio, ma una presenza concreta fatta di relazioni, accoglienza e vita condivisa.', de: "Es ist nicht nur ein Ort, sondern eine konkrete Präsenz aus Beziehungen, Aufnahme und gemeinsamem Leben.", en: "It is not just a space, but a real presence made of relationships, welcome and shared life." })}
                </p>
              </div>
              <div className="mt-8">
                <Button variant="secondary" to="/storia-del-centro">
                  {t({ pt: 'Conheça a história do Centro', it: 'Scopri la storia del Centro', de: "Entdecken Sie die Geschichte des Zentrums", en: "Discover the history of the Centre" })}
                </Button>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img loading="lazy"
                  src={centroImg}
                  alt="Centro Nossa Senhora Aparecida"
                  className="w-full h-96 object-cover"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* SECTION 2 - UN LUOGO FATTO DI RELAZIONI */}
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-24" style={{ display: 'block', marginTop: '-1px' }}>
        <path d="M0,50 C300,10 600,90 900,50 C1050,30 1150,50 1200,50 L1200,0 L0,0 Z" fill="var(--beige)" />
      </svg>
      <section className="py-24 bg-[var(--beige)]">
        <div className="max-w-5xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl text-[var(--deep-blue)] mb-12 text-center">
              {t({ pt: 'Um lugar que acolhe cada dia', it: 'Un luogo che accoglie ogni giorno', de: "Ein Ort, der jeden Tag aufnimmt", en: "A place that welcomes every day" })}
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <AnimatedSection delay={0.1}>
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 h-full">
                <h3 className="text-xl font-bold text-[var(--deep-blue)] mb-4">
                  {t({ pt: 'Pessoas, não números', it: 'Persone, non numeri', de: "Menschen, keine Zahlen", en: "People, not numbers" })}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {t({ pt: 'No Centro, cada jornada começa com a chegada das crianças e das famílias. Cada criança é conhecida, cada família é acompanhada, cada situação é ouvida.', it: 'Nel Centro, ogni giornata inizia con l\'arrivo dei bambini e delle famiglie. Ogni bambino è conosciuto, ogni famiglia è accompagnata, ogni situazione è ascoltata.', de: "Im Centro beginnt jeder Tag mit der Ankunft der Kinder und Familien. Jedes Kind wird gekannt, jede Familie wird begleitet, jede Situation wird angehört.", en: "At the Centre, every day begins with the arrival of children and families. Every child is known, every family is accompanied, every situation is listened to." })}
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 h-full">
                <h3 className="text-xl font-bold text-[var(--deep-blue)] mb-4">
                  {t({ pt: 'Presença contínua', it: 'Presenza continua', de: "Kontinuierliche Präsenz", en: "A continuous presence" })}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {t({ pt: 'Não é uma intervenção temporária, mas uma presença estável, construída dia após dia. Esta continuidade é o que permite uma mudança real.', it: 'Non è un intervento temporaneo, ma una presenza stabile, costruita giorno dopo giorno. Questa continuità è ciò che permette un cambiamento reale.', de: "Es ist kein vorübergehender Einsatz, sondern eine stabile Präsenz, die Tag für Tag aufgebaut wird. Diese Kontinuität ist es, die einen echten Wandel ermöglicht.", en: "It is not a temporary intervention, but a stable presence, built day after day. This continuity is what allows real change." })}
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 h-full">
                <h3 className="text-xl font-bold text-[var(--deep-blue)] mb-4">
                  {t({ pt: 'Um modo de viver', it: 'Un modo di vivere', de: "Eine Art zu leben", en: "A way of life" })}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {t({ pt: 'É um espaço aberto, vivo, onde as pessoas não são usuários mas rostos, histórias, relações. O acolhimento não é um serviço, mas um modo de viver.', it: 'È uno spazio aperto, vivo, dove le persone non sono utenti ma volti, storie, relazioni. L\'accoglienza non è un servizio, ma un modo di vivere.', de: "Es ist ein offener, lebendiger Ort, an dem Menschen nicht Nutzer sind, sondern Gesichter, Geschichten, Beziehungen. Aufnahme ist kein Dienst, sondern eine Art zu leben.", en: "It is an open, living space, where people are not users but faces, stories, relationships. Welcoming is not a service, but a way of life." })}
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-24" style={{ display: 'block', marginTop: '-1px' }}>
        <path d="M0,50 C300,90 600,10 900,50 C1050,70 1150,50 1200,50 L1200,120 L0,120 Z" fill="#ffffff" />
      </svg>

      {/* SECTION 3 - UNA GIORNATA NEL CENTRO */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl text-[var(--deep-blue)] mb-6 text-center">
              {t({ pt: 'Uma jornada que toma forma na relação', it: 'Una giornata che prende forma nella relazione', de: "Ein Tag, der in der Beziehung Gestalt annimmt", en: "A day that takes shape through relationship" })}
            </h2>
            <p className="text-2xl text-gray-600 mb-16 text-center max-w-3xl mx-auto">
              {t({ pt: 'Durante a jornada, o Centro se enche de vozes, atividades, momentos compartilhados.', it: 'Durante la giornata, il Centro si riempie di voci, attività, momenti condivisi.', de: "Im Laufe des Tages füllt sich das Centro mit Stimmen, Aktivitäten und gemeinsamen Momenten.", en: "Throughout the day, the Centre fills with voices, activities and shared moments." })}
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <AnimatedSection>
              <div className="rounded-3xl overflow-hidden shadow-xl h-full">
                <img loading="lazy"
                  src={giornataImg1}
                  alt="Una giornata al Centro"
                  className="w-full h-full min-h-[400px] object-cover"
                />
              </div>
            </AnimatedSection>
            <div className="flex flex-col justify-center gap-6">
              {[
                { title: t({ pt: 'Acolhimento', it: 'Accoglienza', de: "Aufnahme", en: "Welcome" }), desc: t({ pt: 'Cada criança encontra um lugar seguro e estável', it: 'Ogni bambino trova un luogo sicuro e stabile', de: "Jedes Kind findet einen sicheren und stabilen Ort", en: "Every child finds a safe and stable place" }) },
                { title: t({ pt: 'Atividades educativas', it: 'Attività educative', de: "Pädagogische Aktivitäten", en: "Educational activities" }), desc: t({ pt: 'A aprendizagem nasce da relação e da brincadeira', it: 'L\'apprendimento nasce dalla relazione e dal gioco', de: "Lernen entsteht aus Beziehung und Spiel", en: "Learning is born from relationship and play" }) },
                { title: t({ pt: 'Momentos de cuidado', it: 'Momenti di cura', de: "Momente der Fürsorge", en: "Moments of care" }), desc: t({ pt: 'As necessidades fundamentais são acompanhadas com atenção', it: 'I bisogni fondamentali vengono accompagnati con attenzione', de: "Grundlegende Bedürfnisse werden aufmerksam begleitet", en: "Basic needs are attended to with care" }) }
              ].map((item, index) => (
                <AnimatedSection key={item.title} delay={0.1 + index * 0.1}>
                  <div className="bg-gradient-to-br from-[var(--soft-green)]/10 to-[#7ab89a]/10 rounded-xl p-6 border-l-4 border-[var(--soft-green)]">
                    <h3 className="text-lg font-bold text-[var(--deep-blue)] mb-2">{item.title}</h3>
                    <p className="text-gray-700">{item.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col justify-center gap-6">
              {[
                { title: t({ pt: 'Refeições compartilhadas', it: 'Pasti condivisi', de: "Gemeinsame Mahlzeiten", en: "Shared meals" }), desc: t({ pt: 'Momentos de convívio e nutrição que alimentam o corpo e as relações', it: 'Momenti di convivialità e nutrimento che alimentano il corpo e le relazioni', de: "Momente der Gemeinschaft und Ernährung, die Körper und Beziehungen nähren", en: "Moments of togetherness and nourishment that feed both body and relationships" }) },
                { title: t({ pt: 'Brincadeira e relação', it: 'Gioco e relazione', de: "Spiel und Beziehung", en: "Play and relationship" }), desc: t({ pt: 'O brincar como espaço de descoberta e crescimento conjunto', it: 'Il gioco come spazio di scoperta e crescita condivisa', de: "Das Spiel als Raum der Entdeckung und gemeinsamen Entwicklung", en: "Play as a space for shared discovery and growth" }) },
                { title: t({ pt: 'Acompanhamento das famílias', it: 'Accompagnamento delle famiglie', de: "Begleitung der Familien", en: "Supporting families" }), desc: t({ pt: 'Um ponto de referência estável para todo o núcleo familiar', it: 'Un punto di riferimento stabile per tutto il nucleo familiare', de: "Ein stabiler Bezugspunkt für die gesamte Familie", en: "A stable point of reference for the whole family" }) }
              ].map((item, index) => (
                <AnimatedSection key={item.title} delay={index * 0.1}>
                  <div className="bg-gradient-to-br from-[var(--warm-orange)]/10 to-[var(--warm-orange-light)]/10 rounded-xl p-6 border-l-4 border-[var(--warm-orange)]">
                    <h3 className="text-lg font-bold text-[var(--deep-blue)] mb-2">{item.title}</h3>
                    <p className="text-gray-700">{item.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
            <AnimatedSection delay={0.2}>
              <div className="rounded-3xl overflow-hidden shadow-xl h-full">
                <img loading="lazy"
                  src={giornataImg2}
                  alt="Momenti condivisi"
                  className="w-full h-full min-h-[400px] object-cover"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>


      {/* BREATHING MOMENT - QUOTE */}
      <section className="py-20 bg-gradient-to-b from-white to-[var(--beige)]/30">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center">
              <p className="text-3xl md:text-4xl text-[var(--deep-blue)] leading-relaxed italic font-light">
                {t({ pt: '"Cada momento, mesmo o mais simples, torna-se parte de um percurso"', it: '"Ogni momento, anche il più semplice, diventa parte di un percorso"', de: "\"Jeder Moment, auch der einfachste, wird Teil eines Weges\"", en: "\"Every moment, even the simplest, becomes part of a journey\"" })}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>


      {/* SECTION 7 - DAL CENTRO NASCONO I PROGETTI + IMPATTO */}
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-24" style={{ display: 'block', marginTop: '-1px' }}>
        <path d="M0,50 C300,10 600,90 900,50 C1050,30 1150,50 1200,50 L1200,0 L0,0 Z" fill="var(--beige)" />
      </svg>
      <section className="py-24 bg-[var(--beige)]">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl text-[var(--deep-blue)] mb-6 text-center">
              {t({ pt: 'Uma realidade que gera percursos', it: 'Una realtà che genera percorsi', de: "Eine Realität, die Wege entstehen lässt", en: "A reality that generates journeys" })}
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-16 text-center max-w-3xl mx-auto">
              {t({ pt: 'Do Centro tomam forma projetos concretos que respondem às necessidades do território.', it: 'Dal Centro prendono forma progetti concreti che rispondono ai bisogni del territorio.', de: "Aus dem Centro entstehen konkrete Projekte, die auf die Bedürfnisse der Region eingehen.", en: "From the Centre, concrete projects take shape that respond to the needs of the local area." })}
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <AnimatedSection>
              <div className="bg-gradient-to-br from-[var(--soft-green)] to-[#7ab89a] rounded-3xl p-10 text-white shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
                <h3 className="text-3xl font-bold mb-4">{t({ pt: 'Creche', it: 'Asilo', de: "Kita", en: "Nursery School" })}</h3>
                <p className="text-lg mb-6 opacity-95 leading-relaxed">
                  {t({ pt: 'Um serviço educativo para a primeira infância, ativo cada dia.', it: 'Un servizio educativo per la prima infanzia, attivo ogni giorno.', de: "Ein pädagogisches Angebot für die frühe Kindheit, jeden Tag aktiv.", en: "An early childhood education service, active every day." })}
                </p>
                <Link
                  to="/asilo"
                  className="inline-block px-8 py-3 bg-white text-[var(--soft-green)] rounded-xl font-medium hover:shadow-lg transition-all"
                >
                  {t({ pt: 'Conheça a creche', it: "Scopri l'asilo", de: "Entdecken Sie die Kita", en: "Discover the nursery school" })}
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="bg-gradient-to-br from-[var(--warm-orange-light)] to-[var(--warm-orange)] rounded-3xl p-10 text-white shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
                <h3 className="text-3xl font-bold mb-4">{t({ pt: 'Projeto Escola', it: 'Progetto scuola', de: "Schulprojekt", en: "School project" })}</h3>
                <p className="text-lg mb-6 opacity-95 leading-relaxed">
                  {t({ pt: 'Um percurso em desenvolvimento para acompanhar as crianças também nos anos seguintes.', it: 'Un percorso in sviluppo per accompagnare i bambini anche negli anni successivi.', de: "Ein sich entwickelnder Weg, um die Kinder auch in den folgenden Jahren zu begleiten.", en: "A developing project to accompany children in the years that follow too." })}
                </p>
                <Link
                  to="/progetto-scuola"
                  className="inline-block px-8 py-3 bg-white text-[var(--warm-orange)] rounded-xl font-medium hover:shadow-lg transition-all"
                >
                  {t({ pt: 'Conheça o projeto escola', it: 'Scopri il progetto scuola', de: "Entdecken Sie das Schulprojekt", en: "Discover the school project" })}
                </Link>
              </div>
            </AnimatedSection>
          </div>

          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-12">
            <AnimatedSection>
              <h3 className="text-3xl md:text-4xl text-[var(--deep-blue)] mb-12 text-center font-bold">
                {t({ pt: 'Um impacto concreto', it: 'Un impatto concreto', de: "Eine konkrete Wirkung", en: "A concrete impact" })}
              </h3>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {[
                { number: '100+', label: t({ pt: 'crianças cada dia', it: 'bambini ogni giorno', de: "Kinder täglich", en: "children every day" }) },
                { number: '5', label: t({ pt: 'refeições quotidianas', it: 'pasti quotidiani', de: "Mahlzeiten täglich", en: "daily meals" }) },
                { number: '365', label: t({ pt: 'dias de presença contínua', it: 'giorni di presenza continua', de: "Tage kontinuierlicher Präsenz", en: "days of continuous presence" }) }
              ].map((item, index) => (
                <AnimatedSection key={item.label} delay={index * 0.1}>
                  <div className="text-center">
                    <div className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-[var(--deep-blue)] to-[var(--soft-green)] mb-3">{item.number}</div>
                    <div className="text-lg text-gray-700 font-medium">{item.label}</div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection delay={0.3}>
              <p className="text-xl text-gray-600 text-center italic mt-8">
                {t({ pt: 'Cada número representa uma presença real na vida das pessoas.', it: 'Ogni numero rappresenta una presenza reale nella vita delle persone.', de: "Jede Zahl steht für eine reale Präsenz im Leben der Menschen.", en: "Every number represents a real presence in people's lives." })}
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-24" style={{ display: 'block', marginTop: '-1px' }}>
        <path d="M0,50 C300,90 600,10 900,50 C1050,70 1150,50 1200,50 L1200,120 L0,120 Z" fill="#ffffff" />
      </svg>

      {/* SECTION 8 - DOCUMENTARI E RACCONTI */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="rounded-3xl overflow-hidden shadow-xl">
                <img loading="lazy"
                  src={documentariImg}
                  alt={t({ pt: 'Documentários e Relatos', it: 'Documentari e Racconti', de: "Dokumentationen und Erzählungen", en: "Documentaries and Stories" })}
                  className="w-full h-full min-h-[400px] object-cover"
                />
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl text-[var(--deep-blue)] font-bold">
                  {t({ pt: 'Documentários e Relatos', it: 'Documentari e Racconti', de: "Dokumentationen und Erzählungen", en: "Documentaries and Stories" })}
                </h2>
                <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                  <p>
                    {t({
                      pt: 'A vida do Centro Nossa Senhora Aparecida é feita de relações, encontros, educação e histórias compartilhadas.',
                      it: 'La vita del Centro Nossa Senhora Aparecida è fatta di relazioni, incontri, educazione e storie condivise.',
                      de: "Das Leben des Centro Nossa Senhora Aparecida besteht aus Beziehungen, Begegnungen, Bildung und gemeinsam erlebten Geschichten.",
                      en: "The life of the Centro Nossa Senhora Aparecida is made of relationships, encounters, education and shared stories."
                    })}
                  </p>
                  <p>
                    {t({
                      pt: 'Através de documentários, testemunhos e relatos audiovisuais é possível descobrir momentos significativos, projetos educativos, memórias e percursos que contam o crescimento da comunidade ao longo do tempo.',
                      it: 'Attraverso documentari, testimonianze e racconti audiovisivi è possibile scoprire momenti significativi, progetti educativi, memorie e percorsi che raccontano la crescita della comunità nel tempo.',
                      de: "Durch Dokumentationen, Zeugnisse und audiovisuelle Erzählungen lassen sich bedeutsame Momente, pädagogische Projekte, Erinnerungen und Wege entdecken, die das Wachstum der Gemeinschaft im Laufe der Zeit erzählen.",
                      en: "Through documentaries, testimonies and audiovisual stories, it is possible to discover meaningful moments, educational projects, memories and journeys that tell the story of the community's growth over time."
                    })}
                  </p>
                </div>
                <div className="pt-4">
                  <Button to="/documentari-racconti" variant="primary">
                    {t({ pt: 'Descubra os Documentários e Relatos', it: 'Scopri Documentari e Racconti', de: "Entdecken Sie Dokumentationen und Erzählungen", en: "Discover Documentaries and Stories" })}
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* SECTION 9 - INIZIATIVE */}
      <section className="py-24 bg-[var(--beige)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimatedSection delay={0.2}>
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl text-[var(--deep-blue)] font-bold">
                  {t({ pt: 'Iniciativas', it: 'Iniziative', de: "Initiativen", en: "Initiatives" })}
                </h2>
                <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                  <p>
                    {t({
                      pt: 'Ao longo do tempo, o Centro Nossa Senhora Aparecida promove iniciativas concretas para apoiar as crianças e as famílias mais vulneráveis.',
                      it: 'Nel tempo, il Centro Nossa Senhora Aparecida promuove iniziative concrete per sostenere i bambini e le famiglie più vulnerabili.',
                      de: "Im Laufe der Zeit fördert das Centro Nossa Senhora Aparecida konkrete Initiativen zur Unterstützung der besonders schutzbedürftigen Kinder und Familien.",
                      en: "Over time, the Centro Nossa Senhora Aparecida promotes concrete initiatives to support the most vulnerable children and families."
                    })}
                  </p>
                  <p>
                    {t({
                      pt: 'Cada iniciativa nasce de uma necessidade real, de um nome, de um rosto. É uma forma de transformar a solidariedade em presença, de fazer com que cada contribuição se torne parte de uma história de crescimento.',
                      it: 'Ogni iniziativa nasce da un bisogno reale, da un nome, da un volto. È un modo di trasformare la solidarietà in presenza, di fare in modo che ogni contributo diventi parte di una storia di crescita.',
                      de: "Jede Initiative entsteht aus einem realen Bedürfnis, aus einem Namen, aus einem Gesicht. Es ist eine Art, Solidarität in Präsenz zu verwandeln und jeden Beitrag zu einem Teil einer Wachstumsgeschichte werden zu lassen.",
                      en: "Every initiative is born from a real need, a name, a face. It is a way of turning solidarity into presence, making sure every contribution becomes part of a story of growth."
                    })}
                  </p>
                </div>
                <div className="pt-4">
                  <Button to="/iniziative" variant="primary">
                    {t({ pt: 'Descubra as Iniciativas', it: 'Scopri le Iniziative', de: "Entdecken Sie die Initiativen", en: "Discover the Initiatives" })}
                  </Button>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <div className="rounded-3xl overflow-hidden shadow-xl">
                <img loading="lazy"
                  src={iniziativeImg}
                  alt={t({ pt: 'Iniciativas', it: 'Iniziative', de: "Initiativen", en: "Initiatives" })}
                  className="w-full h-full min-h-[400px] object-cover"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-24" style={{ display: 'block', marginTop: '-1px' }}>
        <path d="M0,50 C300,10 600,90 900,50 C1050,30 1150,50 1200,50 L1200,0 L0,0 Z" fill="var(--beige)" />
      </svg>

      {/* SECTION 10 - CTA FINALE */}
      <section className="py-20 bg-[var(--beige)]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl text-[var(--deep-blue)] mb-6">
              {t({ pt: 'Apoie o Centro', it: 'Sostieni il Centro', de: "Unterstützen Sie das Centro", en: "Support the Centre" })}
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-10">
              {t({ pt: 'A sua ajuda permite continuar esta presença quotidiana e alcançar cada vez mais crianças e famílias.', it: 'Il tuo aiuto permette di continuare questa presenza quotidiana e raggiungere sempre più bambini e famiglie.', de: "Ihre Hilfe ermöglicht es, diese tägliche Präsenz fortzuführen und immer mehr Kinder und Familien zu erreichen.", en: "Your help makes it possible to continue this daily presence and reach more and more children and families." })}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button to="/dona-ora">{t({ pt: 'Doar agora', it: 'Dona ora', de: "Jetzt spenden", en: "Donate now" })}</Button>
              <Button variant="secondary" to="/cosa-puoi-fare-tu">{t({ pt: 'Saiba como ajudar', it: 'Scopri come aiutare', de: "Erfahren Sie, wie Sie helfen können", en: "Discover how to help" })}</Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
