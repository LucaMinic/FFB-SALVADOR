import { useEffect, useRef, useState } from 'react';
import { AnimatedSection } from './AnimatedSection';
import { useT } from '../context/LanguageContext';

interface NumberCardProps {
  number: string;
  label: string;
  delay: number;
}

function NumberCard({ number, label, delay }: NumberCardProps) {
  const [displayValue, setDisplayValue] = useState('0');
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const timer = setTimeout(() => {
      // Handle different number formats
      if (number.includes('+')) {
        const targetNum = parseInt(number.replace('+', ''));
        animateNumber(0, targetNum, 1500, (val) => setDisplayValue(val + '+'));
      } else if (number.includes('%')) {
        const targetNum = parseInt(number.replace('%', ''));
        animateNumber(0, targetNum, 1500, (val) => setDisplayValue(val + '%'));
      } else if (number.includes('–')) {
        // For range like "0–6", just show it directly
        setDisplayValue(number);
      } else if (number === '1') {
        setDisplayValue(number);
      } else {
        const targetNum = parseInt(number);
        animateNumber(0, targetNum, 1500, setDisplayValue);
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [isVisible, number, delay]);

  const animateNumber = (
    start: number,
    end: number,
    duration: number,
    callback: (value: string) => void
  ) => {
    const startTime = Date.now();
    const range = end - start;

    const updateNumber = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const current = Math.floor(start + range * easeOutQuart);

      callback(current.toString());

      if (progress < 1) {
        requestAnimationFrame(updateNumber);
      }
    };

    requestAnimationFrame(updateNumber);
  };

  return (
    <div ref={elementRef} className="text-center">
      <div className="text-5xl md:text-6xl font-bold text-[var(--deep-blue)] mb-4">
        {displayValue}
      </div>
      <p className="text-lg text-gray-700">{label}</p>
    </div>
  );
}

export function ImpactNumbers() {
  const t = useT();

  const items = [
    {
      number: '120+',
      label: t({ pt: 'Crianças acolhidas todos os dias em nossa casa', it: 'Bambini accolti ogni giorno nella nostra casa' })
    },
    {
      number: '5',
      label: t({ pt: 'Refeições quentes garantidas todos os dias', it: 'Pasti caldi garantiti ogni giorno' })
    },
    {
      number: '100%',
      label: t({ pt: 'Acesso completamente gratuito para cada família', it: 'Accesso completamente gratuito per ogni famiglia' })
    },
  ];

  return (
    <section className="py-14 lg:py-16 bg-gradient-to-b from-[var(--beige)] to-white">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl text-[var(--deep-blue)] mb-6">
              {t({ pt: 'Este é o impacto concreto do nosso trabalho', it: "Ecco l'impatto concreto del nostro lavoro" })}
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              {t({
                pt: 'Todos os dias, pequenos gestos constroem uma mudança real na vida das crianças e de suas famílias.',
                it: 'Ogni giorno, piccoli gesti costruiscono un cambiamento reale nella vita dei bambini e delle loro famiglie.'
              })}
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {items.map((item, index) => (
            <NumberCard
              key={index}
              number={item.number}
              label={item.label}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
