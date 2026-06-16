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
              {t({ pt: 'Reconhecimentos institucionais', it: 'Riconoscimenti istituzionali' })}
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-xl md:text-2xl mb-10 leading-relaxed max-w-3xl mx-auto">
              {t({ pt: 'Um caminho reconhecido e apoiado por instituições, entidades públicas e realidades internacionais.', it: 'Un cammino riconosciuto e sostenuto da istituzioni, enti pubblici e realtà internazionali.' })}
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" href="#intro-section" className="text-lg px-8 py-4">
                {t({ pt: 'Saiba mais', it: 'Scopri di più' })}
              </Button>
              <Button variant="secondary" to="/dona-ora" className="text-lg px-8 py-4 bg-white/10 backdrop-blur-sm border-white hover:bg-white/20">
                {t({ pt: 'Doar agora', it: 'Dona ora' })}
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
              {t({ pt: 'Um compromisso reconhecido ao longo do tempo', it: 'Un impegno riconosciuto nel tempo' })}
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="space-y-6 text-xl text-gray-700 leading-relaxed">
              <p>
                {t({ pt: 'Ao longo dos anos, o trabalho educativo e social da Fundação Betania ONLUS e do Centro Nossa Senhora Aparecida recebeu atenção, apoio e reconhecimento por parte de instituições italianas, brasileiras e internacionais.', it: 'Negli anni, il lavoro educativo e sociale della Fundação Betania ONLUS e del Centro Nossa Senhora Aparecida ha ricevuto attenzione, sostegno e riconoscimento da parte di istituzioni italiane, brasiliane e internazionali.' })}
              </p>
              <p>
                {t({ pt: 'Estes reconhecimentos representam um sinal concreto da credibilidade, da qualidade educativa e do impacto social do projeto.', it: 'Questi riconoscimenti rappresentano un segno concreto della credibilità, della qualità educativa e dell\'impatto sociale del progetto.' })}
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
              {t({ pt: 'Instituições e realidades que apoiam o projeto', it: 'Istituzioni e realtà che sostengono il progetto' })}
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 - Presidenza Repubblica Italiana */}
            <AnimatedSection>
              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-[var(--deep-blue)] h-full">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-20 h-20 flex items-center justify-center flex-shrink-0 bg-white rounded-lg">
                    <img src={emblemItaly} alt={t({ pt: 'Emblema da República Italiana', it: 'Emblema della Repubblica Italiana' })} className="w-full h-full object-contain" />
                  </div>
                  <h3 className="text-2xl text-[var(--deep-blue)] flex-1">
                    {t({ pt: 'Presidência da República Italiana', it: 'Presidenza della Repubblica Italiana' })}
                  </h3>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {t({ pt: 'Reconhecimento moral e institucional pelo valor humano, educativo e social da obra levada adiante no Brasil.', it: 'Riconoscimento morale e istituzionale per il valore umano, educativo e sociale dell\'opera portata avanti in Brasile.' })}
                </p>
              </div>
            </AnimatedSection>

            {/* Card 2 - Municipio Salvador */}
            <AnimatedSection delay={0.1}>
              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-[var(--soft-green)] h-full">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-20 h-20 flex items-center justify-center flex-shrink-0 bg-white rounded-lg">
                    <img src={municipioLogo} alt={t({ pt: 'Município de Salvador de Bahia', it: 'Municipio di Salvador de Bahia' })} className="w-full h-full object-contain" />
                  </div>
                  <h3 className="text-2xl text-[var(--deep-blue)] flex-1">
                    {t({ pt: 'Município de Salvador de Bahia', it: 'Municipio di Salvador de Bahia' })}
                  </h3>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {t({ pt: 'Colaboração ativa através da convenção educativa com a SMED – Secretaria Municipal da Educação – para o apoio à creche e à educação da primeira infância.', it: "Collaborazione attiva attraverso la convenzione educativa con la SMED – Segreteria Municipale dell'Educazione – per il sostegno alla creche e all'educazione della prima infanzia." })}
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
                  {t({ pt: 'Colaboração educativa e institucional no âmbito da educação da primeira infância e dos serviços educativos do Centro.', it: "Collaborazione educativa e istituzionale nell'ambito dell'educazione della prima infanzia e dei servizi educativi del Centro." })}
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
                  {t({ pt: 'Fundo nacional brasileiro para o apoio à instrução pública e à educação de base, através do qual é apoiada parte das atividades educativas da creche.', it: "Fondo nazionale brasiliano per il sostegno all'istruzione pubblica e all'educazione di base, attraverso il quale viene sostenuta parte delle attività educative della creche." })}
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
                    {t({ pt: 'IILA – Organização Internacional Ítalo-Latino Americana', it: 'IILA – Organizzazione Internazionale Italo-Latino Americana' })}
                  </h3>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {t({ pt: 'Apoio ao projeto da nova escola através de programas de cooperação internacional.', it: 'Sostegno al progetto della nuova scuola attraverso programmi di cooperazione internazionale.' })}
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
                    {t({ pt: 'Ministério dos Negócios Estrangeiros e da Cooperação Internacional', it: 'Ministero degli Affari Esteri e della Cooperazione Internazionale' })}
                  </h3>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {t({ pt: 'Apoio e financiamento ao projeto da nova escola através de iniciativas de cooperação internacional.', it: 'Sostegno e finanziamento al progetto della nuova scuola attraverso iniziative di cooperazione internazionale.' })}
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
                <img
                  src={educativaImg}
                  alt={t({ pt: 'Projeto educativo', it: 'Progetto educativo' })}
                  className="w-full h-auto object-cover"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div>
                <h2 className="text-4xl md:text-5xl text-[var(--deep-blue)] mb-6">
                  {t({ pt: 'Um projeto educativo credível', it: 'Un progetto educativo credibile' })}
                </h2>
                <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                  <p>
                    {t({ pt: 'A creche e os projetos educativos do Centro Nossa Senhora Aparecida operam no respeito das normativas educativas brasileiras, desenvolvendo uma proposta pedagógica reconhecida e enraizada no território.', it: 'L\'asilo e i progetti educativi del Centro Nossa Senhora Aparecida operano nel rispetto delle normative educative brasiliane, sviluppando una proposta pedagogica riconosciuta e radicata nel territorio.' })}
                  </p>
                  <p>
                    {t({ pt: 'A colaboração com entidades públicas e instituições educativas representa um elemento importante para garantir continuidade, qualidade e transparência.', it: 'La collaborazione con enti pubblici e istituzioni educative rappresenta un elemento importante per garantire continuità, qualità e trasparenza.' })}
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
                  {t({ pt: 'Uma ponte entre Itália e Brasil', it: 'Un ponte tra Italia e Brasile' })}
                </h2>
                <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                  <p>
                    {t({ pt: 'A Fundação Betania ONLUS e o Centro Nossa Senhora Aparecida representam um vínculo concreto entre Itália e Brasil, construído através de relações, cooperação educativa e apoio internacional.', it: 'La Fundação Betania ONLUS e il Centro Nossa Senhora Aparecida rappresentano un legame concreto tra Italia e Brasile, costruito attraverso relazioni, cooperazione educativa e sostegno internazionale.' })}
                  </p>
                  <p>
                    {t({ pt: 'Este diálogo entre culturas, instituições e pessoas permite desenvolver projetos capazes de gerar um impacto real na vida das crianças e das famílias.', it: 'Questo dialogo tra culture, istituzioni e persone permette di sviluppare progetti capaci di generare un impatto reale nella vita dei bambini e delle famiglie.' })}
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-gradient-to-br from-[var(--deep-blue)] to-blue-400 p-12 rounded-2xl text-white text-center shadow-2xl">
                <Globe className="w-24 h-24 mx-auto mb-6 opacity-90" />
                <p className="text-3xl mb-4">{t({ pt: 'Itália ⟷ Brasil', it: 'Italia ⟷ Brasile' })}</p>
                <p className="text-lg opacity-90">
                  {t({ pt: 'Cooperação internacional para a educação e o desenvolvimento social', it: "Cooperazione internazionale per l'educazione e lo sviluppo sociale" })}
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
              {t({ pt: 'Responsabilidade e transparência', it: 'Responsabilità e trasparenza' })}
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="space-y-6 text-xl text-gray-700 leading-relaxed mb-10">
              <p>
                {t({ pt: 'A relação com as instituições e entidades parceiras funda-se na responsabilidade na gestão dos projetos, na qualidade educativa e na continuidade do trabalho realizado no território.', it: 'Il rapporto con le istituzioni e gli enti partner si fonda sulla responsabilità nella gestione dei progetti, sulla qualità educativa e sulla continuità del lavoro svolto nel territorio.' })}
              </p>
              <p>
                {t({ pt: 'Cada reconhecimento reforça o compromisso cotidiano para com as crianças, famílias e comunidade.', it: 'Ogni riconoscimento rafforza l\'impegno quotidiano verso bambini, famiglie e comunità.' })}
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <Button variant="secondary" to="/trasparenza" className="text-lg px-8 py-3">
              {t({ pt: 'Ir à transparência', it: 'Vai alla trasparenza' })}
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 7 - CTA FINALE */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={finalCtaImg}
            alt="Centro Nossa Senhora Aparecida"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl mb-6">
              {t({ pt: 'Uma obra construída juntos', it: "Un'opera costruita insieme" })}
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-xl md:text-2xl mb-10 leading-relaxed">
              {t({ pt: 'Os reconhecimentos recebidos são o sinal de um trabalho educativo e humano que continua todos os dias ao lado das crianças e das famílias de Salvador de Bahia.', it: 'I riconoscimenti ricevuti sono il segno di un lavoro educativo e umano che continua ogni giorno accanto ai bambini e alle famiglie di Salvador de Bahia.' })}
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" to="/dona-ora" className="text-lg px-8 py-4">
                {t({ pt: 'Doar agora', it: 'Dona ora' })}
              </Button>
              <Button variant="secondary" to="/il-centro" className="text-lg px-8 py-4 bg-white/10 backdrop-blur-sm border-white hover:bg-white/20">
                {t({ pt: 'Conheça o Centro', it: 'Scopri il Centro' })}
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
