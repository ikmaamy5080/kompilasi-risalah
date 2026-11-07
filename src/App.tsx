import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { HomePage } from "./pages/HomePage";
import { KategoriPage } from "./pages/KategoriPage";
import { CategoryPage } from "./pages/CategoryPage";
import { AllResourcesPage } from "./pages/AllResourcesPage";
import { SearchPage } from "./pages/SearchPage";
import { RisalahDetailPage } from "./pages/RisalahDetailPage";
import { TentangPage } from "./pages/TentangPage";
import { HubungiPage } from "./pages/HubungiPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { LanguageProvider } from "./i18n/LanguageContext";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
      <ScrollToTop />
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/kategori" element={<KategoriPage />} />
            <Route path="/kategori/:id" element={<CategoryPage />} />
            <Route path="/risalah" element={<AllResourcesPage />} />
            <Route path="/risalah/:slug" element={<RisalahDetailPage />} />
            <Route path="/cari" element={<SearchPage />} />
            <Route path="/tentang" element={<TentangPage />} />
            <Route path="/hubungi" element={<HubungiPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
      </LanguageProvider>
    </BrowserRouter>
  );
}
