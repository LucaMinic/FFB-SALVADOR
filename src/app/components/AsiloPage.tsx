import { Button } from './Button';
import { AnimatedSection } from './AnimatedSection';
import { ChevronDown, Instagram, Heart, Globe, Users, Award, Sparkles, HeartHandshake, Apple, PlayCircle, Home } from 'lucide-react';
import { useT } from '../context/LanguageContext';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import heroImg from '../../imports/3-4.jpeg';
import famiglieImg from '../../imports/2-2.jpeg';
import pastiImg from '../../imports/nuove/r4bis.png';
import educazioneImg from '../../imports/11-2.jpeg';
import comunitaImg from '../../imports/13-4.jpeg';
import metodologiaImg from '../../imports/9-1.jpeg';
import formacaoContImg from '../../imports/17-1.jpeg';
import atelieImg from '../../imports/8-2.jpeg';
import alimentacaoProjImg from '../../imports/9-1.jpeg';
import hortaImg from '../../imports/12.jpeg';
import formacaoReligiosaImg from '../../imports/21-1.jpeg';
import relatorioImg1 from '../../imports/4-1.jpeg';
import mostrasImg from '../../imports/4-3.jpeg';
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
                pt: 'ACOLHENDO E TRANSFORMANDO FUTUROS',
                it: 'Accogliere oggi, costruire il futuro.'
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
                <h2 className="text-3xl md:text-4xl text-[var(--deep-blue)] mb-4">
                  {t({ pt: 'A Creche', it: "L'asilo" })}
                </h2>
                <p>
                  {t({
                    pt: 'A creche é um espaço de acolhimento, cuidado e educação das crianças e também de apoio às famílias. Atendemos diariamente 120 crianças de 5 meses a 6 anos, em período integral, das 7h30 às 17h. Ofertamos educação infantil, cinco refeições por dia, além de cuidados com higiene, saúde e o desenvolvimento das crianças.',
                    it: "L'asilo è uno spazio di accoglienza, cura ed educazione dei bambini e anche di sostegno alle famiglie. Accogliamo ogni giorno 120 bambini da 5 mesi a 6 anni, a tempo pieno, dalle 7h30 alle 17h. Offriamo educazione infantile, cinque pasti al giorno, oltre alle cure per l'igiene, la salute e lo sviluppo dei bambini."
                  })}
                </p>
                <p>
                  {t({
                    pt: 'Estamos inseridos em uma comunidade formada, em sua maioria, por famílias trabalhadoras informais, que vivem diferentes situações de vulnerabilidade social. Por isso, a creche tem um papel muito importante: garantir um espaço seguro, acolhedor e cheio de oportunidades de aprendizagem, onde cada criança seja respeitada e valorizada.',
                    it: "Siamo inseriti in una comunità composta, in maggioranza, da famiglie lavoratrici informali, che vivono diverse situazioni di vulnerabilità sociale. Per questo, l'asilo ha un ruolo molto importante: garantire uno spazio sicuro, accogliente e ricco di opportunità di apprendimento, dove ogni bambino sia rispettato e valorizzato."
                  })}
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
            <AnimatedSection>
              <div className="order-2 md:order-1 rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={pastiImg}
                  alt={t({ pt: 'Refeições na creche', it: "I pasti all'asilo" })}
                  className="w-full h-auto object-cover"
                />
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="order-1 md:order-2 space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  {t({
                    pt: 'Um dos pontos importantes do nosso trabalho é a alimentação, oferecida em cinco refeições diárias, pensadas com cuidado para atender às necessidades das crianças ao longo do dia. São elas: café da manhã, lanche da manhã, almoço, lanche da tarde e jantar. Essas refeições são planejadas para garantir uma alimentação equilibrada, nutritiva e saudável, contribuindo para o crescimento, o desenvolvimento e o bem-estar das crianças. Além disso, os momentos das refeições também são educativos, ajudando as crianças a criarem bons hábitos alimentares, aprenderem sobre autonomia, convivência e cuidado com o próprio corpo.',
                    it: "Uno degli aspetti importanti del nostro lavoro è l'alimentazione, offerta in cinque pasti giornalieri, pensati con cura per rispondere alle esigenze dei bambini nel corso della giornata. Questi sono: colazione, merenda del mattino, pranzo, merenda del pomeriggio e cena. I pasti sono pianificati per garantire un'alimentazione equilibrata, nutriente e sana, contribuendo alla crescita, allo sviluppo e al benessere dei bambini. Inoltre, i momenti dei pasti sono anche educativi, aiutando i bambini a costruire buone abitudini alimentari, ad imparare sull'autonomia, la convivenza e la cura del proprio corpo."
                  })}
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-24" style={{ display: 'block', marginTop: '-1px' }}>
        <path d="M0,50 C300,10 600,90 900,50 C1050,30 1150,50 1200,50 L1200,0 L0,0 Z" fill="var(--beige)" />
      </svg>

      {/* SECTION MISSIONE E VALORI */}
      <section className="py-20 bg-[var(--beige)]">
        <div className="max-w-6xl mx-auto px-6">

          {/* Missione — card hero con immagine */}
          <AnimatedSection>
            <div className="relative rounded-3xl overflow-hidden mb-16 min-h-[300px] flex items-center">
              <img src={comunitaImg} alt="" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-[var(--deep-blue)]/72" />
              <div className="relative z-10 px-8 md:px-16 py-12 max-w-3xl">
                <h2 className="text-3xl md:text-5xl text-white mb-5">
                  {t({ pt: 'Nossa Missão', it: 'La nostra missione' })}
                </h2>
                <p className="text-white/90 text-lg leading-relaxed">
                  {t({
                    pt: 'Promover o desenvolvimento integral de crianças em situação de vulnerabilidade social, oferecendo oportunidades de aprendizagem, cuidado, proteção, formação humana e espiritual. Buscamos contribuir para que cada criança construa seu projeto de vida com dignidade, autonomia, esperança e oportunidades, fortalecendo vínculos familiares e comunitários, preparando-se para um futuro mais justo, participativo e promissor.',
                    it: 'Promuovere lo sviluppo integrale di bambini in situazione di vulnerabilità sociale, offrendo opportunità di apprendimento, cura, protezione, formazione umana e spirituale. Cerchiamo di contribuire affinché ogni bambino costruisca il proprio progetto di vita con dignità, autonomia, speranza e opportunità, rafforzando i legami familiari e comunitari, preparandosi a un futuro più giusto, partecipativo e promettente.'
                  })}
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Valori — 4 card con foto */}
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl text-[var(--deep-blue)] mb-8 text-center">
              {t({ pt: 'Nossos Valores', it: 'I nostri valori' })}
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Heart,
                color: 'var(--deep-blue)',
                title: t({ pt: 'Dignidade Humana', it: 'Dignità Umana' }),
                desc: t({ pt: 'Promover o respeito, o cuidado e o desenvolvimento integral de cada criança e família.', it: 'Promuovere il rispetto, la cura e lo sviluppo integrale di ogni bambino e famiglia.' })
              },
              {
                icon: Globe,
                color: 'var(--soft-green)',
                title: t({ pt: 'Bem Comum', it: 'Bene Comune' }),
                desc: t({ pt: 'Atuar para a construção de uma sociedade mais justa, inclusiva e solidária.', it: 'Agire per la costruzione di una società più giusta, inclusiva e solidale.' })
              },
              {
                icon: Users,
                color: 'var(--warm-orange)',
                title: t({ pt: 'Fraternidade e Solidariedade', it: 'Fraternità e Solidarietà' }),
                desc: t({ pt: 'Cultivar relações de acolhimento, respeito e compromisso com o próximo.', it: 'Coltivare relazioni di accoglienza, rispetto e impegno verso il prossimo.' })
              },
              {
                icon: Award,
                color: 'var(--warm-red)',
                title: t({ pt: 'Valorização das Pessoas', it: 'Valorizzazione delle Persone' }),
                desc: t({ pt: 'Reconhecer e fortalecer o trabalho de todos que contribuem para o cuidado e a proteção das crianças.', it: 'Riconoscere e rafforzare il lavoro di tutti coloro che contribuiscono alla cura e alla protezione dei bambini.' })
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

      {/* SECTION 2 - LA NOSTRA METODOLOGIA (panoramica) */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <AnimatedSection>
              <p className="text-sm uppercase tracking-[0.2em] text-[var(--soft-green)] font-semibold mb-4">
                {t({ pt: 'A criança no centro', it: 'Il bambino al centro' })}
              </p>
              <h2 className="text-3xl md:text-4xl text-[var(--deep-blue)] mb-6">
                {t({ pt: 'Nossa metodologia educativa', it: 'La nostra metodologia educativa' })}
              </h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  {t({
                    pt: 'Cada dia na creche nasce de uma visão precisa do desenvolvimento infantil: uma abordagem sócio-interacionista, inspirada no Reggio Emilia Approach e nas Pedagogias Participativas, na qual a criança é protagonista da sua própria aprendizagem.',
                    it: "Ogni giornata all'asilo nasce da una visione precisa dello sviluppo infantile: un approccio socio-interazionista, ispirato al Reggio Emilia Approach e alle Pedagogie Partecipative, in cui il bambino è protagonista del proprio apprendimento."
                  })}
                </p>
                <p>
                  {t({
                    pt: 'Brincadeira, relação, escuta e ambiente tornam-se os instrumentos quotidianos com que acompanhamos cada criança na descoberta de si mesma e do mundo, dentro de um currículo fundado nos campos de experiência da BNCC.',
                    it: "Gioco, relazione, ascolto e ambiente diventano gli strumenti quotidiani con cui accompagniamo ogni bambino nella scoperta di sé e del mondo, all'interno di un curriculum fondato sui campi di esperienza della BNCC."
                  })}
                </p>
              </div>
              <div className="mt-8">
                <Button variant="primary" to="/nossa-metodologia">
                  {t({ pt: 'Descubra nossa metodologia', it: 'Scopri la nostra metodologia' })}
                </Button>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={metodologiaImg}
                  alt={t({ pt: 'Ambiente educativo da creche', it: "Ambiente educativo dell'asilo" })}
                  className="w-full h-auto object-cover"
                />
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection>
            <h3 className="text-2xl md:text-3xl text-[var(--deep-blue)] mb-8 text-center">
              {t({ pt: 'Nossos pilares', it: 'I nostri pilastri' })}
            </h3>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                icon: Sparkles,
                color: 'var(--deep-blue)',
                title: t({ pt: 'Criança Protagonista', it: 'Bambino Protagonista' })
              },
              {
                icon: HeartHandshake,
                color: 'var(--soft-green)',
                title: t({ pt: 'Relações de Cuidado, Afeto e Pertencimento', it: 'Relazioni di Cura, Affetto e Appartenenza' })
              },
              {
                icon: Apple,
                color: 'var(--warm-orange)',
                title: t({ pt: 'Alimentação Saudável e Bem-Estar', it: 'Alimentazione Sana e Benessere' })
              },
              {
                icon: PlayCircle,
                color: 'var(--warm-red)',
                title: t({ pt: 'Aprendizagem pela Experiência e pelo Brincar', it: "Apprendimento attraverso l'Esperienza e il Gioco" })
              },
              {
                icon: Home,
                color: 'var(--warm-orange-light)',
                title: t({ pt: 'Ambiente que Educa', it: 'Ambiente che Educa' })
              }
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="rounded-2xl overflow-hidden shadow-lg h-full flex flex-col">
                  <div className="h-40 flex-shrink-0 flex items-center justify-center" style={{ backgroundColor: item.color }}>
                    <item.icon className="w-16 h-16 text-white" strokeWidth={1.5} />
                  </div>
                  <div className="p-5 bg-white flex-1 flex items-center justify-center" style={{ borderTop: `4px solid ${item.color}` }}>
                    <p className="font-semibold text-base text-center" style={{ color: item.color }}>{item.title}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-24" style={{ display: 'block', marginTop: '-1px' }}>
        <path d="M0,50 C300,10 600,90 900,50 C1050,30 1150,50 1200,50 L1200,0 L0,0 Z" fill="var(--beige)" />
      </svg>

      {/* SECTION 2A - MOSTRE PEDAGOGICHE */}
      <section className="py-20 bg-[var(--beige)]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <p className="text-sm uppercase tracking-[0.2em] text-[var(--soft-green)] font-semibold mb-4">
                {t({ pt: 'Um ano de descobertas partilhadas', it: 'Un anno di scoperte condivise' })}
              </p>
              <h2 className="text-3xl md:text-4xl text-[var(--deep-blue)] mb-6">
                {t({ pt: 'Mostras Pedagógicas', it: 'Mostre Pedagogiche' })}
              </h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  {t({
                    pt: 'As Mostras Pedagógicas são momentos importantes da nossa proposta educativa: através de fotos, registros e projetos desenvolvidos pelas crianças, tornamos visível o percurso de aprendizagem de cada grupo, partilhando-o com as famílias e a comunidade.',
                    it: 'Le Mostre Pedagogiche sono momenti importanti della nostra proposta educativa: attraverso foto, documentazioni e progetti realizzati dai bambini, rendiamo visibile il percorso di apprendimento di ogni gruppo, condividendolo con le famiglie e la comunità.'
                  })}
                </p>
                <p>
                  {t({
                    pt: 'Mais do que apresentar resultados, revelam os processos vividos pelas crianças — como aprendem, investigam, criam e brincam — fortalecendo a parceria entre a creche e as famílias e tornando-se uma preciosa ferramenta de documentação e celebração das aprendizagens.',
                    it: 'Più che mostrare risultati, rivelano i processi vissuti dai bambini — come imparano, investigano, creano e giocano — rafforzando la collaborazione tra asilo e famiglie e diventando un prezioso strumento di documentazione e celebrazione degli apprendimenti.'
                  })}
                </p>
              </div>
              <div className="mt-8">
                <Button variant="primary" to="/nossa-metodologia#mostras-pedagogicas">
                  {t({ pt: 'Descubra as Mostras Pedagógicas', it: 'Scopri le Mostre Pedagogiche' })}
                </Button>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={mostrasImg}
                  alt={t({ pt: 'Mostra pedagógica', it: 'Mostra pedagogica' })}
                  className="w-full h-auto object-cover"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-24" style={{ display: 'block', marginTop: '-1px' }}>
        <path d="M0,50 C300,90 600,10 900,50 C1050,70 1150,50 1200,50 L1200,120 L0,120 Z" fill="#ffffff" />
      </svg>

      {/* SECTION 2B - PROGETTI PERMANENTI */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <p className="text-sm uppercase tracking-[0.2em] text-[var(--warm-orange)] font-semibold mb-4 text-center">
              {t({ pt: 'Durante todo o ano letivo', it: "Durante tutto l'anno scolastico" })}
            </p>
            <h2 className="text-3xl md:text-4xl text-[var(--deep-blue)] mb-6 text-center">
              {t({ pt: 'Projetos Permanentes', it: 'Progetti Permanenti' })}
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed text-center mb-14">
              {t({
                pt: 'Alguns projetos acompanham as crianças ao longo de todo o ano letivo e se entrelaçam com a vida quotidiana da creche, fortalecendo a curiosidade, a autonomia e o protagonismo de cada criança.',
                it: "Alcuni progetti attraversano l'intero anno scolastico e si intrecciano con la vita quotidiana dell'asilo, rafforzando la curiosità, l'autonomia e il protagonismo di ogni bambino."
              })}
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                img: atelieImg,
                color: 'var(--warm-orange)',
                title: t({ pt: 'Ateliê', it: 'Atelier' }),
                desc: t({ pt: 'Criatividade, exploração e múltiplas linguagens através dos materiais.', it: 'Creatività, esplorazione e linguaggi multipli attraverso i materiali.' })
              },
              {
                img: alimentacaoProjImg,
                color: 'var(--soft-green)',
                title: t({ pt: 'Alimentação Saudável', it: 'Alimentazione Sana' }),
                desc: t({ pt: 'Refeições como momentos de aprendizagem, convivência e autonomia.', it: 'Pasti come momenti di apprendimento, convivenza e autonomia.' })
              },
              {
                img: hortaImg,
                color: 'var(--warm-red)',
                title: t({ pt: 'Horta', it: 'Orto' }),
                desc: t({ pt: 'Contato direto com a natureza, o plantio e o cuidado com a vida.', it: 'Contatto diretto con la natura, la semina e la cura della vita.' })
              },
              {
                img: formacaoReligiosaImg,
                color: 'var(--deep-blue)',
                title: t({ pt: 'Formação Religiosa', it: 'Formazione Religiosa' }),
                desc: t({ pt: 'Valores humanos e cristãos cultivados no quotidiano.', it: 'Valori umani e cristiani coltivati nel quotidiano.' })
              }
            ].map((project, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="rounded-2xl overflow-hidden shadow-lg h-full flex flex-col">
                  <div className="relative h-36 flex-shrink-0 overflow-hidden">
                    <img src={project.img} alt={project.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0" style={{ backgroundColor: `${project.color}33` }} />
                  </div>
                  <div className="p-5 bg-[var(--beige)] flex-1" style={{ borderTop: `4px solid ${project.color}` }}>
                    <p className="font-semibold text-base mb-2" style={{ color: project.color }}>{project.title}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{project.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.2}>
            <div className="text-center">
              <Button variant="primary" to="/projetos-permanentes">
                {t({ pt: 'Descubra todos os projetos permanentes', it: 'Scopri tutti i progetti permanenti' })}
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-24" style={{ display: 'block', marginTop: '-1px' }}>
        <path d="M0,50 C300,10 600,90 900,50 C1050,30 1150,50 1200,50 L1200,0 L0,0 Z" fill="var(--beige)" />
      </svg>

      {/* SECTION 2C - RELATÓRIOS */}
      <section className="py-20 bg-[var(--beige)]">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <p className="text-sm uppercase tracking-[0.2em] text-[var(--warm-orange)] font-semibold mb-4 text-center">
              {t({ pt: 'Documentação transparente', it: 'Documentazione trasparente' })}
            </p>
            <h2 className="text-3xl md:text-4xl text-[var(--deep-blue)] mb-6 text-center">
              {t({ pt: 'Relatórios', it: 'Relazioni' })}
            </h2>
            <p className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed text-center mb-14">
              {t({
                pt: 'Publicamos periodicamente relatórios pedagógicos que contam as propostas, as descobertas e os avanços das crianças: um registro vivo e transparente do trabalho quotidiano realizado na creche.',
                it: 'Pubblichiamo periodicamente relazioni pedagogiche che raccontano le proposte, le scoperte e i progressi dei bambini: un registro vivo e trasparente del lavoro quotidiano svolto nell\'asilo.'
              })}
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-lg mb-12">
              <img
                src={relatorioImg1}
                alt={t({ pt: 'Relatórios', it: 'Relazioni' })}
                className="w-full h-auto object-cover"
              />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="text-center">
              <Button variant="primary" to="/relatorios">
                {t({ pt: 'Veja todos os relatórios', it: 'Scopri tutte le relazioni' })}
              </Button>
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
                {t({ pt: 'Laboratórios', it: 'Laboratori' })}
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
                {t({ pt: 'Descubra os laboratórios', it: 'Scopri i laboratori' })}
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-24" style={{ display: 'block', marginTop: '-1px' }}>
        <path d="M0,50 C300,10 600,90 900,50 C1050,30 1150,50 1200,50 L1200,0 L0,0 Z" fill="var(--beige)" />
      </svg>

      {/* SECTION 5 - CHI ANIMA L'ASILO */}
      <section className="py-20 bg-[var(--beige)]">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl text-[var(--deep-blue)] mb-8 text-center">
              {t({ pt: 'Uma comunidade educativa', it: 'Una comunità educativa' })}
            </h2>
            <div className="max-w-3xl mx-auto space-y-4 text-lg text-gray-700 leading-relaxed mb-12 text-center">
              <p>
                {t({ pt: 'Hoje a creche vive graças ao trabalho quotidiano de cerca de 22 pessoas entre direção, equipe pedagógica, professoras, auxiliares, pessoal administrativo, cozinha e serviços gerais.', it: "Oggi l'asilo vive grazie al lavoro quotidiano di circa 22 persone tra direzione, équipe pedagogica, insegnanti, ausiliarie, personale amministrativo, cucina e servizi generali." })}
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
            <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-lg mb-16">
              <img
                src={comunitaImg}
                alt="Uma comunidade educativa"
                className="w-full h-auto object-cover"
              />
            </div>
          </AnimatedSection>

          {/* FORMAÇÃO CONTINUADA DOS PROFESSORES */}
          <AnimatedSection>
            <div className="w-16 h-1 bg-[var(--warm-orange)] mx-auto mb-8 rounded-full" />
            <h3 className="text-2xl md:text-3xl text-[var(--deep-blue)] mb-10 text-center">
              {t({ pt: 'Formação continuada dos nossos professores', it: 'Formazione continua dei nostri insegnanti' })}
            </h3>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection delay={0.1}>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  {t({
                    pt: 'Entendemos que a formação continuada do professor é muito importante para o trabalho que realizamos na creche. Por isso, promovemos esse processo de forma permanente, garantindo momentos de estudo, reflexão e troca de experiências entre a equipe.',
                    it: "Riteniamo che la formazione continua degli insegnanti sia fondamentale per il lavoro che svolgiamo nell'asilo. Per questo, promuoviamo questo processo in modo permanente, garantendo momenti di studio, riflessione e scambio di esperienze tra il team."
                  })}
                </p>
                <p>
                  {t({
                    pt: 'Uma vez por mês, realizamos a formação continuada dos nossos professores, entendendo que o educador precisa estar sempre em processo de aprendizagem. Esses encontros fortalecem a prática pedagógica e ajudam a qualificar ainda mais o trabalho realizado com as crianças.',
                    it: "Una volta al mese realizziamo la formazione continua dei nostri insegnanti, ritenendo che l'educatore abbia sempre bisogno di essere in un processo di apprendimento. Questi incontri rafforzano la pratica pedagogica e contribuiscono a qualificare ulteriormente il lavoro svolto con i bambini."
                  })}
                </p>
                <p>
                  {t({
                    pt: 'Valorizamos um professor atento às necessidades de cada criança, que respeite seus tempos, suas formas de aprender e suas diferentes maneiras de se expressar.',
                    it: "Valorizziamo un insegnante attento ai bisogni di ogni bambino, che rispetti i suoi tempi, le sue modalità di apprendimento e i suoi diversi modi di esprimersi."
                  })}
                </p>
                <p>
                  {t({
                    pt: 'Além disso, incentivamos que os professores se encantem, sejam criativos, que planejem experiências significativas, com intencionalidade que despertam a curiosidade e favorecem a investigação, o brincar e a expressão das crianças. Dessa forma, a formação continuada contribui para um trabalho mais sensível, humano e comprometido com o desenvolvimento integral das crianças.',
                    it: "Incoraggiamo inoltre gli insegnanti a entusiasmarsi, a essere creativi, a pianificare esperienze significative, con intenzionalità che risveglia la curiosità e favorisce l'esplorazione, il gioco e l'espressione dei bambini. In questo modo, la formazione continua contribuisce a un lavoro più sensibile, umano e impegnato nello sviluppo integrale dei bambini."
                  })}
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={formacaoContImg}
                  alt={t({ pt: 'Formação continuada dos professores', it: 'Formazione continua degli insegnanti' })}
                  className="w-full h-auto object-cover"
                />
              </div>
            </AnimatedSection>
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
                  {t({ pt: 'A creche oferece um serviço de educação da primeira infância para crianças de 5 meses a 6 anos, em tempo integral, das 7h30 às 17h.', it: "L'asilo offre un servizio di educazione della prima infanzia per bambini da 5 mesi a 6 anni, a tempo pieno, dalle 7.30 alle 17." })}
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
              { number: '120+', label: t({ pt: 'crianças acolhidas', it: 'bambini accolti' }) },
              { number: '5', label: t({ pt: 'refeições por dia', it: 'pasti al giorno' }) },
              { number: '7.30–17', label: t({ pt: 'tempo integral', it: 'tempo pieno' }) },
              { number: '100%', label: t({ pt: 'gratuito', it: 'gratuito' }) }
            ].map((item, index) => (
              <AnimatedSection key={item.label} delay={index * 0.1}>
                <div className="bg-[var(--beige)] rounded-2xl p-8 text-center shadow-lg">
                  <div className={`${item.number === '7.30–17' ? 'text-2xl' : 'text-4xl'} font-bold text-[var(--deep-blue)] mb-2`}>{item.number}</div>
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
                {t({ pt: 'A Creche acolhe cerca de 120 crianças, dos 5 meses aos 6 anos, divididas em grupos educativos de acordo com a idade.', it: "L'asilo accoglie circa 120 bambini, dai 5 mesi ai 6 anni, suddivisi in gruppi educativi in base all'età." })}
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

      {/* SECTION 6 - CRITERI DI ACCOGLIENZA */}
      <section className="py-20 bg-white">
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
            <div className="bg-[var(--beige)] rounded-2xl p-8 shadow-lg">
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
        <path d="M0,50 C300,10 600,90 900,50 C1050,30 1150,50 1200,50 L1200,0 L0,0 Z" fill="var(--beige)" />
      </svg>

      {/* SECTION 7 - COME AVVIENE L'ISCRIZIONE */}
      <section className="py-20 bg-[var(--beige)]">
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
                desc: t({ pt: 'Na creche, com coleta dos dados e do pedido de inscrição', it: "All'asilo, con raccolta dei dati e della richiesta di inserimento" })
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

      {/* SECTION 8 - RELAZIONE CON LE FAMIGLIE */}
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-24" style={{ display: 'block', marginTop: '-1px' }}>
        <path d="M0,50 C300,90 600,10 900,50 C1050,70 1150,50 1200,50 L1200,120 L0,120 Z" fill="#ffffff" />
      </svg>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl text-[var(--deep-blue)] mb-6">
                {t({ pt: 'Ao lado das famílias', it: 'Accanto alle famiglie' })}
              </h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  {t({ pt: 'A creche atribui grande importância ao diálogo com as famílias, acolhendo e respeitando culturas, histórias e estruturas familiares diversas.', it: "L'asilo attribuisce grande importanza al dialogo con le famiglie, accogliendo e rispettando culture, storie e strutture familiari diverse." })}
                </p>
                <p>
                  {t({ pt: 'O apoio pode tornar-se também muito concreto: cerca de 15 famílias recebem ajudas alimentares e, quando necessário, um acompanhamento mais específico.', it: 'Il sostegno può diventare anche molto concreto: circa 15 famiglie ricevono aiuti alimentari e, quando necessario, un accompagnamento più specifico.' })}
                </p>
              </div>
              <div className="mt-8">
                <Button variant="primary" to="/accompagnamento-famiglie">
                  {t({ pt: 'Acompanhamento das famílias', it: 'Accompagnamento delle famiglie' })}
                </Button>
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
                  it: "Attraverso immagini, attività e momenti quotidiani raccontiamo la vita dell'asilo del Centro Nossa Senhora Aparecida. Seguici per scoprire da vicino i bambini, i percorsi educativi e la vita quotidiana dell'asilo."
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
