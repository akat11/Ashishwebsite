import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, Globe, ChevronDown, Stethoscope, ArrowRight } from 'lucide-react';
import { productCategories } from '@/data/categories';
import { businessConfig } from '@/config/business';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
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
    `text-[14.5px] font-medium transition-colors relative py-1.5 ${
      isActive
        ? 'text-[#123B66] font-semibold after:absolute after:bottom-[-20px] after:left-0 after:right-0 after:h-[2.5px] after:bg-[#159A9C] after:rounded-full'
        : 'text-[#172B3A] hover:text-[#123B66]'
    }`;

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/98 backdrop-blur-md shadow-sm border-b border-[#E0E8EF]'
          : 'bg-white border-b border-[#E0E8EF]'
      }`}
    >
      {/* Top contact strip */}
      <div className="hidden lg:block bg-[#0c2642] text-white/90">
        <div className="container-x flex items-center justify-between py-2 text-xs font-normal tracking-wide">
          <div className="flex items-center gap-4">
            <a
              href={`tel:${businessConfig.phoneRaw}`}
              className="flex items-center gap-1.5 hover:text-[#159A9C] transition-colors"
            >
              <Phone className="h-3.5 w-3.5 text-[#159A9C]" />
              <span>{businessConfig.phone}</span>
            </a>
            <span className="text-white/20">|</span>
            <a
              href={`mailto:${businessConfig.email}`}
              className="flex items-center gap-1.5 hover:text-[#159A9C] transition-colors"
            >
              <Mail className="h-3.5 w-3.5 text-[#159A9C]" />
              <span>{businessConfig.email}</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-white/80">
              <MapPin className="h-3.5 w-3.5 text-[#159A9C]" />
              <span>{businessConfig.address.city}, {businessConfig.address.state}, India</span>
            </span>
            <span className="text-white/20">|</span>
            <span className="flex items-center gap-1.5 text-white/80">
              <Globe className="h-3.5 w-3.5 text-[#159A9C]" />
              <span>Pan-India Supply &amp; Enquiries</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container-x">
        <div className="flex h-18 py-2.5 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group" aria-label="Vinayak Surgicals Home">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#123B66] transition-all group-hover:bg-[#0c2642] shadow-sm">
              <Stethoscope className="h-6 w-6 text-[#159A9C]" />
            </div>
            <div>
              <div className="font-display text-[22px] font-bold text-[#123B66] leading-none tracking-tight">
                Vinayak
              </div>
              <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#159A9C] leading-none mt-1">
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
                type="button"
                className={`flex items-center gap-1 text-[14.5px] font-medium transition-colors py-1.5 ${
                  location.pathname.startsWith('/products')
                    ? 'text-[#123B66] font-semibold after:absolute after:bottom-[-20px] after:left-0 after:right-0 after:h-[2.5px] after:bg-[#159A9C] after:rounded-full'
                    : 'text-[#172B3A] hover:text-[#123B66]'
                }`}
                aria-expanded={productsOpen}
              >
                Products
                <ChevronDown className="h-4 w-4 opacity-70 transition-transform duration-200" />
              </button>

              {productsOpen && (
                <div className="absolute left-0 top-full pt-3 w-[660px]">
                  <div className="rounded-xl border border-[#E0E8EF] bg-white shadow-xl p-3.5 grid grid-cols-2 gap-1.5 animate-slide-down">
                    <Link
                      to="/products"
                      className="col-span-2 mb-1 flex items-center justify-between rounded-lg bg-[#F4F8FB] px-4 py-2.5 text-sm font-semibold text-[#123B66] hover:bg-[#E8F1F8] transition-colors"
                    >
                      <span>View Complete Catalogue</span>
                      <ArrowRight className="h-4 w-4 text-[#159A9C]" />
                    </Link>
                    {productCategories.map((cat) => (
                      <Link
                        key={cat.slug}
                        to={`/products/${cat.slug}`}
                        className="rounded-lg px-3.5 py-2 text-sm text-[#172B3A] hover:bg-[#F4F8FB] hover:text-[#123B66] font-medium transition-colors"
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
              About Us
            </NavLink>
            <NavLink to="/contact-us" className={navLinkClass}>
              Contact Us
            </NavLink>
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <Link
              to="/request-a-quote"
              className="hidden md:inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg bg-[#123B66] hover:bg-[#0c2642] text-white text-sm font-semibold shadow-sm transition-all hover:shadow-md active:scale-[0.98]"
            >
              <span>Request a Quote</span>
              <ArrowRight className="h-4 w-4 text-[#159A9C]" />
            </Link>
            <button
              type="button"
              className="lg:hidden p-2.5 rounded-lg text-[#172B3A] hover:bg-[#F4F8FB] transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile nav drawer */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-[#E0E8EF] bg-white animate-slide-down shadow-lg">
          <div className="container-x py-4 space-y-1.5 max-h-[calc(100vh-5rem)] overflow-y-auto">
            <NavLink
              to="/"
              className="block px-3.5 py-2.5 text-base font-medium text-[#172B3A] hover:bg-[#F4F8FB] rounded-lg"
              end
            >
              Home
            </NavLink>

            <div>
              <button
                type="button"
                onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                className="w-full flex items-center justify-between px-3.5 py-2.5 text-base font-medium text-[#172B3A] hover:bg-[#F4F8FB] rounded-lg"
              >
                <span>Products</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${mobileProductsOpen ? 'rotate-180 text-[#159A9C]' : ''}`} />
              </button>

              {mobileProductsOpen && (
                <div className="pl-4 pr-1 py-1 space-y-1 bg-[#F4F8FB] rounded-lg my-1">
                  <Link
                    to="/products"
                    className="block px-3 py-2 text-sm font-semibold text-[#123B66] hover:underline"
                  >
                    All Products Overview →
                  </Link>
                  {productCategories.map((cat) => (
                    <Link
                      key={cat.slug}
                      to={`/products/${cat.slug}`}
                      className="block px-3 py-2 text-sm text-[#5E6F7D] hover:text-[#123B66] rounded-md"
                    >
                      {cat.shortName}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <NavLink
              to="/departments"
              className="block px-3.5 py-2.5 text-base font-medium text-[#172B3A] hover:bg-[#F4F8FB] rounded-lg"
            >
              Departments
            </NavLink>
            <NavLink
              to="/brands"
              className="block px-3.5 py-2.5 text-base font-medium text-[#172B3A] hover:bg-[#F4F8FB] rounded-lg"
            >
              Brands
            </NavLink>
            <NavLink
              to="/services"
              className="block px-3.5 py-2.5 text-base font-medium text-[#172B3A] hover:bg-[#F4F8FB] rounded-lg"
            >
              Services
            </NavLink>
            <NavLink
              to="/about-us"
              className="block px-3.5 py-2.5 text-base font-medium text-[#172B3A] hover:bg-[#F4F8FB] rounded-lg"
            >
              About Us
            </NavLink>
            <NavLink
              to="/contact-us"
              className="block px-3.5 py-2.5 text-base font-medium text-[#172B3A] hover:bg-[#F4F8FB] rounded-lg"
            >
              Contact Us
            </NavLink>

            <div className="pt-2">
              <Link to="/request-a-quote" className="btn-primary w-full">
                <span>Request a Quote</span>
                <ArrowRight className="h-4 w-4 text-[#159A9C]" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
