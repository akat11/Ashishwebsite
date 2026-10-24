import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  FileText,
  ShieldCheck,
  Gem,
  Settings,
  Users,
  Globe,
  Sparkles,
  Activity,
} from 'lucide-react';
import { businessConfig } from '@/config/business';

interface HeroStatConfig {
  readonly id: string;
  readonly displayValue: string;
  readonly label: string;
  readonly highlight?: boolean;
  readonly numericTarget?: number;
  readonly suffix?: string;
}

function HeroStatCounterItem({
  stat,
  startAnimation,
}: {
  stat: HeroStatConfig;
  startAnimation: boolean;
}) {
  const [display, setDisplay] = useState(stat.displayValue);

  useEffect(() => {
    if (!stat.numericTarget || !startAnimation) {
      setDisplay(stat.displayValue);
      return;
    }

    if (typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
      setDisplay(stat.displayValue);
      return;
    }

    const duration = 1200;
    const target = stat.numericTarget;
    const suffix = stat.suffix || '';
    let startTimestamp: number | null = null;
    let frameId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // Cubic ease-out
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const currentVal = Math.round(easedProgress * target);

      if (progress < 1) {
        setDisplay(`${currentVal}${suffix}`);
        frameId = requestAnimationFrame(step);
      } else {
        setDisplay(stat.displayValue);
      }
    };

    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, [stat, startAnimation]);

  return (
    <div>
      <span
        className={`font-display text-xl sm:text-2xl font-extrabold block ${
          stat.highlight ? 'text-[#12C8E8]' : 'text-white'
        }`}
      >
        {display}
      </span>
      <span className="text-[11px] sm:text-xs text-slate-400">
        {stat.label}
      </span>
    </div>
  );
}

// 3 flagship genuine orthopaedic implants featured in the cinematic hero studio
const heroImplants = [
  {
    id: 'volar-radius',
    name: 'Volar Distal Radius Locking Plate 2.7mm',
    shortName: 'Volar Distal Radius 2.7mm',
    category: 'Trauma & Upper Extremity',
    slug: 'volar-distal-radius-locking-plate-2-7mm',
    categorySlug: 'distal-radius-locking-plates',
    image: '/images/products/volar-distal-radius-locking-plate-2-7mm.jpg',
    material: 'Titanium Grade 5 (Ti-6Al-4V ELI) & SS 316L',
    holes: '3, 4, 5, 6, 7 Holes',
    specifications: [
      { label: 'Head Geometry', val: 'Volar Anatomic Buttress' },
      { label: 'Screws', val: '2.7mm Locking / 2.7mm Cortex' },
      { label: 'Surface', val: 'Passivated & Electro-Polished' },
      { label: 'Traceability', val: 'Laser Heat Code Etched' },
    ],
    advantage: 'Divergent subchondral locking screw trajectory providing angular stability and preventing dorsal collapse without tendon irritation.',
  },
  {
    id: 'tibia-plate',
    name: 'Proximal Tibia Medial Locking Plate',
    shortName: 'Proximal Tibia Medial Plate',
    category: 'Knee & Lower Extremity',
    slug: 'proximal-tibia-medial-locking-plate-3-5mm-4-5mm-combo',
    categorySlug: 'tibia-locking-plates',
    image: '/images/categories/tibia-locking-plates.jpg',
    material: 'Titanium Grade 5 & SS 316L',
    holes: '4 to 12 Holes (Left / Right)',
    specifications: [
      { label: 'Head Geometry', val: 'Anatomical Metadiaphyseal' },
      { label: 'Screws', val: '3.5mm & 4.5mm Combo Holes' },
      { label: 'Profile', val: 'Low-profile tapered tip' },
      { label: 'Tolerances', val: '±0.01mm 5-Axis CNC' },
    ],
    advantage: 'Low-profile metadiaphyseal anatomical contour with combi-holes allowing compression and fixed-angle locking in complex plateau splits.',
  },
  {
    id: 'pfna-nail',
    name: 'Intramedullary PFN / PFNA Femoral Nailing System',
    shortName: 'Intramedullary PFN / PFNA',
    category: 'Trochanteric & Femoral Fractures',
    slug: 'expert-tibial-nail',
    categorySlug: 'nailing-systems',
    image: '/images/categories/nailing-systems.jpg',
    material: 'Titanium Grade 5 / SS 316L',
    holes: 'Multi-plane dynamic locking',
    specifications: [
      { label: 'Fixation', val: 'Dynamic Helical Blade' },
      { label: 'Biomechanics', val: 'Load-Sharing Axis' },
      { label: 'Angles', val: '125°, 130°, 135° CCD' },
      { label: 'Compliance', val: 'ASTM F138 / ISO 13485' },
    ],
    advantage: 'Compaction helical blade system maximizing bone purchase in osteoporotic femoral neck and preventing rotational cutout.',
  },
];

