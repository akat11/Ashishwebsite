import { Link } from 'react-router-dom';
import {
  ClipboardList, PackageCheck, Search, Truck, ArrowRight,
  Stethoscope, Building2, Boxes, Headphones,
} from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import { businessConfig } from '@/config/business';

export default function Services() {
  const services = [
    {
      icon: Boxes,
      title: 'Product Supply',
      desc: 'Supply of surgical instruments, medical equipment and healthcare consumables across ten product categories to hospitals, clinics and individual professionals.',
    },
    {
      icon: ClipboardList,
      title: 'Institutional Quotations',
      desc: 'Detailed quotations for hospitals, medical colleges and healthcare institutions. Submit your requirements through our multi-product quotation form.',
    },
    {
      icon: PackageCheck,
      title: 'Bulk Procurement',
      desc: 'Bulk procurement support for large-volume orders, tender-based supply and regular supply agreements with healthcare institutions.',
    },
    {
      icon: Search,
      title: 'Product Sourcing',
      desc: 'Sourcing assistance for specific instruments or equipment not listed in our standard catalogue. Share your requirements and we will locate the item.',
    },
  ];

  return (
    <>
      <SEO
        title="Orthopedic Supply Services & Institutional Procurement | Vinyanak Surgicals"
        description="Orthopedic implant supply, institutional quotations, hospital bulk procurement, and fixation system sourcing across Uttar Pradesh and pan-India."
        canonical="https://vinyanaksurgicals.com/services"
        keywords="orthopedic supply services, hospital bulk procurement, institutional medical quotation, trauma implants supplier Kanpur, Vinyanak Surgicals"
        image="/images/categories/reconstruction-locking-plates.jpg"
      />
      <Breadcrumbs crumbs={[{ label: 'Services' }]} />

      <section className="bg-navy-50 py-14">
        <div className="container-x">
          <span className="section-eyebrow">Our Services</span>
          <h1 className="mt-3 text-3xl lg:text-4xl font-display font-bold">
            Medical Supply Services
          </h1>
          <p className="mt-4 text-navy-600 max-w-2xl leading-relaxed">
            We provide a range of services to support the medical supply needs of hospitals, clinics and healthcare professionals across Kanpur, Uttar Pradesh and India.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-x">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((svc) => (
              <div key={svc.title} className="card p-7">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-medical-50 mb-4">
                  <svc.icon className="h-6 w-6 text-medical-600" />
                </div>
                <h3 className="text-lg font-display font-bold mb-2">{svc.title}</h3>
                <p className="text-sm text-navy-500 leading-relaxed">{svc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-navy-50">
        <div className="container-x">
          <h2 className="text-2xl font-display font-bold mb-8 text-center">How Our Service Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: ClipboardList, step: '01', title: 'Share Requirements', desc: 'Tell us what you need via phone, WhatsApp, email or our quotation form.' },
              { icon: Search, step: '02', title: 'We Source', desc: 'We check availability and source items through our supplier network.' },
              { icon: Building2, step: '03', title: 'Receive Quote', desc: 'You get a detailed quotation with pricing and specifications.' },
              { icon: Truck, step: '04', title: 'Delivery', desc: 'We process and deliver your order to your location.' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="flex h-12 w-12 mx-auto items-center justify-center rounded-full bg-navy-900 text-white font-display font-bold text-sm mb-4">
                  {item.step}
                </div>
                <h3 className="text-sm font-semibold text-navy-800 mb-1.5">{item.title}</h3>
                <p className="text-xs text-navy-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-medical-700 py-14">
        <div className="container-x text-center">
          <Stethoscope className="h-10 w-10 text-white mx-auto mb-4" />
          <h2 className="text-xl font-display font-bold text-white">
            Ready to discuss your requirements?
          </h2>
          <p className="mt-2 text-medical-100">Our team is here to assist with your medical supply needs.</p>
          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
            <Link to="/request-a-quote" className="btn-primary bg-white text-medical-700 hover:bg-medical-50">
              Request a Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/contact-us" className="inline-flex items-center justify-center gap-2 rounded-md border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10">
              <Headphones className="h-4 w-4" />
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
