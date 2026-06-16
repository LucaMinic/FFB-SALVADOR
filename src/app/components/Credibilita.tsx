import institutionalVisitImage from '../../imports/13.jpeg';
import mattarellaVisitImage from '../../imports/23.jpeg';
import mattarellaVisitImage2 from '../../imports/23-1.jpeg';
import { AnimatedSection, AnimatedImage } from './AnimatedSection';
import { Button } from './Button';
import { useT } from '../context/LanguageContext';

export function Credibilita() {
  const t = useT();

  return (
    <>
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-24" style={{ display: 'block', marginTop: '-1px' }}>
        <path d="M0,50 C300,10 600,90 900,50 C1050,30 1150,50 1200,50 L1200,0 L0,0 Z" fill="var(--beige)" />
      </svg>
      <section className="py-24 bg-[var(--beige)]">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl text-[var(--deep-blue)] mb-8">
              {t({ pt: 'Uma realidade reconhecida internacionalmente', it: 'Una realtà riconosciuta a livello internazionale' })}
            </h2>

            <p className="text-2xl text-gray-800 leading-relaxed max-w-3xl mx-auto">
              {t({
                pt: 'Ao longo do tempo, a Fundação recebeu o apoio e o reconhecimento de instituições italianas e internacionais.',
                it: 'Nel tempo, la Fundação ha ricevuto il sostegno e il riconoscimento di istituzioni italiane e internazionali.'
              })}
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="max-w-3xl mx-auto mb-10">
            <div className="rounded-[2rem] overflow-hidden shadow-[0_10px_50px_rgba(0,0,0,0.12)]" style={{ aspectRatio: '16/9' }}>
              <iframe
                src="https://www.youtube.com/embed/CzXoQBaOHis?autoplay=0&playsinline=1&rel=0"
                title={t({ pt: 'Visita do Presidente da República Italiana', it: 'Visita del Presidente della Repubblica Italiana' })}
                frameBorder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatedImage>
            <div className="group overflow-hidden rounded-[2rem] shadow-[0_10px_40px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)] transition-all duration-500">
              <img
                src={institutionalVisitImage}
                alt={t({ pt: 'Visita institucional', it: 'Visita istituzionale' })}
                className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </AnimatedImage>
          <AnimatedImage delay={0.15}>
            <div className="group overflow-hidden rounded-[2rem] shadow-[0_10px_40px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)] transition-all duration-500">
              <img
                src={mattarellaVisitImage2}
                alt={t({ pt: 'Visita do Presidente Mattarella', it: 'Visita del Presidente Mattarella' })}
                className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </AnimatedImage>
        </div>

        <AnimatedSection delay={0.3}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12 flex-wrap">
            <Button variant="secondary" to="/eventi-speciali">{t({ pt: 'Conheça a visita do Presidente da República Italiana', it: 'Scopri la visita del Presidente della Repubblica Italiana' })}</Button>
          </div>
          <div className="flex justify-center mt-4">
            <Button variant="primary" to="/riconoscimenti-istituzionali">{t({ pt: 'Conheça todos os reconhecimentos institucionais', it: 'Scopri tutti i riconoscimenti istituzionali' })}</Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-24" style={{ display: 'block', marginBottom: '-1px' }}>
      <path d="M0,50 C300,90 600,10 900,50 C1050,70 1150,50 1200,50 L1200,120 L0,120 Z" fill="var(--beige)" />
    </svg>
    </>
  );
}
