import { Button } from './Button';
import { AnimatedSection } from './AnimatedSection';
import { FileText, Download } from 'lucide-react';
import { useT } from '../context/LanguageContext';
import heroImg from '../../imports/foto_sito_06_pagina_7.jpg';
import emotionalImg from '../../imports/trasparenza-impegno-quotidiano.jpeg';

export function TrasparenzaPage() {
  const t = useT();
  const documents = [
    {
      title: t({ pt: 'Balanço social 2024', it: 'Bilancio sociale 2024', de: "Sozialbilanz 2024" }),
      description: t({ pt: 'Relatório anual das atividades e do balanço social', it: 'Relazione annuale delle attività e del bilancio sociale', de: "Jahresbericht über die Aktivitäten und die Sozialbilanz" }),
      icon: FileText
    },
    {
      title: t({ pt: 'Balanço social 2023', it: 'Bilancio sociale 2023', de: "Sozialbilanz 2023" }),
      description: t({ pt: 'Relatório anual das atividades e do balanço social', it: 'Relazione annuale delle attività e del bilancio sociale', de: "Jahresbericht über die Aktivitäten und die Sozialbilanz" }),
      icon: FileText
    },
    {
      title: t({ pt: 'Relatório de atividades', it: 'Relazione attività', de: "Tätigkeitsbericht" }),
      description: t({ pt: 'Relatório detalhado das atividades educativas e sociais', it: 'Report dettagliato delle attività educative e sociali', de: "Detaillierter Bericht über die pädagogischen und sozialen Aktivitäten" }),
      icon: FileText
    },
    {
      title: t({ pt: 'Estatuto Fundação', it: 'Statuto Fundação', de: "Satzung der Fundação" }),
      description: t({ pt: 'Estatuto oficial da Fundação Betania ONLUS', it: 'Statuto ufficiale della Fundação Betania ONLUS', de: "Offizielle Satzung der Fundação Betania ONLUS" }),
      icon: FileText
    },
    {
      title: t({ pt: 'Documentação ETS', it: 'Documentazione ETS', de: "Dokumentation ETS" }),
      description: t({ pt: 'Documentação Entidade do Terceiro Setor', it: 'Documentazione Ente del Terzo Settore', de: "Dokumentation der gemeinnützigen Organisation (Ente del Terzo Settore)" }),
      icon: FileText
    },
    {
      title: t({ pt: 'Projeto escola', it: 'Progetto scuola', de: "Schulprojekt" }),
      description: t({ pt: 'Documentação do projeto da nova escola', it: 'Documentazione del progetto della nuova scuola', de: "Dokumentation des Projekts der neuen Schule" }),
      icon: FileText
    }
  ];

  return (
    <div className="bg-white">
      {/* SECTION 1 - HERO */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt={t({ pt: 'Transparência', it: 'Trasparenza', de: "Transparenz" })}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--deep-blue)]/70 via-[var(--deep-blue)]/50 to-[var(--deep-blue)]/70"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <AnimatedSection>
            <h1 className="text-5xl md:text-6xl mb-6">
              {t({ pt: 'Transparência', it: 'Trasparenza', de: "Transparenz" })}
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-xl md:text-2xl mb-10 leading-relaxed max-w-3xl mx-auto">
              {t({ pt: 'Cada contribuição é transformada em presença concreta, educação e apoio para crianças e famílias.', it: 'Ogni contributo viene trasformato in presenza concreta, educazione e sostegno per bambini e famiglie.', de: "Jeder Beitrag wird in konkrete Präsenz, Bildung und Unterstützung für Kinder und Familien verwandelt." })}
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" to="/dona-ora" className="text-lg px-8 py-4">
                {t({ pt: 'Doar agora', it: 'Dona ora', de: "Jetzt spenden" })}
              </Button>
              <Button variant="secondary" href="#responsabilita" className="text-lg px-8 py-4 bg-white/10 backdrop-blur-sm border-white hover:bg-white/20">
                {t({ pt: 'Saiba mais', it: 'Scopri di più', de: "Mehr erfahren" })}
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 2 - INTRO */}
      <section id="responsabilita" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl text-[var(--deep-blue)] mb-10">
              {t({ pt: 'Responsabilidade e confiança', it: 'Responsabilità e fiducia', de: "Verantwortung und Vertrauen" })}
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="space-y-6 text-xl text-gray-700 leading-relaxed">
              <p>
                {t({ pt: 'A Fundação Betania ONLUS acredita que a transparência é parte fundamental da relação com quem escolhe apoiar o Centro Nossa Senhora Aparecida e os seus projetos educativos.', it: 'La Fundação Betania ONLUS crede che la trasparenza sia parte fondamentale della relazione con chi sceglie di sostenere il Centro Nossa Senhora Aparecida e i suoi progetti educativi.', de: "Die Fundação Betania ONLUS ist davon überzeugt, dass Transparenz ein grundlegender Bestandteil der Beziehung zu allen ist, die sich entscheiden, das Centro Nossa Senhora Aparecida und seine Bildungsprojekte zu unterstützen." })}
              </p>
              <p>
                {t({ pt: 'Por isso partilhamos documentos, números e informações úteis para contar de forma clara o trabalho realizado todos os dias.', it: 'Per questo condividiamo documenti, numeri e informazioni utili a raccontare in modo chiaro il lavoro svolto ogni giorno.', de: "Deshalb teilen wir Dokumente, Zahlen und nützliche Informationen, um die tägliche Arbeit klar und verständlich darzustellen." })}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 3 - COME VENGONO UTILIZZATE LE DONAZIONI */}
      <section className="py-20 bg-gradient-to-b from-[#f8f9fb] to-white">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl text-[var(--deep-blue)] text-center mb-16">
              {t({ pt: 'Como as doações são utilizadas', it: 'Come vengono utilizzate le donazioni', de: "Wie die Spenden verwendet werden" })}
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { label: t({ pt: 'Educação e atividades pedagógicas', it: 'Educazione e attività pedagogiche', de: "Bildung und pädagogische Aktivitäten" }), percentage: '35%', color: 'from-[var(--deep-blue)] to-blue-400' },
              { label: t({ pt: 'Alimentação das crianças', it: 'Alimentazione dei bambini', de: "Ernährung der Kinder" }), percentage: '25%', color: 'from-[var(--warm-orange)] to-orange-300' },
              { label: t({ pt: 'Apoio às famílias', it: 'Sostegno alle famiglie', de: "Unterstützung für Familien" }), percentage: '15%', color: 'from-[var(--soft-green)] to-green-300' },
              { label: t({ pt: 'Estruturas e manutenção', it: 'Strutture e manutenzione', de: "Einrichtungen und Instandhaltung" }), percentage: '10%', color: 'from-purple-500 to-purple-300' },
              { label: t({ pt: 'Novos projetos educativos', it: 'Nuovi progetti educativi', de: "Neue Bildungsprojekte" }), percentage: '10%', color: 'from-amber-500 to-amber-300' },
              { label: t({ pt: 'Formação e pessoal', it: 'Formazione e personale', de: "Ausbildung und Personal" }), percentage: '5%', color: 'from-pink-500 to-pink-300' }
            ].map((item, index) => (
              <AnimatedSection key={index} delay={0.1 * (index % 3)}>
                <div className={`bg-gradient-to-br ${item.color} text-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all h-full flex flex-col justify-between`}>
                  <p className="text-lg mb-4">{item.label}</p>
                  <p className="text-4xl font-bold">{item.percentage}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4 - NUMERI E IMPATTO */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl text-[var(--deep-blue)] text-center mb-16">
              {t({ pt: 'Um impacto concreto', it: 'Un impatto concreto', de: "Eine konkrete Wirkung" })}
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {[
              { number: '100+', label: t({ pt: 'crianças acolhidas todos os dias', it: 'bambini accolti ogni giorno', de: "täglich betreute Kinder" }) },
              { number: '5', label: t({ pt: 'refeições cotidianas garantidas', it: 'pasti quotidiani garantiti', de: "garantierte tägliche Mahlzeiten" }) },
              { number: '22', label: t({ pt: 'colaboradores envolvidos', it: 'collaboratori coinvolti', de: "beteiligte Mitarbeiter" }) },
              { number: '365', label: t({ pt: 'dias de presença educativa contínua', it: 'giorni di presenza educativa continua', de: "Tage kontinuierlicher pädagogischer Betreuung" }) }
            ].map((item, index) => (
              <AnimatedSection key={index} delay={0.1 * index}>
                <div className="text-center p-8 bg-gradient-to-br from-[var(--beige)] to-white rounded-2xl shadow-lg">
                  <div className="text-5xl md:text-6xl text-[var(--deep-blue)] mb-4">
                    {item.number}
                  </div>
                  <p className="text-lg text-gray-700">{item.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.4}>
            <p className="text-xl text-gray-600 text-center italic">
              {t({ pt: 'Por trás de cada número há rostos, histórias e relações vividas todos os dias no Centro.', it: 'Dietro ogni numero ci sono volti, storie e relazioni vissute ogni giorno nel Centro.', de: "Hinter jeder Zahl stehen Gesichter, Geschichten und Beziehungen, die jeden Tag im Centro gelebt werden." })}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 5 - DOCUMENTI E BILANCI */}
      <section id="documenti" className="py-20 bg-gradient-to-b from-[#f8f9fb] to-white">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl text-[var(--deep-blue)] text-center mb-16">
              {t({ pt: 'Documentos disponíveis', it: 'Documenti disponibili', de: "Verfügbare Dokumente" })}
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {documents.map((doc, index) => (
              <AnimatedSection key={index} delay={0.1 * (index % 3)}>
                <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all h-full flex flex-col">
                  <div className="w-16 h-16 bg-gradient-to-br from-[var(--deep-blue)] to-blue-400 rounded-full flex items-center justify-center mb-4">
                    <doc.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl text-[var(--deep-blue)] mb-3">
                    {doc.title}
                  </h3>
                  <p className="text-gray-600 mb-6 flex-1">
                    {doc.description}
                  </p>
                  <button className="flex items-center gap-2 text-[var(--deep-blue)] hover:text-blue-700 transition-colors font-medium">
                    <Download className="w-5 h-5" />
                    <span>{t({ pt: 'Baixar PDF', it: 'Scarica PDF', de: "PDF herunterladen" })}</span>
                  </button>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6 - PARTNER E RICONOSCIMENTI */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl text-[var(--deep-blue)] text-center mb-8">
              {t({ pt: 'Colaborações e reconhecimentos', it: 'Collaborazioni e riconoscimenti', de: "Kooperationen und Anerkennungen" })}
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="text-xl text-gray-700 text-center mb-16 max-w-3xl mx-auto leading-relaxed">
              {t({ pt: 'Ao longo do tempo o projeto recebeu apoio e reconhecimentos de instituições, entidades educativas e realidades internacionais.', it: 'Nel tempo il progetto ha ricevuto sostegno e riconoscimenti da istituzioni, enti educativi e realtà internazionali.', de: "Im Laufe der Zeit hat das Projekt Unterstützung und Anerkennung von Institutionen, Bildungseinrichtungen und internationalen Organisationen erhalten." })}
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
            {[
              t({ pt: 'Presidência da República Italiana', it: 'Presidenza della Repubblica Italiana', de: "Präsidentschaft der Italienischen Republik" }),
              'SMED Salvador',
              t({ pt: 'Município Salvador de Bahia', it: 'Municipio Salvador de Bahia', de: "Stadtverwaltung von Salvador de Bahia" }),
              'IILA',
              'FUNDEB'
            ].map((partner, index) => (
              <AnimatedSection key={index} delay={0.05 * index}>
                <div className="bg-gradient-to-br from-[var(--beige)] to-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center h-32 grayscale hover:grayscale-0">
                  <p className="text-center text-sm text-gray-600 font-medium">{partner}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.3}>
            <div className="text-center">
              <Button variant="secondary" to="/riconoscimenti-istituzionali" className="text-lg px-8 py-3">
                {t({ pt: 'Ir aos reconhecimentos institucionais', it: 'Vai ai riconoscimenti istituzionali', de: "Zu den institutionellen Anerkennungen" })}
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 7 - UN IMPEGNO QUOTIDIANO */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img loading="lazy"
            src={emotionalImg}
            alt={t({ pt: 'Um compromisso cotidiano', it: 'Un impegno quotidiano', de: "Ein tägliches Engagement" })}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl mb-6">
              {t({ pt: 'A transparência nasce da relação', it: 'La trasparenza nasce dalla relazione', de: "Transparenz entsteht aus Beziehung" })}
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-xl md:text-2xl leading-relaxed">
              {t({ pt: 'Cada apoio recebido torna-se parte de um trabalho cotidiano feito de presença, educação e acompanhamento humano.', it: 'Ogni sostegno ricevuto diventa parte di un lavoro quotidiano fatto di presenza, educazione e accompagnamento umano.', de: "Jede erhaltene Unterstützung wird Teil einer täglichen Arbeit aus Präsenz, Bildung und menschlicher Begleitung." })}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 8 - CTA FINALE */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl text-[var(--deep-blue)] mb-8">
              {t({ pt: 'Obrigado pela confiança', it: 'Grazie per la fiducia', de: "Danke für Ihr Vertrauen" })}
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="text-xl text-gray-700 leading-relaxed mb-10">
              {t({ pt: 'A proximidade de quem apoia o projeto torna possível continuar a construir oportunidades concretas para crianças e famílias.', it: 'La vicinanza di chi sostiene il progetto rende possibile continuare a costruire opportunità concrete per bambini e famiglie.', de: "Die Nähe derjenigen, die das Projekt unterstützen, macht es möglich, weiterhin konkrete Chancen für Kinder und Familien zu schaffen." })}
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" to="/dona-ora" className="text-lg px-8 py-3">
                {t({ pt: 'Doar agora', it: 'Dona ora', de: "Jetzt spenden" })}
              </Button>
              <Button variant="secondary" to="/contatti" className="text-lg px-8 py-3">
                {t({ pt: 'Contate-nos', it: 'Contattaci', de: "Kontaktieren Sie uns" })}
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
