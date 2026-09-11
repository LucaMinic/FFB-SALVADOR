import { } from 'lucide-react';
import { useT } from '../context/LanguageContext';
import { AnimatedSection } from './AnimatedSection';
import { Button } from './Button';
import padrePancrazioImg from '../../imports/PadrePancrazio.jpg';
import mappaImg from '../../imports/mappa_Italia_mondo.jpg';
import nasceCentroImg from '../../imports/centro-giornata-relazione.jpeg';
import cresceMissioneImg from '../../imports/centro-missao-cresce.jpeg';
import conventoImg from '../../imports/centro-convento-aereo.jpeg';
import primaPietraImg from '../../imports/converted-3.jpg';

// ─── Types ────────────────────────────────────────────────────────────────────

type BilingualText = { it: string; pt: string; de: string; en: string };
type EntryStatus = 'completed' | 'in-progress' | 'upcoming';

interface TimelineEntry {
  id: string;
  date: BilingualText;
  title: BilingualText;
  paragraphs: BilingualText[];
  image?: { src: string; alt: BilingualText };
  cta?: { label: BilingualText; to: string };
  status: EntryStatus;
}

// ─── Timeline data ─────────────────────────────────────────────────────────────

const entries: TimelineEntry[] = [
  {
    id: 'arrivo-salvador',
    date: { it: '2010', pt: '2010', de: '2010', en: "2010" },
    title: {
      it: "L'arrivo a Salvador de Bahia",
      pt: 'A chegada a Salvador da Bahia',
      de: 'Die Ankunft in Salvador de Bahia',
      en: "Arrival in Salvador de Bahia",
    },
    paragraphs: [
      {
        it: 'La Fraternità apre la sua prima missione in Brasile scegliendo di stabilirsi nel quartiere di São Cristóvão, nella periferia di Salvador de Bahia.',
        pt: 'Chegada ao Brasil. Em 10 de outubro de 2010, a Fraternidade Franciscana de Betânia dá início à sua primeira missão no Brasil, escolhendo estabelecer-se no bairro de São Cristóvão, na periferia de Salvador da Bahia.',
        de: 'Die Gemeinschaft eröffnet ihre erste Mission in Brasilien und lässt sich im Stadtviertel São Cristóvão am Rande von Salvador de Bahia nieder.',
        en: "The Fraternity opens its first mission in Brazil, choosing to settle in the São Cristóvão neighbourhood, on the outskirts of Salvador de Bahia.",
      },
      {
        it: 'Non si tratta semplicemente dell\'apertura di una nuova casa religiosa, ma dell\'inizio di una presenza missionaria stabile accanto alle persone più vulnerabili.',
        pt: 'Não se trata simplesmente da abertura de uma nova casa religiosa, mas do início de uma presença missionária concreta ao lado das pessoas mais vulneráveis.',
        de: 'Es handelt sich nicht einfach um die Eröffnung eines neuen Ordenshauses, sondern um den Beginn einer beständigen missionarischen Präsenz an der Seite der schwächsten Menschen.',
        en: "This is not simply the opening of a new religious house, but the beginning of a stable missionary presence alongside the most vulnerable people.",
      },
      {
        it: "I primi fratelli e le prime sorelle vivono in strutture provvisorie, condividendo la quotidianità della popolazione locale e costruendo relazioni fondate sull'ascolto, sulla fiducia e sulla fraternità.",
        pt: 'Os primeiros irmãos e irmãs viviam em estruturas provisórias, partilhando o cotidiano da comunidade local e construindo vínculos através da escuta, da confiança e da fraternidade.',
        de: 'Die ersten Brüder und Schwestern leben in provisorischen Unterkünften, teilen den Alltag der örtlichen Bevölkerung und bauen Beziehungen auf, die auf Zuhören, Vertrauen und Brüderlichkeit gründen.',
        en: "The first brothers and sisters live in temporary facilities, sharing the daily life of the local population and building relationships founded on listening, trust and fraternity.",
      },
    ],
    image: {
      src: mappaImg,
      alt: {
        it: "Dall'Italia al Brasile: l'arrivo della Fraternità a Salvador de Bahia",
        pt: 'Da Itália ao Brasil: a chegada da Fraternidade a Salvador da Bahia',
        de: 'Von Italien nach Brasilien: die Ankunft der Gemeinschaft in Salvador de Bahia',
        en: "From Italy to Brazil: the Fraternity's arrival in Salvador de Bahia",
      },
    },
    status: 'completed',
  },
  {
    id: 'nasce-centro',
    date: { it: '2012', pt: '2012', de: '2012', en: "2012" },
    title: {
      it: 'Nasce il Centro Nossa Senhora Aparecida',
      pt: 'Nasce o Centro Nossa Senhora Aparecida',
      de: 'Das Centro Nossa Senhora Aparecida entsteht',
      en: "The Centro Nossa Senhora Aparecida is born",
    },
    paragraphs: [
      {
        it: 'Dall\'ascolto delle necessità del territorio prende vita il Centro Nossa Senhora Aparecida, dedicato alla Patrona del Brasile.',
        pt: 'Da escuta das necessidades do território nasce o Centro Nossa Senhora Aparecida, dedicado à Padroeira do Brasil.',
        de: 'Aus dem Zuhören auf die Bedürfnisse des Gebiets entsteht das Centro Nossa Senhora Aparecida, das der Schutzpatronin Brasiliens gewidmet ist.',
        en: "From listening to the needs of the local area, the Centro Nossa Senhora Aparecida is born, dedicated to the Patroness of Brazil.",
      },
      {
        it: 'Il Centro nasce per offrire ai bambini delle famiglie più fragili un ambiente sicuro, educativo e ricco di opportunità.',
        pt: 'O Centro nasce para oferecer às crianças das famílias mais necessitadas um ambiente seguro, educativo e rico em oportunidades.',
        de: 'Das Zentrum entsteht, um den Kindern der bedürftigsten Familien eine sichere, bildende und chancenreiche Umgebung zu bieten.',
        en: "The Centre is created to offer children from the most vulnerable families a safe, educational environment full of opportunities.",
      },
      {
        it: 'Fin dai primi anni accoglie oltre cento bambini provenienti dalle comunità circostanti, proponendo attività educative, formative e ricreative che coinvolgono anche le loro famiglie.',
        pt: 'Desde os primeiros anos acolhe mais de cem crianças vindas das comunidades vizinhas, desenvolvendo atividades educativas, formativas e recreativas que envolvem também as suas famílias.',
        de: 'Schon in den ersten Jahren nimmt es über hundert Kinder aus den umliegenden Gemeinschaften auf und bietet Bildungs-, Förder- und Freizeitaktivitäten an, die auch ihre Familien einbeziehen.',
        en: "From its earliest years it welcomes more than a hundred children from the surrounding communities, offering educational, formative and recreational activities that also involve their families.",
      },
      {
        it: "L'obiettivo non è soltanto offrire assistenza, ma accompagnare ogni bambino nella propria crescita umana, culturale e spirituale, promuovendo valori di solidarietà, rispetto e responsabilità.",
        pt: 'O objetivo não é apenas oferecer assistência, mas acompanhar cada criança no seu crescimento humano, cultural e espiritual, promovendo valores de solidariedade, respeito e responsabilidade.',
        de: 'Das Ziel ist nicht nur, Unterstützung zu bieten, sondern jedes Kind in seinem menschlichen, kulturellen und geistlichen Wachstum zu begleiten und Werte wie Solidarität, Respekt und Verantwortung zu fördern.',
        en: "The goal is not only to provide assistance, but to accompany every child in their own human, cultural and spiritual growth, promoting values of solidarity, respect and responsibility.",
      },
    ],
    image: {
      src: nasceCentroImg,
      alt: {
        it: 'I primi anni del Centro Nossa Senhora Aparecida',
        pt: 'Os primeiros anos do Centro Nossa Senhora Aparecida',
        de: 'Die ersten Jahre des Centro Nossa Senhora Aparecida',
        en: "The early years of the Centro Nossa Senhora Aparecida",
      },
    },
    status: 'completed',
  },
  {
    id: 'cresce-missione',
    date: { it: '2012 – 2021', pt: '2012 – 2021', de: '2012 – 2021', en: "2012 – 2021" },
    title: {
      it: 'Cresce la missione',
      pt: 'A missão cresce',
      de: 'Die Mission wächst',
      en: "The mission grows",
    },
    paragraphs: [
      {
        it: "Negli anni successivi il Centro Nossa Senhora Aparecida diventa un punto di riferimento per l'intero quartiere. Accanto alle attività dedicate all'infanzia si sviluppano iniziative di promozione umana, sostegno alle famiglie, formazione spirituale e servizi rivolti alla comunità. Parallelamente nasce il progetto di realizzare un convento che possa diventare il cuore della vita della Fraternità e delle opere sociali.",
        pt: 'Nos anos seguintes, o Centro Nossa Senhora Aparecida torna-se um ponto de referência. Nos anos seguintes, o Centro Nossa Senhora Aparecida torna-se um ponto de referência na comunidade, além das atividades voltadas para a infância, também são promovidas iniciativas de promoção humana, apoio às famílias e formação espiritual. No ano de 2017 tem início também a construção do convento.',
        de: 'In den folgenden Jahren wird das Centro Nossa Senhora Aparecida zu einem Bezugspunkt für das gesamte Viertel. Neben den Aktivitäten für Kinder entwickeln sich Initiativen zur menschlichen Förderung, Familienunterstützung, geistlichen Bildung und Dienste für die Gemeinschaft. Parallel dazu entsteht das Projekt, ein Kloster zu errichten, das zum Herzen des Lebens der Gemeinschaft und der sozialen Werke werden soll.',
        en: "In the following years, the Centro Nossa Senhora Aparecida becomes a point of reference for the whole neighbourhood. Alongside activities dedicated to children, initiatives for human development, family support, spiritual formation and community services are developed. At the same time, the project to build a convent that could become the heart of the Fraternity's life and social works is born.",
      },
    ],
    image: {
      src: cresceMissioneImg,
      alt: {
        it: 'La crescita delle attività del Centro',
        pt: 'O crescimento das atividades do Centro',
        de: 'Das Wachstum der Aktivitäten des Zentrums',
        en: "The growth of the Centre's activities",
      },
    },
    status: 'completed',
  },
  {
    id: 'nuovo-convento',
    date: { it: '2022', pt: '2022', de: '2022', en: "2022" },
    title: {
      it: "L'inaugurazione del nuovo convento",
      pt: 'A inauguração do novo convento',
      de: 'Die Einweihung des neuen Klosters',
      en: "The inauguration of the new convent",
    },
    paragraphs: [
      {
        it: 'Dopo oltre dieci anni di presenza missionaria viene inaugurato il nuovo Convento della Fraternità Francescana di Betania.',
        pt: 'Depois de mais de dez anos de presença missionária, é inaugurado o novo Convento da Fraternidade Franciscana de Betânia.',
        de: 'Nach mehr als zehn Jahren missionarischer Präsenz wird das neue Kloster der Franziskanischen Gemeinschaft von Betania eingeweiht.',
        en: "After more than ten years of missionary presence, the new Convent of the Franciscan Fraternity of Betania is inaugurated.",
      },
      {
        it: "Realizzato con un'architettura semplice ed essenziale, perfettamente integrata nel clima e nel territorio di Bahia, il convento rappresenta oggi il cuore spirituale e operativo della missione.",
        pt: 'Realizado com uma arquitetura simples e essencial, perfeitamente integrada ao clima e ao território da Bahia, o convento representa hoje o coração espiritual e operativo da missão.',
        de: 'Mit einer einfachen, wesentlichen Architektur errichtet, die perfekt in das Klima und das Gebiet von Bahia integriert ist, stellt das Kloster heute das geistliche und operative Herz der Mission dar.',
        en: "Built with simple, essential architecture, perfectly integrated into the climate and landscape of Bahia, the convent today represents the spiritual and operational heart of the mission.",
      },
    ],
    image: {
      src: conventoImg,
      alt: {
        it: 'Vista aerea del Centro e del nuovo convento',
        pt: 'Vista aérea do Centro e do novo convento',
        de: 'Luftaufnahme des Zentrums und des neuen Klosters',
        en: "Aerial view of the Centre and the new convent",
      },
    },
    status: 'completed',
  },
  {
    id: 'inizio-lavori-scuola',
    date: { it: '2026', pt: '2026', de: '2026', en: "2026" },
    title: {
      it: 'Inizio dei lavori della Scuola Nossa Senhora Aparecida',
      pt: 'Início das obras da Escola Nossa Senhora Aparecida',
      de: 'Baubeginn der Schule Nossa Senhora Aparecida',
      en: "Start of construction of the Nossa Senhora Aparecida School",
    },
    paragraphs: [
      {
        it: "Dopo anni di presenza educativa attraverso l'asilo, il Centro Nossa Senhora Aparecida compie un nuovo e decisivo passo nel proprio cammino.",
        pt: 'Depois de anos de presença educativa através da creche, o Centro Nossa Senhora Aparecida dá um novo e decisivo passo no seu caminho.',
        de: 'Nach Jahren pädagogischer Präsenz durch die Kita geht das Centro Nossa Senhora Aparecida einen neuen, entscheidenden Schritt auf seinem Weg.',
        en: "After years of educational presence through the nursery school, the Centro Nossa Senhora Aparecida takes a new and decisive step in its journey.",
      },
      {
        it: "Con la posa della prima pietra iniziano ufficialmente i lavori per la costruzione della Scuola Nossa Senhora Aparecida, destinata ad accompagnare bambini e ragazzi dai 6 ai 18 anni, offrendo loro un percorso educativo completo. La nuova scuola sorgerà accanto al Centro già esistente e potrà accogliere circa 400 studenti, garantendo gratuitamente un'istruzione di qualità unita alla formazione umana, sociale e cristiana. L'opera è resa possibile grazie al sostegno della Cooperazione Italiana, del Ministero degli Affari Esteri e della Cooperazione Internazionale, dell'Organizzazione Internazionale Italo-Latino Americana (IILA) e di numerosi benefattori che hanno creduto nel progetto. Con questa nuova realizzazione prende forma uno dei sogni più grandi di padre Pancrazio Gaudioso: offrire ai bambini delle periferie di Salvador non soltanto un luogo dove essere accolti nei primi anni di vita, ma un percorso educativo completo capace di accompagnarli fino alla maggiore età.",
        pt: 'Nos anos seguintes, o Centro Nossa Senhora Aparecida torna-se um ponto de referência na comunidade, além das atividades voltadas para a infância, também são promovidas iniciativas de promoção humana, apoio às famílias e formação espiritual. No ano de 2017 tem início também a construção do convento. Com o lançamento da pedra fundamental, iniciam-se oficialmente as obras de construção da Escola Nossa Senhora Aparecida, destinada a acompanhar crianças e jovens dos 6 aos 18 anos, oferecendo-lhes um percurso educativo completo do ensino fundamental ao ensino médio. A nova escola será construída para acolher cerca de 400 estudantes, garantindo gratuitamente uma educação de qualidade aliada à formação humana, social e cristã. A obra se tornou possível graças ao apoio da Cooperação Italiana, do Ministério das Relações Exteriores e da Cooperação Internacional, Organização Internacional Ítalo-Latino-Americana (IILA) e de numerosos benfeitores que acreditaram no projeto. Com esta nova obra se concretiza o maior sonho do padre Pancrazio Gaudioso, oferecer às crianças desta comunidade de Salvador, não apenas um lugar de acolhimento nos primeiros anos de vida, mas um percurso educativo completo capaz de transformar o futuro.',
        de: 'Mit der Grundsteinlegung beginnen offiziell die Bauarbeiten für die Schule Nossa Senhora Aparecida, die Kinder und Jugendliche von 6 bis 18 Jahren begleiten und ihnen einen vollständigen Bildungsweg bieten soll. Die neue Schule entsteht neben dem bereits bestehenden Zentrum und wird rund 400 Schülerinnen und Schüler aufnehmen können, denen kostenlos eine qualitativ hochwertige Bildung zusammen mit menschlicher, sozialer und christlicher Erziehung geboten wird. Das Werk wird möglich dank der Unterstützung der Italienischen Entwicklungszusammenarbeit, des Ministeriums für Auswärtige Angelegenheiten und Internationale Zusammenarbeit, der Italienisch-Lateinamerikanischen Internationalen Organisation (IILA) und zahlreicher Wohltäter, die an das Projekt geglaubt haben. Mit diesem neuen Werk nimmt einer der größten Träume von Pater Pancrazio Gaudioso Gestalt an: den Kindern aus den Randgebieten von Salvador nicht nur einen Ort zu bieten, an dem sie in den ersten Lebensjahren aufgenommen werden, sondern einen vollständigen Bildungsweg, der sie bis zur Volljährigkeit begleiten kann.',
        en: "With the laying of the first stone, construction officially begins on the Nossa Senhora Aparecida School, intended to accompany children and young people from age 6 to 18, offering them a complete educational path. The new school will be built alongside the existing Centre and will be able to welcome around 400 students, guaranteeing a free, quality education combined with human, social and Christian formation. The work is made possible thanks to the support of Italian Cooperation, the Ministry of Foreign Affairs and International Cooperation, the Italo-Latin American International Organisation (IILA) and numerous benefactors who believed in the project. With this new undertaking, one of Father Pancrazio Gaudioso's greatest dreams takes shape: to offer children from the outskirts of Salvador not only a place to be welcomed in their first years of life, but a complete educational path able to accompany them into adulthood.",
      },
    ],
    image: {
      src: primaPietraImg,
      alt: {
        it: 'La posa della prima pietra della Scuola Nossa Senhora Aparecida',
        pt: 'O lançamento da pedra fundamental da Escola Nossa Senhora Aparecida',
        de: 'Die Grundsteinlegung der Schule Nossa Senhora Aparecida',
        en: "The laying of the first stone of the Nossa Senhora Aparecida School",
      },
    },
    cta: {
      label: { it: "Segui l'avanzamento lavori", pt: 'Acompanhe o andamento das obras', de: 'Verfolgen Sie den Baufortschritt', en: "Follow the construction progress" },
      to: '/avanzamento-lavori',
    },
    status: 'in-progress',
  },
];

