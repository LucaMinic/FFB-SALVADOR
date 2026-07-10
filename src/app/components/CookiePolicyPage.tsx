import { AnimatedSection } from './AnimatedSection';
import { Cookie, Info, Shield, Settings } from 'lucide-react';
import { useT } from '../context/LanguageContext';
import { Link } from 'react-router';

export function CookiePolicyPage() {
  const t = useT();

  return (
    <div className="bg-white">
      {/* SECTION 1 - HERO */}
      <section className="bg-gradient-to-b from-[var(--beige)] to-white py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h1 className="text-5xl md:text-6xl text-[var(--deep-blue)] mb-6">
              Cookie Policy
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              {t({
                pt: 'Informações sobre o uso de cookies e tecnologias similares neste site.',
                it: 'Informazioni sull\'uso di cookie e tecnologie simili su questo sito.'
              })}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 2 - WHAT ARE COOKIES */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-6">
              <Cookie className="w-10 h-10 text-[var(--warm-orange)]" />
              <h2 className="text-3xl md:text-4xl text-[var(--deep-blue)]">
                {t({ pt: 'O que são cookies', it: 'Cosa sono i cookie' })}
              </h2>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="text-lg text-gray-800 leading-relaxed mb-6">
              {t({
                pt: 'Os cookies são pequenos arquivos de texto que os sites visitados enviam ao terminal do usuário (geralmente ao navegador), onde são armazenados para serem retransmitidos aos mesmos sites na próxima visita.',
                it: 'I cookie sono piccoli file di testo che i siti visitati inviano al terminale dell\'utente (solitamente al browser), dove vengono memorizzati per essere poi ritrasmessi agli stessi siti alla successiva visita.'
              })}
            </p>
            <p className="text-lg text-gray-800 leading-relaxed">
              {t({
                pt: 'Os cookies são usados para diferentes finalidades: execução de autenticações informáticas, monitoramento de sessões, armazenamento de informações sobre configurações específicas relativas aos usuários que acessam o servidor, etc.',
                it: 'I cookie sono utilizzati per diverse finalità: esecuzione di autenticazioni informatiche, monitoraggio di sessioni, memorizzazione di informazioni su specifiche configurazioni riguardanti gli utenti che accedono al server, etc.'
              })}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 3 - TYPES OF COOKIES */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-6">
              <Info className="w-10 h-10 text-[var(--soft-green)]" />
              <h2 className="text-3xl md:text-4xl text-[var(--deep-blue)]">
                {t({ pt: 'Tipos de cookies utilizados', it: 'Tipologie di cookie utilizzati' })}
              </h2>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="space-y-8">
              {/* Technical Cookies */}
              <div className="bg-[var(--beige)] rounded-2xl p-8">
                <h3 className="text-2xl text-[var(--deep-blue)] mb-4">
                  {t({ pt: 'Cookies técnicos', it: 'Cookie tecnici' })}
                </h3>
                <p className="text-lg text-gray-800 leading-relaxed mb-4">
                  {t({
                    pt: 'Este site utiliza cookies técnicos necessários para o correto funcionamento das páginas e para fornecer o serviço solicitado pelo usuário.',
                    it: 'Questo sito utilizza cookie tecnici necessari al corretto funzionamento delle pagine e per fornire il servizio richiesto dall\'utente.'
                  })}
                </p>
                <p className="text-lg text-gray-800 leading-relaxed">
                  {t({
                    pt: 'Estes cookies não requerem consentimento prévio do usuário, pois são estritamente necessários para o funcionamento do site.',
                    it: 'Questi cookie non richiedono il consenso preventivo dell\'utente in quanto strettamente necessari al funzionamento del sito.'
                  })}
                </p>
              </div>

              {/* Analytics Cookies */}
              <div className="bg-white border-2 border-gray-200 rounded-2xl p-8">
                <h3 className="text-2xl text-[var(--deep-blue)] mb-4">
                  {t({ pt: 'Cookies analíticos', it: 'Cookie analitici' })}
                </h3>
                <p className="text-lg text-gray-800 leading-relaxed">
                  {t({
                    pt: 'O site pode utilizar cookies analíticos para coletar informações estatísticas anônimas sobre o uso do site, com o objetivo de melhorar a navegação e os serviços oferecidos.',
                    it: 'Il sito può utilizzare cookie analitici per raccogliere informazioni statistiche anonime sull\'utilizzo del sito, al fine di migliorare la navigazione e i servizi offerti.'
                  })}
                </p>
              </div>

              {/* Third-party Cookies */}
              <div className="bg-white border-2 border-gray-200 rounded-2xl p-8">
                <h3 className="text-2xl text-[var(--deep-blue)] mb-4">
                  {t({ pt: 'Cookies de terceiros', it: 'Cookie di terze parti' })}
                </h3>
                <p className="text-lg text-gray-800 leading-relaxed">
                  {t({
                    pt: 'O site pode utilizar cookies de terceiros relacionados a conteúdos incorporados, como vídeos YouTube. Estes cookies são gerenciados diretamente pelas plataformas externas.',
                    it: 'Il sito può utilizzare cookie di terze parti relativi a contenuti incorporati, come video YouTube. Questi cookie sono gestiti direttamente dalle piattaforme esterne.'
                  })}
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 3B - SITE INFORMATION */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl text-[var(--deep-blue)] mb-6">
              {t({ pt: 'Informações sobre o site', it: 'Informazioni sul sito' })}
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="text-lg text-gray-800 leading-relaxed mb-6">
              {t({
                pt: 'O site documenta e promove as atividades educativas e sociais realizadas através do Centro Nossa Senhora Aparecida, projeto operativo da Fundação Betania ONLUS em Salvador de Bahia.',
                it: 'Il sito documenta e promuove le attività educative e sociali svolte attraverso il Centro Nossa Senhora Aparecida, progetto operativo della Fundação Betania ONLUS a Salvador de Bahia.'
              })}
            </p>
            <p className="text-lg text-gray-800 leading-relaxed">
              {t({
                pt: 'A utilização dos cookies e das tecnologias descritas na presente Cookie Policy ocorre exclusivamente no âmbito das finalidades institucionais, informativas e de comunicação das atividades do Centro e da Fundação Betania ONLUS.',
                it: 'L\'utilizzo dei cookie e delle tecnologie descritte nella presente Cookie Policy avviene esclusivamente nell\'ambito delle finalità istituzionali, informative e di comunicazione delle attività del Centro e della Fundação Betania ONLUS.'
              })}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 4 - GOOGLE ANALYTICS */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl text-[var(--deep-blue)] mb-6">
              Google Analytics
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="text-lg text-gray-800 leading-relaxed mb-6">
              {t({
                pt: 'O site pode utilizar Google Analytics para coletar dados estatísticos agregados e anônimos relativos ao uso do site e ao tráfego das páginas.',
                it: 'Il sito può utilizzare Google Analytics per raccogliere dati statistici aggregati e anonimi relativi all\'utilizzo del sito e al traffico delle pagine.'
              })}
            </p>
            <p className="text-lg text-gray-800 leading-relaxed">
              {t({
                pt: 'As informações coletadas são utilizadas exclusivamente para melhorar os conteúdos e a experiência de navegação.',
                it: 'Le informazioni raccolte vengono utilizzate esclusivamente per migliorare i contenuti e l\'esperienza di navigazione.'
              })}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 5 - YOUTUBE */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl text-[var(--deep-blue)] mb-6">
              {t({ pt: 'Vídeos YouTube incorporados', it: 'Video YouTube incorporati' })}
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="text-lg text-gray-800 leading-relaxed mb-6">
              {t({
                pt: 'Algumas páginas do site incorporam vídeos provenientes de YouTube relativos às atividades do Centro Nossa Senhora Aparecida, aos projetos educativos, às iniciativas sociais, aos documentários e aos testemunhos publicados pela Fundação Betania ONLUS.',
                it: 'Alcune pagine del sito incorporano video provenienti da YouTube relativi alle attività del Centro Nossa Senhora Aparecida, ai progetti educativi, alle iniziative sociali, ai documentari e alle testimonianze pubblicate dalla Fundação Betania ONLUS.'
              })}
            </p>
            <p className="text-lg text-gray-800 leading-relaxed mb-6">
              {t({
                pt: 'A visualização de tais conteúdos pode comportar a instalação de cookies técnicos ou de terceiros gerenciados diretamente por Google/YouTube de acordo com as respectivas políticas.',
                it: 'La visualizzazione di tali contenuti può comportare l\'installazione di cookie tecnici o di terze parti gestiti direttamente da Google/YouTube secondo le rispettive policy.'
              })}
            </p>
            <p className="text-lg text-gray-800 leading-relaxed">
              {t({
                pt: 'Para mais informações sobre o tratamento dos dados efetuado por Google e YouTube, convidamos a consultar as respectivas informativas de privacy e cookies disponíveis nos sites dos respectivos fornecedores.',
                it: 'Per maggiori informazioni sul trattamento dei dati effettuato da Google e YouTube si invita a consultare le relative informative privacy e cookie disponibili sui siti dei rispettivi fornitori.'
              })}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 6 - WHAT WE DON'T USE */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-10 h-10 text-[var(--deep-blue)]" />
              <h2 className="text-3xl md:text-4xl text-[var(--deep-blue)]">
                {t({ pt: 'O que não utilizamos', it: 'Cosa non utilizziamo' })}
              </h2>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="text-lg text-gray-800 leading-relaxed mb-4">
              {t({
                pt: 'Este site NÃO utiliza:',
                it: 'Questo sito NON utilizza:'
              })}
            </p>
            <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 ml-4 mb-6">
              <li>{t({ pt: 'cookies de perfilamento publicitário', it: 'cookie di profilazione pubblicitaria' })}</li>
              <li>{t({ pt: 'sistemas de marketing automatizado', it: 'sistemi di marketing automatizzato' })}</li>
              <li>{t({ pt: 'sistemas avançados de profilamento de usuários', it: 'sistemi avanzati di profilazione utenti' })}</li>
            </ul>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 7 - COOKIE MANAGEMENT */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-6">
              <Settings className="w-10 h-10 text-[var(--warm-orange)]" />
              <h2 className="text-3xl md:text-4xl text-[var(--deep-blue)]">
                {t({ pt: 'Gestão de cookies', it: 'Gestione dei cookie' })}
              </h2>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="text-lg text-gray-800 leading-relaxed mb-6">
              {t({
                pt: 'O usuário pode gerenciar ou desabilitar os cookies diretamente através das configurações do navegador.',
                it: 'L\'utente può gestire o disabilitare i cookie direttamente attraverso le impostazioni del proprio browser.'
              })}
            </p>

            <div className="bg-[var(--beige)] rounded-2xl p-8 space-y-4">
              <p className="text-lg text-gray-800 font-medium mb-4">
                {t({
                  pt: 'Como gerenciar cookies nos principais navegadores:',
                  it: 'Come gestire i cookie nei principali browser:'
                })}
              </p>

              <div className="space-y-3 text-lg text-gray-700">
                <p><strong>Google Chrome:</strong> {t({
                  pt: 'Configurações → Privacidade e segurança → Cookies e outros dados do site',
                  it: 'Impostazioni → Privacy e sicurezza → Cookie e altri dati dei siti'
                })}</p>
                <p><strong>Mozilla Firefox:</strong> {t({
                  pt: 'Opções → Privacidade e segurança → Cookies e dados de sites',
                  it: 'Opzioni → Privacy e sicurezza → Cookie e dati dei siti'
                })}</p>
                <p><strong>Safari:</strong> {t({
                  pt: 'Preferências → Privacidade → Cookies e dados de websites',
                  it: 'Preferenze → Privacy → Cookie e dati dei siti web'
                })}</p>
                <p><strong>Microsoft Edge:</strong> {t({
                  pt: 'Configurações → Cookies e permissões do site',
                  it: 'Impostazioni → Cookie e autorizzazioni sito'
                })}</p>
              </div>
            </div>

            <p className="text-lg text-gray-800 leading-relaxed mt-6">
              {t({
                pt: 'A desativação dos cookies técnicos pode comprometer o correto funcionamento de algumas funcionalidades do site.',
                it: 'La disattivazione dei cookie tecnici potrebbe compromettere il corretto funzionamento di alcune funzionalità del sito.'
              })}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 8 - DURATION */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl text-[var(--deep-blue)] mb-6">
              {t({ pt: 'Duração dos cookies', it: 'Durata dei cookie' })}
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="text-lg text-gray-800 leading-relaxed mb-6">
              {t({
                pt: 'Os cookies utilizados podem ser:',
                it: 'I cookie utilizzati possono essere:'
              })}
            </p>

            <div className="space-y-6">
              <div className="border-l-4 border-[var(--soft-green)] pl-6">
                <h3 className="text-xl text-[var(--deep-blue)] mb-2">
                  {t({ pt: 'Cookies de sessão', it: 'Cookie di sessione' })}
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {t({
                    pt: 'São eliminados automaticamente quando o navegador é fechado.',
                    it: 'Vengono eliminati automaticamente alla chiusura del browser.'
                  })}
                </p>
              </div>

              <div className="border-l-4 border-[var(--warm-orange)] pl-6">
                <h3 className="text-xl text-[var(--deep-blue)] mb-2">
                  {t({ pt: 'Cookies persistentes', it: 'Cookie persistenti' })}
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {t({
                    pt: 'Permanecem armazenados no dispositivo até a data de expiração ou até serem eliminados manualmente pelo usuário.',
                    it: 'Rimangono memorizzati sul dispositivo fino alla data di scadenza o fino a quando non vengono eliminati manualmente dall\'utente.'
                  })}
                </p>
              </div>
            </div>
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
            <p className="text-lg text-gray-800 leading-relaxed mb-6">
              {t({
                pt: 'O usuário tem o direito de:',
                it: 'L\'utente ha il diritto di:'
              })}
            </p>
            <ul className="list-disc list-inside space-y-2 text-lg text-gray-700 ml-4 mb-6">
              <li>{t({ pt: 'aceitar ou recusar o uso de cookies', it: 'accettare o rifiutare l\'uso dei cookie' })}</li>
              <li>{t({ pt: 'modificar as preferências a qualquer momento', it: 'modificare le preferenze in qualsiasi momento' })}</li>
              <li>{t({ pt: 'eliminar os cookies armazenados no navegador', it: 'eliminare i cookie memorizzati nel browser' })}</li>
              <li>{t({ pt: 'solicitar informações sobre os cookies utilizados', it: 'richiedere informazioni sui cookie utilizzati' })}</li>
            </ul>

            <p className="text-lg text-gray-800 leading-relaxed">
              {t({
                pt: 'Para qualquer dúvida ou solicitação relacionada ao uso de cookies, entre em contato através dos dados indicados na página Privacy Policy.',
                it: 'Per qualsiasi dubbio o richiesta relativa all\'utilizzo dei cookie, è possibile contattarci tramite i recapiti indicati nella pagina Privacy Policy.'
              })}
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 10 - UPDATES */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl text-[var(--deep-blue)] mb-6">
              {t({ pt: 'Atualizações da Cookie Policy', it: 'Aggiornamenti della Cookie Policy' })}
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="text-lg text-gray-800 leading-relaxed mb-6">
              {t({
                pt: 'Esta política de cookies pode ser atualizada periodicamente. Recomendamos verificar esta página regularmente para estar sempre informado sobre como utilizamos os cookies.',
                it: 'Questa cookie policy può essere aggiornata periodicamente. Si consiglia di verificare regolarmente questa pagina per essere sempre informati su come utilizziamo i cookie.'
              })}
            </p>

            <div className="bg-gradient-to-br from-[var(--deep-blue)] to-[#4a6177] rounded-2xl p-8 text-white text-center">
              <p className="text-xl leading-relaxed mb-4">
                {t({
                  pt: 'Para mais informações sobre o tratamento de dados pessoais, consulte nossa',
                  it: 'Per maggiori informazioni sul trattamento dei dati personali, consultare la nostra'
                })}
              </p>
              <Link
                to="/privacy-policy"
                className="inline-block px-8 py-3 bg-white text-[var(--deep-blue)] rounded-xl font-medium hover:bg-gray-100 transition-colors"
              >
                Privacy Policy
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
