import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import SEO from '@/components/SEO';

export default function NotFound() {
  return (
    <>
      <SEO
        title="Page Not Found (404) | Vinayak Surgicals"
        description="The page you are looking for could not be found. Browse our orthopedic locking plates and external fixator products or contact us for assistance."
        noindex={true}
      />
      <section className="relative isolate overflow-hidden bg-[#F4F8FB] min-h-[70vh] flex items-center py-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 bg-cover bg-[center_35%] opacity-15"
          style={{ backgroundImage: "url('/images/hero-orthopedic-surgical.jpg')" }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-[#F4F8FB]/80 via-[#F4F8FB]/95 to-[#F4F8FB]"
        />
        <div className="container-x relative z-10 text-center">
          <div className="max-w-md mx-auto card p-8 sm:p-10 bg-white border border-[#E0E8EF] shadow-md">
            <div className="font-display text-7xl font-extrabold text-[#123B66] mb-3">
              404
            </div>
            <h1 className="text-2xl font-display font-bold text-[#172B3A] mb-3">
              Page Not Found
            </h1>
            <p className="text-sm text-[#5E6F7D] mb-8 leading-relaxed">
              The page you are looking for may have been moved, renamed, or is temporarily unavailable.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <Link to="/" className="btn-primary">
                <Home className="h-4 w-4" />
                <span>Return to Home</span>
              </Link>
              <Link to="/products" className="btn-secondary">
                <ArrowLeft className="h-4 w-4 text-[#159A9C]" />
                <span>Browse Products</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
