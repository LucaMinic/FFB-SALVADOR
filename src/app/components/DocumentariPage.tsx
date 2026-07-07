import { ChevronDown } from 'lucide-react';
import { useT } from '../context/LanguageContext';
import { AnimatedSection } from './AnimatedSection';
import { Button } from './Button';
import { Link } from 'react-router';
import heroImg from '../../imports/nuove/10.jpeg';
import primaPietraImg from '../../imports/converted-3.jpg';

import intervistaImg from '../../imports/Suor_Mariangela.jpg';
import dieciAnniImg from '../../imports/33.jpeg';
import visitaPresidenteImg from '../../imports/21.jpeg';

export function DocumentariPage() {
  const t = useT();

  const documentaries = [
    {
      id: 'intervista-centro',
      title: t({ pt: 'Entrevista ao Centro', it: 'Intervista al Centro' }),
      description: t({
        pt: 'Estamos felizes em compartilhar com vocês uma entrevista realizada pelo Centro Missionário de Verona por ocasião do encontro dos missionários italianos no Brasil. Este serviço conta a nossa missão e o trabalho que realizamos em Salvador da Bahia, oferecendo uma oportunidade especial para conhecer mais de perto a nossa realidade e o caminho que percorremos todos os dias ao lado das comunidades locais. Boa visualização!',
        it: "Siamo felici di condividere con voi un'intervista realizzata dal Centro Missionario di Verona in occasione dell'incontro dei missionari italiani in Brasile. Questo servizio racconta la nostra missione e il lavoro che svolgiamo a Salvador de Bahia, offrendo un'opportunità speciale per conoscere più da vicino la nostra realtà e il cammino che percorriamo ogni giorno al fianco delle comunità locali. Buona visione!"
      }),
      image: intervistaImg,
      link: '/documentari-racconti/intervista-centro'
    },
    {
      id: 'visita-presidente',
      title: t({ pt: 'A visita do Presidente da República Italiana', it: 'La visita del Presidente della Repubblica Italiana' }),
      description: t({
        pt: 'Caríssimos amigos, estamos felizes em compartilhar esta experiência: na sexta-feira, 19 de julho de 2024, tivemos o prazer de receber a visita do Presidente da República, Sergio Mattarella, em nossa Missão no Brasil. O Chefe de Estado estava no País por ocasião do 150° aniversário da emigração italiana, um viagem dedicada ao encontro com as diversas realidades italianas presentes no território. Como tapa conclusiva do seu percurso, escolheu visitar também a nossa Fraternidade e o asilo. É stata uma experiência carregada de emoção e de grande graça. 💙',
        it: 'Carissimi amici, siamo felici di condividervi questa esperienza: venerdì 19 luglio 2024 abbiamo avuto il piacere di ricevere la visita del Presidente della Repubblica, Sergio Mattarella, presso la nostra Missione in Brasile. Il Capo dello Stato si trovava nel Paese in occasione del 150° anniversario dell\'emigrazione italiana, un viaggio dedicato all\'incontro con le diverse realtà italiane presenti sul territorio. Come tappa conclusiva del suo percorso, ha scelto di visitare anche la nostra Fraternità e l\'asilo. È stata un\'esperienza carica di emozione e di grande grazia. 💙'
      }),
      image: visitaPresidenteImg,
      link: '/documentari-racconti/visita-presidente'
    },
    {
      id: 'dieci-anni-creche',
      title: t({ pt: 'Dez anos da Creche', it: 'Dieci anni della Creche' }),
      description: t({
        pt: 'O Centro Nossa Senhora Aparecida completou 10 anos. Dez anos de acolhimento, educação e crescimento compartilhado junto às crianças, famílias e comunidade de Salvador da Bahia. Um aniversário que conta uma história feita de relações, esperança e futuro.',
        it: 'Il Centro Nossa Senhora Aparecida ha compiuto 10 anni. Dieci anni di accoglienza, educazione e crescita condivisa insieme ai bambini, alle famiglie e alla comunità di Salvador de Bahia. Un anniversario che racconta una storia fatta di relazioni, speranza e futuro.'
      }),
      image: dieciAnniImg,
      link: '/documentari-racconti/dieci-anni-creche'
    },
    {
      id: 'posa-prima-pietra',
      title: t({ pt: 'Lançamento da pedra fundamental', it: 'Posa della prima pietra' }),
      description: t({
        pt: 'O relato do início da nova escola e do momento simbólico que marcou o início de um percurso construído juntos.',
        it: "Il racconto dell'inizio della nuova scuola e del momento simbolico che ha segnato l'avvio di un percorso costruito insieme."
      }),
      image: primaPietraImg,
      link: '/documentari-racconti/posa-prima-pietra'
    },
  ];

  return (
    <main>
      {/* HERO */}
      <section
        className="relative flex flex-col items-center justify-center text-center overflow-hidden"
        style={{ minHeight: 'clamp(70vh, 85vh, 100vh)' }}
      >
        <img src={heroImg} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col items-center gap-8">
          <AnimatedSection delay={0.1}>
            <p className="text-white/70 uppercase tracking-[0.2em] text-sm font-medium mb-4">
              Centro Nossa Senhora Aparecida
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              {t({ pt: 'Documentários e Relatos', it: 'Documentari e Racconti' })}
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              {t({
                pt: 'Histórias, memórias e percursos que contam a vida do Centro Nossa Senhora Aparecida através de imagens, encontros e relações.',
                it: 'Storie, memorie e percorsi che raccontano la vita del Centro Nossa Senhora Aparecida attraverso immagini, incontri e relazioni.',
              })}
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
              <a
                href="#racconti"
                className="px-8 py-4 bg-white text-[var(--deep-blue)] font-semibold rounded-xl shadow-lg hover:bg-white/90 transition-all duration-200 text-base"
              >
                {t({ pt: 'Assista aos relatos', it: 'Guarda i racconti' })}
              </a>
              <Button variant="secondary" to="/dona-ora">
                {t({ pt: 'Doe agora', it: 'Dona ora' })}
              </Button>
            </div>
          </AnimatedSection>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <ChevronDown className="w-8 h-8 text-white/60 animate-bounce" />
        </div>
      </section>

      {/* INTRO */}
      <section id="racconti" className="bg-white py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--deep-blue)] mb-8">
              {t({ pt: 'Narrar para preservar a memória', it: 'Raccontare per custodire la memoria' })}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              {t({
                pt: 'Com o tempo, o Centro Nossa Senhora Aparecida tornou-se também um lugar de encontros, relatos e narrações partilhadas.',
                it: 'Nel tempo, il Centro Nossa Senhora Aparecida è diventato anche un luogo di incontri, racconti e narrazioni condivise.',
              })}
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              {t({
                pt: 'Através de documentários, testemunhos e projetos audiovisuais, tomam forma histórias que falam de educação, relações, cultura e vida quotidiana.',
                it: 'Attraverso documentari, testimonianze e progetti audiovisivi, prendono forma storie che parlano di educazione, relazioni, cultura e vita quotidiana.',
              })}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* DOCUMENTARY GALLERY */}
      <section className="bg-[var(--beige)] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {documentaries.map((doc, index) => (
              <AnimatedSection key={doc.id} delay={index * 0.15}>
                <Link
                  to={doc.link}
                  className="group block bg-white rounded-3xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)] transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="relative overflow-hidden aspect-[4/5]">
                    <img
                      src={doc.image}
                      alt={doc.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-[var(--deep-blue)] mb-4 group-hover:text-[var(--warm-orange)] transition-colors duration-300">
                      {doc.title}
                    </h3>
                    <p className="text-gray-600 text-base leading-relaxed mb-6 line-clamp-3">
                      {doc.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-[var(--warm-orange)] font-semibold text-sm uppercase tracking-wide group-hover:gap-3 transition-all duration-300">
                      {t({ pt: 'Saiba mais', it: 'Scopri di più' })}
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
              {t({ pt: 'Descubra a vida do Centro', it: 'Scopri la vita del Centro' })}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
              {t({
                pt: 'Cada relato nasce de relações quotidianas, experiências partilhadas e percursos educativos vividos juntos.',
                it: 'Ogni racconto nasce da relazioni quotidiane, esperienze condivise e percorsi educativi vissuti insieme.',
              })}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" to="/il-centro">
                {t({ pt: 'Conheça o Centro', it: 'Scopri il Centro' })}
              </Button>
              <Button variant="secondary" to="/dona-ora">
                {t({ pt: 'Apoie o Centro', it: 'Sostieni il Centro' })}
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
