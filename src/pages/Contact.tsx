import {
  ArrowRight,
  Clock3,
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
              <div className="grid grid-cols-1 gap-3 overflow-hidden rounded-xl border border-emerald-100 bg-[#eaf8f0] p-4 sm:grid-cols-[minmax(0,1fr)_76px] sm:p-5">
                <div className="min-w-0">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0dbb68] text-white shadow-sm">
                      <MessageCircle className="h-5 w-5" />
                    </span>
                    <h3 className="text-base font-bold text-[#152b40]">Prefer to Chat?</h3>
                  </div>
                  <p className="ml-[52px] mt-2 text-xs leading-relaxed text-slate-600 sm:text-[13px]">
                    {businessConfig.whatsappConfigured
                      ? 'Reach our team directly on WhatsApp for quick support about product availability and quotations.'
                      : 'Reach our team for product availability, support and quotations.'}
                  </p>
                  {businessConfig.whatsappConfigured ? (
                    <a
                      href={buildWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-[52px] mt-3 inline-flex min-h-10 items-center justify-center gap-2 rounded-md border border-[#23b967] bg-white px-4 text-xs font-semibold text-[#12a85a] shadow-sm transition hover:bg-green-50"
                    >
                      Chat on WhatsApp <ArrowRight className="h-4 w-4" />
                    </a>
                  ) : (
                    <a
                      href={`tel:${businessConfig.phoneRaw}`}
                      className="ml-[52px] mt-3 inline-flex min-h-10 items-center justify-center gap-2 rounded-md border border-[#23b967] bg-white px-4 text-xs font-semibold text-[#12a85a] shadow-sm transition hover:bg-green-50"
                    >
                      Call our team <Phone className="h-4 w-4" />
                    </a>
                  )}
                </div>
                <div aria-hidden="true" className="relative hidden min-h-[132px] items-center justify-center sm:flex">
                  <div className="relative h-[128px] w-[62px] rotate-[5deg] rounded-[12px] border-[2px] border-[#101820] bg-[#101820] p-[4px] shadow-lg">
                    <div className="relative flex h-full items-center justify-center overflow-hidden rounded-[8px] bg-gradient-to-b from-[#12b56c] to-[#07894d]">
                      <span className="absolute left-1/2 top-0 h-[8px] w-[27px] -translate-x-1/2 rounded-b-md bg-[#101820]" />
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15">
                        <MessageCircle className="h-5 w-5 text-white" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-slate-100 bg-white p-4 shadow-[0_4px_20px_rgba(15,42,70,0.06)] sm:p-5">
                <div className="mb-3 flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#eff7ff] text-[#0866f5]">
                    <Clock3 className="h-5 w-5" />
                  </span>
                  <h3 className="text-base font-semibold text-[#152b40]">Business Hours</h3>
                </div>
                <ul className="space-y-0 pl-12 text-xs sm:text-[13px]">
                  {businessConfig.businessHours.map(({ day, hours }) => (
                    <li key={day} className="flex justify-between gap-3 border-b border-slate-100 py-2 last:border-0 last:pb-0">
                      <span className="text-slate-600">{day.replace(' – ', ' - ')}</span>
                      <span className="text-right font-medium text-slate-700">{hours}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-[minmax(0,1fr)_minmax(116px,42%)] gap-3 overflow-hidden rounded-xl border border-slate-100 bg-white p-4 shadow-[0_4px_20px_rgba(15,42,70,0.06)] sm:gap-4 sm:p-5">
                <div>
                  <div className="mb-3 flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#eff7ff] text-[#0866f5]">
                      <MapPin className="h-5 w-5 fill-[#0866f5] text-white" />
                    </span>
                    <h3 className="text-base font-semibold text-[#152b40]">Our Location</h3>
                  </div>
                  <p className="pl-12 text-xs leading-relaxed text-slate-600 sm:text-[13px]">
                    {businessConfig.address.line1}, {businessConfig.address.city},
                    <br />
                    {businessConfig.address.state} {businessConfig.address.pincode},{' '}
                    {businessConfig.address.country}
                  </p>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${mapAddress}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-12 mt-3 inline-flex items-center gap-1 text-xs font-semibold text-[#0866f5] hover:underline"
                  >
                    Get Directions <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${mapAddress}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Vinyanak Surgicals location in Google Maps"
                  className="relative flex min-h-[124px] items-center justify-center overflow-hidden rounded-lg border border-slate-200 bg-[#eaf0ed] text-red-500"
                  style={{
                    backgroundImage:
                      'linear-gradient(35deg, transparent 44%, #cbd9d6 45%, #cbd9d6 47%, transparent 48%), linear-gradient(145deg, transparent 38%, #d9d0c7 39%, #d9d0c7 41%, transparent 42%), linear-gradient(90deg, transparent 62%, #d1e1dc 63%, #d1e1dc 66%, transparent 67%), linear-gradient(0deg, transparent 28%, #dce5e1 29%, #dce5e1 31%, transparent 32%), #eef2ef',
                  }}
                >
                  <span className="absolute left-2 top-2 rounded bg-white/95 px-2 py-1 text-[9px] font-semibold text-slate-700 shadow-sm">
                    Vinyanak Surgicals
                  </span>
                  <MapPin className="mt-5 h-8 w-8 fill-red-500 text-white drop-shadow-md" />
                </a>
              </div>

            </aside>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-100 bg-white py-5 md:py-6">
        <div className="container-x grid grid-cols-2 gap-x-4 gap-y-5 md:grid-cols-4 md:gap-x-0">
          {benefits.map(({ icon: Icon, title, detail }, index) => (
            <div
              key={title}
              className={`flex min-w-0 items-center gap-3 px-2 sm:gap-4 sm:px-3 md:px-4 lg:px-5 ${
                index > 0 ? 'md:border-l md:border-slate-200' : ''
              }`}
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#eff7ff] text-[#0866f5] sm:h-14 sm:w-14 md:h-[68px] md:w-[68px]">
                <Icon className="h-6 w-6 stroke-[2.2] sm:h-7 sm:w-7 md:h-8 md:w-8" />
              </span>
              <span className="min-w-0">
                <span className="block text-xs font-bold leading-snug text-[#172b42] sm:text-sm md:text-[15px]">
                  {title}
                </span>
                <span className="mt-1 block text-[11px] leading-snug text-slate-600 sm:text-xs md:text-[13px]">
                  {detail}
                </span>
              </span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
