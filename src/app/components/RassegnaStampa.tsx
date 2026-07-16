import { AnimatedSection } from './AnimatedSection';
import { Button } from './Button';
import { useT } from '../context/LanguageContext';

export function RassegnaStampa() {
  const t = useT();

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl text-[var(--deep-blue)] mb-6">
              {t({ pt: 'Imprensa', it: 'Rassegna stampa', de: "Presseschau" })}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t({
                pt: 'A nossa missão tem sido narrada por algumas das principais vozes do jornalismo italiano.',
                it: 'La nostra missione è stata raccontata da alcune delle principali voci del giornalismo italiano.',
                de: "Über unsere Mission haben einige der wichtigsten Stimmen des italienischen Journalismus berichtet."
              })}
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Corriere della Sera */}
            <article className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-block px-4 py-1.5 bg-[var(--beige)]/60 text-[var(--deep-blue)] text-sm font-semibold rounded-full uppercase tracking-wide">
                    Corriere della Sera
                  </span>
                  <span className="text-sm text-gray-400">16 lug 2024</span>
                </div>
                <h3 className="text-xl font-bold text-[var(--deep-blue)] mb-4">
                  {t({
                    pt: 'Mattarella visita a Fraternidade Franciscana de Salvador de Bahia, onde os meninos de rua são salvos',
                    it: 'Mattarella in visita alla Fraternità Francescana di Salvador de Bahia, dove i meninos de rua vengono salvati',
                    de: "Mattarella zu Besuch bei der Franziskanischen Bruderschaft von Salvador de Bahia, wo die meninos de rua gerettet werden"
                  })}
                </h3>
                <p className="text-base text-gray-600 leading-relaxed mb-6">
                  {t({
                    pt: 'O Corriere della Sera narrou a visita do Presidente Sergio Mattarella à Fraternidade Franciscana de Betânia em Salvador, destacando a missão de acolhimento das crianças de rua.',
                    it: "Il Corriere della Sera ha raccontato la visita del Presidente Sergio Mattarella alla Fraternità Francescana di Betania a Salvador, mettendo in luce la missione di accoglienza dei bambini di strada.",
                    de: "Der Corriere della Sera berichtete über den Besuch von Präsident Sergio Mattarella bei der Franziskanischen Bruderschaft von Betania in Salvador und hob die Aufnahmemission für Straßenkinder hervor."
                  })}
                </p>
                <a
                  href="https://www.corriere.it/esteri/24_luglio_16/mattarella-in-visista-alla-fraternita-francescana-di-salvador-de-bahia-dove-i-meninos-de-rua-vengono-salvati-d2292d5f-6014-4180-a7e3-4dd2bc1c4xlk.shtml"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-[var(--deep-blue)] text-white font-semibold rounded-xl hover:bg-[#4d6374] transition-all duration-300 shadow-md hover:shadow-lg text-sm"
                >
                  {t({ pt: 'Leia a matéria', it: "Leggi l'articolo", de: "Artikel lesen" })}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </article>

            {/* Sky TG24 */}
            <article className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-block px-4 py-1.5 bg-[var(--warm-orange)]/10 text-[var(--warm-orange)] text-sm font-semibold rounded-full uppercase tracking-wide">
                    Sky TG24
                  </span>
                  <span className="text-sm text-gray-400">16 set 2022</span>
                </div>
                <h3 className="text-xl font-bold text-[var(--deep-blue)] mb-4">
                  {t({
                    pt: 'Salvador de Bahia, inaugurado o primeiro convento da Fraternidade Franciscana de Betânia',
                    it: 'Salvador de Bahia, inaugurato il primo convento della Fraternità Francescana di Betania',
                    de: "Salvador de Bahia: Einweihung des ersten Konvents der Franziskanischen Bruderschaft von Betania"
                  })}
                </h3>
                <p className="text-base text-gray-600 leading-relaxed mb-6">
                  {t({
                    pt: 'Sky TG24 narrou a inauguração do convento em São Cristóvão, projetado com arquitetura sustentável pelo estúdio romano Mixtura: ventilação natural, painéis fotovoltaicos e captação de água da chuva.',
                    it: "Sky TG24 ha raccontato l'inaugurazione del convento a São Cristóvão, progettato con architettura sostenibile dallo studio romano Mixtura: ventilazione naturale, pannelli fotovoltaici e raccolta dell'acqua piovana.",
                    de: "Sky TG24 berichtete über die Einweihung des Konvents in São Cristóvão, der vom römischen Studio Mixtura nach den Prinzipien nachhaltiger Architektur entworfen wurde: natürliche Belüftung, Photovoltaikanlagen und Regenwassersammlung."
                  })}
                </p>
                <a
                  href="https://tg24.sky.it/lifestyle/2022/09/16/favelas-brasile-progetto"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-[var(--warm-orange)] text-white font-semibold rounded-xl hover:bg-[var(--warm-orange-light)] transition-all duration-300 shadow-md hover:shadow-lg text-sm"
                >
                  {t({ pt: 'Leia a matéria', it: "Leggi l'articolo", de: "Artikel lesen" })}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </article>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <div className="text-center">
            <Button variant="secondary" to="/riconoscimenti-istituzionali#rassegna-stampa">
              {t({ pt: 'Veja todos os artigos', it: 'Vedi tutti gli articoli', de: "Alle Artikel ansehen" })}
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
