import { FileText, ArrowRight } from 'lucide-react';
import { useT } from '../context/LanguageContext';
import { AnimatedSection } from './AnimatedSection';
import { Button } from './Button';
import { Link } from 'react-router';
import heroImg from '../../imports/nuove/r6bis.jpg';
import { relatorioAreas } from '../data/relatoriosData';

export function RelatoriosPage() {
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
              {t({ pt: 'Creche do Centro Nossa Senhora Aparecida', it: 'Asilo del Centro Nossa Senhora Aparecida', de: "Kita des Centro Nossa Senhora Aparecida" })}
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              {t({ pt: 'Relatórios', it: 'Relazioni', de: "Berichte" })}
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              {t({
                pt: 'Documentação pedagógica transparente e acessível — o registro vivo do trabalho realizado com nossas crianças.',
                it: 'Documentazione pedagogica trasparente e accessibile — la registrazione viva del lavoro svolto con i nostri bambini.',
                de: "Transparente und zugängliche pädagogische Dokumentation — die lebendige Aufzeichnung der Arbeit mit unseren Kindern.",
              })}
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
              <Button variant="primary" to="/dona-ora">
                {t({ pt: 'Doar agora', it: 'Dona ora', de: "Jetzt spenden" })}
              </Button>
              <a
                href="#relatorios"
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-200 text-base"
              >
                {t({ pt: 'Ver relatórios', it: 'Vedi le relazioni', de: "Berichte ansehen" })}
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* INTRO */}
      <section id="relatorios" className="bg-white py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection delay={0.1}>
            <div className="text-center mb-20">
              <div className="w-16 h-1 bg-[var(--warm-orange)] mx-auto mb-8 rounded-full" />
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--deep-blue)] mb-6">
                {t({ pt: 'Áreas de trabalho', it: 'Aree di lavoro', de: "Arbeitsbereiche" })}
              </h2>
              <p className="text-gray-600 text-xl leading-relaxed max-w-3xl mx-auto">
                {t({
                  pt: 'Escolha uma área para conhecer os relatórios e o registro cuidadoso das propostas, das descobertas e do desenvolvimento das crianças.',
                  it: 'Scegli un\'area per scoprire le relazioni e il registro attento delle proposte, delle scoperte e dello sviluppo dei bambini.',
                  de: "Wählen Sie einen Bereich, um die Berichte und die sorgfältige Dokumentation der Angebote, Entdeckungen und der Entwicklung der Kinder zu entdecken.",
                })}
              </p>
            </div>
          </AnimatedSection>

          {/* GRID AREE */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatorioAreas.map((area, index) => (
              <AnimatedSection key={area.slug} delay={index * 0.1}>
                <Link
                  to={`/relatorios/${area.slug}`}
                  className="group block overflow-hidden rounded-[2rem] shadow-[0_10px_40px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.13)] hover:-translate-y-2 transition-all duration-500 bg-white border border-gray-100"
                >
                  <div className="relative h-72 overflow-hidden">
                    <img loading="lazy"
                      src={area.cardImage}
                      alt={t(area.name)}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                    <span
                      className="absolute top-5 left-5 text-white text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full"
                      style={{ backgroundColor: area.color }}
                    >
                      {t({
                        pt: `${area.reports.length} relatório${area.reports.length > 1 ? 's' : ''}`,
                        it: `${area.reports.length} relazion${area.reports.length > 1 ? 'i' : 'e'}`,
                      })}
                    </span>
                    <div className="absolute bottom-0 left-0 right-0 p-7">
                      <h3 className="text-2xl font-bold text-white mb-1">{t(area.name)}</h3>
                      <p className="text-white/85 text-sm leading-relaxed">{t(area.tagline)}</p>
                    </div>
                  </div>
                  <div className="px-7 py-5 flex items-center justify-between">
                    <span className="font-semibold" style={{ color: area.color }}>
                      {t({ pt: 'Ver relatórios', it: 'Vedi le relazioni', de: "Berichte ansehen" })}
                    </span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" style={{ color: area.color }} />
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--beige)] py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection delay={0.1}>
            <FileText className="w-12 h-12 text-[var(--deep-blue)] mx-auto mb-8 opacity-60" />
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--deep-blue)] mb-6">
              {t({ pt: 'Precisa de mais informações?', it: 'Ha bisogno di ulteriori informazioni?', de: "Benötigen Sie weitere Informationen?" })}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
              {t({
                pt: 'Para solicitar outros relatórios ou obter mais informações sobre o trabalho pedagógico do Centro, entre em contato conosco.',
                it: 'Per richiedere altre relazioni o ottenere maggiori informazioni sul lavoro pedagogico del Centro, contattaci.',
                de: "Um weitere Berichte anzufordern oder mehr über die pädagogische Arbeit des Zentrums zu erfahren, kontaktieren Sie uns.",
              })}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" to="/contatti">
                {t({ pt: 'Entre em contato', it: 'Contattaci', de: "Kontaktieren Sie uns" })}
              </Button>
              <Button variant="secondary" to="/nossa-metodologia">
                {t({ pt: 'Nossa metodologia', it: 'La nostra metodologia', de: "Unsere Methodik" })}
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
