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

const coverage = [
  {
    icon: MapPin,
    title: 'Kanpur & Uttar Pradesh',
    detail: 'Primary service region with direct delivery capability.',
  },
  {
    icon: Search,
    title: 'Pan-India Enquiries',
    detail: 'We respond to enquiries from across India and arrange delivery where feasible.',
  },
  {
    icon: Building2,
    title: 'Healthcare Institutions',
    detail: 'Hospitals, nursing homes, clinics, medical colleges and individual professionals.',
  },
];

const procurement = [
  {
    icon: ClipboardList,
    title: 'Understand Requirements',
    detail: 'We start by understanding your specific instrument or equipment needs.',
  },
  {
    icon: PackageCheck,
    title: 'Source Quality Products',
    detail: 'We source from our supplier network, prioritizing surgical-grade materials.',
  },
  {
    icon: Truck,
    title: 'Quote & Deliver',
    detail: 'We provide a clear quotation with pricing and arrange delivery on confirmation.',
  },
];

const servedBy = [
  { icon: Hospital, text: 'Hospitals & Clinics' },
  { icon: GraduationCap, text: 'Medical Colleges & Institutions' },
  { icon: UsersRound, text: 'Healthcare Professionals' },
  { icon: Map, text: 'Pan-India Enquiries' },
];

