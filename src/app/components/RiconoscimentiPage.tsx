import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { Button } from './Button';
import { AnimatedSection } from './AnimatedSection';
import { Award, Globe, GraduationCap, ChevronDown } from 'lucide-react';
import { useT } from '../context/LanguageContext';
import heroImg from '../../imports/21-5.jpeg';
import educativaImg from '../../imports/13-2.jpeg';
import finalCtaImg from '../../imports/21.jpeg';
import municipioLogo from '../../imports/municipio_salvador.jpg';
import emblemItaly from '../../imports/Emblem_of_Italy.png';

export function RiconoscimentiPage() {
  const t = useT();
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const id = hash.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
    }
  }, [hash]);

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
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--deep-blue)]/70 via-[var(--deep-blue)]/50 to-[var(--deep-blue)]/70"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <AnimatedSection>
            <h1 className="text-5xl md:text-6xl mb-6">
              {t({ pt: 'Reconhecimentos institucionais', it: 'Riconoscimenti istituzionali', de: "Institutionelle Anerkennungen" })}
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-xl md:text-2xl mb-10 leading-relaxed max-w-3xl mx-auto">
              {t({ pt: 'Um caminho reconhecido e apoiado por instituições, entidades públicas e realidades internacionais.', it: 'Un cammino riconosciuto e sostenuto da istituzioni, enti pubblici e realtà internazionali.', de: "Ein Weg, der von Institutionen, öffentlichen Einrichtungen und internationalen Organisationen anerkannt und unterstützt wird." })}
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" href="#intro-section" className="text-lg px-8 py-4 bg-white/10 backdrop-blur-sm border-white hover:bg-white/20">
                {t({ pt: 'Saiba mais', it: 'Scopri di più', de: "Mehr erfahren" })}
              </Button>
              <Button variant="primary" to="/dona-ora" className="text-lg px-8 py-4">
                {t({ pt: 'Doar agora', it: 'Dona ora', de: "Jetzt spenden" })}
              </Button>
            </div>
          </AnimatedSection>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-white/80" />
          </div>
        </div>
      </section>

      {/* SECTION 2 - INTRO */}
      <section id="intro-section" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl text-[var(--deep-blue)] mb-10">
              {t({ pt: 'Um compromisso reconhecido ao longo do tempo', it: 'Un impegno riconosciuto nel tempo', de: "Ein im Laufe der Zeit anerkanntes Engagement" })}
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="space-y-6 text-xl text-gray-700 leading-relaxed">
              <p>
                {t({ pt: 'Ao longo dos anos, o trabalho educativo e social da Fundação Betania ONLUS e do Centro Nossa Senhora Aparecida recebeu atenção, apoio e reconhecimento por parte de instituições italianas, brasileiras e internacionais.', it: 'Negli anni, il lavoro educativo e sociale della Fundação Betania ONLUS e del Centro Nossa Senhora Aparecida ha ricevuto attenzione, sostegno e riconoscimento da parte di istituzioni italiane, brasiliane e internazionali.', de: "Im Laufe der Jahre haben die Bildungs- und Sozialarbeit der Fundação Betania ONLUS und des Centro Nossa Senhora Aparecida Aufmerksamkeit, Unterstützung und Anerkennung von italienischen, brasilianischen und internationalen Institutionen erhalten." })}
              </p>
              <p>
                {t({ pt: 'Estes reconhecimentos representam um sinal concreto da credibilidade, da qualidade educativa e do impacto social do projeto.', it: 'Questi riconoscimenti rappresentano un segno concreto della credibilità, della qualità educativa e dell\'impatto sociale del progetto.', de: "Diese Anerkennungen sind ein konkretes Zeichen für die Glaubwürdigkeit, die pädagogische Qualität und die soziale Wirkung des Projekts." })}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 3 - ISTITUZIONI E RICONOSCIMENTI */}
      <section className="py-20 bg-gradient-to-b from-[#f8f9fb] to-white">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl text-[var(--deep-blue)] text-center mb-16">
              {t({ pt: 'Instituições e realidades que apoiam o projeto', it: 'Istituzioni e realtà che sostengono il progetto', de: "Institutionen und Organisationen, die das Projekt unterstützen" })}
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 - Presidenza Repubblica Italiana */}
            <AnimatedSection>
              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-[var(--deep-blue)] h-full">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-20 h-20 flex items-center justify-center flex-shrink-0 bg-white rounded-lg">
                    <img loading="lazy" src={emblemItaly} alt={t({ pt: 'Emblema da República Italiana', it: 'Emblema della Repubblica Italiana', de: "Emblem der Italienischen Republik" })} className="w-full h-full object-contain" />
                  </div>
                  <h3 className="text-2xl text-[var(--deep-blue)] flex-1">
                    {t({ pt: 'Presidência da República Italiana', it: 'Presidenza della Repubblica Italiana', de: "Präsidentschaft der Italienischen Republik" })}
                  </h3>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {t({ pt: 'Reconhecimento moral e institucional pelo valor humano, educativo e social da obra levada adiante no Brasil.', it: 'Riconoscimento morale e istituzionale per il valore umano, educativo e sociale dell\'opera portata avanti in Brasile.', de: "Moralische und institutionelle Anerkennung für den menschlichen, pädagogischen und sozialen Wert der in Brasilien geleisteten Arbeit." })}
                </p>
              </div>
            </AnimatedSection>

            {/* Card 2 - Municipio Salvador */}
            <AnimatedSection delay={0.1}>
              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-[var(--soft-green)] h-full">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-20 h-20 flex items-center justify-center flex-shrink-0 bg-white rounded-lg">
                    <img loading="lazy" src={municipioLogo} alt={t({ pt: 'Município de Salvador de Bahia', it: 'Municipio di Salvador de Bahia', de: "Stadtverwaltung von Salvador de Bahia" })} className="w-full h-full object-contain" />
                  </div>
                  <h3 className="text-2xl text-[var(--deep-blue)] flex-1">
                    {t({ pt: 'Município de Salvador de Bahia', it: 'Municipio di Salvador de Bahia', de: "Stadtverwaltung von Salvador de Bahia" })}
                  </h3>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {t({ pt: 'Colaboração ativa através da convenção educativa com a SMED – Secretaria Municipal da Educação – para o apoio à creche e à educação da primeira infância.', it: "Collaborazione attiva attraverso la convenzione educativa con la SMED – Segreteria Municipale dell'Educazione – per il sostegno alla creche e all'educazione della prima infanzia.", de: "Aktive Zusammenarbeit durch die Bildungsvereinbarung mit der SMED – Städtisches Sekretariat für Bildung – zur Unterstützung der Kita und der frühkindlichen Bildung." })}
                </p>
              </div>
            </AnimatedSection>

            {/* Card 3 - SMED */}
            <AnimatedSection delay={0.2}>
              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-[var(--warm-orange)] h-full">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-[var(--warm-orange)] to-orange-300 rounded-full flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl text-[var(--deep-blue)] flex-1">
                    SMED – Secretaria Municipal da Educação
                  </h3>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {t({ pt: 'Colaboração educativa e institucional no âmbito da educação da primeira infância e dos serviços educativos do Centro.', it: "Collaborazione educativa e istituzionale nell'ambito dell'educazione della prima infanzia e dei servizi educativi del Centro.", de: "Pädagogische und institutionelle Zusammenarbeit im Bereich der frühkindlichen Bildung und der Bildungsangebote des Centro." })}
                </p>
              </div>
            </AnimatedSection>

            {/* Card 4 - FUNDEB */}
            <AnimatedSection delay={0.3}>
              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-purple-500 h-full">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-300 rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl text-[var(--deep-blue)] flex-1">
                    FUNDEB
                  </h3>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {t({ pt: 'Fundo nacional brasileiro para o apoio à instrução pública e à educação de base, através do qual é apoiada parte das atividades educativas da creche.', it: "Fondo nazionale brasiliano per il sostegno all'istruzione pubblica e all'educazione di base, attraverso il quale viene sostenuta parte delle attività educative della creche.", de: "Brasilianischer Nationalfonds zur Förderung der öffentlichen Bildung und der Grundschulbildung, durch den ein Teil der pädagogischen Aktivitäten der Kita unterstützt wird." })}
                </p>
              </div>
            </AnimatedSection>

            {/* Card 5 - IILA */}
            <AnimatedSection delay={0.4}>
              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-amber-500 h-full">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-300 rounded-full flex items-center justify-center flex-shrink-0">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl text-[var(--deep-blue)] flex-1">
                    {t({ pt: 'IILA – Organização Internacional Ítalo-Latino Americana', it: 'IILA – Organizzazione Internazionale Italo-Latino Americana', de: "IILA – Italienisch-Lateinamerikanische Internationale Organisation" })}
                  </h3>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {t({ pt: 'Apoio ao projeto da nova escola através de programas de cooperação internacional.', it: 'Sostegno al progetto della nuova scuola attraverso programmi di cooperazione internazionale.', de: "Unterstützung des neuen Schulprojekts durch internationale Kooperationsprogramme." })}
                </p>
              </div>
            </AnimatedSection>

            {/* Card 6 - Ministero Affari Esteri */}
            <AnimatedSection delay={0.5}>
              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-blue-500 h-full">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-300 rounded-full flex items-center justify-center flex-shrink-0">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl text-[var(--deep-blue)] flex-1">
                    {t({ pt: 'Ministério dos Negócios Estrangeiros e da Cooperação Internacional', it: 'Ministero degli Affari Esteri e della Cooperazione Internazionale', de: "Ministerium für Auswärtige Angelegenheiten und Internationale Zusammenarbeit" })}
                  </h3>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {t({ pt: 'Apoio e financiamento ao projeto da nova escola através de iniciativas de cooperação internacional.', it: 'Sostegno e finanziamento al progetto della nuova scuola attraverso iniziative di cooperazione internazionale.', de: "Unterstützung und Finanzierung des neuen Schulprojekts durch Initiativen der internationalen Zusammenarbeit." })}
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* SECTION 4 - UNA PRESENZA EDUCATIVA RICONOSCIUTA */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img loading="lazy"
                  src={educativaImg}
                  alt={t({ pt: 'Projeto educativo', it: 'Progetto educativo', de: "Bildungsprojekt" })}
                  className="w-full h-auto object-cover"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div>
                <h2 className="text-4xl md:text-5xl text-[var(--deep-blue)] mb-6">
                  {t({ pt: 'Um projeto educativo credível', it: 'Un progetto educativo credibile', de: "Ein glaubwürdiges Bildungsprojekt" })}
                </h2>
                <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                  <p>
                    {t({ pt: 'A creche e os projetos educativos do Centro Nossa Senhora Aparecida operam no respeito das normativas educativas brasileiras, desenvolvendo uma proposta pedagógica reconhecida e enraizada no território.', it: 'L\'asilo e i progetti educativi del Centro Nossa Senhora Aparecida operano nel rispetto delle normative educative brasiliane, sviluppando una proposta pedagogica riconosciuta e radicata nel territorio.', de: "Die Kita und die Bildungsprojekte des Centro Nossa Senhora Aparecida arbeiten im Einklang mit den brasilianischen Bildungsvorschriften und entwickeln ein pädagogisches Konzept, das anerkannt und in der Region fest verwurzelt ist." })}
                  </p>
                  <p>
                    {t({ pt: 'A colaboração com entidades públicas e instituições educativas representa um elemento importante para garantir continuidade, qualidade e transparência.', it: 'La collaborazione con enti pubblici e istituzioni educative rappresenta un elemento importante per garantire continuità, qualità e trasparenza.', de: "Die Zusammenarbeit mit öffentlichen Einrichtungen und Bildungsinstitutionen ist ein wichtiger Baustein, um Kontinuität, Qualität und Transparenz zu gewährleisten." })}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* SECTION 5 - COOPERAZIONE TRA ITALIA E BRASILE */}
      <section className="py-20 bg-gradient-to-b from-[#f8f9fb] to-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div>
                <h2 className="text-4xl md:text-5xl text-[var(--deep-blue)] mb-6">
                  {t({ pt: 'Uma ponte entre Itália e Brasil', it: 'Un ponte tra Italia e Brasile', de: "Eine Brücke zwischen Italien und Brasilien" })}
                </h2>
                <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                  <p>
                    {t({ pt: 'A Fundação Betania ONLUS e o Centro Nossa Senhora Aparecida representam um vínculo concreto entre Itália e Brasil, construído através de relações, cooperação educativa e apoio internacional.', it: 'La Fundação Betania ONLUS e il Centro Nossa Senhora Aparecida rappresentano un legame concreto tra Italia e Brasile, costruito attraverso relazioni, cooperazione educativa e sostegno internazionale.', de: "Die Fundação Betania ONLUS und das Centro Nossa Senhora Aparecida stehen für eine konkrete Verbindung zwischen Italien und Brasilien, die durch Beziehungen, Bildungskooperation und internationale Unterstützung aufgebaut wurde." })}
                  </p>
                  <p>
                    {t({ pt: 'Este diálogo entre culturas, instituições e pessoas permite desenvolver projetos capazes de gerar um impacto real na vida das crianças e das famílias.', it: 'Questo dialogo tra culture, istituzioni e persone permette di sviluppare progetti capaci di generare un impatto reale nella vita dei bambini e delle famiglie.', de: "Dieser Dialog zwischen Kulturen, Institutionen und Menschen ermöglicht es, Projekte zu entwickeln, die eine reale Wirkung im Leben der Kinder und Familien erzielen." })}
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-gradient-to-br from-[var(--deep-blue)] to-blue-400 p-12 rounded-2xl text-white text-center shadow-2xl">
                <Globe className="w-24 h-24 mx-auto mb-6 opacity-90" />
                <p className="text-3xl mb-4">{t({ pt: 'Itália ⟷ Brasil', it: 'Italia ⟷ Brasile', de: "Italien ⟷ Brasilien" })}</p>
                <p className="text-lg opacity-90">
                  {t({ pt: 'Cooperação internacional para a educação e o desenvolvimento social', it: "Cooperazione internazionale per l'educazione e lo sviluppo sociale", de: "Internationale Zusammenarbeit für Bildung und soziale Entwicklung" })}
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* SECTION 6 - TRASPARENZA E RESPONSABILITÀ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl text-[var(--deep-blue)] mb-8">
              {t({ pt: 'Responsabilidade e transparência', it: 'Responsabilità e trasparenza', de: "Verantwortung und Transparenz" })}
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="space-y-6 text-xl text-gray-700 leading-relaxed mb-10">
              <p>
                {t({ pt: 'A relação com as instituições e entidades parceiras funda-se na responsabilidade na gestão dos projetos, na qualidade educativa e na continuidade do trabalho realizado no território.', it: 'Il rapporto con le istituzioni e gli enti partner si fonda sulla responsabilità nella gestione dei progetti, sulla qualità educativa e sulla continuità del lavoro svolto nel territorio.', de: "Die Beziehung zu den Institutionen und Partnerorganisationen gründet auf verantwortungsvollem Projektmanagement, pädagogischer Qualität und der Kontinuität der Arbeit vor Ort." })}
              </p>
              <p>
                {t({ pt: 'Cada reconhecimento reforça o compromisso cotidiano para com as crianças, famílias e comunidade.', it: 'Ogni riconoscimento rafforza l\'impegno quotidiano verso bambini, famiglie e comunità.', de: "Jede Anerkennung bestärkt das tägliche Engagement für Kinder, Familien und die Gemeinschaft." })}
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <Button variant="secondary" to="/trasparenza" className="text-lg px-8 py-3">
              {t({ pt: 'Ir à transparência', it: 'Vai alla trasparenza', de: "Zur Transparenz" })}
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 7 - RASSEGNA STAMPA E TESTIMONIANZE */}
      <section id="rassegna-stampa" className="py-20 bg-gradient-to-b from-[#f8f9fb] to-white scroll-mt-20">
        <div className="max-w-5xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl text-[var(--deep-blue)] mb-8 text-center">
              {t({ pt: 'Imprensa e testemunhos', it: 'Rassegna stampa e testimonianze', de: "Presseschau und Berichte" })}
            </h2>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {t({
                  pt: 'Ao longo dos anos, a missão da Fraternidade Franciscana de Betânia e do Centro Nossa Senhora Aparecida foi narrada também por realidades externas que escolheram aprofundar o trabalho realizado ao lado das crianças, famílias e comunidades mais vulneráveis de Salvador da Bahia.',
                  it: 'Nel corso degli anni, la missione della Fraternità Francescana di Betania e del Centro Nossa Senhora Aparecida è stata raccontata anche da realtà esterne che hanno scelto di approfondire il lavoro svolto accanto ai bambini, alle famiglie e alle comunità più vulnerabili di Salvador de Bahia.',
                  de: "Im Laufe der Jahre wurde die Mission der Franziskanischen Bruderschaft von Betania und des Centro Nossa Senhora Aparecida auch von externen Medien beschrieben, die sich eingehender mit der Arbeit für die Kinder, Familien und die schutzbedürftigsten Gemeinschaften von Salvador de Bahia befasst haben."
                })}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t({
                  pt: 'Estes testemunhos representam um olhar externo sobre a nossa experiência e sobre o caminho partilhado que continua todos os dias.',
                  it: 'Queste testimonianze rappresentano uno sguardo esterno sulla nostra esperienza e sul cammino condiviso che continua ogni giorno.',
                  de: "Diese Berichte bieten einen Blick von außen auf unsere Erfahrung und den gemeinsamen Weg, der jeden Tag weitergeht."
                })}
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <article className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                <div className="p-8 md:p-10">
                  <div className="mb-4">
                    <span className="inline-block px-4 py-1.5 bg-[var(--deep-blue)]/10 text-[var(--deep-blue)] text-sm font-semibold rounded-full uppercase tracking-wide">
                      Interris
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-[var(--deep-blue)] mb-4">
                    {t({
                      pt: 'A fraternidade ajuda os pobres entre os mais pobres',
                      it: 'La fraternità aiuta i poveri tra i più poveri',
                      de: "Die Bruderschaft hilft den Ärmsten der Armen"
                    })}
                  </h3>
                  <p className="text-base text-gray-600 leading-relaxed mb-6">
                    {t({
                      pt: 'A revista Interris dedicou um aprofundamento à missão da Fraternidade Franciscana de Betânia no Brasil, narrando o trabalho realizado ao lado das comunidades mais vulneráveis de Salvador da Bahia e o compromisso quotidiano em favor das crianças e famílias acolhidas pelo Centro Nossa Senhora Aparecida.',
                      it: "La rivista Interris ha dedicato un approfondimento alla missione della Fraternità Francescana di Betania in Brasile, raccontando il lavoro svolto accanto alle comunità più vulnerabili di Salvador de Bahia e l'impegno quotidiano a favore dei bambini e delle famiglie accolte dal Centro Nossa Senhora Aparecida.",
                      de: "Die Zeitschrift Interris hat der Mission der Franziskanischen Bruderschaft von Betania in Brasilien eine ausführliche Reportage gewidmet und dabei die Arbeit für die schutzbedürftigsten Gemeinschaften von Salvador de Bahia sowie das tägliche Engagement für die vom Centro Nossa Senhora Aparecida aufgenommenen Kinder und Familien beschrieben."
                    })}
                  </p>
                  <a
                    href="https://www.interris.it/la-voce-degli-ultimi/fraternita-aiuta-poveri-tra-piu-poveri/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--deep-blue)] text-white font-semibold rounded-xl hover:bg-[#4d6374] transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    {t({
                      pt: 'Leia a matéria no Interris',
                      it: "Leggi l'articolo su Interris",
                      de: "Artikel auf Interris lesen"
                    })}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </article>

              <article className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                <div className="p-8 md:p-10">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-block px-4 py-1.5 bg-[var(--warm-orange)]/10 text-[var(--warm-orange)] text-sm font-semibold rounded-full uppercase tracking-wide">
                      Sky TG24
                    </span>
                    <span className="text-sm text-gray-400">16 set 2022</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-[var(--deep-blue)] mb-4">
                    {t({
                      pt: 'Salvador de Bahia, inaugurado o primeiro convento da Fraternidade Franciscana de Betânia',
                      it: 'Salvador de Bahia, inaugurato il primo convento della Fraternità Francescana di Betania',
                      de: "Salvador de Bahia: Einweihung des ersten Klosters der Franziskanischen Bruderschaft von Betania"
                    })}
                  </h3>
                  <p className="text-base text-gray-600 leading-relaxed mb-6">
                    {t({
                      pt: 'Sky TG24 narrou a inauguração do primeiro convento da Fraternidade em São Cristóvão, um dos bairros mais pobres de Salvador, projetado pelo estúdio romano Mixtura com arquitetura sustentável: ventilação natural, painéis fotovoltaicos e captação de água da chuva.',
                      it: "Sky TG24 ha raccontato l'inaugurazione del primo convento della Fraternità a São Cristóvão, uno dei quartieri più poveri di Salvador, progettato dallo studio romano Mixtura con architettura sostenibile: ventilazione naturale, pannelli fotovoltaici e raccolta dell'acqua piovana.",
                      de: "Sky TG24 berichtete über die Einweihung des ersten Klosters der Bruderschaft in São Cristóvão, einem der ärmsten Viertel Salvadors, das vom römischen Architekturbüro Mixtura nachhaltig geplant wurde: natürliche Belüftung, Photovoltaikanlagen und Regenwassernutzung."
                    })}
                  </p>
                  <a
                    href="https://tg24.sky.it/lifestyle/2022/09/16/favelas-brasile-progetto"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--warm-orange)] text-white font-semibold rounded-xl hover:bg-[var(--warm-orange-light)] transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    {t({
                      pt: 'Leia a matéria no Sky TG24',
                      it: "Leggi l'articolo su Sky TG24",
                      de: "Artikel auf Sky TG24 lesen"
                    })}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </article>
              <article className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                <div className="p-8 md:p-10">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-block px-4 py-1.5 bg-[var(--soft-green)]/10 text-[var(--soft-green)] text-sm font-semibold rounded-full uppercase tracking-wide">
                      Diocesi di Molfetta
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-[var(--deep-blue)] mb-4">
                    {t({
                      pt: 'Viagem pastoral do Bispo ao Brasil: o relato dos últimos dias',
                      it: 'Viaggio pastorale del Vescovo in Brasile: il racconto degli ultimi giorni',
                      de: "Pastoralreise des Bischofs nach Brasilien: der Bericht der letzten Tage"
                    })}
                  </h3>
                  <p className="text-base text-gray-600 leading-relaxed mb-6">
                    {t({
                      pt: 'A Diocese de Molfetta narrou a visita pastoral do Bispo Domenico a Salvador da Bahia, que incluiu um encontro com a Fraternidade Franciscana de Betânia e uma celebração em honra do fundador padre Pancrazio, reconhecido como artífice da missão brasileira da comunidade.',
                      it: "La Diocesi di Molfetta ha narrato la visita pastorale del Vescovo Domenico a Salvador de Bahia, che ha incluso un incontro con la Fraternità Francescana di Betania e una celebrazione in onore del fondatore padre Pancrazio, riconosciuto come artefice della missione brasiliana della comunità.",
                      de: "Die Diözese Molfetta berichtete über den pastoralen Besuch von Bischof Domenico in Salvador de Bahia, der eine Begegnung mit der Franziskanischen Bruderschaft von Betania sowie eine Feier zu Ehren des Gründers Pater Pancrazio umfasste, der als Wegbereiter der brasilianischen Mission der Gemeinschaft gilt."
                    })}
                  </p>
                  <a
                    href="https://www.diocesimolfetta.it/news/viaggio-pastorale-del-vescovo-in-brasile-il-racconto-degli-ultimi-giorni/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--soft-green)] text-white font-semibold rounded-xl hover:brightness-90 transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    {t({
                      pt: 'Leia a matéria',
                      it: "Leggi l'articolo",
                      de: "Artikel lesen"
                    })}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </article>

              <article className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                <div className="p-8 md:p-10">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-block px-4 py-1.5 bg-[var(--beige)]/60 text-[var(--deep-blue)] text-sm font-semibold rounded-full uppercase tracking-wide">
                      Corriere della Sera
                    </span>
                    <span className="text-sm text-gray-400">16 lug 2024</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-[var(--deep-blue)] mb-4">
                    {t({
                      pt: 'Mattarella visita a Fraternidade Franciscana de Salvador de Bahia, onde os meninos de rua são salvos',
                      it: 'Mattarella in visita alla Fraternità Francescana di Salvador de Bahia, dove i meninos de rua vengono salvati',
                      de: "Mattarella besucht die Franziskanische Bruderschaft von Salvador de Bahia, wo Straßenkinder gerettet werden"
                    })}
                  </h3>
                  <p className="text-base text-gray-600 leading-relaxed mb-6">
                    {t({
                      pt: 'O Corriere della Sera narrou a visita do Presidente da República Italiana Sergio Mattarella à Fraternidade Franciscana de Betânia em Salvador da Bahia, destacando a missão de acolhimento das crianças de rua e o trabalho quotidiano da comunidade ao lado das famílias mais vulneráveis.',
                      it: "Il Corriere della Sera ha raccontato la visita del Presidente della Repubblica Italiana Sergio Mattarella alla Fraternità Francescana di Betania a Salvador de Bahia, mettendo in luce la missione di accoglienza dei bambini di strada e il lavoro quotidiano della comunità accanto alle famiglie più vulnerabili.",
                      de: "Der Corriere della Sera berichtete über den Besuch des italienischen Staatspräsidenten Sergio Mattarella bei der Franziskanischen Bruderschaft von Betania in Salvador de Bahia und hob dabei die Aufnahme von Straßenkindern sowie die tägliche Arbeit der Gemeinschaft für die schutzbedürftigsten Familien hervor."
                    })}
                  </p>
                  <a
                    href="https://www.corriere.it/esteri/24_luglio_16/mattarella-in-visista-alla-fraternita-francescana-di-salvador-de-bahia-dove-i-meninos-de-rua-vengono-salvati-d2292d5f-6014-4180-a7e3-4dd2bc1c4xlk.shtml"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--deep-blue)] text-white font-semibold rounded-xl hover:bg-[#4d6374] transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    {t({
                      pt: 'Leia a matéria no Corriere della Sera',
                      it: "Leggi l'articolo sul Corriere della Sera",
                      de: "Artikel im Corriere della Sera lesen"
                    })}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </article>
            </div>
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
              {t({ pt: 'Uma obra construída juntos', it: "Un'opera costruita insieme", de: "Ein gemeinsam aufgebautes Werk" })}
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-xl md:text-2xl mb-10 leading-relaxed">
              {t({ pt: 'Os reconhecimentos recebidos são o sinal de um trabalho educativo e humano que continua todos os dias ao lado das crianças e das famílias de Salvador de Bahia.', it: 'I riconoscimenti ricevuti sono il segno di un lavoro educativo e umano che continua ogni giorno accanto ai bambini e alle famiglie di Salvador de Bahia.', de: "Die erhaltenen Anerkennungen sind Ausdruck einer pädagogischen und menschlichen Arbeit, die jeden Tag für die Kinder und Familien von Salvador de Bahia fortgesetzt wird." })}
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" to="/dona-ora" className="text-lg px-8 py-4">
                {t({ pt: 'Doar agora', it: 'Dona ora', de: "Jetzt spenden" })}
              </Button>
              <Button variant="secondary" to="/il-centro" className="text-lg px-8 py-4 bg-white/10 backdrop-blur-sm border-white hover:bg-white/20">
                {t({ pt: 'Conheça o Centro', it: 'Scopri il Centro', de: "Entdecken Sie das Centro" })}
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
