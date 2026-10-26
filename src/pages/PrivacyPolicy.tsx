import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import PageHero from '@/components/PageHero';
import { businessConfig } from '@/config/business';

export default function PrivacyPolicy() {
  return (
    <>
      <SEO
        title="Privacy Policy | Vinayak Surgicals"
        description="Privacy policy for Vinayak Surgicals website. Learn how we handle your information when you contact us or request a quotation."
        canonical="https://vinayaksurgicals.vercel.app/privacy-policy"
      />
      <Breadcrumbs crumbs={[{ label: 'Privacy Policy' }]} />

      <PageHero
        eyebrow="Legal & Privacy"
        title="Privacy Policy"
        subtitle="Last updated: October 2026"
        backgroundImage="/images/hero-orthopedic-surgical.jpg"
      />

      <section className="section-padding bg-white">
        <div className="container-x max-w-4xl">
          <div className="space-y-8 text-[#5E6F7D] leading-relaxed text-base">
            <div>
              <h2 className="text-xl font-display font-bold text-[#172B3A] mb-3">1. Introduction</h2>
              <p>
                {businessConfig.legalName} (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) respects your privacy and is committed to protecting your personal information. This policy describes how we collect, handle, and safeguard information you provide through our website and business inquiry channels.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-display font-bold text-[#172B3A] mb-3">2. Information We Collect</h2>
              <p className="mb-3">When you submit an inquiry, request a catalogue, or request an institutional quotation, we may collect:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Your name, job title, and professional designation</li>
                <li>Hospital, clinic, or healthcare organisation name and department</li>
                <li>Contact phone number, email address, and shipping destination city</li>
                <li>Product specifications, required implant sizes, quantities, and surgical schedules</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-display font-bold text-[#172B3A] mb-3">3. How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>To prepare and provide formal, itemized product quotations and technical specs</li>
                <li>To coordinate logistics, dispatch verification, and delivery tracking for orders</li>
                <li>To provide technical assistance regarding implant sizing and screw compatibility</li>
                <li>To fulfill our legal, accounting, and tax compliance obligations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-display font-bold text-[#172B3A] mb-3">4. Information Sharing &amp; Confidentiality</h2>
              <p>
                We do not sell, rent, or trade your personal or institutional information. We share details solely with verified delivery partners and manufacturing coordinators as necessary to fulfill your orders and logistical requirements.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-display font-bold text-[#172B3A] mb-3">5. Data Security</h2>
              <p>
                We implement industry-standard organizational and technical measures to safeguard your communications against unauthorized access, loss, or alteration. Access is strictly limited to authorized personnel handling your procurement orders.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-display font-bold text-[#172B3A] mb-3">6. Contact for Privacy Inquiries</h2>
              <p>
                If you have questions regarding this privacy policy or wish to review the information on file with us, please contact our administrative desk at{' '}
                <a href={`mailto:${businessConfig.email}`} className="font-semibold text-[#123B66] hover:underline">
                  {businessConfig.email}
                </a>{' '}
                (or telephone{' '}
                <a href={`tel:${businessConfig.phoneRaw}`} className="font-semibold text-[#123B66] hover:underline">
                  {businessConfig.phone}
                </a>
                ).
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
