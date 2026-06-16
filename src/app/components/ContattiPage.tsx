import { useState } from 'react';
import { Button } from './Button';
import { AnimatedSection } from './AnimatedSection';
import { MapPin, Mail, Phone, FileText, Copy, Check, ChevronDown } from 'lucide-react';
import { useT } from '../context/LanguageContext';
import heroImg from '../../imports/19.jpeg';
import finalCtaImg from '../../imports/21.jpeg';

export function ContattiPage() {
  const t = useT();
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = (text: string, setCopied: (val: boolean) => void) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white">
      {/* SECTION 1 - HERO */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Centro Nossa Senhora Aparecida"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <AnimatedSection>
            <h1 className="text-5xl md:text-6xl mb-6">
              {t({ pt: 'Contatos', it: 'Contatti' })}
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-xl md:text-2xl mb-10 leading-relaxed max-w-3xl mx-auto">
              {t({ pt: 'Para informações, colaborações ou apoio aos projetos da Fundação Betania ONLUS.', it: 'Per informazioni, collaborazioni o sostegno ai progetti della Fundação Betania ONLUS.' })}
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" href="#contatti" className="text-lg px-8 py-4">
                {t({ pt: 'Escreva-nos', it: 'Scrivici' })}
              </Button>
              <Button variant="secondary" to="/dona-ora" className="text-lg px-8 py-4 bg-white/10 backdrop-blur-sm border-white hover:bg-white/20">
                {t({ pt: 'Doar agora', it: 'Dona ora' })}
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
        <div className="max-w-3xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl text-[var(--deep-blue)] mb-8">
              {t({ pt: 'Fiquemos em contato', it: 'Restiamo in contatto' })}
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="space-y-6 text-xl text-gray-700 leading-relaxed">
              <p>
                {t({ pt: 'O Centro Nossa Senhora Aparecida vive todos os dias graças a relações, encontros e pessoas que escolhem caminhar juntas.', it: 'Il Centro Nossa Senhora Aparecida vive ogni giorno grazie a relazioni, incontri e persone che scelgono di camminare insieme.' })}
              </p>
              <p>
                {t({ pt: 'Para qualquer informação ou pedido pode contactar-nos diretamente.', it: 'Per qualsiasi informazione o richiesta puoi contattarci direttamente.' })}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SECTION 3 - CONTATTI */}
      <section id="contatti" className="py-20 bg-gradient-to-b from-[#f8f9fb] to-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-8">
            {/* Location */}
            <AnimatedSection>
              <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-[var(--deep-blue)] to-blue-400 rounded-full flex items-center justify-center">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl text-[var(--deep-blue)] mb-4">
                  {t({ pt: 'Salvador de Bahia (Brasil)', it: 'Salvador de Bahia (Brasile)' })}
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Rod BA 526 n.1672<br />
                  Bairro Sao Cristovao 41510
                </p>
              </div>
            </AnimatedSection>

            {/* Email */}
            <AnimatedSection delay={0.1}>
              <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-[var(--soft-green)] to-green-300 rounded-full flex items-center justify-center">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl text-[var(--deep-blue)] mb-4">
                  {t({ pt: 'E-mail', it: 'Email' })}
                </h3>
                <div className="flex items-center justify-center gap-3">
                  <a
                    href="mailto:salvador@ffbetania.net"
                    className="text-lg text-[var(--deep-blue)] hover:underline"
                  >
                    salvador@ffbetania.net
                  </a>
                  <button
                    onClick={() => copyToClipboard('salvador@ffbetania.net', setCopiedEmail)}
                    className="p-2 bg-[var(--soft-green)] text-white rounded-lg hover:bg-green-600 transition-all"
                    aria-label={t({ pt: 'Copiar e-mail', it: 'Copia email' })}
                  >
                    {copiedEmail ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                  </button>
                </div>
              </div>
            </AnimatedSection>

            {/* CNPJ */}
            <AnimatedSection delay={0.2}>
              <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-[var(--warm-orange)] to-orange-300 rounded-full flex items-center justify-center">
                    <FileText className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl text-[var(--deep-blue)] mb-4">
                  {t({ pt: 'CNPJ / Documento', it: 'CNPJ / Documento' })}
                </h3>
                <p className="text-lg text-gray-700">
                  05231656181
                </p>
              </div>
            </AnimatedSection>

            {/* Phone / WhatsApp */}
            <AnimatedSection delay={0.3}>
              <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-300 rounded-full flex items-center justify-center">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl text-[var(--deep-blue)] mb-4">
                  {t({ pt: 'Telefone / WhatsApp', it: 'Telefono / WhatsApp' })}
                </h3>
                <div className="flex items-center justify-center gap-3 mb-4">
                  <a
                    href="tel:+5571824917 13"
                    className="text-lg text-[var(--deep-blue)] hover:underline"
                  >
                    +55 71 8249-1713
                  </a>
                  <button
                    onClick={() => copyToClipboard('+5571824917 13', setCopiedPhone)}
                    className="p-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-all"
                    aria-label={t({ pt: 'Copiar telefone', it: 'Copia telefono' })}
                  >
                    {copiedPhone ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                  </button>
                </div>
                <a
                  href="https://wa.me/5571824917 13"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-[#25D366] text-white rounded-xl font-medium hover:bg-[#128C7E] transition-all"
                >
                  {t({ pt: 'Abrir WhatsApp', it: 'Apri WhatsApp' })}
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* SECTION 4 - CTA FINALE */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={finalCtaImg}
            alt="Centro Nossa Senhora Aparecida"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl mb-6">
              {t({ pt: 'Obrigado pela sua proximidade', it: 'Grazie per la tua vicinanza' })}
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-xl md:text-2xl mb-10 leading-relaxed">
              {t({ pt: 'Cada mensagem, apoio ou gesto de atenção ajuda concretamente o Centro Nossa Senhora Aparecida e os seus projetos educativos.', it: 'Ogni messaggio, sostegno o gesto di attenzione aiuta concretamente il Centro Nossa Senhora Aparecida e i suoi progetti educativi.' })}
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" to="/dona-ora" className="text-lg px-8 py-4">
                {t({ pt: 'Doar agora', it: 'Dona ora' })}
              </Button>
              <Button variant="secondary" to="/il-centro" className="text-lg px-8 py-4 bg-white/10 backdrop-blur-sm border-white hover:bg-white/20">
                {t({ pt: 'Conheça o Centro', it: 'Scopri il Centro' })}
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
