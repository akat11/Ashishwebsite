import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQAccordion from '@/components/FAQAccordion';
import { faqs } from '@/data/faqs';

export default function FAQ() {
  const categories = [...new Set(faqs.map((f) => f.category))];

  return (
    <>
      <SEO
        title="Frequently Asked Questions — Orthopedic Implants & Fixation | Vinyanak Surgicals"
        description="Find answers to common questions about orthopedic locking plate systems, external fixators, material grades (SS 316L and Titanium Grade 5), quotations, and institutional orders."
        canonical="https://vinyanaksurgicals.com/faq"
        keywords="orthopedic FAQ, locking plates questions, external fixator guidance, stainless steel 316L implants, titanium grade 5, Vinyanak Surgicals Kanpur"
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

      <section className="bg-navy-50 py-14">
        <div className="container-x">
          <span className="section-eyebrow">Help Centre</span>
          <h1 className="mt-3 text-3xl lg:text-4xl font-display font-bold">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-navy-600 max-w-2xl leading-relaxed">
            Find answers to common questions about our products, quotations, institutional orders, shipping and support. If you can't find what you're looking for, please contact us.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-x max-w-3xl">
          {categories.map((category) => (
            <div key={category} className="mb-10">
              <h2 className="text-lg font-display font-bold mb-4 text-navy-800">
                {category}
              </h2>
              <div className="border-t border-navy-100">
                {faqs
                  .filter((f) => f.category === category)
                  .map((faq) => (
                    <FAQAccordion key={faq.question} faq={faq} />
                  ))}
              </div>
            </div>
          ))}

          <div className="mt-8 text-center bg-navy-50 rounded-lg p-8">
            <h2 className="text-lg font-display font-bold mb-2">Still have questions?</h2>
            <p className="text-sm text-navy-500 mb-5">
              Our team is ready to assist with any enquiries about products, quotations or institutional supply.
            </p>
            <Link to="/contact-us" className="btn-primary">
              Contact Us
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
