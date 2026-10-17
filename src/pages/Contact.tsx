import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Clock3,
  FileText,
  Mail,
  MapPin,
  MessageCircle,
  Package,
  Phone,
  ShieldCheck,
  Truck,
  Zap,
} from 'lucide-react';
import SEO from '@/components/SEO';
import ContactForm from '@/components/ContactForm';
import { businessConfig, buildWhatsAppLink } from '@/config/business';

const mapAddress = encodeURIComponent(
  `${businessConfig.address.line1}, ${businessConfig.address.city}, ${businessConfig.address.state} ${businessConfig.address.pincode}, ${businessConfig.address.country}`,
);

const benefits = [
  { icon: Zap, title: 'Quick Response', detail: 'We respond within 1–2 business days' },
  { icon: ShieldCheck, title: 'Dedicated Support', detail: 'Expert assistance for product and pricing queries' },
  { icon: Package, title: 'Wide Product Range', detail: 'Orthopedic implants, instruments and medical supplies' },
  { icon: Truck, title: 'Pan-India Supply', detail: 'Serving hospitals, clinics and institutions across India' },
];

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact Vinyanak Surgicals — Kanpur Office & Pan-India Inquiries"
        description="Contact Vinyanak Surgicals for orthopedic locking plate systems, external fixators, and fixation components. Phone, WhatsApp, email, and enquiry form available."
        canonical="https://vinyanaksurgicals.com/contact-us"
        keywords="contact vinyanak surgicals, orthopedic supplier phone Kanpur, medical equipment inquiries Kanpur, trauma implant quote India"
      />

      <section aria-label="Contact information" className="relative isolate overflow-hidden bg-[#eaf5ff]">
        <div
          aria-hidden="true"
          className="absolute inset-y-0 right-0 -z-20 w-full bg-cover bg-[center_38%] opacity-40 sm:opacity-65 md:w-[48%] md:opacity-100"
          style={{ backgroundImage: "url('/images/contact-hero-surgery-4k.jpg')" }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,#eaf5ff_0%,rgba(234,245,255,0.96)_38%,rgba(234,245,255,0.64)_65%,rgba(234,245,255,0.12)_100%)]"
        />
        <div className="container-x pb-5 pt-8 sm:pt-10 lg:pb-7 lg:pt-12">
          <div className="grid min-h-[250px] items-start gap-6 md:min-h-[280px] md:grid-cols-[1fr_210px] lg:min-h-[315px] lg:grid-cols-[1fr_235px]">
            <div className="max-w-[600px]">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0866f5]">
                Get in Touch
              </span>
              <h1 className="mt-2 max-w-[510px] text-[30px] font-extrabold leading-[1.08] tracking-tight text-[#10243b] sm:text-4xl lg:text-[42px]">
                Discuss Your Medical{' '}
                <span className="text-[#0866f5]">Supply Requirements</span>
              </h1>
              <p className="mt-3 max-w-[520px] text-xs leading-relaxed text-slate-700 sm:text-sm">
                Whether you need a specific instrument, a bulk quotation or product sourcing
                assistance, our team is here to help. Reach us by phone, WhatsApp, email or use the
                enquiry form below.
              </p>
            </div>
            <div className="hidden rounded-xl border border-white/30 bg-[#0b4c87]/85 p-4 text-white shadow-lg backdrop-blur-sm md:block">
              <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/15">
                <Package className="h-5 w-5" />
              </div>
              <p className="text-xs font-medium leading-relaxed">
                Our team is ready to assist you with product information, availability, pricing and
                institutional supply requirements.
              </p>
              <span className="mt-3 block h-px w-9 bg-white/70" />
            </div>
          </div>

          <div className="grid max-w-[930px] grid-cols-1 gap-3 sm:grid-cols-3">
            <a
              href={`tel:${businessConfig.phoneRaw}`}
              className="rounded-lg border border-slate-200/90 bg-white/95 p-3.5 shadow-md transition hover:-translate-y-0.5 hover:shadow-lg sm:p-4"
            >
              <span className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-[#0866f5] text-white">
                <Phone className="h-4 w-4" />
              </span>
              <span className="block text-xs font-bold text-slate-800">Call Us</span>
              <span className="mt-0.5 block text-sm font-semibold text-slate-900">
                {businessConfig.phone}
              </span>
              <span className="mt-1 block text-[10px] text-slate-500">
                Mon–Fri: {businessConfig.businessHours[0]?.hours}
              </span>
            </a>

            <div className="rounded-lg border border-slate-200/90 bg-white/95 p-3.5 shadow-md sm:p-4">
              <span className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-[#0da85b] text-white">
                <MessageCircle className="h-4 w-4" />
              </span>
              <span className="block text-xs font-bold text-slate-800">WhatsApp</span>
              <span className="mt-0.5 block text-[11px] leading-snug text-slate-600">
                {businessConfig.whatsappConfigured
                  ? 'Chat with our team for quick support'
                  : 'Call or email us for quick support'}
              </span>
              <a
                href={
                  businessConfig.whatsappConfigured
                    ? buildWhatsAppLink()
                    : `mailto:${businessConfig.email}`
                }
                {...(businessConfig.whatsappConfigured
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {})}
                className="mt-2 inline-flex items-center gap-1 text-[10px] font-semibold text-[#0866f5] hover:underline"
              >
                {businessConfig.whatsappConfigured ? 'Chat on WhatsApp' : 'Email our team'}
                <ArrowRight className="h-3 w-3" />
              </a>
            </div>

            <a
              href={`mailto:${businessConfig.email}`}
              className="rounded-lg border border-slate-200/90 bg-white/95 p-3.5 shadow-md transition hover:-translate-y-0.5 hover:shadow-lg sm:p-4"
            >
              <span className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-[#0866f5] text-white">
                <Mail className="h-4 w-4" />
              </span>
              <span className="block text-xs font-bold text-slate-800">Email Us</span>
              <span className="mt-0.5 block break-all text-[11px] text-slate-700">
                {businessConfig.email}
              </span>
              <span className="mt-1 block text-[10px] text-slate-500">
                We usually respond within 1 business day.
              </span>
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[#f5f8fb] py-5 sm:py-7">
        <div className="container-x">
          <div className="grid items-start gap-4 md:grid-cols-[1.75fr_1fr]">
            <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-[0_4px_20px_rgba(15,42,70,0.06)] sm:p-5 lg:p-6">
              <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#0866f5]">
                Send Us a Message
              </span>
              <h2 className="mt-1 text-xl font-bold tracking-tight text-[#10243b] sm:text-2xl">
                General Enquiry Form
              </h2>
              <p className="mt-1 text-[11px] text-slate-500 sm:text-xs">
                Fill in the form below and our team will respond within 1–2 business days.
              </p>
              <ContactForm />
            </div>

            <aside className="space-y-3">
              <div className="grid grid-cols-[1fr_48px] gap-2 overflow-hidden rounded-lg border border-emerald-100 bg-[#ebf9f1] p-3.5 sm:p-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#0da85b] text-white">
                      <MessageCircle className="h-4 w-4" />
                    </span>
                    <h3 className="text-[13px] font-bold text-slate-800">Prefer to Chat?</h3>
                  </div>
                  <p className="ml-9 mt-1 text-[10px] leading-relaxed text-slate-600">
                    {businessConfig.whatsappConfigured
                      ? 'Reach our team directly on WhatsApp for quick support about product availability and quotations.'
                      : 'Call or email our team for product availability, support and quotations.'}
                  </p>
                  {businessConfig.whatsappConfigured ? (
                    <a
                      href={buildWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-9 mt-2 inline-flex items-center gap-1 rounded-md border border-green-500 px-3 py-1.5 text-[10px] font-semibold text-green-800 transition hover:bg-green-50"
                    >
                      Chat on WhatsApp <ArrowRight className="h-3 w-3" />
                    </a>
                  ) : (
                    <a
                      href={`tel:${businessConfig.phoneRaw}`}
                      className="ml-9 mt-2 inline-flex items-center gap-1 rounded-md border border-green-500 px-3 py-1.5 text-[10px] font-semibold text-green-800 transition hover:bg-green-50"
                    >
                      Call our team <Phone className="h-3 w-3" />
                    </a>
                  )}
                </div>
                <div aria-hidden="true" className="relative hidden items-end justify-center sm:flex">
                  <div className="h-[78px] w-[38px] rounded-[8px] border-[2px] border-slate-700 bg-slate-900 p-1 shadow-md">
                    <div className="flex h-full items-center justify-center rounded-[4px] bg-gradient-to-b from-emerald-50 to-emerald-100">
                      <MessageCircle className="h-5 w-5 fill-[#0da85b] text-[#0da85b]" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-slate-200 bg-white p-3.5 shadow-[0_4px_20px_rgba(15,42,70,0.05)] sm:p-4">
                <div className="mb-2.5 flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-50 text-[#0866f5]">
                    <Clock3 className="h-4 w-4" />
                  </span>
                  <h3 className="text-[13px] font-bold text-slate-800">Business Hours</h3>
                </div>
                <ul className="space-y-1.5 pl-9 text-[10px]">
                  {businessConfig.businessHours.map(({ day, hours }) => (
                    <li key={day} className="flex justify-between gap-2 border-b border-slate-100 pb-1 last:border-0 last:pb-0">
                      <span className="text-slate-600">{day}</span>
                      <span className="text-right font-medium text-slate-700">{hours}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-[1fr_82px] gap-2 overflow-hidden rounded-lg border border-slate-200 bg-white p-3.5 shadow-[0_4px_20px_rgba(15,42,70,0.05)] sm:p-4">
                <div>
                  <div className="mb-2 flex items-center gap-2">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-50 text-[#0866f5]">
                      <MapPin className="h-4 w-4" />
                    </span>
                    <h3 className="text-[13px] font-bold text-slate-800">Our Location</h3>
                  </div>
                  <p className="pl-9 text-[10px] leading-relaxed text-slate-600">
                    {businessConfig.address.line1}, {businessConfig.address.city},
                    <br />
                    {businessConfig.address.state} {businessConfig.address.pincode},{' '}
                    {businessConfig.address.country}
                  </p>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${mapAddress}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-9 mt-1 inline-flex items-center gap-1 text-[10px] font-semibold text-[#0866f5] hover:underline"
                  >
                    Get Directions <ArrowRight className="h-3 w-3" />
                  </a>
                </div>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${mapAddress}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Vinyanak Surgicals location in Google Maps"
                  className="relative flex min-h-[66px] items-center justify-center overflow-hidden rounded-md border border-slate-200 bg-[#eef3f4] text-red-500"
                  style={{
                    backgroundImage:
                      'linear-gradient(30deg, transparent 44%, #cbd5d4 45%, #cbd5d4 48%, transparent 49%), linear-gradient(140deg, transparent 38%, #d8cfc6 39%, #d8cfc6 42%, transparent 43%), linear-gradient(90deg, transparent 62%, #d7e3df 63%, #d7e3df 66%, transparent 67%)',
                  }}
                >
                  <MapPin className="h-6 w-6 fill-red-500 text-white drop-shadow" />
                </a>
              </div>

              <div className="relative overflow-hidden rounded-lg bg-[#0b2d55] p-3.5 text-white shadow-[0_4px_20px_rgba(15,42,70,0.1)] sm:p-4">
                <div aria-hidden="true" className="absolute -right-2 top-3 rotate-6 opacity-10">
                  <FileText className="h-24 w-24" />
                </div>
                <h3 className="relative text-[13px] font-bold">Need an Institutional Quotation?</h3>
                <p className="relative mt-1 max-w-[270px] text-[10px] leading-relaxed text-blue-100">
                  Request a detailed quotation for your hospital, clinic or institution. Use our
                  dedicated form.
                </p>
                <Link
                  to="/request-a-quote"
                  className="relative mt-2.5 inline-flex w-full items-center justify-center gap-1.5 rounded-md bg-[#0866f5] px-3 py-2 text-[10px] font-semibold text-white transition hover:bg-blue-600"
                >
                  Institutional Quotation Form <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-100 bg-white py-4">
        <div className="container-x grid grid-cols-2 gap-y-4 md:grid-cols-4">
          {benefits.map(({ icon: Icon, title, detail }, index) => (
            <div
              key={title}
              className={`flex items-center gap-2.5 px-2 sm:px-3 ${
                index > 0 ? 'sm:border-l sm:border-slate-200' : ''
              }`}
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-50 text-[#0866f5]">
                <Icon className="h-4 w-4" />
              </span>
              <span>
                <span className="block text-[10px] font-bold text-slate-800">{title}</span>
                <span className="mt-0.5 block text-[9px] leading-snug text-slate-500">{detail}</span>
              </span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
