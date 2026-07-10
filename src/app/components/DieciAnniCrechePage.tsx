import { ChevronDown, ArrowLeft } from 'lucide-react';
import { useT } from '../context/LanguageContext';
import { AnimatedSection } from './AnimatedSection';
import { Button } from './Button';
import { Link } from 'react-router';
import heroImg from '../../imports/33.jpeg';
import finalCtaImg from '../../imports/21.jpeg';

export function DieciAnniCrechePage() {
  const t = useT();

  return (
    <>
      {/* HERO */}
      <section
        className="relative flex flex-col items-center justify-center text-center overflow-hidden"
        style={{ minHeight: 'clamp(70vh, 85vh, 100vh)' }}
      >
        <img src={heroImg} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />

        {/* Back button */}
        <div className="absolute top-8 left-8 z-20">
          <Link
            to="/documentari-racconti"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm font-medium">{t({ pt: 'Voltar', it: 'Torna indietro' })}</span>
          </Link>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col items-center gap-8">
          <AnimatedSection delay={0.1}>
            <p className="text-white/70 uppercase tracking-[0.2em] text-sm font-medium mb-4">
              {t({ pt: 'Aniversário', it: 'Anniversario' })}
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              {t({ pt: 'Dez anos da Creche', it: 'Dieci anni della Creche' })}
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              {t({
                pt: 'Dez anos de acolhimento, educação e crescimento compartilhado junto às crianças, famílias e comunidade de Salvador da Bahia.',
                it: 'Dieci anni di accoglienza, educazione e crescita condivisa insieme ai bambini, alle famiglie e alla comunità di Salvador de Bahia.',
              })}
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
              <a
                href="#video"
                className="px-8 py-4 bg-white text-[var(--deep-blue)] font-semibold rounded-xl shadow-lg hover:bg-white/90 transition-all duration-200 text-base"
              >
                {t({ pt: 'Assista ao vídeo', it: 'Guarda il video' })}
              </a>
            </div>
          </AnimatedSection>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <ChevronDown className="w-8 h-8 text-white/60 animate-bounce" />
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--deep-blue)] mb-8">
              {t({ pt: 'O Centro Nossa Senhora Aparecida completou 10 anos!', it: 'Il Centro Nossa Senhora Aparecida ha compiuto 10 anni!' })}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              {t({
                pt: 'Nos últimos dez anos, a nossa creche em Salvador da Bahia, Brasil, tornou-se um farol de esperança para crianças e famílias. Fortemente desejada pelo nosso fundador Padre Pancrazio, oferece um ambiente seguro onde instrução, cuidado e amor são parte integrante do crescimento quotidiano.',
                it: 'Negli ultimi dieci anni, il nostro asilo a Salvador de Bahia, Brasile, è diventato un faro di speranza per bambini e famiglie. Fortemente voluto dal nostro fondatore Padre Pancrazio, offre un ambiente sicuro dove istruzione, cura e amore sono parte integrante della crescita quotidiana.',
              })}
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              {t({
                pt: 'Graças ao empenho dos missionários, dos educadores e de toda a equipe da Creche, foi possível construir um espaço acolhedor dedicado ao aprendizado, ao crescimento e à transmissão de valores fundamentais.',
                it: "Grazie all'impegno dei missionari, degli educatori e di tutto il personale della Creche, è stato possibile costruire uno spazio accogliente dedicato all'apprendimento, alla crescita e alla trasmissione di valori fondamentali.",
              })}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* VIDEO SECTION */}
      <section id="video" className="bg-[var(--beige)] py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-6">
          <AnimatedSection delay={0.1}>
            <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/KNgdE51hszg"
                title={t({ pt: 'Dez anos da Creche', it: 'Dieci anni della Creche' })}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection delay={0.1}>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              {t({
                pt: 'No dia 12 de outubro, celebramos este importante marco junto às crianças, famílias e comunidade local.',
                it: 'Il 12 ottobre abbiamo celebrato questo importante traguardo insieme ai bambini, alle famiglie e alla comunità locale.',
              })}
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              {t({
                pt: 'Foi um dia de festa, gratidão e partilha, oportunidade para relembrar o caminho percorrido e olhar com confiança para o futuro.',
                it: 'È stata una giornata di festa, gratitudine e condivisione, occasione per ripercorrere il cammino compiuto e guardare con fiducia al futuro.',
              })}
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              {t({
                pt: 'Renovamos o nosso compromisso com os mais pequenos, agradecendo a todos aqueles que ao longo destes anos apoiaram o Centro Nossa Senhora Aparecida através da oração, proximidade e ajuda concreta.',
                it: "Rinnoviamo il nostro impegno nei confronti dei più piccoli, ringraziando tutti coloro che in questi anni hanno sostenuto il Centro Nossa Senhora Aparecida attraverso la preghiera, la vicinanza e l'aiuto concreto.",
              })}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* QUOTE */}
      <section className="py-24 md:py-32 bg-[var(--beige)]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection delay={0.1}>
            <blockquote>
              <p className="text-2xl md:text-3xl italic font-medium leading-relaxed text-[var(--deep-blue)] mb-8">
                &ldquo;{t({
                  pt: 'Louvamos e agradecemos juntos ao Senhor por todas as maravilhas realizadas nestes dez anos de vida.',
                  it: 'Lodiamo e ringraziamo insieme il Signore per tutte le meraviglie compiute in questi dieci anni di vita.',
                })}&rdquo;
              </p>
              <footer className="text-[var(--deep-blue)]/60 text-sm font-medium tracking-wide uppercase">
                Centro Nossa Senhora Aparecida
              </footer>
            </blockquote>
          </AnimatedSection>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative flex flex-col items-center justify-center text-center py-32 md:py-40 overflow-hidden">
        <img src={finalCtaImg} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <AnimatedSection delay={0.1}>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              {t({ pt: 'Descubra e apoie o Centro', it: 'Scopri e sostieni il Centro' })}
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mb-10">
              {t({
                pt: 'Conheça mais sobre o trabalho do Centro Nossa Senhora Aparecida e descubra como você pode fazer parte desta missão.',
                it: 'Scopri di più sul lavoro del Centro Nossa Senhora Aparecida e come puoi far parte di questa missione.',
              })}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" to="/il-centro">
                {t({ pt: 'Conheça o Centro', it: 'Scopri il Centro' })}
              </Button>
              <Button variant="secondary" to="/dona-ora">
                {t({ pt: 'Apoie o Centro', it: 'Sostieni il Centro' })}
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
