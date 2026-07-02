import { Button } from './Button';
import fraternitaImg from '../../imports/foto_convertita.png';
import { AnimatedSection, AnimatedImage } from './AnimatedSection';
import { useT } from '../context/LanguageContext';

export function FraternitaIntro() {
  const t = useT();

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <AnimatedSection delay={0.2}>
            <h2 className="text-4xl md:text-5xl text-[var(--deep-blue)] mb-8">
              {t({
                pt: 'Fraternidade Franciscana de Betânia',
                it: 'Fraternità Francescana di Betania'
              })}
            </h2>

            <p className="text-lg text-gray-800 leading-relaxed mb-10 font-light">
              {t({
                pt: "Na origem da experiência da Fundação Betania ONLUS e do Centro Nossa Senhora Aparecida está a Fraternità Francescana di Betania.",
                it: "Alla radice dell'esperienza della Fundação Betania ONLUS e del Centro Nossa Senhora Aparecida c'è la Fraternità Francescana di Betania."
              })}
            </p>

            <p className="text-lg text-gray-800 leading-relaxed mb-10 font-light">
              {t({
                pt: 'Por meio da presença missionária, da partilha da vida cotidiana e do serviço às comunidades mais vulneráveis, a Fraternità acompanha há anos um caminho humano, educativo e espiritual que continua a gerar acolhimento, relação e esperança.',
                it: 'Attraverso la presenza missionaria, la condivisione della vita quotidiana e il servizio alle comunità più vulnerabili, la Fraternità accompagna da anni un cammino umano, educativo e spirituale che continua a generare accoglienza, relazione e speranza.'
              })}
            </p>

            <Button variant="secondary" to="/la-fraternita">
              {t({ pt: 'Conheça a Fraternità', it: 'Scopri la Fraternità' })}
            </Button>
          </AnimatedSection>

          <AnimatedImage direction="right">
            <div className="rounded-[2rem] shadow-[0_10px_50px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_70px_rgba(0,0,0,0.15)] transition-all duration-500 overflow-hidden">
              <img
                src={fraternitaImg}
                alt="Fraternità Francescana di Betania"
                className="w-full h-96 object-cover"
              />
            </div>
          </AnimatedImage>
        </div>
      </div>
    </section>
  );
}
