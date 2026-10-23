import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface HomeCTAProps {
  onRequestCatalogue?: () => void;
}

export default function HomeCTA(props: HomeCTAProps) {
  void props;
  return (
    <section className="relative isolate overflow-hidden bg-[#05182C] text-white border-t border-white/10">
      {/* Background Orthopaedic Hardware & Instruments Image */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 bg-cover bg-no-repeat bg-[position:85%_center] sm:bg-[position:80%_center] lg:bg-[position:right_center] opacity-45 sm:opacity-55 lg:opacity-70 select-none"
        style={{
          backgroundImage: "url('/images/about-cta-background.png')",
          filter: 'contrast(1.08) brightness(0.92) saturate(0.85)',
        }}
      />

      {/* Atmospheric Ambient Lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/4 h-72 w-96 rounded-full bg-[#0875D1]/20 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 right-1/4 h-72 w-96 rounded-full bg-[#12C8E8]/15 blur-[120px]"
      />

      {/* Seamless Horizontal Fade: Smooth gradient blend across background image */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-1 bg-gradient-to-b from-[#05182C] via-[#05182C]/90 to-[#05182C] sm:bg-gradient-to-r sm:from-[#05182C] sm:via-[#05182C]/95 sm:via-45% md:via-50% lg:via-55% sm:to-transparent"
      />

      {/* Banner Content Container */}
      <div className="container-x relative z-10 py-14 sm:py-16 lg:py-20">
        <div className="max-w-2xl">
          
          {/* Eyebrow Label */}
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#38BDF8] mb-3">
            <span className="h-1.5 w-1.5 rounded-full bg-[#38BDF8]" />
            <span>YOUR ORTHOPAEDIC SUPPLY PARTNER</span>
          </div>

          {/* Heading */}
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl xl:text-[2.65rem] font-extrabold text-white tracking-tight leading-[1.18]">
            Need Reliable{' '}
            <span className="text-[#38BDF8]">Orthopaedic Supplies?</span>
          </h2>

          {/* Supporting Text */}
          <p className="mt-3.5 sm:mt-4 text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
            Connect with our team for product information, institutional quotations, and dependable orthopaedic supply support across India.
          </p>

          {/* Actions: Primary CTA Button and Secondary Text Link */}
          <div className="mt-8 flex flex-wrap items-center gap-4 sm:gap-6">
            <Link
              to="/request-a-quote"
              className="inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-[#0875D1] to-[#0fb2ce] hover:from-[#0983eb] hover:to-[#22c3df] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#0875D1]/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Request a Quote</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>

            <Link
              to="/contact-us"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-200 hover:text-white transition-colors group py-2"
            >
              <span>Talk to Our Team</span>
              <ArrowRight className="h-4 w-4 text-[#38BDF8] transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
