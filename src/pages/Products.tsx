import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, X, SlidersHorizontal, ArrowRight, RotateCcw, ShieldCheck, Layers3 } from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import PageHero from '@/components/PageHero';
import BottomCTA from '@/components/BottomCTA';
import CategoryCard from '@/components/CategoryCard';
import ProductCard from '@/components/ProductCard';
import { productCategories } from '@/data/categories';
import { products } from '@/data/products';

type SortOption = 'featured' | 'name-asc' | 'name-desc';

const INITIAL_PAGE_SIZE = 24;

export default function Products() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<SortOption>('featured');
  const [displayLimit, setDisplayLimit] = useState<number>(INITIAL_PAGE_SIZE);

  // Category product count lookup
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const cat of productCategories) {
      counts[cat.slug] = 0;
    }
    for (const prod of products) {
      if (counts[prod.category] !== undefined) {
        counts[prod.category]++;
      }
    }
    return counts;
  }, []);

  // Filtered and sorted products
  const filteredProducts = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return products
      .filter((product) => {
        // Category filter
        if (selectedCategory !== 'all' && product.category !== selectedCategory) {
          return false;
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
  }, [searchQuery, selectedCategory, sortBy]);

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
    setSortBy('featured');
    setDisplayLimit(INITIAL_PAGE_SIZE);
  };

  const hasActiveFilters = searchQuery.trim() !== '' || selectedCategory !== 'all' || sortBy !== 'featured';

  return (
    <>
      <SEO
        title="Orthopedic Implants & Fixation Products Catalogue | Vinayak Surgicals"
        description="Search and explore over 90 verified orthopedic locking plate systems, external fixators, and fixation screws in implant-grade Stainless Steel 316L and Titanium Grade 5."
        canonical="https://vinyanaksurgicals.com/products"
        keywords="orthopedic implants catalogue, locking plate systems, external fixators, ilizarov apparatus, distal radius plates, proximal tibia plates, femur locking plates, pediatric hip plates, cancellous screws, cortical locking screws, surgical implants supplier India"
        image="/images/categories/distal-radius-locking-plates.jpg"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'Orthopedic Implants & Fixation Products Catalogue',
          description: 'Comprehensive catalogue of precision orthopedic locking plate systems and fixation hardware.',
          url: 'https://vinyanaksurgicals.com/products',
          breadcrumb: {
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://vinyanaksurgicals.com/',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Products',
                item: 'https://vinyanaksurgicals.com/products',
              },
            ],
          },
        }}
      />

      <Breadcrumbs crumbs={[{ label: 'Products' }]} />

      <PageHero
        eyebrow="Product Catalogue"
        title="Orthopedic Implants & Fixation Systems"
        subtitle="Our catalogue spans ten comprehensive product categories covering anatomically contoured locking plates, modular external fixator systems, Ilizarov circular frames, locking screws, and specialized surgical instrumentation."
        backgroundImage="/images/hero-orthopedic-surgical.jpg"
      />

      {/* Anatomical Categories Overview */}
      <section className="section-padding bg-white border-b border-[#E0E8EF]">
        <div className="container-x">
          <div className="mb-8 sm:mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="section-eyebrow">Anatomical Regions</span>
              <h2 className="mt-2 text-section-title">Browse by Category</h2>
              <p className="mt-2 text-body-regular">
                Explore specialized implant solutions designed for specific anatomical regions and fracture patterns.
              </p>
            </div>
            <Link
              to="/request-a-quote"
              className="btn-primary shrink-0 self-start sm:self-auto"
            >
              <span>Request Hospital Quote</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            {productCategories.map((cat) => (
              <CategoryCard key={cat.slug} category={cat} />
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Product Discovery Engine */}
      <section id="catalogue-browser" className="section-padding bg-[#F4F8FB]">
        <div className="container-x">
          <div className="mb-8">
            <span className="section-eyebrow">Interactive Catalogue Browser</span>
            <h2 className="mt-2 text-section-title">All Implants &amp; Fixation Systems</h2>
            <p className="mt-2 text-body-regular max-w-3xl">
              Search by product name, catalogue code, or anatomical category. All implants are available in medical-grade Stainless Steel 316L and Titanium Grade 5.
            </p>
          </div>

          {/* Search & Filter Toolbar */}
          <div className="rounded-2xl border border-[#E0E8EF] bg-white p-4 sm:p-6 shadow-xs mb-8 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5 items-center">
              {/* Search Bar */}
              <div className="relative md:col-span-8">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#5E6F7D]" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by implant name, code (e.g. S2125R), or specification..."
                  className="input-field !pl-10 !pr-10 !py-2.5 text-sm"
                  aria-label="Search implants catalogue"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#5E6F7D] hover:text-[#172B3A] p-1"
                    aria-label="Clear search query"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>

              {/* Sort Dropdown */}
              <div className="relative md:col-span-4 flex items-center gap-2">
                <SlidersHorizontal className="h-4 w-4 text-[#5E6F7D] shrink-0" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as SortOption)}
                  className="input-field !py-2.5 text-sm"
                  aria-label="Sort implants"
                >
                  <option value="featured">Sort: Featured First</option>
                  <option value="name-asc">Sort: Name (A to Z)</option>
                  <option value="name-desc">Sort: Name (Z to A)</option>
                </select>
              </div>
            </div>

            {/* Category Filter Pills */}
            <div className="pt-2 border-t border-[#E0E8EF]/60">
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none text-xs">
                <button
                  type="button"
                  onClick={() => setSelectedCategory('all')}
                  className={`rounded-full px-3.5 py-1.5 font-semibold transition-colors shrink-0 ${
                    selectedCategory === 'all'
                      ? 'bg-[#123B66] text-white shadow-xs'
                      : 'bg-[#F4F8FB] text-[#5E6F7D] hover:bg-[#E0E8EF] hover:text-[#172B3A]'
                  }`}
                >
                  All Categories ({products.length})
                </button>
                {productCategories.map((cat) => {
                  const count = categoryCounts[cat.slug] || 0;
                  const isSelected = selectedCategory === cat.slug;
                  return (
                    <button
                      key={cat.slug}
                      type="button"
                      onClick={() => setSelectedCategory(cat.slug)}
                      className={`rounded-full px-3.5 py-1.5 font-semibold transition-colors shrink-0 ${
                        isSelected
                          ? 'bg-[#159A9C] text-white shadow-xs'
                          : 'bg-[#F4F8FB] text-[#5E6F7D] hover:bg-[#E0E8EF] hover:text-[#172B3A]'
                      }`}
                    >
                      {cat.shortName} ({count})
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Active Filters Summary */}
            <div className="flex flex-wrap items-center justify-between gap-2 pt-2 text-xs text-[#5E6F7D] border-t border-[#E0E8EF]/60">
              <div className="flex items-center gap-2">
                <span>
                  Showing <strong className="text-[#123B66]">{visibleProducts.length}</strong> of{' '}
                  <strong className="text-[#123B66]">{filteredProducts.length}</strong> matching implants
                  {filteredProducts.length !== products.length && ` (from ${products.length} total)`}
                </span>
              </div>

              {hasActiveFilters && (
                <button
                  type="button"
                  onClick={handleResetFilters}
                  className="inline-flex items-center gap-1 text-[#159A9C] hover:text-[#117c7e] font-semibold transition-colors"
                >
                  <RotateCcw className="h-3.5 w-3.5" />
                  <span>Reset All Filters</span>
                </button>
              )}
            </div>
          </div>

          {/* Products Grid or Empty State */}
          {visibleProducts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
                {visibleProducts.map((product) => (
                  <ProductCard key={product.slug} product={product} />
                ))}
              </div>

              {/* Load More Pagination */}
              {!searchQuery && visibleProducts.length < filteredProducts.length && (
                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={() => setDisplayLimit((prev) => prev + INITIAL_PAGE_SIZE)}
                    className="btn-primary !px-6 !py-3"
                  >
                    <span>Load More Implants ({filteredProducts.length - visibleProducts.length} remaining)</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setDisplayLimit(filteredProducts.length)}
                    className="btn-secondary !px-6 !py-3"
                  >
                    <span>Show All {filteredProducts.length} Products</span>
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="rounded-2xl border border-[#E0E8EF] bg-white p-10 sm:p-14 text-center max-w-xl mx-auto shadow-xs">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F4F8FB] text-[#123B66] mx-auto mb-4 border border-[#E0E8EF]">
                <Search className="h-6 w-6 text-[#159A9C]" />
              </div>
              <h3 className="font-display text-lg font-bold text-[#172B3A]">
                No matching implants found
              </h3>
              <p className="mt-2 text-sm text-[#5E6F7D] leading-relaxed">
                We couldn&apos;t find any products matching &ldquo;<span className="font-semibold text-[#172B3A]">{searchQuery}</span>&rdquo; in the selected category.
                We manufacture and source custom dimensions, hole counts, and non-standard fixation configurations on request.
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={handleResetFilters}
                  className="btn-secondary !text-xs !py-2.5 !px-4"
                >
                  <RotateCcw className="h-3.5 w-3.5" />
                  <span>Clear Search Filters</span>
                </button>
                <Link
                  to={`/request-a-quote?product=${encodeURIComponent(searchQuery)}`}
                  className="btn-primary !text-xs !py-2.5 !px-4"
                >
                  <span>Request Custom Sourcing</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Trust & Quality Banner */}
      <section className="bg-white py-10 border-t border-[#E0E8EF]">
        <div className="container-x">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#F4F8FB] border border-[#E0E8EF]">
              <ShieldCheck className="h-6 w-6 text-[#159A9C] shrink-0 mt-0.5" />
              <div>
                <h4 className="font-display text-sm font-bold text-[#172B3A]">Dual Material Availability</h4>
                <p className="text-xs text-[#5E6F7D] mt-1">Available in surgical Stainless Steel 316L and high-strength Titanium Grade 5.</p>
              </div>
            </div>
            <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#F4F8FB] border border-[#E0E8EF]">
              <Layers3 className="h-6 w-6 text-[#159A9C] shrink-0 mt-0.5" />
              <div>
                <h4 className="font-display text-sm font-bold text-[#172B3A]">Standardized Screw Threading</h4>
                <p className="text-xs text-[#5E6F7D] mt-1">Precise locking taper and combi-hole compatibility across all anatomical plate profiles.</p>
              </div>
            </div>
            <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#F4F8FB] border border-[#E0E8EF]">
              <ArrowRight className="h-6 w-6 text-[#159A9C] shrink-0 mt-0.5" />
              <div>
                <h4 className="font-display text-sm font-bold text-[#172B3A]">Hospital &amp; Tender Supply</h4>
                <p className="text-xs text-[#5E6F7D] mt-1">Formal institutional quotations, batch certification, and prompt nationwide dispatch.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BottomCTA
        eyebrow="Custom Surgical Sourcing"
        title="Need a product or custom plate size not listed here?"
        description="We offer comprehensive product sourcing assistance for hospital tenders, trauma centers, and specialized procedures."
        primaryButtonText="Request a Quote"
        primaryButtonLink="/request-a-quote"
      />
    </>
  );
}
