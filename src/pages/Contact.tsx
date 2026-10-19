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
import Breadcrumbs from '@/components/Breadcrumbs';
import ContactForm from '@/components/ContactForm';
import { businessConfig, buildWhatsAppLink } from '@/config/business';

const mapAddress = encodeURIComponent(
  `${businessConfig.address.line1}, ${businessConfig.address.city}, ${businessConfig.address.state} ${businessConfig.address.pincode}, ${businessConfig.address.country}`,
);

const benefits = [
  { icon: Zap, title: 'Quick Turnaround', detail: 'Formal quotations provided within 1–2 business days' },
  { icon: ShieldCheck, title: 'Dedicated Support', detail: 'Technical guidance on implant sizing and screw compatibility' },
  { icon: Package, title: 'Complete Catalogue', detail: 'Trauma locking plates, circular frames, and cortical screws' },
  { icon: Truck, title: 'Pan-India Distribution', detail: 'Prompt logistics serving hospitals and surgical clinics' },
];

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact Vinayak Surgicals — Kanpur Office & Pan-India Inquiries"
        description="Contact Vinayak Surgicals for orthopedic locking plate systems, external fixators, and fixation components. Phone, WhatsApp, email, and enquiry form available."
        canonical="https://vinyanaksurgicals.com/contact-us"
        keywords="contact vinayak surgicals, orthopedic supplier phone Kanpur, medical equipment inquiries Kanpur, trauma implant quote India"
      />

      <Breadcrumbs crumbs={[{ label: 'Contact Us' }]} />

      {/* Hero Banner */}
      <section className="relative isolate overflow-hidden bg-[#F4F8FB] border-b border-[#E0E8EF] py-12 sm:py-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 bg-cover bg-[center_38%] opacity-25 sm:opacity-30 md:inset-y-0 md:left-auto md:right-0 md:w-[55%] md:opacity-40 lg:opacity-50"
          style={{ backgroundImage: "url('/images/contact-hero-surgery-4k.jpg')" }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-[#F4F8FB]/90 via-[#F4F8FB]/95 to-[#F4F8FB] md:bg-gradient-to-r md:from-[#F4F8FB] md:via-[#F4F8FB]/95 md:via-55% md:to-transparent"
        />
        <div className="container-x relative z-10">
          <div className="max-w-3xl">
            <span className="section-eyebrow">Get in Touch</span>
            <h1 className="mt-2 text-page-title">
              Discuss Your Medical{' '}
              <span className="text-[#159A9C]">Supply Requirements</span>
            </h1>
            <p className="mt-4 text-body-large">
              Whether you need specific trauma plates, a hospital tender quotation, or specialized implant sourcing assistance, our team is ready to help. Reach us by telephone, WhatsApp, email, or via the enquiry form below.
            </p>
          </div>

          {/* Quick Contact Cards */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-5">
            {/* Phone Card */}
            <a
              href={`tel:${businessConfig.phoneRaw}`}
              className="card card-hover p-6 bg-white flex flex-col justify-between"
            >
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F4F8FB] text-[#123B66] mb-4 border border-[#E0E8EF]">
                  <Phone className="h-6 w-6 text-[#159A9C]" />
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#5E6F7D]">Telephone</div>
                <div className="font-display text-lg font-bold text-[#172B3A] mt-1">
                  {businessConfig.phone}
                </div>
              </div>
              <p className="mt-3 text-xs text-[#5E6F7D]">
                Mon–Fri: {businessConfig.businessHours[0]?.hours}
              </p>
            </a>

            {/* WhatsApp Card */}
            <div className="card card-hover p-6 bg-white flex flex-col justify-between">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-[#25D366] mb-4 border border-green-100">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#5E6F7D]">WhatsApp Enquiry</div>
                <div className="font-display text-lg font-bold text-[#172B3A] mt-1">
                  Instant Clinical Chat
                </div>
              </div>
              <div className="mt-3">
                {businessConfig.whatsappConfigured ? (
                  <a
                    href={buildWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#25D366] hover:underline"
                  >
                    <span>Connect on WhatsApp</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                ) : (
                  <a
                    href={`mailto:${businessConfig.email}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#123B66] hover:underline"
                  >
                    <span>Email our Sales Team</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            </div>

            {/* Email Card */}
            <a
              href={`mailto:${businessConfig.email}`}
              className="card card-hover p-6 bg-white flex flex-col justify-between"
            >
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F4F8FB] text-[#123B66] mb-4 border border-[#E0E8EF]">
                  <Mail className="h-6 w-6 text-[#159A9C]" />
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#5E6F7D]">Email Inquiries</div>
                <div className="font-display text-base sm:text-lg font-bold text-[#172B3A] mt-1 break-all">
                  {businessConfig.email}
                </div>
              </div>
              <p className="mt-3 text-xs text-[#5E6F7D]">
                Itemized quotes within 1 business day
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* Main Form + Sidebar Section */}
      <section className="section-padding bg-white">
        <div className="container-x">
          <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-10 lg:gap-12 items-start">
            {/* Form Column */}
            <div className="card p-6 sm:p-8 bg-white border border-[#E0E8EF]">
              <span className="section-eyebrow">Send a Direct Message</span>
              <h2 className="mt-2 text-section-title">General Enquiry Form</h2>
              <p className="mt-2 text-body-regular">
                Complete the details below and our medical procurement specialist will respond promptly.
              </p>
              <ContactForm />
            </div>

            {/* Sidebar Column */}
            <div className="space-y-6">
              {/* WhatsApp / Chat Banner */}
              <div className="rounded-2xl border border-green-200 bg-green-50/70 p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#25D366] text-white shadow-xs">
                    <MessageCircle className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-[#172B3A]">
                    Prefer Direct Chat?
                  </h3>
                </div>
                <p className="text-sm text-[#5E6F7D] leading-relaxed">
                  Connect with our technical desk directly for rapid answers regarding implant availability, sizing specifications, and quotations.
                </p>
                <div className="mt-4">
                  {businessConfig.whatsappConfigured ? (
                    <a
                      href={buildWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-whatsapp w-full !text-sm"
                    >
                      <span>Chat on WhatsApp</span>
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  ) : (
                    <a
                      href={`tel:${businessConfig.phoneRaw}`}
                      className="btn-primary w-full !text-sm"
                    >
                      <Phone className="h-4 w-4" />
                      <span>Call Sales Desk Directly</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Business Hours */}
              <div className="card p-6 bg-white border border-[#E0E8EF]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F4F8FB] text-[#123B66] border border-[#E0E8EF]">
                    <Clock3 className="h-5 w-5 text-[#159A9C]" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-[#172B3A]">
                    Business Working Hours
                  </h3>
                </div>
                <ul className="space-y-2.5 text-sm">
                  {businessConfig.businessHours.map(({ day, hours }) => (
                    <li key={day} className="flex justify-between border-b border-[#E0E8EF]/60 pb-2 last:border-0 last:pb-0">
                      <span className="text-[#5E6F7D] font-medium">{day}</span>
                      <span className="font-semibold text-[#172B3A]">{hours}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Physical Address */}
              <div className="card p-6 bg-white border border-[#E0E8EF]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F4F8FB] text-[#123B66] border border-[#E0E8EF]">
                    <MapPin className="h-5 w-5 text-[#159A9C]" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-[#172B3A]">
                    Kanpur Facility Location
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-[#5E6F7D]">
                  {businessConfig.address.line1}, {businessConfig.address.city},
                  <br />
                  {businessConfig.address.state} {businessConfig.address.pincode}, India
                </p>
                <div className="mt-4">
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${mapAddress}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#123B66] hover:text-[#159A9C] transition-colors"
                  >
                    <span>Open in Google Maps</span>
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Benefits Bar */}
      <section className="border-t border-[#E0E8EF] bg-[#F4F8FB] py-12 sm:py-16">
        <div className="container-x grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map(({ icon: Icon, title, detail }) => (
            <div key={title} className="card p-5 bg-white border border-[#E0E8EF] flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#F4F8FB] text-[#123B66] border border-[#E0E8EF]">
                <Icon className="h-6 w-6 text-[#159A9C]" />
              </div>
              <div>
                <h4 className="font-display text-base font-bold text-[#172B3A]">{title}</h4>
                <p className="mt-1 text-xs sm:text-sm text-[#5E6F7D] leading-relaxed">{detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
