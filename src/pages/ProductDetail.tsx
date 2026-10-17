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
        title={`${product.name} — Specifications & Catalogue Codes | Vinyanak Surgicals`}
        description={`${product.description} Verified catalogue specifications in implant-grade Stainless Steel 316L and Titanium Grade 5.`}
        canonical={`https://vinyanaksurgicals.com/products/${category.slug}/${product.slug}`}
        image={product.image}
        type="product"
        keywords={`${product.name}, ${category.name}, orthopedic implants, catalogue codes, compatible screws, Vinyanak Surgicals, trauma implants Kanpur India`}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Product',
          name: product.name,
          image: product.image.startsWith('http') ? product.image : `https://vinyanaksurgicals.com${product.image}`,
          description: product.description,
          category: category.name,
          brand: {
            '@type': 'Brand',
            name: 'Vinyanak Surgicals'
          }
        }}
      />
      <Breadcrumbs crumbs={[
        { label: 'Products', path: '/products' },
        { label: category.shortName, path: `/products/${category.slug}` },
        { label: product.name },
      ]} />

      {/* Product detail */}
      <section className="bg-white section-padding">
        <div className="container-x">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Image */}
            <div>
              <div className="rounded-lg overflow-hidden border border-navy-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Info */}
            <div>
              <span className="section-eyebrow">{category.shortName}</span>
              <h1 className="mt-2 text-2xl lg:text-3xl font-display font-bold">
                {product.name}
              </h1>
              <p className="mt-4 text-navy-600 leading-relaxed">
                {product.description}
              </p>

              {/* Specs */}
              <div className="mt-6">
                <h2 className="text-sm font-semibold text-navy-700 uppercase tracking-wider mb-3">
                  Specifications
                </h2>
                <div className="rounded-md border border-navy-100 divide-y divide-navy-100">
                  {product.specs.map((spec) => (
                    <div key={spec.label} className="flex items-center justify-between px-4 py-3">
                      <span className="text-sm text-navy-500">{spec.label}</span>
                      <span className="text-sm font-medium text-navy-800">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div className="mt-8 space-y-3">
                <Link to="/request-a-quote" className="btn-primary w-full">
                  Request a Quote
                  <ArrowRight className="h-4 w-4" />
                </Link>
                {businessConfig.whatsappConfigured && (
                  <a
                    href={buildProductWhatsAppLink(product.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp w-full"
                  >
                    Enquire About This Product on WhatsApp
                  </a>
                )}
              </div>

              {/* Trust indicators */}
              <div className="mt-6 space-y-2">
                {[
                  'Implant-grade SS 316L & Titanium Grade 5 options',
                  'Suitable for clinical and institutional orthopedic surgery',
                  'Bulk supply and institutional enquiries welcome',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-navy-500">
                    <Check className="h-4 w-4 text-success-500" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related products */}
      {relatedProducts.length > 0 && (
        <section className="section-padding bg-navy-50">
          <div className="container-x">
            <h2 className="text-xl font-display font-bold mb-6">
              Related Products in {category.shortName}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
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
