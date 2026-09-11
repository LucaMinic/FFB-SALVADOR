import { Button } from './Button';
import { AnimatedSection } from './AnimatedSection';
import { Instagram, Heart, Globe, Users, Award } from 'lucide-react';
import { useT } from '../context/LanguageContext';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { LazyAutoplayVideo } from './LazyAutoplayVideo';
import heroImg from '../../imports/diego/asilo-hero-optimized.jpg';
import crecheVideo from '../../imports/diego/asilo-creche-video.mp4';
import comunitaImg from '../../imports/13-4.jpeg';
import instagramPost1 from '../../imports/3-4.jpeg';
import instagramPost2 from '../../imports/4-1.jpeg';
import instagramPost3 from '../../imports/5-4.jpeg';
import instagramPost4 from '../../imports/7-2.jpeg';
import instagramPost5 from '../../imports/11-2.jpeg';
import instagramPost6 from '../../imports/2-2.jpeg';
import instagramPost7 from '../../imports/3-1.jpeg';
import instagramPost8 from '../../imports/16-3.jpeg';
import instagramPost9 from '../../imports/13-4.jpeg';
import cerchiIntroImg from '../../imports/diego/asilo-cerchi-intro.png';
import cerchiMetodologiaImg from '../../imports/diego/asilo-cerchi-metodologia.png';
import cerchiValoriImg from '../../imports/diego/asilo-cerchi-valori.png';
import cerchiOndeImg from '../../imports/diego/asilo-cerchi-onde.png';
import cerchiPiccoloImg from '../../imports/diego/asilo-cerchi-piccolo.png';

