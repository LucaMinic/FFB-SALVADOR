import { Button } from './Button';
import fundacaoImg from '../../imports/bambino_al_centro.jpeg';
import { AnimatedSection, AnimatedImage } from './AnimatedSection';
import { useT } from '../context/LanguageContext';

export function FundacaoIntro() {
  const t = useT();

  return (
    <section className="py-24 bg-[var(--beige)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <AnimatedImage>
            <div className="rounded-[2rem] shadow-[0_10px_50px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_70px_rgba(0,0,0,0.15)] transition-all duration-500 overflow-hidden">
              <img loading="lazy"
                src={fundacaoImg}
                alt={t({ pt: 'Criança no Centro Nossa Senhora Aparecida', it: 'Bambino al Centro Nossa Senhora Aparecida', de: "Kind im Centro Nossa Senhora Aparecida", en: "Child at the Centro Nossa Senhora Aparecida" })}
                className="w-full h-96 object-cover"
              />
            </div>
          </AnimatedImage>

          <AnimatedSection delay={0.2} direction="right">
            <h2 className="text-4xl md:text-5xl text-[var(--deep-blue)] mb-8">
              {t({ pt: 'Fundação Betania ONLUS', it: 'Fundação Betania ONLUS', de: "Fundação Betania ONLUS", en: "Fundação Betania ONLUS" })}
            </h2>

            <p className="text-base md:text-xl text-gray-800 leading-relaxed mb-6 font-light">
              {t({
                pt: 'A Fundação Betania ONLUS nasceu do desejo de transformar a proximidade, a educação e o cuidado em uma presença concreta ao lado das pessoas mais vulneráveis.',
                it: 'La Fundação Betania ONLUS è nata dal desiderio di trasformare la prossimità, l\'educazione e la cura in una presenza concreta accanto alle persone più vulnerabili.',
                de: "Die Fundação Betania ONLUS entstand aus dem Wunsch, Nähe, Bildung und Fürsorge in eine konkrete Präsenz an der Seite der schutzbedürftigsten Menschen zu verwandeln.",
                en: "Fundação Betania ONLUS was born from the desire to turn closeness, education and care into a real presence alongside the most vulnerable people."
              })}
            </p>

            <p className="text-base md:text-xl text-gray-800 leading-relaxed mb-6 font-light">
              {t({
                pt: 'Em Salvador da Bahia, esse compromisso se torna realidade através do Centro Nossa Senhora Aparecida, um lugar onde crianças e famílias encontram acolhimento, oportunidades de crescimento e relações que geram esperança.',
                it: 'A Salvador de Bahia, questo impegno diventa realtà attraverso il Centro Nossa Senhora Aparecida, un luogo dove bambini e famiglie trovano accoglienza, opportunità di crescita e relazioni che generano speranza.',
                de: "In Salvador de Bahia wird dieses Engagement durch das Centro Nossa Senhora Aparecida Wirklichkeit — ein Ort, an dem Kinder und Familien Aufnahme, Entwicklungschancen und Beziehungen finden, die Hoffnung schenken.",
                en: "In Salvador de Bahia, this commitment becomes reality through the Centro Nossa Senhora Aparecida, a place where children and families find welcome, opportunities for growth and relationships that generate hope."
              })}
            </p>

            <p className="text-base md:text-xl text-gray-800 leading-relaxed mb-10 font-light">
              {t({
                pt: 'Uma obra inspirada pela experiência da Fraternidade Franciscana de Betânia e sustentada diariamente por uma rede de pessoas que acreditam no valor da educação, da presença e da partilha.',
                it: 'Un\'opera ispirata dall\'esperienza della Fraternità Francescana di Betania e sostenuta ogni giorno da una rete di persone che credono nel valore dell\'educazione, della presenza e della condivisione.',
                de: "Ein Werk, inspiriert von der Erfahrung der Franziskanischen Gemeinschaft von Betania und getragen von einem täglichen Netzwerk von Menschen, die an den Wert von Bildung, Präsenz und Gemeinschaft glauben.",
                en: "A work inspired by the experience of the Franciscan Fraternity of Betania and sustained every day by a network of people who believe in the value of education, presence and sharing."
              })}
            </p>

            <Button variant="secondary" to="/la-fundacao">
              {t({ pt: 'Conheça a Fundação', it: 'Scopri la Fondazione', de: "Entdecken Sie die Stiftung", en: "Discover the Foundation" })}
            </Button>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
