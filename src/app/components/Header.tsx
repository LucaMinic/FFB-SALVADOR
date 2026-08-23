import { useEffect, useRef, useState, type ReactNode } from 'react';
import { Link, useLocation } from 'react-router';
import { Button } from './Button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from './ui/sheet';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu';
import { Menu, ChevronDown, ChevronRight } from 'lucide-react';
import logo from '../../imports/logo_fundacao-2.png';
import flagBrasil from '../../imports/brasil.png';
import flagItalia from '../../imports/italia.png';
import { useLanguage, useT, type Lang } from '../context/LanguageContext';

// Fixed inline width/height (matching the pt/it PNG flags' rendered box) so
// dropdown-menu's global `[&_svg:not([class*='size-'])]:size-4` rule — which
// otherwise forces every menu svg to a 16x16 square — can't override these.
const FLAG_SVG_STYLE = { width: '1.5rem', height: '1rem' };

function FlagGermania({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 9 6" style={FLAG_SVG_STYLE} className={className} role="img" aria-label="Deutsch" preserveAspectRatio="xMidYMid slice">
      <rect width="9" height="2" y="0" fill="#000000" />
      <rect width="9" height="2" y="2" fill="#DD0000" />
      <rect width="9" height="2" y="4" fill="#FFCE00" />
    </svg>
  );
}

function FlagUK({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 90 60" style={FLAG_SVG_STYLE} className={className} role="img" aria-label="English" preserveAspectRatio="xMidYMid slice">
      <rect width="90" height="60" fill="#00247D" />
      <path d="M0,0 L90,60 M90,0 L0,60" stroke="#FFFFFF" strokeWidth="12" />
      <path d="M0,0 L90,60 M90,0 L0,60" stroke="#CF142B" strokeWidth="4" />
      <path d="M45,0 V60 M0,30 H90" stroke="#FFFFFF" strokeWidth="20" />
      <path d="M45,0 V60 M0,30 H90" stroke="#CF142B" strokeWidth="12" />
    </svg>
  );
}

