import { Link } from 'react-router-dom';
import { ArrowRight, Layers, FileText, Globe } from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import PageHero from '@/components/PageHero';
import { productCategories } from '@/data/categories';

export default function Sitemap() {
  const mainPages = [
    { label: 'Home Page', path: '/' },
    { label: 'About Vinayak Surgicals', path: '/about-us' },
    { label: 'Products Catalogue', path: '/products' },
    { label: 'Clinical Departments', path: '/departments' },
    { label: 'Medical Brands & Manufacturers', path: '/brands' },
    { label: 'Supply & Sourcing Services', path: '/services' },
    { label: 'Request an Institutional Quote', path: '/request-a-quote' },
    { label: 'Contact Us & Facility Info', path: '/contact-us' },
  ];

  const legalPages = [
    { label: 'Privacy Policy', path: '/privacy-policy' },
    { label: 'Terms & Conditions', path: '/terms-and-conditions' },
    { label: 'Shipping & Delivery Policy', path: '/shipping-policy' },
    { label: 'Returns & Claims Policy', path: '/returns-and-claims' },
  ];

  return (
    <>
      <SEO
        title="Complete Sitemap | Vinayak Surgicals"
        description="Complete sitemap of all routes, product categories, and business pages on the Vinayak Surgicals website."
        canonical="https://vinayaksurgicals.vercel.app/sitemap"
      />
      <Breadcrumbs crumbs={[{ label: 'Sitemap' }]} />

      <PageHero
        eyebrow="Site Architecture"
        title="Website Sitemap"
        subtitle="Quick directory linking to all commercial, clinical, and informational routes across the Vinayak Surgicals platform."
        backgroundImage="/images/hero-orthopedic-surgical.jpg"
      />

      <section className="section-padding bg-white">
        <div className="container-x">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
            {/* Core pages */}
            <div className="card p-6 sm:p-8 bg-white border border-[#E0E8EF]">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#E0E8EF]">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F4F8FB] text-[#123B66] border border-[#E0E8EF]">
                  <Globe className="h-5 w-5 text-[#159A9C]" />
                </div>
                <div>
                  <h2 className="font-display text-lg font-bold text-[#172B3A]">
                    Commercial Pages
                  </h2>
                  <p className="text-xs text-[#5E6F7D]">Core institutional portals</p>
                </div>
              </div>
              <ul className="space-y-3">
                {mainPages.map((page) => (
                  <li key={page.path}>
                    <Link
                      to={page.path}
                      className="inline-flex items-center gap-2 text-sm text-[#172B3A] hover:text-[#123B66] font-medium transition-colors"
                    >
                      <ArrowRight className="h-3.5 w-3.5 text-[#159A9C]" />
                      <span>{page.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Product categories */}
            <div className="card p-6 sm:p-8 bg-white border border-[#E0E8EF]">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#E0E8EF]">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F4F8FB] text-[#123B66] border border-[#E0E8EF]">
                  <Layers className="h-5 w-5 text-[#159A9C]" />
                </div>
                <div>
                  <h2 className="font-display text-lg font-bold text-[#172B3A]">
                    Product Categories
                  </h2>
                  <p className="text-xs text-[#5E6F7D]">Specialized clinical lines</p>
                </div>
              </div>
              <ul className="space-y-3">
                {productCategories.map((cat) => (
                  <li key={cat.slug}>
                    <Link
                      to={`/products/${cat.slug}`}
                      className="inline-flex items-center gap-2 text-sm text-[#172B3A] hover:text-[#123B66] font-medium transition-colors"
                    >
                      <ArrowRight className="h-3.5 w-3.5 text-[#159A9C]" />
                      <span>{cat.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal and policy */}
            <div className="card p-6 sm:p-8 bg-white border border-[#E0E8EF]">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#E0E8EF]">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F4F8FB] text-[#123B66] border border-[#E0E8EF]">
                  <FileText className="h-5 w-5 text-[#159A9C]" />
                </div>
                <div>
                  <h2 className="font-display text-lg font-bold text-[#172B3A]">
                    Legal &amp; Compliance
                  </h2>
                  <p className="text-xs text-[#5E6F7D]">Regulatory documentation</p>
                </div>
              </div>
              <ul className="space-y-3">
                {legalPages.map((page) => (
                  <li key={page.path}>
                    <Link
                      to={page.path}
                      className="inline-flex items-center gap-2 text-sm text-[#172B3A] hover:text-[#123B66] font-medium transition-colors"
                    >
                      <ArrowRight className="h-3.5 w-3.5 text-[#159A9C]" />
                      <span>{page.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
