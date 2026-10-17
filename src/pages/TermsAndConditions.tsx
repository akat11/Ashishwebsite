import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import { businessConfig } from '@/config/business';

export default function TermsAndConditions() {
  return (
    <>
      <SEO
        title="Terms & Conditions | Vinyanak Surgicals"
        description="Terms and conditions for using the Vinyanak Surgicals website and engaging our medical supply services."
        canonical="https://vinyanaksurgicals.com/terms-and-conditions"
      />
      <Breadcrumbs crumbs={[{ label: 'Terms & Conditions' }]} />

      <section className="bg-navy-50 py-14">
        <div className="container-x">
          <h1 className="text-3xl lg:text-4xl font-display font-bold">Terms &amp; Conditions</h1>
          <p className="mt-2 text-sm text-navy-400">Last updated: October 2026</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-x max-w-3xl">
          <div className="space-y-6 text-navy-600 leading-relaxed">
            <div>
              <h2 className="text-lg font-display font-bold text-navy-800 mb-2">Acceptance of Terms</h2>
              <p>By accessing and using the {businessConfig.legalName} website, you accept and agree to these terms and conditions. If you do not agree, please do not use this website.</p>
            </div>

            <div>
              <h2 className="text-lg font-display font-bold text-navy-800 mb-2">Product Information</h2>
              <p>We strive to provide accurate product descriptions, specifications and images. However, actual products may vary in appearance, specifications or availability. We recommend confirming details with us before placing an order.</p>
            </div>

            <div>
              <h2 className="text-lg font-display font-bold text-navy-800 mb-2">Quotations and Pricing</h2>
              <p>All quotations are provided in good faith based on current availability and supplier pricing. Quoted prices are valid for the period specified in the quotation and are subject to change without prior notice.</p>
            </div>

            <div>
              <h2 className="text-lg font-display font-bold text-navy-800 mb-2">Orders</h2>
              <p>Orders are confirmed only after written or verbal acceptance by both parties. We reserve the right to decline or cancel orders due to product unavailability, pricing errors or other reasonable causes.</p>
            </div>

            <div>
              <h2 className="text-lg font-display font-bold text-navy-800 mb-2">Delivery</h2>
              <p>Delivery timelines are estimates and may vary based on product availability, location and logistics. We are not liable for delays beyond our reasonable control.</p>
            </div>

            <div>
              <h2 className="text-lg font-display font-bold text-navy-800 mb-2">Returns and Claims</h2>
              <p>Please refer to our Returns and Claims policy for information on reporting damaged or incorrect products and requesting replacements.</p>
            </div>

            <div>
              <h2 className="text-lg font-display font-bold text-navy-800 mb-2">Limitation of Liability</h2>
              <p>Our liability is limited to the value of the products supplied. We are not liable for indirect or consequential damages arising from the use of our products. Instruments should be used by qualified healthcare professionals in accordance with clinical guidelines.</p>
            </div>

            <div>
              <h2 className="text-lg font-display font-bold text-navy-800 mb-2">Governing Law</h2>
              <p>These terms are governed by the laws of India. Any disputes shall be subject to the jurisdiction of courts in Kanpur, Uttar Pradesh.</p>
            </div>

            <p className="text-sm text-navy-400 mt-8 pt-4 border-t border-navy-100">
              This is a draft terms and conditions template. Review and customise it with your legal advisor before publishing.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
