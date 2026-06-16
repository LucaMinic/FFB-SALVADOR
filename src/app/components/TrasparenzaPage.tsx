import { Button } from './Button';
import { AnimatedSection } from './AnimatedSection';
import { ChevronDown, FileText, Download } from 'lucide-react';
import { useT } from '../context/LanguageContext';
import heroImg from '../../imports/13-2.jpeg';
import emotionalImg from '../../imports/21.jpeg';

export function TrasparenzaPage() {
  const t = useT();
  const documents = [
    {
      title: t({ pt: 'Balanço social 2024', it: 'Bilancio sociale 2024' }),
      description: t({ pt: 'Relatório anual das atividades e do balanço social', it: 'Relazione annuale delle attività e del bilancio sociale' }),
      icon: FileText
    },
    {
      title: t({ pt: 'Balanço social 2023', it: 'Bilancio sociale 2023' }),
      description: t({ pt: 'Relatório anual das atividades e do balanço social', it: 'Relazione annuale delle attività e del bilancio sociale' }),
      icon: FileText
    },
    {
      title: t({ pt: 'Relatório de atividades', it: 'Relazione attività' }),
      description: t({ pt: 'Relatório detalhado das atividades educativas e sociais', it: 'Report dettagliato delle attività educative e sociali' }),
      icon: FileText
    },
    {
      title: t({ pt: 'Estatuto Fundação', it: 'Statuto Fundação' }),
      description: t({ pt: 'Estatuto oficial da Fundação Betania ONLUS', it: 'Statuto ufficiale della Fundação Betania ONLUS' }),
      icon: FileText
    },
    {
      title: t({ pt: 'Documentação ETS', it: 'Documentazione ETS' }),
      description: t({ pt: 'Documentação Entidade do Terceiro Setor', it: 'Documentazione Ente del Terzo Settore' }),
      icon: FileText
    },
    {
      title: t({ pt: 'Projeto escola', it: 'Progetto scuola' }),
      description: t({ pt: 'Documentação do projeto da nova escola', it: 'Documentazione del progetto della nuova scuola' }),
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
            alt={t({ pt: 'Transparência', it: 'Trasparenza' })}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--deep-blue)]/70 via-[var(--deep-blue)]/50 to-[var(--deep-blue)]/70"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <AnimatedSection>
            <h1 className="text-5xl md:text-6xl mb-6">
              {t({ pt: 'Transparência', it: 'Trasparenza' })}
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-xl md:text-2xl mb-10 leading-relaxed max-w-3xl mx-auto">
              {t({ pt: 'Cada contribuição é transformada em presença concreta, educação e apoio para crianças e famílias.', it: 'Ogni contributo viene trasformato in presenza concreta, educazione e sostegno per bambini e famiglie.' })}
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" to="/dona-ora" className="text-lg px-8 py-4">
                {t({ pt: 'Doar agora', it: 'Dona ora' })}
              </Button>
              <Button variant="secondary" href="#documenti" className="text-lg px-8 py-4 bg-white/10 backdrop-blur-sm border-white hover:bg-white/20">
                {t({ pt: 'Baixar o balanço social', it: 'Scarica il bilancio sociale' })}
              </Button>
            </div>
          </AnimatedSection>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-white/80" />
          </div>
        </div>
      </section>

      {/* SECTION 2 - INTRO */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl text-[var(--deep-blue)] mb-10">
              {t({ pt: 'Responsabilidade e confiança', it: 'Responsabilità e fiducia' })}
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="space-y-6 text-xl text-gray-700 leading-relaxed">
              <p>
                {t({ pt: 'A Fundação Betania ONLUS acredita que a transparência é parte fundamental da relação com quem escolhe apoiar o Centro Nossa Senhora Aparecida e os seus projetos educativos.', it: 'La Fundação Betania ONLUS crede che la trasparenza sia parte fondamentale della relazione con chi sceglie di sostenere il Centro Nossa Senhora Aparecida e i suoi progetti educativi.' })}
              </p>
              <p>
                {t({ pt: 'Por isso partilhamos documentos, números e informações úteis para contar de forma clara o trabalho realizado todos os dias.', it: 'Per questo condividiamo documenti, numeri e informazioni utili a raccontare in modo chiaro il lavoro svolto ogni giorno.' })}
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
              {t({ pt: 'Como as doações são utilizadas', it: 'Come vengono utilizzate le donazioni' })}
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { label: t({ pt: 'Educação e atividades pedagógicas', it: 'Educazione e attività pedagogiche' }), percentage: '35%', color: 'from-[var(--deep-blue)] to-blue-400' },
              { label: t({ pt: 'Alimentação das crianças', it: 'Alimentazione dei bambini' }), percentage: '25%', color: 'from-[var(--warm-orange)] to-orange-300' },
              { label: t({ pt: 'Apoio às famílias', it: 'Sostegno alle famiglie' }), percentage: '15%', color: 'from-[var(--soft-green)] to-green-300' },
              { label: t({ pt: 'Estruturas e manutenção', it: 'Strutture e manutenzione' }), percentage: '10%', color: 'from-purple-500 to-purple-300' },
              { label: t({ pt: 'Novos projetos educativos', it: 'Nuovi progetti educativi' }), percentage: '10%', color: 'from-amber-500 to-amber-300' },
              { label: t({ pt: 'Formação e pessoal', it: 'Formazione e personale' }), percentage: '5%', color: 'from-pink-500 to-pink-300' }
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
              {t({ pt: 'Um impacto concreto', it: 'Un impatto concreto' })}
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {[
              { number: '100+', label: t({ pt: 'crianças acolhidas todos os dias', it: 'bambini accolti ogni giorno' }) },
              { number: '5', label: t({ pt: 'refeições cotidianas garantidas', it: 'pasti quotidiani garantiti' }) },
              { number: '22', label: t({ pt: 'colaboradores envolvidos', it: 'collaboratori coinvolti' }) },
              { number: '365', label: t({ pt: 'dias de presença educativa contínua', it: 'giorni di presenza educativa continua' }) }
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
              {t({ pt: 'Por trás de cada número há rostos, histórias e relações vividas todos os dias no Centro.', it: 'Dietro ogni numero ci sono volti, storie e relazioni vissute ogni giorno nel Centro.' })}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 5 - DOCUMENTI E BILANCI */}
      <section id="documenti" className="py-20 bg-gradient-to-b from-[#f8f9fb] to-white">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl text-[var(--deep-blue)] text-center mb-16">
              {t({ pt: 'Documentos disponíveis', it: 'Documenti disponibili' })}
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
                    <span>{t({ pt: 'Baixar PDF', it: 'Scarica PDF' })}</span>
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
              {t({ pt: 'Colaborações e reconhecimentos', it: 'Collaborazioni e riconoscimenti' })}
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="text-xl text-gray-700 text-center mb-16 max-w-3xl mx-auto leading-relaxed">
              {t({ pt: 'Ao longo do tempo o projeto recebeu apoio e reconhecimentos de instituições, entidades educativas e realidades internacionais.', it: 'Nel tempo il progetto ha ricevuto sostegno e riconoscimenti da istituzioni, enti educativi e realtà internazionali.' })}
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
            {[
              t({ pt: 'Presidência da República Italiana', it: 'Presidenza della Repubblica Italiana' }),
              'SMED Salvador',
              t({ pt: 'Município Salvador de Bahia', it: 'Municipio Salvador de Bahia' }),
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
                {t({ pt: 'Ir aos reconhecimentos institucionais', it: 'Vai ai riconoscimenti istituzionali' })}
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 7 - UN IMPEGNO QUOTIDIANO */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={emotionalImg}
            alt={t({ pt: 'Um compromisso cotidiano', it: 'Un impegno quotidiano' })}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl mb-6">
              {t({ pt: 'A transparência nasce da relação', it: 'La trasparenza nasce dalla relazione' })}
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-xl md:text-2xl leading-relaxed">
              {t({ pt: 'Cada apoio recebido torna-se parte de um trabalho cotidiano feito de presença, educação e acompanhamento humano.', it: 'Ogni sostegno ricevuto diventa parte di un lavoro quotidiano fatto di presenza, educazione e accompagnamento umano.' })}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 8 - CTA FINALE */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl text-[var(--deep-blue)] mb-8">
              {t({ pt: 'Obrigado pela confiança', it: 'Grazie per la fiducia' })}
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="text-xl text-gray-700 leading-relaxed mb-10">
              {t({ pt: 'A proximidade de quem apoia o projeto torna possível continuar a construir oportunidades concretas para crianças e famílias.', it: 'La vicinanza di chi sostiene il progetto rende possibile continuare a costruire opportunità concrete per bambini e famiglie.' })}
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" to="/dona-ora" className="text-lg px-8 py-3">
                {t({ pt: 'Doar agora', it: 'Dona ora' })}
              </Button>
              <Button variant="secondary" to="/contatti" className="text-lg px-8 py-3">
                {t({ pt: 'Contate-nos', it: 'Contattaci' })}
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
