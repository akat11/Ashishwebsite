import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { FAQItem } from '@/data/faqs';

export default function FAQAccordion({ faq }: { faq: FAQItem }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-[#E0E8EF]">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 py-4 text-left transition-colors hover:text-[#123B66]"
        aria-expanded={open}
      >
        <span className="text-sm sm:text-base font-semibold text-[#172B3A]">
          {faq.question}
        </span>
        <ChevronDown
          className={`h-4 w-4 shrink-0 text-[#159A9C] transition-transform duration-200 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>
      {open && (
        <div className="pb-4 animate-slide-down">
          <p className="text-sm text-[#5E6F7D] leading-relaxed">
            {faq.answer}
          </p>
        </div>
      )}
    </div>
  );
}
