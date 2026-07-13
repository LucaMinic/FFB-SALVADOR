import { Button } from './Button';
import { AnimatedSection } from './AnimatedSection';
import { ChevronDown } from 'lucide-react';
import { useT } from '../context/LanguageContext';
import heroImg from '../../imports/foto_convertita.jpg';
import padrePancrazioImg from '../../imports/PadrePancrazio.jpg';
import fotoConveritaImg from '../../imports/foto_convertita.jpg';
import mappaFraternitaImg from '../../imports/mappa_ottimizzata_web.jpg';

export function FraternitaPage() {
  const t = useT();
  return (
    <div className="bg-white">
      {/* SECTION 1 - HERO */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt={t({ pt: 'Fraternidade Franciscana de Betânia', it: 'Fraternità Francescana di Betania' })}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--deep-blue)]/70 via-[var(--deep-blue)]/50 to-[var(--deep-blue)]/70"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <AnimatedSection>
            <h1 className="text-5xl md:text-6xl mb-6">
              {t({ pt: 'A Fraternidade Franciscana de Betânia', it: 'La Fraternità Francescana di Betania' })}
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-xl md:text-2xl mb-10 leading-relaxed max-w-3xl mx-auto">
              {t({
                pt: 'Uma vida partilhada entre oração, acolhimento e fraternidade.',
                it: 'Una vita condivisa tra preghiera, accoglienza e fraternità.'
              })}
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" href="#intro-section" className="text-lg px-8 py-4">
                {t({ pt: 'Conheça a Fraternidade', it: 'Scopri la Fraternità' })}
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
                  {t({ pt: 'Na origem da Fundação Betania ONLUS está a Fraternidade Franciscana de Betânia, um Instituto de vida consagrada fundado em 1982 pelo padre Pancrazio Nicola Gaudioso.', it: "All'origine della Fundação Betania ONLUS c'è la Fraternità Francescana di Betania un Istituto di vita consagrata fondato nel 1982 da padre Pancrazio Nicola Gaudioso." })}
                </p>
                <p>
                  {t({ pt: 'É composta por irmãos e irmãs que escolhem viver juntos uma vida simples, fundada na oração, no acolhimento e na relação fraterna. A Fraternidade continua a ser o coração humano e espiritual de onde tudo tem origem.', it: "È composta da fratelli e sorelle che scelgono di vivere insieme una vita semplice, fondata sulla preghiera, sull'accoglienza e sulla relazione fraterna. La Fraternità continua a essere il cuore umano e spirituale da cui tutto ha origine." })}
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img loading="lazy"
                  src={padrePancrazioImg}
                  alt="Padre Pancrazio Nicola Gaudioso, fondatore della Fraternità"
                  className="w-full h-96 object-cover"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* SECTION 2 - CHI SONO */}
      <section id="chi-sono" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl text-[var(--deep-blue)] mb-6">
                {t({ pt: 'Quem somos', it: 'Chi siamo' })}
              </h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  {t({ pt: 'A Fraternidade é formada por homens e mulheres que se consagram a Deus através dos votos de pobreza, castidade e obediência.', it: 'La Fraternità è formata da uomini e donne che si consacrano a Dio attraverso i voti di povertà, castità e obbedienza.' })}
                </p>
                <p>
                  {t({ pt: 'Vivemos juntos compartilhando a vida quotidiana e construindo relações fundadas na confiança, na simplicidade e na escuta.', it: "Viviamo insieme condividendo la vita quotidiana e costruendo relazioni fondate sulla fiducia, sulla semplicità e sull'ascolto." })}
                </p>
                <p>
                  {t({ pt: 'A nossa presença é antes de tudo humana: uma vida vivida juntos que se torna sinal concreto para os outros.', it: 'La nostra presenza è prima di tutto umana: una vita vissuta insieme che diventa segno concreto per gli altri.' })}
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img loading="lazy"
                  src={fotoConveritaImg}
                  alt="La Fraternità Francescana di Betania"
                  className="w-full h-96 object-cover"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* SECTION 3 - LA SPIRITUALITÀ */}
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-24" style={{ display: 'block', marginTop: '-1px' }}>
        <path d="M0,50 C300,10 600,90 900,50 C1050,30 1150,50 1200,50 L1200,0 L0,0 Z" fill="var(--beige)" />
      </svg>
      <section className="py-20 bg-[var(--beige)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl text-[var(--deep-blue)] mb-6">
                {t({ pt: 'Uma espiritualidade simples e concreta', it: 'Una spiritualità semplice e concreta' })}
              </h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  {t({ pt: 'A espiritualidade da Fraternidade é mariana e franciscana.', it: 'La spiritualità della Fraternità è mariana e francescana.' })}
                </p>
                <p>
                  {t({ pt: 'Inspira-se na figura de Maria e no estilo de são Francisco de Assis: uma vida simples, aberta aos outros, atenta às necessidades espirituais e materiais das pessoas.', it: "Si ispira alla figura di Maria e allo stile di san Francesco d'Assisi: una vita semplice, aperta agli altri, attenta ai bisogni spirituali e materiali delle persone." })}
                </p>
                <p>
                  {t({ pt: 'Esta visão nasce também de uma reflexão do fundador que convida a viver em equilíbrio entre ação e silêncio, entre serviço e contemplação.', it: 'Questa visione nasce anche da una riflessione del fondatore che invita a vivere in equilibrio tra azione e silenzio, tra servizio e contemplazione.' })}
                </p>
                <p>
                  {t({ pt: 'As casas da Fraternidade são lugares de acolhimento e relação.', it: 'Le case della Fraternità sono luoghi di accoglienza e relazione.' })}
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <iframe
                  width="100%"
                  height="400"
                  src="https://www.youtube.com/embed/axdMMA_Id1Q?start=22"
                  title="Fraternità Francescana di Betania"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-96"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-24" style={{ display: 'block', marginBottom: '-1px' }}>
        <path d="M0,50 C300,90 600,10 900,50 C1050,70 1150,50 1200,50 L1200,120 L0,120 Z" fill="var(--beige)" />
      </svg>

      {/* SECTION 4 - IL CARISMA */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl text-[var(--deep-blue)] mb-12 text-center">
              {t({ pt: 'Um carisma fundado em três pilares', it: 'Un carisma fondato su tre pilastri' })}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-[var(--soft-green)] to-[#7ab89a] text-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">{t({ pt: 'Oração', it: 'Preghiera' })}</h3>
                <p className="text-base leading-relaxed">
                  {t({ pt: 'A oração é o coração da vida da Fraternidade. É o lugar em que nasce a relação com Deus e se alimenta a vida fraterna.', it: 'La preghiera è il cuore della vita della Fraternità. È il luogo in cui nasce la relazione con Dio e si alimenta la vita fraterna.' })}
                </p>
              </div>
              <div className="bg-gradient-to-br from-[var(--warm-orange-light)] to-[var(--warm-orange)] text-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">{t({ pt: 'Acolhimento', it: 'Accoglienza' })}</h3>
                <p className="text-base leading-relaxed">
                  {t({ pt: 'O acolhimento se expressa na partilha da vida quotidiana. Quem entra em Betânia é convidado a participar, não apenas a observar.', it: "L'accoglienza si esprime nella condivisione della vita quotidiana. Chi entra in Betania è invitato a partecipare, non solo a osservare." })}
                </p>
              </div>
              <div className="bg-gradient-to-br from-[var(--deep-blue)] to-[#4d6374] text-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">{t({ pt: 'Vida fraterna', it: 'Vita fraterna' })}</h3>
                <p className="text-base leading-relaxed">
                  {t({ pt: 'A vida juntos é o sinal mais concreto da sua vocação. Ser irmãos e irmãs significa viver relações verdadeiras, cada dia.', it: 'La vita insieme è il segno più concreto della loro vocazione. Essere fratelli e sorelle significa vivere relazioni vere, ogni giorno.' })}
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 5 - UNA CASA APERTA */}
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-24" style={{ display: 'block', marginTop: '-1px' }}>
        <path d="M0,50 C300,10 600,90 900,50 C1050,30 1150,50 1200,50 L1200,0 L0,0 Z" fill="var(--beige)" />
      </svg>
      <section className="py-20 bg-[var(--beige)]">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl text-[var(--deep-blue)] mb-8 text-center">
              {t({ pt: 'Uma casa aberta a todos', it: 'Una casa aperta a tutti' })}
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-6 text-center">
              {t({ pt: 'As casas da Fraternidade são verdadeiras "oásis espirituais", onde qualquer pessoa pode ser acolhida.', it: 'Le case della Fraternità sono vere e proprie "oasi spirituali", dove chiunque può essere accolto.' })}
            </p>
            <p className="text-xl text-gray-700 leading-relaxed mb-6 text-center">
              {t({ pt: 'O acolhimento é dirigido a:', it: "L'accoglienza è rivolta a:" })}
            </p>
            <div className="bg-white rounded-2xl p-10 shadow-md">
              <ul className="space-y-3 text-lg text-gray-700">
                <li className="flex items-start">
                  <span className="text-[var(--soft-green)] mr-3 text-2xl">•</span>
                  <span>{t({ pt: 'quem busca uma relação mais profunda com Deus', it: 'chi cerca un rapporto più profondo con Dio' })}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--soft-green)] mr-3 text-2xl">•</span>
                  <span>{t({ pt: 'quem atravessa momentos de dificuldade', it: 'chi attraversa momenti di difficoltà' })}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--soft-green)] mr-3 text-2xl">•</span>
                  <span>{t({ pt: 'famílias e jovens em caminhada', it: 'famiglie e giovani in cammino' })}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--soft-green)] mr-3 text-2xl">•</span>
                  <span>{t({ pt: 'pessoas comprometidas com a vida religiosa ou no discernimento', it: 'persone impegnate nella vita religiosa o nel discernimento' })}</span>
                </li>
              </ul>
              <p className="text-lg text-gray-600 mt-6 italic text-center">
                {t({ pt: 'Quem chega não permanece espectador, mas é envolvido na vida quotidiana da comunidade.', it: 'Chi arriva non resta spettatore, ma è coinvolto nella vita quotidiana della comunità.' })}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-24" style={{ display: 'block', marginBottom: '-1px' }}>
        <path d="M0,50 C300,90 600,10 900,50 C1050,70 1150,50 1200,50 L1200,120 L0,120 Z" fill="var(--beige)" />
      </svg>

      {/* SECTION 6 - PRESENZA NEL MONDO */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl text-[var(--deep-blue)] mb-8 text-center">
              {t({ pt: 'Uma presença em vários países', it: 'Una presenza in più paesi' })}
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed text-center mb-10">
              {t({ pt: 'A Fraternidade está presente na Itália, Europa e Brasil, adaptando a sua presença às necessidades dos territórios.', it: 'La Fraternità è presente in Italia, Europa e Brasile, adattando la propria presenza alle esigenze dei territori.' })}
            </p>
            <div className="rounded-2xl overflow-hidden shadow-lg max-w-3xl mx-auto mb-10">
              <img loading="lazy"
                src={mappaFraternitaImg}
                alt="Presenza della Fraternità nel mondo"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="text-center">
              <a
                href="https://www.ffbetania.net/case-di-fraternita/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-12 py-5 rounded-2xl transition-all duration-500 font-medium text-lg tracking-wide inline-block text-center bg-[var(--deep-blue)] text-white shadow-[0_8px_30px_rgba(93,112,130,0.3)] hover:shadow-[0_12px_40px_rgba(93,112,130,0.4)] hover:-translate-y-1 hover:bg-[#4d6374]"
              >
                {t({ pt: 'Conheça as Casas de Fraternidade', it: 'Scopri le Case di Fraternità' })}
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 7 - I FAMILIARI DI BETANIA */}
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 md:h-24" style={{ display: 'block', marginTop: '-1px' }}>
        <path d="M0,50 C300,10 600,90 900,50 C1050,30 1150,50 1200,50 L1200,0 L0,0 Z" fill="var(--beige)" />
      </svg>
      <section className="py-20 bg-[var(--beige)]">
        <div className="max-w-5xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl text-[var(--deep-blue)] mb-8 text-center">
              {t({ pt: 'Uma família maior', it: 'Una famiglia più grande' })}
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-10 text-center max-w-3xl mx-auto">
              {t({ pt: 'Ao lado da Fraternidade Franciscana de Betânia cresceu ao longo do tempo uma realidade mais ampla: os Familiares de Betânia.', it: 'Accanto alla Fraternità Francescana di Betania è cresciuta nel tempo una realtà più ampia: i Familiari di Betania.' })}
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-10 text-center">
              {t({ pt: 'Trata-se de pessoas que, de modos diferentes, participam da vida e do carisma da Fraternidade, partilhando o seu espírito na vida quotidiana.', it: 'Si tratta di persone che, in modi diversi, partecipano alla vita e al carisma della Fraternità, condividendone lo spirito nella vita quotidiana.' })}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-[var(--deep-blue)] mb-4">{t({ pt: 'Jovens de Betânia', it: 'Giovani di Betania' })}</h3>
                <p className="text-base text-gray-700 leading-relaxed">
                  {t({ pt: 'Jovens que se encontram periodicamente para viver uma experiência de fé e levar este caminho para a sua vida quotidiana.', it: "Giovani che si incontrano periodicamente per vivere un'esperienza di fede e portare questo cammino nella loro vita quotidiana." })}
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-[var(--deep-blue)] mb-4">{t({ pt: 'Famílias', it: 'Famiglie' })}</h3>
                <p className="text-base text-gray-700 leading-relaxed">
                  {t({ pt: 'Percursos dedicados às famílias para crescer na fé, na relação e na vida de casal.', it: 'Percorsi dedicati alle famiglie per crescere nella fede, nella relazione e nella vita di coppia.' })}
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-[var(--deep-blue)] mb-4">{t({ pt: 'Grupos de oração', it: 'Gruppi di preghiera' })}</h3>
                <p className="text-base text-gray-700 leading-relaxed">
                  {t({ pt: 'Pessoas que se reúnem para viver momentos de oração segundo a espiritualidade da Fraternidade.', it: 'Persone che si ritrovano per vivere momenti di preghiera secondo la spiritualità della Fraternità.' })}
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-xl font-semibold text-[var(--deep-blue)] mb-4">{t({ pt: 'Oblatos', it: 'Oblati' })}</h3>
                <p className="text-base text-gray-700 leading-relaxed">
                  {t({ pt: 'Leigos que escolhem compartilhar mais profundamente o carisma, comprometendo-se num caminho espiritual pessoal.', it: 'Laici che scelgono di condividere più profondamente il carisma, impegnandosi in un cammino spirituale personale.' })}
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 8 - DALLA FRATERNITÀ ALLA FUNDAÇÃO */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl text-[var(--deep-blue)] mb-8 text-center">
              {t({ pt: 'Na origem da Fundação', it: "All'origine della Fundação" })}
            </h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed mb-10 text-center max-w-3xl mx-auto">
              <p>
                {t({ pt: 'A Fundação Betania ONLUS nasce da experiência da Fraternidade.', it: "La Fundação Betania ONLUS nasce dall'esperienza della Fraternità." })}
              </p>
              <p>
                {t({ pt: 'A Fraternidade continua a ser o coração humano e espiritual de onde tudo tem origem.', it: 'La Fraternità continua a essere il cuore umano e spirituale da cui tutto ha origine.' })}
              </p>
            </div>
            <div className="text-center">
              <a
                href="https://www.ffbetania.net/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-12 py-5 rounded-2xl transition-all duration-500 font-medium text-lg tracking-wide inline-block text-center bg-[var(--deep-blue)] text-white shadow-[0_8px_30px_rgba(93,112,130,0.3)] hover:shadow-[0_12px_40px_rgba(93,112,130,0.4)] hover:-translate-y-1 hover:bg-[#4d6374]"
              >
                {t({ pt: 'Conheça a Fraternidade Franciscana de Betânia, na Itália e no mundo', it: 'Scopri la Fraternità Francescana di Betania, in Italia e nel mondo' })}
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 9 - LA MISSIONE IN BRASILE */}
      <section className="py-20 bg-[var(--beige)]">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection>
            <div className="bg-white rounded-3xl p-12 shadow-lg text-center">
              <h2 className="text-3xl md:text-4xl text-[var(--deep-blue)] mb-6">
                {t({ pt: 'A missão no Brasil', it: 'La missione in Brasile' })}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {t({ pt: 'A Fraternidade está presente em Salvador da Bahia, num contexto de forte fragilidade social.', it: 'La Fraternità è presente a Salvador de Bahia, in un contesto di forte fragilità sociale.' })}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {t({ pt: 'Aqui se dedica em particular à educação e ao acompanhamento das crianças e das famílias.', it: "Qui si dedica in particolare all'educazione e all'accompagnamento dei bambini e delle famiglie." })}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                {t({ pt: 'É neste contexto que nasce a Fundação Betânia Onlus.', it: 'È in questo contesto che nasce la Fundação Betânia Onlus.' })}
              </p>
              <Button variant="secondary" to="/la-fundacao">{t({ pt: 'Conheça a Fundação Betânia Onlus', it: 'Scopri la Fundação Betânia Onlus' })}</Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 10 - CTA FINALE */}
      <section className="py-24 bg-gradient-to-br from-[var(--deep-blue)] to-[#2c5f7f] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl mb-6">
              {t({ pt: 'Conheça o Centro Nossa Senhora Aparecida', it: 'Scopri il Centro Nossa Senhora Aparecida' })}
            </h2>
            <p className="text-xl leading-relaxed mb-10 opacity-90">
              {t({ pt: 'A Fraternidade está na origem de um compromisso concreto que hoje se realiza através do Centro e dos projetos educativos.', it: "La Fraternità è all'origine di un impegno concreto che oggi si realizza attraverso il Centro e i progetti educativi." })}
            </p>
            <Button to="/#il-centro">{t({ pt: 'Conheça o Centro', it: 'Scopri il Centro' })}</Button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
