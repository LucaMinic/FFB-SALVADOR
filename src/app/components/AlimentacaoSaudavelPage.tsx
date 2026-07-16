import { ChevronDown, Leaf, Clock, Users, Target } from 'lucide-react';
import { useT } from '../context/LanguageContext';
import { AnimatedSection } from './AnimatedSection';
import { Button } from './Button';
import heroImg from '../../imports/nuove/r4bis.jpg';
import hortaImg from '../../imports/nuove/r4.jpg';

export function AlimentacaoSaudavelPage() {
  const t = useT();

  const meta = [
    {
      icon: <Leaf className="w-7 h-7" />,
      label: t({ pt: 'Tema', it: 'Tema', de: "Thema" }),
      value: t({ pt: 'Alimentação saudável', it: 'Alimentazione sana', de: "Gesunde Ernährung" }),
      color: 'var(--soft-green)',
    },
    {
      icon: <Target className="w-7 h-7" />,
      label: t({ pt: 'Subtema', it: 'Sottotema', de: "Unterthema" }),
      value: t({ pt: 'Está na mesa, Tá no prato, vai pro corpo', it: 'È in tavola, è nel piatto, va nel corpo', de: "Es liegt auf dem Tisch, es ist auf dem Teller, es geht in den Körper" }),
      color: 'var(--warm-orange)',
    },
    {
      icon: <Clock className="w-7 h-7" />,
      label: t({ pt: 'Duração', it: 'Durata', de: "Dauer" }),
      value: t({ pt: 'Todo o ano letivo', it: "Tutto l'anno scolastico", de: "Das ganze Schuljahr" }),
      color: 'var(--deep-blue)',
    },
    {
      icon: <Users className="w-7 h-7" />,
      label: t({ pt: 'Público alvo', it: 'Destinatari', de: "Zielgruppe" }),
      value: t({ pt: 'Crianças de 0 a 5 anos e 11 meses', it: 'Bambini da 0 a 5 anni e 11 mesi', de: "Kinder von 0 bis 5 Jahren und 11 Monaten" }),
      color: 'var(--warm-red)',
    },
  ];

  const specificObjectives = [
    t({ pt: 'Incentivar o conhecimento sobre os grupos alimentares e suas funções nutricionais, bem como sobre os alimentos de cada grupo', it: 'Incentivare la conoscenza sui gruppi alimentari e le loro funzioni nutrizionali, nonché sugli alimenti di ciascun gruppo', de: "Das Wissen über die Lebensmittelgruppen und ihre ernährungsphysiologischen Funktionen sowie über die Lebensmittel jeder Gruppe fördern" }),
    t({ pt: 'Compreender a importância da alimentação equilibrada e da hidratação para a saúde e o bem-estar', it: "Comprendere l'importanza di un'alimentazione equilibrata e dell'idratazione per la salute e il benessere", de: "Die Bedeutung einer ausgewogenen Ernährung und einer ausreichenden Flüssigkeitszufuhr für Gesundheit und Wohlbefinden verstehen" }),
    t({ pt: 'Aprender a preparar refeições simples de forma saudável, lúdica e segura', it: 'Imparare a preparare pasti semplici in modo sano, ludico e sicuro', de: "Lernen, einfache Mahlzeiten auf gesunde, spielerische und sichere Weise zuzubereiten" }),
    t({ pt: 'Estimular a autonomia na escolha de alimentos saudáveis e no cuidado com a higiene pessoal na hora das refeições', it: "Stimolare l'autonomia nella scelta di alimenti sani e nella cura dell'igiene personale durante i pasti", de: "Die Selbstständigkeit bei der Wahl gesunder Lebensmittel und bei der persönlichen Hygiene während der Mahlzeiten fördern" }),
    t({ pt: 'Incentivar a experimentação de novos alimentos, de alimentos de outras culturas e tradições', it: 'Incentivare la sperimentazione di nuovi alimenti, di alimenti di altre culture e tradizioni', de: "Das Ausprobieren neuer Lebensmittel sowie von Speisen aus anderen Kulturen und Traditionen fördern" }),
    t({ pt: 'Despertar o interesse dos bebês e crianças para o cuidado com as plantas', it: 'Suscitare l\'interesse dei bambini per la cura delle piante', de: "Das Interesse der Kinder an der Pflege von Pflanzen wecken" }),
    t({ pt: 'Conscientizar a importância de cultivar os alimentos e consumi-los', it: "Sensibilizzare sull'importanza di coltivare gli alimenti e consumarli", de: "Für die Bedeutung des Anbaus und Verzehrs von Lebensmitteln sensibilisieren" }),
    t({ pt: 'Compreender a importância de uma alimentação equilibrada e saudável', it: "Comprendere l'importanza di un'alimentazione equilibrata e sana", de: "Die Bedeutung einer ausgewogenen und gesunden Ernährung verstehen" }),
    t({ pt: 'Incentivar a importância do cuidado e cultivo, acompanhando o plantio e germinação de diferentes plantas, legumes e verduras', it: 'Incentivare l\'importanza della cura e della coltivazione, seguendo la semina e la germinazione di diverse piante, legumi e verdure', de: "Die Bedeutung von Pflege und Anbau fördern, indem die Aussaat und Keimung verschiedener Pflanzen, Hülsenfrüchte und Gemüsesorten begleitet wird" }),
    t({ pt: 'Estimular o conhecimento e a degustação de alimentos de origem indígena e africana', it: 'Stimolare la conoscenza e la degustazione di alimenti di origine indigena e africana', de: "Das Wissen über und das Verkosten von Lebensmitteln indigenen und afrikanischen Ursprungs fördern" }),
  ];

  const bimesters = [
    {
      period: t({ pt: 'Fevereiro / Março', it: 'Febbraio / Marzo', de: "Februar / März" }),
      content: t({ pt: 'Alimentação saudável e hidratação', it: 'Alimentazione sana e idratazione', de: "Gesunde Ernährung und Flüssigkeitszufuhr" }),
      color: 'var(--deep-blue)',
    },
    {
      period: t({ pt: 'Abril / Maio', it: 'Aprile / Maggio', de: "April / Mai" }),
      content: t({ pt: 'Legumes, verduras, frutas, cereais, grãos e tubérculos', it: 'Ortaggi, verdure, frutta, cereali, legumi e tuberi', de: "Gemüse, Blattgemüse, Obst, Getreide, Hülsenfrüchte und Knollen" }),
      color: 'var(--soft-green)',
    },
    {
      period: t({ pt: 'Junho / Julho', it: 'Giugno / Luglio', de: "Juni / Juli" }),
      content: t({ pt: 'Fontes proteicas animais e vegetais', it: 'Fonti proteiche animali e vegetali', de: "Tierische und pflanzliche Proteinquellen" }),
      color: 'var(--warm-orange)',
    },
    {
      period: t({ pt: 'Agosto / Setembro', it: 'Agosto / Settembre', de: "August / September" }),
      content: t({ pt: 'Sal, açúcar e gordura', it: 'Sale, zucchero e grassi', de: "Salz, Zucker und Fette" }),
      color: 'var(--warm-red)',
    },
    {
      period: t({ pt: 'Outubro / Novembro', it: 'Ottobre / Novembre', de: "Oktober / November" }),
      content: t({ pt: 'Aproveitamento integral dos alimentos', it: 'Utilizzo integrale degli alimenti', de: "Vollständige Nutzung der Lebensmittel" }),
      color: 'var(--soft-green)',
    },
  ];

  const strategies = [
    t({ pt: 'Pesquisar e se apropriar do tema em questão', it: 'Ricercare e approfondire il tema in questione', de: "Das jeweilige Thema erforschen und vertiefen" }),
    t({ pt: 'Alinhar os objetivos, as habilidades e os conteúdos do plano bimestral ao projeto', it: 'Allineare gli obiettivi, le competenze e i contenuti del piano bimestrale al progetto', de: "Die Ziele, Kompetenzen und Inhalte des Zweimonatsplans mit dem Projekt abstimmen" }),
    t({ pt: 'Organizar ações que envolva as famílias e as crianças', it: 'Organizzare attività che coinvolgano le famiglie e i bambini', de: "Aktivitäten organisieren, die Familien und Kinder einbeziehen" }),
    t({ pt: 'Planejar as ações de acordo com as observações dos interesses das crianças', it: 'Pianificare le attività in base alle osservazioni degli interessi dei bambini', de: "Die Aktivitäten anhand der beobachteten Interessen der Kinder planen" }),
    t({ pt: 'Organizar contextos, ambientes e espaços adequados para o desenvolvimento das ações', it: 'Organizzare contesti, ambienti e spazi adeguati per lo sviluppo delle attività', de: "Geeignete Kontexte, Umgebungen und Räume für die Durchführung der Aktivitäten schaffen" }),
    t({ pt: 'Buscar histórias de acordo com os interesses das crianças e também relacionadas aos temas', it: 'Cercare storie in base agli interessi dei bambini e anche legate ai temi', de: "Geschichten passend zu den Interessen der Kinder und den jeweiligen Themen auswählen" }),
    t({ pt: 'Observar as crianças, no coletivo, e nos pequenos grupos', it: 'Osservare i bambini, nel collettivo e nei piccoli gruppi', de: "Die Kinder in der Gruppe und in Kleingruppen beobachten" }),
    t({ pt: 'Registrar as observações', it: 'Registrare le osservazioni', de: "Die Beobachtungen dokumentieren" }),
    t({ pt: 'Buscar vídeos sobre alimentação para incentivar crianças', it: "Cercare video sull'alimentazione per incentivare i bambini", de: "Videos über Ernährung suchen, um die Kinder zu motivieren" }),
    t({ pt: 'Organizar e selecionar materiais para o desenvolvimento das ações', it: 'Organizzare e selezionare materiali per lo sviluppo delle attività', de: "Materialien für die Durchführung der Aktivitäten organisieren und auswählen" }),
    t({ pt: 'Avaliar as ações propostas, os caminhos, as aprendizagens e descobertas das crianças e do professor', it: "Valutare le attività proposte, i percorsi, gli apprendimenti e le scoperte dei bambini e dell'insegnante", de: "Die vorgeschlagenen Aktivitäten, die Lernwege sowie die Erkenntnisse und Entdeckungen der Kinder und der Lehrkraft bewerten" }),
    t({ pt: 'Utilizar músicas para incentivar as ações', it: 'Utilizzare musiche per incentivare le attività', de: "Musik einsetzen, um die Aktivitäten zu fördern" }),
  ];

  return (
    <>
      {/* HERO */}
      <section
        className="relative flex flex-col items-center justify-center text-center overflow-hidden"
        style={{ minHeight: 'clamp(70vh, 85vh, 100vh)' }}
      >
        <img src={heroImg} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col items-center gap-8">
          <AnimatedSection delay={0.1}>
            <p className="text-white/70 uppercase tracking-[0.2em] text-sm font-medium mb-4">
              {t({ pt: 'Projeto permanente · Creche do Centro Nossa Senhora Aparecida', it: 'Progetto permanente · Asilo del Centro Nossa Senhora Aparecida', de: "Dauerhaftes Projekt · Kita des Centro Nossa Senhora Aparecida" })}
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              {t({ pt: 'Alimentação Saudável', it: 'Alimentazione Sana', de: "Gesunde Ernährung" })}
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed italic">
              {t({ pt: '"Está na mesa, Tá no prato, vai pro corpo"', it: '"È in tavola, è nel piatto, va nel corpo"', de: "\"Es liegt auf dem Tisch, es ist auf dem Teller, es geht in den Körper\"" })}
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
              <Button variant="primary" to="/dona-ora">
                {t({ pt: 'Doar agora', it: 'Dona ora', de: "Jetzt spenden" })}
              </Button>
              <a
                href="#conteudo"
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-200 text-base"
              >
                {t({ pt: 'Saiba mais', it: 'Scopri di più', de: "Mehr erfahren" })}
              </a>
            </div>
          </AnimatedSection>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <ChevronDown className="w-8 h-8 text-white/60 animate-bounce" />
        </div>
      </section>

      {/* META INFO */}
      <section id="conteudo" className="bg-white py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection delay={0.1}>
            <div className="text-center mb-16">
              <div className="w-16 h-1 bg-[var(--soft-green)] mx-auto mb-8 rounded-full" />
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--deep-blue)]">
                {t({ pt: 'Sobre o projeto', it: 'Sul progetto', de: "Über das Projekt" })}
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {meta.map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div
                  className="rounded-2xl p-8 text-white h-full flex flex-col gap-4 shadow-lg"
                  style={{ backgroundColor: item.color }}
                >
                  <div className="opacity-90">{item.icon}</div>
                  <p className="text-white/70 text-sm uppercase tracking-widest font-medium">{item.label}</p>
                  <p className="font-semibold text-lg leading-snug">{item.value}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* JUSTIFICATIVA */}
      <section className="bg-[var(--beige)] py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <AnimatedSection delay={0.1}>
              <div>
                <p className="text-[var(--warm-orange)] uppercase tracking-widest text-sm font-semibold mb-4">
                  {t({ pt: 'Por que este projeto?', it: 'Perché questo progetto?', de: "Warum dieses Projekt?" })}
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--deep-blue)] mb-8">
                  {t({ pt: 'Justificativa', it: 'Motivazione', de: "Beweggrund" })}
                </h2>
                <div className="space-y-5 text-gray-600 text-lg leading-relaxed">
                  <p>
                    {t({
                      pt: 'As refeições oferecidas nas escolas e creches segundo a BNCC devem ser saudáveis e equilibradas, contendo uma variedade de alimentos de diferentes grupos alimentares. Esta ação terá um impacto positivo na saúde e no bem-estar das crianças, ajudando-as a desenvolver hábitos saudáveis e a serem mais ativas e saudáveis.',
                      it: "I pasti offerti nelle scuole e negli asili, secondo la BNCC, devono essere sani ed equilibrati, contenendo una varietà di alimenti di diversi gruppi alimentari. Questa azione avrà un impatto positivo sulla salute e sul benessere dei bambini, aiutandoli a sviluppare abitudini sane e a essere più attivi e in salute.",
                      de: "Die in Schulen und Kitas angebotenen Mahlzeiten müssen gemäß der BNCC gesund und ausgewogen sein und eine Vielfalt an Lebensmitteln aus verschiedenen Gruppen enthalten. Diese Maßnahme wirkt sich positiv auf die Gesundheit und das Wohlbefinden der Kinder aus und hilft ihnen, gesunde Gewohnheiten zu entwickeln und aktiver und gesünder zu werden.",
                    })}
                  </p>
                  <p>
                    {t({
                      pt: 'Promover hábitos alimentares saudáveis para as crianças bem pequenas permitirá que elas tenham muito mais chances de se tornarem adultos saudáveis, compreendam os benefícios de uma dieta equilibrada e a escolher alimentos nutritivos desde cedo.',
                      it: "Promuovere abitudini alimentari sane per i bambini molto piccoli permetterà loro di avere molte più possibilità di diventare adulti in salute, capire i benefici di una dieta equilibrata e scegliere cibi nutrienti sin da piccoli.",
                      de: "Die Förderung gesunder Essgewohnheiten bei sehr kleinen Kindern gibt ihnen deutlich bessere Chancen, gesunde Erwachsene zu werden, die Vorteile einer ausgewogenen Ernährung zu verstehen und schon früh nahrhafte Lebensmittel zu wählen.",
                    })}
                  </p>
                  <p>
                    {t({
                      pt: 'Além de aprenderem a se alimentar bem, terão melhor desempenho escolar, pois os nutrientes adequados são importantes para o desenvolvimento cerebral e para a saúde mental das crianças. É também uma oportunidade de inclusão e diversidade cultural, pois é a oportunidade de oferecer para as crianças novos alimentos e aprender sobre as diferentes tradições culinárias de sua cultura.',
                      it: "Oltre ad imparare a nutrirsi bene, avranno migliori risultati scolastici, poiché i nutrienti adeguati sono importanti per lo sviluppo cerebrale e per la salute mentale dei bambini. È anche un'opportunità di inclusione e diversità culturale, poiché è l'occasione di offrire ai bambini nuovi alimenti e di imparare le diverse tradizioni culinarie della loro cultura.",
                      de: "Neben dem Erlernen einer guten Ernährung erzielen sie auch bessere schulische Leistungen, da eine angemessene Nährstoffversorgung wichtig für die Gehirnentwicklung und die psychische Gesundheit der Kinder ist. Zudem ist es eine Gelegenheit für Inklusion und kulturelle Vielfalt, da den Kindern neue Lebensmittel angeboten und die unterschiedlichen kulinarischen Traditionen ihrer Kultur vermittelt werden können.",
                    })}
                  </p>
                  <p>
                    {t({
                      pt: 'Por isso através deste projeto alimentação, será possível promover para as nossas crianças a construção de hábitos saudáveis, prevenir doenças, garantir um bom desempenho escolar e conhecer sobre as diferentes tradições culinárias de sua comunidade, através de propostas investigativas e lúdicas.',
                      it: "Per questo motivo, attraverso questo progetto sull'alimentazione, sarà possibile promuovere nei nostri bambini la costruzione di abitudini sane, prevenire malattie, garantire buoni risultati scolastici e conoscere le diverse tradizioni culinarie della loro comunità, attraverso proposte investigative e ludiche.",
                      de: "Aus diesem Grund wird es durch dieses Ernährungsprojekt möglich sein, bei unseren Kindern den Aufbau gesunder Gewohnheiten zu fördern, Krankheiten vorzubeugen, gute schulische Leistungen zu sichern und die unterschiedlichen kulinarischen Traditionen ihrer Gemeinschaft durch forschende und spielerische Angebote kennenzulernen.",
                    })}
                  </p>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <img loading="lazy"
                src={hortaImg}
                alt={t({ pt: 'Horta e alimentação saudável', it: 'Orto e alimentazione sana', de: "Garten und gesunde Ernährung" })}
                className="w-full rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.12)] object-cover h-80 lg:h-[520px]"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* OBJETIVOS */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          {/* Objetivo Geral */}
          <AnimatedSection delay={0.1}>
            <div className="bg-gradient-to-br from-[var(--deep-blue)] to-[#1f5f7a] rounded-3xl p-10 md:p-14 mb-20 text-white shadow-xl">
              <p className="uppercase tracking-widest text-white/60 text-sm font-medium mb-4">
                {t({ pt: 'Objetivo geral', it: 'Obiettivo generale', de: "Allgemeines Ziel" })}
              </p>
              <p className="text-white text-xl md:text-2xl leading-relaxed font-light">
                {t({
                  pt: 'Assegurar às crianças os direitos de brincar, participar, explorar, conhecer, expressar e conviver, através do contato com alimentos naturais, suas relações e transformações, valorizando o protagonismo infantil, seus interesses e suas interações individuais e coletivas. Incentivar a alimentação saudável, a promoção de bons hábitos alimentares, a prevenção de doenças e o conhecimento de diferentes tradições culinárias de sua comunidade cultural. De forma atraente, lúdica e educativa.',
                  it: "Assicurare ai bambini i diritti di giocare, partecipare, esplorare, conoscere, esprimersi e convivere, attraverso il contatto con alimenti naturali, le loro relazioni e trasformazioni, valorizzando il protagonismo infantile, i loro interessi e le loro interazioni individuali e collettive. Incentivare l'alimentazione sana, la promozione di buone abitudini alimentari, la prevenzione delle malattie e la conoscenza delle diverse tradizioni culinarie della loro comunità culturale. In modo attraente, ludico ed educativo.",
                  de: "Den Kindern das Recht auf Spielen, Teilhabe, Erkunden, Wissen, Ausdruck und Zusammenleben sichern, durch den Kontakt mit natürlichen Lebensmitteln, ihren Beziehungen und Verwandlungen, wobei die kindliche Eigeninitiative, ihre Interessen sowie ihre individuellen und gemeinschaftlichen Interaktionen gewürdigt werden. Die gesunde Ernährung fördern, ebenso wie gute Essgewohnheiten, die Vorbeugung von Krankheiten und das Kennenlernen der unterschiedlichen kulinarischen Traditionen ihrer kulturellen Gemeinschaft – auf ansprechende, spielerische und pädagogische Weise.",
                })}
              </p>
            </div>
          </AnimatedSection>

          {/* Objetivos Específicos */}
          <AnimatedSection delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--deep-blue)] mb-10">
              {t({ pt: 'Objetivos específicos', it: 'Obiettivi specifici', de: "Spezifische Ziele" })}
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {specificObjectives.map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.05}>
                <div className="flex items-start gap-4 bg-[var(--beige)] rounded-xl p-5">
                  <span className="inline-block w-3 h-3 rounded-full bg-[var(--soft-green)] flex-shrink-0 mt-1.5" />
                  <p className="text-gray-700 leading-relaxed">{item}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CONTEÚDOS POR BIMESTRE */}
      <section className="bg-[var(--beige)] py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--deep-blue)] mb-4 text-center">
              {t({ pt: 'Conteúdos por bimestre', it: 'Contenuti per bimestre', de: "Inhalte pro Bimester" })}
            </h2>
            <p className="text-gray-600 text-lg text-center mb-16 max-w-2xl mx-auto">
              {t({
                pt: 'O projeto se desenvolve ao longo do ano letivo, com temas específicos a cada bimestre.',
                it: "Il progetto si sviluppa durante tutto l'anno scolastico, con temi specifici per ogni bimestre.",
                de: "Das Projekt erstreckt sich über das gesamte Schuljahr, mit spezifischen Themen für jedes Bimester.",
              })}
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {bimesters.map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div
                  className="rounded-2xl p-8 text-white shadow-lg h-full flex flex-col gap-3"
                  style={{ backgroundColor: item.color }}
                >
                  <p className="text-white/60 text-sm uppercase tracking-widest font-medium">
                    {t({ pt: 'Bimestre', it: 'Bimestre', de: "Bimester" })} {index + 1}
                  </p>
                  <p className="font-bold text-xl">{item.period}</p>
                  <p className="text-white/90 leading-relaxed">{item.content}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ESTRATÉGIAS */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--deep-blue)] mb-4 text-center">
              {t({ pt: 'Estratégias de trabalho', it: 'Strategie di lavoro', de: "Arbeitsstrategien" })}
            </h2>
            <p className="text-gray-600 text-lg text-center mb-16 max-w-2xl mx-auto">
              {t({
                pt: 'Como organizamos e desenvolvemos o projeto no dia a dia da creche.',
                it: "Come organizziamo e sviluppiamo il progetto nel quotidiano dell'asilo.",
                de: "Wie wir das Projekt im Alltag der Kita organisieren und umsetzen.",
              })}
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {strategies.map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.04}>
                <div className="flex items-start gap-4">
                  <span className="inline-block w-3 h-3 rounded-full bg-[var(--warm-orange)] flex-shrink-0 mt-1.5" />
                  <p className="text-gray-700 leading-relaxed">{item}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* AVALIAÇÃO + CTA */}
      <section className="bg-[var(--beige)] py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection delay={0.1}>
            <div className="w-16 h-1 bg-[var(--warm-orange)] mx-auto mb-10 rounded-full" />
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--deep-blue)] mb-6">
              {t({ pt: 'Avaliação', it: 'Valutazione', de: "Bewertung" })}
            </h2>
            <p className="text-gray-600 text-xl leading-relaxed mb-14 max-w-2xl mx-auto">
              {t({
                pt: 'Preencher o relatório com as propostas executadas no projeto para ser enviadas ao PAS, a cada bimestre.',
                it: 'Compilare il rapporto con le proposte realizzate nel progetto da inviare al PAS, ogni bimestre.',
                de: "Den Bericht mit den im Projekt umgesetzten Angeboten ausfüllen, der alle zwei Monate an den PAS zu senden ist.",
              })}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" to="/dona-ora">
                {t({ pt: 'Apoie nosso trabalho', it: 'Sostieni il nostro lavoro', de: "Unterstützen Sie unsere Arbeit" })}
              </Button>
              <Button variant="secondary" to="/projetos-permanentes">
                {t({ pt: 'Todos os projetos', it: 'Tutti i progetti', de: "Alle Projekte" })}
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
