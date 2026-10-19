import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import PageHero from '@/components/PageHero';
import BottomCTA from '@/components/BottomCTA';
import CategoryCard from '@/components/CategoryCard';
import ProductCard from '@/components/ProductCard';
import { productCategories } from '@/data/categories';
import { products } from '@/data/products';

export default function Products() {
  return (
    <>
      <SEO
        title="Orthopedic Implants & Fixation Products Catalogue | Vinayak Surgicals"
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
              item: 'https://vinyanaksurgicals.com/',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Products',
              item: 'https://vinyanaksurgicals.com/products',
            },
          ],
        }}
      />

      <Breadcrumbs crumbs={[{ label: 'Products' }]} />

      <PageHero
        eyebrow="Product Catalogue"
        title="Orthopedic Implants & Fixation Systems"
        subtitle="Our catalogue spans ten comprehensive product categories covering anatomically contoured locking plates, modular external fixator systems, Ilizarov circular frames, locking screws, and specialized surgical instrumentation."
        backgroundImage="/images/hero-orthopedic-surgical.jpg"
      />

      {/* Categories Grid */}
      <section className="section-padding bg-white">
        <div className="container-x">
          <div className="mb-8 sm:mb-10">
            <span className="section-eyebrow">Specialized Categories</span>
            <h2 className="mt-2 text-section-title">Browse by Anatomical Category</h2>
            <p className="mt-2 text-body-regular">
              Explore specialized implant solutions designed for specific anatomical regions and fracture types.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            {productCategories.map((cat) => (
              <CategoryCard key={cat.slug} category={cat} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Grid */}
      <section className="section-padding bg-[#F4F8FB] border-t border-[#E0E8EF]">
        <div className="container-x">
          <div className="mb-8 sm:mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="section-eyebrow">Trauma Fixation Implants</span>
              <h2 className="mt-2 text-section-title">Featured Implants &amp; Systems</h2>
              <p className="mt-2 text-body-regular max-w-2xl">
                Manufactured in implant-grade Stainless Steel 316L and Titanium Grade 5 for high biomechanical stability and biocompatibility.
              </p>
            </div>
            <Link
              to="/request-a-quote"
              className="btn-primary shrink-0"
            >
              <span>Request Full Price List</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
            {products.slice(0, 12).map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      <BottomCTA
        eyebrow="Custom Surgical Sourcing"
        title="Need a product or custom plate size not listed here?"
        description="We offer comprehensive product sourcing assistance for hospital tenders and specialized procedures."
        primaryButtonText="Request a Quote"
        primaryButtonLink="/request-a-quote"
      />
    </>
  );
}
