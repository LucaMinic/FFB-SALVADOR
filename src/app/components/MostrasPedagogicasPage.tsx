import { ChevronDown } from 'lucide-react';
import { useT } from '../context/LanguageContext';
import { AnimatedSection } from './AnimatedSection';
import { Button } from './Button';
import heroImg from '../../imports/16-1.jpeg';
import sectionImg from '../../imports/4-3.jpeg';

export function MostrasPedagogicasPage() {
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
              {t({ pt: 'Creche do Centro Nossa Senhora Aparecida', it: 'Asilo del Centro Nossa Senhora Aparecida' })}
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              {t({ pt: 'Mostras Pedagógicas', it: 'Mostre Pedagogiche' })}
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              {t({
                pt: 'Celebrando os processos, as descobertas e as aprendizagens das crianças junto às famílias e à comunidade.',
                it: 'Celebrando i processi, le scoperte e gli apprendimenti dei bambini insieme alle famiglie e alla comunità.',
              })}
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
              <Button variant="primary" to="/dona-ora">
                {t({ pt: 'Doar agora', it: 'Dona ora' })}
              </Button>
              <a
                href="#conteudo"
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

      {/* INTRO — testo lead centrato */}
      <section id="conteudo" className="bg-white py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <AnimatedSection delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--deep-blue)] mb-8">
              {t({ pt: 'O que são as Mostras Pedagógicas?', it: 'Cosa sono le Mostre Pedagogiche?' })}
            </h2>
            <p className="text-gray-600 text-xl leading-relaxed">
              {t({
                pt: 'As Mostras Pedagógicas são momentos importantes em nossa proposta educativa, pois permitem compartilhar com as famílias e a comunidade as experiências, as descobertas e as aprendizagens vividas pelas crianças ao longo do ano.',
                it: 'Le Mostre Pedagogiche sono momenti importanti nella nostra proposta educativa, poiché permettono di condividere con le famiglie e la comunità le esperienze, le scoperte e gli apprendimenti vissuti dai bambini nel corso dell\'anno.',
              })}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* SEZIONE IMMAGINE + TESTO */}
      <section className="bg-[var(--beige)] py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection delay={0.1}>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                <p>
                  {t({
                    pt: 'Por meio de fotos, registros, produções, falas e projetos desenvolvidos pelas crianças, tornamos visível o percurso de aprendizagem de cada grupo, valorizando seus esforços, conquistas, curiosidades e formas de pensar.',
                    it: 'Attraverso foto, documentazioni, produzioni, parole e progetti sviluppati dai bambini, rendiamo visibile il percorso di apprendimento di ogni gruppo, valorizzando i loro sforzi, i traguardi, le curiosità e le modalità di pensiero.',
                  })}
                </p>
                <p>
                  {t({
                    pt: 'Mais do que apresentar resultados, as mostras revelam os processos vividos pelas crianças, mostrando como aprendem, investigam, criam, brincam e constroem conhecimentos no dia a dia. Também fortalecem a parceria entre a creche e as famílias, que passam a conhecer e valorizar ainda mais as experiências que fazem parte da infância de seus filhos.',
                    it: "Più che presentare risultati, le mostre rivelano i processi vissuti dai bambini, mostrando come imparano, investigano, creano, giocano e costruiscono conoscenze nel quotidiano. Rafforzano anche la partnership tra l'asilo e le famiglie, che vengono a conoscere e valorizzare ancora di più le esperienze che fanno parte dell'infanzia dei loro figli.",
                  })}
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <img
                src={sectionImg}
                alt={t({ pt: 'Mostra pedagógica', it: 'Mostra pedagogica' })}
                className="w-full rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.12)] object-cover h-80 lg:h-96"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CHIUSURA */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <AnimatedSection delay={0.1}>
            <div className="w-16 h-1 bg-[var(--warm-orange)] mx-auto mb-10 rounded-full" />
            <p className="text-gray-600 text-xl leading-relaxed mb-12">
              {t({
                pt: 'Dessa forma, as Mostras Pedagógicas se tornam uma importante ferramenta de documentação, celebração e valorização das aprendizagens das crianças.',
                it: 'In questo modo, le Mostre Pedagogiche diventano un importante strumento di documentazione, celebrazione e valorizzazione degli apprendimenti dei bambini.',
              })}
            </p>
            <Button variant="primary" to="/dona-ora" className="text-lg px-10 py-4">
              {t({ pt: 'Apoie nosso trabalho', it: 'Sostieni il nostro lavoro' })}
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
