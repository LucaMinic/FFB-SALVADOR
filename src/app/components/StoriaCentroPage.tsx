import { ChevronDown } from 'lucide-react';
import { useT } from '../context/LanguageContext';
import { AnimatedSection } from './AnimatedSection';
import { Button } from './Button';
import padrePancrazioImg from '../../imports/PadrePancrazio.jpg';
import mappaImg from '../../imports/mappa_Italia_mondo.jpg';
import nasceCentroImg from '../../imports/centro-giornata-relazione.jpeg';
import cresceMissioneImg from '../../imports/centro-giornata-brincadeira.jpeg';
import conventoImg from '../../imports/centro-convento-aereo.jpeg';
import mattarellaImg from '../../imports/21.jpeg';
import primaPietraImg from '../../imports/converted-3.jpg';
import oggiImg from '../../imports/33.jpeg';

// ─── Types ────────────────────────────────────────────────────────────────────

type BilingualText = { it: string; pt: string; de: string };
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
    id: 'nascita-fraternita',
    date: { it: '1982', pt: '1982', de: '1982' },
    title: {
      it: 'Nasce la Fraternità Francescana di Betania',
      pt: 'Nasce a Fraternidade Franciscana de Betânia',
      de: 'Die Franziskanische Bruderschaft von Betania entsteht',
    },
    paragraphs: [
      {
        it: 'Per iniziativa di fra Pancrazio Gaudioso, frate cappuccino, nasce in Italia la Fraternità Francescana di Betania.',
        pt: 'Por iniciativa de frei Pancrazio Gaudioso, frade capuchinho, nasce em Itália a Fraternidade Franciscana de Betânia.',
        de: 'Auf Initiative von Bruder Pancrazio Gaudioso, einem Kapuzinermönch, entsteht in Italien die Franziskanische Bruderschaft von Betania.',
      },
      {
        it: "Fin dalle origini la comunità sceglie di vivere il Vangelo secondo lo spirito di San Francesco d'Assisi e della casa di Betania: un luogo di accoglienza, fraternità, preghiera e condivisione.",
        pt: 'Desde as origens, a comunidade escolhe viver o Evangelho segundo o espírito de São Francisco de Assis e da casa de Betânia: um lugar de acolhimento, fraternidade, oração e partilha.',
        de: 'Von Anfang an entscheidet sich die Gemeinschaft, das Evangelium im Geist des heiligen Franziskus von Assisi und des Hauses von Betanien zu leben: ein Ort der Gastfreundschaft, der Brüderlichkeit, des Gebets und des Teilens.',
      },
      {
        it: "Negli anni successivi la Fraternità si diffonde in Italia e all'estero, portando il proprio carisma nei luoghi segnati dalla povertà materiale e spirituale.",
        pt: 'Nos anos seguintes, a Fraternidade difunde-se em Itália e no exterior, levando o seu carisma aos lugares marcados pela pobreza material e espiritual.',
        de: 'In den folgenden Jahren verbreitet sich die Bruderschaft in Italien und im Ausland und trägt ihr Charisma an Orte, die von materieller und geistlicher Armut geprägt sind.',
      },
    ],
    image: {
      src: padrePancrazioImg,
      alt: {
        it: 'Fra Pancrazio Gaudioso, fondatore della Fraternità Francescana di Betania',
        pt: 'Frei Pancrazio Gaudioso, fundador da Fraternidade Franciscana de Betânia',
        de: 'Bruder Pancrazio Gaudioso, Gründer der Franziskanischen Bruderschaft von Betania',
      },
    },
    status: 'completed',
  },
  {
    id: 'arrivo-salvador',
    date: { it: '2010', pt: '2010', de: '2010' },
    title: {
      it: "L'arrivo a Salvador de Bahia",
      pt: 'A chegada a Salvador da Bahia',
      de: 'Die Ankunft in Salvador de Bahia',
    },
    paragraphs: [
      {
        it: 'La Fraternità apre la sua prima missione in Brasile scegliendo di stabilirsi nel quartiere di São Cristóvão, nella periferia di Salvador de Bahia.',
        pt: 'A Fraternidade abre a sua primeira missão no Brasil, escolhendo estabelecer-se no bairro de São Cristóvão, na periferia de Salvador da Bahia.',
        de: 'Die Bruderschaft eröffnet ihre erste Mission in Brasilien und lässt sich im Stadtviertel São Cristóvão am Rande von Salvador de Bahia nieder.',
      },
      {
        it: 'Non si tratta semplicemente dell\'apertura di una nuova casa religiosa, ma dell\'inizio di una presenza missionaria stabile accanto alle persone più vulnerabili.',
        pt: 'Não se trata simplesmente da abertura de uma nova casa religiosa, mas do início de uma presença missionária estável ao lado das pessoas mais vulneráveis.',
        de: 'Es handelt sich nicht einfach um die Eröffnung eines neuen Ordenshauses, sondern um den Beginn einer beständigen missionarischen Präsenz an der Seite der schwächsten Menschen.',
      },
      {
        it: "I primi fratelli e le prime sorelle vivono in strutture provvisorie, condividendo la quotidianità della popolazione locale e costruendo relazioni fondate sull'ascolto, sulla fiducia e sulla fraternità.",
        pt: 'Os primeiros irmãos e irmãs vivem em estruturas provisórias, partilhando o quotidiano da população local e construindo relações fundadas na escuta, na confiança e na fraternidade.',
        de: 'Die ersten Brüder und Schwestern leben in provisorischen Unterkünften, teilen den Alltag der örtlichen Bevölkerung und bauen Beziehungen auf, die auf Zuhören, Vertrauen und Brüderlichkeit gründen.',
      },
    ],
    image: {
      src: mappaImg,
      alt: {
        it: "Dall'Italia al Brasile: l'arrivo della Fraternità a Salvador de Bahia",
        pt: 'Da Itália ao Brasil: a chegada da Fraternidade a Salvador da Bahia',
        de: 'Von Italien nach Brasilien: die Ankunft der Bruderschaft in Salvador de Bahia',
      },
    },
    status: 'completed',
  },
  {
    id: 'nasce-centro',
    date: { it: '2012', pt: '2012', de: '2012' },
    title: {
      it: 'Nasce il Centro Nossa Senhora Aparecida',
      pt: 'Nasce o Centro Nossa Senhora Aparecida',
      de: 'Das Centro Nossa Senhora Aparecida entsteht',
    },
    paragraphs: [
      {
        it: 'Dall\'ascolto delle necessità del territorio prende vita il Centro Nossa Senhora Aparecida, dedicato alla Patrona del Brasile.',
        pt: 'Da escuta das necessidades do território nasce o Centro Nossa Senhora Aparecida, dedicado à Padroeira do Brasil.',
        de: 'Aus dem Zuhören auf die Bedürfnisse des Gebiets entsteht das Centro Nossa Senhora Aparecida, das der Schutzpatronin Brasiliens gewidmet ist.',
      },
      {
        it: 'Il Centro nasce per offrire ai bambini delle famiglie più fragili un ambiente sicuro, educativo e ricco di opportunità.',
        pt: 'O Centro nasce para oferecer às crianças das famílias mais frágeis um ambiente seguro, educativo e rico em oportunidades.',
        de: 'Das Zentrum entsteht, um den Kindern der bedürftigsten Familien eine sichere, bildende und chancenreiche Umgebung zu bieten.',
      },
      {
        it: 'Fin dai primi anni accoglie oltre cento bambini provenienti dalle comunità circostanti, proponendo attività educative, formative e ricreative che coinvolgono anche le loro famiglie.',
        pt: 'Desde os primeiros anos acolhe mais de cem crianças vindas das comunidades vizinhas, propondo atividades educativas, formativas e recreativas que envolvem também as suas famílias.',
        de: 'Schon in den ersten Jahren nimmt es über hundert Kinder aus den umliegenden Gemeinschaften auf und bietet Bildungs-, Förder- und Freizeitaktivitäten an, die auch ihre Familien einbeziehen.',
      },
      {
        it: "L'obiettivo non è soltanto offrire assistenza, ma accompagnare ogni bambino nella propria crescita umana, culturale e spirituale, promuovendo valori di solidarietà, rispetto e responsabilità.",
        pt: 'O objetivo não é apenas oferecer assistência, mas acompanhar cada criança no seu crescimento humano, cultural e espiritual, promovendo valores de solidariedade, respeito e responsabilidade.',
        de: 'Das Ziel ist nicht nur, Unterstützung zu bieten, sondern jedes Kind in seinem menschlichen, kulturellen und geistlichen Wachstum zu begleiten und Werte wie Solidarität, Respekt und Verantwortung zu fördern.',
      },
    ],
    image: {
      src: nasceCentroImg,
      alt: {
        it: 'I primi anni del Centro Nossa Senhora Aparecida',
        pt: 'Os primeiros anos do Centro Nossa Senhora Aparecida',
        de: 'Die ersten Jahre des Centro Nossa Senhora Aparecida',
      },
    },
    status: 'completed',
  },
  {
    id: 'cresce-missione',
    date: { it: '2012 – 2021', pt: '2012 – 2021', de: '2012 – 2021' },
    title: {
      it: 'Cresce la missione',
      pt: 'A missão cresce',
      de: 'Die Mission wächst',
    },
    paragraphs: [
      {
        it: "Negli anni successivi il Centro Nossa Senhora Aparecida diventa un punto di riferimento per l'intero quartiere.",
        pt: 'Nos anos seguintes, o Centro Nossa Senhora Aparecida torna-se um ponto de referência para todo o bairro.',
        de: 'In den folgenden Jahren wird das Centro Nossa Senhora Aparecida zu einem Bezugspunkt für das gesamte Viertel.',
      },
      {
        it: "Accanto alle attività dedicate all'infanzia si sviluppano iniziative di promozione umana, sostegno alle famiglie, formazione spirituale e servizi rivolti alla comunità.",
        pt: 'Ao lado das atividades dedicadas à infância desenvolvem-se iniciativas de promoção humana, apoio às famílias, formação espiritual e serviços voltados à comunidade.',
        de: 'Neben den Aktivitäten für Kinder entwickeln sich Initiativen zur menschlichen Förderung, Familienunterstützung, geistlichen Bildung und Dienste für die Gemeinschaft.',
      },
      {
        it: 'Parallelamente nasce il progetto di realizzare un convento che possa diventare il cuore della vita della Fraternità e delle opere sociali.',
        pt: 'Paralelamente, nasce o projeto de construir um convento que possa tornar-se o coração da vida da Fraternidade e das obras sociais.',
        de: 'Parallel dazu entsteht das Projekt, ein Kloster zu errichten, das zum Herzen des Lebens der Bruderschaft und der sozialen Werke werden soll.',
      },
    ],
    image: {
      src: cresceMissioneImg,
      alt: {
        it: 'La crescita delle attività del Centro',
        pt: 'O crescimento das atividades do Centro',
        de: 'Das Wachstum der Aktivitäten des Zentrums',
      },
    },
    status: 'completed',
  },
  {
    id: 'nuovo-convento',
    date: { it: '2022', pt: '2022', de: '2022' },
    title: {
      it: "L'inaugurazione del nuovo convento",
      pt: 'A inauguração do novo convento',
      de: 'Die Einweihung des neuen Klosters',
    },
    paragraphs: [
      {
        it: 'Dopo oltre dieci anni di presenza missionaria viene inaugurato il nuovo Convento della Fraternità Francescana di Betania.',
        pt: 'Depois de mais de dez anos de presença missionária, é inaugurado o novo Convento da Fraternidade Franciscana de Betânia.',
        de: 'Nach mehr als zehn Jahren missionarischer Präsenz wird das neue Kloster der Franziskanischen Bruderschaft von Betania eingeweiht.',
      },
      {
        it: 'L\'edificio è progettato come una "casa aperta", capace di accogliere la comunità religiosa e, nello stesso tempo, di offrire spazi dedicati alla preghiera, alla formazione, all\'incontro e alle attività educative.',
        pt: 'O edifício é concebido como uma "casa aberta", capaz de acolher a comunidade religiosa e, ao mesmo tempo, oferecer espaços dedicados à oração, à formação, ao encontro e às atividades educativas.',
        de: 'Das Gebäude ist als „offenes Haus" konzipiert, das die Ordensgemeinschaft aufnimmt und zugleich Räume für Gebet, Bildung, Begegnung und pädagogische Aktivitäten bietet.',
      },
      {
        it: "Realizzato con un'architettura semplice ed essenziale, perfettamente integrata nel clima e nel territorio di Bahia, il convento rappresenta oggi il cuore spirituale e operativo della missione.",
        pt: 'Realizado com uma arquitetura simples e essencial, perfeitamente integrada ao clima e ao território da Bahia, o convento representa hoje o coração espiritual e operativo da missão.',
        de: 'Mit einer einfachen, wesentlichen Architektur errichtet, die perfekt in das Klima und das Gebiet von Bahia integriert ist, stellt das Kloster heute das geistliche und operative Herz der Mission dar.',
      },
    ],
    image: {
      src: conventoImg,
      alt: {
        it: 'Vista aerea del Centro e del nuovo convento',
        pt: 'Vista aérea do Centro e do novo convento',
        de: 'Luftaufnahme des Zentrums und des neuen Klosters',
      },
    },
    status: 'completed',
  },
  {
    id: 'visita-mattarella',
    date: { it: '2024', pt: '2024', de: '2024' },
    title: {
      it: 'La visita del Presidente della Repubblica Sergio Mattarella',
      pt: 'A visita do Presidente da República Sergio Mattarella',
      de: 'Der Besuch des Staatspräsidenten Sergio Mattarella',
    },
    paragraphs: [
      {
        it: 'Il 19 luglio 2024 il Presidente della Repubblica Italiana, Sergio Mattarella, visita la Fraternità Francescana di Betania e il Centro Nossa Senhora Aparecida durante la sua Visita di Stato nella Repubblica Federativa del Brasile.',
        pt: 'Em 19 de julho de 2024, o Presidente da República Italiana, Sergio Mattarella, visita a Fraternidade Franciscana de Betânia e o Centro Nossa Senhora Aparecida durante a sua Visita de Estado à República Federativa do Brasil.',
        de: 'Am 19. Juli 2024 besucht der Präsident der Italienischen Republik, Sergio Mattarella, die Franziskanische Bruderschaft von Betania und das Centro Nossa Senhora Aparecida im Rahmen seines Staatsbesuchs in der Föderativen Republik Brasilien.',
      },
      {
        it: 'La presenza del Capo dello Stato rappresenta uno dei momenti più significativi della storia della missione.',
        pt: 'A presença do Chefe de Estado representa um dos momentos mais significativos da história da missão.',
        de: 'Die Anwesenheit des Staatsoberhaupts stellt einen der bedeutendsten Momente in der Geschichte der Mission dar.',
      },
      {
        it: "La visita costituisce un importante riconoscimento dell'impegno educativo e sociale svolto dalla Fraternità nei confronti dei bambini e delle famiglie della periferia di Salvador de Bahia.",
        pt: 'A visita constitui um importante reconhecimento do empenho educativo e social realizado pela Fraternidade junto às crianças e às famílias da periferia de Salvador da Bahia.',
        de: 'Der Besuch ist eine wichtige Anerkennung des pädagogischen und sozialen Engagements der Bruderschaft für die Kinder und Familien am Rande von Salvador de Bahia.',
      },
      {
        it: 'Da questo incontro prende nuovo slancio il grande progetto della futura scuola, sostenuto dalla collaborazione tra istituzioni italiane, enti internazionali e numerosi benefattori.',
        pt: 'Deste encontro nasce um novo impulso para o grande projeto da futura escola, sustentado pela colaboração entre instituições italianas, organismos internacionais e numerosos benfeitores.',
        de: 'Aus dieser Begegnung erhält das große Projekt der künftigen Schule neuen Schwung, getragen von der Zusammenarbeit italienischer Institutionen, internationaler Organisationen und zahlreicher Wohltäter.',
      },
    ],
    image: {
      src: mattarellaImg,
      alt: {
        it: 'La visita del Presidente Sergio Mattarella al Centro Nossa Senhora Aparecida',
        pt: 'A visita do Presidente Sergio Mattarella ao Centro Nossa Senhora Aparecida',
        de: 'Der Besuch von Präsident Sergio Mattarella im Centro Nossa Senhora Aparecida',
      },
    },
    cta: {
      label: { it: 'Scopri la visita', pt: 'Conheça a visita', de: 'Entdecken Sie den Besuch' },
      to: '/documentari-racconti/visita-presidente',
    },
    status: 'completed',
  },
  {
    id: 'inizio-lavori-scuola',
    date: { it: '2026', pt: '2026', de: '2026' },
    title: {
      it: 'Inizio dei lavori della Scuola Nossa Senhora Aparecida',
      pt: 'Início das obras da Escola Nossa Senhora Aparecida',
      de: 'Baubeginn der Schule Nossa Senhora Aparecida',
    },
    paragraphs: [
      {
        it: "Dopo anni di presenza educativa attraverso l'asilo, il Centro Nossa Senhora Aparecida compie un nuovo e decisivo passo nel proprio cammino.",
        pt: 'Depois de anos de presença educativa através da creche, o Centro Nossa Senhora Aparecida dá um novo e decisivo passo no seu caminho.',
        de: 'Nach Jahren pädagogischer Präsenz durch die Kita geht das Centro Nossa Senhora Aparecida einen neuen, entscheidenden Schritt auf seinem Weg.',
      },
      {
        it: 'Con la posa della prima pietra iniziano ufficialmente i lavori per la costruzione della Scuola Nossa Senhora Aparecida, destinata ad accompagnare bambini e ragazzi dai 6 ai 18 anni, offrendo loro un percorso educativo completo.',
        pt: 'Com o lançamento da pedra fundamental, iniciam-se oficialmente as obras de construção da Escola Nossa Senhora Aparecida, destinada a acompanhar crianças e jovens dos 6 aos 18 anos, oferecendo-lhes um percurso educativo completo.',
        de: 'Mit der Grundsteinlegung beginnen offiziell die Bauarbeiten für die Schule Nossa Senhora Aparecida, die Kinder und Jugendliche von 6 bis 18 Jahren begleiten und ihnen einen vollständigen Bildungsweg bieten soll.',
      },
      {
        it: "La nuova scuola sorgerà accanto al Centro già esistente e potrà accogliere circa 400 studenti, garantendo gratuitamente un'istruzione di qualità unita alla formazione umana, sociale e cristiana.",
        pt: 'A nova escola será construída ao lado do Centro já existente e poderá acolher cerca de 400 estudantes, garantindo gratuitamente uma educação de qualidade aliada à formação humana, social e cristã.',
        de: 'Die neue Schule entsteht neben dem bereits bestehenden Zentrum und wird rund 400 Schülerinnen und Schüler aufnehmen können, denen kostenlos eine qualitativ hochwertige Bildung zusammen mit menschlicher, sozialer und christlicher Erziehung geboten wird.',
      },
      {
        it: "L'opera è resa possibile grazie al sostegno della Cooperazione Italiana, del Ministero degli Affari Esteri e della Cooperazione Internazionale, dell'Organizzazione Internazionale Italo-Latino Americana (IILA) e di numerosi benefattori che hanno creduto nel progetto.",
        pt: 'A obra é possível graças ao apoio da Cooperação Italiana, do Ministério dos Negócios Estrangeiros e da Cooperação Internacional, da Organização Internacional Ítalo-Latino-Americana (IILA) e de numerosos benfeitores que acreditaram no projeto.',
        de: 'Das Werk wird möglich dank der Unterstützung der Italienischen Entwicklungszusammenarbeit, des Ministeriums für Auswärtige Angelegenheiten und Internationale Zusammenarbeit, der Italienisch-Lateinamerikanischen Internationalen Organisation (IILA) und zahlreicher Wohltäter, die an das Projekt geglaubt haben.',
      },
      {
        it: "Con questa nuova realizzazione prende forma uno dei sogni più grandi di padre Pancrazio Gaudioso: offrire ai bambini delle periferie di Salvador non soltanto un luogo dove essere accolti nei primi anni di vita, ma un percorso educativo completo capace di accompagnarli fino alla maggiore età.",
        pt: 'Com esta nova realização toma forma um dos maiores sonhos do padre Pancrazio Gaudioso: oferecer às crianças das periferias de Salvador não apenas um lugar onde ser acolhidas nos primeiros anos de vida, mas um percurso educativo completo capaz de as acompanhar até a maioridade.',
        de: 'Mit diesem neuen Werk nimmt einer der größten Träume von Pater Pancrazio Gaudioso Gestalt an: den Kindern aus den Randgebieten von Salvador nicht nur einen Ort zu bieten, an dem sie in den ersten Lebensjahren aufgenommen werden, sondern einen vollständigen Bildungsweg, der sie bis zur Volljährigkeit begleiten kann.',
      },
    ],
    image: {
      src: primaPietraImg,
      alt: {
        it: 'La posa della prima pietra della Scuola Nossa Senhora Aparecida',
        pt: 'O lançamento da pedra fundamental da Escola Nossa Senhora Aparecida',
        de: 'Die Grundsteinlegung der Schule Nossa Senhora Aparecida',
      },
    },
    cta: {
      label: { it: "Segui l'avanzamento lavori", pt: 'Acompanhe o andamento das obras', de: 'Verfolgen Sie den Baufortschritt' },
      to: '/avanzamento-lavori',
    },
    status: 'in-progress',
  },
  {
    id: 'oggi',
    date: { it: 'Oggi', pt: 'Hoje', de: 'Heute' },
    title: {
      it: 'Una missione che continua a crescere',
      pt: 'Uma missão que continua a crescer',
      de: 'Eine Mission, die weiter wächst',
    },
    paragraphs: [
      {
        it: 'La Fraternità Francescana di Betania continua il proprio servizio a Salvador de Bahia con lo stesso spirito che ha animato i primi missionari arrivati nel 2010.',
        pt: 'A Fraternidade Franciscana de Betânia continua o seu serviço em Salvador da Bahia com o mesmo espírito que animou os primeiros missionários chegados em 2010.',
        de: 'Die Franziskanische Bruderschaft von Betania setzt ihren Dienst in Salvador de Bahia mit demselben Geist fort, der die ersten 2010 angekommenen Missionare beseelte.',
      },
      {
        it: 'Ogni giorno il Centro Nossa Senhora Aparecida rappresenta un luogo di speranza per centinaia di bambini e per le loro famiglie, offrendo educazione, accoglienza, formazione e sostegno.',
        pt: 'Todos os dias o Centro Nossa Senhora Aparecida representa um lugar de esperança para centenas de crianças e para as suas famílias, oferecendo educação, acolhimento, formação e apoio.',
        de: 'Jeden Tag ist das Centro Nossa Senhora Aparecida ein Ort der Hoffnung für Hunderte von Kindern und ihre Familien und bietet Bildung, Aufnahme, Förderung und Unterstützung.',
      },
      {
        it: 'Il convento rimane il cuore della vita spirituale della comunità, mentre il progetto della nuova scuola apre prospettive ancora più ampie per il futuro.',
        pt: 'O convento permanece o coração da vida espiritual da comunidade, enquanto o projeto da nova escola abre perspetivas ainda mais amplas para o futuro.',
        de: 'Das Kloster bleibt das Herz des geistlichen Lebens der Gemeinschaft, während das Projekt der neuen Schule noch weitreichendere Perspektiven für die Zukunft eröffnet.',
      },
      {
        it: 'La missione continua a crescere grazie alla Provvidenza, alla generosità di tanti amici e benefattori e al lavoro quotidiano dei fratelli, delle sorelle, dei volontari e di tutti coloro che condividono il sogno di costruire un futuro migliore per le nuove generazioni.',
        pt: 'A missão continua a crescer graças à Providência, à generosidade de tantos amigos e benfeitores e ao trabalho quotidiano dos irmãos, das irmãs, dos voluntários e de todos os que partilham o sonho de construir um futuro melhor para as novas gerações.',
        de: 'Die Mission wächst weiter dank der Vorsehung, der Großzügigkeit vieler Freunde und Wohltäter und der täglichen Arbeit der Brüder, Schwestern, Freiwilligen und all jener, die den Traum teilen, eine bessere Zukunft für die neuen Generationen aufzubauen.',
      },
    ],
    image: {
      src: oggiImg,
      alt: {
        it: 'La vita quotidiana del Centro oggi',
        pt: 'A vida quotidiana do Centro hoje',
        de: 'Der Alltag des Zentrums heute',
      },
    },
    status: 'in-progress',
  },
  {
    id: 'futuro',
    date: { it: 'Il futuro', pt: 'O futuro', de: 'Die Zukunft' },
    title: {
      it: 'Uno sguardo al futuro',
      pt: 'Um olhar para o futuro',
      de: 'Ein Blick in die Zukunft',
    },
    paragraphs: [
      {
        it: 'La storia della Fraternità Francescana di Betania a Salvador de Bahia è ancora in cammino.',
        pt: 'A história da Fraternidade Franciscana de Betânia em Salvador da Bahia ainda está em caminho.',
        de: 'Die Geschichte der Franziskanischen Bruderschaft von Betania in Salvador de Bahia ist noch im Werden.',
      },
      {
        it: 'Ogni bambino accolto, ogni famiglia sostenuta, ogni progetto realizzato rappresenta un nuovo capitolo di una missione iniziata con pochi missionari e un grande sogno: rendere concreta la fraternità evangelica nelle periferie del mondo.',
        pt: 'Cada criança acolhida, cada família apoiada, cada projeto realizado representa um novo capítulo de uma missão iniciada com poucos missionários e um grande sonho: tornar concreta a fraternidade evangélica nas periferias do mundo.',
        de: 'Jedes aufgenommene Kind, jede unterstützte Familie, jedes verwirklichte Projekt ist ein neues Kapitel einer Mission, die mit wenigen Missionaren und einem großen Traum begann: die evangelische Brüderlichkeit in den Randgebieten der Welt konkret werden zu lassen.',
      },
      {
        it: "Con il completamento della Scuola Nossa Senhora Aparecida, la missione potrà accompagnare i giovani lungo tutto il loro percorso di crescita, offrendo non soltanto un'istruzione, ma la possibilità di costruire una vita fondata sulla dignità, sulla cultura, sulla solidarietà e sulla speranza.",
        pt: 'Com a conclusão da Escola Nossa Senhora Aparecida, a missão poderá acompanhar os jovens ao longo de todo o seu percurso de crescimento, oferecendo não apenas uma educação, mas a possibilidade de construir uma vida fundada na dignidade, na cultura, na solidariedade e na esperança.',
        de: 'Mit der Fertigstellung der Schule Nossa Senhora Aparecida wird die Mission die jungen Menschen auf ihrem gesamten Wachstumsweg begleiten können und ihnen nicht nur Bildung, sondern die Möglichkeit bieten, ein Leben auf der Grundlage von Würde, Kultur, Solidarität und Hoffnung aufzubauen.',
      },
    ],
    status: 'upcoming',
  },
];

