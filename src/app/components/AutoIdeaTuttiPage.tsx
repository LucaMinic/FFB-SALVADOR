import { ChevronDown, ArrowLeft } from 'lucide-react';
import { useT } from '../context/LanguageContext';
import { AnimatedSection, AnimatedImage } from './AnimatedSection';
import { Button } from './Button';
import { ShareButtons } from './ShareButtons';
import { Link } from 'react-router';
import heroImg from '../../imports/Patricia.jpg';
import videoAuto from '../../imports/Auto_un_idea_di_tutti.mp4';
import finalCtaImg from '../../imports/21.jpeg';

export function AutoIdeaTuttiPage() {
  const t = useT();

  return (
    <>
      {/* HERO */}
      <section
        className="relative flex flex-col items-center justify-center text-center overflow-hidden"
        style={{ minHeight: 'clamp(70vh, 85vh, 100vh)' }}
      >
        <img src={heroImg} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />

        {/* Back button */}
        <div className="absolute top-8 left-8 z-20">
          <Link
            to="/documentari-racconti"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm font-medium">{t({ pt: 'Voltar', it: 'Torna indietro', de: "Zurück" })}</span>
          </Link>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col items-center gap-8">
          <AnimatedSection delay={0.1}>
            <p className="text-white/70 uppercase tracking-[0.2em] text-sm font-medium mb-4">
              {t({ pt: 'Documentário', it: 'Documentario', de: "Dokumentarfilm" })}
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              {t({ pt: 'Auto: uma ideia de todos', it: "Auto: un'idea di tutti", de: "Auto: eine Idee von allen" })}
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              {t({
                pt: 'Um percurso compartilhado nascido do desejo de construir juntos possibilidades concretas de crescimento, autonomia e participação.',
                it: 'Un percorso condiviso nato dal desiderio di costruire insieme possibilità concrete di crescita, autonomia e partecipazione.',
                de: "Ein gemeinsamer Weg, entstanden aus dem Wunsch, gemeinsam konkrete Möglichkeiten für Wachstum, Selbstständigkeit und Teilhabe zu schaffen.",
              })}
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
              <a
                href="#video"
                className="px-8 py-4 bg-white text-[var(--deep-blue)] font-semibold rounded-xl shadow-lg hover:bg-white/90 transition-all duration-200 text-base"
              >
                {t({ pt: 'Assista ao documentário', it: 'Guarda il documentario', de: "Dokumentarfilm ansehen" })}
              </a>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.4}>
            <ShareButtons
              title={t({ pt: 'Auto: uma ideia de todos', it: "Auto: un'idea di tutti", de: "Auto: eine Idee von allen" })}
              variant="dark"
              className="mt-6"
            />
          </AnimatedSection>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <ChevronDown className="w-8 h-8 text-white/60 animate-bounce" />
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--deep-blue)] mb-8">
              {t({ pt: 'Construir juntos', it: 'Costruire insieme', de: "Gemeinsam bauen" })}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              {t({
                pt: 'Um percurso compartilhado nascido do desejo de construir juntos possibilidades concretas de crescimento, autonomia e participação.',
                it: 'Un percorso condiviso nato dal desiderio di costruire insieme possibilità concrete di crescita, autonomia e partecipazione.',
                de: "Ein gemeinsamer Weg, entstanden aus dem Wunsch, gemeinsam konkrete Möglichkeiten für Wachstum, Selbstständigkeit und Teilhabe zu schaffen.",
              })}
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              {t({
                pt: 'Este documentário conta uma história de colaboração, confiança e projetos partilhados que nascem da vida quotidiana do Centro.',
                it: 'Questo documentario racconta una storia di collaborazione, fiducia e progetti condivisi che nascono dalla vita quotidiana del Centro.',
                de: "Dieser Dokumentarfilm erzählt eine Geschichte von Zusammenarbeit, Vertrauen und gemeinsamen Projekten, die aus dem Alltag des Centro entstehen.",
              })}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* VIDEO SECTION */}
      <section id="video" className="bg-[var(--beige)] py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-6">
          <AnimatedImage delay={0.1}>
            <div className="rounded-[2rem] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.2)] w-full max-w-[320px] md:max-w-[400px] mx-auto">
              <video
                src={videoAuto}
                controls
                className="w-full"
                style={{ aspectRatio: '9/16' }}
                preload="metadata"
              />
            </div>
          </AnimatedImage>
        </div>
      </section>

      {/* QUOTE */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection delay={0.1}>
            <blockquote>
              <p className="text-2xl md:text-3xl italic font-medium leading-relaxed text-[var(--deep-blue)] mb-8">
                &ldquo;{t({
                  pt: 'Cada ideia nasce da escuta, da partilha e do desejo de construir juntos.',
                  it: 'Ogni idea nasce dall\'ascolto, dalla condivisione e dal desiderio di costruire insieme.',
                  de: "Jede Idee entsteht aus Zuhören, Teilen und dem Wunsch, gemeinsam zu bauen.",
                })}&rdquo;
              </p>
              <footer className="text-[var(--deep-blue)]/60 text-sm font-medium tracking-wide uppercase">
                Centro Nossa Senhora Aparecida
              </footer>
            </blockquote>
          </AnimatedSection>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative flex flex-col items-center justify-center text-center py-32 md:py-40 overflow-hidden">
        <img loading="lazy" src={finalCtaImg} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <AnimatedSection delay={0.1}>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              {t({ pt: 'Descubra outros relatos', it: 'Scopri altri racconti', de: "Entdecken Sie weitere Erzählungen" })}
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mb-10">
              {t({
                pt: 'Conheça outras histórias, testemunhos e projetos ligados ao Centro Nossa Senhora Aparecida.',
                it: 'Scopri altre storie, testimonianze e progetti legati al Centro Nossa Senhora Aparecida.',
                de: "Entdecken Sie weitere Geschichten, Zeugnisse und Projekte rund um das Centro Nossa Senhora Aparecida.",
              })}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" to="/documentari-racconti">
                {t({ pt: 'Todos os documentários', it: 'Tutti i documentari', de: "Alle Dokumentarfilme" })}
              </Button>
              <Button variant="secondary" to="/il-centro">
                {t({ pt: 'Conheça o Centro', it: 'Scopri il Centro', de: "Entdecken Sie das Centro" })}
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
