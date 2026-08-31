import { useState } from 'react';
import { ArrowLeft, Expand } from 'lucide-react';
import { Link } from 'react-router';
import { useT } from '../context/LanguageContext';
import { AnimatedSection } from './AnimatedSection';
import { Button } from './Button';
import { Lightbox } from './Lightbox';
import heroImg from '../../imports/diego/jovens-betania-capa.jpg';
import img1 from '../../imports/diego/jovens-betania-grupo-capela.jpg';
import img2 from '../../imports/diego/jovens-betania-torre.jpg';
import img3 from '../../imports/diego/jovens-betania-museu.jpg';
import closingImg from '../../imports/diego/jovens-betania-abraco.jpg';
import gallery1 from '../../imports/diego/jovens-betania-gal-06.jpg';
import gallery2 from '../../imports/diego/jovens-betania-gal-07.jpg';
import gallery3 from '../../imports/diego/jovens-betania-gal-08.jpg';
import gallery4 from '../../imports/diego/jovens-betania-torre.jpg';
import gallery5 from '../../imports/diego/jovens-betania-museu.jpg';
import gallery6 from '../../imports/diego/jovens-betania-gal-09.jpg';
import gallery7 from '../../imports/diego/jovens-betania-gal-10.jpg';
import gallery8 from '../../imports/diego/jovens-betania-gal-11.jpg';
import gallery9 from '../../imports/diego/jovens-betania-capa.jpg';
import gallery10 from '../../imports/diego/jovens-betania-abraco.jpg';
import gallery11 from '../../imports/diego/jovens-betania-grupo-capela.jpg';

