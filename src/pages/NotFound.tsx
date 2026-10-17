import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import SEO from '@/components/SEO';

export default function NotFound() {
  return (
    <>
      <SEO
        title="Page Not Found (404) | Vinyanak Surgicals"
        description="The page you are looking for could not be found. Browse our orthopedic locking plates and external fixator products or contact us for assistance."
        noindex={true}
      />
      <section className="bg-navy-50 min-h-[60vh] flex items-center">
        <div className="container-x text-center">
          <div className="max-w-md mx-auto">
            <div className="font-display text-7xl font-bold text-medical-600 mb-4">404</div>
            <h1 className="text-2xl font-display font-bold mb-3">Page Not Found</h1>
            <p className="text-navy-500 mb-8">
              The page you are looking for may have been moved, removed or does not exist. Please use the links below to continue browsing.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <Link to="/" className="btn-primary">
                <Home className="h-4 w-4" />
                Back to Home
              </Link>
              <Link to="/products" className="btn-secondary">
                <ArrowLeft className="h-4 w-4" />
                Browse Products
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
