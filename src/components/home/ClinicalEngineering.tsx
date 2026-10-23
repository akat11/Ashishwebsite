import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  Cpu,
  Microscope,
  FileCheck,
  Truck,
  Award,
} from 'lucide-react';

const engineeringPillars = [
  {
    icon: Microscope,
    title: 'Certified Biomaterials',
    description:
      'Raw materials sourced exclusively in compliance with ASTM F138 (SS 316L) and ASTM F136 (Titanium Ti-6Al-4V ELI) with chemical composition verification.',
  },
  {
    icon: Cpu,
    title: '5-Axis Precision CNC Machining',
    description:
      'Continuous 5-axis Swiss-type turning and milling delivering ±0.01mm tolerances on anatomical curvature and thread pitch.',
  },
  {
    icon: FileCheck,
    title: 'Full Batch Traceability',
    description:
      'Laser-marked heat codes and lot identifiers on every plate, nail, and screw, backed by certified Material Test Certificates (MTC).',
  },
  {
    icon: Truck,
    title: 'Rapid Hospital Logistics',
    description:
      'Strategically located Kanpur logistics hub dispatching emergency trauma inventory and scheduled surgical sets across India within 24–48 hours.',
  },
];

const clinicalStats = [
  { value: '110+', label: 'Fixation Systems' },
  { value: '±0.01mm', label: 'CNC Tolerance' },
  { value: '100%', label: 'Dimensional Inspection' },
  { value: '24-48h', label: 'Hospital Dispatch' },
];

export default function ClinicalEngineering() {
  return (
    <section className="relative isolate overflow-hidden bg-[#031A30] py-20 sm:py-28 text-white">
      {/* Background Volumetric Glows */}
      <div
        className="pointer-events-none absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-[#0875D1]/20 blur-[140px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#12C8E8]/15 blur-[140px]"
        aria-hidden="true"
      />

      <div className="container-x relative z-10">
        {/* Main 2-Column Overview */}
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Narrative Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#12C8E8]/15 px-3.5 py-1 text-xs font-mono font-bold uppercase tracking-wider text-[#12C8E8] border border-[#12C8E8]/30">
              <Award className="h-3.5 w-3.5" />
              <span>ABOUT VINAYAK ORTHOPAEDIC SOLUTIONS</span>
            </div>

            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight">
              Built for Surgical Excellence &amp; Dependable Healthcare Supply
            </h2>

            <p className="text-base sm:text-lg font-semibold text-[#12C8E8]">
              Kanpur-Based Manufacturing &amp; Distribution Hub &bull; Pan-India Hospital Network
            </p>

            <p className="text-sm sm:text-base leading-relaxed text-slate-300">
              Vinayak Orthopaedic Solutions is a premier supplier of high-precision orthopaedic implants, locking compression plate systems, modular external fixators, intramedullary nails, and specialized surgical instrument sets. We partner directly with healthcare institutions, trauma centers, and medical distributors across India to support optimal surgical outcomes and patient recovery.
            </p>

            {/* Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2 text-sm text-slate-200">
              {[
                'Implant-Grade Titanium Gr. 5 & SS 316L',
                '100% Coordinate Measuring (CMM) Verification',
                'Full Batch Traceability & MTC Certificates',
                'Institutional Supply & Hospital Tender Fulfillment',
              ].map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-[#12C8E8] mt-0.5" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap gap-4">
              <Link to="/about-us" className="btn-cyan text-sm sm:text-base py-3 px-6">
                <span>Learn More About Us</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/request-a-quote"
                className="inline-flex items-center gap-2 rounded-lg bg-white/10 hover:bg-white/20 border border-white/25 px-6 py-3 text-sm sm:text-base font-semibold text-white backdrop-blur-xs transition-all hover:border-white/40"
              >
                <span>Request Hospital Quotation</span>
              </Link>
            </div>
          </div>

          {/* Right Image Presentation (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl group">
              <img
                src="/images/business-overview-surgery.png"
                alt="Orthopaedic surgical team operating with precision titanium fixation instruments"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#031A30] via-transparent to-transparent pointer-events-none" />

              {/* Floating Live Telemetry Badge on Image */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-black/70 backdrop-blur-md border border-white/15 text-xs">
                <div className="flex items-center justify-between text-[#12C8E8] font-mono font-bold mb-1">
                  <span>CLINICAL THEATER STANDARD</span>
                  <span className="flex items-center gap-1 text-emerald-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    STERILE READY
                  </span>
                </div>
                <p className="text-slate-300 text-[11.5px] leading-snug">
                  Precision engineered to integrate seamlessly with standard orthopaedic drill guides and AO-compatible torque drivers.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="mt-16 sm:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {engineeringPillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="rounded-2xl p-6 bg-white/[0.05] border border-white/10 hover:border-[#12C8E8]/40 transition-all duration-300 backdrop-blur-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#12C8E8]/15 border border-[#12C8E8]/30 text-[#12C8E8] mb-4">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-base font-bold text-white mb-2 leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Clinical Statistics Strip */}
        <div className="mt-12 sm:mt-16 rounded-2xl bg-gradient-to-r from-white/[0.08] via-white/[0.04] to-white/[0.08] p-6 sm:p-8 backdrop-blur-md border border-white/15">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            {clinicalStats.map((stat, i) => (
              <div key={stat.label} className={i !== 0 ? 'pt-4 sm:pt-0' : ''}>
                <span className="font-display text-2xl sm:text-4xl font-extrabold text-[#12C8E8] block tracking-tight">
                  {stat.value}
                </span>
                <span className="mt-1 text-xs sm:text-sm text-slate-300 block font-medium">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
