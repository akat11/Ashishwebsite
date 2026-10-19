import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import type { BreadcrumbItem } from '@/types';

export default function Breadcrumbs({ crumbs }: { crumbs: BreadcrumbItem[] }) {
  const location = useLocation();

  return (
    <nav aria-label="Breadcrumb" className="border-b border-[#E0E8EF] bg-[#F4F8FB]">
      <div className="container-x py-3">
        <ol className="flex items-center gap-2 text-xs sm:text-sm flex-wrap text-[#5E6F7D]">
          <li>
            <Link
              to="/"
              className="inline-flex items-center gap-1 text-[#5E6F7D] hover:text-[#123B66] transition-colors"
            >
              <Home className="h-3.5 w-3.5 text-[#159A9C]" />
              <span>Home</span>
            </Link>
          </li>
          {crumbs.map((crumb, idx) => (
            <li key={idx} className="inline-flex items-center gap-2">
              <ChevronRight className="h-3.5 w-3.5 text-[#9FB3C8]" aria-hidden="true" />
              {crumb.path && crumb.path !== location.pathname ? (
                <Link
                  to={crumb.path}
                  className="text-[#5E6F7D] hover:text-[#123B66] transition-colors"
                >
                  {crumb.label}
                </Link>
              ) : (
                <span className="font-semibold text-[#172B3A]" aria-current="page">
                  {crumb.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
