import { useState } from 'react';
import { ArrowLeft, Expand } from 'lucide-react';
import { Link } from 'react-router';
import { useT } from '../context/LanguageContext';
import { AnimatedSection } from './AnimatedSection';
import { Button } from './Button';
import { Lightbox } from './Lightbox';
import heroImg from '../../imports/diego/capa do projeto alimento que acolhe.png';
import img1 from '../../imports/diego/alimento-doacao-comunidade.jpg';
import img2 from '../../imports/diego/alimento-rede-solidariedade.jpg';
import gallery1 from '../../imports/diego/alimento-preparacao-cestas.jpg';
import gallery2 from '../../imports/diego/alimento-organizacao-doacoes.jpg';
import gallery3 from '../../imports/diego/alimento-entrega-familias.jpg';
import gallery4 from '../../imports/diego/alimento-transporte-alimentos.jpg';

export function AlimentoQueAcolhePage() {
  const t = useT();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const gallery = [gallery1, gallery2, gallery3, gallery4];

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % gallery.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
  };

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
              {t({ pt: 'Fundação Betânia Onlus', it: 'Fundação Betânia Onlus', de: "Fundação Betânia Onlus", en: "Fundação Betânia Onlus" })}
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              {t({ pt: 'Alimento que Acolhe', it: 'Un cibo che accoglie', de: "Nahrung, die willkommen heißt", en: "Food that welcomes" })}
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              {t({
                pt: 'Um projeto da Fundação Betânia Onlus que transforma solidariedade em alimento e cuidado para famílias em situação de vulnerabilidade.',
                it: 'Un progetto della Fundação Betânia Onlus che trasforma la solidarietà in cibo e cura per le famiglie in situazione di vulnerabilità.',
                de: "Ein Projekt der Fundação Betânia Onlus, das Solidarität in Nahrung und Fürsorge für Familien in prekären Lebenslagen verwandelt.",
                en: "A project by Fundação Betânia Onlus that turns solidarity into food and care for families in vulnerable situations.",
              })}
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
              <Button variant="primary" to="/dona-ora">
                {t({ pt: 'Doe agora', it: 'Dona ora', de: "Jetzt spenden", en: "Donate now" })}
              </Button>
              <a
                href="#scopri"
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-200 text-base"
              >
                {t({ pt: 'Saiba mais', it: 'Scopri di più', de: "Mehr erfahren", en: "Learn more" })}
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 1 - SOBRE O PROJETO */}
      <section id="scopri" className="bg-white py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection delay={0.1}>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--deep-blue)] mb-6">
                  {t({ pt: 'Sobre o projeto', it: 'Il progetto', de: "Über das Projekt", en: "About the project" })}
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {t({
                    pt: 'O Projeto Alimento que acolhe, desenvolvido pela Fundação Betânia Onlus, nasceu do compromisso com a dignidade humana e da escuta das necessidades das famílias acompanhadas pelo Centro Nossa Senhora Aparecida.',
                    it: 'Il Progetto Alimento que acolhe (Un cibo che accoglie), sviluppato dalla Fundação Betânia Onlus, è nato dall\'impegno per la dignità umana e dall\'ascolto dei bisogni delle famiglie seguite dal Centro Nossa Senhora Aparecida.',
                    de: "Das Projekt Alimento que acolhe (Nahrung, die willkommen heißt), entwickelt von der Fundação Betânia Onlus, entstand aus dem Engagement für die Menschenwürde und dem Zuhören auf die Bedürfnisse der Familien, die vom Centro Nossa Senhora Aparecida begleitet werden.",
                    en: "The Alimento que acolhe (Food that welcomes) Project, developed by Fundação Betânia Onlus, was born from a commitment to human dignity and from listening to the needs of the families supported by the Centro Nossa Senhora Aparecida.",
                  })}
                </p>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {t({
                    pt: 'Em um território marcado por desigualdades sociais, algumas famílias enfrentam dificuldades para garantir regularmente uma alimentação adequada. Por isso, o projeto atua no enfrentamento da insegurança alimentar, oferecendo apoio às famílias que se encontram em situação de vulnerabilidade.',
                    it: "In un territorio segnato da disuguaglianze sociali, alcune famiglie incontrano difficoltà a garantire regolarmente un'alimentazione adeguata. Per questo il progetto agisce nel contrasto all'insicurezza alimentare, offrendo sostegno alle famiglie che si trovano in situazione di vulnerabilità.",
                    de: "In einem von sozialer Ungleichheit geprägten Gebiet haben manche Familien Schwierigkeiten, sich regelmäßig ausreichend zu ernähren. Deshalb wirkt das Projekt der Ernährungsunsicherheit entgegen und unterstützt Familien in prekären Lebenslagen.",
                    en: "In an area marked by social inequality, some families struggle to regularly secure adequate food. That is why the project works to address food insecurity, offering support to families in vulnerable situations.",
                  })}
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {t({
                    pt: 'Atualmente, o projeto acompanha 30 famílias, entre elas famílias de crianças atendidas pelo Centro Nossa Senhora Aparecida.',
                    it: 'Attualmente il progetto segue 30 famiglie, tra cui famiglie di bambini seguiti dal Centro Nossa Senhora Aparecida.',
                    de: "Derzeit begleitet das Projekt 30 Familien, darunter Familien von Kindern, die vom Centro Nossa Senhora Aparecida betreut werden.",
                    en: "The project currently supports 30 families, including families of children cared for by the Centro Nossa Senhora Aparecida.",
                  })}
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <img loading="lazy"
                src={img1}
                alt={t({ pt: 'Alimento que acolhe', it: 'Un cibo che accoglie', de: "Nahrung, die willkommen heißt", en: "Food that welcomes" })}
                className="w-full rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.12)] object-cover h-80 lg:h-96"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* SECTION 2 - UMA REDE QUE TRANSFORMA SOLIDARIEDADE EM CUIDADO */}
      <section className="bg-[var(--beige)] py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection delay={0.1} className="order-2 lg:order-1">
              <img loading="lazy"
                src={img2}
                alt={t({ pt: 'Uma rede que transforma solidariedade em cuidado', it: 'Una rete che trasforma la solidarietà in cura', de: "Ein Netzwerk, das Solidarität in Fürsorge verwandelt", en: "A network that turns solidarity into care" })}
                className="w-full rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.12)] object-cover h-80 lg:h-96"
              />
            </AnimatedSection>
            <AnimatedSection delay={0.2} className="order-1 lg:order-2">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--deep-blue)] mb-6">
                  {t({ pt: 'Uma rede que transforma solidariedade em cuidado', it: 'Una rete che trasforma la solidarietà in cura', de: "Ein Netzwerk, das Solidarität in Fürsorge verwandelt", en: "A network that turns solidarity into care" })}
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {t({
                    pt: 'O projeto mobiliza uma rede de empresas, instituições, benfeitores e pessoas da comunidade, transformando doações em alimentos que chegam às famílias que mais precisam.',
                    it: 'Il progetto mobilita una rete di aziende, istituzioni, benefattori e persone della comunità, trasformando le donazioni in alimenti che arrivano alle famiglie che ne hanno più bisogno.',
                    de: "Das Projekt mobilisiert ein Netzwerk aus Unternehmen, Institutionen, Wohltätern und Menschen aus der Gemeinschaft und verwandelt Spenden in Nahrungsmittel, die die Familien erreichen, die sie am meisten brauchen.",
                    en: "The project mobilises a network of businesses, institutions, benefactors and members of the community, turning donations into food that reaches the families who need it most.",
                  })}
                </p>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {t({
                    pt: 'Entre os parceiros e fontes de doação estão o Mesa Brasil, empresas parceiras, benfeitores italianos e doadores da comunidade. Os alimentos recebidos são organizados e distribuídos de acordo com as necessidades de cada família.',
                    it: 'Tra i partner e le fonti di donazione ci sono il Mesa Brasil, aziende partner, benefattori italiani e donatori della comunità. Gli alimenti ricevuti vengono organizzati e distribuiti in base alle necessità di ogni famiglia.',
                    de: "Zu den Partnern und Spendenquellen zählen Mesa Brasil, Partnerunternehmen, italienische Wohltäter und Spender aus der Gemeinschaft. Die erhaltenen Lebensmittel werden je nach Bedarf jeder Familie organisiert und verteilt.",
                    en: "Partners and sources of donations include Mesa Brasil, partner companies, Italian benefactors and community donors. The food received is organised and distributed according to each family's needs.",
                  })}
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {t({
                    pt: 'As famílias em situação de maior urgência podem receber apoio semanalmente, enquanto as demais são atendidas, em geral, a cada quinze dias.',
                    it: 'Le famiglie in situazione di maggiore urgenza possono ricevere sostegno settimanalmente, mentre le altre vengono generalmente assistite ogni quindici giorni.',
                    de: "Familien in besonders dringenden Situationen können wöchentlich Unterstützung erhalten, während die übrigen in der Regel alle vierzehn Tage versorgt werden.",
                    en: "Families in the most urgent situations can receive support weekly, while the others are generally assisted every two weeks.",
                  })}
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* SECTION 3 - GALLERY */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection delay={0.1}>
            <div className="text-center mb-16">
              <div className="w-16 h-1 bg-[var(--warm-orange)] mx-auto mb-8 rounded-full" />
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--deep-blue)]">
                {t({ pt: 'Um olhar sobre o projeto', it: 'Uno sguardo sul progetto', de: "Ein Blick auf das Projekt", en: "A look at the project" })}
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {gallery.map((image, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div
                  className="group aspect-square overflow-hidden rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] transition-all duration-500 cursor-pointer relative"
                  onClick={() => openLightbox(index)}
                >
                  <img loading="lazy"
                    src={image}
                    alt={t({ pt: `Alimento que acolhe ${index + 1}`, it: `Un cibo che accoglie ${index + 1}`, de: `Nahrung, die willkommen heißt ${index + 1}`, en: `Food that welcomes ${index + 1}` })}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <Expand className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {lightboxOpen && (
            <Lightbox
              images={gallery}
              currentIndex={currentImageIndex}
              onClose={closeLightbox}
              onNext={nextImage}
              onPrev={prevImage}
              alt={t({ pt: 'Alimento que acolhe', it: 'Un cibo che accoglie', de: "Nahrung, die willkommen heißt", en: "Food that welcomes" })}
            />
          )}
        </div>
      </section>

      {/* CLOSING STATEMENT */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img loading="lazy"
            src={heroImg}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center text-white">
          <AnimatedSection>
            <p className="text-2xl md:text-3xl leading-relaxed italic">
              {t({
                pt: 'O Alimento que acolhe compreende que alimentar é também cuidar.',
                it: 'Alimento que acolhe è convinto che nutrire sia anche prendersi cura.',
                de: "Alimento que acolhe versteht: Nahrung geben bedeutet auch Fürsorge.",
                en: "Alimento que acolhe understands that feeding is also a form of care.",
              })}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--deep-blue)] mb-6">
              {t({ pt: 'Ajuda-nos a alimentar quem mais precisa', it: 'Aiutaci a nutrire chi ha più bisogno', de: "Hilf uns, denen zu essen zu geben, die es am meisten brauchen", en: "Help us feed those who need it most" })}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
              {t({
                pt: 'Graças ao teu apoio, o Alimento que acolhe pode continuar a levar alimento e dignidade às famílias de Salvador da Bahia em situação de vulnerabilidade.',
                it: "Grazie al tuo sostegno, Alimento que acolhe può continuare a portare cibo e dignità alle famiglie di Salvador de Bahia in situazione di vulnerabilità.",
                de: "Dank Ihrer Unterstützung kann Alimento que acolhe weiterhin Nahrung und Würde zu Familien in Salvador de Bahia bringen, die sich in prekären Lebenslagen befinden.",
                en: "Thanks to your support, Alimento que acolhe can keep bringing food and dignity to families in vulnerable situations in Salvador de Bahia.",
              })}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <Button variant="primary" to="/dona-ora">
                {t({ pt: 'Doe agora', it: 'Dona ora', de: "Jetzt spenden", en: "Donate now" })}
              </Button>
            </div>
            <Link
              to="/trasparenza#documenti"
              className="inline-flex items-center gap-2 text-[var(--deep-blue)] font-semibold text-lg hover:gap-3 hover:text-[var(--warm-orange)] transition-all duration-300"
            >
              <ArrowLeft className="w-5 h-5" />
              {t({ pt: 'Voltar', it: 'Indietro', de: "Zurück", en: "Back" })}
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
