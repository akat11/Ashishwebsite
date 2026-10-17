import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';

export default function ShippingPolicy() {
  return (
    <>
      <SEO
        title="Shipping Policy | Vinyanak Surgicals"
        description="Shipping and delivery policy for surgical instruments and medical supply orders from Vinyanak Surgicals."
        canonical="https://vinyanaksurgicals.com/shipping-policy"
      />
      <Breadcrumbs crumbs={[{ label: 'Shipping Policy' }]} />

      <section className="bg-navy-50 py-14">
        <div className="container-x">
          <h1 className="text-3xl lg:text-4xl font-display font-bold">Shipping Policy</h1>
          <p className="mt-2 text-sm text-navy-400">Last updated: October 2026</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-x max-w-3xl">
          <div className="space-y-6 text-navy-600 leading-relaxed">
            <div>
              <h2 className="text-lg font-display font-bold text-navy-800 mb-2">Service Areas</h2>
              <p>We deliver to Kanpur and across Uttar Pradesh. We also respond to pan-India enquiries and arrange delivery to other states where feasible. Please confirm delivery availability for your location when placing an order.</p>
            </div>

            <div>
              <h2 className="text-lg font-display font-bold text-navy-800 mb-2">Delivery Timeline</h2>
              <p>Delivery timelines depend on product availability, order volume and destination. In-stock items for local Kanpur delivery are typically delivered within 2–5 business days. Orders requiring sourcing or pan-India delivery may take longer. We will inform you of the expected timeline in your quotation.</p>
            </div>

            <div>
              <h2 className="text-lg font-display font-bold text-navy-800 mb-2">Packaging</h2>
              <p>Surgical instruments are carefully packaged to prevent damage during transit. Fragile and precision instruments are packed with protective padding. Sterile and disposable products are shipped in their original sealed packaging. Medical equipment is crated appropriately for safe transport.</p>
            </div>

            <div>
              <h2 className="text-lg font-display font-bold text-navy-800 mb-2">Shipping Charges</h2>
              <p>Shipping charges are determined based on order size, weight and delivery destination. Charges are included in your quotation unless stated otherwise.</p>
            </div>

            <div>
              <h2 className="text-lg font-display font-bold text-navy-800 mb-2">Order Tracking</h2>
              <p>For dispatched orders, we provide dispatch confirmation and relevant tracking information where available. Please contact us if you have not received your order within the expected timeline.</p>
            </div>

            <div>
              <h2 className="text-lg font-display font-bold text-navy-800 mb-2">Delivery Issues</h2>
              <p>If you experience any delivery issues, including delayed or damaged shipments, please contact us immediately. We will work to resolve the issue as quickly as possible.</p>
            </div>

            <p className="text-sm text-navy-400 mt-8 pt-4 border-t border-navy-100">
              This is a draft shipping policy template. Review and customise it before publishing.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
