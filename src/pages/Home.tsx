import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  FileText,
  Gem,
  Globe,
  Globe2,
  GraduationCap,
  Headphones,
  Layers,
  Settings,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Truck,
  Users,
  Wrench,
} from 'lucide-react';
import VideoHero from '@/components/VideoHero';
import ProductCard from '@/components/ProductCard';
import CategoryCard from '@/components/CategoryCard';
import StatisticsStrip from '@/components/StatisticsStrip';
import BottomCTA from '@/components/BottomCTA';
import SEO from '@/components/SEO';
import { productCategories } from '@/data/categories';
import { products } from '@/data/products';
import type { ProductCategory } from '@/data/categories';

// Floating hero benefits matching reference screenshot
const heroBenefits = [
  {
    icon: Gem,
    title: 'Trusted Quality',
    description: 'High-grade materials',
  },
  {
    icon: Settings,
    title: 'Comprehensive Range',
    description: 'Complete fixation solutions',
  },
  {
    icon: Users,
    title: 'Expert Support',
    description: 'Technical assistance',
  },
  {
    icon: Globe,
    title: 'Pan India Supply',
    description: 'Reliable distribution',
  },
];

// Why choose us cards matching reference screenshot
const whyChooseCards = [
  {
    icon: ShieldCheck,
    title: 'Quality Assurance',
    description: 'High-grade materials and strict quality control standards.',
  },
  {
    icon: Layers,
    title: 'Wide Product Range',
    description: 'Complete solutions for trauma, spine and reconstruction.',
  },
  {
    icon: Headphones,
    title: 'Technical Support',
    description: 'Expert guidance and assistance for product usage.',
  },
  {
    icon: Truck,
    title: 'Reliable Supply',
    description: 'Timely delivery and consistent availability across India.',
  },
];

// Services / Expertise grid (3x2) matching reference screenshot
const expertiseServices = [
  {
    icon: Sparkles,
    title: 'Product Recommendation',
    description: 'Expert guidance for the right implants and fixation systems.',
    link: '/services',
  },
  {
    icon: Wrench,
    title: 'Surgical Instrument Set',
    description: 'Complete instrument sets for various procedures.',
    link: '/services',
  },
  {
    icon: Settings,
    title: 'Customized Solutions',
    description: 'Customized implants and systems as per surgical requirements.',
    link: '/services',
  },
  {
    icon: GraduationCap,
    title: 'Training & Workshops',
    description: 'Hands-on training and technical support for surgeons.',
    link: '/about-us',
  },
  {
    icon: Headphones,
    title: 'After Sales Support',
    description: 'Dedicated support for product usage and maintenance.',
    link: '/contact-us',
  },
  {
    icon: Globe2,
    title: 'Pan India Distribution',
    description: 'Reliable and timely delivery across India.',
    link: '/services',
  },
];

// Industries served matching reference screenshot
const industries = [
  {
    icon: Building2,
    title: 'Multi-Specialty Hospitals',
    description: 'Primary, secondary, and tertiary hospitals demanding certified, reliable trauma solutions.',
  },
  {
    icon: Stethoscope,
    title: 'Orthopaedic Clinics',
    description: 'Specialist bone & joint practices requiring precision fixator and screw inventory.',
  },
  {
    icon: ShieldCheck,
    title: 'Trauma & Emergency Centers',
    description: 'High-acuity emergency rooms requiring immediate access to versatile locking plates.',
  },
  {
    icon: Globe2,
    title: 'Medical Distributors',
    description: 'Regional and national healthcare distributors seeking dependable manufacturer partnerships.',
  },
  {
    icon: FileText,
    title: 'Institutional Supply & Tenders',
    description: 'Government medical colleges, defense hospitals, and public health procurement authorities.',
  },
];

