import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import type { Department } from '@/data/departments';

export default function DepartmentCard({ department }: { department: Department }) {
  const IconComponent = (Icons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[department.icon] || Icons.Stethoscope;
  const productPath = department.relatedCategories[0]
    ? `/products/${department.relatedCategories[0]}`
    : '/products';

  return (
    <Link
      to={productPath}
      className="group relative flex min-h-[126px] overflow-hidden rounded-lg border border-[#d9e5f2] bg-gradient-to-br from-white via-white to-[#f2f7fd] p-3.5 shadow-[0_3px_10px_rgba(22,54,91,0.08)] transition-all hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md sm:p-4"
    >
      <div className="relative z-10 flex min-w-0 flex-1 items-start gap-3.5 pr-16 sm:pr-[82px]">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-[#e8f1ff] transition-colors group-hover:bg-[#dceaff]">
          <IconComponent className="h-6 w-6 text-blue-600" />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="font-display text-[13px] font-bold leading-snug text-[#102746] transition-colors group-hover:text-blue-700">
            {department.name}
          </h3>
          <p className="mt-1 text-[10px] leading-[1.4] text-navy-600 sm:text-[11px]">
            {department.description}
          </p>
          <div className="mt-2 flex items-center gap-1 text-[10px] font-bold text-blue-700">
            Explore Instruments
            <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </div>
      <img
        src={department.image}
        alt=""
        aria-hidden="true"
        className="absolute bottom-0 right-0 top-0 h-full w-[96px] object-contain object-center sm:w-[112px]"
      />
      <div className="absolute bottom-0 right-0 top-0 w-[110px] bg-gradient-to-r from-white via-white/30 to-transparent sm:w-[130px]" />
    </Link>
  );
}
