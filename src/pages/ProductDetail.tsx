import { useState } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowRight, Check, Copy, CheckCheck, FileSpreadsheet } from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import ProductCard from '@/components/ProductCard';
import { productCategories } from '@/data/categories';
import { getProductBySlug, getProductsByCategory } from '@/data/products';
import { businessConfig, buildProductWhatsAppLink } from '@/config/business';

export default function ProductDetail() {
  const { category: catSlug, product: prodSlug } = useParams<{ category: string; product: string }>();
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const category = productCategories.find((c) => c.slug === catSlug);
  const product = getProductBySlug(prodSlug ?? '');

  if (!category || !product || product.category !== category.slug) {
    return <Navigate to="/products" replace />;
  }

  const relatedProducts = getProductsByCategory(category.slug)
    .filter((p) => p.slug !== product.slug)
    .slice(0, 4);

  // Extract primary catalogue codes
  const ssCodeSpec = product.specs.find((s) => s.label.toLowerCase().includes('ss316l'));
  const tiCodeSpec = product.specs.find((s) => s.label.toLowerCase().includes('tt') || s.label.toLowerCase().includes('titanium'));
  const primaryCode = ssCodeSpec ? ssCodeSpec.value : (tiCodeSpec ? tiCodeSpec.value : '');

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(text);
    setTimeout(() => setCopiedCode(null), 2500);
  };

  const quoteUrl = `/request-a-quote?product=${encodeURIComponent(product.name)}&code=${encodeURIComponent(primaryCode)}&category=${encodeURIComponent(category.name)}`;

  return (
    <>
      <SEO
        title={`${product.name} — Specifications & Catalogue Codes | Vinayak Surgicals`}
        description={`${product.description} Verified catalogue specifications in implant-grade Stainless Steel 316L and Titanium Grade 5.`}
        canonical={`https://vinyanaksurgicals.com/products/${category.slug}/${product.slug}`}
        image={product.image}
        type="product"
        keywords={`${product.name}, ${category.name}, orthopedic implants, catalogue codes, compatible screws, Vinayak Surgicals, trauma implants Kanpur India`}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Product',
          name: product.name,
          image: product.image.startsWith('http') ? product.image : `https://vinyanaksurgicals.com${product.image}`,
          description: product.description,
          category: category.name,
          sku: primaryCode || product.slug,
          mpn: primaryCode || product.slug,
          material: 'Stainless Steel 316L / Titanium Grade 5',
          brand: {
            '@type': 'Brand',
            name: 'Vinayak Surgicals',
          },
        }}
      />

      <Breadcrumbs
        crumbs={[
          { label: 'Products', path: '/products' },
          { label: category.shortName, path: `/products/${category.slug}` },
          { label: product.name },
        ]}
      />

      {/* Product Detail Section */}
      <section className="bg-white section-padding">
        <div className="container-x">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
            {/* Image Box */}
            <div className="rounded-2xl border border-[#E0E8EF] bg-[#F4F8FB] p-6 sm:p-10 flex items-center justify-center overflow-hidden sticky top-24">
              <img
                src={product.image}
                alt={product.name}
                className="w-full max-h-[420px] object-contain transition-transform duration-300 hover:scale-105 drop-shadow-md"
              />
            </div>

            {/* Product Information */}
            <div>
              <span className="section-eyebrow">
                {category.shortName}
              </span>
              <h1 className="mt-2 text-page-title text-[#172B3A]">
                {product.name}
              </h1>
              <p className="mt-4 text-body-regular text-[#5E6F7D] leading-relaxed">
                {product.description}
              </p>

              {/* Technical Specifications Table */}
              <div className="mt-8">
                <div className="flex items-center justify-between mb-3">
                  <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#123B66]">
                    Technical Specifications &amp; Material Options
                  </h2>
                  <span className="text-xs text-[#5E6F7D]">
                    Verified Catalogue Data
                  </span>
                </div>
                <div className="rounded-xl border border-[#E0E8EF] divide-y divide-[#E0E8EF] overflow-hidden bg-white shadow-xs">
                  {product.specs.map((spec, index) => {
                    const isCodeRow = spec.label.toLowerCase().includes('catalogue code');
                    return (
                      <div
                        key={spec.label}
                        className={`flex flex-col sm:flex-row sm:items-center justify-between px-4 sm:px-5 py-3 text-sm gap-2 ${
                          index % 2 === 0 ? 'bg-white' : 'bg-[#F4F8FB]'
                        }`}
                      >
                        <span className="font-medium text-[#5E6F7D] shrink-0 sm:max-w-[200px]">
                          {spec.label}
                        </span>
                        <div className="flex items-center gap-2 sm:text-right justify-between sm:justify-end flex-1">
                          <span className="font-semibold text-[#172B3A] font-mono text-xs sm:text-sm">
                            {spec.value}
                          </span>
                          {isCodeRow && (
                            <button
                              type="button"
                              onClick={() => copyToClipboard(spec.value)}
                              className="p-1 rounded text-[#5E6F7D] hover:text-[#159A9C] hover:bg-[#E0E8EF]/50 transition-colors shrink-0"
                              title="Copy catalogue code"
                              aria-label={`Copy ${spec.label}`}
                            >
                              {copiedCode === spec.value ? (
                                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-600">
                                  <CheckCheck className="h-3.5 w-3.5" />
                                  Copied
                                </span>
                              ) : (
                                <Copy className="h-3.5 w-3.5" />
                              )}
                            </button>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* CTAs */}
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link
                  to={quoteUrl}
                  className="btn-primary flex-1 shadow-sm text-center justify-center"
                >
                  <FileSpreadsheet className="h-4 w-4" />
                  <span>Request an Institutional Quote</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                {businessConfig.whatsappConfigured ? (
                  <a
                    href={buildProductWhatsAppLink(product.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp flex-1 text-center justify-center"
                  >
                    Enquire on WhatsApp
                  </a>
                ) : (
                  <a
                    href={`tel:${businessConfig.phoneRaw}`}
                    className="btn-secondary flex-1 text-center justify-center"
                  >
                    Call for Availability
                  </a>
                )}
              </div>

              {/* Trust Indicators */}
              <div className="mt-8 space-y-2.5 border-t border-[#E0E8EF] pt-6">
                {[
                  'Manufactured in implant-grade Stainless Steel 316L and Titanium Grade 5',
                  'Standardized screw threading and locking taper design',
                  'Hospital tenders and institutional bulk procurement welcome',
                  'Prompt dispatch with secure padded transit packaging',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#5E6F7D]">
                    <Check className="h-4 w-4 text-[#16a34a] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="section-padding bg-[#F4F8FB] border-t border-[#E0E8EF]">
          <div className="container-x">
            <div className="mb-8 flex items-center justify-between">
              <div>
                <span className="section-eyebrow">Complementary Implants</span>
                <h2 className="mt-1 text-section-title">
                  Related Products in {category.shortName}
                </h2>
              </div>
              <Link
                to={`/products/${category.slug}`}
                className="text-sm font-semibold text-[#123B66] hover:text-[#159A9C] inline-flex items-center gap-1"
              >
                <span>View All {category.shortName}</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {relatedProducts.map((rp) => (
                <ProductCard key={rp.slug} product={rp} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
