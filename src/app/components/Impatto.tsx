import dailyLifeImage from '../../imports/nuove/gruppo classe.jpg';
import educationImage from '../../imports/scuola.webp';
import accoglienzaImg from '../../imports/nuove/2P9A9067.jpg';
import educazioneImg from '../../imports/3-1.jpeg';
import curaImg from '../../imports/16-3.jpeg';
import accompagnamentoImg from '../../imports/2.jpeg';
import padrePancrazioImg from '../../imports/nuove/padre Pancrazio2.jfif';
import { AnimatedSection } from './AnimatedSection';
import { Link } from 'react-router';
import { useT } from '../context/LanguageContext';

export function Impatto() {
  const t = useT();

  const points = [
    { text: t({ pt: 'Acolhimento diário', it: 'Accoglienza quotidiana', de: "Tägliche Betreuung", en: "Daily care" }), image: accoglienzaImg, href: '/accoglienza-quotidiana' },
    { text: t({ pt: 'Educação', it: 'Educazione', de: "Bildung", en: "Education" }), image: educazioneImg, href: '/educazione' },
    { text: t({ pt: 'Cuidado e nutrição', it: 'Cura e nutrizione', de: "Pflege und Ernährung", en: "Care and nutrition" }), image: curaImg, href: '/cura-e-nutrizione' },
    { text: t({ pt: 'Acompanhamento das famílias', it: 'Accompagnamento delle famiglie', de: "Begleitung der Familien", en: "Supporting families" }), image: accompagnamentoImg, href: '/accompagnamento-famiglie' }
  ];

  return (
    <section id="impatto" className="pt-6 md:pt-8 pb-16 md:pb-20 lg:pb-24 bg-gradient-to-b from-white to-[var(--beige)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          <AnimatedSection delay={0}>
            <Link to="/asilo" className="block overflow-hidden rounded-[2rem] shadow-[0_10px_40px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] hover:-translate-y-2 transition-all duration-500">
              <div className="overflow-hidden">
                <img loading="lazy"
                  src={dailyLifeImage}
                  alt={t({ pt: 'Creche e Pré-escola', it: 'Asilo', de: "Kita", en: "Nursery School" })}
                  className="w-full h-80 object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="bg-gradient-to-br from-[var(--soft-green)] to-[#7ab89a] text-white p-8 text-center">
                <p className="text-2xl font-medium mb-2">{t({ pt: 'Creche e Pré-escola', it: 'Asilo', de: "Kita", en: "Nursery School" })}</p>
                <p className="text-sm opacity-90">{t({ pt: 'Saiba mais', it: 'Scopri di più', de: "Mehr erfahren", en: "Learn more" })}</p>
              </div>
            </Link>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <Link to="/progetto-scuola" className="block overflow-hidden rounded-[2rem] shadow-[0_10px_40px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] hover:-translate-y-2 transition-all duration-500">
              <div className="overflow-hidden">
                <img loading="lazy"
                  src={educationImage}
                  alt={t({ pt: 'Projeto Escola', it: 'Progetto Scuola', de: "Schulprojekt", en: "School Project" })}
                  className="w-full h-80 object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="bg-gradient-to-br from-[var(--warm-orange-light)] to-[var(--warm-orange)] text-white p-8 text-center">
                <p className="text-2xl font-medium mb-2">{t({ pt: 'Projeto Escola', it: 'Progetto Scuola', de: "Schulprojekt", en: "School Project" })}</p>
                <p className="text-sm opacity-90">{t({ pt: 'Saiba mais', it: 'Scopri di più', de: "Mehr erfahren", en: "Learn more" })}</p>
              </div>
            </Link>
          </AnimatedSection>
        </div>

        <AnimatedSection>
          <div className="max-w-2xl mx-auto text-center mb-12 pt-8 border-t border-gray-200">
            <img loading="lazy"
              src={padrePancrazioImg}
              alt="Padre Pancrazio"
              className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover mx-auto mb-5 shadow-lg ring-4 ring-white"
            />
            <blockquote className="text-xl md:text-2xl text-gray-800 leading-relaxed italic mb-3">
              {t({
                pt: '«Quando compreendi que rezar é amar, então tudo se tornou oração, tudo se tornou amor»',
                it: '«Quando ho compreso che pregare è amare, allora tutto è diventato preghiera, tutto è diventato amore»',
                de: "«Als ich verstand, dass Beten Lieben bedeutet, wurde alles zum Gebet, alles zur Liebe»",
                en: "«When I understood that praying is loving, then everything became prayer, everything became love»"
              })}
            </blockquote>
            <p className="text-sm md:text-base text-[var(--deep-blue)] font-semibold tracking-wide">
              — Padre Pancrazio
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl text-[var(--deep-blue)] font-bold tracking-tight mb-3">
              {t({ pt: 'Nossos pilares', it: 'I nostri pilastri', de: "Unsere Säulen", en: "Our pillars" })}
            </h2>
            <p className="text-base md:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto">
              {t({
                pt: 'Quatro dimensões que orientam diariamente o nosso compromisso junto às crianças e às famílias.',
                it: 'Quattro dimensioni che ogni giorno guidano il nostro impegno accanto ai bambini e alle famiglie.',
                de: "Vier Dimensionen, die unser tägliches Engagement für die Kinder und Familien leiten.",
                en: "Four dimensions that guide our commitment to children and families every day."
              })}
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {points.map((point, index) => (
            <AnimatedSection key={point.text} delay={index * 0.1}>
              <Link id={point.href.slice(1)} to={point.href} className="block overflow-hidden rounded-[2rem] shadow-[0_10px_40px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] hover:-translate-y-2 transition-all duration-500">
                <div className="overflow-hidden">
                  <img loading="lazy"
                    src={point.image}
                    alt={point.text}
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className={`${
                  index % 2 === 0 ? 'bg-gradient-to-br from-[var(--soft-green)] to-[#7ab89a]' : 'bg-gradient-to-br from-[var(--warm-orange-light)] to-[var(--warm-orange)]'
                } text-white p-8 text-center`}>
                  <p className="text-2xl font-medium mb-2">{point.text}</p>
                  <p className="text-sm opacity-90">{t({ pt: 'Saiba mais', it: 'Scopri di più', de: "Mehr erfahren", en: "Learn more" })}</p>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
