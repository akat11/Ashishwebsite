import { useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  Handshake,
  Settings,
  ShieldCheck,
  Truck,
} from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import BottomCTA from '@/components/BottomCTA';
import { brands } from '@/data/brands';

const productGroups = [
  {
    title: 'Distal Radius Locking Systems',
    description: 'Volar and dorsal plates, variable angle screws, and reduction instruments',
    image: '/images/brands-category-distal.jpg',
    to: '/products/distal-radius-locking-plates',
  },
  {
    title: 'Tibia & Femur Locking Plates',
    description: 'Proximal and distal anatomical plates for complex lower limb trauma',
    image: '/images/brands-category-tibia.jpg',
    to: '/products/tibia-locking-plates',
  },
  {
    title: 'Pediatric Orthopedic Plates',
    description: 'Low-profile plates and osteotomy hardware designed for pediatric patients',
    image: '/images/brands-category-pediatric.jpg',
    to: '/products/pediatric-locking-plates',
  },
  {
    title: 'Reconstruction & Clavicle Plates',
    description: 'Bendable pelvic reconstruction plates and contoured clavicle locking systems',
    image: '/images/brands-category-reconstruction.jpg',
    to: '/products/reconstruction-locking-plates',
  },
  {
    title: 'External Fixator Clamps & Rods',
    description: 'Modular pin-to-rod and rod-to-rod clamps in surgical stainless steel and carbon fiber',
    image: '/images/brands-category-fixator.jpg',
    to: '/products/external-fixator-clamps',
  },
  {
    title: 'Ilizarov Ring Fixation Systems',
    description: 'Full rings, 5/8 rings, threaded rods, wire fixation bolts, and tensioners',
    image: '/images/brands-category-ilizarov.jpg',
    to: '/products/ilizarov-rings-instruments',
  },
  {
    title: 'Cortical & Cancellous Locking Screws',
    description: 'Self-tapping locking and non-locking screws across 2.4mm, 3.5mm, 4.5mm, and 5.0mm',
    image: '/images/brands-category-screws.jpg',
    to: '/products/locking-screws-accessories',
  },
  {
    title: 'Deformity Correction & Limb Lengthening',
    description: 'Specialized circular frames and dynamic fixation accessories for limb reconstruction',
    image: '/images/brands-category-limb.jpg',
    to: '/products/ilizarov-rings-instruments',
  },
];

const trustPoints = [
  { icon: ShieldCheck, label: 'Verified Manufacturers' },
  { icon: Settings, label: 'Quality Assured Products' },
  { icon: Handshake, label: 'Authorized Supply Partner' },
  { icon: Truck, label: 'Pan-India Distribution' },
];

