import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Handshake,
  Settings,
  ShieldCheck,
  Truck,
  Sparkles,
  Award,
  Layers,
  CheckCircle2,
} from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import BottomCTA from '@/components/BottomCTA';
import { brands } from '@/data/brands';

const productGroups = [
  {
    title: 'Distal Radius Locking Systems',
    description: 'Volar and dorsal pre-contoured plates, variable angle locking screws, and anatomical reduction instruments.',
    image: '/images/categories/distal-radius-locking-plates.jpg',
    to: '/products/distal-radius-locking-plates',
    badge: 'Upper Extremity Articular',
  },
  {
    title: 'Tibia & Femur Locking Plates',
    description: 'Proximal, condylar, and distal anatomical plates engineered for high-energy load-bearing lower limb trauma.',
    image: '/images/categories/tibia-locking-plates.jpg',
    to: '/products/tibia-locking-plates',
    badge: 'Knee & Lower Limb',
  },
  {
    title: 'Pediatric Orthopaedic Plates',
    description: 'Low-profile plates and osteotomy hardware designed for pediatric trauma and corrective osteotomies (100°–130°).',
    image: '/images/categories/pediatric-locking-plates.jpg',
    to: '/products/pediatric-locking-plates',
    badge: 'Pediatric Reconstruction',
  },
  {
    title: 'Reconstruction & Clavicle Plates',
    description: 'Multi-axial bendable pelvic reconstruction plates, straight dynamic plates, and contoured clavicle locking systems.',
    image: '/images/categories/reconstruction-locking-plates.jpg',
    to: '/products/reconstruction-locking-plates',
    badge: 'Pelvis & Shafts',
  },
  {
    title: 'External Fixator Clamps & Rods',
    description: 'Modular A.O.-type single pin, double pin, and rod-to-rod clamps in surgical stainless steel and carbon fiber.',
    image: '/images/categories/external-fixator-clamps.jpg',
    to: '/products/external-fixator-clamps',
    badge: 'Modular Emergency Trauma',
  },
  {
    title: 'Ilizarov Circular Ring Systems',
    description: 'Circular full rings, 5/8 rings, Italian arches, threaded rods, wire fixation bolts, and dynametric tensioners.',
    image: '/images/categories/ilizarov-rings-instruments.jpg',
    to: '/products/ilizarov-rings-instruments',
    badge: 'Deformity & Limb Salvage',
  },
  {
    title: 'Cortical & Cancellous Locking Screws',
    description: 'Self-tapping locking and non-locking screws across 1.5mm to 7.3mm in Titanium Gr. 5 and SS 316L (ASTM F138).',
    image: '/images/categories/locking-screws-accessories.jpg',
    to: '/products/locking-screws-accessories',
    badge: 'Precision Fixation Screws',
  },
  {
    title: 'Deformity Correction & Lengthening',
    description: 'Specialized circular frames, universal hinges, and dynamic distraction accessories for complex limb reconstruction.',
    image: '/images/products/ilizarov-ring-system.jpg',
    to: '/products/ilizarov-rings-instruments',
    badge: 'Limb Lengthening',
  },
];

const trustPoints = [
  { icon: ShieldCheck, line1: 'Verified', line2: 'Manufacturers' },
  { icon: Settings, line1: 'Quality', line2: 'Assured Products' },
  { icon: Handshake, line1: 'Authorized', line2: 'Supply Partner' },
  { icon: Truck, line1: 'Pan-India', line2: 'Distribution' },
];

