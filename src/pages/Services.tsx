import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Building2,
  Clock3,
  FileText,
  GraduationCap,
  MessageSquareMore,
  Package,
  Search,
  ShieldCheck,
  Truck,
  Users,
} from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import BottomCTA from '@/components/BottomCTA';

const services = [
  {
    icon: Package,
    title: 'Product Supply',
    description:
      'Direct supply of precision orthopedic locking plates, external fixators, circular Ilizarov frames, and surgical screws across ten categories to hospitals, clinical trauma units, and practitioners.',
    image: '/images/services-product-supply-photo.jpg',
    to: '/products',
  },
  {
    icon: FileText,
    title: 'Institutional Quotations',
    description:
      'Itemized, formal quotations for hospitals, medical colleges, trauma centers, and healthcare trusts. We support tender matching and hospital formulary procurement.',
    image: '/images/services-institutional-quotation.jpg',
    to: '/request-a-quote',
  },
  {
    icon: Package,
    title: 'Bulk Procurement & Tenders',
    description:
      'Bulk supply arrangements and scheduled delivery contracts for high-volume hospitals and government or private medical institutions with competitive pricing.',
    image: '/images/services-bulk-procurement.jpg',
    to: '/request-a-quote',
  },
  {
    icon: Search,
    title: 'Custom Product Sourcing',
    description:
      'Specialized procurement assistance for surgical instruments or rare implant variations not listed in our standard catalogue. We leverage an extensive manufacturer network.',
    image: '/images/services-product-sourcing.jpg',
    to: '/contact-us',
  },
];

const trustPoints = [
  { icon: ShieldCheck, label: 'Trusted Supply Partner' },
  { icon: Package, label: '10 Product Categories' },
  { icon: Truck, label: 'Pan-India Distribution' },
  { icon: Clock3, label: 'Prompt Delivery Schedules' },
];

const processSteps = [
  {
    icon: MessageSquareMore,
    title: '1. Share Requirements',
    description: 'Submit your requirements via telephone, WhatsApp, email, or our online quotation form.',
  },
  {
    icon: Search,
    title: '2. Catalogue & Sourcing Match',
    description: 'Our technical desk verifies size specifications, materials (SS 316L or Titanium), and availability.',
  },
  {
    icon: FileText,
    title: '3. Receive Itemized Quote',
    description: 'Get an official, transparent quotation with unit pricing, lead times, and terms.',
  },
  {
    icon: Truck,
    title: '4. Safe Delivery & Support',
    description: 'Orders undergo packaging quality checks before being dispatched to your hospital or clinic.',
  },
];

const audiences = [
  { icon: Building2, label: 'Hospitals & Trauma Centers' },
  { icon: ShieldCheck, label: 'Surgical Clinics' },
  { icon: GraduationCap, label: 'Medical Colleges' },
  { icon: Users, label: 'Orthopedic Surgeons' },
];

