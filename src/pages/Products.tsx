import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import CategoryCard from '@/components/CategoryCard';
import { productCategories } from '@/data/categories';
import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';

export default function Products() {
  return (
    <>
      <SEO
        title="Orthopedic Implants & Fixation Products Catalogue | Vinyanak Surgicals"
        description="Browse our complete range of precision orthopedic locking plate systems, external fixator assemblies, Ilizarov rings, and locking screws across ten specialized categories."
        canonical="https://vinyanaksurgicals.com/products"
        keywords="orthopedic implants catalogue, locking plate systems, external fixators, ilizarov apparatus, distal radius plates, proximal tibia plates, femur locking plates, pediatric hip plates, cancellous screws, cortical locking screws, surgical implants supplier India"
        image="/images/categories/distal-radius-locking-plates.jpg"
        jsonLd={{
          '@context': 'https://schema.org',
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
            }
          ]
        }}
      />
      <Breadcrumbs crumbs={[{ label: 'Products' }]} />

      <section className="bg-navy-50 py-14">
        <div className="container-x">
          <span className="section-eyebrow">Product Catalogue</span>
          <h1 className="mt-3 text-3xl lg:text-4xl font-display font-bold">
            Orthopedic Implants & Fixation Systems Catalogue
          </h1>
          <p className="mt-4 text-navy-600 max-w-2xl leading-relaxed">
            Our catalogue spans ten comprehensive product categories covering anatomically contoured locking plates, modular external fixator systems, locking screws, and specialized instrumentation. Explore each category to find solutions suited to your clinical requirements.
          </p>
        </div>
      </section>

      {/* Categories grid */}
      <section className="section-padding bg-white">
        <div className="container-x">
          <h2 className="text-xl font-display font-bold mb-6">Browse by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {productCategories.map((cat) => (
              <CategoryCard key={cat.slug} category={cat} />
            ))}
          </div>
        </div>
      </section>

      {/* All products preview */}
      <section className="section-padding bg-navy-50">
        <div className="container-x">
          <h2 className="text-xl font-display font-bold mb-6">Featured Products</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
            {products.slice(0, 12).map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-medical-700 py-12">
        <div className="container-x text-center">
          <h2 className="text-xl font-display font-bold text-white">
            Need a product not listed here?
          </h2>
          <p className="mt-2 text-medical-100">We offer product sourcing assistance for specific requirements.</p>
          <Link to="/request-a-quote" className="btn-primary bg-white text-medical-700 hover:bg-medical-50 mt-5">
            Request a Quote
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
