import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  ClipboardList,
  GraduationCap,
  Hospital,
  PackageCheck,
  ShieldCheck,
  Truck,
  UsersRound,
  Award,
  Cpu,
  Microscope,
} from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import BottomCTA from '@/components/BottomCTA';
import PageHero from '@/components/PageHero';

const strategicPillars = [
  {
    icon: Microscope,
    title: 'Certified Surgical Metallurgy',
    description:
      'Raw biomaterials strictly compliant with ASTM F138 (Stainless Steel 316L) and ASTM F136 (Titanium Ti-6Al-4V ELI), verified via chemical composition and biocompatibility testing.',
  },
  {
    icon: Cpu,
    title: 'Precision 5-Axis CNC Tolerances',
    description:
      'High-precision continuous Swiss-type turning delivering tolerances down to ±0.01mm across anatomical contours, thread pitches, and variable angle screw holes.',
  },
  {
    icon: Award,
    title: '100% Batch Inspection & MTC',
    description:
      'Optical coordinate measuring (CMM) verification on 100% of manufactured implants, accompanied by verifiable Material Test Certificates and laser-marked lot codes.',
  },
  {
    icon: Truck,
    title: 'Rapid Hospital Logistics',
    description:
      'Centrally headquartered in Kanpur, Uttar Pradesh, dispatching emergency trauma fixation hardware and hospital replenishment within 24–48 hours nationwide.',
  },
];


const procurementSteps = [
  {
    step: '01',
    icon: ClipboardList,
    title: 'Clinical Requirement Audit',
    detail: 'We evaluate surgical schedules, anatomical trauma requirements, plate profiles, and screw diameter demands.',
  },
  {
    step: '02',
    icon: PackageCheck,
    title: 'Certified Implant Sourcing',
    detail: 'We assemble precision implants in SS 316L or Titanium Grade 5 adhering to strict quality assurance protocols.',
  },
  {
    step: '03',
    icon: Truck,
    title: 'Protective Packaging & Dispatch',
    detail: 'We prepare itemized institutional proposals and coordinate expedited dispatch in sterile-compatible protective transit containers.',
  },
];

const servedSectors = [
  { icon: Hospital, text: 'Tertiary Hospitals & Trauma Units' },
  { icon: GraduationCap, text: 'Government Medical Colleges & Tenders' },
  { icon: UsersRound, text: 'Orthopaedic Surgeons & OT Teams' },
  { icon: Truck, text: 'Regional Medical Distributors' },
];

