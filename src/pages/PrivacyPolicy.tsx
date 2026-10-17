import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import { businessConfig } from '@/config/business';

export default function PrivacyPolicy() {
  return (
    <>
      <SEO
        title="Privacy Policy | Vinyanak Surgicals"
        description="Privacy policy for Vinyanak Surgicals website. Learn how we handle your information when you contact us or request a quotation."
        canonical="https://vinyanaksurgicals.com/privacy-policy"
      />
      <Breadcrumbs crumbs={[{ label: 'Privacy Policy' }]} />

      <section className="bg-navy-50 py-14">
        <div className="container-x">
          <h1 className="text-3xl lg:text-4xl font-display font-bold">Privacy Policy</h1>
          <p className="mt-2 text-sm text-navy-400">Last updated: October 2026</p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-x max-w-3xl prose-content">
          <div className="space-y-6 text-navy-600 leading-relaxed">
            <div>
              <h2 className="text-lg font-display font-bold text-navy-800 mb-2">Introduction</h2>
              <p>{businessConfig.legalName} ("we", "us", "our") respects your privacy and is committed to protecting your personal information. This policy describes how we collect, use and safeguard information you provide through our website.</p>
            </div>

            <div>
              <h2 className="text-lg font-display font-bold text-navy-800 mb-2">Information We Collect</h2>
              <p className="mb-2">When you contact us or submit a quotation request, we may collect:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Your name and contact details (phone, email)</li>
                <li>Organisation name and department</li>
                <li>Product enquiry details and requirements</li>
                <li>Delivery destination information</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-display font-bold text-navy-800 mb-2">How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>To respond to your enquiries and quotation requests</li>
                <li>To provide product information and specifications</li>
                <li>To process and deliver orders</li>
                <li>To communicate about your requirements</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-display font-bold text-navy-800 mb-2">Information Sharing</h2>
              <p>We do not sell or rent your personal information to third parties. We may share necessary information with our suppliers or delivery partners solely for the purpose of fulfilling your requirements.</p>
            </div>

            <div>
              <h2 className="text-lg font-display font-bold text-navy-800 mb-2">Data Security</h2>
              <p>We take reasonable measures to protect your information from unauthorised access, alteration or disclosure. Access to your information is restricted to authorised personnel only.</p>
            </div>

            <div>
              <h2 className="text-lg font-display font-bold text-navy-800 mb-2">Your Rights</h2>
              <p>You may request access to, correction of, or deletion of your personal information by contacting us using the details provided on our Contact Us page.</p>
            </div>

            <div>
              <h2 className="text-lg font-display font-bold text-navy-800 mb-2">Changes to This Policy</h2>
              <p>We may update this privacy policy from time to time. Updated versions will be posted on this page with a revised date.</p>
            </div>

            <div>
              <h2 className="text-lg font-display font-bold text-navy-800 mb-2">Contact</h2>
              <p>For any questions about this privacy policy, please contact us at {businessConfig.email}.</p>
            </div>

            <p className="text-sm text-navy-400 mt-8 pt-4 border-t border-navy-100">
              This is a draft privacy policy template. Review and customise it with your legal advisor before publishing.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
