import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  Search,
  Filter,
  SlidersHorizontal,
  ArrowRight,
  Eye,
  FileText,
  RotateCcw,
  Sparkles,
} from 'lucide-react';
import { products, type Product } from '@/data/products';
import { productCategories } from '@/data/categories';

interface ProductDiscoveryEngineProps {
  onInspectProduct: (product: Product) => void;
  onRequestCatalogue: (product: Product) => void;
}

export default function ProductDiscoveryEngine({
  onInspectProduct,
  onRequestCatalogue,
}: ProductDiscoveryEngineProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedMaterial, setSelectedMaterial] = useState<string>('all');

  // Filter categories for the filter bar
  const filterCategories = useMemo(
    () => [
      { slug: 'all', name: 'All Fixation Systems' },
      ...productCategories.map((c) => ({ slug: c.slug, name: c.shortName })),
    ],
    []
  );

  // Filtered products list
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      // Category filter
      if (selectedCategory !== 'all' && product.category !== selectedCategory) {
        return false;
      }
      // Material filter
      if (selectedMaterial !== 'all') {
        const materialSpec = product.specs.find((s) => s.label.toLowerCase().includes('material'));
        if (
          materialSpec &&
          !materialSpec.value.toLowerCase().includes(selectedMaterial.toLowerCase())
        ) {
          return false;
        }
      }
      // Search query
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase().trim();
        const matchesName = product.name.toLowerCase().includes(q);
        const matchesDesc = product.description.toLowerCase().includes(q);
        const matchesSpecs = product.specs.some(
          (s) => s.label.toLowerCase().includes(q) || s.value.toLowerCase().includes(q)
        );
        return matchesName || matchesDesc || matchesSpecs;
      }
      return true;
    });
  }, [selectedCategory, selectedMaterial, searchQuery]);

  // Handle filter reset
  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedMaterial('all');
  };

  // Limit display to 12 items on homepage for optimal performance, with clear pagination/view all button
  const displayedProducts = filteredProducts.slice(0, 12);

  return (
    <section className="bg-[#F8FAFC] py-18 sm:py-24 border-t border-slate-200/80">
      <div className="container-x">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#0fb2ce] mb-2">
              <Sparkles className="h-3.5 w-3.5" />
              <span>ADVANCED PRODUCT DISCOVERY &amp; CATALOGUE</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#062D56] tracking-tight">
              Explore Our Implant Systems
            </h2>
            <p className="mt-2.5 max-w-2xl text-sm sm:text-base text-slate-600 leading-relaxed">
              Real-time searchable inventory of genuine orthopaedic locking plates, intramedullary nails, external fixator frames, and precision cortical/cancellous screws.
            </p>
          </div>

          <Link
            to="/products"
            className="inline-flex items-center gap-2 rounded-xl border border-[#0875D1] bg-white px-5 py-2.5 text-sm font-bold text-[#0875D1] shadow-xs transition-all hover:bg-[#0875D1] hover:text-white shrink-0"
          >
            <span>View Full {products.length}+ Product Catalog</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-slate-200/90 mb-8 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5">
            {/* Search Input (7 cols) */}
            <div className="md:col-span-7 relative">
              <Search className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search by implant name, catalogue code, hole count, or indication..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="input-field pl-10 text-sm w-full bg-slate-50 border-slate-200 focus:bg-white"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-3 text-xs text-slate-400 hover:text-slate-600"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Material Selector (3 cols) */}
            <div className="md:col-span-3">
              <select
                value={selectedMaterial}
                onChange={(e) => setSelectedMaterial(e.target.value)}
                className="input-field text-sm bg-slate-50 border-slate-200"
                aria-label="Filter by material grade"
              >
                <option value="all">All Biomaterial Grades</option>
                <option value="Titanium">Titanium Grade 5 (Ti-6Al-4V ELI)</option>
                <option value="Stainless Steel">Stainless Steel 316L (ASTM F138)</option>
              </select>
            </div>

            {/* Reset / Count Indicator (2 cols) */}
            <div className="md:col-span-2 flex items-center justify-between sm:justify-end gap-2">
              {(searchQuery || selectedCategory !== 'all' || selectedMaterial !== 'all') && (
                <button
                  onClick={handleResetFilters}
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold text-rose-600 bg-rose-50 hover:bg-rose-100 transition-colors"
                >
                  <RotateCcw className="h-3.5 w-3.5" />
                  <span>Reset</span>
                </button>
              )}
              <span className="text-xs font-mono font-bold text-slate-500 bg-slate-100 px-3 py-2 rounded-lg whitespace-nowrap">
                {filteredProducts.length} Results
              </span>
            </div>
          </div>

          {/* Category Horizontal Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none pt-2 border-t border-slate-100">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider shrink-0 mr-1 flex items-center gap-1">
              <Filter className="h-3 w-3" /> Filter:
            </span>
            {filterCategories.map((cat) => {
              const isSelected = selectedCategory === cat.slug;
              return (
                <button
                  key={cat.slug}
                  onClick={() => setSelectedCategory(cat.slug)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                    isSelected
                      ? 'bg-[#062D56] text-white shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                  }`}
                >
                  {cat.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center border border-slate-200 shadow-sm max-w-lg mx-auto">
            <SlidersHorizontal className="h-10 w-10 text-slate-300 mx-auto mb-3" />
            <h3 className="font-display text-lg font-bold text-[#062D56]">
              No Implants Match Your Query
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1.5 leading-relaxed">
              We couldn't find any products matching "{searchQuery}". Please check the spelling or reset filters to view all genuine orthopaedic implants.
            </p>
            <button
              onClick={handleResetFilters}
              className="btn-cyan text-xs mt-4"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              <span>Reset All Filters</span>
            </button>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
              {displayedProducts.map((product) => {
                const categoryObj = productCategories.find((c) => c.slug === product.category);
                const sizesSpec = product.specs.find((s) => s.label.toLowerCase().includes('size') || s.label.toLowerCase().includes('hole'));
                const materialSpec = product.specs.find((s) => s.label.toLowerCase().includes('material'));

                return (
                  <div
                    key={product.slug}
                    className="group rounded-2xl bg-white border border-slate-200/90 hover:border-[#0875D1]/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden relative"
                  >
                    {/* Top Badges */}
                    <div className="p-4 pb-0 flex items-center justify-between gap-2 z-10">
                      <span className="text-[10.5px] font-bold uppercase tracking-wider text-[#0875D1] bg-[#0875D1]/10 px-2.5 py-0.5 rounded-md truncate max-w-[170px]">
                        {categoryObj?.shortName || product.category}
                      </span>
                      {product.featured && (
                        <span className="text-[10px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200/60">
                          Featured
                        </span>
                      )}
                    </div>

                    {/* Image Area with Zoom & Inspect Trigger */}
                    <div className="relative aspect-[4/3] p-4 flex items-center justify-center bg-gradient-to-b from-transparent to-slate-50/50">
                      <img
                        src={product.image}
                        alt={product.name}
                        loading="lazy"
                        className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300 filter drop-shadow-sm"
                      />
                      {/* Floating Quick Action Overlay on hover */}
                      <div className="absolute inset-0 bg-[#062D56]/60 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-2 p-4">
                        <button
                          onClick={() => onInspectProduct(product)}
                          className="p-2.5 rounded-xl bg-white text-[#062D56] hover:bg-[#12C8E8] hover:text-[#062D56] transition-colors shadow-md text-xs font-bold flex items-center gap-1.5"
                          title="Quick Spec Monograph"
                        >
                          <Eye className="h-4 w-4" />
                          <span>Quick Specs</span>
                        </button>
                        <button
                          onClick={() => onRequestCatalogue(product)}
                          className="p-2.5 rounded-xl bg-[#12C8E8] text-[#062D56] hover:bg-white transition-colors shadow-md text-xs font-bold flex items-center gap-1.5"
                          title="Request Monograph"
                        >
                          <FileText className="h-4 w-4" />
                          <span>Quote</span>
                        </button>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-4 pt-2 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="font-display text-sm sm:text-[15px] font-bold text-[#062D56] group-hover:text-[#0875D1] transition-colors leading-snug line-clamp-2">
                          <Link to={`/products/${product.category}/${product.slug}`}>
                            {product.name}
                          </Link>
                        </h3>

                        {/* Verified Specs Preview */}
                        <div className="mt-2.5 space-y-1 text-[11.5px] text-slate-500 font-medium">
                          {sizesSpec && (
                            <div className="truncate">
                              <span className="text-slate-400">Sizes:</span> {sizesSpec.value}
                            </div>
                          )}
                          {materialSpec && (
                            <div className="truncate text-[11px] text-[#0875D1] font-semibold">
                              {materialSpec.value.includes('Titanium') ? 'Titanium Grade 5' : 'SS 316L / Titanium'}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Card Footer Actions */}
                      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                        <button
                          onClick={() => onInspectProduct(product)}
                          className="text-xs font-semibold text-slate-500 hover:text-[#0875D1] inline-flex items-center gap-1 transition-colors"
                        >
                          <Eye className="h-3.5 w-3.5" />
                          <span>Inspect</span>
                        </button>

                        <Link
                          to={`/products/${product.category}/${product.slug}`}
                          className="text-xs font-bold text-[#0875D1] hover:text-[#062D56] inline-flex items-center gap-1 transition-colors"
                        >
                          <span>Details</span>
                          <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Pagination / View More CTA */}
            {filteredProducts.length > 12 && (
              <div className="mt-10 text-center">
                <Link
                  to="/products"
                  className="btn-blue text-sm py-3 px-8 shadow-md"
                >
                  <span>View All {filteredProducts.length} Products in Catalogue</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
