import { Link } from 'react-router-dom';
import { ArrowRight, FileText } from 'lucide-react';

export default function VideoHero() {
  return (
    <section className="relative isolate flex min-h-[380px] sm:min-h-[420px] lg:min-h-[450px] items-center overflow-hidden bg-[#032449] pt-8 pb-16 sm:pt-10 sm:pb-20 lg:pt-12 lg:pb-20">
      {/* Background ambient radial glow */}
      <div className="absolute inset-y-0 left-0 w-full lg:w-1/2 bg-[radial-gradient(ellipse_at_top_left,rgba(18,200,232,0.12),transparent_70%)] pointer-events-none" />

      {/* Main Content Container matching Header container-x exactly */}
      <div className="container-x relative z-10 w-full">
        <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between min-h-[300px] sm:min-h-[330px] lg:min-h-[360px]">
          {/* Left Column: Text Content aligned with Header Logo */}
          <div className="max-w-[520px] lg:max-w-[540px] z-20 shrink-0">
            {/* Eyebrow badge in uppercase cyan */}
            <span className="text-xs sm:text-[13px] font-extrabold uppercase tracking-[0.18em] text-[#12C8E8]">
              Orthopaedic Solutions
            </span>

            {/* Master H1 headline with white and cyan emphasis */}
            <h1 className="mt-2.5 sm:mt-3 font-display text-[clamp(1.85rem,3.2vw+0.5rem,2.85rem)] font-extrabold leading-[1.12] tracking-tight text-white">
              Precision Orthopaedic <br />
              <span className="text-[#12C8E8]">Complete Fixation Solutions</span>
            </h1>

            {/* Concise supporting description */}
            <p className="mt-3 max-w-[480px] text-sm sm:text-base leading-relaxed text-[#cad6e2]">
              High quality orthopaedic implants and external fixation systems for better patient outcomes and faster recovery.
            </p>

            {/* Action CTAs: Explore Products & Get a Quote */}
            <div className="mt-6 sm:mt-7 flex flex-wrap items-center gap-3.5">
              <Link
                to="/products"
                className="btn-cyan shadow-md text-xs sm:text-sm py-2.5 px-5 sm:py-3 sm:px-6"
              >
                <span>Explore Products</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/request-a-quote"
                className="inline-flex items-center gap-2 rounded-lg bg-white/10 hover:bg-white/20 border border-white/25 px-5 py-2.5 sm:px-6 sm:py-3 min-h-[2.5rem] sm:min-h-[2.75rem] text-xs sm:text-sm font-semibold text-white backdrop-blur-xs transition-all hover:border-white/40 shadow-xs"
              >
                <FileText className="h-4 w-4 text-[#12C8E8]" />
                <span>Get a Quote</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Hero Image Container showing complete, unclipped instruments matching the reference */}
          <div className="absolute right-0 top-0 bottom-0 w-full sm:w-[68%] lg:w-[60%] xl:w-[56%] pointer-events-none overflow-hidden flex items-center justify-end z-10">
            <picture className="h-full w-full flex items-center justify-end">
              <source srcSet="/images/hero-orthopedic-surgical.webp" type="image/webp" />
              <img
                src="/images/hero-orthopedic-surgical.jpg"
                alt="Precision orthopedic implants and external fixation surgical hardware"
                className="h-full w-auto max-w-none object-contain object-right"
              />
            </picture>

            {/* Smooth transition from dark navy into bright surgical table without darkening the instruments */}
            <div className="absolute inset-y-0 left-0 w-32 sm:w-44 lg:w-56 bg-gradient-to-r from-[#032449] via-[#032449]/70 to-transparent pointer-events-none" />
          </div>

          {/* Mobile overlay for text contrast on small mobile viewports */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#032449] via-[#032449]/95 to-[#032449]/60 sm:hidden z-15 pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
