import { Link } from 'react-router-dom';
import {
  Gem,
  ShieldCheck,
  Truck,
  Headphones,
  ArrowRight,
  Building2,
  Boxes,
  Users,
  Star,
  Activity,
} from 'lucide-react';

export default function VideoHero() {
  return (
    <section className="relative overflow-hidden bg-[#031527] min-h-[500px] lg:h-[540px] xl:h-[580px] flex flex-col justify-between py-6 sm:py-8 lg:py-8">
      {/* Right-aligned surgical scene image - 100% clean with NO ghost text or old stats */}
      <div className="absolute right-0 top-0 bottom-0 w-full sm:w-[65%] lg:w-[58%] xl:w-[55%] z-0 select-none pointer-events-none">
        <img
          src="/images/hero-surgical-scene.jpg"
          alt="Orthopedic operating theatre and implants"
          className="h-full w-full object-cover object-left-top"
        />
        {/* Soft horizontal gradient fade on the left edge of the image */}
        <div className="absolute inset-y-0 left-0 w-28 sm:w-44 lg:w-56 bg-gradient-to-r from-[#031527] via-[#031527]/80 to-transparent" />
        {/* Soft bottom vignette */}
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#031527] via-[#031527]/60 to-transparent" />
      </div>

      {/* Main hero content container */}
      <div className="relative z-10 container-x flex-1 flex flex-col justify-center">
        {/* Confined left text block - strictly constrained so it never touches the surgical scene */}
        <div className="w-full max-w-[460px] lg:max-w-[480px] xl:max-w-[500px]">
          {/* Main headline - exactly 3 lines with whitespace-nowrap to prevent ugly wrapping */}
          <h1 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-[34px] xl:text-[38px] tracking-tight leading-[1.14]">
            <span className="block text-white whitespace-nowrap">Precision Orthopedic</span>
            <span className="block text-[#0866F5] whitespace-nowrap">Locking Plates.</span>
            <span className="block text-white whitespace-nowrap">Complete Fixation Solutions.</span>
          </h1>

          {/* Description */}
          <p className="mt-3.5 sm:mt-4 text-[13px] sm:text-[14px] lg:text-[15px] text-slate-200/90 leading-relaxed max-w-[420px] font-normal">
            Supplying high-quality orthopedic locking plates, external fixators, Ilizarov rings and
            fixation screws to hospitals, clinics and healthcare professionals across India.
          </p>

          {/* Four trust indicators in compact horizontal row with dividers */}
          <div className="mt-5 sm:mt-6 grid grid-cols-4 divide-x divide-white/15 max-w-[360px]">
            <div className="flex flex-col items-start pr-2.5">
              <Gem className="h-5 w-5 text-[#0866F5] stroke-[1.75]" />
              <span className="text-[10px] sm:text-[11px] font-medium text-white leading-tight mt-1.5">
                Premium
                <br />
                Quality
              </span>
            </div>
            <div className="flex flex-col items-start px-2.5">
              <ShieldCheck className="h-5 w-5 text-[#0866F5] stroke-[1.75]" />
              <span className="text-[10px] sm:text-[11px] font-medium text-white leading-tight mt-1.5">
                Trusted
                <br />
                Brands
              </span>
            </div>
            <div className="flex flex-col items-start px-2.5">
              <Truck className="h-5 w-5 text-[#0866F5] stroke-[1.75]" />
              <span className="text-[10px] sm:text-[11px] font-medium text-white leading-tight mt-1.5">
                Pan-India
                <br />
                Supply
              </span>
            </div>
            <div className="flex flex-col items-start pl-2.5">
              <Headphones className="h-5 w-5 text-[#0866F5] stroke-[1.75]" />
              <span className="text-[10px] sm:text-[11px] font-medium text-white leading-tight mt-1.5">
                Dedicated
                <br />
                Support
              </span>
            </div>
          </div>

          {/* Primary and secondary CTA buttons */}
          <div className="mt-5 sm:mt-6 flex flex-wrap items-center gap-2.5 sm:gap-3">
            <Link
              to="/request-a-quote"
              className="inline-flex items-center gap-1.5 rounded-lg bg-[#0866F5] hover:bg-[#0756d1] px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold text-white shadow-md transition-all hover:shadow-lg active:scale-[0.98]"
            >
              <span>Request a Quote</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center gap-1.5 rounded-lg border border-white/25 bg-[#06182c]/75 hover:bg-[#06182c] px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-white/45 active:scale-[0.98]"
            >
              <span>Explore Products</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom statistics bar & floating trust card */}
      <div className="relative z-10 container-x mt-6 sm:mt-8">
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-3 lg:gap-4">
          {/* Statistics Panel */}
          <div className="flex-1 rounded-xl border border-white/10 bg-[#06182c]/85 px-4 sm:px-5 py-2.5 sm:py-3 backdrop-blur-md shadow-xl">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10">
              {/* Stat 1 */}
              <div className="flex items-center gap-2.5 pr-2 sm:pr-3 py-1.5 md:py-0">
                <Building2 className="h-5 w-5 sm:h-6 sm:w-6 text-cyan-400 shrink-0 stroke-[1.75]" />
                <div>
                  <div className="text-base sm:text-lg font-display font-bold text-white leading-none">
                    500+
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-slate-300 font-medium mt-0.5 whitespace-nowrap">
                    Hospitals Supplied
                  </div>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="flex items-center gap-2.5 px-0 md:px-2.5 lg:px-3 py-1.5 md:py-0">
                <Boxes className="h-5 w-5 sm:h-6 sm:w-6 text-cyan-400 shrink-0 stroke-[1.75]" />
                <div>
                  <div className="text-base sm:text-lg font-display font-bold text-white leading-none">
                    5,000+
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-slate-300 font-medium mt-0.5 whitespace-nowrap">
                    Products
                  </div>
                </div>
              </div>

              {/* Stat 3 */}
              <div className="flex items-center gap-2.5 px-0 md:px-2.5 lg:px-3 py-1.5 md:py-0">
                <Users className="h-5 w-5 sm:h-6 sm:w-6 text-cyan-400 shrink-0 stroke-[1.75]" />
                <div>
                  <div className="text-base sm:text-lg font-display font-bold text-white leading-none">
                    10+
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-slate-300 font-medium mt-0.5 whitespace-nowrap">
                    Years of Experience
                  </div>
                </div>
              </div>

              {/* Stat 4 */}
              <div className="flex items-center gap-2.5 pl-0 md:pl-2.5 lg:px-3 py-1.5 md:py-0">
                <Star className="h-5 w-5 sm:h-6 sm:w-6 text-cyan-400 fill-cyan-400/20 shrink-0 stroke-[1.75]" />
                <div>
                  <div className="text-base sm:text-lg font-display font-bold text-white leading-none">
                    95%
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-slate-300 font-medium mt-0.5 whitespace-nowrap">
                    Client Satisfaction
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Trust Card */}
          <div className="shrink-0 lg:w-[260px] xl:w-[275px] rounded-xl border border-white/15 bg-[#06182c]/90 px-3.5 py-2.5 sm:py-3 backdrop-blur-md shadow-xl">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#0866F5] bg-[#0866F5]/20 text-[#00D5E8]">
                <Activity className="h-3.5 w-3.5" />
              </div>
              <div className="text-[11px] sm:text-xs font-semibold text-white leading-snug">
                Trusted by Leading
                <br />
                Hospitals &amp; Surgeons
              </div>
            </div>
            <div className="mt-2 flex items-center gap-1.5 pl-10.5">
              <img
                src="/images/hospital-1.jpg"
                alt="Partner Hospital"
                className="h-5 w-5 sm:h-5.5 sm:w-5.5 rounded-full border border-[#06182c] object-cover ring-1 ring-white/20"
              />
              <img
                src="/images/hospital-2.jpg"
                alt="Partner Hospital"
                className="h-5 w-5 sm:h-5.5 sm:w-5.5 rounded-full border border-[#06182c] object-cover ring-1 ring-white/20"
              />
              <img
                src="/images/hospital-3.jpg"
                alt="Partner Hospital"
                className="h-5 w-5 sm:h-5.5 sm:w-5.5 rounded-full border border-[#06182c] object-cover ring-1 ring-white/20"
              />
              <img
                src="/images/hospital-4.jpg"
                alt="Partner Hospital"
                className="h-5 w-5 sm:h-5.5 sm:w-5.5 rounded-full border border-[#06182c] object-cover ring-1 ring-white/20"
              />
              <div className="flex h-5 w-5 sm:h-5.5 sm:w-5.5 items-center justify-center rounded-full border border-white/20 bg-white/10 text-[10px] font-bold text-white">
                +
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
