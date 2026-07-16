import img1 from '../../imports/nuove/r1b.jpg';
import img2 from '../../imports/nuove/r2bis.jpg';
import img3 from '../../imports/nuove/r3.jpg';
import img4 from '../../imports/nuove/r4bis.jpg';
import img5 from '../../imports/nuove/r5bis.jpg';
import img6 from '../../imports/nuove/r6.jpg';
import img7 from '../../imports/nuove/r2.jpg';
import areaAlimentacaoImg from '../../imports/nuove/r4bis.jpg';
import africaImg from '../../imports/nuove/africa01ok.jpg';
import transporteImg from '../../imports/nuove/meios-transporte.jpg';
import miudoImg from '../../imports/nuove/RELATORIO PEQUENOS AMINAIS2.jpeg';

export interface Bilingual {
  pt: string;
  it: string;
  de: string;
}

export interface Report {
  img: string;
  category: Bilingual;
  title: Bilingual;
  description: Bilingual;
  href: string;
  color: string;
}

export interface RelatorioArea {
  slug: string;
  cardImage: string;
  color: string;
  name: Bilingual;
  tagline: Bilingual;
  reports: Report[];
}

const base = import.meta.env.BASE_URL;

export const relatorioAreas: RelatorioArea[] = [
  {
    slug: 'alimentazione-sana',
    cardImage: areaAlimentacaoImg,
    color: 'var(--warm-orange)',
    name: { pt: 'Alimentação Saudável', it: 'Alimentazione Sana', de: "Gesunde Ernährung" },
    tagline: {
      pt: 'Campanhas bimestrais de educação nutricional realizadas com as crianças e as famílias.',
      it: 'Campagne bimestrali di educazione nutrizionale realizzate con i bambini e le famiglie.',
      de: "Zweimonatliche Ernährungserziehungskampagnen mit den Kindern und Familien.",
    },
    reports: [
      {
        img: img1,
        category: { pt: 'Relatório bimestral · Fev/Mar 2026', it: 'Relazione bimestrale · Feb/Mar 2026', de: "Zweimonatsbericht · Feb/März 2026" },
        title: { pt: '1ª Campanha Educação Nutricional 2026 — Alimentação Equilibrada', it: '1ª Campagna Educazione Nutrizionale 2026 — Alimentazione Equilibrata', de: "1. Ernährungserziehungskampagne 2026 — Ausgewogene Ernährung" },
        description: {
          pt: 'Registro das propostas realizadas no período de fevereiro e março de 2026: oficina de manipulação de frutas, degustação de pitaia e experiência de self-service no refeitório. Autora: Joseilma Passos.',
          it: 'Registro delle proposte realizzate nel periodo di febbraio e marzo 2026: laboratorio di manipolazione di frutta, degustazione di pitaia ed esperienza self-service in refettorio. Autrice: Joseilma Passos.',
          de: "Dokumentation der Aktivitäten von Februar und März 2026: Werkstatt zum Verarbeiten von Obst, Verkostung von Drachenfrucht und Self-Service-Erfahrung in der Mensa. Autorin: Joseilma Passos.",
        },
        href: `${base}relatorios/relatorio-1-campanha-nutricional-2026.pdf`,
        color: 'var(--deep-blue)',
      },
      {
        img: img2,
        category: { pt: 'Relatório bimestral · Abr/Mai 2025', it: 'Relazione bimestrale · Apr/Mag 2025', de: "Zweimonatsbericht · Apr/Mai 2025" },
        title: { pt: '2º Bimestre — Incentivo ao consumo de Legumes, Verduras e Frutas', it: '2° Bimestre — Incentivo al consumo di Ortaggi, Verdure e Frutta', de: "2. Zweimonatszeitraum — Förderung des Konsums von Gemüse, Blattgemüse und Obst" },
        description: {
          pt: 'Oficinas de preparo de saladas e sanduíches naturais, investigação brincante com melancia e abacate, plantio de hortaliças e palestra com nutricionistas para as famílias. Autora: Joseilma Passos.',
          it: 'Laboratori di preparazione di insalate e panini naturali, esplorazione ludica di anguria e avocado, semina di ortaggi e incontro con nutrizioniste per le famiglie. Autrice: Joseilma Passos.',
          de: "Werkstätten zur Zubereitung von Salaten und natürlichen Sandwiches, spielerische Erkundung von Wassermelone und Avocado, Anpflanzen von Gemüse und Informationsveranstaltung mit Ernährungsberaterinnen für die Familien. Autorin: Joseilma Passos.",
        },
        href: `${base}relatorios/relatorio-2-bimestre-legumes-verduras-frutas.pdf`,
        color: 'var(--soft-green)',
      },
      {
        img: img3,
        category: { pt: 'Relatório bimestral · 3ª Campanha', it: 'Relazione bimestrale · 3ª Campagna', de: "Zweimonatsbericht · 3. Kampagne" },
        title: { pt: '3ª Campanha Educação Nutricional — Açúcares, Sal e Gorduras', it: '3ª Campagna Educazione Nutrizionale — Zuccheri, Sale e Grassi', de: "3. Ernährungserziehungskampagne — Zucker, Salz und Fette" },
        description: {
          pt: 'Oficinas de culinária saudável: beijinho de batata-doce, doce de abóbora, iogurte com frutas, guacamole e molho de ervas. Visita do dentista em parceria com o posto de saúde local. Retomada do cultivo de ervas aromáticas na horta.',
          it: 'Laboratori di cucina sana: dolcetto di patata dolce, marmellata di zucca, yogurt con frutta, guacamole e salsa alle erbe. Visita del dentista in collaborazione con il centro di salute locale. Ripresa della coltivazione di erbe aromatiche nell\'orto.',
          de: "Werkstätten für gesunde Küche: Süßkartoffel-Häppchen, Kürbismarmelade, Joghurt mit Früchten, Guacamole und Kräutersauce. Zahnarztbesuch in Zusammenarbeit mit dem örtlichen Gesundheitszentrum. Wiederaufnahme des Kräuteranbaus im Garten.",
        },
        href: `${base}relatorios/relatorio-3-campanha-acucares-sal-gorduras.pdf`,
        color: 'var(--warm-orange)',
      },
      {
        img: img4,
        category: { pt: 'Relatório bimestral · 4ª Campanha · Nov 2025', it: 'Relazione bimestrale · 4ª Campagna · Nov 2025', de: "Zweimonatsbericht · 4. Kampagne · Nov 2025" },
        title: { pt: '4ª Campanha Educação Nutricional — Energia, Carboidratos, Óleos e Gorduras', it: '4ª Campagna Educazione Nutrizionale — Energia, Carboidrati, Oli e Grassi', de: "4. Ernährungserziehungskampagne — Energie, Kohlenhydrate, Öle und Fette" },
        description: {
          pt: 'Construção da pirâmide alimentar, brincadeira de self-service, leitura de rótulos no mercadinho, alimentos ricos em ferro e oficina de barrinha de cereal natural. Autora: Joseilma Passos.',
          it: 'Costruzione della piramide alimentare, gioco di self-service, lettura delle etichette al mini-mercato, alimenti ricchi di ferro e laboratorio di barrette di cereali naturali. Autrice: Joseilma Passos.',
          de: "Aufbau der Ernährungspyramide, Self-Service-Spiel, Lesen von Etiketten im Mini-Markt, eisenreiche Lebensmittel und Werkstatt zur Herstellung natürlicher Müsliriegel. Autorin: Joseilma Passos.",
        },
        href: `${base}relatorios/relatorio-4-campanha-energia-carboidratos-oleos-gorduras.pdf`,
        color: 'var(--warm-red)',
      },
      {
        img: img5,
        category: { pt: 'Relatório bimestral · 5ª Campanha · Dez 2025', it: 'Relazione bimestrale · 5ª Campagna · Dic 2025', de: "Zweimonatsbericht · 5. Kampagne · Dez 2025" },
        title: { pt: '5ª Campanha Educação Nutricional — Proteínas e Minerais', it: '5ª Campagna Educazione Nutrizionale — Proteine e Minerali', de: "5. Ernährungserziehungskampagne — Proteine und Mineralstoffe" },
        description: {
          pt: 'Proposta "De onde vem o leite?", biscoitinho de aveia com banana, "Quem nos fornece o ovo?" com cenário de fazendinha, classificação na pirâmide alimentar e piquenique coletivo de encerramento do ano. Autora: Joseilma Passos.',
          it: 'Proposta "Da dove viene il latte?", biscottini di avena con banana, "Chi ci fornisce l\'uovo?" con scenario di fattoria, classificazione nella piramide alimentare e picnic collettivo di chiusura dell\'anno. Autrice: Joseilma Passos.',
          de: "Projekt \"Woher kommt die Milch?\", Haferkekse mit Banane, \"Wer liefert uns das Ei?\" mit Bauernhof-Szenario, Einordnung in die Ernährungspyramide und gemeinsames Picknick zum Jahresabschluss. Autorin: Joseilma Passos.",
        },
        href: `${base}relatorios/relatorio-5-campanha-proteinas-minerais.pdf`,
        color: 'var(--deep-blue)',
      },
      {
        img: img6,
        category: { pt: '6ª Campanha · Mai 2026', it: '6ª Campagna · Mag 2026', de: "6. Kampagne · Mai 2026" },
        title: { pt: '6ª Campanha — Aproveitamento Integral dos Alimentos', it: '6ª Campagna — Utilizzo Integrale degli Alimenti', de: "6. Kampagne — Vollständige Nutzung der Lebensmittel" },
        description: {
          pt: 'Oficina de novos sabores (maxixe, caqui, pinha, jiló), brincadeiras de aproveitamento integral, palestra sobre aleitamento materno e workshop de iogurte natural com frutas para as famílias. Autora: Joseilma Passos.',
          it: 'Laboratorio di nuovi sapori (maxixe, cachi, frutto del custode, giló), giochi di utilizzo integrale, conferenza sull\'allattamento materno e workshop di yogurt naturale con frutta per le famiglie. Autrice: Joseilma Passos.',
          de: "Werkstatt neuer Geschmacksrichtungen (Maxixe, Kaki, Rahmapfel, Jiló), Spiele zur vollständigen Verwertung von Lebensmitteln, Vortrag über das Stillen und Workshop zur Zubereitung von Naturjoghurt mit Früchten für die Familien. Autorin: Joseilma Passos.",
        },
        href: `${base}relatorios/relatorio-6-campanha-aproveitamento-integral.pdf`,
        color: 'var(--soft-green)',
      },
      {
        img: img7,
        category: { pt: 'Relatório Anual · 2025', it: 'Relazione Annuale · 2025', de: "Jahresbericht · 2025" },
        title: { pt: 'Relatório Anual — Está na mesa, está no prato, vai para o corpo', it: 'Relazione Annuale — È in tavola, è nel piatto, va nel corpo', de: "Jahresbericht — Es liegt auf dem Tisch, es liegt auf dem Teller, es gelangt in den Körper" },
        description: {
          pt: 'Relatório do projeto de intervenção anual 2025: self-service para mapeamento dos hábitos alimentares, experimentação de folhas verdes, história cantada "Sopa do Nenê" com os bebês, e investigação da beterraba e limão com preparo coletivo do suco.',
          it: 'Relazione del progetto di intervento annuale 2025: self-service per la mappatura delle abitudini alimentari, esplorazione di foglie verdi, storia cantata "Sopa do Nenê" con i lattanti, e investigazione di barbabietola e limone con preparazione collettiva del succo.',
          de: "Bericht zum Jahresprojekt 2025: Self-Service zur Erfassung der Ernährungsgewohnheiten, Erkundung von Blattgemüse, gesungene Geschichte \"Sopa do Nenê\" mit den Säuglingen, sowie Untersuchung von Roter Bete und Zitrone mit gemeinsamer Saftzubereitung.",
        },
        href: `${base}relatorios/relatorio-7-alimentacao-saudavel-2025.pdf`,
        color: 'var(--warm-orange)',
      },
    ],
  },
  {
    slug: 'identita-e-cultura',
    cardImage: africaImg,
    color: 'var(--warm-red)',
    name: { pt: 'Identidade e Cultura', it: 'Identità e Cultura', de: "Identität und Kultur" },
    tagline: {
      pt: 'Projetos de valorização da ancestralidade e da cultura afro-brasileira no cotidiano da creche.',
      it: 'Progetti di valorizzazione dell\'ancestralità e della cultura afro-brasiliana nella vita quotidiana dell\'asilo.',
      de: "Projekte zur Wertschätzung der Ahnengeschichte und der afrobrasilianischen Kultur im Alltag der Kita.",
    },
    reports: [
      {
        img: africaImg,
        category: { pt: 'Relatório de projeto', it: 'Relazione di progetto', de: "Projektbericht" },
        title: { pt: 'Projeto "Quanta África temos em nosso cotidiano?"', it: 'Progetto "Quanta Africa abbiamo nel nostro quotidiano?"', de: "Projekt \"Wie viel Afrika steckt in unserem Alltag?\"" },
        description: {
          pt: 'Conhecimento aprofundado sobre a ancestralidade através de um território africano imersivo: artes, dança, literatura, contos africanos e alimentos afro-brasileiros, promovendo a valorização étnico-racial e a cultura antirracista.',
          it: 'Conoscenza approfondita dell\'ancestralità attraverso un territorio africano immersivo: arti, danza, letteratura, racconti africani e alimenti afro-brasiliani, per valorizzare l\'identità etnico-razziale e la cultura antirazzista.',
          de: "Vertiefte Auseinandersetzung mit der Ahnengeschichte durch eine immersive Reise durch Afrika: Kunst, Tanz, Literatur, afrikanische Erzählungen und afrobrasilianische Speisen, zur Stärkung der ethnisch-rassischen Identität und einer antirassistischen Kultur.",
        },
        href: `${base}relatorios/relatorio-quanta-africa-temos-cotidiano.pdf`,
        color: 'var(--warm-red)',
      },
    ],
  },
  {
    slug: 'mondo-in-movimento',
    cardImage: transporteImg,
    color: 'var(--deep-blue)',
    name: { pt: 'Mundo em Movimento', it: 'Mondo in Movimento', de: "Welt in Bewegung" },
    tagline: {
      pt: 'Investigações sobre os meios de transporte e a segurança no trânsito.',
      it: 'Investigazioni sui mezzi di trasporto e sulla sicurezza stradale.',
      de: "Untersuchungen zu Verkehrsmitteln und Straßenverkehrssicherheit.",
    },
    reports: [
      {
        img: transporteImg,
        category: { pt: 'Relatório bimestral · Jul/Ago 2025', it: 'Relazione bimestrale · Lug/Ago 2025', de: "Zweimonatsbericht · Jul/Aug 2025" },
        title: { pt: 'Projeto "Meios de transporte"', it: 'Progetto "Mezzi di trasporto"', de: "Projekt \"Verkehrsmittel\"" },
        description: {
          pt: 'As crianças conheceram os meios de transporte aéreo, terrestre e aquático, exploraram formas geométricas e segurança no trânsito, e investigaram o submarino e o automóvel como objetos de pesquisa, culminando na construção coletiva de veículos com materiais recicláveis.',
          it: 'I bambini hanno conosciuto i mezzi di trasporto aerei, terrestri e acquatici, esplorato le forme geometriche e la sicurezza stradale, e indagato il sottomarino e l\'automobile come oggetti di ricerca, fino alla costruzione collettiva di veicoli con materiali riciclati.',
          de: "Die Kinder lernten Luft-, Land- und Wasserfahrzeuge kennen, erkundeten geometrische Formen und die Straßenverkehrssicherheit und untersuchten U-Boot und Automobil als Forschungsgegenstände, bis hin zum gemeinsamen Bau von Fahrzeugen aus recycelten Materialien.",
        },
        href: `${base}relatorios/relatorio-bimestral-transporte-mundo-miudo-2025.pdf`,
        color: 'var(--deep-blue)',
      },
    ],
  },
  {
    slug: 'piccoli-animali-e-natura',
    cardImage: miudoImg,
    color: 'var(--soft-green)',
    name: { pt: 'Pequenos Animais e Natureza', it: 'Piccoli Animali e Natura', de: "Kleine Tiere und Natur" },
    tagline: {
      pt: 'Descobertas sobre os insetos e os pequenos animais de jardim através da investigação.',
      it: 'Scoperte sugli insetti e i piccoli animali da giardino attraverso l\'investigazione.',
      de: "Entdeckungen über Insekten und kleine Gartentiere durch eigenes Forschen.",
    },
    reports: [
      {
        img: miudoImg,
        category: { pt: 'Relatório bimestral · Set/Out 2025', it: 'Relazione bimestrale · Set/Ott 2025', de: "Zweimonatsbericht · Sep/Okt 2025" },
        title: { pt: 'Projeto "Mundo miúdo: Insetos e pequenos animais de jardim"', it: 'Progetto "Mondo minuto: insetti e piccoli animali da giardino"', de: "Projekt \"Kleine Welt: Insekten und kleine Gartentiere\"" },
        description: {
          pt: 'As crianças descobriram traços, sons, cores e formas dos insetos e animais de jardim através da observação e manipulação. A investigação sobre as abelhas revelou a origem do mel e a importância dos insetos para a natureza.',
          it: 'I bambini hanno scoperto tratti, suoni, colori e forme degli insetti e degli animali da giardino attraverso l\'osservazione e la manipolazione. L\'indagine sulle api ha rivelato l\'origine del miele e l\'importanza degli insetti per la natura.',
          de: "Die Kinder entdeckten Merkmale, Geräusche, Farben und Formen von Insekten und Gartentieren durch Beobachtung und praktisches Erforschen. Die Untersuchung der Bienen zeigte die Herkunft des Honigs und die Bedeutung der Insekten für die Natur.",
        },
        href: `${base}relatorios/relatorio-bimestral-transporte-mundo-miudo-2025.pdf`,
        color: 'var(--soft-green)',
      },
    ],
  },
];
