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

const serviceLinks = [
  { label: 'Custom Implant Design', to: '/services' },
  { label: 'OEM & Institutional Supply', to: '/services' },
  { label: 'Surgical Instrumentation', to: '/services' },
  { label: 'Biomechanical & Quality Testing', to: '/services' },
  { label: 'Hospital Tender Support', to: '/request-a-quote' },
  { label: 'Surgeon Training & Education', to: '/about-us' },
];

const legalLinks = [
  { label: 'Privacy Policy', to: '/privacy-policy' },
  { label: 'Terms of Service', to: '/terms-and-conditions' },
  { label: 'Shipping Policy', to: '/shipping-policy' },
  { label: 'Returns & Claims', to: '/returns-and-claims' },
  { label: 'Sitemap', to: '/sitemap' },
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

  const address = [
    businessConfig.address.line1,
    businessConfig.address.city,
    businessConfig.address.state,
    businessConfig.address.country,
  ]
    .filter(Boolean)
    .join(', ');

  return (
    <footer className="bg-white text-slate-600 border-t border-slate-200 relative">
      {/* Main footer body */}
      <div className="container-x py-14 lg:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {/* Brand Info Column */}
          <div className="space-y-4">
            <VinayakLogo />

            <p className="text-sm leading-relaxed text-slate-600 pt-2">
              Pioneering orthopaedic fixation solutions with precision engineering, advanced biomaterials, and unwavering commitment to clinical excellence.
            </p>

            {/* Social media links */}
            <div className="flex items-center gap-2.5 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-[#0875D1] hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-[#0875D1] hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-[#0875D1] hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-[#0875D1] hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>

            <div className="pt-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-[#0875D1] border border-blue-100">
                Kanpur, Uttar Pradesh &bull; Pan-India
              </span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="font-display text-base font-bold text-[#062D56] tracking-tight mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
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

          {/* Our Products Column */}
          <div>
            <h3 className="font-display text-base font-bold text-[#062D56] tracking-tight mb-4">
              Our Products
            </h3>
            <ul className="space-y-2.5 text-sm">
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
              <li>
                <Link
                  to="/products"
                  className="font-bold text-[#0875D1] hover:text-[#12C8E8] transition-colors inline-block mt-1"
                >
                  View All Products &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Services / Contact Column */}
          <div>
            <h3 className="font-display text-base font-bold text-[#062D56] tracking-tight mb-4">
              Our Services
            </h3>
            <ul className="space-y-2.5 text-sm mb-6">
              {serviceLinks.slice(0, 4).map(({ label, to }) => (
                <li key={label}>
                  <Link
                    to={to}
                    className="text-slate-600 hover:text-[#0875D1] hover:translate-x-1 transition-all inline-block"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="font-display text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Contact Us
            </h4>
            <div className="space-y-2 text-xs text-slate-600">
              <div className="flex items-start gap-2">
                <MapPin className="h-3.5 w-3.5 text-[#0875D1] shrink-0 mt-0.5" />
                <span className="leading-snug">{address}</span>
              </div>
              <a
                href={`tel:${businessConfig.phoneRaw}`}
                className="flex items-center gap-2 hover:text-[#0875D1] transition-colors"
              >
                <Phone className="h-3.5 w-3.5 text-[#0875D1] shrink-0" />
                <span>{businessConfig.phone}</span>
              </a>
              <a
                href={`mailto:${businessConfig.email}`}
                className="flex items-center gap-2 hover:text-[#0875D1] transition-colors"
              >
                <Mail className="h-3.5 w-3.5 text-[#0875D1] shrink-0" />
                <span className="truncate">{businessConfig.email}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Sub-footer / Legal Strip */}
      <div className="border-t border-slate-200 bg-slate-50">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-5 text-xs text-slate-500 sm:flex-row">
          <p>
            &copy; {year} {businessConfig.legalName}. All rights reserved.
          </p>
          <nav aria-label="Legal links" className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {legalLinks.map(({ label, to }, index) => (
              <span key={to} className="inline-flex items-center gap-3 sm:gap-4">
                <Link to={to} className="hover:text-[#0875D1] transition-colors">
                  {label}
                </Link>
                {index < legalLinks.length - 1 && <span className="text-slate-300" aria-hidden="true">&bull;</span>}
              </span>
            ))}
          </nav>
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
