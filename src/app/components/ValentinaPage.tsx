import { Button } from './Button';
import { AnimatedSection } from './AnimatedSection';
import { ChevronDown, Calendar } from 'lucide-react';
import { useT } from '../context/LanguageContext';
import heroImg from '../../imports/19.jpeg';
import storyImg from '../../imports/21.jpeg';
import finalCtaImg from '../../imports/13-2.jpeg';
import valentinaVideo from '../../imports/Aiutiamo.mp4';

export function ValentinaPage() {
  const t = useT();
  return (
    <div className="bg-white">
      {/* SECTION 1 - HERO */}
      <section className="relative h-[90vh] min-h-[700px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Valentina"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <AnimatedSection>
            <h1 className="text-5xl md:text-6xl mb-6">
              {t({ pt: 'Ajudamos Valentina', it: 'Aiutiamo Valentina' })}
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-2xl md:text-3xl mb-6 leading-relaxed">
              {t({ pt: 'Uma história concreta de fragilidade, cuidado e esperança em Salvador de Bahia.', it: 'Una storia concreta di fragilità, cura e speranza a Salvador de Bahia.' })}
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <p className="text-lg md:text-xl mb-10 leading-relaxed max-w-3xl mx-auto opacity-90">
              {t({ pt: 'Uma pequena iniciativa nascida para ajudar Valentina e a sua família a viver em condições mais seguras e dignas.', it: 'Una piccola iniziativa nata per aiutare Valentina e la sua famiglia a vivere in condizioni più sicure e dignitose.' })}
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" to="/dona-ora" className="text-lg px-8 py-4">
                {t({ pt: 'Doar agora', it: 'Dona ora' })}
              </Button>
              <Button variant="secondary" to="/il-centro" className="text-lg px-8 py-4 bg-white/10 backdrop-blur-sm border-white hover:bg-white/20">
                {t({ pt: 'Conheça o Centro', it: 'Scopri il Centro' })}
              </Button>
            </div>
          </AnimatedSection>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-white/80" />
          </div>
        </div>
      </section>

      {/* SECTION 2 - LA STORIA DI VALENTINA */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={storyImg}
                  alt={t({ pt: 'Valentina e a sua família', it: 'Valentina e la sua famiglia' })}
                  className="w-full h-auto object-cover"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div>
                <h2 className="text-4xl md:text-5xl text-[var(--deep-blue)] mb-8">
                  {t({ pt: 'A história de Valentina', it: 'La storia di Valentina' })}
                </h2>
                <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                  <p>
                    {t({ pt: 'Valentina é uma menina de um ano que frequenta a nossa creche em Salvador de Bahia desde quando tinha cinco meses.', it: 'Valentina è una bambina di un anno che frequenta il nostro asilo a Salvador de Bahia sin da quando aveva cinque mesi.' })}
                  </p>
                  <p>
                    {t({ pt: 'Vive com a sua família numa situação de forte fragilidade social.', it: 'Vive con la sua famiglia in una situazione di forte fragilità sociale.' })}
                  </p>
                  <p>
                    {t({ pt: 'Nos últimos meses foi internada várias vezes no hospital por broncopneumonia.', it: 'Negli ultimi mesi è stata ricoverata più volte in ospedale per broncopolmonite.' })}
                  </p>
                  <p>
                    {t({ pt: 'Durante algumas visitas domiciliárias, as irmãs e os educadores do Centro descobriram que a família cozinhava diariamente no fogo aceso perto de casa, porque não tinha possibilidade de comprar as botijas de gás.', it: 'Durante alcune visite domiciliari, le sorelle e gli educatori del Centro hanno scoperto che la famiglia cucinava quotidianamente sul fuoco acceso vicino alla casa, perché non aveva la possibilità di acquistare le bombole del gas.' })}
                  </p>
                  <p>
                    {t({ pt: 'A fumaça constante e as condições ambientais estavam a comprometer seriamente a saúde da menina.', it: 'Il fumo costante e le condizioni ambientali stavano compromettendo seriamente la salute della bambina.' })}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* SECTION 3 - COME NASCE L'INIZIATIVA */}
      <section className="py-20 bg-gradient-to-b from-[#f8f9fb] to-white">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl text-[var(--deep-blue)] text-center mb-10">
              {t({ pt: 'Uma ajuda concreta nascida da escuta', it: "Un aiuto concreto nato dall'ascolto" })}
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="space-y-6 text-xl text-gray-700 leading-relaxed mb-12">
              <p>
                {t({ pt: 'Desta situação concreta nasceu a iniciativa "Ajudamos Valentina".', it: 'Da questa situazione concreta è nata l\'iniziativa "Aiutiamo Valentina".' })}
              </p>
              <p>
                {t({ pt: 'O objetivo era simples mas fundamental: permitir à família cozinhar de forma segura, evitando a fumaça do fogo aceso perto de casa.', it: 'L\'obiettivo era semplice ma fondamentale: permettere alla famiglia di cucinare in modo sicuro, evitando il fumo del fuoco acceso vicino alla casa.' })}
              </p>
              <p>
                {t({ pt: 'Graças à generosidade de tantas pessoas, foi possível apoiar a família através da compra das botijas de gás e, posteriormente, de um novo fogão.', it: 'Grazie alla generosità di tante persone, è stato possibile sostenere la famiglia attraverso l\'acquisto delle bombole del gas e successivamente di una nuova cucina.' })}
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="bg-gradient-to-br from-[var(--beige)] to-white p-10 rounded-2xl border-l-4 border-[var(--warm-orange)] shadow-lg">
              <p className="text-2xl text-[var(--deep-blue)] italic text-center">
                {t({ pt: '"Cada pequeno gesto pode mudar concretamente a vida de uma família."', it: '"Ogni piccolo gesto può cambiare concretamente la vita di una famiglia."' })}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 4 - CARD RACCOLTA FONDI */}
      <section className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-6">
          <AnimatedSection>
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              {/* Video */}
              <div className="relative h-96 overflow-hidden">
                <video
                  src={valentinaVideo}
                  className="w-full h-full object-cover"
                  controls
                  poster=""
                />
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Title */}
                <h3 className="text-3xl text-[var(--deep-blue)] mb-4">
                  {t({ pt: 'Ajudamos Valentina – Salvador de Bahia', it: 'Aiutiamo Valentina – Salvador de Bahia' })}
                </h3>

                {/* Subtitle */}
                <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                  {t({ pt: 'Ajudamos Valentina a estar bem', it: 'Aiutiamo Valentina a stare bene' })}
                </p>

                {/* Progress Bar */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">{t({ pt: 'Progresso', it: 'Progresso' })}</span>
                    <span className="text-lg font-medium text-white bg-green-600 px-3 py-1 rounded">
                      177%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-green-600 to-green-400 h-full rounded-full transition-all duration-500"
                      style={{ width: '100%' }}
                    ></div>
                  </div>
                </div>

                {/* Donation Data */}
                <div className="grid grid-cols-3 gap-6 py-6 border-t border-b border-gray-200">
                  <div className="text-center">
                    <p className="text-3xl text-[var(--deep-blue)] mb-2">
                      €1.770
                    </p>
                    <p className="text-sm text-gray-600">{t({ pt: 'Arrecadados', it: 'Raccolti' })}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl text-[var(--deep-blue)] mb-2">
                      €1.000
                    </p>
                    <p className="text-sm text-gray-600">{t({ pt: 'Objetivo', it: 'Obiettivo' })}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xl text-green-600 mb-2">
                      {t({ pt: 'Concluída', it: 'Conclusa' })}
                    </p>
                    <p className="text-sm text-gray-600">{t({ pt: 'Estado', it: 'Stato' })}</p>
                  </div>
                </div>

                {/* Success Message */}
                <div className="mt-6 bg-green-50 border border-green-200 p-4 rounded-xl">
                  <p className="text-green-800 text-center">
                    {t({ pt: '✓ Objetivo atingido e superado! Obrigado a todos os que contribuíram.', it: '✓ Obiettivo raggiunto e superato! Grazie a tutti coloro che hanno contribuito.' })}
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 5 - GLI AGGIORNAMENTI */}
      <section className="py-20 bg-gradient-to-b from-[#f8f9fb] to-white">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl text-[var(--deep-blue)] text-center mb-16">
              {t({ pt: 'Atualizações', it: 'Aggiornamenti' })}
            </h2>
          </AnimatedSection>

          <div className="space-y-12">
            {/* Timeline Item 1 */}
            <AnimatedSection delay={0.1}>
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-[var(--deep-blue)] to-blue-400 rounded-full flex items-center justify-center">
                    <Calendar className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-[var(--deep-blue)] font-medium mb-2">
                    {t({ pt: '14 de novembro de 2023', it: '14 novembre 2023' })}
                  </p>
                  <div className="bg-white p-6 rounded-2xl shadow-lg">
                    <p className="text-lg text-gray-700 leading-relaxed">
                      {t({ pt: 'Graças à generosidade de muitos, em poucos dias conseguimos recolher o necessário para ajudar Valentina e a sua família.', it: 'Grazie alla generosità di molti, in pochi giorni siamo riusciti a raccogliere quanto necessario per aiutare Valentina e la sua famiglia.' })}
                      <br /><br />
                      {t({ pt: 'Muito obrigado a todos os que apoiaram e partilharam esta iniciativa.', it: 'Grazie di cuore a tutti coloro che hanno sostenuto e condiviso questa iniziativa.' })}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Timeline Item 2 */}
            <AnimatedSection delay={0.2}>
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-[var(--warm-orange)] to-orange-300 rounded-full flex items-center justify-center">
                    <Calendar className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-[var(--deep-blue)] font-medium mb-2">
                    {t({ pt: '27 de novembro de 2023', it: '27 novembre 2023' })}
                  </p>
                  <div className="bg-white p-6 rounded-2xl shadow-lg">
                    <p className="text-lg text-gray-700 leading-relaxed mb-4">
                      {t({ pt: 'Mensagem de Salvador de Bahia', it: 'Messaggio da Salvador de Bahia' })}
                    </p>
                    <div className="rounded-xl overflow-hidden">
                      <video
                        src={valentinaVideo}
                        className="w-full h-auto"
                        controls
                      />
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Timeline Item 3 */}
            <AnimatedSection delay={0.3}>
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-[var(--soft-green)] to-green-300 rounded-full flex items-center justify-center">
                    <Calendar className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-[var(--deep-blue)] font-medium mb-2">
                    {t({ pt: 'Abril de 2024', it: 'Aprile 2024' })}
                  </p>
                  <div className="bg-white p-6 rounded-2xl shadow-lg">
                    <p className="text-lg text-gray-700 leading-relaxed">
                      {t({ pt: 'Durante as festas de Páscoa foi entregue o novo fogão à família de Valentina.', it: 'Durante le feste di Pasqua è stata consegnata la nuova cucina alla famiglia di Valentina.' })}
                      <br /><br />
                      {t({ pt: 'Obrigado a todos os que tornaram possível este gesto concreto de proximidade.', it: 'Grazie a tutti coloro che hanno reso possibile questo gesto concreto di vicinanza.' })}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* SECTION 6 - UNA STORIA CHE RACCONTA IL CENTRO */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl text-[var(--deep-blue)] mb-8">
              {t({ pt: 'Uma presença cotidiana ao lado das famílias', it: 'Una presenza quotidiana accanto alle famiglie' })}
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="space-y-6 text-xl text-gray-700 leading-relaxed mb-10">
              <p>
                {t({ pt: 'A história de Valentina conta a forma como o Centro Nossa Senhora Aparecida vive a sua missão: através de relações cotidianas, escuta e proximidade concreta às famílias mais frágeis.', it: 'La storia di Valentina racconta il modo in cui il Centro Nossa Senhora Aparecida vive la propria missione: attraverso relazioni quotidiane, ascolto e vicinanza concreta alle famiglie più fragili.' })}
              </p>
              <p>
                {t({ pt: 'Muitas iniciativas nascem precisamente do encontro direto com situações reais vividas pelas crianças acolhidas todos os dias no Centro.', it: 'Molte iniziative nascono proprio dall\'incontro diretto con situazioni reali vissute dai bambini accolti ogni giorno al Centro.' })}
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <Button variant="primary" to="/il-centro" className="text-lg px-8 py-3">
              {t({ pt: 'Conheça o Centro', it: 'Scopri il Centro' })}
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 7 - GRAZIE */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={finalCtaImg}
            alt={t({ pt: 'Obrigado', it: 'Grazie' })}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl mb-6">
              {t({ pt: 'Obrigado por ter ajudado Valentina', it: 'Grazie per aver aiutato Valentina' })}
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-xl md:text-2xl mb-10 leading-relaxed">
              {t({ pt: 'Esta iniciativa foi possível graças à generosidade de tantas pessoas que escolheram partilhar um gesto concreto de proximidade.', it: 'Questa iniziativa è stata possibile grazie alla generosità di tante persone che hanno scelto di condividere un gesto concreto di vicinanza.' })}
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" to="/iniziative" className="text-lg px-8 py-4">
                {t({ pt: 'Conheça outras iniciativas', it: 'Scopri altre iniziative' })}
              </Button>
              <Button variant="secondary" to="/dona-ora" className="text-lg px-8 py-4 bg-white/10 backdrop-blur-sm border-white hover:bg-white/20">
                {t({ pt: 'Doar agora', it: 'Dona ora' })}
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
