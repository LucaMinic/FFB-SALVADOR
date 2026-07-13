import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useT } from '../context/LanguageContext';
import { AnimatedSection } from './AnimatedSection';
import { Button } from './Button';
import { Lightbox } from './Lightbox';
import cantiere1 from '../../imports/1-1.jpeg';
import cantiere2 from '../../imports/4-5.jpeg';
import cantiere3 from '../../imports/5-3.jpeg';
import cantiereVideo1 from '../../imports/2.mp4';
import cantiereVideo2 from '../../imports/3.mp4';
import droneGiugno2026 from '../../imports/8_giugno_2026.mp4';

// ─── Types ────────────────────────────────────────────────────────────────────

type BilingualText = { it: string; pt: string };
type MediaType = 'image' | 'video';
type EntryStatus = 'completed' | 'in-progress' | 'upcoming';

interface TimelineMedia {
  type: MediaType;
  src: string;
  alt?: string;
}

interface TimelineEntry {
  id: string;
  date: BilingualText;
  phase: BilingualText;
  title: BilingualText;
  description: BilingualText;
  media: TimelineMedia[];
  status: EntryStatus;
}

// ─── Timeline data ─────────────────────────────────────────────────────────────
//
// To add a new update: copy one of the entry objects below, assign a unique id,
// fill in title/description in both languages, add the media files, set the
// status ('completed' | 'in-progress' | 'upcoming') and push the object to the
// array. The timeline renders entries in the order they appear here.
//
const entries: TimelineEntry[] = [
  {
    id: 'drone',
    date: { it: '8 giugno 2026', pt: '8 de junho de 2026' },
    phase: { it: 'Fase 2', pt: 'Fase 2' },
    title: {
      it: 'Preparazione del terreno vista dal drone',
      pt: 'Preparação do terreno vista pelo drone',
    },
    description: {
      it: "Le immagini aeree mostrano le prime attività di preparazione del terreno e l'organizzazione dell'area destinata alla futura costruzione della scuola.",
      pt: 'As imagens aéreas mostram as primeiras atividades de preparação do terreno e a organização da área destinada à futura construção da escola.',
    },
    media: [
      { type: 'video', src: droneGiugno2026, alt: 'Riprese drone – 8 giugno 2026' },
    ],
    status: 'in-progress',
  },
  {
    id: 'sopralluogo',
    date: { it: '2025', pt: '2025' },
    phase: { it: 'Fase 1', pt: 'Fase 1' },
    title: {
      it: 'Sopralluogo iniziale e raccolta materiali',
      pt: 'Vistoria inicial e coleta de materiais',
    },
    description: {
      it: "Le prime visite sul terreno hanno permesso di raccogliere documentazione fotografica, analizzare l'area e pianificare le attività preliminari necessarie all'avvio del progetto.",
      pt: 'As primeiras visitas ao terreno permitiram reunir documentação fotográfica, analisar a área e planejar as atividades preliminares necessárias para o início do projeto.',
    },
    media: [
      { type: 'video', src: cantiereVideo1, alt: 'Riprese drone – preparazione terreno' },
      { type: 'video', src: cantiereVideo2, alt: 'Riprese drone – vista aerea' },
      { type: 'image', src: cantiere1, alt: 'Sopralluogo iniziale – vista 1' },
      { type: 'image', src: cantiere2, alt: 'Sopralluogo iniziale – vista 2' },
      { type: 'image', src: cantiere3, alt: 'Sopralluogo iniziale – vista 3' },
    ],
    status: 'completed',
  },
];

// ─── Status config ─────────────────────────────────────────────────────────────

const statusConfig: Record<EntryStatus, { dot: string; badge: string; label: BilingualText }> = {
  completed: {
    dot: 'bg-[var(--soft-green)]',
    badge: 'bg-[var(--soft-green)] text-white',
    label: { it: 'Completato', pt: 'Concluído' },
  },
  'in-progress': {
    dot: 'bg-[var(--warm-orange)]',
    badge: 'bg-[var(--warm-orange)] text-white',
    label: { it: 'In corso', pt: 'Em andamento' },
  },
  upcoming: {
    dot: 'bg-gray-300',
    badge: 'bg-gray-200 text-gray-600',
    label: { it: 'Prossimamente', pt: 'Em breve' },
  },
};

