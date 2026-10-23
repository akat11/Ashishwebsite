import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Eye, FileText } from 'lucide-react';
import { products, type Product } from '@/data/products';

interface FlagshipShowcaseProps {
  onInspectProduct: (product: Product) => void;
  onRequestCatalogue: (product: Product) => void;
}

export default function FlagshipShowcase({
  onInspectProduct,
  onRequestCatalogue,
}: FlagshipShowcaseProps) {
  const volarProduct = products.find(
    (p) => p.slug === 'volar-distal-radius-locking-plate-2-7mm'
  );
  const tibiaProduct = products.find(
    (p) => p.slug === 'proximal-tibia-medial-locking-plate-3-5mm-4-5mm-combo'
  );

  return (
    <section className="bg-white py-18 sm:py-24 border-t border-slate-200/80">
      <div className="container-x">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#0fb2ce] mb-2">
            <Sparkles className="h-3.5 w-3.5" />
            <span>CURATED CLINICAL SPOTLIGHT</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#062D56] tracking-tight">
            Flagship Fixation Systems
          </h2>
          <p className="mt-2.5 text-sm sm:text-base text-slate-600 leading-relaxed">
            In-depth engineering profiles of Vinyanak's most widely deployed trauma systems, trusted by orthopaedic surgeons for intra-articular stability and early patient mobilization.
          </p>
        </div>

        {/* 2 Flagship Editorial Showcase Cards */}
        <div className="space-y-12">
          {/* Flagship Card 1: Volar Distal Radius 2.7mm */}
          <div className="rounded-3xl bg-gradient-to-br from-[#F8FAFC] via-[#EDF5FA] to-white p-6 sm:p-10 border border-slate-200 shadow-md grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Product Image Stage (5 cols) */}
            <div className="lg:col-span-5 relative bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs flex items-center justify-center overflow-hidden aspect-[4/3] group">
              <img
                src="/images/products/volar-distal-radius-locking-plate-2-7mm.jpg"
                alt="Volar Distal Radius Locking Plate 2.7mm"
                className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#062D56] text-white text-[11px] font-mono font-bold">
                SS 316L &amp; Titanium Gr. 5
              </div>
            </div>

            {/* Right Editorial Storytelling (7 cols) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0875D1] bg-[#0875D1]/10 px-3 py-1 rounded-lg">
                  Upper Extremity Articular Trauma
                </span>
                <span className="text-xs font-medium text-slate-500">
                  AO/OTA 23-A, B, C Fractures
                </span>
              </div>

              <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#062D56] leading-tight">
                Volar Distal Radius Locking Plate 2.7mm
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed">
                Anatomically pre-contoured volar plate engineered for stable internal fixation of complex distal radius fractures. Features low-profile rounded edges to prevent flexor tendon irritation and divergent subchondral locking screws that buttress the articular facet.
              </p>

              {/* Verified Technical Spec Matrix */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-white border border-slate-200">
                  <span className="text-[11px] text-slate-400 block font-mono">HOLE CONFIG:</span>
                  <span className="text-xs sm:text-sm font-bold text-[#062D56]">3 to 7 Holes</span>
                </div>
                <div className="p-3 rounded-xl bg-white border border-slate-200">
                  <span className="text-[11px] text-slate-400 block font-mono">SCREW DIA:</span>
                  <span className="text-xs sm:text-sm font-bold text-[#062D56]">2.7mm / 2.4mm</span>
                </div>
                <div className="p-3 rounded-xl bg-white border border-slate-200">
                  <span className="text-[11px] text-slate-400 block font-mono">CODE (SS):</span>
                  <span className="text-xs sm:text-sm font-bold text-[#062D56] font-mono">S2125R / L</span>
                </div>
                <div className="p-3 rounded-xl bg-white border border-slate-200">
                  <span className="text-[11px] text-slate-400 block font-mono">VARIANTS:</span>
                  <span className="text-xs sm:text-sm font-bold text-[#062D56]">Right &amp; Left</span>
                </div>
              </div>

              {/* Actions */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Link
                  to="/products/distal-radius-locking-plates/volar-distal-radius-locking-plate-2-7mm"
                  className="btn-cyan text-xs sm:text-sm py-2.5 px-5"
                >
                  <span>Full Monograph</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                {volarProduct && (
                  <button
                    onClick={() => onInspectProduct(volarProduct)}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-xs sm:text-sm font-bold text-slate-700 hover:bg-slate-50 transition-colors shadow-xs"
                  >
                    <Eye className="h-4 w-4 text-[#0875D1]" />
                    <span>Quick Specs</span>
                  </button>
                )}
                {volarProduct && (
                  <button
                    onClick={() => onRequestCatalogue(volarProduct)}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-xs sm:text-sm font-bold text-slate-700 hover:bg-slate-50 transition-colors shadow-xs"
                  >
                    <FileText className="h-4 w-4 text-[#0875D1]" />
                    <span>Quote</span>
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Flagship Card 2: Proximal Tibia Medial Plate */}
          <div className="rounded-3xl bg-gradient-to-br from-[#F8FAFC] via-[#EDF5FA] to-white p-6 sm:p-10 border border-slate-200 shadow-md grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Product Image Stage (5 cols) */}
            <div className="lg:col-span-5 relative bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs flex items-center justify-center overflow-hidden aspect-[4/3] group">
              <img
                src="/images/categories/tibia-locking-plates.jpg"
                alt="Proximal Tibia Medial Locking Plate"
                className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#062D56] text-white text-[11px] font-mono font-bold">
                SS 316L &amp; Titanium Gr. 5
              </div>
            </div>

            {/* Right Editorial Storytelling (7 cols) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0875D1] bg-[#0875D1]/10 px-3 py-1 rounded-lg">
                  Knee &amp; Proximal Tibial Plateau
                </span>
                <span className="text-xs font-medium text-slate-500">
                  Schatzker Type I-VI Fixation
                </span>
              </div>

              <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#062D56] leading-tight">
                Proximal Tibia Medial Locking Plate 3.5mm / 4.5mm
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed">
                Engineered specifically for split-depression medial tibial plateau fractures and proximal diaphyseal comminution. The anatomically pre-shaped head allows subchondral raft screw placement to secure the joint surface, while the low-bend shaft conforms to the anteromedial tibial cortex.
              </p>

              {/* Verified Technical Spec Matrix */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-white border border-slate-200">
                  <span className="text-[11px] text-slate-400 block font-mono">HOLE CONFIG:</span>
                  <span className="text-xs sm:text-sm font-bold text-[#062D56]">4 to 12 Holes</span>
                </div>
                <div className="p-3 rounded-xl bg-white border border-slate-200">
                  <span className="text-[11px] text-slate-400 block font-mono">SCREW DIA:</span>
                  <span className="text-xs sm:text-sm font-bold text-[#062D56]">3.5mm &amp; 4.5mm</span>
                </div>
                <div className="p-3 rounded-xl bg-white border border-slate-200">
                  <span className="text-[11px] text-slate-400 block font-mono">HOLE TYPE:</span>
                  <span className="text-xs sm:text-sm font-bold text-[#062D56]">Combination Dynamic</span>
                </div>
                <div className="p-3 rounded-xl bg-white border border-slate-200">
                  <span className="text-[11px] text-slate-400 block font-mono">VARIANTS:</span>
                  <span className="text-xs sm:text-sm font-bold text-[#062D56]">Right &amp; Left</span>
                </div>
              </div>

              {/* Actions */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Link
                  to="/products/tibia-locking-plates"
                  className="btn-cyan text-xs sm:text-sm py-2.5 px-5"
                >
                  <span>Explore Tibia Series</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                {tibiaProduct && (
                  <button
                    onClick={() => onInspectProduct(tibiaProduct)}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-xs sm:text-sm font-bold text-slate-700 hover:bg-slate-50 transition-colors shadow-xs"
                  >
                    <Eye className="h-4 w-4 text-[#0875D1]" />
                    <span>Quick Specs</span>
                  </button>
                )}
                {tibiaProduct && (
                  <button
                    onClick={() => onRequestCatalogue(tibiaProduct)}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-300 bg-white text-xs sm:text-sm font-bold text-slate-700 hover:bg-slate-50 transition-colors shadow-xs"
                  >
                    <FileText className="h-4 w-4 text-[#0875D1]" />
                    <span>Rate Card</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
