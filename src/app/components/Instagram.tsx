import { Instagram as InstagramIcon } from 'lucide-react';
import { Button } from './Button';
import { AnimatedSection } from './AnimatedSection';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import instagramPost1 from '../../imports/6.jpeg';
import instagramPost2 from '../../imports/5.jpeg';
import instagramPost3 from '../../imports/18.jpeg';
import instagramPost4 from '../../imports/21-1.jpeg';
import instagramPost5 from '../../imports/9-2.jpeg';
import instagramPost6 from '../../imports/4.jpeg';
import instagramPost7 from '../../imports/13-1.jpeg';
import instagramPost8 from '../../imports/5-1.jpeg';
import instagramPost9 from '../../imports/19.jpeg';
import { useT } from '../context/LanguageContext';

export function Instagram() {
  const t = useT();

  const posts = [
    instagramPost1,
    instagramPost2,
    instagramPost3,
    instagramPost4,
    instagramPost5,
    instagramPost6,
    instagramPost7,
    instagramPost8,
    instagramPost9,
  ];

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    draggable: true,
    arrows: false,
    pauseOnHover: true,
    cssEase: 'ease-in-out',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      }
    ]
  };

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-b from-white to-[var(--beige)]">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <InstagramIcon className="w-10 h-10 text-[var(--deep-blue)]" />
              <h2 className="text-4xl md:text-5xl text-[var(--deep-blue)]">
                {t({ pt: 'Siga a Fundação Betânia dia a dia', it: 'Segui la Fundação Betânia giorno per giorno', de: "Begleiten Sie die Fundação Betânia Tag für Tag" })}
              </h2>
            </div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              {t({
                pt: 'No Instagram compartilhamos momentos da vida cotidiana, atualizações da missão e pequenos sinais do que nasce todos os dias em Salvador da Bahia.',
                it: 'Su Instagram condividiamo momenti della vita quotidiana, aggiornamenti dalla missione e piccoli segni di ciò che nasce ogni giorno a Salvador de Bahia.',
                de: "Auf Instagram teilen wir Momente aus dem Alltag, Neuigkeiten von unserer Mission und kleine Zeichen dessen, was jeden Tag in Salvador de Bahia entsteht."
              })}
            </p>
          </div>
        </AnimatedSection>

        <div className="instagram-gallery mb-12">
          <Slider {...sliderSettings}>
            {posts.map((post, index) => (
              <div key={index} className="px-2">
                <div className="group aspect-square overflow-hidden rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] transition-all duration-300">
                  <img loading="lazy"
                    src={post}
                    alt={t({ pt: `Post Instagram ${index + 1}`, it: `Post Instagram ${index + 1}` })}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <style>{`
          .instagram-gallery .slick-slide {
            opacity: 1;
          }
          .instagram-gallery .slick-track {
            display: flex;
            gap: 0;
          }
        `}</style>

        <AnimatedSection delay={0.4}>
          <div className="text-center">
            <a
              href="https://www.instagram.com/ffbetania.salvador"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="secondary">{t({ pt: 'Ir para o perfil do Instagram', it: 'Vai al profilo Instagram', de: "Zum Instagram-Profil" })}</Button>
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
