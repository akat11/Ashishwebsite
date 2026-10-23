import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { products, type Product } from '@/data/products';

interface SpecialtySpotlightProps {
  onInspectProduct: (product: Product) => void;
}

export default function SpecialtySpotlight({ onInspectProduct }: SpecialtySpotlightProps) {
  const [activeTab, setActiveTab] = useState<'nailing' | 'external'>('nailing');

  const nailingProducts = products
    .filter((p) => p.category === 'nailing-systems')
    .slice(0, 4);

  const externalProducts = products
    .filter(
      (p) =>
        p.category === 'external-fixator-clamps' ||
        p.category === 'ilizarov-rings-instruments'
    )
    .slice(0, 4);

  const currentProducts = activeTab === 'nailing' ? nailingProducts : externalProducts;

  return (
    <section className="bg-[#F8FAFC] py-18 sm:py-24 border-t border-slate-200/80">
      <div className="container-x">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#0fb2ce] mb-2">
              <Sparkles className="h-3.5 w-3.5" />
              <span>SPECIALIZED SURGICAL SYSTEMS</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#062D56] tracking-tight">
              High-Acuity Trauma Solutions
            </h2>
            <p className="mt-2.5 max-w-2xl text-sm sm:text-base text-slate-600 leading-relaxed">
              Engineered for complex fracture reduction: Intramedullary locking nails and circular modular external fixation frames.
            </p>
          </div>

          {/* Tab Selector */}
          <div className="flex items-center p-1.5 rounded-xl bg-slate-200/80 border border-slate-300/80 shrink-0">
            <button
              onClick={() => setActiveTab('nailing')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'nailing'
                  ? 'bg-white text-[#062D56] shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Intramedullary Nailing
            </button>
            <button
              onClick={() => setActiveTab('external')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'external'
                  ? 'bg-white text-[#062D56] shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              External &amp; Ilizarov Fixators
            </button>
          </div>
        </div>

        {/* Feature Banner Card */}
        <div className="bg-gradient-to-r from-[#062D56] to-[#0c4a8a] text-white rounded-3xl p-6 sm:p-8 mb-8 shadow-xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center relative z-10">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#12C8E8]">
                {activeTab === 'nailing'
                  ? 'MINIMALLY INVASIVE LOAD-SHARING IMPLANTS'
                  : 'DEFORMITY CORRECTION & OPEN TRAUMA STABILIZATION'}
              </span>
              <h3 className="font-display text-xl sm:text-2xl font-bold">
                {activeTab === 'nailing'
                  ? 'Complete Intramedullary Nailing Solutions'
                  : 'Circular Ilizarov Frames & Modular External Clamps'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 max-w-2xl leading-relaxed">
                {activeTab === 'nailing'
                  ? 'Antegrade and retrograde nails for tibia, femur, humerus, and trochanteric hip fractures (PFN, PFNA, Supracondylar). Featuring multi-plane proximal and distal dynamic locking in Titanium Grade 5 and SS 316L.'
                  : 'Modular AO-type pin-to-rod clamps, Ilizarov circular full and 5/8 rings, threaded rods, and dynametric wire tensioners engineered for high-energy trauma, limb lengthening, and non-union management.'}
              </p>
            </div>
            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <Link
                to={
                  activeTab === 'nailing'
                    ? '/products/nailing-systems'
                    : '/products/external-fixator-clamps'
                }
                className="btn-cyan text-xs sm:text-sm py-2.5 px-5 shrink-0"
              >
                <span>
                  {activeTab === 'nailing'
                    ? 'Explore All Nailing Nails'
                    : 'Explore All Fixators'}
                </span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* 4 Cards Grid of Actual Real Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {currentProducts.map((product) => (
            <div
              key={product.slug}
              className="group rounded-2xl bg-white border border-slate-200/90 hover:border-[#0875D1]/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              <div className="relative aspect-[4/3] p-4 flex items-center justify-center bg-slate-50/50">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-display text-sm font-bold text-[#062D56] group-hover:text-[#0875D1] transition-colors leading-snug line-clamp-2">
                    <Link to={`/products/${product.category}/${product.slug}`}>
                      {product.name}
                    </Link>
                  </h4>
                  <p className="mt-2 text-xs text-slate-500 line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                  <button
                    onClick={() => onInspectProduct(product)}
                    className="text-xs font-semibold text-slate-500 hover:text-[#0875D1] transition-colors"
                  >
                    Quick Specs
                  </button>
                  <Link
                    to={`/products/${product.category}/${product.slug}`}
                    className="text-xs font-bold text-[#0875D1] hover:text-[#062D56] inline-flex items-center gap-1 transition-colors"
                  >
                    <span>View Product</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
