import { Download, FileText, ArrowLeft } from 'lucide-react';
import { useParams, Navigate, Link } from 'react-router';
import { useT } from '../context/LanguageContext';
import { AnimatedSection } from './AnimatedSection';
import { Button } from './Button';
import { relatorioAreas } from '../data/relatoriosData';

export function RelatorioAreaPage() {
  const t = useT();
  const { area: areaSlug } = useParams();
  const area = relatorioAreas.find((a) => a.slug === areaSlug);

  if (!area) {
    return <Navigate to="/relatorios" replace />;
  }

  return (
    <>
      {/* HERO */}
      <section
        className="relative flex flex-col items-center justify-center text-center overflow-hidden"
        style={{ minHeight: 'clamp(60vh, 70vh, 85vh)' }}
      >
        <img src={area.cardImage} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col items-center gap-8">
          <AnimatedSection delay={0.1}>
            <Link
              to="/relatorios"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm font-medium mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              {t({ pt: 'Todas as áreas', it: 'Tutte le aree', de: "Alle Bereiche", en: "All areas" })}
            </Link>
            <p className="text-white/70 uppercase tracking-[0.2em] text-sm font-medium mb-4">
              {t({ pt: 'Creche do Centro Nossa Senhora Aparecida', it: 'Asilo del Centro Nossa Senhora Aparecida', de: "Kita des Centro Nossa Senhora Aparecida", en: "Nursery School of the Centro Nossa Senhora Aparecida" })}
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              {t(area.name)}
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              {t(area.tagline)}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection delay={0.1}>
            <div className="text-center mb-20">
              <div className="w-16 h-1 mx-auto mb-8 rounded-full" style={{ backgroundColor: area.color }} />
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--deep-blue)] mb-6">
                {t({ pt: 'Documentos disponíveis', it: 'Documenti disponibili', de: "Verfügbare Dokumente", en: "Available documents" })}
              </h2>
              <p className="text-gray-600 text-xl leading-relaxed max-w-3xl mx-auto">
                {t({
                  pt: 'Cada relatório é um registro cuidadoso das propostas, das descobertas e do desenvolvimento das crianças. Faça o download e conheça em profundidade o trabalho realizado.',
                  it: "Ogni relazione è un registro attento delle proposte, delle scoperte e dello sviluppo dei bambini. Scarica e conosci in profondità il lavoro svolto.",
                  de: "Jeder Bericht ist eine sorgfältige Dokumentation der Angebote, Entdeckungen und der Entwicklung der Kinder. Laden Sie ihn herunter und lernen Sie die geleistete Arbeit im Detail kennen.",
                  en: "Each report is a careful record of the activities, discoveries and development of the children. Download it and learn more about the work carried out.",
                })}
              </p>
            </div>
          </AnimatedSection>

          {/* GRID RELATORIOS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {area.reports.map((report, index) => (
              <AnimatedSection key={index} delay={index * 0.08}>
                <div className="bg-white rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col h-full border border-gray-100 hover:shadow-[0_16px_48px_rgba(0,0,0,0.13)] transition-shadow duration-300">
                  {/* Preview image */}
                  <div className="relative h-52 overflow-hidden">
                    <img loading="lazy"
                      src={report.img}
                      alt={t(report.title)}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <span
                      className="absolute bottom-4 left-4 text-white text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full"
                      style={{ backgroundColor: report.color }}
                    >
                      {t(report.category)}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-7 flex flex-col flex-1 gap-4">
                    <div
                      className="w-10 h-1 rounded-full"
                      style={{ backgroundColor: report.color }}
                    />
                    <h3 className="text-lg font-bold text-[var(--deep-blue)] leading-snug">
                      {t(report.title)}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed flex-1">
                      {t(report.description)}
                    </p>
                    <a
                      href={report.href}
                      download
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white transition-opacity hover:opacity-90 mt-2"
                      style={{ backgroundColor: report.color }}
                    >
                      <Download className="w-4 h-4" />
                      {t({ pt: 'Download relatório completo', it: 'Scarica la relazione completa', de: "Vollständigen Bericht herunterladen", en: "Download the full report" })}
                    </a>
                  </div>
                </div>
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
              {t({ pt: 'Precisa de mais informações?', it: 'Ha bisogno di ulteriori informazioni?', de: "Benötigen Sie weitere Informationen?", en: "Need more information?" })}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
              {t({
                pt: 'Para solicitar outros relatórios ou obter mais informações sobre o trabalho pedagógico do Centro, entre em contato conosco.',
                it: 'Per richiedere altre relazioni o ottenere maggiori informazioni sul lavoro pedagogico del Centro, contattaci.',
                de: "Um weitere Berichte anzufordern oder mehr über die pädagogische Arbeit des Centro zu erfahren, kontaktieren Sie uns.",
                en: "To request other reports or learn more about the Centre's pedagogical work, contact us.",
              })}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" to="/contatti">
                {t({ pt: 'Entre em contato', it: 'Contattaci', de: "Kontaktieren Sie uns", en: "Contact us" })}
              </Button>
              <Button variant="secondary" to="/nossa-metodologia">
                {t({ pt: 'Nossa metodologia', it: 'La nostra metodologia', de: "Unsere Methodik", en: "Our methodology" })}
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