const LANGUAGE_OPTIONS: { code: Lang; label: string; render: (className: string) => ReactNode }[] = [
  { code: 'pt', label: 'Português (Brasil)', render: (className) => <img src={flagBrasil} alt="Português (Brasil)" className={className} /> },
  { code: 'it', label: 'Italiano', render: (className) => <img src={flagItalia} alt="Italiano" className={className} /> },
  { code: 'de', label: 'Deutsch', render: (className) => <FlagGermania className={className} /> },
  { code: 'en', label: 'English', render: (className) => <FlagUK className={className} /> },
];

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
  const t = useT();
  const current = LANGUAGE_OPTIONS.find((option) => option.code === lang) ?? LANGUAGE_OPTIONS[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          className={`flex items-center gap-1.5 rounded-lg border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-colors ${
            compact ? 'pl-1.5 pr-2 py-1' : 'pl-2 pr-2.5 py-1.5'
          }`}
          aria-label={t({ pt: 'Selecionar idioma', it: 'Seleziona lingua', de: 'Sprache auswählen', en: "Select language" })}
        >
          {current.render('w-6 h-4 rounded-sm flex-shrink-0 object-cover')}
          <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align={compact ? 'start' : 'end'} className="min-w-[190px]">
        {LANGUAGE_OPTIONS.map((option) => (
          <DropdownMenuItem
            key={option.code}
            onSelect={() => setLang(option.code)}
            className="gap-2"
          >
            {option.render('w-6 h-4 rounded-sm flex-shrink-0 object-cover')}
            <span className={option.code === lang ? 'font-semibold text-[var(--deep-blue)]' : 'text-gray-700'}>
              {option.label}
            </span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenus, setOpenSubmenus] = useState<Set<string>>(new Set());
  const [desktopOpenMenu, setDesktopOpenMenu] = useState<string | null>(null);
  const [desktopOpenNested, setDesktopOpenNested] = useState<string | null>(null);
  const desktopNavRef = useRef<HTMLElement>(null);
  const location = useLocation();
  const t = useT();

  const closeDesktopMenus = () => {
    setDesktopOpenMenu(null);
    setDesktopOpenNested(null);
  };

  // Tablets/touch devices have no real hover state, so the dropdown must also
  // open/close on tap; this closes it when tapping anywhere outside the nav.
  useEffect(() => {
    if (!desktopOpenMenu) return;
    const handlePointerDown = (e: PointerEvent) => {
      if (desktopNavRef.current && !desktopNavRef.current.contains(e.target as Node)) {
        closeDesktopMenus();
      }
    };
    document.addEventListener('pointerdown', handlePointerDown);
    return () => document.removeEventListener('pointerdown', handlePointerDown);
  }, [desktopOpenMenu]);

  useEffect(() => {
    closeDesktopMenus();
  }, [location.pathname]);

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
    { label: t({ pt: 'Início', it: 'Home', de: "Startseite", en: "Home" }), href: '/', isRoute: true },
    {
      label: t({ pt: 'Fundação', it: 'La Fundação', de: "Die Fundação", en: "The Fundação" }),
      href: '/la-fundacao',
      isRoute: true,
      submenu: [
        { label: t({ pt: 'A Fundação Betania ONLUS', it: 'La Fundação Betania ONLUS', de: "Die Fundação Betania ONLUS", en: "The Fundação Betania ONLUS" }), href: '/la-fundacao', isRoute: true },
        { label: t({ pt: 'Reconhecimentos institucionais', it: 'Riconoscimenti istituzionali', de: "Institutionelle Anerkennungen", en: "Institutional Recognitions" }), href: '/riconoscimenti-istituzionali', isRoute: true },
        { label: t({ pt: 'Transparência', it: 'Trasparenza', de: "Transparenz", en: "Transparency" }), href: '/trasparenza', isRoute: true }
      ]
    },
    {
      label: 'Centro Nossa Senhora Aparecida',
      href: '/il-centro',
      isRoute: true,
      submenu: [
        { label: t({ pt: 'O Centro', it: 'Il Centro', de: "Das Zentrum", en: "The Centre" }), href: '/il-centro', isRoute: true },
        { label: t({ pt: 'A história do Centro', it: 'La Storia del Centro', de: "Die Geschichte des Zentrums", en: "The History of the Centre" }), href: '/storia-del-centro', isRoute: true },
        {
          label: t({ pt: 'Creche', it: 'Asilo', de: "Kita", en: "Nursery School" }),
          href: '/asilo',
          isRoute: true,
          submenu: [
            { label: t({ pt: 'A estrutura', it: 'La struttura', de: "Die Einrichtung", en: "The Facility" }), href: '/asilo', isRoute: true },
            { label: t({ pt: 'Nossa metodologia', it: 'La nostra metodologia', de: "Unsere Methodik", en: "Our Methodology" }), href: '/nossa-metodologia', isRoute: true },
            { label: t({ pt: 'Projetos Permanentes', it: 'Progetti Permanenti', de: "Dauerhafte Projekte", en: "Permanent Projects" }), href: '/projetos-permanentes', isRoute: true },
            { label: t({ pt: 'Relatórios', it: 'Relazioni', de: "Berichte", en: "Reports" }), href: '/relatorios', isRoute: true },
            { label: t({ pt: 'Laboratórios', it: 'Laboratori', de: "Werkstätten", en: "Workshops" }), href: '/progetti-pedagogici', isRoute: true },
          ]
        },
        {
          label: t({ pt: 'A escola', it: 'La scuola', de: "Die Schule", en: "The School" }),
          href: '/progetto-scuola',
          isRoute: true,
          submenu: [
            { label: t({ pt: 'Projeto Escola', it: 'Progetto scuola', de: "Schulprojekt", en: "School Project" }), href: '/progetto-scuola', isRoute: true },
            { label: t({ pt: 'Andamento das Obras', it: 'Avanzamento Lavori', de: "Baufortschritt", en: "Construction Progress" }), href: '/avanzamento-lavori', isRoute: true }
          ]
        },
        { label: t({ pt: 'Documentários e Relatos', it: 'Documentari e Racconti', de: "Dokumentationen und Erzählungen", en: "Documentaries and Stories" }), href: '/documentari-racconti', isRoute: true },
      ]
    },
    {
      label: t({ pt: 'Fraternidade', it: 'Fraternità', de: "Gemeinschaft", en: "Fraternity" }),
      href: '/la-fraternita',
      isRoute: true,
      submenu: [
        { label: t({ pt: 'A Fraternidade Franciscana de Betânia', it: 'La Fraternità Francescana di Betania', de: "Die Franziskanische Gemeinschaft von Betania", en: "The Franciscan Fraternity of Betania" }), href: '/la-fraternita', isRoute: true },
        { label: t({ pt: 'Eventos especiais', it: 'Eventi speciali', de: "Besondere Veranstaltungen", en: "Special Events" }), href: '/eventi-speciali', isRoute: true }
      ]
    },
    {
      label: t({ pt: 'Apoie', it: 'Sostieni', de: "Unterstützen", en: "Support Us" }),
      href: '#sostieni',
      submenu: [
        { label: t({ pt: 'O que você pode fazer', it: 'Cosa puoi fare tu', de: "Was Sie tun können", en: "What You Can Do" }), href: '/cosa-puoi-fare-tu', isRoute: true },
        { label: t({ pt: 'Doar agora', it: 'Dona ora', de: "Jetzt spenden", en: "Donate now" }), href: '/dona-ora', isRoute: true },
        { label: t({ pt: 'Apoio à distância', it: 'Sostegno a distanza', de: "Patenschaft", en: "Distance Sponsorship" }), href: '/sostegno-a-distanza', isRoute: true }
      ]
    },
    { label: t({ pt: 'Contatos', it: 'Contatti', de: "Kontakt", en: "Contact" }), href: '/contatti', isRoute: true }
  ];

  const doarLabel = t({ pt: 'Doar agora', it: 'Dona ora', de: "Jetzt spenden", en: "Donate now" });

  const isSubmenuActive = (item: MenuItem): boolean => {
    return item.submenu?.some(sub =>
      (sub.isRoute && location.pathname === sub.href) ||
      sub.submenu?.some(nested => nested.isRoute && location.pathname === nested.href)
    ) ?? false;
  };

  return (
    <header className="bg-white/80 backdrop-blur-xl border-b border-gray-200/50 sticky top-0 z-50 shadow-[0_2px_20px_rgba(0,0,0,0.04)]">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-5 xl:py-6">
        <div className="flex items-center justify-between gap-2 sm:gap-3">
          {/* Logo */}
          <div className="flex items-center gap-8 flex-shrink-0">
            <Link to="/">
              <img src={logo} alt="Fundação Betânia Onlus" className="h-12 sm:h-16 xl:h-20 w-auto" />
            </Link>

            {/* Desktop nav */}
            <nav ref={desktopNavRef} className="hidden xl:flex gap-4 items-center">
              {menuItems.map((item) => {
                const active = isSubmenuActive(item);
                const isMenuOpen = desktopOpenMenu === item.label;
                return item.submenu ? (
                  <div key={item.label} className="relative group">
                    <button
                      type="button"
                      onClick={() =>
                        setDesktopOpenMenu((prev) => {
                          if (prev === item.label) {
                            setDesktopOpenNested(null);
                            return null;
                          }
                          setDesktopOpenNested(null);
                          return item.label;
                        })
                      }
                      aria-expanded={isMenuOpen}
                      className={`transition-colors font-semibold flex items-center gap-1 ${
                        active || (item.isRoute && location.pathname === item.href)
                          ? 'text-[var(--deep-blue)]'
                          : 'text-gray-700 hover:text-[var(--deep-blue)]'
                      }`}>
                      {item.label}
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    <div className={`absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg py-2 min-w-[210px] transition-all duration-200 z-50 group-hover:opacity-100 group-hover:visible ${
                      isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                    }`}>
                      {item.submenu.map((subitem) => {
                        const isNestedOpen = desktopOpenNested === subitem.href;
                        return subitem.submenu ? (
                          /* Item with nested flyout */
                          <div key={subitem.href} className="relative group/nested">
                            <div className={`flex items-center justify-between px-4 py-2 transition-colors font-semibold ${
                              location.pathname === subitem.href || subitem.submenu.some(n => location.pathname === n.href)
                                ? 'text-[var(--deep-blue)] bg-gray-50'
                                : 'text-gray-700 hover:text-[var(--deep-blue)] hover:bg-gray-50'
                            }`}>
                              <Link to={subitem.href} className="flex-1" onClick={closeDesktopMenus}>
                                {subitem.label}
                              </Link>
                              <button
                                type="button"
                                onClick={() => setDesktopOpenNested((prev) => (prev === subitem.href ? null : subitem.href))}
                                aria-expanded={isNestedOpen}
                                aria-label={subitem.label}
                                className="p-1 -m-1 flex-shrink-0"
                              >
                                <ChevronRight className="w-3.5 h-3.5 ml-2" />
                              </button>
                            </div>
                            {/* Flyout nested submenu */}
                            <div className={`absolute left-full top-0 ml-1 bg-white shadow-lg rounded-lg py-2 min-w-[190px] transition-all duration-200 z-50 group-hover/nested:opacity-100 group-hover/nested:visible ${
                              isNestedOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                            }`}>
                              {subitem.submenu.map((nested) =>
                                nested.isRoute ? (
                                  <Link
                                    key={nested.href}
                                    to={nested.href}
                                    onClick={closeDesktopMenus}
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
                            onClick={closeDesktopMenus}
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
                            onClick={closeDesktopMenus}
                            className="block px-4 py-2 text-gray-700 hover:text-[var(--deep-blue)] hover:bg-gray-50 transition-colors font-semibold"
                          >
                            {subitem.label}
                          </a>
                        );
                      })}
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
          <div className="hidden xl:flex items-center gap-3 flex-shrink-0">
            <LanguageSwitcher />
            <Link to="/dona-ora" className="px-5 py-2.5 bg-gradient-to-br from-[#f5b942] via-[#f7c968] to-[#f5b942] text-white text-base font-medium rounded-xl whitespace-nowrap shadow-md hover:shadow-lg transition-all inline-block">
              {doarLabel}
            </Link>
          </div>

          {/* Mobile: Dona ora centered equidistant between logo and language switcher */}
          <div className="flex-1 flex justify-center xl:hidden">
            <Link to="/dona-ora" className="px-3 py-2 text-sm sm:px-5 sm:py-2.5 sm:text-base bg-gradient-to-br from-[#f5b942] via-[#f7c968] to-[#f5b942] text-white font-medium rounded-xl whitespace-nowrap shadow-md hover:shadow-lg transition-all inline-block">
              {doarLabel}
            </Link>
          </div>

          {/* Mobile: utility pair (language switcher + hamburger) */}
          <div className="flex items-center gap-1 flex-shrink-0 xl:hidden">
              <LanguageSwitcher compact />
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <button
                    className="p-2.5 hover:bg-gray-100 rounded-lg transition-colors"
                    aria-label={t({ pt: 'Abrir menu', it: 'Apri menu', de: "Menü öffnen", en: "Open menu" })}
                  >
                    <Menu className="w-6 h-6 text-gray-700" />
                  </button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetTitle className="sr-only">Menu</SheetTitle>
                <SheetDescription className="sr-only">
                  {t({ pt: 'Menu de navegação principal', it: 'Menu di navigazione principale', de: "Hauptnavigationsmenü", en: "Main navigation menu" })}
                </SheetDescription>
                <div className="flex flex-col gap-6 mt-8">
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

