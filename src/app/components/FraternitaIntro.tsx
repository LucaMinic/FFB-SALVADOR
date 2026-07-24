import { Button } from './Button';
import fraternitaImg from '../../imports/foto_convertita.jpg';
import { AnimatedSection, AnimatedImage } from './AnimatedSection';
import { useT } from '../context/LanguageContext';

export function FraternitaIntro() {
  const t = useT();

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <AnimatedSection delay={0.2}>
            <h2 className="text-4xl md:text-5xl text-[var(--deep-blue)] mb-8">
              {t({
                pt: 'Fraternidade Franciscana de Betânia',
                it: 'Fraternità Francescana di Betania',
                de: "Franziskanische Bruderschaft von Betania"
              })}
            </h2>

            <p className="text-lg text-gray-800 leading-relaxed mb-10 font-light">
              {t({
                pt: "Na origem da experiência da Fundação Betania ONLUS e do Centro Nossa Senhora Aparecida está a Fraternità Francescana di Betania.",
                it: "Alla radice dell'esperienza della Fundação Betania ONLUS e del Centro Nossa Senhora Aparecida c'è la Fraternità Francescana di Betania.",
                de: "Am Ursprung der Erfahrung der Fundação Betania ONLUS und des Centro Nossa Senhora Aparecida steht die Franziskanische Bruderschaft von Betania."
              })}
            </p>

            <p className="text-lg text-gray-800 leading-relaxed mb-10 font-light">
              {t({
                pt: 'Por meio da presença missionária, da partilha da vida cotidiana e do serviço às comunidades mais vulneráveis, a Fraternità acompanha há anos um caminho humano, educativo e espiritual que continua a gerar acolhimento, relação e esperança.',
                it: 'Attraverso la presenza missionaria, la condivisione della vita quotidiana e il servizio alle comunità più vulnerabili, la Fraternità accompagna da anni un cammino umano, educativo e spirituale che continua a generare accoglienza, relazione e speranza.',
                de: "Durch die missionarische Präsenz, das Teilen des Alltags und den Dienst an den verletzlichsten Gemeinschaften begleitet die Bruderschaft seit Jahren einen menschlichen, pädagogischen und geistlichen Weg, der weiterhin Aufnahme, Beziehung und Hoffnung schenkt."
              })}
            </p>

            <div className="text-center md:text-left">
              <Button variant="secondary" to="/la-fraternita">
                {t({ pt: 'Conheça a Fraternità', it: 'Scopri la Fraternità', de: "Entdecken Sie die Bruderschaft" })}
              </Button>
            </div>
          </AnimatedSection>

          <AnimatedImage direction="right">
            <div className="rounded-[2rem] shadow-[0_10px_50px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_70px_rgba(0,0,0,0.15)] transition-all duration-500 overflow-hidden">
              <img loading="lazy"
                src={fraternitaImg}
                alt="Fraternità Francescana di Betania"
                className="w-full aspect-[1200/630] md:aspect-auto md:h-96 object-cover"
              />
            </div>
          </AnimatedImage>
        </div>
      </div>
    </section>
  );
}
