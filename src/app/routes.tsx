import { createBrowserRouter } from "react-router";
import { HomePage } from "./pages/HomePage";
import { FundacaoPage } from "./components/FundacaoPage";
import { FraternitaPage } from "./components/FraternitaPage";
import { AsiloPage } from "./components/AsiloPage";
import { CentroPage } from "./components/CentroPage";
import { ScuolaPage } from "./components/ScuolaPage";
import { DonaOraPage } from "./components/DonaOraPage";
import { CosaPuoiFareTuPage } from "./components/CosaPuoiFareTuPage";
import { BenefattoriPage } from "./components/BenefattoriPage";
import { ContattiPage } from "./components/ContattiPage";
import { RiconoscimentiPage } from "./components/RiconoscimentiPage";
import { IniziativePage } from "./components/IniziativePage";
import { ValentinaPage } from "./components/ValentinaPage";
import { TrasparenzaPage } from "./components/TrasparenzaPage";
import { EventiSpecialiPage } from "./components/EventiSpecialiPage";
import { PrivacyPolicyPage } from "./components/PrivacyPolicyPage";
import { CookiePolicyPage } from "./components/CookiePolicyPage";
import { DocumentariPage } from "./components/DocumentariPage";
import { AccoglienzaQuotidianaPage } from "./components/AccoglienzaQuotidianaPage";
import { EducazionePage } from "./components/EducazionePage";
import { CuraENutrizionePage } from "./components/CuraENutrizionePage";
import { AccompagnamentoFamigliePage } from "./components/AccompagnamentoFamigliePage";
import { ProgettiPedagogiciPage } from "./components/ProgettiPedagogiciPage";
import { PosaPrimaPietraPage } from "./components/PosaPrimaPietraPage";
import { AutoIdeaTuttiPage } from "./components/AutoIdeaTuttiPage";
import { RicordiNarrazioniPage } from "./components/RicordiNarrazioniPage";
import { IntervistaAlCentroPage } from "./components/IntervistaAlCentroPage";
import { DieciAnniCrechePage } from "./components/DieciAnniCrechePage";
import { VisitaPresidentePage } from "./components/VisitaPresidentePage";
import { AvanzamentoLavoriPage } from "./components/AvanzamentoLavoriPage";
import { SostegnoADistanzaPage } from "./components/SostegnoADistanzaPage";
import { ApproccioReggioEmiliaPage } from "./components/ApproccioReggioEmiliaPage";
import { AtelierPage } from "./components/AtelierPage";
import { NossaMetodologiaPage } from "./components/NossaMetodologiaPage";
import { ProjetosPermanentesPage } from "./components/ProjetosPermanentesPage";
import { MostrasPedagogicasPage } from "./components/MostrasPedagogicasPage";
import { AlimentacaoSaudavelPage } from "./components/AlimentacaoSaudavelPage";
import { RelatoriosPage } from "./components/RelatoriosPage";
import { RootLayout } from "./layouts/RootLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: HomePage },
      { path: "la-fundacao", Component: FundacaoPage },
      { path: "la-fraternita", Component: FraternitaPage },
      { path: "il-centro", Component: CentroPage },
      { path: "asilo", Component: AsiloPage },
      { path: "progetto-scuola", Component: ScuolaPage },
      { path: "dona-ora", Component: DonaOraPage },
      { path: "cosa-puoi-fare-tu", Component: CosaPuoiFareTuPage },
      { path: "benefattori", Component: BenefattoriPage },
      { path: "contatti", Component: ContattiPage },
      { path: "riconoscimenti-istituzionali", Component: RiconoscimentiPage },
      { path: "iniziative", Component: IniziativePage },
      { path: "aiutiamo-valentina", Component: ValentinaPage },
      { path: "trasparenza", Component: TrasparenzaPage },
      { path: "eventi-speciali", Component: EventiSpecialiPage },
      { path: "privacy-policy", Component: PrivacyPolicyPage },
      { path: "cookie-policy", Component: CookiePolicyPage },
      { path: "documentari-racconti", Component: DocumentariPage },
      { path: "progetti-pedagogici", Component: ProgettiPedagogiciPage },
      { path: "accoglienza-quotidiana", Component: AccoglienzaQuotidianaPage },
      { path: "educazione", Component: EducazionePage },
      { path: "cura-e-nutrizione", Component: CuraENutrizionePage },
      { path: "accompagnamento-famiglie", Component: AccompagnamentoFamigliePage },
      { path: "documentari-racconti/intervista-centro", Component: IntervistaAlCentroPage },
      { path: "documentari-racconti/visita-presidente", Component: VisitaPresidentePage },
      { path: "documentari-racconti/dieci-anni-creche", Component: DieciAnniCrechePage },
      { path: "documentari-racconti/posa-prima-pietra", Component: PosaPrimaPietraPage },
      { path: "documentari-racconti/auto-idea-tutti", Component: AutoIdeaTuttiPage },
      { path: "documentari-racconti/ricordi-narrazioni", Component: RicordiNarrazioniPage },
      { path: "avanzamento-lavori", Component: AvanzamentoLavoriPage },
      { path: "sostegno-a-distanza", Component: SostegnoADistanzaPage },
      { path: "approccio-reggio-emilia", Component: ApproccioReggioEmiliaPage },
      { path: "atelier", Component: AtelierPage },
      { path: "nossa-metodologia", Component: NossaMetodologiaPage },
      { path: "projetos-permanentes", Component: ProjetosPermanentesPage },
      { path: "mostras-pedagogicas", Component: MostrasPedagogicasPage },
      { path: "alimentacao-saudavel", Component: AlimentacaoSaudavelPage },
      { path: "relatorios", Component: RelatoriosPage },
      { path: "*", Component: HomePage },
    ],
  },
]);

