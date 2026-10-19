import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Building2,
  Clock3,
  FileText,
  GraduationCap,
  Headphones,
  MessageSquareMore,
  Package,
  Search,
  ShieldCheck,
  Truck,
  Users,
} from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';

const services = [
  {
    icon: Package,
    title: 'Product Supply',
    description:
      'Supply of surgical instruments, medical equipment and healthcare consumables across ten product categories to hospitals, clinics and individual professionals.',
    image: '/images/services-product-supply-photo.jpg',
    to: '/products',
  },
  {
    icon: FileText,
    title: 'Institutional Quotations',
    description:
      'Detailed quotations for hospitals, medical colleges and healthcare institutions. Submit your requirements through our multi-product quotation form.',
    image: '/images/services-institutional-quotation.jpg',
    to: '/request-a-quote',
  },
  {
    icon: Package,
    title: 'Bulk Procurement',
    description:
      'Bulk procurement support for large-volume orders, tender-based supply and regular supply agreements with healthcare institutions.',
    image: '/images/services-bulk-procurement.jpg',
    to: '/request-a-quote',
  },
  {
    icon: Search,
    title: 'Product Sourcing',
    description:
      'Sourcing assistance for specific instruments or equipment not listed in our standard catalogue. Share your requirements and we will locate the item.',
    image: '/images/services-product-sourcing.jpg',
    to: '/contact-us',
  },
];

const trustPoints = [
  { icon: ShieldCheck, label: <>Trusted<br />Supply Partner</> },
  { icon: Package, label: <>Wide Product<br />Range</> },
  { icon: Truck, label: <>Pan-India<br />Service &amp; Support</> },
  { icon: Clock3, label: <>Timely Delivery<br />&amp; Competitive Pricing</> },
];

const processSteps = [
  {
    icon: MessageSquareMore,
    title: 'Share Requirements',
    description: 'Tell us what you need via phone, WhatsApp, email or our quotation form.',
  },
  {
    icon: Search,
    title: 'We Source',
    description: 'We check availability and source items through our supplier network.',
  },
  {
    icon: FileText,
    title: 'Receive Quote',
    description: 'You get a detailed quotation with pricing and specifications.',
  },
  {
    icon: Truck,
    title: 'Delivery',
    description: 'We process your order and deliver it to your location.',
  },
];

const audiences = [
  { icon: Building2, label: 'Hospitals' },
  { icon: ShieldCheck, label: 'Clinics' },
  { icon: GraduationCap, label: 'Medical Colleges' },
  { icon: Users, label: 'Healthcare Professionals' },
];

