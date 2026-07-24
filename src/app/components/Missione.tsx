import { Button } from './Button';
import communityVideo from '../../imports/video_fundacao_chi_siamo.mp4';
import { AnimatedSection, AnimatedImage } from './AnimatedSection';
import { LazyAutoplayVideo } from './LazyAutoplayVideo';
import { useT } from '../context/LanguageContext';

export function Missione() {
  const t = useT();

  return (
    <>
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-24" style={{ display: 'block', marginTop: '-1px' }}>
        <path d="M0,50 C300,10 600,90 900,50 C1050,30 1150,50 1200,50 L1200,0 L0,0 Z" fill="var(--beige)" />
      </svg>
      <section className="py-16 lg:py-20 bg-[var(--beige)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <AnimatedImage>
            <div className="bg-white/70 backdrop-blur-md p-6 rounded-[2rem] shadow-[0_10px_50px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_70px_rgba(0,0,0,0.15)] transition-all duration-500 border border-white/50">
              <LazyAutoplayVideo
                src={communityVideo}
                className="w-full h-80 object-contain rounded-[1.5rem]"
              />
            </div>
          </AnimatedImage>

          <AnimatedSection delay={0.2} direction="right">
            <h2 className="text-4xl md:text-5xl text-[var(--deep-blue)] mb-8">
              La Fundação Betânia Onlus
            </h2>

            <p className="text-lg text-gray-800 leading-relaxed mb-10 font-light">
              {t({
                pt: 'A Fundação Betânia Onlus está presente em Salvador da Bahia para compartilhar a vida com os menores e com suas famílias, construindo relações e acompanhando cada pessoa em seu próprio caminho de crescimento.',
                it: 'La Fundação Betânia Onlus è presente a Salvador de Bahia per condividere la vita con i più piccoli e con le loro famiglie, costruendo relazioni e accompagnando ogni persona nel proprio cammino di crescita.',
                de: "Die Fundação Betânia Onlus ist in Salvador de Bahia präsent, um das Leben mit den Kleinsten und ihren Familien zu teilen, Beziehungen aufzubauen und jeden Menschen auf seinem Weg des Wachsens zu begleiten."
              })}
            </p>

            <Button variant="secondary" to="/la-fundacao">{t({ pt: 'Conheça a Fundação Betânia', it: 'Scopri la Fundação Betânia', de: "Entdecken Sie die Fundação Betânia" })}</Button>
          </AnimatedSection>
        </div>
      </div>
    </section>
    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-24" style={{ display: 'block', marginBottom: '-1px' }}>
      <path d="M0,50 C300,90 600,10 900,50 C1050,70 1150,50 1200,50 L1200,120 L0,120 Z" fill="var(--beige)" />
    </svg>
    </>
  );
}
