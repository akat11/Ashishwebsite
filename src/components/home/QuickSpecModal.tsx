import { X, ExternalLink, ShieldCheck, CheckCircle2, MessageCircle, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Product } from '@/data/products';
import { useModalA11y } from '@/hooks/useModalA11y';
import { getProductAnatomy } from '@/data/productAnatomy';
import { buildProductWhatsAppLink } from '@/config/business';

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
  useModalA11y(Boolean(product), onClose);

  if (!product) return null;

  const anatomy = getProductAnatomy(product.slug);
  const codeSpec = product.specs?.find((s) => s.label.toLowerCase().includes('code'));
  const specsSummary = codeSpec ? `Catalogue Code: ${codeSpec.value}` : `Category: ${product.category}`;

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
        <div className="relative bg-gradient-to-r from-[#062D56] via-[#0b3866] to-[#0875D1] text-white p-5 sm:p-6 shrink-0 flex items-start justify-between gap-4 border-b border-white/10">
          <div className="flex-1 min-w-0 pr-2">
            <div className="flex flex-wrap items-center gap-2 mb-2.5">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/15 text-[#12C8E8] text-[11px] font-bold uppercase tracking-wider border border-white/10 shadow-xs">
                <ShieldCheck className="h-3.5 w-3.5 shrink-0" />
                <span>Verified Technical Monograph</span>
              </div>
              {anatomy && (
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#12C8E8]/20 text-[#12C8E8] text-[11px] font-bold uppercase tracking-wider border border-[#12C8E8]/40 shadow-xs">
                  <Sparkles className="h-3 w-3 shrink-0" />
                  <span>Interactive Anatomy Ready</span>
                </div>
              )}
            </div>
            <h3
              id="modal-product-title"
              className="font-display text-lg sm:text-xl md:text-2xl font-extrabold leading-snug text-white !text-white tracking-tight break-words"
              style={{ color: '#ffffff' }}
            >
              {product.name}
            </h3>
            {product.category && (
              <p className="mt-1 text-xs text-[#12C8E8] font-mono font-medium">
                Series: {product.category.replace(/-/g, ' ').toUpperCase()}
              </p>
            )}
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl bg-white/10 text-white/90 hover:text-white hover:bg-white/25 transition-all shrink-0 cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-[#12C8E8]"
            aria-label="Close technical monograph"
          >
            <X className="h-5 w-5 pointer-events-none" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-[180px_1fr] gap-5 items-center bg-slate-50 p-4 rounded-xl border border-slate-100">
            <div className="aspect-square bg-white rounded-lg p-2 border border-slate-200/80 flex items-center justify-center overflow-hidden">
              <picture className="w-full h-full flex items-center justify-center">
                {product.image?.endsWith('.jpg') && (
                  <source srcSet={product.image.replace(/\.jpg$/, '.webp')} type="image/webp" />
                )}
                <img
                  src={product.image}
                  alt={product.name}
                  decoding="async"
                  className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                />
              </picture>
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
            <span>{anatomy ? 'Explore Interactive Anatomy & Specs' : 'View Full Product Page'}</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </Link>

          <div className="flex items-center gap-2.5">
            <a
              href={buildProductWhatsAppLink(product.name, specsSummary)}
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
