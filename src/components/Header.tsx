import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import {
  Menu,
  X,
  Phone,
  Mail,
  ShieldCheck,
  Search,
  ChevronDown,
  ArrowRight,
} from 'lucide-react';
import VinayakLogo from '@/components/VinayakLogo';
import { productCategories } from '@/data/categories';
import { businessConfig } from '@/config/business';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setMobileOpen(false);
    setProductsOpen(false);
    setSearchOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
    }
  };

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `text-[14.5px] font-medium transition-colors py-1.5 ${
      isActive
        ? 'text-[#0875D1] font-semibold'
        : 'text-[#062D56] hover:text-[#0875D1]'
    }`;

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white transition-shadow duration-200 ${
        scrolled
          ? 'shadow-md border-b border-[#E2E8F0]'
          : 'border-b border-[#E2E8F0]'
      }`}
    >
      {/* Top contact strip - Dark Navy */}
      <div className="bg-[#062D56] text-white/90">
        <div className="container-x flex items-center justify-between py-2 text-xs font-normal tracking-wide">
          <div className="flex items-center gap-2 text-white/90">
            <ShieldCheck className="h-3.5 w-3.5 text-[#12C8E8]" />
            <span className="font-medium text-[11.5px] sm:text-xs">
              Trusted Orthopaedic Partner Across India
            </span>
          </div>
          <div className="flex items-center gap-4 text-[11.5px] sm:text-xs">
            <a
              href={`tel:${businessConfig.phoneRaw}`}
              className="flex items-center gap-1.5 hover:text-[#12C8E8] transition-colors"
            >
              <Phone className="h-3.5 w-3.5 text-[#12C8E8]" />
              <span>{businessConfig.phone}</span>
            </a>
            <span className="text-white/20 hidden sm:inline">|</span>
            <a
              href={`mailto:${businessConfig.email}`}
              className="hidden sm:flex items-center gap-1.5 hover:text-[#12C8E8] transition-colors"
            >
              <Mail className="h-3.5 w-3.5 text-[#12C8E8]" />
              <span>{businessConfig.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation - Solid Opaque White */}
      <div className="w-full bg-white">
        <div className="container-x">
          <div className="flex h-18 py-2.5 items-center justify-between">
            {/* Logo */}
            <VinayakLogo />

            {/* Center navigation */}
            <nav className="hidden lg:flex items-center gap-7">
              <NavLink to="/" className={navLinkClass} end>
                Home
              </NavLink>
              <NavLink to="/about-us" className={navLinkClass}>
                About
              </NavLink>

              {/* Products dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setProductsOpen(true)}
                onMouseLeave={() => setProductsOpen(false)}
              >
                <button
                  type="button"
                  className={`flex items-center gap-1 text-[14.5px] font-medium transition-colors py-1.5 cursor-pointer ${
                    location.pathname.startsWith('/products')
                      ? 'text-[#0875D1] font-semibold'
                      : 'text-[#062D56] hover:text-[#0875D1]'
                  }`}
                  aria-expanded={productsOpen}
                  onClick={() => navigate('/products')}
                >
                  <span>Products</span>
                  <ChevronDown className="h-4 w-4 text-[#062D56] opacity-80 transition-transform duration-200" />
                </button>

                {productsOpen && (
                  <div className="absolute left-0 top-full pt-3 w-[660px] z-50">
                    <div className="rounded-2xl border border-[#E2E8F0] bg-white shadow-xl p-4 grid grid-cols-2 gap-2 animate-slide-down">
                      <Link
                        to="/products"
                        className="col-span-2 mb-1 flex items-center justify-between rounded-xl bg-[#F8FAFC] px-4 py-2.5 text-sm font-semibold text-[#062D56] hover:bg-[#EBF0F5] transition-colors"
                      >
                        <span>View Complete Orthopaedic Catalogue</span>
                        <ArrowRight className="h-4 w-4 text-[#0875D1]" />
                      </Link>
                      {productCategories.map((cat) => (
                        <Link
                          key={cat.slug}
                          to={`/products/${cat.slug}`}
                          className="rounded-lg px-3.5 py-2 text-sm text-[#062D56] hover:bg-[#F8FAFC] hover:text-[#0875D1] font-medium transition-colors"
                        >
                          {cat.shortName}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <NavLink to="/departments" className={navLinkClass}>
                Solutions
              </NavLink>
              <NavLink to="/services" className={navLinkClass}>
                Services
              </NavLink>
              <NavLink to="/brands" className={navLinkClass}>
                Brands
              </NavLink>
              <NavLink to="/contact-us" className={navLinkClass}>
                Contact
              </NavLink>
            </nav>

            {/* Right action controls */}
            <div className="flex items-center gap-3">
              {/* Search trigger */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setSearchOpen(!searchOpen)}
                  className="p-2 text-[#062D56] hover:text-[#0875D1] hover:bg-[#F8FAFC] rounded-lg transition-colors cursor-pointer"
                  aria-label="Search catalogue"
                >
                  <Search className="h-5 w-5" />
                </button>

                {searchOpen && (
                  <form
                    onSubmit={handleSearchSubmit}
                    className="absolute right-0 top-full mt-2 w-72 sm:w-80 rounded-xl bg-white border border-[#E2E8F0] shadow-xl p-2 z-50 flex items-center gap-2 animate-slide-down"
                  >
                    <Search className="h-4 w-4 text-slate-400 ml-2 shrink-0" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search implant or code..."
                      className="w-full text-xs sm:text-sm px-2 py-1.5 focus:outline-hidden text-slate-700 bg-white"
                      autoFocus
                    />
                    <button
                      type="submit"
                      className="btn-blue !px-3 !py-1 !text-xs !min-h-0 shrink-0 rounded-md cursor-pointer"
                    >
                      Search
                    </button>
                  </form>
                )}
              </div>

              {/* Request a Quote Button */}
              <Link
                to="/request-a-quote"
                className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg bg-[#0875D1] hover:bg-[#0668B8] text-white text-sm font-semibold shadow-xs transition-all hover:shadow-md active:scale-[0.98]"
              >
                <span>Request a Quote</span>
                <ArrowRight className="h-4 w-4" />
              </Link>

              {/* Mobile menu button */}
              <button
                type="button"
                className="lg:hidden p-2 rounded-lg text-[#062D56] hover:bg-[#F8FAFC] transition-colors cursor-pointer"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile nav drawer */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-[#E2E8F0] bg-white animate-slide-down shadow-lg">
          <div className="container-x py-4 space-y-1.5 max-h-[calc(100vh-5rem)] overflow-y-auto">
            <NavLink
              to="/"
              className="block px-3.5 py-2.5 text-base font-medium text-[#062D56] hover:bg-[#F8FAFC] rounded-lg"
              end
            >
              Home
            </NavLink>
            <NavLink
              to="/about-us"
              className="block px-3.5 py-2.5 text-base font-medium text-[#062D56] hover:bg-[#F8FAFC] rounded-lg"
            >
              About
            </NavLink>

            <div>
              <button
                type="button"
                onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                className="w-full flex items-center justify-between px-3.5 py-2.5 text-base font-medium text-[#062D56] hover:bg-[#F8FAFC] rounded-lg"
              >
                <span>Products</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${mobileProductsOpen ? 'rotate-180 text-[#0875D1]' : ''}`} />
              </button>

              {mobileProductsOpen && (
                <div className="pl-4 pr-1 py-1 space-y-1 bg-[#F8FAFC] rounded-lg my-1">
                  <Link
                    to="/products"
                    className="block px-3 py-2 text-sm font-semibold text-[#0875D1] hover:underline"
                  >
                    All Products Overview →
                  </Link>
                  {productCategories.map((cat) => (
                    <Link
                      key={cat.slug}
                      to={`/products/${cat.slug}`}
                      className="block px-3 py-2 text-sm text-[#5E6F7D] hover:text-[#0875D1] rounded-md"
                    >
                      {cat.shortName}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <NavLink
              to="/departments"
              className="block px-3.5 py-2.5 text-base font-medium text-[#062D56] hover:bg-[#F8FAFC] rounded-lg"
            >
              Solutions
            </NavLink>
            <NavLink
              to="/services"
              className="block px-3.5 py-2.5 text-base font-medium text-[#062D56] hover:bg-[#F8FAFC] rounded-lg"
            >
              Services
            </NavLink>
            <NavLink
              to="/brands"
              className="block px-3.5 py-2.5 text-base font-medium text-[#062D56] hover:bg-[#F8FAFC] rounded-lg"
            >
              Brands
            </NavLink>
            <NavLink
              to="/contact-us"
              className="block px-3.5 py-2.5 text-base font-medium text-[#062D56] hover:bg-[#F8FAFC] rounded-lg"
            >
              Contact
            </NavLink>

            <div className="pt-2">
              <Link to="/request-a-quote" className="btn-blue w-full">
                <span>Request a Quote</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
