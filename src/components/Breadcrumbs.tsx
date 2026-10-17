import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface Crumb {
  label: string;
  path?: string;
}

export default function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  const location = useLocation();

  return (
    <nav aria-label="Breadcrumb" className="border-b border-navy-100 bg-navy-50/50">
      <div className="container-x py-3">
        <ol className="flex items-center gap-1.5 text-xs flex-wrap">
          <li>
            <Link to="/" className="flex items-center text-navy-500 hover:text-medical-600 transition-colors">
              <Home className="h-3.5 w-3.5" />
              <span className="ml-1">Home</span>
            </Link>
          </li>
          {crumbs.map((crumb, idx) => (
            <li key={idx} className="flex items-center gap-1.5">
              <ChevronRight className="h-3.5 w-3.5 text-navy-300" />
              {crumb.path && crumb.path !== location.pathname ? (
                <Link to={crumb.path} className="text-navy-500 hover:text-medical-600 transition-colors">
                  {crumb.label}
                </Link>
              ) : (
                <span className="font-medium text-navy-700">{crumb.label}</span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
