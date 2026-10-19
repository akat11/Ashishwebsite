import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, Globe, ChevronDown, Stethoscope, ArrowRight } from 'lucide-react';
import { productCategories } from '@/data/categories';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
    setProductsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `text-[14px] font-medium transition-colors relative py-1 ${
      isActive
        ? 'text-[#0866F5] font-semibold after:absolute after:bottom-[-21px] after:left-0 after:right-0 after:h-[2.5px] after:bg-[#0866F5] after:rounded-full'
        : 'text-navy-700 hover:text-[#0866F5]'
    }`;

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-navy-100'
          : 'bg-white border-b border-navy-100'
      }`}
    >
      {/* Top contact strip */}
      <div className="hidden lg:block bg-[#06182c] text-white/90">
        <div className="container-x flex items-center justify-between py-1.5 text-[11px] font-normal tracking-wide">
          <div className="flex items-center gap-3">
            <a
              href="tel:+919000000000"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="h-3 w-3 text-cyan-400" />
              <span>+91 90000 00000</span>
            </a>
            <span className="text-white/20">|</span>
            <a
              href="mailto:info@vinyanaksurgicals.in"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail className="h-3 w-3 text-cyan-400" />
              <span>info@vinyanaksurgicals.in</span>
            </a>
          </div>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-white/85">
              <MapPin className="h-3 w-3 text-cyan-400" />
              <span>Kanpur, Uttar Pradesh, India</span>
            </span>
            <span className="text-white/20">|</span>
            <span className="flex items-center gap-1.5 text-white/85">
              <Globe className="h-3 w-3 text-cyan-400" />
              <span>Pan-India Enquiries Welcome</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="container-x">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#071d37] transition-all group-hover:bg-[#0a2540] shadow-sm">
              <Stethoscope className="h-5 w-5 text-[#00D5E8]" />
            </div>
            <div>
              <div className="font-display text-[19px] font-bold text-[#071d37] leading-none tracking-tight">
                Vinyanak
              </div>
              <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0866F5] leading-none mt-1">
                SURGICALS
              </div>
            </div>
          </Link>

          {/* Center navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            <NavLink to="/" className={navLinkClass} end>
              Home
            </NavLink>

            {/* Products dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <button
                className={`flex items-center gap-1 text-[14px] font-medium transition-colors py-1 ${
                  location.pathname.startsWith('/products')
                    ? 'text-[#0866F5] font-semibold after:absolute after:bottom-[-21px] after:left-0 after:right-0 after:h-[2.5px] after:bg-[#0866F5] after:rounded-full'
                    : 'text-navy-700 hover:text-[#0866F5]'
                }`}
              >
                Products
                <ChevronDown className="h-3.5 w-3.5 opacity-70" />
              </button>
              {productsOpen && (
                <div className="absolute left-0 top-full pt-3 w-[640px]">
                  <div className="rounded-xl border border-navy-100 bg-white shadow-xl p-3 grid grid-cols-2 gap-1 animate-slide-down">
                    <Link
                      to="/products"
                      className="col-span-2 mb-1 flex items-center justify-between rounded-lg bg-navy-50 px-3.5 py-2.5 text-sm font-semibold text-navy-800 hover:bg-navy-100 transition-colors"
                    >
                      View All Products
                    </Link>
                    {productCategories.map((cat) => (
                      <Link
                        key={cat.slug}
                        to={`/products/${cat.slug}`}
                        className="rounded-lg px-3 py-2 text-sm text-navy-700 hover:bg-navy-50 hover:text-[#0866F5] transition-colors"
                      >
                        {cat.shortName}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <NavLink to="/departments" className={navLinkClass}>
              Departments
            </NavLink>
            <NavLink to="/brands" className={navLinkClass}>
              Brands
            </NavLink>
            <NavLink to="/services" className={navLinkClass}>
              Services
            </NavLink>
            <NavLink to="/about-us" className={navLinkClass}>
              About
            </NavLink>
            <NavLink to="/contact-us" className={navLinkClass}>
              Contact
            </NavLink>
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <Link
              to="/request-a-quote"
              className="hidden md:inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg bg-[#0866F5] hover:bg-[#0756d1] text-white text-[13px] font-semibold shadow-sm transition-all hover:shadow-md active:scale-[0.98]"
            >
              <span>Request a Quote</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <button
              className="lg:hidden p-2 text-navy-700"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-navy-100 bg-white animate-slide-down">
          <div className="container-x py-4 space-y-1 max-h-[calc(100vh-4rem)] overflow-y-auto">
            <NavLink to="/" className="block px-3 py-2.5 text-sm font-medium text-navy-700 hover:bg-navy-50 rounded-md" end>
              Home
            </NavLink>
            <Link to="/products" className="block px-3 py-2.5 text-sm font-medium text-navy-700 hover:bg-navy-50 rounded-md">
              All Products
            </Link>
            <div className="pl-3 space-y-0.5">
              {productCategories.map((cat) => (
                <Link
                  key={cat.slug}
                  to={`/products/${cat.slug}`}
                  className="block px-3 py-2 text-sm text-navy-600 hover:bg-navy-50 rounded-md"
                >
                  {cat.shortName}
                </Link>
              ))}
            </div>
            <NavLink to="/departments" className="block px-3 py-2.5 text-sm font-medium text-navy-700 hover:bg-navy-50 rounded-md">
              Departments
            </NavLink>
            <NavLink to="/brands" className="block px-3 py-2.5 text-sm font-medium text-navy-700 hover:bg-navy-50 rounded-md">
              Brands
            </NavLink>
            <NavLink to="/services" className="block px-3 py-2.5 text-sm font-medium text-navy-700 hover:bg-navy-50 rounded-md">
              Services
            </NavLink>
            <NavLink to="/about-us" className="block px-3 py-2.5 text-sm font-medium text-navy-700 hover:bg-navy-50 rounded-md">
              About Us
            </NavLink>
            <NavLink to="/contact-us" className="block px-3 py-2.5 text-sm font-medium text-navy-700 hover:bg-navy-50 rounded-md">
              Contact Us
            </NavLink>
            <Link to="/request-a-quote" className="btn-primary w-full mt-2">
              Request a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
