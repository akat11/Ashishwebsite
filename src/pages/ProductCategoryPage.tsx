import { useMemo, useState } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import {
  ArrowDownWideNarrow,
  ArrowRight,
  Bone,
  Baby,
  ChevronRight,
  FileText,
  Footprints,
  Home,
  Layers3,
  Phone,
  Search,
  ShieldCheck,
  SlidersHorizontal,
  Stethoscope,
  Wrench,
} from 'lucide-react';
import SEO from '@/components/SEO';
import { productCategories } from '@/data/categories';
import { getProductsByCategory, type Product } from '@/data/products';
import { businessConfig } from '@/config/business';

type SortOrder = 'featured' | 'name-ascending' | 'name-descending';

const categoryIcons = {
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

function ProductTile({ product, categoryName }: { product: Product; categoryName: string }) {
  return (
    <Link
      to={`/products/${product.category}/${product.slug}`}
      className="group overflow-hidden rounded-lg border border-slate-200 bg-white shadow-[0_2px_8px_rgba(20,45,75,0.08)] transition-all hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md"
    >
      <div className="aspect-[1.58] overflow-hidden bg-gradient-to-br from-[#f0f1f3] via-[#fafafa] to-[#e8eaed]">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-contain p-2.5 transition-transform duration-300 group-hover:scale-[1.04]"
        />
      </div>
      <div className="min-h-[112px] p-3">
        <span className="text-[8px] font-bold uppercase tracking-[0.12em] text-blue-600">
          {categoryName}
        </span>
        <h3 className="mt-1 line-clamp-2 text-[11px] font-bold leading-[1.35] text-[#102746] group-hover:text-blue-700">
          {product.name}
        </h3>
        <p className="mt-1 line-clamp-2 text-[9px] leading-[1.4] text-slate-500">
          {product.description}
        </p>
        <span className="mt-2 inline-flex items-center gap-1 text-[9px] font-bold text-blue-600">
          View Details
          <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}

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
        title={`${category.name} — Orthopedic Locking Implants & Fixation | Vinyanak Surgicals`}
        description={category.description}
        canonical={`https://vinyanaksurgicals.com/products/${category.slug}`}
        image={category.image}
        keywords={`${category.name}, ${category.shortName}, orthopedic locking plates, trauma fixation, orthopedic implants India, Vinyanak Surgicals Kanpur`}
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

      <nav aria-label="Breadcrumb" className="border-y border-slate-100 bg-white">
        <div className="container-x py-1.5">
          <ol className="flex flex-wrap items-center gap-1.5 text-[9px] text-slate-500">
            <li>
              <Link to="/" className="inline-flex items-center gap-1 transition-colors hover:text-blue-600">
                <Home className="h-3 w-3" />
                Home
              </Link>
            </li>
            <li aria-hidden="true"><ChevronRight className="h-3 w-3 text-slate-300" /></li>
            <li>
              <Link to="/products" className="transition-colors hover:text-blue-600">Products</Link>
            </li>
            <li aria-hidden="true"><ChevronRight className="h-3 w-3 text-slate-300" /></li>
            <li aria-current="page" className="text-slate-600">{category.name}</li>
          </ol>
        </div>
      </nav>

      <section className="relative isolate overflow-hidden bg-[#dcecff] text-white">
        <div className="absolute inset-0 bg-[linear-gradient(112deg,#062947_0%,#0a416e_54%,#e7f2ff_54%,#dbeaff_100%)]" />
        <div className="absolute inset-y-0 left-0 hidden w-[57%] bg-[linear-gradient(110deg,rgba(4,35,63,0.55),rgba(5,49,84,0.18))] md:block" />
        <div className="absolute inset-y-0 left-[49%] hidden w-[11%] skew-x-[-28deg] bg-white/10 md:block" />
        <div className="absolute inset-y-0 right-0 w-[53%] bg-[linear-gradient(125deg,rgba(255,255,255,0.02),rgba(255,255,255,0.32))]" />
        <img
          src={category.image}
          alt=""
          aria-hidden="true"
          className="absolute inset-y-0 right-0 h-full w-[65%] object-contain object-center p-1 mix-blend-multiply sm:w-[59%] sm:p-3 lg:w-[55%] lg:p-4"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#062947]/95 via-[#0a416e]/90 to-transparent md:hidden" />

        <div className="container-x relative flex min-h-[300px] items-center py-5 sm:min-h-[275px] sm:py-6 lg:min-h-[245px]">
          <div className="max-w-[470px]">
            <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-sky-300">
              {category.shortName} Systems
            </span>
            <h1 className="mt-1.5 max-w-[420px] font-display text-3xl font-extrabold leading-[1.05] text-white sm:text-4xl">
              {category.name}
            </h1>
            <p className="mt-2 max-w-[420px] text-[11px] leading-relaxed text-blue-100 sm:text-xs">
              {category.description}
            </p>

            <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-[9px] font-medium text-blue-50">
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="h-5 w-5 text-sky-400" />
                Anatomical<br />Design
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Layers3 className="h-5 w-5 text-sky-400" />
                Multiple<br />Variations
              </span>
              <span className="inline-flex items-center gap-1.5">
                <ArrowDownWideNarrow className="h-5 w-5 text-sky-400" />
                Reliable<br />Fixation
              </span>
            </div>

            <div className="mt-3 flex flex-wrap gap-2">
              <Link
                to="/request-a-quote"
                className="inline-flex items-center gap-1.5 rounded-md bg-blue-600 px-4 py-2 text-[10px] font-bold text-white shadow transition-colors hover:bg-blue-500"
              >
                Request a Quote
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <a
                href={`mailto:${businessConfig.email}?subject=${encodeURIComponent(`Request for ${category.shortName} catalogue`)}`}
                className="inline-flex items-center gap-1.5 rounded-md border border-white/60 bg-[#082c4e]/50 px-4 py-2 text-[10px] font-semibold text-white transition-colors hover:bg-white/10"
              >
                <FileText className="h-3.5 w-3.5" />
                Request Catalogue
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-6 sm:py-7">
        <div className="container-x">
          <div className="mb-4 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-blue-600">
                Our Products
              </span>
              <h2 className="mt-1 font-display text-xl font-extrabold text-[#102746] sm:text-2xl">
                Products in {category.shortName}
              </h2>
              <p className="mt-1 max-w-xl text-[10px] leading-relaxed text-slate-600 sm:text-[11px]">
                Explore our range of {category.shortName.toLowerCase()} designed for reliable fixation
                and optimal clinical outcomes.
              </p>
            </div>
            <div className="flex gap-2">
              <label className="flex h-9 min-w-0 flex-1 items-center gap-2 rounded-md border border-slate-200 px-2.5 sm:w-48 sm:flex-none">
                <Search className="h-3.5 w-3.5 shrink-0 text-slate-500" />
                <span className="sr-only">Search products</span>
                <input
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search products..."
                  className="w-full min-w-0 bg-transparent text-[10px] text-navy-800 outline-none placeholder:text-slate-400"
                />
              </label>
              <label className="flex h-9 items-center gap-1.5 rounded-md border border-slate-200 px-2.5">
                <span className="sr-only">Sort products</span>
                <select
                  value={sortOrder}
                  onChange={(event) => setSortOrder(event.target.value as SortOrder)}
                  className="max-w-[100px] bg-transparent text-[10px] text-navy-700 outline-none"
                >
                  <option value="featured">Sort by</option>
                  <option value="name-ascending">Name: A to Z</option>
                  <option value="name-descending">Name: Z to A</option>
                </select>
              </label>
            </div>
          </div>

          {visibleProducts.length > 0 ? (
            <div className="grid grid-cols-2 gap-2.5 sm:gap-3 md:grid-cols-3 lg:grid-cols-4">
              {visibleProducts.map((product) => (
                <ProductTile
                  key={product.slug}
                  product={product}
                  categoryName={category.shortName}
                />
              ))}
            </div>
          ) : (
            <div className="rounded-lg border border-dashed border-slate-300 py-12 text-center">
              <p className="text-sm font-semibold text-navy-700">No matching products found.</p>
              <p className="mt-1 text-xs text-slate-500">Try a different search term.</p>
            </div>
          )}
        </div>
      </section>

      <section className="bg-[#f0f6fd] py-5 sm:py-6">
        <div className="container-x">
          <div className="flex items-end justify-between gap-3">
            <div>
              <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-blue-600">
                Explore More
              </span>
              <h2 className="mt-1 font-display text-base font-extrabold text-[#102746] sm:text-lg">
                Related Categories
              </h2>
            </div>
            <Link
              to="/products"
              className="mb-1 inline-flex shrink-0 items-center gap-1 text-[9px] font-bold text-blue-600 hover:text-blue-800"
            >
              View All Categories
              <ArrowRight className="h-3 w-3" />
            </Link>
          </div>

          <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-6">
            {relatedCategories.map((item) => {
              const Icon = categoryIcons[item.slug as keyof typeof categoryIcons] ?? Bone;
              return (
                <Link
                  key={item.slug}
                  to={`/products/${item.slug}`}
                  className="flex min-h-10 items-center gap-2 rounded-md border border-slate-100 bg-white px-2.5 py-2 shadow-sm transition-colors hover:border-blue-200 hover:text-blue-700"
                >
                  <Icon className="h-4 w-4 shrink-0 text-blue-500" />
                  <span className="text-[9px] font-semibold leading-tight text-navy-700">
                    {item.shortName}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-gradient-to-r from-[#052744] via-[#084c88] to-[#0758bc] py-5 text-white">
        <img
          src={category.image}
          alt=""
          aria-hidden="true"
          className="absolute inset-y-0 right-0 h-full w-2/3 object-cover object-center opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#052744] via-[#084c88]/90 to-blue-700/30" />
        <div className="container-x relative flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-sky-300">
              Get in Touch
            </span>
            <h2 className="mt-1 font-display text-lg font-extrabold text-white sm:text-xl">
              Need bulk supply or specific instruments?
            </h2>
            <p className="mt-1 text-[10px] text-blue-100 sm:text-xs">
              Contact us for customized quotations and product recommendations.
            </p>
          </div>
          <div className="flex shrink-0 gap-2">
            <Link
              to="/request-a-quote"
              className="inline-flex items-center gap-1.5 rounded-md bg-blue-600 px-3.5 py-2.5 text-[10px] font-bold text-white transition-colors hover:bg-blue-500"
            >
              Request a Quote
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <a
              href={`tel:${businessConfig.phoneRaw}`}
              className="inline-flex items-center gap-1.5 rounded-md border border-white/50 px-3.5 py-2.5 text-[10px] font-bold text-white transition-colors hover:bg-white/10"
            >
              <Phone className="h-3.5 w-3.5" />
              Call Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
