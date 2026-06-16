import { Button } from './Button';
import { AnimatedSection } from './AnimatedSection';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ChevronDown, Instagram } from 'lucide-react';
import { useT } from '../context/LanguageContext';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import heroImg from '../../imports/3-4.jpeg';
import asiloHeroImg from '../../imports/3-4.jpeg';
import famiglieImg from '../../imports/2-2.jpeg';
import atelierImg from '../../imports/7-2.jpeg';
import educazioneImg from '../../imports/11-2.jpeg';
import comunitaImg from '../../imports/13-4.jpeg';
import bambinoImg from '../../imports/bambino_al_centro.jpeg';
import instagramPost1 from '../../imports/3-4.jpeg';
import instagramPost2 from '../../imports/4-1.jpeg';
import instagramPost3 from '../../imports/5-4.jpeg';
import instagramPost4 from '../../imports/7-2.jpeg';
import instagramPost5 from '../../imports/11-2.jpeg';
import instagramPost6 from '../../imports/2-2.jpeg';
import instagramPost7 from '../../imports/3-1.jpeg';
import instagramPost8 from '../../imports/16-3.jpeg';
import instagramPost9 from '../../imports/13-4.jpeg';

export function AsiloPage() {
  const t = useT();
  return (
    <div className="bg-white">
      {/* SECTION 1 - HERO */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt={t({ pt: 'Creche do Centro Nossa Senhora Aparecida', it: "Asilo del Centro Nossa Senhora Aparecida" })}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--deep-blue)]/70 via-[var(--deep-blue)]/50 to-[var(--deep-blue)]/70"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <AnimatedSection>
            <h1 className="text-5xl md:text-6xl mb-6">
              {t({ pt: 'A creche do Centro Nossa Senhora Aparecida', it: "L'asilo del Centro Nossa Senhora Aparecida" })}
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-xl md:text-2xl mb-10 leading-relaxed max-w-3xl mx-auto">
              {t({
                pt: 'Um lugar seguro para crescer, aprender e se sentir acolhido.',
                it: 'Un luogo sicuro dove crescere, imparare e sentirsi accolti.'
              })}
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" to="/dona-ora" className="text-lg px-8 py-4">
                {t({ pt: 'Doe agora', it: 'Dona ora' })}
              </Button>
              <Button variant="secondary" href="#intro-section" className="text-lg px-8 py-4 bg-white/10 backdrop-blur-sm border-white hover:bg-white/20">
                {t({ pt: 'Conheça a Creche', it: "Scopri l'Asilo" })}
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
                  {t({ pt: 'A Creche do Centro Nossa Senhora Aparecida é uma creche privada, comunitária e filantrópica, criada para acolher crianças em situação de vulnerabilidade social e acompanhá-las no crescimento.', it: "L'asilo del Centro Nossa Senhora Aparecida è una creche privata, comunitaria e filantropica, nata per accogliere bambini in situazione di vulnerabilità sociale e accompagnarli nella crescita." })}
                </p>
                <p>
                  {t({ pt: 'Cada dia oferece educação, cuidado, nutrição e relação num ambiente seguro, humano e profundamente atento às necessidades de cada criança.', it: 'Ogni giorno offre educazione, cura, nutrizione e relazione in un ambiente sicuro, umano e profondamente attento ai bisogni di ogni bambino.' })}
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/2Sg-SVqwCCQ?autoplay=0&playsinline=1&rel=0"
                    title={t({ pt: 'A creche do Centro Nossa Senhora Aparecida', it: "L'asilo del Centro Nossa Senhora Aparecida" })}
                    frameBorder="0"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* SECTION 2 - CHI SIAMO */}
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-24" style={{ display: 'block', marginTop: '-1px' }}>
        <path d="M0,50 C300,10 600,90 900,50 C1050,30 1150,50 1200,50 L1200,0 L0,0 Z" fill="var(--beige)" />
      </svg>
      <section className="py-20 bg-[var(--beige)]">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl text-[var(--deep-blue)] mb-8 text-center">
              {t({ pt: 'Uma creche comunitária e filantrópica', it: 'Una creche comunitaria e filantropica' })}
            </h2>
            <div className="max-w-3xl mx-auto space-y-4 text-lg text-gray-700 leading-relaxed mb-12 text-center">
              <p>
                {t({ pt: 'A Creche é uma realidade privada, comunitária e filantrópica, dirigida à comunidade local de Salvador da Bahia.', it: "L'asilo è una realtà privata, comunitaria e filantropica, rivolta alla comunità locale di Salvador de Bahia." })}
              </p>
              <p>
                {t({ pt: 'Desde 2016 está conveniada com o Município de Salvador através da SMED, a Secretaria Municipal de Educação. Esta convênio permite sustentar economicamente parte do serviço, mantendo porém a identidade educativa e missionária do Centro.', it: 'Dal 2016 è convenzionato con il Municipio di Salvador attraverso la SMED, la Segreteria Municipale dell\'Educazione. Questa convenzione permette di sostenere economicamente parte del servizio, mantenendo però l\'identità educativa e missionaria del Centro.' })}
              </p>
              <p>
                {t({ pt: 'O serviço permanece completamente gratuito para as famílias.', it: 'Il servizio resta completamente gratuito per le famiglie.' })}
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              t({ pt: 'Creche privada', it: 'Creche privata' }),
              t({ pt: 'Comunitária', it: 'Comunitaria' }),
              t({ pt: 'Filantrópica', it: 'Filantropica' }),
              t({ pt: 'Conveniada com o Município', it: 'Convenzionata con il Municipio' }),
              t({ pt: 'Serviço gratuito', it: 'Servizio gratuito' })
            ].map((item, index) => (
              <AnimatedSection key={item} delay={index * 0.1}>
                <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
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

      {/* SECTION 3 - IL SERVIZIO */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl text-[var(--deep-blue)] mb-12 text-center">
              {t({ pt: 'Educação em tempo integral', it: 'Educazione a tempo pieno' })}
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
            <AnimatedSection>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  {t({ pt: 'A creche oferece um serviço de educação da primeira infância para crianças de 0 a 5 anos, em tempo integral, das 7h30 às 17h30.', it: 'La creche offre un servizio di educazione della prima infanzia per bambini da 0 a 5 anni, a tempo pieno, dalle 7.30 alle 17.30.' })}
                </p>
                <p>
                  {t({ pt: 'Cada dia as crianças recebem cinco refeições: café da manhã, lanche da manhã, almoço, lanche da tarde e jantar.', it: 'Ogni giorno i bambini ricevono cinque pasti: colazione, merenda della mattina, pranzo, merenda del pomeriggio e cena.' })}
                </p>
                <p>
                  {t({ pt: 'Isto permite garantir não apenas educação, mas também cuidado, nutrição, rotina e estabilidade.', it: 'Questo permette di garantire non solo educazione, ma anche cura, nutrizione, routine e stabilità.' })}
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={educazioneImg}
                  alt="Educazione a tempo pieno"
                  className="w-full h-auto object-cover"
                />
              </div>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: '100+', label: t({ pt: 'crianças acolhidas', it: 'bambini accolti' }) },
              { number: '5', label: t({ pt: 'refeições por dia', it: 'pasti al giorno' }) },
              { number: '7.30–17.30', label: t({ pt: 'tempo integral', it: 'tempo pieno' }) },
              { number: '100%', label: t({ pt: 'gratuito', it: 'gratuito' }) }
            ].map((item, index) => (
              <AnimatedSection key={item.label} delay={index * 0.1}>
                <div className="bg-[var(--beige)] rounded-2xl p-8 text-center shadow-lg">
                  <div className={`${item.number === '7.30–17.30' ? 'text-2xl' : 'text-4xl'} font-bold text-[var(--deep-blue)] mb-2`}>{item.number}</div>
                  <div className="text-sm text-gray-600">{item.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 - I GRUPPI EDUCATIVI */}
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-24" style={{ display: 'block', marginTop: '-1px' }}>
        <path d="M0,50 C300,10 600,90 900,50 C1050,30 1150,50 1200,50 L1200,0 L0,0 Z" fill="var(--beige)" />
      </svg>
      <section className="py-20 bg-[var(--beige)]">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl text-[var(--deep-blue)] mb-8 text-center">
              {t({ pt: 'As crianças acolhidas', it: 'I bambini accolti' })}
            </h2>
            <div className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed mb-12 text-center">
              <p>
                {t({ pt: 'A Creche acolhe cerca de 100 crianças, dos 5 meses aos 6 anos, divididas em grupos educativos de acordo com a idade.', it: "L'asilo accoglie circa 100 bambini, dai 5 mesi ai 6 anni, suddivisi in gruppi educativi in base all'età." })}
              </p>
              <p className="mt-4">
                {t({ pt: 'Em 2021 foi ativado também o Grupo 0, o berçário, dedicado às crianças mais pequenas.', it: 'Dal 2021 è stato attivato anche il Gruppo 0, il berçário, dedicato ai bambini più piccoli.' })}
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { group: 'Grupo 0 / Berçário', age: t({ pt: '5 meses – 11 meses', it: '5 mesi – 11 mesi' }) },
              { group: 'Grupo 1 / Creche', age: t({ pt: '1 – 2 anos', it: '1 – 2 anni' }) },
              { group: 'Grupo 2 / Creche', age: t({ pt: '2 – 3 anos', it: '2 – 3 anni' }) },
              { group: 'Grupo 3 / Creche', age: t({ pt: '3 – 4 anos', it: '3 – 4 anni' }) },
              { group: 'Grupo 4 / Pré-escola', age: t({ pt: '4 – 5 anos', it: '4 – 5 anni' }) },
              { group: 'Grupo 5 / Pré-escola', age: t({ pt: '5 – 6 anos', it: '5 – 6 anni' }) }
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
        <path d="M0,50 C300,90 600,10 900,50 C1050,70 1150,50 1200,50 L1200,120 L0,120 Z" fill="#ffffff" />
      </svg>

      {/* SECTION 5 - CHI ANIMA L'ASILO */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl text-[var(--deep-blue)] mb-8 text-center">
              {t({ pt: 'Uma comunidade educativa', it: 'Una comunità educativa' })}
            </h2>
            <div className="max-w-3xl mx-auto space-y-4 text-lg text-gray-700 leading-relaxed mb-12 text-center">
              <p>
                {t({ pt: 'Hoje a creche vive graças ao trabalho quotidiano de cerca de 22 pessoas entre direção, equipe pedagógica, professoras, auxiliares, pessoal administrativo, cozinha e serviços gerais.', it: 'Oggi la creche vive grazie al lavoro quotidiano di circa 22 persone tra direzione, équipe pedagogica, insegnanti, ausiliarie, personale amministrativo, cucina e servizi generali.' })}
              </p>
              <p>
                {t({ pt: 'A gestão pedagógica é partilhada por uma equipe que coordena a formação, organiza as atividades e avalia o trabalho realizado.', it: 'La gestione pedagogica è condivisa da una équipe che coordina la formazione, organizza le attività e valuta il lavoro svolto.' })}
              </p>
              <p>
                {t({ pt: 'Cada turma tem uma professora formada em pedagogia e uma auxiliar de turma. Ao lado delas trabalham pessoas dedicadas à cozinha, à secretaria, ao cuidado dos espaços e ao apoio quotidiano.', it: "Ogni classe ha una professoressa laureata in pedagogia e un'ausiliare di classe. Accanto a loro lavorano persone dedicate alla cucina, alla segreteria, alla cura degli spazi e al supporto quotidiano." })}
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
            {[
              t({ pt: 'Diretora', it: 'Direttrice' }),
              t({ pt: 'Equipe pedagógica', it: 'Équipe pedagogica' }),
              t({ pt: 'Atelierista', it: 'Atelierista' }),
              t({ pt: 'Professoras', it: 'Professoresse' }),
              t({ pt: 'Auxiliares de turma', it: 'Ausiliarie di classe' }),
              t({ pt: 'Cozinha e serviços gerais', it: 'Cucina e servizi generali' })
            ].map((item, index) => (
              <AnimatedSection key={item} delay={index * 0.1}>
                <div className="bg-gradient-to-br from-[var(--soft-green)] to-[#7ab89a] text-white rounded-2xl p-6 text-center shadow-lg">
                  <p className="text-lg font-medium">{item}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection>
            <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-lg">
              <img
                src={comunitaImg}
                alt="Uma comunidade educativa"
                className="w-full h-auto object-cover"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 6 - CRITERI DI ACCOGLIENZA */}
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-24" style={{ display: 'block', marginTop: '-1px' }}>
        <path d="M0,50 C300,10 600,90 900,50 C1050,30 1150,50 1200,50 L1200,0 L0,0 Z" fill="var(--beige)" />
      </svg>
      <section className="py-20 bg-[var(--beige)]">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl text-[var(--deep-blue)] mb-8 text-center">
              {t({ pt: 'Acolher quem mais precisa', it: 'Accogliere chi ha più bisogno' })}
            </h2>
            <div className="max-w-3xl mx-auto space-y-4 text-lg text-gray-700 leading-relaxed mb-8 text-center">
              <p>
                {t({ pt: 'O critério principal para o acolhimento das crianças é a vulnerabilidade social.', it: 'Il criterio principale per l\'accoglienza dei bambini è la vulnerabilità sociale.' })}
              </p>
              <p>
                {t({ pt: 'A Creche nasce para acolher crianças que, por razões diversas, vivem condições capazes de comprometer o seu desenvolvimento físico, psicológico, emocional ou relacional.', it: "L'asilo nasce per accogliere bambini che, per ragioni diverse, vivono condizioni capaci di compromettere il loro sviluppo fisico, psicologico, emotivo o relazionale." })}
              </p>
            </div>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <p className="text-gray-700 mb-4 font-semibold">{t({ pt: 'Entre as situações consideradas:', it: 'Tra le situazioni considerate:' })}</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-[var(--deep-blue)] mt-2 mr-3 flex-shrink-0"></span>
                  <span>{t({ pt: 'pobreza material', it: 'povertà materiale' })}</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-[var(--deep-blue)] mt-2 mr-3 flex-shrink-0"></span>
                  <span>{t({ pt: 'contextos familiares problemáticos', it: 'contesti familiari problematici' })}</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-[var(--deep-blue)] mt-2 mr-3 flex-shrink-0"></span>
                  <span>{t({ pt: 'risco de maus-tratos, violência ou negligência', it: 'rischio di maltrattamento, violenza o trascuratezza' })}</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-[var(--deep-blue)] mt-2 mr-3 flex-shrink-0"></span>
                  <span>{t({ pt: 'presença de um único genitor que precisa trabalhar', it: 'presenza di un solo genitore che ha necessità di lavorare' })}</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-[var(--deep-blue)] mt-2 mr-3 flex-shrink-0"></span>
                  <span>{t({ pt: 'desnutrição', it: 'denutrizione' })}</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-[var(--deep-blue)] mt-2 mr-3 flex-shrink-0"></span>
                  <span>{t({ pt: 'necessidades educativas especiais', it: 'bisogni educativi speciali' })}</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-[var(--deep-blue)] mt-2 mr-3 flex-shrink-0"></span>
                  <span>{t({ pt: 'atrasos cognitivos ou dificuldades comportamentais', it: 'ritardi cognitivi o difficoltà comportamentali' })}</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 rounded-full bg-[var(--deep-blue)] mt-2 mr-3 flex-shrink-0"></span>
                  <span>{t({ pt: 'transtornos do espectro autista', it: 'disturbi dello spettro autistico' })}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-24" style={{ display: 'block', marginTop: '-1px' }}>
        <path d="M0,50 C300,90 600,10 900,50 C1050,70 1150,50 1200,50 L1200,120 L0,120 Z" fill="#ffffff" />
      </svg>

      {/* SECTION 7 - COME AVVIENE L'ISCRIZIONE */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl text-[var(--deep-blue)] mb-8 text-center">
              {t({ pt: 'Um percurso de escuta e avaliação', it: 'Un percorso di ascolto e valutazione' })}
            </h2>
            <div className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed mb-12 text-center">
              <p>
                {t({ pt: 'O processo de inscrição é pensado para conhecer a situação de cada criança e da sua família.', it: 'Il processo di iscrizione è pensato per conoscere la situazione di ogni bambino e della sua famiglia.' })}
              </p>
            </div>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: t({ pt: 'Primeira conversa', it: 'Primo colloquio' }),
                desc: t({ pt: 'Na creche, com coleta dos dados e do pedido de inscrição', it: 'Alla creche, con raccolta dei dati e della richiesta di inserimento' })
              },
              {
                step: '2',
                title: t({ pt: 'Avaliação', it: 'Valutazione' }),
                desc: t({ pt: 'Das famílias de acordo com as vagas disponíveis e o grau de vulnerabilidade social', it: 'Delle famiglie in base ai posti disponibili e al grado di vulnerabilità sociale' })
              },
              {
                step: '3',
                title: t({ pt: 'Visitas domiciliares', it: 'Visite domiciliari' }),
                desc: t({ pt: 'Para compreender melhor o contexto de vida da criança', it: 'Per comprendere meglio il contesto di vita del bambino' })
              }
            ].map((item, index) => (
              <AnimatedSection key={item.step} delay={index * 0.1}>
                <div className="bg-[var(--beige)] rounded-2xl p-8 text-center shadow-lg h-full">
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

      {/* SECTION 8 - RELAZIONE CON LE FAMIGLIE */}
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-24" style={{ display: 'block', marginTop: '-1px' }}>
        <path d="M0,50 C300,10 600,90 900,50 C1050,30 1150,50 1200,50 L1200,0 L0,0 Z" fill="var(--beige)" />
      </svg>
      <section className="py-20 bg-[var(--beige)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl text-[var(--deep-blue)] mb-6">
                {t({ pt: 'Ao lado das famílias', it: 'Accanto alle famiglie' })}
              </h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  {t({ pt: 'A creche atribui grande importância ao diálogo com as famílias, acolhendo e respeitando culturas, histórias e estruturas familiares diversas.', it: 'La creche attribuisce grande importanza al dialogo con le famiglie, accogliendo e rispettando culture, storie e strutture familiari diverse.' })}
                </p>
                <p>
                  {t({ pt: 'Muitas famílias vivem situações frágeis e precárias. Por isso nem sempre é simples envolvê-las no percurso educativo dos filhos, mas o Centro trabalha com constância para construir confiança e participação.', it: 'Molte famiglie vivono situazioni fragili e precarie. Per questo non è sempre semplice coinvolgerle nel percorso educativo dei figli, ma il Centro lavora con costanza per costruire fiducia e partecipazione.' })}
                </p>
                <p>
                  {t({ pt: 'A participação nas reuniões com as professoras é um dos poucos compromissos exigidos às famílias, para que o caminho educativo da criança possa ser compartilhado.', it: 'La partecipazione alle riunioni con le professoresse è uno dei pochi impegni richiesti alle famiglie, perché il cammino educativo del bambino possa essere condiviso.' })}
                </p>
                <p>
                  {t({ pt: 'O apoio pode tornar-se também muito concreto: cerca de 15 famílias recebem ajudas alimentares e, quando necessário, um acompanhamento mais específico.', it: 'Il sostegno può diventare anche molto concreto: circa 15 famiglie ricevono aiuti alimentari e, quando necessario, un accompagnamento più specifico.' })}
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={famiglieImg}
                  alt="Famiglie e asilo"
                  className="w-full h-auto"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-24" style={{ display: 'block', marginTop: '-1px' }}>
        <path d="M0,50 C300,90 600,10 900,50 C1050,70 1150,50 1200,50 L1200,120 L0,120 Z" fill="#ffffff" />
      </svg>

      {/* SECTION 9 - COME LAVORIAMO */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl text-[var(--deep-blue)] mb-8 text-center">
              {t({ pt: 'Uma creche que educa, não apenas cuida', it: 'Un asilo che educa, non solo custodisce' })}
            </h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed text-center">
              <p>
                {t({ pt: 'Hoje a educação da primeira infância não pode mais ser vista como um simples lugar onde as crianças são cuidadas enquanto as famílias trabalham.', it: 'Oggi l\'educazione della prima infanzia non può più essere vista come un semplice luogo dove i bambini vengono accuditi mentre le famiglie lavorano.' })}
              </p>
              <p>
                {t({ pt: 'A Creche é parte da educação básica e une cuidado, educação e brincadeira.', it: "L'asilo è parte dell'educazione di base e unisce cura, educazione e gioco." })}
              </p>
              <p>
                {t({ pt: 'O Projeto Político Pedagógico do Centro Nossa Senhora Aparecida define a identidade da instituição, a sua proposta educativa, a sua organização e o seu papel social, cultural e educativo.', it: 'Il Progetto Politico Pedagogico del Centro Nossa Senhora Aparecida definisce l\'identità dell\'istituzione, la sua proposta educativa, la sua organizzazione e il suo ruolo sociale, culturale ed educativo.' })}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 10 - APPROCCIO PEDAGOGICO */}
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-24" style={{ display: 'block', marginTop: '-1px' }}>
        <path d="M0,50 C300,10 600,90 900,50 C1050,30 1150,50 1200,50 L1200,0 L0,0 Z" fill="var(--beige)" />
      </svg>
      <section className="py-20 bg-[var(--beige)]">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl text-[var(--deep-blue)] mb-12 text-center">
              {t({ pt: 'A criança no centro', it: 'Il bambino al centro' })}
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
            <AnimatedSection delay={0.2}>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={bambinoImg}
                  alt="Il bambino al centro"
                  className="w-full h-auto object-cover"
                />
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  {t({ pt: 'O Centro baseia a sua prática pedagógica numa abordagem sócio-interacionista, que valoriza a interação entre criança, adulto, ambiente e grupo.', it: 'Il Centro basa la propria pratica pedagogica su un approccio socio-interazionista, che valorizza l\'interazione tra bambino, adulto, ambiente e gruppo.' })}
                </p>
                <p>
                  {t({ pt: 'A criança não é considerada um simples destinatário, mas sujeito ativo e autor da sua própria aprendizagem.', it: 'Il bambino non è considerato un semplice destinatario, ma soggetto attivo e autore del proprio apprendimento.' })}
                </p>
                <p>
                  {t({ pt: 'Ao lado desta abordagem, o Centro valoriza as pedagogias participativas, que colocam a criança no centro do processo educativo e a ajudam a participar, questionar, observar, construir e descobrir.', it: 'Accanto a questo approccio, il Centro valorizza le pedagogie partecipative, che mettono il bambino al centro del processo educativo e lo aiutano a partecipare, interrogare, osservare, costruire e scoprire.' })}
                </p>
              </div>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              t({ pt: 'relação adulto-criança', it: 'relazione adulto-bambino' }),
              t({ pt: 'participação', it: 'partecipazione' }),
              t({ pt: 'brincadeira', it: 'gioco' }),
              t({ pt: 'escuta', it: 'ascolto' }),
              t({ pt: 'autonomia', it: 'autonomia' }),
              t({ pt: 'descoberta', it: 'scoperta' })
            ].map((item, index) => (
              <AnimatedSection key={item} delay={index * 0.1}>
                <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
                  <p className="text-lg font-medium text-[var(--deep-blue)]">{item}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-24" style={{ display: 'block', marginTop: '-1px' }}>
        <path d="M0,50 C300,90 600,10 900,50 C1050,70 1150,50 1200,50 L1200,120 L0,120 Z" fill="#ffffff" />
      </svg>

      {/* SECTION 11 - ISPIRAZIONE REGGIO EMILIA */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl text-[var(--deep-blue)] mb-8 text-center">
              {t({ pt: 'A inspiração do Reggio Emilia Approach', it: "L'ispirazione del Reggio Emilia Approach" })}
            </h2>
            <div className="max-w-3xl mx-auto space-y-4 text-lg text-gray-700 leading-relaxed mb-12 text-center">
              <p>
                {t({ pt: 'O Centro não se define uma escola do Reggio Emilia Approach, mas este modelo educativo é uma grande fonte de inspiração.', it: 'Il Centro non si definisce una scuola del Reggio Emilia Approach, ma questo modello educativo è una grande fonte di ispirazione.' })}
              </p>
              <p>
                {t({ pt: 'Desde 2018 a equipe começou a aprofundar estes temas e, após a pandemia, a reabertura da creche em 2021 marcou o início de uma nova fase educativa.', it: "Dal 2018 l'équipe ha iniziato ad approfondire questi temi e, dopo la pandemia, la riapertura della creche nel 2021 ha segnato l'inizio di una nuova fase educativa." })}
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              t({ pt: 'a criança como protagonista', it: 'il bambino come protagonista' }),
              t({ pt: 'o desenvolvimento integral da pessoa', it: 'lo sviluppo integrale della persona' }),
              t({ pt: 'o ambiente como terceiro educador', it: "l'ambiente come terzo educatore" }),
              t({ pt: 'o ateliê como espaço de pesquisa e criatividade', it: "l'atelier come spazio di ricerca e creatività" }),
              t({ pt: 'a documentação educativa', it: 'la documentazione educativa' }),
              t({ pt: 'as cem linguagens da criança', it: 'i cento linguaggi del bambino' })
            ].map((item, index) => (
              <AnimatedSection key={item} delay={index * 0.1}>
                <div className="bg-[var(--beige)] rounded-2xl p-6 shadow-lg h-full flex items-center justify-center text-center">
                  <p className="text-base text-gray-700">{item}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection>
            <div className="bg-gradient-to-br from-[var(--soft-green)] to-[#7ab89a] rounded-2xl p-10 text-center shadow-lg">
              <blockquote className="text-2xl md:text-3xl text-white font-light italic mb-4">
                "Fare una scuola amabile, operosa, inventosa, vivibile, documentabile e comunicabile."
              </blockquote>
              <cite className="text-white/90 text-lg not-italic">— Loris Malaguzzi</cite>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 12 - ATELIER E CONTESTI INVESTIGATIVI */}
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-24" style={{ display: 'block', marginTop: '-1px' }}>
        <path d="M0,50 C300,10 600,90 900,50 C1050,30 1150,50 1200,50 L1200,0 L0,0 Z" fill="var(--beige)" />
      </svg>
      <section className="py-20 bg-[var(--beige)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimatedSection delay={0.2}>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={atelierImg}
                  alt="Atelier e contesti investigativi"
                  className="w-full h-auto"
                />
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl text-[var(--deep-blue)] mb-6">
                {t({ pt: 'Ateliê e contextos investigativos', it: 'Atelier e contesti investigativi' })}
              </h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  {t({ pt: 'O ateliê é um espaço de escuta, criatividade e relação. Estimula a curiosidade, provoca perguntas e ajuda as crianças a expressarem-se através de linguagens diversas.', it: "L'atelier è uno spazio di ascolto, creatività e relazione. Stimola la curiosità, provoca domande e aiuta i bambini a esprimersi attraverso linguaggi diversi." })}
                </p>
                <p>
                  {t({ pt: 'Os contextos investigativos são ambientes pedagógicos pensados para permitir às crianças explorar, observar, formular hipóteses e construir conhecimento.', it: 'I contesti investigativi sono ambienti pedagogici pensati per permettere ai bambini di esplorare, osservare, fare ipotesi e costruire conoscenza.' })}
                </p>
                <p>
                  {t({ pt: 'Não se oferece à criança algo já pronto: criam-se condições para que possa descobrir, experimentar e tornar-se protagonista da sua própria aprendizagem.', it: 'Non si offre al bambino qualcosa di già pronto: si creano condizioni perché possa scoprire, sperimentare e diventare protagonista del proprio apprendimento.' })}
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-24" style={{ display: 'block', marginTop: '-1px' }}>
        <path d="M0,50 C300,90 600,10 900,50 C1050,70 1150,50 1200,50 L1200,120 L0,120 Z" fill="#ffffff" />
      </svg>

      {/* SECTION 13 - CURRICULUM PEDAGOGICO */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl text-[var(--deep-blue)] mb-8 text-center">
              {t({ pt: 'Um currículo fundado na experiência', it: "Un curriculum fondato sull'esperienza" })}
            </h2>
            <div className="max-w-3xl mx-auto space-y-4 text-lg text-gray-700 leading-relaxed mb-12 text-center">
              <p>
                {t({ pt: 'O currículo do Centro Nossa Senhora Aparecida é baseado nos direitos de aprendizagem e nos campos de experiência propostos pela BNCC.', it: 'Il curriculum del Centro Nossa Senhora Aparecida è basato sui diritti di apprendimento e sui campi di esperienza proposti dalla BNCC.' })}
              </p>
              <p>
                {t({ pt: 'Os eixos principais são: interação, brincadeira, experiência, relação e exploração.', it: 'Gli assi principali sono: interazione, gioco, esperienza, relazione ed esplorazione.' })}
              </p>
              <p>
                {t({ pt: 'Os cinco campos de experiência acompanham as crianças na descoberta de si, dos outros, do corpo, das linguagens, do ambiente e do mundo.', it: 'I cinque campi di esperienza accompagnano i bambini nella scoperta di sé, degli altri, del corpo, dei linguaggi, dell\'ambiente e del mondo.' })}
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              t({ pt: 'O eu, o outro e o nós', it: "Il sé, l'altro e il noi" }),
              t({ pt: 'Corpo, gestos e movimentos', it: 'Corpo, gesti e movimenti' }),
              t({ pt: 'Traços, sons, cores e formas', it: 'Tratti, suoni, colori e forme' }),
              t({ pt: 'Escuta, palavra, pensamento e imaginação', it: 'Ascolto, parola, pensiero e immaginazione' }),
              t({ pt: 'Espaços, tempos, quantidades, relações e transformações', it: 'Spazi, tempi, quantità, relazioni e trasformazioni' })
            ].map((item, index) => (
              <AnimatedSection key={item} delay={index * 0.1}>
                <div className="bg-gradient-to-br from-[var(--warm-orange-light)] to-[var(--warm-orange)] text-white rounded-2xl p-8 text-center shadow-lg h-full flex items-center justify-center">
                  <p className="text-lg font-medium">{item}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 14 - TEMI TRASVERSALI */}
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-24" style={{ display: 'block', marginTop: '-1px' }}>
        <path d="M0,50 C300,10 600,90 900,50 C1050,30 1150,50 1200,50 L1200,0 L0,0 Z" fill="var(--beige)" />
      </svg>
      <section className="py-20 bg-[var(--beige)]">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl text-[var(--deep-blue)] mb-8 text-center">
              {t({ pt: 'Educar para a vida', it: 'Educare alla vita' })}
            </h2>
            <div className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed mb-12 text-center">
              <p>
                {t({ pt: 'O trabalho educativo aborda também temas transversais importantes para o crescimento das crianças e para a construção de uma comunidade mais justa e consciente.', it: 'Il lavoro educativo affronta anche temi trasversali importanti per la crescita dei bambini e per la costruzione di una comunità più giusta e consapevole.' })}
              </p>
            </div>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <ul className="space-y-4 text-lg text-gray-700">
                <li className="flex items-start">
                  <span className="inline-block w-3 h-3 rounded-full bg-[var(--soft-green)] mt-2 mr-4 flex-shrink-0"></span>
                  <span>{t({ pt: 'educação étnica e racial', it: 'educazione etnica e razziale' })}</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-3 h-3 rounded-full bg-[var(--soft-green)] mt-2 mr-4 flex-shrink-0"></span>
                  <span>{t({ pt: 'educação inclusiva', it: 'educazione inclusiva' })}</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-3 h-3 rounded-full bg-[var(--soft-green)] mt-2 mr-4 flex-shrink-0"></span>
                  <span>{t({ pt: 'atenção ao género na primeira infância', it: 'attenzione al genere nella prima infanzia' })}</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-3 h-3 rounded-full bg-[var(--soft-green)] mt-2 mr-4 flex-shrink-0"></span>
                  <span>{t({ pt: 'prevenção da violência', it: 'prevenzione della violenza' })}</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-3 h-3 rounded-full bg-[var(--soft-green)] mt-2 mr-4 flex-shrink-0"></span>
                  <span>{t({ pt: 'educação ambiental', it: 'educazione ambientale' })}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-24" style={{ display: 'block', marginTop: '-1px' }}>
        <path d="M0,50 C300,90 600,10 900,50 C1050,70 1150,50 1200,50 L1200,120 L0,120 Z" fill="#ffffff" />
      </svg>

      {/* SECTION 15 - IDENTITÀ CRISTIANA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl text-[var(--deep-blue)] mb-8 text-center">
              {t({ pt: 'Educar com um olhar cristão', it: 'Educare con uno sguardo cristiano' })}
            </h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed text-center">
              <p>
                {t({ pt: 'O Centro Nossa Senhora Aparecida vive também a sua identidade confessional católica.', it: 'Il Centro Nossa Senhora Aparecida vive anche la propria identità confessionale cattolica.' })}
              </p>
              <p>
                {t({ pt: 'O estilo educativo nasce do carisma da Fraternidade Franciscana de Betânia e une método e espiritualidade.', it: 'Lo stile educativo nasce dal carisma della Fraternità Francescana di Betania e unisce metodo e spiritualità.' })}
              </p>
              <p>
                {t({ pt: 'Educar significa também acompanhar o crescimento humano e espiritual, criando um ambiente em que cuidado, relação e atenção à pessoa se tornam experiência quotidiana.', it: 'Educare significa anche accompagnare la crescita umana e spirituale, creando un ambiente in cui cura, relazione e attenzione alla persona diventano esperienza quotidiana.' })}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 16 - DAL PRESENTE AL FUTURO */}
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-24" style={{ display: 'block', marginTop: '-1px' }}>
        <path d="M0,50 C300,10 600,90 900,50 C1050,30 1150,50 1200,50 L1200,0 L0,0 Z" fill="var(--beige)" />
      </svg>
      <section className="py-20 bg-[var(--beige)]">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl text-[var(--deep-blue)] mb-8 text-center">
              {t({ pt: 'Do presente da creche ao futuro da escola', it: "Dal presente dell'asilo al futuro della scuola" })}
            </h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed mb-10 text-center">
              <p>
                {t({ pt: 'A Creche é o presente concreto do Centro Nossa Senhora Aparecida.', it: "L'asilo è il presente concreto del Centro Nossa Senhora Aparecida." })}
              </p>
              <p>
                {t({ pt: 'Desta experiência nasce o desejo de continuar a acompanhar as crianças também após a primeira infância, através do projeto escola.', it: "Da questa esperienza nasce il desiderio di continuare ad accompagnare i bambini anche dopo la prima infanzia, attraverso il progetto scuola." })}
              </p>
            </div>
            <div className="text-center">
              <Button variant="secondary" to="/progetto-scuola">{t({ pt: 'Conheça o projeto escola', it: 'Scopri il progetto scuola' })}</Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-24" style={{ display: 'block', marginTop: '-1px' }}>
        <path d="M0,50 C300,90 600,10 900,50 C1050,70 1150,50 1200,50 L1200,120 L0,120 Z" fill="#ffffff" />
      </svg>

      {/* SECTION - PROGETTI PEDAGOGICI */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <AnimatedSection>
            <div className="bg-gradient-to-br from-[var(--beige)] to-white rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.07)] p-10 md:p-14 text-center">
              <p className="text-sm uppercase tracking-[0.2em] text-[var(--soft-green)] font-semibold mb-4">
                {t({ pt: 'Dentro da Creche', it: "All'interno dell'Asilo" })}
              </p>
              <h2 className="text-3xl md:text-4xl text-[var(--deep-blue)] mb-6">
                {t({ pt: 'Projetos pedagógicos', it: 'Progetti pedagogici' })}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4 max-w-2xl mx-auto">
                {t({
                  pt: 'A vida quotidiana da Creche é animada por percursos educativos pensados para acompanhar cada criança na descoberta de si mesma e do mundo.',
                  it: "La vita quotidiana dell'Asilo è animata da percorsi educativi pensati per accompagnare ogni bambino nella scoperta di sé e del mondo."
                })}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-10 max-w-2xl mx-auto">
                {t({
                  pt: 'Jogo, criatividade, expressão, relação: os projetos pedagógicos nascem da convicção de que cada criança aprende melhor quando se sente valorizada, livre e acompanhada.',
                  it: 'Gioco, creatività, espressione, relazione: i progetti pedagogici nascono dalla convinzione che ogni bambino apprenda meglio quando si sente valorizzato, libero e accompagnato.'
                })}
              </p>
              <Button to="/progetti-pedagogici">
                {t({ pt: 'Descubra os projetos pedagógicos', it: 'Scopri i progetti pedagogici' })}
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 17 - INSTAGRAM */}
      <section className="py-24 bg-gradient-to-b from-white to-[var(--beige)]">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Instagram className="w-10 h-10 text-[var(--deep-blue)]" />
                <h2 className="text-4xl md:text-5xl text-[var(--deep-blue)]">
                  {t({ pt: 'Acompanhe a creche no Instagram', it: "Segui l'asilo su Instagram" })}
                </h2>
              </div>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                {t({
                  pt: 'Compartilhamos imagens, atividades e momentos do cotidiano da creche do Centro Nossa Senhora Aparecida. Siga-nos para acompanhar de perto a vida das crianças, os percursos educativos e o dia a dia da creche.',
                  it: "Attraverso immagini, attività e momenti quotidiani raccontiamo la vita dell'asilo del Centro Nossa Senhora Aparecida. Seguici per scoprire da vicino i bambini, i percorsi educativi e la vita quotidiana della creche."
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
                    <img
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
                <Button variant="secondary">{t({ pt: 'Abrir Instagram', it: 'Vai su Instagram' })}</Button>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-24" style={{ display: 'block', marginTop: '-1px' }}>
        <path d="M0,50 C300,10 600,90 900,50 C1050,30 1150,50 1200,50 L1200,120 L0,120 Z" fill="#ffffff" />
      </svg>

      {/* SECTION 18 - CTA FINALE */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl text-[var(--deep-blue)] mb-6">
              {t({ pt: 'Apoie a creche', it: "Sostieni l'asilo" })}
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-10">
              {t({ pt: 'A sua ajuda permite continuar a acolher, educar, nutrir e acompanhar crianças e famílias que vivem situações de fragilidade.', it: 'Il tuo aiuto permette di continuare ad accogliere, educare, nutrire e accompagnare bambini e famiglie che vivono situazioni di fragilità.' })}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button to="/dona-ora">{t({ pt: 'Doar agora', it: 'Dona ora' })}</Button>
              <Button variant="secondary" to="/dona-ora">{t({ pt: 'Saiba como apoiar', it: 'Scopri come sostenere' })}</Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
