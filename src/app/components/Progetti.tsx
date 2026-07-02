import { Button } from './Button';
import { AnimatedSection, AnimatedImage } from './AnimatedSection';
import progettiImage from '../../imports/FFBcreche.2025.png';
import { useT } from '../context/LanguageContext';

export function Progetti() {
  const t = useT();

  return (
    <>
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-24" style={{ display: 'block', marginTop: '-1px' }}>
        <path d="M0,50 C300,10 600,90 900,50 C1050,30 1150,50 1200,50 L1200,0 L0,0 Z" fill="var(--beige)" />
      </svg>
      <section className="py-24 bg-[var(--beige)]" id="i-nostri-progetti">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <AnimatedImage>
            <div className="group overflow-hidden rounded-[2rem] shadow-[0_10px_40px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)] transition-all duration-500">
              <img
                src={progettiImage}
                alt={t({ pt: 'Os nossos projetos', it: 'I nostri progetti' })}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </AnimatedImage>

          <AnimatedSection delay={0.2} direction="right">
            <h2 className="text-4xl md:text-5xl text-[var(--deep-blue)] mb-8">
              {t({ pt: 'Documentários e Relatos', it: 'Documentari e Racconti' })}
            </h2>

            <p className="text-lg text-gray-800 leading-relaxed mb-10 font-light">
              {t({
                pt: 'Através de documentários, testemunhos e relatos, a vida do Centro Nossa Senhora Aparecida prende forma em histórias autênticas. Memórias, encontros e percursos que contam quem somos e o que vivemos cada dia.',
                it: 'Attraverso documentari, testimonianze e racconti, la vita del Centro Nossa Senhora Aparecida prende forma in storie autentiche. Memorie, incontri e percorsi che raccontano chi siamo e ciò che viviamo ogni giorno.'
              })}
            </p>

            <Button variant="secondary" to="/documentari-racconti">{t({ pt: 'Veja Documentários e Relatos', it: 'Guarda Documentari e Racconti' })}</Button>
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
