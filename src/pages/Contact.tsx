import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import ContactForm from '@/components/ContactForm';
import { businessConfig, buildWhatsAppLink } from '@/config/business';

export default function Contact() {
  const whatsappUrl = buildWhatsAppLink('Hello Vinayak Surgicals, I would like to inquire about surgical implant procurement and hospital pricing.');

  return (
    <>
      <SEO
        title="Contact Us — Vinayak Surgicals | Kanpur Headquarters & Pan-India Inquiries"
        description="Contact Vinayak Surgicals for orthopaedic implants, locking compression plate systems, intramedullary nails, and external fixators. Telephone, WhatsApp, and procurement desk available."
        canonical="https://vinyanaksurgicals.com/contact-us"
        keywords="contact vinayak surgicals, orthopedic supplier Kanpur, medical equipment inquiries Kanpur, trauma implant quote India"
      />

      <Breadcrumbs crumbs={[{ label: 'Contact Us' }]} />

      {/* Cinematic MedTech Contact Hero */}
      <section className="relative isolate overflow-hidden bg-[#020F1C] text-white py-16 sm:py-20 lg:py-24 border-b border-white/10">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 bg-cover bg-right md:bg-[center_top] opacity-25"
          style={{ backgroundImage: "url('/images/contact-hero-composite.jpg')" }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-r from-[#020F1C] via-[#020F1C]/95 via-45% to-transparent"
        />

        <div className="container-x relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-xs font-mono font-bold uppercase tracking-wider text-[#12C8E8] backdrop-blur-md border border-white/15">
                <Sparkles className="h-3.5 w-3.5" />
                <span>CLINICAL PROCUREMENT &amp; HOSPITAL INQUIRIES</span>
              </div>

              <h1 className="font-display text-[clamp(2.1rem,3.4vw+0.6rem,3.6rem)] font-extrabold leading-[1.12] tracking-tight text-white">
                Connect with Our <br />
                <span className="bg-gradient-to-r from-[#12C8E8] via-[#38BDF8] to-[#93C5FD] bg-clip-text text-transparent">
                  Orthopaedic Logistics Desk
                </span>
              </h1>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                Whether you need specific locking plate sizes for an upcoming surgery, an itemized tender proposal, or emergency trauma replenishment, our Kanpur headquarters team is ready to assist.
              </p>
            </div>

            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <div className="p-6 rounded-3xl bg-white/[0.08] border border-white/15 backdrop-blur-xl max-w-sm w-full space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#12C8E8]">
                  <ShieldCheck className="h-4 w-4" />
                  <span>EMERGENCY SURGERY DESK</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Need immediate sizing confirmation or urgent trauma shipment? Connect directly with our priority WhatsApp dispatch desk.
                </p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-cyan text-xs w-full justify-center !py-2.5"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Open Priority WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Channels & Form Grid */}
      <section className="bg-[#F8FAFC] py-16 sm:py-24 border-b border-slate-200">
        <div className="container-x">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left 4 Columns: Direct Contact Cards */}
            <div className="lg:col-span-5 space-y-5">
              <div className="rounded-3xl bg-white p-7 border border-slate-200 shadow-sm space-y-6">
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#0fb2ce] block mb-1">
                    DIRECT COMMUNICATIONS
                  </span>
                  <h3 className="font-display text-xl font-bold text-[#062D56]">
                    Headquarters Channels
                  </h3>
                </div>

                <div className="space-y-4">
                  {/* Phone */}
                  <a
                    href={`tel:${businessConfig.phoneRaw}`}
                    className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 hover:bg-[#0875D1]/5 border border-slate-200/80 transition-colors group"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0875D1]/10 text-[#0875D1] group-hover:bg-[#0875D1] group-hover:text-white transition-colors">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono uppercase text-slate-400 block font-bold">
                        Telephone Inquiry
                      </span>
                      <span className="font-display text-sm sm:text-base font-bold text-[#062D56] group-hover:text-[#0875D1] transition-colors">
                        {businessConfig.phone}
                      </span>
                      <span className="text-xs text-slate-500 block mt-0.5">
                        Mon–Sat, 9:30 AM to 7:30 PM IST
                      </span>
                    </div>
                  </a>

                  {/* WhatsApp */}
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 hover:bg-emerald-50 border border-slate-200/80 transition-colors group"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                      <MessageCircle className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono uppercase text-slate-400 block font-bold">
                        WhatsApp Fast Desk
                      </span>
                      <span className="font-display text-sm sm:text-base font-bold text-[#062D56] group-hover:text-emerald-700 transition-colors">
                        +91 99355 55555
                      </span>
                      <span className="text-xs text-slate-500 block mt-0.5">
                        Instant monograph sharing &amp; photo verification
                      </span>
                    </div>
                  </a>

                  {/* Email */}
                  <a
                    href={`mailto:${businessConfig.email}`}
                    className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 hover:bg-[#0875D1]/5 border border-slate-200/80 transition-colors group"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0875D1]/10 text-[#0875D1] group-hover:bg-[#0875D1] group-hover:text-white transition-colors">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono uppercase text-slate-400 block font-bold">
                        Institutional Email
                      </span>
                      <span className="font-display text-sm sm:text-base font-bold text-[#062D56] group-hover:text-[#0875D1] transition-colors break-all">
                        {businessConfig.email}
                      </span>
                      <span className="text-xs text-slate-500 block mt-0.5">
                        For official RFPs, tender documents &amp; rate cards
                      </span>
                    </div>
                  </a>

                  {/* Office Address */}
                  <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#062D56] text-white">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono uppercase text-slate-400 block font-bold">
                        Headquarters Depot
                      </span>
                      <span className="font-display text-sm font-bold text-[#062D56] block">
                        Kanpur, Uttar Pradesh, India
                      </span>
                      <span className="text-xs text-slate-500 block mt-0.5">
                        Serving hospitals and distributors across all Indian states.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right 7 Columns: Interactive Contact Form */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl bg-white p-7 sm:p-10 border border-slate-200 shadow-sm space-y-6">
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#0fb2ce] block mb-1">
                    TRANSMISSION PORTAL
                  </span>
                  <h2 className="font-display text-xl sm:text-2xl font-bold text-[#062D56]">
                    Send a Clinical Supply Message
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    Fill in your hospital details and required fixation items below. Our procurement coordinator will respond promptly.
                  </p>
                </div>

                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