export default function About() {
  return (
    <>
      <SEO
        title="About Us — Vinyanak Surgicals | Orthopedic Implants & Fixation Partner in Kanpur"
        description="Learn about Vinyanak Surgicals, supplying orthopedic locking plates, external fixator systems, Ilizarov circular rings, and fixation components to hospitals and surgeons across Uttar Pradesh and India."
        canonical="https://vinyanaksurgicals.com/about-us"
        keywords="about vinyanak surgicals, orthopedic implant supplier, external fixator supplier, locking plate distributor, trauma implants Kanpur, Uttar Pradesh, medical supply India"
        image="/images/business-overview-surgery.png"
      />
      <section aria-label="About Vinyanak Surgicals" className="relative isolate overflow-hidden bg-[#edf6ff]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 hidden w-[58%] bg-cover bg-center bg-no-repeat md:block"
          style={{ backgroundImage: "url('/images/business-overview-surgery.png')" }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 hidden bg-gradient-to-r from-[#edf6ff] via-[#edf6ff]/95 via-50% to-[#edf6ff]/30 md:block"
        />
        <div className="container-x relative z-10 py-5 sm:py-6 lg:py-8">
          <nav aria-label="Breadcrumb" className="mb-4 text-xs font-semibold text-black">
            <ol className="flex items-center gap-2">
              <li><Link to="/" className="hover:text-[#0866f5]">Home</Link></li>
              <li aria-hidden="true">&gt;</li>
              <li aria-current="page" className="text-black">About Us</li>
            </ol>
          </nav>

          <div className="grid items-center gap-6 md:grid-cols-[minmax(0,1fr)_220px] lg:gap-10">
            <div className="max-w-[760px]">
              <span className="text-xs font-semibold uppercase tracking-[0.15em] text-black">
                About Vinyanak Surgicals
              </span>
              <h1 className="mt-1.5 text-[clamp(2rem,4vw,3.25rem)] font-extrabold leading-[1.08] tracking-tight text-navy-900">
                A Kanpur-Based
                <br />
                Surgical Instruments &amp;
                <br />
                <span className="text-[#0866f5]">Medical Supply Company</span>
              </h1>
              <p className="mt-2.5 max-w-[760px] text-sm leading-relaxed text-navy-700 sm:text-base">
                Vinyanak Surgicals is a medical supply business based in Kanpur, Uttar Pradesh,
                dedicated to supplying surgical instruments, medical equipment and healthcare
                consumables to hospitals, clinics, medical colleges and healthcare professionals.
              </p>

              <div className="mt-4 grid grid-cols-2 gap-x-3 gap-y-3 text-[11px] font-semibold leading-tight text-navy-900 sm:grid-cols-4">
                {[
                  { icon: ShieldCheck, text: <>Trusted by<br />Hospitals &amp; Surgeons</> },
                  { icon: PackageCheck, text: <>Wide Product<br />Range</> },
                  { icon: Map, text: <>Pan-India<br />Supply &amp; Support</> },
                  { icon: Truck, text: <>Timely Delivery<br />&amp; Competitive Pricing</> },
                ].map(({ icon: Icon, text }, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-blue-100 bg-white text-[#0866f5]">
                      <Icon className="h-4 w-4" strokeWidth={1.9} />
                    </span>
                    <span>{text}</span>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex flex-wrap gap-3">
                <Link
                  to="/request-a-quote"
                  className="inline-flex min-h-11 items-center rounded-lg bg-[#0866f5] px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0756d1] focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Request a Quote
                </Link>
                <Link
                  to="/products"
                  className="inline-flex min-h-11 items-center rounded-lg border border-[#0866f5] bg-white/80 px-5 text-sm font-semibold text-[#0866f5] transition hover:bg-white focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  View Our Products
                </Link>
              </div>
            </div>

            <aside
              aria-label="Vinyanak Surgicals at a glance"
              className="mx-auto w-full max-w-[220px] rounded-xl border border-blue-100 bg-white p-3 shadow-md md:mx-0 md:justify-self-end"
            >
              {[
                { icon: PackageCheck, value: '500+', label: 'Products' },
                { icon: Hospital, value: '50+', label: 'Hospitals Served' },
                { icon: MapPin, value: 'Pan-India', label: 'Supply Network' },
                { icon: CheckCircle2, value: 'On-Time', label: 'Delivery' },
              ].map(({ icon: Icon, value, label }, index) => (
                <div
                  key={label}
                  className={`flex items-center gap-2.5 px-1.5 py-2 ${
                    index < 3 ? 'border-b border-blue-100' : ''
                  }`}
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-50 text-[#0866f5]">
                    <Icon className="h-4 w-4" strokeWidth={1.9} />
                  </span>
                  <span>
                    <span className="block text-[13px] font-semibold leading-tight text-navy-900">{value}</span>
                    <span className="mt-0.5 block text-[11px] leading-tight text-navy-700">{label}</span>
                  </span>
                </div>
              ))}
            </aside>
          </div>
        </div>
      </section>

      <section id="business-overview" className="bg-white py-10 lg:py-12">
        <div className="container-x grid items-center gap-8 lg:grid-cols-2 lg:gap-10">
          <div className="group relative overflow-hidden rounded-xl">
            <img
              src="/images/business-overview-surgery.png"
              alt="Surgeons working together in an operating room"
              loading="lazy"
              className="aspect-[1.55] w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 flex items-center gap-3 rounded-lg bg-navy-950/90 px-4 py-3 text-white shadow-lg">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#0866f5]">
                <Headset className="h-5 w-5" />
              </span>
              <span className="text-xs font-semibold leading-tight">
                Supporting
                <br />
                Healthcare Professionals
              </span>
            </div>
          </div>

          <div>
            <span className="section-eyebrow">Business Overview</span>
            <h2 className="mt-2 text-3xl font-extrabold leading-tight tracking-tight text-navy-900 lg:text-[34px]">
              Reliable Orthopedic Solutions
              <br className="hidden xl:block" /> for a <span className="text-[#0866f5]">Healthier Tomorrow</span>
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-navy-600">
              We supply a comprehensive range of orthopedic implants, locking plate systems, and
              external fixators across ten product categories, manufactured from implant-grade
              Stainless Steel 316L and Titanium Grade 5.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-navy-600">
              Our focus is on serving the procurement needs of healthcare institutions — from
              individual instruments for specific procedures to bulk supply for hospitals and
              medical colleges. We also offer product sourcing assistance for items outside our
              standard catalogue.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-navy-600">
              Based in Kanpur, we actively cater across Uttar Pradesh and respond to pan-India
              enquiries, supporting the medical supply needs of the healthcare community.
            </p>

            <div className="mt-5 grid grid-cols-2 border-t border-navy-100 pt-4 sm:grid-cols-4">
              {servedBy.map(({ icon: Icon, text }, index) => (
                <div
                  key={text}
                  className={`flex min-h-12 items-center gap-2 px-2 first:pl-0 ${
                    index < servedBy.length - 1 ? 'border-r border-blue-200' : ''
                  }`}
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-blue-100 bg-white text-[#0866f5]">
                    <Icon className="h-5 w-5" strokeWidth={1.8} />
                  </span>
                  <span className="text-[10px] font-semibold leading-tight text-navy-900">
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#e8f4ff] py-5 lg:py-6">
        <div className="container-x grid gap-4 md:grid-cols-2">
          <article className="relative isolate flex min-h-[245px] overflow-hidden rounded-xl border border-blue-100 bg-[#f8fbff] p-5 shadow-sm sm:min-h-[265px] sm:p-6">
            <img
              src="/images/about-mission.png"
              alt=""
              aria-hidden="true"
              draggable="false"
              loading="lazy"
              className="pointer-events-none absolute inset-y-0 right-0 z-0 h-full w-[30%] select-none object-cover object-right [mask-image:linear-gradient(to_right,transparent_0%,black_38%)]"
            />
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-[#f8fbff] via-[#f8fbff]/95 via-55% to-transparent" />
            <div className="relative z-20 max-w-[86%]">
              <div className="flex items-start gap-4">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-100/90 text-[#0866f5] sm:h-16 sm:w-16">
                  <Target className="h-9 w-9 sm:h-10 sm:w-10" strokeWidth={2.2} />
                </span>
                <div className="pt-1">
                  <span className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#0866f5]">
                    Our Mission
                  </span>
                  <h3 className="mt-2 text-base font-extrabold leading-snug text-navy-900 sm:text-lg">
                    To be a reliable and responsive medical supply partner for hospitals, clinics and healthcare professionals.
                  </h3>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-navy-600 sm:text-[15px]">
                To be a reliable and responsive medical supply partner for hospitals, clinics and
                healthcare professionals — providing access to quality surgical instruments,
                medical equipment and consumables with dependable service and competitive pricing.
              </p>
            </div>
          </article>

          <article className="relative isolate flex min-h-[245px] overflow-hidden rounded-xl border border-blue-100 bg-[#f8fbff] p-5 shadow-sm sm:min-h-[265px] sm:p-6">
            <img
              src="/images/about-vision.png"
              alt=""
              aria-hidden="true"
              draggable="false"
              loading="lazy"
              className="pointer-events-none absolute inset-y-0 right-0 z-0 h-full w-[30%] select-none object-cover object-right [mask-image:linear-gradient(to_right,transparent_0%,black_38%)]"
            />
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-[#f8fbff] via-[#f8fbff]/95 via-55% to-transparent" />
            <div className="relative z-20 max-w-[86%]">
              <div className="flex items-start gap-4">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-100/90 text-[#0866f5] sm:h-16 sm:w-16">
                  <Eye className="h-9 w-9 sm:h-10 sm:w-10" strokeWidth={2.2} />
                </span>
                <div className="pt-1">
                  <span className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#0866f5]">
                    Our Vision
                  </span>
                  <h3 className="mt-2 text-base font-extrabold leading-snug text-navy-900 sm:text-lg">
                    To become a trusted name in surgical and medical supply across Uttar Pradesh and India.
                  </h3>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-navy-600 sm:text-[15px]">
                To become a trusted name in surgical and medical supply across Uttar Pradesh and
                India, known for product range, sourcing capability and a genuine commitment to
                supporting the healthcare community.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#03182d] py-10 text-white lg:py-12">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/images/hero-orthopedic-surgical.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#03182d] via-[#03182d]/95 to-[#052c50]/80" />
        <div className="container-x relative grid items-stretch gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12">
          <div className="grid items-stretch gap-5 sm:grid-cols-[0.9fr_1.1fr]">
            <div className="self-center">
              <span className="section-eyebrow text-cyan-300">Our Reach</span>
              <h2 className="mt-2 text-3xl font-extrabold text-white">
                Service <span className="text-cyan-400">Coverage</span>
              </h2>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-blue-100">
                Based in Kanpur, we supply surgical instruments and medical equipment to healthcare
                institutions across Uttar Pradesh and respond to pan-India enquiries.
              </p>
              <div className="mt-5 space-y-4">
                {coverage.map(({ icon: Icon, title, detail }) => (
                  <div key={title} className="flex items-start gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-cyan-500/50 bg-cyan-400/10 text-cyan-300">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-white">{title}</span>
                      <span className="mt-0.5 block text-xs leading-relaxed text-blue-100/80">{detail}</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mx-auto w-full overflow-hidden rounded-xl sm:-my-10 sm:h-[calc(100%+5rem)] lg:-my-12 lg:h-[calc(100%+6rem)]">
              <img
                src="/images/india-service-coverage-map.png"
                alt="Map showing Vinyanak Surgicals' Kanpur base and service coverage across India"
                loading="lazy"
                className="aspect-[1.25] h-auto w-full object-cover sm:aspect-auto sm:h-full"
              />
            </div>
          </div>

          <div className="rounded-xl border border-blue-100 bg-white p-6 text-navy-900 shadow-2xl lg:p-7">
            <span className="section-eyebrow">Our Approach</span>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight">
              Procurement <span className="text-[#0866f5]">Approach</span>
            </h2>
            <div className="mt-5 space-y-5">
              {procurement.map(({ icon: Icon, title, detail }, index) => (
                <div key={title} className="flex items-start gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0866f5] text-xs font-bold text-white">
                    0{index + 1}
                  </span>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-[#0866f5]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="pt-0.5">
                    <span className="block text-sm font-bold">{title}</span>
                    <span className="mt-1 block text-xs leading-relaxed text-navy-600">{detail}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative isolate flex min-h-[260px] items-center overflow-hidden bg-[#eaf5ff] bg-[url('/images/about-cta-background.png')] bg-cover bg-center py-7 md:h-[clamp(200px,21vw,300px)] md:min-h-0 md:py-0">
        <div className="container-x relative flex w-full items-center">
          <div className="max-w-[520px] pb-16 sm:pb-14 md:pb-0">
            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-navy-800">
              Let&apos;s Work Together
            </span>
            <h2 className="mt-1.5 text-[26px] font-extrabold leading-[1.12] tracking-tight text-navy-900 sm:text-3xl">
              Support for Your
              <br />
              <span className="text-[#0866f5]">Medical Supply Requirements</span>
            </h2>
            <p className="mt-2 max-w-[560px] text-xs leading-relaxed text-navy-800 sm:text-[13px]">
              Whether you need standard products from our catalogue or assistance with specific
              sourcing requirements, our team is here to help.
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <Link
                to="/request-a-quote"
                className="inline-flex items-center gap-1.5 rounded-md bg-[#0866f5] px-5 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-[#0756d1]"
              >
                Request a Quote <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                to="/contact-us"
                className="inline-flex items-center rounded-md border border-[#0866f5]/50 bg-white/80 px-5 py-2 text-xs font-semibold text-[#0866f5] transition hover:bg-white"
              >
                Contact Us
              </Link>
            </div>
          </div>
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-center rounded-lg border border-white/80 bg-white/75 px-2 py-2.5 shadow-sm backdrop-blur-sm sm:left-auto sm:right-8 sm:w-max sm:gap-0 sm:px-2 lg:bottom-5">
            {[
              { icon: CheckCircle2, label: 'Genuine Products' },
              { icon: ShieldCheck, label: 'Competitive Pricing' },
              { icon: Headset, label: 'Responsive Support' },
            ].map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="flex min-w-0 flex-1 items-center justify-center gap-1.5 px-1.5 text-[9px] font-semibold leading-tight text-navy-900 sm:flex-none sm:gap-1.5 sm:px-2 sm:text-[10px]"
              >
                <Icon className="h-5 w-5 shrink-0 text-[#0866f5] sm:h-5 sm:w-5" />
                <span className="whitespace-nowrap">{label}</span>
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
