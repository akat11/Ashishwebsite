import { brandCategories } from '@/data/brands';
import { Boxes } from 'lucide-react';

export default function BrandMarquee() {
  const items = [...brandCategories, ...brandCategories];

  return (
    <section className="bg-white py-14 sm:py-18 border-t border-[#E0E8EF]">
      <div className="container-x mb-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="section-eyebrow justify-center">Product Sourcing Network</span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-display font-bold text-[#172B3A]">
            Orthopedic Brands &amp; Specialized Manufacturers
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#5E6F7D] leading-relaxed">
            We source clinical instruments, trauma implants, and external fixators across multiple surgical disciplines.
          </p>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-marquee-reverse hover:[animation-play-state:paused]">
          {items.map((cat, idx) => (
            <div
              key={`${cat}-${idx}`}
              className="flex items-center gap-3 px-8 shrink-0 py-2"
            >
              <Boxes className="h-5 w-5 text-[#159A9C]" />
              <span className="text-sm sm:text-base font-medium text-[#172B3A] whitespace-nowrap">
                {cat}
              </span>
              <span className="text-[#E0E8EF] ml-6" aria-hidden="true">&bull;</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
