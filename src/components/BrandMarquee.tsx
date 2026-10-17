import { brandCategories } from '@/data/brands';
import { Boxes } from 'lucide-react';

export default function BrandMarquee() {
  const items = [...brandCategories, ...brandCategories];

  return (
    <section className="bg-white py-14 border-t border-navy-100">
      <div className="container-x mb-8">
        <div className="text-center">
          <span className="section-eyebrow">Product Sourcing</span>
          <h2 className="mt-2 text-2xl lg:text-3xl font-display font-bold text-navy-900">
            Medical Brands & Manufacturers
          </h2>
          <p className="mt-3 text-sm text-navy-500 max-w-2xl mx-auto">
            We source instruments and equipment across these product categories.
            Verified brand partnerships will be displayed here once confirmed.
          </p>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-marquee-reverse hover:[animation-play-state:paused]">
          {items.map((cat, idx) => (
            <div
              key={`${cat}-${idx}`}
              className="flex items-center gap-3 px-8 shrink-0"
            >
              <Boxes className="h-5 w-5 text-medical-500" />
              <span className="text-base font-medium text-navy-600 whitespace-nowrap">
                {cat}
              </span>
              <span className="text-navy-200 ml-4">|</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