export default function Brands() {
  const [partnerView, setPartnerView] = useState<'marquee' | 'grid'>('marquee');
  const verifiedBrands = brands.filter((brand) => brand.verified);
  const marqueeBrands = [...verifiedBrands, ...verifiedBrands];

  return (
    <>
      <SEO
        title="Trusted Global Brands & Verified Manufacturers | Vinayak Surgicals"
        description="We partner with leading global and Indian manufacturers to bring high-quality orthopaedic implants, surgical instruments, and trauma systems to hospitals and clinics across India."
        canonical="https://vinayaksurgicals.vercel.app/brands"
        keywords="orthopedic manufacturers, medical brands, implant sourcing, surgical instruments supplier Kanpur, Stryker, DePuy Synthes, Zimmer Biomet, Vinayak Surgicals"
        image="/images/brands-hero-banner-4k.jpg"
      />

      <Breadcrumbs crumbs={[{ label: 'Brands' }]} />

      {/* 1. Cinematic MedTech Brands Hero Section */}
      <section className="relative isolate min-h-[360px] sm:min-h-[400px] overflow-hidden flex items-center border-b border-white/10 bg-[#020F1C] text-white py-10 sm:py-14 lg:py-16">
        {/* Full-bleed 4K Master Composite Banner with Cinematic Dark Overlay */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 bg-cover bg-right md:bg-[center_right] opacity-35 select-none"
          style={{
            backgroundImage: "url('/images/brands-hero-banner-4k.jpg')",
            imageRendering: '-webkit-optimize-contrast',
          }}
        />

        {/* Volumetric Radial Glows */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#0875D1]/30 via-[#12C8E8]/15 to-transparent blur-[140px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 right-0 w-[600px] h-[600px] rounded-full bg-[#12C8E8]/15 blur-[150px]"
        />

        {/* Clinical Grid Pattern */}
        <div
          className="absolute inset-0 pointer-events-none opacity-25 select-none"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(18,200,232,0.18) 1px, transparent 0)',
            backgroundSize: '36px 36px',
          }}
          aria-hidden="true"
        />

        {/* Responsive Gradient overlay for guaranteed text legibility */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-1 bg-gradient-to-r from-[#020F1C] via-[#020F1C]/95 via-50% to-[#020F1C]/40"
        />

        {/* Foreground Content Container */}
        <div className="container-x relative z-10 w-full">
          <div className="max-w-3xl space-y-4">
            {/* Telemetry Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-xs font-mono font-bold uppercase tracking-wider text-[#12C8E8] backdrop-blur-md border border-white/15 shadow-xs">
              <Sparkles className="h-3.5 w-3.5" />
              <span>MEDICAL BRANDS &amp; VERIFIED MANUFACTURERS</span>
            </div>

            {/* H1 Heading */}
            <h1 className="font-display text-2xl sm:text-4xl lg:text-[2.75rem] font-extrabold leading-[1.18] tracking-tight text-white">
              Trusted Global Brands for{' '}
              <span className="bg-gradient-to-r from-[#12C8E8] via-[#38BDF8] to-[#93C5FD] bg-clip-text text-transparent">
                Better Patient Outcomes
              </span>
            </h1>

            {/* Paragraph matching genuine business message */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
              We partner with leading global and Indian manufacturers to bring high-grade orthopaedic implants, trauma fixation systems, and precision surgical instrumentation to hospitals, clinics, and surgical specialists across India.
            </p>

            {/* Action CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <Link
                to="/products"
                className="btn-cyan text-xs sm:text-sm py-3 px-6 shadow-md"
              >
                <span>Explore Complete Catalogue</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/request-a-quote"
                className="inline-flex items-center gap-2 rounded-xl border border-white/25 bg-white/10 hover:bg-white/20 px-6 py-3 text-xs sm:text-sm font-semibold text-white backdrop-blur-xs transition-all hover:border-white/40 shadow-xs"
              >
                <span>Request Institutional Rate Card</span>
              </Link>
            </div>
          </div>

          {/* Trust Points Glassmorphic Matrix in a single horizontal row */}
          <div className="mt-10 rounded-2xl bg-white/[0.07] border border-white/15 p-4 sm:p-5 backdrop-blur-md max-w-4xl">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
              {trustPoints.map(({ icon: Icon, line1, line2 }, idx) => (
                <div
                  key={idx}
                  className={`flex items-center gap-3 ${idx !== 0 ? 'pt-3 sm:pt-0 sm:pl-4' : ''}`}
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#12C8E8]/15 border border-[#12C8E8]/30 text-[#12C8E8] shadow-xs">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-white leading-tight">
                    <span>{line1}</span>
                    <br />
                    <span className="text-slate-300 font-medium text-xs">{line2}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Verified Partner Network Showcase */}
      <section className="bg-white py-16 sm:py-24 border-b border-slate-200">
        <div className="container-x">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 sm:mb-12">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#0fb2ce] mb-2">
                <Award className="h-3.5 w-3.5" />
                <span>VERIFIED PARTNER ECOSYSTEM</span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#062D56] tracking-tight">
                Our Verified Partner Network
              </h2>
              <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
                Orthopaedic and surgical instrument manufacturers meeting our strict metallurgical, dimensional, and biocompatibility quality standards.
              </p>
            </div>

            {/* View Mode Toggle: Marquee vs Grid */}
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-100 border border-slate-200 shrink-0">
              <button
                onClick={() => setPartnerView('marquee')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  partnerView === 'marquee'
                    ? 'bg-white text-[#062D56] shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Continuous Scroll
              </button>
              <button
                onClick={() => setPartnerView('grid')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  partnerView === 'grid'
                    ? 'bg-white text-[#062D56] shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                All 8 Partners Grid
              </button>
            </div>
          </div>

          {/* Marquee View */}
          {partnerView === 'marquee' ? (
            <div className="relative overflow-hidden rounded-3xl bg-[#F8FAFC] border border-slate-200/90 p-6 sm:p-8">
              {/* Fade masks */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#F8FAFC] to-transparent z-10"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#F8FAFC] to-transparent z-10"
              />

              <div className="flex w-max gap-6 animate-marquee hover:[animation-play-state:paused] py-2">
                {marqueeBrands.map((brand, idx) => (
                  <div
                    key={`${brand.name}-${idx}`}
                    className="flex flex-col items-center justify-center h-28 w-52 sm:w-56 shrink-0 rounded-2xl border border-slate-200 bg-white p-4 shadow-xs transition-all duration-300 hover:scale-105 hover:shadow-lg hover:border-[#0875D1]/50 group"
                  >
                    <div className="h-12 w-full flex items-center justify-center">
                      <img
                        src={brand.logo}
                        alt={brand.name}
                        loading="lazy"
                        decoding="async"
                        className="max-h-11 sm:max-h-12 max-w-[85%] object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                      />
                    </div>
                    <span className="text-[11px] font-mono font-semibold text-slate-500 mt-2 flex items-center gap-1">
                      <CheckCircle2 className="h-3 w-3 text-emerald-600" />
                      {brand.name}
                    </span>
                  </div>
                ))}
              </div>

              <div className="text-center mt-3">
                <span className="text-[11px] font-mono text-slate-400">
                  💡 Hover over any brand logo to pause scrolling
                </span>
              </div>
            </div>
          ) : (
            /* Static Grid View */
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
              {verifiedBrands.map((brand) => (
                <div
                  key={brand.name}
                  className="flex flex-col items-center justify-center h-32 rounded-2xl border border-slate-200 bg-white p-5 shadow-xs transition-all duration-300 hover:shadow-md hover:border-[#0875D1]"
                >
                  <div className="h-14 w-full flex items-center justify-center">
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      loading="lazy"
                      className="max-h-12 max-w-[85%] object-contain"
                    />
                  </div>
                  <span className="text-xs font-mono font-bold text-[#062D56] mt-2 flex items-center gap-1">
                    <ShieldCheck className="h-3.5 w-3.5 text-[#0875D1]" />
                    {brand.name}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 3. Product Categories Grid */}
      <section className="bg-[#F8FAFC] py-18 sm:py-24 border-b border-slate-200">
        <div className="container-x">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-14">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#0fb2ce] mb-2">
                <Layers className="h-3.5 w-3.5" />
                <span>CATEGORICAL OVERVIEW</span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#062D56] tracking-tight">
                Our Core Fixation Categories
              </h2>
              <p className="mt-2.5 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
                We supply precision instrumentation and anatomical locking plates across trauma, joint reconstruction, and limb deformity specialties.
              </p>
            </div>

            <Link
              to="/products"
              className="inline-flex items-center gap-2 rounded-xl border border-[#0875D1] bg-white px-5 py-2.5 text-xs sm:text-sm font-bold text-[#0875D1] shadow-xs hover:bg-[#0875D1] hover:text-white transition-all shrink-0"
            >
              <span>View Full 110+ Catalogue</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {productGroups.map((group) => (
              <Link
                key={group.title}
                to={group.to}
                className="group rounded-3xl bg-white border border-slate-200 hover:border-[#0875D1]/60 shadow-xs hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                <div>
                  {/* Category Image Stage with Soft Gradient */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-gradient-to-b from-slate-50 to-slate-100/60 p-4 flex items-center justify-center border-b border-slate-100">
                    <img
                      src={group.image}
                      alt={group.title}
                      loading="lazy"
                      className="h-full w-full object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-md bg-white/95 text-[10px] font-mono font-bold uppercase tracking-wider text-[#0875D1] shadow-2xs border border-slate-200/80 truncate max-w-[170px]">
                      {group.badge}
                    </div>
                  </div>

                  {/* Body Text */}
                  <div className="p-5">
                    <h3 className="font-display text-base font-bold text-[#062D56] group-hover:text-[#0875D1] transition-colors leading-snug">
                      {group.title}
                    </h3>
                    <p className="mt-2 text-xs text-slate-500 leading-relaxed line-clamp-2">
                      {group.description}
                    </p>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-5 pt-0">
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#0875D1] group-hover:text-[#062D56] transition-colors">
                    <span>Explore Systems</span>
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0875D1]/10 text-[#0875D1] group-hover:bg-[#0875D1] group-hover:text-white transition-all">
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Bottom CTA Section */}
      <BottomCTA
        eyebrow="AUTHORIZED ORTHOPAEDIC PARTNER"
        title="Dependable Supply for Demanding Surgical Operating Suites"
        description="High-quality orthopaedic implants, fixation systems, and reliable healthcare supply across India from our Kanpur central hub."
        primaryButtonText="Request Institutional Quote"
        primaryButtonLink="/request-a-quote"
        secondaryButtonText="Contact Surgical Desk"
        secondaryButtonLink="/contact-us"
      />
    </>
  );
}