export default function Brands() {
  const brandListRef = useRef<HTMLDivElement>(null);
  const verifiedBrands = brands.filter((brand) => brand.verified);

  const scrollBrands = (direction: -1 | 1) => {
    brandListRef.current?.scrollBy({
      left: direction * 260,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <SEO
        title="Trusted Global Brands for Better Patient Outcomes | Vinayak Surgicals"
        description="We partner with leading global and Indian manufacturers to bring high-quality surgical instruments, medical equipment and healthcare consumables to hospitals, clinics and healthcare professionals."
        canonical="https://vinyanaksurgicals.com/brands"
        keywords="orthopedic manufacturers, medical brands, implant sourcing, surgical instruments supplier Kanpur, Vinayak Surgicals"
        image="/images/brands-reference-hero.jpg"
      />

      <Breadcrumbs crumbs={[{ label: 'Brands' }]} />

      {/* Hero Banner with Restored Medical Hero Image */}
      <section className="hero-standard bg-[#F4F8FB] border-b border-[#E0E8EF]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 bg-cover bg-center opacity-25 sm:opacity-30 md:inset-y-0 md:left-auto md:right-0 md:w-[55%] md:opacity-40 lg:opacity-50"
          style={{ backgroundImage: "url('/images/brands-reference-hero.jpg')" }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-[#F4F8FB]/90 via-[#F4F8FB]/95 to-[#F4F8FB] md:bg-gradient-to-r md:from-[#F4F8FB] md:via-[#F4F8FB]/95 md:via-55% md:to-transparent"
        />
        <div className="container-x relative z-10 w-full">
          <div className="hero-standard-inner max-w-3xl">
            <span className="section-eyebrow">Medical Brands &amp; Manufacturers</span>
            <h1 className="mt-2 text-page-title">
              Trusted Global Brands for{' '}
              <span className="text-[#159A9C]">Better Patient Outcomes</span>
            </h1>
            <p className="mt-4 text-body-large">
              We collaborate with established medical implant manufacturers and certified surgical instrument foundries to supply certified hardware to hospitals, trauma centers, and clinical practitioners.
            </p>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 border-t border-[#E0E8EF] pt-6">
              {trustPoints.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#123B66] border border-[#E0E8EF] shadow-xs">
                    <Icon className="h-5 w-5 text-[#159A9C]" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-[#172B3A] leading-snug">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Verified Brands Strip */}
      <section className="bg-white py-10 sm:py-12 border-b border-[#E0E8EF]">
        <div className="container-x">
          <div className="rounded-2xl border border-[#E0E8EF] bg-[#F4F8FB] p-6 sm:p-8">
            <div className="mb-4 flex items-center justify-between gap-4">
              <div>
                <h2 className="text-subsection-title">Our Verified Partner Network</h2>
                <p className="text-sm text-[#5E6F7D] mt-1">
                  Orthopedic and surgical instrument manufacturers meeting our quality standards.
                </p>
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  aria-label="Scroll verified brands left"
                  onClick={() => scrollBrands(-1)}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#E0E8EF] bg-white text-[#123B66] hover:bg-[#F4F8FB] transition-colors"
                >
                  <ArrowLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  aria-label="Scroll verified brands right"
                  onClick={() => scrollBrands(1)}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#E0E8EF] bg-white text-[#123B66] hover:bg-[#F4F8FB] transition-colors"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div
              ref={brandListRef}
              className="flex gap-4 overflow-x-auto scroll-smooth py-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {verifiedBrands.length > 0 ? (
                verifiedBrands.map((brand) => (
                  <div
                    key={brand.name}
                    className="flex min-w-[160px] items-center justify-center rounded-xl border border-[#E0E8EF] bg-white p-4 shadow-xs"
                  >
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      className="max-h-12 w-full object-contain"
                    />
                  </div>
                ))
              ) : (
                <div className="flex w-full items-center rounded-xl border border-dashed border-[#E0E8EF] bg-white p-5 text-sm text-[#5E6F7D]">
                  Verified brand names and partner manufacturing logos are displayed here. Contact our sales desk for manufacturer certs.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Product Groups Grid */}
      <section className="section-padding bg-white">
        <div className="container-x">
          <div className="mb-8 sm:mb-10">
            <span className="section-eyebrow">Category Overview</span>
            <h2 className="mt-2 text-section-title">
              Our Product Categories
            </h2>
            <p className="mt-2 text-body-regular max-w-2xl">
              We supply precision instrumentation and implants across trauma and reconstructive orthopedic categories.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {productGroups.map((group) => (
              <Link
                key={group.title}
                to={group.to}
                className="card card-hover group p-5 flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-[16/10] w-full overflow-hidden rounded-lg bg-[#F4F8FB] mb-4 flex items-center justify-center border border-[#E0E8EF]">
                    <img
                      src={group.image}
                      alt=""
                      aria-hidden="true"
                      className="h-full w-full object-contain p-3 transition-transform duration-300 group-hover:scale-105"
                      draggable={false}
                    />
                  </div>
                  <h3 className="font-display text-base font-bold text-[#172B3A] group-hover:text-[#123B66] transition-colors leading-snug">
                    {group.title}
                  </h3>
                  <p className="mt-1.5 text-xs sm:text-sm text-[#5E6F7D] leading-relaxed line-clamp-2">
                    {group.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#E0E8EF]/60 flex items-center justify-between text-xs sm:text-sm font-semibold text-[#123B66] group-hover:text-[#159A9C] transition-colors">
                  <span>Explore Systems</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

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