// Floating hero benefits matching reference claims
const heroBenefits = [
  {
    icon: Gem,
    title: 'Certified Biomaterials',
    description: 'Implant-Grade Ti-6Al-4V ELI & SS 316L (ASTM F138)',
  },
  {
    icon: Settings,
    title: '110+ Fixation Systems',
    description: 'Trauma plates, intramedullary nails, Ilizarov ring frames',
  },
  {
    icon: Users,
    title: 'Surgical Instrument Sets',
    description: 'Dedicated sets with surgeon & hospital technical support',
  },
  {
    icon: Globe,
    title: 'Pan-India Distribution',
    description: 'Kanpur central hub with 24-48h emergency hospital dispatch',
  },
];

export default function CinematicHero() {
  const [activeImplantIndex, setActiveImplantIndex] = useState(0);
  const activeImplant = heroImplants[activeImplantIndex];

  // Interactive 3D mouse parallax tilt
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Stats viewport observer for subtle count-up trigger
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    const node = statsRef.current;
    if (!node) return;

    if (typeof IntersectionObserver === 'undefined') {
      setStatsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const ry = ((x - centerX) / centerX) * 8; // -8 to +8 degrees
    const rx = -((y - centerY) / centerY) * 8; // -8 to +8 degrees
    setTilt({ rx, ry });
  };

  const handleMouseLeave = () => {
    setTilt({ rx: 0, ry: 0 });
  };

  return (
    <section className="relative isolate overflow-hidden bg-[#020F1C] text-white pb-16 sm:pb-24 lg:pb-28">
      {/* 1. Cinematic Studio Background: Multi-point lighting & Vignette */}
      <div
        className="absolute inset-0 pointer-events-none opacity-25 select-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(18,200,232,0.2) 1px, transparent 0)',
          backgroundSize: '36px 36px',
        }}
        aria-hidden="true"
      />

      {/* Volumetric Radial Glows simulating hospital theater overhead illumination */}
      <div
        className="absolute -top-32 -left-32 w-[650px] h-[650px] rounded-full bg-gradient-to-br from-[#0875D1]/25 via-[#12C8E8]/12 to-transparent blur-[140px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/4 right-0 w-[700px] h-[700px] rounded-full bg-gradient-to-bl from-[#12C8E8]/18 via-[#0875D1]/15 to-transparent blur-[150px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#020F1C] to-transparent pointer-events-none"
        aria-hidden="true"
      />

      {/* Live Surgical Telemetry Bar - Compact Strip (48-52px) */}
      <div className="relative z-20 border-b border-white/10 bg-[#020F1C]/60 backdrop-blur-xs">
        <div className="container-x min-h-[48px] sm:min-h-[50px] py-2.5 sm:py-3 flex flex-wrap items-center justify-between gap-x-6 gap-y-1.5 text-xs text-slate-300">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#12C8E8] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#12C8E8]" />
            </span>
            <span className="font-mono uppercase tracking-wider text-[11px] text-[#12C8E8] font-bold">
              ORTHOPAEDIC IMPLANT ENGINEERING // KANPUR CENTRAL HUB
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6 font-mono text-[11px] text-slate-400">
            <span className="flex items-center gap-1.5 text-slate-300">
              <ShieldCheck className="h-3.5 w-3.5 text-[#12C8E8] shrink-0" />
              ISO 13485 CERTIFIED
            </span>
            <span>TOLERANCE: ±0.01MM CNC</span>
            <span>HOSPITAL DISPATCH: 24–48H</span>
          </div>
        </div>
      </div>

      <div className="container-x relative z-10 pt-8 sm:pt-12 lg:pt-14">
        {/* Main Grid: Left Storytelling Headline & Right 3D Cinematic Studio */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column (6.5 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-xs font-semibold text-[#12C8E8] backdrop-blur-md border border-white/15 shadow-inner">
              <Sparkles className="h-3.5 w-3.5" />
              <span>International Orthopaedic Standard</span>
            </div>

            <h1 className="font-display text-[clamp(2.1rem,3.8vw+0.8rem,3.85rem)] font-extrabold leading-[1.08] tracking-tight text-white">
              Architects of Skeletal Stability. <br />
              <span className="bg-gradient-to-r from-[#12C8E8] via-[#38BDF8] to-[#93C5FD] bg-clip-text text-transparent">
                Precision Orthopaedic Solutions
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Engineering anatomical locking plates, trauma intramedullary nails, modular external fixators, and precision surgical screws for hospitals, emergency trauma institutes, and orthopaedic surgeons across India.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                to="/products"
                className="btn-cyan text-sm sm:text-base py-3 px-6 shadow-lg shadow-[#12C8E8]/25 hover:shadow-[#12C8E8]/40"
              >
                <span>Explore Complete Catalogue</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/request-a-quote"
                className="inline-flex items-center gap-2.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 px-6 py-3 text-sm sm:text-base font-semibold text-white backdrop-blur-sm transition-all hover:border-white/40"
              >
                <FileText className="h-4 w-4 text-[#12C8E8]" />
                <span>Request Institutional Quote</span>
              </Link>
            </div>

            {/* Mini Proof Counters */}
            <div
              ref={statsRef}
              className="pt-4 grid grid-cols-3 gap-4 border-t border-white/10 max-w-lg"
            >
              {businessConfig.heroStatistics.map((stat) => (
                <HeroStatCounterItem
                  key={stat.id}
                  stat={stat}
                  startAnimation={statsVisible}
                />
              ))}
            </div>
          </div>

          {/* Right Column: Immersive 3D Studio Stage (5.5 cols) */}
          <div
            className="lg:col-span-5"
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className="relative rounded-3xl bg-gradient-to-b from-white/[0.12] via-white/[0.04] to-transparent p-6 sm:p-7 backdrop-blur-2xl border border-white/20 shadow-2xl overflow-hidden transition-transform duration-200 ease-out"
              style={{
                transform: `perspective(1000px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Studio Backdrop Metallic Reflection & Rim Light */}
              <div
                className="absolute inset-0 pointer-events-none opacity-40"
                style={{
                  background:
                    'radial-gradient(ellipse at 50% 30%, rgba(18,200,232,0.25) 0%, rgba(8,117,209,0.1) 40%, transparent 75%)',
                }}
              />

              {/* Top Studio Controls: Active System Switcher */}
              <div className="relative z-10 flex items-center justify-between pb-4 border-b border-white/10 text-xs font-mono">
                <div className="flex items-center gap-2">
                  <Activity className="h-4 w-4 text-[#12C8E8]" />
                  <span className="text-slate-200 font-bold uppercase tracking-wider">
                    Surgical Spotlight
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  {heroImplants.map((imp, idx) => (
                    <button
                      key={imp.id}
                      onClick={() => setActiveImplantIndex(idx)}
                      className={`h-2.5 rounded-full transition-all duration-300 ${
                        activeImplantIndex === idx
                          ? 'w-7 bg-[#12C8E8]'
                          : 'w-2.5 bg-white/30 hover:bg-white/60'
                      }`}
                      aria-label={`Inspect ${imp.name}`}
                    />
                  ))}
                </div>
              </div>

              {/* Implant Visual Stage with Depth Contact Shadows */}
              <div className="relative py-6 flex flex-col items-center select-none">
                {/* Luminous Contact Pedestal Shadow */}
                <div className="absolute inset-x-12 top-1/2 -translate-y-1/2 h-44 rounded-full bg-gradient-to-r from-[#0875D1]/35 via-[#12C8E8]/25 to-[#0875D1]/35 blur-3xl pointer-events-none" />

                <div className="relative z-10 w-full aspect-[4/3] max-h-68 flex items-center justify-center p-3">
                  <picture className="h-full w-full flex items-center justify-center">
                    {activeImplant.image?.endsWith('.jpg') && (
                      <source srcSet={activeImplant.image.replace(/\.jpg$/, '.webp')} type="image/webp" />
                    )}
                    <img
                      src={activeImplant.image}
                      alt={activeImplant.name}
                      fetchPriority="high"
                      decoding="async"
                      className="max-h-full max-w-full object-contain filter drop-shadow-[0_20px_35px_rgba(0,0,0,0.8)] transform transition-transform duration-500 hover:scale-105"
                    />
                  </picture>
                </div>

                {/* Implant Title & Biomechanical Overview */}
                <div className="w-full mt-2 text-center relative z-10">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#12C8E8] font-bold block">
                    {activeImplant.category}
                  </span>
                  <h3 className="font-display text-base sm:text-lg font-bold text-white mt-0.5">
                    {activeImplant.name}
                  </h3>
                  <p className="text-xs text-slate-300 mt-1 max-w-sm mx-auto leading-relaxed">
                    {activeImplant.advantage}
                  </p>
                </div>

                {/* Studio Engineering Specs Grid */}
                <div className="w-full mt-4 grid grid-cols-2 gap-2 text-[11px] font-mono bg-black/40 rounded-2xl p-3.5 border border-white/10 relative z-10">
                  {activeImplant.specifications.map((spec) => (
                    <div key={spec.label} className="flex flex-col">
                      <span className="text-slate-400 text-[10px] uppercase">{spec.label}:</span>
                      <span className="text-slate-200 font-semibold truncate">{spec.val}</span>
                    </div>
                  ))}
                </div>

                {/* Bottom Navigation & Specs Link */}
                <div className="w-full mt-4 flex items-center justify-between gap-3 pt-2 relative z-10">
                  <div className="flex gap-1.5">
                    {heroImplants.map((imp, idx) => (
                      <button
                        key={imp.id}
                        onClick={() => setActiveImplantIndex(idx)}
                        className={`text-[11px] font-mono font-medium px-2.5 py-1 rounded-lg border transition-all ${
                          activeImplantIndex === idx
                            ? 'bg-[#12C8E8]/20 border-[#12C8E8] text-[#12C8E8] font-bold'
                            : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
                        }`}
                      >
                        0{idx + 1}
                      </button>
                    ))}
                  </div>

                  <Link
                    to={`/products/${activeImplant.categorySlug}/${activeImplant.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#12C8E8] hover:text-white transition-colors"
                  >
                    <span>Inspect Monograph</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Verified Trust Matrix Bar */}
        <div className="mt-12 sm:mt-16 rounded-2xl bg-gradient-to-r from-white/[0.08] via-white/[0.04] to-white/[0.08] p-5 sm:p-7 backdrop-blur-md border border-white/15 shadow-xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-white/10">
            {heroBenefits.map(({ icon: Icon, title, description }, idx) => (
              <div
                key={title}
                className={`flex items-start gap-4 ${
                  idx === 0
                    ? 'lg:pr-6'
                    : idx === heroBenefits.length - 1
                      ? 'lg:pl-6'
                      : 'lg:px-6'
                }`}
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#12C8E8]/15 border border-[#12C8E8]/30 text-[#12C8E8]">
                  <Icon className="h-5 w-5" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="font-display text-sm sm:text-[15px] font-bold text-white leading-tight">
                    {title}
                  </h3>
                  <p className="mt-1 text-xs text-slate-300 leading-snug">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
