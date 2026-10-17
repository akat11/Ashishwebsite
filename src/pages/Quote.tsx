import { Link } from 'react-router-dom';
import { ClipboardList, Phone, MessageCircle, ArrowRight } from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import QuoteForm from '@/components/QuoteForm';
import { businessConfig, buildWhatsAppLink } from '@/config/business';

export default function Quote() {
  return (
    <>
      <SEO
        title="Request an Institutional Quote — Orthopedic Implants & Fixation | Vinyanak Surgicals"
        description="Submit an institutional quotation request for orthopedic locking plates, external fixator systems, Ilizarov circular frames, and fixation screws. Hospital and bulk inquiries welcome."
        canonical="https://vinyanaksurgicals.com/request-a-quote"
        keywords="orthopedic quotation request, hospital implant pricing, bulk locking plates quotation, external fixator quote Kanpur, Vinyanak Surgicals"
        image="/images/categories/pediatric-locking-plates.jpg"
      />
      <Breadcrumbs crumbs={[{ label: 'Request a Quote' }]} />

      <section className="bg-navy-50 py-14">
        <div className="container-x">
          <span className="section-eyebrow">Institutional Quotation</span>
          <h1 className="mt-3 text-3xl lg:text-4xl font-display font-bold">
            Request a Quote
          </h1>
          <p className="mt-4 text-navy-600 max-w-2xl leading-relaxed">
            Submit your product requirements using the form below. Include organisation details, product names, quantities and specifications. Our team will prepare a detailed quotation and respond within 1–2 business days.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-x">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="card p-6 lg:p-8">
                <div className="flex items-center gap-2 mb-6">
                  <ClipboardList className="h-5 w-5 text-medical-600" />
                  <h2 className="text-lg font-display font-bold">Quotation Request Form</h2>
                </div>
                <QuoteForm />
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="card p-6">
                <h3 className="text-base font-display font-bold mb-3">Quick Contact</h3>
                <p className="text-sm text-navy-500 mb-4">
                  Prefer to talk directly? Reach us by phone or WhatsApp for immediate assistance.
                </p>
                <div className="space-y-3">
                  <a href={`tel:${businessConfig.phoneRaw}`} className="btn-secondary w-full !text-xs">
                    <Phone className="h-4 w-4" />
                    {businessConfig.phone}
                  </a>
                  {businessConfig.whatsappConfigured && (
                    <a href={buildWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="btn-whatsapp w-full !text-xs">
                      <MessageCircle className="h-4 w-4" />
                      WhatsApp Enquiry
                    </a>
                  )}
                </div>
              </div>

              <div className="card p-6 bg-navy-50 border-navy-100">
                <h3 className="text-sm font-semibold text-navy-800 mb-3">What to Include</h3>
                <ul className="space-y-2 text-sm text-navy-500">
                  <li>• Product names and categories</li>
                  <li>• Required quantities</li>
                  <li>• Specifications (size, type, material)</li>
                  <li>• Delivery destination</li>
                  <li>• Any timeline requirements</li>
                </ul>
              </div>

              <div className="card p-6 bg-navy-900 text-white border-navy-800">
                <h3 className="text-base font-display font-bold text-white mb-2">Need Help Choosing?</h3>
                <p className="text-sm text-navy-300 mb-4">
                  Browse our product categories to find the right instruments for your needs.
                </p>
                <Link to="/products" className="inline-flex items-center gap-1 text-sm font-medium text-cyan-400 hover:text-cyan-300">
                  Browse Products
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
