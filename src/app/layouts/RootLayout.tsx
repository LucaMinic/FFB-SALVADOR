import { Outlet } from "react-router";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ScrollToTop } from "../components/ScrollToTop";
import { Seo } from "../components/Seo";
import { BackToTopButton } from "../components/BackToTopButton";
import { LanguageProvider } from "../context/LanguageContext";

export function RootLayout() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <ScrollToTop />
        <Seo />
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
        <BackToTopButton />
      </div>
    </LanguageProvider>
  );
}
