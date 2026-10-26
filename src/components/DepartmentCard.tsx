import { Link } from 'react-router-dom';
import {
  Ambulance,
  ArrowRight,
  Baby,
  Bone,
  Footprints,
  Hand,
  Maximize2,
  Stethoscope,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { Department } from '@/data/departments';
import { productCategories } from '@/data/categories';

const departmentIconMap: Record<string, LucideIcon> = {
  Ambulance,
  Baby,
  Bone,
  Footprints,
  Hand,
  Maximize2,
};

export default function DepartmentCard({ department }: { department: Department }) {
  const IconComponent = departmentIconMap[department.icon] || Stethoscope;
  const primaryPath = department.relatedCategories[0]
    ? `/products/${department.relatedCategories[0]}`
    : '/products';

  const relatedCats = productCategories.filter((c) =>
    department.relatedCategories.includes(c.slug)
  );

  return (
    <div className="group rounded-3xl bg-white border border-slate-200 hover:border-[#0875D1] shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col justify-between">
      {/* Visual Header */}
      <div className="relative aspect-[16/9] w-full bg-slate-100 overflow-hidden">
        <img
          src={department.image}
          alt={department.name}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#062D56]/85 via-[#062D56]/30 to-transparent" />

        <div className="absolute top-3 left-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white/95 text-[#062D56] shadow-sm">
          <IconComponent className="h-5 w-5" />
        </div>

        <div className="absolute bottom-3 left-4 right-4">
          <h3 className="font-display text-lg font-bold text-white drop-shadow-sm leading-snug">
            {department.name}
          </h3>
        </div>
      </div>

      {/* Body Content */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          {department.description}
        </p>

        {/* Linked Fixation Categories */}
        {relatedCats.length > 0 && (
          <div>
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block mb-1.5">
              Target Fixation Systems:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {relatedCats.slice(0, 3).map((cat) => (
                <Link
                  key={cat.slug}
                  to={`/products/${cat.slug}`}
                  className="text-[11px] font-semibold text-[#0875D1] bg-[#0875D1]/10 hover:bg-[#0875D1] hover:text-white px-2.5 py-0.5 rounded-md transition-colors"
                >
                  {cat.shortName}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Action Link */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#0875D1] group-hover:text-[#062D56] transition-colors">
          <Link to={primaryPath} className="inline-flex items-center gap-1 font-semibold">
            <span>Explore Department Hardware</span>
          </Link>
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0875D1]/10 text-[#0875D1] group-hover:bg-[#0875D1] group-hover:text-white transition-all">
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </div>
        </div>
      </div>
    </div>
  );
}
