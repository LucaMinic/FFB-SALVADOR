import { } from 'lucide-react';
import { Link } from 'react-router';
import { useT } from '../context/LanguageContext';
import { AnimatedSection } from './AnimatedSection';
import { Button } from './Button';
import heroImg from '../../imports/13-1.jpeg';
import atelieImg from '../../imports/nuove/FOTO VIDEO/asilo/6.jpeg';
import alimentacaoImg from '../../imports/nuove/r4.jpg';
import hortaImg from '../../imports/10.jpeg';
import formacaoImg from '../../imports/nuove/FOTO VIDEO/asilo/20.jpeg';
import cerchiIntroImg from '../../imports/diego/asilo-cerchi-intro.png';
import cerchiMetodologiaImg from '../../imports/diego/asilo-cerchi-metodologia.png';
import cerchiValoriImg from '../../imports/diego/asilo-cerchi-valori.png';

export function ProjetosPermanentesPage() {
  const t = useT();

  const projects = [
    {
      img: atelieImg,
      color: 'var(--warm-orange)',
      link: '/atelier',
      title: t({ pt: 'Ateliê', it: 'Atelier', de: "Atelier", en: "Atelier" }),
      desc: t({
        pt: 'O ateliê é um espaço de criação, pesquisa e expressão, onde as crianças exploram diferentes materiais, desenvolvem a criatividade, comunicam ideias e descobrem novas formas de aprender por meio das múltiplas linguagens.',
        it: "L'atelier è uno spazio di creazione, ricerca ed espressione, dove i bambini esplorano diversi materiali, sviluppano la creatività, comunicano idee e scoprono nuovi modi di imparare attraverso i molteplici linguaggi.",
        de: "Das Atelier ist ein Raum der Kreativität, Forschung und des Ausdrucks, in dem die Kinder verschiedene Materialien erkunden, ihre Kreativität entwickeln, Ideen mitteilen und neue Wege des Lernens durch die vielfältigen Ausdrucksformen entdecken.",
        en: "The atelier is a space for creation, exploration and expression, where children explore different materials, develop creativity, communicate ideas and discover new ways of learning through multiple languages.",
      }),
    },
    {
      img: alimentacaoImg,
      color: 'var(--soft-green)',
      link: '/alimentacao-saudavel',
      title: t({ pt: 'Alimentação Saudável', it: 'Alimentazione Sana', de: "Gesunde Ernährung", en: "Healthy Eating" }),
      desc: t({
        pt: 'Promovemos experiências que incentivam hábitos alimentares saudáveis, a valorização dos alimentos e o cuidado com a saúde. As refeições são compreendidas como momentos de aprendizagem, convivência e construção de autonomia.',
        it: "Promuoviamo esperienze che incentivano abitudini alimentari sane, la valorizzazione degli alimenti e la cura della salute. I pasti sono intesi come momenti di apprendimento, convivenza e costruzione dell'autonomia.",
        de: "Wir fördern Erfahrungen, die gesunde Ernährungsgewohnheiten, die Wertschätzung von Lebensmitteln und die Gesundheitsvorsorge unterstützen. Die Mahlzeiten werden als Momente des Lernens, des Miteinanders und des Aufbaus von Selbstständigkeit verstanden.",
        en: "We promote experiences that encourage healthy eating habits, an appreciation of food and care for health. Meals are understood as moments of learning, togetherness and building autonomy.",
      }),
    },
    {
      img: hortaImg,
      color: 'var(--warm-red)',
      link: null,
      title: t({ pt: 'Horta', it: 'Orto', de: "Garten", en: "Vegetable Garden" }),
      desc: t({
        pt: 'A horta possibilita o contato direto com a natureza e os ciclos da vida. Por meio do plantio, do cuidado e da colheita, as crianças aprendem sobre responsabilidade, sustentabilidade, alimentação saudável e respeito ao meio ambiente.',
        it: "L'orto consente il contatto diretto con la natura e i cicli della vita. Attraverso la semina, la cura e il raccolto, i bambini imparano sulla responsabilità, la sostenibilità, l'alimentazione sana e il rispetto per l'ambiente.",
        de: "Der Garten ermöglicht den direkten Kontakt mit der Natur und den Kreisläufen des Lebens. Durch Aussaat, Pflege und Ernte lernen die Kinder Verantwortung, Nachhaltigkeit, gesunde Ernährung und Respekt vor der Umwelt.",
        en: "The vegetable garden allows direct contact with nature and the cycles of life. Through planting, care and harvest, children learn about responsibility, sustainability, healthy eating and respect for the environment.",
      }),
    },
    {
      img: formacaoImg,
      color: 'var(--deep-blue)',
      link: '/la-fraternita',
      title: t({ pt: 'Formação Religiosa', it: 'Formazione Religiosa', de: "Religiöse Bildung", en: "Religious Education" }),
      desc: t({
        pt: 'Favorece o desenvolvimento de valores humanos e cristãos, como respeito, solidariedade, fraternidade, gratidão e amor ao próximo, contribuindo para a formação ética e espiritual das crianças.',
        it: 'Favorisce lo sviluppo di valori umani e cristiani, come rispetto, solidarietà, fraternità, gratitudine e amore per il prossimo, contribuendo alla formazione etica e spirituale dei bambini.',
        de: "Sie fördert die Entwicklung menschlicher und christlicher Werte wie Respekt, Solidarität, Brüderlichkeit, Dankbarkeit und Nächstenliebe und trägt zur ethischen und geistlichen Bildung der Kinder bei.",
        en: "It fosters the development of human and Christian values such as respect, solidarity, fraternity, gratitude and love of neighbour, contributing to the ethical and spiritual formation of children.",
      }),
    },
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
              {t({ pt: 'Creche do Centro Nossa Senhora Aparecida', it: 'Asilo del Centro Nossa Senhora Aparecida', de: "Kita des Centro Nossa Senhora Aparecida", en: "Nursery School of the Centro Nossa Senhora Aparecida" })}
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              {t({ pt: 'Projetos Permanentes', it: 'Progetti Permanenti', de: "Dauerhafte Projekte", en: "Permanent Projects" })}
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              {t({
                pt: 'Projetos que acompanham as crianças ao longo de todo o ano, fortalecendo sua curiosidade, autonomia e desenvolvimento integral.',
                it: "Progetti che accompagnano i bambini per tutto l'anno, rafforzando la loro curiosità, autonomia e sviluppo integrale.",
                de: "Projekte, die die Kinder das ganze Jahr über begleiten und ihre Neugier, Autonomie und ganzheitliche Entwicklung stärken.",
                en: "Projects that accompany the children all year round, strengthening their curiosity, autonomy and overall development.",
              })}
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
              <Button variant="primary" to="/dona-ora">
                {t({ pt: 'Doar agora', it: 'Dona ora', de: "Jetzt spenden", en: "Donate now" })}
              </Button>
              <a
                href="#projetos"
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-200 text-base"
              >
                {t({ pt: 'Saiba mais', it: 'Scopri di più', de: "Mehr erfahren", en: "Learn more" })}
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* INTRO */}
      <section id="projetos" className="relative overflow-hidden bg-white py-24 md:py-32">
        <img src={cerchiIntroImg} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover opacity-80 pointer-events-none select-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--deep-blue)] mb-8">
              {t({ pt: 'Projetos que fazem parte da rotina', it: 'Progetti parte della routine', de: "Projekte, die zum Alltag gehören", en: "Projects that are part of the routine" })}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              {t({
                pt: 'Na creche, alguns projetos acontecem ao longo de todo o ano letivo, fazem parte da rotina das crianças e se articulam com as demais experiências pedagógicas, fortalecendo a curiosidade, a participação, a autonomia e o protagonismo das crianças contribuindo para seu desenvolvimento integral e para a construção de aprendizagens significativas.',
                it: "Nell'asilo, alcuni progetti si svolgono per tutto l'anno scolastico, fanno parte della routine dei bambini e si articolano con le altre esperienze pedagogiche, rafforzando la curiosità, la partecipazione, l'autonomia e il protagonismo dei bambini, contribuendo al loro sviluppo integrale e alla costruzione di apprendimenti significativi.",
                de: "In der Kita finden einige Projekte während des gesamten Schuljahres statt, gehören zum Alltag der Kinder und verknüpfen sich mit den übrigen pädagogischen Erfahrungen. Sie stärken die Neugier, die Beteiligung, die Selbstständigkeit und die aktive Rolle der Kinder und tragen so zu ihrer ganzheitlichen Entwicklung und zum Aufbau bedeutungsvoller Lernerfahrungen bei.",
                en: "At the nursery school, some projects run throughout the school year, forming part of the children's routine and working alongside other educational experiences, strengthening children's curiosity, participation, autonomy and leading role, and contributing to their overall development and the building of meaningful learning.",
              })}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* PROGETTI — 2x2 GRID */}
      <section className="relative overflow-hidden bg-[var(--beige)] py-24 md:py-32">
        <img src={cerchiValoriImg} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover opacity-80 pointer-events-none select-none" />
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-white rounded-3xl overflow-hidden shadow-lg h-full flex flex-col">
                  <div className="relative h-56 flex-shrink-0 overflow-hidden">
                    <img loading="lazy" src={project.img} alt={project.title} className="w-full h-full object-cover" />
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
                    {project.link && (
                      <Link
                        to={project.link}
                        className="inline-block self-start px-6 py-3 rounded-xl font-semibold text-sm text-white transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90"
                        style={{ backgroundColor: project.color }}
                      >
                        {t({ pt: 'Saiba mais', it: 'Scopri di più', de: "Mehr erfahren", en: "Learn more" })}
                      </Link>
                    )}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-white py-20">
        <img src={cerchiMetodologiaImg} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover opacity-80 pointer-events-none select-none" />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--deep-blue)] mb-6">
              {t({ pt: 'Apoie nossos projetos', it: 'Sostieni i nostri progetti', de: "Unterstützen Sie unsere Projekte", en: "Support our projects" })}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              {t({
                pt: 'Com o seu apoio, podemos continuar oferecendo experiências ricas e significativas para as crianças.',
                it: 'Con il tuo sostegno possiamo continuare a offrire esperienze ricche e significative per i bambini.',
                de: "Mit Ihrer Unterstützung können wir den Kindern weiterhin reichhaltige und bedeutungsvolle Erfahrungen bieten.",
                en: "With your support we can continue to offer rich and meaningful experiences for the children.",
              })}
            </p>
            <Button variant="primary" to="/dona-ora" className="text-lg px-10 py-4">
              {t({ pt: 'Doe agora', it: 'Dona ora', de: "Jetzt spenden", en: "Donate now" })}
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
