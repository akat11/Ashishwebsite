import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import PageHero from '@/components/PageHero';

export default function ShippingPolicy() {
  return (
    <>
      <SEO
        title="Shipping Policy | Vinayak Surgicals"
        description="Shipping and delivery policy for surgical instruments and medical supply orders from Vinayak Surgicals."
        canonical="https://vinyanaksurgicals.com/shipping-policy"
      />
      <Breadcrumbs crumbs={[{ label: 'Shipping Policy' }]} />

      <PageHero
        eyebrow="Logistics & Delivery"
        title="Shipping Policy"
        subtitle="Last updated: October 2026"
        backgroundImage="/images/hero-orthopedic-surgical.jpg"
      />

      <section className="section-padding bg-white">
        <div className="container-x max-w-4xl">
          <div className="space-y-8 text-[#5E6F7D] leading-relaxed text-base">
            <div>
              <h2 className="text-xl font-display font-bold text-[#172B3A] mb-3">1. Service Coverage &amp; Delivery Zones</h2>
              <p>
                From our central hub in Kanpur, we provide dedicated delivery across Kanpur and Uttar Pradesh, including Lucknow, Agra, Varanasi, Prayagraj, and Gorakhpur. Furthermore, we maintain active pan-India logistics networks to serve healthcare institutions across all states.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-display font-bold text-[#172B3A] mb-3">2. Processing &amp; Dispatch Schedules</h2>
              <p>
                In-stock orthopedic plates, screws, and external fixator components are typically processed and dispatched within 1–2 business days. For urgent trauma hospital deliveries or scheduled surgical procedures, expedited express courier transit can be coordinated upon request.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-display font-bold text-[#172B3A] mb-3">3. Medical Grade Packaging</h2>
              <p>
                All items undergo strict visual inspection and are packaged in protective barrier materials to prevent transit damage to thread profiles, anatomical contours, and polished surfaces. Consignments are sealed with tamper-evident labeling.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-display font-bold text-[#172B3A] mb-3">4. Tracking &amp; Delivery Confirmation</h2>
              <p>
                Consignment tracking numbers and courier partner details are shared via email and WhatsApp upon dispatch. Institutional orders include complete delivery challans and tax invoices for formal hospital inventory receiving.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-display font-bold text-[#172B3A] mb-3">5. Transit Insurance</h2>
              <p>
                High-value institutional consignments and bulk tender deliveries are covered under transit insurance protocols to protect against loss or structural compromise during long-distance transit.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