// ─── Status config ─────────────────────────────────────────────────────────────

const statusConfig: Record<EntryStatus, { dot: string; badge: string; label: BilingualText }> = {
  completed: {
    dot: 'bg-[var(--soft-green)]',
    badge: 'bg-[var(--soft-green)] text-white',
    label: { it: 'Compiuto', pt: 'Concluído', de: 'Abgeschlossen', en: "Completed" },
  },
  'in-progress': {
    dot: 'bg-[var(--warm-orange)]',
    badge: 'bg-[var(--warm-orange)] text-white',
    label: { it: 'In corso', pt: 'Em andamento', de: 'In Arbeit', en: "In progress" },
  },
  upcoming: {
    dot: 'bg-gray-300',
    badge: 'bg-gray-200 text-gray-600',
    label: { it: 'Domani', pt: 'Amanhã', de: 'Morgen', en: "Tomorrow" },
  },
};

// ─── Component ────────────────────────────────────────────────────────────────

export function StoriaCentroPage() {
  const t = useT();

  return (
    <div className="bg-white">

      {/* ── HERO ──────────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden py-32">
        <div className="absolute inset-0">
          <img
            src={padrePancrazioImg}
            alt={t({ it: 'Fra Pancrazio Gaudioso, fondatore della Fraternità Francescana di Betania', pt: 'Frei Pancrazio Gaudioso, fundador da Fraternidade Franciscana de Betânia', de: 'Bruder Pancrazio Gaudioso, Gründer der Franziskanischen Gemeinschaft von Betania', en: "Friar Pancrazio Gaudioso, founder of the Franciscan Fraternity of Betania" })}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--deep-blue)]/70 via-[var(--deep-blue)]/50 to-[var(--deep-blue)]/70" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <AnimatedSection>
            <p className="text-white/70 uppercase tracking-[0.2em] text-sm font-medium mb-4">
              Centro Nossa Senhora Aparecida
            </p>
            <h1 className="text-5xl md:text-6xl mb-6">
              {t({ it: 'La storia del Centro', pt: 'A história do Centro', de: 'Die Geschichte des Zentrums', en: "The History of the Centre" })}
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-xl md:text-2xl mb-10 leading-relaxed max-w-3xl mx-auto">
              {t({
                it: 'La storia della Fraternità Francescana di Betania a Salvador de Bahia è il racconto di un progetto nato dalla fede, cresciuto attraverso il servizio e alimentato dalla speranza. Ogni tappa rappresenta un passo concreto verso un obiettivo preciso: offrire ai bambini e alle famiglie più fragili nuove opportunità di crescita, istruzione e dignità.',
                pt: 'O fundador Padre Pancrazio Nicola Gaudioso quis realizar em Salvador- Bahia um centro de acolhimento para crianças e adolescentes seriamente necessitados. Com o objetivo de oferecer um serviço, à luz do Evangelho e do carisma da fraternidade de Betânia, que assegure ao menor e as suas famílias a possibilidade de desenvolvimento pessoal numa dimensão espiritual, no concreto exercício do próprio direito à vida, à saúde, à alimentação, à educação, ao esporte, ao lazer, à profissionalização, à cultura, à dignidade, ao respeito, à liberdade e à convivência tanto familiar como comunitária.',
                de: 'Die Geschichte der Franziskanischen Gemeinschaft von Betania in Salvador de Bahia ist die Erzählung eines Projekts, das aus dem Glauben geboren wurde, durch den Dienst gewachsen ist und von der Hoffnung genährt wird. Jede Etappe ist ein konkreter Schritt auf ein klares Ziel hin: den bedürftigsten Kindern und Familien neue Möglichkeiten für Wachstum, Bildung und Würde zu bieten.',
                en: "The story of the Franciscan Fraternity of Betania in Salvador de Bahia is the account of a project born of faith, grown through service and nourished by hope. Each stage represents a concrete step towards a clear goal: offering the most vulnerable children and families new opportunities for growth, education and dignity.",
              })}
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" href="#cronologia" className="text-lg px-8 py-4 bg-white/10 backdrop-blur-sm border-white hover:bg-white/20">
                {t({ it: 'Scopri la cronologia', pt: 'Conheça a cronologia', de: 'Entdecken Sie die Chronologie', en: "Discover the timeline" })}
              </Button>
              <Button variant="primary" to="/dona-ora" className="text-lg px-8 py-4">
                {t({ pt: 'Doe agora', it: 'Dona ora', de: 'Jetzt spenden', en: "Donate now" })}
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── WAVE hero → beige ─────────────────────────────────────────────────── */}
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-24" style={{ display: 'block', marginTop: '-1px' }}>
        <path d="M0,50 C300,10 600,90 900,50 C1050,30 1150,50 1200,50 L1200,0 L0,0 Z" fill="var(--beige)" />
      </svg>

      {/* ── TIMELINE ──────────────────────────────────────────────────────────── */}
      <section id="cronologia" className="py-20 bg-[var(--beige)]">
        <div className="max-w-4xl mx-auto px-6">

          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl text-[var(--deep-blue)] mb-4 text-center">
              {t({ it: 'Cronologia della missione', pt: 'Linha do tempo', de: 'Chronologie der Mission', en: "Timeline of the mission" })}
            </h2>
            <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto leading-relaxed">
              {t({
                it: 'Dalla fondazione della Fraternità in Italia fino al progetto della nuova scuola: le tappe che hanno segnato il cammino del Centro.',
                pt: 'As etapas que marcaram o caminho do Centro.',
                de: 'Von der Gründung der Gemeinschaft in Italien bis zum Projekt der neuen Schule: die Etappen, die den Weg des Zentrums geprägt haben.',
                en: "From the founding of the Fraternity in Italy to the new school project: the stages that have marked the Centre's journey.",
              })}
            </p>
          </AnimatedSection>

          {/* Vertical timeline */}
          <div className="relative">
            <div className="absolute left-5 top-3 bottom-6 w-0.5 bg-gradient-to-b from-[var(--deep-blue)]/30 via-[var(--deep-blue)]/20 to-transparent" />

            <div className="space-y-12">
              {entries.map((entry, index) => {
                const cfg = statusConfig[entry.status];

                return (
                  <AnimatedSection key={entry.id} delay={Math.min(index * 0.08, 0.4)}>
                    <div className="relative pl-14">

                      {/* Timeline dot */}
                      <div className={`absolute left-[11px] top-3 w-[18px] h-[18px] rounded-full ${cfg.dot} ring-4 ring-[var(--beige)] shadow-md z-10`} />

                      {/* Card */}
                      <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
                        <div className="p-8 pb-0">
                          <div className="flex flex-wrap items-center gap-2 mb-5">
                            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold ${cfg.badge}`}>
                              {t(cfg.label)}
                            </span>
                            <span className="text-sm font-semibold text-[var(--deep-blue)] bg-[var(--beige)] px-3 py-1 rounded-full">
                              {t(entry.date)}
                            </span>
                          </div>
                          <h3 className="text-2xl md:text-3xl font-bold text-[var(--deep-blue)] mb-3">
                            {t(entry.title)}
                          </h3>
                          <div className="space-y-4 text-gray-700 text-lg leading-relaxed pb-6 border-b border-gray-100">
                            {entry.paragraphs.map((p, i) => (
                              <p key={i}>{t(p)}</p>
                            ))}
                          </div>
                        </div>

                        {entry.image && (
                          <div className="p-4 md:p-8">
                            <div className="rounded-2xl overflow-hidden shadow-md">
                              <img loading="lazy"
                                src={entry.image.src}
                                alt={t(entry.image.alt)}
                                className="w-full aspect-[3/2] md:aspect-auto md:h-96 object-cover"
                              />
                            </div>
                          </div>
                        )}

                        {entry.cta && (
                          <div className="px-8 pb-8">
                            <Button variant="secondary" to={entry.cta.to}>
                              {t(entry.cta.label)}
                            </Button>
                          </div>
                        )}
                      </div>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── WAVE beige → white ────────────────────────────────────────────────── */}
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-24" style={{ display: 'block', marginTop: '-1px' }}>
        <path d="M0,50 C300,90 600,10 900,50 C1050,70 1150,50 1200,50 L1200,120 L0,120 Z" fill="#ffffff" />
      </svg>

      {/* ── QUOTE ─────────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection>
            <div className="bg-gradient-to-br from-[var(--beige)] to-white p-12 rounded-3xl border-l-4 border-[var(--deep-blue)] shadow-lg">
              <p className="text-2xl md:text-3xl text-[var(--deep-blue)] italic text-center leading-relaxed">
                {t({
                  it: '"Educare significa donare futuro. È questo il cuore della missione della Fraternità Francescana di Betania a Salvador de Bahia: trasformare l\'accoglienza in opportunità e la speranza in un cammino di vita."',
                  pt: '"Educar significa doar futuro. É este o coração da missão da Fraternidade Franciscana de Betânia em Salvador da Bahia: transformar o acolhimento em oportunidade e a esperança num caminho de vida."',
                  de: '"Erziehen bedeutet, Zukunft zu schenken. Das ist der Kern der Mission der Franziskanischen Gemeinschaft von Betania in Salvador de Bahia: die Aufnahme in Chancen zu verwandeln und die Hoffnung in einen Lebensweg."',
                  en: "\"Educating means giving a future. This is the heart of the mission of the Franciscan Fraternity of Betania in Salvador de Bahia: turning welcome into opportunity and hope into a life journey.\"",
                })}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-gradient-to-br from-[var(--deep-blue)] to-[#2c5f7f] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl mb-6">
              {t({ it: 'Fai parte anche tu di questa storia', pt: 'Faça também parte desta história', de: 'Werden Sie Teil dieser Geschichte', en: "Be part of this story too" })}
            </h2>
            <p className="text-xl leading-relaxed mb-10 opacity-90">
              {t({
                it: 'Il prossimo capitolo si scrive insieme a te: sostieni la costruzione della Scuola Nossa Senhora Aparecida.',
                pt: 'O próximo capítulo escreve-se junto contigo: apoie a construção da Escola Nossa Senhora Aparecida.',
                de: 'Das nächste Kapitel wird gemeinsam mit Ihnen geschrieben: unterstützen Sie den Bau der Schule Nossa Senhora Aparecida.',
                en: "The next chapter is being written together with you: support the construction of the Nossa Senhora Aparecida School.",
              })}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button to="/dona-ora">
                {t({ pt: 'Doe agora', it: 'Dona ora', de: 'Jetzt spenden', en: "Donate now" })}
              </Button>
              <Button variant="secondary" to="/progetto-scuola">
                {t({ it: 'Scopri il progetto scuola', pt: 'Conheça o projeto escola', de: 'Entdecken Sie das Schulprojekt', en: "Discover the school project" })}
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
