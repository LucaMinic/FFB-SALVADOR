import dailyLifeImage from '../../imports/4-1.jpeg';
import educationImage from '../../imports/scuola.png';
import accoglienzaImg from '../../imports/33.jpeg';
import educazioneImg from '../../imports/3-1.jpeg';
import curaImg from '../../imports/16-3.jpeg';
import accompagnamentoImg from '../../imports/2.jpeg';
import logoCentro from '../../imports/LOGO_stretto.png';
import { AnimatedSection } from './AnimatedSection';
import { Link } from 'react-router';
import { useT } from '../context/LanguageContext';

export function Impatto() {
  const t = useT();

  const points = [
    { text: t({ pt: 'Acolhimento diário', it: 'Accoglienza quotidiana' }), image: accoglienzaImg, href: '/accoglienza-quotidiana' },
    { text: t({ pt: 'Educação', it: 'Educazione' }), image: educazioneImg, href: '/educazione' },
    { text: t({ pt: 'Cuidado e nutrição', it: 'Cura e nutrizione' }), image: curaImg, href: '/cura-e-nutrizione' },
    { text: t({ pt: 'Acompanhamento das famílias', it: 'Accompagnamento delle famiglie' }), image: accompagnamentoImg, href: '/accompagnamento-famiglie' }
  ];

  return (
    <section id="impatto" className="pt-8 md:pt-16 pb-24 bg-gradient-to-b from-white to-[var(--beige)]">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl text-[var(--deep-blue)] mb-4">
              {t({ pt: 'Acolher, educar, acompanhar', it: 'Accogliere, educare, accompagnare' })}
            </h1>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-2xl text-gray-800 leading-relaxed">
              {t({
                pt: 'Acolhemos crianças em situação de vulnerabilidade, oferecendo a elas um lugar seguro para crescer, aprender e se sentir amadas.',
                it: 'Accogliamo bambini in situazioni di vulnerabilità, offrendo loro un luogo sicuro dove crescere, imparare e sentirsi amati.'
              })}
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-10 mt-2">
            <img
              src={logoCentro}
              alt="Logo Centro Nossa Senhora Aparecida"
              className="h-16 md:h-20 w-auto flex-shrink-0"
            />
            <span className="text-2xl md:text-3xl text-[var(--deep-blue)] font-semibold text-center sm:text-left leading-tight">
              Centro Nossa Senhora Aparecida
            </span>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="max-w-3xl mx-auto text-center mb-10">
            <blockquote className="text-2xl md:text-3xl text-gray-800 leading-relaxed italic mb-4">
              {t({
                pt: '«Quando compreendi que rezar é amar, então tudo se tornou oração, tudo se tornou amor»',
                it: '«Quando ho compreso che pregare è amare, allora tutto è diventato preghiera, tutto è diventato amore»'
              })}
            </blockquote>
            <p className="text-base md:text-lg text-[var(--deep-blue)] font-semibold tracking-wide">
              — Padre Pancrazio
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          <AnimatedSection delay={0}>
            <Link to="/asilo" className="block overflow-hidden rounded-[2rem] shadow-[0_10px_40px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] hover:-translate-y-2 transition-all duration-500">
              <div className="overflow-hidden">
                <img
                  src={dailyLifeImage}
                  alt={t({ pt: 'Creche', it: 'Asilo' })}
                  className="w-full h-80 object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="bg-gradient-to-br from-[var(--soft-green)] to-[#7ab89a] text-white p-8 text-center">
                <p className="text-2xl font-medium mb-2">{t({ pt: 'Creche', it: 'Asilo' })}</p>
                <p className="text-sm opacity-90">{t({ pt: 'Saiba mais', it: 'Scopri di più' })}</p>
              </div>
            </Link>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <a href="#il-progetto-scuola" className="block overflow-hidden rounded-[2rem] shadow-[0_10px_40px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] hover:-translate-y-2 transition-all duration-500">
              <div className="overflow-hidden">
                <img
                  src={educationImage}
                  alt={t({ pt: 'Escola', it: 'Scuola' })}
                  className="w-full h-80 object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="bg-gradient-to-br from-[var(--warm-orange-light)] to-[var(--warm-orange)] text-white p-8 text-center">
                <p className="text-2xl font-medium mb-2">{t({ pt: 'Escola', it: 'Scuola' })}</p>
                <p className="text-sm opacity-90">{t({ pt: 'Saiba mais', it: 'Scopri di più' })}</p>
              </div>
            </a>
          </AnimatedSection>
        </div>

        <AnimatedSection>
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl text-[var(--deep-blue)] font-bold tracking-tight mb-3">
              {t({ pt: 'Nossos pilares', it: 'I nostri pilastri' })}
            </h2>
            <p className="text-base md:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto">
              {t({
                pt: 'Quatro dimensões que orientam diariamente o nosso compromisso junto às crianças e às famílias.',
                it: 'Quattro dimensioni che ogni giorno guidano il nostro impegno accanto ai bambini e alle famiglie.'
              })}
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {points.map((point, index) => (
            <AnimatedSection key={point.text} delay={index * 0.1}>
              <Link to={point.href} className="block overflow-hidden rounded-[2rem] shadow-[0_10px_40px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] hover:-translate-y-2 transition-all duration-500">
                <div className="overflow-hidden">
                  <img
                    src={point.image}
                    alt={point.text}
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className={`${
                  index % 2 === 0 ? 'bg-gradient-to-br from-[var(--soft-green)] to-[#7ab89a]' : 'bg-gradient-to-br from-[var(--warm-orange-light)] to-[var(--warm-orange)]'
                } text-white p-8 text-center`}>
                  <p className="text-2xl font-medium mb-2">{point.text}</p>
                  <p className="text-sm opacity-90">{t({ pt: 'Saiba mais', it: 'Scopri di più' })}</p>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
