import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import WhatsAppButton from '@/components/WhatsAppButton';
import ErrorBoundary from '@/components/ErrorBoundary';
import Home from '@/pages/Home';

// Route-level code splitting for faster initial page loads
const About = lazy(() => import('@/pages/About'));
const Products = lazy(() => import('@/pages/Products'));
const ProductCategoryPage = lazy(() => import('@/pages/ProductCategoryPage'));
const ProductDetail = lazy(() => import('@/pages/ProductDetail'));
const Departments = lazy(() => import('@/pages/Departments'));
const Brands = lazy(() => import('@/pages/Brands'));
const Services = lazy(() => import('@/pages/Services'));
const Contact = lazy(() => import('@/pages/Contact'));
const Quote = lazy(() => import('@/pages/Quote'));
const FAQ = lazy(() => import('@/pages/FAQ'));
const PrivacyPolicy = lazy(() => import('@/pages/PrivacyPolicy'));
const TermsAndConditions = lazy(() => import('@/pages/TermsAndConditions'));
const ShippingPolicy = lazy(() => import('@/pages/ShippingPolicy'));
const ReturnsAndClaims = lazy(() => import('@/pages/ReturnsAndClaims'));
const Sitemap = lazy(() => import('@/pages/Sitemap'));
const NotFound = lazy(() => import('@/pages/NotFound'));

function PageLoader() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center">
      <div className="flex items-center gap-2 text-sm font-medium text-[#5E6F7D]">
        <div className="h-5 w-5 animate-spin rounded-full border-2 border-[#123B66] border-t-transparent" />
        <span>Loading...</span>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <ErrorBoundary>
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about-us" element={<About />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:category" element={<ProductCategoryPage />} />
                <Route path="/products/:category/:product" element={<ProductDetail />} />
                <Route path="/departments" element={<Departments />} />
                <Route path="/brands" element={<Brands />} />
                <Route path="/services" element={<Services />} />
                <Route path="/faq" element={<FAQ />} />
                {/* Legacy and resource routes redirect cleanly */}
                <Route path="/resources" element={<Navigate to="/products" replace />} />
                <Route path="/resources/*" element={<Navigate to="/products" replace />} />
                <Route path="/contact-us" element={<Contact />} />
                <Route path="/request-a-quote" element={<Quote />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
                <Route path="/shipping-policy" element={<ShippingPolicy />} />
                <Route path="/returns-and-claims" element={<ReturnsAndClaims />} />
                <Route path="/sitemap" element={<Sitemap />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </ErrorBoundary>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </BrowserRouter>
  );
}
