import { Link } from 'react-router-dom';
import { ArrowRight, FileText } from 'lucide-react';

export default function VideoHero() {
  return (
    <section className="relative isolate flex min-h-[540px] lg:min-h-[600px] items-center overflow-hidden bg-[#032449] py-16 sm:py-20 lg:py-28">
      {/* Background image with high quality authentic medical surgical hardware - PRESERVED 100% */}
      <picture>
        <source srcSet="/images/hero-orthopedic-surgical.webp" type="image/webp" />
        <img
          src="/images/hero-orthopedic-surgical.jpg"
          alt="Precision orthopedic implants and external fixation surgical hardware"
          className="absolute inset-0 h-full w-full object-cover object-[70%_center] lg:object-[65%_center]"
        />
      </picture>

      {/* Gradients to guarantee high-contrast legibility matching the screenshot */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#032449] via-[#032449]/90 to-transparent lg:via-[#032449]/80" />
      <div className="absolute inset-y-0 left-0 w-full lg:w-2/3 bg-[radial-gradient(ellipse_at_top_left,rgba(18,200,232,0.15),transparent_70%)]" />

      <div className="container-x relative z-10">
        <div className="max-w-[640px]">
          {/* Eyebrow badge in uppercase cyan */}
          <span className="text-xs sm:text-[13px] font-extrabold uppercase tracking-[0.18em] text-[#12C8E8]">
            Orthopaedic Solutions
          </span>

          {/* Master H1 headline with white and cyan emphasis */}
          <h1 className="mt-4 font-display text-[clamp(2.25rem,4.5vw+0.5rem,3.75rem)] font-extrabold leading-[1.08] tracking-tight text-white">
            Precision Orthopaedic <br />
            <span className="text-[#12C8E8]">Complete Fixation Solutions</span>
          </h1>

          {/* Concise supporting description */}
          <p className="mt-4 max-w-[540px] text-base sm:text-lg leading-relaxed text-[#cad6e2]">
            High quality orthopaedic implants and external fixation systems for better patient outcomes and faster recovery.
          </p>

          {/* Action CTAs: Explore Products & Get a Quote */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              to="/products"
              className="btn-cyan shadow-lg"
            >
              <span>Explore Products</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/request-a-quote"
              className="inline-flex items-center gap-2 rounded-lg bg-white/10 hover:bg-white/20 border border-white/25 px-6 py-3 min-h-[2.75rem] text-sm sm:text-[15px] font-semibold text-white backdrop-blur-xs transition-all hover:border-white/40 shadow-sm"
            >
              <FileText className="h-4 w-4 text-[#12C8E8]" />
              <span>Get a Quote</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
