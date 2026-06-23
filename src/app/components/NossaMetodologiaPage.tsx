import { ChevronDown } from 'lucide-react';
import { useT } from '../context/LanguageContext';
import { AnimatedSection } from './AnimatedSection';
import { Button } from './Button';
import heroImg from '../../imports/11.jpeg';
import img1 from '../../imports/4-1.jpeg';
import img2 from '../../imports/2.jpeg';
import img3 from '../../imports/16-3.jpeg';
import img4 from '../../imports/9-1.jpeg';

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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection delay={0.1}>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--deep-blue)] mb-6">
                  {t({ pt: 'Uma proposta sociointeracionista', it: 'Una proposta socio-interazionista' })}
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {t({
                    pt: 'Nossa metodologia é baseada em uma proposta sociointeracionista, que reconhece a criança como protagonista do seu processo de aprendizagem.',
                    it: 'La nostra metodologia si basa su una proposta socio-interazionista, che riconosce il bambino come protagonista del proprio processo di apprendimento.',
                  })}
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {t({
                    pt: 'Acreditamos que as crianças aprendem por meio das interações, das brincadeiras, das experiências e das relações que constroem com os colegas, os professores e o ambiente ao seu redor.',
                    it: "Crediamo che i bambini imparino attraverso le interazioni, i giochi, le esperienze e le relazioni che costruiscono con i compagni, gli insegnanti e l'ambiente circostante.",
                  })}
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <img
                src={img1}
                alt={t({ pt: 'Crianças em interação', it: 'Bambini in interazione' })}
                className="w-full rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.12)] object-cover h-80 lg:h-96"
              />
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

      {/* SECTION 5 — I PILASTRI */}
      <section className="bg-white py-24 md:py-32">
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
                icon: '🧒',
                title: t({ pt: 'Criança protagonista', it: 'Bambino protagonista' }),
                desc: t({ pt: 'A criança é autora ativa do próprio aprendizado, não apenas receptora de conhecimentos', it: 'Il bambino è autore attivo del proprio apprendimento, non solo ricevitore di conoscenze' })
              },
              {
                icon: '🤝',
                title: t({ pt: 'Interação social', it: 'Interazione sociale' }),
                desc: t({ pt: 'O conhecimento se constrói nas relações com os outros e com o ambiente', it: 'La conoscenza si costruisce nelle relazioni con gli altri e con l\'ambiente' })
              },
              {
                icon: '🎮',
                title: t({ pt: 'Brincadeira e experiência', it: 'Gioco ed esperienza' }),
                desc: t({ pt: 'O jogo é a linguagem privilegiada da infância e o caminho principal para a aprendizagem', it: "Il gioco è il linguaggio privilegiato dell'infanzia e la via principale per l'apprendimento" })
              },
              {
                icon: '👂',
                title: t({ pt: 'Escuta sensível', it: 'Ascolto sensibile' }),
                desc: t({ pt: 'Cada criança é escutada e valorizada nas suas perguntas, hipóteses e modos de ser', it: 'Ogni bambino è ascoltato e valorizzato nelle sue domande, ipotesi e modi di essere' })
              },
              {
                icon: '📚',
                title: t({ pt: 'Desenvolvimento integral', it: 'Sviluppo integrale' }),
                desc: t({ pt: 'Atenção à pessoa inteira: cognitiva, emocional, social, criativa e relacional', it: 'Attenzione alla persona intera: cognitiva, emotiva, sociale, creativa e relazionale' })
              },
              {
                icon: '🏡',
                title: t({ pt: 'Ambiente educador', it: 'Ambiente educatore' }),
                desc: t({ pt: 'Espaços pensados para convidar à exploração, à descoberta e à criação', it: 'Spazi pensati per invitare all\'esplorazione, alla scoperta e alla creazione' })
              }
            ].map((item, index) => (
              <AnimatedSection key={index} delay={index * 0.08}>
                <div className="bg-gradient-to-br from-[var(--beige)] to-white rounded-2xl p-8 shadow-lg h-full flex flex-col">
                  <span className="text-4xl mb-4">{item.icon}</span>
                  <h3 className="text-xl font-bold text-[var(--deep-blue)] mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-base">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
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
