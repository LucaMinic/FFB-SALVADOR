import { Button } from './Button';
import { AnimatedSection } from './AnimatedSection';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ChevronDown } from 'lucide-react';
import { useT } from '../context/LanguageContext';
import heroImg from '../../imports/15-2.jpeg';
import centroImg from '../../imports/8-3.jpeg';
import giornataImg1 from '../../imports/15-2.jpeg';
import giornataImg2 from '../../imports/17-2.jpeg';
import documentariImg from '../../imports/FFBcreche.2025-1.png';

export function CentroPage() {
  const t = useT();
  return (
    <div className="bg-white">
      {/* SECTION 1 - HERO */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt={t({ pt: 'Centro Nossa Senhora Aparecida', it: 'Centro Nossa Senhora Aparecida' })}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--deep-blue)]/70 via-[var(--deep-blue)]/50 to-[var(--deep-blue)]/70"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <AnimatedSection>
            <h1 className="text-5xl md:text-6xl mb-6">
              {t({ pt: 'O Centro Nossa Senhora Aparecida', it: 'Il Centro Nossa Senhora Aparecida' })}
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-xl md:text-2xl mb-10 leading-relaxed max-w-3xl mx-auto">
              {t({
                pt: 'Uma presença diária no coração de Salvador da Bahia.',
                it: 'Una presenza quotidiana nel cuore di Salvador de Bahia.'
              })}
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" href="#intro-section" className="text-lg px-8 py-4">
                {t({ pt: 'Conheça o Centro', it: "Scopri il Centro" })}
              </Button>
              <Button variant="secondary" to="/dona-ora" className="text-lg px-8 py-4 bg-white/10 backdrop-blur-sm border-white hover:bg-white/20">
                {t({ pt: 'Doe agora', it: 'Dona ora' })}
              </Button>
            </div>
          </AnimatedSection>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-white/80" />
          </div>
        </div>
      </section>

      {/* SECTION 1B - INTRO TEXT */}
      <section id="intro-section" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  {t({ pt: 'O Centro Nossa Senhora Aparecida é o lugar em que cada dia a Fundação Betania ONLUS está presente ao lado das crianças e das famílias.', it: 'Il Centro Nossa Senhora Aparecida è il luogo in cui ogni giorno la Fundação Betania ONLUS è presente accanto ai bambini e alle famiglie.' })}
                </p>
                <p>
                  {t({ pt: 'Não é apenas um espaço, mas uma presença concreta feita de relações, acolhimento e vida partilhada.', it: 'Non è solo uno spazio, ma una presenza concreta fatta di relazioni, accoglienza e vita condivisa.' })}
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={centroImg}
                  alt="Centro Nossa Senhora Aparecida"
                  className="w-full h-96 object-cover"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* SECTION 2 - UN LUOGO FATTO DI RELAZIONI */}
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-24" style={{ display: 'block', marginTop: '-1px' }}>
        <path d="M0,50 C300,10 600,90 900,50 C1050,30 1150,50 1200,50 L1200,0 L0,0 Z" fill="var(--beige)" />
      </svg>
      <section className="py-24 bg-[var(--beige)]">
        <div className="max-w-5xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl text-[var(--deep-blue)] mb-12 text-center">
              {t({ pt: 'Um lugar que acolhe cada dia', it: 'Un luogo che accoglie ogni giorno' })}
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <AnimatedSection delay={0.1}>
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 h-full">
                <h3 className="text-xl font-bold text-[var(--deep-blue)] mb-4">
                  {t({ pt: 'Pessoas, não números', it: 'Persone, non numeri' })}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {t({ pt: 'No Centro, cada jornada começa com a chegada das crianças e das famílias. Cada criança é conhecida, cada família é acompanhada, cada situação é ouvida.', it: 'Nel Centro, ogni giornata inizia con l\'arrivo dei bambini e delle famiglie. Ogni bambino è conosciuto, ogni famiglia è accompagnata, ogni situazione è ascoltata.' })}
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 h-full">
                <h3 className="text-xl font-bold text-[var(--deep-blue)] mb-4">
                  {t({ pt: 'Presença contínua', it: 'Presenza continua' })}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {t({ pt: 'Não é uma intervenção temporária, mas uma presença estável, construída dia após dia. Esta continuidade é o que permite uma mudança real.', it: 'Non è un intervento temporaneo, ma una presenza stabile, costruita giorno dopo giorno. Questa continuità è ciò che permette un cambiamento reale.' })}
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 h-full">
                <h3 className="text-xl font-bold text-[var(--deep-blue)] mb-4">
                  {t({ pt: 'Um modo de viver', it: 'Un modo di vivere' })}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {t({ pt: 'É um espaço aberto, vivo, onde as pessoas não são usuários mas rostos, histórias, relações. O acolhimento não é um serviço, mas um modo de viver.', it: 'È uno spazio aperto, vivo, dove le persone non sono utenti ma volti, storie, relazioni. L\'accoglienza non è un servizio, ma un modo di vivere.' })}
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-24" style={{ display: 'block', marginTop: '-1px' }}>
        <path d="M0,50 C300,90 600,10 900,50 C1050,70 1150,50 1200,50 L1200,120 L0,120 Z" fill="#ffffff" />
      </svg>

      {/* SECTION 3 - UNA GIORNATA NEL CENTRO */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl text-[var(--deep-blue)] mb-6 text-center">
              {t({ pt: 'Uma jornada que toma forma na relação', it: 'Una giornata che prende forma nella relazione' })}
            </h2>
            <p className="text-2xl text-gray-600 mb-16 text-center max-w-3xl mx-auto">
              {t({ pt: 'Durante a jornada, o Centro se enche de vozes, atividades, momentos compartilhados.', it: 'Durante la giornata, il Centro si riempie di voci, attività, momenti condivisi.' })}
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <AnimatedSection>
              <div className="rounded-3xl overflow-hidden shadow-xl h-full">
                <img
                  src={giornataImg1}
                  alt="Una giornata al Centro"
                  className="w-full h-full min-h-[400px] object-cover"
                />
              </div>
            </AnimatedSection>
            <div className="flex flex-col justify-center gap-6">
              {[
                { title: t({ pt: 'Acolhimento', it: 'Accoglienza' }), desc: t({ pt: 'Cada criança encontra um lugar seguro e estável', it: 'Ogni bambino trova un luogo sicuro e stabile' }) },
                { title: t({ pt: 'Atividades educativas', it: 'Attività educative' }), desc: t({ pt: 'A aprendizagem nasce da relação e da brincadeira', it: 'L\'apprendimento nasce dalla relazione e dal gioco' }) },
                { title: t({ pt: 'Momentos de cuidado', it: 'Momenti di cura' }), desc: t({ pt: 'As necessidades fundamentais são acompanhadas com atenção', it: 'I bisogni fondamentali vengono accompagnati con attenzione' }) }
              ].map((item, index) => (
                <AnimatedSection key={item.title} delay={0.1 + index * 0.1}>
                  <div className="bg-gradient-to-br from-[var(--soft-green)]/10 to-[#7ab89a]/10 rounded-xl p-6 border-l-4 border-[var(--soft-green)]">
                    <h3 className="text-lg font-bold text-[var(--deep-blue)] mb-2">{item.title}</h3>
                    <p className="text-gray-700">{item.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col justify-center gap-6">
              {[
                { title: t({ pt: 'Refeições compartilhadas', it: 'Pasti condivisi' }), desc: t({ pt: 'Momentos de convívio e nutrição que alimentam o corpo e as relações', it: 'Momenti di convivialità e nutrimento che alimentano il corpo e le relazioni' }) },
                { title: t({ pt: 'Brincadeira e relação', it: 'Gioco e relazione' }), desc: t({ pt: 'O brincar como espaço de descoberta e crescimento conjunto', it: 'Il gioco come spazio di scoperta e crescita condivisa' }) },
                { title: t({ pt: 'Acompanhamento das famílias', it: 'Accompagnamento delle famiglie' }), desc: t({ pt: 'Um ponto de referência estável para todo o núcleo familiar', it: 'Un punto di riferimento stabile per tutto il nucleo familiare' }) }
              ].map((item, index) => (
                <AnimatedSection key={item.title} delay={index * 0.1}>
                  <div className="bg-gradient-to-br from-[var(--warm-orange)]/10 to-[var(--warm-orange-light)]/10 rounded-xl p-6 border-l-4 border-[var(--warm-orange)]">
                    <h3 className="text-lg font-bold text-[var(--deep-blue)] mb-2">{item.title}</h3>
                    <p className="text-gray-700">{item.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
            <AnimatedSection delay={0.2}>
              <div className="rounded-3xl overflow-hidden shadow-xl h-full">
                <img
                  src={giornataImg2}
                  alt="Momenti condivisi"
                  className="w-full h-full min-h-[400px] object-cover"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>


      {/* BREATHING MOMENT - QUOTE */}
      <section className="py-20 bg-gradient-to-b from-white to-[var(--beige)]/30">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center">
              <p className="text-3xl md:text-4xl text-[var(--deep-blue)] leading-relaxed italic font-light">
                {t({ pt: '"Cada momento, mesmo o mais simples, torna-se parte de um percurso"', it: '"Ogni momento, anche il più semplice, diventa parte di un percorso"' })}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>


      {/* SECTION 7 - DAL CENTRO NASCONO I PROGETTI + IMPATTO */}
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-24" style={{ display: 'block', marginTop: '-1px' }}>
        <path d="M0,50 C300,10 600,90 900,50 C1050,30 1150,50 1200,50 L1200,0 L0,0 Z" fill="var(--beige)" />
      </svg>
      <section className="py-24 bg-[var(--beige)]">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl text-[var(--deep-blue)] mb-6 text-center">
              {t({ pt: 'Uma realidade que gera percursos', it: 'Una realtà che genera percorsi' })}
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-16 text-center max-w-3xl mx-auto">
              {t({ pt: 'Do Centro tomam forma projetos concretos que respondem às necessidades do território.', it: 'Dal Centro prendono forma progetti concreti che rispondono ai bisogni del territorio.' })}
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <AnimatedSection>
              <div className="bg-gradient-to-br from-[var(--soft-green)] to-[#7ab89a] rounded-3xl p-10 text-white shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
                <h3 className="text-3xl font-bold mb-4">{t({ pt: 'Creche', it: 'Asilo' })}</h3>
                <p className="text-lg mb-6 opacity-95 leading-relaxed">
                  {t({ pt: 'Um serviço educativo para a primeira infância, ativo cada dia.', it: 'Un servizio educativo per la prima infanzia, attivo ogni giorno.' })}
                </p>
                <a
                  href="/asilo"
                  className="inline-block px-8 py-3 bg-white text-[var(--soft-green)] rounded-xl font-medium hover:shadow-lg transition-all"
                >
                  {t({ pt: 'Conheça a creche', it: "Scopri l'asilo" })}
                </a>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="bg-gradient-to-br from-[var(--warm-orange-light)] to-[var(--warm-orange)] rounded-3xl p-10 text-white shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
                <h3 className="text-3xl font-bold mb-4">{t({ pt: 'Projeto Escola', it: 'Progetto scuola' })}</h3>
                <p className="text-lg mb-6 opacity-95 leading-relaxed">
                  {t({ pt: 'Um percurso em desenvolvimento para acompanhar as crianças também nos anos seguintes.', it: 'Un percorso in sviluppo per accompagnare i bambini anche negli anni successivi.' })}
                </p>
                <a
                  href="/progetto-scuola"
                  className="inline-block px-8 py-3 bg-white text-[var(--warm-orange)] rounded-xl font-medium hover:shadow-lg transition-all"
                >
                  {t({ pt: 'Conheça o projeto escola', it: 'Scopri il progetto scuola' })}
                </a>
              </div>
            </AnimatedSection>
          </div>

          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-12">
            <AnimatedSection>
              <h3 className="text-3xl md:text-4xl text-[var(--deep-blue)] mb-12 text-center font-bold">
                {t({ pt: 'Um impacto concreto', it: 'Un impatto concreto' })}
              </h3>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {[
                { number: '100+', label: t({ pt: 'crianças cada dia', it: 'bambini ogni giorno' }) },
                { number: '5', label: t({ pt: 'refeições quotidianas', it: 'pasti quotidiani' }) },
                { number: '365', label: t({ pt: 'dias de presença contínua', it: 'giorni di presenza continua' }) }
              ].map((item, index) => (
                <AnimatedSection key={item.label} delay={index * 0.1}>
                  <div className="text-center">
                    <div className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-[var(--deep-blue)] to-[var(--soft-green)] mb-3">{item.number}</div>
                    <div className="text-lg text-gray-700 font-medium">{item.label}</div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection delay={0.3}>
              <p className="text-xl text-gray-600 text-center italic mt-8">
                {t({ pt: 'Cada número representa uma presença real na vida das pessoas.', it: 'Ogni numero rappresenta una presenza reale nella vita delle persone.' })}
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-24" style={{ display: 'block', marginTop: '-1px' }}>
        <path d="M0,50 C300,90 600,10 900,50 C1050,70 1150,50 1200,50 L1200,120 L0,120 Z" fill="#ffffff" />
      </svg>

      {/* SECTION 8 - DOCUMENTARI E RACCONTI */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="rounded-3xl overflow-hidden shadow-xl">
                <img
                  src={documentariImg}
                  alt={t({ pt: 'Documentários e Relatos', it: 'Documentari e Racconti' })}
                  className="w-full h-full min-h-[400px] object-cover"
                />
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl text-[var(--deep-blue)] font-bold">
                  {t({ pt: 'Documentários e Relatos', it: 'Documentari e Racconti' })}
                </h2>
                <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                  <p>
                    {t({
                      pt: 'A vida do Centro Nossa Senhora Aparecida é feita de relações, encontros, educação e histórias compartilhadas.',
                      it: 'La vita del Centro Nossa Senhora Aparecida è fatta di relazioni, incontri, educazione e storie condivise.'
                    })}
                  </p>
                  <p>
                    {t({
                      pt: 'Através de documentários, testemunhos e relatos audiovisuais é possível descobrir momentos significativos, projetos educativos, memórias e percursos que contam o crescimento da comunidade ao longo do tempo.',
                      it: 'Attraverso documentari, testimonianze e racconti audiovisivi è possibile scoprire momenti significativi, progetti educativi, memorie e percorsi che raccontano la crescita della comunità nel tempo.'
                    })}
                  </p>
                </div>
                <div className="pt-4">
                  <Button to="/documentari-racconti" variant="primary">
                    {t({ pt: 'Descubra os Documentários e Relatos', it: 'Scopri Documentari e Racconti' })}
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-24" style={{ display: 'block', marginTop: '-1px' }}>
        <path d="M0,50 C300,10 600,90 900,50 C1050,30 1150,50 1200,50 L1200,0 L0,0 Z" fill="var(--beige)" />
      </svg>

      {/* SECTION 9 - CTA FINALE */}
      <section className="py-20 bg-[var(--beige)]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl text-[var(--deep-blue)] mb-6">
              {t({ pt: 'Apoie o Centro', it: 'Sostieni il Centro' })}
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-10">
              {t({ pt: 'A sua ajuda permite continuar esta presença quotidiana e alcançar cada vez mais crianças e famílias.', it: 'Il tuo aiuto permette di continuare questa presenza quotidiana e raggiungere sempre più bambini e famiglie.' })}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button to="/dona-ora">{t({ pt: 'Doar agora', it: 'Dona ora' })}</Button>
              <Button variant="secondary" to="/cosa-puoi-fare-tu">{t({ pt: 'Saiba como ajudar', it: 'Scopri come aiutare' })}</Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