export default function Home() {
  const featuredProducts = products.filter((product) => product.featured && product.category !== 'nailing-systems').slice(0, 8);
  const featuredNailingProducts = products.filter((product) => product.category === 'nailing-systems' && product.featured).slice(0, 8);
  const homeCategories = [
    ...productCategories.slice(0, 7),
    productCategories.find((category) => category.slug === 'locking-screws-accessories'),
  ].filter((category): category is ProductCategory => Boolean(category));

  return (
    <>
      <SEO
        title="Vinayak Orthopaedic Solutions — Precision Implants & Complete Fixation Systems"
        description="Pioneering orthopaedic fixation solutions with precision engineering, advanced biomaterials, and unwavering commitment to clinical excellence. Supplying locking plates, external fixators, and screws across India."
        canonical="https://vinyanaksurgicals.com/"
        keywords="orthopedic locking plates, external fixator systems, ilizarov rings, distal radius plates, proximal tibia locking plate, femur locking plates, orthopedic screws, trauma implants, Kanpur, Uttar Pradesh, India, Vinayak Surgicals"
        image="/images/categories/distal-radius-locking-plates.jpg"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'Vinayak Orthopaedic Solutions',
          url: 'https://vinyanaksurgicals.com',
          potentialAction: {
            '@type': 'SearchAction',
            target: 'https://vinyanaksurgicals.com/products?q={search_term_string}',
            'query-input': 'required name=search_term_string',
          },
        }}
      />

      {/* Hero Section */}
      <VideoHero />

      {/* Floating Benefits Strip */}
      <section className="relative z-20 -mt-10 sm:-mt-14 mb-8">
        <div className="container-x">
          <div className="rounded-2xl bg-white py-4 sm:py-5 px-5 sm:px-8 shadow-md border border-slate-100/90">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-0 lg:divide-x lg:divide-slate-200/80">
              {heroBenefits.map(({ icon: Icon, title, description }, idx) => (
                <div
                  key={title}
                  className={`flex items-center gap-3 sm:gap-3.5 ${
                    idx === 0
                      ? 'lg:pr-6'
                      : idx === heroBenefits.length - 1
                        ? 'lg:pl-6'
                        : 'lg:px-6'
                  }`}
                >
                  <Icon className="h-7 w-7 sm:h-[30px] sm:w-[30px] shrink-0 text-[#0875D1]" strokeWidth={2} />
                  <div>
                    <h3 className="font-display text-sm sm:text-[15px] font-bold text-[#062D56] leading-tight">
                      {title}
                    </h3>
                    <p className="mt-0.5 text-[11.5px] sm:text-xs text-[#7E8B9B] leading-tight">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product Range Section */}
      <section className="bg-[#F8FAFC] py-16 sm:py-20 border-y border-slate-200/60">
        <div className="container-x">
          <div className="mb-10 sm:mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs sm:text-[13px] font-extrabold uppercase tracking-[0.18em] text-[#0fb2ce]">
                OUR PRODUCT RANGE
              </span>
              <h2 className="mt-2 font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#062D56] tracking-tight">
                Explore Our Product Range
              </h2>
              <p className="mt-2.5 max-w-2xl text-sm sm:text-base text-slate-600 leading-relaxed">
                A comprehensive range of orthopaedic implants and fixation systems designed for precision, durability and better clinical outcomes.
              </p>
            </div>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 rounded-lg border border-[#0875D1] bg-white px-5 py-2.5 text-sm font-bold text-[#0875D1] shadow-xs transition-all hover:bg-[#0875D1] hover:text-white shrink-0"
            >
              <span>View All Products</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {homeCategories.map((category) => (
              <CategoryCard key={category.slug} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container-x">
          <div className="mb-10 sm:mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs sm:text-[13px] font-extrabold uppercase tracking-[0.18em] text-[#0fb2ce]">
                FEATURED PRODUCTS
              </span>
              <h2 className="mt-2 font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#062D56] tracking-tight">
                Leading Orthopaedic Surgical Solutions
              </h2>
              <p className="mt-2.5 max-w-2xl text-sm sm:text-base text-slate-600 leading-relaxed">
                Our most trusted and widely used products by orthopaedic professionals.
              </p>
            </div>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 rounded-lg border border-[#0875D1] bg-white px-5 py-2.5 text-sm font-bold text-[#0875D1] shadow-xs transition-all hover:bg-[#0875D1] hover:text-white shrink-0"
            >
              <span>View All Featured</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Intramedullary Nailing Solutions Section */}
      <section className="bg-[#F8FAFC] py-16 sm:py-20 border-t border-slate-200/60">
        <div className="container-x">
          <div className="mb-10 sm:mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs sm:text-[13px] font-extrabold uppercase tracking-[0.18em] text-[#0fb2ce]">
                NAILING SYSTEM
              </span>
              <h2 className="mt-2 font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#062D56] tracking-tight">
                Intramedullary Nailing Solutions
              </h2>
              <p className="mt-2.5 max-w-2xl text-sm sm:text-base text-slate-600 leading-relaxed">
                Explore our range of tibia, femur, humerus and specialised intramedullary nailing systems, with product options and specifications available from the catalogue.
              </p>
            </div>
            <Link
              to="/products/nailing-systems"
              className="inline-flex items-center gap-2 rounded-lg border border-[#0875D1] bg-white px-5 py-2.5 text-sm font-bold text-[#0875D1] shadow-xs transition-all hover:bg-[#0875D1] hover:text-white shrink-0"
            >
              <span>View All Nailing Products</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {featuredNailingProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* About Vinayak Section */}
      <section className="bg-[#062D56] py-18 sm:py-24 text-white relative isolate overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 -right-40 h-96 w-96 rounded-full bg-[#0875D1]/15 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-[#12C8E8]/10 blur-3xl"
        />

        <div className="container-x relative z-10">
          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
            <div>
              <span className="section-eyebrow text-[#12C8E8]">
                ABOUT VINAYAK
              </span>
              <h2 className="mt-3 font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight">
                Built for Surgical Excellence &amp; Reliable Healthcare Supply
              </h2>
              <p className="mt-3.5 text-base sm:text-lg font-semibold text-[#12C8E8]">
                Kanpur-Based Hub &bull; Pan-India Healthcare Distribution
              </p>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-300">
                Vinayak Orthopaedic Solutions is a trusted supplier of high-quality orthopaedic implants, locking compression plate systems, modular external fixators, and specialised surgical instruments. We connect healthcare professionals, hospitals, and medical distributors with dependable orthopaedic solutions designed to support precision, stability, and effective patient care.
              </p>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-300">
                Our focus is on offering a comprehensive product range, sourcing products from reliable manufacturers, and delivering responsive service, technical product guidance, and dependable supply support. With a commitment to quality, product reliability, and customer satisfaction, we help healthcare institutions access the orthopaedic solutions they need with confidence.
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-sm font-medium text-slate-200">
                {[
                  'Implant-Grade Titanium & Stainless Steel 316L',
                  '100% Dimensional Accuracy & Tolerances',
                  'Full Traceability & Material Test Certificates',
                  'Rapid Supply Chain & Hospital Tender Fulfillment',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-[#12C8E8] mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/about-us" className="btn-cyan">
                  <span>Learn More About Us</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/request-a-quote"
                  className="btn-pill !border-white/30 !bg-white/10 !text-white hover:!bg-white hover:!text-[#062D56]"
                >
                  <span>Request a Quote</span>
                </Link>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-white/20 shadow-2xl relative">
              <img
                src="/images/business-overview-surgery.png"
                alt="Surgical team operating with precision orthopedic instruments in an operating theatre"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#062D56]/60 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Bottom Statistics Strip */}
          <StatisticsStrip />
        </div>
      </section>

      {/* Unified Background Container with Decorative Flowing Waves for Why Choose Vinayak, Our Expertise, and Industries We Serve */}
      <div className="relative overflow-hidden bg-gradient-to-b from-[#F5FAFD] via-[#EDF5FA] to-[#F8FAFC] py-16 sm:py-24">
        {/* Decorative background curves */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
          {/* Left Flowing Curves */}
          <svg
            className="absolute -top-10 -left-16 w-[420px] sm:w-[620px] lg:w-[780px] h-[1000px] opacity-40"
            viewBox="0 0 780 1000"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M-60 60 C180 140 320 300 250 500 C180 700 420 840 580 880"
              stroke="url(#leftWave1)"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path
              d="M-90 140 C150 220 280 370 210 570 C140 760 380 900 520 950"
              stroke="url(#leftWave2)"
              strokeWidth="1.8"
              strokeDasharray="6 6"
              strokeLinecap="round"
            />
            <path
              d="M-40 220 C210 290 350 450 290 640 C230 830 460 930 620 970"
              stroke="url(#leftWave1)"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="leftWave1" x1="0" y1="0" x2="650" y2="1000" gradientUnits="userSpaceOnUse">
                <stop stopColor="#0875D1" stopOpacity="0.75" />
                <stop offset="0.5" stopColor="#00A3C4" stopOpacity="0.5" />
                <stop offset="1" stopColor="#38BDF8" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="leftWave2" x1="0" y1="0" x2="550" y2="1000" gradientUnits="userSpaceOnUse">
                <stop stopColor="#00A3C4" stopOpacity="0.65" />
                <stop offset="1" stopColor="#93C5FD" stopOpacity="0.05" />
              </linearGradient>
            </defs>
          </svg>

          {/* Right Flowing Curves */}
          <svg
            className="absolute top-8 -right-20 w-[420px] sm:w-[620px] lg:w-[780px] h-[1050px] opacity-40"
            viewBox="0 0 780 1050"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M840 70 C580 150 440 340 510 530 C580 720 370 870 200 920"
              stroke="url(#rightWave1)"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path
              d="M870 150 C600 230 470 410 540 600 C610 780 400 920 250 970"
              stroke="url(#rightWave2)"
              strokeWidth="1.8"
              strokeDasharray="6 6"
              strokeLinecap="round"
            />
            <path
              d="M820 240 C550 310 410 490 480 680 C550 860 350 960 170 1010"
              stroke="url(#rightWave1)"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient id="rightWave1" x1="840" y1="0" x2="180" y2="1050" gradientUnits="userSpaceOnUse">
                <stop stopColor="#0875D1" stopOpacity="0.75" />
                <stop offset="0.5" stopColor="#00A3C4" stopOpacity="0.5" />
                <stop offset="1" stopColor="#38BDF8" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="rightWave2" x1="840" y1="0" x2="220" y2="1050" gradientUnits="userSpaceOnUse">
                <stop stopColor="#00A3C4" stopOpacity="0.65" />
                <stop offset="1" stopColor="#93C5FD" stopOpacity="0.05" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="container-x relative z-10 space-y-20 sm:space-y-24">
          {/* 1. Why Choose Vinayak Section */}
          <section>
            <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
              <span className="text-xs font-bold tracking-widest text-[#00A3C4] uppercase block text-center mb-2">
                WHY CHOOSE VINYANAK
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#062D56] tracking-tight font-display">
                Your Trusted Orthopaedic Partner
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-500 leading-relaxed">
                We combine quality products, expert support and reliable supply to meet the evolving needs of healthcare professionals.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyChooseCards.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="rounded-2xl p-6 bg-white border border-[#DCE8F2] shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E6F8FB] border border-[#BCEEF5] text-[#0875D1] mb-5 group-hover:bg-[#0875D1] group-hover:text-white group-hover:border-[#0875D1] transition-colors">
                      <Icon className="h-6 w-6 stroke-[1.8]" />
                    </div>
                    <h3 className="font-display text-base sm:text-lg font-bold text-[#062D56] mb-2 leading-snug">
                      {title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 2. Our Expertise Section */}
          <section>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-12">
              <div className="max-w-2xl">
                <span className="text-xs font-bold tracking-widest text-[#00A3C4] uppercase block mb-2">
                  OUR EXPERTISE
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#062D56] tracking-tight font-display">
                  Exceptional in the Service
                </h2>
                <p className="mt-2 text-sm sm:text-base text-slate-500 leading-relaxed">
                  We provide end-to-end support to ensure the best solutions for orthopaedic needs.
                </p>
              </div>
              <div className="shrink-0">
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 rounded-lg border border-[#0875D1] px-4 py-2 text-xs sm:text-sm font-semibold text-[#0875D1] hover:bg-[#0875D1] hover:text-white transition-colors duration-200 shadow-xs"
                >
                  <span>View All Services</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {expertiseServices.map(({ icon: Icon, title, description, link }) => (
                <Link
                  key={title}
                  to={link}
                  className="group rounded-2xl bg-white p-5 border border-[#DCE8F2] shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center justify-between gap-4"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#E6F8FB] border border-[#BCEEF5] text-[#0875D1] group-hover:bg-[#0875D1] group-hover:text-white group-hover:border-[#0875D1] transition-colors">
                    <Icon className="h-6 w-6 stroke-[1.8]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display text-sm sm:text-base font-bold text-[#062D56] group-hover:text-[#0875D1] transition-colors leading-snug">
                      {title}
                    </h3>
                    <p className="mt-1 text-xs text-slate-500 line-clamp-2 leading-relaxed">
                      {description}
                    </p>
                  </div>
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#EBF4FA] text-[#0875D1] group-hover:bg-[#0875D1] group-hover:text-white transition-colors">
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* 3. Industries We Serve Section */}
          <section>
            <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
              <span className="text-xs font-bold tracking-widest text-[#00A3C4] uppercase block text-center mb-2">
                INDUSTRIES WE SERVE
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#062D56] tracking-tight font-display text-center">
                Reliable Solutions Across Sectors
              </h2>
              <p className="mt-2 text-sm sm:text-base text-slate-500 leading-relaxed text-center">
                Our products are trusted across various healthcare and orthopaedic sectors.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
              {industries.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="rounded-2xl p-5 bg-white border border-[#DCE8F2] shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center flex flex-col items-center justify-between group"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E6F8FB] border border-[#BCEEF5] text-[#0875D1] mb-4 group-hover:bg-[#0875D1] group-hover:text-white group-hover:border-[#0875D1] transition-colors">
                    <Icon className="h-6 w-6 stroke-[1.8]" />
                  </div>
                  <div>
                    <h3 className="font-display text-sm font-bold text-[#062D56] mb-1.5 leading-snug">
                      {title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* Bottom CTA Banner */}
      <BottomCTA
        eyebrow="ORTHOPAEDIC SUPPLY PARTNER"
        title={
          <>
            <span className="text-[#38BDF8]">Reliable</span> Supply for Demanding
            <br className="hidden sm:inline" /> Surgical Care
          </>
        }
        description="High-quality orthopaedic implants, fixation systems and reliable healthcare supply across India."
        primaryButtonText="Get in Touch"
        primaryButtonLink="/contact-us"
        secondaryButtonText="Request a Quote"
        secondaryButtonLink="/request-a-quote"
        backgroundImage="/images/about-cta-background.png"
      />
    </>
  );
}