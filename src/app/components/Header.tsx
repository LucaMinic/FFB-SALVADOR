import { useState } from 'react';
import { Link, useLocation } from 'react-router';
import { Button } from './Button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from './ui/sheet';
import { Menu, ChevronDown, ChevronRight } from 'lucide-react';
import logo from '../../imports/logo_fundacao-2.png';
import flagBrasil from '../../imports/brasil.png';
import flagItalia from '../../imports/italia.png';
import { useLanguage, useT } from '../context/LanguageContext';

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

function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const { lang, setLang } = useLanguage();
  return (
    <div className={`flex items-center gap-1 ${compact ? '' : 'ml-1'}`}>
      <button
        onClick={() => setLang('pt')}
        className={`flex items-center justify-center rounded transition-all duration-200 ${
          lang === 'pt'
            ? 'ring-2 ring-[var(--deep-blue)] ring-offset-1 opacity-100 shadow-sm'
            : 'opacity-35 hover:opacity-65'
        }`}
        aria-pressed={lang === 'pt'}
        aria-label="Português (Brasil)"
        title="Português (Brasil)"
      >
        <img src={flagBrasil} alt="Português (Brasil)" className="w-7 h-auto rounded-sm" />
      </button>
      <button
        onClick={() => setLang('it')}
        className={`flex items-center justify-center rounded transition-all duration-200 ${
          lang === 'it'
            ? 'ring-2 ring-[var(--deep-blue)] ring-offset-1 opacity-100 shadow-sm'
            : 'opacity-35 hover:opacity-65'
        }`}
        aria-pressed={lang === 'it'}
        aria-label="Italiano"
        title="Italiano"
      >
        <img src={flagItalia} alt="Italiano" className="w-7 h-auto rounded-sm" />
      </button>
    </div>
  );
}

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenus, setOpenSubmenus] = useState<Set<string>>(new Set());
  const location = useLocation();
  const t = useT();

  const toggleSubmenu = (key: string) => {
    setOpenSubmenus(prev => {
      const newSet = new Set(prev);
      const isTopLevel = !key.includes('__');

      if (newSet.has(key)) {
        // Close the clicked menu
        newSet.delete(key);
      } else {
        // If it's a top-level menu, close all other top-level menus first
        if (isTopLevel) {
          // Keep only nested submenus, remove all top-level menus
          const nestedMenus = Array.from(prev).filter(k => k.includes('__'));
          newSet.clear();
          nestedMenus.forEach(k => newSet.add(k));
        }
        // Open the clicked menu
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
            { label: t({ pt: 'Projetos pedagógicos', it: 'Progetti pedagogici' }), href: '/progetti-pedagogici', isRoute: true }
          ]
        },
        { label: t({ pt: 'Projeto Escola', it: 'Progetto scuola' }), href: '/progetto-scuola', isRoute: true },
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
        { label: t({ pt: 'Doar agora', it: 'Dona ora' }), href: '/dona-ora', isRoute: true },
        { label: t({ pt: 'O que você pode fazer', it: 'Cosa puoi fare tu' }), href: '/cosa-puoi-fare-tu', isRoute: true },
        { label: t({ pt: 'Benfeitores', it: 'Benefattori' }), href: '/benefattori', isRoute: true }
      ]
    },
    { label: t({ pt: 'Contatos', it: 'Contatti' }), href: '/contatti', isRoute: true }
  ];

  const doarLabel = t({ pt: 'Doar agora', it: 'Dona ora' });

  const isSubmenuActive = (item: MenuItem): boolean => {
    return item.submenu?.some(sub =>
      (sub.isRoute && location.pathname === sub.href) ||
      sub.submenu?.some(nested => nested.isRoute && location.pathname === nested.href)
    ) ?? false;
  };

  return (
    <header className="bg-white/80 backdrop-blur-xl border-b border-gray-200/50 sticky top-0 z-50 shadow-[0_2px_20px_rgba(0,0,0,0.04)]">
      <div className="max-w-7xl mx-auto px-6 py-5 lg:py-6">
        <div className="flex items-center justify-between gap-3">
          {/* Logo */}
          <div className="flex items-center gap-12 flex-shrink-0">
            <Link to="/">
              <img src={logo} alt="Fundação Betânia Onlus" className="h-16 lg:h-20 w-auto" />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex gap-6 items-center">
              {menuItems.map((item) => {
                const active = isSubmenuActive(item);
                return item.submenu ? (
                  <div key={item.label} className="relative group">
                    <button className={`transition-colors font-semibold flex items-center gap-1 ${
                      active || (item.isRoute && location.pathname === item.href)
                        ? 'text-[var(--deep-blue)]'
                        : 'text-gray-700 hover:text-[var(--deep-blue)]'
                    }`}>
                      {item.label}
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg py-2 min-w-[210px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      {item.submenu.map((subitem) =>
                        subitem.submenu ? (
                          /* Item with nested flyout */
                          <div key={subitem.href} className="relative group/nested">
                            <div className={`flex items-center justify-between px-4 py-2 transition-colors font-semibold cursor-pointer ${
                              location.pathname === subitem.href || subitem.submenu.some(n => location.pathname === n.href)
                                ? 'text-[var(--deep-blue)] bg-gray-50'
                                : 'text-gray-700 hover:text-[var(--deep-blue)] hover:bg-gray-50'
                            }`}>
                              <Link to={subitem.href} className="flex-1">
                                {subitem.label}
                              </Link>
                              <ChevronRight className="w-3.5 h-3.5 ml-2 flex-shrink-0" />
                            </div>
                            {/* Flyout nested submenu */}
                            <div className="absolute left-full top-0 ml-1 bg-white shadow-lg rounded-lg py-2 min-w-[190px] opacity-0 invisible group-hover/nested:opacity-100 group-hover/nested:visible transition-all duration-200 z-50">
                              {subitem.submenu.map((nested) =>
                                nested.isRoute ? (
                                  <Link
                                    key={nested.href}
                                    to={nested.href}
                                    className={`block px-4 py-2 transition-colors font-semibold ${
                                      location.pathname === nested.href
                                        ? 'text-[var(--deep-blue)] bg-gray-50'
                                        : 'text-gray-700 hover:text-[var(--deep-blue)] hover:bg-gray-50'
                                    }`}
                                  >
                                    {nested.label}
                                  </Link>
                                ) : null
                              )}
                            </div>
                          </div>
                        ) : subitem.isRoute ? (
                          <Link
                            key={subitem.href}
                            to={subitem.href}
                            className={`block px-4 py-2 transition-colors font-semibold ${
                              location.pathname === subitem.href
                                ? 'text-[var(--deep-blue)] bg-gray-50'
                                : 'text-gray-700 hover:text-[var(--deep-blue)] hover:bg-gray-50'
                            }`}
                          >
                            {subitem.label}
                          </Link>
                        ) : (
                          <a
                            key={subitem.href}
                            href={subitem.href}
                            className="block px-4 py-2 text-gray-700 hover:text-[var(--deep-blue)] hover:bg-gray-50 transition-colors font-semibold"
                          >
                            {subitem.label}
                          </a>
                        )
                      )}
                    </div>
                  </div>
                ) : item.isRoute ? (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={`transition-colors font-semibold ${
                      location.pathname === item.href
                        ? 'text-[var(--deep-blue)]'
                        : 'text-gray-700 hover:text-[var(--deep-blue)]'
                    }`}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-gray-700 hover:text-[var(--deep-blue)] transition-colors font-semibold"
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>
          </div>

          {/* Desktop right side: language switcher + Dona ora */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            <LanguageSwitcher />
            <Link to="/dona-ora" className="px-5 py-2.5 bg-gradient-to-br from-[#f5b942] via-[#f7c968] to-[#f5b942] text-white text-base font-medium rounded-xl whitespace-nowrap shadow-md hover:shadow-lg transition-all inline-block">
              {doarLabel}
            </Link>
          </div>

          {/* Mobile: Dona ora button */}
          <div className="flex-shrink-0 lg:hidden">
            <Link to="/dona-ora" className="px-5 py-2.5 bg-gradient-to-br from-[#f5b942] via-[#f7c968] to-[#f5b942] text-white text-base font-medium rounded-xl whitespace-nowrap shadow-md hover:shadow-lg transition-all inline-block">
              {doarLabel}
            </Link>
          </div>

          {/* Hamburger menu */}
          <div className="flex items-center flex-shrink-0">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button
                  className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  aria-label={t({ pt: 'Abrir menu', it: 'Apri menu' })}
                >
                  <Menu className="w-6 h-6 text-gray-700" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetTitle className="sr-only">Menu</SheetTitle>
                <SheetDescription className="sr-only">
                  {t({ pt: 'Menu de navegação principal', it: 'Menu di navigazione principale' })}
                </SheetDescription>
                <div className="flex flex-col gap-6 mt-8">
                  {/* Language switcher in mobile menu */}
                  <div className="flex items-center gap-2 px-4">
                    <span className="text-xs text-gray-500 font-medium">Idioma / Lingua:</span>
                    <LanguageSwitcher compact />
                  </div>

                  <nav className="flex flex-col gap-2">
                    {menuItems.map((item) => {
                      const active = isSubmenuActive(item);
                      return item.submenu ? (
                        <div key={item.label}>
                          <button
                            onClick={() => toggleSubmenu(item.label)}
                            className={`w-full text-left transition-colors py-2 px-4 hover:bg-gray-50 rounded-lg font-semibold flex items-center justify-between ${
                              active || (item.isRoute && location.pathname === item.href)
                                ? 'text-[var(--deep-blue)]'
                                : 'text-gray-700 hover:text-[var(--deep-blue)]'
                            }`}
                          >
                            {item.label}
                            <ChevronDown className={`w-4 h-4 transition-transform ${openSubmenus.has(item.label) ? 'rotate-180' : ''}`} />
                          </button>
                          {openSubmenus.has(item.label) && (
                            <div className="ml-4 mt-2 flex flex-col gap-1">
                              {item.submenu.map((subitem) =>
                                subitem.submenu ? (
                                  /* Mobile nested accordion */
                                  <div key={subitem.href}>
                                    <button
                                      onClick={() => toggleSubmenu(`${item.label}__${subitem.label}`)}
                                      className={`w-full text-left flex items-center justify-between transition-colors py-2 px-4 hover:bg-gray-50 rounded-lg ${
                                        location.pathname === subitem.href || subitem.submenu.some(n => location.pathname === n.href)
                                          ? 'text-[var(--deep-blue)]'
                                          : 'text-gray-600 hover:text-[var(--deep-blue)]'
                                      }`}
                                    >
                                      {subitem.label}
                                      <ChevronDown className={`w-3.5 h-3.5 transition-transform ${openSubmenus.has(`${item.label}__${subitem.label}`) ? 'rotate-180' : ''}`} />
                                    </button>
                                    {openSubmenus.has(`${item.label}__${subitem.label}`) && (
                                      <div className="ml-4 mt-1 flex flex-col gap-1">
                                        {subitem.submenu.map((nested) =>
                                          nested.isRoute ? (
                                            <Link
                                              key={nested.href}
                                              to={nested.href}
                                              onClick={() => setIsOpen(false)}
                                              className={`transition-colors py-2 px-4 hover:bg-gray-50 rounded-lg block ${
                                                location.pathname === nested.href
                                                  ? 'text-[var(--deep-blue)]'
                                                  : 'text-gray-500 hover:text-[var(--deep-blue)]'
                                              }`}
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
                                    onClick={() => setIsOpen(false)}
                                    className={`transition-colors py-2 px-4 hover:bg-gray-50 rounded-lg block ${
                                      location.pathname === subitem.href
                                        ? 'text-[var(--deep-blue)]'
                                        : 'text-gray-600 hover:text-[var(--deep-blue)]'
                                    }`}
                                  >
                                    {subitem.label}
                                  </Link>
                                ) : (
                                  <a
                                    key={subitem.href}
                                    href={subitem.href}
                                    className="text-gray-600 hover:text-[var(--deep-blue)] transition-colors py-2 px-4 hover:bg-gray-50 rounded-lg block"
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
                          onClick={() => setIsOpen(false)}
                          className={`transition-colors py-2 px-4 hover:bg-gray-50 rounded-lg font-semibold ${
                            location.pathname === item.href
                              ? 'text-[var(--deep-blue)]'
                              : 'text-gray-700 hover:text-[var(--deep-blue)]'
                          }`}
                        >
                          {item.label}
                        </Link>
                      ) : (
                        <a
                          key={item.href}
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className="text-gray-700 hover:text-[var(--deep-blue)] transition-colors py-2 px-4 hover:bg-gray-50 rounded-lg font-semibold"
                        >
                          {item.label}
                        </a>
                      );
                    })}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}

