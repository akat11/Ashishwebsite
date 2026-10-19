import { useMemo, useState } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import {
  ArrowDownWideNarrow,
  ArrowRight,
  Bone,
  Baby,
  FileText,
  Footprints,
  Layers3,
  Search,
  ShieldCheck,
  SlidersHorizontal,
  Stethoscope,
  Wrench,
} from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import BottomCTA from '@/components/BottomCTA';
import ProductCard from '@/components/ProductCard';
import { productCategories } from '@/data/categories';
import { getProductsByCategory } from '@/data/products';
import { businessConfig } from '@/config/business';

type SortOrder = 'featured' | 'name-ascending' | 'name-descending';

const categoryIcons = {
  'distal-radius-locking-plates': Bone,
  'tibia-locking-plates': Bone,
  'femur-locking-plates': Layers3,
  'humerus-locking-plates': Bone,
  'reconstruction-locking-plates': Layers3,
  'pediatric-locking-plates': Baby,
  'specialized-locking-plates': Footprints,
  'locking-screws-accessories': SlidersHorizontal,
  'external-fixator-clamps': Wrench,
  'ilizarov-rings-instruments': Stethoscope,
} as const;

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
    const normalizedQuery = query.trim().toLowerCase();
    const filtered = categoryProducts.filter((product) =>
      `${product.name} ${product.description}`.toLowerCase().includes(normalizedQuery)
    );

    if (sortOrder === 'name-ascending') {
      return [...filtered].sort((a, b) => a.name.localeCompare(b.name));
    }
    if (sortOrder === 'name-descending') {
      return [...filtered].sort((a, b) => b.name.localeCompare(a.name));
    }
    return filtered;
  }, [categoryProducts, query, sortOrder]);

  if (!category) return <Navigate to="/products" replace />;

  const relatedCategories = productCategories
    .filter((item) => item.slug !== category.slug)
    .slice(0, 6);

  return (
    <>
      <SEO
        title={`${category.name} — Orthopedic Locking Implants & Fixation | Vinayak Surgicals`}
        description={category.description}
        canonical={`https://vinyanaksurgicals.com/products/${category.slug}`}
        image={category.image}
        keywords={`${category.name}, ${category.shortName}, orthopedic locking plates, trauma fixation, orthopedic implants India, Vinayak Surgicals Kanpur`}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: category.name,
          description: category.description,
          url: `https://vinyanaksurgicals.com/products/${category.slug}`,
          breadcrumb: {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://vinyanaksurgicals.com/' },
              { '@type': 'ListItem', position: 2, name: 'Products', item: 'https://vinyanaksurgicals.com/products' },
              {
                '@type': 'ListItem',
                position: 3,
                name: category.name,
                item: `https://vinyanaksurgicals.com/products/${category.slug}`,
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

      {/* Category Hero Banner */}
      <section className="relative isolate overflow-hidden bg-[#0c2642] py-12 sm:py-16 text-white border-b border-[#123B66]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 bg-cover bg-center opacity-10 blur-xs scale-105"
          style={{ backgroundImage: `url('${category.image}')` }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-r from-[#0c2642] via-[#0c2642]/95 to-[#123B66]/85"
        />
        <div className="container-x relative z-10 grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="max-w-2xl">
            <span className="section-eyebrow text-[#159A9C]">
              {category.shortName} System
            </span>
            <h1 className="mt-2 text-page-title text-white">
              {category.name}
            </h1>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#d9e2ec]">
              {category.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-4 text-xs sm:text-sm font-semibold text-[#bcccdc]">
              <span className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-3.5 py-2">
                <ShieldCheck className="h-4 w-4 text-[#159A9C]" />
                Anatomical Profile
              </span>
              <span className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-3.5 py-2">
                <Layers3 className="h-4 w-4 text-[#159A9C]" />
                Multiple Hole Variants
              </span>
              <span className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-3.5 py-2">
                <ArrowDownWideNarrow className="h-4 w-4 text-[#159A9C]" />
                SS 316L &amp; Titanium
              </span>
            </div>

            <div className="mt-8 flex flex-wrap gap-3.5">
              <Link
                to="/request-a-quote"
                className="btn-teal"
              >
                <span>Request Quotation</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={`mailto:${businessConfig.email}?subject=${encodeURIComponent(`Request for ${category.shortName} catalogue`)}`}
                className="btn-secondary !bg-white/10 !text-white !border-white/30 hover:!bg-white hover:!text-[#123B66]"
              >
                <FileText className="h-4 w-4 text-[#159A9C]" />
                <span>Request Catalogue PDF</span>
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-white/20 bg-white/5 p-6 backdrop-blur-xs flex items-center justify-center">
            <img
              src={category.image}
              alt={category.name}
              className="max-h-72 w-auto object-contain drop-shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Search and Products Section */}
      <section className="section-padding bg-white">
        <div className="container-x">
          {/* Controls Bar */}
          <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E0E8EF] pb-6">
            <div>
              <h2 className="text-section-title">
                Products in {category.shortName}
              </h2>
              <p className="mt-1 text-sm text-[#5E6F7D]">
                Showing {visibleProducts.length} of {categoryProducts.length} certified products
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <div className="relative min-w-[220px]">
                <Search className="h-4 w-4 text-[#5E6F7D] absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search products..."
                  className="input-field pl-9 !min-h-[42px] text-sm"
                />
              </div>

              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value as SortOrder)}
                className="input-field !min-h-[42px] text-sm !w-auto cursor-pointer"
              >
                <option value="featured">Sort by: Default</option>
                <option value="name-ascending">Name: A to Z</option>
                <option value="name-descending">Name: Z to A</option>
              </select>
            </div>
          </div>

          {/* Product Grid */}
          {visibleProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {visibleProducts.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
          ) : (
            <div className="rounded-xl border border-dashed border-[#E0E8EF] py-16 text-center bg-[#F4F8FB]">
              <p className="text-base font-semibold text-[#172B3A]">No matching products found.</p>
              <p className="mt-1 text-sm text-[#5E6F7D]">Try a different search term or clear the filter.</p>
              <button
                type="button"
                onClick={() => setQuery('')}
                className="btn-secondary mt-4 !py-2 !px-4 !text-xs"
              >
                Clear Search
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Related Categories */}
      <section className="bg-[#F4F8FB] section-padding border-t border-[#E0E8EF]">
        <div className="container-x">
          <div className="mb-6 sm:mb-8 flex items-center justify-between">
            <div>
              <span className="section-eyebrow">Explore More</span>
              <h2 className="mt-1 text-subsection-title">Related Categories</h2>
            </div>
            <Link
              to="/products"
              className="text-sm font-semibold text-[#123B66] hover:text-[#159A9C] inline-flex items-center gap-1"
            >
              <span>All Categories</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5">
            {relatedCategories.map((item) => {
              const Icon = categoryIcons[item.slug as keyof typeof categoryIcons] ?? Bone;
              return (
                <Link
                  key={item.slug}
                  to={`/products/${item.slug}`}
                  className="card p-3.5 flex flex-col items-center text-center justify-center gap-2 hover:border-[#159A9C] hover:shadow-sm transition-all bg-white"
                >
                  <Icon className="h-5 w-5 text-[#159A9C]" />
                  <span className="text-xs sm:text-sm font-semibold text-[#172B3A] line-clamp-1">
                    {item.shortName}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <BottomCTA
        eyebrow="Institutional Quotations"
        title={`Need bulk supply or specialized sizing in ${category.shortName}?`}
        description="Contact our sales desk with your specific sizing chart and required screw variations."
        primaryButtonText="Request a Quote"
        primaryButtonLink="/request-a-quote"
        showPhoneSecondary={true}
        secondaryButtonText="Call Us Directly"
        backgroundImage={category.image}
      />
    </>
  );
}
