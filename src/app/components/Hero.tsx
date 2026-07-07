import { Button } from './Button';
import Slider from 'react-slick';
import { useRef } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import heroImage1 from '../../imports/nuove/IMG_2360.JPG';
import heroImage2 from '../../imports/14-1.jpeg';
import heroImage3 from '../../imports/34.jpeg';
import heroImage4 from '../../imports/9-1.jpeg';
import heroImage5 from '../../imports/32.jpeg';
import logoHero from '../../imports/logo-2.png';
import { useT } from '../context/LanguageContext';

export function Hero() {
  const t = useT();
  const sliderRef = useRef<Slider>(null);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    arrows: false,
  };

  const handleSlideClick = () => {
    sliderRef.current?.slickNext();
  };

  const images = [
    {
      src: heroImage1,
      alt: t({ pt: 'Crianças da missão', it: 'Bambini della missione' }),
      text: t({ pt: 'A cada dia, aqui, a vida se constrói juntos.', it: 'Ogni giorno, qui, la vita si costruisce insieme.' })
    },
    {
      src: heroImage2,
      alt: t({ pt: 'Visita institucional', it: 'Visita istituzionale' }),
      text: t({ pt: 'Neste lugar, cada criança encontra cuidado, atenção e uma possibilidade de futuro.', it: 'In questo luogo, ogni bambino trova cura, attenzione e una possibilità di futuro.' })
    },
    {
      src: heroImage3,
      alt: t({ pt: 'Crianças sorrindo', it: 'Bambini sorridenti' }),
      text: t({ pt: 'Acolher significa estar ao lado, compartilhar e crescer juntos.', it: 'Accogliere significa stare accanto, condividere e crescere insieme.' })
    },
    {
      src: heroImage4,
      alt: t({ pt: 'Encontro institucional', it: 'Incontro istituzionale' }),
      text: t({ pt: 'Onde há necessidade, nasce uma presença que se torna lar.', it: 'Dove c\'è bisogno, nasce una presenza che diventa casa.' })
    },
    {
      src: heroImage5,
      alt: t({ pt: 'A fraternidade', it: 'La fraternità' }),
      text: ''
    },
  ];

  return (
    <section className="relative">
      <div className="hero-slider">
        <Slider ref={sliderRef} {...sliderSettings}>
          {images.map((image, index) => (
            <div key={index} className="relative cursor-pointer bg-[var(--beige)]" onClick={handleSlideClick}>
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-[280px] md:h-[550px] lg:h-[650px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent hidden md:flex items-center">
                <div className="max-w-7xl mx-auto px-6 w-full">
                  <div className="max-w-2xl">
                    <p className="text-white text-5xl leading-tight drop-shadow-2xl font-medium">
                      {image.text}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <style>{`
        .hero-slider .slick-dots {
          bottom: 30px;
        }
        .hero-slider .slick-dots li button:before {
          font-size: 12px;
          color: white;
          opacity: 0.5;
        }
        .hero-slider .slick-dots li.slick-active button:before {
          color: white;
          opacity: 1;
        }
        .hero-slider .slick-dots li button:hover:before {
          opacity: 0.8;
        }
      `}</style>

      <div className="relative bg-gradient-to-b from-white via-[#f8f9fb] to-white pt-4 md:pt-16 lg:pt-20 pb-0 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute top-10 left-[10%] w-64 h-64 rounded-full border-4 border-[var(--deep-blue)]"></div>
          <div className="absolute top-32 right-[15%] w-48 h-48 border-4 border-[var(--deep-blue)] rotate-45"></div>
          <div className="absolute bottom-20 left-[20%] w-56 h-56 rounded-full border-4 border-[var(--deep-blue)]"></div>
          <div className="absolute bottom-40 right-[25%] w-40 h-40 border-4 border-[var(--deep-blue)] rotate-12"></div>
          <svg className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-96 h-96" viewBox="0 0 100 100">
            <path d="M50,10 L50,90 M30,50 L50,30 L70,50" stroke="var(--deep-blue)" strokeWidth="2" fill="none" />
          </svg>
        </div>

        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <div className="mb-6 md:mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-[var(--deep-blue)] font-bold leading-tight text-center tracking-tight">
              Fundação Betania ONLUS
            </h1>
          </div>

          <div className="max-w-4xl mx-auto">
            <p className="text-lg md:text-2xl lg:text-3xl mb-4 md:mb-8 text-gray-800 leading-relaxed">
              {t({
                pt: 'Aqui em Salvador da Bahia, através do Centro Nossa Senhora Aparecida, acolhemos e acompanhamos diariamente crianças e famílias em situação de vulnerabilidade.',
                it: 'A Salvador de Bahia, attraverso il Centro Nossa Senhora Aparecida, accogliamo e accompagniamo ogni giorno bambini e famiglie in difficoltà.'
              })}
            </p>

            <p className="text-base md:text-xl mb-6 md:mb-10 max-w-3xl mx-auto text-gray-700 leading-relaxed">
              {t({
                pt: 'Todos os dias partilhamos a vida com quem mais precisa, oferecendo cuidado, educação e uma oportunidade concreta de futuro.',
                it: 'Ogni giorno condividiamo la vita con chi ha più bisogno, offrendo cura, educazione e una possibilità concreta di futuro.'
              })}
            </p>
          </div>

          <div className="mt-10 md:mt-14 mb-6 md:mb-10 flex justify-center items-center">
            <img src={logoHero} alt="Centro Nossa Senhora Aparecida" className="h-24 md:h-36 lg:h-44 w-auto" />
          </div>
        </div>
      </div>

      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-0 md:h-24" style={{ display: 'block' }}>
        <path d="M0,50 C300,90 600,10 900,50 C1050,70 1150,50 1200,50 L1200,120 L0,120 Z" fill="#ffffff" />
      </svg>
    </section>
  );
}
