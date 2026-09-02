import { Button } from './Button';
import asiloChildrenImage from '../../imports/3.jpeg';
import childrenMealImage from '../../imports/17.jpeg';
import { AnimatedSection, AnimatedImage } from './AnimatedSection';
import { useT } from '../context/LanguageContext';

export function Asilo() {
  const t = useT();

  return (
    <section id="asilo" className="py-16 lg:py-20 bg-gradient-to-b from-white to-[var(--beige)]">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl text-[var(--deep-blue)] mb-6">
              {t({ pt: 'Creche e Pré-escola', it: "L'Asilo", de: "Die Kita", en: "The Nursery School" })}
            </h2>

            <h3 className="mb-8 text-3xl text-gray-700 font-light">{t({ pt: 'Um lugar para crescer todos os dias', it: 'Un luogo dove crescere ogni giorno', de: "Ein Ort zum täglichen Wachsen", en: "A place to grow every day" })}</h3>

            <p className="text-lg text-gray-800 leading-relaxed max-w-3xl mx-auto mb-6">
              {t({
                pt: 'Nossa creche acolhe até 120 crianças, dos 4 meses aos 5 anos, oferecendo um ambiente seguro, educativo e completamente gratuito.',
                it: 'Il nostro asilo accoglie fino a 120 bambini, dai 4 mesi ai 5 anni, offrendo un ambiente sicuro, educativo e completamente gratuito.',
                de: "Unsere Kita nimmt bis zu 120 Kinder im Alter von 4 Monaten bis 5 Jahren auf und bietet ein sicheres, pädagogisches und vollständig kostenloses Umfeld.",
                en: "Our nursery school welcomes up to 120 children, from 4 months to 5 years old, offering a safe, educational and completely free environment."
              })}
            </p>

            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              {t({
                pt: 'Todos os dias as crianças recebem cinco refeições, cuidado, educação e atenção. Esse serviço também permite às famílias, especialmente às mães, trabalhar e construir um futuro mais estável.',
                it: 'Ogni giorno i bambini ricevono cinque pasti, cura, educazione e attenzione. Questo servizio permette anche alle famiglie, soprattutto alle madri, di lavorare e costruire un futuro più stabile.',
                de: "Jeden Tag erhalten die Kinder fünf Mahlzeiten, Fürsorge, Bildung und Aufmerksamkeit. Dieses Angebot ermöglicht es auch den Familien, insbesondere den Müttern, zu arbeiten und sich eine stabilere Zukunft aufzubauen.",
                en: "Every day the children receive five meals, care, education and attention. This service also allows families, especially mothers, to work and build a more stable future."
              })}
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <AnimatedImage>
            <div className="group overflow-hidden rounded-[2rem] shadow-[0_10px_40px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)] transition-all duration-500">
              <img loading="lazy"
                src={asiloChildrenImage}
                alt={t({ pt: 'Crianças da creche', it: "Bambini dell'asilo", de: "Kinder der Kita", en: "Children at the nursery school" })}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </AnimatedImage>
          <AnimatedImage delay={0.15}>
            <div className="group overflow-hidden rounded-[2rem] shadow-[0_10px_40px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)] transition-all duration-500">
              <img loading="lazy"
                src={childrenMealImage}
                alt={t({ pt: 'Atividade de culinária', it: 'Attività di cucina', de: "Kochaktivität", en: "Cooking activity" })}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </AnimatedImage>
        </div>

        <AnimatedSection delay={0.3}>
          <div className="text-center">
            <Button variant="secondary" to="/asilo">{t({ pt: 'Conheça a creche', it: "Scopri l'asilo", de: "Entdecken Sie die Kita", en: "Discover the nursery school" })}</Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
