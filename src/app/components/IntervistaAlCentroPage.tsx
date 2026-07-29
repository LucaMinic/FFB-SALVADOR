import { ArrowLeft } from 'lucide-react';
import { useT } from '../context/LanguageContext';
import { AnimatedSection } from './AnimatedSection';
import { Button } from './Button';
import { ShareButtons } from './ShareButtons';
import { Link } from 'react-router';
import heroImg from '../../imports/Suor_Mariangela.jpg';
import finalCtaImg from '../../imports/14.jpeg';

export function IntervistaAlCentroPage() {
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
            <span className="text-sm font-medium">{t({ pt: 'Voltar', it: 'Torna indietro', de: "Zurück", en: "Back" })}</span>
          </Link>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col items-center gap-8">
          <AnimatedSection delay={0.1}>
            <p className="text-white/70 uppercase tracking-[0.2em] text-sm font-medium mb-4">
              {t({ pt: 'Entrevista', it: 'Intervista', de: "Interview", en: "Interview" })}
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              {t({ pt: 'Entrevista ao Centro', it: 'Intervista al Centro', de: "Interview mit dem Zentrum", en: "Interview at the Centre" })}
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              {t({
                pt: 'Um olhar autêntico sobre a missão e o trabalho educativo, social e comunitário em Salvador da Bahia.',
                it: 'Uno sguardo autentico sulla missione e il lavoro educativo, sociale e comunitario a Salvador de Bahia.',
                de: "Ein authentischer Einblick in die Mission und die Bildungs-, Sozial- und Gemeinschaftsarbeit in Salvador de Bahia.",
                en: "An authentic look at the mission and the educational, social and community work in Salvador de Bahia.",
              })}
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
              <a
                href="#video"
                className="px-8 py-4 bg-white text-[var(--deep-blue)] font-semibold rounded-xl shadow-lg hover:bg-white/90 transition-all duration-200 text-base"
              >
                {t({ pt: 'Assista à entrevista', it: "Guarda l'intervista", de: "Interview ansehen", en: "Watch the interview" })}
              </a>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.4}>
            <ShareButtons
              title={t({ pt: 'Entrevista ao Centro', it: 'Intervista al Centro', de: "Interview mit dem Zentrum", en: "Interview at the Centre" })}
              variant="dark"
              className="mt-6"
            />
          </AnimatedSection>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--deep-blue)] mb-8">
              {t({ pt: 'Uma oportunidade especial', it: "Un'opportunità speciale", de: "Eine besondere Gelegenheit", en: "A special opportunity" })}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              {t({
                pt: 'Estamos felizes em compartilhar com vocês uma entrevista realizada pelo Centro Missionário de Verona por ocasião do encontro dos missionários italianos no Brasil.',
                it: "Siamo felici di condividere con voi un'intervista realizzata dal Centro Missionario di Verona in occasione dell'incontro dei missionari italiani in Brasile.",
                de: "Wir freuen uns, mit Ihnen ein Interview zu teilen, das vom Centro Missionario di Verona anlässlich des Treffens der italienischen Missionare in Brasilien geführt wurde.",
                en: "We are happy to share with you an interview conducted by the Centro Missionario di Verona on the occasion of the meeting of Italian missionaries in Brazil.",
              })}
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              {t({
                pt: 'Este serviço conta a missão da Fundação Betania ONLUS e do Centro Nossa Senhora Aparecida em Salvador da Bahia, oferecendo um olhar autêntico sobre o trabalho educativo, social e comunitário que acompanha diariamente crianças, famílias e território.',
                it: 'Questo servizio racconta la missione della Fundação Betania ONLUS e del Centro Nossa Senhora Aparecida a Salvador de Bahia, offrendo uno sguardo autentico sul lavoro educativo, sociale e comunitario che accompagna quotidianamente bambini, famiglie e territorio.',
                de: "Dieser Beitrag erzählt von der Mission der Fundação Betania ONLUS und des Centro Nossa Senhora Aparecida in Salvador de Bahia und bietet einen authentischen Einblick in die Bildungs-, Sozial- und Gemeinschaftsarbeit, die Kinder, Familien und die Region tagtäglich begleitet.",
                en: "This piece tells the story of the mission of Fundação Betania ONLUS and the Centro Nossa Senhora Aparecida in Salvador de Bahia, offering an authentic look at the educational, social and community work that accompanies children, families and the local area every day.",
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
                src="https://www.youtube.com/embed/_SvJE_oYZso"
                title={t({ pt: 'Entrevista ao Centro Nossa Senhora Aparecida', it: 'Intervista al Centro Nossa Senhora Aparecida', de: "Interview mit dem Centro Nossa Senhora Aparecida", en: "Interview at the Centro Nossa Senhora Aparecida" })}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* QUOTE */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection delay={0.1}>
            <blockquote>
              <p className="text-2xl md:text-3xl italic font-medium leading-relaxed text-[var(--deep-blue)] mb-8">
                &ldquo;{t({
                  pt: 'Cada história compartilhada é uma janela aberta sobre a vida real do Centro.',
                  it: 'Ogni storia condivisa è una finestra aperta sulla vita reale del Centro.',
                  de: "Jede geteilte Geschichte ist ein offenes Fenster zum wirklichen Leben des Zentrums.",
                  en: "Every shared story is an open window onto the real life of the Centre.",
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
        <img loading="lazy" src={finalCtaImg} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <AnimatedSection delay={0.1}>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              {t({ pt: 'Descubra e apoie o Centro', it: 'Scopri e sostieni il Centro', de: "Entdecken und unterstützen Sie das Zentrum", en: "Discover and support the Centre" })}
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mb-10">
              {t({
                pt: 'Conheça mais sobre o trabalho do Centro Nossa Senhora Aparecida e descubra como você pode fazer parte desta missão.',
                it: 'Scopri di più sul lavoro del Centro Nossa Senhora Aparecida e come puoi far parte di questa missione.',
                de: "Erfahren Sie mehr über die Arbeit des Centro Nossa Senhora Aparecida und wie Sie Teil dieser Mission werden können.",
                en: "Learn more about the work of the Centro Nossa Senhora Aparecida and how you can be part of this mission.",
              })}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" to="/il-centro">
                {t({ pt: 'Conheça o Centro', it: 'Scopri il Centro', de: "Entdecken Sie das Zentrum", en: "Discover the Centre" })}
              </Button>
              <Button variant="secondary" to="/dona-ora">
                {t({ pt: 'Apoie o Centro', it: 'Sostieni il Centro', de: "Unterstützen Sie das Zentrum", en: "Support the Centre" })}
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
