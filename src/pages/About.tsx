import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  ClipboardList,
  Eye,
  GraduationCap,
  Headset,
  Hospital,
  Map,
  MapPin,
  PackageCheck,
  Search,
  ShieldCheck,
  Target,
  Truck,
  UsersRound,
} from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import BottomCTA from '@/components/BottomCTA';

const coverage = [
  {
    icon: MapPin,
    title: 'Kanpur & Uttar Pradesh',
    detail: 'Primary regional supply hub with direct local hospital delivery capability.',
  },
  {
    icon: Search,
    title: 'Pan-India Distribution',
    detail: 'We actively cater to institutional orders across all Indian states and union territories.',
  },
  {
    icon: Building2,
    title: 'Healthcare Institutions',
    detail: 'Supplying hospitals, orthopedic trauma centers, nursing homes, and medical colleges.',
  },
];

const procurement = [
  {
    icon: ClipboardList,
    title: 'Understand Requirements',
    detail: 'We start by evaluating your specific clinical implant needs, sizing, and procedural schedule.',
  },
  {
    icon: PackageCheck,
    title: 'Source Certified Products',
    detail: 'We supply high-grade implant materials conforming strictly to clinical metallurgy standards.',
  },
  {
    icon: Truck,
    title: 'Quote & Deliver',
    detail: 'We provide itemized institutional quotations and coordinate dispatch with protective transit packaging.',
  },
];

const servedBy = [
  { icon: Hospital, text: 'Hospitals & Trauma Centers' },
  { icon: GraduationCap, text: 'Medical Colleges & Institutes' },
  { icon: UsersRound, text: 'Orthopedic Surgeons' },
  { icon: Map, text: 'Pan-India Enquiries' },
];

