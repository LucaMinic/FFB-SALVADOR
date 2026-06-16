import { ChevronDown, ArrowLeft } from 'lucide-react';
import { useT } from '../context/LanguageContext';
import { AnimatedSection } from './AnimatedSection';
import { Button } from './Button';
import { Link } from 'react-router';
import heroImg from '../../imports/21.jpeg';
import finalCtaImg from '../../imports/14.jpeg';

export function VisitaPresidentePage() {
  const t = useT();

  return (
    <main>
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
              {t({ pt: 'Visita Institucional', it: 'Visita Istituzionale' })}
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              {t({
                pt: 'A visita do Presidente da República Italiana',
                it: 'La visita del Presidente della Repubblica Italiana'
              })}
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              {t({
                pt: 'Um momento histórico de encontro, reconhecimento e vicinidade à missão educativa e social do Centro Nossa Senhora Aparecida.',
                it: "Un momento storico di incontro, riconoscimento e vicinanza alla missione educativa e sociale del Centro Nossa Senhora Aparecida.",
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
              {t({
                pt: 'Uma visita histórica',
                it: 'Una visita storica'
              })}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              {t({
                pt: 'No dia 19 de julho de 2024, o Centro Nossa Senhora Aparecida e a Fraternidade Franciscana de Betânia acolheram uma visita particularmente significativa: a do Presidente da República Italiana, Sergio Mattarella.',
                it: 'Il 19 luglio 2024 il Centro Nossa Senhora Aparecida e la Fraternità Francescana di Betania hanno accolto una visita particolarmente significativa: quella del Presidente della Repubblica Italiana, Sergio Mattarella.',
              })}
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              {t({
                pt: "A visita ocorreu no âmbito das celebrações pelo 150° aniversário da emigração italiana no Brasil e representou um importante momento de encontro, reconhecimento e proximidade à missão educativa e social que é realizada todos os dias em Salvador da Bahia.",
                it: "La visita si è svolta nell'ambito delle celebrazioni per il 150° anniversario dell'emigrazione italiana in Brasile e ha rappresentato un importante momento di incontro, riconoscimento e vicinanza alla missione educativa e sociale che ogni giorno viene portata avanti a Salvador de Bahia.",
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
                src="https://www.youtube.com/embed/CzXoQBaOHis"
                title={t({
                  pt: 'A visita do Presidente da República Italiana',
                  it: 'La visita del Presidente della Repubblica Italiana'
                })}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* STORYTELLING CONTENT */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection delay={0.1}>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              {t({
                pt: 'Caríssimos amigos, estamos felizes em compartilhar esta experiência com vocês: na sexta-feira, 19 de julho de 2024, tivemos o prazer de receber a visita do Presidente da República, Sergio Mattarella, em nossa Missão no Brasil.',
                it: 'Carissimi amici, siamo felici di condividervi questa esperienza: venerdì 19 luglio 2024 abbiamo avuto il piacere di ricevere la visita del Presidente della Repubblica, Sergio Mattarella, presso la nostra Missione in Brasile.',
              })}
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              {t({
                pt: "O Chefe de Estado estava no País por ocasião do 150° aniversário da emigração italiana, uma viagem dedicada ao encontro com as diversas realidades italianas presentes no território.",
                it: "Il Capo dello Stato si trovava nel Paese in occasione del 150° anniversario dell'emigrazione italiana, un viaggio dedicato all'incontro con le diverse realtà italiane presenti sul territorio.",
              })}
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              {t({
                pt: 'Como etapa final de seu percurso, escolheu visitar também a nossa Fraternidade e o Centro Nossa Senhora Aparecida, encontrando crianças, educadores, missionários e colaboradores.',
                it: 'Come tappa conclusiva del suo percorso, ha scelto di visitare anche la nostra Fraternità e il Centro Nossa Senhora Aparecida, incontrando bambini, educatori, missionari e collaboratori.',
              })}
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              {t({
                pt: 'Foi um dia rico de emoção, gratidão e esperança, que permanecerá na memória de nossa comunidade.',
                it: 'È stata una giornata ricca di emozione, gratitudine e speranza, che resterà nella memoria della nostra comunità.',
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
                  pt: 'Uma experiência carregada de emoção e de grande graça.',
                  it: "Un'esperienza carica di emozione e di grande grazia.",
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
              {t({
                pt: 'Descubra a visita do Presidente Mattarella ao Centro',
                it: 'Scopri la visita del Presidente Mattarella al Centro'
              })}
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mb-10">
              {t({
                pt: 'Saiba mais sobre este momento histórico e outras iniciativas especiais do Centro Nossa Senhora Aparecida.',
                it: 'Scopri di più su questo momento storico e altre iniziative speciali del Centro Nossa Senhora Aparecida.',
              })}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" to="/eventi-speciali">
                {t({ pt: 'Eventos Especiais', it: 'Eventi Speciali' })}
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
