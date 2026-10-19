import { useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  Handshake,
  MessageSquareMore,
  Settings,
  ShieldCheck,
  Truck,
} from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import { brands } from '@/data/brands';

const productGroups = [
  {
    title: 'Distal Radius Locking Systems',
    description: 'Plates, screws and instrument sets',
    image: '/images/brands-category-distal.jpg',
    to: '/products/distal-radius-locking-plates',
  },
  {
    title: 'Tibia & Femur Locking Plates',
    description: 'Advanced trauma locking solutions',
    image: '/images/brands-category-tibia.jpg',
    to: '/products/tibia-locking-plates',
  },
  {
    title: 'Pediatric Orthopedic Plates',
    description: 'Specialized implants for pediatric care',
    image: '/images/brands-category-pediatric.jpg',
    to: '/products/pediatric-locking-plates',
  },
  {
    title: 'Reconstruction & Clavicle Plates',
    description: 'Plates for complex fracture management',
    image: '/images/brands-category-reconstruction.jpg',
    to: '/products/reconstruction-locking-plates',
  },
  {
    title: 'External Fixator Clamps & Rods',
    description: 'Reliable fixation systems',
    image: '/images/brands-category-fixator.jpg',
    to: '/products/external-fixator-clamps',
  },
  {
    title: 'Ilizarov Ring Fixation Systems',
    description: 'Complete ring systems and accessories',
    image: '/images/brands-category-ilizarov.jpg',
    to: '/products/ilizarov-rings-instruments',
  },
  {
    title: 'Cortical & Cancellous Locking Screws',
    description: 'Wide range of locking and non-locking screws',
    image: '/images/brands-category-screws.jpg',
    to: '/products/locking-screws-accessories',
  },
  {
    title: 'Deformity Correction & Limb Lengthening',
    description: 'Specialized systems for complex cases',
    image: '/images/brands-category-limb.jpg',
    to: '/products/ilizarov-rings-instruments',
  },
];

const trustPoints = [
  { icon: ShieldCheck, label: <>Verified<br />Manufacturers</> },
  { icon: Settings, label: <>Quality<br />Assured Products</> },
  { icon: Handshake, label: <>Authorized<br />Supply Partner</> },
  { icon: Truck, label: <>Pan-India<br />Distribution</> },
];

