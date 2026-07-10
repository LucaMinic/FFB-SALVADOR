import { ChevronDown } from 'lucide-react';
import { useT } from '../context/LanguageContext';
import { AnimatedSection } from './AnimatedSection';
import { Button } from './Button';
import heroImg from '../../imports/nuove/ambiente.png';
import img1 from '../../imports/nuove/_DSF1797.jpg';
import img2 from '../../imports/7-2.jpeg';
import img3 from '../../imports/nuove/_DSF1859.jpg';
import img4 from '../../imports/nuove/_DSF1790.jpg';

export function AtelierPage() {
  const t = useT();

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
              {t({ pt: 'Creche do Centro Nossa Senhora Aparecida', it: "Asilo del Centro Nossa Senhora Aparecida" })}
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              {t({ pt: 'Ateliê', it: 'Atelier' })}
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              {t({
                pt: 'Um espaço onde as crianças exploram, investigam e se exprimem através de materiais, cores e linguagens diversas — um lugar de escuta, criatividade e descoberta.',
                it: "Uno spazio dove i bambini esplorano, investigano e si esprimono attraverso materiali, colori e linguaggi diversi — un luogo di ascolto, creatività e scoperta.",
              })}
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
              <Button variant="primary" to="/asilo">
                {t({ pt: 'Conhecer a Creche', it: "Scopri l'Asilo" })}
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

      {/* SECTION 1 — COS'È L'ATELIER */}
      <section id="scopri" className="bg-white py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection delay={0.1}>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--deep-blue)] mb-6">
                  {t({ pt: 'O que é o Ateliê', it: "Cos'è l'Atelier" })}
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {t({
                    pt: 'O ateliê é um espaço de escuta, criatividade e relação, inspirado na pedagogia de Reggio Emilia. Não é apenas uma sala de artes: é um laboratório de investigação onde as crianças encontram materiais, linguagens e possibilidades para explorar o mundo.',
                    it: "L'atelier è uno spazio di ascolto, creatività e relazione, ispirato alla pedagogia di Reggio Emilia. Non è solo una sala d'arte: è un laboratorio di ricerca dove i bambini incontrano materiali, linguaggi e possibilità per esplorare il mondo.",
                  })}
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {t({
                    pt: 'O ateliê do Centro Nossa Senhora Aparecida nasceu como espaço dedicado à expressão das crianças e ao trabalho da atelierista, figura profissional que anima e documenta as experiências criativas.',
                    it: "L'atelier del Centro Nossa Senhora Aparecida è nato come spazio dedicato all'espressione dei bambini e al lavoro dell'atelierista, figura professionale che anima e documenta le esperienze creative.",
                  })}
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <img
                src={img1}
                alt={t({ pt: 'Ateliê criativo', it: 'Atelier creativo' })}
                className="w-full rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.12)] object-cover h-80 lg:h-96"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* SECTION 2 — L'ATELIERISTA */}
      <section className="bg-[var(--beige)] py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection delay={0.1} className="order-2 lg:order-1">
              <img
                src={img2}
                alt={t({ pt: 'A atelierista', it: "L'atelierista" })}
                className="w-full rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.12)] object-cover h-80 lg:h-96"
              />
            </AnimatedSection>
            <AnimatedSection delay={0.2} className="order-1 lg:order-2">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--deep-blue)] mb-6">
                  {t({ pt: 'A atelierista', it: "L'atelierista" })}
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {t({
                    pt: 'A atelierista é uma figura educativa central na abordagem Reggio Emilia. É uma profissional com formação artística que colabora com os educadores para enriquecer a experiência das crianças, criando oportunidades de encontro com materiais e linguagens diversas.',
                    it: "L'atelierista è una figura educativa centrale nell'Approccio Reggio Emilia. È una professionista con formazione artistica che collabora con gli educatori per arricchire l'esperienza dei bambini, creando opportunità di incontro con materiali e linguaggi diversi.",
                  })}
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {t({
                    pt: 'No Centro, a atelierista acompanha os percursos criativos das crianças, documenta os processos, anima o ateliê e colabora com a equipa pedagógica no desenho das experiências educativas.',
                    it: 'Al Centro, l\'atelierista accompagna i percorsi creativi dei bambini, documenta i processi, anima l\'atelier e collabora con l\'équipe pedagogica nella progettazione delle esperienze educative.',
                  })}
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* SECTION 3 — I MATERIALI */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection delay={0.1}>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--deep-blue)] mb-6">
                  {t({ pt: 'Os materiais como linguagem', it: 'I materiali come linguaggio' })}
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {t({
                    pt: 'No ateliê os materiais não são apenas ferramentas: são linguagens. Argila, água, luz, fios, tecidos, elementos naturais, pigmentos — cada material oferece à criança uma forma diferente de pensar, de sentir e de criar.',
                    it: "Nell'atelier i materiali non sono solo strumenti: sono linguaggi. Argilla, acqua, luce, fili, stoffe, elementi naturali, pigmenti — ogni materiale offre al bambino un modo diverso di pensare, sentire e creare.",
                  })}
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {t({
                    pt: 'A escolha dos materiais é intencional e cuidada. Cada proposta nasce da observação das crianças e dos seus interesses, criando contextos que convidam à exploração e à descoberta.',
                    it: "La scelta dei materiali è intenzionale e curata. Ogni proposta nasce dall'osservazione dei bambini e dei loro interessi, creando contesti che invitano all'esplorazione e alla scoperta.",
                  })}
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <img
                src={img3}
                alt={t({ pt: 'Materiais no ateliê', it: "Materiali nell'atelier" })}
                className="w-full rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.12)] object-cover h-80 lg:h-96"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* SECTION 4 — CONTESTI INVESTIGATIVI */}
      <section className="bg-[var(--beige)] py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection delay={0.1} className="order-2 lg:order-1">
              <img
                src={img4}
                alt={t({ pt: 'Contextos investigativos', it: 'Contesti investigativi' })}
                className="w-full rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.12)] object-cover h-80 lg:h-96"
              />
            </AnimatedSection>
            <AnimatedSection delay={0.2} className="order-1 lg:order-2">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--deep-blue)] mb-6">
                  {t({ pt: 'Contextos investigativos', it: 'Contesti investigativi' })}
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {t({
                    pt: 'Os contextos investigativos são ambientes pedagógicos pensados para favorecer a exploração profunda de um tema ou de um material. A criança não recebe respostas prontas: é convidada a colocar perguntas, a observar, a formular hipóteses e a construir o próprio conhecimento.',
                    it: 'I contesti investigativi sono ambienti pedagogici pensati per favorire l\'esplorazione approfondita di un tema o di un materiale. Il bambino non riceve risposte pronte: è invitato a fare domande, osservare, formulare ipotesi e costruire la propria conoscenza.',
                  })}
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {t({
                    pt: 'No Centro, os contextos investigativos nascem da escuta das crianças e são documentados para tornar visível o percurso de aprendizagem a educadores, famílias e à comunidade.',
                    it: 'Al Centro, i contesti investigativi nascono dall\'ascolto dei bambini e vengono documentati per rendere visibile il percorso di apprendimento a educatori, famiglie e alla comunità.',
                  })}
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* SECTION 5 — COSA SI FA */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection delay={0.1}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--deep-blue)] mb-4">
                {t({ pt: 'O que acontece no ateliê', it: "Cosa succede nell'atelier" })}
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
                {t({
                  pt: 'O ateliê não é um espaço separado da vida da creche: é parte integrante do percurso educativo quotidiano.',
                  it: "L'atelier non è uno spazio separato dalla vita dell'asilo: è parte integrante del percorso educativo quotidiano.",
                })}
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: '🖌️',
                title: t({ pt: 'Expressão plástica e pictórica', it: 'Espressione plastica e pittorica' }),
                desc: t({ pt: 'Argila, pinturas, pigmentos e materiais naturais para dar forma ao pensamento', it: 'Argilla, pitture, pigmenti e materiali naturali per dare forma al pensiero' })
              },
              {
                icon: '💡',
                title: t({ pt: 'Exploração da luz', it: 'Esplorazione della luce' }),
                desc: t({ pt: 'Jogos de luz e sombra que estimulam a observação e a curiosidade científica', it: 'Giochi di luce e ombra che stimolano l\'osservazione e la curiosità scientifica' })
              },
              {
                icon: '🔍',
                title: t({ pt: 'Investigação de materiais', it: 'Investigazione dei materiali' }),
                desc: t({ pt: 'Descoberta das propriedades dos materiais através do tato, da observação e da experimentação', it: 'Scoperta delle proprietà dei materiali attraverso il tatto, l\'osservazione e la sperimentazione' })
              },
              {
                icon: '📖',
                title: t({ pt: 'Documentação', it: 'Documentazione' }),
                desc: t({ pt: 'Fotografias, registos escritos e criações que tornam visível o processo de aprendizagem', it: 'Fotografie, registrazioni scritte e creazioni che rendono visibile il processo di apprendimento' })
              },
              {
                icon: '🎭',
                title: t({ pt: 'Jogo simbólico e dramático', it: 'Gioco simbolico e drammatico' }),
                desc: t({ pt: 'Teatro, narração e jogo de papéis que desenvolvem a imaginação e a linguagem', it: 'Teatro, narrazione e gioco di ruolo che sviluppano l\'immaginazione e il linguaggio' })
              },
              {
                icon: '🌿',
                title: t({ pt: 'Elementos naturais', it: 'Elementi naturali' }),
                desc: t({ pt: 'Pedras, folhas, sementes e água como materiali vivos para explorar o mundo natural', it: 'Pietre, foglie, semi e acqua come materiali vivi per esplorare il mondo naturale' })
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
              {t({ pt: 'Descubra a abordagem pedagógica', it: "Scopri l'approccio pedagogico" })}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
              {t({
                pt: 'O ateliê é parte de uma visão educativa mais ampla, inspirada pela abordagem Reggio Emilia. Descubra os princípios que guiam o trabalho quotidiano do Centro.',
                it: "L'atelier è parte di una visione educativa più ampia, ispirata dall'Approccio Reggio Emilia. Scopri i principi che guidano il lavoro quotidiano del Centro.",
              })}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" to="/asilo">
                {t({ pt: 'Voltar à Creche', it: "Torna all'Asilo" })}
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
