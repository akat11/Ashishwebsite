import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { Product } from '@/types';
import { productCategories } from '@/data/categories';

export default function ProductCard({ product }: { product: Product }) {
  const category = productCategories.find((c) => c.slug === product.category);

  return (
    <Link
      to={`/products/${product.category}/${product.slug}`}
      className="group flex flex-col h-full rounded-2xl bg-white border border-[#DCE8F2] shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden"
    >
      {/* Product image container with subtle light-blue tint */}
      <div className="relative aspect-[4/3] w-full bg-gradient-to-b from-[#F4F9FD] to-[#EBF3F9] p-4 sm:p-5 flex items-center justify-center overflow-hidden">
        <picture className="h-full w-full flex items-center justify-center">
          <source srcSet={product.image.replace(/\.jpg$/, '.webp')} type="image/webp" />
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-108"
          />
        </picture>
        {category && (
          <span className="absolute top-2.5 left-2.5 rounded-md bg-white/95 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#0875D1] shadow-xs border border-slate-100">
            {category.shortName}
          </span>
        )}
      </div>

      {/* Body */}
      <div className="bg-white p-4 sm:p-4.5 flex flex-1 flex-col justify-between border-t border-slate-100/90">
        <div>
          <h3 className="font-display text-sm sm:text-base font-bold text-[#062D56] leading-snug line-clamp-2 group-hover:text-[#0875D1] transition-colors">
            {product.name}
          </h3>
          <p className="mt-1.5 text-xs text-slate-500 line-clamp-2 leading-relaxed">
            {product.description}
          </p>
        </div>

        <div className="mt-4 pt-3 border-t border-slate-100/90 flex items-center justify-between text-xs font-bold text-[#0875D1] group-hover:text-[#12C8E8] transition-colors">
          <span className="inline-flex items-center gap-1 font-bold">
            View Details
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </span>
          <div className="flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-full bg-[#0875D1] text-white shadow-xs transition-all duration-300 group-hover:bg-[#12C8E8] group-hover:text-[#062D56] group-hover:scale-105">
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </div>
        </div>
      </div>
    </Link>
  );
}
