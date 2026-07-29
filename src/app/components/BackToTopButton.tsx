import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { useT } from '../context/LanguageContext';

export function BackToTopButton() {
  const [visible, setVisible] = useState(false);
  const t = useT();

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > window.innerHeight * 0.75);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label={t({ pt: 'Voltar ao topo', it: "Torna all'inizio", de: 'Nach oben', en: "Back to top" })}
      className={`fixed bottom-5 right-5 z-40 p-3 bg-[var(--deep-blue)] text-white rounded-full shadow-lg hover:bg-[#4d6374] hover:-translate-y-1 transition-all duration-300 ${
        visible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}
