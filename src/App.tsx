import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import WhatsAppButton from '@/components/WhatsAppButton';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Products from '@/pages/Products';
import ProductCategoryPage from '@/pages/ProductCategoryPage';
import ProductDetail from '@/pages/ProductDetail';
import Departments from '@/pages/Departments';
import Brands from '@/pages/Brands';
import Services from '@/pages/Services';
import Contact from '@/pages/Contact';
import Quote from '@/pages/Quote';
import PrivacyPolicy from '@/pages/PrivacyPolicy';
import TermsAndConditions from '@/pages/TermsAndConditions';
import ShippingPolicy from '@/pages/ShippingPolicy';
import ReturnsAndClaims from '@/pages/ReturnsAndClaims';
import Sitemap from '@/pages/Sitemap';
import NotFound from '@/pages/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:category" element={<ProductCategoryPage />} />
            <Route path="/products/:category/:product" element={<ProductDetail />} />
            <Route path="/departments" element={<Departments />} />
            <Route path="/brands" element={<Brands />} />
            <Route path="/services" element={<Services />} />
            {/* Retired resource routes redirect cleanly to products catalogue */}
            <Route path="/resources" element={<Navigate to="/products" replace />} />
            <Route path="/resources/*" element={<Navigate to="/products" replace />} />
            <Route path="/faq" element={<Navigate to="/products" replace />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/request-a-quote" element={<Quote />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="/shipping-policy" element={<ShippingPolicy />} />
            <Route path="/returns-and-claims" element={<ReturnsAndClaims />} />
            <Route path="/sitemap" element={<Sitemap />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </BrowserRouter>
  );
}
