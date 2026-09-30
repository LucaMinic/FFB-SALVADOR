import { createBrowserRouter, redirect, type LoaderFunctionArgs, type RouteObject } from "react-router";
import { HomePage } from "./pages/HomePage";
import { RootLayout } from "./layouts/RootLayout";
import { PREFIXED_LANGS, langFromPath, localizePath } from "./i18n/localePaths";

// Redirect that keeps the language prefix of the requested URL (/it/eventi-speciali -> /it/noticias/eventos-especiais).
const langRedirect = (to: string) => ({ request }: LoaderFunctionArgs) => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  const pathname = new URL(request.url).pathname.slice(base.length) || "/";
  return redirect(localizePath(to, langFromPath(pathname)));
};

// Pages shared by every language; mounted at the root (pt) and under /it, /de, /en.
const pageRoutes: RouteObject[] = [
  { index: true, Component: HomePage },
  { path: "a-fundacao", lazy: () => import("./components/FundacaoPage").then((m) => ({ Component: m.FundacaoPage })) },
  { path: "a-fraternidade", lazy: () => import("./components/FraternitaPage").then((m) => ({ Component: m.FraternitaPage })) },
  { path: "o-centro", lazy: () => import("./components/CentroPage").then((m) => ({ Component: m.CentroPage })) },
  { path: "historia-do-centro", lazy: () => import("./components/StoriaCentroPage").then((m) => ({ Component: m.StoriaCentroPage })) },
  { path: "creche", lazy: () => import("./components/AsiloPage").then((m) => ({ Component: m.AsiloPage })) },
  { path: "projeto-escola", lazy: () => import("./components/ScuolaPage").then((m) => ({ Component: m.ScuolaPage })) },
  // Temporaneo: pagina "dona ora" nascosta, mostra il sito esterno in iframe. Per ripristinare: import da "./components/DonaOraPage" con m.DonaOraPage.
  { path: "doe-agora", lazy: () => import("./components/DonaOraExternalPage").then((m) => ({ Component: m.DonaOraExternalPage })) },
  { path: "como-ajudar", lazy: () => import("./components/CosaPuoiFareTuPage").then((m) => ({ Component: m.CosaPuoiFareTuPage })) },
  // Temporaneo: pagina "benefattori" nascosta, redirect alla home. Per ripristinare: rimettere il lazy import di "./components/BenefattoriPage" (m.BenefattoriPage) e i link in Header/Footer.
  { path: "benfeitores", loader: langRedirect("/") },
  { path: "contatos", lazy: () => import("./components/ContattiPage").then((m) => ({ Component: m.ContattiPage })) },
  { path: "reconhecimentos-institucionais", lazy: () => import("./components/RiconoscimentiPage").then((m) => ({ Component: m.RiconoscimentiPage })) },
  { path: "iniciativas", lazy: () => import("./components/IniziativePage").then((m) => ({ Component: m.IniziativePage })) },
  { path: "ajudamos-valentina", lazy: () => import("./components/ValentinaPage").then((m) => ({ Component: m.ValentinaPage })) },
  { path: "transparencia", lazy: () => import("./components/TrasparenzaPage").then((m) => ({ Component: m.TrasparenzaPage })) },
  { path: "alimento-que-acolhe", lazy: () => import("./components/AlimentoQueAcolhePage").then((m) => ({ Component: m.AlimentoQueAcolhePage })) },
  { path: "rota-solidaria", lazy: () => import("./components/RotaSolidariaPage").then((m) => ({ Component: m.RotaSolidariaPage })) },
  { path: "jovens-de-betania", lazy: () => import("./components/JovensDeBetaniaPage").then((m) => ({ Component: m.JovensDeBetaniaPage })) },
  { path: "noticias/eventos-especiais", lazy: () => import("./components/EventiSpecialiPage").then((m) => ({ Component: m.EventiSpecialiPage })) },
  // Vecchio URL "eventi-speciali": ora fa parte delle Notícias.
  { path: "eventi-speciali", loader: langRedirect("/noticias/eventos-especiais") },
  { path: "politica-de-privacidade", lazy: () => import("./components/PrivacyPolicyPage").then((m) => ({ Component: m.PrivacyPolicyPage })) },
  { path: "politica-de-cookies", lazy: () => import("./components/CookiePolicyPage").then((m) => ({ Component: m.CookiePolicyPage })) },
  // Vecchio URL "documentari-racconti": i contenuti sono confluiti in Notícias.
  { path: "documentari-racconti", loader: langRedirect("/noticias") },
  { path: "documentari-racconti/intervista-centro", loader: langRedirect("/noticias/entrevista-ao-centro") },
  { path: "documentari-racconti/visita-presidente", loader: langRedirect("/noticias/visita-do-presidente") },
  { path: "documentari-racconti/dieci-anni-creche", loader: langRedirect("/noticias/dez-anos-da-creche") },
  { path: "documentari-racconti/posa-prima-pietra", loader: langRedirect("/noticias/pedra-fundamental") },
  { path: "laboratorios", lazy: () => import("./components/ProgettiPedagogiciPage").then((m) => ({ Component: m.ProgettiPedagogiciPage })) },
  { path: "acolhimento-diario", lazy: () => import("./components/AccoglienzaQuotidianaPage").then((m) => ({ Component: m.AccoglienzaQuotidianaPage })) },
  { path: "educacao", lazy: () => import("./components/EducazionePage").then((m) => ({ Component: m.EducazionePage })) },
  { path: "cuidado-e-nutricao", lazy: () => import("./components/CuraENutrizionePage").then((m) => ({ Component: m.CuraENutrizionePage })) },
  { path: "acompanhamento-das-familias", lazy: () => import("./components/AccompagnamentoFamigliePage").then((m) => ({ Component: m.AccompagnamentoFamigliePage })) },
  { path: "noticias/entrevista-ao-centro", lazy: () => import("./components/IntervistaAlCentroPage").then((m) => ({ Component: m.IntervistaAlCentroPage })) },
  { path: "noticias/visita-do-presidente", lazy: () => import("./components/VisitaPresidentePage").then((m) => ({ Component: m.VisitaPresidentePage })) },
  { path: "noticias/dez-anos-da-creche", lazy: () => import("./components/DieciAnniCrechePage").then((m) => ({ Component: m.DieciAnniCrechePage })) },
  { path: "noticias/pedra-fundamental", lazy: () => import("./components/PosaPrimaPietraPage").then((m) => ({ Component: m.PosaPrimaPietraPage })) },
  { path: "laboratorios/auto-uma-ideia-de-todos", lazy: () => import("./components/AutoIdeaTuttiPage").then((m) => ({ Component: m.AutoIdeaTuttiPage })) },
  { path: "laboratorios/memorias-e-narrativas-africanas", lazy: () => import("./components/RicordiNarrazioniPage").then((m) => ({ Component: m.RicordiNarrazioniPage })) },
  { path: "andamento-das-obras", lazy: () => import("./components/AvanzamentoLavoriPage").then((m) => ({ Component: m.AvanzamentoLavoriPage })) },
  { path: "apoio-a-distancia", lazy: () => import("./components/SostegnoADistanzaPage").then((m) => ({ Component: m.SostegnoADistanzaPage })) },
  { path: "atelie", lazy: () => import("./components/AtelierPage").then((m) => ({ Component: m.AtelierPage })) },
  { path: "nossa-metodologia", lazy: () => import("./components/NossaMetodologiaPage").then((m) => ({ Component: m.NossaMetodologiaPage })) },
  { path: "projetos-permanentes", lazy: () => import("./components/ProjetosPermanentesPage").then((m) => ({ Component: m.ProjetosPermanentesPage })) },
  { path: "mostras-pedagogicas", lazy: () => import("./components/MostrasPedagogicasPage").then((m) => ({ Component: m.MostrasPedagogicasPage })) },
  { path: "alimentacao-saudavel", lazy: () => import("./components/AlimentacaoSaudavelPage").then((m) => ({ Component: m.AlimentacaoSaudavelPage })) },
  { path: "relatorios", lazy: () => import("./components/RelatoriosPage").then((m) => ({ Component: m.RelatoriosPage })) },
  { path: "relatorios/:area", lazy: () => import("./components/RelatorioAreaPage").then((m) => ({ Component: m.RelatorioAreaPage })) },
  { path: "noticias", lazy: () => import("./components/NoticiasPage").then((m) => ({ Component: m.NoticiasPage })) },
  { path: "noticias/tonelada-de-amor", lazy: () => import("./components/ToneladaDeAmorPage").then((m) => ({ Component: m.ToneladaDeAmorPage })) },
  // Old Italian addresses (before the switch to Portuguese slugs): redirect to the new ones.
  { path: "la-fundacao", loader: langRedirect("/a-fundacao") },
  { path: "la-fraternita", loader: langRedirect("/a-fraternidade") },
  { path: "il-centro", loader: langRedirect("/o-centro") },
  { path: "storia-del-centro", loader: langRedirect("/historia-do-centro") },
  { path: "asilo", loader: langRedirect("/creche") },
  { path: "progetto-scuola", loader: langRedirect("/projeto-escola") },
  { path: "dona-ora", loader: langRedirect("/doe-agora") },
  { path: "cosa-puoi-fare-tu", loader: langRedirect("/como-ajudar") },
  { path: "benefattori", loader: langRedirect("/") },
  { path: "contatti", loader: langRedirect("/contatos") },
  { path: "riconoscimenti-istituzionali", loader: langRedirect("/reconhecimentos-institucionais") },
  { path: "iniziative", loader: langRedirect("/iniciativas") },
  { path: "aiutiamo-valentina", loader: langRedirect("/ajudamos-valentina") },
  { path: "trasparenza", loader: langRedirect("/transparencia") },
  { path: "privacy-policy", loader: langRedirect("/politica-de-privacidade") },
  { path: "cookie-policy", loader: langRedirect("/politica-de-cookies") },
  { path: "progetti-pedagogici", loader: langRedirect("/laboratorios") },
  { path: "accoglienza-quotidiana", loader: langRedirect("/acolhimento-diario") },
  { path: "educazione", loader: langRedirect("/educacao") },
  { path: "cura-e-nutrizione", loader: langRedirect("/cuidado-e-nutricao") },
  { path: "accompagnamento-famiglie", loader: langRedirect("/acompanhamento-das-familias") },
  { path: "noticias/intervista-centro", loader: langRedirect("/noticias/entrevista-ao-centro") },
  { path: "noticias/visita-presidente", loader: langRedirect("/noticias/visita-do-presidente") },
  { path: "noticias/dieci-anni-creche", loader: langRedirect("/noticias/dez-anos-da-creche") },
  { path: "noticias/posa-prima-pietra", loader: langRedirect("/noticias/pedra-fundamental") },
  { path: "documentari-racconti/auto-idea-tutti", loader: langRedirect("/laboratorios/auto-uma-ideia-de-todos") },
  { path: "documentari-racconti/ricordi-narrazioni", loader: langRedirect("/laboratorios/memorias-e-narrativas-africanas") },
  { path: "avanzamento-lavori", loader: langRedirect("/andamento-das-obras") },
  { path: "sostegno-a-distanza", loader: langRedirect("/apoio-a-distancia") },
  { path: "atelier", loader: langRedirect("/atelie") },
  { path: "relatorios/alimentazione-sana", loader: langRedirect("/relatorios/alimentacao-saudavel") },
  { path: "relatorios/identita-e-cultura", loader: langRedirect("/relatorios/identidade-e-cultura") },
  { path: "relatorios/mondo-in-movimento", loader: langRedirect("/relatorios/mundo-em-movimento") },
  { path: "relatorios/piccoli-animali-e-natura", loader: langRedirect("/relatorios/pequenos-animais-e-natureza") },
  { path: "*", Component: HomePage },
];

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [...PREFIXED_LANGS.map((lang) => ({ path: lang, children: pageRoutes })), ...pageRoutes],
  },
], { basename: import.meta.env.BASE_URL });