export default function About() {
  return (
    <>
      <SEO
        title="About Us — Vinayak Surgicals | Precision Orthopaedic Implants & Healthcare Supply"
        description="Discover Vinayak Surgicals: Kanpur-based supplier of high-precision orthopaedic locking plates, intramedullary nails, external fixator systems, and surgical screws across India."
        canonical="https://vinyanaksurgicals.com/about-us"
        keywords="about vinayak surgicals, orthopedic implant supplier Kanpur, locking plate manufacturer India, trauma hardware supplier, orthopedic distributor Uttar Pradesh"
        image="/images/business-overview-surgery.png"
      />

      <Breadcrumbs crumbs={[{ label: 'About Us' }]} />

      {/* Cinematic MedTech Hero */}
      <PageHero
        eyebrow="ABOUT VINAYAK SURGICALS"
        title={
          <>
            Engineering Surgical Reliability &amp;{' '}
            <span className="bg-gradient-to-r from-[#12C8E8] via-[#38BDF8] to-[#93C5FD] bg-clip-text text-transparent">
              Healthcare Supply Across India
            </span>
          </>
        }
        subtitle="Headquartered in Kanpur, Uttar Pradesh, Vinayak Surgicals supplies certified orthopaedic implants, locking compression plates, intramedullary nails, and modular external fixation hardware to hospitals, trauma centers, and orthopaedic surgeons nationwide."
        backgroundImage="/images/business-overview-surgery.png"
        ctaPrimary={{
          text: 'Explore Implant Catalogue',
          to: '/products',
          icon: <ArrowRight className="h-4 w-4" />,
        }}
        ctaSecondary={{
          text: 'Request Institutional Rate Card',
          to: '/request-a-quote',
        }}
      />

      {/* Corporate Overview & Surgical Theatre Presentation */}
      <section className="bg-white py-18 sm:py-24">
        <div className="container-x">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#0fb2ce] block">
                OUR CLINICAL MISSION
              </span>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#062D56] tracking-tight leading-tight">
                Empowering Surgeons with Uncompromising Fixation Integrity
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Founded with a steadfast commitment to clinical metallurgy and dependable healthcare logistics, Vinayak Surgicals bridges the gap between high-precision implant engineering and frontline operating rooms.
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                From emergency open-trauma fracture stabilization with circular Ilizarov frames to delicate intra-articular distal radius reconstructions, our products undergo rigorous dimensional verification to ensure seamless intraoperative fit, stable biological fixation, and rapid patient recovery.
              </p>

              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700 font-medium">
                {[
                  'ASTM F138 SS 316L & ASTM F136 Titanium Gr. 5',
                  'Full Material Test Certificates (MTC) on demand',
                  'Dedicated instrument sets with drill guides & taps',
                  'Emergency trauma hospital dispatch within 24–48h',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-[#0875D1]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-2xl relative group">
                <img
                  src="/images/business-overview-surgery.png"
                  alt="Orthopaedic surgeons performing precision bone fixation"
                  className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#062D56]/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#12C8E8] text-[#031525] text-[11px] font-mono font-bold mb-1 shadow-xs">
                    <ShieldCheck className="h-3.5 w-3.5" />
                    <span>HOSPITAL TENDER TESTED</span>
                  </div>
                  <p className="text-xs text-slate-200">
                    Trusted across premier medical colleges, trauma emergency centers, and corporate hospitals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Strategic Engineering Pillars */}
      <section className="bg-[#020F1C] text-white py-20 sm:py-24 border-y border-white/10 relative overflow-hidden">
        <div
          className="pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full bg-[#12C8E8]/10 blur-[130px]"
          aria-hidden="true"
        />
        <div className="container-x relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#12C8E8] block mb-2">
              MANUFACTURING &amp; QUALITY ASSURANCE
            </span>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Built on Unyielding Engineering Standards
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
              Every locking plate, intramedullary nail, and external clamp is manufactured to tight international tolerances to support optimal clinical outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {strategicPillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="rounded-3xl p-6 bg-white/[0.05] border border-white/10 hover:border-[#12C8E8]/50 transition-all duration-300 backdrop-blur-md flex flex-col justify-between"
                >
                  <div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#12C8E8]/15 border border-[#12C8E8]/30 text-[#12C8E8] mb-5">
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
        </div>
      </section>

      {/* Procurement & Delivery Process Lifecycle */}
      <section className="bg-white py-18 sm:py-24 border-b border-slate-200">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0fb2ce] block mb-2">
              HOSPITAL PROCUREMENT PIPELINE
            </span>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#062D56] tracking-tight">
              Streamlined Surgical Sourcing
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
              From requirement review to sterile-compatible protective delivery, our process ensures prompt, error-free fulfillment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {procurementSteps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.step}
                  className="rounded-3xl p-7 bg-[#F8FAFC] border border-slate-200 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between relative"
                >
                  <span className="absolute top-6 right-6 font-mono text-3xl font-extrabold text-slate-200">
                    {step.step}
                  </span>
                  <div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0875D1]/10 text-[#0875D1] mb-5">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-display text-base sm:text-lg font-bold text-[#062D56] mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {step.detail}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Distribution Network & Coverage */}
      <section className="bg-[#F8FAFC] py-18 sm:py-24">
        <div className="container-x">
          <div className="rounded-3xl bg-gradient-to-r from-[#062D56] via-[#093d73] to-[#0875D1] text-white p-8 sm:p-12 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#12C8E8]">
                  PAN-INDIA LOGISTICS NETWORK
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                  Rapid Fulfillment From Our Central Kanpur Hub
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed max-w-xl">
                  Strategic transit connectivity allows us to ship scheduled hospital stock and emergency trauma inventory with full batch certificates to healthcare facilities in all major Indian cities within 24 to 48 hours.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
                  {servedSectors.map((sector) => {
                    const Icon = sector.icon;
                    return (
                      <div
                        key={sector.text}
                        className="p-3 rounded-xl bg-white/10 border border-white/15 text-center flex flex-col items-center justify-center gap-1.5"
                      >
                        <Icon className="h-5 w-5 text-[#12C8E8]" />
                        <span className="text-[11px] font-medium text-slate-200 leading-tight">
                          {sector.text}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center">
                <div className="p-6 rounded-2xl bg-black/30 border border-white/20 backdrop-blur-md text-center max-w-sm w-full">
                  <span className="text-xs font-mono text-[#12C8E8] block mb-1">
                    CENTRAL CONTACT DESK
                  </span>
                  <span className="font-display text-xl sm:text-2xl font-bold text-white block">
                    +91 99355 55555
                  </span>
                  <p className="text-xs text-slate-300 mt-2">
                    Available for institutional tender inquiries, surgeon consultations, and urgent case replenishment.
                  </p>
                  <Link
                    to="/contact-us"
                    className="btn-cyan text-xs mt-4 w-full justify-center"
                  >
                    <span>Contact Sourcing Coordinator</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <BottomCTA
        eyebrow="READY TO PARTNER?"
        title="Equip Your Surgical Suites with Certified Fixation Hardware"
        description="Connect with our Kanpur headquarters team for hospital rate contracts, itemized quotations, or customized instrument set allocations."
        primaryButtonText="Request Institutional Quote"
        primaryButtonLink="/request-a-quote"
        secondaryButtonText="Explore Products"
        secondaryButtonLink="/products"
      />
    </>
  );
}
