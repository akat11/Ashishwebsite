import { useEffect } from 'react';
import { X, ExternalLink, ShieldCheck, CheckCircle2, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Product } from '@/data/products';

interface QuickSpecModalProps {
  product: Product | null;
  onClose: () => void;
  onRequestCatalogue: (product: Product) => void;
}

export default function QuickSpecModal({
  product,
  onClose,
  onRequestCatalogue,
}: QuickSpecModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (product) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [product, onClose]);

  if (!product) return null;

  const whatsappMessage = encodeURIComponent(
    `Hello Vinayak Surgicals, I am inquiring about the technical specifications and hospital supply pricing for: ${product.name} (Slug: ${product.slug}).`
  );

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#031525]/80 backdrop-blur-md transition-all animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-product-title"
    >
      <div
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden text-slate-800 max-h-[90vh] flex flex-col animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="relative bg-gradient-to-r from-[#062D56] via-[#0b3866] to-[#0875D1] text-white px-6 py-5 shrink-0 flex items-start justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/15 text-[#12C8E8] text-[11px] font-bold uppercase tracking-wider mb-2 border border-white/10">
              <ShieldCheck className="h-3 w-3" />
              <span>Verified Technical Monograph</span>
            </div>
            <h3 id="modal-product-title" className="font-display text-lg sm:text-xl font-bold leading-snug">
              {product.name}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-white/10 text-white/80 hover:text-white hover:bg-white/20 transition-colors shrink-0"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-[180px_1fr] gap-5 items-center bg-slate-50 p-4 rounded-xl border border-slate-100">
            <div className="aspect-square bg-white rounded-lg p-2 border border-slate-200/80 flex items-center justify-center overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#0875D1]">
                Clinical Description
              </span>
              <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                {product.description}
              </p>
              <div className="mt-3 flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200/60 w-fit">
                <CheckCircle2 className="h-3.5 w-3.5" />
                <span>Manufactured to ISO 13485 &amp; ASTM F138 Standards</span>
              </div>
            </div>
          </div>

          {/* Technical Specifications Table */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#062D56] mb-3 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#12C8E8]" />
              Verified Engineering Specifications
            </h4>
            <div className="rounded-xl border border-slate-200 overflow-hidden divide-y divide-slate-100 text-xs sm:text-sm">
              {product.specs.map((spec, i) => (
                <div
                  key={spec.label}
                  className={`grid grid-cols-1 sm:grid-cols-[190px_1fr] p-3 gap-1 sm:gap-4 ${
                    i % 2 === 0 ? 'bg-white' : 'bg-slate-50/60'
                  }`}
                >
                  <span className="font-semibold text-slate-600 sm:text-slate-700">
                    {spec.label}
                  </span>
                  <span className="font-mono text-slate-900 font-medium break-words">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 shrink-0 flex flex-wrap items-center justify-between gap-3">
          <Link
            to={`/products/${product.category}/${product.slug}`}
            className="text-xs sm:text-sm font-bold text-[#0875D1] hover:text-[#062D56] inline-flex items-center gap-1.5 transition-colors"
          >
            <span>View Full Product Page</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </Link>

          <div className="flex items-center gap-2.5">
            <a
              href={`https://wa.me/919935555555?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-white text-xs sm:text-sm font-semibold transition-all shadow-xs"
            >
              <MessageCircle className="h-4 w-4" />
              <span>WhatsApp Inquiry</span>
            </a>
            <button
              onClick={() => {
                onClose();
                onRequestCatalogue(product);
              }}
              className="btn-cyan text-xs sm:text-sm !py-2 !px-4"
            >
              <span>Request Monograph</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
