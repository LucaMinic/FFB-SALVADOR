import { Button } from './Button';
import schoolProjectVideo from '../../imports/video_progetto_scuola_nossa.mp4';
import foundationCeremonyImage from '../../imports/converted.jpg';
import { AnimatedSection, AnimatedImage } from './AnimatedSection';
import { useT } from '../context/LanguageContext';

export function ProgettoScuola() {
  const t = useT();

  return (
    <>
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-24" style={{ display: 'block', marginTop: '-1px' }}>
        <path d="M0,50 C300,10 600,90 900,50 C1050,30 1150,50 1200,50 L1200,0 L0,0 Z" fill="var(--soft-green)" id="il-progetto-scuola" />
      </svg>
      <section className="py-16 lg:py-20 bg-gradient-to-br from-[var(--soft-green)] via-[#7ab89a] to-[var(--soft-green)] text-white">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl text-white mb-6">
              {t({ pt: 'O projeto escola', it: 'Il progetto scuola', de: "Das Schulprojekt" })}
            </h2>

            <h3 className="mb-8 text-3xl drop-shadow-lg font-light">{t({ pt: 'Construímos uma escola, construímos um futuro', it: 'Costruiamo una scuola, costruiamo un futuro', de: "Wir bauen eine Schule, wir bauen eine Zukunft" })}</h3>

            <p className="text-lg leading-relaxed max-w-3xl mx-auto drop-shadow-md">
              {t({
                pt: 'O projeto da escola nasce para oferecer um percurso educativo completo, gratuito e em tempo integral, acompanhando as crianças dos 6 aos 18 anos em seu crescimento humano, educativo e relacional.',
                it: 'Il progetto della scuola nasce per offrire un percorso educativo completo, gratuito e a tempo pieno, accompagnando i bambini dai 6 ai 18 anni nella loro crescita umana, educativa e relazionale.',
                de: "Das Schulprojekt entsteht, um einen vollständigen, kostenlosen Ganztags-Bildungsweg anzubieten, der Kinder von 6 bis 18 Jahren in ihrer menschlichen, schulischen und sozialen Entwicklung begleitet."
              })}
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <AnimatedImage>
            <div className="rounded-[2rem] shadow-[0_10px_50px_rgba(0,0,0,0.2)] overflow-hidden border border-white/30 backdrop-blur-sm bg-white/10 hover:shadow-[0_20px_70px_rgba(0,0,0,0.3)] transition-all duration-500">
              <video
                src={schoolProjectVideo}
                controls
                autoPlay
                muted
                loop
                className="w-full h-80 object-cover"
              />
            </div>
          </AnimatedImage>
          <AnimatedImage delay={0.15}>
            <div className="group overflow-hidden rounded-[2rem] shadow-[0_10px_50px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_70px_rgba(0,0,0,0.3)] transition-all duration-500 border border-white/30">
              <img loading="lazy"
                src={foundationCeremonyImage}
                alt={t({ pt: 'Cerimônia de fundação', it: 'Cerimonia di fondazione', de: "Gründungszeremonie" })}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </AnimatedImage>
        </div>

        <AnimatedSection delay={0.3}>
          <div className="text-center">
            <Button to="/progetto-scuola">{t({ pt: 'Conheça o projeto escola', it: 'Scopri il progetto scuola', de: "Entdecken Sie das Schulprojekt" })}</Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-24" style={{ display: 'block', marginBottom: '-1px' }}>
      <path d="M0,50 C300,90 600,10 900,50 C1050,70 1150,50 1200,50 L1200,120 L0,120 Z" fill="var(--soft-green)" />
    </svg>
    </>
  );
}
