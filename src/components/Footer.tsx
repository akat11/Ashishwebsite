import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowUp,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from 'lucide-react';
import VinayakLogo from '@/components/VinayakLogo';
import { businessConfig } from '@/config/business';
import { productCategories } from '@/data/categories';

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about-us' },
  { label: 'Products', to: '/products' },
  { label: 'Services', to: '/services' },
  { label: 'Departments', to: '/departments' },
  { label: 'Brands', to: '/brands' },
  { label: 'Contact Us', to: '/contact-us' },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const address = businessConfig.address.formatted;

  return (
    <footer className="bg-white text-slate-600 border-t border-slate-200 relative">
      {/* Main footer body - clean 4-column layout */}
      <div className="container-x py-10 lg:py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* 1. Company Information */}
          <div className="space-y-3.5">
            <VinayakLogo />

            <p className="text-sm leading-relaxed text-slate-600">
              Trusted supplier of orthopaedic implants, fixation systems and surgical instruments.
            </p>

            <div className="pt-1">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-[#0875D1] border border-blue-100">
                Kanpur, Uttar Pradesh &bull; Pan-India
              </span>
            </div>
          </div>

          {/* 2. Quick Links Column */}
          <div>
            <h3 className="font-display text-base font-bold text-[#062D56] tracking-tight mb-3.5">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              {quickLinks.map(({ label, to }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-slate-600 hover:text-[#0875D1] hover:translate-x-1 transition-all inline-block"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Our Products Column */}
          <div>
            <h3 className="font-display text-base font-bold text-[#062D56] tracking-tight mb-3.5">
              Our Products
            </h3>
            <ul className="space-y-2 text-sm">
              {productCategories.slice(0, 6).map((category) => (
                <li key={category.slug}>
                  <Link
                    to={`/products/${category.slug}`}
                    className="text-slate-600 hover:text-[#0875D1] hover:translate-x-1 transition-all inline-block"
                  >
                    {category.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Address Column (Bilkul Right Side me, Our Products ke baad) */}
          <div>
            <h3 className="font-display text-base font-bold text-[#062D56] tracking-tight mb-3.5">
              Address
            </h3>
            <div className="space-y-2.5 text-sm text-slate-600">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-[#0875D1] shrink-0 mt-0.5" />
                <span className="leading-snug">{address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-[#0875D1] shrink-0" />
                <a
                  href={`tel:${businessConfig.phoneRaw}`}
                  className="hover:text-[#0875D1] transition-colors font-medium"
                >
                  {businessConfig.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-[#0875D1] shrink-0" />
                <a
                  href={`mailto:${businessConfig.email}`}
                  className="hover:text-[#0875D1] transition-colors font-medium truncate"
                >
                  {businessConfig.email}
                </a>
              </div>

              {/* Social media icons inside Address column */}
              <div className="flex items-center gap-2 pt-2">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-[#0875D1] hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-4 w-4" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-[#0875D1] hover:text-white transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="h-4 w-4" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-[#0875D1] hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-[#0875D1] hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sub-footer / Legal Strip with Developer Credit vertically aligned with Address column */}
      <div className="border-t border-slate-200 bg-slate-50">
        <div className="container-x py-4 text-xs text-slate-500">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 items-center">
            <div className="lg:col-span-3">
              <p>
                &copy; {year} {businessConfig.legalName}. All rights reserved.
              </p>
            </div>
            <div>
              <p>
                Developed by{' '}
                <a
                  href="https://thesoftwaregarage.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#0875D1] hover:text-[#062D56] transition-colors underline-offset-2 hover:underline"
                >
                  The Software Garage
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Scroll to Top Button */}
      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-[#0875D1] text-white shadow-lg transition-all duration-300 hover:bg-[#12C8E8] hover:text-[#062D56] hover:scale-110 focus:outline-hidden"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </footer>
  );
}
