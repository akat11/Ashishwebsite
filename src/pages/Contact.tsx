import { Link } from 'react-router-dom';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  ArrowRight,
  UsersRound,
} from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import ContactForm from '@/components/ContactForm';
import { businessConfig, buildWhatsAppLink } from '@/config/business';

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact Us — Vinayak Orthopaedic Solutions | Kanpur Office & Pan-India Inquiries"
        description="Contact Vinayak Orthopaedic Solutions for orthopedic implants, locking plate systems, intramedullary nails, and external fixators. Phone, WhatsApp, email, and enquiry form available."
        canonical="https://vinyanaksurgicals.com/contact-us"
        keywords="contact vinayak surgicals, orthopedic supplier Kanpur, medical equipment inquiries Kanpur, trauma implant quote India"
      />
      <Breadcrumbs crumbs={[{ label: 'Contact Us' }]} />

      {/* Hero Section matching Reference Screenshot */}
      <section className="relative isolate overflow-hidden bg-[#eef6fc] min-h-[380px] sm:min-h-[420px] lg:min-h-[460px] pt-7 sm:pt-9 lg:pt-11 pb-8 sm:pb-10 border-b border-slate-200/80">
        {/* Background Image: sharp surgical scene + metal instruments */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 bg-cover bg-right md:bg-[center_top]"
          style={{
            backgroundImage: "url('/images/contact-hero-composite.jpg')",
            imageRendering: '-webkit-optimize-contrast',
          }}
        />

        {/* Ambient mobile/tablet soft gradient overlay to guarantee text legibility */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-r from-white/95 via-white/85 to-white/20 sm:hidden"
        />

        <div className="container-x relative z-10 w-full flex flex-col justify-between h-full">
          {/* Top Row: Headline + Info Card */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
            <div className="max-w-[540px]">
              <span className="inline-block text-[11px] sm:text-xs font-extrabold uppercase tracking-[0.2em] text-[#062D56] bg-white/90 backdrop-blur-xs px-3 py-1 rounded-full border border-slate-200/90 shadow-2xs">
                GET IN TOUCH
              </span>
              <h1 className="mt-3 font-display text-3xl sm:text-4xl lg:text-[42px] font-extrabold leading-[1.12] tracking-tight text-[#062D56]">
                Discuss Your Medical <br />
                <span className="text-[#0875D1]">Supply Requirements</span>
              </h1>
              <p className="mt-3.5 max-w-[500px] text-xs sm:text-sm leading-relaxed text-slate-700 font-medium">
                Whether you need a specific instrument, a bulk quotation or product sourcing assistance, our team is here to help. Reach us by phone, WhatsApp, email or use the enquiry form below.
              </p>
            </div>

            {/* Translucent Blue Information Panel in Upper-Right */}
            <div className="hidden md:flex items-start gap-4 rounded-2xl border border-white/25 bg-[#0a4d8c]/80 p-5 sm:p-6 text-white shadow-xl backdrop-blur-md max-w-sm lg:mr-2 shrink-0">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/20 text-white shadow-xs">
                <UsersRound className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-xs sm:text-[13px] font-medium leading-relaxed text-white/95">
                  Our team is ready to assist you with product information, availability, pricing and institutional supply requirements.
                </p>
                <span className="mt-3.5 block h-[2px] w-12 rounded-full bg-white/70" />
              </div>
            </div>
          </div>

          {/* Bottom Row: 3 Contact Cards */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl lg:max-w-[760px]">
            {/* Call Us */}
            <a
              href={`tel:${businessConfig.phoneRaw}`}
              className="group rounded-2xl border border-slate-200/90 bg-white/95 hover:bg-white p-4 sm:p-5 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0875D1] text-white shadow-2xs mb-3 group-hover:scale-105 transition-transform">
                  <Phone className="h-5 w-5" />
                </div>
                <div className="text-xs font-bold text-slate-900">Call Us</div>
                <div className="font-display text-base font-extrabold text-[#062D56] mt-0.5">
                  {businessConfig.phone}
                </div>
              </div>
              <div className="mt-3 text-[11px] font-medium text-slate-500">
                Mon-Sat: 9:30 AM – 7:00 PM
              </div>
            </a>

            {/* WhatsApp */}
            <div className="group rounded-2xl border border-slate-200/90 bg-white/95 hover:bg-white p-4 sm:p-5 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between">
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xs mb-3 group-hover:scale-105 transition-transform">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div className="text-xs font-bold text-slate-900">WhatsApp</div>
                <div className="text-xs text-slate-600 mt-0.5 leading-snug">
                  Chat with our team for quick support
                </div>
              </div>
              <div className="mt-3">
                <a
                  href={businessConfig.whatsappConfigured ? buildWhatsAppLink() : `tel:${businessConfig.phoneRaw}`}
                  target={businessConfig.whatsappConfigured ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0875D1] hover:underline"
                >
                  <span>Chat on WhatsApp</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>

            {/* Email Us */}
            <a
              href={`mailto:${businessConfig.email}`}
              className="group rounded-2xl border border-slate-200/90 bg-white/95 hover:bg-white p-4 sm:p-5 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0875D1] text-white shadow-2xs mb-3 group-hover:scale-105 transition-transform">
                  <Mail className="h-5 w-5" />
                </div>
                <div className="text-xs font-bold text-slate-900">Email Us</div>
                <div className="text-xs sm:text-[13px] font-semibold text-slate-800 mt-0.5 break-all">
                  {businessConfig.email}
                </div>
              </div>
              <div className="mt-3 text-[11px] font-medium text-slate-500">
                We usually respond within 1 business day.
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Main Form + Sidebar Section */}
      <section className="section-padding bg-slate-50 border-t border-slate-200/80">
        <div className="container-x">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="card p-6 lg:p-8 bg-white border border-[#E0E8EF]">
                <h2 className="text-xl font-display font-bold text-[#062D56] mb-1">General Enquiry Form</h2>
                <p className="text-sm text-slate-600 mb-6">
                  Fill in the form below and our team will respond within 1–2 business days.
                </p>
                <ContactForm />
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* WhatsApp CTA */}
              <div className="card p-6 bg-[#25D366]/5 border-[#25D366]/20">
                <h3 className="text-base font-display font-bold text-[#062D56] mb-2">Prefer to chat?</h3>
                <p className="text-sm text-slate-600 mb-4">
                  Reach out directly on WhatsApp for quick responses about product availability and quotations.
                </p>
                {businessConfig.whatsappConfigured ? (
                  <a href={buildWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="btn-whatsapp w-full">
                    Chat on WhatsApp
                  </a>
                ) : (
                  <p className="text-xs text-slate-500">
                    WhatsApp number is pending configuration. Please call or email us instead.
                  </p>
                )}
              </div>

              {/* Business hours */}
              <div className="card p-6 bg-white border border-[#E0E8EF]">
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="h-5 w-5 text-[#0875D1]" />
                  <h3 className="text-base font-display font-bold text-[#062D56]">Business Hours</h3>
                </div>
                <ul className="space-y-2">
                  {businessConfig.businessHours.map((bh) => (
                    <li key={bh.day} className="flex items-center justify-between text-sm">
                      <span className="text-slate-600">{bh.day}</span>
                      <span className="font-semibold text-slate-900">{bh.hours}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Service area */}
              <div className="card p-6 bg-white border border-[#E0E8EF]">
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="h-5 w-5 text-[#0875D1]" />
                  <h3 className="text-base font-display font-bold text-[#062D56]">Service Area</h3>
                </div>
                <p className="text-sm text-slate-600 mb-3">
                  Based in Kanpur, we serve healthcare institutions across Uttar Pradesh and respond to pan-India enquiries.
                </p>
                <Link to="/request-a-quote" className="text-sm font-semibold text-[#0875D1] hover:text-[#062D56] inline-flex items-center gap-1 transition-colors">
                  Request a Quote
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              {/* Quotation CTA */}
              <div className="card p-6 bg-[#062D56] text-white border-none shadow-md">
                <h3 className="text-base font-display font-bold text-white mb-2">Institutional Quotation</h3>
                <p className="text-sm text-slate-300 mb-4">
                  Need a multi-product quotation for your hospital or clinic? Use our dedicated quotation form.
                </p>
                <Link to="/request-a-quote" className="btn-cyan w-full justify-center">
                  Quotation Form
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