// ─── Component ────────────────────────────────────────────────────────────────

export function AvanzamentoLavoriPage() {
  const t = useT();

  const [lightboxImages, setLightboxImages] = useState<string[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const openLightbox = (srcs: string[], index: number) => {
    setLightboxImages(srcs);
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="bg-white">

      {/* ── HERO ──────────────────────────────────────────────────────────────── */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={cantiere1}
            alt={t({ it: 'Avanzamento lavori – cantiere scuola', pt: 'Andamento das obras – canteiro da escola' })}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--deep-blue)]/70 via-[var(--deep-blue)]/50 to-[var(--deep-blue)]/70" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <AnimatedSection>
            <p className="text-white/70 uppercase tracking-[0.2em] text-sm font-medium mb-4">
              {t({ it: 'Progetto scuola', pt: 'Projeto Escola' })}
            </p>
            <h1 className="text-5xl md:text-6xl mb-6">
              {t({ it: 'Avanzamento Lavori', pt: 'Andamento das Obras' })}
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-xl md:text-2xl mb-10 leading-relaxed max-w-3xl mx-auto">
              {t({
                it: 'Segui passo dopo passo la costruzione della nostra scuola. In questa pagina raccogliamo fotografie, video e aggiornamenti direttamente dal cantiere per documentare ogni fase del progetto.',
                pt: 'Acompanhe passo a passo a construção da nossa escola. Nesta página reunimos fotos, vídeos e atualizações diretamente da obra para documentar cada etapa do projeto.',
              })}
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <Button variant="primary" href="#diario" className="text-lg px-8 py-4">
              {t({ it: 'Guarda gli aggiornamenti', pt: 'Ver as atualizações' })}
            </Button>
          </AnimatedSection>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-white/80" />
          </div>
        </div>
      </section>

      {/* ── WAVE hero → beige ─────────────────────────────────────────────────── */}
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="w-full h-16 md:h-24"
        style={{ display: 'block', marginTop: '-1px' }}
      >
        <path
          d="M0,50 C300,10 600,90 900,50 C1050,30 1150,50 1200,50 L1200,0 L0,0 Z"
          fill="var(--beige)"
        />
      </svg>

      {/* ── TIMELINE ──────────────────────────────────────────────────────────── */}
      <section id="diario" className="py-20 bg-[var(--beige)]">
        <div className="max-w-4xl mx-auto px-6">

          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl text-[var(--deep-blue)] mb-4 text-center">
              {t({ it: 'Il diario del cantiere', pt: 'O diário da obra' })}
            </h2>
            <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto leading-relaxed">
              {t({
                it: 'Ogni aggiornamento racconta un passo avanti nella costruzione della scuola.',
                pt: 'Cada atualização conta um passo à frente na construção da escola.',
              })}
            </p>
          </AnimatedSection>

          {/* Vertical timeline */}
          <div className="relative">
            {/* Connector line */}
            <div className="absolute left-5 top-3 bottom-6 w-0.5 bg-gradient-to-b from-[var(--deep-blue)]/30 via-[var(--deep-blue)]/20 to-transparent" />

            <div className="space-y-12">
              {entries.map((entry, index) => {
                const cfg = statusConfig[entry.status];
                const images = entry.media.filter(m => m.type === 'image');
                const videos = entry.media.filter(m => m.type === 'video');
                const imageColClass =
                  images.length === 1
                    ? 'grid-cols-1'
                    : images.length === 2
                    ? 'grid-cols-1 sm:grid-cols-2'
                    : 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3';

                return (
                  <AnimatedSection key={entry.id} delay={index * 0.15}>
                    <div className="relative pl-14">

                      {/* Timeline dot – centered on the connector line (left-5 = 20px, dot width 18px, left-[11px] → center at 20px) */}
                      <div
                        className={`absolute left-[11px] top-3 w-[18px] h-[18px] rounded-full ${cfg.dot} ring-4 ring-[var(--beige)] shadow-md z-10`}
                      />

                      {/* Card */}
                      <div className="bg-white rounded-3xl shadow-lg overflow-hidden">

                        {/* Card header */}
                        <div className="p-8 pb-0">
                          <div className="flex flex-wrap items-center gap-2 mb-5">
                            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold ${cfg.badge}`}>
                              {t(cfg.label)}
                            </span>
                            <span className="text-sm font-semibold text-[var(--deep-blue)] bg-[var(--beige)] px-3 py-1 rounded-full">
                              {t(entry.phase)}
                            </span>
                            <span className="text-sm text-gray-400 font-medium">
                              {t(entry.date)}
                            </span>
                          </div>
                          <h3 className="text-2xl md:text-3xl font-bold text-[var(--deep-blue)] mb-3">
                            {t(entry.title)}
                          </h3>
                          <p className="text-gray-700 text-lg leading-relaxed pb-6 border-b border-gray-100">
                            {t(entry.description)}
                          </p>
                        </div>

                        {/* Media */}
                        {entry.media.length > 0 && (
                          <div className="p-8 space-y-5">

                            {/* Videos – full width, each on its own row */}
                            {videos.map((m, i) => (
                              <div key={i} className="rounded-2xl overflow-hidden shadow-md">
                                <video
                                  src={m.src}
                                  controls
                                  className="w-full h-auto"
                                  playsInline
                                >
                                  {t({
                                    it: 'Il tuo browser non supporta il tag video.',
                                    pt: 'O seu navegador não suporta o elemento de vídeo.',
                                  })}
                                </video>
                              </div>
                            ))}

                            {/* Images – responsive grid, click to open lightbox */}
                            {images.length > 0 && (
                              <div className={`grid gap-4 ${imageColClass}`}>
                                {images.map((m, i) => (
                                  <div
                                    key={i}
                                    className="rounded-2xl overflow-hidden shadow-md aspect-[4/3] cursor-pointer group"
                                    onClick={() => openLightbox(images.map(img => img.src), i)}
                                  >
                                    <img loading="lazy"
                                      src={m.src}
                                      alt={m.alt || `${t(entry.title)} – ${i + 1}`}
                                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                  </div>
                                ))}
                              </div>
                            )}

                          </div>
                        )}

                      </div>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* ── WAVE beige → white ────────────────────────────────────────────────── */}
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="w-full h-16 md:h-24"
        style={{ display: 'block', marginTop: '-1px' }}
      >
        <path
          d="M0,50 C300,90 600,10 900,50 C1050,70 1150,50 1200,50 L1200,120 L0,120 Z"
          fill="#ffffff"
        />
      </svg>

      {/* ── CTA ───────────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl text-[var(--deep-blue)] mb-6">
              {t({ it: 'Segui i nostri aggiornamenti', pt: 'Acompanhe nossas atualizações' })}
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-12 max-w-2xl mx-auto">
              {t({
                it: 'Torna spesso su questa pagina: aggiungeremo nuovi aggiornamenti, fotografie e video man mano che la scuola prende forma.',
                pt: 'Volte sempre a esta página: adicionaremos novas atualizações, fotos e vídeos à medida que a escola vai tomando forma.',
              })}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button to="/progetto-scuola">
                {t({ it: 'Scopri il progetto scuola', pt: 'Conheça o projeto escola' })}
              </Button>
              <Button variant="secondary" to="/dona-ora">
                {t({ it: 'Sostieni il progetto', pt: 'Apoie o projeto' })}
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {lightboxOpen && (
        <Lightbox
          images={lightboxImages}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxOpen(false)}
          onNext={() => setLightboxIndex(prev => (prev + 1) % lightboxImages.length)}
          onPrev={() => setLightboxIndex(prev => (prev - 1 + lightboxImages.length) % lightboxImages.length)}
          alt={t({ it: 'Foto cantiere', pt: 'Foto da obra' })}
        />
      )}
    </div>
  );
}
