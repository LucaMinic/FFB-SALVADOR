import { ChevronDown } from 'lucide-react';
import { useT } from '../context/LanguageContext';
import { AnimatedSection } from './AnimatedSection';
import { Button } from './Button';
import heroImg from '../../imports/bambino_al_centro.jpeg';
import img1 from '../../imports/3-1.jpeg';
import img2 from '../../imports/11-2.jpeg';
import img3 from '../../imports/13-4.jpeg';
import img4 from '../../imports/4-1.jpeg';

export function ApproccioReggioEmiliaPage() {
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
              {t({ pt: 'Abordagem Reggio Emilia', it: 'Approccio Reggio Emilia' })}
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              {t({
                pt: 'Uma filosofia educativa que coloca a criança no centro — protagonista ativa da própria aprendizagem, capaz de criar, descobrir e crescer através de cem linguagens.',
                it: "Una filosofia educativa che mette il bambino al centro — protagonista attivo del proprio apprendimento, capace di creare, scoprire e crescere attraverso cento linguaggi.",
              })}
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
              <Button variant="primary" to="/asilo">
                {t({ pt: 'Conoscer a Creche', it: "Scopri l'Asilo" })}
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

      {/* SECTION 1 — COS'È */}
      <section id="scopri" className="bg-white py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection delay={0.1}>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--deep-blue)] mb-6">
                  {t({ pt: 'O que é a abordagem Reggio Emilia', it: "Cos'è l'Approccio Reggio Emilia" })}
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {t({
                    pt: 'O Reggio Emilia Approach é uma filosofia educativa nascida em Itália nos anos 60, criada por Loris Malaguzzi e desenvolvida pelas comunidades de Reggio Emilia. Hoje é reconhecido internacionalmente como um dos modelos mais inovadores de educação da primeira infância.',
                    it: "Il Reggio Emilia Approach è una filosofia educativa nata in Italia negli anni '60, sviluppata da Loris Malaguzzi e dalle comunità di Reggio Emilia. Oggi è riconosciuto a livello internazionale come uno dei modelli più innovativi di educazione della prima infanzia.",
                  })}
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {t({
                    pt: 'O Centro Nossa Senhora Aparecida não se define uma escola Reggio Emilia, mas desde 2018 esta abordagem é uma fonte de inspiração profunda que orienta o trabalho educativo quotidiano.',
                    it: 'Il Centro Nossa Senhora Aparecida non si definisce una scuola Reggio Emilia, ma dal 2018 questo approccio è una fonte di ispirazione profonda che orienta il lavoro educativo quotidiano.',
                  })}
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <img
                src={img1}
                alt={t({ pt: 'Criança aprendendo', it: 'Bambino che impara' })}
                className="w-full rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.12)] object-cover h-80 lg:h-96"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* SECTION 2 — IL BAMBINO PROTAGONISTA */}
      <section className="bg-[var(--beige)] py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection delay={0.1} className="order-2 lg:order-1">
              <img
                src={img2}
                alt={t({ pt: 'A criança protagonista', it: 'Il bambino protagonista' })}
                className="w-full rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.12)] object-cover h-80 lg:h-96"
              />
            </AnimatedSection>
            <AnimatedSection delay={0.2} className="order-1 lg:order-2">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--deep-blue)] mb-6">
                  {t({ pt: 'A criança como protagonista', it: 'Il bambino come protagonista' })}
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {t({
                    pt: 'No coração da abordagem Reggio Emilia está a convicção de que cada criança é um sujeito de direitos, portadora de potencialidades, curiosidades e energia criativa.',
                    it: "Al cuore dell'Approccio Reggio Emilia c'è la convinzione che ogni bambino sia un soggetto di diritti, portatore di potenzialità, curiosità ed energia creativa.",
                  })}
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {t({
                    pt: 'A criança não é um recetor passivo de conhecimentos, mas construtor ativo da própria aprendizagem. Explora, questiona, imagina e cria — e o educador tem o papel de escutar, observar e documentar este percurso.',
                    it: "Il bambino non è un ricevitore passivo di conoscenze, ma costruttore attivo del proprio apprendimento. Esplora, si interroga, immagina e crea — e l'educatore ha il ruolo di ascoltare, osservare e documentare questo percorso.",
                  })}
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* SECTION 3 — L'AMBIENTE */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection delay={0.1}>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--deep-blue)] mb-6">
                  {t({ pt: 'O ambiente como terceiro educador', it: "L'ambiente come terzo educatore" })}
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {t({
                    pt: 'Na abordagem Reggio Emilia, o espaço não é apenas um cenário: é um verdadeiro educador. Os ambientes são pensados e organizados com cuidado para estimular a exploração, a criatividade e a relação.',
                    it: "Nell'Approccio Reggio Emilia lo spazio non è solo uno scenario: è un vero educatore. Gli ambienti sono pensati e organizzati con cura per stimolare l'esplorazione, la creatività e la relazione.",
                  })}
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {t({
                    pt: 'Os espaços do Centro são preparados para convidar as crianças à descoberta: materiais naturais, luz, cores e superfícies que estimulam os sentidos e favorecem o jogo simbólico, a expressão e a investigação.',
                    it: 'Gli spazi del Centro sono preparati per invitare i bambini alla scoperta: materiali naturali, luce, colori e superfici che stimolano i sensi e favoriscono il gioco simbolico, l\'espressione e l\'investigazione.',
                  })}
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <img
                src={img3}
                alt={t({ pt: 'Ambiente educativo', it: 'Ambiente educativo' })}
                className="w-full rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.12)] object-cover h-80 lg:h-96"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* SECTION 4 — I CENTO LINGUAGGI */}
      <section className="bg-[var(--beige)] py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection delay={0.1} className="order-2 lg:order-1">
              <img
                src={img4}
                alt={t({ pt: 'As cem linguagens', it: 'I cento linguaggi' })}
                className="w-full rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.12)] object-cover h-80 lg:h-96"
              />
            </AnimatedSection>
            <AnimatedSection delay={0.2} className="order-1 lg:order-2">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--deep-blue)] mb-6">
                  {t({ pt: 'As cem linguagens da criança', it: 'I cento linguaggi del bambino' })}
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {t({
                    pt: 'Loris Malaguzzi falava de "cem linguagens" para indicar a extraordinária riqueza expressiva de cada criança: palavras, movimentos, desenhos, pinturas, construções, jogo, música, teatro.',
                    it: 'Loris Malaguzzi parlava di "cento linguaggi" per indicare la straordinaria ricchezza espressiva di ogni bambino: parole, movimenti, disegni, pitture, costruzioni, gioco, musica, teatro.',
                  })}
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {t({
                    pt: 'No Centro, cada criança é encorajada a exprimir-se através das suas linguagens preferidas. O adulto escuta e valoriza cada forma de comunicação, sem hierarquias entre palavras e gestos, entre pensamento e ação.',
                    it: 'Al Centro, ogni bambino è incoraggiato a esprimersi attraverso i propri linguaggi preferiti. L\'adulto ascolta e valorizza ogni forma di comunicazione, senza gerarchie tra parole e gesti, tra pensiero e azione.',
                  })}
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* SECTION 5 — VALORI CHIAVE */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection delay={0.1}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--deep-blue)] mb-4">
                {t({ pt: 'Os pilares da abordagem', it: "I pilastri dell'approccio" })}
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
                {t({
                  pt: 'Seis princípios que orientam a prática educativa quotidiana do Centro.',
                  it: 'Sei principi che orientano la pratica educativa quotidiana del Centro.',
                })}
              </p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: '👦',
                title: t({ pt: 'A criança protagonista', it: 'Il bambino protagonista' }),
                desc: t({ pt: 'Sujeito ativo e capaz, portador de direitos e potencialidades', it: 'Soggetto attivo e capace, portatore di diritti e potenzialità' })
              },
              {
                icon: '🏛️',
                title: t({ pt: 'O ambiente educador', it: "L'ambiente educatore" }),
                desc: t({ pt: 'Espaços pensados para estimular a curiosidade e a exploração', it: 'Spazi pensati per stimolare la curiosità e l\'esplorazione' })
              },
              {
                icon: '📝',
                title: t({ pt: 'Documentação educativa', it: 'Documentazione educativa' }),
                desc: t({ pt: 'Observar, registar e tornar visível o percurso de aprendizagem', it: 'Osservare, registrare e rendere visibile il percorso di apprendimento' })
              },
              {
                icon: '🎨',
                title: t({ pt: 'O ateliê criativo', it: "L'atelier creativo" }),
                desc: t({ pt: 'Espaço de pesquisa, expressão e encontro com os materiais', it: 'Spazio di ricerca, espressione e incontro con i materiali' })
              },
              {
                icon: '🤝',
                title: t({ pt: 'Comunidade educativa', it: 'Comunità educativa' }),
                desc: t({ pt: 'Crianças, educadores e famílias constroem juntos o percurso', it: 'Bambini, educatori e famiglie costruiscono insieme il percorso' })
              },
              {
                icon: '💬',
                title: t({ pt: 'Escuta ativa', it: 'Ascolto attivo' }),
                desc: t({ pt: 'Dar tempo e espaço às perguntas, às hipóteses e ao pensamento', it: 'Dare tempo e spazio alle domande, alle ipotesi e al pensiero' })
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

      {/* CITAZIONE */}
      <section className="bg-[var(--soft-green)] py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection delay={0.1}>
            <blockquote className="text-2xl md:text-3xl text-white font-light italic leading-relaxed mb-6">
              "Fare una scuola amabile, operosa, inventosa, vivibile, documentabile e comunicabile."
            </blockquote>
            <cite className="text-white/90 text-lg not-italic font-medium">— Loris Malaguzzi</cite>
          </AnimatedSection>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--deep-blue)] mb-6">
              {t({ pt: 'Descubra a vida da creche', it: "Scopri la vita dell'asilo" })}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
              {t({
                pt: 'A abordagem Reggio Emilia toma vida cada dia nos espaços, nos materiais e nas relações do Centro. Descubra como esta filosofia orienta o quotidiano da creche.',
                it: "L'Approccio Reggio Emilia prende vita ogni giorno negli spazi, nei materiali e nelle relazioni del Centro. Scopri come questa filosofia orienta il quotidiano dell'asilo.",
              })}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" to="/atelier">
                {t({ pt: 'Descubra o Ateliê', it: "Scopri l'Atelier" })}
              </Button>
              <Button variant="secondary" to="/asilo">
                {t({ pt: 'Voltar à Creche', it: "Torna all'Asilo" })}
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
