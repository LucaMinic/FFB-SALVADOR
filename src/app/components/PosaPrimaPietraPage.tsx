import { ChevronDown, ArrowLeft } from 'lucide-react';
import { useT } from '../context/LanguageContext';
import { AnimatedSection, AnimatedImage } from './AnimatedSection';
import { Button } from './Button';
import { ShareButtons } from './ShareButtons';
import { Link } from 'react-router';
import heroImg from '../../imports/converted-3.jpg';
import videoPrimaPietra from '../../imports/video_prima_pietra.mp4';
import finalCtaImg from '../../imports/21.jpeg';

export function PosaPrimaPietraPage() {
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
            <span className="text-sm font-medium">{t({ pt: 'Voltar', it: 'Torna indietro' })}</span>
          </Link>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col items-center gap-8">
          <AnimatedSection delay={0.1}>
            <p className="text-white/70 uppercase tracking-[0.2em] text-sm font-medium mb-4">
              {t({ pt: 'Nova Escola', it: 'La Nuova Scuola' })}
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              {t({ pt: 'Lançamento da pedra fundamental', it: 'Posa della prima pietra' })}
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              {t({
                pt: 'O início concreto de um lugar pensado para acolher, educar e acompanhar novas gerações.',
                it: "L'inizio concreto di un luogo pensato per accogliere, educare e accompagnare nuove generazioni.",
              })}
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
              <a
                href="#video"
                className="px-8 py-4 bg-white text-[var(--deep-blue)] font-semibold rounded-xl shadow-lg hover:bg-white/90 transition-all duration-200 text-base"
              >
                {t({ pt: 'Assista ao documentário', it: 'Guarda il documentario' })}
              </a>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.4}>
            <ShareButtons
              title={t({ pt: 'Lançamento da pedra fundamental', it: 'Posa della prima pietra' })}
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
              {t({ pt: 'Um momento simbólico', it: 'Un momento simbolico' })}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              {t({
                pt: 'Um momento simples mas profundamente simbólico: o início concreto de um lugar pensado para acolher, educar e acompanhar novas gerações.',
                it: "Un momento semplice ma profondamente simbolico: l'inizio concreto di un luogo pensato per accogliere, educare e accompagnare nuove generazioni.",
              })}
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              {t({
                pt: 'O lançamento da pedra fundamental da nova escola representa um passo partilhado, construído através de relações, confiança e desejo de futuro.',
                it: 'La posa della prima pietra della nuova scuola rappresenta un passo condiviso costruito attraverso relazioni, fiducia e desiderio di futuro.',
              })}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* VIDEO SECTION */}
      <section id="video" className="bg-[var(--beige)] py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-6">
          <AnimatedImage delay={0.1}>
            <div className="w-full max-w-[320px] md:max-w-[400px] mx-auto" style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.2)' }}>
              <video
                src={videoPrimaPietra}
                controls
                preload="metadata"
                style={{ aspectRatio: '9/16', width: '100%', borderRadius: '2rem', display: 'block', backgroundColor: '#000' }}
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
                  pt: 'Cada passo dado é construído através de relações, confiança e desejo de futuro.',
                  it: 'Ogni passo compiuto è costruito attraverso relazioni, fiducia e desiderio di futuro.',
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
              {t({ pt: 'Descubra outros relatos', it: 'Scopri altri racconti' })}
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mb-10">
              {t({
                pt: 'Conheça outras histórias, testemunhos e projetos ligados ao Centro Nossa Senhora Aparecida.',
                it: 'Scopri altre storie, testimonianze e progetti legati al Centro Nossa Senhora Aparecida.',
              })}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" to="/documentari-racconti">
                {t({ pt: 'Todos os documentários', it: 'Tutti i documentari' })}
              </Button>
              <Button variant="secondary" to="/il-centro">
                {t({ pt: 'Conheça o Centro', it: 'Scopri il Centro' })}
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
