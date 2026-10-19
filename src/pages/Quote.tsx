import { Link } from 'react-router-dom';
import { ClipboardList, Phone, MessageCircle, ArrowRight, HelpCircle, CheckCircle2 } from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import PageHero from '@/components/PageHero';
import QuoteForm from '@/components/QuoteForm';
import { businessConfig, buildWhatsAppLink } from '@/config/business';

export default function Quote() {
  return (
    <>
      <SEO
        title="Request an Institutional Quote — Orthopedic Implants & Fixation | Vinayak Surgicals"
        description="Submit an institutional quotation request for orthopedic locking plates, external fixator systems, Ilizarov circular frames, and fixation screws. Hospital and bulk inquiries welcome."
        canonical="https://vinyanaksurgicals.com/request-a-quote"
        keywords="orthopedic quotation request, hospital implant pricing, bulk locking plates quotation, external fixator quote Kanpur, Vinayak Surgicals"
        image="/images/categories/pediatric-locking-plates.jpg"
      />

      <Breadcrumbs crumbs={[{ label: 'Request a Quote' }]} />

      <PageHero
        eyebrow="Institutional Quotation"
        title={
          <>
            Request a Formal <span className="text-[#159A9C]">Product Quotation</span>
          </>
        }
        subtitle="Submit your required orthopedic implants, plate variations, and screw specifications below. Our sales team prepares comprehensive itemized quotations for hospitals, medical colleges, trauma centers, and clinical practices across India within 1–2 business days."
        backgroundImage="/images/services-institutional-quotation.jpg"
      />

      {/* Form + Information Sidebar */}
      <section className="section-padding bg-white">
        <div className="container-x">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 items-start">
            {/* Form Column */}
            <div className="lg:col-span-2">
              <div className="card p-6 sm:p-8 bg-white border border-[#E0E8EF]">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#E0E8EF]">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F4F8FB] text-[#123B66] border border-[#E0E8EF]">
                    <ClipboardList className="h-5 w-5 text-[#159A9C]" />
                  </div>
                  <div>
                    <h2 className="font-display text-xl font-bold text-[#172B3A]">
                      Quotation Request Form
                    </h2>
                    <p className="text-xs sm:text-sm text-[#5E6F7D]">
                      Fill in your facility and hardware details to receive an itemized proposal.
                    </p>
                  </div>
                </div>

                <QuoteForm />
              </div>
            </div>

            {/* Sidebar Column */}
            <div className="space-y-6">
              {/* Quick Contact Card */}
              <div className="card p-6 bg-white border border-[#E0E8EF]">
                <h3 className="font-display text-lg font-bold text-[#172B3A] mb-2">
                  Immediate Assistance
                </h3>
                <p className="text-sm text-[#5E6F7D] mb-5 leading-relaxed">
                  Have an urgent surgery schedule or tender enquiry? Speak directly with our procurement coordinator.
                </p>
                <div className="space-y-3">
                  <a
                    href={`tel:${businessConfig.phoneRaw}`}
                    className="btn-secondary w-full !text-xs !justify-start !px-4"
                  >
                    <Phone className="h-4 w-4 text-[#159A9C]" />
                    <span>Call: {businessConfig.phone}</span>
                  </a>
                  {businessConfig.whatsappConfigured && (
                    <a
                      href={buildWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-whatsapp w-full !text-xs !justify-start !px-4"
                    >
                      <MessageCircle className="h-4 w-4" />
                      <span>WhatsApp Procurement Desk</span>
                    </a>
                  )}
                </div>
              </div>

              {/* What to Include Guide */}
              <div className="card p-6 bg-[#F4F8FB] border border-[#E0E8EF]">
                <h3 className="font-display text-base font-bold text-[#123B66] mb-3 flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#159A9C]" />
                  Recommended Details to Include
                </h3>
                <ul className="space-y-2.5 text-xs sm:text-sm text-[#5E6F7D]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#159A9C] font-bold">&bull;</span>
                    <span>Anatomical plate category (e.g. Distal Radius, Proximal Tibia)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#159A9C] font-bold">&bull;</span>
                    <span>Hole count, side (Left/Right), and length specifications</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#159A9C] font-bold">&bull;</span>
                    <span>Implant material preference (SS 316L or Titanium Grade 5)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#159A9C] font-bold">&bull;</span>
                    <span>Destination hospital address and PIN code for shipping</span>
                  </li>
                </ul>
              </div>

              {/* Help Choosing Card */}
              <div className="card p-6 bg-[#0c2642] text-white border-none shadow-md">
                <div className="flex items-center gap-2.5 mb-2">
                  <HelpCircle className="h-5 w-5 text-[#159A9C]" />
                  <h3 className="font-display text-lg font-bold text-white">
                    Need Help Choosing?
                  </h3>
                </div>
                <p className="text-sm text-[#bcccdc] mb-5 leading-relaxed">
                  Browse our interactive online catalogue to check dimensions, specifications, and screw compatibility.
                </p>
                <Link
                  to="/products"
                  className="btn-teal !text-xs w-full"
                >
                  <span>Explore Product Catalogue</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
