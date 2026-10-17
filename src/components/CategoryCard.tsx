import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import * as Icons from 'lucide-react';
import type { ProductCategory } from '@/data/categories';

export default function CategoryCard({ category }: { category: ProductCategory }) {
  const IconComponent = (Icons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[category.icon] || Icons.Package;

  return (
    <Link
      to={`/products/${category.slug}`}
      className="card card-hover group relative block overflow-hidden"
    >
      <div className="aspect-[4/3] overflow-hidden bg-navy-50">
        <img
          src={category.image}
          alt={category.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 to-transparent" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
        <div className="flex items-center gap-2 mb-1">
          <IconComponent className="h-4 w-4 text-cyan-400" />
          <span className="text-[10px] font-semibold uppercase tracking-wider text-cyan-300">
            {category.productCount} Products
          </span>
        </div>
        <h3 className="text-sm font-semibold leading-snug">
          {category.shortName}
        </h3>
      </div>
      <div className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm opacity-0 transition-opacity group-hover:opacity-100">
        <ArrowRight className="h-4 w-4 text-white" />
      </div>
    </Link>
  );
}
