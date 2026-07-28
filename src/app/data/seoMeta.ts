import type { Bilingual } from './relatoriosData';

export interface PageMeta {
  title: Bilingual;
  description: Bilingual;
}

// Update this when the final domain is live (also used for canonical/OG URLs and sitemap.xml).
export const SITE_URL = 'https://lucaminic.github.io/FFB-SALVADOR';
export const SITE_NAME = 'Fundação Betania ONLUS';

export const defaultMeta: PageMeta = {
  title: {
    pt: 'Fundação Betania ONLUS — Creche e apoio a crianças em Salvador da Bahia',
    it: 'Fundação Betania ONLUS — Asilo e sostegno ai bambini a Salvador de Bahia',
    de: "Fundação Betania ONLUS — Kita und Unterstützung für Kinder in Salvador de Bahia",
  },
  description: {
    pt: 'Aqui em Salvador da Bahia, através do Centro Nossa Senhora Aparecida, acolhemos e acompanhamos diariamente crianças e famílias em situação de vulnerabilidade.',
    it: 'A Salvador de Bahia, attraverso il Centro Nossa Senhora Aparecida, accogliamo e accompagniamo ogni giorno bambini e famiglie in difficoltà.',
    de: "In Salvador de Bahia begleiten und betreuen wir durch das Centro Nossa Senhora Aparecida täglich Kinder und Familien in schwierigen Lebenslagen.",
  },
};

const suffix = { pt: ` — ${SITE_NAME}`, it: ` — ${SITE_NAME}`, de: ` — ${SITE_NAME}` };
const withSuffix = (b: Bilingual): Bilingual => ({ pt: b.pt + suffix.pt, it: b.it + suffix.it, de: b.de + suffix.de });

