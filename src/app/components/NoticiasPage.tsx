import { useT } from '../context/LanguageContext';
import { AnimatedSection } from './AnimatedSection';
import { Button } from './Button';
import { Link } from 'react-router';
import heroImg from '../../imports/diego/noticia-tonelada-amor-capa.jpg';
import eventoPresidenteImg from '../../imports/21-4.jpeg';

export function NoticiasPage() {
  const t = useT();

  const noticias = [
    {
      id: 'eventos-especiais',
      title: t({ pt: 'Visita do Presidente da República Italiana', it: 'Visita del Presidente della Repubblica Italiana', de: 'Besuch des Präsidenten der Italienischen Republik', en: 'Visit of the President of the Italian Republic' }),
      description: t({
        pt: 'O Centro Nossa Senhora Aparecida e a Fraternidade Franciscana de Betânia acolheram a visita do Presidente da República Italiana, Sergio Mattarella, um momento de grande valor humano e institucional.',
        it: 'Il Centro Nossa Senhora Aparecida e la Fraternità Francescana di Betania hanno accolto la visita del Presidente della Repubblica Italiana, Sergio Mattarella, un momento di grande valore umano e istituzionale.',
        de: 'Das Centro Nossa Senhora Aparecida und die Franziskanische Gemeinschaft von Betania empfingen den Präsidenten der Italienischen Republik, Sergio Mattarella, zu einem Besuch von großem menschlichem und institutionellem Wert.',
        en: 'The Centro Nossa Senhora Aparecida and the Franciscan Fraternity of Betania welcomed a visit from the President of the Italian Republic, Sergio Mattarella, a moment of great human and institutional value.',
      }),
      image: eventoPresidenteImg,
      link: '/noticias/eventos-especiais',
    },
    {
      id: 'tonelada-de-amor',
      title: 'Tonelada de Amor',
      description: t({
        pt: 'O Centro Nossa Senhora Aparecida recebeu mais de uma tonelada de alimentos doados pelos alunos do Colégio Antônio Vieira, na campanha "Tonelada de Amor".',
        it: 'Il Centro Nossa Senhora Aparecida ha ricevuto più di una tonnellata di alimenti donati dagli studenti del Colégio Antônio Vieira, nell\'ambito della campagna "Tonnellata d\'Amore".',
        de: 'Das Centro Nossa Senhora Aparecida erhielt über eine Tonne Lebensmittel, die von den Schülerinnen und Schülern des Colégio Antônio Vieira im Rahmen der Kampagne „Tonne der Liebe“ gespendet wurden.',
        en: 'The Centro Nossa Senhora Aparecida received over a ton of food donated by students of the Colégio Antônio Vieira as part of the "Ton of Love" campaign.',
      }),
      image: heroImg,
      link: '/noticias/tonelada-de-amor',
    },
  ];

  return (
    <>
      {/* HERO */}
      <section
        className="relative flex flex-col items-center justify-center text-center overflow-hidden"
        style={{ minHeight: 'clamp(70vh, 85vh, 100vh)' }}
      >
        <img src={eventoPresidenteImg} alt="" className="absolute inset-0 w-full h-full object-cover" style={{ objectPosition: 'center 30%' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col items-center gap-8">
          <AnimatedSection delay={0.1}>
            <p className="text-white/70 uppercase tracking-[0.2em] text-sm font-medium mb-4">
              Centro Nossa Senhora Aparecida
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              {t({ pt: 'Notícias', it: 'Notizie', de: 'Neuigkeiten', en: 'News' })}
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              {t({
                pt: 'Acompanhe as últimas novidades, campanhas e momentos vividos no Centro Nossa Senhora Aparecida e na Fundação Betânia Onlus.',
                it: 'Segui le ultime novità, le campagne e i momenti vissuti al Centro Nossa Senhora Aparecida e nella Fundação Betânia Onlus.',
                de: 'Verfolgen Sie die neuesten Nachrichten, Kampagnen und Momente aus dem Centro Nossa Senhora Aparecida und der Fundação Betânia Onlus.',
                en: 'Follow the latest news, campaigns and moments from the Centro Nossa Senhora Aparecida and Fundação Betânia Onlus.',
              })}
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
              <a
                href="#noticias"
                className="px-8 py-4 bg-white text-[var(--deep-blue)] font-semibold rounded-xl shadow-lg hover:bg-white/90 transition-all duration-200 text-base"
              >
                {t({ pt: 'Veja as notícias', it: 'Vedi le notizie', de: 'Nachrichten ansehen', en: 'See the news' })}
              </a>
              <Button variant="primary" to="/dona-ora">
                {t({ pt: 'Doe agora', it: 'Dona ora', de: 'Jetzt spenden', en: 'Donate now' })}
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* INTRO */}
      <section id="noticias" className="bg-white py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--deep-blue)] mb-8">
              {t({ pt: 'Histórias que continuam a acontecer', it: 'Storie che continuano ad accadere', de: 'Geschichten, die weiterhin geschehen', en: 'Stories that keep happening' })}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              {t({
                pt: 'Aqui reunimos, aos poucos, as notícias, campanhas solidárias e momentos especiais que marcam o dia a dia do Centro Nossa Senhora Aparecida e da Fundação Betânia Onlus.',
                it: 'Qui raccogliamo, poco a poco, le notizie, le campagne solidali e i momenti speciali che segnano la vita quotidiana del Centro Nossa Senhora Aparecida e della Fundação Betânia Onlus.',
                de: 'Hier sammeln wir nach und nach die Nachrichten, Solidaritätskampagnen und besonderen Momente, die den Alltag des Centro Nossa Senhora Aparecida und der Fundação Betânia Onlus prägen.',
                en: 'Here we gradually gather the news, solidarity campaigns and special moments that mark daily life at the Centro Nossa Senhora Aparecida and Fundação Betânia Onlus.',
              })}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* NEWS GRID */}
      <section className="bg-[var(--beige)] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {noticias.map((noticia, index) => (
              <AnimatedSection key={noticia.id} delay={index * 0.15}>
                <Link
                  to={noticia.link}
                  className="group block bg-white rounded-3xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)] transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="relative overflow-hidden aspect-[4/5]">
                    <img loading="lazy"
                      src={noticia.image}
                      alt={noticia.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-[var(--deep-blue)] mb-4 group-hover:text-[var(--warm-orange)] transition-colors duration-300">
                      {noticia.title}
                    </h3>
                    <p className="text-gray-600 text-base leading-relaxed mb-6 line-clamp-3">
                      {noticia.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-[var(--warm-orange)] font-semibold text-sm uppercase tracking-wide group-hover:gap-3 transition-all duration-300">
                      {t({ pt: 'Saiba mais', it: 'Scopri di più', de: 'Mehr erfahren', en: 'Learn more' })}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--deep-blue)] mb-6">
              {t({ pt: 'Faça parte destas histórias', it: 'Fai parte di queste storie', de: 'Werden Sie Teil dieser Geschichten', en: 'Be part of these stories' })}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
              {t({
                pt: 'Cada notícia nasce do apoio de quem acredita no cuidado, na educação e na solidariedade como caminho de transformação.',
                it: 'Ogni notizia nasce dal sostegno di chi crede nella cura, nell\'educazione e nella solidarietà come cammino di trasformazione.',
                de: 'Jede Nachricht entsteht aus der Unterstützung derer, die an Fürsorge, Bildung und Solidarität als Weg der Veränderung glauben.',
                en: 'Every piece of news is born from the support of those who believe in care, education and solidarity as a path of transformation.',
              })}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" to="/dona-ora">
                {t({ pt: 'Doe agora', it: 'Dona ora', de: 'Jetzt spenden', en: 'Donate now' })}
              </Button>
              <Button variant="secondary" to="/il-centro">
                {t({ pt: 'Conheça o Centro', it: 'Scopri il Centro', de: 'Entdecken Sie das Centro', en: 'Discover the Centre' })}
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
