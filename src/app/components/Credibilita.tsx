import { AnimatedSection } from './AnimatedSection';
import { Button } from './Button';
import { useT } from '../context/LanguageContext';

export function Credibilita() {
  const t = useT();

  return (
    <>
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-24" style={{ display: 'block', marginTop: '-1px' }}>
        <path d="M0,50 C300,10 600,90 900,50 C1050,30 1150,50 1200,50 L1200,0 L0,0 Z" fill="var(--beige)" />
      </svg>
      <section className="py-16 lg:py-20 bg-[var(--beige)]">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl text-[var(--deep-blue)] mb-8">
              {t({ pt: 'Uma realidade reconhecida internacionalmente', it: 'Una realtà riconosciuta a livello internazionale', de: "Eine international anerkannte Organisation" })}
            </h2>

            <p className="text-lg text-gray-800 leading-relaxed max-w-3xl mx-auto">
              {t({
                pt: 'Ao longo do tempo, a Fundação recebeu o apoio e o reconhecimento de instituições italianas e internacionais.',
                it: 'Nel tempo, la Fundação ha ricevuto il sostegno e il riconoscimento di istituzioni italiane e internazionali.',
                de: "Im Laufe der Zeit hat die Fundação Unterstützung und Anerkennung von italienischen und internationalen Institutionen erhalten."
              })}
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="max-w-3xl mx-auto mb-10">
            <div className="rounded-[2rem] overflow-hidden shadow-[0_10px_50px_rgba(0,0,0,0.12)]" style={{ aspectRatio: '16/9' }}>
              <iframe
                src="https://www.youtube.com/embed/CzXoQBaOHis?autoplay=0&playsinline=1&rel=0"
                title={t({ pt: 'Visita do Presidente da República Italiana', it: 'Visita del Presidente della Repubblica Italiana', de: "Besuch des Präsidenten der Italienischen Republik" })}
                frameBorder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12 flex-wrap">
            <Button variant="secondary" to="/eventi-speciali">{t({ pt: 'Scopri gli eventi speciali', it: 'Scopri gli eventi speciali', de: "Entdecken Sie die besonderen Ereignisse" })}</Button>
          </div>
          <div className="flex justify-center mt-4">
            <Button variant="primary" to="/riconoscimenti-istituzionali">{t({ pt: 'Conheça os reconhecimentos institucionais', it: 'Scopri i riconoscimenti istituzionali', de: "Entdecken Sie die institutionellen Anerkennungen" })}</Button>
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
