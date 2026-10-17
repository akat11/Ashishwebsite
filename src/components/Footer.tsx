import { Link } from 'react-router-dom';
import {
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Youtube,
} from 'lucide-react';
import { businessConfig } from '@/config/business';
import { productCategories } from '@/data/categories';

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about-us' },
  { label: 'Products', to: '/products' },
  { label: 'Departments', to: '/departments' },
  { label: 'Services', to: '/services' },
  { label: 'Resources', to: '/resources' },
  { label: 'Contact', to: '/contact-us' },
];

const socialLinks = [
  { label: 'LinkedIn', href: businessConfig.social.linkedin, icon: Linkedin },
  { label: 'Facebook', href: businessConfig.social.facebook, icon: Facebook },
  { label: 'Instagram', href: businessConfig.social.instagram, icon: Instagram },
  { label: 'Twitter', href: businessConfig.social.twitter, icon: Twitter },
].filter((social) => social.href);

const placeholderSocials = [
  { label: 'LinkedIn', icon: Linkedin },
  { label: 'Facebook', icon: Facebook },
  { label: 'Instagram', icon: Instagram },
  { label: 'YouTube', icon: Youtube },
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
    <footer className="bg-[#06182c] text-slate-300">
      <div className="container-x py-5">
        <div className="grid grid-cols-2 gap-x-5 gap-y-6 sm:grid-cols-4 sm:gap-x-0">
          <div className="sm:pr-5">
            <Link to="/" className="mb-3 flex w-fit items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center font-display text-[30px] font-black italic leading-none text-white">
                V
              </span>
              <span>
                <span className="block font-display text-base font-bold leading-none text-white">
                  Vinyanak
                </span>
                <span className="mt-1 block text-[8px] font-bold uppercase leading-none tracking-[0.2em] text-slate-300">
                  Surgicals
                </span>
              </span>
            </Link>
            <p className="max-w-[240px] text-[10px] leading-[1.55] text-slate-300">
              Your trusted partner in surgical and medical instruments, supplying high-quality,
              certified products to healthcare providers across India.
            </p>
            {socialLinks.length > 0 ? (
              <div className="mt-3 flex items-center gap-2.5">
                {socialLinks.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-300 transition hover:text-white"
                  >
                    <Icon className="h-3.5 w-3.5" />
                  </a>
                ))}
              </div>
            ) : (
              <div aria-hidden="true" className="mt-3 flex items-center gap-2.5">
                {placeholderSocials.map(({ label, icon: Icon }) => (
                  <span key={label} className="text-slate-300">
                    <Icon className="h-3.5 w-3.5" />
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="sm:border-l sm:border-slate-700 sm:px-4">
            <h2 className="mb-2 text-[11px] font-semibold text-white">Quick Links</h2>
            <ul className="space-y-1 text-[10px] leading-[1.35]">
              {quickLinks.map(({ label, to }) => (
                <li key={to}>
                  <Link to={to} className="transition hover:text-white">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="sm:border-l sm:border-slate-700 sm:px-4">
            <h2 className="mb-2 text-[11px] font-semibold text-white">Our Products</h2>
            <ul className="space-y-1 text-[10px] leading-[1.35]">
              {productCategories.slice(0, 8).map((category) => (
                <li key={category.slug}>
                  <Link
                    to={`/products/${category.slug}`}
                    className="transition hover:text-white"
                  >
                    {category.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="sm:border-l sm:border-slate-700 sm:pl-4">
            <h2 className="mb-2 text-[11px] font-semibold text-white">Contact Us</h2>
            <ul className="space-y-2 text-[10px] leading-[1.4]">
              <li className="flex items-start gap-2">
                <MapPin className="mt-px h-3 w-3 shrink-0 text-slate-100" />
                <span>{address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-3 w-3 shrink-0 text-slate-100" />
                <a href={`tel:${businessConfig.phoneRaw}`} className="transition hover:text-white">
                  {businessConfig.phone}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="mt-px h-3 w-3 shrink-0 text-slate-100" />
                <a
                  href={`mailto:${businessConfig.email}`}
                  className="break-all transition hover:text-white"
                >
                  {businessConfig.email}
                </a>
              </li>
              {(weekdayHours || saturdayHours) && (
                <li className="flex items-start gap-2">
                  <Clock className="mt-px h-3 w-3 shrink-0 text-slate-100" />
                  <span>
                    {weekdayHours && <>Mon–Fri: {weekdayHours.hours}</>}
                    {weekdayHours && saturdayHours && <br />}
                    {saturdayHours && <>Sat: {saturdayHours.hours}</>}
                  </span>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-700">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-2 text-[9px] text-slate-400 sm:flex-row">
          <p>&copy; {year} {businessConfig.legalName}. All rights reserved.</p>
          <nav
            aria-label="Legal links"
            className="flex flex-wrap items-center justify-center gap-2 sm:gap-3"
          >
            <Link to="/privacy-policy" className="transition hover:text-white">
              Privacy Policy
            </Link>
            <span aria-hidden="true">|</span>
            <Link to="/terms-and-conditions" className="transition hover:text-white">
              Terms &amp; Conditions
            </Link>
            <span aria-hidden="true">|</span>
            <Link to="/sitemap" className="transition hover:text-white">
              Sitemap
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