export default function Services() {
  return (
    <>
      <SEO
        title="Medical Supply Services | Vinyanak Surgicals"
        description="Medical product supply, institutional quotations, bulk procurement and product sourcing for hospitals and healthcare institutions across Uttar Pradesh and India."
        canonical="https://vinyanaksurgicals.com/services"
        keywords="medical supply services, hospital procurement, institutional medical quotation, surgical instruments supplier Kanpur, Vinyanak Surgicals"
        image="/images/services-hero-photo.jpg"
      />
      <Breadcrumbs crumbs={[{ label: 'Services' }]} />

      <section className="relative isolate overflow-hidden bg-[#eef7ff]">
        <div
          aria-hidden="true"
          className="absolute inset-y-0 right-0 -z-20 w-full bg-cover bg-[center_48%] sm:w-[72%] lg:w-[68%]"
          style={{ backgroundImage: "url('/images/services-hero-photo.jpg')" }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,#eef7ff_0%,rgba(238,247,255,0.99)_35%,rgba(238,247,255,0.88)_48%,rgba(238,247,255,0.32)_65%,rgba(238,247,255,0.02)_100%)]"
        />
        <div className="container-x flex min-h-[290px] items-center py-6 sm:min-h-[300px] lg:min-h-[310px]">
          <div className="max-w-[620px]">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0866f5]">
              Our Services
            </span>
            <h1 className="mt-1.5 max-w-[590px] text-[30px] font-extrabold leading-[1.08] tracking-tight text-[#10243b] sm:text-4xl lg:text-[42px]">
              <span className="block">Complete Medical</span>
              <span className="block text-[#0866f5]">Supply Solutions</span>
              <span className="block">for Healthcare Institutions</span>
            </h1>
            <p className="mt-2.5 max-w-[560px] text-xs leading-relaxed text-slate-700 sm:text-sm">
              We provide a wide range of services to support the medical supply needs of hospitals,
              clinics and healthcare professionals across Kanpur, Uttar Pradesh and India.
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <Link
                to="/request-a-quote"
                className="inline-flex min-h-10 items-center gap-1.5 rounded-md bg-[#0866f5] px-5 text-xs font-semibold text-white shadow-sm transition hover:bg-[#0756d1]"
              >
                Request a Quote <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <a
                href="#services"
                className="inline-flex min-h-10 items-center justify-center rounded-md border border-[#0866f5]/50 bg-white/80 px-5 text-xs font-semibold text-[#0866f5] transition hover:bg-white"
              >
                Explore Services
              </a>
            </div>
            <div className="mt-4 grid max-w-[610px] grid-cols-2 gap-y-3 sm:grid-cols-4 sm:gap-0">
              {trustPoints.map(({ icon: Icon, label }, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-2 px-2 first:pl-0 sm:px-3 ${
                    index > 0 ? 'sm:border-l sm:border-slate-300' : ''
                  }`}
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-blue-200 bg-white/90 text-[#0866f5]">
                    <Icon className="h-[18px] w-[18px]" />
                  </span>
                  <span className="text-[10px] font-semibold leading-tight text-[#173353] sm:text-[11px]">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="scroll-mt-24 bg-white py-6 sm:py-7">
        <div className="container-x">
          <div className="mb-4 flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
            <div>
              <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#0866f5]">
                Our Services
              </span>
              <h2 className="mt-1 text-xl font-bold tracking-tight text-[#10243b] sm:text-2xl">
                Comprehensive <span className="text-[#0866f5]">Medical Supply Solutions</span>
              </h2>
            </div>
            <p className="max-w-[460px] text-xs leading-relaxed text-slate-600 sm:text-[13px]">
              From routine product supply to bulk procurement and custom sourcing, we support
              healthcare institutions with reliable, timely and cost-effective solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {services.map(({ icon: Icon, title, description, image, to }) => (
              <article
                key={title}
                className="relative isolate flex min-h-[142px] overflow-hidden rounded-lg border border-blue-100 bg-[#f4f9ff] shadow-[0_2px_10px_rgba(22,73,132,0.07)] sm:min-h-[156px]"
              >
                <div
                  aria-hidden="true"
                  className="absolute inset-y-0 right-0 -z-20 w-[46%] bg-cover bg-center"
                  style={{ backgroundImage: `url('${image}')` }}
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,#f4f9ff_0%,rgba(244,249,255,0.99)_44%,rgba(244,249,255,0.75)_62%,rgba(244,249,255,0.08)_100%)]"
                />
                <div className="flex w-full items-start gap-3 p-3 sm:gap-4 sm:p-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#e2efff] text-[#0866f5] sm:h-11 sm:w-11">
                    <Icon className="h-5 w-5 sm:h-[22px] sm:w-[22px]" />
                  </span>
                  <div className="max-w-[265px] pt-0.5">
                    <h3 className="text-sm font-bold leading-tight text-[#142b43] sm:text-base">
                      {title}
                    </h3>
                    <p className="mt-1 text-[11px] leading-[1.4] text-slate-600 sm:text-xs">
                      {description}
                    </p>
                    <Link
                      to={to}
                      className="mt-2 inline-flex items-center gap-1 text-[11px] font-semibold text-[#0866f5] hover:underline"
                    >
                      Learn More <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="how-process"
        className="relative isolate overflow-hidden bg-[#031b34] py-6 text-white sm:py-7"
      >
        <div
          aria-hidden="true"
          className="absolute inset-y-0 right-0 -z-20 w-[35%] bg-cover bg-center opacity-70"
          style={{ backgroundImage: "url('/images/services-process-right.jpg')" }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,#031b34_0%,rgba(3,27,52,0.98)_62%,rgba(3,27,52,0.53)_100%)]"
        />
        <div className="container-x">
          <div className="mb-5 flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
            <div>
              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-cyan-300">
                Our Process
              </span>
              <h2 className="mt-1 text-xl font-bold text-white sm:text-2xl">How Our Service Works</h2>
            </div>
            <p className="max-w-[480px] text-xs leading-relaxed text-blue-100 sm:text-[13px]">
              A simple and transparent process to ensure you get the right products at the best
              value, delivered on time.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-4 md:gap-3">
            {processSteps.map(({ icon: Icon, title, description }, index) => (
              <div key={title} className="relative px-2 text-center">
                <div className="relative mx-auto mb-2 flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#0866f5] shadow-[0_0_20px_rgba(255,255,255,0.22)]">
                  <Icon className="h-5 w-5" />
                  <span className="absolute -left-7 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-[#0866f5] text-[11px] font-bold text-white">
                    {`0${index + 1}`}
                  </span>
                </div>
                <h3 className="text-xs font-bold text-white sm:text-sm">{title}</h3>
                <p className="mx-auto mt-1 max-w-[220px] text-[11px] leading-relaxed text-blue-100 sm:text-xs">
                  {description}
                </p>
                {index < processSteps.length - 1 && (
                  <ArrowRight
                    aria-hidden="true"
                    className="absolute right-[-8px] top-3 hidden h-4 w-4 text-blue-100 md:block"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="coverage" className="relative isolate overflow-hidden bg-[#f1f8ff]">
        <div
          aria-hidden="true"
          className="absolute inset-y-0 right-0 -z-20 w-full bg-cover bg-center sm:w-[62%]"
          style={{ backgroundImage: "url('/images/services-coverage.jpg')" }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,#f1f8ff_0%,rgba(241,248,255,0.98)_39%,rgba(241,248,255,0.83)_51%,rgba(241,248,255,0.15)_75%,rgba(241,248,255,0.02)_100%)]"
        />
        <div className="container-x flex min-h-[220px] items-center py-6 sm:min-h-[235px]">
          <div className="max-w-[590px]">
            <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#0866f5]">
              Our Coverage
            </span>
            <h2 className="mt-1 text-xl font-bold leading-tight text-[#10243b] sm:text-2xl">
              Serving Healthcare Institutions<br className="hidden sm:block" /> Across Kanpur,
              <span className="text-[#0866f5]"> Uttar Pradesh &amp; India</span>
            </h2>
            <p className="mt-2 max-w-[560px] text-xs leading-relaxed text-slate-600 sm:text-[13px]">
              We supply surgical instruments, medical equipment and healthcare consumables to
              hospitals, clinics, medical colleges and healthcare professionals across Kanpur, Uttar
              Pradesh and through our pan-India network.
            </p>
            <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
              {audiences.map(({ icon: Icon, label }) => (
                <span key={label} className="inline-flex items-center gap-1.5 text-[10px] font-semibold text-[#173353] sm:text-[11px]">
                  <Icon className="h-4 w-4 text-[#0866f5]" />
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="requirements-cta"
        className="relative isolate overflow-hidden bg-[#0866f5] text-white"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(0,91,235,0.12) 0%, rgba(0,91,235,0.92) 22%, rgba(0,91,235,0.98) 100%), url('/images/services-cta-doctor.jpg')",
          backgroundPosition: 'center, left center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover, auto 100%',
        }}
      >
        <div className="container-x flex min-h-[112px] flex-col justify-center gap-4 py-4 sm:min-h-[126px] sm:flex-row sm:items-center sm:justify-between sm:pl-[17%]">
          <div className="max-w-[650px]">
            <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-blue-100">
              Let&apos;s Work Together
            </span>
            <h2 className="mt-1 text-lg font-bold leading-tight text-white sm:text-xl">
              Ready to Discuss Your Requirements?
            </h2>
            <p className="mt-1 text-xs leading-relaxed text-blue-50 sm:text-[13px]">
              Our team is here to assist with your medical supply needs. Get a customized quotation
              and the best sourcing support for your institution.
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap gap-2">
            <Link
              to="/request-a-quote"
              className="inline-flex min-h-9 items-center gap-1.5 rounded-md bg-white px-4 text-[11px] font-bold text-[#0866f5] transition hover:bg-blue-50"
            >
              Request a Quote <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <Link
              to="/contact-us"
              className="inline-flex min-h-9 items-center gap-1.5 rounded-md border border-white/60 px-4 text-[11px] font-semibold text-white transition hover:bg-white/10"
            >
              <Headphones className="h-3.5 w-3.5" /> Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
