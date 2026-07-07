import { useState } from 'react';
import { Button } from './Button';
import { AnimatedSection } from './AnimatedSection';
import { Lightbox } from './Lightbox';
import { ChevronDown } from 'lucide-react';
import { useT } from '../context/LanguageContext';
import heroImg from '../../imports/21-4.jpeg';
import presidentImg from '../../imports/16-5.jpeg';
import gallery1 from '../../imports/15-3.jpeg';
import gallery2 from '../../imports/18-1.jpeg';
import gallery3 from '../../imports/19-2.jpeg';
import gallery4 from '../../imports/21-2.jpeg';
import gallery5 from '../../imports/9-3.jpeg';
import gallery6 from '../../imports/13-6.jpeg';
import gallery7 from '../../imports/24.jpeg';
import gallery8 from '../../imports/25.jpeg';
import gallery9 from '../../imports/26.jpeg';
import gallery10 from '../../imports/33-1.jpeg';
import gallery11 from '../../imports/31.jpeg';
import gallery12 from '../../imports/2-3.jpeg';
import gallery13 from '../../imports/8-4.jpeg';
import gallery14 from '../../imports/12-1.jpeg';
import gallery15 from '../../imports/20.jpeg';
import gallery16 from '../../imports/28-1.jpeg';
import gallery17 from '../../imports/10-2.jpeg';
import gallery18 from '../../imports/3-5.jpeg';
import finalCtaImg from '../../imports/nuove/30.jpeg';

