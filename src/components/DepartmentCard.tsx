import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import type { Department } from '@/data/departments';

export default function DepartmentCard({ department }: { department: Department }) {
  const IconComponent = (Icons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[department.icon] || Icons.Stethoscope;

  return (
    <Link
      to="/departments"
      className="card card-hover group block p-5"
    >
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-navy-50 transition-colors group-hover:bg-navy-100">
          <IconComponent className="h-6 w-6 text-medical-600" />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="text-base font-semibold text-navy-800 group-hover:text-medical-700 transition-colors">
            {department.name}
          </h3>
          <p className="mt-1.5 text-sm text-navy-500 line-clamp-2 leading-relaxed">
            {department.description}
          </p>
          <div className="mt-3 flex items-center gap-1 text-xs font-medium text-medical-600">
            View Instruments
            <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </Link>
  );
}