export const seoMeta: Record<string, PageMeta> = {
  '/': defaultMeta,
  '/la-fundacao': {
    title: withSuffix({ pt: 'A Fundação Betania ONLUS', it: 'La Fundação Betania ONLUS', de: "Die Fundação Betania ONLUS" }),
    description: {
      pt: 'A Fundação Betania ONLUS é uma presença ao lado das crianças e das famílias mais vulneráveis de Salvador da Bahia, nascida da Fraternidade Franciscana de Betânia.',
      it: 'La Fundação Betania ONLUS è un\'organizzazione al servizio dei bambini e delle famiglie più fragili di Salvador de Bahia, nata dalla Fraternità Francescana di Betania.',
      de: "Die Fundação Betania ONLUS ist eine Organisation im Dienst der bedürftigsten Kinder und Familien von Salvador de Bahia, entstanden aus der Franziskanischen Bruderschaft von Betania.",
    },
  },
  '/la-fraternita': {
    title: withSuffix({ pt: 'A Fraternidade Franciscana de Betânia', it: 'La Fraternità Francescana di Betania', de: "Die Franziskanische Bruderschaft von Betania" }),
    description: {
      pt: 'Uma vida partilhada entre oração, acolhimento e fraternidade: conheça a Fraternidade Franciscana de Betânia em Salvador da Bahia.',
      it: 'Una vita condivisa tra preghiera, accoglienza e fraternità: scopri la Fraternità Francescana di Betania a Salvador de Bahia.',
      de: "Ein gemeinsames Leben aus Gebet, Aufnahme und Brüderlichkeit: entdecken Sie die Franziskanische Bruderschaft von Betania in Salvador de Bahia.",
    },
  },
  '/il-centro': {
    title: withSuffix({ pt: 'O Centro Nossa Senhora Aparecida', it: 'Il Centro Nossa Senhora Aparecida', de: "Das Centro Nossa Senhora Aparecida" }),
    description: {
      pt: 'O Centro Nossa Senhora Aparecida é uma presença diária no coração de Salvador da Bahia, com creche, projeto escola e acompanhamento das famílias.',
      it: 'Il Centro Nossa Senhora Aparecida è una presenza quotidiana nel cuore di Salvador de Bahia, con asilo, progetto scuola e accompagnamento delle famiglie.',
      de: "Das Centro Nossa Senhora Aparecida ist eine tägliche Präsenz im Herzen von Salvador de Bahia, mit Kita, Schulprojekt und Familienbegleitung.",
    },
  },
  '/storia-del-centro': {
    title: withSuffix({ pt: 'A história do Centro', it: 'La Storia del Centro', de: "Die Geschichte des Zentrums" }),
    description: {
      pt: 'Da fundação da Fraternidade Franciscana de Betânia em 1982 até o projeto da nova escola: a cronologia da missão do Centro Nossa Senhora Aparecida em Salvador da Bahia.',
      it: 'Dalla fondazione della Fraternità Francescana di Betania nel 1982 fino al progetto della nuova scuola: la cronologia della missione del Centro Nossa Senhora Aparecida a Salvador de Bahia.',
      de: "Von der Gründung der Franziskanischen Bruderschaft von Betania im Jahr 1982 bis zum Projekt der neuen Schule: die Chronologie der Mission des Centro Nossa Senhora Aparecida in Salvador de Bahia.",
    },
  },
  '/asilo': {
    title: withSuffix({ pt: 'A creche do Centro Nossa Senhora Aparecida', it: "L'asilo del Centro Nossa Senhora Aparecida", de: "Die Kita des Centro Nossa Senhora Aparecida" }),
    description: {
      pt: 'Acolhendo e transformando futuros: conheça a creche do Centro Nossa Senhora Aparecida, um serviço educativo diário para a primeira infância em Salvador da Bahia.',
      it: 'Accogliere oggi, costruire il futuro: scopri l\'asilo del Centro Nossa Senhora Aparecida, un servizio educativo quotidiano per la prima infanzia a Salvador de Bahia.',
      de: "Heute aufnehmen, Zukunft bauen: entdecken Sie die Kita des Centro Nossa Senhora Aparecida, ein tägliches Bildungsangebot für die frühe Kindheit in Salvador de Bahia.",
    },
  },
  '/progetto-scuola': {
    title: withSuffix({ pt: 'Projeto Escola', it: 'Progetto scuola', de: "Schulprojekt" }),
    description: {
      pt: 'Juntos construímos uma escola e um futuro para as crianças de Salvador da Bahia: conheça o Projeto Escola do Centro Nossa Senhora Aparecida.',
      it: 'Insieme costruiamo una scuola e un futuro per i bambini di Salvador de Bahia: scopri il Progetto Scuola del Centro Nossa Senhora Aparecida.',
      de: "Gemeinsam bauen wir eine Schule und eine Zukunft für die Kinder von Salvador de Bahia: entdecken Sie das Schulprojekt des Centro Nossa Senhora Aparecida.",
    },
  },
  '/dona-ora': {
    title: withSuffix({ pt: 'Apoie o Centro Nossa Senhora Aparecida', it: 'Sostieni il Centro Nossa Senhora Aparecida', de: "Unterstützen Sie das Centro Nossa Senhora Aparecida" }),
    description: {
      pt: 'Cada contribuição ajuda concretamente crianças e famílias a viver um percurso de educação, cuidado e crescimento. Doe agora.',
      it: 'Ogni contributo aiuta concretamente bambini e famiglie a vivere un percorso di educazione, cura e crescita. Dona ora.',
      de: "Jeder Beitrag hilft Kindern und Familien ganz konkret auf ihrem Weg der Bildung, Fürsorge und des Wachstums. Jetzt spenden.",
    },
  },
  '/cosa-puoi-fare-tu': {
    title: withSuffix({ pt: 'O que você pode fazer', it: 'Cosa puoi fare tu', de: "Was Sie tun können" }),
    description: {
      pt: 'Cada gesto pode se tornar uma presença concreta na vida de uma criança e de uma família: descubra como pode ajudar.',
      it: 'Ogni gesto può diventare una presenza concreta nella vita di un bambino e di una famiglia: scopri come puoi aiutare.',
      de: "Jede Geste kann zu einer konkreten Präsenz im Leben eines Kindes und einer Familie werden: erfahren Sie, wie Sie helfen können.",
    },
  },
  '/benefattori': {
    title: withSuffix({ pt: 'Obrigado a quem caminha conosco', it: 'Grazie a chi cammina con noi', de: "Danke an alle, die mit uns gehen" }),
    description: {
      pt: 'Cada gesto de apoio contribui concretamente para o crescimento do Centro Nossa Senhora Aparecida e dos seus projetos educativos.',
      it: 'Ogni gesto di sostegno contribuisce concretamente alla crescita del Centro Nossa Senhora Aparecida e dei suoi progetti educativi.',
      de: "Jede Unterstützung trägt konkret zum Wachstum des Centro Nossa Senhora Aparecida und seiner Bildungsprojekte bei.",
    },
  },
  '/contatti': {
    title: withSuffix({ pt: 'Contatos', it: 'Contatti', de: "Kontakt" }),
    description: {
      pt: 'Para informações, colaborações ou apoio aos projetos da Fundação Betania ONLUS em Salvador da Bahia, entre em contato conosco.',
      it: 'Per informazioni, collaborazioni o sostegno ai progetti della Fundação Betania ONLUS a Salvador de Bahia, contattaci.',
      de: "Für Informationen, Kooperationen oder Unterstützung der Projekte der Fundação Betania ONLUS in Salvador de Bahia kontaktieren Sie uns.",
    },
  },
  '/riconoscimenti-istituzionali': {
    title: withSuffix({ pt: 'Reconhecimentos institucionais', it: 'Riconoscimenti istituzionali', de: "Institutionelle Anerkennungen" }),
    description: {
      pt: 'Um caminho reconhecido e apoiado por instituições, entidades públicas e realidades internacionais.',
      it: 'Un cammino riconosciuto e sostenuto da istituzioni, enti pubblici e realtà internazionali.',
      de: "Ein Weg, der von Institutionen, öffentlichen Einrichtungen und internationalen Organisationen anerkannt und unterstützt wird.",
    },
  },
  '/iniziative': {
    title: withSuffix({ pt: 'Iniciativas', it: 'Iniziative', de: "Initiativen" }),
    description: {
      pt: 'Projetos concretos para apoiar o Centro Nossa Senhora Aparecida e as suas crianças.',
      it: 'Progetti concreti per sostenere il Centro Nossa Senhora Aparecida e i suoi bambini.',
      de: "Konkrete Projekte zur Unterstützung des Centro Nossa Senhora Aparecida und seiner Kinder.",
    },
  },
  '/aiutiamo-valentina': {
    title: withSuffix({ pt: 'Ajudamos Valentina', it: 'Aiutiamo Valentina', de: "Wir helfen Valentina" }),
    description: {
      pt: 'Uma história concreta de fragilidade, cuidado e esperança em Salvador da Bahia: uma iniciativa nascida para ajudar Valentina e a sua família.',
      it: 'Una storia concreta di fragilità, cura e speranza a Salvador de Bahia: un\'iniziativa nata per aiutare Valentina e la sua famiglia.',
      de: "Eine wahre Geschichte von Not, Fürsorge und Hoffnung in Salvador de Bahia: eine Initiative, die entstand, um Valentina und ihrer Familie zu helfen.",
    },
  },
  '/trasparenza': {
    title: withSuffix({ pt: 'Transparência', it: 'Trasparenza', de: "Transparenz" }),
    description: {
      pt: 'Cada contribuição é transformada em presença concreta, educação e apoio para crianças e famílias: conheça o nosso compromisso com a transparência.',
      it: 'Ogni contributo viene trasformato in presenza concreta, educazione e sostegno per bambini e famiglie: scopri il nostro impegno per la trasparenza.',
      de: "Jeder Beitrag wird zu konkreter Präsenz, Bildung und Unterstützung für Kinder und Familien: erfahren Sie mehr über unser Engagement für Transparenz.",
    },
  },
  '/eventi-speciali': {
    title: withSuffix({ pt: 'Eventos Especiais', it: 'Eventi Speciali', de: "Besondere Ereignisse" }),
    description: {
      pt: 'Momentos, encontros e visitas que marcaram o caminho do Centro Nossa Senhora Aparecida.',
      it: 'Momenti, incontri e visite che hanno segnato il cammino del Centro Nossa Senhora Aparecida.',
      de: "Momente, Begegnungen und Besuche, die den Weg des Centro Nossa Senhora Aparecida geprägt haben.",
    },
  },
  '/documentari-racconti': {
    title: withSuffix({ pt: 'Documentários e Relatos', it: 'Documentari e Racconti', de: "Dokumentationen und Erzählungen" }),
    description: {
      pt: 'Histórias, memórias e percursos que contam a vida do Centro Nossa Senhora Aparecida através de imagens, encontros e relações.',
      it: 'Storie, memorie e percorsi che raccontano la vita del Centro Nossa Senhora Aparecida attraverso immagini, incontri e relazioni.',
      de: "Geschichten, Erinnerungen und Wege, die das Leben des Centro Nossa Senhora Aparecida durch Bilder, Begegnungen und Beziehungen erzählen.",
    },
  },
  '/progetti-pedagogici': {
    title: withSuffix({ pt: 'Laboratórios', it: 'Laboratori', de: "Werkstätten" }),
    description: {
      pt: 'Experiências, atividades e percursos educativos que acompanham o crescimento das crianças do Centro Nossa Senhora Aparecida.',
      it: 'Esperienze, attività e percorsi educativi che accompagnano la crescita dei bambini del Centro Nossa Senhora Aparecida.',
      de: "Erfahrungen, Aktivitäten und Bildungswege, die das Wachstum der Kinder des Centro Nossa Senhora Aparecida begleiten.",
    },
  },
  '/accoglienza-quotidiana': {
    title: withSuffix({ pt: 'Acolhimento diário', it: 'Accoglienza quotidiana', de: "Tägliche Aufnahme" }),
    description: {
      pt: 'Cada criança precisa sentir-se acolhida, escutada e reconhecida. No Centro Nossa Senhora Aparecida, o acolhimento é o modo como vivemos cada dia.',
      it: 'Ogni bambino ha bisogno di sentirsi accolto, ascoltato e riconosciuto. Al Centro Nossa Senhora Aparecida, l\'accoglienza è il modo in cui viviamo ogni giorno.',
      de: "Jedes Kind muss sich aufgenommen, gehört und anerkannt fühlen. Im Centro Nossa Senhora Aparecida ist diese Aufnahme die Art, wie wir jeden Tag leben.",
    },
  },
  '/educazione': {
    title: withSuffix({ pt: 'Educação', it: 'Educazione', de: "Bildung" }),
    description: {
      pt: 'Educar é acompanhar cada criança na descoberta de si mesma, do mundo e das suas possibilidades: a missão educativa do Centro Nossa Senhora Aparecida.',
      it: 'Educare è accompagnare ogni bambino nella scoperta di sé, del mondo e delle proprie possibilità: la missione educativa del Centro Nossa Senhora Aparecida.',
      de: "Bilden heißt, jedes Kind bei der Entdeckung seiner selbst, der Welt und seiner Möglichkeiten zu begleiten: der Bildungsauftrag des Centro Nossa Senhora Aparecida.",
    },
  },
  '/cura-e-nutrizione': {
    title: withSuffix({ pt: 'Cuidado e nutrição', it: 'Cura e nutrizione', de: "Fürsorge und Ernährung" }),
    description: {
      pt: 'Um corpo saudável é a base de qualquer aprendizagem: como o Centro Nossa Senhora Aparecida garante alimentação, saúde e bem-estar às crianças.',
      it: 'Un corpo sano è la base di qualsiasi apprendimento: come il Centro Nossa Senhora Aparecida garantisce alimentazione, salute e benessere ai bambini.',
      de: "Ein gesunder Körper ist die Grundlage jeden Lernens: wie das Centro Nossa Senhora Aparecida Ernährung, Gesundheit und Wohlbefinden der Kinder sicherstellt.",
    },
  },
  '/accompagnamento-famiglie': {
    title: withSuffix({ pt: 'Acompanhamento das famílias', it: 'Accompagnamento delle famiglie', de: "Familienbegleitung" }),
    description: {
      pt: 'Acompanhar uma criança significa também caminhar junto à sua família: o cuidado que se estende além das paredes do Centro.',
      it: 'Accompagnare un bambino significa anche camminare insieme alla sua famiglia: la cura che si estende oltre le mura del Centro.',
      de: "Ein Kind zu begleiten bedeutet auch, gemeinsam mit seiner Familie zu gehen: die Fürsorge reicht über die Mauern des Zentrums hinaus.",
    },
  },
  '/documentari-racconti/intervista-centro': {
    title: withSuffix({ pt: 'Entrevista ao Centro', it: 'Intervista al Centro', de: "Interview mit dem Zentrum" }),
    description: {
      pt: 'Um olhar autêntico sobre a missão e o trabalho educativo, social e comunitário do Centro Nossa Senhora Aparecida em Salvador da Bahia.',
      it: 'Uno sguardo autentico sulla missione e il lavoro educativo, sociale e comunitario del Centro Nossa Senhora Aparecida a Salvador de Bahia.',
      de: "Ein authentischer Blick auf die Mission und die pädagogische, soziale und gemeinschaftliche Arbeit des Centro Nossa Senhora Aparecida in Salvador de Bahia.",
    },
  },
  '/documentari-racconti/visita-presidente': {
    title: withSuffix({ pt: 'A visita do Presidente da República Italiana', it: 'La visita del Presidente della Repubblica Italiana', de: "Der Besuch des Präsidenten der Italienischen Republik" }),
    description: {
      pt: 'Um momento histórico de encontro, reconhecimento e proximidade à missão educativa e social do Centro Nossa Senhora Aparecida.',
      it: 'Un momento storico di incontro, riconoscimento e vicinanza alla missione educativa e sociale del Centro Nossa Senhora Aparecida.',
      de: "Ein historischer Moment der Begegnung, Anerkennung und Nähe zur pädagogischen und sozialen Mission des Centro Nossa Senhora Aparecida.",
    },
  },
  '/documentari-racconti/dieci-anni-creche': {
    title: withSuffix({ pt: 'Dez anos da Creche', it: 'Dieci anni della Creche', de: "Zehn Jahre Kita" }),
    description: {
      pt: 'Dez anos de acolhimento, educação e crescimento compartilhado junto às crianças, famílias e comunidade de Salvador da Bahia.',
      it: 'Dieci anni di accoglienza, educazione e crescita condivisa insieme ai bambini, alle famiglie e alla comunità di Salvador de Bahia.',
      de: "Zehn Jahre gemeinsamer Aufnahme, Bildung und Wachstum mit den Kindern, Familien und der Gemeinschaft von Salvador de Bahia.",
    },
  },
  '/documentari-racconti/posa-prima-pietra': {
    title: withSuffix({ pt: 'Lançamento da pedra fundamental', it: 'Posa della prima pietra', de: "Grundsteinlegung" }),
    description: {
      pt: 'O início concreto de um lugar pensado para acolher, educar e acompanhar novas gerações: o lançamento da pedra fundamental do Projeto Escola.',
      it: 'L\'inizio concreto di un luogo pensato per accogliere, educare e accompagnare nuove generazioni: la posa della prima pietra del Progetto Scuola.',
      de: "Der konkrete Beginn eines Ortes, der geschaffen wurde, um neue Generationen aufzunehmen, zu bilden und zu begleiten: die Grundsteinlegung des Schulprojekts.",
    },
  },
  '/documentari-racconti/auto-idea-tutti': {
    title: withSuffix({ pt: 'Auto: uma ideia de todos', it: 'Auto: un\'idea di tutti', de: "Auto: eine Idee von allen" }),
    description: {
      pt: 'Um percurso compartilhado nascido do desejo de construir juntos possibilidades concretas de crescimento, autonomia e participação.',
      it: 'Un percorso condiviso nato dal desiderio di costruire insieme possibilità concrete di crescita, autonomia e partecipazione.',
      de: "Ein gemeinsamer Weg, entstanden aus dem Wunsch, gemeinsam konkrete Möglichkeiten für Wachstum, Autonomie und Teilhabe zu schaffen.",
    },
  },
  '/documentari-racconti/ricordi-narrazioni': {
    title: withSuffix({ pt: 'Memórias e narrativas africanas', it: 'Ricordi e narrazioni africane', de: "Afrikanische Erinnerungen und Erzählungen" }),
    description: {
      pt: 'Uma viagem entre memória, cultura e identidade através de relatos, imagens e testemunhos.',
      it: 'Un viaggio tra memoria, cultura e identità attraverso racconti, immagini e testimonianze.',
      de: "Eine Reise zwischen Erinnerung, Kultur und Identität durch Erzählungen, Bilder und Zeugnisse.",
    },
  },
  '/avanzamento-lavori': {
    title: withSuffix({ pt: 'Andamento das Obras', it: 'Avanzamento Lavori', de: "Baufortschritt" }),
    description: {
      pt: 'Acompanhe o andamento das obras do Projeto Escola do Centro Nossa Senhora Aparecida, com fotos e vídeos do canteiro.',
      it: 'Segui l\'avanzamento dei lavori del Progetto Scuola del Centro Nossa Senhora Aparecida, con foto e video del cantiere.',
      de: "Verfolgen Sie den Baufortschritt des Schulprojekts des Centro Nossa Senhora Aparecida mit Fotos und Videos von der Baustelle.",
    },
  },
  '/sostegno-a-distanza': {
    title: withSuffix({ pt: 'Adoção à distância', it: 'Sostegno a distanza', de: "Fernpatenschaft" }),
    description: {
      pt: 'Um vínculo real entre você e uma criança que cresce — educação, cuidado e nutrição todos os dias.',
      it: 'Un legame reale tra te e un bambino che cresce — educazione, cura e nutrimento ogni giorno.',
      de: "Eine echte Verbindung zwischen Ihnen und einem heranwachsenden Kind — Bildung, Fürsorge und Ernährung, jeden Tag.",
    },
  },
  '/atelier': {
    title: withSuffix({ pt: 'Ateliê', it: 'Atelier', de: "Atelier" }),
    description: {
      pt: 'Um espaço onde as crianças exploram, investigam e se exprimem através de materiais, cores e linguagens diversas.',
      it: 'Uno spazio dove i bambini esplorano, investigano e si esprimono attraverso materiali, colori e linguaggi diversi.',
      de: "Ein Raum, in dem Kinder mit unterschiedlichen Materialien, Farben und Ausdrucksformen forschen, entdecken und sich ausdrücken.",
    },
  },
  '/nossa-metodologia': {
    title: withSuffix({ pt: 'Nossa metodologia', it: 'La nostra metodologia', de: "Unsere Methodik" }),
    description: {
      pt: 'A criança como protagonista do seu processo de aprendizagem: interação, brincadeira, experiência e relação como fundamentos do desenvolvimento integral.',
      it: 'Il bambino come protagonista del proprio processo di apprendimento: interazione, gioco, esperienza e relazione come fondamenti dello sviluppo integrale.',
      de: "Das Kind als Hauptakteur seines eigenen Lernprozesses: Interaktion, Spiel, Erfahrung und Beziehung als Grundlagen der ganzheitlichen Entwicklung.",
    },
  },
  '/projetos-permanentes': {
    title: withSuffix({ pt: 'Projetos Permanentes', it: 'Progetti Permanenti', de: "Dauerhafte Projekte" }),
    description: {
      pt: 'Projetos que acompanham as crianças ao longo de todo o ano, fortalecendo sua curiosidade, autonomia e desenvolvimento integral.',
      it: 'Progetti che accompagnano i bambini per tutto l\'anno, rafforzando la loro curiosità, autonomia e sviluppo integrale.',
      de: "Projekte, die die Kinder das ganze Jahr über begleiten und ihre Neugier, Autonomie und ganzheitliche Entwicklung stärken.",
    },
  },
  '/mostras-pedagogicas': {
    title: withSuffix({ pt: 'Mostras Pedagógicas', it: 'Mostre Pedagogiche', de: "Pädagogische Ausstellungen" }),
    description: {
      pt: 'Celebrando os processos, as descobertas e as aprendizagens das crianças junto às famílias e à comunidade.',
      it: 'Celebrando i processi, le scoperte e gli apprendimenti dei bambini insieme alle famiglie e alla comunità.',
      de: "Wir feiern die Prozesse, Entdeckungen und Lernerfahrungen der Kinder gemeinsam mit den Familien und der Gemeinschaft.",
    },
  },
  '/alimentacao-saudavel': {
    title: withSuffix({ pt: 'Alimentação Saudável', it: 'Alimentazione Sana', de: "Gesunde Ernährung" }),
    description: {
      pt: 'Está na mesa, tá no prato, vai pro corpo: o projeto pedagógico de educação nutricional para crianças de 0 a 5 anos do Centro Nossa Senhora Aparecida.',
      it: 'È in tavola, è nel piatto, va nel corpo: il progetto pedagogico di educazione nutrizionale per bambini da 0 a 5 anni del Centro Nossa Senhora Aparecida.',
      de: "Auf dem Tisch, auf dem Teller, im Körper: das pädagogische Ernährungsbildungsprojekt für Kinder von 0 bis 5 Jahren des Centro Nossa Senhora Aparecida.",
    },
  },
  '/relatorios': {
    title: withSuffix({ pt: 'Relatórios', it: 'Relazioni', de: "Berichte" }),
    description: {
      pt: 'Documentação pedagógica transparente e acessível — o registro vivo do trabalho realizado com as crianças do Centro Nossa Senhora Aparecida.',
      it: 'Documentazione pedagogica trasparente e accessibile — la registrazione viva del lavoro svolto con i bambini del Centro Nossa Senhora Aparecida.',
      de: "Transparente und zugängliche pädagogische Dokumentation — die lebendige Aufzeichnung der Arbeit mit den Kindern des Centro Nossa Senhora Aparecida.",
    },
  },
};
