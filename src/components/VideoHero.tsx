import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Gem,
  Headphones,
  ShieldCheck,
  Truck,
} from 'lucide-react';

const serviceHighlights = [
  { icon: Gem, title: 'Implant-Grade SS 316L & Titanium' },
  { icon: ShieldCheck, title: 'Trauma & Reconstruction Fixation' },
  { icon: Truck, title: 'Prompt Pan-India Delivery' },
  { icon: Headphones, title: 'Dedicated Clinical Quotations' },
];

export default function VideoHero() {
  return (
    <section className="relative isolate flex min-h-[520px] items-center overflow-hidden bg-[#0c2642] py-14 sm:py-18 lg:py-24">
      {/* Background image with high quality medical imagery */}
      <picture>
        <source srcSet="/images/hero-orthopedic-surgical.webp" type="image/webp" />
        <img
          src="/images/hero-orthopedic-surgical.jpg"
          alt="Precision orthopedic implants and external fixation surgical hardware"
          className="absolute inset-0 h-full w-full object-cover object-[65%_center]"
        />
      </picture>
      {/* Gradients to guarantee high-contrast legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0c2642]/98 via-[#0c2642]/90 to-[#0c2642]/40" />
      <div className="absolute inset-y-0 left-0 w-full bg-[linear-gradient(110deg,rgba(12,38,66,0.8),transparent_80%)]" />

      <div className="container-x relative z-10">
        <div className="max-w-[680px]">
          {/* Eyebrow badge */}
          <span className="inline-flex items-center gap-2 rounded-full border border-[#159A9C]/40 bg-[#159A9C]/20 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-[#e8f7f7]">
            <span className="h-2 w-2 rounded-full bg-[#159A9C] animate-pulse" />
            Precision Orthopedic Implants &amp; Fixation Systems
          </span>

          {/* Master H1 */}
          <h1 className="mt-4 font-display text-[clamp(2.125rem,4vw+0.5rem,3.125rem)] font-extrabold leading-[1.12] tracking-tight text-white">
            Precision Orthopedic <br />
            <span className="text-[#159A9C]">Locking Plate Systems.</span> <br />
            Complete Fixation Solutions.
          </h1>

          {/* Subtitle */}
          <p className="mt-4 max-w-[580px] text-base sm:text-lg leading-relaxed text-[#d9e2ec]">
            Supplying precision locking plates, external fixators, Ilizarov circular rings, and fixation screws in implant-grade Stainless Steel 316L and Titanium Grade 5 across Kanpur, Uttar Pradesh, and pan-India.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-3.5">
            <Link
              to="/request-a-quote"
              className="btn-teal shadow-md"
            >
              <span>Request a Quote</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/products"
              className="btn-secondary !bg-white/10 !text-white !border-white/30 hover:!bg-white hover:!text-[#123B66]"
            >
              <span>Explore Catalogue</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Feature highlights bar */}
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 border-t border-white/20 pt-6">
            {serviceHighlights.map(({ icon: Icon, title }) => (
              <div key={title} className="flex items-start gap-2.5">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/10 text-[#159A9C]">
                  <Icon className="h-4 w-4" />
                </div>
                <span className="text-xs sm:text-[13px] font-medium leading-snug text-[#d9e2ec]">
                  {title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