export function EventiSpecialiPage() {
  const t = useT();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const galleryImages = [
    gallery1, gallery2, gallery3, gallery4, gallery5, gallery6,
    gallery7, gallery8, gallery9, gallery10, gallery11, gallery12,
    gallery13, gallery14, gallery15, gallery16, gallery17, gallery18
  ];

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <div className="bg-white">
      {/* SECTION 1 - HERO */}
      <section className="relative h-[90vh] min-h-[700px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt={t({ pt: 'Eventos Especiais', it: 'Eventi Speciali' })}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <AnimatedSection>
            <h1 className="text-5xl md:text-6xl mb-6">
              {t({ pt: 'Eventos Especiais', it: 'Eventi Speciali' })}
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-xl md:text-2xl mb-10 leading-relaxed max-w-3xl mx-auto">
              {t({ pt: 'Momentos, encontros e visitas que marcaram o caminho do Centro Nossa Senhora Aparecida.', it: 'Momenti, incontri e visite che hanno segnato il cammino del Centro Nossa Senhora Aparecida.' })}
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" href="#intro-section" className="text-lg px-8 py-4">
                {t({ pt: 'Saiba mais', it: 'Scopri di più' })}
              </Button>
              <Button variant="secondary" to="/dona-ora" className="text-lg px-8 py-4 bg-white/10 backdrop-blur-sm border-white hover:bg-white/20">
                {t({ pt: 'Doar agora', it: 'Dona ora' })}
              </Button>
            </div>
          </AnimatedSection>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-white/80" />
          </div>
        </div>
      </section>

      {/* SECTION 2 - INTRO */}
      <section id="intro-section" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl text-[var(--deep-blue)] mb-10">
              {t({ pt: 'Momentos que contam uma história', it: 'Momenti che raccontano una storia' })}
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="space-y-6 text-xl text-gray-700 leading-relaxed">
              <p>
                {t({ pt: 'Ao longo do tempo, o Centro Nossa Senhora Aparecida viveu encontros e momentos especiais que representaram sinais concretos de proximidade, reconhecimento e partilha.', it: 'Nel tempo, il Centro Nossa Senhora Aparecida ha vissuto incontri e momenti speciali che hanno rappresentato segni concreti di vicinanza, riconoscimento e condivisione.' })}
              </p>
              <p>
                {t({ pt: 'Cada visita, cada evento e cada encontro tornam-se parte da história cotidiana do Centro e das pessoas que o vivem.', it: 'Ogni visita, ogni evento e ogni incontro diventano parte della storia quotidiana del Centro e delle persone che lo vivono.' })}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 3 - EVENTO PRINCIPALE */}
      <section className="py-20 bg-gradient-to-b from-[#f8f9fb] to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            <AnimatedSection>
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={presidentImg}
                  alt={t({ pt: 'Visita do Presidente da República Italiana', it: 'Visita del Presidente della Repubblica Italiana' })}
                  className="w-full h-auto object-cover"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div>
                <h2 className="text-4xl md:text-5xl text-[var(--deep-blue)] mb-6">
                  {t({ pt: 'A visita do Presidente da República Italiana', it: 'La visita del Presidente della Repubblica Italiana' })}
                </h2>
                <p className="text-xl text-gray-600 mb-8 italic">
                  {t({ pt: 'Um momento de grande valor humano e institucional para o Centro Nossa Senhora Aparecida.', it: 'Un momento di grande valore umano e istituzionale per il Centro Nossa Senhora Aparecida.' })}
                </p>
                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                  <p>
                    {t({ pt: 'A visita do Presidente da República Italiana representou um momento profundamente significativo para a Fundação Betania ONLUS e para toda a comunidade do Centro Nossa Senhora Aparecida.', it: 'La visita del Presidente della Repubblica Italiana ha rappresentato un momento profondamente significativo per la Fundação Betania ONLUS e per tutta la comunità del Centro Nossa Senhora Aparecida.' })}
                  </p>
                  <p>
                    {t({ pt: "Durante o encontro, o Presidente pôde conhecer de perto a realidade do Centro, encontrar crianças, educadores, famílias e membros da Fraternidade Franciscana de Betânia que todos os dias vivem esta presença educativa e social em Salvador de Bahia.", it: "Durante l'incontro, il Presidente ha potuto conoscere da vicino la realtà del Centro, incontrare bambini, educatori, famiglie e membri della Fraternità Francescana di Betania che ogni giorno vivono questa presenza educativa e sociale a Salvador de Bahia." })}
                  </p>
                  <p>
                    {t({ pt: 'A visita representou um importante reconhecimento do valor humano, educativo e social do trabalho realizado ao lado das crianças e das famílias mais frágeis.', it: 'La visita ha rappresentato un importante riconoscimento del valore umano, educativo e sociale del lavoro svolto accanto ai bambini e alle famiglie più fragili.' })}
                  </p>
                  <p>
                    {t({ pt: 'Este momento permanece um sinal concreto de proximidade institucional e de atenção para com uma realidade que continua todos os dias a construir relações, educação e esperança.', it: 'Questo momento rimane un segno concreto di vicinanza istituzionale e di attenzione verso una realtà che continua ogni giorno a costruire relazioni, educazione e speranza.' })}
                  </p>
                </div>
                <div className="mt-8">
                  <Button
                    variant="primary"
                    href="https://www.youtube.com/watch?si=H_6_xvm9Rj4nXch9&v=CzXoQBaOHis&feature=youtu.be"
                    className="text-lg px-8 py-4"
                  >
                    {t({ pt: 'Assista ao vídeo da visita do Presidente da República Italiana', it: 'Guarda il video della visita del Presidente della Repubblica Italiana' })}
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* QUOTE BLOCK */}
          <AnimatedSection delay={0.3}>
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-[var(--beige)] to-white p-12 rounded-3xl border-l-4 border-[var(--deep-blue)] shadow-lg">
                <p className="text-2xl md:text-3xl text-[var(--deep-blue)] italic text-center leading-relaxed">
                  {t({ pt: '"Um encontro que deu valor e visibilidade a uma presença construída cotidianamente ao lado das crianças e das famílias."', it: '"Un incontro che ha dato valore e visibilità a una presenza costruita quotidianamente accanto ai bambini e alle famiglie."' })}
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 4 - FOTO E VIDEO */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl text-[var(--deep-blue)] text-center mb-16">
              {t({ pt: 'Imagens do encontro', it: "Immagini dell'incontro" })}
            </h2>
          </AnimatedSection>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((img, index) => (
              <AnimatedSection key={index} delay={0.1 * (index % 3)}>
                <div className="group cursor-pointer" onClick={() => openLightbox(index)}>
                  <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all relative">
                    <img
                      src={img}
                      alt={t({ pt: `Visita do Presidente - Foto ${index + 1}`, it: `Visita del Presidente - Foto ${index + 1}` })}
                      className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
                          <svg className="w-8 h-8 text-[var(--deep-blue)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Lightbox */}
          {lightboxOpen && (
            <Lightbox
              images={galleryImages}
              currentIndex={currentImageIndex}
              onClose={closeLightbox}
              onNext={nextImage}
              onPrev={prevImage}
              alt={t({ pt: 'Visita do Presidente', it: 'Visita del Presidente' })}
            />
          )}
        </div>
      </section>

      {/* SECTION 7 - CTA FINALE */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={finalCtaImg}
            alt={t({ pt: 'Cada encontro torna-se parte da história do Centro', it: 'Ogni incontro diventa parte della storia del Centro' })}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl mb-6">
              {t({ pt: 'Cada encontro torna-se parte da história do Centro', it: 'Ogni incontro diventa parte della storia del Centro' })}
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-xl md:text-2xl mb-10 leading-relaxed">
              {t({ pt: 'A vida do Centro Nossa Senhora Aparecida continua através de relações, encontros e pessoas que escolhem caminhar juntas.', it: 'La vita del Centro Nossa Senhora Aparecida continua attraverso relazioni, incontri e persone che scelgono di camminare insieme.' })}
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" to="/dona-ora" className="text-lg px-8 py-4">
                {t({ pt: 'Doar agora', it: 'Dona ora' })}
              </Button>
              <Button variant="secondary" to="/iniziative" className="text-lg px-8 py-4 bg-white/10 backdrop-blur-sm border-white hover:bg-white/20">
                {t({ pt: 'Conheça as iniciativas', it: 'Scopri le iniziative' })}
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