export default function Services() {
  return (
    <>
      <SEO
        title="Medical Supply Services | Vinayak Surgicals"
        description="Medical product supply, institutional quotations, bulk procurement and product sourcing for hospitals and healthcare institutions across Uttar Pradesh and India."
        canonical="https://vinyanaksurgicals.com/services"
        keywords="medical supply services, hospital procurement, institutional medical quotation, surgical instruments supplier Kanpur, Vinayak Surgicals"
        image="/images/services-hero-photo.jpg"
      />

      <Breadcrumbs crumbs={[{ label: 'Services' }]} />

      {/* Hero Banner */}
      <section className="hero-standard bg-[#F4F8FB] border-b border-[#E0E8EF]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 bg-cover bg-[center_48%] opacity-25 sm:opacity-30 md:inset-y-0 md:left-auto md:right-0 md:w-[55%] md:opacity-40 lg:opacity-50"
          style={{ backgroundImage: "url('/images/services-hero-photo.jpg')" }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-[#F4F8FB]/90 via-[#F4F8FB]/95 to-[#F4F8FB] md:bg-gradient-to-r md:from-[#F4F8FB] md:via-[#F4F8FB]/95 md:via-55% md:to-transparent"
        />
        <div className="container-x relative z-10 w-full">
          <div className="hero-standard-inner max-w-3xl">
            <span className="section-eyebrow">Our Services</span>
            <h1 className="mt-2 text-page-title">
              Complete Medical Supply Solutions{' '}
              <span className="text-[#159A9C]">for Healthcare Institutions</span>
            </h1>
            <p className="mt-4 text-body-large">
              We provide end-to-end supply services to support the surgical and clinical hardware needs of hospitals, medical colleges, trauma centers, and healthcare practitioners across Kanpur, Uttar Pradesh, and pan-India.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/request-a-quote" className="btn-primary">
                <span>Request a Quote</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a href="#services-list" className="btn-secondary">
                <span>Explore Services</span>
              </a>
            </div>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 border-t border-[#E0E8EF] pt-6">
              {trustPoints.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#123B66] border border-[#E0E8EF] shadow-xs">
                    <Icon className="h-5 w-5 text-[#159A9C]" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-[#172B3A] leading-snug">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services-list" className="section-padding bg-white scroll-mt-20">
        <div className="container-x">
          <div className="mb-8 sm:mb-10">
            <span className="section-eyebrow">Service Portfolio</span>
            <h2 className="mt-2 text-section-title">
              Comprehensive Medical Supply Capabilities
            </h2>
            <p className="mt-2 text-body-regular max-w-2xl">
              From routine implant deliveries to comprehensive hospital tender contracts and specialized instrument sourcing, we support your operations reliably.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {services.map(({ icon: Icon, title, description, image, to }) => (
              <article
                key={title}
                className="card card-hover overflow-hidden flex flex-col justify-between bg-white border border-[#E0E8EF]"
              >
                <div className="p-6 sm:p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F4F8FB] text-[#123B66] border border-[#E0E8EF]">
                      <Icon className="h-6 w-6 text-[#159A9C]" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-[#172B3A] leading-snug">
                      {title}
                    </h3>
                  </div>

                  <p className="text-body-regular text-[#5E6F7D] mb-6">
                    {description}
                  </p>

                  <div className="aspect-[2/1] w-full overflow-hidden rounded-xl bg-[#F4F8FB] border border-[#E0E8EF]">
                    <img
                      src={image}
                      alt={title}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>

                <div className="px-6 py-4 sm:px-8 bg-[#F4F8FB] border-t border-[#E0E8EF] flex items-center justify-between">
                  <span className="text-sm font-semibold text-[#123B66]">Ready to proceed?</span>
                  <Link
                    to={to}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-[#159A9C] hover:text-[#117c7e] transition-colors"
                  >
                    <span>Learn More &amp; Enquire</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works - Process */}
      <section className="relative isolate overflow-hidden bg-[#0c2642] py-16 sm:py-20 text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 bg-cover bg-center opacity-15 sm:opacity-20 md:inset-y-0 md:left-auto md:right-0 md:w-[35%] md:opacity-25"
          style={{ backgroundImage: "url('/images/services-process-right.jpg')" }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-[#0c2642]/90 via-[#0c2642]/95 to-[#0c2642] md:bg-gradient-to-r md:from-[#0c2642] md:via-[#0c2642]/90 md:to-transparent"
        />
        <div className="container-x relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <span className="section-eyebrow text-[#159A9C] justify-center">
              Our Workflow
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-display font-extrabold text-white">
              How Our Service Operates
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#bcccdc]">
              A transparent, dependable procurement process to ensure you receive the right implants at the best institutional value, delivered on time.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="rounded-2xl border border-white/15 bg-white/5 p-6 flex flex-col justify-between backdrop-blur-xs"
              >
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#123B66] text-[#159A9C] mb-4">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-white mb-2 leading-snug">
                    {title}
                  </h3>
                  <p className="text-sm text-[#bcccdc] leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Healthcare Coverage */}
      <section className="relative isolate overflow-hidden bg-[#F4F8FB] section-padding border-t border-[#E0E8EF]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 bg-cover bg-center opacity-20 sm:opacity-25 md:inset-y-0 md:left-auto md:right-0 md:w-[50%] md:opacity-35 lg:opacity-45"
          style={{ backgroundImage: "url('/images/services-coverage.jpg')" }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-[#F4F8FB]/90 via-[#F4F8FB]/95 to-[#F4F8FB] md:bg-gradient-to-r md:from-[#F4F8FB] md:via-[#F4F8FB]/95 md:via-50% md:to-transparent"
        />
        <div className="container-x relative z-10">
          <div className="max-w-2xl">
            <span className="section-eyebrow">Institutional Reach</span>
            <h2 className="mt-2 text-section-title">
              Serving Healthcare Institutions Across India
            </h2>
            <p className="mt-3 text-body-regular">
              We supply surgical instruments, trauma implants, and medical consumables to hospitals, private nursing homes, medical colleges, and individual surgeons across Kanpur, Uttar Pradesh, and pan-India.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              {audiences.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="card px-4 py-3 flex items-center gap-3 bg-white border border-[#E0E8EF]"
                >
                  <Icon className="h-5 w-5 text-[#159A9C]" />
                  <span className="text-sm font-semibold text-[#172B3A]">{label}</span>
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
