import { Link } from 'react-router-dom';
import {
  Activity,
  ArrowRight,
  Baby,
  Bone,
  Circle,
  CircleDot,
  Crosshair,
  Footprints,
  Layers,
  Maximize2,
  Package,
  Shield,
  Wrench,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { ProductCategory } from '@/types';

const categoryIconMap: Record<string, LucideIcon> = {
  Activity,
  Baby,
  Bone,
  Circle,
  CircleDot,
  Crosshair,
  Footprints,
  Layers,
  Maximize2,
  Shield,
  Wrench,
};

export default function CategoryCard({ category }: { category: ProductCategory }) {
  const IconComponent = categoryIconMap[category.icon] || Package;

  return (
    <Link
      to={`/products/${category.slug}`}
      className="card card-hover group relative flex flex-col h-full overflow-hidden bg-white"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-white">
        <picture>
          <source srcSet={category.image.replace(/\.jpg$/, '.webp')} type="image/webp" />
          <img
            src={category.image}
            alt={category.name}
            loading="lazy"
            className="h-full w-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c2642]/85 via-[#0c2642]/40 to-transparent" />
        <div className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm opacity-90 transition-all duration-300 group-hover:bg-[#159A9C] group-hover:scale-110">
          <ArrowRight className="h-4 w-4 text-white" />
        </div>
        <div className="absolute bottom-3 left-3 right-3 text-white">
          <div className="flex items-center gap-1.5 mb-1 text-[11px] font-bold uppercase tracking-wider text-[#159A9C]">
            <IconComponent className="h-3.5 w-3.5" />
            <span>{category.productCount} Products</span>
          </div>
          <h3 className="font-display text-base font-bold text-white leading-snug line-clamp-1 group-hover:text-[#e8f7f7] transition-colors">
            {category.shortName}
          </h3>
        </div>
      </div>
      <div className="p-3.5 flex items-center justify-between bg-white text-xs font-semibold text-[#123B66] group-hover:text-[#159A9C] transition-colors border-t border-[#E0E8EF]/60">
        <span>Explore Category</span>
        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  );
}
