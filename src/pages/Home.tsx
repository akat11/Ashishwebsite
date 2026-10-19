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
  Phone,
  Search,
  Settings,
  Truck,
} from 'lucide-react';
import VideoHero from '@/components/VideoHero';
import DepartmentCard from '@/components/DepartmentCard';
import SEO from '@/components/SEO';
import { productCategories } from '@/data/categories';
import { products } from '@/data/products';
import { departments } from '@/data/departments';
import { businessConfig } from '@/config/business';
import type { Product } from '@/data/products';
import type { ProductCategory } from '@/data/categories';

function HomeCategoryCard({ category }: { category: ProductCategory }) {
  return (
    <Link
      to={`/products/${category.slug}`}
      className="group overflow-hidden rounded-md border border-slate-200 bg-white shadow-[0_2px_7px_rgba(17,45,76,0.08)] transition-all hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md"
    >
      <div className="aspect-[1.38] overflow-hidden bg-gradient-to-br from-slate-100 to-white">
        <img
          src={category.image}
          alt={category.shortName}
          loading="lazy"
          className="h-full w-full object-contain p-2 transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="border-t border-slate-100 px-2 py-2 text-center">
        <h3 className="line-clamp-1 text-[9px] font-bold text-navy-800 group-hover:text-blue-700 sm:text-[10px]">
          {category.shortName}
        </h3>
      </div>
    </Link>
  );
}

