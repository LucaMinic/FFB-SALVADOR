import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface GalleriaItem {
  type: 'image' | 'video';
  src: string;
  alt?: string;
}

interface GalleriaSliderProps {
  items: GalleriaItem[];
  autoplay?: boolean;
  autoplayInterval?: number;
}

export function GalleriaSlider({ items, autoplay = true, autoplayInterval = 5000 }: GalleriaSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Autoplay
  useEffect(() => {
    if (!autoplay || lightboxOpen) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, autoplayInterval);

    return () => clearInterval(interval);
  }, [autoplay, autoplayInterval, items.length, lightboxOpen]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (sliderRef.current?.offsetLeft || 0));
    setScrollLeft(sliderRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (sliderRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (sliderRef.current) {
      sliderRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  return (
    <>
      {/* Slider principale */}
      <div className="relative">
        <div
          ref={sliderRef}
          className="overflow-hidden rounded-3xl shadow-2xl cursor-grab active:cursor-grabbing"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {items.map((item, index) => (
              <div
                key={index}
                className="min-w-full aspect-[16/9] flex-shrink-0"
                onClick={() => openLightbox(index)}
              >
                {item.type === 'image' ? (
                  <img
                    src={item.src}
                    alt={item.alt || `Slide ${index + 1}`}
                    className="w-full h-full object-cover cursor-pointer"
                    draggable={false}
                  />
                ) : (
                  <video
                    src={item.src}
                    className="w-full h-full object-cover cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      openLightbox(index);
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Frecce di navigazione */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[var(--deep-blue)] rounded-full p-3 shadow-lg transition-all hover:scale-110"
          aria-label="Precedente"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[var(--deep-blue)] rounded-full p-3 shadow-lg transition-all hover:scale-110"
          aria-label="Successivo"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Indicatori */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex
                  ? 'bg-white w-8'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Vai alla slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 transition-all"
            aria-label="Chiudi"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="max-w-7xl max-h-[90vh] w-full" onClick={(e) => e.stopPropagation()}>
            {items[lightboxIndex].type === 'image' ? (
              <img
                src={items[lightboxIndex].src}
                alt={items[lightboxIndex].alt || `Immagine ${lightboxIndex + 1}`}
                className="w-full h-full object-contain"
              />
            ) : (
              <video
                src={items[lightboxIndex].src}
                controls
                autoPlay
                className="w-full h-full object-contain"
              >
                Il tuo browser non supporta il tag video.
              </video>
            )}
          </div>

          {/* Frecce lightbox */}
          {items.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex((prev) => (prev - 1 + items.length) % items.length);
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 transition-all"
                aria-label="Precedente"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex((prev) => (prev + 1) % items.length);
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full p-3 transition-all"
                aria-label="Successivo"
              >
                <ChevronRight className="w-8 h-8" />
              </button>
            </>
          )}
        </div>
      )}
    </>
  );
}
