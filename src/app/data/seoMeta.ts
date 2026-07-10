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
  },
  description: {
    pt: 'Aqui em Salvador da Bahia, através do Centro Nossa Senhora Aparecida, acolhemos e acompanhamos diariamente crianças e famílias em situação de vulnerabilidade.',
    it: 'A Salvador de Bahia, attraverso il Centro Nossa Senhora Aparecida, accogliamo e accompagniamo ogni giorno bambini e famiglie in difficoltà.',
  },
};

const suffix = { pt: ` — ${SITE_NAME}`, it: ` — ${SITE_NAME}` };
const withSuffix = (b: Bilingual): Bilingual => ({ pt: b.pt + suffix.pt, it: b.it + suffix.it });

export const seoMeta: Record<string, PageMeta> = {
  '/': defaultMeta,
  '/la-fundacao': {
    title: withSuffix({ pt: 'A Fundação Betania ONLUS', it: 'La Fundação Betania ONLUS' }),
    description: {
      pt: 'A Fundação Betania ONLUS é uma presença ao lado das crianças e das famílias mais vulneráveis de Salvador da Bahia, nascida da Fraternidade Franciscana de Betânia.',
      it: 'La Fundação Betania ONLUS è un\'organizzazione al servizio dei bambini e delle famiglie più fragili di Salvador de Bahia, nata dalla Fraternità Francescana di Betania.',
    },
  },
  '/la-fraternita': {
    title: withSuffix({ pt: 'A Fraternidade Franciscana de Betânia', it: 'La Fraternità Francescana di Betania' }),
    description: {
      pt: 'Uma vida partilhada entre oração, acolhimento e fraternidade: conheça a Fraternidade Franciscana de Betânia em Salvador da Bahia.',
      it: 'Una vita condivisa tra preghiera, accoglienza e fraternità: scopri la Fraternità Francescana di Betania a Salvador de Bahia.',
    },
  },
  '/il-centro': {
    title: withSuffix({ pt: 'O Centro Nossa Senhora Aparecida', it: 'Il Centro Nossa Senhora Aparecida' }),
    description: {
      pt: 'O Centro Nossa Senhora Aparecida é uma presença diária no coração de Salvador da Bahia, com creche, projeto escola e acompanhamento das famílias.',
      it: 'Il Centro Nossa Senhora Aparecida è una presenza quotidiana nel cuore di Salvador de Bahia, con asilo, progetto scuola e accompagnamento delle famiglie.',
    },
  },
  '/asilo': {
    title: withSuffix({ pt: 'A creche do Centro Nossa Senhora Aparecida', it: "L'asilo del Centro Nossa Senhora Aparecida" }),
    description: {
      pt: 'Acolhendo e transformando futuros: conheça a creche do Centro Nossa Senhora Aparecida, um serviço educativo diário para a primeira infância em Salvador da Bahia.',
      it: 'Accogliere oggi, costruire il futuro: scopri l\'asilo del Centro Nossa Senhora Aparecida, un servizio educativo quotidiano per la prima infanzia a Salvador de Bahia.',
    },
  },
  '/progetto-scuola': {
    title: withSuffix({ pt: 'Projeto Escola', it: 'Progetto scuola' }),
    description: {
      pt: 'Juntos construímos uma escola e um futuro para as crianças de Salvador da Bahia: conheça o Projeto Escola do Centro Nossa Senhora Aparecida.',
      it: 'Insieme costruiamo una scuola e un futuro per i bambini di Salvador de Bahia: scopri il Progetto Scuola del Centro Nossa Senhora Aparecida.',
    },
  },
  '/dona-ora': {
    title: withSuffix({ pt: 'Apoie o Centro Nossa Senhora Aparecida', it: 'Sostieni il Centro Nossa Senhora Aparecida' }),
    description: {
      pt: 'Cada contribuição ajuda concretamente crianças e famílias a viver um percurso de educação, cuidado e crescimento. Doe agora.',
      it: 'Ogni contributo aiuta concretamente bambini e famiglie a vivere un percorso di educazione, cura e crescita. Dona ora.',
    },
  },
  '/cosa-puoi-fare-tu': {
    title: withSuffix({ pt: 'O que você pode fazer', it: 'Cosa puoi fare tu' }),
    description: {
      pt: 'Cada gesto pode se tornar uma presença concreta na vida de uma criança e de uma família: descubra como pode ajudar.',
      it: 'Ogni gesto può diventare una presenza concreta nella vita di un bambino e di una famiglia: scopri come puoi aiutare.',
    },
  },
  '/benefattori': {
    title: withSuffix({ pt: 'Obrigado a quem caminha conosco', it: 'Grazie a chi cammina con noi' }),
    description: {
      pt: 'Cada gesto de apoio contribui concretamente para o crescimento do Centro Nossa Senhora Aparecida e dos seus projetos educativos.',
      it: 'Ogni gesto di sostegno contribuisce concretamente alla crescita del Centro Nossa Senhora Aparecida e dei suoi progetti educativi.',
    },
  },
  '/contatti': {
    title: withSuffix({ pt: 'Contatos', it: 'Contatti' }),
    description: {
      pt: 'Para informações, colaborações ou apoio aos projetos da Fundação Betania ONLUS em Salvador da Bahia, entre em contato conosco.',
      it: 'Per informazioni, collaborazioni o sostegno ai progetti della Fundação Betania ONLUS a Salvador de Bahia, contattaci.',
    },
  },
  '/riconoscimenti-istituzionali': {
    title: withSuffix({ pt: 'Reconhecimentos institucionais', it: 'Riconoscimenti istituzionali' }),
    description: {
      pt: 'Um caminho reconhecido e apoiado por instituições, entidades públicas e realidades internacionais.',
      it: 'Un cammino riconosciuto e sostenuto da istituzioni, enti pubblici e realtà internazionali.',
    },
  },
  '/iniziative': {
    title: withSuffix({ pt: 'Iniciativas', it: 'Iniziative' }),
    description: {
      pt: 'Projetos concretos para apoiar o Centro Nossa Senhora Aparecida e as suas crianças.',
      it: 'Progetti concreti per sostenere il Centro Nossa Senhora Aparecida e i suoi bambini.',
    },
  },
  '/aiutiamo-valentina': {
    title: withSuffix({ pt: 'Ajudamos Valentina', it: 'Aiutiamo Valentina' }),
    description: {
      pt: 'Uma história concreta de fragilidade, cuidado e esperança em Salvador da Bahia: uma iniciativa nascida para ajudar Valentina e a sua família.',
      it: 'Una storia concreta di fragilità, cura e speranza a Salvador de Bahia: un\'iniziativa nata per aiutare Valentina e la sua famiglia.',
    },
  },
  '/trasparenza': {
    title: withSuffix({ pt: 'Transparência', it: 'Trasparenza' }),
    description: {
      pt: 'Cada contribuição é transformada em presença concreta, educação e apoio para crianças e famílias: conheça o nosso compromisso com a transparência.',
      it: 'Ogni contributo viene trasformato in presenza concreta, educazione e sostegno per bambini e famiglie: scopri il nostro impegno per la trasparenza.',
    },
  },
  '/eventi-speciali': {
    title: withSuffix({ pt: 'Eventos Especiais', it: 'Eventi Speciali' }),
    description: {
      pt: 'Momentos, encontros e visitas que marcaram o caminho do Centro Nossa Senhora Aparecida.',
      it: 'Momenti, incontri e visite che hanno segnato il cammino del Centro Nossa Senhora Aparecida.',
    },
  },
  '/documentari-racconti': {
    title: withSuffix({ pt: 'Documentários e Relatos', it: 'Documentari e Racconti' }),
    description: {
      pt: 'Histórias, memórias e percursos que contam a vida do Centro Nossa Senhora Aparecida através de imagens, encontros e relações.',
      it: 'Storie, memorie e percorsi che raccontano la vita del Centro Nossa Senhora Aparecida attraverso immagini, incontri e relazioni.',
    },
  },
  '/progetti-pedagogici': {
    title: withSuffix({ pt: 'Laboratórios', it: 'Laboratori' }),
    description: {
      pt: 'Experiências, atividades e percursos educativos que acompanham o crescimento das crianças do Centro Nossa Senhora Aparecida.',
      it: 'Esperienze, attività e percorsi educativi che accompagnano la crescita dei bambini del Centro Nossa Senhora Aparecida.',
    },
  },
  '/accoglienza-quotidiana': {
    title: withSuffix({ pt: 'Acolhimento diário', it: 'Accoglienza quotidiana' }),
    description: {
      pt: 'Cada criança precisa sentir-se acolhida, escutada e reconhecida. No Centro Nossa Senhora Aparecida, o acolhimento é o modo como vivemos cada dia.',
      it: 'Ogni bambino ha bisogno di sentirsi accolto, ascoltato e riconosciuto. Al Centro Nossa Senhora Aparecida, l\'accoglienza è il modo in cui viviamo ogni giorno.',
    },
  },
  '/educazione': {
    title: withSuffix({ pt: 'Educação', it: 'Educazione' }),
    description: {
      pt: 'Educar é acompanhar cada criança na descoberta de si mesma, do mundo e das suas possibilidades: a missão educativa do Centro Nossa Senhora Aparecida.',
      it: 'Educare è accompagnare ogni bambino nella scoperta di sé, del mondo e delle proprie possibilità: la missione educativa del Centro Nossa Senhora Aparecida.',
    },
  },
  '/cura-e-nutrizione': {
    title: withSuffix({ pt: 'Cuidado e nutrição', it: 'Cura e nutrizione' }),
    description: {
      pt: 'Um corpo saudável é a base de qualquer aprendizagem: como o Centro Nossa Senhora Aparecida garante alimentação, saúde e bem-estar às crianças.',
      it: 'Un corpo sano è la base di qualsiasi apprendimento: come il Centro Nossa Senhora Aparecida garantisce alimentazione, salute e benessere ai bambini.',
    },
  },
  '/accompagnamento-famiglie': {
    title: withSuffix({ pt: 'Acompanhamento das famílias', it: 'Accompagnamento delle famiglie' }),
    description: {
      pt: 'Acompanhar uma criança significa também caminhar junto à sua família: o cuidado que se estende além das paredes do Centro.',
      it: 'Accompagnare un bambino significa anche camminare insieme alla sua famiglia: la cura che si estende oltre le mura del Centro.',
    },
  },
  '/documentari-racconti/intervista-centro': {
    title: withSuffix({ pt: 'Entrevista ao Centro', it: 'Intervista al Centro' }),
    description: {
      pt: 'Um olhar autêntico sobre a missão e o trabalho educativo, social e comunitário do Centro Nossa Senhora Aparecida em Salvador da Bahia.',
      it: 'Uno sguardo autentico sulla missione e il lavoro educativo, sociale e comunitario del Centro Nossa Senhora Aparecida a Salvador de Bahia.',
    },
  },
  '/documentari-racconti/visita-presidente': {
    title: withSuffix({ pt: 'A visita do Presidente da República Italiana', it: 'La visita del Presidente della Repubblica Italiana' }),
    description: {
      pt: 'Um momento histórico de encontro, reconhecimento e proximidade à missão educativa e social do Centro Nossa Senhora Aparecida.',
      it: 'Un momento storico di incontro, riconoscimento e vicinanza alla missione educativa e sociale del Centro Nossa Senhora Aparecida.',
    },
  },
  '/documentari-racconti/dieci-anni-creche': {
    title: withSuffix({ pt: 'Dez anos da Creche', it: 'Dieci anni della Creche' }),
    description: {
      pt: 'Dez anos de acolhimento, educação e crescimento compartilhado junto às crianças, famílias e comunidade de Salvador da Bahia.',
      it: 'Dieci anni di accoglienza, educazione e crescita condivisa insieme ai bambini, alle famiglie e alla comunità di Salvador de Bahia.',
    },
  },
  '/documentari-racconti/posa-prima-pietra': {
    title: withSuffix({ pt: 'Lançamento da pedra fundamental', it: 'Posa della prima pietra' }),
    description: {
      pt: 'O início concreto de um lugar pensado para acolher, educar e acompanhar novas gerações: o lançamento da pedra fundamental do Projeto Escola.',
      it: 'L\'inizio concreto di un luogo pensato per accogliere, educare e accompagnare nuove generazioni: la posa della prima pietra del Progetto Scuola.',
    },
  },
  '/documentari-racconti/auto-idea-tutti': {
    title: withSuffix({ pt: 'Auto: uma ideia de todos', it: 'Auto: un\'idea di tutti' }),
    description: {
      pt: 'Um percurso compartilhado nascido do desejo de construir juntos possibilidades concretas de crescimento, autonomia e participação.',
      it: 'Un percorso condiviso nato dal desiderio di costruire insieme possibilità concrete di crescita, autonomia e partecipazione.',
    },
  },
  '/documentari-racconti/ricordi-narrazioni': {
    title: withSuffix({ pt: 'Memórias e narrativas africanas', it: 'Ricordi e narrazioni africane' }),
    description: {
      pt: 'Uma viagem entre memória, cultura e identidade através de relatos, imagens e testemunhos.',
      it: 'Un viaggio tra memoria, cultura e identità attraverso racconti, immagini e testimonianze.',
    },
  },
  '/avanzamento-lavori': {
    title: withSuffix({ pt: 'Andamento das Obras', it: 'Avanzamento Lavori' }),
    description: {
      pt: 'Acompanhe o andamento das obras do Projeto Escola do Centro Nossa Senhora Aparecida, com fotos e vídeos do canteiro.',
      it: 'Segui l\'avanzamento dei lavori del Progetto Scuola del Centro Nossa Senhora Aparecida, con foto e video del cantiere.',
    },
  },
  '/sostegno-a-distanza': {
    title: withSuffix({ pt: 'Sostegno a distanza', it: 'Sostegno a distanza' }),
    description: {
      pt: 'Um vínculo real entre você e uma criança que cresce — educação, cuidado e nutrição todos os dias.',
      it: 'Un legame reale tra te e un bambino che cresce — educazione, cura e nutrimento ogni giorno.',
    },
  },
  '/atelier': {
    title: withSuffix({ pt: 'Ateliê', it: 'Atelier' }),
    description: {
      pt: 'Um espaço onde as crianças exploram, investigam e se exprimem através de materiais, cores e linguagens diversas.',
      it: 'Uno spazio dove i bambini esplorano, investigano e si esprimono attraverso materiali, colori e linguaggi diversi.',
    },
  },
  '/nossa-metodologia': {
    title: withSuffix({ pt: 'Nossa metodologia', it: 'La nostra metodologia' }),
    description: {
      pt: 'A criança como protagonista do seu processo de aprendizagem: interação, brincadeira, experiência e relação como fundamentos do desenvolvimento integral.',
      it: 'Il bambino come protagonista del proprio processo di apprendimento: interazione, gioco, esperienza e relazione come fondamenti dello sviluppo integrale.',
    },
  },
  '/projetos-permanentes': {
    title: withSuffix({ pt: 'Projetos Permanentes', it: 'Progetti Permanenti' }),
    description: {
      pt: 'Projetos que acompanham as crianças ao longo de todo o ano, fortalecendo sua curiosidade, autonomia e desenvolvimento integral.',
      it: 'Progetti che accompagnano i bambini per tutto l\'anno, rafforzando la loro curiosità, autonomia e sviluppo integrale.',
    },
  },
  '/mostras-pedagogicas': {
    title: withSuffix({ pt: 'Mostras Pedagógicas', it: 'Mostre Pedagogiche' }),
    description: {
      pt: 'Celebrando os processos, as descobertas e as aprendizagens das crianças junto às famílias e à comunidade.',
      it: 'Celebrando i processi, le scoperte e gli apprendimenti dei bambini insieme alle famiglie e alla comunità.',
    },
  },
  '/alimentacao-saudavel': {
    title: withSuffix({ pt: 'Alimentação Saudável', it: 'Alimentazione Sana' }),
    description: {
      pt: 'Está na mesa, tá no prato, vai pro corpo: o projeto pedagógico de educação nutricional para crianças de 0 a 5 anos do Centro Nossa Senhora Aparecida.',
      it: 'È in tavola, è nel piatto, va nel corpo: il progetto pedagogico di educazione nutrizionale per bambini da 0 a 5 anni del Centro Nossa Senhora Aparecida.',
    },
  },
  '/relatorios': {
    title: withSuffix({ pt: 'Relatórios', it: 'Relazioni' }),
    description: {
      pt: 'Documentação pedagógica transparente e acessível — o registro vivo do trabalho realizado com as crianças do Centro Nossa Senhora Aparecida.',
      it: 'Documentazione pedagogica trasparente e accessibile — la registrazione viva del lavoro svolto con i bambini del Centro Nossa Senhora Aparecida.',
    },
  },
};
