import { ArrowLeft } from 'lucide-react';
import { useT } from '../context/LanguageContext';
import { AnimatedSection } from './AnimatedSection';
import { Button } from './Button';
import { ShareButtons } from './ShareButtons';
import { Link } from 'react-router';
import heroImg from '../../imports/33.jpeg';
import finalCtaImg from '../../imports/21.jpeg';

export function DieciAnniCrechePage() {
  const t = useT();

  return (
    <>
      {/* HERO */}
      <section
        className="relative flex flex-col items-center justify-center text-center overflow-hidden"
        style={{ minHeight: 'clamp(70vh, 85vh, 100vh)' }}
      >
        <img src={heroImg} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />

        {/* Back button */}
        <div className="absolute top-8 left-8 z-20">
          <Link
            to="/documentari-racconti"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm font-medium">{t({ pt: 'Voltar', it: 'Torna indietro', de: "Zurück", en: "Back" })}</span>
          </Link>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col items-center gap-8">
          <AnimatedSection delay={0.1}>
            <p className="text-white/70 uppercase tracking-[0.2em] text-sm font-medium mb-4">
              {t({ pt: 'Aniversário', it: 'Anniversario', de: "Jubiläum", en: "Anniversary" })}
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              {t({ pt: 'Dez anos da Creche', it: 'Dieci anni della Creche', de: "Zehn Jahre Kita", en: "Ten years of the Creche" })}
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              {t({
                pt: 'Dez anos de acolhimento, educação e crescimento compartilhado junto às crianças, famílias e comunidade de Salvador da Bahia.',
                it: 'Dieci anni di accoglienza, educazione e crescita condivisa insieme ai bambini, alle famiglie e alla comunità di Salvador de Bahia.',
                de: "Zehn Jahre der Aufnahme, Bildung und gemeinsamen Entwicklung mit den Kindern, Familien und der Gemeinschaft von Salvador de Bahia.",
                en: "Ten years of care, education and growth shared with children, families and the community of Salvador de Bahia.",
              })}
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
              <a
                href="#video"
                className="px-8 py-4 bg-white text-[var(--deep-blue)] font-semibold rounded-xl shadow-lg hover:bg-white/90 transition-all duration-200 text-base"
              >
                {t({ pt: 'Assista ao vídeo', it: 'Guarda il video', de: "Video ansehen", en: "Watch the video" })}
              </a>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.4}>
            <ShareButtons
              title={t({ pt: 'Dez anos da Creche', it: 'Dieci anni della Creche', de: "Zehn Jahre Kita", en: "Ten years of the Creche" })}
              variant="dark"
              className="mt-6"
            />
          </AnimatedSection>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--deep-blue)] mb-8">
              {t({ pt: 'O Centro Nossa Senhora Aparecida completou 10 anos!', it: 'Il Centro Nossa Senhora Aparecida ha compiuto 10 anni!', de: "Das Centro Nossa Senhora Aparecida wird 10 Jahre alt!", en: "The Centro Nossa Senhora Aparecida has turned 10 years old!" })}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              {t({
                pt: 'Nos últimos dez anos, a nossa creche em Salvador da Bahia, Brasil, tornou-se um farol de esperança para crianças e famílias. Fortemente desejada pelo nosso fundador Padre Pancrazio, oferece um ambiente seguro onde instrução, cuidado e amor são parte integrante do crescimento quotidiano.',
                it: 'Negli ultimi dieci anni, il nostro asilo a Salvador de Bahia, Brasile, è diventato un faro di speranza per bambini e famiglie. Fortemente voluto dal nostro fondatore Padre Pancrazio, offre un ambiente sicuro dove istruzione, cura e amore sono parte integrante della crescita quotidiana.',
                de: "In den letzten zehn Jahren ist unsere Kita in Salvador de Bahia, Brasilien, zu einem Hoffnungsschimmer für Kinder und Familien geworden. Sie wurde maßgeblich von unserem Gründer Padre Pancrazio ins Leben gerufen und bietet eine sichere Umgebung, in der Bildung, Fürsorge und Liebe fester Bestandteil des täglichen Wachstums sind.",
                en: "Over the past ten years, our nursery school in Salvador de Bahia, Brazil, has become a beacon of hope for children and families. Strongly desired by our founder Father Pancrazio, it offers a safe environment where education, care and love are an integral part of daily growth.",
              })}
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              {t({
                pt: 'Graças ao empenho dos missionários, dos educadores e de toda a equipe da Creche, foi possível construir um espaço acolhedor dedicado ao aprendizado, ao crescimento e à transmissão de valores fundamentais.',
                it: "Grazie all'impegno dei missionari, degli educatori e di tutto il personale della Creche, è stato possibile costruire uno spazio accogliente dedicato all'apprendimento, alla crescita e alla trasmissione di valori fondamentali.",
                de: "Dank des Einsatzes der Missionare, der Pädagogen und des gesamten Personals der Kita konnte ein einladender Ort geschaffen werden, der dem Lernen, dem Wachstum und der Vermittlung grundlegender Werte gewidmet ist.",
                en: "Thanks to the commitment of the missionaries, educators and all the staff of the Creche, it has been possible to build a welcoming space dedicated to learning, growth and the transmission of fundamental values.",
              })}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* VIDEO SECTION */}
      <section id="video" className="bg-[var(--beige)] py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-6">
          <AnimatedSection delay={0.1}>
            <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/KNgdE51hszg"
                title={t({ pt: 'Dez anos da Creche', it: 'Dieci anni della Creche', de: "Zehn Jahre Kita", en: "Ten years of the Creche" })}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection delay={0.1}>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              {t({
                pt: 'No dia 12 de outubro, celebramos este importante marco junto às crianças, famílias e comunidade local.',
                it: 'Il 12 ottobre abbiamo celebrato questo importante traguardo insieme ai bambini, alle famiglie e alla comunità locale.',
                de: "Am 12. Oktober haben wir diesen wichtigen Meilenstein gemeinsam mit den Kindern, den Familien und der örtlichen Gemeinschaft gefeiert.",
                en: "On 12 October we celebrated this important milestone together with the children, families and local community.",
              })}
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              {t({
                pt: 'Foi um dia de festa, gratidão e partilha, oportunidade para relembrar o caminho percorrido e olhar com confiança para o futuro.',
                it: 'È stata una giornata di festa, gratitudine e condivisione, occasione per ripercorrere il cammino compiuto e guardare con fiducia al futuro.',
                de: "Es war ein Tag voller Freude, Dankbarkeit und Gemeinschaft — eine Gelegenheit, den zurückgelegten Weg Revue passieren zu lassen und voller Zuversicht in die Zukunft zu blicken.",
                en: "It was a day of celebration, gratitude and sharing, an opportunity to look back on the journey made and look to the future with confidence.",
              })}
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              {t({
                pt: 'Renovamos o nosso compromisso com os mais pequenos, agradecendo a todos aqueles que ao longo destes anos apoiaram o Centro Nossa Senhora Aparecida através da oração, proximidade e ajuda concreta.',
                it: "Rinnoviamo il nostro impegno nei confronti dei più piccoli, ringraziando tutti coloro che in questi anni hanno sostenuto il Centro Nossa Senhora Aparecida attraverso la preghiera, la vicinanza e l'aiuto concreto.",
                de: "Wir erneuern unser Engagement für die Kleinsten und danken all jenen, die das Centro Nossa Senhora Aparecida in diesen Jahren durch Gebet, Nähe und konkrete Hilfe unterstützt haben.",
                en: "We renew our commitment to the little ones, thanking all those who over these years have supported the Centro Nossa Senhora Aparecida through prayer, closeness and concrete help.",
              })}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* QUOTE */}
      <section className="py-24 md:py-32 bg-[var(--beige)]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection delay={0.1}>
            <blockquote>
              <p className="text-2xl md:text-3xl italic font-medium leading-relaxed text-[var(--deep-blue)] mb-8">
                &ldquo;{t({
                  pt: 'Louvamos e agradecemos juntos ao Senhor por todas as maravilhas realizadas nestes dez anos de vida.',
                  it: 'Lodiamo e ringraziamo insieme il Signore per tutte le meraviglie compiute in questi dieci anni di vita.',
                  de: "Gemeinsam loben und danken wir dem Herrn für all die Wunder, die in diesen zehn Jahren geschehen sind.",
                  en: "Together we praise and thank the Lord for all the wonders accomplished in these ten years of life.",
                })}&rdquo;
              </p>
              <footer className="text-[var(--deep-blue)]/60 text-sm font-medium tracking-wide uppercase">
                Centro Nossa Senhora Aparecida
              </footer>
            </blockquote>
          </AnimatedSection>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative flex flex-col items-center justify-center text-center py-32 md:py-40 overflow-hidden">
        <img loading="lazy" src={finalCtaImg} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
          <AnimatedSection delay={0.1}>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              {t({ pt: 'Descubra e apoie o Centro', it: 'Scopri e sostieni il Centro', de: "Entdecken und unterstützen Sie das Zentrum", en: "Discover and support the Centre" })}
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mb-10">
              {t({
                pt: 'Conheça mais sobre o trabalho do Centro Nossa Senhora Aparecida e descubra como você pode fazer parte desta missão.',
                it: 'Scopri di più sul lavoro del Centro Nossa Senhora Aparecida e come puoi far parte di questa missione.',
                de: "Erfahren Sie mehr über die Arbeit des Centro Nossa Senhora Aparecida und wie Sie Teil dieser Mission werden können.",
                en: "Learn more about the work of the Centro Nossa Senhora Aparecida and how you can be part of this mission.",
              })}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" to="/il-centro">
                {t({ pt: 'Conheça o Centro', it: 'Scopri il Centro', de: "Entdecken Sie das Zentrum", en: "Discover the Centre" })}
              </Button>
              <Button variant="secondary" to="/dona-ora">
                {t({ pt: 'Apoie o Centro', it: 'Sostieni il Centro', de: "Unterstützen Sie das Zentrum", en: "Support the Centre" })}
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
