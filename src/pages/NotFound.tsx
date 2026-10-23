import { Link } from 'react-router-dom';
import { Home, ArrowLeft, ShieldAlert } from 'lucide-react';
import SEO from '@/components/SEO';

export default function NotFound() {
  return (
    <>
      <SEO
        title="Page Not Found (404) | Vinayak Surgicals"
        description="The surgical monograph or route you requested could not be located. Explore our orthopaedic trauma hardware catalog."
        noindex={true}
      />
      <section className="relative isolate overflow-hidden bg-[#020F1C] text-white min-h-[75vh] flex items-center py-20 border-b border-white/10">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-96 w-96 rounded-full bg-[#12C8E8]/15 blur-[140px]"
        />
        <div
          className="absolute inset-0 pointer-events-none opacity-20 select-none"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(18,200,232,0.18) 1px, transparent 0)',
            backgroundSize: '32px 32px',
          }}
        />

        <div className="container-x relative z-10 text-center">
          <div className="max-w-lg mx-auto rounded-3xl bg-white/[0.06] border border-white/15 p-8 sm:p-12 backdrop-blur-xl shadow-2xl">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#12C8E8]/15 text-[#12C8E8] border border-[#12C8E8]/30 mx-auto mb-4">
              <ShieldAlert className="h-7 w-7" />
            </div>

            <div className="font-mono text-xs font-bold uppercase tracking-widest text-[#12C8E8] mb-1">
              STATUS 404 // ROUTE UNRESOLVED
            </div>

            <h1 className="text-2xl sm:text-3xl font-display font-extrabold text-white mb-3">
              Page or Monograph Not Found
            </h1>

            <p className="text-xs sm:text-sm text-slate-300 mb-8 leading-relaxed">
              The clinical documentation or page you requested may have been moved, updated, or archived. Use the navigation below to explore genuine trauma implants.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <Link to="/" className="btn-cyan text-xs sm:text-sm py-3 px-6 shadow-md">
                <Home className="h-4 w-4" />
                <span>Return to Home</span>
              </Link>
              <Link
                to="/products"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 hover:bg-white/20 px-6 py-3 text-xs sm:text-sm font-semibold text-white backdrop-blur-sm transition-all"
              >
                <ArrowLeft className="h-4 w-4 text-[#12C8E8]" />
                <span>Explore All Implants</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
