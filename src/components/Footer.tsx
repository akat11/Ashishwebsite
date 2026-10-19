import { Link } from 'react-router-dom';
import {
  Clock,
  Mail,
  MapPin,
  Phone,
  Stethoscope,
  ArrowRight,
} from 'lucide-react';
import { businessConfig } from '@/config/business';
import { productCategories } from '@/data/categories';

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about-us' },
  { label: 'Products Catalogue', to: '/products' },
  { label: 'Clinical Departments', to: '/departments' },
  { label: 'Medical Brands', to: '/brands' },
  { label: 'Supply Services', to: '/services' },
  { label: 'Request a Quote', to: '/request-a-quote' },
  { label: 'Contact Us', to: '/contact-us' },
];

const legalLinks = [
  { label: 'Privacy Policy', to: '/privacy-policy' },
  { label: 'Terms & Conditions', to: '/terms-and-conditions' },
  { label: 'Shipping Policy', to: '/shipping-policy' },
  { label: 'Returns & Claims', to: '/returns-and-claims' },
  { label: 'Sitemap', to: '/sitemap' },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const weekdayHours = businessConfig.businessHours.find(({ day }) => day === 'Monday – Friday');
  const saturdayHours = businessConfig.businessHours.find(({ day }) => day === 'Saturday');
  const address = [
    businessConfig.address.line1,
    businessConfig.address.city,
    businessConfig.address.state,
    businessConfig.address.country,
  ]
    .filter(Boolean)
    .join(', ');

  return (
    <footer className="bg-[#0c2642] text-[#d9e2ec] border-t border-[#123B66]">
      {/* Main footer body */}
      <div className="container-x py-12 lg:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Brand Info Column */}
          <div className="space-y-4">
            <Link to="/" className="inline-flex items-center gap-3 group" aria-label="Vinayak Surgicals Home">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#123B66] shadow-sm">
                <Stethoscope className="h-6 w-6 text-[#159A9C]" />
              </div>
              <div>
                <div className="font-display text-2xl font-bold text-white leading-none tracking-tight">
                  Vinayak
                </div>
                <div className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#159A9C] leading-none mt-1">
                  SURGICALS
                </div>
              </div>
            </Link>

            <p className="text-sm leading-relaxed text-[#bcccdc]">
              Your trusted partner in precision orthopedic implants, locking plate systems, and external fixators, supplying certified products to healthcare institutions across India.
            </p>

            <div className="pt-1">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#123B66] px-3 py-1 text-xs font-semibold text-[#159A9C]">
                Kanpur, Uttar Pradesh &bull; Pan-India Supply
              </span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="font-display text-base font-bold text-white tracking-wide mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map(({ label, to }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-[#bcccdc] hover:text-white hover:translate-x-0.5 transition-all inline-flex items-center gap-1.5"
                  >
                    <ArrowRight className="h-3 w-3 text-[#159A9C]" />
                    <span>{label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Featured Products Column */}
          <div>
            <h3 className="font-display text-base font-bold text-white tracking-wide mb-4">
              Product Categories
            </h3>
            <ul className="space-y-2.5 text-sm">
              {productCategories.slice(0, 7).map((category) => (
                <li key={category.slug}>
                  <Link
                    to={`/products/${category.slug}`}
                    className="text-[#bcccdc] hover:text-white hover:translate-x-0.5 transition-all inline-flex items-center gap-1.5"
                  >
                    <ArrowRight className="h-3 w-3 text-[#159A9C]" />
                    <span>{category.shortName}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/products"
                  className="font-semibold text-[#159A9C] hover:text-white transition-colors inline-flex items-center gap-1 mt-1"
                >
                  View All Categories &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div>
            <h3 className="font-display text-base font-bold text-white tracking-wide mb-4">
              Contact Information
            </h3>
            <ul className="space-y-3 text-sm text-[#bcccdc]">
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-[#159A9C]" />
                <span className="leading-snug">{address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-[#159A9C]" />
                <a
                  href={`tel:${businessConfig.phoneRaw}`}
                  className="hover:text-white transition-colors"
                >
                  {businessConfig.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-1 h-4 w-4 shrink-0 text-[#159A9C]" />
                <a
                  href={`mailto:${businessConfig.email}`}
                  className="break-all hover:text-white transition-colors"
                >
                  {businessConfig.email}
                </a>
              </li>
              {(weekdayHours || saturdayHours) && (
                <li className="flex items-start gap-3 pt-1">
                  <Clock className="mt-1 h-4 w-4 shrink-0 text-[#159A9C]" />
                  <div className="leading-snug text-xs text-[#9fb3c8]">
                    {weekdayHours && <div>Mon–Fri: {weekdayHours.hours}</div>}
                    {saturdayHours && <div className="mt-0.5">Sat: {saturdayHours.hours}</div>}
                  </div>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>

      {/* Sub-footer / Legal Strip */}
      <div className="border-t border-[#123B66]/80 bg-[#081b30]">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-5 text-xs text-[#9fb3c8] sm:flex-row">
          <p>
            &copy; {year} {businessConfig.legalName}. All rights reserved. Medical &amp; Surgical Equipment Supplier.
          </p>
          <nav aria-label="Legal links" className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {legalLinks.map(({ label, to }, index) => (
              <span key={to} className="inline-flex items-center gap-3 sm:gap-4">
                <Link to={to} className="hover:text-white transition-colors">
                  {label}
                </Link>
                {index < legalLinks.length - 1 && <span className="text-white/20" aria-hidden="true">&bull;</span>}
              </span>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
