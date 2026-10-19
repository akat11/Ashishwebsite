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
import type { Department } from '@/types';

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
  const productPath = department.relatedCategories[0]
    ? `/products/${department.relatedCategories[0]}`
    : '/products';

  return (
    <Link
      to={productPath}
      className="card card-hover group relative flex flex-col justify-between overflow-hidden rounded-xl border border-[#E0E8EF] bg-white p-5 sm:p-6 transition-all"
    >
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F4F8FB] text-[#123B66] border border-[#E0E8EF] transition-colors group-hover:bg-[#123B66] group-hover:text-white">
            <IconComponent className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
          </div>
          <span className="text-xs font-semibold text-[#159A9C] bg-[#e8f7f7] px-2.5 py-1 rounded-full">
            Specialty
          </span>
        </div>

        <h3 className="font-display text-lg font-bold text-[#172B3A] group-hover:text-[#123B66] transition-colors leading-snug">
          {department.name}
        </h3>

        <p className="mt-2 text-sm text-[#5E6F7D] leading-relaxed line-clamp-3">
          {department.description}
        </p>
      </div>

      <div className="mt-5 pt-3.5 border-t border-[#E0E8EF] flex items-center justify-between text-sm font-semibold text-[#123B66] group-hover:text-[#159A9C] transition-colors">
        <span>Explore Related Implants</span>
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  );
}
