import { useState, useMemo } from 'react';
import {
  Search,
  SlidersHorizontal,
  ArrowRight,
  RotateCcw,
  Filter,
} from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import PageHero from '@/components/PageHero';
import BottomCTA from '@/components/BottomCTA';
import ProductCard from '@/components/ProductCard';
import { productCategories } from '@/data/categories';
import { products } from '@/data/products';

type SortOption = 'featured' | 'name-asc' | 'name-desc';

const INITIAL_PAGE_SIZE = 24;

export default function Products() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedMaterial, setSelectedMaterial] = useState<string>('all');
  const [sortBy, setSortBy] = useState<SortOption>('featured');
  const [displayLimit, setDisplayLimit] = useState<number>(INITIAL_PAGE_SIZE);

  // Filtered and sorted products
  const filteredProducts = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return products
      .filter((product) => {
        // Category filter
        if (selectedCategory !== 'all' && product.category !== selectedCategory) {
          return false;
        }

        // Material filter
        if (selectedMaterial !== 'all') {
          const matSpec = product.specs.find((s) => s.label.toLowerCase().includes('material'));
          if (
            matSpec &&
            !matSpec.value.toLowerCase().includes(selectedMaterial.toLowerCase())
          ) {
            return false;
          }
        }

        // Search query filter (matches name, description, category, and specs/catalogue codes)
        if (query) {
          const matchName = product.name.toLowerCase().includes(query);
          const matchDesc = product.description.toLowerCase().includes(query);
          const matchCat = product.category.toLowerCase().includes(query);
          const matchSpecs = product.specs.some(
            (s) => s.label.toLowerCase().includes(query) || s.value.toLowerCase().includes(query)
          );

          return matchName || matchDesc || matchCat || matchSpecs;
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'name-asc') {
          return a.name.localeCompare(b.name);
        }
        if (sortBy === 'name-desc') {
          return b.name.localeCompare(a.name);
        }
        // 'featured'
        if (a.featured === b.featured) {
          return a.name.localeCompare(b.name);
        }
        return a.featured ? -1 : 1;
      });
  }, [searchQuery, selectedCategory, selectedMaterial, sortBy]);

  const visibleProducts = useMemo(() => {
    // If the user has a search query, show all matches so they don't miss results
    if (searchQuery.trim()) {
      return filteredProducts;
    }
    return filteredProducts.slice(0, displayLimit);
  }, [filteredProducts, searchQuery, displayLimit]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedMaterial('all');
    setSortBy('featured');
    setDisplayLimit(INITIAL_PAGE_SIZE);
  };

  const hasActiveFilters =
    searchQuery.trim() !== '' ||
    selectedCategory !== 'all' ||
    selectedMaterial !== 'all' ||
    sortBy !== 'featured';

  return (
    <>
      <SEO
        title="Orthopaedic Implants & Fixation Products Catalogue | Vinayak Surgicals"
        description="Search and explore over 110 verified orthopaedic locking plate systems, intramedullary nails, external fixators, and fixation screws in implant-grade Stainless Steel 316L and Titanium Grade 5."
        canonical="https://vinyanaksurgicals.com/products"
        keywords="orthopedic implants catalogue, locking plate systems, external fixators, ilizarov apparatus, distal radius plates, proximal tibia plates, femur locking plates, pediatric hip plates, cancellous screws, cortical locking screws, surgical implants supplier India"
      />

      <Breadcrumbs crumbs={[{ label: 'Products' }]} />

      {/* Cinematic MedTech Hero */}
      <PageHero
        eyebrow="PRODUCT INVENTORY CATALOGUE"
        title={
          <>
            Precision Orthopaedic <br />
            <span className="bg-gradient-to-r from-[#12C8E8] via-[#38BDF8] to-[#93C5FD] bg-clip-text text-transparent">
              Implant &amp; Fixation Systems
            </span>
          </>
        }
        subtitle="Search and explore over 110 authentic orthopaedic implants engineered for anatomical stability, including anatomically pre-shaped locking compression plates, intramedullary nails, Ilizarov circular frames, and precision cortical/cancellous screws in SS 316L and Titanium Grade 5."
        backgroundImage="/images/categories/distal-radius-locking-plates.jpg"
      />

      {/* Main Catalogue Section */}
      <section className="bg-[#F8FAFC] py-14 sm:py-20 border-b border-slate-200">
        <div className="container-x">
          {/* Filter, Search & Sort Toolbar */}
          <div className="bg-white rounded-3xl p-5 sm:p-6 shadow-sm border border-slate-200 mb-10 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              {/* Search Field (6 cols) */}
              <div className="md:col-span-6 relative">
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

              {/* Material Grade Selector (3 cols) */}
              <div className="md:col-span-3">
                <select
                  value={selectedMaterial}
                  onChange={(e) => setSelectedMaterial(e.target.value)}
                  className="input-field text-sm bg-slate-50 border-slate-200"
                  aria-label="Filter by biomaterial grade"
                >
                  <option value="all">All Biomaterial Grades</option>
                  <option value="Titanium">Titanium Gr. 5 (Ti-6Al-4V ELI)</option>
                  <option value="Stainless Steel">Stainless Steel 316L (ASTM F138)</option>
                </select>
              </div>

              {/* Sort Order Selector (3 cols) */}
              <div className="md:col-span-3">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as SortOption)}
                  className="input-field text-sm bg-slate-50 border-slate-200"
                  aria-label="Sort product catalogue"
                >
                  <option value="featured">Sort by: Featured Implants</option>
                  <option value="name-asc">Alphabetical: A to Z</option>
                  <option value="name-desc">Alphabetical: Z to A</option>
                </select>
              </div>
            </div>

            {/* Horizontal Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none pt-3 border-t border-slate-100">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider shrink-0 mr-1 flex items-center gap-1">
                <Filter className="h-3 w-3" /> Categories:
              </span>
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === 'all'
                    ? 'bg-[#062D56] text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                }`}
              >
                All Implants ({products.length})
              </button>
              {productCategories.map((cat) => {
                const isSelected = selectedCategory === cat.slug;
                const count = products.filter((p) => p.category === cat.slug).length;
                return (
                  <button
                    key={cat.slug}
                    onClick={() => setSelectedCategory(cat.slug)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                      isSelected
                        ? 'bg-[#062D56] text-white shadow-xs'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                    }`}
                  >
                    {cat.shortName} ({count})
                  </button>
                );
              })}
            </div>

            {/* Active Filter Indicators & Reset Action */}
            <div className="flex items-center justify-between text-xs pt-1">
              <span className="font-mono text-slate-500 font-medium">
                Showing <strong className="text-slate-900">{visibleProducts.length}</strong> of{' '}
                <strong className="text-slate-900">{filteredProducts.length}</strong> matched products
              </span>
              {hasActiveFilters && (
                <button
                  onClick={handleResetFilters}
                  className="inline-flex items-center gap-1.5 text-rose-600 font-semibold hover:text-rose-700 transition-colors"
                >
                  <RotateCcw className="h-3.5 w-3.5" />
                  <span>Reset All Filters</span>
                </button>
              )}
            </div>
          </div>

          {/* Product Grid */}
          {filteredProducts.length === 0 ? (
            <div className="bg-white rounded-3xl p-14 text-center border border-slate-200 shadow-sm max-w-lg mx-auto">
              <SlidersHorizontal className="h-10 w-10 text-slate-300 mx-auto mb-3" />
              <h3 className="font-display text-lg font-bold text-[#062D56]">
                No Matching Products Found
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed">
                We couldn't find any implants matching your selected search or filter criteria. Try resetting filters or using a broader keyword.
              </p>
              <button
                onClick={handleResetFilters}
                className="btn-cyan text-xs mt-5 inline-flex items-center gap-1.5"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                <span>Reset All Filters</span>
              </button>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {visibleProducts.map((product) => (
                  <ProductCard key={product.slug} product={product} />
                ))}
              </div>

              {/* Load More Pagination */}
              {!searchQuery.trim() && displayLimit < filteredProducts.length && (
                <div className="mt-14 text-center space-y-3">
                  <p className="text-xs text-slate-500 font-mono">
                    Showing {visibleProducts.length} of {filteredProducts.length} items
                  </p>
                  <button
                    onClick={() => setDisplayLimit((prev) => prev + INITIAL_PAGE_SIZE)}
                    className="btn-blue text-xs sm:text-sm py-3 px-8 shadow-md"
                  >
                    <span>Load More Products</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <BottomCTA
        eyebrow="HOSPITAL PROCUREMENT SUPPORT"
        title="Need Sizing Assistance or an Itemized Formal Tender Quote?"
        description="Our clinical procurement desk coordinates directly with hospital purchase committees, OT technicians, and surgeons for timely surgical case fulfillment."
        primaryButtonText="Request Formal Quote"
        primaryButtonLink="/request-a-quote"
        secondaryButtonText="Contact Surgical Desk"
        secondaryButtonLink="/contact-us"
      />
    </>
  );
}
