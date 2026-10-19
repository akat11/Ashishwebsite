import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import PageHero from '@/components/PageHero';
import { businessConfig } from '@/config/business';

export default function TermsAndConditions() {
  return (
    <>
      <SEO
        title="Terms & Conditions | Vinayak Surgicals"
        description="Terms and conditions for using the Vinayak Surgicals website and engaging our medical supply services."
        canonical="https://vinyanaksurgicals.com/terms-and-conditions"
      />
      <Breadcrumbs crumbs={[{ label: 'Terms & Conditions' }]} />

      <PageHero
        eyebrow="Legal Terms"
        title="Terms & Conditions"
        subtitle="Last updated: October 2026"
        backgroundImage="/images/hero-orthopedic-surgical.jpg"
      />

      <section className="section-padding bg-white">
        <div className="container-x max-w-4xl">
          <div className="space-y-8 text-[#5E6F7D] leading-relaxed text-base">
            <div>
              <h2 className="text-xl font-display font-bold text-[#172B3A] mb-3">1. Acceptance of Terms</h2>
              <p>
                By accessing and utilizing the {businessConfig.legalName} website or submitting inquiries through our digital channels, you agree to comply with and be bound by the following terms and conditions. If you disagree with any portion of these terms, please refrain from using our services.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-display font-bold text-[#172B3A] mb-3">2. Product Specifications &amp; Metallurgy</h2>
              <p>
                We strive to maintain exact accuracy regarding catalogue codes, screw thread sizing, hole configurations, and materials (Stainless Steel 316L and Titanium Grade 5). However, manufacturing revisions may occur. We encourage surgical teams and institutional buyers to verify technical specifications in writing prior to order confirmation.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-display font-bold text-[#172B3A] mb-3">3. Quotations &amp; Institutional Tenders</h2>
              <p>
                Quotations issued by Vinayak Surgicals remain valid for the period specified on the official estimate document (typically 30 calendar days). Pricing is subject to statutory tax revisions and market changes in raw medical-grade metallurgy.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-display font-bold text-[#172B3A] mb-3">4. Intellectual Property &amp; Trademarks</h2>
              <p>
                All product imagery, design tokens, schematics, and textual specifications published on this website are protected under copyright laws. Third-party brand names (such as Stryker, DePuy Synthes, Zimmer Biomet, etc.) remain the exclusive property of their respective trademark holders.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-display font-bold text-[#172B3A] mb-3">5. Limitation of Liability</h2>
              <p>
                Surgical implants and fixation hardware must be selected and implanted solely by qualified orthopedic practitioners. Vinayak Surgicals shall not be liable for clinical complications or off-label surgical applications.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-display font-bold text-[#172B3A] mb-3">6. Governing Law &amp; Jurisdiction</h2>
              <p>
                These terms are governed by and construed in accordance with the laws of India. Any legal dispute or claim arising in connection with our services shall be subject to the exclusive jurisdiction of the courts of Kanpur, Uttar Pradesh.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
