import { Outlet } from "react-router";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ScrollToTop } from "../components/ScrollToTop";
import { LanguageProvider } from "../context/LanguageContext";

export function RootLayout() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <ScrollToTop />
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
