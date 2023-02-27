import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import NavMenuTop from "./components/NavMenuTop";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import NewsPage from "./pages/NewsPage";
import NewsPageDetail from "./pages/NewsPageDetail";
import NotFoundPage from "./pages/NotFoundPage";
import GalleryPage from "./pages/GalleryPage";
import GalleryPageDetail from "./pages/GalleryPageDetail";
import ContactsPage from "./pages/ContacsPage";
import AboutPage from "./pages/AboutPage";
import SalePage from "./pages/SalePage";
import SalePageDetail from "./pages/SalePageDetail";
import ReviewsPage from "./pages/ReviewsPage";
import VacancyPage from "./pages/VacancyPage";
import VideoPage from "./pages/VideoPage";
import CertificatesPage from "./pages/CertificatesPage";
import StaffPage from "./pages/StaffPage";
import FaqPage from "./pages/FaqPage";
import ServicesPage from "./pages/ServicesPage";
import ServicesPageDetail from "./pages/ServicesPageDetail";
import CatalogPage from "./pages/CatalogPage";
import CatalogSectionPage from "./pages/CatalogSectionPage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <>
      <Header />
      <NavMenuTop />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/news" element={<NewsPage />}></Route>
        <Route path="/news/:slug" element={<NewsPageDetail />}></Route>
        <Route path="/gallery" element={<GalleryPage />}></Route>
        <Route path="/gallery/:slug" element={<GalleryPageDetail />}></Route>
        <Route path="/contacts" element={<ContactsPage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/sale" element={<SalePage />}></Route>
        <Route path="/sale/:slug" element={<SalePageDetail />}></Route>
        <Route path="/reviews" element={<ReviewsPage />}></Route>
        <Route path="/vacancy" element={<VacancyPage />}></Route>
        <Route path="/video" element={<VideoPage />}></Route>
        <Route path="/certificates" element={<CertificatesPage />}></Route>
        <Route path="/staff" element={<StaffPage />}></Route>
        <Route path="/faq" element={<FaqPage />}></Route>
        <Route path="/services" element={<ServicesPage />}></Route>
        <Route path="/services/:slug" element={<ServicesPageDetail />}></Route>
        <Route path="/catalog" element={<CatalogPage />}></Route>
        <Route path="/catalog/:slug" element={<CatalogSectionPage />}></Route>
        <Route path="/catalog/:slug/:slug" element={<ProductPage />}></Route>
        <Route path="/cart" element={<CartPage />}></Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
