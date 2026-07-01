import { ChevronDown } from 'lucide-react';
import { useT } from '../context/LanguageContext';
import { AnimatedSection } from './AnimatedSection';
import { Button } from './Button';
import heroImg from '../../imports/11.jpeg';
import img1 from '../../imports/4-1.jpeg';
import img2 from '../../imports/2.jpeg';
import img3 from '../../imports/16-3.jpeg';
import img4 from '../../imports/9-1.jpeg';
import mostrasImg from '../../imports/4-3.jpeg';
import formacaoContImg from '../../imports/17-1.jpeg';
import reggioImg from '../../imports/3-1.jpeg';

export function NossaMetodologiaPage() {
  const t = useT();

  return (
    <main>
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
              {t({ pt: 'Creche do Centro Nossa Senhora Aparecida', it: "Asilo del Centro Nossa Senhora Aparecida" })}
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              {t({ pt: 'Nossa metodologia', it: 'La nostra metodologia' })}
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              {t({
                pt: 'A criança como protagonista do seu processo de aprendizagem — interação, brincadeira, experiência e relação como fundamentos de um desenvolvimento integral.',
                it: "Il bambino come protagonista del proprio processo di apprendimento — interazione, gioco, esperienza e relazione come fondamenti di uno sviluppo integrale.",
              })}
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
              <Button variant="primary" to="/dona-ora">
                {t({ pt: 'Doar agora', it: 'Dona ora' })}
              </Button>
              <a
                href="#scopri"
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-200 text-base"
              >
                {t({ pt: 'Saiba mais', it: 'Scopri di più' })}
              </a>
            </div>
          </AnimatedSection>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <ChevronDown className="w-8 h-8 text-white/60 animate-bounce" />
        </div>
      </section>

      {/* SECTION 1 — ABORDAGEM SOCIOINTERACIONISTA */}
      <section id="scopri" className="bg-white py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">

          {/* Titolo */}
          <AnimatedSection delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--deep-blue)] mb-12 text-center">
              {t({ pt: 'Uma proposta sociointeracionista', it: 'Una proposta socio-interazionista' })}
            </h2>
          </AnimatedSection>

          {/* Testo su 2 colonne */}
          <AnimatedSection delay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="space-y-5 text-gray-600 text-lg leading-relaxed">
                <p>
                  {t({
                    pt: 'Nossa metodologia é baseada em uma proposta sociointeracionista, que reconhece a criança como protagonista do seu processo de aprendizagem.',
                    it: 'La nostra metodologia si basa su una proposta socio-interazionista, che riconosce il bambino come protagonista del proprio processo di apprendimento.',
                  })}
                </p>
                <p>
                  {t({
                    pt: 'Acreditamos que as crianças aprendem por meio das interações, das brincadeiras, das experiências e das relações que constroem com os colegas, os professores e o ambiente ao seu redor.',
                    it: "Crediamo che i bambini imparino attraverso le interazioni, i giochi, le esperienze e le relazioni che costruiscono con i compagni, gli insegnanti e l'ambiente circostante.",
                  })}
                </p>
                <p>
                  {t({
                    pt: 'Nossa metodologia é inspirada nas Pedagogias Participativas e na abordagem de Reggio Emília, pois valorizam a criança como protagonista da aprendizagem e garantem que as crianças aprendem por meio das brincadeiras, das experiências, das interações e das descobertas que fazem no dia a dia.',
                    it: "La nostra metodologia è ispirata alle Pedagogie Partecipative e all'approccio di Reggio Emilia, che valorizzano il bambino come protagonista dell'apprendimento e garantiscono che i bambini imparino attraverso il gioco, le esperienze, le interazioni e le scoperte del quotidiano.",
                  })}
                </p>
              </div>
              <div className="space-y-5 text-gray-600 text-lg leading-relaxed">
                <p>
                  {t({
                    pt: 'Por isso, escutamos com atenção seus interesses, ideias e necessidades, planejando propostas que respeitam o tempo e a singularidade de cada criança. Valorizamos diferentes formas de expressão, como o desenho, a pintura, a música, o movimento, a fala e o brincar.',
                    it: "Per questo, ascoltiamo con attenzione i loro interessi, le idee e i bisogni, pianificando proposte che rispettano i tempi e la singolarità di ogni bambino. Valorizziamo diverse forme di espressione, come il disegno, la pittura, la musica, il movimento, la parola e il gioco.",
                  })}
                </p>
                <p>
                  {t({
                    pt: 'Também entendemos que os espaços educam. Por isso, organizamos ambientes acolhedores e ricos em possibilidades de exploração e aprendizagem. Os contextos investigativos e o ateliê são espaços importantes para que as crianças pesquisem, criem, experimentem e construam conhecimentos de forma significativa.',
                    it: "Comprendiamo anche che gli spazi educano. Per questo, organizziamo ambienti accoglienti e ricchi di possibilità di esplorazione e apprendimento. I contesti investigativi e l'atelier sono spazi importanti affinché i bambini ricerchino, creino, sperimentino e costruiscano conoscenze in modo significativo.",
                  })}
                </p>
                <p>
                  {t({
                    pt: 'Com essa proposta educativa, buscamos oferecer experiências que fortaleçam a autonomia, a criatividade, a participação e o desenvolvimento integral das crianças, contribuindo para que construam um futuro com mais oportunidades, dignidade e esperança.',
                    it: "Con questa proposta educativa, cerchiamo di offrire esperienze che rafforzino l'autonomia, la creatività, la partecipazione e lo sviluppo integrale dei bambini, contribuendo affinché costruiscano un futuro con più opportunità, dignità e speranza.",
                  })}
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Immagine grande centrata */}
          <AnimatedSection delay={0.3}>
            <img
              src={img1}
              alt={t({ pt: 'Crianças em interação', it: 'Bambini in interazione' })}
              className="w-full rounded-3xl shadow-[0_24px_64px_rgba(0,0,0,0.13)] object-cover h-80 md:h-[480px]"
            />
          </AnimatedSection>

        </div>
      </section>

      {/* SECTION PILASTRI */}
      <section className="bg-[var(--beige)] py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection delay={0.1}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--deep-blue)] mb-4">
                {t({ pt: 'Os pilares da nossa metodologia', it: 'I pilastri della nostra metodologia' })}
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
                {t({
                  pt: 'Cada elemento do nosso trabalho nasce de uma visão integrada do desenvolvimento da criança.',
                  it: 'Ogni elemento del nostro lavoro nasce da una visione integrata dello sviluppo del bambino.',
                })}
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: '👧',
                title: t({ pt: 'Criança Protagonista', it: 'Bambino Protagonista' }),
                desc: t({ pt: 'Reconhecemos a criança como sujeito ativo de sua aprendizagem, capaz de pensar, criar, investigar e construir conhecimentos a partir de suas experiências.', it: 'Riconosciamo il bambino come soggetto attivo del proprio apprendimento, capace di pensare, creare, investigare e costruire conoscenze a partire dalle proprie esperienze.' })
              },
              {
                icon: '💛',
                title: t({ pt: 'Relações de Cuidado, Afeto e Pertencimento', it: 'Relazioni di Cura, Affetto e Appartenenza' }),
                desc: t({ pt: 'Promovemos vínculos seguros e acolhedores, fortalecendo a confiança, a convivência, o respeito e o sentimento de pertencimento.', it: 'Promuoviamo legami sicuri e accoglienti, rafforzando la fiducia, la convivenza, il rispetto e il senso di appartenenza.' })
              },
              {
                icon: '🥗',
                title: t({ pt: 'Alimentação Saudável e Bem-Estar', it: 'Alimentazione Sana e Benessere' }),
                desc: t({ pt: 'Entendemos a alimentação saudável como parte fundamental do desenvolvimento integral das crianças. Incentivamos hábitos alimentares saudáveis, momentos de partilha e experiências que promovam o cuidado consigo, com o outro e com a vida.', it: "Consideriamo l'alimentazione sana come parte fondamentale dello sviluppo integrale dei bambini. Incoraggiamo abitudini alimentari sane, momenti di condivisione ed esperienze che promuovano la cura di sé, dell'altro e della vita." })
              },
              {
                icon: '🎯',
                title: t({ pt: 'Aprendizagem pela Experiência e pelo Brincar', it: "Apprendimento attraverso l'Esperienza e il Gioco" }),
                desc: t({ pt: 'Acreditamos que as crianças aprendem explorando, brincando, investigando, experimentando e interagindo com o mundo ao seu redor.', it: 'Crediamo che i bambini imparino esplorando, giocando, investigando, sperimentando e interagendo con il mondo che li circonda.' })
              },
              {
                icon: '🏡',
                title: t({ pt: 'Ambiente que Educa', it: 'Ambiente che Educa' }),
                desc: t({ pt: 'Organizamos espaços acolhedores, inspiradores e desafiadores, que favorecem a autonomia, a curiosidade, as descobertas e as aprendizagens significativas.', it: "Organizziamo spazi accoglienti, ispiratori e stimolanti, che favoriscono l'autonomia, la curiosità, le scoperte e gli apprendimenti significativi." })
              }
            ].map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.08}>
                <div className="bg-gradient-to-br from-white to-[var(--beige-dark)] rounded-2xl p-8 shadow-lg h-full flex flex-col">
                  <span className="text-4xl mb-4">{item.icon}</span>
                  <h3 className="text-xl font-bold text-[var(--deep-blue)] mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-base">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION REGGIO EMILIA */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection delay={0.1}>
              <img
                src={reggioImg}
                alt={t({ pt: 'Abordagem Reggio Emilia', it: 'Approccio Reggio Emilia' })}
                className="w-full rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.12)] object-cover h-80 lg:h-96"
              />
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div>
                <p className="text-[var(--warm-orange)] uppercase tracking-widest text-sm font-semibold mb-4">
                  {t({ pt: 'Nossa inspiração', it: 'La nostra ispirazione' })}
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--deep-blue)] mb-6">
                  {t({ pt: 'Abordagem Reggio Emilia', it: 'Approccio Reggio Emilia' })}
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {t({
                    pt: 'O Reggio Emilia Approach é uma filosofia educativa nascida em Itália nos anos 60, criada por Loris Malaguzzi e desenvolvida pelas comunidades de Reggio Emilia. Hoje é reconhecido internacionalmente como um dos modelos mais inovadores de educação da primeira infância.',
                    it: "Il Reggio Emilia Approach è una filosofia educativa nata in Italia negli anni '60, sviluppata da Loris Malaguzzi e dalle comunità di Reggio Emilia. Oggi è riconosciuto a livello internazionale come uno dei modelli più innovativi di educazione della prima infanzia.",
                  })}
                </p>
                <p className="text-gray-600 text-lg leading-relaxed mb-10">
                  {t({
                    pt: 'O Centro Nossa Senhora Aparecida não se define uma escola Reggio Emilia, mas desde 2018 esta abordagem é uma fonte de inspiração profunda que orienta o trabalho educativo quotidiano.',
                    it: 'Il Centro Nossa Senhora Aparecida non si definisce una scuola Reggio Emilia, ma dal 2018 questo approccio è una fonte di ispirazione profonda che orienta il lavoro educativo quotidiano.',
                  })}
                </p>
                <blockquote className="border-l-4 border-[var(--soft-green)] pl-6 mb-10">
                  <p className="text-gray-500 text-lg italic leading-relaxed">
                    "Fare una scuola amabile, operosa, inventosa, vivibile, documentabile e comunicabile."
                  </p>
                  <cite className="text-[var(--deep-blue)] font-semibold text-sm not-italic mt-2 block">— Loris Malaguzzi</cite>
                </blockquote>
                <Button variant="primary" to="/approccio-reggio-emilia">
                  {t({ pt: 'Descubra a abordagem completa', it: "Scopri l'approccio completo" })}
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* SECTION 2 — PEDAGOGIAS PARTICIPATIVAS */}
      <section className="bg-[var(--beige)] py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection delay={0.1} className="order-2 lg:order-1">
              <img
                src={img2}
                alt={t({ pt: 'Pedagogias participativas', it: 'Pedagogie partecipative' })}
                className="w-full rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.12)] object-cover h-80 lg:h-96"
              />
            </AnimatedSection>
            <AnimatedSection delay={0.2} className="order-1 lg:order-2">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--deep-blue)] mb-6">
                  {t({ pt: 'Pedagogias participativas', it: 'Pedagogie partecipative' })}
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {t({
                    pt: 'Nossa prática também é inspirada nas Pedagogias Participativas, que incentivam a escuta sensível, o respeito à infância e a participação das crianças no planejamento e desenvolvimento das atividades.',
                    it: "La nostra pratica è anche ispirata alle Pedagogie Partecipative, che incoraggiano l'ascolto sensibile, il rispetto dell'infanzia e la partecipazione dei bambini nella pianificazione e nello sviluppo delle attività.",
                  })}
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {t({
                    pt: 'A criança não é um destinatário passivo: é escutada, valorizada e convidada a participar ativamente na construção das próprias experiências educativas.',
                    it: 'Il bambino non è un destinatario passivo: è ascoltato, valorizzato e invitato a partecipare attivamente alla costruzione delle proprie esperienze educative.',
                  })}
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* SECTION MOSTRAS PEDAGÓGICAS */}
      <section className="bg-[var(--beige)] py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--deep-blue)] mb-8 text-center">
              {t({ pt: 'Mostras Pedagógicas', it: 'Mostre Pedagogiche' })}
            </h2>
            <p className="text-gray-600 text-xl leading-relaxed text-center max-w-3xl mx-auto mb-16">
              {t({
                pt: 'As Mostras Pedagógicas são momentos importantes em nossa proposta educativa, pois permitem compartilhar com as famílias e a comunidade as experiências, as descobertas e as aprendizagens vividas pelas crianças ao longo do ano.',
                it: "Le Mostre Pedagogiche sono momenti importanti nella nostra proposta educativa, poiché permettono di condividere con le famiglie e la comunità le esperienze, le scoperte e gli apprendimenti vissuti dai bambini nel corso dell'anno.",
              })}
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection delay={0.1}>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  {t({
                    pt: 'Por meio de fotos, registros, produções, falas e projetos desenvolvidos pelas crianças, tornamos visível o percurso de aprendizagem de cada grupo, valorizando seus esforços, conquistas, curiosidades e formas de pensar.',
                    it: 'Attraverso foto, documentazioni, produzioni, parole e progetti sviluppati dai bambini, rendiamo visibile il percorso di apprendimento di ogni gruppo, valorizzando i loro sforzi, i traguardi, le curiosità e le modalità di pensiero.',
                  })}
                </p>
                <p>
                  {t({
                    pt: 'Mais do que apresentar resultados, as mostras revelam os processos vividos pelas crianças, mostrando como aprendem, investigam, criam, brincam e constroem conhecimentos no dia a dia. Também fortalecem a parceria entre a creche e as famílias, que passam a conhecer e valorizar ainda mais as experiências que fazem parte da infância de seus filhos.',
                    it: "Più che presentare risultati, le mostre rivelano i processi vissuti dai bambini, mostrando come imparano, investigano, creano, giocano e costruiscono conoscenze nel quotidiano. Rafforzano anche la partnership tra l'asilo e le famiglie, che vengono a conoscere e valorizzare ancora di più le esperienze che fanno parte dell'infanzia dei loro figli.",
                  })}
                </p>
                <p>
                  {t({
                    pt: 'Dessa forma, as Mostras Pedagógicas se tornam uma importante ferramenta de documentação, celebração e valorização das aprendizagens das crianças.',
                    it: 'In questo modo, le Mostre Pedagogiche diventano un importante strumento di documentazione, celebrazione e valorizzazione degli apprendimenti dei bambini.',
                  })}
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <img
                src={mostrasImg}
                alt={t({ pt: 'Mostra pedagógica', it: 'Mostra pedagogica' })}
                className="w-full rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.12)] object-cover h-80 lg:h-96"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* SEZIONE FORMAÇÃO CONTINUADA */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection delay={0.1}>
            <div className="w-16 h-1 bg-[var(--warm-orange)] mb-10 rounded-full" />
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--deep-blue)] mb-16">
              {t({
                pt: 'Formação continuada dos nossos professores',
                it: 'Formazione continua dei nostri insegnanti',
              })}
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <AnimatedSection delay={0.15}>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  {t({
                    pt: 'Entendemos que a formação continuada do professor é muito importante para o trabalho que realizamos na creche. Por isso, promovemos esse processo de forma permanente, garantindo momentos de estudo, reflexão e troca de experiências entre a equipe.',
                    it: 'Riteniamo che la formazione continua degli insegnanti sia fondamentale per il lavoro che svolgiamo nell\'asilo. Per questo, promuoviamo questo processo in modo permanente, garantendo momenti di studio, riflessione e scambio di esperienze tra il team.',
                  })}
                </p>
                <p>
                  {t({
                    pt: 'Uma vez por mês, realizamos a formação continuada dos nossos professores, entendendo que o educador precisa estar sempre em processo de aprendizagem. Esses encontros fortalecem a prática pedagógica e ajudam a qualificar ainda mais o trabalho realizado com as crianças.',
                    it: 'Una volta al mese realizziamo la formazione continua dei nostri insegnanti, ritenendo che l\'educatore abbia sempre bisogno di essere in un processo di apprendimento. Questi incontri rafforzano la pratica pedagogica e contribuiscono a qualificare ulteriormente il lavoro svolto con i bambini.',
                  })}
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.25}>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  {t({
                    pt: 'Valorizamos um professor atento às necessidades de cada criança, que respeite seus tempos, suas formas de aprender e suas diferentes maneiras de se expressar.',
                    it: 'Valorizziamo un insegnante attento ai bisogni di ogni bambino, che rispetti i suoi tempi, le sue modalità di apprendimento e i suoi diversi modi di esprimersi.',
                  })}
                </p>
                <p>
                  {t({
                    pt: 'Além disso, incentivamos que os professores se encantem, sejam criativos, que planejem experiências significativas, com intencionalidade que despertam a curiosidade e favorecem a investigação, o brincar e a expressão das crianças. Dessa forma, a formação continuada contribui para um trabalho mais sensível, humano e comprometido com o desenvolvimento integral das crianças.',
                    it: 'Incoraggiamo inoltre gli insegnanti a entusiasmarsi, a essere creativi, a pianificare esperienze significative, con intenzionalità che risveglia la curiosità e favorisce l\'esplorazione, il gioco e l\'espressione dei bambini. In questo modo, la formazione continua contribuisce a un lavoro più sensibile, umano e impegnato nello sviluppo integrale dei bambini.',
                  })}
                </p>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={0.3}>
            <img
              src={formacaoContImg}
              alt={t({ pt: 'Formação continuada dos professores', it: 'Formazione continua degli insegnanti' })}
              className="w-full rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.12)] object-cover"
              style={{ maxHeight: '520px' }}
            />
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 3 — PIAGET E VYGOTSKY */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection delay={0.1}>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--deep-blue)] mb-6">
                  {t({ pt: 'Os fundamentos teóricos', it: 'I fondamenti teorici' })}
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {t({
                    pt: 'Nosso trabalho fundamenta-se nas contribuições de Jean Piaget e Lev Vygotsky, compreendendo que o desenvolvimento infantil acontece de forma integral, por meio da interação entre a criança, o outro e o mundo.',
                    it: 'Il nostro lavoro si fonda sui contributi di Jean Piaget e Lev Vygotsky, comprendendo che lo sviluppo infantile avviene in modo integrale, attraverso l\'interazione tra il bambino, l\'altro e il mondo.',
                  })}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                  <div className="bg-gradient-to-br from-[var(--beige)] to-white rounded-2xl p-6 shadow-md">
                    <p className="text-[var(--deep-blue)] font-bold text-lg mb-2">Jean Piaget</p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {t({
                        pt: 'O desenvolvimento cognitivo ocorre por estágios, através da ação da criança sobre o ambiente.',
                        it: 'Lo sviluppo cognitivo avviene per stadi, attraverso l\'azione del bambino sull\'ambiente.',
                      })}
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-[var(--beige)] to-white rounded-2xl p-6 shadow-md">
                    <p className="text-[var(--deep-blue)] font-bold text-lg mb-2">Lev Vygotsky</p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {t({
                        pt: 'A aprendizagem acontece na interação social e na zona de desenvolvimento proximal.',
                        it: "L'apprendimento avviene nell'interazione sociale e nella zona di sviluppo prossimale.",
                      })}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <img
                src={img3}
                alt={t({ pt: 'Desenvolvimento infantil integral', it: 'Sviluppo infantile integrale' })}
                className="w-full rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.12)] object-cover h-80 lg:h-96"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* SECTION 4 — AMBIENTE E EXPERIÊNCIAS */}
      <section className="bg-[var(--beige)] py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection delay={0.1} className="order-2 lg:order-1">
              <img
                src={img4}
                alt={t({ pt: 'Ambiente educativo', it: 'Ambiente educativo' })}
                className="w-full rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.12)] object-cover h-80 lg:h-96"
              />
            </AnimatedSection>
            <AnimatedSection delay={0.2} className="order-1 lg:order-2">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--deep-blue)] mb-6">
                  {t({ pt: 'Um ambiente que acolhe e desafia', it: 'Un ambiente che accoglie e stimola' })}
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {t({
                    pt: 'Buscamos oferecer um ambiente acolhedor, desafiador e rico em experiências, onde cada criança possa expressar suas ideias, criar, explorar e construir conhecimentos de forma significativa.',
                    it: "Cerchiamo di offrire un ambiente accogliente, stimolante e ricco di esperienze, dove ogni bambino possa esprimere le proprie idee, creare, esplorare e costruire conoscenze in modo significativo.",
                  })}
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {t({
                    pt: 'São oferecidas às crianças possibilidades de construção de conhecimentos específicos relacionados aos elementos curriculares que garantem o desenvolvimento integral das crianças por meio de experiências protagonizadas por elas mesmas.',
                    it: 'Ai bambini vengono offerte possibilità di costruzione di conoscenze specifiche legate agli elementi curricolari che garantiscono lo sviluppo integrale dei bambini attraverso esperienze di cui sono loro stessi protagonisti.',
                  })}
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>


      {/* CURRICULUM BNCC */}
      <section className="bg-[var(--beige)] py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--deep-blue)] mb-6 text-center">
              {t({ pt: 'Um currículo fundado na experiência', it: "Un curriculum fondato sull'esperienza" })}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-4 text-center max-w-3xl mx-auto">
              {t({
                pt: 'O currículo do Centro Nossa Senhora Aparecida é baseado nos direitos de aprendizagem e nos campos de experiência propostos pela BNCC. Os eixos principais são: interação, brincadeira, experiência, relação e exploração.',
                it: "Il curriculum del Centro Nossa Senhora Aparecida è basato sui diritti di apprendimento e sui campi di esperienza proposti dalla BNCC. Gli assi principali sono: interazione, gioco, esperienza, relazione ed esplorazione.",
              })}
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {[
              t({ pt: 'O eu, o outro e o nós', it: "Il sé, l'altro e il noi" }),
              t({ pt: 'Corpo, gestos e movimentos', it: 'Corpo, gesti e movimenti' }),
              t({ pt: 'Traços, sons, cores e formas', it: 'Tratti, suoni, colori e forme' }),
              t({ pt: 'Escuta, palavra, pensamento e imaginação', it: 'Ascolto, parola, pensiero e immaginazione' }),
              t({ pt: 'Espaços, tempos, quantidades, relações e transformações', it: 'Spazi, tempi, quantità, relazioni e trasformazioni' })
            ].map((item, index) => (
              <AnimatedSection key={item} delay={index * 0.1}>
                <div className="bg-gradient-to-br from-[var(--warm-orange-light)] to-[var(--warm-orange)] text-white rounded-2xl p-8 text-center shadow-lg h-full flex items-center justify-center">
                  <p className="text-lg font-medium">{item}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* TEMI TRASVERSALI */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--deep-blue)] mb-6 text-center">
              {t({ pt: 'Educar para a vida', it: 'Educare alla vita' })}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-12 text-center max-w-3xl mx-auto">
              {t({
                pt: 'O trabalho educativo aborda também temas transversais importantes para o crescimento das crianças e para a construção de uma comunidade mais justa e consciente.',
                it: 'Il lavoro educativo affronta anche temi trasversali importanti per la crescita dei bambini e per la costruzione di una comunità più giusta e consapevole.',
              })}
            </p>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <div className="bg-[var(--beige)] rounded-2xl p-8 shadow-lg">
              <ul className="space-y-4 text-lg text-gray-700">
                {[
                  t({ pt: 'educação étnica e racial', it: 'educazione etnica e razziale' }),
                  t({ pt: 'educação inclusiva', it: 'educazione inclusiva' }),
                  t({ pt: 'atenção ao género na primeira infância', it: 'attenzione al genere nella prima infanzia' }),
                  t({ pt: 'prevenção da violência', it: 'prevenzione della violenza' }),
                  t({ pt: 'educação ambiental', it: 'educazione ambientale' })
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="inline-block w-3 h-3 rounded-full bg-[var(--soft-green)] flex-shrink-0"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[var(--beige)] py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--deep-blue)] mb-6">
              {t({ pt: 'Descubra mais sobre a nossa proposta', it: 'Scopri di più sulla nostra proposta' })}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
              {t({
                pt: 'Nossa metodologia toma vida cada dia nos espaços, nas relações e nas atividades da creche. Descubra como se concretiza no dia a dia do Centro.',
                it: "La nostra metodologia prende vita ogni giorno negli spazi, nelle relazioni e nelle attività dell'asilo. Scopri come si concretizza nel quotidiano del Centro.",
              })}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" to="/approccio-reggio-emilia">
                {t({ pt: 'Abordagem Reggio Emilia', it: 'Approccio Reggio Emilia' })}
              </Button>
              <Button variant="secondary" to="/atelier">
                {t({ pt: 'O Ateliê', it: "L'Atelier" })}
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
