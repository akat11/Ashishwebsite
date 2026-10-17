import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import ProductCard from '@/components/ProductCard';
import { productCategories } from '@/data/categories';
import { getProductsByCategory } from '@/data/products';
import { businessConfig, buildProductWhatsAppLink } from '@/config/business';

export default function ProductCategoryPage() {
  const { category: slug } = useParams<{ category: string }>();
  const category = productCategories.find((c) => c.slug === slug);

  if (!category) return <Navigate to="/products" replace />;

  const categoryProducts = getProductsByCategory(category.slug);

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
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://vinyanaksurgicals.com/'
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Products',
                item: 'https://vinyanaksurgicals.com/products'
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: category.name,
                item: `https://vinyanaksurgicals.com/products/${category.slug}`
              }
            ]
          }
        }}
      />
      <Breadcrumbs crumbs={[{ label: 'Products', path: '/products' }, { label: category.shortName }]} />

      {/* Category hero */}
      <section className="bg-navy-900 text-white py-14">
        <div className="container-x">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl lg:text-4xl font-display font-bold text-white">
                {category.name}
              </h1>
              <p className="mt-4 text-navy-200 leading-relaxed max-w-xl">
                {category.description}
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Link to="/request-a-quote" className="btn-primary">
                  Request a Quote
                </Link>
                {businessConfig.whatsappConfigured && (
                  <a
                    href={buildProductWhatsAppLink(category.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp"
                  >
                    Enquire on WhatsApp
                  </a>
                )}
              </div>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products grid */}
      <section className="section-padding bg-white">
        <div className="container-x">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-display font-bold">
              Products in {category.shortName}
            </h2>
            <span className="text-sm text-navy-500">{categoryProducts.length} products</span>
          </div>

          {categoryProducts.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
              {categoryProducts.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-navy-500 mb-4">Detailed product listings for this category are being updated.</p>
              <Link to="/request-a-quote" className="btn-primary">
                Enquire About Products
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Related categories */}
      <section className="section-padding bg-navy-50">
        <div className="container-x">
          <h2 className="text-xl font-display font-bold mb-6">Related Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {productCategories
              .filter((c) => c.slug !== category.slug)
              .slice(0, 6)
              .map((cat) => (
                <Link
                  key={cat.slug}
                  to={`/products/${cat.slug}`}
                  className="card card-hover p-4 text-center group"
                >
                  <h3 className="text-xs font-medium text-navy-700 group-hover:text-medical-700 transition-colors">
                    {cat.shortName}
                  </h3>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-12 border-t border-navy-100">
        <div className="container-x text-center">
          <h2 className="text-xl font-display font-bold">
            Need bulk supply or specific instruments?
          </h2>
          <p className="mt-2 text-sm text-navy-500">
            Contact us for institutional quotations and product sourcing.
          </p>
          <div className="mt-5 flex flex-col sm:flex-row justify-center gap-3">
            <Link to="/request-a-quote" className="btn-primary">
              Request a Quote
            </Link>
            <a href={`tel:${businessConfig.phoneRaw}`} className="btn-secondary">
              <Phone className="h-4 w-4" />
              Call Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
