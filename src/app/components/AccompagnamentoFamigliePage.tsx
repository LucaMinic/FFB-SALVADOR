import { ChevronDown } from 'lucide-react';
import { useT } from '../context/LanguageContext';
import { AnimatedSection } from './AnimatedSection';
import { Button } from './Button';
import heroImg from '../../imports/2.jpeg';
import img1 from '../../imports/nuove/2P9A9116.jpg';
import img2 from '../../imports/nuove/1.jpeg';
import img3 from '../../imports/nuove/r6bis.jpg';
import img4 from '../../imports/34.jpeg';

export function AccompagnamentoFamigliePage() {
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
              {t({ pt: 'Acompanhamento das famílias', it: 'Accompagnamento delle famiglie' })}
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              {t({
                pt: 'Acompanhar uma criança significa também caminhar junto à sua família. No Centro Nossa Senhora Aparecida, o cuidado se estende além das paredes do Centro, alcançando as famílias nas suas realidades quotidianas.',
                it: 'Accompagnare un bambino significa anche camminare insieme alla sua famiglia. Al Centro Nossa Senhora Aparecida, la cura si estende oltre le mura del Centro, raggiungendo le famiglie nelle loro realtà quotidiane.',
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
                  {t({ pt: 'A família como primeiro educador', it: 'La famiglia come primo educatore' })}
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {t({
                    pt: 'O Centro acredita profundamente que a família é o primeiro e mais importante ambiente educativo para cada criança. Por isso, o nosso trabalho não se limita ao tempo que as crianças passam no Centro: procuramos construir uma relação de confiança e de colaboração com os pais e os cuidadores.',
                    it: 'Il Centro crede profondamente che la famiglia sia il primo e più importante ambiente educativo per ogni bambino. Per questo, il nostro lavoro non si limita al tempo che i bambini trascorrono al Centro: cerchiamo di costruire una relazione di fiducia e di collaborazione con i genitori e i caregiver.',
                  })}
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {t({
                    pt: 'Quando uma família se sente acompanhada e apoiada, a criança cresce num ambiente mais estável e seguro. Este é o fundamento do nosso trabalho.',
                    it: 'Quando una famiglia si sente accompagnata e sostenuta, il bambino cresce in un ambiente più stabile e sicuro. Questo è il fondamento del nostro lavoro.',
                  })}
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <img
                src={img1}
                alt={t({ pt: 'Famílias no Centro', it: 'Famiglie al Centro' })}
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
                alt={t({ pt: 'Escuta e apoio', it: 'Ascolto e sostegno' })}
                className="w-full rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.12)] object-cover h-80 lg:h-96"
              />
            </AnimatedSection>
            <AnimatedSection delay={0.2} className="order-1 lg:order-2">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--deep-blue)] mb-6">
                  {t({ pt: 'Escuta, orientação e apoio concreto', it: 'Ascolto, orientamento e sostegno concreto' })}
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {t({
                    pt: 'Muitas das famílias que frequentam o Centro vivem situações de vulnerabilidade económica, social ou familiar. Por isso oferecemos espaços de escuta, orientação e apoio concreto para ajudar os pais a enfrentar as dificuldades quotidianas.',
                    it: 'Molte delle famiglie che frequentano il Centro vivono situazioni di vulnerabilità economica, sociale o familiare. Per questo offriamo spazi di ascolto, orientamento e sostegno concreto per aiutare i genitori ad affrontare le difficoltà quotidiane.',
                  })}
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {t({
                    pt: 'Educadores e missionários estão disponíveis para acolher cada família, sem julgamentos, com disponibilidade e proximidade humana.',
                    it: 'Educatori e missionari sono disponibili ad accogliere ogni famiglia, senza giudizi, con disponibilità e vicinanza umana.',
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
                  {t({ pt: 'Construir pontes entre o Centro e a família', it: 'Costruire ponti tra il Centro e la famiglia' })}
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {t({
                    pt: 'A relação entre o Centro e as famílias nasce da continuidade. Reuniões, encontros, momentos de festa e de partilha permitem construir uma comunidade onde crianças, pais e educadores se conhecem, se respeitam e caminham juntos.',
                    it: 'La relazione tra il Centro e le famiglie nasce dalla continuità. Riunioni, incontri, momenti di festa e di condivisione permettono di costruire una comunità dove bambini, genitori ed educatori si conoscono, si rispettano e camminano insieme.',
                  })}
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {t({
                    pt: 'Cada encontro é uma ocasião para fortalecer a confiança mútua e criar laços que vão além do tempo passado no Centro.',
                    it: 'Ogni incontro è un\'occasione per rafforzare la fiducia reciproca e creare legami che vanno oltre il tempo trascorso al Centro.',
                  })}
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <img
                src={img3}
                alt={t({ pt: 'Encontros comunitários', it: 'Incontri comunitari' })}
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
                alt={t({ pt: 'Futuro em família', it: 'Futuro in famiglia' })}
                className="w-full rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.12)] object-cover h-80 lg:h-96"
              />
            </AnimatedSection>
            <AnimatedSection delay={0.2} className="order-1 lg:order-2">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--deep-blue)] mb-6">
                  {t({ pt: 'Acompanhar é criar possibilidades de futuro', it: 'Accompagnare è creare possibilità di futuro' })}
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {t({
                    pt: 'Cada família acompanhada é uma família che cresce. Quando i genitori trovano sostegno, orientamento e fiducia, si crea un circolo virtuoso che beneficia tutta la comunità. Accompagnare le famiglie significa investire nel futuro di Salvador da Bahia.',
                    it: 'Ogni famiglia accompagnata è una famiglia che cresce. Quando i genitori trovano sostegno, orientamento e fiducia, si crea un circolo virtuoso che beneficia tutta la comunità. Accompagnare le famiglie significa investire nel futuro di Salvador de Bahia.',
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
              {t({ pt: 'Ajuda-nos a caminhar ao lado das famílias', it: 'Aiutaci a camminare accanto alle famiglie' })}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
              {t({
                pt: 'Graças ao teu apoio, o Centro pode continuar a oferecer escuta, acompanhamento e esperança concreta a cada família que bate à nossa porta.',
                it: 'Grazie al tuo sostegno, il Centro può continuare a offrire ascolto, accompagnamento e speranza concreta a ogni famiglia che bussa alla nostra porta.',
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
