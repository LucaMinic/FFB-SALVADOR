import { ChevronDown, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';
import { useT } from '../context/LanguageContext';
import { AnimatedSection } from './AnimatedSection';
import { Button } from './Button';
import heroImg from '../../imports/nuove/2P9A2750.jpg';
import img1 from '../../imports/nuove/2P9A9150.jpg';
import img2 from '../../imports/nuove/2P9A9067.jpg';
import img3 from '../../imports/2.jpeg';
import img4 from '../../imports/nuove/2P9A9486.jpg';

export function AccoglienzaQuotidianaPage() {
  const t = useT();

  return (
    <>
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
              {t({ pt: 'Acolhimento diário', it: 'Accoglienza quotidiana' })}
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              {t({
                pt: 'Cada criança precisa sentir-se acolhida, escutada e reconhecida. No Centro Nossa Senhora Aparecida, o acolhimento não é um serviço: é o modo como escolhemos viver cada dia ao lado das crianças e das suas famílias.',
                it: "Ogni bambino ha bisogno di sentirsi accolto, ascoltato e riconosciuto. Al Centro Nossa Senhora Aparecida, l'accoglienza non è un servizio: è il modo in cui scegliamo di vivere ogni giorno accanto ai bambini e alle loro famiglie.",
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
                  {t({ pt: 'Uma casa aberta todos os dias', it: 'Una casa aperta ogni giorno' })}
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {t({
                    pt: 'O acolhimento é o primeiro passo de cada relação educativa. Cada manhã o Centro abre as suas portas às crianças e às suas famílias, oferecendo um ambiente seguro, sereno e familiar onde cada um possa sentir-se visto, acolhido e acompanhado.',
                    it: "L'accoglienza è il primo passo di ogni relazione educativa. Ogni mattina il Centro apre le sue porte ai bambini e alle loro famiglie, offrendo un ambiente sicuro, sereno e familiare dove ciascuno possa sentirsi visto, accolto e accompagnato.",
                  })}
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {t({
                    pt: 'Através da presença quotidiana dos educadores, dos colaboradores e dos missionários, o Centro torna-se um lugar onde crescer juntos, construindo confiança e laços duradouros.',
                    it: 'Attraverso la presenza quotidiana degli educatori, dei collaboratori e dei missionari, il Centro diventa un luogo in cui crescere insieme, costruendo fiducia e legami duraturi.',
                  })}
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <img loading="lazy"
                src={img1}
                alt={t({ pt: 'Acolhimento no Centro', it: 'Accoglienza al Centro' })}
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
              <img loading="lazy"
                src={img2}
                alt={t({ pt: 'Relações de confiança', it: 'Relazioni di fiducia' })}
                className="w-full rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.12)] object-cover h-80 lg:h-96"
              />
            </AnimatedSection>
            <AnimatedSection delay={0.2} className="order-1 lg:order-2">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--deep-blue)] mb-6">
                  {t({ pt: 'Relações que geram confiança', it: 'Relazioni che generano fiducia' })}
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {t({
                    pt: 'Muitas das crianças acolhidas vivem situações de fragilidade económica ou social. Por isso o acolhimento não se limita aos espaços do Centro, mas continua nas relações que se constroem dia após dia.',
                    it: 'Molti dei bambini accolti vivono situazioni di fragilità economica o sociale. Per questo l\'accoglienza non si limita agli spazi del Centro, ma continua nelle relazioni che si costruiscono giorno dopo giorno.',
                  })}
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {t({
                    pt: 'Escuta, proximidade e partilha permitem criar um clima de confiança no qual cada criança pode sentir-se valorizada e acompanhada no seu percurso de crescimento.',
                    it: 'Ascolto, vicinanza e condivisione permettono di creare un clima di fiducia nel quale ogni bambino può sentirsi valorizzato e accompagnato nel proprio percorso di crescita.',
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
                  {t({ pt: 'Ao lado das famílias', it: 'Accanto alle famiglie' })}
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {t({
                    pt: 'O acolhimento envolve também as famílias. O Centro procura ser uma presença concreta para os pais, oferecendo escuta, orientação e apoio nas dificuldades quotidianas.',
                    it: "L'accoglienza coinvolge anche le famiglie. Il Centro cerca di essere una presenza concreta per i genitori, offrendo ascolto, orientamento e sostegno nelle difficoltà quotidiane.",
                  })}
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {t({
                    pt: 'Acreditamos que acompanhar uma criança significa também caminhar junto à sua família, fortalecendo relações e criando oportunidades de futuro.',
                    it: 'Crediamo che accompagnare un bambino significhi anche camminare insieme alla sua famiglia, rafforzando relazioni e creando opportunità di futuro.',
                  })}
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <img loading="lazy"
                src={img3}
                alt={t({ pt: 'Famílias no Centro', it: 'Famiglie al Centro' })}
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
              <img loading="lazy"
                src={img4}
                alt={t({ pt: 'Presença quotidiana', it: 'Presenza quotidiana' })}
                className="w-full rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.12)] object-cover h-80 lg:h-96"
              />
            </AnimatedSection>
            <AnimatedSection delay={0.2} className="order-1 lg:order-2">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--deep-blue)] mb-6">
                  {t({ pt: 'Uma presença que continua', it: 'Una presenza che continua' })}
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {t({
                    pt: 'Cada dia, através de pequenos gestos, encontros e momentos partilhados, o Centro Nossa Senhora Aparecida constrói uma comunidade fundada na proximidade e no cuidado mútuo. É esta presença quotidiana que torna possível um acolhimento autêntico e capaz de gerar esperança.',
                    it: "Ogni giorno, attraverso piccoli gesti, incontri e momenti condivisi, il Centro Nossa Senhora Aparecida costruisce una comunità fondata sulla vicinanza e sulla cura reciproca. È questa presenza quotidiana che rende possibile un'accoglienza autentica e capace di generare speranza.",
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
              {t({ pt: 'Ajuda-nos a acolher todos os dias', it: 'Aiutaci ad accogliere ogni giorno' })}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
              {t({
                pt: 'Graças ao apoio de muitos amigos e benfeitores, o Centro continua a ser uma presença concreta ao lado das crianças e das famílias de Salvador da Bahia.',
                it: 'Grazie al sostegno di tanti amici e benefattori, il Centro continua a essere una presenza concreta accanto ai bambini e alle famiglie di Salvador de Bahia.',
              })}
            </p>
            <Link
              to="/#accoglienza-quotidiana"
              className="inline-flex items-center gap-2 text-[var(--deep-blue)] font-semibold text-lg hover:gap-3 hover:text-[var(--warm-orange)] transition-all duration-300"
            >
              <ArrowLeft className="w-5 h-5" />
              {t({ pt: 'Voltar', it: 'Indietro' })}
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
