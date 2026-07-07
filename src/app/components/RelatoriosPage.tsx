import { ChevronDown, Download, FileText } from 'lucide-react';
import { useT } from '../context/LanguageContext';
import { AnimatedSection } from './AnimatedSection';
import { Button } from './Button';
import heroImg from '../../imports/nuove/r6bis.png';
import img1 from '../../imports/nuove/r1b.png';
import img2 from '../../imports/nuove/r2bis.png';
import img3 from '../../imports/nuove/r3.png';
import img4 from '../../imports/nuove/r4bis.png';
import img5 from '../../imports/nuove/r5bis.png';
import img6 from '../../imports/nuove/r6.png';
import img7 from '../../imports/nuove/r2.png';

export function RelatoriosPage() {
  const t = useT();
  const base = import.meta.env.BASE_URL;

  const reports = [
    {
      img: img1,
      category: t({ pt: 'Relatório bimestral · Fev/Mar 2026', it: 'Relazione bimestrale · Feb/Mar 2026' }),
      title: t({ pt: '1ª Campanha Educação Nutricional 2026 — Alimentação Equilibrada', it: '1ª Campagna Educazione Nutrizionale 2026 — Alimentazione Equilibrata' }),
      description: t({
        pt: 'Registro das propostas realizadas no período de fevereiro e março de 2026: oficina de manipulação de frutas, degustação de pitaia e experiência de self-service no refeitório. Autora: Joseilma Passos.',
        it: 'Registro delle proposte realizzate nel periodo di febbraio e marzo 2026: laboratorio di manipolazione di frutta, degustazione di pitaia ed esperienza self-service in refettorio. Autrice: Joseilma Passos.',
      }),
      href: `${base}relatorios/relatorio-1-campanha-nutricional-2026.pdf`,
      color: 'var(--deep-blue)',
    },
    {
      img: img2,
      category: t({ pt: 'Relatório bimestral · Abr/Mai 2025', it: 'Relazione bimestrale · Apr/Mag 2025' }),
      title: t({ pt: '2º Bimestre — Incentivo ao consumo de Legumes, Verduras e Frutas', it: '2° Bimestre — Incentivo al consumo di Ortaggi, Verdure e Frutta' }),
      description: t({
        pt: 'Oficinas de preparo de saladas e sanduíches naturais, investigação brincante com melancia e abacate, plantio de hortaliças e palestra com nutricionistas para as famílias. Autora: Joseilma Passos.',
        it: 'Laboratori di preparazione di insalate e panini naturali, esplorazione ludica di anguria e avocado, semina di ortaggi e incontro con nutrizioniste per le famiglie. Autrice: Joseilma Passos.',
      }),
      href: `${base}relatorios/relatorio-2-bimestre-legumes-verduras-frutas.pdf`,
      color: 'var(--soft-green)',
    },
    {
      img: img3,
      category: t({ pt: 'Relatório bimestral · 3ª Campanha', it: 'Relazione bimestrale · 3ª Campagna' }),
      title: t({ pt: '3ª Campanha Educação Nutricional — Açúcares, Sal e Gorduras', it: '3ª Campagna Educazione Nutrizionale — Zuccheri, Sale e Grassi' }),
      description: t({
        pt: 'Oficinas de culinária saudável: beijinho de batata-doce, doce de abóbora, iogurte com frutas, guacamole e molho de ervas. Visita do dentista em parceria com o posto de saúde local. Retomada do cultivo de ervas aromáticas na horta.',
        it: 'Laboratori di cucina sana: dolcetto di patata dolce, marmellata di zucca, yogurt con frutta, guacamole e salsa alle erbe. Visita del dentista in collaborazione con il centro di salute locale. Ripresa della coltivazione di erbe aromatiche nell\'orto.',
      }),
      href: `${base}relatorios/relatorio-3-campanha-acucares-sal-gorduras.pdf`,
      color: 'var(--warm-orange)',
    },
    {
      img: img4,
      category: t({ pt: 'Relatório bimestral · 4ª Campanha · Nov 2025', it: 'Relazione bimestrale · 4ª Campagna · Nov 2025' }),
      title: t({ pt: '4ª Campanha Educação Nutricional — Energia, Carboidratos, Óleos e Gorduras', it: '4ª Campagna Educazione Nutrizionale — Energia, Carboidrati, Oli e Grassi' }),
      description: t({
        pt: 'Construção da pirâmide alimentar, brincadeira de self-service, leitura de rótulos no mercadinho, alimentos ricos em ferro e oficina de barrinha de cereal natural. Autora: Joseilma Passos.',
        it: 'Costruzione della piramide alimentare, gioco di self-service, lettura delle etichette al mini-mercato, alimenti ricchi di ferro e laboratorio di barrette di cereali naturali. Autrice: Joseilma Passos.',
      }),
      href: `${base}relatorios/relatorio-4-campanha-energia-carboidratos-oleos-gorduras.pdf`,
      color: 'var(--warm-red)',
    },
    {
      img: img5,
      category: t({ pt: 'Relatório bimestral · 5ª Campanha · Dez 2025', it: 'Relazione bimestrale · 5ª Campagna · Dic 2025' }),
      title: t({ pt: '5ª Campanha Educação Nutricional — Proteínas e Minerais', it: '5ª Campagna Educazione Nutrizionale — Proteine e Minerali' }),
      description: t({
        pt: 'Proposta "De onde vem o leite?", biscoitinho de aveia com banana, "Quem nos fornece o ovo?" com cenário de fazendinha, classificação na pirâmide alimentar e piquenique coletivo de encerramento do ano. Autora: Joseilma Passos.',
        it: 'Proposta "Da dove viene il latte?", biscottini di avena con banana, "Chi ci fornisce l\'uovo?" con scenario di fattoria, classificazione nella piramide alimentare e picnic collettivo di chiusura dell\'anno. Autrice: Joseilma Passos.',
      }),
      href: `${base}relatorios/relatorio-5-campanha-proteinas-minerais.pdf`,
      color: 'var(--deep-blue)',
    },
    {
      img: img6,
      category: t({ pt: '6ª Campanha · Mai 2026', it: '6ª Campagna · Mag 2026' }),
      title: t({ pt: '6ª Campanha — Aproveitamento Integral dos Alimentos', it: '6ª Campagna — Utilizzo Integrale degli Alimenti' }),
      description: t({
        pt: 'Oficina de novos sabores (maxixe, caqui, pinha, jiló), brincadeiras de aproveitamento integral, palestra sobre aleitamento materno e workshop de iogurte natural com frutas para as famílias. Autora: Joseilma Passos.',
        it: 'Laboratorio di nuovi sapori (maxixe, cachi, frutto del custode, giló), giochi di utilizzo integrale, conferenza sull\'allattamento materno e workshop di yogurt naturale con frutta per le famiglie. Autrice: Joseilma Passos.',
      }),
      href: `${base}relatorios/relatorio-6-campanha-aproveitamento-integral.pdf`,
      color: 'var(--soft-green)',
    },
    {
      img: img7,
      category: t({ pt: 'Relatório Anual · 2025', it: 'Relazione Annuale · 2025' }),
      title: t({ pt: 'Relatório Anual — Está na mesa, está no prato, vai para o corpo', it: 'Relazione Annuale — È in tavola, è nel piatto, va nel corpo' }),
      description: t({
        pt: 'Relatório do projeto de intervenção anual 2025: self-service para mapeamento dos hábitos alimentares, experimentação de folhas verdes, história cantada "Sopa do Nenê" com os bebês, e investigação da beterraba e limão com preparo coletivo do suco.',
        it: 'Relazione del progetto di intervento annuale 2025: self-service per la mappatura delle abitudini alimentari, esplorazione di foglie verdi, storia cantata "Sopa do Nenê" con i lattanti, e investigazione di barbabietola e limone con preparazione collettiva del succo.',
      }),
      href: `${base}relatorios/relatorio-7-alimentacao-saudavel-2025.pdf`,
      color: 'var(--warm-orange)',
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
              {t({ pt: 'Creche do Centro Nossa Senhora Aparecida', it: 'Asilo del Centro Nossa Senhora Aparecida' })}
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              {t({ pt: 'Relatórios', it: 'Relazioni' })}
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              {t({
                pt: 'Documentação pedagógica transparente e acessível — o registro vivo do trabalho realizado com nossas crianças.',
                it: 'Documentazione pedagogica trasparente e accessibile — la registrazione viva del lavoro svolto con i nostri bambini.',
              })}
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
              <Button variant="primary" to="/dona-ora">
                {t({ pt: 'Doar agora', it: 'Dona ora' })}
              </Button>
              <a
                href="#relatorios"
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-200 text-base"
              >
                {t({ pt: 'Ver relatórios', it: 'Vedi le relazioni' })}
              </a>
            </div>
          </AnimatedSection>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <ChevronDown className="w-8 h-8 text-white/60 animate-bounce" />
        </div>
      </section>

      {/* INTRO */}
      <section id="relatorios" className="bg-white py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection delay={0.1}>
            <div className="text-center mb-20">
              <div className="w-16 h-1 bg-[var(--warm-orange)] mx-auto mb-8 rounded-full" />
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--deep-blue)] mb-6">
                {t({ pt: 'Documentos disponíveis', it: 'Documenti disponibili' })}
              </h2>
              <p className="text-gray-600 text-xl leading-relaxed max-w-3xl mx-auto">
                {t({
                  pt: 'Cada relatório é um registro cuidadoso das propostas, das descobertas e do desenvolvimento das crianças. Faça o download e conheça em profundidade o trabalho realizado.',
                  it: "Ogni relazione è un registro attento delle proposte, delle scoperte e dello sviluppo dei bambini. Scarica e conosci in profondità il lavoro svolto.",
                })}
              </p>
            </div>
          </AnimatedSection>

          {/* GRID RELATORIOS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reports.map((report, index) => (
              <AnimatedSection key={index} delay={index * 0.08}>
                <div className="bg-white rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col h-full border border-gray-100 hover:shadow-[0_16px_48px_rgba(0,0,0,0.13)] transition-shadow duration-300">
                  {/* Preview image */}
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={report.img}
                      alt={report.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <span
                      className="absolute bottom-4 left-4 text-white text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full"
                      style={{ backgroundColor: report.color }}
                    >
                      {report.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-7 flex flex-col flex-1 gap-4">
                    <div
                      className="w-10 h-1 rounded-full"
                      style={{ backgroundColor: report.color }}
                    />
                    <h3 className="text-lg font-bold text-[var(--deep-blue)] leading-snug">
                      {report.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed flex-1">
                      {report.description}
                    </p>
                    <a
                      href={report.href}
                      download
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white transition-opacity hover:opacity-90 mt-2"
                      style={{ backgroundColor: report.color }}
                    >
                      <Download className="w-4 h-4" />
                      {t({ pt: 'Download relatório completo', it: 'Scarica la relazione completa' })}
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[var(--beige)] py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection delay={0.1}>
            <FileText className="w-12 h-12 text-[var(--deep-blue)] mx-auto mb-8 opacity-60" />
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--deep-blue)] mb-6">
              {t({ pt: 'Precisa de mais informações?', it: 'Ha bisogno di ulteriori informazioni?' })}
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
              {t({
                pt: 'Para solicitar outros relatórios ou obter mais informações sobre o trabalho pedagógico do Centro, entre em contato conosco.',
                it: 'Per richiedere altre relazioni o ottenere maggiori informazioni sul lavoro pedagogico del Centro, contattaci.',
              })}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" to="/contatti">
                {t({ pt: 'Entre em contato', it: 'Contattaci' })}
              </Button>
              <Button variant="secondary" to="/nossa-metodologia">
                {t({ pt: 'Nossa metodologia', it: 'La nostra metodologia' })}
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
