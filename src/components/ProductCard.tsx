import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { Product } from '@/types';
import { productCategories } from '@/data/categories';

export default function ProductCard({ product }: { product: Product }) {
  const category = productCategories.find((c) => c.slug === product.category);

  return (
    <Link
      to={`/products/${product.category}/${product.slug}`}
      className="card card-hover group flex flex-col h-full overflow-hidden bg-white"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F4F8FB] border-b border-[#E0E8EF]/60">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
        />
        {category && (
          <span className="absolute top-3 left-3 rounded-md bg-white/95 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-[#159A9C] shadow-xs backdrop-blur-xs">
            {category.shortName}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col justify-between p-4 sm:p-5">
        <div>
          <h3 className="font-display text-base font-bold text-[#172B3A] leading-snug line-clamp-2 group-hover:text-[#123B66] transition-colors">
            {product.name}
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-[#5E6F7D] line-clamp-2 leading-relaxed">
            {product.description}
          </p>
        </div>

        <div className="mt-4 pt-3 border-t border-[#E0E8EF]/60 flex items-center justify-between text-xs sm:text-sm font-semibold text-[#123B66] group-hover:text-[#159A9C] transition-colors">
          <span>View Details &amp; Specs</span>
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}