// ─── Status config ─────────────────────────────────────────────────────────────

const statusConfig: Record<EntryStatus, { dot: string; badge: string; label: BilingualText }> = {
  completed: {
    dot: 'bg-[var(--soft-green)]',
    badge: 'bg-[var(--soft-green)] text-white',
    label: { it: 'Compiuto', pt: 'Concluído', de: 'Abgeschlossen' },
  },
  'in-progress': {
    dot: 'bg-[var(--warm-orange)]',
    badge: 'bg-[var(--warm-orange)] text-white',
    label: { it: 'In corso', pt: 'Em andamento', de: 'In Arbeit' },
  },
  upcoming: {
    dot: 'bg-gray-300',
    badge: 'bg-gray-200 text-gray-600',
    label: { it: 'Domani', pt: 'Amanhã', de: 'Morgen' },
  },
};

// ─── Component ────────────────────────────────────────────────────────────────

export function StoriaCentroPage() {
  const t = useT();

  return (
    <div className="bg-white">

      {/* ── HERO ──────────────────────────────────────────────────────────────── */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={padrePancrazioImg}
            alt={t({ it: 'Fra Pancrazio Gaudioso, fondatore della Fraternità Francescana di Betania', pt: 'Frei Pancrazio Gaudioso, fundador da Fraternidade Franciscana de Betânia', de: 'Bruder Pancrazio Gaudioso, Gründer der Franziskanischen Bruderschaft von Betania' })}
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
              {t({ it: 'La storia del Centro', pt: 'A história do Centro', de: 'Die Geschichte des Zentrums' })}
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-xl md:text-2xl mb-10 leading-relaxed max-w-3xl mx-auto">
              {t({
                it: 'La storia della Fraternità Francescana di Betania a Salvador de Bahia è il racconto di un progetto nato dalla fede, cresciuto attraverso il servizio e alimentato dalla speranza. Ogni tappa rappresenta un passo concreto verso un obiettivo preciso: offrire ai bambini e alle famiglie più fragili nuove opportunità di crescita, istruzione e dignità.',
                pt: 'A história da Fraternidade Franciscana de Betânia em Salvador da Bahia é o relato de um projeto nascido da fé, crescido através do serviço e alimentado pela esperança. Cada etapa representa um passo concreto em direção a um objetivo preciso: oferecer às crianças e às famílias mais frágeis novas oportunidades de crescimento, educação e dignidade.',
                de: 'Die Geschichte der Franziskanischen Bruderschaft von Betania in Salvador de Bahia ist die Erzählung eines Projekts, das aus dem Glauben geboren wurde, durch den Dienst gewachsen ist und von der Hoffnung genährt wird. Jede Etappe ist ein konkreter Schritt auf ein klares Ziel hin: den bedürftigsten Kindern und Familien neue Möglichkeiten für Wachstum, Bildung und Würde zu bieten.',
              })}
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" href="#cronologia" className="text-lg px-8 py-4 bg-white/10 backdrop-blur-sm border-white hover:bg-white/20">
                {t({ it: 'Scopri la cronologia', pt: 'Conheça a cronologia', de: 'Entdecken Sie die Chronologie' })}
              </Button>
              <Button variant="primary" to="/dona-ora" className="text-lg px-8 py-4">
                {t({ pt: 'Doe agora', it: 'Dona ora', de: 'Jetzt spenden' })}
              </Button>
            </div>
          </AnimatedSection>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-white/80" />
          </div>
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
              {t({ it: 'Cronologia della missione', pt: 'Cronologia da missão', de: 'Chronologie der Mission' })}
            </h2>
            <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto leading-relaxed">
              {t({
                it: 'Dalla fondazione della Fraternità in Italia fino al progetto della nuova scuola: le tappe che hanno segnato il cammino del Centro.',
                pt: 'Da fundação da Fraternidade em Itália até ao projeto da nova escola: as etapas que marcaram o caminho do Centro.',
                de: 'Von der Gründung der Bruderschaft in Italien bis zum Projekt der neuen Schule: die Etappen, die den Weg des Zentrums geprägt haben.',
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
                          <div className="p-8">
                            <div className="rounded-2xl overflow-hidden shadow-md">
                              <img loading="lazy"
                                src={entry.image.src}
                                alt={t(entry.image.alt)}
                                className="w-full h-72 md:h-96 object-cover"
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
                  de: '"Erziehen bedeutet, Zukunft zu schenken. Das ist der Kern der Mission der Franziskanischen Bruderschaft von Betania in Salvador de Bahia: die Aufnahme in Chancen zu verwandeln und die Hoffnung in einen Lebensweg."',
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
              {t({ it: 'Fai parte anche tu di questa storia', pt: 'Faça também parte desta história', de: 'Werden Sie Teil dieser Geschichte' })}
            </h2>
            <p className="text-xl leading-relaxed mb-10 opacity-90">
              {t({
                it: 'Il prossimo capitolo si scrive insieme a te: sostieni la costruzione della Scuola Nossa Senhora Aparecida.',
                pt: 'O próximo capítulo escreve-se junto contigo: apoie a construção da Escola Nossa Senhora Aparecida.',
                de: 'Das nächste Kapitel wird gemeinsam mit Ihnen geschrieben: unterstützen Sie den Bau der Schule Nossa Senhora Aparecida.',
              })}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button to="/dona-ora">
                {t({ pt: 'Doe agora', it: 'Dona ora', de: 'Jetzt spenden' })}
              </Button>
              <Button variant="secondary" to="/progetto-scuola">
                {t({ it: 'Scopri il progetto scuola', pt: 'Conheça o projeto escola', de: 'Entdecken Sie das Schulprojekt' })}
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