export default function About() {
  return (
    <>
      <SEO
        title="About Us — Vinayak Surgicals | Orthopedic Implants & Fixation Partner in Kanpur"
        description="Learn about Vinayak Surgicals, supplying orthopedic locking plates, external fixator systems, Ilizarov circular rings, and fixation components to hospitals and surgeons across Uttar Pradesh and India."
        canonical="https://vinyanaksurgicals.com/about-us"
        keywords="about vinayak surgicals, orthopedic implant supplier, external fixator supplier, locking plate distributor, trauma implants Kanpur, Uttar Pradesh, medical supply India"
        image="/images/business-overview-surgery.png"
      />

      <Breadcrumbs crumbs={[{ label: 'About Us' }]} />

      {/* Hero Section with Restored Surgical Image Backdrop */}
      <section aria-label="About Vinayak Surgicals" className="hero-standard bg-[#F4F8FB] border-b border-[#E0E8EF]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-25 sm:opacity-30 md:inset-y-0 md:left-auto md:right-0 md:w-[55%] md:opacity-40 lg:opacity-50"
          style={{ backgroundImage: "url('/images/business-overview-surgery.png')" }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-[#F4F8FB]/90 via-[#F4F8FB]/95 to-[#F4F8FB] md:bg-gradient-to-r md:from-[#F4F8FB] md:via-[#F4F8FB]/95 md:via-55% md:to-transparent"
        />

        <div className="container-x relative z-10 w-full">
          <div className="hero-standard-inner">
            <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <span className="section-eyebrow">
                About Vinayak Surgicals
              </span>
              <h1 className="mt-3 text-page-title">
                Kanpur-Based Surgical Implants &amp;{' '}
                <span className="text-[#159A9C]">Medical Supply Company</span>
              </h1>
              <p className="mt-4 text-body-large max-w-2xl">
                Vinayak Surgicals is a dedicated medical equipment supplier based in Kanpur, Uttar Pradesh, supplying precision orthopedic locking plates, external fixators, circular rings, and trauma fixation instruments to hospitals, surgical clinics, and healthcare institutions across India.
              </p>

              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs sm:text-sm font-semibold text-[#172B3A]">
                {[
                  { icon: ShieldCheck, text: 'Trusted by Surgeons' },
                  { icon: PackageCheck, text: '10 Product Categories' },
                  { icon: Map, text: 'Pan-India Distribution' },
                  { icon: Truck, text: 'Timely Dispatch' },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-center gap-2.5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white border border-[#E0E8EF] text-[#123B66] shadow-xs">
                      <Icon className="h-5 w-5 text-[#159A9C]" />
                    </span>
                    <span className="leading-snug">{text}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/request-a-quote"
                  className="btn-primary"
                >
                  <span>Request a Quote</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/products"
                  className="btn-secondary"
                >
                  <span>Explore Catalogue</span>
                </Link>
              </div>
            </div>

            {/* At a glance highlight card */}
            <div className="card p-6 sm:p-8 bg-white/95 backdrop-blur-md border border-[#E0E8EF] shadow-lg">
              <h3 className="font-display text-lg font-bold text-[#123B66] mb-5 border-b border-[#E0E8EF] pb-3">
                Vinayak Surgicals at a Glance
              </h3>
              <div className="space-y-4">
                {[
                  { icon: PackageCheck, value: '500+', label: 'Implants & Instruments in Catalogue' },
                  { icon: Hospital, value: '50+', label: 'Hospitals & Clinics Supplied' },
                  { icon: MapPin, value: 'Kanpur Hub', label: 'Primary Uttar Pradesh Presence' },
                  { icon: CheckCircle2, value: 'Pan-India', label: 'Dispatch & Sourcing Network' },
                ].map(({ icon: Icon, value, label }, index) => (
                  <div
                    key={label}
                    className={`flex items-center gap-3.5 pb-3.5 ${
                      index < 3 ? 'border-b border-[#E0E8EF]/60' : ''
                    }`}
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F4F8FB] text-[#123B66] border border-[#E0E8EF]">
                      <Icon className="h-5 w-5 text-[#159A9C]" />
                    </span>
                    <div>
                      <div className="font-display text-lg font-bold text-[#172B3A] leading-tight">
                        {value}
                      </div>
                      <div className="text-xs sm:text-sm text-[#5E6F7D] mt-0.5">
                        {label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* Business Overview */}
      <section className="bg-white section-padding">
        <div className="container-x grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="overflow-hidden rounded-2xl border border-[#E0E8EF] shadow-md relative">
            <img
              src="/images/business-overview-surgery.png"
              alt="Surgeons working together in an operating room"
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
            <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 rounded-xl bg-[#0c2642]/90 backdrop-blur-md px-4 py-3 text-white border border-white/20">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#159A9C] text-white">
                <Headset className="h-5 w-5" />
              </span>
              <span className="text-xs sm:text-sm font-semibold leading-tight">
                Supporting Orthopedic Healthcare Professionals with High-Grade Trauma Fixation
              </span>
            </div>
          </div>

          <div>
            <span className="section-eyebrow">Business Overview</span>
            <h2 className="mt-2 text-section-title">
              Reliable Orthopedic Solutions for Better Patient Recovery
            </h2>
            <p className="mt-4 text-body-regular">
              We supply a comprehensive range of orthopedic implants, locking plate systems, external fixators, and cortical/cancellous screws across ten specialized product categories, manufactured from implant-grade Stainless Steel 316L and Titanium Grade 5.
            </p>
            <p className="mt-3 text-body-regular">
              Our focus is on serving the institutional procurement needs of healthcare facilities — from individual sterile instruments for specialized trauma procedures to bulk requirements for medical colleges and teaching hospitals.
            </p>
            <p className="mt-3 text-body-regular">
              Headquartered in Kanpur, we actively serve Uttar Pradesh and fulfill pan-India orders with dedicated logistics and technical consultation.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-4 border-t border-[#E0E8EF] pt-5">
              {servedBy.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2.5">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#F4F8FB] text-[#123B66] border border-[#E0E8EF]">
                    <Icon className="h-4 w-4 text-[#159A9C]" />
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-[#172B3A]">
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision with Restored Imagery */}
      <section className="bg-[#F4F8FB] section-padding">
        <div className="container-x grid gap-6 md:grid-cols-2">
          <div className="card relative isolate overflow-hidden p-6 sm:p-8 bg-white border border-[#E0E8EF] flex flex-col justify-between">
            <img
              src="/images/about-mission.png"
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 right-0 z-0 h-full w-[35%] object-cover object-right opacity-15"
            />
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#F4F8FB] text-[#123B66] border border-[#E0E8EF]">
                  <Target className="h-7 w-7 text-[#159A9C]" />
                </div>
                <div>
                  <span className="section-eyebrow">Our Mission</span>
                  <h3 className="font-display text-xl font-bold text-[#172B3A] mt-1">
                    Excellence in Surgical Sourcing
                  </h3>
                </div>
              </div>
              <p className="text-body-regular">
                To be a reliable and responsive medical supply partner for hospitals, clinics, and orthopedic surgeons — providing access to high-grade surgical instruments, implants, and consumables with dependable service, verified quality, and competitive institutional pricing.
              </p>
            </div>
          </div>

          <div className="card relative isolate overflow-hidden p-6 sm:p-8 bg-white border border-[#E0E8EF] flex flex-col justify-between">
            <img
              src="/images/about-vision.png"
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute inset-y-0 right-0 z-0 h-full w-[35%] object-cover object-right opacity-15"
            />
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#F4F8FB] text-[#123B66] border border-[#E0E8EF]">
                  <Eye className="h-7 w-7 text-[#159A9C]" />
                </div>
                <div>
                  <span className="section-eyebrow">Our Vision</span>
                  <h3 className="font-display text-xl font-bold text-[#172B3A] mt-1">
                    Trusted Healthcare Partner
                  </h3>
                </div>
              </div>
              <p className="text-body-regular">
                To become the most dependable partner in orthopedic and trauma supply across Uttar Pradesh and India, recognized for our comprehensive product catalogue, ethical business practices, and dedication to supporting patient healthcare outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage & Approach with Restored India Map & Background */}
      <section className="relative overflow-hidden bg-[#0c2642] py-16 sm:py-20 lg:py-24 text-white">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: "url('/images/hero-orthopedic-surgical.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c2642] via-[#0c2642]/95 to-[#123B66]/85" />

        <div className="container-x relative z-10 grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <div>
            <span className="section-eyebrow text-[#159A9C]">Our Distribution Reach</span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-display font-extrabold text-white leading-tight">
              Service <span className="text-[#159A9C]">Coverage Network</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#bcccdc]">
              From our Kanpur hub, we deliver surgical implants and medical equipment across Uttar Pradesh and coordinate pan-India dispatches.
            </p>

            <div className="mt-6 space-y-4">
              {coverage.map(({ icon: Icon, title, detail }) => (
                <div key={title} className="flex items-start gap-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#159A9C] mt-0.5">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-base font-bold text-white">{title}</div>
                    <div className="text-sm text-[#bcccdc] mt-0.5 leading-relaxed">{detail}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 overflow-hidden rounded-xl border border-white/20 bg-white/5 p-2">
              <img
                src="/images/india-service-coverage-map.png"
                alt="Map showing Vinayak Surgicals Kanpur hub and service coverage across India"
                loading="lazy"
                className="aspect-[1.6] w-full object-cover rounded-lg"
              />
            </div>
          </div>

          <div className="card p-6 sm:p-8 bg-white text-[#172B3A] border-none shadow-xl">
            <span className="section-eyebrow">Procurement Approach</span>
            <h2 className="mt-2 font-display text-2xl font-bold text-[#123B66]">
              Structured Procurement in 3 Steps
            </h2>

            <div className="mt-6 space-y-5">
              {procurement.map(({ icon: Icon, title, detail }, index) => (
                <div key={title} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#F4F8FB] text-[#123B66] border border-[#E0E8EF] mt-0.5">
                    <Icon className="h-5 w-5 text-[#159A9C]" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-[#159A9C] uppercase tracking-wider">Step 0{index + 1} &bull;</span>
                      <span className="text-base font-bold text-[#172B3A]">{title}</span>
                    </div>
                    <div className="text-sm text-[#5E6F7D] mt-1 leading-relaxed">{detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <BottomCTA
        eyebrow="ORTHOPAEDIC SUPPLY PARTNER"
        title={
          <>
            <span className="text-[#38BDF8]">Reliable</span> Supply for Demanding
            <br className="hidden sm:inline" /> Surgical Care
          </>
        }
        description="High-quality orthopaedic implants, fixation systems and reliable healthcare supply across India."
        primaryButtonText="Get in Touch"
        primaryButtonLink="/contact-us"
        secondaryButtonText="Request a Quote"
        secondaryButtonLink="/request-a-quote"
        backgroundImage="/images/about-cta-background.png"
      />
    </>
  );
}
