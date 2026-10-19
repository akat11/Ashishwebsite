import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import ProductCard from '@/components/ProductCard';
import { productCategories } from '@/data/categories';
import { getProductBySlug, getProductsByCategory } from '@/data/products';
import { businessConfig, buildProductWhatsAppLink } from '@/config/business';

export default function ProductDetail() {
  const { category: catSlug, product: prodSlug } = useParams<{ category: string; product: string }>();
  const category = productCategories.find((c) => c.slug === catSlug);
  const product = getProductBySlug(prodSlug ?? '');

  if (!category || !product || product.category !== category.slug) {
    return <Navigate to="/products" replace />;
  }

  const relatedProducts = getProductsByCategory(category.slug)
    .filter((p) => p.slug !== product.slug)
    .slice(0, 4);

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
            <div className="rounded-2xl border border-[#E0E8EF] bg-[#F4F8FB] p-6 sm:p-10 flex items-center justify-center overflow-hidden">
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
                <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#123B66] mb-3">
                  Technical Specifications &amp; Material Options
                </h2>
                <div className="rounded-xl border border-[#E0E8EF] divide-y divide-[#E0E8EF] overflow-hidden bg-white">
                  {product.specs.map((spec, index) => (
                    <div
                      key={spec.label}
                      className={`flex items-center justify-between px-4 sm:px-5 py-3 text-sm ${
                        index % 2 === 0 ? 'bg-white' : 'bg-[#F4F8FB]'
                      }`}
                    >
                      <span className="font-medium text-[#5E6F7D]">{spec.label}</span>
                      <span className="font-semibold text-[#172B3A] text-right">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link
                  to="/request-a-quote"
                  className="btn-primary flex-1 shadow-sm"
                >
                  <span>Request an Institutional Quote</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                {businessConfig.whatsappConfigured ? (
                  <a
                    href={buildProductWhatsAppLink(product.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp flex-1"
                  >
                    Enquire on WhatsApp
                  </a>
                ) : (
                  <a
                    href={`tel:${businessConfig.phoneRaw}`}
                    className="btn-secondary flex-1"
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
