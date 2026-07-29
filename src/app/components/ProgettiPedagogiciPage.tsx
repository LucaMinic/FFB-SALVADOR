import { } from 'lucide-react';
import { useT } from '../context/LanguageContext';
import { AnimatedSection } from './AnimatedSection';
import { Button } from './Button';
import { Link } from 'react-router';
import heroImg from '../../imports/nuove/_DSF1736.jpg';
import autoImg from '../../imports/Patricia.jpg';
import ricordiImg from '../../imports/narrazioni_africane_ok.jpg';

export function ProgettiPedagogiciPage() {
  const t = useT();

  const projects = [
    {
      id: 'auto-idea-tutti',
      title: t({ pt: 'Auto: uma ideia de todos', it: "Auto: un'idea di tutti", de: "Auto: eine Idee von allen", en: "Auto: everyone's idea" }),
      description: t({
        pt: 'Um percurso compartilhado nascido do desejo de construir juntos possibilidades concretas de crescimento, autonomia e participação.',
        it: 'Un percorso condiviso nato dal desiderio di costruire insieme possibilità concrete di crescita, autonomia e partecipazione.',
        de: "Ein gemeinsamer Weg, entstanden aus dem Wunsch, gemeinsam konkrete Möglichkeiten für Wachstum, Autonomie und Teilhabe zu schaffen.",
        en: "A shared journey born from the desire to build together concrete opportunities for growth, autonomy and participation."
      }),
      image: autoImg,
      link: '/documentari-racconti/auto-idea-tutti'
    },
    {
      id: 'ricordi-narrazioni',
      title: t({ pt: 'Memórias e narrativas africanas', it: 'Ricordi e narrazioni africane', de: "Afrikanische Erinnerungen und Erzählungen", en: "African memories and stories" }),
      description: t({
        pt: 'Uma viagem entre memória, cultura e identidade através de relatos, imagens e testemunhos.',
        it: 'Un viaggio tra memoria, cultura e identità attraverso racconti, immagini e testimonianze.',
        de: "Eine Reise zwischen Erinnerung, Kultur und Identität durch Erzählungen, Bilder und Zeugnisse.",
        en: "A journey through memory, culture and identity through stories, images and testimonies."
      }),
      image: ricordiImg,
      link: '/documentari-racconti/ricordi-narrazioni'
    }
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
              Centro Nossa Senhora Aparecida
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              {t({ pt: 'Laboratórios', it: 'Laboratori', de: "Werkstätten", en: "Workshops" })}
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              {t({
                pt: 'Experiências, atividades e percursos educativos que acompanham o crescimento das crianças do Centro Nossa Senhora Aparecida através do jogo, da criatividade, da relação e da aprendizagem.',
                it: 'Esperienze, attività e percorsi educativi che accompagnano la crescita dei bambini del Centro Nossa Senhora Aparecida attraverso il gioco, la creatività, la relazione e l\'apprendimento.',
                de: "Erfahrungen, Aktivitäten und Bildungswege, die das Wachstum der Kinder des Centro Nossa Senhora Aparecida durch Spiel, Kreativität, Beziehung und Lernen begleiten.",
                en: "Experiences, activities and educational journeys that accompany the growth of the children of the Centro Nossa Senhora Aparecida through play, creativity, relationship and learning.",
              })}
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
              <a
                href="#progetti"
                className="px-8 py-4 bg-white text-[var(--deep-blue)] font-semibold rounded-xl shadow-lg hover:bg-white/90 transition-all duration-200 text-base"
              >
                {t({ pt: 'Veja os projetos', it: 'Scopri i progetti', de: "Entdecken Sie die Projekte", en: "Discover the projects" })}
              </a>
              <Button variant="primary" to="/dona-ora">
                {t({ pt: 'Doe agora', it: 'Dona ora', de: "Jetzt spenden", en: "Donate now" })}
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* INTRO */}
      <section id="progetti" className="bg-white py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--deep-blue)] mb-8">
              {t({ pt: 'Educar através da experiência', it: 'Educare attraverso l\'esperienza', de: "Erziehung durch Erfahrung", en: "Educating through experience" })}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              {t({
                pt: 'No Centro Nossa Senhora Aparecida, a educação nasce da vida quotidiana, das relações e das experiências partilhadas entre crianças, educadores e famílias.',
                it: 'Al Centro Nossa Senhora Aparecida, l\'educazione nasce dalla vita quotidiana, dalle relazioni e dalle esperienze condivise tra bambini, educatori e famiglie.',
                de: "Im Centro Nossa Senhora Aparecida entsteht Bildung aus dem täglichen Leben, aus Beziehungen und aus Erfahrungen, die Kinder, Erzieherinnen und Erzieher sowie Familien gemeinsam teilen.",
                en: "At the Centro Nossa Senhora Aparecida, education is born from daily life, relationships and shared experiences between children, educators and families.",
              })}
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              {t({
                pt: 'Através de projetos pedagógicos, atividades criativas e percursos de aprendizagem, cada criança é acompanhada no seu crescimento único e irrepetível.',
                it: 'Attraverso progetti pedagogici, attività creative e percorsi di apprendimento, ogni bambino viene accompagnato nella propria crescita unica e irripetibile.',
                de: "Durch pädagogische Projekte, kreative Aktivitäten und Lernwege wird jedes Kind in seinem einzigartigen und unwiederholbaren Wachstum begleitet.",
                en: "Through pedagogical projects, creative activities and learning journeys, every child is accompanied in their own unique and unrepeatable growth.",
              })}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* PROJECT GALLERY */}
      <section className="bg-[var(--beige)] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {projects.map((project, index) => (
              <AnimatedSection key={project.id} delay={index * 0.15}>
                <Link
                  to={project.link}
                  className="group block bg-white rounded-3xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)] transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="relative overflow-hidden aspect-[4/5]">
                    <img loading="lazy"
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-[var(--deep-blue)] mb-4 group-hover:text-[var(--warm-orange)] transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-base leading-relaxed mb-6 line-clamp-3">
                      {project.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-[var(--warm-orange)] font-semibold text-sm uppercase tracking-wide group-hover:gap-3 transition-all duration-300">
                      {t({ pt: 'Saiba mais', it: 'Scopri di più', de: "Mehr erfahren", en: "Learn more" })}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--deep-blue)] mb-6">
              {t({ pt: 'Descubra a vida do Centro', it: 'Scopri la vita del Centro', de: "Entdecken Sie das Leben im Centro", en: "Discover the life of the Centre" })}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
              {t({
                pt: 'Cada projeto nasce de relações quotidianas, experiências partilhadas e percursos educativos vividos juntos.',
                it: 'Ogni progetto nasce da relazioni quotidiane, esperienze condivise e percorsi educativi vissuti insieme.',
                de: "Jedes Projekt entsteht aus alltäglichen Beziehungen, gemeinsamen Erfahrungen und gemeinsam erlebten Bildungswegen.",
                en: "Every project is born from daily relationships, shared experiences and educational journeys lived together.",
              })}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" to="/il-centro">
                {t({ pt: 'Conheça o Centro', it: 'Scopri il Centro', de: "Entdecken Sie das Centro", en: "Discover the Centre" })}
              </Button>
              <Button variant="secondary" to="/dona-ora">
                {t({ pt: 'Apoie o Centro', it: 'Sostieni il Centro', de: "Unterstützen Sie das Centro", en: "Support the Centre" })}
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}

