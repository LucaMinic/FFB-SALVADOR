import { Button } from './Button';
import { AnimatedSection } from './AnimatedSection';
import { useT } from '../context/LanguageContext';
import heroImg from '../../imports/21.jpeg';
import placeholderImg from '../../imports/19.jpeg';
import valentinaVideo from '../../imports/Aiutiamo.mp4';

interface Initiative {
  title: string;
  description: string;
  raised: string;
  goal: string;
  status: string;
  progress: number;
  image?: string;
  video?: string;
}

export function IniziativePage() {
  const t = useT();
  const initiatives: Initiative[] = [
    {
      title: t({ pt: 'Ajudamos Valentina – Salvador de Bahia', it: 'Aiutiamo Valentina – Salvador de Bahia', de: "Wir helfen Valentina – Salvador de Bahia", en: "Let's Help Valentina – Salvador de Bahia" }),
      description: t({ pt: 'Valentina é uma menina de um ano que frequenta a nossa creche desde quando tinha 5 meses. Tem dois irmãos de 12 e 10 anos e uma irmãzinha de 7 anos que recentemente concluiu o percurso na creche. A mãe Vania e o pai sustentam-se fazendo alguns trabalhos ocasionais e habitam numa pequena casa perto da floresta não muito distante da nossa Fraternidade de Salvador de Bahia.', it: 'Valentina è una bambina di un anno che frequenta il nostro asilo da quando aveva 5 mesi. Ha due fratelli di 12 e 10 anni e una sorellina di 7 anni che ha da poco concluso il percorso alla creche. La mamma Vania e il papà si mantengono facendo alcuni lavori saltuari e abitano in una piccola casa nei pressi della foresta non molto distante dalla nostra Fraternità di Salvador de Bahia.', de: "Valentina ist ein einjähriges Mädchen, das seit ihrem fünften Lebensmonat unsere Kita besucht. Sie hat zwei Brüder im Alter von 12 und 10 Jahren und eine kleine Schwester von 7 Jahren, die die Kita vor Kurzem abgeschlossen hat. Ihre Mutter Vania und ihr Vater bestreiten ihren Lebensunterhalt mit gelegentlichen Gelegenheitsjobs und wohnen in einem kleinen Haus in der Nähe des Waldes, nicht weit von unserer Bruderschaft in Salvador de Bahia entfernt.", en: "Valentina is a one-year-old girl who has attended our nursery school since she was 5 months old. She has two brothers, aged 12 and 10, and a little sister of 7 who has recently finished her time at the creche. Her mother Vania and her father get by doing occasional jobs and live in a small house near the forest, not far from our Fraternity in Salvador de Bahia." }),
      raised: '€1.770',
      goal: '€1.000',
      status: t({ pt: 'Concluída', it: 'Conclusa', de: "Abgeschlossen", en: "Completed" }),
      progress: 177,
      video: valentinaVideo
    }
  ];

  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt={t({ pt: 'Iniciativas', it: 'Iniziative', de: "Initiativen", en: "Initiatives" })}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <AnimatedSection>
            <h1 className="text-5xl md:text-6xl mb-6">
              {t({ pt: 'Iniciativas', it: 'Iniziative', de: "Initiativen", en: "Initiatives" })}
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-xl md:text-2xl mb-10 leading-relaxed max-w-3xl mx-auto">
              {t({ pt: 'Projetos concretos para apoiar o Centro Nossa Senhora Aparecida e as suas crianças.', it: 'Progetti concreti per sostenere il Centro Nossa Senhora Aparecida e i suoi bambini.', de: "Konkrete Projekte zur Unterstützung des Centro Nossa Senhora Aparecida und seiner Kinder.", en: "Concrete projects to support the Centro Nossa Senhora Aparecida and its children." })}
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" to="/dona-ora" className="text-lg px-8 py-4">
                {t({ pt: 'Doar agora', it: 'Dona ora', de: "Jetzt spenden", en: "Donate now" })}
              </Button>
              <Button variant="secondary" href="#intro-section" className="text-lg px-8 py-4 bg-white/10 backdrop-blur-sm border-white hover:bg-white/20">
                {t({ pt: 'Conheça as Iniciativas', it: 'Scopri le Iniziative', de: "Entdecken Sie die Initiativen", en: "Discover the Initiatives" })}
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* INTRO */}
      <section id="intro-section" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl text-[var(--deep-blue)] mb-8">
              {t({ pt: 'Apoie um projeto concreto', it: 'Sostieni un progetto concreto', de: "Unterstützen Sie ein konkretes Projekt", en: "Support a concrete project" })}
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="text-xl text-gray-700 leading-relaxed">
              {t({ pt: "Cada iniciativa representa uma necessidade real e uma oportunidade concreta de fazer a diferença na vida das crianças e das famílias do Centro.", it: "Ogni iniziativa rappresenta un bisogno reale e un'opportunità concreta di fare la differenza nella vita dei bambini e delle famiglie del Centro.", de: "Jede Initiative steht für einen realen Bedarf und eine konkrete Gelegenheit, einen Unterschied im Leben der Kinder und Familien des Zentrums zu machen.", en: "Every initiative represents a real need and a concrete opportunity to make a difference in the lives of the Centre's children and families." })}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* INITIATIVE CARDS */}
      <section className="py-20 bg-gradient-to-b from-[#f8f9fb] to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {initiatives.map((initiative, index) => (
              <AnimatedSection key={index} delay={0.1 * index}>
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all h-full flex flex-col">
                  {/* Image or Video */}
                  <div className="relative h-64 overflow-hidden">
                    {initiative.video ? (
                      <video
                        src={initiative.video}
                        className="w-full h-full object-cover"
                        controls
                      />
                    ) : (
                      <img loading="lazy"
                        src={initiative.image}
                        alt={initiative.title}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    {/* Title */}
                    <h3 className="text-2xl text-[var(--deep-blue)] mb-3">
                      {initiative.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {initiative.description}
                    </p>

                    {/* Progress Bar */}
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-600">{t({ pt: 'Progresso', it: 'Progresso', de: "Fortschritt", en: "Progress" })}</span>
                        <span className="text-sm font-medium text-[var(--deep-blue)] bg-[var(--beige)] px-2 py-1 rounded">
                          {initiative.progress}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-[var(--warm-orange)] to-[var(--warm-orange-light)] h-full rounded-full transition-all duration-500"
                          style={{ width: `${Math.min(initiative.progress, 100)}%` }}
                        ></div>
                      </div>
                    </div>

                    {/* Donation Data */}
                    <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b border-gray-200">
                      <div className="text-center">
                        <p className="text-2xl text-[var(--deep-blue)] mb-1">
                          {initiative.raised}
                        </p>
                        <p className="text-sm text-gray-600">{t({ pt: 'Arrecadados', it: 'Raccolti', de: "Gesammelt", en: "Raised" })}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl text-[var(--deep-blue)] mb-1">
                          {initiative.goal}
                        </p>
                        <p className="text-sm text-gray-600">{t({ pt: 'Objetivo', it: 'Obiettivo', de: "Ziel", en: "Goal" })}</p>
                      </div>
                      <div className="text-center">
                        <p className={`text-lg mb-1 ${
                          initiative.status === t({ pt: 'Concluída', it: 'Conclusa', de: "Abgeschlossen", en: "Completed" }) ? 'text-green-600' :
                          initiative.status === t({ pt: 'Em curso', it: 'In corso', de: "Laufend", en: "In progress" }) ? 'text-[var(--warm-orange)]' :
                          'text-gray-500'
                        }`}>
                          {initiative.status}
                        </p>
                        <p className="text-sm text-gray-600">{t({ pt: 'Estado', it: 'Stato', de: "Status", en: "Status" })}</p>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <div className="mt-auto">
                      <Button
                        variant={initiative.status === t({ pt: 'Em curso', it: 'In corso', de: "Laufend", en: "In progress" }) ? 'primary' : 'secondary'}
                        to={
                          initiative.title === t({ pt: 'Ajudamos Valentina – Salvador de Bahia', it: 'Aiutiamo Valentina – Salvador de Bahia', de: "Wir helfen Valentina – Salvador de Bahia", en: "Let's Help Valentina – Salvador de Bahia" })
                            ? '/aiutiamo-valentina'
                            : initiative.status === t({ pt: 'Em curso', it: 'In corso', de: "Laufend", en: "In progress" })
                            ? '/dona-ora'
                            : '#'
                        }
                        className="w-full"
                      >
                        {initiative.status === t({ pt: 'Em curso', it: 'In corso', de: "Laufend", en: "In progress" }) ? t({ pt: 'Doar agora', it: 'Dona ora', de: "Jetzt spenden", en: "Donate now" }) : t({ pt: 'Saiba mais', it: "Scopri l'iniziativa", de: "Entdecken Sie die Initiative", en: "Discover the initiative" })}
                      </Button>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINALE */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl text-[var(--deep-blue)] mb-8">
              {t({ pt: 'Cada contribuição faz a diferença', it: 'Ogni contributo fa la differenza', de: "Jeder Beitrag zählt", en: "Every contribution makes a difference" })}
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="text-xl text-gray-700 leading-relaxed mb-10">
              {t({ pt: 'Até um pequeno gesto pode mudar a vida de uma criança e da sua família.', it: 'Anche un piccolo gesto può cambiare la vita di un bambino e della sua famiglia.', de: "Auch eine kleine Geste kann das Leben eines Kindes und seiner Familie verändern.", en: "Even a small gesture can change the life of a child and their family." })}
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" to="/dona-ora" className="text-lg px-8 py-3">
                {t({ pt: 'Doar agora', it: 'Dona ora', de: "Jetzt spenden", en: "Donate now" })}
              </Button>
              <Button variant="secondary" to="/contatti" className="text-lg px-8 py-3">
                {t({ pt: 'Contate-nos', it: 'Contattaci', de: "Kontaktieren Sie uns", en: "Contact us" })}
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
