import { useState } from 'react';
import { Button } from './Button';
import { AnimatedSection } from './AnimatedSection';
import { MapPin, Mail, Phone, FileText, Copy, Check, ChevronDown, Instagram } from 'lucide-react';
import { useT } from '../context/LanguageContext';
import heroImg from '../../imports/nuove/2P9A2725.jpg';
import finalCtaImg from '../../imports/nuove/2P9A2229.jpg';

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
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Travessa Acalanto nº 1.672, Jardim das Margaridas<br />
                  CEP 41.502-135 · Salvador/BA · Brasil
                </p>
                <div className="rounded-xl overflow-hidden w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.116004283626!2d-38.36560102305853!3d-12.900261558382688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x71616f6c749adcb%3A0x5c8951eac392e27d!2sCentro%20Nossa%20Senhora%20Aparecida!5e0!3m2!1sit!2sit!4v1782209358370!5m2!1sit!2sit"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Centro Nossa Senhora Aparecida"
                  />
                </div>
              </div>
            </AnimatedSection>

            {/* Phone / WhatsApp */}
            <AnimatedSection delay={0.1}>
              <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ background: '#25D366' }}>
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
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
                    className="p-2 bg-[#25D366]/50 text-white rounded-lg hover:bg-[#25D366]/80 transition-all"
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

            {/* Email */}
            <AnimatedSection delay={0.2}>
              <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-[var(--warm-orange)] to-[var(--warm-orange-light)] rounded-full flex items-center justify-center">
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
                    className="p-2 bg-[var(--warm-orange)]/50 text-white rounded-lg hover:bg-[var(--warm-orange)]/80 transition-all"
                    aria-label={t({ pt: 'Copiar e-mail', it: 'Copia email' })}
                  >
                    {copiedEmail ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                  </button>
                </div>
              </div>
            </AnimatedSection>

            {/* Instagram */}
            <AnimatedSection delay={0.3}>
              <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)' }}>
                    <Instagram className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl text-[var(--deep-blue)] mb-4">
                  Instagram
                </h3>
                <a
                  href="https://www.instagram.com/ffbetania.salvador"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-[var(--deep-blue)] hover:underline block mb-4"
                >
                  @ffbetania.salvador
                </a>
                <a
                  href="https://www.instagram.com/ffbetania.salvador"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 text-white rounded-xl font-medium transition-all"
                  style={{ background: 'linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)' }}
                >
                  {t({ pt: 'Seguir no Instagram', it: 'Seguici su Instagram' })}
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
