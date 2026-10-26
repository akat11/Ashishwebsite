import {
  ClipboardList,
  Phone,
  MessageCircle,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import PageHero from '@/components/PageHero';
import QuoteForm from '@/components/QuoteForm';
import { businessConfig, buildWhatsAppLink } from '@/config/business';

export default function Quote() {
  const whatsappUrl = buildWhatsAppLink(
    'Hello Vinayak Surgicals, I am requesting a formal institutional quotation for orthopaedic implants.'
  );

  return (
    <>
      <SEO
        title="Request an Institutional Quote — Orthopaedic Implants & Fixation | Vinayak Surgicals"
        description="Submit an institutional quotation request for orthopaedic locking plates, intramedullary nails, external fixator systems, and surgical screws. Hospital and bulk inquiries welcome."
        canonical="https://vinayaksurgicals.vercel.app/request-a-quote"
        keywords="orthopedic quotation request, hospital implant pricing, bulk locking plates quotation, external fixator quote Kanpur, Vinayak Surgicals"
        image="/images/services-institutional-quotation.jpg"
      />

      <Breadcrumbs crumbs={[{ label: 'Request a Quote' }]} />

      {/* Cinematic MedTech Hero */}
      <PageHero
        eyebrow="FORMAL INSTITUTIONAL PROPOSALS"
        title={
          <>
            Request a Formal <br />
            <span className="bg-gradient-to-r from-[#12C8E8] via-[#38BDF8] to-[#93C5FD] bg-clip-text text-transparent">
              Orthopaedic Quotation
            </span>
          </>
        }
        subtitle="Submit your required orthopaedic implants, plate variations, and screw specifications below. Our Kanpur clinical sales team prepares comprehensive itemized quotations for hospitals, medical colleges, and trauma emergency centers across India within 1–2 business days."
        backgroundImage="/images/services-institutional-quotation.jpg"
      />

      {/* Form + Information Sidebar */}
      <section className="bg-[#F8FAFC] py-16 sm:py-24 border-b border-slate-200">
        <div className="container-x">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Form Column (8 cols) */}
            <div className="lg:col-span-8">
              <div className="rounded-3xl bg-white p-7 sm:p-10 border border-slate-200 shadow-sm space-y-6">
                <div className="flex items-center gap-3.5 pb-6 border-b border-slate-200">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0875D1]/10 text-[#0875D1]">
                    <ClipboardList className="h-6 w-6" />
                  </div>
                  <div>
                    <h2 className="font-display text-xl sm:text-2xl font-bold text-[#062D56]">
                      Quotation Requisition Form
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                      Enter facility details and required hardware lines to receive an official itemized proposal.
                    </p>
                  </div>
                </div>

                <QuoteForm />
              </div>
            </div>

            {/* Sidebar Column (4 cols) */}
            <div className="lg:col-span-4 space-y-6">
              {/* Direct Assistance Card */}
              <div className="rounded-3xl bg-white p-6 sm:p-7 border border-slate-200 shadow-sm space-y-5">
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#0fb2ce] block mb-1">
                    URGENT SCHEDULES
                  </span>
                  <h3 className="font-display text-lg font-bold text-[#062D56]">
                    Immediate Surgical Assistance
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Have an emergency trauma schedule or urgent hospital tender query? Speak directly with our coordinator.
                  </p>
                </div>

                <div className="space-y-3">
                  <a
                    href={`tel:${businessConfig.phoneRaw}`}
                    className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-50 hover:bg-[#0875D1]/5 border border-slate-200/80 transition-colors group"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0875D1]/10 text-[#0875D1] group-hover:bg-[#0875D1] group-hover:text-white transition-colors">
                      <Phone className="h-4 w-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase text-slate-400 block font-bold">
                        Direct Phone
                      </span>
                      <span className="font-display text-xs sm:text-sm font-bold text-[#062D56] group-hover:text-[#0875D1] transition-colors">
                        {businessConfig.phone}
                      </span>
                    </div>
                  </a>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-50 hover:bg-emerald-50 border border-slate-200/80 transition-colors group"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                      <MessageCircle className="h-4 w-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase text-slate-400 block font-bold">
                        WhatsApp Sizing Desk
                      </span>
                      <span className="font-display text-xs sm:text-sm font-bold text-[#062D56] group-hover:text-emerald-700 transition-colors">
                        +91 99355 55555
                      </span>
                    </div>
                  </a>
                </div>
              </div>

              {/* Verified Quality Assurance Callout */}
              <div className="rounded-3xl bg-[#062D56] text-white p-6 sm:p-7 shadow-lg space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#12C8E8]">
                  <ShieldCheck className="h-4 w-4" />
                  <span>INSTITUTIONAL TENDER STANDARDS</span>
                </div>
                <div className="space-y-2.5 text-xs text-slate-200">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-[#12C8E8] mt-0.5" />
                    <span>Material Test Certificates (MTC) provided with dispatches</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-[#12C8E8] mt-0.5" />
                    <span>Compliant with hospital formulary &amp; tender specifications</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-[#12C8E8] mt-0.5" />
                    <span>24–48h hospital delivery across all Indian states</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
