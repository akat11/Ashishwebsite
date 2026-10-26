import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import type { Product } from '@/data/products';
import { productCategories } from '@/data/categories';
import { getProductAnatomy } from '@/data/productAnatomy';

export default function ProductCard({ product }: { product: Product }) {
  const category = productCategories.find((c) => c.slug === product.category);
  const materialSpec = product.specs.find((s) => s.label.toLowerCase().includes('material'));
  const sizeSpec = product.specs.find((s) => s.label.toLowerCase().includes('size') || s.label.toLowerCase().includes('hole'));
  const hasAnatomy = Boolean(getProductAnatomy(product.slug));

  return (
    <Link
      to={`/products/${product.category}/${product.slug}`}
      className="group flex flex-col h-full rounded-2xl bg-white border border-slate-200 hover:border-[#0875D1]/60 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
    >
      {/* Product Image Stage */}
      <div className="relative aspect-[4/3] w-full bg-gradient-to-b from-slate-50 to-slate-100/60 p-5 flex items-center justify-center overflow-hidden">
        <picture className="h-full w-full flex items-center justify-center">
          {product.image?.endsWith('.jpg') && (
            <source srcSet={product.image.replace(/\.jpg$/, '.webp')} type="image/webp" />
          )}
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
          />
        </picture>

        {category && (
          <span className="absolute top-3 left-3 rounded-md bg-white/95 backdrop-blur-xs px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#0875D1] shadow-xs border border-slate-200/80 truncate max-w-[170px]">
            {category.shortName}
          </span>
        )}

        {product.featured && (
          <span className="absolute top-3 right-3 rounded-md bg-amber-50 px-2 py-0.5 text-[10px] font-bold text-amber-700 border border-amber-200/60 shadow-2xs">
            Featured
          </span>
        )}

        {hasAnatomy && (
          <span className="absolute bottom-2.5 right-2.5 rounded-md bg-[#062D56]/85 backdrop-blur-xs px-2 py-0.5 text-[9.5px] font-bold text-[#12C8E8] border border-white/20 shadow-2xs flex items-center gap-1">
            <Sparkles className="h-2.5 w-2.5" />
            <span>Interactive</span>
          </span>
        )}
      </div>

      {/* Body Content */}
      <div className="p-4 sm:p-5 flex flex-1 flex-col justify-between border-t border-slate-100">
        <div>
          <h3 className="font-display text-sm sm:text-[15px] font-bold text-[#062D56] leading-snug line-clamp-2 group-hover:text-[#0875D1] transition-colors">
            {product.name}
          </h3>
          <p className="mt-1.5 text-xs text-slate-500 line-clamp-2 leading-relaxed">
            {product.description}
          </p>

          {/* Quick specs preview */}
          <div className="mt-3 space-y-1 text-[11px] text-slate-500 font-mono">
            {sizeSpec && (
              <div className="truncate text-slate-600">
                <span className="text-slate-400">Sizes:</span> {sizeSpec.value}
              </div>
            )}
            {materialSpec && (
              <div className="truncate text-[#0875D1] font-semibold">
                {materialSpec.value.includes('Titanium') ? 'Titanium Gr. 5 / SS 316L' : 'SS 316L (ASTM F138)'}
              </div>
            )}
          </div>
        </div>

        {/* Action Footer */}
        <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#0875D1] group-hover:text-[#062D56] transition-colors">
          <span className="inline-flex items-center gap-1 font-semibold">
            View Specifications
          </span>
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0875D1]/10 text-[#0875D1] group-hover:bg-[#0875D1] group-hover:text-white transition-all duration-200">
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </div>
        </div>
      </div>
    </Link>
  );
}
