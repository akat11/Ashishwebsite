import { Link } from 'react-router-dom';
import {
  ArrowRight,
  FileText,
  Package,
  Search,
  Truck,
  ClipboardList,
  Building2,
} from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import BottomCTA from '@/components/BottomCTA';
import PageHero from '@/components/PageHero';

const services = [
  {
    icon: Package,
    title: 'Hospital Implant Supply',
    description:
      'Direct scheduled supply of precision orthopaedic locking compression plates, intramedullary nails, modular external fixators, and cortical/cancellous screws across 11 core trauma categories.',
    image: '/images/services-product-supply-hd.jpg',
    to: '/products',
    badge: '110+ Fixation Systems',
  },
  {
    icon: FileText,
    title: 'Institutional & Tender Quotations',
    description:
      'Itemized, formal RFP proposals for tertiary care hospitals, defense healthcare institutions, and government medical colleges. Comprehensive rate-matching and hospital formulary compliance.',
    image: '/images/services-institutional-quotation-hd.jpg',
    to: '/request-a-quote',
    badge: 'Formal Proposals in 24h',
  },
  {
    icon: Building2,
    title: 'Bulk Procurement & Hospital Contracts',
    description:
      'Volume-based rate contracts and buffer-stock agreements for high-acuity trauma emergency centers and private hospital networks, guaranteeing consistent availability and pricing.',
    image: '/images/services-bulk-procurement-hd.jpg',
    to: '/request-a-quote',
    badge: 'Buffer Stock Management',
  },
  {
    icon: Search,
    title: 'Specialized Implant Sourcing',
    description:
      'Expert procurement assistance for rare anatomical fracture configurations, specialized pediatric osteotomy plates, and custom surgical instruments through our extensive manufacturer network.',
    image: '/images/services-product-sourcing-hd.jpg',
    to: '/contact-us',
    badge: 'Manufacturer Network',
  },
];

const processSteps = [
  {
    step: '01',
    icon: ClipboardList,
    title: 'Submit Clinical Schedule',
    description: 'Share your upcoming surgical requirements, size demands, or hospital tender schedule via portal, phone, or WhatsApp.',
  },
  {
    step: '02',
    icon: Search,
    title: 'Catalogue & Metallurgy Verification',
    description: 'Our technical clinical desk verifies hole configurations, screw trajectory angles, and material standards (SS 316L / Titanium Gr. 5).',
  },
  {
    step: '03',
    icon: FileText,
    title: 'Itemized Rate Proposal',
    description: 'We generate an itemized formal proposal with certified batch traceability and hospital rate contract terms.',
  },
  {
    step: '04',
    icon: Truck,
    title: 'Sterile-Safe Protective Dispatch',
    description: 'Hardware is packed in protective shock-absorbing containers and dispatched via express logistics within 24–48 hours.',
  },
];

export default function Services() {
  return (
    <>
      <SEO
        title="Orthopaedic Supply Services & Hospital Procurement | Vinayak Surgicals"
        description="Comprehensive orthopaedic supply services: product supply, institutional quotations, hospital tender fulfillment, and specialized trauma implant sourcing from Kanpur, India."
        canonical="https://vinyanaksurgicals.com/services"
        keywords="orthopedic supply services, hospital tender implants, bulk trauma plates, orthopedic procurement India, surgical instrument supply Kanpur"
        image="/images/services-product-supply-hd.jpg"
      />

      <Breadcrumbs crumbs={[{ label: 'Services' }]} />

      {/* Cinematic MedTech Hero */}
      <PageHero
        eyebrow="END-TO-END HEALTHCARE SERVICES"
        title={
          <>
            Comprehensive Supply &amp;{' '}
            <span className="bg-gradient-to-r from-[#12C8E8] via-[#38BDF8] to-[#93C5FD] bg-clip-text text-transparent">
              Institutional Sourcing Solutions
            </span>
          </>
        }
        subtitle="Supporting hospital purchase departments, surgical operating suites, and medical distributors with dependable inventory access, itemized tender quotations, and emergency trauma hardware fulfillment nationwide."
        backgroundImage="/images/services-hero-photo.jpg"
      />

      {/* 4 Core Services Showcase */}
      <section className="bg-white py-18 sm:py-24 border-b border-slate-200">
        <div className="container-x">
          <div className="max-w-2xl mb-12 sm:mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#0fb2ce] block mb-2">
              OUR PROCUREMENT CAPABILITIES
            </span>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#062D56] tracking-tight">
              Hospital Sourcing &amp; Procurement Services
            </h2>
            <p className="mt-2.5 text-sm sm:text-base text-slate-600 leading-relaxed">
              We offer structured supply programs designed to eliminate operating room delays and maintain reliable inventory across clinical trauma specialties.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="rounded-3xl bg-[#F8FAFC] border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      style={{ imageRendering: '-webkit-optimize-contrast' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#062D56]/80 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[#12C8E8] text-[11px] font-mono font-bold border border-white/15">
                      {service.badge}
                    </div>
                  </div>

                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <div className="flex items-center gap-2.5 mb-2">
                        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#0875D1]/10 text-[#0875D1]">
                          <Icon className="h-4.5 w-4.5" />
                        </div>
                        <h3 className="font-display text-lg sm:text-xl font-bold text-[#062D56] group-hover:text-[#0875D1] transition-colors">
                          {service.title}
                        </h3>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs font-bold text-[#0875D1]">
                      <Link to={service.to} className="inline-flex items-center gap-1.5 hover:text-[#062D56] transition-colors">
                        <span>Initiate Requisition</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Procurement Process Steps */}
      <section className="bg-[#020F1C] text-white py-20 sm:py-24 border-b border-white/10 relative overflow-hidden">
        <div
          className="pointer-events-none absolute -bottom-40 left-1/4 h-96 w-96 rounded-full bg-[#0875D1]/20 blur-[140px]"
          aria-hidden="true"
        />

        <div className="container-x relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#12C8E8] block mb-2">
              HOW WE OPERATE
            </span>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Hospital Supply in 4 Systematic Steps
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
              Our clinical logistics desk ensures zero ambiguity from surgical requirement matching to protective delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.step}
                  className="rounded-3xl p-6 bg-white/[0.05] border border-white/10 hover:border-[#12C8E8]/50 transition-all duration-300 backdrop-blur-md flex flex-col justify-between relative group"
                >
                  <span className="font-mono text-3xl font-extrabold text-[#12C8E8]/40 block mb-3 group-hover:text-[#12C8E8] transition-colors">
                    {step.step}
                  </span>
                  <div>
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#12C8E8]/15 border border-[#12C8E8]/30 text-[#12C8E8] mb-4">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-display text-base font-bold text-white mb-2 leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <BottomCTA
        eyebrow="START YOUR PROCUREMENT"
        title="Ready to Request a Formal Quotation for Your Facility?"
        description="Connect with our institutional logistics team in Kanpur for rate contract proposals, emergency surgery allocations, or customized instrument sets."
        primaryButtonText="Submit Formal Request"
        primaryButtonLink="/request-a-quote"
        secondaryButtonText="Contact Surgical Desk"
        secondaryButtonLink="/contact-us"
      />
    </>
  );
}
