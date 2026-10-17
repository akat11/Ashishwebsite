import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { Product } from '@/data/products';
import { productCategories } from '@/data/categories';

export default function ProductCard({ product }: { product: Product }) {
  const category = productCategories.find((c) => c.slug === product.category);

  return (
    <Link
      to={`/products/${product.category}/${product.slug}`}
      className="card card-hover group block overflow-hidden"
    >
      <div className="aspect-[4/3] overflow-hidden bg-navy-50">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        {category && (
          <span className="text-[10px] font-semibold uppercase tracking-wider text-medical-600">
            {category.shortName}
          </span>
        )}
        <h3 className="mt-1.5 text-sm font-semibold text-navy-800 leading-snug line-clamp-2 group-hover:text-medical-700 transition-colors">
          {product.name}
        </h3>
        <p className="mt-2 text-xs text-navy-500 line-clamp-2 leading-relaxed">
          {product.description}
        </p>
        <div className="mt-3 flex items-center gap-1 text-xs font-medium text-medical-600 group-hover:text-medical-700">
          View Details
          <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}
