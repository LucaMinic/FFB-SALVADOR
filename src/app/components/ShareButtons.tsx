import { useState } from 'react';
import { Facebook, Copy, Check } from 'lucide-react';
import { useT } from '../context/LanguageContext';

interface ShareButtonsProps {
  title: string;
  variant?: 'dark' | 'light';
  className?: string;
}

export function ShareButtons({ title, variant = 'light', className = '' }: ShareButtonsProps) {
  const t = useT();
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const url = typeof window !== 'undefined' ? window.location.href : '';
  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(`${title} ${url}`)}`;
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;

  const isDark = variant === 'dark';
  const labelClass = isDark ? 'text-white/70' : 'text-gray-500';
  const buttonClass = isDark
    ? 'bg-white/15 text-white hover:bg-white/25 backdrop-blur-sm'
    : 'bg-gray-100 text-gray-600 hover:bg-gray-200';

  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      <span className={`text-sm font-medium ${labelClass}`}>
        {t({ pt: 'Compartilhar:', it: 'Condividi:', de: "Teilen:" })}
      </span>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className={`w-10 h-10 flex items-center justify-center rounded-full transition-colors ${buttonClass}`}
      >
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.148.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12.001 2C6.478 2 2 6.477 2 12c0 1.876.52 3.632 1.42 5.13L2 22l5.02-1.397A9.94 9.94 0 0 0 12.001 22C17.523 22 22 17.523 22 12S17.523 2 12.001 2zm0 18.062a8.02 8.02 0 0 1-4.29-1.24l-.308-.183-3.176.883.87-3.152-.2-.323A8.02 8.02 0 0 1 3.938 12c0-4.452 3.612-8.062 8.063-8.062 4.45 0 8.062 3.61 8.062 8.062 0 4.451-3.612 8.062-8.062 8.062z" />
        </svg>
      </a>
      <a
        href={facebookUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        className={`w-10 h-10 flex items-center justify-center rounded-full transition-colors ${buttonClass}`}
      >
        <Facebook className="w-5 h-5" />
      </a>
      <button
        type="button"
        onClick={handleCopy}
        aria-label={t({ pt: 'Copiar link', it: 'Copia link', de: "Link kopieren" })}
        className={`w-10 h-10 flex items-center justify-center rounded-full transition-colors ${buttonClass}`}
      >
        {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
      </button>
    </div>
  );
}
