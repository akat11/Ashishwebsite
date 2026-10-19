import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  FileCheck2,
  Gem,
  Headphones,
  HeartHandshake,
  PackageCheck,
  Search,
  Settings,
  Truck,
} from 'lucide-react';
import VideoHero from '@/components/VideoHero';
import DepartmentCard from '@/components/DepartmentCard';
import ProductCard from '@/components/ProductCard';
import CategoryCard from '@/components/CategoryCard';
import InstitutionMarquee from '@/components/InstitutionMarquee';
import BottomCTA from '@/components/BottomCTA';
import SEO from '@/components/SEO';
import { productCategories } from '@/data/categories';
import { products } from '@/data/products';
import { departments } from '@/data/departments';
import type { ProductCategory } from '@/data/categories';

const reasons = [
  {
    icon: Gem,
    title: 'Certified Implant Quality',
    description: 'Implant-grade Stainless Steel 316L and Titanium Grade 5 conforming to clinical orthopedic standards.',
  },
  {
    icon: Settings,
    title: 'Comprehensive Range',
    description: 'Anatomical locking plates, modular external fixators, Ilizarov circular frames, and cortical/cancellous screws.',
  },
  {
    icon: Truck,
    title: 'Pan-India Distribution',
    description: 'Fast and reliable logistics serving hospitals, medical colleges, and distributors across India.',
  },
  {
    icon: Headphones,
    title: 'Dedicated Surgical Support',
    description: 'Assistance with technical specifications, hospital tenders, catalogue matching, and rapid quotations.',
  },
];

