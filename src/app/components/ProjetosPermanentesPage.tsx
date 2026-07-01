import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router';
import { useT } from '../context/LanguageContext';
import { AnimatedSection } from './AnimatedSection';
import { Button } from './Button';
import heroImg from '../../imports/13-1.jpeg';
import atelieImg from '../../imports/8-2.jpeg';
import alimentacaoImg from '../../imports/9-1.jpeg';
import hortaImg from '../../imports/12.jpeg';
import formacaoImg from '../../imports/21-1.jpeg';

export function ProjetosPermanentesPage() {
  const t = useT();

  const projects = [
    {
      img: atelieImg,
      color: 'var(--warm-orange)',
      link: '/atelier',
      title: t({ pt: 'Ateliê', it: 'Atelier' }),
      desc: t({
        pt: 'O ateliê é um espaço de criação, pesquisa e expressão, onde as crianças exploram diferentes materiais, desenvolvem a criatividade, comunicam ideias e descobrem novas formas de aprender por meio das múltiplas linguagens.',
        it: "L'atelier è uno spazio di creazione, ricerca ed espressione, dove i bambini esplorano diversi materiali, sviluppano la creatività, comunicano idee e scoprono nuovi modi di imparare attraverso i molteplici linguaggi.",
      }),
    },
    {
      img: alimentacaoImg,
      color: 'var(--soft-green)',
      link: '/alimentacao-saudavel',
      title: t({ pt: 'Alimentação Saudável', it: 'Alimentazione Sana' }),
      desc: t({
        pt: 'Promovemos experiências que incentivam hábitos alimentares saudáveis, a valorização dos alimentos e o cuidado com a saúde. As refeições são compreendidas como momentos de aprendizagem, convivência e construção de autonomia.',
        it: "Promuoviamo esperienze che incentivano abitudini alimentari sane, la valorizzazione degli alimenti e la cura della salute. I pasti sono intesi come momenti di apprendimento, convivenza e costruzione dell'autonomia.",
      }),
    },
    {
      img: hortaImg,
      color: 'var(--warm-red)',
      link: '/nossa-metodologia',
      title: t({ pt: 'Horta', it: 'Orto' }),
      desc: t({
        pt: 'A horta possibilita o contato direto com a natureza e os ciclos da vida. Por meio do plantio, do cuidado e da colheita, as crianças aprendem sobre responsabilidade, sustentabilidade, alimentação saudável e respeito ao meio ambiente.',
        it: "L'orto consente il contatto diretto con la natura e i cicli della vita. Attraverso la semina, la cura e il raccolto, i bambini imparano sulla responsabilità, la sostenibilità, l'alimentazione sana e il rispetto per l'ambiente.",
      }),
    },
    {
      img: formacaoImg,
      color: 'var(--deep-blue)',
      link: '/la-fraternita',
      title: t({ pt: 'Formação Religiosa', it: 'Formazione Religiosa' }),
      desc: t({
        pt: 'Favorece o desenvolvimento de valores humanos e cristãos, como respeito, solidariedade, fraternidade, gratidão e amor ao próximo, contribuindo para a formação ética e espiritual das crianças.',
        it: 'Favorisce lo sviluppo di valori umani e cristiani, come rispetto, solidarietà, fraternità, gratitudine e amore per il prossimo, contribuendo alla formazione etica e spirituale dei bambini.',
      }),
    },
  ];

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
              {t({ pt: 'Creche do Centro Nossa Senhora Aparecida', it: 'Asilo del Centro Nossa Senhora Aparecida' })}
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              {t({ pt: 'Projetos Permanentes', it: 'Progetti Permanenti' })}
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              {t({
                pt: 'Projetos que acompanham as crianças ao longo de todo o ano, fortalecendo sua curiosidade, autonomia e desenvolvimento integral.',
                it: "Progetti che accompagnano i bambini per tutto l'anno, rafforzando la loro curiosità, autonomia e sviluppo integrale.",
              })}
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
              <Button variant="primary" to="/dona-ora">
                {t({ pt: 'Doar agora', it: 'Dona ora' })}
              </Button>
              <a
                href="#projetos"
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

      {/* INTRO */}
      <section id="projetos" className="bg-white py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--deep-blue)] mb-8">
              {t({ pt: 'Projetos que fazem parte da rotina', it: 'Progetti parte della routine' })}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              {t({
                pt: 'Na creche, alguns projetos acontecem ao longo de todo o ano letivo, fazem parte da rotina das crianças e se articulam com as demais experiências pedagógicas, fortalecendo a curiosidade, a participação, a autonomia e o protagonismo das crianças contribuindo para seu desenvolvimento integral e para a construção de aprendizagens significativas.',
                it: "Nell'asilo, alcuni progetti si svolgono per tutto l'anno scolastico, fanno parte della routine dei bambini e si articolano con le altre esperienze pedagogiche, rafforzando la curiosità, la partecipazione, l'autonomia e il protagonismo dei bambini, contribuendo al loro sviluppo integrale e alla costruzione di apprendimenti significativi.",
              })}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* PROGETTI — 2x2 GRID */}
      <section className="bg-[var(--beige)] py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-white rounded-3xl overflow-hidden shadow-lg h-full flex flex-col">
                  <div className="relative h-56 flex-shrink-0 overflow-hidden">
                    <img src={project.img} alt={project.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0" style={{ backgroundColor: `${project.color}33` }} />
                  </div>
                  <div className="p-8 flex-1 flex flex-col" style={{ borderTop: `4px solid ${project.color}` }}>
                    <h3
                      className="text-2xl font-bold mb-4"
                      style={{ color: project.color }}
                    >
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-base leading-relaxed flex-1 mb-6">{project.desc}</p>
                    <Link
                      to={project.link}
                      className="inline-block self-start px-6 py-3 rounded-xl font-semibold text-sm text-white transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90"
                      style={{ backgroundColor: project.color }}
                    >
                      {t({ pt: 'Saiba mais', it: 'Scopri di più' })}
                    </Link>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--deep-blue)] mb-6">
              {t({ pt: 'Apoie nossos projetos', it: 'Sostieni i nostri progetti' })}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              {t({
                pt: 'Com o seu apoio, podemos continuar oferecendo experiências ricas e significativas para as crianças.',
                it: 'Con il tuo sostegno possiamo continuare a offrire esperienze ricche e significative per i bambini.',
              })}
            </p>
            <Button variant="primary" to="/dona-ora" className="text-lg px-10 py-4">
              {t({ pt: 'Doe agora', it: 'Dona ora' })}
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
