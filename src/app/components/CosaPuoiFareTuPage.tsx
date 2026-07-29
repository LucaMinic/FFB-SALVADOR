import { Button } from './Button';
import { AnimatedSection, AnimatedImage } from './AnimatedSection';
import { Heart, Users, FileText, Building2, Share2 } from 'lucide-react';
import { useT } from '../context/LanguageContext';
import heroImg from '../../imports/14.jpeg';
import donationImg from '../../imports/FFBcreche.2025.jpg';
import supportImg from '../../imports/11.jpeg';
import impactImg from '../../imports/15-1.jpeg';
import finalCtaImg from '../../imports/21.jpeg';

export function CosaPuoiFareTuPage() {
  const t = useT();

  return (
    <div className="bg-white">
      {/* SECTION 1 - HERO */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt={t({ pt: 'Crianças do Centro', it: 'Bambini del Centro', de: "Kinder des Zentrums", en: "Children at the Centre" })}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 pt-20 md:pt-0 text-center text-white">
          <AnimatedSection>
            <h1 className="text-5xl md:text-6xl mb-6 leading-tight">
              {t({ pt: 'O que você pode fazer', it: 'Cosa puoi fare tu', de: "Was Sie tun können", en: "What You Can Do" })}
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-2xl md:text-3xl mb-6 leading-relaxed">
              {t({
                pt: 'Cada gesto pode se tornar uma presença concreta na vida de uma criança e de uma família.',
                it: 'Ogni gesto può diventare una presenza concreta nella vita di un bambino e di una famiglia.',
                de: "Jede Geste kann zu einer konkreten Unterstützung im Leben eines Kindes und einer Familie werden.",
                en: "Every gesture can become a real presence in the life of a child and a family."
              })}
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <p className="text-xl mb-10 leading-relaxed max-w-3xl mx-auto opacity-90">
              {t({
                pt: 'O Centro Nossa Senhora Aparecida vive todos os dias graças a relações, cuidado, educação e à proximidade de tantas pessoas que escolhem apoiar esta obra.',
                it: 'Il Centro Nossa Senhora Aparecida vive ogni giorno grazie a relazioni, cura, educazione e alla vicinanza di tante persone che scelgono di sostenere questa opera.',
                de: "Das Centro Nossa Senhora Aparecida lebt jeden Tag dank Beziehungen, Fürsorge, Bildung und der Nähe vieler Menschen, die sich entscheiden, dieses Werk zu unterstützen.",
                en: "The Centro Nossa Senhora Aparecida lives every day thanks to relationships, care, education and the closeness of so many people who choose to support this work."
              })}
            </p>
            <p className="text-xl mb-10 leading-relaxed">
              {t({ pt: 'Você também pode fazer parte.', it: 'Anche tu puoi farne parte.', de: "Auch Sie können ein Teil davon sein.", en: "You too can be part of it." })}
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button to="/dona-ora">
                {t({ pt: 'Doar agora', it: 'Dona ora', de: "Jetzt spenden", en: "Donate now" })}
              </Button>
              <Button variant="secondary" href="#intro-section">
                {t({ pt: 'Descubra como ajudar', it: 'Scopri cosa puoi fare', de: "Entdecken Sie, wie Sie helfen können", en: "Discover what you can do" })}
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 2 - INTRO */}
      <section id="intro-section" className="py-24 bg-gradient-to-b from-white to-[var(--beige)]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-[var(--deep-blue)] mb-8">
              {t({ pt: 'Existem muitas formas de ajudar', it: 'Ci sono molti modi per aiutare', de: "Es gibt viele Möglichkeiten zu helfen", en: "There are many ways to help" })}
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-6">
              {t({
                pt: 'Apoiar o Centro Nossa Senhora Aparecida significa contribuir concretamente para a vida cotidiana das crianças e famílias acolhidas em Salvador da Bahia.',
                it: 'Sostenere il Centro Nossa Senhora Aparecida significa contribuire concretamente alla vita quotidiana dei bambini e delle famiglie accolte a Salvador de Bahia.',
                de: "Das Centro Nossa Senhora Aparecida zu unterstützen bedeutet, konkret zum Alltag der Kinder und Familien beizutragen, die in Salvador de Bahia aufgenommen werden.",
                en: "Supporting the Centro Nossa Senhora Aparecida means contributing concretely to the daily life of the children and families welcomed in Salvador de Bahia."
              })}
            </p>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              {t({
                pt: 'Cada contribuição, pequena ou grande, ajuda a construir continuidade, presença e futuro.',
                it: 'Ogni contributo, piccolo o grande, aiuta a costruire continuità, presenza e futuro.',
                de: "Jeder Beitrag, ob klein oder groß, hilft dabei, Kontinuität, Präsenz und Zukunft aufzubauen.",
                en: "Every contribution, small or large, helps build continuity, presence and a future."
              })}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 3 - WAYS TO HELP */}

      {/* BLOCK 1 - DONATION */}
      <section className="py-24 bg-[var(--beige)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedImage>
              <div className="group overflow-hidden rounded-[2rem] shadow-[0_10px_40px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.2)] transition-all duration-500">
                <img loading="lazy"
                  src={donationImg}
                  alt={t({ pt: 'Doação', it: 'Donazione', de: "Spende", en: "Donation" })}
                  className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </AnimatedImage>

            <AnimatedSection delay={0.2} direction="right">
              <div className="flex items-center gap-3 mb-6">
                <Heart className="w-10 h-10 text-[var(--warm-orange)]" />
                <h2 className="text-3xl md:text-4xl lg:text-5xl text-[var(--deep-blue)]">
                  {t({ pt: 'Faça uma doação', it: 'Fai una donazione', de: "Eine Spende tätigen", en: "Make a donation" })}
                </h2>
              </div>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-8">
                {t({
                  pt: 'Com sua ajuda podemos apoiar a creche, as refeições diárias, os projetos educacionais e o crescimento do Centro.',
                  it: 'Con il tuo aiuto possiamo sostenere l\'asilo, i pasti quotidiani, i progetti educativi e la crescita del Centro.',
                  de: "Mit Ihrer Hilfe können wir die Kita, die täglichen Mahlzeiten, die Bildungsprojekte und das Wachstum des Zentrums unterstützen.",
                  en: "With your help we can support the nursery school, daily meals, educational projects and the Centre's growth."
                })}
              </p>
              <Button to="/dona-ora">
                {t({ pt: 'Doar agora', it: 'Dona ora', de: "Jetzt spenden", en: "Donate now" })}
              </Button>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* BLOCK 2 - 5X1000 */}
      <section className="py-24 bg-gradient-to-br from-[var(--soft-green)] to-[#7ab89a] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <div className="flex items-center gap-3 mb-6">
                <FileText className="w-10 h-10 text-white" />
                <h2 className="text-3xl md:text-4xl lg:text-5xl text-white">
                  {t({ pt: 'Doe seu 5x1000', it: 'Dona il tuo 5x1000', de: "Spenden Sie Ihr 5x1000", en: "Donate your 5x1000" })}
                </h2>
              </div>
              <p className="text-lg md:text-xl leading-relaxed mb-8 opacity-95">
                {t({
                  pt: 'Um gesto simples que pode contribuir concretamente para os projetos educacionais e sociais da Fundação Betania ONLUS.',
                  it: 'Un gesto semplice che può contribuire concretamente ai progetti educativi e sociali della Fundação Betania ONLUS.',
                  de: "Eine einfache Geste, die konkret zu den Bildungs- und Sozialprojekten der Fundação Betania ONLUS beitragen kann.",
                  en: "A simple gesture that can concretely contribute to the educational and social projects of Fundação Betania ONLUS."
                })}
              </p>
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 mb-8">
                <p className="text-lg mb-3 opacity-90">
                  {t({ pt: 'Código Fiscal', it: 'Codice Fiscale', de: "Steuernummer", en: "Tax Code" })}
                </p>
                <p className="text-3xl font-mono tracking-wider">
                  92028960378
                </p>
              </div>
              <Button variant="secondary" to="/dona-ora">
                {t({ pt: 'Saiba mais', it: 'Scopri di più', de: "Erfahren Sie mehr", en: "Learn more" })}
              </Button>
            </AnimatedSection>

            <AnimatedImage delay={0.2}>
              <div className="group overflow-hidden rounded-[2rem] shadow-[0_10px_40px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] transition-all duration-500 border border-white/30">
                <img loading="lazy"
                  src={impactImg}
                  alt={t({ pt: '5x1000', it: '5x1000', de: "5x1000", en: "5x1000" })}
                  className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </AnimatedImage>
          </div>
        </div>
      </section>

      {/* BLOCK 3 - DISTANCE SUPPORT */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedImage>
              <div className="group overflow-hidden rounded-[2rem] shadow-[0_10px_40px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.2)] transition-all duration-500">
                <img loading="lazy"
                  src={supportImg}
                  alt={t({ pt: 'Apoio à distância', it: 'Sostegno a distanza', de: "Patenschaft", en: "Distance Sponsorship" })}
                  className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </AnimatedImage>

            <AnimatedSection delay={0.2} direction="right">
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-10 h-10 text-[var(--soft-green)]" />
                <h2 className="text-3xl md:text-4xl lg:text-5xl text-[var(--deep-blue)]">
                  {t({ pt: 'Apoio à distância', it: 'Sostegno a distanza', de: "Patenschaft", en: "Distance Sponsorship" })}
                </h2>
              </div>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-8">
                {t({
                  pt: 'Acompanhe concretamente o percurso educacional de uma criança, ajudando-a a crescer em um ambiente estável e acolhedor.',
                  it: 'Accompagna concretamente il percorso educativo di un bambino aiutandolo a crescere in un ambiente stabile e accogliente.',
                  de: "Begleiten Sie konkret den Bildungsweg eines Kindes und helfen Sie ihm, in einem stabilen und liebevollen Umfeld aufzuwachsen.",
                  en: "Concretely accompany a child's educational journey, helping them grow up in a stable and welcoming environment."
                })}
              </p>
              <Button to="/sostegno-a-distanza">
                {t({ pt: 'Descubra o apoio à distância', it: 'Scopri il sostegno a distanza', de: "Entdecken Sie die Patenschaft", en: "Discover distance sponsorship" })}
              </Button>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* BLOCK 4 - COMPANIES */}
      <section className="py-24 bg-[var(--beige)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <div className="flex items-center gap-3 mb-6">
                <Building2 className="w-10 h-10 text-[var(--warm-orange)]" />
                <h2 className="text-3xl md:text-4xl lg:text-5xl text-[var(--deep-blue)]">
                  {t({ pt: 'Empresas e profissionais', it: 'Aziende e professionisti', de: "Unternehmen und Fachleute", en: "Companies and professionals" })}
                </h2>
              </div>
              <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-8">
                {t({
                  pt: 'Também empresas, atividades e profissionais podem apoiar o Centro através de doações, serviços ou colaborações.',
                  it: 'Anche aziende, attività e professionisti possono sostenere il Centro attraverso donazioni, servizi o collaborazioni.',
                  de: "Auch Unternehmen, Betriebe und Fachleute können das Zentrum durch Spenden, Dienstleistungen oder Kooperationen unterstützen.",
                  en: "Companies, businesses and professionals can also support the Centre through donations, services or partnerships."
                })}
              </p>
              <Button to="/contatti">
                {t({ pt: 'Entre em contato', it: 'Contattaci', de: "Kontaktieren Sie uns", en: "Contact us" })}
              </Button>
            </AnimatedSection>

            <AnimatedImage delay={0.2}>
              <div className="bg-gradient-to-br from-[var(--warm-orange)] to-[var(--warm-orange-light)] rounded-[2rem] p-12 shadow-[0_10px_40px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.2)] transition-all duration-500">
                <Building2 className="w-24 h-24 text-white mb-6 opacity-80" />
                <p className="text-white text-lg md:text-xl leading-relaxed">
                  {t({
                    pt: 'Parceria empresarial, responsabilidade social, contribuição de serviços profissionais.',
                    it: 'Partnership aziendale, responsabilità sociale, contributo di servizi professionali.',
                    de: "Unternehmenspartnerschaft, soziale Verantwortung, Beitrag durch professionelle Dienstleistungen.",
                    en: "Corporate partnership, social responsibility, contribution of professional services."
                  })}
                </p>
              </div>
            </AnimatedImage>
          </div>
        </div>
      </section>

      {/* BLOCK 5 - SHARE */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <div className="flex justify-center mb-6">
              <Share2 className="w-12 h-12 text-[var(--soft-green)]" />
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-[var(--deep-blue)] mb-8">
              {t({ pt: 'Ajude-nos a divulgar o Centro', it: 'Aiutaci a far conoscere il Centro', de: "Helfen Sie uns, das Zentrum bekannt zu machen", en: "Help us spread the word about the Centre" })}
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-10">
              {t({
                pt: 'Compartilhar esta realidade significa permitir que outras pessoas conheçam e apoiem esta obra.',
                it: 'Condividere questa realtà significa permettere ad altre persone di incontrare e sostenere questa opera.',
                de: "Diese Realität zu teilen bedeutet, anderen Menschen die Möglichkeit zu geben, dieses Werk kennenzulernen und zu unterstützen.",
                en: "Sharing this reality means allowing other people to encounter and support this work."
              })}
            </p>
            <Button to="/il-centro">
              {t({ pt: 'Conheça o Centro', it: 'Scopri il Centro', de: "Entdecken Sie das Zentrum", en: "Discover the Centre" })}
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 4 - CONCRETE IMPACT */}
      <section className="py-24 bg-gradient-to-b from-[var(--beige)] to-white">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-[var(--deep-blue)] mb-16 text-center">
              {t({ pt: 'Cada ajuda se torna vida cotidiana', it: 'Ogni aiuto diventa vita quotidiana', de: "Jede Hilfe wird zu gelebtem Alltag", en: "Every kind of help becomes everyday life" })}
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatedSection delay={0.1}>
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <p className="text-5xl text-[var(--warm-orange)] mb-4">100+</p>
                <p className="text-xl text-gray-800">
                  {t({ pt: 'crianças acolhidas', it: 'bambini accolti', de: "aufgenommene Kinder", en: "children cared for" })}
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <p className="text-5xl text-[var(--soft-green)] mb-4">5</p>
                <p className="text-xl text-gray-800">
                  {t({ pt: 'refeições por dia', it: 'pasti al giorno', de: "Mahlzeiten pro Tag", en: "meals a day" })}
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <p className="text-5xl text-[var(--deep-blue)] mb-4">365</p>
                <p className="text-xl text-gray-800">
                  {t({ pt: 'dias de educação', it: 'giorni di educazione', de: "Bildungstage", en: "days of education" })}
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <p className="text-xl text-gray-800">
                  {t({ pt: 'Apoio às famílias', it: 'Sostegno alle famiglie', de: "Unterstützung für Familien", en: "Support for families" })}
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.5}>
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <p className="text-xl text-gray-800">
                  {t({ pt: 'Novos espaços educacionais', it: 'Nuovi spazi educativi', de: "Neue Bildungsräume", en: "New educational spaces" })}
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.6}>
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <p className="text-xl text-gray-800">
                  {t({ pt: 'Presença diária', it: 'Presenza quotidiana', de: "Tägliche Präsenz", en: "A daily presence" })}
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* SECTION 5 - QUOTE */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img loading="lazy"
            src={impactImg}
            alt={t({ pt: 'Centro', it: 'Centro', de: "Zentrum", en: "Centre" })}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[var(--deep-blue)]/85"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <AnimatedSection>
            <blockquote className="text-3xl md:text-4xl leading-relaxed italic">
              "{t({
                pt: 'O Centro existe graças a tantas pessoas que escolhem todos os dias compartilhar esta responsabilidade e esta esperança.',
                it: 'Il Centro esiste grazie a tante persone che scelgono ogni giorno di condividere questa responsabilità e questa speranza.',
                de: "Das Zentrum existiert dank vieler Menschen, die sich jeden Tag entscheiden, diese Verantwortung und diese Hoffnung zu teilen.",
                en: "The Centre exists thanks to so many people who choose, every day, to share this responsibility and this hope."
              })}"
            </blockquote>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 6 - DIRECT CONTACT */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-[var(--deep-blue)] mb-8">
              {t({ pt: 'Quer entender como ajudar?', it: 'Vuoi capire come aiutare?', de: "Möchten Sie wissen, wie Sie helfen können?", en: "Want to understand how to help?" })}
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-10">
              {t({
                pt: 'Se você deseja apoiar o Centro ou conhecer melhor os projetos, pode entrar em contato diretamente.',
                it: 'Se desideri sostenere il Centro o conoscere meglio i progetti, puoi contattarci direttamente.',
                de: "Wenn Sie das Zentrum unterstützen oder die Projekte näher kennenlernen möchten, können Sie uns direkt kontaktieren.",
                en: "If you would like to support the Centre or learn more about the projects, you can contact us directly."
              })}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" to="/contatti">
                {t({ pt: 'Entre em contato', it: 'Contattaci', de: "Kontaktieren Sie uns", en: "Contact us" })}
              </Button>
              <Button variant="primary" to="/dona-ora">
                {t({ pt: 'Doar agora', it: 'Dona ora', de: "Jetzt spenden", en: "Donate now" })}
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 7 - FINAL CTA */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img loading="lazy"
            src={finalCtaImg}
            alt={t({ pt: 'Faça parte desta história', it: 'Diventa parte di questa storia', de: "Werden Sie Teil dieser Geschichte", en: "Become part of this story" })}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <AnimatedSection>
            <h2 className="text-5xl md:text-6xl mb-8">
              {t({ pt: 'Faça parte desta história', it: 'Diventa parte di questa storia', de: "Werden Sie Teil dieser Geschichte", en: "Become part of this story" })}
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-2xl md:text-3xl mb-12 leading-relaxed">
              {t({
                pt: 'Cada presença, cada ajuda e cada gesto contribuem para construir relações, educação e futuro para tantas crianças e famílias.',
                it: 'Ogni presenza, ogni aiuto e ogni gesto contribuiscono a costruire relazioni, educazione e futuro per tanti bambini e famiglie.',
                de: "Jede Anwesenheit, jede Hilfe und jede Geste tragen dazu bei, Beziehungen, Bildung und Zukunft für viele Kinder und Familien aufzubauen.",
                en: "Every presence, every act of help and every gesture help build relationships, education and a future for so many children and families."
              })}
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button to="/dona-ora">
                {t({ pt: 'Doar agora', it: 'Dona ora', de: "Jetzt spenden", en: "Donate now" })}
              </Button>
              <Button variant="secondary" to="/il-centro">
                {t({ pt: 'Conheça o Centro', it: 'Scopri il Centro', de: "Entdecken Sie das Zentrum", en: "Discover the Centre" })}
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
