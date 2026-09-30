import { forwardRef } from 'react';
import { Link as RouterLink, Navigate as RouterNavigate, type LinkProps, type NavigateProps, type To } from 'react-router';
import { useLanguage } from '../context/LanguageContext';
import { localizePath, type Lang } from '../i18n/localePaths';

function localizeTo(to: To, lang: Lang): To {
  if (typeof to === 'string') return localizePath(to, lang);
  return to.pathname ? { ...to, pathname: localizePath(to.pathname, lang) } : to;
}

// Drop-in replacements for react-router's Link/Navigate: absolute paths get the
// current language prefix, so '/noticias' becomes '/it/noticias' on the Italian site.
export const Link = forwardRef<HTMLAnchorElement, LinkProps>(function Link({ to, ...props }, ref) {
  const { lang } = useLanguage();
  return <RouterLink ref={ref} to={localizeTo(to, lang)} {...props} />;
});

export function Navigate({ to, ...props }: NavigateProps) {
  const { lang } = useLanguage();
  return <RouterNavigate to={localizeTo(to, lang)} {...props} />;
}
