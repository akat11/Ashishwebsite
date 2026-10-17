import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import DepartmentCard from '@/components/DepartmentCard';
import { departments } from '@/data/departments';

export default function Departments() {
  return (
    <>
      <SEO
        title="Orthopedic Clinical Specialties & Departments We Serve | Vinyanak Surgicals"
        description="We supply orthopedic implants, locking plate systems, and external fixators across hospital surgical departments including orthopaedic surgery, trauma care, limb reconstruction, pediatric orthopaedics, hand & wrist surgery, and foot & ankle surgery."
        canonical="https://vinyanaksurgicals.com/departments"
        keywords="orthopedic departments, trauma surgery supply, limb reconstruction, pediatric orthopaedics, hand surgery implants, foot and ankle surgery, hospital procurement India"
        image="/images/categories/tibia-locking-plates.jpg"
      />
      <Breadcrumbs crumbs={[{ label: 'Departments' }]} />

      <section className="bg-navy-50 py-14">
        <div className="container-x">
          <span className="section-eyebrow">Clinical Specialties</span>
          <h1 className="mt-3 text-3xl lg:text-4xl font-display font-bold">
            Departments We Serve
          </h1>
          <p className="mt-4 text-navy-600 max-w-2xl leading-relaxed">
            Our instruments, equipment and consumables support a wide range of hospital departments and clinical specialties. Each department has specific requirements, and we tailor our product supply accordingly.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-x">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {departments.map((dept) => (
              <DepartmentCard key={dept.slug} department={dept} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-medical-700 py-12">
        <div className="container-x text-center">
          <h2 className="text-xl font-display font-bold text-white">
            Looking for instruments for your department?
          </h2>
          <p className="mt-2 text-medical-100">Contact us for department-specific product recommendations and quotations.</p>
          <Link to="/request-a-quote" className="btn-primary bg-white text-medical-700 hover:bg-medical-50 mt-5">
            Request a Quote
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
