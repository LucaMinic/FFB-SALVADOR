import { Button } from './Button';
import { AnimatedSection } from './AnimatedSection';
import { ChevronDown } from 'lucide-react';
import { useT } from '../context/LanguageContext';
import heroImg from '../../imports/21.jpeg';
import finalCtaImg from '../../imports/19.jpeg';

export function BenefattoriPage() {
  const t = useT();
  return (
    <div className="bg-white">
      {/* SECTION 1 - HERO */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Centro Nossa Senhora Aparecida"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--warm-orange)]/60 via-[var(--warm-orange)]/40 to-[var(--warm-orange)]/60"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <AnimatedSection>
            <h1 className="text-5xl md:text-6xl mb-6">
              {t({ pt: 'Obrigado a quem caminha conosco', it: 'Grazie a chi cammina con noi', de: "Danke an alle, die mit uns gehen" })}
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-xl md:text-2xl mb-10 leading-relaxed max-w-3xl mx-auto">
              {t({ pt: 'Cada gesto de apoio contribui concretamente para o crescimento do Centro Nossa Senhora Aparecida e dos seus projetos educativos.', it: 'Ogni gesto di sostegno contribuisce concretamente alla crescita del Centro Nossa Senhora Aparecida e dei suoi progetti educativi.', de: "Jede Geste der Unterstützung trägt konkret zum Wachstum des Centro Nossa Senhora Aparecida und seiner Bildungsprojekte bei." })}
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" href="#intro-section" className="text-lg px-8 py-4">
                {t({ pt: 'Torne-se benfeitor', it: 'Diventa benefattore', de: "Werden Sie Förderer" })}
              </Button>
              <Button variant="secondary" to="/dona-ora" className="text-lg px-8 py-4 bg-white/10 backdrop-blur-sm border-white hover:bg-white/20">
                {t({ pt: 'Doar agora', it: 'Dona ora', de: "Jetzt spenden" })}
              </Button>
            </div>
          </AnimatedSection>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-white/80" />
          </div>
        </div>
      </section>

      {/* SECTION 2 - INTRO GRATITUDE */}
      <section id="intro-section" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl text-[var(--deep-blue)] text-center mb-10">
              {t({ pt: 'Uma rede de pessoas e realidades que torna tudo isso possível', it: 'Una rete di persone e realtà che rende possibile tutto questo', de: "Ein Netzwerk von Menschen und Organisationen, das all das möglich macht" })}
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="space-y-6 text-xl text-gray-700 leading-relaxed text-center">
              <p>
                {t({ pt: 'Ao longo dos anos, empresas, associações, fundações, voluntários e pessoas individuais escolheram apoiar o Centro Nossa Senhora Aparecida.', it: 'Negli anni, aziende, associazioni, fondazioni, volontari e singole persone hanno scelto di sostenere il Centro Nossa Senhora Aparecida.', de: "Im Laufe der Jahre haben sich Unternehmen, Vereine, Stiftungen, Freiwillige und Einzelpersonen dafür entschieden, das Centro Nossa Senhora Aparecida zu unterstützen." })}
              </p>
              <p>
                {t({ pt: 'Cada contribuição, grande ou pequena, ajudou a construir espaços, apoiar atividades educativas, acompanhar famílias e criar novas possibilidades para tantas crianças.', it: 'Ogni contributo, grande o piccolo, ha aiutato a costruire spazi, sostenere attività educative, accompagnare famiglie e creare nuove possibilità per tanti bambini.', de: "Jeder Beitrag, ob groß oder klein, hat geholfen, Räume zu bauen, Bildungsaktivitäten zu unterstützen, Familien zu begleiten und neue Möglichkeiten für viele Kinder zu schaffen." })}
              </p>
              <p className="text-[var(--deep-blue)] italic">
                {t({ pt: 'Esta página é um sinal de gratidão para quem continua a acreditar neste caminho.', it: 'Questa pagina è un segno di gratitudine verso chi continua a credere in questo cammino.', de: "Diese Seite ist ein Zeichen der Dankbarkeit an alle, die weiterhin an diesen Weg glauben." })}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 3 - PARTNER GRID */}
      <section className="py-20 bg-gradient-to-b from-[#f8f9fb] to-white">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl text-[var(--deep-blue)] text-center mb-16">
              {t({ pt: 'Quem apoia o projeto', it: 'Chi sostiene il progetto', de: "Wer das Projekt unterstützt" })}
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-16">
            {[
              'Fondazione Aurora',
              'Impresa Solidale',
              'Comunità Insieme',
              'Studio Verde',
              'Cooperativa Horizonte',
              'Gruppo Armonia',
              'Associazione Vita',
              'Fondazione Futuro'
            ].map((name, index) => (
              <AnimatedSection key={index} delay={0.05 * index}>
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all hover:scale-105 flex items-center justify-center h-32 grayscale hover:grayscale-0">
                  <p className="text-center text-gray-600 font-medium">{name}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.4}>
            <div className="bg-gradient-to-br from-[var(--beige)] to-white p-10 rounded-2xl text-center border-2 border-dashed border-[var(--deep-blue)]/20">
              <p className="text-2xl text-gray-700 mb-6 italic">
                {t({ pt: 'O seu logo poderia estar aqui.', it: 'Il tuo logo potrebbe essere qui.', de: "Ihr Logo könnte hier stehen." })}
              </p>
              <Button variant="primary" to="/dona-ora">
                {t({ pt: 'Descubra como apoiar o projeto', it: 'Scopri come sostenere il progetto', de: "Erfahren Sie, wie Sie das Projekt unterstützen können" })}
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 4 - TESTIMONIANZE */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl text-[var(--deep-blue)] text-center mb-16">
              {t({ pt: 'Palavras de quem escolheu ajudar', it: 'Parole di chi ha scelto di aiutare', de: "Worte von Menschen, die sich entschieden haben zu helfen" })}
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                quote: t({ pt: 'Escolhemos apoiar o Centro porque aqui encontramos uma presença concreta e autêntica ao lado das crianças e das famílias.', it: 'Abbiamo scelto di sostenere il Centro perché qui abbiamo trovato una presenza concreta e autentica accanto ai bambini e alle famiglie.', de: "Wir haben uns entschieden, das Zentrum zu unterstützen, weil wir hier eine konkrete und authentische Präsenz an der Seite der Kinder und Familien gefunden haben." }),
                author: t({ pt: 'Empresa parceira', it: 'Azienda partner', de: "Partnerunternehmen" })
              },
              {
                quote: t({ pt: 'Não é apenas um projeto educativo, mas uma comunidade viva que constrói relações e futuro.', it: 'Non è solo un progetto educativo, ma una comunità viva che costruisce relazioni e futuro.', de: "Es ist nicht nur ein Bildungsprojekt, sondern eine lebendige Gemeinschaft, die Beziehungen und Zukunft aufbaut." }),
                author: t({ pt: 'Benfeitor', it: 'Benefattore', de: "Förderer" })
              },
              {
                quote: t({ pt: 'Cada vez que visitamos o Centro, sentimos que o nosso apoio tem um impacto real na vida de tantas crianças.', it: 'Ogni volta che visitiamo il Centro, sentiamo che il nostro sostegno ha un impatto reale nella vita di tanti bambini.', de: "Jedes Mal, wenn wir das Zentrum besuchen, spüren wir, dass unsere Unterstützung einen echten Einfluss auf das Leben vieler Kinder hat." }),
                author: t({ pt: 'Fundação apoiadora', it: 'Fondazione sostenitrice', de: "Fördernde Stiftung" })
              },
              {
                quote: t({ pt: 'Apoiar este projeto significa fazer parte de algo que vai além da simples doação: é partilha de valores e esperança.', it: 'Sostenere questo progetto significa essere parte di qualcosa che va oltre la semplice donazione: è condivisione di valori e speranza.', de: "Dieses Projekt zu unterstützen bedeutet, Teil von etwas zu sein, das über die reine Spende hinausgeht: Es bedeutet, Werte und Hoffnung zu teilen." }),
                author: t({ pt: 'Voluntário', it: 'Volontario', de: "Freiwilliger" })
              }
            ].map((testimonial, index) => (
              <AnimatedSection key={index} delay={0.1 * index}>
                <div className="bg-gradient-to-br from-[var(--beige)] to-white p-8 rounded-2xl shadow-lg h-full flex flex-col">
                  <div className="flex-1">
                    <p className="text-xl text-gray-700 leading-relaxed italic mb-6">
                      "{testimonial.quote}"
                    </p>
                  </div>
                  <p className="text-[var(--deep-blue)] font-medium">
                    — {testimonial.author}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 - IMPATTO CONDIVISO */}
      <section className="py-20 bg-gradient-to-b from-[#f8f9fb] to-white">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl text-[var(--deep-blue)] text-center mb-10">
              {t({ pt: 'Uma ajuda que gera impacto', it: 'Un aiuto che genera impatto', de: "Eine Hilfe, die etwas bewirkt" })}
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="text-xl text-gray-700 text-center mb-16 leading-relaxed">
              {t({ pt: 'Graças ao apoio recebido é possível:', it: 'Grazie al sostegno ricevuto è possibile:', de: "Dank der erhaltenen Unterstützung ist es möglich:" })}
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {[
              { number: '100+', label: t({ pt: 'crianças acolhidas', it: 'bambini accolti', de: "aufgenommene Kinder" }) },
              { number: '5', label: t({ pt: 'refeições cotidianas', it: 'pasti quotidiani', de: "tägliche Mahlzeiten" }) },
              { number: '1', label: t({ pt: 'nova escola em construção', it: 'nuova scuola in costruzione', de: "neue Schule im Bau" }) },
              { number: '365', label: t({ pt: 'dias de apoio contínuo às famílias', it: 'giorni di sostegno continuo alle famiglie', de: "Tage kontinuierlicher Unterstützung für Familien" }) }
            ].map((item, index) => (
              <AnimatedSection key={index} delay={0.1 * index}>
                <div className="text-center p-8 bg-gradient-to-br from-white to-[var(--beige)] rounded-2xl shadow-lg">
                  <div className="text-5xl md:text-6xl text-[var(--deep-blue)] mb-4">
                    {item.number}
                  </div>
                  <p className="text-lg text-gray-700">{item.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.4}>
            <div className="max-w-3xl mx-auto space-y-3">
              {[
                t({ pt: 'acolher todos os dias mais de 100 crianças', it: 'accogliere ogni giorno oltre 100 bambini', de: "täglich über 100 Kinder aufzunehmen" }),
                t({ pt: 'garantir refeições cotidianas', it: 'garantire pasti quotidiani', de: "tägliche Mahlzeiten zu gewährleisten" }),
                t({ pt: 'apoiar famílias em dificuldade', it: 'sostenere famiglie in difficoltà', de: "Familien in Schwierigkeiten zu unterstützen" }),
                t({ pt: 'desenvolver novos projetos educativos', it: 'sviluppare nuovi progetti educativi', de: "neue Bildungsprojekte zu entwickeln" }),
                t({ pt: 'construir a nova escola', it: 'costruire la nuova scuola', de: "die neue Schule zu bauen" })
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 text-lg text-gray-700">
                  <span className="w-2 h-2 bg-[var(--warm-orange)] rounded-full flex-shrink-0"></span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 6 - DIVENTA BENEFATTORE */}
      <section id="diventa-benefattore" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl text-[var(--deep-blue)] mb-8">
              {t({ pt: 'Faça parte deste caminho', it: 'Diventa parte di questo cammino', de: "Werden Sie Teil dieses Weges" })}
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="space-y-6 text-xl text-gray-700 leading-relaxed mb-10">
              <p>
                {t({ pt: 'Também empresas, associações e pessoas individuais podem contribuir concretamente para o crescimento do Centro Nossa Senhora Aparecida.', it: 'Anche aziende, associazioni e singole persone possono contribuire concretamente alla crescita del Centro Nossa Senhora Aparecida.', de: "Auch Unternehmen, Vereine und Einzelpersonen können konkret zum Wachstum des Centro Nossa Senhora Aparecida beitragen." })}
              </p>
              <p>
                {t({ pt: 'Cada apoio torna-se parte de uma história partilhada feita de educação, relações e futuro.', it: 'Ogni sostegno diventa parte di una storia condivisa fatta di educazione, relazioni e futuro.', de: "Jede Unterstützung wird Teil einer gemeinsamen Geschichte aus Bildung, Beziehungen und Zukunft." })}
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" to="/contatti" className="text-lg px-8 py-3">
                {t({ pt: 'Contate-nos', it: 'Contattaci', de: "Kontaktieren Sie uns" })}
              </Button>
              <Button variant="secondary" to="/dona-ora" className="text-lg px-8 py-3">
                {t({ pt: 'Doar agora', it: 'Dona ora', de: "Jetzt spenden" })}
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 7 - RICONOSCIMENTO E TRASPARENZA */}
      <section className="py-20 bg-gradient-to-b from-[#f8f9fb] to-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl text-[var(--deep-blue)] mb-8">
              {t({ pt: 'Uma relação fundada na confiança', it: 'Un rapporto fondato sulla fiducia', de: "Eine auf Vertrauen gegründete Beziehung" })}
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="space-y-6 text-xl text-gray-700 leading-relaxed mb-8">
              <p>
                {t({ pt: 'Cada contribuição recebida é acolhida com gratidão e utilizada para apoiar concretamente as atividades educativas e sociais do Centro.', it: 'Ogni contributo ricevuto viene accolto con gratitudine e utilizzato per sostenere concretamente le attività educative e sociali del Centro.', de: "Jeder erhaltene Beitrag wird mit Dankbarkeit angenommen und dient dazu, die Bildungs- und Sozialaktivitäten des Zentrums konkret zu unterstützen." })}
              </p>
              <p>
                {t({ pt: 'A Fundação Betania ONLUS promove uma relação transparente e contínua com todos os benfeitores e apoiadores.', it: 'La Fundação Betania ONLUS promuove un rapporto trasparente e continuativo con tutti i benefattori e sostenitori.', de: "Die Fundação Betania ONLUS pflegt eine transparente und kontinuierliche Beziehung zu allen Förderern und Unterstützern." })}
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <Button variant="secondary" to="/trasparenza" className="text-base px-6 py-2">
              {t({ pt: 'Ir à transparência', it: 'Vai alla trasparenza', de: "Zur Transparenz" })}
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 8 - CTA FINALE */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img loading="lazy"
            src={finalCtaImg}
            alt="Centro Nossa Senhora Aparecida"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl mb-6">
              {t({ pt: 'Obrigado por fazer parte desta história', it: 'Grazie per essere parte di questa storia', de: "Danke, dass Sie Teil dieser Geschichte sind" })}
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-xl md:text-2xl mb-10 leading-relaxed">
              {t({ pt: 'Cada gesto de apoio torna possível continuar este caminho ao lado das crianças e das famílias.', it: 'Ogni gesto di sostegno rende possibile continuare questo cammino accanto ai bambini e alle famiglie.', de: "Jede Geste der Unterstützung macht es möglich, diesen Weg an der Seite der Kinder und Familien fortzusetzen." })}
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" href="#diventa-benefattore" className="text-lg px-8 py-4">
                {t({ pt: 'Torne-se benfeitor', it: 'Diventa benefattore', de: "Werden Sie Förderer" })}
              </Button>
              <Button variant="secondary" to="/dona-ora" className="text-lg px-8 py-4 bg-white/10 backdrop-blur-sm border-white hover:bg-white/20">
                {t({ pt: 'Doar agora', it: 'Dona ora', de: "Jetzt spenden" })}
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