export default function Brands() {
  const brandListRef = useRef<HTMLDivElement>(null);
  const verifiedBrands = brands.filter((brand) => brand.verified);

  const scrollBrands = (direction: -1 | 1) => {
    brandListRef.current?.scrollBy({
      left: direction * 240,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <SEO
        title="Trusted Global Brands for Better Patient Outcomes | Vinyanak Surgicals"
        description="We partner with leading global and Indian manufacturers to bring high-quality surgical instruments, medical equipment and healthcare consumables to hospitals, clinics and healthcare professionals."
        canonical="https://vinyanaksurgicals.com/brands"
        keywords="orthopedic manufacturers, medical brands, implant sourcing, surgical instruments supplier Kanpur, Vinyanak Surgicals"
        image="/images/brands-reference-hero.jpg"
      />
      <Breadcrumbs crumbs={[{ label: 'Brands' }]} />

      <section className="relative isolate min-h-[242px] overflow-hidden bg-[#eff7ff]">
        <div
          aria-hidden="true"
          className="absolute inset-y-0 right-0 -z-20 w-[58%] bg-cover bg-center"
          style={{ backgroundImage: "url('/images/brands-reference-hero.jpg')" }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,#eff7ff_0%,rgba(239,247,255,0.98)_43%,rgba(239,247,255,0.38)_57%,rgba(239,247,255,0.02)_100%)]"
        />
        <div className="container-x flex min-h-[242px] items-center">
          <div className="max-w-[600px]">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0866f5]">
              Medical Brands &amp; Manufacturers
            </span>
            <h1 className="mt-2 max-w-[560px] text-[30px] font-extrabold leading-[1.08] tracking-tight text-[#102b49] sm:text-4xl lg:text-[42px]">
              Trusted Global Brands for{' '}
              <span className="text-[#0866f5]">Better Patient Outcomes</span>
            </h1>
            <p className="mt-3 max-w-[560px] text-xs leading-relaxed text-slate-600 sm:text-sm">
              We partner with leading global and Indian manufacturers to bring high-quality surgical
              instruments, medical equipment and healthcare consumables to hospitals, clinics and
              healthcare professionals.
            </p>

            <div className="mt-4 grid max-w-[600px] grid-cols-2 gap-y-3 sm:grid-cols-4 sm:gap-0">
              {trustPoints.map(({ icon: Icon, label }, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-2 px-2 first:pl-0 sm:px-3 ${
                    index > 0 ? 'sm:border-l sm:border-slate-300' : ''
                  }`}
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-blue-200 bg-white/90 text-[#0866f5]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="text-[10px] font-semibold leading-tight text-[#173353] sm:text-[11px]">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f9fc] py-2">
        <div className="container-x">
          <div className="max-w-[1040px] rounded-xl border border-slate-100 bg-white/90 px-4 py-1.5 shadow-[0_4px_18px_rgba(28,62,98,0.04)] sm:px-6">
            <div className="mb-1 flex items-center justify-between gap-3">
              <div>
                <h2 className="text-base font-bold text-[#173353] sm:text-lg">Our Verified Brands</h2>
                <span className="mt-1 block h-0.5 w-6 rounded bg-[#0866f5]" />
              </div>
              <div className="flex gap-1.5">
                <button
                  type="button"
                  aria-label="Scroll verified brands left"
                  onClick={() => scrollBrands(-1)}
                  className="flex h-7 w-7 items-center justify-center rounded-full border border-blue-100 text-[#0866f5] transition hover:bg-blue-50"
                >
                  <ArrowLeft className="h-3.5 w-3.5" />
                </button>
                <button
                  type="button"
                  aria-label="Scroll verified brands right"
                  onClick={() => scrollBrands(1)}
                  className="flex h-7 w-7 items-center justify-center rounded-full border border-blue-100 text-[#0866f5] transition hover:bg-blue-50"
                >
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
            <div
              ref={brandListRef}
              className="flex min-h-[51px] gap-2 overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {verifiedBrands.length > 0 ? (
                verifiedBrands.map((brand) => (
                  <div
                    key={brand.name}
                    className="flex min-w-[105px] flex-1 items-center justify-center rounded-md border border-slate-200 bg-white px-3 py-2"
                  >
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      className="max-h-8 w-full object-contain"
                    />
                  </div>
                ))
              ) : (
                <div className="flex w-full items-center rounded-md border border-dashed border-slate-200 bg-white px-4 py-2 text-xs leading-relaxed text-slate-600">
                  Verified brand names and logos will appear here once confirmed.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-2">
        <div className="container-x">
          <div className="max-w-[1040px]">
            <div className="mb-3 flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
              <div>
                <h2 className="text-xl font-bold text-[#173353] sm:text-2xl">
                  Our Product Categories
                </h2>
                <span className="mt-1 block h-0.5 w-6 rounded bg-[#0866f5]" />
              </div>
              <p className="max-w-[430px] text-xs leading-relaxed text-slate-600 sm:text-[13px]">
                We supply instruments and equipment across a wide range of surgical and medical
                categories, from trusted global manufacturers.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4">
              {productGroups.map((group) => (
                <Link
                  key={group.title}
                  to={group.to}
                  className="group flex min-h-[88px] items-center gap-2 rounded-lg border border-blue-100 bg-[linear-gradient(110deg,#f6faff_0%,#ffffff_68%)] px-2.5 py-2 shadow-[0_2px_8px_rgba(22,73,132,0.04)] transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md"
                >
                  <img
                    src={group.image}
                    alt=""
                    aria-hidden="true"
                    className="h-[62px] w-[72px] shrink-0 object-contain"
                    draggable={false}
                  />
                  <span className="min-w-0 flex-1">
                    <span className="block text-xs font-bold leading-tight text-[#173353] sm:text-[13px]">
                      {group.title}
                    </span>
                    <span className="mt-1 block text-[11px] leading-snug text-slate-500 sm:text-xs">
                      {group.description}
                    </span>
                  </span>
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-blue-100 bg-white text-[#0866f5] shadow-sm transition group-hover:bg-[#0866f5] group-hover:text-white">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container-x pb-2">
        <div className="max-w-[1040px]">
          <div
            className="flex flex-col items-start justify-between gap-4 rounded-xl bg-[#0866f5] px-5 py-2 text-white shadow-sm sm:flex-row sm:items-center sm:px-8"
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgba(0,91,235,0.97) 0%, rgba(0,91,235,0.88) 52%, rgba(30,125,255,0.75) 100%), url('/images/brands-cta-background.png')",
              backgroundPosition: 'center, right center',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover, 50% 100%',
            }}
          >
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/15">
                <MessageSquareMore className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-sm font-bold leading-5 sm:text-base">
                  Looking for a Specific Brand?
                </span>
                <span className="mt-1 block max-w-[570px] text-xs leading-relaxed text-blue-50 sm:text-[13px]">
                  We work with a wide network of global and Indian manufacturers. Contact us with
                  your requirement and we will source the best solution for you.
                </span>
              </span>
            </div>
            <Link
              to="/contact-us"
              className="inline-flex min-h-9 w-full shrink-0 items-center justify-center gap-2 rounded-md bg-white px-4 text-xs font-bold text-[#0866f5] transition hover:bg-blue-50 sm:w-auto"
            >
              Contact Us About Brands <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
