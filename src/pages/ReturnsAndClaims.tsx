import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';

export default function ReturnsAndClaims() {
  return (
    <>
      <SEO
        title="Returns & Claims Policy | Vinyanak Surgicals"
        description="Returns and claims policy for surgical instruments and medical supply orders from Vinyanak Surgicals."
        canonical="https://vinyanaksurgicals.com/returns-and-claims"
      />
      <Breadcrumbs crumbs={[{ label: 'Returns & Claims' }]} />

      <section className="bg-navy-50 py-14">
        <div className="container-x">
          <h1 className="text-3xl lg:text-4xl font-display font-bold">Returns &amp; Claims</h1>
          <p className="mt-2 text-sm text-navy-400">Last updated: October 2026</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-x max-w-3xl">
          <div className="space-y-6 text-navy-600 leading-relaxed">
            <div>
              <h2 className="text-lg font-display font-bold text-navy-800 mb-2">Reporting Damaged or Incorrect Products</h2>
              <p>If you receive a damaged, defective or incorrect product, please contact us within 48 hours of receiving the delivery. Provide your order details, a description of the issue and photographs where possible.</p>
            </div>

            <div>
              <h2 className="text-lg font-display font-bold text-navy-800 mb-2">Replacement Process</h2>
              <p>Once we verify the issue, we will arrange a replacement or appropriate resolution. Replacements are subject to product availability. We will inform you of the expected timeline for the replacement.</p>
            </div>

            <div>
              <h2 className="text-lg font-display font-bold text-navy-800 mb-2">Returns of Unused Products</h2>
              <p>Returns of unused, unopened products in their original packaging may be accepted within 7 days of delivery, subject to prior approval. Please contact us before returning any product. Return shipping costs may apply.</p>
            </div>

            <div>
              <h2 className="text-lg font-display font-bold text-navy-800 mb-2">Non-Returnable Items</h2>
              <p>The following items are not eligible for return due to hygiene and safety reasons:</p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Sterile single-use disposables and consumables</li>
                <li>Products with broken seals or packaging</li>
                <li>Custom-ordered or specially sourced items</li>
                <li>Products that have been used or sterilized</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-display font-bold text-navy-800 mb-2">Refunds</h2>
              <p>Where a refund is applicable, it will be processed using the original payment method. Refund processing times may vary depending on your bank or payment provider.</p>
            </div>

            <div>
              <h2 className="text-lg font-display font-bold text-navy-800 mb-2">Contact for Claims</h2>
              <p>To report an issue or initiate a return, please contact us with your order number and details of the concern. Our team will guide you through the process.</p>
            </div>

            <p className="text-sm text-navy-400 mt-8 pt-4 border-t border-navy-100">
              This is a draft returns and claims policy template. Review and customise it before publishing.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
