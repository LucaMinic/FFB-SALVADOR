import { useState } from 'react';
import { Link } from 'react-router';
import { Button } from './Button';
import { Instagram, ChevronDown } from 'lucide-react';
import logo from '../../imports/logo_ok.png';
import { useT } from '../context/LanguageContext';

interface SubMenuItem {
  label: string;
  href: string;
  isRoute?: boolean;
  submenu?: SubMenuItem[];
}

interface MenuItem {
  label: string;
  href: string;
  isRoute?: boolean;
  submenu?: SubMenuItem[];
}

export function Footer() {
  const t = useT();
  const [openSubmenus, setOpenSubmenus] = useState<Set<string>>(new Set());

  const toggleSubmenu = (key: string) => {
    setOpenSubmenus(prev => {
      const newSet = new Set(prev);
      const isTopLevel = !key.includes('__');

      if (newSet.has(key)) {
        newSet.delete(key);
        Array.from(newSet).forEach(k => {
          if (k.startsWith(key + '__')) newSet.delete(k);
        });
      } else {
        if (isTopLevel) {
          newSet.clear();
        } else {
          const prefix = key.split('__')[0];
          Array.from(newSet).forEach(k => {
            if (k.includes('__') && k.startsWith(prefix + '__')) newSet.delete(k);
          });
        }
        newSet.add(key);
      }

      return newSet;
    });
  };

  const menuItems: MenuItem[] = [
    { label: t({ pt: 'Início', it: 'Home' }), href: '/', isRoute: true },
    {
      label: t({ pt: 'Fundação', it: 'La Fundação' }),
      href: '/la-fundacao',
      isRoute: true,
      submenu: [
        { label: t({ pt: 'A Fundação Betania ONLUS', it: 'La Fundação Betania ONLUS' }), href: '/la-fundacao', isRoute: true },
        { label: t({ pt: 'Reconhecimentos institucionais', it: 'Riconoscimenti istituzionali' }), href: '/riconoscimenti-istituzionali', isRoute: true },
        { label: t({ pt: 'Transparência', it: 'Trasparenza' }), href: '/trasparenza', isRoute: true }
      ]
    },
    {
      label: 'Centro Nossa Senhora Aparecida',
      href: '/il-centro',
      isRoute: true,
      submenu: [
        { label: t({ pt: 'O Centro', it: 'Il Centro' }), href: '/il-centro', isRoute: true },
        {
          label: t({ pt: 'Creche', it: 'Asilo' }),
          href: '/asilo',
          isRoute: true,
          submenu: [
            { label: t({ pt: 'A estrutura', it: 'La struttura' }), href: '/asilo', isRoute: true },
            { label: t({ pt: 'Nossa metodologia', it: 'La nostra metodologia' }), href: '/nossa-metodologia', isRoute: true },
            { label: t({ pt: 'Projetos Permanentes', it: 'Progetti Permanenti' }), href: '/projetos-permanentes', isRoute: true },
            { label: t({ pt: 'Alimentação Saudável', it: 'Alimentazione Sana' }), href: '/alimentacao-saudavel', isRoute: true },
            { label: t({ pt: 'Ateliê', it: 'Atelier' }), href: '/atelier', isRoute: true },
            { label: t({ pt: 'Relatórios', it: 'Relazioni' }), href: '/relatorios', isRoute: true },
            { label: t({ pt: 'Laboratórios', it: 'Laboratori' }), href: '/progetti-pedagogici', isRoute: true },
          ]
        },
        {
          label: t({ pt: 'A escola', it: 'La scuola' }),
          href: '/progetto-scuola',
          isRoute: true,
          submenu: [
            { label: t({ pt: 'Projeto Escola', it: 'Progetto scuola' }), href: '/progetto-scuola', isRoute: true },
            { label: t({ pt: 'Andamento das Obras', it: 'Avanzamento Lavori' }), href: '/avanzamento-lavori', isRoute: true }
          ]
        },
        {
          label: t({ pt: 'Nossos pilares', it: 'I nostri pilastri' }),
          href: '#i-nostri-pilastri',
          submenu: [
            { label: t({ pt: 'Acolhimento diário', it: 'Accoglienza quotidiana' }), href: '/accoglienza-quotidiana', isRoute: true },
            { label: t({ pt: 'Educação', it: 'Educazione' }), href: '/educazione', isRoute: true },
            { label: t({ pt: 'Cuidado e nutrição', it: 'Cura e nutrizione' }), href: '/cura-e-nutrizione', isRoute: true },
            { label: t({ pt: 'Acompanhamento das famílias', it: 'Accompagnamento delle famiglie' }), href: '/accompagnamento-famiglie', isRoute: true }
          ]
        },
        { label: t({ pt: 'Documentários e Relatos', it: 'Documentari e Racconti' }), href: '/documentari-racconti', isRoute: true },
        { label: t({ pt: 'Iniciativas', it: 'Iniziative' }), href: '/iniziative', isRoute: true }
      ]
    },
    {
      label: t({ pt: 'Fraternidade', it: 'Fraternità' }),
      href: '/la-fraternita',
      isRoute: true,
      submenu: [
        { label: t({ pt: 'A Fraternidade Franciscana de Betânia', it: 'La Fraternità Francescana di Betania' }), href: '/la-fraternita', isRoute: true },
        { label: t({ pt: 'Eventos especiais', it: 'Eventi speciali' }), href: '/eventi-speciali', isRoute: true }
      ]
    },
    {
      label: t({ pt: 'Apoie', it: 'Sostieni' }),
      href: '#sostieni',
      submenu: [
        {
          label: t({ pt: 'O que você pode fazer', it: 'Cosa puoi fare tu' }),
          href: '/cosa-puoi-fare-tu',
          isRoute: true,
          submenu: [
            { label: t({ pt: 'Doar agora', it: 'Dona ora' }), href: '/dona-ora', isRoute: true },
            { label: t({ pt: 'Sostegno a distanza', it: 'Sostegno a distanza' }), href: '/sostegno-a-distanza', isRoute: true }
          ]
        },
        { label: t({ pt: 'Benfeitores', it: 'Benefattori' }), href: '/benefattori', isRoute: true }
      ]
    },
    { label: t({ pt: 'Contatos', it: 'Contatti' }), href: '/contatti', isRoute: true }
  ];

  return (
    <footer className="bg-gradient-to-b from-[var(--deep-blue)] to-[#1f4d67] text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div>
            <Link to="/">
              <img loading="lazy" src={logo} alt="Fundação Betânia Onlus" className="h-14 w-auto mb-6" />
            </Link>
            <p className="text-sm text-gray-300">
              Fundação Betânia Onlus
            </p>
          </div>

          <div>
            <h3 className="mb-4">Menu</h3>
            <nav className="flex flex-col gap-2">
              {menuItems.map((item) =>
                item.submenu ? (
                  <div key={item.label}>
                    <button
                      onClick={() => toggleSubmenu(item.label)}
                      className="w-full text-left text-gray-300 hover:text-white transition-colors text-sm flex items-center justify-between"
                    >
                      {item.label}
                      <ChevronDown className={`w-4 h-4 transition-transform ${openSubmenus.has(item.label) ? 'rotate-180' : ''}`} />
                    </button>
                    {openSubmenus.has(item.label) && (
                      <div className="ml-4 mt-2 flex flex-col gap-2">
                        {item.submenu.map((subitem: SubMenuItem) =>
                          subitem.submenu ? (
                            <div key={subitem.label}>
                              <button
                                onClick={() => toggleSubmenu(`${item.label}__${subitem.label}`)}
                                className="w-full text-left text-gray-400 hover:text-white transition-colors text-sm flex items-center justify-between"
                              >
                                {subitem.label}
                                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${openSubmenus.has(`${item.label}__${subitem.label}`) ? 'rotate-180' : ''}`} />
                              </button>
                              {openSubmenus.has(`${item.label}__${subitem.label}`) && (
                                <div className="ml-4 mt-1 flex flex-col gap-2">
                                  {subitem.submenu.map((nested: SubMenuItem) =>
                                    nested.isRoute ? (
                                      <Link
                                        key={nested.href}
                                        to={nested.href}
                                        className="text-gray-500 hover:text-white transition-colors text-sm"
                                      >
                                        {nested.label}
                                      </Link>
                                    ) : null
                                  )}
                                </div>
                              )}
                            </div>
                          ) : subitem.isRoute ? (
                            <Link
                              key={subitem.href}
                              to={subitem.href}
                              className="text-gray-400 hover:text-white transition-colors text-sm"
                            >
                              {subitem.label}
                            </Link>
                          ) : (
                            <a
                              key={subitem.href}
                              href={subitem.href}
                              className="text-gray-400 hover:text-white transition-colors text-sm"
                            >
                              {subitem.label}
                            </a>
                          )
                        )}
                      </div>
                    )}
                  </div>
                ) : item.isRoute ? (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {item.label}
                  </a>
                )
              )}
            </nav>
          </div>

          <div>
            <h3 className="mb-4">{t({ pt: 'Contatos', it: 'Contatti' })}</h3>
            <p className="text-sm text-gray-300 mb-4">
              Travessa Acalanto nº 1.672<br />
              Jardim das Margaridas · CEP 41.502-135<br />
              Salvador/BA · Brasil
            </p>
            <p className="text-sm text-gray-300 mb-4">
              <a href="mailto:salvador@ffbetania.net" className="hover:text-white transition-colors">
                salvador@ffbetania.net
              </a>
            </p>
            <p className="text-sm text-gray-300 mb-4">
              05231656181<br />
              +5571 82491713
            </p>
            <a
              href="https://www.instagram.com/ffbetania.salvador"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors inline-flex items-center gap-2"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 flex justify-center items-center mb-8">
          <Button to="/dona-ora">{t({ pt: 'Doar agora', it: 'Dona ora' })}</Button>
        </div>

        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-xs text-gray-400 mb-2">
            Fundação Betania ONLUS · Centro Nossa Senhora Aparecida
          </p>
          <p className="text-xs text-gray-400 mb-2">
            Travessa Acalanto nº 1.672, Jardim das Margaridas · CEP 41.502-135 · Salvador/BA · Brasil
          </p>
          <p className="text-xs text-gray-400 mb-2">
            CNPJ 21.610.717/0001-25
          </p>
          <p className="text-xs text-gray-400 mb-3">
            © 2026 Fundação Betania ONLUS. Todos os direitos reservados.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/privacy-policy" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
              {t({ pt: 'Política de Privacidade', it: 'Privacy Policy' })}
            </Link>
            <span className="text-xs text-gray-600">·</span>
            <Link to="/cookie-policy" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
              {t({ pt: 'Política de Cookies', it: 'Cookie Policy' })}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
