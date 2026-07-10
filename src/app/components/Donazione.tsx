import { Button } from './Button';
import { AnimatedSection } from './AnimatedSection';
import { useT } from '../context/LanguageContext';

export function Donazione() {
  const t = useT();

  return (
    <>
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-24" style={{ display: 'block', marginTop: '-1px' }}>
        <path d="M0,50 C300,10 600,90 900,50 C1050,30 1150,50 1200,50 L1200,0 L0,0 Z" fill="var(--deep-blue)" />
      </svg>
      <section className="py-20 lg:py-24 bg-gradient-to-br from-[var(--deep-blue)] via-[#2c5f7f] to-[#234a61] text-white">
      <AnimatedSection>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="mb-8 text-4xl drop-shadow-lg">{t({ pt: 'Ajude-nos a construir um futuro', it: 'Aiutaci a costruire un futuro' })}</h2>

          <p className="text-2xl leading-relaxed mb-6 drop-shadow-md">
            {t({
              pt: 'Cada contribuição permite que esta missão continue a crescer e a acolher novas crianças.',
              it: 'Ogni contributo permette a questa missione di continuare a crescere e accogliere nuovi bambini.'
            })}
          </p>

          <p className="text-xl leading-relaxed mb-12 drop-shadow-md opacity-90">
            {t({ pt: 'Até um pequeno gesto pode fazer a diferença.', it: 'Anche un piccolo gesto può fare la differenza.' })}
          </p>

          <Button to="/dona-ora">{t({ pt: 'Doar agora', it: 'Dona ora' })}</Button>
        </div>
      </AnimatedSection>
    </section>
    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-24" style={{ display: 'block', marginBottom: '-1px' }}>
      <path d="M0,50 C300,90 600,10 900,50 C1050,70 1150,50 1200,50 L1200,120 L0,120 Z" fill="var(--deep-blue)" />
    </svg>
    </>
  );
}
