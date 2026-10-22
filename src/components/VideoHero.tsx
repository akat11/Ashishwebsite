import { Link } from 'react-router-dom';
import { ArrowRight, FileText } from 'lucide-react';

export default function VideoHero() {
  return (
    <section className="relative isolate flex min-h-[380px] sm:min-h-[420px] lg:min-h-[450px] items-center overflow-hidden bg-[#18344e] pt-8 pb-16 sm:pt-10 sm:pb-20 lg:pt-12 lg:pb-20">
      {/* Unified, subtle multi-stop clinical slate gradient without harsh transitions */}
      <div className="absolute inset-0 bg-[linear-gradient(115deg,#224362_0%,#1c3751_38%,#162f46_72%,#112538_100%)] pointer-events-none" />

      {/* Gentle, balanced ambient light in the top-left for airy clinical depth without washing out */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_18%_25%,rgba(95,138,172,0.18)_0%,transparent_60%)] pointer-events-none" />

      {/* Instrument container with a gradual CSS alpha mask for a completely seamless, patch-free transition */}
      <div
        className="absolute inset-y-0 right-0 w-full sm:w-[68%] lg:w-[58%] xl:w-[54%] pointer-events-none overflow-hidden flex items-center justify-end z-0"
        style={{
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.3) 14%, rgba(0,0,0,0.85) 30%, black 45%, black 100%)',
          maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.3) 14%, rgba(0,0,0,0.85) 30%, black 45%, black 100%)',
        }}
      >
        <picture className="h-full w-full flex items-center justify-end pr-3 sm:pr-6 lg:pr-10 xl:pr-14 pt-2 sm:pt-4 pb-12 sm:pb-16 lg:pb-18">
          <source srcSet="/images/hero-orthopedic-surgical.webp" type="image/webp" />
          <img
            src="/images/hero-orthopedic-surgical.jpg"
            alt="Precision orthopedic implants and external fixation surgical hardware"
            className="h-full w-auto max-w-none object-contain object-right drop-shadow-md select-none transform-gpu"
            style={{ imageRendering: '-webkit-optimize-contrast' }}
          />
        </picture>
      </div>

      {/* Mobile overlay for text contrast on small mobile viewports */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1c3751]/95 via-[#1c3751]/80 to-transparent sm:hidden z-15 pointer-events-none" />

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
        </div>
      </div>
    </section>
  );
}
