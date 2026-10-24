import { useMemo, useState } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import {
  ArrowRight,
  Search,
  SlidersHorizontal,
  RotateCcw,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import BottomCTA from '@/components/BottomCTA';
import ProductCard from '@/components/ProductCard';
import { productCategories } from '@/data/categories';
import { getProductsByCategory } from '@/data/products';
import { filterProducts, type ProductSortOption } from '@/utils/productFilters';

type SortOrder = Extract<ProductSortOption, 'featured' | 'name-ascending' | 'name-descending'>;

export default function ProductCategoryPage() {
  const { category: slug } = useParams<{ category: string }>();
  const [query, setQuery] = useState('');
  const [sortOrder, setSortOrder] = useState<SortOrder>('featured');
  const category = productCategories.find((item) => item.slug === slug);

  const categoryProducts = useMemo(
    () => (category ? getProductsByCategory(category.slug) : []),
    [category]
  );

  const visibleProducts = useMemo(() => {
    return filterProducts({
      products: categoryProducts,
      searchQuery: query,
      sortBy: sortOrder,
    });
  }, [categoryProducts, query, sortOrder]);

  if (!category) return <Navigate to="/products" replace />;

  const relatedCategories = productCategories
    .filter((item) => item.slug !== category.slug)
    .slice(0, 6);

  return (
    <>
      <SEO
        title={`${category.name} — Orthopaedic Implants & Fixation Systems | Vinayak Surgicals`}
        description={category.description}
        canonical={`https://vinayaksurgicals.vercel.app/products/${category.slug}`}
        image={category.image}
        keywords={`${category.name}, ${category.shortName}, orthopedic locking plates, trauma fixation, orthopedic implants India, Vinayak Surgicals Kanpur`}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: category.name,
          description: category.description,
          url: `https://vinayaksurgicals.vercel.app/products/${category.slug}`,
          breadcrumb: {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://vinayaksurgicals.vercel.app/' },
              { '@type': 'ListItem', position: 2, name: 'Products', item: 'https://vinayaksurgicals.vercel.app/products' },
              {
                '@type': 'ListItem',
                position: 3,
                name: category.name,
                item: `https://vinayaksurgicals.vercel.app/products/${category.slug}`,
              },
            ],
          },
        }}
      />

      <Breadcrumbs
        crumbs={[
          { label: 'Products', path: '/products' },
          { label: category.shortName },
        ]}
      />

      {/* Cinematic Category Hero Section */}
      <section className="relative isolate overflow-hidden bg-[#020F1C] text-white py-16 sm:py-20 lg:py-24 border-b border-white/10">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 bg-cover bg-[center_35%] opacity-25 sm:opacity-35 md:inset-y-0 md:left-auto md:right-0 md:w-[55%] md:opacity-45"
          style={{ backgroundImage: `url('${category.image}')` }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-r from-[#020F1C] via-[#020F1C]/95 via-45% to-transparent"
        />

        <div className="container-x relative z-10 w-full">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-xs font-mono font-bold uppercase tracking-wider text-[#12C8E8] backdrop-blur-md border border-white/15">
              <Sparkles className="h-3.5 w-3.5" />
              <span>ANATOMICAL SPECIALTY PORTFOLIO</span>
            </div>

            <h1 className="font-display text-[clamp(2.1rem,3.4vw+0.6rem,3.5rem)] font-extrabold leading-[1.12] tracking-tight text-white">
              {category.name}
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
              {category.description}
            </p>

            {/* Quick Proof Badges */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-300">
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-lg border border-white/10">
                <CheckCircle2 className="h-3.5 w-3.5 text-[#12C8E8]" />
                {categoryProducts.length} Verified Systems
              </span>
              <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-lg border border-white/10">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                ASTM F138 &amp; ASTM F136
              </span>
            </div>

            {/* Hero CTAs */}
            <div className="pt-4 flex flex-wrap gap-3.5">
              <Link
                to={`/request-a-quote?category=${encodeURIComponent(category.name)}`}
                className="btn-cyan text-xs sm:text-sm py-2.5 px-5 shadow-md"
              >
                <span>Request Category Quotation</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/products"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 hover:bg-white/20 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white backdrop-blur-sm transition-all"
              >
                <span>Browse All Categories</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Category Inventory Grid */}
      <section className="bg-[#F8FAFC] py-14 sm:py-20 border-b border-slate-200">
        <div className="container-x">
          {/* Category Filter Toolbar */}
          <div className="bg-white rounded-3xl p-5 sm:p-6 shadow-sm border border-slate-200 mb-10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="relative w-full sm:w-96">
              <Search className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
              <input
                type="text"
                placeholder={`Search within ${category.shortName}...`}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="input-field pl-10 text-sm w-full bg-slate-50 border-slate-200 focus:bg-white"
              />
              {query && (
                <button
                  onClick={() => setQuery('')}
                  className="absolute right-3 top-3 text-xs text-slate-400 hover:text-slate-600"
                >
                  Clear
                </button>
              )}
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value as SortOrder)}
                className="input-field text-sm bg-slate-50 border-slate-200"
                aria-label="Sort category products"
              >
                <option value="featured">Featured Implants</option>
                <option value="name-ascending">Name: A to Z</option>
                <option value="name-descending">Name: Z to A</option>
              </select>

              <span className="text-xs font-mono font-bold text-slate-500 bg-slate-100 px-3 py-2 rounded-xl whitespace-nowrap">
                {visibleProducts.length} Systems
              </span>
            </div>
          </div>

          {/* Product Grid */}
          {visibleProducts.length === 0 ? (
            <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 shadow-sm max-w-md mx-auto">
              <SlidersHorizontal className="h-10 w-10 text-slate-300 mx-auto mb-3" />
              <h3 className="font-display text-lg font-bold text-[#062D56]">
                No Systems Match Your Filter
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-2">
                We couldn't find any implants in {category.shortName} matching "{query}".
              </p>
              <button
                onClick={() => setQuery('')}
                className="btn-cyan text-xs mt-4 inline-flex items-center gap-1.5"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                <span>Reset Search</span>
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {visibleProducts.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
          )}

          {/* Related Categories Navigation Strip */}
          <div className="mt-16 pt-12 border-t border-slate-200">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <h3 className="font-display text-lg font-bold text-[#062D56]">
                  Related Fixation Categories
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Explore complementary trauma hardware and modular systems.
                </p>
              </div>
              <Link
                to="/products"
                className="text-xs font-bold text-[#0875D1] hover:text-[#062D56] inline-flex items-center gap-1 transition-colors"
              >
                <span>View Full Catalog</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5">
              {relatedCategories.map((rel) => (
                <Link
                  key={rel.slug}
                  to={`/products/${rel.slug}`}
                  className="group rounded-2xl bg-white p-3 border border-slate-200 shadow-2xs hover:shadow-md hover:border-[#0875D1] transition-all text-center flex flex-col items-center justify-between"
                >
                  <div className="w-12 h-12 rounded-xl bg-slate-50 p-1 flex items-center justify-center overflow-hidden mb-2">
                    <img
                      src={rel.image}
                      alt={rel.name}
                      className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <span className="font-display text-xs font-bold text-[#062D56] group-hover:text-[#0875D1] transition-colors line-clamp-1">
                    {rel.shortName}
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono mt-0.5">
                    {rel.productCount} Implants
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <BottomCTA
        eyebrow={`${category.shortName.toUpperCase()} ENQUIRIES`}
        title={`Equip Your Hospital with Certified ${category.shortName}`}
        description="Connect with our technical desk in Kanpur for sizing availability, bulk order contracts, and emergency case dispatch."
        primaryButtonText="Request Formal Quotation"
        primaryButtonLink={`/request-a-quote?category=${encodeURIComponent(category.name)}`}
        secondaryButtonText="Contact Surgical Desk"
        secondaryButtonLink="/contact-us"
      />
    </>
  );
}
