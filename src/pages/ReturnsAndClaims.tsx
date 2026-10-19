import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import PageHero from '@/components/PageHero';
import { businessConfig } from '@/config/business';

export default function ReturnsAndClaims() {
  return (
    <>
      <SEO
        title="Returns & Claims Policy | Vinayak Surgicals"
        description="Returns and claims policy for surgical instruments and medical supply orders from Vinayak Surgicals."
        canonical="https://vinyanaksurgicals.com/returns-and-claims"
      />
      <Breadcrumbs crumbs={[{ label: 'Returns & Claims' }]} />

      <PageHero
        eyebrow="Quality Guarantee"
        title="Returns & Claims"
        subtitle="Last updated: October 2026"
        backgroundImage="/images/hero-orthopedic-surgical.jpg"
      />

      <section className="section-padding bg-white">
        <div className="container-x max-w-4xl">
          <div className="space-y-8 text-[#5E6F7D] leading-relaxed text-base">
            <div>
              <h2 className="text-xl font-display font-bold text-[#172B3A] mb-3">1. Reporting Discrepancies or Damaged Deliveries</h2>
              <p>
                If a consignment arrives with physical transit damage, seal compromise, or dimensional discrepancy, notification must be submitted within 48 hours of receipt. Please provide photographs, consignment airway bill, and itemized part numbers to our claims desk.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-display font-bold text-[#172B3A] mb-3">2. Replacement Procedure</h2>
              <p>
                Upon verification of a manufacturing non-conformance or transit damage, a replacement unit is prioritized for immediate dispatch. If an identical product is out of stock, we offer an equivalent approved specification or an institutional credit adjustment.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-display font-bold text-[#172B3A] mb-3">3. Non-Returnable Items</h2>
              <p>
                To maintain surgical asepsis standards, items that have had their protective factory sterile seals opened, items customized to patient-specific dimensions, or products showing signs of hospital processing/autoclaving cannot be accepted for return or restocking.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-display font-bold text-[#172B3A] mb-3">4. Cancellation Policy</h2>
              <p>
                Standard catalogue orders may be modified or cancelled prior to dispatch verification. Specialized instrument fabrications or custom titanium plate import orders cannot be cancelled once production has commenced.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-display font-bold text-[#172B3A] mb-3">5. Claims Support Contact</h2>
              <p>
                For all returns, discrepancy notifications, and claims assistance, reach our logistics team at{' '}
                <a href={`mailto:${businessConfig.email}`} className="font-semibold text-[#123B66] hover:underline">
                  {businessConfig.email}
                </a>{' '}
                or telephone{' '}
                <a href={`tel:${businessConfig.phoneRaw}`} className="font-semibold text-[#123B66] hover:underline">
                  {businessConfig.phone}
                </a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
