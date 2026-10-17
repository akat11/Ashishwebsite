import { Link } from 'react-router-dom';
import {
  ShieldCheck, Truck, Headphones, PackageCheck, ClipboardList,
  Search, FileText, PhoneCall, MapPin, Clock, ArrowRight,
  Building2, Stethoscope, Boxes, Wrench,
} from 'lucide-react';
import VideoHero from '@/components/VideoHero';
import InstitutionMarquee from '@/components/InstitutionMarquee';
import BrandMarquee from '@/components/BrandMarquee';
import CategoryCard from '@/components/CategoryCard';
import ProductCard from '@/components/ProductCard';
import DepartmentCard from '@/components/DepartmentCard';
import FAQAccordion from '@/components/FAQAccordion';
import SEO from '@/components/SEO';
import { productCategories } from '@/data/categories';
import { getFeaturedProducts } from '@/data/products';
import { departments } from '@/data/departments';
import { faqs } from '@/data/faqs';
import { businessConfig, buildWhatsAppLink } from '@/config/business';

export default function Home() {
  const featuredProducts = getFeaturedProducts();

  return (
    <>
      <SEO
        title="Vinyanak Surgicals — Orthopedic Locking Plates & External Fixator Systems | Kanpur, India"
        description="Supplying precision orthopedic locking plate systems, external fixators, Ilizarov rings, and fixation screws in Stainless Steel 316L and Titanium Grade 5 across Kanpur, Uttar Pradesh, and pan-India."
        canonical="https://vinyanaksurgicals.com/"
        keywords="orthopedic locking plates, external fixator systems, ilizarov rings, distal radius plates, proximal tibia locking plate, femur locking plates, orthopedic screws, trauma implants, Kanpur, Uttar Pradesh, India, Vinyanak Surgicals"
        image="/images/categories/distal-radius-locking-plates.jpg"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'Vinyanak Surgicals',
          url: 'https://vinyanaksurgicals.com',
          potentialAction: {
            '@type': 'SearchAction',
            target: 'https://vinyanaksurgicals.com/products?q={search_term_string}',
            'query-input': 'required name=search_term_string'
          }
        }}
      />

      {/* 1. Video-led hero */}
      <VideoHero />

      {/* 2. Healthcare institutions marquee */}
      <InstitutionMarquee />

      {/* 3. Product categories */}
      <section className="section-padding bg-white">
        <div className="container-x">
          <div className="text-center mb-10">
            <span className="section-eyebrow">Our Catalogue</span>
            <h2 className="mt-2 text-2xl lg:text-3xl font-display font-bold">
              Product Categories
            </h2>
            <p className="mt-3 text-sm text-navy-500 max-w-2xl mx-auto">
              Browse our range of orthopedic implants, locking plate systems, and external fixators organized by anatomical region and fixation system.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {productCategories.map((cat) => (
              <CategoryCard key={cat.slug} category={cat} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Featured products */}
      <section className="section-padding bg-navy-50">
        <div className="container-x">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
            <div>
              <span className="section-eyebrow">Featured Selection</span>
              <h2 className="mt-2 text-2xl lg:text-3xl font-display font-bold">
                Locking Plate Systems & External Fixators
              </h2>
            </div>
            <Link to="/products" className="text-sm font-medium text-medical-600 hover:text-medical-700 flex items-center gap-1">
              View All Products
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. Institutional / bulk supply section */}
      <section className="section-padding bg-navy-900 text-white relative overflow-hidden">
        <div className="container-x">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <span className="section-eyebrow text-cyan-400">Institutional Supply</span>
              <h2 className="mt-2 text-2xl lg:text-3xl font-display font-bold text-white">
                Bulk Supply & Institutional Procurement
              </h2>
              <p className="mt-4 text-navy-200 leading-relaxed">
                We partner with hospitals, medical colleges, nursing homes and healthcare institutions to supply surgical instruments, medical equipment and consumables at scale. From tender-based procurement to regular supply agreements, we support your institution's needs.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  { icon: ClipboardList, text: 'Tender-based procurement support' },
                  { icon: PackageCheck, text: 'Bulk order quotations and pricing' },
                  { icon: Search, text: 'Product sourcing for specific requirements' },
                  { icon: Truck, text: 'Delivery across Kanpur, Uttar Pradesh and India' },
                ].map((item) => (
                  <li key={item.text} className="flex items-center gap-3 text-sm text-navy-200">
                    <item.icon className="h-5 w-5 text-cyan-400 shrink-0" />
                    {item.text}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link to="/request-a-quote" className="btn-primary">
                  Request a Quote
                </Link>
                <Link to="/services" className="inline-flex items-center justify-center gap-2 rounded-md border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10">
                  Our Services
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/37912780/pexels-photo-37912780.jpeg?auto=compress&cs=tinysrgb&w=940"
                  alt="Organised medical supply warehouse with shelved products"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Departments served */}
      <section className="section-padding bg-white">
        <div className="container-x">
          <div className="text-center mb-10">
            <span className="section-eyebrow">Clinical Specialties</span>
            <h2 className="mt-2 text-2xl lg:text-3xl font-display font-bold">
              Departments We Serve
            </h2>
            <p className="mt-3 text-sm text-navy-500 max-w-2xl mx-auto">
              Our instruments and equipment support a wide range of hospital departments and clinical specialties.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {departments.slice(0, 6).map((dept) => (
              <DepartmentCard key={dept.slug} department={dept} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/departments" className="text-sm font-medium text-medical-600 hover:text-medical-700 inline-flex items-center gap-1">
              View All Departments
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Medical brands & manufacturers */}
      <BrandMarquee />

      {/* 8. Why choose Vinyanak Surgicals */}
      <section className="section-padding bg-navy-50">
        <div className="container-x">
          <div className="text-center mb-10">
            <span className="section-eyebrow">Our Strengths</span>
            <h2 className="mt-2 text-2xl lg:text-3xl font-display font-bold">
              Why Choose Vinyanak Surgicals
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Boxes,
                title: 'Wide Product Range',
                desc: 'Ten comprehensive product categories covering orthopedic locking plates, external fixator systems, screws and fixation instruments.',
              },
              {
                icon: Building2,
                title: 'Institutional Supply',
                desc: 'Experienced in bulk procurement, tender-based supply and ongoing institutional supply agreements.',
              },
              {
                icon: Search,
                title: 'Product Sourcing',
                desc: 'If a specific instrument is not in our standard catalogue, we source it through our supplier network.',
              },
              {
                icon: ShieldCheck,
                title: 'Quality Focus',
                desc: 'We supply instruments made from surgical-grade stainless steel and equipment from reputable manufacturers.',
              },
              {
                icon: Truck,
                title: 'Pan-India Delivery',
                desc: 'Based in Kanpur, we deliver across Uttar Pradesh and respond to pan-India enquiries.',
              },
              {
                icon: Headphones,
                title: 'Responsive Support',
                desc: 'Our team responds to quotations and enquiries within one to two business days.',
              },
            ].map((item) => (
              <div key={item.title} className="card p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-medical-50 mb-4">
                  <item.icon className="h-6 w-6 text-medical-600" />
                </div>
                <h3 className="text-base font-semibold text-navy-800 mb-2">{item.title}</h3>
                <p className="text-sm text-navy-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Product sourcing & quotation process */}
      <section className="section-padding bg-white">
        <div className="container-x">
          <div className="text-center mb-10">
            <span className="section-eyebrow">How We Work</span>
            <h2 className="mt-2 text-2xl lg:text-3xl font-display font-bold">
              Product Sourcing & Quotation Process
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: FileText, step: '01', title: 'Share Requirements', desc: 'Tell us what instruments or equipment you need via our quotation form, phone or WhatsApp.' },
              { icon: Search, step: '02', title: 'We Source & Verify', desc: 'We check availability, specifications and source items through our supplier network.' },
              { icon: ClipboardList, step: '03', title: 'Receive Quotation', desc: 'You receive a detailed quotation with pricing, specifications and delivery timeline.' },
              { icon: Truck, step: '04', title: 'Delivery', desc: 'Once confirmed, we process your order and arrange delivery to your location.' },
            ].map((item) => (
              <div key={item.step} className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-navy-900 text-white font-display font-bold text-sm mb-4">
                  {item.step}
                </div>
                <div className="absolute top-0 left-12 right-0 h-12 flex items-center">
                  <div className="w-full h-px bg-navy-100 -ml-4 hidden md:block" />
                </div>
                <h3 className="text-base font-semibold text-navy-800 mb-2">{item.title}</h3>
                <p className="text-sm text-navy-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Service coverage */}
      <section className="section-padding bg-navy-900 text-white">
        <div className="container-x">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="section-eyebrow text-cyan-400">Service Coverage</span>
              <h2 className="mt-2 text-2xl lg:text-3xl font-display font-bold text-white">
                Serving Kanpur, Uttar Pradesh & India
              </h2>
              <p className="mt-4 text-navy-200 leading-relaxed">
                Based in Kanpur, we supply surgical instruments and medical equipment to healthcare institutions across Uttar Pradesh and respond to pan-India enquiries.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {businessConfig.serviceAreas.map((city) => (
                  <span key={city} className="inline-flex items-center gap-1.5 rounded-full bg-navy-800 px-3 py-1.5 text-xs font-medium text-navy-200">
                    <MapPin className="h-3 w-3 text-cyan-400" />
                    {city}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img
                src="https://images.pexels.com/photos/6129870/pexels-photo-6129870.jpeg?auto=compress&cs=tinysrgb&w=940"
                alt="Hospital corridor representing medical service coverage"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 11. FAQs */}
      <section className="section-padding bg-white">
        <div className="container-x max-w-3xl">
          <div className="text-center mb-8">
            <span className="section-eyebrow">Common Questions</span>
            <h2 className="mt-2 text-2xl lg:text-3xl font-display font-bold">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="border-t border-navy-100">
            {faqs.slice(0, 6).map((faq) => (
              <FAQAccordion key={faq.question} faq={faq} />
            ))}
          </div>
          <div className="text-center mt-6">
            <Link to="/faq" className="text-sm font-medium text-medical-600 hover:text-medical-700 inline-flex items-center gap-1">
              View All FAQs
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 12. Final CTA */}
      <section className="bg-medical-700 py-16">
        <div className="container-x text-center">
          <h2 className="text-2xl lg:text-3xl font-display font-bold text-white">
            Ready to Discuss Your Medical Supply Requirements?
          </h2>
          <p className="mt-3 text-medical-100 max-w-xl mx-auto">
            Contact Vinyanak Surgicals for product availability, quotations, institutional supply and product sourcing assistance.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
            <Link to="/request-a-quote" className="btn-primary bg-white text-medical-700 hover:bg-medical-50">
              Request a Quote
            </Link>
            {businessConfig.whatsappConfigured && (
              <a
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                Chat on WhatsApp
              </a>
            )}
            <Link to="/contact-us" className="inline-flex items-center justify-center gap-2 rounded-md border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10">
              Contact Us
            </Link>
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-medical-100">
            <span className="flex items-center gap-2"><PhoneCall className="h-4 w-4" /> {businessConfig.phone}</span>
            <span className="flex items-center gap-2"><Clock className="h-4 w-4" /> Mon–Sat: 9:30 AM – 7:00 PM</span>
          </div>
        </div>
      </section>
    </>
  );
}
