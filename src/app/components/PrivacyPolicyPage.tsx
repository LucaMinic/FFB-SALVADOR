import { AnimatedSection } from './AnimatedSection';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useT } from '../context/LanguageContext';

export function PrivacyPolicyPage() {
  const t = useT();

  return (
    <div className="bg-white">
      {/* SECTION 1 - HERO */}
      <section className="bg-gradient-to-b from-[var(--beige)] to-white py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h1 className="text-5xl md:text-6xl text-[var(--deep-blue)] mb-6">
              Privacy Policy
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              {t({
                pt: 'Informações sobre o tratamento de dados pessoais e o uso do site.',
                it: 'Informazioni sul trattamento dei dati personali e sull\'utilizzo del sito web.'
              })}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 2 - DATA CONTROLLER */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl text-[var(--deep-blue)] mb-6">
              {t({ pt: 'Responsável pelo tratamento', it: 'Titolare del trattamento' })}
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="text-lg text-gray-800 leading-relaxed mb-4">
              {t({
                pt: 'Este site é gerido pela Fundação Betania ONLUS, responsável pelo tratamento dos dados pessoais eventualmente coletados através do próprio site.',
                it: 'Il presente sito è gestito da Fundação Betania ONLUS, responsabile del trattamento dei dati personali eventualmente raccolti attraverso il sito stesso.'
              })}
            </p>

            <p className="text-lg text-gray-800 leading-relaxed mb-8">
              {t({
                pt: 'O site documenta e promove as atividades educativas e sociais realizadas através do Centro Nossa Senhora Aparecida, projeto operativo da Fundação Betania ONLUS em Salvador de Bahia.',
                it: 'Il sito documenta e promuove le attività educative e sociali svolte attraverso il Centro Nossa Senhora Aparecida, progetto operativo della Fundação Betania ONLUS a Salvador de Bahia.'
              })}
            </p>

            <div className="bg-[var(--beige)] rounded-2xl p-8 space-y-4">
              <p className="text-xl font-medium text-[var(--deep-blue)]">
                Fundação Betania ONLUS
              </p>

              <div className="flex items-start gap-3 text-gray-700">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0 text-[var(--deep-blue)]" />
                <div>
                  <p>Salvador de Bahia (Brasil)</p>
                  <p>Rod BA 526 n.1672</p>
                  <p>Bairro São Cristóvão 41510</p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-gray-700">
                <Mail className="w-5 h-5 flex-shrink-0 text-[var(--deep-blue)]" />
                <a href="mailto:salvador@ffbetania.net" className="hover:text-[var(--deep-blue)] transition-colors">
                  salvador@ffbetania.net
                </a>
              </div>

              <div className="flex items-center gap-3 text-gray-700">
                <Phone className="w-5 h-5 flex-shrink-0 text-[var(--deep-blue)]" />
                <a href="tel:+5571982491713" className="hover:text-[var(--deep-blue)] transition-colors">
                  +55 71 8249-1713
                </a>
              </div>

              <div className="pt-4 border-t border-gray-300">
                <p className="text-sm text-gray-600">
                  {t({ pt: 'Código fiscal / referência', it: 'Codice fiscale / riferimento' })}: 05231656181
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 3 - DATA COLLECTED */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl text-[var(--deep-blue)] mb-6">
              {t({ pt: 'Dados coletados', it: 'Dati raccolti' })}
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="text-lg text-gray-800 leading-relaxed mb-6">
              {t({
                pt: 'Este site tem finalidades exclusivamente informativas e institucionais.',
                it: 'Questo sito ha finalità esclusivamente informative e istituzionali.'
              })}
            </p>

            <p className="text-lg text-gray-800 leading-relaxed mb-4">
              {t({ pt: 'O site não prevê:', it: 'Il sito non prevede:' })}
            </p>
            <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 mb-6 ml-4">
              <li>{t({ pt: 'registro de usuários', it: 'registrazione utenti' })}</li>
              <li>{t({ pt: 'criação de contas', it: 'creazione account' })}</li>
              <li>{t({ pt: 'áreas reservadas', it: 'aree riservate' })}</li>
              <li>{t({ pt: 'formulários de inscrição', it: 'moduli di iscrizione' })}</li>
              <li>{t({ pt: 'newsletters automatizadas', it: 'newsletter automatizzate' })}</li>
            </ul>

            <p className="text-lg text-gray-800 leading-relaxed mb-4">
              {t({ pt: 'Podem ser coletados exclusivamente:', it: 'Possono essere raccolti esclusivamente:' })}
            </p>
            <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 ml-4">
              <li>{t({ pt: 'dados técnicos de navegação', it: 'dati tecnici di navigazione' })}</li>
              <li>{t({ pt: 'informações estatísticas anônimas', it: 'informazioni statistiche anonime' })}</li>
              <li>{t({ pt: 'eventuais dados enviados espontaneamente via e-mail ou contato direto', it: 'eventuali dati inviati spontaneamente tramite email o contatto diretto' })}</li>
            </ul>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 4 - PURPOSE */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl text-[var(--deep-blue)] mb-6">
              {t({ pt: 'Finalidade do tratamento', it: 'Finalità del trattamento' })}
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="text-lg text-gray-800 leading-relaxed mb-4">
              {t({
                pt: 'Os dados eventualmente coletados são utilizados exclusivamente para:',
                it: 'I dati eventualmente raccolti vengono utilizzati esclusivamente per:'
              })}
            </p>
            <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 mb-6 ml-4">
              <li>{t({ pt: 'garantir o correto funcionamento do site', it: 'garantire il corretto funzionamento del sito' })}</li>
              <li>{t({ pt: 'responder a solicitações de contato', it: 'rispondere a richieste di contatto' })}</li>
              <li>{t({ pt: 'melhorar a navegação', it: 'migliorare la navigazione' })}</li>
              <li>{t({ pt: 'cumprir obrigações legais', it: 'adempiere ad obblighi di legge' })}</li>
            </ul>
            <p className="text-lg text-gray-800 leading-relaxed">
              {t({
                pt: 'Os dados não são cedidos a terceiros para fins comerciais.',
                it: 'I dati non vengono ceduti a terzi per finalità commerciali.'
              })}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 5 - ANALYTICS TOOLS */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl text-[var(--deep-blue)] mb-6">
              {t({ pt: 'Ferramentas de análise', it: 'Strumenti di analisi' })}
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="text-lg text-gray-800 leading-relaxed mb-6">
              {t({
                pt: 'O site pode utilizar ferramentas estatísticas como Google Analytics para coletar informações agregadas e anônimas sobre o uso das páginas, a fim de melhorar a experiência de navegação e compreender o funcionamento do site.',
                it: 'Il sito può utilizzare strumenti statistici come Google Analytics per raccogliere informazioni aggregate e anonime sull\'utilizzo delle pagine, al fine di migliorare l\'esperienza di navigazione e comprendere il funzionamento del sito.'
              })}
            </p>
            <p className="text-lg text-gray-800 leading-relaxed">
              {t({
                pt: 'Os dados coletados são utilizados exclusivamente em forma estatística e não para finalidades publicitárias ou de perfilamento comercial.',
                it: 'I dati raccolti vengono utilizzati esclusivamente in forma statistica e non per finalità pubblicitarie o di profilazione commerciale.'
              })}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 6 - EMBEDDED CONTENT */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl text-[var(--deep-blue)] mb-6">
              {t({ pt: 'Conteúdos incorporados de plataformas externas', it: 'Contenuti incorporati da piattaforme esterne' })}
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="text-lg text-gray-800 leading-relaxed mb-6">
              {t({
                pt: 'Algumas páginas do site podem incluir conteúdos incorporados de plataformas externas, como vídeos YouTube.',
                it: 'Alcune pagine del sito possono includere contenuti incorporati da piattaforme esterne, come video YouTube.'
              })}
            </p>
            <p className="text-lg text-gray-800 leading-relaxed">
              {t({
                pt: 'Estes serviços podem coletar dados técnicos de navegação ou instalar cookies de acordo com as respectivas políticas dos serviços utilizados.',
                it: 'Questi servizi potrebbero raccogliere dati tecnici di navigazione o installare cookie secondo le rispettive policy dei servizi utilizzati.'
              })}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 6B - IMAGES AND CONTENT OF MINORS */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl text-[var(--deep-blue)] mb-6">
              {t({ pt: 'Imagens, fotografias e conteúdos relativos a menores', it: 'Immagini, fotografie e contenuti relativi ai minori' })}
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="text-lg text-gray-800 leading-relaxed mb-6">
              {t({
                pt: 'No âmbito das atividades educativas, sociais e institucionais promovidas pelo Centro Nossa Senhora Aparecida e pela Fundação Betania ONLUS, o site pode publicar fotografias, vídeos e conteúdos multimídia que documentam a vida cotidiana do Centro, da creche, da escola e das iniciativas educativas e sociais realizadas no território.',
                it: 'Nell\'ambito delle attività educative, sociali e istituzionali promosse dal Centro Nossa Senhora Aparecida e dalla Fundação Betania ONLUS, il sito può pubblicare fotografie, video e contenuti multimediali che documentano la vita quotidiana del Centro, dell\'asilo, della scuola e delle iniziative educative e sociali realizzate sul territorio.'
              })}
            </p>

            <p className="text-lg text-gray-800 leading-relaxed mb-6">
              {t({
                pt: 'A publicação de imagens reconhecíveis de menores ocorre exclusivamente mediante autorização e consentimento expresso dos pais ou tutores legais, coletado de acordo com os procedimentos adotados pela entidade.',
                it: 'La pubblicazione di immagini riconoscibili di minori avviene esclusivamente previa autorizzazione e consenso espresso dei genitori o dei tutori legali, raccolto secondo le procedure adottate dall\'ente.'
              })}
            </p>

            <p className="text-lg text-gray-800 leading-relaxed mb-4">
              {t({
                pt: 'As imagens e os conteúdos audiovisuais são utilizados exclusivamente para as seguintes finalidades:',
                it: 'Le immagini e i contenuti audiovisivi vengono utilizzati esclusivamente per finalità di:'
              })}
            </p>
            <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 mb-6 ml-4">
              <li>{t({ pt: 'documentação das atividades educativas e sociais', it: 'documentazione delle attività educative e sociali' })}</li>
              <li>{t({ pt: 'comunicação institucional', it: 'comunicazione istituzionale' })}</li>
              <li>{t({ pt: 'valorização dos projetos do Centro Nossa Senhora Aparecida', it: 'valorizzazione dei progetti del Centro Nossa Senhora Aparecida' })}</li>
              <li>{t({ pt: 'sensibilização e informação sobre as atividades da Fundação Betania ONLUS', it: 'sensibilizzazione e informazione sulle attività della Fundação Betania ONLUS' })}</li>
              <li>{t({ pt: 'arrecadação de fundos e apoio aos projetos educativos e sociais', it: 'raccolta fondi e sostegno ai progetti educativi e sociali' })}</li>
            </ul>

            <p className="text-lg text-gray-800 leading-relaxed mb-6">
              {t({
                pt: 'Particular atenção é dedicada à tutela da dignidade, da segurança e da privacidade dos menores envolvidos.',
                it: 'Particolare attenzione viene posta alla tutela della dignità, della sicurezza e della riservatezza dei minori coinvolti.'
              })}
            </p>

            <p className="text-lg text-gray-800 leading-relaxed mb-6">
              {t({
                pt: 'Não são publicadas informações pessoais desnecessárias que possam permitir a identificação detalhada dos menores ou a divulgação de dados sensíveis relativos à sua situação pessoal ou familiar.',
                it: 'Non vengono pubblicate informazioni personali non necessarie che possano consentire l\'identificazione dettagliata dei minori o la divulgazione di dati sensibili relativi alla loro situazione personale o familiare.'
              })}
            </p>

            <p className="text-lg text-gray-800 leading-relaxed mb-6">
              {t({
                pt: 'Os pais ou tutores que tenham prestado o consentimento podem a qualquer momento solicitar a remoção de imagens ou conteúdos que dizem respeito ao menor entrando em contato com a Fundação Betania ONLUS através dos contatos indicados na presente informativa.',
                it: 'I genitori o tutori che abbiano prestato il consenso possono in qualsiasi momento richiedere la rimozione di immagini o contenuti che riguardano il minore contattando la Fundação Betania ONLUS ai recapiti indicati nella presente informativa.'
              })}
            </p>

            <p className="text-lg text-gray-800 leading-relaxed">
              {t({
                pt: 'A Fundação Betania ONLUS compromete-se a avaliar prontamente cada solicitação e a adotar as medidas apropriadas no respeito das normativas aplicáveis.',
                it: 'La Fundação Betania ONLUS si impegna a valutare tempestivamente ogni richiesta e ad adottare le misure appropriate nel rispetto delle normative applicabili.'
              })}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 7 - COOKIES */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl text-[var(--deep-blue)] mb-6">
              {t({ pt: 'Cookies e ferramentas técnicas', it: 'Cookie e strumenti tecnici' })}
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="text-lg text-gray-800 leading-relaxed mb-6">
              {t({
                pt: 'O site pode utilizar cookies técnicos necessários para o correto funcionamento das páginas, cookies estatísticos anonimizados e cookies de terceiros relacionados a conteúdos incorporados.',
                it: 'Il sito può utilizzare cookie tecnici necessari al corretto funzionamento delle pagine, cookie statistici anonimizzati e cookie di terze parti relativi a contenuti incorporati.'
              })}
            </p>

            <p className="text-lg text-gray-800 leading-relaxed mb-4">
              {t({ pt: 'Não são utilizados:', it: 'Non vengono utilizzati:' })}
            </p>
            <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 mb-6 ml-4">
              <li>{t({ pt: 'sistemas de perfilamento publicitário', it: 'sistemi di profilazione pubblicitaria' })}</li>
              <li>{t({ pt: 'cookies de marketing avançados', it: 'cookie marketing avanzati' })}</li>
            </ul>

            <div className="bg-[var(--beige)] rounded-xl p-6">
              <p className="text-lg text-gray-800">
                {t({
                  pt: 'Para mais informações sobre cookies, consulte nossa Cookie Policy.',
                  it: 'Per maggiori informazioni sui cookie, consultare la nostra Cookie Policy.'
                })}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 8 - DATA RETENTION */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl text-[var(--deep-blue)] mb-6">
              {t({ pt: 'Conservação dos dados', it: 'Conservazione dei dati' })}
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="text-lg text-gray-800 leading-relaxed">
              {t({
                pt: 'Os eventuais dados transmitidos através de contato direto são conservados pelo tempo estritamente necessário à gestão das solicitações e no respeito das normativas aplicáveis.',
                it: 'Gli eventuali dati trasmessi tramite contatto diretto vengono conservati per il tempo strettamente necessario alla gestione delle richieste e nel rispetto delle normative applicabili.'
              })}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 9 - USER RIGHTS */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl text-[var(--deep-blue)] mb-6">
              {t({ pt: 'Direitos do usuário', it: 'Diritti dell\'utente' })}
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="text-lg text-gray-800 leading-relaxed mb-4">
              {t({
                pt: 'Os usuários podem solicitar a qualquer momento:',
                it: 'Gli utenti possono richiedere in qualsiasi momento:'
              })}
            </p>
            <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 mb-6 ml-4">
              <li>{t({ pt: 'acesso aos próprios dados', it: 'accesso ai propri dati' })}</li>
              <li>{t({ pt: 'retificação', it: 'rettifica' })}</li>
              <li>{t({ pt: 'cancelamento', it: 'cancellazione' })}</li>
              <li>{t({ pt: 'limitação do tratamento', it: 'limitazione del trattamento' })}</li>
              <li>{t({ pt: 'informações sobre o tratamento efetuado', it: 'informazioni sul trattamento effettuato' })}</li>
            </ul>
            <p className="text-lg text-gray-800 leading-relaxed">
              {t({
                pt: 'As solicitações podem ser enviadas através dos contatos indicados nesta página.',
                it: 'Le richieste possono essere inviate tramite i recapiti indicati in questa pagina.'
              })}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 10 - CONTACTS */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl text-[var(--deep-blue)] mb-6">
              {t({ pt: 'Contatos', it: 'Contatti' })}
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="bg-gradient-to-br from-[var(--deep-blue)] to-[#4a6177] rounded-2xl p-8 text-white">
              <p className="text-2xl font-medium mb-6">
                Fundação Betania ONLUS
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                  <div>
                    <p>Salvador de Bahia (Brasil)</p>
                    <p>Rod BA 526 n.1672</p>
                    <p>Bairro São Cristóvão 41510</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 flex-shrink-0" />
                  <a href="mailto:salvador@ffbetania.net" className="hover:opacity-80 transition-opacity">
                    salvador@ffbetania.net
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  <a href="tel:+5571982491713" className="hover:opacity-80 transition-opacity">
                    +55 71 8249-1713
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 11 - UPDATES */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl text-[var(--deep-blue)] mb-6">
              {t({ pt: 'Atualizações da privacy policy', it: 'Aggiornamenti della privacy policy' })}
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="text-lg text-gray-800 leading-relaxed">
              {t({
                pt: 'A presente informativa pode ser atualizada ao longo do tempo em função de modificações normativas ou técnicas relativas ao site.',
                it: 'La presente informativa può essere aggiornata nel tempo in funzione di modifiche normative o tecniche relative al sito.'
              })}
            </p>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
