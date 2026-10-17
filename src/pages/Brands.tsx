import { Link } from 'react-router-dom';
import { Boxes, Info, ArrowRight } from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import { brands, brandCategories, hasVerifiedBrands } from '@/data/brands';

export default function Brands() {
  return (
    <>
      <SEO
        title="Orthopedic Manufacturers & Sourcing Partnerships | Vinyanak Surgicals"
        description="Information regarding verified manufacturer sourcing and supply partnerships for orthopedic locking plates, external fixators, and fixation instruments."
        canonical="https://vinyanaksurgicals.com/brands"
        keywords="orthopedic manufacturers, medical brands, implant sourcing, surgical instruments supplier Kanpur, Vinyanak Surgicals"
        image="/images/categories/external-fixator-clamps.jpg"
      />
      <Breadcrumbs crumbs={[{ label: 'Brands' }]} />

      <section className="bg-navy-50 py-14">
        <div className="container-x">
          <span className="section-eyebrow">Medical Brands & Manufacturers</span>
          <h1 className="mt-3 text-3xl lg:text-4xl font-display font-bold">
            Brands & Manufacturers
          </h1>
          <p className="mt-4 text-navy-600 max-w-2xl leading-relaxed">
            We source surgical instruments, medical equipment and consumables from a range of manufacturers. This page displays verified brand partnerships as they are confirmed.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-x">
          {hasVerifiedBrands ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {brands.filter((b) => b.verified).map((brand) => (
                <div key={brand.name} className="card p-6 text-center">
                  <div className="flex h-16 items-center justify-center mb-3">
                    <span className="font-display text-lg font-bold text-navy-800">{brand.name}</span>
                  </div>
                  <p className="text-xs text-navy-500">{brand.category}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="max-w-2xl mx-auto text-center">
              <div className="flex h-16 w-16 mx-auto items-center justify-center rounded-full bg-navy-50 mb-5">
                <Info className="h-8 w-8 text-medical-600" />
              </div>
              <h2 className="text-xl font-display font-bold mb-3">
                Verified Brand List Coming Soon
              </h2>
              <p className="text-navy-500 leading-relaxed mb-6">
                We are currently compiling our verified brand partnerships. We do not display manufacturer logos or claim authorised dealership without documentary confirmation. In the meantime, we supply instruments and equipment across the following product categories:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {brandCategories.map((cat) => (
                  <div key={cat} className="flex items-center gap-3 rounded-md border border-navy-100 bg-navy-50/50 px-4 py-3">
                    <Boxes className="h-5 w-5 text-medical-500" />
                    <span className="text-sm font-medium text-navy-700">{cat}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-navy-500 mb-6">
                If you have a specific brand or manufacturer preference, please contact us — we will do our best to source it for you.
              </p>
              <Link to="/contact-us" className="btn-primary">
                Contact Us About Brands
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