export function AsiloPage() {
  const t = useT();
  return (
    <div className="bg-white">
      {/* SECTION 1 - HERO */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt={t({ pt: 'Creche do Centro Nossa Senhora Aparecida', it: "Asilo del Centro Nossa Senhora Aparecida", de: "Kindertagesstätte des Centro Nossa Senhora Aparecida", en: "Nursery School of the Centro Nossa Senhora Aparecida" })}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--deep-blue)]/70 via-[var(--deep-blue)]/50 to-[var(--deep-blue)]/70"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <AnimatedSection>
            <h1 className="text-5xl md:text-6xl mb-6">
              {t({ pt: 'A creche do Centro Nossa Senhora Aparecida', it: "L'asilo del Centro Nossa Senhora Aparecida", de: "Die Kita des Centro Nossa Senhora Aparecida", en: "The nursery school of the Centro Nossa Senhora Aparecida" })}
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-xl md:text-2xl mb-10 leading-relaxed max-w-3xl mx-auto">
              {t({
                pt: 'ACOLHENDO E TRANSFORMANDO FUTUROS',
                it: 'Accogliere oggi, costruire il futuro.',
                de: "Heute aufnehmen, die Zukunft gestalten.",
                en: "Welcoming today, building the future."
              })}
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" to="/dona-ora" className="text-lg px-8 py-4">
                {t({ pt: 'Doe agora', it: 'Dona ora', de: "Jetzt spenden", en: "Donate now" })}
              </Button>
              <Button variant="secondary" href="#intro-section" className="text-lg px-8 py-4 bg-white/10 backdrop-blur-sm border-white hover:bg-white/20">
                {t({ pt: 'Conheça a Creche', it: "Scopri l'Asilo", de: "Die Kita entdecken", en: "Discover the Nursery School" })}
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 1B - INTRO TEXT */}
      <section id="intro-section" className="relative overflow-hidden py-20 bg-white">
        <img src={cerchiIntroImg} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover opacity-80 pointer-events-none select-none" />
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <h2 className="text-3xl md:text-4xl text-[var(--deep-blue)] mb-4">
                  {t({ pt: 'A Creche', it: "L'asilo", de: "Die Kita", en: "The nursery school" })}
                </h2>
                <p>
                  {t({
                    pt: 'A creche é um espaço de acolhimento, cuidado e educação das crianças e também de apoio às famílias. Atendemos diariamente 120 crianças de 5 meses a 6 anos, em período integral, das 7h30 às 17h. Ofertamos educação infantil, cinco refeições por dia, além de cuidados com higiene, saúde e o desenvolvimento das crianças.',
                    it: "L'asilo è uno spazio di accoglienza, cura ed educazione dei bambini e anche di sostegno alle famiglie. Accogliamo ogni giorno 120 bambini da 5 mesi a 6 anni, a tempo pieno, dalle 7h30 alle 17h. Offriamo educazione infantile, cinque pasti al giorno, oltre alle cure per l'igiene, la salute e lo sviluppo dei bambini.",
                    de: "Die Kita ist ein Ort der Aufnahme, der Fürsorge und der Bildung für Kinder – und zugleich eine Unterstützung für die Familien. Wir betreuen täglich 120 Kinder im Alter von 5 Monaten bis 6 Jahren, ganztägig von 7:30 bis 17:00 Uhr. Wir bieten frühkindliche Bildung, fünf Mahlzeiten am Tag sowie Fürsorge in den Bereichen Hygiene, Gesundheit und kindliche Entwicklung.",
                    en: "The nursery school is a space for welcoming, caring for and educating children, as well as supporting families. Every day we welcome 120 children from 5 months to 6 years old, full-time, from 7:30am to 5pm. We provide early childhood education, five meals a day, as well as care for the children's hygiene, health and development."
                  })}
                </p>
                <p>
                  {t({
                    pt: 'Estamos inseridos em uma comunidade formada, em sua maioria, por famílias trabalhadoras informais, que vivem diferentes situações de vulnerabilidade social. Por isso, a creche tem um papel muito importante: garantir um espaço seguro, acolhedor e cheio de oportunidades de aprendizagem, onde cada criança seja respeitada e valorizada.',
                    it: "Siamo inseriti in una comunità composta, in maggioranza, da famiglie lavoratrici informali, che vivono diverse situazioni di vulnerabilità sociale. Per questo, l'asilo ha un ruolo molto importante: garantire uno spazio sicuro, accogliente e ricco di opportunità di apprendimento, dove ogni bambino sia rispettato e valorizzato.",
                    de: "Wir sind Teil einer Gemeinschaft, die mehrheitlich aus informell arbeitenden Familien besteht, die in unterschiedlichen Situationen sozialer Vulnerabilität leben. Deshalb kommt der Kita eine sehr wichtige Rolle zu: einen sicheren, einladenden Ort voller Lernmöglichkeiten zu gewährleisten, an dem jedes Kind respektiert und wertgeschätzt wird.",
                    en: "We are part of a community made up mostly of families working informal jobs, who face various situations of social vulnerability. That is why the nursery school plays such an important role: guaranteeing a safe, welcoming space full of learning opportunities, where every child is respected and valued."
                  })}
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <LazyAutoplayVideo
                  src={crecheVideo}
                  className="w-full h-auto object-cover"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-24" style={{ display: 'block', marginTop: '-1px' }}>
        <path d="M0,50 C300,10 600,90 900,50 C1050,30 1150,50 1200,50 L1200,0 L0,0 Z" fill="var(--beige)" />
      </svg>

      {/* SECTION MISSIONE E VALORI */}
      <section className="relative overflow-hidden py-20 bg-[var(--beige)]">
        <img src={cerchiValoriImg} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover opacity-80 pointer-events-none select-none" />
        <div className="relative z-10 max-w-6xl mx-auto px-6">

          {/* Missione */}
          <AnimatedSection>
            <div className="rounded-3xl overflow-hidden mb-16 min-h-[300px] flex items-center bg-white">
              <div className="px-8 md:px-16 py-12 max-w-3xl">
                <h2 className="text-3xl md:text-5xl text-[var(--deep-blue)] mb-5">
                  {t({ pt: 'Nossa Missão', it: 'La nostra missione', de: "Unsere Mission", en: "Our mission" })}
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {t({
                    pt: 'Promover o desenvolvimento integral de crianças em situação de vulnerabilidade social, oferecendo oportunidades de aprendizagem, cuidado, proteção, formação humana e espiritual. Buscamos contribuir para que cada criança construa seu projeto de vida com dignidade, autonomia, esperança e oportunidades, fortalecendo vínculos familiares e comunitários, preparando-se para um futuro mais justo, participativo e promissor.',
                    it: 'Promuovere lo sviluppo integrale di bambini in situazione di vulnerabilità sociale, offrendo opportunità di apprendimento, cura, protezione, formazione umana e spirituale. Cerchiamo di contribuire affinché ogni bambino costruisca il proprio progetto di vita con dignità, autonomia, speranza e opportunità, rafforzando i legami familiari e comunitari, preparandosi a un futuro più giusto, partecipativo e promettente.',
                    de: "Die ganzheitliche Entwicklung von Kindern in sozialer Vulnerabilität zu fördern, indem wir Lernmöglichkeiten, Fürsorge, Schutz sowie menschliche und spirituelle Bildung anbieten. Wir möchten dazu beitragen, dass jedes Kind seinen eigenen Lebensweg mit Würde, Selbstständigkeit, Hoffnung und Chancen gestaltet, die familiären und gemeinschaftlichen Bindungen stärkt und sich auf eine gerechtere, partizipativere und vielversprechendere Zukunft vorbereitet.",
                    en: "To promote the overall development of children in situations of social vulnerability, offering opportunities for learning, care, protection, and human and spiritual formation. We seek to help every child build their own life project with dignity, autonomy, hope and opportunity, strengthening family and community bonds and preparing for a fairer, more participatory and promising future."
                  })}
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Valori — 4 card con foto */}
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl text-[var(--deep-blue)] mb-8 text-center">
              {t({ pt: 'Nossos Valores', it: 'I nostri valori', de: "Unsere Werte", en: "Our values" })}
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Heart,
                color: 'var(--deep-blue)',
                title: t({ pt: 'Dignidade Humana', it: 'Dignità Umana', de: "Menschenwürde", en: "Human Dignity" }),
                desc: t({ pt: 'Promover o respeito, o cuidado e o desenvolvimento integral de cada criança e família.', it: 'Promuovere il rispetto, la cura e lo sviluppo integrale di ogni bambino e famiglia.', de: "Respekt, Fürsorge und die ganzheitliche Entwicklung jedes Kindes und jeder Familie fördern.", en: "Promoting the respect, care and overall development of every child and family." })
              },
              {
                icon: Globe,
                color: 'var(--soft-green)',
                title: t({ pt: 'Bem Comum', it: 'Bene Comune', de: "Gemeinwohl", en: "The Common Good" }),
                desc: t({ pt: 'Atuar para a construção de uma sociedade mais justa, inclusiva e solidária.', it: 'Agire per la costruzione di una società più giusta, inclusiva e solidale.', de: "Sich für den Aufbau einer gerechteren, inklusiveren und solidarischeren Gesellschaft einsetzen.", en: "Acting to build a fairer, more inclusive and supportive society." })
              },
              {
                icon: Users,
                color: 'var(--warm-orange)',
                title: t({ pt: 'Fraternidade e Solidariedade', it: 'Fraternità e Solidarietà', de: "Brüderlichkeit und Solidarität", en: "Fraternity and Solidarity" }),
                desc: t({ pt: 'Cultivar relações de acolhimento, respeito e compromisso com o próximo.', it: 'Coltivare relazioni di accoglienza, rispetto e impegno verso il prossimo.', de: "Beziehungen der Aufnahme, des Respekts und des Engagements für den Nächsten pflegen.", en: "Cultivating relationships of welcome, respect and commitment towards others." })
              },
              {
                icon: Award,
                color: 'var(--warm-red)',
                title: t({ pt: 'Valorização das Pessoas', it: 'Valorizzazione delle Persone', de: "Wertschätzung der Menschen", en: "Valuing People" }),
                desc: t({ pt: 'Reconhecer e fortalecer o trabalho de todos que contribuem para o cuidado e a proteção das crianças.', it: 'Riconoscere e rafforzare il lavoro di tutti coloro che contribuiscono alla cura e alla protezione dei bambini.', de: "Die Arbeit all jener anerkennen und stärken, die zur Fürsorge und zum Schutz der Kinder beitragen.", en: "Recognising and strengthening the work of everyone who contributes to the care and protection of children." })
              }
            ].map((value, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="rounded-2xl overflow-hidden shadow-lg h-full flex flex-col">
                  <div className="h-40 flex-shrink-0 flex items-center justify-center" style={{ backgroundColor: value.color }}>
                    <value.icon className="w-16 h-16 text-white" strokeWidth={1.5} />
                  </div>
                  <div className="p-5 bg-white flex-1" style={{ borderTop: `4px solid ${value.color}` }}>
                    <p className="font-semibold text-base mb-2" style={{ color: value.color }}>{value.title}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{value.desc}</p>
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

      {/* SECTION 6 - CRITERI DI ACCOGLIENZA */}
      <section className="relative overflow-hidden py-20 bg-white">
        <img src={cerchiOndeImg} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover opacity-80 pointer-events-none select-none" />
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl text-[var(--deep-blue)] mb-8 text-center">
              {t({ pt: 'Acolher quem mais precisa', it: 'Criteri di selezione', de: "Aufnahmekriterien", en: "Selection criteria" })}
            </h2>
            <div className="max-w-3xl mx-auto space-y-4 text-lg text-gray-700 leading-relaxed mb-8 text-center">
              <p>
                {t({
                  pt: 'A Creche nasce para acolher crianças que, por razões diversas, vivem condições capazes de comprometer o seu desenvolvimento físico, psicológico, emocional ou relacional. Por esse motivo a chegada das crianças na creche passa por critérios avaliativos que assegurem a oportunidade a este público em especial.',
                  it: "L'asilo nasce per accogliere bambini che, per ragioni diverse, vivono condizioni capaci di compromettere il loro sviluppo fisico, psicologico, emotivo o relazionale. Per questo motivo, l'ingresso dei bambini nell'asilo passa attraverso criteri di valutazione che garantiscano l'opportunità a questo pubblico in particolare.",
                  de: "Die Kita wurde ins Leben gerufen, um Kinder aufzunehmen, die aus unterschiedlichen Gründen in Verhältnissen leben, die ihre körperliche, psychische, emotionale oder soziale Entwicklung beeinträchtigen können. Aus diesem Grund durchläuft die Aufnahme der Kinder in der Kita Bewertungskriterien, die diesem besonderen Personenkreis die Chance sichern.",
                  en: "The nursery school was created to welcome children who, for various reasons, live in conditions that could compromise their physical, psychological, emotional or relational development. For this reason, children's admission to the nursery school goes through evaluation criteria that ensure the opportunity for this particular group."
                })}
              </p>
            </div>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <div className="bg-[var(--beige)] rounded-2xl p-8 shadow-lg">
              <p className="text-gray-700 mb-4 font-semibold">{t({ pt: 'Entre as situações consideradas:', it: 'Tra le situazioni considerate:', de: "Zu den berücksichtigten Situationen zählen:", en: "Among the situations considered:" })}</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-[var(--deep-blue)] mt-2 mr-3 flex-shrink-0"></span>
                  <span>{t({ pt: 'pobreza material', it: 'povertà materiale', de: "materielle Armut", en: "material poverty" })}</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-[var(--deep-blue)] mt-2 mr-3 flex-shrink-0"></span>
                  <span>{t({ pt: 'contextos familiares problemáticos', it: 'contesti familiari problematici', de: "problematische familiäre Verhältnisse", en: "troubled family contexts" })}</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-[var(--deep-blue)] mt-2 mr-3 flex-shrink-0"></span>
                  <span>{t({ pt: 'risco de maus-tratos, violência ou negligência', it: 'rischio di maltrattamento, violenza o trascuratezza', de: "Risiko von Misshandlung, Gewalt oder Vernachlässigung", en: "risk of mistreatment, violence or neglect" })}</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-[var(--deep-blue)] mt-2 mr-3 flex-shrink-0"></span>
                  <span>{t({ pt: 'presença de um único genitor que precisa trabalhar', it: 'presenza di un solo genitore che ha necessità di lavorare', de: "nur ein Elternteil vorhanden, das arbeiten muss", en: "a single parent who needs to work" })}</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-[var(--deep-blue)] mt-2 mr-3 flex-shrink-0"></span>
                  <span>{t({ pt: 'desnutrição', it: 'denutrizione', de: "Unterernährung", en: "malnutrition" })}</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-[var(--deep-blue)] mt-2 mr-3 flex-shrink-0"></span>
                  <span>{t({ pt: 'necessidades educativas especiais', it: 'bisogni educativi speciali', de: "besonderer Förderbedarf", en: "special educational needs" })}</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-[var(--deep-blue)] mt-2 mr-3 flex-shrink-0"></span>
                  <span>{t({ pt: 'atrasos cognitivos ou dificuldades comportamentais', it: 'ritardi cognitivi o difficoltà comportamentali', de: "kognitive Entwicklungsverzögerungen oder Verhaltensschwierigkeiten", en: "cognitive delays or behavioural difficulties" })}</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-[var(--deep-blue)] mt-2 mr-3 flex-shrink-0"></span>
                  <span>{t({ pt: 'transtornos do espectro autista', it: 'disturbi dello spettro autistico', de: "Autismus-Spektrum-Störungen", en: "autism spectrum disorders" })}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-24" style={{ display: 'block', marginTop: '-1px' }}>
        <path d="M0,50 C300,10 600,90 900,50 C1050,30 1150,50 1200,50 L1200,0 L0,0 Z" fill="var(--beige)" />
      </svg>

      {/* SECTION 5 - CHI ANIMA L'ASILO */}
      <section className="relative overflow-hidden py-20 bg-[var(--beige)]">
        <img src={cerchiOndeImg} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover opacity-80 pointer-events-none select-none" />
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl text-[var(--deep-blue)] mb-8 text-center">
              {t({ pt: 'Uma comunidade educativa', it: 'Una comunità educativa', de: "Eine Bildungsgemeinschaft", en: "An educational community" })}
            </h2>
            <div className="max-w-3xl mx-auto space-y-4 text-lg text-gray-700 leading-relaxed mb-12 text-center">
              <p>
                {t({ pt: 'Hoje a creche vive graças ao trabalho quotidiano de cerca de 22 pessoas entre direção, equipe pedagógica, professoras, auxiliares, pessoal administrativo, cozinha e serviços gerais.', it: "Oggi l'asilo vive grazie al lavoro quotidiano di circa 22 persone tra direzione, équipe pedagogica, insegnanti, ausiliarie, personale amministrativo, cucina e servizi generali.", de: "Heute lebt die Kita von der täglichen Arbeit von rund 22 Menschen: Leitung, pädagogisches Team, Lehrkräfte, Assistentinnen, Verwaltungspersonal, Küche und allgemeine Dienste.", en: "Today the nursery school runs thanks to the daily work of around 22 people, including management, the pedagogical team, teachers, teaching assistants, administrative staff, kitchen and general services staff." })}
              </p>
              <p>
                {t({ pt: 'A gestão pedagógica é partilhada por uma equipe que coordena a formação, organiza as atividades e avalia o trabalho realizado.', it: 'La gestione pedagogica è condivisa da una équipe che coordina la formazione, organizza le attività e valuta il lavoro svolto.', de: "Die pädagogische Leitung liegt bei einem Team, das die Weiterbildung koordiniert, die Aktivitäten organisiert und die geleistete Arbeit auswertet.", en: "Pedagogical management is shared by a team that coordinates training, organises activities and evaluates the work carried out." })}
              </p>
              <p>
                {t({ pt: 'Cada turma tem uma professora formada em pedagogia e uma auxiliar de turma. Ao lado delas trabalham pessoas dedicadas à cozinha, à secretaria, ao cuidado dos espaços e ao apoio quotidiano.', it: "Ogni classe ha una professoressa laureata in pedagogia e un'ausiliare di classe. Accanto a loro lavorano persone dedicate alla cucina, alla segreteria, alla cura degli spazi e al supporto quotidiano.", de: "Jede Klasse hat eine Lehrerin mit einem Abschluss in Pädagogik und eine Klassenassistentin. An ihrer Seite arbeiten Menschen, die sich der Küche, dem Sekretariat, der Pflege der Räumlichkeiten und der täglichen Unterstützung widmen.", en: "Each class has a teacher with a degree in education and a classroom assistant. Alongside them work people dedicated to the kitchen, administration, the upkeep of the spaces and day-to-day support." })}
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
            {[
              t({ pt: 'Diretora', it: 'Direttrice', de: "Leiterin", en: "Director" }),
              t({ pt: 'Equipe pedagógica', it: 'Équipe pedagogica', de: "Pädagogisches Team", en: "Pedagogical team" }),
              t({ pt: 'Atelierista', it: 'Atelierista', de: "Atelierista", en: "Atelierista" }),
              t({ pt: 'Professoras', it: 'Professoresse', de: "Lehrerinnen", en: "Teachers" }),
              t({ pt: 'Auxiliares de turma', it: 'Ausiliarie di classe', de: "Klassenassistentinnen", en: "Classroom assistants" }),
              t({ pt: 'Cozinha e serviços gerais', it: 'Cucina e servizi generali', de: "Küche und allgemeine Dienste", en: "Kitchen and general services" })
            ].map((item, index) => (
              <AnimatedSection key={item} delay={index * 0.1}>
                <div className="bg-gradient-to-br from-[var(--soft-green)] to-[#7ab89a] text-white rounded-2xl p-6 text-center shadow-lg">
                  <p className="text-lg font-medium">{item}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection>
            <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-lg mb-16">
              <img loading="lazy"
                src={comunitaImg}
                alt="Uma comunidade educativa"
                className="w-full h-auto object-cover"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 4 - I GRUPPI EDUCATIVI */}
      <section className="relative overflow-hidden py-20 bg-[var(--beige)]">
        <img src={cerchiIntroImg} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover opacity-80 pointer-events-none select-none" />
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl text-[var(--deep-blue)] mb-8 text-center">
              {t({ pt: 'As crianças acolhidas', it: 'I bambini accolti', de: "Die aufgenommenen Kinder", en: "The children we welcome" })}
            </h2>
            <div className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed mb-12 text-center">
              <p>
                {t({
                  pt: 'A creche tem capacidade para atender aproximadamente 100 (cem) crianças com idade entre 0 e 5 anos, organizadas em seis grupos, que compreendem: um grupo de Berçário, um grupo 01, um grupo 02, um grupo 03, um grupo 04 e um grupo 5.',
                  it: "L'asilo ha una capacità di accoglienza di circa 100 (cento) bambini di età compresa tra 0 e 5 anni, organizzati in sei gruppi: un gruppo Nido, un gruppo 01, un gruppo 02, un gruppo 03, un gruppo 04 e un gruppo 5.",
                  de: "Die Kita hat eine Kapazität für etwa 100 (hundert) Kinder im Alter von 0 bis 5 Jahren, aufgeteilt in sechs Gruppen: eine Krippengruppe, eine Gruppe 01, eine Gruppe 02, eine Gruppe 03, eine Gruppe 04 und eine Gruppe 5.",
                  en: "The nursery school has capacity for approximately 100 (one hundred) children aged 0 to 5 years, organised into six groups: one Nursery group, group 01, group 02, group 03, group 04 and group 5."
                })}
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { group: 'Grupo 0 / Berçário', age: t({ pt: '5 meses – 11 meses', it: '5 mesi – 11 mesi', de: "5 Monate – 11 Monate", en: "5 months – 11 months" }) },
              { group: 'Grupo 1 / Creche', age: t({ pt: '1 – 2 anos', it: '1 – 2 anni', de: "1 – 2 Jahre", en: "1 – 2 years" }) },
              { group: 'Grupo 2 / Creche', age: t({ pt: '2 – 3 anos', it: '2 – 3 anni', de: "2 – 3 Jahre", en: "2 – 3 years" }) },
              { group: 'Grupo 3 / Creche', age: t({ pt: '3 – 4 anos', it: '3 – 4 anni', de: "3 – 4 Jahre", en: "3 – 4 years" }) },
              { group: 'Grupo 4 / Pré-escola', age: t({ pt: '4 – 5 anos', it: '4 – 5 anni', de: "4 – 5 Jahre", en: "4 – 5 years" }) },
              { group: 'Grupo 5 / Pré-escola', age: t({ pt: '5 – 6 anos', it: '5 – 6 anni', de: "5 – 6 Jahre", en: "5 – 6 years" }) }
            ].map((item, index) => (
              <AnimatedSection key={item.group} delay={index * 0.1}>
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h3 className="text-lg font-bold text-[var(--deep-blue)] mb-2">{item.group}</h3>
                  <p className="text-gray-600">{item.age}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-24" style={{ display: 'block', marginTop: '-1px' }}>
        <path d="M0,50 C300,90 600,10 900,50 C1050,70 1150,50 1200,50 L1200,120 L0,120 Z" fill="var(--beige)" />
      </svg>

      {/* SECTION 7 - COME AVVIENE L'ISCRIZIONE */}
      <section className="relative overflow-hidden py-20 bg-[var(--beige)]">
        <img src={cerchiValoriImg} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover opacity-80 pointer-events-none select-none" />
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl text-[var(--deep-blue)] mb-8 text-center">
              {t({ pt: 'Um percurso de escuta e avaliação', it: 'Un percorso di ascolto e valutazione', de: "Ein Weg des Zuhörens und der Bewertung", en: "A process of listening and assessment" })}
            </h2>
            <div className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed mb-12 text-center">
              <p>
                {t({ pt: 'O processo de inscrição é pensado para conhecer a situação de cada criança e da sua família.', it: 'Il processo di iscrizione è pensato per conoscere la situazione di ogni bambino e della sua famiglia.', de: "Das Aufnahmeverfahren dient dazu, die Situation jedes Kindes und seiner Familie kennenzulernen.", en: "The enrolment process is designed to understand the situation of each child and their family." })}
              </p>
            </div>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: t({ pt: 'Primeira conversa', it: 'Primo colloquio', de: "Erstgespräch", en: "First interview" }),
                desc: t({ pt: 'Na creche, com coleta dos dados e do pedido de inscrição', it: "All'asilo, con raccolta dei dati e della richiesta di inserimento", de: "In der Kita, mit Erfassung der Daten und des Aufnahmeantrags", en: "At the nursery school, gathering information and the enrolment request" })
              },
              {
                step: '2',
                title: t({ pt: 'Avaliação', it: 'Valutazione', de: "Bewertung", en: "Assessment" }),
                desc: t({ pt: 'Das famílias de acordo com as vagas disponíveis e o grau de vulnerabilidade social', it: 'Delle famiglie in base ai posti disponibili e al grado di vulnerabilità sociale', de: "Der Familien anhand der verfügbaren Plätze und des Grads der sozialen Vulnerabilität", en: "Of families based on available places and the degree of social vulnerability" })
              },
              {
                step: '3',
                title: t({ pt: 'Visitas domiciliares', it: 'Visite domiciliari', de: "Hausbesuche", en: "Home visits" }),
                desc: t({ pt: 'Para compreender melhor o contexto de vida da criança', it: 'Per comprendere meglio il contesto di vita del bambino', de: "Um den Lebenskontext des Kindes besser zu verstehen", en: "To better understand the child's living context" })
              }
            ].map((item, index) => (
              <AnimatedSection key={item.step} delay={index * 0.1}>
                <div className="bg-white rounded-2xl p-8 text-center shadow-lg h-full">
                  <div className="w-16 h-16 rounded-full bg-[var(--deep-blue)] text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-[var(--deep-blue)] mb-3">{item.title}</h3>
                  <p className="text-gray-700">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-24" style={{ display: 'block', marginTop: '-1px' }}>
        <path d="M0,50 C300,90 600,10 900,50 C1050,70 1150,50 1200,50 L1200,120 L0,120 Z" fill="#ffffff" />
      </svg>

      {/* SECTION 17 - INSTAGRAM */}
      <section className="relative overflow-hidden py-24 bg-gradient-to-b from-white to-[var(--beige)]">
        <img src={cerchiMetodologiaImg} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover opacity-80 pointer-events-none select-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Instagram className="w-10 h-10 text-[var(--deep-blue)]" />
                <h2 className="text-4xl md:text-5xl text-[var(--deep-blue)]">
                  {t({ pt: 'Acompanhe a creche no Instagram', it: "Segui l'asilo su Instagram", de: "Folgen Sie der Kita auf Instagram", en: "Follow the nursery school on Instagram" })}
                </h2>
              </div>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                {t({
                  pt: 'Compartilhamos imagens, atividades e momentos do cotidiano da creche do Centro Nossa Senhora Aparecida. Siga-nos para acompanhar de perto a vida das crianças, os percursos educativos e o dia a dia da creche.',
                  it: "Attraverso immagini, attività e momenti quotidiani raccontiamo la vita dell'asilo del Centro Nossa Senhora Aparecida. Seguici per scoprire da vicino i bambini, i percorsi educativi e la vita quotidiana dell'asilo.",
                  de: "Mit Bildern, Aktivitäten und Momenten aus dem Alltag erzählen wir vom Leben in der Kita des Centro Nossa Senhora Aparecida. Folgen Sie uns, um die Kinder, die pädagogischen Wege und den Alltag der Kita hautnah zu erleben.",
                  en: "Through images, activities and everyday moments, we tell the story of life at the nursery school of the Centro Nossa Senhora Aparecida. Follow us to get a closer look at the children, the educational journeys and the daily life of the nursery school."
                })}
              </p>
            </div>
          </AnimatedSection>

          <div className="instagram-gallery mb-12">
            <Slider {...{
              dots: false,
              infinite: true,
              speed: 500,
              slidesToShow: 4,
              slidesToScroll: 1,
              autoplay: true,
              autoplaySpeed: 3000,
              swipeToSlide: true,
              draggable: true,
              arrows: false,
              pauseOnHover: true,
              cssEase: 'ease-in-out',
              responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                  }
                },
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                  }
                }
              ]
            }}>
              {[
                instagramPost1,
                instagramPost2,
                instagramPost3,
                instagramPost4,
                instagramPost5,
                instagramPost6,
                instagramPost7,
                instagramPost8,
                instagramPost9,
              ].map((post, index) => (
                <div key={index} className="px-2">
                  <div className="group aspect-square overflow-hidden rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] transition-all duration-300">
                    <img loading="lazy"
                      src={post}
                      alt={t({ pt: `Post Instagram ${index + 1}`, it: `Post Instagram ${index + 1}` })}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          <style>{`
            .instagram-gallery .slick-slide {
              opacity: 1;
            }
            .instagram-gallery .slick-track {
              display: flex;
              gap: 0;
            }
          `}</style>

          <AnimatedSection delay={0.4}>
            <div className="text-center">
              <a
                href="https://www.instagram.com/crecheaparecida/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="secondary">{t({ pt: 'Abrir Instagram', it: 'Vai su Instagram', de: "Zu Instagram", en: "Go to Instagram" })}</Button>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-24" style={{ display: 'block', marginTop: '-1px' }}>
        <path d="M0,50 C300,10 600,90 900,50 C1050,30 1150,50 1200,50 L1200,120 L0,120 Z" fill="#ffffff" />
      </svg>

      {/* SECTION 18 - CTA FINALE */}
      <section className="relative overflow-hidden py-20 bg-white">
        <img src={cerchiPiccoloImg} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover opacity-80 pointer-events-none select-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl text-[var(--deep-blue)] mb-6">
              {t({ pt: 'Apoie a creche', it: "Sostieni l'asilo", de: "Unterstützen Sie die Kita", en: "Support the nursery school" })}
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-10">
              {t({ pt: 'A sua ajuda permite continuar a acolher, educar, nutrir e acompanhar crianças e famílias que vivem situações de vulnerabilidade.', it: 'Il tuo aiuto permette di continuare ad accogliere, educare, nutrire e accompagnare bambini e famiglie che vivono situazioni di vulnerabilità.', de: "Ihre Hilfe ermöglicht es, weiterhin Kinder und Familien in schwierigen Lebenssituationen aufzunehmen, zu bilden, zu ernähren und zu begleiten.", en: "Your help makes it possible to keep welcoming, educating, nourishing and supporting children and families living in vulnerable situations." })}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button to="/dona-ora">{t({ pt: 'Doar agora', it: 'Dona ora', de: "Jetzt spenden", en: "Donate now" })}</Button>
              <Button variant="secondary" to="/dona-ora">{t({ pt: 'Saiba como apoiar', it: 'Scopri come sostenere', de: "Erfahren Sie, wie Sie helfen können", en: "Discover how to help" })}</Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