const processSteps = [
  {
    icon: ClipboardCheck,
    number: '01',
    title: 'Requirement Review',
    description: 'Select products from our catalogue or submit custom clinical specifications.',
  },
  {
    icon: Search,
    number: '02',
    title: 'Quotation & Consultation',
    description: 'Receive competitive institutional pricing, specifications, and availability details.',
  },
  {
    icon: FileCheck2,
    number: '03',
    title: 'Order Processing',
    description: 'Thorough quality check and verification prior to dispatch for safe delivery.',
  },
  {
    icon: Truck,
    number: '04',
    title: 'Timely Dispatch',
    description: 'Secure, padded transit packaging and continuous logistics coordination to your destination.',
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
        title="Vinayak Surgicals — Orthopedic Locking Plates & External Fixator Systems | Kanpur, India"
        description="Supplying precision orthopedic locking plate systems, external fixators, Ilizarov rings, and fixation screws in Stainless Steel 316L and Titanium Grade 5 across Kanpur, Uttar Pradesh, and pan-India."
        canonical="https://vinyanaksurgicals.com/"
        keywords="orthopedic locking plates, external fixator systems, ilizarov rings, distal radius plates, proximal tibia locking plate, femur locking plates, orthopedic screws, trauma implants, Kanpur, Uttar Pradesh, India, Vinayak Surgicals"
        image="/images/categories/distal-radius-locking-plates.jpg"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'Vinayak Surgicals',
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

      {/* Trust Institution Marquee */}
      <InstitutionMarquee />

      {/* Product Categories Section */}
      <section className="bg-[#F4F8FB] section-padding">
        <div className="container-x">
          <div className="mb-8 sm:mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="section-eyebrow">Product Categories</span>
              <h2 className="mt-2 text-section-title">
                Explore Our Product Range
              </h2>
              <p className="mt-2 max-w-2xl text-body-regular">
                Precision orthopedic implants, anatomically contoured locking plates, external fixation systems, and surgical screws for trauma and reconstructive procedures.
              </p>
            </div>
            <Link
              to="/products"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#123B66] hover:text-[#159A9C] transition-colors shrink-0"
            >
              <span>View All 10 Categories</span>
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
      <section className="bg-white section-padding">
        <div className="container-x">
          <div className="mb-8 sm:mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="section-eyebrow">Catalogue Highlights</span>
              <h2 className="mt-2 text-section-title">
                Leading Orthopedic Surgical Solutions
              </h2>
              <p className="mt-2 max-w-2xl text-body-regular">
                Certified locking compression plates, external fixator clamps, and fixation assemblies engineered for stable mechanical anchorage and clinical success.
              </p>
            </div>
            <Link
              to="/products"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#123B66] hover:text-[#159A9C] transition-colors shrink-0"
            >
              <span>Browse All Products</span>
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

      {/* About Vinayak Surgicals Overview */}
      <section className="bg-[#0c2642] py-16 sm:py-20 lg:py-24 text-white">
        <div className="container-x grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <div>
            <span className="section-eyebrow text-[#159A9C]">
              About Vinayak Surgicals
            </span>
            <h2 className="mt-3 font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight">
              Built for Surgical Excellence &amp; Reliable Institutional Supply
            </h2>
            <p className="mt-3 text-base sm:text-lg font-semibold text-[#159A9C]">
              Kanpur-Based Hub &bull; Pan-India Healthcare Distribution
            </p>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#bcccdc]">
              We supply precision orthopedic implants, anatomical locking plates, and surgical fixation systems to hospitals, trauma centers, nursing homes, and orthopedic surgeons across Uttar Pradesh and pan-India. Our focus is unwavering commitment to product quality, clinical dimensional accuracy, and responsive supply.
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-sm font-medium text-[#d9e2ec]">
              {[
                'Implant-grade SS 316L & Titanium Grade 5',
                'Comprehensive trauma & reconstruction catalogue',
                'Prompt institutional quotation within 24 hours',
                'Specialized sourcing support for unique cases',
              ].map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-[#159A9C] mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/about-us"
                className="btn-teal"
              >
                <span>Read More About Us</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/request-a-quote"
                className="btn-secondary !bg-white/10 !text-white !border-white/30 hover:!bg-white hover:!text-[#123B66]"
              >
                <span>Request a Quote</span>
              </Link>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-white/20 shadow-2xl relative">
            <img
              src="/images/business-overview-surgery.png"
              alt="Surgical team working with precision orthopedic instruments in an operating theatre"
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c2642]/60 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white section-padding">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <span className="section-eyebrow justify-center">Why Choose Us</span>
            <h2 className="mt-2 text-section-title">
              Your Trusted Orthopedic Partner
            </h2>
            <p className="mt-3 text-body-regular">
              We understand the critical precision required in orthopedic trauma surgery. That is why our products and distribution adhere strictly to clinical requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="card p-6 flex flex-col justify-between hover:border-[#159A9C]/40 hover:shadow-md transition-all"
              >
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F4F8FB] text-[#123B66] mb-5 border border-[#E0E8EF]">
                    <Icon className="h-6 w-6 text-[#159A9C]" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-[#172B3A] mb-2 leading-snug">
                    {title}
                  </h3>
                  <p className="text-sm text-[#5E6F7D] leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments We Serve */}
      <section className="bg-[#F4F8FB] section-padding">
        <div className="container-x">
          <div className="mb-8 sm:mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="section-eyebrow">Clinical Specialties</span>
              <h2 className="mt-2 text-section-title">
                Departments We Serve
              </h2>
              <p className="mt-2 max-w-2xl text-body-regular">
                Our surgical fixation solutions support hospitals, clinics, and specialized orthopedic departments.
              </p>
            </div>
            <Link
              to="/departments"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#123B66] hover:text-[#159A9C] transition-colors shrink-0"
            >
              <span>Explore All Departments</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.slice(0, 6).map((department) => (
              <DepartmentCard key={department.slug} department={department} />
            ))}
          </div>
        </div>
      </section>

      {/* Our 4-Step Process */}
      <section className="bg-white section-padding">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <span className="section-eyebrow justify-center">Our Sourcing Process</span>
            <h2 className="mt-2 text-section-title">
              Reliable Sourcing, Proven Process
            </h2>
            <p className="mt-3 text-body-regular">
              From requirement consultation to packaging and dispatch, our systematic process ensures seamless procurement for healthcare institutions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {processSteps.map(({ icon: Icon, number, title, description }) => (
              <div
                key={number}
                className="card p-6 flex flex-col justify-between relative bg-white border border-[#E0E8EF] hover:border-[#159A9C]/40 hover:shadow-md transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F4F8FB] text-[#123B66] border border-[#E0E8EF]">
                      <Icon className="h-6 w-6 text-[#159A9C]" />
                    </div>
                    <span className="font-display text-2xl font-black text-[#123B66]/20">
                      {number}
                    </span>
                  </div>
                  <h3 className="font-display text-base sm:text-lg font-bold text-[#172B3A] mb-2 leading-snug">
                    {title}
                  </h3>
                  <p className="text-sm text-[#5E6F7D] leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sourcing Quality & Standards Feature */}
      <section className="relative isolate overflow-hidden bg-[#0c2642] py-16 sm:py-20 text-white">
        <img
          src="/images/hero-surgical-scene.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-center opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c2642] via-[#0c2642]/95 to-[#123B66]/80" />

        <div className="container-x relative z-10">
          <div className="max-w-2xl">
            <span className="section-eyebrow text-[#159A9C]">
              Rigorous Quality Standards
            </span>
            <h2 className="mt-2 font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight">
              Reliable Supply for Demanding Surgical Care
            </h2>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#bcccdc]">
              We collaborate closely with certified manufacturing facilities adhering strictly to medical implant metallurgy, dimensional precision, and sterile-ready finish requirements.
            </p>

            <div className="mt-6 flex flex-wrap gap-4 text-xs sm:text-sm font-semibold text-[#d9e2ec]">
              <span className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-3.5 py-2">
                <BadgeCheck className="h-4 w-4 text-[#159A9C]" />
                Quality Assurance
              </span>
              <span className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-3.5 py-2">
                <Building2 className="h-4 w-4 text-[#159A9C]" />
                Hospital &amp; College Supply
              </span>
              <span className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-3.5 py-2">
                <PackageCheck className="h-4 w-4 text-[#159A9C]" />
                Safe Transit Packaging
              </span>
              <span className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-3.5 py-2">
                <HeartHandshake className="h-4 w-4 text-[#159A9C]" />
                Dedicated Partner
              </span>
            </div>

            <div className="mt-8">
              <Link to="/services" className="btn-teal">
                <span>Explore Sourcing &amp; Supply Services</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <BottomCTA
        eyebrow="Let's Work Together"
        title="Need bulk supply or specific orthopedic instruments?"
        description="Contact our sales desk for customized quotations, product availability, and institutional pricing."
        primaryButtonText="Request a Quote"
        primaryButtonLink="/request-a-quote"
        showPhoneSecondary={true}
      />
    </>
  );
}
