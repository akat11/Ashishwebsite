import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { ProductCategory } from '@/types';

export default function CategoryCard({ category }: { category: ProductCategory }) {
  return (
    <Link
      to={`/products/${category.slug}`}
      className="group flex flex-col h-full rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden"
    >
      {/* Large light blue-gray image area on top with subtle soft blue gradient */}
      <div className="relative aspect-[4/3] w-full bg-gradient-to-b from-[#EAF3FA] to-[#DCE8F2] p-4 sm:p-5 flex items-center justify-center overflow-hidden">
        <picture className="h-full w-full flex items-center justify-center">
          <source srcSet={category.image.replace(/\.jpg$/, '.webp')} type="image/webp" />
          <img
            src={category.image}
            alt={category.name}
            loading="lazy"
            className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-108"
          />
        </picture>
      </div>

      {/* Separate white title bar below */}
      <div className="bg-white p-4 sm:p-4.5 flex items-center justify-between gap-3 border-t border-slate-100/90">
        <h3 className="font-display text-sm sm:text-base font-bold text-[#062D56] leading-snug line-clamp-1 group-hover:text-[#0875D1] transition-colors">
          {category.shortName}
        </h3>
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0875D1] text-white shadow-xs transition-all duration-300 group-hover:bg-[#12C8E8] group-hover:text-[#062D56] group-hover:scale-105">
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </div>
      </div>
    </Link>
  );
}
