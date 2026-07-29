import { useState } from 'react';
import { Button } from './Button';
import { AnimatedSection } from './AnimatedSection';
import { Lightbox } from './Lightbox';
import { useT } from '../context/LanguageContext';
import heroImg from '../../imports/immagine_compressa_leggera.jpg';
import videoProgetto from '../../imports/video_progetto_scuola_nossa-1.mp4';
import videoProgetto2 from '../../imports/video_progetto_scuola_nossa-2.mp4';
import renderVillaggio from '../../imports/immagine_compressa_leggera.jpg';
import render1 from '../../imports/foto_sito_01_pagina_1.jpg';
import render2 from '../../imports/foto_sito_02_pagina_4.jpg';
import render3 from '../../imports/foto_sito_03_pagina_5.jpg';
import render4 from '../../imports/foto_sito_04_pagina_6.jpg';
import render5 from '../../imports/foto_sito_05_pagina_6.jpg';
import render6 from '../../imports/foto_sito_06_pagina_7.jpg';
import render7 from '../../imports/foto_sito_07_pagina_8.jpg';
import render8 from '../../imports/foto_sito_08_pagina_8.jpg';
import render9 from '../../imports/foto_sito_09_pagina_9.jpg';

export function ScuolaPage() {
  const t = useT();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const renderImages = [
    render1,
    render2,
    render3,
    render4,
    render5,
    render6,
    render7,
    render8,
    render9
  ];

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setLightboxIndex((prevIndex) => (prevIndex + 1) % renderImages.length);
  };

  const prevImage = () => {
    setLightboxIndex((prevIndex) => (prevIndex - 1 + renderImages.length) % renderImages.length);
  };
  return (
    <div className="bg-white">
      {/* SECTION 1 - HERO */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt={t({ pt: 'Projeto Escola', it: 'Progetto scuola', de: "Schulprojekt", en: "School project" })}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--deep-blue)]/70 via-[var(--deep-blue)]/50 to-[var(--deep-blue)]/70"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <AnimatedSection>
            <h1 className="text-5xl md:text-6xl mb-6">
              {t({ pt: 'Projeto Escola', it: 'Progetto scuola', de: "Schulprojekt", en: "School project" })}
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-xl md:text-2xl mb-10 leading-relaxed max-w-3xl mx-auto">
              {t({
                pt: 'Juntos construímos uma escola e um futuro para as crianças de Salvador da Bahia.',
                it: 'Insieme costruiamo una scuola e un futuro per i bambini di Salvador de Bahia.',
                de: "Gemeinsam bauen wir eine Schule und eine Zukunft für die Kinder von Salvador de Bahia.",
                en: "Together we are building a school and a future for the children of Salvador de Bahia."
              })}
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" to="/dona-ora" className="text-lg px-8 py-4">
                {t({ pt: 'Doe agora', it: 'Dona ora', de: "Jetzt spenden", en: "Donate now" })}
              </Button>
              <Button variant="secondary" href="#il-progetto" className="text-lg px-8 py-4 bg-white/10 backdrop-blur-sm border-white hover:bg-white/20">
                {t({ pt: 'Veja o projeto', it: 'Guarda il progetto', de: "Projekt entdecken", en: "See the project" })}
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 1B - INTRO TEXT & VIDEO */}
      <section id="il-progetto" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-5xl mx-auto mb-12">
            <AnimatedSection>
              <div className="space-y-6 text-xl text-gray-700 leading-relaxed text-center">
                <p>
                  {t({ pt: 'Após anos de presença educativa através da creche, o Centro Nossa Senhora Aparecida se prepara para um novo passo: construir uma escola capaz de acompanhar crianças e jovens dos 6 aos 18 anos.', it: "Dopo anni di presenza educativa attraverso l'asilo, il Centro Nossa Senhora Aparecida si prepara a un nuovo passo: costruire una scuola capace di accompagnare bambini e ragazzi dai 6 ai 18 anni.", de: "Nach Jahren pädagogischer Präsenz durch die Kita bereitet sich das Centro Nossa Senhora Aparecida auf einen neuen Schritt vor: den Bau einer Schule, die Kinder und Jugendliche von 6 bis 18 Jahren begleiten kann.", en: "After years of educational presence through the nursery school, the Centro Nossa Senhora Aparecida is preparing for a new step: building a school able to accompany children and young people from age 6 to 18." })}
                </p>
                <p>
                  {t({ pt: 'Um projeto educativo, social e humano pensado para oferecer continuidade, qualidade e novas possibilidades de futuro.', it: 'Un progetto educativo, sociale e umano pensato per offrire continuità, qualità e nuove possibilità di futuro.', de: "Ein pädagogisches, soziales und menschliches Projekt, das Kontinuität, Qualität und neue Zukunftsmöglichkeiten bieten soll.", en: "An educational, social and human project designed to offer continuity, quality and new possibilities for the future." })}
                </p>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={0.2}>
            <div className="rounded-3xl overflow-hidden shadow-2xl mb-12">
              <video
                src={videoProgetto}
                controls
                className="w-full h-auto"
                poster=""
              >
                {t({ pt: 'O seu navegador não suporta o elemento de vídeo.', it: 'Il tuo browser non supporta il tag video.', de: "Ihr Browser unterstützt das Video-Element nicht.", en: "Your browser does not support the video tag." })}
              </video>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="text-center">
              <p className="text-xl text-gray-700 leading-relaxed mb-6 max-w-3xl mx-auto">
                {t({ pt: 'Quer ver a que ponto estão as obras?', it: 'Vuoi vedere a che punto sono i lavori?', de: "Möchten Sie sehen, wie weit die Bauarbeiten fortgeschritten sind?", en: "Want to see how the works are progressing?" })}
              </p>
              <Button variant="secondary" to="/avanzamento-lavori">
                {t({ pt: 'Veja o avanço das obras', it: "Guarda l'avanzamento lavori", de: "Baufortschritt ansehen", en: "See the construction progress" })}
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 2 - PERCHÉ UNA SCUOLA */}
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-24" style={{ display: 'block', marginTop: '-1px' }}>
        <path d="M0,50 C300,10 600,90 900,50 C1050,30 1150,50 1200,50 L1200,0 L0,0 Z" fill="var(--beige)" />
      </svg>
      <section className="py-20 bg-[var(--beige)]">
        <div className="max-w-5xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl text-[var(--deep-blue)] mb-12 text-center">
              {t({ pt: 'Por que construir uma escola', it: 'Perché costruire una scuola', de: "Warum eine Schule bauen", en: "Why build a school" })}
            </h2>
            <div className="space-y-6 text-xl text-gray-700 leading-relaxed">
              <p>
                {t({ pt: 'No território de São Cristóvão, em Salvador da Bahia, muitas crianças crescem em contextos marcados por pobreza, fragilidade familiar e falta de oportunidades.', it: 'Nel territorio di São Cristóvão, a Salvador de Bahia, molti bambini crescono in contesti segnati da povertà, fragilità familiare e mancanza di opportunità.', de: "Im Gebiet von São Cristóvão, in Salvador de Bahia, wachsen viele Kinder in einem von Armut, familiärer Fragilität und fehlenden Chancen geprägten Umfeld auf.", en: "In the São Cristóvão area of Salvador de Bahia, many children grow up in contexts marked by poverty, family vulnerability and lack of opportunity." })}
              </p>
              <p>
                {t({ pt: 'A creche já demonstrou quanto uma presença educativa estável pode mudar a vida das crianças e das famílias.', it: "L'asilo ha già dimostrato quanto una presenza educativa stabile possa cambiare la vita dei bambini e delle famiglie.", de: "Die Kita hat bereits gezeigt, wie sehr eine stabile pädagogische Präsenz das Leben von Kindern und Familien verändern kann.", en: "The nursery school has already shown how much a stable educational presence can change the lives of children and families." })}
              </p>
              <p>
                {t({ pt: 'A nova escola nasce para dar continuidade a este caminho: acompanhar as crianças também após a primeira infância, oferecendo-lhes um percurso completo, seguro e de qualidade.', it: 'La nuova scuola nasce per dare continuità a questo cammino: accompagnare i bambini anche dopo la prima infanzia, offrendo loro un percorso completo, sicuro e di qualità.', de: "Die neue Schule entsteht, um diesen Weg fortzusetzen: die Kinder auch nach der frühen Kindheit zu begleiten und ihnen einen vollständigen, sicheren und qualitativ hochwertigen Bildungsweg zu bieten.", en: "The new school is being built to give continuity to this journey: accompanying children beyond early childhood, offering them a complete, safe and quality educational path." })}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-24" style={{ display: 'block', marginTop: '-1px' }}>
        <path d="M0,50 C300,90 600,10 900,50 C1050,70 1150,50 1200,50 L1200,120 L0,120 Z" fill="#ffffff" />
      </svg>

      {/* SECTION 3 - IL PROGETTO EDUCATIVO */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl text-[var(--deep-blue)] mb-12 text-center">
              {t({ pt: 'Uma escola integral e em tempo integral', it: 'Una scuola integrale e a tempo integrale', de: "Eine ganzheitliche Schule mit Ganztagsbetrieb", en: "A holistic, full-time school" })}
            </h2>
            <div className="max-w-4xl mx-auto space-y-6 text-xl text-gray-700 leading-relaxed mb-16 text-center">
              <p>
                {t({ pt: 'A escola será pensada como uma escola integral e em tempo integral.', it: 'La scuola sarà pensata come una scuola integrale e a tempo integrale.', de: "Die Schule wird als ganzheitliche Ganztagsschule konzipiert.", en: "The school will be designed as a holistic, full-time school." })}
              </p>
              <p>
                {t({ pt: '"Integral" significa que a educação não diz respeito apenas às matérias escolares, mas a toda a pessoa: mente, corpo, relações, afetividade, criatividade, espiritualidade e capacidade de viver na comunidade.', it: '"Integrale" significa che l\'educazione non riguarda solo le materie scolastiche, ma tutta la persona: mente, corpo, relazioni, affettività, creatività, spiritualità e capacità di vivere nella comunità.', de: "„Ganzheitlich\" bedeutet, dass Bildung nicht nur die Schulfächer betrifft, sondern den ganzen Menschen: Geist, Körper, Beziehungen, Gefühlsleben, Kreativität, Spiritualität und die Fähigkeit, in Gemeinschaft zu leben.", en: "\"Holistic\" means that education is not just about school subjects, but the whole person: mind, body, relationships, emotions, creativity, spirituality and the ability to live in community." })}
              </p>
              <p>
                {t({ pt: '"Em tempo integral" significa que os jovens serão acompanhados durante toda a jornada, com atividades didáticas, laboratórios, esporte, cultura, momentos comunitários e refeições.', it: '"A tempo integrale" significa che i ragazzi saranno accompagnati durante tutta la giornata, con attività didattiche, laboratori, sport, cultura, momenti comunitari e pasti.', de: "„Ganztags\" bedeutet, dass die Kinder und Jugendlichen den ganzen Tag über begleitet werden, mit Unterricht, Werkstätten, Sport, Kultur, Gemeinschaftsmomenten und Mahlzeiten.", en: "\"Full-time\" means that students will be accompanied throughout the day, with lessons, workshops, sport, culture, community moments and meals." })}
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: t({ pt: 'Educação integral', it: 'Educazione integrale', de: "Ganzheitliche Bildung", en: "Holistic education" }),
                desc: t({ pt: 'Um percurso que envolve mente, corpo, relações e espiritualidade', it: 'Un percorso che coinvolge mente, corpo, relazioni e spiritualità', de: "Ein Weg, der Geist, Körper, Beziehungen und Spiritualität einbezieht", en: "A path that involves mind, body, relationships and spirituality" })
              },
              {
                title: t({ pt: 'Tempo integral', it: 'Tempo pieno', de: "Ganztags", en: "Full time" }),
                desc: t({ pt: 'Acompanhamento durante toda a jornada com atividades diversificadas', it: 'Accompagnamento durante tutta la giornata con attività diversificate', de: "Begleitung während des gesamten Tages mit vielfältigen Aktivitäten", en: "Support throughout the day with varied activities" })
              },
              {
                title: t({ pt: 'Crescimento humano e social', it: 'Crescita umana e sociale', de: "Menschliches und soziales Wachstum", en: "Human and social growth" }),
                desc: t({ pt: 'Formação completa para a vida na comunidade', it: 'Formazione completa per la vita nella comunità', de: "Umfassende Bildung für das Leben in der Gemeinschaft", en: "Complete formation for life in the community" })
              }
            ].map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 0.1}>
                <div className="bg-gradient-to-br from-[var(--soft-green)] to-[#7ab89a] text-white rounded-2xl p-8 shadow-lg h-full">
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-lg opacity-90">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 - IL PERCORSO FORMATIVO */}
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-24" style={{ display: 'block', marginTop: '-1px' }}>
        <path d="M0,50 C300,10 600,90 900,50 C1050,30 1150,50 1200,50 L1200,0 L0,0 Z" fill="var(--beige)" />
      </svg>
      <section className="py-20 bg-[var(--beige)]">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl text-[var(--deep-blue)] mb-12 text-center">
              {t({ pt: 'Um caminho dos 6 aos 18 anos', it: 'Un cammino dai 6 ai 18 anni', de: "Ein Weg von 6 bis 18 Jahren", en: "A journey from age 6 to 18" })}
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-16 text-center max-w-4xl mx-auto">
              {t({ pt: 'A nova escola acompanhará os alunos ao longo de todo o percurso formativo obrigatório previsto no Brasil.', it: 'La nuova scuola accompagnerà gli studenti lungo tutto il percorso formativo obbligatorio previsto in Brasile.', de: "Die neue Schule wird die Schüler während der gesamten in Brasilien vorgeschriebenen Schulpflicht begleiten.", en: "The new school will accompany students through the entire compulsory education path required in Brazil." })}
            </p>
          </AnimatedSection>

          <div className="space-y-8 max-w-4xl mx-auto">
            {[
              {
                number: '1',
                title: 'Fundamental 1',
                age: t({ pt: 'Idade: 6–10 anos', it: 'Età: 6–10 anni', de: "Alter: 6–10 Jahre", en: "Ages: 6–10" }),
                desc: t({ pt: 'Primeira fase do percurso escolar.', it: 'Prima fase del percorso scolastico.', de: "Erste Phase des Schulwegs.", en: "First phase of the school journey." })
              },
              {
                number: '2',
                title: 'Fundamental 2',
                age: t({ pt: 'Idade: 11–14 anos', it: 'Età: 11–14 anni', de: "Alter: 11–14 Jahre", en: "Ages: 11–14" }),
                desc: t({ pt: 'Crescimento, consolidação e novas competências.', it: 'Crescita, consolidamento e nuove competenze.', de: "Wachstum, Festigung und neue Kompetenzen.", en: "Growth, consolidation and new skills." })
              },
              {
                number: '3',
                title: 'Ensino Médio',
                age: t({ pt: 'Idade: 15–18 anos', it: 'Età: 15–18 anni', de: "Alter: 15–18 Jahre", en: "Ages: 15–18" }),
                desc: t({ pt: 'Preparação para a vida adulta, para o estudo e para o trabalho.', it: 'Preparazione alla vita adulta, allo studio e al lavoro.', de: "Vorbereitung auf das Erwachsenenleben, das Studium und den Beruf.", en: "Preparation for adult life, further study and work." })
              },
              {
                number: '+',
                title: t({ pt: 'Escolas profissionais', it: 'Scuole professionali', de: "Berufsschulen", en: "Vocational schools" }),
                age: t({ pt: 'Percursos futuros', it: 'Percorsi futuri', de: "Zukünftige Wege", en: "Future paths" }),
                desc: t({ pt: 'Formação prática e profissional.', it: 'Formazione pratica e lavorativa.', de: "Praktische und berufliche Ausbildung.", en: "Practical and vocational training." })
              }
            ].map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 0.1}>
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[var(--deep-blue)] text-white flex items-center justify-center text-2xl font-bold">
                    {item.number}
                  </div>
                  <div className="flex-1 bg-white rounded-2xl p-6 shadow-lg">
                    <h3 className="text-2xl font-bold text-[var(--deep-blue)] mb-2">{item.title}</h3>
                    <p className="text-lg text-gray-600 mb-2">{item.age}</p>
                    <p className="text-gray-700">{item.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-24" style={{ display: 'block', marginTop: '-1px' }}>
        <path d="M0,50 C300,90 600,10 900,50 C1050,70 1150,50 1200,50 L1200,120 L0,120 Z" fill="#ffffff" />
      </svg>

      {/* SECTION 5 - CHI ACCOGLIERÀ */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl text-[var(--deep-blue)] mb-12 text-center">
              {t({ pt: 'Continuidade com as crianças da creche', it: "Continuità con i bambini dell'asilo", de: "Kontinuität mit den Kindern der Kita", en: "Continuity with the nursery school children" })}
            </h2>
            <div className="space-y-6 text-xl text-gray-700 leading-relaxed mb-12">
              <p>
                {t({ pt: 'A escola nasce para dar continuidade ao caminho educativo já iniciado na creche.', it: "La scuola nasce per dare continuità al cammino educativo già iniziato nell'asilo.", de: "Die Schule entsteht, um den bereits in der Kita begonnenen Bildungsweg fortzusetzen.", en: "The school is being built to give continuity to the educational journey already begun at the nursery school." })}
              </p>
              <p>
                {t({ pt: 'O objetivo é acompanhar as crianças que já frequentam o Centro, mantendo uma relação construída ao longo dos anos com elas e com as famílias.', it: "L'obiettivo è accompagnare i bambini che già frequentano il Centro, mantenendo una relazione costruita negli anni con loro e con le famiglie.", de: "Ziel ist es, die Kinder zu begleiten, die das Centro bereits besuchen, und die über Jahre aufgebaute Beziehung zu ihnen und ihren Familien zu bewahren.", en: "The goal is to accompany the children who already attend the Centre, maintaining a relationship built over the years with them and their families." })}
              </p>
              <p>
                {t({ pt: 'Esta escolha permite oferecer um percurso mais estável, mais seguro e mais personalizado.', it: 'Questa scelta permette di offrire un percorso più stabile, più sicuro e più personalizzato.', de: "Diese Entscheidung ermöglicht es, einen stabileren, sichereren und individuelleren Bildungsweg anzubieten.", en: "This choice makes it possible to offer a more stable, safer and more personalised path." })}
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="bg-gradient-to-br from-[var(--warm-orange-light)] to-[var(--warm-orange)] rounded-2xl p-10 text-center shadow-lg">
              <p className="text-2xl md:text-3xl text-white font-light">
                {t({ pt: 'A relação com as crianças e com as famílias é o coração do projeto.', it: 'La relazione con i bambini e con le famiglie è il cuore del progetto.', de: "Die Beziehung zu den Kindern und Familien ist das Herzstück des Projekts.", en: "The relationship with the children and their families is at the heart of the project." })}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 6 - UNA SCUOLA COME VILLAGGIO */}
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-24" style={{ display: 'block', marginTop: '-1px' }}>
        <path d="M0,50 C300,10 600,90 900,50 C1050,30 1150,50 1200,50 L1200,0 L0,0 Z" fill="var(--beige)" />
      </svg>
      <section className="py-20 bg-[var(--beige)]">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl text-[var(--deep-blue)] mb-12 text-center">
              {t({ pt: 'Uma aldeia educativa', it: 'Un villaggio educativo', de: "Ein pädagogisches Dorf", en: "An educational village" })}
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-16 text-center max-w-4xl mx-auto">
              {t({ pt: 'O projeto imagina a escola como uma espécie de aldeia: espaços verdes, ruas internas, percursos cobertos e blocos interligados. Cada área tem uma função específica, mas todas dialogam entre si para criar um ambiente vivo, ordenado e acolhedor.', it: 'Il progetto immagina la scuola come una sorta di villaggio: spazi verdi, strade interne, percorsi coperti e blocchi collegati tra loro. Ogni area ha una funzione specifica, ma tutte dialogano tra loro per creare un ambiente vivo, ordinato e accogliente.', de: "Das Projekt stellt sich die Schule wie eine Art Dorf vor: Grünflächen, interne Wege, überdachte Verbindungen und miteinander verbundene Gebäudeteile. Jeder Bereich hat eine eigene Funktion, doch alle stehen miteinander im Austausch und schaffen so eine lebendige, geordnete und einladende Umgebung.", en: "The project envisions the school as a kind of village: green spaces, internal streets, covered walkways and interconnected blocks. Each area has a specific function, but they all work together to create a living, orderly and welcoming environment." })}
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="rounded-3xl overflow-hidden shadow-2xl mb-12">
              <img loading="lazy"
                src={renderVillaggio}
                alt="Render architettonico del villaggio educativo"
                className="w-full h-auto object-cover"
              />
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              t({ pt: 'Bloco central', it: 'Blocco centrale', de: "Zentraler Gebäudeteil", en: "Central block" }),
              'Fundamental 1',
              'Fundamental 2',
              'Ensino Médio',
              t({ pt: 'Espaços verdes e percursos', it: 'Spazi verdi e percorsi', de: "Grünflächen und Wege", en: "Green spaces and walkways" })
            ].map((item, index) => (
              <AnimatedSection key={item} delay={index * 0.1}>
                <div className="bg-white rounded-2xl p-6 text-center shadow-lg h-full flex items-center justify-center">
                  <p className="text-base font-medium text-[var(--deep-blue)]">{item}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-24" style={{ display: 'block', marginTop: '-1px' }}>
        <path d="M0,50 C300,90 600,10 900,50 C1050,70 1150,50 1200,50 L1200,120 L0,120 Z" fill="#ffffff" />
      </svg>

      {/* SECTION 7 - GLI SPAZI DELLA SCUOLA */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl text-[var(--deep-blue)] mb-12 text-center">
              {t({ pt: 'Espaços pensados para educar', it: 'Spazi pensati per educare', de: "Räume, die zur Bildung einladen", en: "Spaces designed to educate" })}
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-16 text-center max-w-4xl mx-auto">
              {t({ pt: 'A escola será projetada para responder às necessidades educativas das crianças e dos jovens, integrando didática, relação, espiritualidade, esporte e vida comunitária.', it: 'La scuola sarà progettata per rispondere ai bisogni educativi dei bambini e dei ragazzi, integrando didattica, relazione, spiritualità, sport e vita comunitaria.', de: "Die Schule wird so gestaltet, dass sie den Bildungsbedürfnissen der Kinder und Jugendlichen entspricht, indem sie Unterricht, Beziehung, Spiritualität, Sport und Gemeinschaftsleben miteinander verbindet.", en: "The school will be designed to meet the educational needs of children and young people, combining teaching, relationship, spirituality, sport and community life." })}
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: t({ pt: 'Bloco central', it: 'Blocco centrale', de: "Zentraler Gebäudeteil", en: "Central block" }),
                spaces: [
                  t({ pt: 'auditório', it: 'auditorium', de: "Auditorium", en: "auditorium" }),
                  t({ pt: 'capela', it: 'cappella', de: "Kapelle", en: "chapel" }),
                  t({ pt: 'cozinha', it: 'cucina', de: "Küche", en: "kitchen" }),
                  t({ pt: 'refeitório', it: 'refettorio', de: "Speisesaal", en: "dining hall" }),
                  t({ pt: 'secretaria', it: 'segreteria', de: "Sekretariat", en: "administrative office" }),
                  t({ pt: 'direção', it: 'direzione', de: "Leitung", en: "management office" }),
                  t({ pt: 'sala de formação', it: 'sala formazione', de: "Fortbildungsraum", en: "training room" }),
                  t({ pt: 'ginásio / campo esportivo', it: 'palestra / campo sportivo', de: "Turnhalle / Sportplatz", en: "gym / sports field" }),
                  t({ pt: 'depósitos e serviços', it: 'magazzini e servizi', de: "Lager und Serviceräume", en: "storage and utility rooms" })
                ]
              },
              {
                title: 'Fundamental 1',
                spaces: [
                  t({ pt: 'salas de aula', it: 'aule', de: "Klassenzimmer", en: "classrooms" }),
                  t({ pt: 'salas de apoio', it: 'sale di appoggio', de: "Nebenräume", en: "support rooms" }),
                  t({ pt: 'laboratório de informática', it: 'laboratorio informatico', de: "Computerraum", en: "computer lab" }),
                  t({ pt: 'sala de arte', it: 'sala arte', de: "Kunstraum", en: "art room" }),
                  t({ pt: 'biblioteca', it: 'biblioteca', de: "Bibliothek", en: "library" }),
                  t({ pt: 'pátio e varandas', it: 'patio e verande', de: "Innenhof und Veranden", en: "patio and verandas" })
                ]
              },
              {
                title: 'Fundamental 2',
                spaces: [
                  t({ pt: 'salas de aula', it: 'aule', de: "Klassenzimmer", en: "classrooms" }),
                  t({ pt: 'salas de apoio', it: 'sale di appoggio', de: "Nebenräume", en: "support rooms" }),
                  t({ pt: 'espaços compartilhados com o Fundamental 1', it: 'spazi condivisi con Fundamental 1', de: "gemeinsam genutzte Räume mit Fundamental 1", en: "spaces shared with Fundamental 1" }),
                  t({ pt: 'pátio e varandas', it: 'patio e verande', de: "Innenhof und Veranden", en: "patio and verandas" })
                ]
              },
              {
                title: 'Ensino Médio',
                spaces: [
                  t({ pt: 'salas de aula', it: 'aule', de: "Klassenzimmer", en: "classrooms" }),
                  t({ pt: 'laboratório de informática', it: 'laboratorio informatico', de: "Computerraum", en: "computer lab" }),
                  t({ pt: 'laboratório de ciências', it: 'laboratorio di scienze', de: "Naturwissenschaftsraum", en: "science lab" }),
                  t({ pt: 'biblioteca', it: 'biblioteca', de: "Bibliothek", en: "library" }),
                  t({ pt: 'espaços autônomos para alunos e professores', it: 'spazi autonomi per studenti e professori', de: "eigenständige Bereiche für Schüler und Lehrer", en: "independent spaces for students and teachers" })
                ]
              }
            ].map((block, index) => (
              <AnimatedSection key={block.title} delay={index * 0.1}>
                <div className="bg-[var(--beige)] rounded-2xl p-8 shadow-lg h-full">
                  <h3 className="text-2xl font-bold text-[var(--deep-blue)] mb-6">{block.title}</h3>
                  <ul className="space-y-3">
                    {block.spaces.map((space) => (
                      <li key={space} className="flex items-start">
                        <span className="inline-block w-2 h-2 rounded-full bg-[var(--deep-blue)] mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-gray-700">{space}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8 - ARCHITETTURA E PEDAGOGIA */}
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-24" style={{ display: 'block', marginTop: '-1px' }}>
        <path d="M0,50 C300,10 600,90 900,50 C1050,30 1150,50 1200,50 L1200,0 L0,0 Z" fill="var(--beige)" />
      </svg>
      <section className="py-20 bg-[var(--beige)]">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl text-[var(--deep-blue)] mb-12 text-center">
              {t({ pt: 'Quando o espaço se torna educação', it: 'Quando lo spazio diventa educazione', de: "Wenn Raum zu Bildung wird", en: "When space becomes education" })}
            </h2>
            <div className="max-w-4xl mx-auto space-y-6 text-xl text-gray-700 leading-relaxed mb-16 text-center">
              <p>
                {t({ pt: 'O projeto arquitetônico nasce em diálogo com o projeto pedagógico.', it: 'Il progetto architettonico nasce in dialogo con il progetto pedagogico.', de: "Das architektonische Projekt entsteht im Dialog mit dem pädagogischen Konzept.", en: "The architectural project is designed in dialogue with the pedagogical project." })}
              </p>
              <p>
                {t({ pt: 'Os espaços não são pensados apenas para conter aulas, mas para gerar experiências: pesquisa, encontro, brincadeira, concentração, criatividade e relação.', it: 'Gli spazi non sono pensati solo per contenere lezioni, ma per generare esperienze: ricerca, incontro, gioco, concentrazione, creatività e relazione.', de: "Die Räume sind nicht nur dazu gedacht, Unterricht zu beherbergen, sondern Erfahrungen zu ermöglichen: Forschung, Begegnung, Spiel, Konzentration, Kreativität und Beziehung.", en: "The spaces are not designed just to hold lessons, but to generate experiences: research, encounter, play, concentration, creativity and relationship." })}
              </p>
              <p>
                {t({ pt: 'O ambiente torna-se parte do percurso educativo.', it: "L'ambiente diventa parte del percorso educativo.", de: "Die Umgebung wird Teil des Bildungswegs.", en: "The environment becomes part of the educational journey." })}
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              t({ pt: 'ambiente como "terceiro educador"', it: 'ambiente come "terzo educatore"', de: "Umgebung als „dritter Erzieher\"", en: "environment as \"third educator\"" }),
              t({ pt: 'espaços flexíveis', it: 'spazi flessibili', de: "flexible Räume", en: "flexible spaces" }),
              t({ pt: 'contato com a natureza', it: 'contatto con la natura', de: "Kontakt zur Natur", en: "contact with nature" }),
              t({ pt: 'varandas e pátios', it: 'verande e patii', de: "Veranden und Innenhöfe", en: "verandas and patios" }),
              t({ pt: 'materiais e cores neutros', it: 'materiali e colori neutri', de: "neutrale Materialien und Farben", en: "neutral materials and colours" }),
              t({ pt: 'luz natural', it: 'luce naturale', de: "natürliches Licht", en: "natural light" }),
              t({ pt: 'ventilação natural', it: 'ventilazione naturale', de: "natürliche Belüftung", en: "natural ventilation" })
            ].map((item, index) => (
              <AnimatedSection key={item} delay={index * 0.1}>
                <div className="bg-white rounded-2xl p-6 text-center shadow-lg h-full flex items-center justify-center">
                  <p className="text-sm text-gray-700">{item}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-24" style={{ display: 'block', marginTop: '-1px' }}>
        <path d="M0,50 C300,90 600,10 900,50 C1050,70 1150,50 1200,50 L1200,120 L0,120 Z" fill="#ffffff" />
      </svg>

      {/* SECTION 9 - SOSTENIBILITÀ */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl text-[var(--deep-blue)] mb-12 text-center">
              {t({ pt: 'Uma escola pensada para o clima tropical', it: 'Una scuola pensata per il clima tropicale', de: "Eine Schule für das tropische Klima", en: "A school designed for the tropical climate" })}
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-16 text-center max-w-4xl mx-auto">
              {t({ pt: 'A estrutura será projetada com atenção ao contexto climático de Salvador da Bahia. Percursos cobertos, ventilação natural, pátios verdes, sombreamento e painéis fotovoltaicos contribuirão para criar ambientes confortáveis e sustentáveis.', it: 'La struttura sarà progettata con attenzione al contesto climatico di Salvador de Bahia. Percorsi coperti, ventilazione naturale, corti verdi, ombreggiamento e pannelli fotovoltaici contribuiranno a creare ambienti confortevoli e sostenibili.', de: "Das Gebäude wird mit Rücksicht auf das Klima von Salvador de Bahia geplant. Überdachte Wege, natürliche Belüftung, grüne Innenhöfe, Verschattung und Photovoltaikanlagen tragen dazu bei, angenehme und nachhaltige Räume zu schaffen.", en: "The building will be designed with attention to the climate of Salvador de Bahia. Covered walkways, natural ventilation, green courtyards, shading and solar panels will help create comfortable, sustainable environments." })}
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: t({ pt: 'Ventilação natural', it: 'Ventilazione naturale', de: "Natürliche Belüftung", en: "Natural ventilation" }),
                desc: t({ pt: 'Fluxos de ar para ambientes frescos e saudáveis', it: "Flussi d'aria per ambienti freschi e salubri", de: "Luftströme für frische und gesunde Räume", en: "Air flows for cool, healthy environments" })
              },
              {
                title: t({ pt: 'Espaços verdes', it: 'Spazi verdi', de: "Grünflächen", en: "Green spaces" }),
                desc: t({ pt: 'Pátios verdes para sombra e biodiversidade', it: 'Corti verdi per ombra e biodiversità', de: "Grüne Innenhöfe für Schatten und Biodiversität", en: "Green courtyards for shade and biodiversity" })
              },
              {
                title: t({ pt: 'Painéis fotovoltaicos', it: 'Pannelli fotovoltaici', de: "Photovoltaikanlagen", en: "Solar panels" }),
                desc: t({ pt: 'Energia renovável para reduzir o impacto ambiental', it: "Energia rinnovabile per ridurre l'impatto ambientale", de: "Erneuerbare Energie zur Verringerung der Umweltbelastung", en: "Renewable energy to reduce environmental impact" })
              },
              {
                title: t({ pt: 'Percursos cobertos', it: 'Percorsi coperti', de: "Überdachte Wege", en: "Covered walkways" }),
                desc: t({ pt: 'Proteção do sol e da chuva', it: 'Protezione dal sole e dalla pioggia', de: "Schutz vor Sonne und Regen", en: "Protection from sun and rain" })
              }
            ].map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 0.1}>
                <div className="bg-gradient-to-br from-[var(--soft-green)] to-[#7ab89a] text-white rounded-2xl p-8 shadow-lg h-full">
                  <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                  <p className="opacity-90">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10 - VIDEO E RENDER */}
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-24" style={{ display: 'block', marginTop: '-1px' }}>
        <path d="M0,50 C300,10 600,90 900,50 C1050,30 1150,50 1200,50 L1200,0 L0,0 Z" fill="var(--beige)" />
      </svg>
      <section className="py-20 bg-[var(--beige)]">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl text-[var(--deep-blue)] mb-12 text-center">
              {t({ pt: 'Veja como será a escola', it: 'Guarda come sarà la scuola', de: "Sehen Sie, wie die Schule aussehen wird", en: "See what the school will look like" })}
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-16 text-center max-w-4xl mx-auto">
              {t({ pt: 'Os renders e os vídeos permitem imaginar a nova escola antes mesmo de ser concluída: os espaços, os percursos, as salas de aula, a capela, a biblioteca, o auditório e as áreas verdes.', it: "I render e i video permettono di immaginare la nuova scuola prima ancora che sia completata: gli spazi, i percorsi, le aule, la cappella, la biblioteca, l'auditorium e le aree verdi.", de: "Die Renderings und Videos lassen die neue Schule schon erahnen, bevor sie fertiggestellt ist: die Räume, die Wege, die Klassenzimmer, die Kapelle, die Bibliothek, das Auditorium und die Grünflächen.", en: "The renderings and videos allow us to imagine the new school even before it is completed: the spaces, walkways, classrooms, chapel, library, auditorium and green areas." })}
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="rounded-3xl overflow-hidden shadow-2xl mb-12">
              <video
                src={videoProgetto2}
                controls
                className="w-full h-auto"
                poster=""
              >
                {t({ pt: 'O seu navegador não suporta o elemento de vídeo.', it: 'Il tuo browser non supporta il tag video.', de: "Ihr Browser unterstützt das Video-Element nicht.", en: "Your browser does not support the video tag." })}
              </video>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {renderImages.map((imgSrc, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div
                  className="rounded-2xl overflow-hidden shadow-lg cursor-pointer transition-transform hover:scale-105"
                  onClick={() => openLightbox(index)}
                >
                  <img loading="lazy"
                    src={imgSrc}
                    alt={`Render scuola ${index + 1}`}
                    className="w-full h-full object-cover aspect-[4/3]"
                  />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-24" style={{ display: 'block', marginTop: '-1px' }}>
        <path d="M0,50 C300,90 600,10 900,50 C1050,70 1150,50 1200,50 L1200,120 L0,120 Z" fill="#ffffff" />
      </svg>

      {/* SECTION 11 - AVANZAMENTO LAVORI */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl text-[var(--deep-blue)] mb-12 text-center">
              {t({ pt: 'Avanço das obras', it: 'Avanzamento lavori', de: "Baufortschritt", en: "Construction Progress" })}
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-16 text-center max-w-4xl mx-auto">
              {t({ pt: 'A construção da escola será contada passo a passo. Nesta seção serão atualizados vídeos, imagens e notícias do canteiro, para mostrar concretamente a evolução do projeto.', it: 'La costruzione della scuola sarà raccontata passo dopo passo. In questa sezione verranno aggiornati video, immagini e notizie dal cantiere, per mostrare concretamente l\'evoluzione del progetto.', de: "Der Bau der Schule wird Schritt für Schritt dokumentiert. In diesem Bereich werden Videos, Bilder und Neuigkeiten von der Baustelle aktualisiert, um den Fortschritt des Projekts konkret zu zeigen.", en: "The construction of the school will be told step by step. In this section, videos, images and news from the building site will be updated, to concretely show the project's progress." })}
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <div className="text-center">
              <Button variant="secondary" to="/avanzamento-lavori">{t({ pt: 'Acompanhe as atualizações', it: 'Segui gli aggiornamenti', de: "Bleiben Sie auf dem Laufenden", en: "Follow the updates" })}</Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 12 - UN PROGETTO SOSTENUTO */}
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-24" style={{ display: 'block', marginTop: '-1px' }}>
        <path d="M0,50 C300,10 600,90 900,50 C1050,30 1150,50 1200,50 L1200,0 L0,0 Z" fill="var(--beige)" />
      </svg>
      <section className="py-20 bg-[var(--beige)]">
        <div className="max-w-5xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl text-[var(--deep-blue)] mb-12 text-center">
              {t({ pt: 'Um projeto apoiado e partilhado', it: 'Un progetto sostenuto e condiviso', de: "Ein unterstütztes und gemeinsam getragenes Projekt", en: "A supported and shared project" })}
            </h2>
            <div className="bg-white rounded-2xl p-10 shadow-lg text-center">
              <p className="text-xl text-gray-700 leading-relaxed">
                {t({ pt: 'O projeto é promovido pela Fraternidade Franciscana de Betânia com o apoio da IILA – Organização Internacional Ítalo-Latino Americana – e é financiado pelo Ministério dos Negócios Estrangeiros e da Cooperação Internacional.', it: 'Il progetto è promosso dalla Fraternità Francescana di Betania con il sostegno dell\'IILA – Organizzazione Internazionale Italo-Latino Americana – ed è finanziato dal Ministero degli Affari Esteri e della Cooperazione Internazionale.', de: "Das Projekt wird von der Franziskanischen Bruderschaft von Betania mit Unterstützung der IILA – Internationale Italienisch-Lateinamerikanische Organisation – gefördert und vom italienischen Ministerium für Auswärtige Angelegenheiten und Internationale Zusammenarbeit finanziert.", en: "The project is promoted by the Franciscan Fraternity of Betania with the support of IILA – the Italo-Latin American International Organisation – and is funded by the Ministry of Foreign Affairs and International Cooperation." })}
              </p>
              <p className="text-xl text-gray-700 leading-relaxed mt-6">
                {t({ pt: 'Esta rede de apoio torna possível uma obra educativa destinada a gerar um impacto duradouro no território.', it: "Questa rete di sostegno rende possibile un'opera educativa destinata a generare un impatto duraturo nel territorio.", de: "Dieses Unterstützungsnetzwerk macht ein Bildungswerk möglich, das nachhaltige Wirkung in der Region entfalten soll.", en: "This network of support makes possible an educational work destined to generate a lasting impact in the local area." })}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-24" style={{ display: 'block', marginTop: '-1px' }}>
        <path d="M0,50 C300,90 600,10 900,50 C1050,70 1150,50 1200,50 L1200,120 L0,120 Z" fill="#ffffff" />
      </svg>

      {/* SECTION 13 - IMPATTO ATTESO */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl text-[var(--deep-blue)] mb-12 text-center">
              {t({ pt: 'Uma escola para cerca de 300 alunos', it: 'Una scuola per circa 300 studenti', de: "Eine Schule für rund 300 Schüler", en: "A school for around 300 students" })}
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-16 text-center max-w-4xl mx-auto">
              {t({ pt: 'A nova escola permitirá a cerca de 300 alunos receberem uma instrução gratuita, segura e de qualidade. O projeto poderá ainda acolher alunos adicionais através de laboratórios e percursos profissionais.', it: "La nuova scuola permetterà a circa 300 studenti di ricevere un'istruzione gratuita, sicura e di qualità. Il progetto potrà inoltre accogliere studenti aggiuntivi attraverso laboratori e percorsi professionali.", de: "Die neue Schule wird es rund 300 Schülerinnen und Schülern ermöglichen, eine kostenlose, sichere und hochwertige Bildung zu erhalten. Darüber hinaus kann das Projekt durch Werkstätten und Berufsausbildungswege weitere Schüler aufnehmen.", en: "The new school will allow around 300 students to receive a free, safe and quality education. The project will also be able to welcome additional students through workshops and vocational courses." })}
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { number: '300', label: t({ pt: 'alunos', it: 'studenti', de: "Schüler", en: "students" }) },
              { number: '6–18', label: t({ pt: 'anos', it: 'anni', de: "Jahre", en: "years" }) },
              { number: '3', label: t({ pt: 'percursos escolares', it: 'percorsi scolastici', de: "Bildungswege", en: "school paths" }) },
              { number: '100%', label: t({ pt: 'gratuito', it: 'gratuito', de: "kostenlos", en: "free" }) },
              { number: '∞', label: t({ pt: 'educação integral', it: 'educazione integrale', de: "ganzheitliche Bildung", en: "holistic education" }) }
            ].map((item, index) => (
              <AnimatedSection key={item.label} delay={index * 0.1}>
                <div className="bg-[var(--beige)] rounded-2xl p-8 text-center shadow-lg h-full flex flex-col items-center justify-center">
                  <div className="text-4xl font-bold text-[var(--deep-blue)] mb-2">{item.number}</div>
                  <div className="text-sm text-gray-600">{item.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 14 - PERCHÉ SOSTENERLA */}
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-24" style={{ display: 'block', marginTop: '-1px' }}>
        <path d="M0,50 C300,10 600,90 900,50 C1050,30 1150,50 1200,50 L1200,0 L0,0 Z" fill="var(--beige)" />
      </svg>
      <section className="py-20 bg-[var(--beige)]">
        <div className="max-w-5xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl text-[var(--deep-blue)] mb-12 text-center">
              {t({ pt: 'Construir uma escola significa construir futuro', it: 'Costruire una scuola significa costruire futuro', de: "Eine Schule zu bauen bedeutet, Zukunft zu bauen", en: "Building a school means building a future" })}
            </h2>
            <div className="space-y-6 text-xl text-gray-700 leading-relaxed mb-12 text-center">
              <p>
                {t({ pt: 'Cada contribuição ajuda a transformar um projeto num lugar real.', it: 'Ogni contributo aiuta a trasformare un progetto in un luogo reale.', de: "Jeder Beitrag hilft, ein Projekt in einen realen Ort zu verwandeln.", en: "Every contribution helps turn a project into a real place." })}
              </p>
              <p>
                {t({ pt: 'Apoiar esta escola significa oferecer a crianças e jovens uma possibilidade concreta de crescimento, dignidade e esperança.', it: 'Sostenere questa scuola significa offrire a bambini e ragazzi una possibilità concreta di crescita, dignità e speranza.', de: "Diese Schule zu unterstützen bedeutet, Kindern und Jugendlichen eine konkrete Chance auf Wachstum, Würde und Hoffnung zu geben.", en: "Supporting this school means offering children and young people a real chance for growth, dignity and hope." })}
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button to="/dona-ora">{t({ pt: 'Doar agora', it: 'Dona ora', de: "Jetzt spenden", en: "Donate now" })}</Button>
              <Button variant="secondary" to="/dona-ora">{t({ pt: 'Saiba como apoiar', it: 'Scopri come sostenere', de: "Erfahren Sie, wie Sie helfen können", en: "Discover how to help" })}</Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
      {lightboxOpen && (
        <Lightbox
          images={renderImages}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onNext={nextImage}
          onPrev={prevImage}
          alt={t({ pt: 'Renderização da escola', it: 'Render della scuola', de: "Renderings der Schule", en: "Rendering of the school" })}
        />
      )}
    </div>
  );
}
