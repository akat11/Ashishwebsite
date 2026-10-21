import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Award,
  Building2,
  CheckCircle2,
  Factory,
  FileText,
  Globe2,
  Headphones,
  Layers,
  Microscope,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Truck,
  Users,
} from 'lucide-react';
import VideoHero from '@/components/VideoHero';
import ProductCard from '@/components/ProductCard';
import CategoryCard from '@/components/CategoryCard';
import BottomCTA from '@/components/BottomCTA';
import SEO from '@/components/SEO';
import { productCategories } from '@/data/categories';
import { products } from '@/data/products';
import type { ProductCategory } from '@/data/categories';

// Floating hero benefits
const heroBenefits = [
  {
    icon: ShieldCheck,
    title: 'Trusted Quality',
    description: 'ISO 13485:2016 & CE certified implants and instruments',
  },
  {
    icon: Layers,
    title: 'Comprehensive Range',
    description: '98+ specialized orthopaedic fixation products',
  },
  {
    icon: Headphones,
    title: 'Expert Support',
    description: 'Clinical engineering & surgical specification guidance',
  },
  {
    icon: Truck,
    title: 'Pan India Supply',
    description: 'Fast, secure dispatch to 500+ healthcare centers',
  },
];

// Why choose us cards
const whyChooseCards = [
  {
    icon: Sparkles,
    title: 'High-Grade Metallurgy',
    description:
      'Implant-grade Stainless Steel 316L and Titanium Grade 5 complying with strict ASTM and ISO biocompatibility standards.',
  },
  {
    icon: Layers,
    title: 'Anatomical Contouring',
    description:
      'Pre-contoured plate geometries engineered to match natural anatomical curvature, minimizing intraoperative bending.',
  },
  {
    icon: Microscope,
    title: 'Rigorous Quality Control',
    description:
      'Multi-stage inspection including coordinate measuring, surface roughness testing, and mechanical torque validation.',
  },
  {
    icon: Truck,
    title: 'Institutional Reliability',
    description:
      'Robust inventory reserves, rapid 24-hour quotation response, and full regulatory documentation for hospital procurement.',
  },
];

// Services / Expertise grid (3x2)
const expertiseServices = [
  {
    icon: Factory,
    title: 'Custom Implant Engineering',
    description: 'Bespoke design and precision CNC machining tailored to complex anatomical trauma and reconstructive needs.',
    link: '/services',
  },
  {
    icon: Building2,
    title: 'Hospital & Institutional Supply',
    description: 'Reliable high-volume procurement programs with dedicated account management and scheduled deliveries.',
    link: '/services',
  },
  {
    icon: Stethoscope,
    title: 'Surgical Instrumentation Kits',
    description: 'Ergonomic, color-coded trauma sets, depth gauges, drill guides, and quick-coupling drivers for surgeons.',
    link: '/services',
  },
  {
    icon: Award,
    title: 'Quality & Biomechanical Testing',
    description: 'Static and dynamic fatigue testing adhering to ASTM F382 & ISO standards ensuring high structural integrity.',
    link: '/services',
  },
  {
    icon: FileText,
    title: 'Tender & Regulatory Support',
    description: 'Complete compliance dossiers, certificates of analysis (COA), and institutional tender documentation.',
    link: '/request-a-quote',
  },
  {
    icon: Users,
    title: 'Clinical Education & Workshops',
    description: 'Hands-on bone-model workshops and surgical technique guides for orthopaedic residents and theater staff.',
    link: '/about-us',
  },
];

