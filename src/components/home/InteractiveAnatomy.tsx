import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Crosshair,
  ExternalLink,
  Eye,
  FileText,
} from 'lucide-react';
import ThreeAnatomyViewer from './ThreeAnatomyViewer';
import { ANATOMY_REGIONS } from '@/data/anatomyRegions';
import { products, type Product } from '@/data/products';

interface InteractiveAnatomyProps {
  onSelectProduct: (product: Product) => void;
  onRequestCatalogue: (product: Product) => void;
}

export default function InteractiveAnatomy({
  onSelectProduct,
  onRequestCatalogue,
}: InteractiveAnatomyProps) {
  const [activeRegionId, setActiveRegionId] = useState<string>('wrist-hand');
  const [isTurntableActive, setIsTurntableActive] = useState<boolean>(true);

  const selectedRegion =
    ANATOMY_REGIONS.find((r) => r.id === activeRegionId) || ANATOMY_REGIONS[0];

  const resolveProduct = (implant: (typeof selectedRegion.flagshipImplants)[0]): Product => {
    // 1. Direct slug match
    const directMatch = products.find((prod) => prod.slug === implant.slug);
    if (directMatch) return directMatch;

    // 2. Fallback: fuzzy/partial slug or name match in same category
    const partialMatch = products.find(
      (prod) =>
        prod.category === implant.categorySlug &&
        (prod.slug.includes(implant.slug) ||
          implant.slug.includes(prod.slug) ||
          prod.name.toLowerCase().includes(implant.name.toLowerCase().slice(0, 10)))
    );
    if (partialMatch) return partialMatch;

    // 3. Fallback: construct guaranteed valid Product object from verified anatomyRegions data
    return {
      slug: implant.slug,
      name: implant.name,
      category: implant.categorySlug,
      description: `${implant.name} (${implant.specs}). Engineered for high-acuity anatomical stabilization and rigid fracture fixation. Code: ${implant.code}. Manufactured in ${implant.material} according to ASTM F138 & ISO 13485 standards.`,
      image: implant.image,
      specs: [
        { label: 'Catalogue Code', value: implant.code },
        { label: 'Biomaterial Grade', value: implant.material },
        { label: 'System Sizing & Specifications', value: implant.specs },
        { label: 'Anatomical Region', value: selectedRegion.name },
        { label: 'Manufacturing Standard', value: 'ISO 13485:2016 & ASTM F138' },
      ],
      featured: true,
    };
  };

  return (
    <section className="relative isolate bg-[#031525] text-white py-20 sm:py-28 border-t border-white/10 overflow-hidden">
      {/* Background Volumetric Glows */}
      <div
        className="pointer-events-none absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-[#0875D1]/15 blur-[150px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/2 -right-40 h-[600px] w-[600px] rounded-full bg-[#12C8E8]/10 blur-[150px]"
        aria-hidden="true"
      />

      {/* Subtle Clinical Grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20 select-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(18,200,232,0.18) 1px, transparent 0)',
          backgroundSize: '36px 36px',
        }}
        aria-hidden="true"
      />

      <div className="container-x relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-14">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#12C8E8] mb-2.5">
              <Crosshair className="h-4 w-4" />
              <span>SIGNATURE FEATURE // 3D INTERACTIVE ANATOMICAL EXPLORATION</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Interactive Orthopaedic Trauma Explorer
            </h2>
            <p className="mt-2.5 text-sm sm:text-base text-slate-300 leading-relaxed">
              Explore authentic implant fixation systems by skeletal anatomy. Rotate the 3D model, select a fracture region, and inspect verified locking compression plates, intramedullary nails, and biomechanical specifications.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <Link
              to="/products"
              className="btn-cyan text-xs sm:text-sm !py-2.5 !px-5"
            >
              <span>Explore All Implants</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Region Pills Navigation */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none mb-8">
          {ANATOMY_REGIONS.map((region) => {
            const isActive = region.id === activeRegionId;
            return (
              <button
                key={region.id}
                onClick={() => setActiveRegionId(region.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all border ${
                  isActive
                    ? 'bg-[#12C8E8]/20 border-[#12C8E8] text-[#12C8E8] shadow-md shadow-[#12C8E8]/20'
                    : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10 hover:text-white'
                }`}
              >
                <span
                  className={`h-2 w-2 rounded-full ${
                    isActive ? 'bg-[#12C8E8] animate-pulse' : 'bg-slate-500'
                  }`}
                />
                <span>{region.name}</span>
              </button>
            );
          })}
        </div>

        {/* 3D Viewport & Clinical Readout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Interactive 3D Three.js Skeletal Canvas (7 cols) */}
          <div className="lg:col-span-7 flex flex-col h-full">
            <ThreeAnatomyViewer
              activeRegionId={activeRegionId}
              onSelectRegion={(regId) => setActiveRegionId(regId)}
              isTurntableActive={isTurntableActive}
              onToggleTurntable={() => setIsTurntableActive(!isTurntableActive)}
              onResetView={() => setActiveRegionId('wrist-hand')}
            />
          </div>

          {/* Right Column: Detailed Clinical Fixation Readout (5 cols) */}
          <div className="lg:col-span-5 h-full flex flex-col justify-between space-y-6 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-6 sm:p-7 rounded-3xl border border-white/15 backdrop-blur-xl shadow-2xl">
            <div>
              {/* Category Breadcrumb & Tag */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3.5 border-b border-white/10">
                <span className="px-3 py-1 rounded-full bg-[#12C8E8]/15 text-[#12C8E8] text-xs font-mono font-bold uppercase tracking-wider border border-[#12C8E8]/30 truncate max-w-[220px]">
                  {selectedRegion.categoryName}
                </span>
                <Link
                  to={`/products/${selectedRegion.categorySlug}`}
                  className="text-xs font-bold text-slate-300 hover:text-white inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>All In Category</span>
                  <ExternalLink className="h-3.5 w-3.5 text-[#12C8E8]" />
                </Link>
              </div>

              {/* Title & Biomechanical Profile */}
              <h3 className="font-display text-xl sm:text-2xl font-extrabold text-white mt-4">
                {selectedRegion.name} Solutions
              </h3>
              <p className="mt-1 text-xs font-mono text-[#12C8E8]">
                {selectedRegion.subTitle}
              </p>
              <p className="mt-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                {selectedRegion.biomechanicalProfile}
              </p>

              {/* Key Surgical Indications */}
              <div className="mt-4 space-y-1.5">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 block">
                  Clinical Indications:
                </span>
                {selectedRegion.clinicalIndications.map((ind) => (
                  <div key={ind} className="flex items-start gap-2 text-xs text-slate-200">
                    <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-[#12C8E8] mt-0.5" />
                    <span className="leading-snug">{ind}</span>
                  </div>
                ))}
              </div>

              {/* Genuine Flagship Implants Grid */}
              <div className="mt-5">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 block mb-2.5">
                  Verified Flagship Hardware:
                </span>
                <div className="space-y-3">
                  {selectedRegion.flagshipImplants.map((implant) => (
                    <div
                      key={implant.name}
                      onClick={() => onSelectProduct(resolveProduct(implant))}
                      className="group rounded-2xl bg-black/40 hover:bg-black/60 p-3 sm:p-3.5 border border-white/10 hover:border-[#12C8E8]/60 transition-all flex items-center gap-3.5 h-[84px] sm:h-[90px] cursor-pointer"
                    >
                      <div className="w-[72px] sm:w-[80px] h-[60px] sm:h-[66px] bg-white rounded-xl p-1.5 shrink-0 flex items-center justify-center overflow-hidden border border-white/10 shadow-xs">
                        <img
                          src={implant.image}
                          alt={implant.name}
                          loading="lazy"
                          className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="flex-1 min-w-0 flex flex-col justify-center">
                        <h4
                          className="font-display text-xs sm:text-sm font-bold text-white group-hover:text-[#12C8E8] transition-colors leading-snug truncate"
                          title={implant.name}
                        >
                          {implant.name}
                        </h4>
                        <p className="text-[11px] font-mono text-slate-300 truncate mt-0.5">
                          {implant.specs}
                        </p>
                        <p className="text-[10.5px] font-mono text-[#12C8E8] truncate font-semibold mt-0.5">
                          {implant.material}
                        </p>
                      </div>

                      <div className="flex flex-col gap-2 shrink-0 relative z-20">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            e.preventDefault();
                            onSelectProduct(resolveProduct(implant));
                          }}
                          className="h-8 w-8 sm:h-9 sm:w-9 rounded-lg bg-white/10 hover:bg-[#12C8E8] text-white hover:text-[#031525] transition-colors flex items-center justify-center cursor-pointer shadow-xs focus:outline-hidden focus:ring-2 focus:ring-[#12C8E8]"
                          title={`Quick Spec Monograph: ${implant.name}`}
                          aria-label={`View Quick Specifications for ${implant.name}`}
                        >
                          <Eye className="h-4 w-4 pointer-events-none" />
                        </button>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            e.preventDefault();
                            onRequestCatalogue(resolveProduct(implant));
                          }}
                          className="h-8 w-8 sm:h-9 sm:w-9 rounded-lg bg-[#12C8E8]/20 hover:bg-[#12C8E8] text-[#12C8E8] hover:text-[#031525] transition-colors flex items-center justify-center cursor-pointer shadow-xs focus:outline-hidden focus:ring-2 focus:ring-[#12C8E8]"
                          title={`Request Technical Monograph: ${implant.name}`}
                          aria-label={`Request Technical Monograph for ${implant.name}`}
                        >
                          <FileText className="h-4 w-4 pointer-events-none" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-1.5 text-slate-400">
                <ShieldCheck className="h-4 w-4 text-emerald-400" />
                <span>ASTM F138 Compliant</span>
              </div>
              <Link
                to={`/products/${selectedRegion.categorySlug}`}
                className="text-xs font-bold text-[#12C8E8] hover:text-white inline-flex items-center gap-1 transition-colors"
              >
                <span>Category Details</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Scientific Disclaimer as required by prompt */}
        <p className="mt-8 text-[11px] text-slate-400 text-center max-w-3xl mx-auto leading-relaxed">
          <strong>Clinical Monograph Notice:</strong> 3D anatomical visualization provides interactive orientation to Vinayak Surgicals' genuine orthopaedic catalog for qualified orthopaedic surgeons, surgical teams, and hospital procurement departments. Consult authorized clinical product monographs and patient radiographic assessments for surgical technique and implant sizing.
        </p>
      </div>
    </section>
  );
}
