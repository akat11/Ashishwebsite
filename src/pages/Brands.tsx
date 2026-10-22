import { Link } from 'react-router-dom';
import {
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

const productGroups: Array<{
  title: string;
  description: string;
  image: string;
  webp?: string;
  to: string;
}> = [
  {
    title: 'Distal Radius Locking Systems',
    description: 'Volar and dorsal plates, variable angle screws, and reduction instruments',
    image: '/images/categories/distal-radius-locking-plates.jpg',
    webp: '/images/categories/distal-radius-locking-plates.webp',
    to: '/products/distal-radius-locking-plates',
  },
  {
    title: 'Tibia & Femur Locking Plates',
    description: 'Proximal and distal anatomical plates for complex lower limb trauma',
    image: '/images/categories/tibia-locking-plates.jpg',
    webp: '/images/categories/tibia-locking-plates.webp',
    to: '/products/tibia-locking-plates',
  },
  {
    title: 'Pediatric Orthopedic Plates',
    description: 'Low-profile plates and osteotomy hardware designed for pediatric patients',
    image: '/images/categories/pediatric-locking-plates.jpg',
    webp: '/images/categories/pediatric-locking-plates.webp',
    to: '/products/pediatric-locking-plates',
  },
  {
    title: 'Reconstruction & Clavicle Plates',
    description: 'Bendable pelvic reconstruction plates and contoured clavicle locking systems',
    image: '/images/categories/reconstruction-locking-plates.jpg',
    webp: '/images/categories/reconstruction-locking-plates.webp',
    to: '/products/reconstruction-locking-plates',
  },
  {
    title: 'External Fixator Clamps & Rods',
    description: 'Modular pin-to-rod and rod-to-rod clamps in surgical stainless steel and carbon fiber',
    image: '/images/categories/external-fixator-clamps.jpg',
    webp: '/images/categories/external-fixator-clamps.webp',
    to: '/products/external-fixator-clamps',
  },
  {
    title: 'Ilizarov Ring Fixation Systems',
    description: 'Full rings, 5/8 rings, threaded rods, wire fixation bolts, and tensioners',
    image: '/images/categories/ilizarov-rings-instruments.jpg',
    webp: '/images/categories/ilizarov-rings-instruments.webp',
    to: '/products/ilizarov-rings-instruments',
  },
  {
    title: 'Cortical & Cancellous Locking Screws',
    description: 'Self-tapping locking and non-locking screws across 2.4mm, 3.5mm, 4.5mm, and 5.0mm',
    image: '/images/categories/locking-screws-accessories.jpg',
    webp: '/images/categories/locking-screws-accessories.webp',
    to: '/products/locking-screws-accessories',
  },
  {
    title: 'Deformity Correction & Limb Lengthening',
    description: 'Specialized circular frames and dynamic fixation accessories for limb reconstruction',
    image: '/images/products/ilizarov-ring-system.jpg',
    webp: '/images/products/ilizarov-ring-system.webp',
    to: '/products/ilizarov-rings-instruments',
  },
];

const trustPoints = [
  { icon: ShieldCheck, line1: 'Verified', line2: 'Manufacturers' },
  { icon: Settings, line1: 'Quality', line2: 'Assured Products' },
  { icon: Handshake, line1: 'Authorized', line2: 'Supply Partner' },
  { icon: Truck, line1: 'Pan-India', line2: 'Distribution' },
];

export default function Brands() {
  const verifiedBrands = brands.filter((brand) => brand.verified);
  const marqueeBrands = [...verifiedBrands, ...verifiedBrands];

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

      {/* Hero Banner with Ultra-HD 4K Medical Atmosphere */}
      <section className="relative isolate min-h-[300px] sm:min-h-[330px] lg:min-h-[360px] overflow-hidden flex items-center border-b border-blue-100/80 bg-[#eff7ff]">
        {/* Full-bleed 4K Master Composite Banner */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 bg-cover bg-right md:bg-center select-none"
          style={{
            backgroundImage: "url('/images/brands-hero-banner-4k.jpg')",
            imageRendering: '-webkit-optimize-contrast',
          }}
        />

        {/* Responsive Mobile Soft Gradient to ensure 100% text legibility on narrow screens */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-1 bg-gradient-to-r from-[#eff7ff]/95 via-[#eff7ff]/80 to-transparent sm:hidden"
        />

        {/* Foreground Content Container */}
        <div className="container-x relative z-10 w-full py-8 sm:py-10 lg:py-12">
          <div className="max-w-[560px] lg:max-w-[620px]">
            {/* Eyebrow in vibrant medical blue */}
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.18em] text-[#0866f5]">
              MEDICAL BRANDS &amp; MANUFACTURERS
            </span>

            {/* H1 Heading */}
            <h1 className="mt-2.5 font-display text-2xl sm:text-3xl lg:text-[36px] xl:text-[38px] font-extrabold leading-[1.16] tracking-tight text-[#0F223D]">
              Trusted Global Brands for{' '}
              <br className="hidden sm:inline" />
              <span className="text-[#0866f5]">Better Patient Outcomes</span>
            </h1>

            {/* Paragraph matching exact reference text */}
            <p className="mt-3 text-xs sm:text-[13px] lg:text-sm text-slate-600 leading-relaxed max-w-[500px]">
              We partner with leading global and Indian manufacturers to bring high-quality surgical instruments, medical equipment and healthcare consumables to hospitals, clinics and healthcare professionals.
            </p>
          </div>

          {/* Trust Points in a single horizontal row (all in 1 line, guaranteed no wrap) */}
          <div className="mt-6 flex items-center flex-nowrap overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden gap-3 sm:gap-4 lg:gap-5 py-1">
            {trustPoints.map(({ icon: Icon, line1, line2 }, idx) => (
              <div key={idx} className="flex items-center gap-2 sm:gap-2.5 shrink-0">
                <div className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-full border border-[#0866f5]/40 bg-white text-[#0866f5] shadow-2xs">
                  <Icon className="h-4 w-4 sm:h-4.5 sm:w-4.5" />
                </div>
                <div className="text-[10.5px] sm:text-[11.5px] font-bold text-[#0F223D] leading-tight whitespace-nowrap">
                  <span>{line1}</span>
                  <br />
                  <span>{line2}</span>
                </div>
                {idx < trustPoints.length - 1 && (
                  <div className="h-6 w-px bg-blue-200/70 ml-2 sm:ml-3" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verified Brands Strip */}
      <section className="bg-white py-10 sm:py-12 border-b border-[#E0E8EF]">
        <div className="container-x">
          <div className="rounded-2xl border border-[#E0E8EF] bg-[#F4F8FB] p-6 sm:p-8">
            <div className="mb-6">
              <h2 className="text-subsection-title">Our Verified Partner Network</h2>
              <p className="text-sm text-[#5E6F7D] mt-1">
                Orthopedic and surgical instrument manufacturers meeting our quality standards.
              </p>
            </div>

            <div className="relative overflow-hidden py-1">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-[#F4F8FB] to-transparent z-10"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-[#F4F8FB] to-transparent z-10"
              />

              {marqueeBrands.length > 0 ? (
                <div className="flex w-max gap-4 animate-marquee hover:[animation-play-state:paused]">
                  {marqueeBrands.map((brand, idx) => (
                    <div
                      key={`${brand.name}-${idx}`}
                      className="flex h-20 w-44 sm:w-48 shrink-0 items-center justify-center rounded-xl border border-[#E0E8EF] bg-white px-5 py-3 shadow-xs transition-transform duration-300 hover:scale-105 hover:shadow-sm"
                    >
                      <img
                        src={brand.logo}
                        alt={brand.name}
                        loading="lazy"
                        decoding="async"
                        className="max-h-11 sm:max-h-12 w-full object-contain"
                      />
                    </div>
                  ))}
                </div>
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
                    <picture className="h-full w-full flex items-center justify-center">
                      {group.webp && <source srcSet={group.webp} type="image/webp" />}
                      <img
                        src={group.image}
                        alt={group.title}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-contain p-3 transition-transform duration-300 group-hover:scale-105"
                        draggable={false}
                      />
                    </picture>
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