function HomeProductCard({ product }: { product: Product }) {
  const category = productCategories.find((item) => item.slug === product.category);

  return (
    <Link
      to={`/products/${product.category}/${product.slug}`}
      className="group overflow-hidden rounded-md border border-slate-200 bg-white shadow-[0_2px_7px_rgba(17,45,76,0.08)] transition-all hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md"
    >
      <div className="aspect-[1.62] overflow-hidden bg-gradient-to-br from-[#f0f1f3] via-white to-[#e9ebee]">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-contain p-2 transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="min-h-[100px] px-2.5 py-2">
        <span className="text-[7px] font-bold uppercase tracking-[0.12em] text-blue-600">
          {category?.shortName ?? 'Orthopedic Implants'}
        </span>
        <h3 className="mt-0.5 line-clamp-2 text-[9px] font-bold leading-[1.35] text-navy-800 group-hover:text-blue-700 sm:text-[10px]">
          {product.name}
        </h3>
        <p className="mt-1 line-clamp-2 text-[8px] leading-[1.35] text-slate-500">
          {product.description}
        </p>
        <span className="mt-1.5 inline-flex items-center gap-1 text-[8px] font-bold text-blue-600">
          View Details
          <ArrowRight className="h-2.5 w-2.5 transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}

const reasons = [
  {
    icon: Gem,
    title: 'Quality Products',
    description: 'Reliable implants and instruments for clinical use.',
  },
  {
    icon: Settings,
    title: 'Wide Product Range',
    description: 'Solutions for trauma, reconstruction and specialized procedures.',
  },
  {
    icon: Truck,
    title: 'Pan-India Supply',
    description: 'Serving hospitals, clinics and distributors across India.',
  },
  {
    icon: Headphones,
    title: 'Dedicated Support',
    description: 'Assistance with product selection, quotations and order support.',
  },
];

const processSteps = [
  {
    icon: ClipboardCheck,
    number: '01',
    title: 'Product Selection',
    description: 'Choose from our range of orthopedic implants and instruments.',
  },
  {
    icon: Search,
    number: '02',
    title: 'Quotation & Consultation',
    description: 'Get competitive pricing and technical product support.',
  },
  {
    icon: FileCheck2,
    number: '03',
    title: 'Order Processing',
    description: 'Fast and reliable order handling with quality checks.',
  },
  {
    icon: Truck,
    number: '04',
    title: 'Delivery & Support',
    description: 'Timely delivery with continued post-supply support.',
  },
];

export default function Home() {
  const featuredProducts = products.filter((product) => product.featured).slice(0, 15);
  const homeCategories = [
    ...productCategories.slice(0, 7),
    productCategories.find((category) => category.slug === 'locking-screws-accessories'),
  ].filter((category): category is ProductCategory => Boolean(category));

  return (
    <>
      <SEO
        title="Vinyanak Surgicals — Orthopedic Locking Plates & External Fixator Systems | Kanpur, India"
        description="Supplying precision orthopedic locking plate systems, external fixators, Ilizarov rings, and fixation screws in Stainless Steel 316L and Titanium Grade 5 across Kanpur, Uttar Pradesh, and pan-India."
        canonical="https://vinyanaksurgicals.com/"
        keywords="orthopedic locking plates, external fixator systems, ilizarov rings, distal radius plates, proximal tibia locking plate, femur locking plates, orthopedic screws, trauma implants, Kanpur, Uttar Pradesh, India, Vinyanak Surgicals"
        image="/images/categories/distal-radius-locking-plates.jpg"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'Vinyanak Surgicals',
          url: 'https://vinyanaksurgicals.com',
          potentialAction: {
            '@type': 'SearchAction',
            target: 'https://vinyanaksurgicals.com/products?q={search_term_string}',
            'query-input': 'required name=search_term_string',
          },
        }}
      />

      <VideoHero />

      <section className="bg-[#f1f7fd] py-5 sm:py-6">
        <div className="container-x">
          <div className="mb-3 flex items-end justify-between gap-3">
            <div>
              <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-blue-600">
                Product Categories
              </span>
              <h2 className="mt-0.5 font-display text-lg font-extrabold text-[#102746] sm:text-xl">
                Explore Our Product Range
              </h2>
              <p className="mt-1 hidden text-[10px] text-slate-600 sm:block">
                Orthopedic implants, external fixation systems and surgical instruments for a wide range of procedures.
              </p>
            </div>
            <Link
              to="/products"
              className="mb-1 inline-flex shrink-0 items-center gap-1 text-[9px] font-bold text-blue-600 hover:text-blue-800"
            >
              View All Categories
              <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-8">
            {homeCategories.map((category) => (
              <HomeCategoryCard key={category.slug} category={category} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-5 sm:py-6">
        <div className="container-x">
          <div className="mb-3 flex items-end justify-between gap-3">
            <div>
              <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-blue-600">
                Our Products
              </span>
              <h2 className="mt-0.5 font-display text-lg font-extrabold text-[#102746] sm:text-xl">
                Leading Orthopedic Surgical Solutions
              </h2>
            </div>
            <Link
              to="/products"
              className="mb-1 inline-flex shrink-0 items-center gap-1 text-[9px] font-bold text-blue-600 hover:text-blue-800"
            >
              View All Products
              <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-2.5 lg:grid-cols-5">
            {featuredProducts.map((product) => (
              <HomeProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#032746] py-7 text-white sm:py-8">
        <div className="container-x grid items-center gap-5 lg:grid-cols-[1fr_1.02fr] lg:gap-8">
          <div>
            <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-cyan-400">
              About Vinyanak Surgicals
            </span>
            <h2 className="mt-1.5 font-display text-xl font-extrabold text-white sm:text-2xl">
              Built for Surgical Excellence
            </h2>
            <p className="mt-1 text-sm font-semibold text-blue-100">
              Precision Sourcing &amp; Reliable Supply
            </p>
            <p className="mt-2 max-w-xl text-[10px] leading-relaxed text-slate-200 sm:text-[11px]">
              We supply high-quality orthopedic implants and surgical instruments to hospitals,
              clinics and healthcare professionals across India. Our focus is on product quality,
              dependable service and responsive support.
            </p>
            <div className="mt-3 grid grid-cols-1 gap-x-4 gap-y-2 text-[9px] text-blue-100 sm:grid-cols-2">
              {[
                'Wide range of implants & instruments',
                'Quality-focused sourcing',
                'Reliable supply & timely delivery',
                'Support for hospitals and clinics',
              ].map((item) => (
                <span key={item} className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-blue-400" />
                  {item}
                </span>
              ))}
            </div>
            <Link
              to="/about-us"
              className="mt-4 inline-flex items-center gap-1 rounded-md bg-blue-600 px-3.5 py-2 text-[9px] font-bold text-white transition-colors hover:bg-blue-500"
            >
              Learn More
              <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
          <div className="overflow-hidden rounded-md border border-blue-400/50 shadow-lg">
            <img
              src="/images/business-overview-surgery.png"
              alt="Surgical team working with orthopedic instruments"
              loading="lazy"
              className="aspect-[1.65] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-5 sm:py-6">
        <div className="container-x">
          <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-blue-600">
            Why Choose Us
          </span>
          <h2 className="mt-0.5 font-display text-lg font-extrabold text-[#102746] sm:text-xl">
            Your Trusted Orthopedic Partner
          </h2>
          <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="flex items-start gap-2.5 rounded-md border border-slate-100 bg-white p-3 shadow-[0_2px_7px_rgba(17,45,76,0.06)]"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-50">
                  <Icon className="h-4 w-4 text-blue-600" />
                </span>
                <span>
                  <span className="block text-[10px] font-bold text-navy-800">{title}</span>
                  <span className="mt-1 block text-[9px] leading-snug text-slate-500">{description}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f1f7fd] py-5 sm:py-6">
        <div className="container-x">
          <div className="mb-3 flex items-end justify-between gap-3">
            <div>
              <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-blue-600">
                Departments We Serve
              </span>
              <h2 className="mt-0.5 font-display text-lg font-extrabold text-[#102746] sm:text-xl">
                Clinical Specialties
              </h2>
              <p className="mt-1 text-[10px] text-slate-600">
                Our products support a wide range of surgical departments and clinical applications.
              </p>
            </div>
            <Link
              to="/departments"
              className="mb-1 inline-flex shrink-0 items-center gap-1 text-[9px] font-bold text-blue-600 hover:text-blue-800"
            >
              Explore Departments
              <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {departments.slice(0, 6).map((department) => (
              <DepartmentCard key={department.slug} department={department} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-5 sm:py-6">
        <div className="container-x">
          <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-blue-600">
            Our Process
          </span>
          <h2 className="mt-0.5 font-display text-lg font-extrabold text-[#102746] sm:text-xl">
            Reliable Sourcing, Proven Process
          </h2>
          <p className="mt-1 text-[10px] text-slate-600">
            From product selection to delivery, we ensure a smooth and reliable experience.
          </p>
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map(({ icon: Icon, number, title, description }, index) => (
              <div key={number} className="relative flex items-start gap-2.5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50">
                  <Icon className="h-4 w-4 text-blue-600" />
                </span>
                <span>
                  <span className="block text-[8px] font-bold text-blue-600">{number}</span>
                  <span className="block text-[10px] font-bold text-navy-800">{title}</span>
                  <span className="mt-1 block text-[9px] leading-snug text-slate-500">{description}</span>
                </span>
                {index < processSteps.length - 1 && (
                  <ArrowRight className="absolute right-0 top-3 hidden h-3.5 w-3.5 text-blue-400 lg:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-[#042846] py-5 text-white">
        <img
          src="/images/hero-surgical-scene.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#032746] via-[#06345b]/95 to-[#06345b]/50" />
        <div className="container-x relative">
          <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-cyan-300">
            Sourcing Quality, After Standards India
          </span>
          <h2 className="mt-1 font-display text-lg font-extrabold text-white sm:text-xl">
            Reliable Supply for Surgical Care
          </h2>
          <p className="mt-1 max-w-xl text-[10px] leading-relaxed text-blue-100">
            We work with trusted manufacturers and follow quality standards to ensure reliable
            orthopedic implants and instruments for clinical use.
          </p>
          <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1.5 text-[8px] font-medium text-blue-100">
            <span className="inline-flex items-center gap-1"><BadgeCheck className="h-3 w-3 text-cyan-300" />Quality assurance</span>
            <span className="inline-flex items-center gap-1"><Building2 className="h-3 w-3 text-cyan-300" />Reliable partners</span>
            <span className="inline-flex items-center gap-1"><PackageCheck className="h-3 w-3 text-cyan-300" />Consistent supply</span>
            <span className="inline-flex items-center gap-1"><HeartHandshake className="h-3 w-3 text-cyan-300" />Patient care focus</span>
          </div>
          <Link
            to="/services"
            className="mt-3 inline-flex items-center gap-1 rounded-md bg-blue-600 px-3.5 py-2 text-[9px] font-bold text-white transition-colors hover:bg-blue-500"
          >
            Our Services
            <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-gradient-to-r from-blue-700 via-blue-600 to-blue-800 py-5 text-white sm:py-6">
        <img
          src="/images/services-cta-doctor.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-center opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-700/95 via-blue-700/90 to-blue-800/75" />
        <div className="container-x relative flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <div>
            <span className="text-[8px] font-bold uppercase tracking-[0.18em] text-blue-200">
              Let&apos;s Work Together
            </span>
            <h2 className="mt-1 font-display text-lg font-extrabold text-white sm:text-xl">
              Need bulk supply or specific instruments?
            </h2>
            <p className="mt-1 text-[10px] text-blue-100">
              Contact us for customized quotations and product recommendations.
            </p>
          </div>
          <div className="flex shrink-0 gap-2">
            <Link
              to="/request-a-quote"
              className="inline-flex items-center gap-1.5 rounded-md bg-white px-3.5 py-2.5 text-[9px] font-bold text-blue-700 transition-colors hover:bg-blue-50"
            >
              Request a Quote
              <ArrowRight className="h-3 w-3" />
            </Link>
            <a
              href={`tel:${businessConfig.phoneRaw}`}
              className="inline-flex items-center gap-1.5 rounded-md border border-white/60 px-3.5 py-2.5 text-[9px] font-bold text-white transition-colors hover:bg-white/10"
            >
              <Phone className="h-3 w-3" />
              Call Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