export function JovensDeBetaniaPage() {
  const t = useT();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const gallery = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7, gallery8, gallery9, gallery10, gallery11];

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % gallery.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
  };

  const temas = [
    {
      title: t({ pt: 'Organização pessoal e emocional', it: 'Organizzazione personale ed emotiva', de: "Persönliche und emotionale Organisation", en: "Personal and emotional organisation" }),
      description: t({
        pt: 'Aprender a lidar com sentimentos, administrar o tempo e cumprir responsabilidades.',
        it: 'Imparare a gestire i sentimenti, organizzare il tempo e rispettare gli impegni.',
        de: "Lernen, mit Gefühlen umzugehen, die Zeit einzuteilen und Verantwortung zu übernehmen.",
        en: "Learning to handle feelings, manage time and fulfil responsibilities.",
      }),
    },
    {
      title: t({ pt: 'Autoconhecimento e autoestima', it: 'Autoconoscenza e autostima', de: "Selbsterkenntnis und Selbstwertgefühl", en: "Self-knowledge and self-esteem" }),
      description: t({
        pt: 'Reconhecer qualidades e desenvolver força para superar desafios.',
        it: 'Riconoscere le proprie qualità e sviluppare la forza per superare le sfide.',
        de: "Die eigenen Qualitäten erkennen und die Kraft entwickeln, Herausforderungen zu überwinden.",
        en: "Recognising their qualities and building the strength to overcome challenges.",
      }),
    },
    {
      title: t({ pt: 'Projeto de vida e preparação para o futuro', it: 'Progetto di vita e preparazione al futuro', de: "Lebensprojekt und Zukunftsvorbereitung", en: "Life project and preparation for the future" }),
      description: t({
        pt: 'Refletir sobre sonhos, estudos, trabalho e a missão de cada um.',
        it: 'Riflettere su sogni, studio, lavoro e la missione di ciascuno.',
        de: "Über Träume, Ausbildung, Arbeit und die eigene Berufung nachdenken.",
        en: "Reflecting on dreams, studies, work and each one's mission.",
      }),
    },
    {
      title: t({ pt: 'Convivência fraterna, respeito e cidadania', it: 'Convivenza fraterna, rispetto e cittadinanza', de: "Brüderliches Miteinander, Respekt und Bürgersinn", en: "Fraternal living, respect and citizenship" }),
      description: t({
        pt: 'Viver bem com os outros, cuidar do próximo e do mundo.',
        it: 'Vivere bene con gli altri, avere cura del prossimo e del mondo.',
        de: "Gut mit anderen zusammenleben, sich um den Nächsten und die Welt kümmern.",
        en: "Living well with others, caring for one another and for the world.",
      }),
    },
    {
      title: t({ pt: 'Formação espiritual e valores', it: 'Formazione spirituale e valori', de: "Spirituelle Bildung und Werte", en: "Spiritual formation and values" }),
      description: t({
        pt: 'Cultivar fé, solidariedade e simplicidade, seguindo o carisma franciscano.',
        it: 'Coltivare la fede, la solidarietà e la semplicità, seguendo il carisma francescano.',
        de: "Glauben, Solidarität und Einfachheit pflegen, im Geist des franziskanischen Charismas.",
        en: "Cultivating faith, solidarity and simplicity, following the Franciscan charism.",
      }),
    },
  ];

  return (
    <>
      {/* HERO */}
      <section
        className="relative flex flex-col items-center justify-center text-center overflow-hidden"
        style={{ minHeight: 'clamp(70vh, 85vh, 100vh)' }}
      >
        <img src={heroImg} alt="" className="absolute inset-0 w-full h-full object-cover" style={{ objectPosition: 'center 20%' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col items-center gap-8">
          <AnimatedSection delay={0.1}>
            <p className="text-white/70 uppercase tracking-[0.2em] text-sm font-medium mb-4">
              {t({ pt: 'Fundação Betânia Onlus', it: 'Fundação Betânia Onlus', de: "Fundação Betânia Onlus", en: "Fundação Betânia Onlus" })}
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              {t({ pt: 'Jovens de Betânia', it: 'Jovens de Betânia', de: "Jovens de Betânia", en: "Jovens de Betânia" })}
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              {t({
                pt: 'O acolhimento e o acompanhamento de 60 jovens, com idades entre 11 e 25 anos, num caminho de preparação para a vida e de formação humana e espiritual.',
                it: "L'accoglienza e l'accompagnamento di 60 giovani, dagli 11 ai 25 anni, in un cammino di preparazione alla vita e di formazione umana e spirituale.",
                de: "Die Aufnahme und Begleitung von 60 Jugendlichen im Alter von 11 bis 25 Jahren, auf einem Weg der Lebensvorbereitung und der menschlichen und geistlichen Bildung.",
                en: "The welcoming and accompaniment of 60 young people, aged 11 to 25, on a path of preparation for life and human and spiritual formation.",
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
                {t({ pt: 'Saiba mais', it: 'Scopri di più', de: "Mehr erfahren", en: "Learn more" })}
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 1 - JUSTIFICATIVA */}
      <section id="scopri" className="bg-white py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection delay={0.1}>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--deep-blue)] mb-6">
                  {t({ pt: 'Justificativa', it: 'Motivazione', de: "Begründung", en: "Rationale" })}
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {t({
                    pt: 'Além de desenvolver um trabalho no âmbito da educação, a Fundação Betânia também oferece diferentes frentes de formação integral. Uma das ações é o acolhimento e o acompanhamento de 60 jovens, com idades entre 11 e 25 anos.',
                    it: "Oltre a sviluppare un lavoro nell'ambito dell'educazione, la Fundação Betânia offre anche diversi percorsi di formazione integrale. Una delle azioni è l'accoglienza e l'accompagnamento di 60 giovani, dagli 11 ai 25 anni.",
                    de: "Neben der Bildungsarbeit bietet die Fundação Betânia auch verschiedene Wege der ganzheitlichen Bildung an. Eine dieser Maßnahmen ist die Aufnahme und Begleitung von 60 Jugendlichen im Alter von 11 bis 25 Jahren.",
                    en: "Besides its work in education, Fundação Betânia also offers different paths of integral formation. One of these actions is the welcoming and accompaniment of 60 young people, aged 11 to 25.",
                  })}
                </p>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {t({
                    pt: 'Esse acompanhamento não é apenas um atendimento, é um caminho de preparação para a vida e de formação humana e espiritual. O propósito é acompanhar cada jovem de perto, ajudando-o a crescer como pessoa, a reconhecer seu valor e a construir um futuro com mais clareza, propósito e esperança.',
                    it: "Questo accompagnamento non è solo un servizio, è un cammino di preparazione alla vita e di formazione umana e spirituale. Lo scopo è seguire da vicino ogni giovane, aiutandolo a crescere come persona, a riconoscere il proprio valore e a costruire un futuro con più chiarezza, scopo e speranza.",
                    de: "Diese Begleitung ist nicht nur eine Betreuung, sondern ein Weg der Lebensvorbereitung und der menschlichen und geistlichen Bildung. Ziel ist es, jeden Jugendlichen aus der Nähe zu begleiten und ihm zu helfen, als Mensch zu wachsen, seinen eigenen Wert zu erkennen und eine Zukunft mit mehr Klarheit, Sinn und Hoffnung aufzubauen.",
                    en: "This accompaniment is not just a service, it is a path of preparation for life and of human and spiritual formation. Its purpose is to walk closely alongside each young person, helping them grow as a person, recognise their own worth and build a future with more clarity, purpose and hope.",
                  })}
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {t({
                    pt: 'Sabemos que, para os jovens, a presença contínua e o cuidado próximo são essenciais para o desenvolvimento integral, a construção de vínculos e a formação de uma identidade sólida.',
                    it: "Sappiamo che, per i giovani, la presenza continua e la cura vicina sono essenziali per lo sviluppo integrale, la costruzione di legami e la formazione di un'identità solida.",
                    de: "Wir wissen, dass für Jugendliche eine kontinuierliche Präsenz und eine nahe Fürsorge für die ganzheitliche Entwicklung, den Aufbau von Beziehungen und die Bildung einer soliden Identität unerlässlich sind.",
                    en: "We know that, for young people, ongoing presence and close care are essential for their overall development, for building bonds and for forming a solid identity.",
                  })}
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <img loading="lazy"
                src={img1}
                alt={t({ pt: 'Jovens de Betânia', it: 'Jovens de Betânia', de: "Jovens de Betânia", en: "Jovens de Betânia" })}
                className="w-full rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.12)] object-cover h-80 lg:h-96"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* SECTION 2 - TEMAS DE FORMAÇÃO */}
      <section className="bg-[var(--beige)] py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--deep-blue)] text-center mb-6">
              {t({ pt: 'Temas do percurso de formação', it: 'Temi del percorso di formazione', de: "Themen des Bildungswegs", en: "Themes of the formation journey" })}
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="text-gray-600 text-lg text-center max-w-3xl mx-auto mb-16 leading-relaxed">
              {t({
                pt: 'Durante o percurso de formação, os jovens têm acesso a temas fundamentais para a preparação da vida pessoal, social e espiritual.',
                it: 'Durante il percorso di formazione, i giovani hanno accesso a temi fondamentali per la preparazione alla vita personale, sociale e spirituale.',
                de: "Während des Bildungswegs erhalten die Jugendlichen Zugang zu grundlegenden Themen zur Vorbereitung auf das persönliche, soziale und geistliche Leben.",
                en: "During the formation journey, young people have access to fundamental themes for preparing their personal, social and spiritual life.",
              })}
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {temas.map((tema, index) => (
              <AnimatedSection key={tema.title} delay={0.08 * index}>
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all h-full">
                  <p className="text-xl font-semibold text-[var(--deep-blue)] mb-3">{tema.title}</p>
                  <p className="text-gray-600 leading-relaxed">{tema.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 - OBJETIVO */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection delay={0.1} className="order-2 lg:order-1">
              <img loading="lazy"
                src={img2}
                alt={t({ pt: 'Objetivo do projeto', it: 'Obiettivo del progetto', de: "Ziel des Projekts", en: "Project objective" })}
                className="w-full rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.12)] object-cover h-80 lg:h-96"
              />
            </AnimatedSection>
            <AnimatedSection delay={0.2} className="order-1 lg:order-2">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--deep-blue)] mb-6">
                  {t({ pt: 'Objetivo', it: 'Obiettivo', de: "Ziel", en: "Objective" })}
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {t({
                    pt: 'Acompanhar jovens de 11 a 25 anos por meio de formação integral, ajudando-os a reconhecer seu valor e a construir um futuro com mais propósito e esperança.',
                    it: 'Accompagnare i giovani dagli 11 ai 25 anni attraverso una formazione integrale, aiutandoli a riconoscere il proprio valore e a costruire un futuro con più scopo e speranza.',
                    de: "Jugendliche im Alter von 11 bis 25 Jahren durch ganzheitliche Bildung zu begleiten und ihnen zu helfen, ihren eigenen Wert zu erkennen und eine Zukunft mit mehr Sinn und Hoffnung aufzubauen.",
                    en: "Accompanying young people aged 11 to 25 through integral formation, helping them recognise their worth and build a future with more purpose and hope.",
                  })}
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* SECTION 4 - COMO ACONTECEM OS ENCONTROS */}
      <section className="bg-[var(--beige)] py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection delay={0.1}>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[var(--deep-blue)] mb-6">
                  {t({ pt: 'Como acontecem os encontros', it: 'Come si svolgono gli incontri', de: "Wie die Treffen ablaufen", en: "How the meetings take place" })}
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {t({
                    pt: 'Os encontros acontecem mensalmente, organizados em três grupos, de acordo com a faixa etária dos jovens. Essa organização permite estar atentos às necessidades, interesses e experiências próprias de cada jovem, favorecendo uma participação mais significativa, além de estreitar laços de confiança entre os jovens e o carisma da Fraternidade Franciscana de Betânia.',
                    it: "Gli incontri si svolgono mensilmente, organizzati in tre gruppi, in base alla fascia d'età dei giovani. Questa organizzazione permette di essere attenti ai bisogni, agli interessi e alle esperienze proprie di ciascun giovane, favorendo una partecipazione più significativa e rafforzando i legami di fiducia tra i giovani e il carisma della Fraternità Francescana di Betania.",
                    de: "Die Treffen finden monatlich statt und sind in drei Gruppen nach Altersgruppen der Jugendlichen organisiert. Diese Aufteilung ermöglicht es, auf die Bedürfnisse, Interessen und Erfahrungen jedes Einzelnen einzugehen, eine bedeutungsvollere Teilnahme zu fördern und die Vertrauensbande zwischen den Jugendlichen und dem Charisma der Franziskanischen Gemeinschaft von Betania zu stärken.",
                    en: "The meetings take place monthly, organised into three groups according to the young people's age range. This organisation allows attention to each young person's needs, interests and experiences, favouring more meaningful participation and strengthening bonds of trust between the young people and the charism of the Franciscan Fraternity of Betania.",
                  })}
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <img loading="lazy"
                src={img3}
                alt={t({ pt: 'Encontros dos Jovens de Betânia', it: 'Incontri dei Jovens de Betânia', de: "Treffen der Jovens de Betânia", en: "Jovens de Betânia meetings" })}
                className="w-full rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.12)] object-cover h-80 lg:h-96"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* SECTION 5 - GALLERY */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection delay={0.1}>
            <div className="text-center mb-16">
              <div className="w-16 h-1 bg-[var(--warm-orange)] mx-auto mb-8 rounded-full" />
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--deep-blue)]">
                {t({ pt: 'Um olhar sobre os Jovens de Betânia', it: 'Uno sguardo sui Jovens de Betânia', de: "Ein Blick auf die Jovens de Betânia", en: "A look at the Jovens de Betânia" })}
              </h2>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {gallery.map((image, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div
                  className="group aspect-square overflow-hidden rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] transition-all duration-500 cursor-pointer relative"
                  onClick={() => openLightbox(index)}
                >
                  <img loading="lazy"
                    src={image}
                    alt={t({ pt: `Jovens de Betânia ${index + 1}`, it: `Jovens de Betânia ${index + 1}`, de: `Jovens de Betânia ${index + 1}`, en: `Jovens de Betânia ${index + 1}` })}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <Expand className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {lightboxOpen && (
            <Lightbox
              images={gallery}
              currentIndex={currentImageIndex}
              onClose={closeLightbox}
              onNext={nextImage}
              onPrev={prevImage}
              alt={t({ pt: 'Jovens de Betânia', it: 'Jovens de Betânia', de: "Jovens de Betânia", en: "Jovens de Betânia" })}
            />
          )}
        </div>
      </section>

      {/* CLOSING STATEMENT - QUOTE */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img loading="lazy"
            src={closingImg}
            alt=""
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center 30%' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center text-white">
          <AnimatedSection>
            <p className="text-2xl md:text-3xl leading-relaxed italic mb-6">
              {t({
                pt: '"Portadores de paz, unidade, alegria e esperança, segundo o estilo da Fraternidade, na sociedade e na Igreja onde são chamados a florescer."',
                it: '"Portatori di pace, unità, gioia e speranza, secondo lo stile della Fraternità, nella società e nella Chiesa dove sono chiamati a fiorire."',
                de: "„Träger von Frieden, Einheit, Freude und Hoffnung, gemäß dem Stil der Fraternität, in der Gesellschaft und in der Kirche, wo sie berufen sind aufzublühen.“",
                en: "\"Bearers of peace, unity, joy and hope, in the style of the Fraternity, in society and in the Church, where they are called to flourish.\"",
              })}
            </p>
            <p className="text-white/70 text-lg">
              {t({
                pt: 'Padre Pancrazio Nicola Gaudioso, fundador da Fraternidade Franciscana de Betânia',
                it: 'Padre Pancrazio Nicola Gaudioso, fondatore della Fraternità Francescana di Betania',
                de: "Padre Pancrazio Nicola Gaudioso, Gründer der Franziskanischen Gemeinschaft von Betania",
                en: "Father Pancrazio Nicola Gaudioso, founder of the Franciscan Fraternity of Betania",
              })}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--deep-blue)] mb-6">
              {t({ pt: 'Ajuda-nos a acompanhar cada jovem', it: 'Aiutaci ad accompagnare ogni giovane', de: "Hilf uns, jeden Jugendlichen zu begleiten", en: "Help us accompany every young person" })}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
              {t({
                pt: 'Graças ao teu apoio, os Jovens de Betânia podem continuar a contar com um caminho de formação humana e espiritual, cheio de propósito e esperança.',
                it: 'Grazie al tuo sostegno, i Jovens de Betânia possono continuare a contare su un cammino di formazione umana e spirituale, pieno di scopo e speranza.',
                de: "Dank Ihrer Unterstützung können die Jovens de Betânia weiterhin auf einen Weg der menschlichen und geistlichen Bildung zählen, voller Sinn und Hoffnung.",
                en: "Thanks to your support, the Jovens de Betânia can continue to count on a path of human and spiritual formation, full of purpose and hope.",
              })}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <Button variant="primary" to="/dona-ora">
                {t({ pt: 'Doe agora', it: 'Dona ora', de: "Jetzt spenden", en: "Donate now" })}
              </Button>
            </div>
            <Link
              to="/trasparenza#documenti"
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
