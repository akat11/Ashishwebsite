import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { ProductCategory } from '@/types';

export default function CategoryCard({ category }: { category: ProductCategory }) {
  return (
    <Link
      to={`/products/${category.slug}`}
      className="group flex flex-col h-full rounded-2xl bg-white p-3.5 sm:p-4 border border-slate-100 shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
    >
      {/* Image container */}
      <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-[#F8FAFC] border border-slate-100/80 p-3 flex items-center justify-center">
        <picture>
          <source srcSet={category.image.replace(/\.jpg$/, '.webp')} type="image/webp" />
          <img
            src={category.image}
            alt={category.name}
            loading="lazy"
            className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-108"
          />
        </picture>
        <span className="absolute top-2.5 left-2.5 rounded-md bg-white/95 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#0875D1] shadow-xs border border-slate-100">
          {category.productCount} Items
        </span>
      </div>

      {/* Content footer */}
      <div className="mt-3.5 flex items-center justify-between gap-2 px-1">
        <div className="min-w-0">
          <h3 className="font-display text-sm sm:text-base font-bold text-[#062D56] leading-snug line-clamp-1 group-hover:text-[#0875D1] transition-colors">
            {category.shortName}
          </h3>
          <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
            Orthopaedic Fixation
          </p>
        </div>
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0875D1] text-white shadow-xs transition-all duration-300 group-hover:bg-[#12C8E8] group-hover:scale-110 group-hover:text-[#062D56]">
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </div>
      </div>
    </Link>
  );
}