// Industries served
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
  const featuredProducts = products.filter((product) => product.featured).slice(0, 8);
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
          <div className="rounded-2xl bg-white p-6 sm:p-8 shadow-xl border border-slate-100">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
              {heroBenefits.map(({ icon: Icon, title, description }, idx) => (
                <div
                  key={title}
                  className={`flex items-start gap-4 ${idx !== 0 ? 'pt-4 sm:pt-0 sm:pl-6' : ''}`}
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#0875D1]">
                    <Icon className="h-6 w-6 text-[#0875D1]" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold text-[#062D56] leading-snug">
                      {title}
                    </h3>
                    <p className="mt-1 text-xs text-slate-500 leading-relaxed">
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
              <span className="section-eyebrow">OUR PRODUCT RANGE</span>
              <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#062D56] tracking-tight">
                Comprehensive Orthopaedic Fixation Solutions
              </h2>
              <p className="mt-2.5 max-w-2xl text-sm sm:text-base text-slate-600 leading-relaxed">
                Engineered for superior clinical outcomes, biocompatibility, and surgical precision across trauma and reconstructive procedures.
              </p>
            </div>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#0875D1] hover:text-[#12C8E8] transition-colors shrink-0"
            >
              <span>View All Products</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
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
              <span className="section-eyebrow">FEATURED PRODUCTS</span>
              <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#062D56] tracking-tight">
                Clinically Proven Surgical Implants
              </h2>
              <p className="mt-2.5 max-w-2xl text-sm sm:text-base text-slate-600 leading-relaxed">
                Precision-machined locking plates, modular external fixators, and high-performance cortical &amp; cancellous screws.
              </p>
            </div>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#0875D1] hover:text-[#12C8E8] transition-colors shrink-0"
            >
              <span>View All Featured</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
            {featuredProducts.map((product) => (
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
                Pioneering Orthopaedic Excellence &amp; Surgical Precision
              </h2>
              <p className="mt-3.5 text-base sm:text-lg font-semibold text-[#12C8E8]">
                Kanpur-Based Hub &bull; Pan-India Healthcare Distribution
              </p>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-300">
                Vinayak Orthopaedic Solutions is dedicated to advancing patient mobility through high-precision orthopaedic implants, locking compression plate systems, and modular external fixators.
              </p>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-300">
                Manufactured in accordance with international medical device quality standards, our products undergo rigorous biomechanical testing and metallurgical verification to ensure flawless intraoperative performance.
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
          <div className="mt-16 pt-12 border-t border-white/15 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="font-display text-3xl sm:text-4xl font-extrabold text-[#12C8E8]">
                15+
              </div>
              <div className="mt-1 text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-300">
                Years of Excellence
              </div>
            </div>
            <div>
              <div className="font-display text-3xl sm:text-4xl font-extrabold text-[#12C8E8]">
                500+
              </div>
              <div className="mt-1 text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-300">
                Healthcare Partners
              </div>
            </div>
            <div>
              <div className="font-display text-3xl sm:text-4xl font-extrabold text-[#12C8E8]">
                98+
              </div>
              <div className="mt-1 text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-300">
                Catalogue Implants
              </div>
            </div>
            <div>
              <div className="font-display text-3xl sm:text-4xl font-extrabold text-[#12C8E8]">
                Pan India
              </div>
              <div className="mt-1 text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-300">
                Rapid Distribution
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Vinayak */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
            <span className="section-eyebrow justify-center">WHY CHOOSE VINAYAK</span>
            <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#062D56] tracking-tight">
              Engineering Precision. Clinical Trust.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              Designed to meet the exacting demands of orthopedic surgeons and trauma teams worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseCards.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="rounded-2xl p-6 bg-white border border-slate-100 shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-50 border border-cyan-100/60 text-[#0875D1] mb-5">
                    <Icon className="h-6 w-6 text-[#0875D1]" />
                  </div>
                  <h3 className="font-display text-base sm:text-lg font-bold text-[#062D56] mb-2 leading-snug">
                    {title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Expertise / Services Section */}
      <section className="bg-[#F8FAFC] py-16 sm:py-20 border-y border-slate-200/60">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
            <span className="section-eyebrow justify-center">OUR EXPERTISE</span>
            <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#062D56] tracking-tight">
              Specialized Orthopaedic Solutions &amp; Services
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              Comprehensive end-to-end capabilities supporting healthcare institutions, surgical specialists, and distribution partners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertiseServices.map(({ icon: Icon, title, description, link }) => (
              <Link
                key={title}
                to={link}
                className="group rounded-2xl bg-white p-5 border border-slate-100 shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-start gap-4"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#0875D1] group-hover:bg-[#0875D1] group-hover:text-white transition-colors">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display text-base font-bold text-[#062D56] group-hover:text-[#0875D1] transition-colors leading-snug">
                    {title}
                  </h3>
                  <p className="mt-1 text-xs text-slate-500 line-clamp-2 leading-relaxed">
                    {description}
                  </p>
                </div>
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-50 text-slate-400 group-hover:bg-[#0875D1] group-hover:text-white transition-colors">
                  <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
            <span className="section-eyebrow justify-center">INDUSTRIES WE SERVE</span>
            <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#062D56] tracking-tight">
              Trusted Across the Healthcare Ecosystem
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              Partnering with medical institutions, clinicians, and global distributors to elevate patient care.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {industries.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="rounded-2xl p-5 bg-[#F8FAFC] border border-slate-100 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all text-center flex flex-col items-center"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-[#0875D1] mb-4">
                  <Icon className="h-6 w-6 text-[#0875D1]" />
                </div>
                <h3 className="font-display text-sm font-bold text-[#062D56] mb-1.5 leading-snug">
                  {title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <BottomCTA
        eyebrow="PARTNER WITH US"
        title="Ready to Elevate Your Surgical Solutions?"
        description="Connect with our orthopaedic specialists to discuss bulk institutional supply, technical specifications, or custom product requirements."
        primaryButtonText="Get in Touch"
        primaryButtonLink="/contact-us"
        secondaryButtonText="Request a Quote"
        secondaryButtonLink="/request-a-quote"
      />
    </>
  );
}