import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import PageHero from '@/components/PageHero';
import FAQAccordion from '@/components/FAQAccordion';
import BottomCTA from '@/components/BottomCTA';
import { faqs } from '@/data/faqs';

export default function FAQ() {
  const categories = [...new Set(faqs.map((f) => f.category))];

  return (
    <>
      <SEO
        title="Frequently Asked Questions — Orthopedic Implants & Fixation | Vinayak Surgicals"
        description="Find answers to common questions about orthopedic locking plate systems, external fixators, material grades (SS 316L and Titanium Grade 5), quotations, and institutional orders."
        canonical="https://vinyanaksurgicals.com/faq"
        keywords="orthopedic FAQ, locking plates questions, external fixator guidance, stainless steel 316L implants, titanium grade 5, Vinayak Surgicals Kanpur"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqs.slice(0, 8).map((f) => ({
            '@type': 'Question',
            name: f.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: f.answer,
            },
          })),
        }}
      />
      <Breadcrumbs crumbs={[{ label: 'FAQ' }]} />

      <PageHero
        eyebrow="Help Centre"
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about our products, quotations, institutional orders, shipping and technical support."
        backgroundImage="/images/hero-orthopedic-surgical.jpg"
      />

      <section className="section-padding bg-white">
        <div className="container-x max-w-3xl">
          {categories.map((category) => (
            <div key={category} className="mb-10">
              <h2 className="text-lg font-display font-bold mb-4 text-[#123B66]">
                {category}
              </h2>
              <div className="border-t border-[#E0E8EF]">
                {faqs
                  .filter((f) => f.category === category)
                  .map((faq) => (
                    <FAQAccordion key={faq.question} faq={faq} />
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <BottomCTA
        eyebrow="ORTHOPAEDIC SUPPLY PARTNER"
        title={
          <>
            <span className="text-[#38BDF8]">Reliable</span> Supply for Demanding
            <br className="hidden sm:inline" /> Surgical Care
          </>
        }
        description="High-quality orthopaedic implants, fixation systems and reliable healthcare supply across India."
        primaryButtonText="Get in Touch"
        primaryButtonLink="/contact-us"
        secondaryButtonText="Request a Quote"
        secondaryButtonLink="/request-a-quote"
        backgroundImage="/images/about-cta-background.png"
      />
    </>
  );
}
