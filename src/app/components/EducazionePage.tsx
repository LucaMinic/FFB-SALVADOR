import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';
import { useT } from '../context/LanguageContext';
import { AnimatedSection } from './AnimatedSection';
import { Button } from './Button';
import heroImg from '../../imports/3-1.jpeg';
import img1 from '../../imports/14-1.jpeg';
import img2 from '../../imports/7.jpeg';
import img3 from '../../imports/4.jpeg';
import img4 from '../../imports/32.jpeg';

export function EducazionePage() {
  const t = useT();

  return (
    <>
      {/* HERO */}
      <section
        className="relative flex flex-col items-center justify-center text-center overflow-hidden"
        style={{ minHeight: 'clamp(70vh, 85vh, 100vh)' }}
      >
        <img src={heroImg} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col items-center gap-8">
          <AnimatedSection delay={0.1}>
            <p className="text-white/70 uppercase tracking-[0.2em] text-sm font-medium mb-4">
              Centro Nossa Senhora Aparecida
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              {t({ pt: 'Educação', it: 'Educazione', de: "Bildung", en: "Education" })}
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              {t({
                pt: 'Educar é muito mais do que transmitir conhecimentos. É acompanhar cada criança na descoberta de si mesma, do mundo e das suas possibilidades. No Centro Nossa Senhora Aparecida, a educação é uma missão vivida cada dia com dedicação e amor.',
                it: "Educare è molto più che trasmettere conoscenze. È accompagnare ogni bambino nella scoperta di sé, del mondo e delle proprie possibilità. Al Centro Nossa Senhora Aparecida, l'educazione è una missione vissuta ogni giorno con dedizione e amore.",
                de: "Bildung bedeutet weit mehr, als Wissen zu vermitteln. Es bedeutet, jedes Kind auf seinem Weg zur Entdeckung seiner selbst, der Welt und seiner Möglichkeiten zu begleiten. Im Centro Nossa Senhora Aparecida ist Bildung eine Berufung, die jeden Tag mit Hingabe und Liebe gelebt wird.",
                en: "Educating is much more than passing on knowledge. It means accompanying every child in the discovery of themselves, the world and their own possibilities. At the Centro Nossa Senhora Aparecida, education is a mission lived every day with dedication and love.",
              })}
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
              <Button variant="primary" to="/dona-ora">
                {t({ pt: 'Doe agora', it: 'Dona ora', de: "Jetzt spenden", en: "Donate now" })}
              </Button>
              <a
                href="#scopri"
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-200 text-base"
              >
                {t({ pt: 'Saiba mais', it: 'Scopri di più', de: "Erfahren Sie mehr", en: "Learn more" })}
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 1 */}
      <section id="scopri" className="bg-white py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection delay={0.1}>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--deep-blue)] mb-6">
                  {t({ pt: 'Aprender através da relação', it: 'Imparare attraverso la relazione', de: "Lernen durch Beziehung", en: "Learning through relationship" })}
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {t({
                    pt: 'No Centro Nossa Senhora Aparecida, a educação não começa nos livros: começa nas relações. Cada educador é antes de tudo uma presença, alguém que caminha ao lado da criança, reconhece os seus talentos e a acompanha com paciência e cuidado.',
                    it: "Al Centro Nossa Senhora Aparecida, l'educazione non comincia dai libri: comincia dalle relazioni. Ogni educatore è prima di tutto una presenza, qualcuno che cammina accanto al bambino, ne riconosce i talenti e lo accompagna con pazienza e cura.",
                    de: "Im Centro Nossa Senhora Aparecida beginnt Bildung nicht mit Büchern: Sie beginnt mit Beziehungen. Jede Erzieherin und jeder Erzieher ist vor allem eine Präsenz – jemand, der an der Seite des Kindes geht, seine Talente erkennt und es mit Geduld und Fürsorge begleitet.",
                    en: "At the Centro Nossa Senhora Aparecida, education does not begin with books: it begins with relationships. Every educator is above all a presence, someone who walks alongside the child, recognises their talents and accompanies them with patience and care.",
                  })}
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {t({
                    pt: 'Este modelo educativo valoriza a pessoa na sua totalidade: não apenas o desempenho académico, mas também o desenvolvimento emocional, criativo e relacional de cada criança.',
                    it: 'Questo modello educativo valorizza la persona nella sua interezza: non solo il rendimento scolastico, ma anche lo sviluppo emotivo, creativo e relazionale di ogni bambino.',
                    de: "Dieses pädagogische Modell würdigt den Menschen in seiner Gesamtheit: nicht nur die schulischen Leistungen, sondern auch die emotionale, kreative und soziale Entwicklung jedes Kindes.",
                    en: "This educational model values the person as a whole: not only academic performance, but also each child's emotional, creative and relational development.",
                  })}
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <img loading="lazy"
                src={img1}
                alt={t({ pt: 'Educação no Centro', it: 'Educazione al Centro', de: "Bildung im Zentrum", en: "Education at the Centre" })}
                className="w-full rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.12)] object-cover h-80 lg:h-96"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="bg-[var(--beige)] py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection delay={0.1} className="order-2 lg:order-1">
              <img loading="lazy"
                src={img2}
                alt={t({ pt: 'Atividades educativas', it: 'Attività educative', de: "Pädagogische Aktivitäten", en: "Educational activities" })}
                className="w-full rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.12)] object-cover h-80 lg:h-96"
              />
            </AnimatedSection>
            <AnimatedSection delay={0.2} className="order-1 lg:order-2">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--deep-blue)] mb-6">
                  {t({ pt: 'Um espaço para crescer', it: 'Uno spazio per crescere', de: "Ein Ort zum Wachsen", en: "A space to grow" })}
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {t({
                    pt: 'O Centro oferece um ambiente estruturado e estimulante, onde as crianças podem aprender, brincar e desenvolver as suas capacidades num contexto seguro e acolhedor.',
                    it: 'Il Centro offre un ambiente strutturato e stimolante, dove i bambini possono imparare, giocare e sviluppare le proprie capacità in un contesto sicuro e accogliente.',
                    de: "Das Zentrum bietet eine strukturierte und anregende Umgebung, in der die Kinder lernen, spielen und ihre Fähigkeiten in einem sicheren und einladenden Rahmen entfalten können.",
                    en: "The Centre offers a structured and stimulating environment, where children can learn, play and develop their abilities in a safe and welcoming setting.",
                  })}
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {t({
                    pt: 'Atividades lúdicas, momentos de expressão criativa, laboratórios e percursos de aprendizagem acompanham o crescimento de cada criança, respeitando os seus tempos e as suas necessidades.',
                    it: 'Attività ludiche, momenti di espressione creativa, laboratori e percorsi di apprendimento accompagnano la crescita di ogni bambino, rispettando i suoi tempi e le sue esigenze.',
                    de: "Spielerische Aktivitäten, Momente kreativen Ausdrucks, Werkstätten und Lernwege begleiten das Wachstum jedes Kindes und respektieren dabei sein eigenes Tempo und seine Bedürfnisse.",
                    en: "Play activities, moments of creative expression, workshops and learning journeys accompany the growth of every child, respecting their own pace and needs.",
                  })}
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* SECTION 3 */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection delay={0.1}>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--deep-blue)] mb-6">
                  {t({ pt: 'Educadores que fazem a diferença', it: 'Educatori che fanno la differenza', de: "Erzieherinnen und Erzieher, die den Unterschied machen", en: "Educators who make the difference" })}
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {t({
                    pt: 'O trabalho dos educadores do Centro é muito mais do que um emprego: é uma vocação. Cada dia investem tempo, energia e afeto para garantir que cada criança se sinta valorizada e acompanhada no seu percurso.',
                    it: 'Il lavoro degli educatori del Centro è molto più di un impiego: è una vocazione. Ogni giorno investono tempo, energia e affetto per garantire che ogni bambino si senta valorizzato e accompagnato nel suo percorso.',
                    de: "Die Arbeit der Erzieherinnen und Erzieher des Zentrums ist weit mehr als ein Beruf: Sie ist eine Berufung. Jeden Tag investieren sie Zeit, Energie und Zuneigung, damit sich jedes Kind wertgeschätzt und auf seinem Weg begleitet fühlt.",
                    en: "The work of the Centre's educators is much more than a job: it is a vocation. Every day they invest time, energy and affection to ensure every child feels valued and accompanied on their journey.",
                  })}
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {t({
                    pt: 'Formação contínua, trabalho de equipa e uma profunda motivação humana tornam possível uma educação de qualidade, mesmo em contextos de grande fragilidade social.',
                    it: 'Formazione continua, lavoro di squadra e una profonda motivazione umana rendono possibile un\'educazione di qualità, anche in contesti di grande fragilità sociale.',
                    de: "Kontinuierliche Weiterbildung, Teamarbeit und eine tiefe menschliche Motivation machen eine qualitativ hochwertige Bildung möglich – auch in Kontexten großer sozialer Fragilität.",
                    en: "Ongoing training, teamwork and deep human motivation make quality education possible, even in contexts of great social vulnerability.",
                  })}
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <img loading="lazy"
                src={img3}
                alt={t({ pt: 'Educadores', it: 'Educatori', de: "Erzieherinnen und Erzieher", en: "Educators" })}
                className="w-full rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.12)] object-cover h-80 lg:h-96"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* SECTION 4 */}
      <section className="bg-[var(--beige)] py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection delay={0.1} className="order-2 lg:order-1">
              <img loading="lazy"
                src={img4}
                alt={t({ pt: 'Futuro através da educação', it: 'Futuro attraverso l\'educazione', de: "Zukunft durch Bildung", en: "A future through education" })}
                className="w-full rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.12)] object-cover h-80 lg:h-96"
              />
            </AnimatedSection>
            <AnimatedSection delay={0.2} className="order-1 lg:order-2">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--deep-blue)] mb-6">
                  {t({ pt: 'Educação como caminho de futuro', it: "L'educazione come strada verso il futuro", de: "Bildung als Weg in die Zukunft", en: "Education as a path to the future" })}
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {t({
                    pt: 'Acreditamos que a educação é o instrumento mais poderoso para transformar vidas. Cada criança que frequenta o Centro carrega consigo um potencial único: o nosso compromisso é garantir que esse potencial possa florescer, independentemente das condições de partida.',
                    it: 'Crediamo che l\'educazione sia lo strumento più potente per trasformare le vite. Ogni bambino che frequenta il Centro porta con sé un potenziale unico: il nostro impegno è garantire che quel potenziale possa fiorire, indipendentemente dalle condizioni di partenza.',
                    de: "Wir glauben, dass Bildung das wirksamste Mittel ist, um Leben zu verändern. Jedes Kind, das das Zentrum besucht, trägt ein einzigartiges Potenzial in sich: Unser Engagement gilt dem Ziel, dass dieses Potenzial aufblühen kann – unabhängig von den Startbedingungen.",
                    en: "We believe education is the most powerful tool for transforming lives. Every child who attends the Centre carries a unique potential: our commitment is to ensure that potential can flourish, regardless of their starting conditions.",
                  })}
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--deep-blue)] mb-6">
              {t({ pt: 'Investe no futuro de uma criança', it: 'Investi nel futuro di un bambino', de: "Investieren Sie in die Zukunft eines Kindes", en: "Invest in a child's future" })}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
              {t({
                pt: 'O teu apoio torna possível garantir a cada criança um percurso educativo digno, estimulante e ricco de oportunidades. Juntos podemos fazer a diferença.',
                it: 'Il tuo sostegno rende possibile garantire a ogni bambino un percorso educativo degno, stimolante e ricco di opportunità. Insieme possiamo fare la differenza.',
                de: "Ihre Unterstützung ermöglicht es, jedem Kind einen würdevollen, anregenden und chancenreichen Bildungsweg zu sichern. Gemeinsam können wir etwas bewirken.",
                en: "Your support makes it possible to guarantee every child a worthy, stimulating educational journey full of opportunities. Together we can make a difference.",
              })}
            </p>
            <Link
              to="/#educazione"
              className="inline-flex items-center gap-2 text-[var(--deep-blue)] font-semibold text-lg hover:gap-3 hover:text-[var(--warm-orange)] transition-all duration-300"
            >
              <ArrowLeft className="w-5 h-5" />
              {t({ pt: 'Voltar', it: 'Indietro', de: "Zurück", en: "Back" })}
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
