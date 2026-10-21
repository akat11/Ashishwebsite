import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { Product } from '@/types';
import { productCategories } from '@/data/categories';

export default function ProductCard({ product }: { product: Product }) {
  const category = productCategories.find((c) => c.slug === product.category);

  return (
    <Link
      to={`/products/${product.category}/${product.slug}`}
      className="group flex flex-col h-full rounded-2xl bg-white p-3.5 sm:p-4 border border-slate-100 shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
    >
      {/* Image container */}
      <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-[#F8FAFC] border border-slate-100/80 p-3 flex items-center justify-center">
        <picture>
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
      <div className="flex flex-1 flex-col justify-between mt-3.5 px-1">
        <div>
          <h3 className="font-display text-sm sm:text-base font-bold text-[#062D56] leading-snug line-clamp-1 group-hover:text-[#0875D1] transition-colors">
            {product.name}
          </h3>
          <p className="mt-1 text-xs text-slate-500 line-clamp-2 leading-relaxed">
            {product.description}
          </p>
        </div>

        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#0875D1] group-hover:text-[#12C8E8] transition-colors">
          <span>View Details</span>
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-50 text-[#0875D1] transition-all group-hover:bg-[#0875D1] group-hover:text-white">
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </div>
        </div>
      </div>
    </Link>
  );
}
