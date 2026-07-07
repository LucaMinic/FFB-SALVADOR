import { ChevronDown } from 'lucide-react';
import { useT } from '../context/LanguageContext';
import { AnimatedSection } from './AnimatedSection';
import { Button } from './Button';
import heroImg from '../../imports/16-3.jpeg';
import img1 from '../../imports/nuove/r3.jpg';
import img2 from '../../imports/nuove/r4.jpg';
import img3 from '../../imports/15-1.jpeg';
import img4 from '../../imports/11.jpeg';

export function CuraENutrizionePage() {
  const t = useT();

  return (
    <main>
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
              {t({ pt: 'Cuidado e nutrição', it: 'Cura e nutrizione' })}
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              {t({
                pt: 'Um corpo saudável é a base de qualquer aprendizagem. No Centro Nossa Senhora Aparecida, cuidar das crianças significa garantir-lhes alimentação adequada, saúde e bem-estar físico e emocional cada dia.',
                it: 'Un corpo sano è la base di qualsiasi apprendimento. Al Centro Nossa Senhora Aparecida, prendersi cura dei bambini significa garantire loro un’alimentazione adeguata, salute e benessere fisico ed emotivo ogni giorno.',
              })}
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
              <Button variant="primary" to="/dona-ora">
                {t({ pt: 'Doe agora', it: 'Dona ora' })}
              </Button>
              <a
                href="#scopri"
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-200 text-base"
              >
                {t({ pt: 'Saiba mais', it: 'Scopri di più' })}
              </a>
            </div>
          </AnimatedSection>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <ChevronDown className="w-8 h-8 text-white/60 animate-bounce" />
        </div>
      </section>

      {/* SECTION 1 */}
      <section id="scopri" className="bg-white py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection delay={0.1}>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--deep-blue)] mb-6">
                  {t({ pt: 'Nutrição como ato de cuidado', it: 'La nutrizione come atto di cura' })}
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {t({
                    pt: 'Para muitas das crianças que frequentam o Centro, o repasto servido cada dia representa muito mais do que um simples momento de alimentação: é uma experiência de calor, de partilha e de dignidade.',
                    it: 'Per molti dei bambini che frequentano il Centro, il pasto servito ogni giorno rappresenta molto più di un semplice momento di alimentazione: è un’esperienza di calore, condivisione e dignità.',
                  })}
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {t({
                    pt: 'Garantir uma alimentação equilibrada e nutritiva é uma das prioridades do Centro, convictos de que um corpo bem nutrido é condição indispensável para crescer, aprender e participar plenamente na vida do Centro.',
                    it: 'Garantire un’alimentazione equilibrata e nutriente è una delle priorità del Centro, nella convinzione che un corpo ben nutrito sia condizione indispensabile per crescere, apprendere e partecipare pienamente alla vita del Centro.',
                  })}
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <img
                src={img1}
                alt={t({ pt: 'Nutrição no Centro', it: 'Nutrizione al Centro' })}
                className="w-full rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.12)] object-cover h-80 lg:h-96"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="bg-[var(--beige)] py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection delay={0.1} className="order-2 lg:order-1">
              <img
                src={img2}
                alt={t({ pt: 'Saúde e bem-estar', it: 'Salute e benessere' })}
                className="w-full rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.12)] object-cover h-80 lg:h-96"
              />
            </AnimatedSection>
            <AnimatedSection delay={0.2} className="order-1 lg:order-2">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--deep-blue)] mb-6">
                  {t({ pt: 'Saúde e bem-estar integral', it: 'Salute e benessere integrale' })}
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {t({
                    pt: 'A cura das crianças no Centro não se limita à alimentação. Inclui atenção ao seu bem-estar físico, emocional e relacional. Os educadores observam, escutam e respondem às necessidades de cada criança com sensibilidade e competência.',
                    it: 'La cura dei bambini al Centro non si limita all\'alimentazione. Include attenzione al loro benessere fisico, emotivo e relazionale. Gli educatori osservano, ascoltano e rispondono ai bisogni di ogni bambino con sensibilità e competenza.',
                  })}
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {t({
                    pt: 'Quando necessário, o Centro colabora com profissionais de saúde e estruturas locais para garantir a cada criança o acompanhamento adequado.',
                    it: 'Quando necessario, il Centro collabora con professionisti della salute e strutture locali per garantire a ogni bambino il supporto adeguato.',
                  })}
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* SECTION 3 */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection delay={0.1}>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--deep-blue)] mb-6">
                  {t({ pt: 'O repasto como momento educativo', it: 'Il pasto come momento educativo' })}
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {t({
                    pt: 'À mesa aprende-se muito mais do que a comer. Os momentos de refeição são oportunidades para desenvolver hábitos saudáveis, cultivar a convivência, aprender a partilhar e a respeitar os outros.',
                    it: 'A tavola si impara molto più che a mangiare. I momenti di pasto sono occasioni per sviluppare abitudini sane, coltivare la convivialità, imparare a condividere e a rispettare gli altri.',
                  })}
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {t({
                    pt: 'No Centro, o repasto é um momento comunitário, vivido com calma e atenção, onde cada criança encontra o seu espaço e aprende a cuidar também de si mesma.',
                    it: 'Al Centro, il pasto è un momento comunitario, vissuto con calma e attenzione, dove ogni bambino trova il proprio spazio e impara a prendersi cura anche di sé stesso.',
                  })}
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <img
                src={img3}
                alt={t({ pt: 'Momentos de refeição', it: 'Momenti di pasto' })}
                className="w-full rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.12)] object-cover h-80 lg:h-96"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* SECTION 4 */}
      <section className="bg-[var(--beige)] py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection delay={0.1} className="order-2 lg:order-1">
              <img
                src={img4}
                alt={t({ pt: 'Cuidado quotidiano', it: 'Cura quotidiana' })}
                className="w-full rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.12)] object-cover h-80 lg:h-96"
              />
            </AnimatedSection>
            <AnimatedSection delay={0.2} className="order-1 lg:order-2">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--deep-blue)] mb-6">
                  {t({ pt: 'Cuidar é um gesto de amor', it: 'Prendersi cura è un gesto d\'amore' })}
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {t({
                    pt: 'Cada gesto de cuidado — um prato de comida, uma palavra de encorajamento, um abraço no momento certo — diz a cada criança que ela é importante, que merece atenção e que não está sozinha. É neste cuidado quotidiano que se constrói a confiança e a autoestima que acompanharão cada criança para o resto da vida.',
                    it: 'Ogni gesto di cura — un piatto di cibo, una parola di incoraggiamento, un abbraccio nel momento giusto — dice a ogni bambino che è importante, che merita attenzione e che non è solo. È in questa cura quotidiana che si costruisce la fiducia e l\'autostima che accompagneranno ogni bambino per il resto della vita.',
                  })}
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--deep-blue)] mb-6">
              {t({ pt: 'Ajuda-nos a cuidar de cada criança', it: 'Aiutaci a prenderci cura di ogni bambino' })}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
              {t({
                pt: 'Graças ao teu apoio, o Centro pode garantir cada dia alimentação, saúde e bem-estar às crianças e famílias de Salvador da Bahia que mais precisam.',
                it: 'Grazie al tuo sostegno, il Centro può garantire ogni giorno alimentazione, salute e benessere ai bambini e alle famiglie di Salvador de Bahia che ne hanno più bisogno.',
              })}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" to="/dona-ora">
                {t({ pt: 'Doe agora', it: 'Dona ora' })}
              </Button>
              <Button variant="secondary" to="/il-centro">
                {t({ pt: 'Conheça o Centro', it: 'Scopri il Centro' })}
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
