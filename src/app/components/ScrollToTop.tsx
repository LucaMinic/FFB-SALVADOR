import { useEffect } from 'react';
import { useLocation } from 'react-router';

export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // A hash means the page targets a specific section (see e.g. RiconoscimentiPage,
    // NossaMetodologiaPage) — let its own scroll-to-anchor effect handle positioning.
    if (hash) return;

    const scrollTop = () => {
      document.documentElement.style.scrollBehavior = 'auto';
      window.scrollTo(0, 0);
      document.documentElement.style.scrollBehavior = '';
    };

    scrollTop();

    // Radix UI Sheet restores scroll position ~300ms after closing on mobile.
    // A second call at 350ms ensures we stay at the top.
    const id = setTimeout(scrollTop, 350);
    return () => clearTimeout(id);
  }, [pathname, hash]);

  return null;
}
