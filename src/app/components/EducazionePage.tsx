import { ChevronDown } from 'lucide-react';
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
              {t({ pt: 'Educação', it: 'Educazione' })}
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              {t({
                pt: 'Educar é muito mais do que transmitir conhecimentos. É acompanhar cada criança na descoberta de si mesma, do mundo e das suas possibilidades. No Centro Nossa Senhora Aparecida, a educação é uma missão vivida cada dia com dedicação e amor.',
                it: "Educare è molto più che trasmettere conoscenze. È accompagnare ogni bambino nella scoperta di sé, del mondo e delle proprie possibilità. Al Centro Nossa Senhora Aparecida, l'educazione è una missione vissuta ogni giorno con dedizione e amore.",
              })}
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
              <Button variant="primary" to="/dona-ora">
                {t({ pt: 'Doe agora', it: 'Dona ora' })}
              </Button>
              <a
                href="#scopri"
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-200 text-base"
              >
                {t({ pt: 'Saiba mais', it: 'Scopri di più' })}
              </a>
            </div>
          </AnimatedSection>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <ChevronDown className="w-8 h-8 text-white/60 animate-bounce" />
        </div>
      </section>

      {/* SECTION 1 */}
      <section id="scopri" className="bg-white py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection delay={0.1}>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--deep-blue)] mb-6">
                  {t({ pt: 'Aprender através da relação', it: 'Imparare attraverso la relazione' })}
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {t({
                    pt: 'No Centro Nossa Senhora Aparecida, a educação não começa nos livros: começa nas relações. Cada educador é antes de tudo uma presença, alguém que caminha ao lado da criança, reconhece os seus talentos e a acompanha com paciência e cuidado.',
                    it: "Al Centro Nossa Senhora Aparecida, l'educazione non comincia dai libri: comincia dalle relazioni. Ogni educatore è prima di tutto una presenza, qualcuno che cammina accanto al bambino, ne riconosce i talenti e lo accompagna con pazienza e cura.",
                  })}
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {t({
                    pt: 'Este modelo educativo valoriza a pessoa na sua totalidade: não apenas o desempenho académico, mas também o desenvolvimento emocional, criativo e relacional de cada criança.',
                    it: 'Questo modello educativo valorizza la persona nella sua interezza: non solo il rendimento scolastico, ma anche lo sviluppo emotivo, creativo e relazionale di ogni bambino.',
                  })}
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <img
                src={img1}
                alt={t({ pt: 'Educação no Centro', it: 'Educazione al Centro' })}
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
              <img
                src={img2}
                alt={t({ pt: 'Atividades educativas', it: 'Attività educative' })}
                className="w-full rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.12)] object-cover h-80 lg:h-96"
              />
            </AnimatedSection>
            <AnimatedSection delay={0.2} className="order-1 lg:order-2">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--deep-blue)] mb-6">
                  {t({ pt: 'Um espaço para crescer', it: 'Uno spazio per crescere' })}
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {t({
                    pt: 'O Centro oferece um ambiente estruturado e estimulante, onde as crianças podem aprender, brincar e desenvolver as suas capacidades num contexto seguro e acolhedor.',
                    it: 'Il Centro offre un ambiente strutturato e stimolante, dove i bambini possono imparare, giocare e sviluppare le proprie capacità in un contesto sicuro e accogliente.',
                  })}
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {t({
                    pt: 'Atividades lúdicas, momentos de expressão criativa, laboratórios e percursos de aprendizagem acompanham o crescimento de cada criança, respeitando os seus tempos e as suas necessidades.',
                    it: 'Attività ludiche, momenti di espressione creativa, laboratori e percorsi di apprendimento accompagnano la crescita di ogni bambino, rispettando i suoi tempi e le sue esigenze.',
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
                  {t({ pt: 'Educadores que fazem a diferença', it: 'Educatori che fanno la differenza' })}
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {t({
                    pt: 'O trabalho dos educadores do Centro é muito mais do que um emprego: é uma vocação. Cada dia investem tempo, energia e afeto para garantir que cada criança se sinta valorizada e acompanhada no seu percurso.',
                    it: 'Il lavoro degli educatori del Centro è molto più di un impiego: è una vocazione. Ogni giorno investono tempo, energia e affetto per garantire che ogni bambino si senta valorizzato e accompagnato nel suo percorso.',
                  })}
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {t({
                    pt: 'Formação contínua, trabalho de equipa e uma profunda motivação humana tornam possível uma educação de qualidade, mesmo em contextos de grande fragilidade social.',
                    it: 'Formazione continua, lavoro di squadra e una profonda motivazione umana rendono possibile un\'educazione di qualità, anche in contesti di grande fragilità sociale.',
                  })}
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <img
                src={img3}
                alt={t({ pt: 'Educadores', it: 'Educatori' })}
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
              <img
                src={img4}
                alt={t({ pt: 'Futuro através da educação', it: 'Futuro attraverso l\'educazione' })}
                className="w-full rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.12)] object-cover h-80 lg:h-96"
              />
            </AnimatedSection>
            <AnimatedSection delay={0.2} className="order-1 lg:order-2">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--deep-blue)] mb-6">
                  {t({ pt: 'Educação como caminho de futuro', it: "L'educazione come strada verso il futuro" })}
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {t({
                    pt: 'Acreditamos que a educação é o instrumento mais poderoso para transformar vidas. Cada criança que frequenta o Centro carrega consigo um potencial único: o nosso compromisso é garantir que esse potencial possa florescer, independentemente das condições de partida.',
                    it: 'Crediamo che l\'educazione sia lo strumento più potente per trasformare le vite. Ogni bambino che frequenta il Centro porta con sé un potenziale unico: il nostro impegno è garantire che quel potenziale possa fiorire, indipendentemente dalle condizioni di partenza.',
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
              {t({ pt: 'Investe no futuro de uma criança', it: 'Investi nel futuro di un bambino' })}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
              {t({
                pt: 'O teu apoio torna possível garantir a cada criança um percurso educativo digno, estimulante e ricco de oportunidades. Juntos podemos fazer a diferença.',
                it: 'Il tuo sostegno rende possibile garantire a ogni bambino un percorso educativo degno, stimolante e ricco di opportunità. Insieme possiamo fare la differenza.',
              })}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" to="/dona-ora">
                {t({ pt: 'Doe agora', it: 'Dona ora' })}
              </Button>
              <Button variant="secondary" to="/il-centro">
                {t({ pt: 'Conheça o Centro', it: 'Scopri il Centro' })}
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
