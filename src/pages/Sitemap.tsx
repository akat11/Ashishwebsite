import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import { productCategories } from '@/data/categories';

export default function Sitemap() {
  const mainPages = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about-us' },
    { label: 'Products', path: '/products' },
    { label: 'Departments', path: '/departments' },
    { label: 'Brands', path: '/brands' },
    { label: 'Services', path: '/services' },
    { label: 'Contact Us', path: '/contact-us' },
    { label: 'Request a Quote', path: '/request-a-quote' },
  ];

  const legalPages = [
    { label: 'Privacy Policy', path: '/privacy-policy' },
    { label: 'Terms & Conditions', path: '/terms-and-conditions' },
    { label: 'Shipping Policy', path: '/shipping-policy' },
    { label: 'Returns & Claims', path: '/returns-and-claims' },
  ];

  return (
    <>
      <SEO
        title="Sitemap | Vinyanak Surgicals"
        description="Complete sitemap of all pages on the Vinyanak Surgicals website."
        canonical="https://vinyanaksurgicals.com/sitemap"
      />
      <Breadcrumbs crumbs={[{ label: 'Sitemap' }]} />

      <section className="bg-navy-50 py-14">
        <div className="container-x">
          <h1 className="text-3xl lg:text-4xl font-display font-bold">Sitemap</h1>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-x">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h2 className="text-base font-display font-bold mb-4">Main Pages</h2>
              <ul className="space-y-2">
                {mainPages.map((page) => (
                  <li key={page.path}>
                    <Link to={page.path} className="text-sm text-navy-500 hover:text-medical-600 transition-colors">
                      {page.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-base font-display font-bold mb-4">Product Categories</h2>
              <ul className="space-y-2">
                {productCategories.map((cat) => (
                  <li key={cat.slug}>
                    <Link to={`/products/${cat.slug}`} className="text-sm text-navy-500 hover:text-medical-600 transition-colors">
                      {cat.shortName}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-base font-display font-bold mb-4">Legal Pages</h2>
              <ul className="space-y-2">
                {legalPages.map((page) => (
                  <li key={page.path}>
                    <Link to={page.path} className="text-sm text-navy-500 hover:text-medical-600 transition-colors">
                      {page.label}
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
