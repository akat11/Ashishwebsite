import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { FAQItem } from '@/data/faqs';

export default function FAQAccordion({ faq }: { faq: FAQItem }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-navy-100">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
        aria-expanded={open}
      >
        <span className="text-sm lg:text-base font-semibold text-navy-800">
          {faq.question}
        </span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-medical-600 transition-transform duration-300 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>
      {open && (
        <div className="pb-5 animate-slide-down">
          <p className="text-sm text-navy-600 leading-relaxed">
            {faq.answer}
          </p>
        </div>
      )}
    </div>
  );
}
