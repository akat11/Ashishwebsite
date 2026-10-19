import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BadgeCheck,
  ChevronRight,
  FileText,
  Headset,
  Home,
  ShieldCheck,
  Truck,
  UsersRound,
} from 'lucide-react';
import SEO from '@/components/SEO';
import DepartmentCard from '@/components/DepartmentCard';
import { departments } from '@/data/departments';

const serviceHighlights = [
  { label: <>Specialized<br />Product Range</>, icon: BadgeCheck },
  { label: <>Hospital &amp; Clinic<br />Supply</>, icon: ShieldCheck },
  { label: <>Expert<br />Support</>, icon: UsersRound },
  { label: <>Pan-India<br />Delivery</>, icon: Truck },
];

const supportHighlights = [
  { label: <>Expert<br />Guidance</>, icon: Headset },
  { label: <>Customized<br />Recommendations</>, icon: FileText },
  { label: <>Pan-India<br />Support</>, icon: Truck },
];

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

      <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#eaf4ff] via-[#f4f9ff] to-white">
        <img
          src="/images/hero-surgical-scene.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-y-0 right-0 h-full w-full object-cover object-[70%_center] md:w-[62%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#eaf4ff] via-[#edf6ff]/95 to-[#edf6ff]/20 md:via-[#edf6ff]/95 md:to-transparent" />
        <div className="container-x relative py-5 sm:py-7 lg:py-6">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-1.5 text-xs text-navy-500">
              <li>
                <Link to="/" className="inline-flex items-center gap-1 hover:text-medical-600">
                  <Home className="h-3.5 w-3.5" />
                  Home
                </Link>
              </li>
              <li aria-hidden="true"><ChevronRight className="h-3.5 w-3.5 text-navy-300" /></li>
              <li aria-current="page" className="font-medium text-navy-700">Departments</li>
            </ol>
          </nav>

          <div className="max-w-[540px]">
            <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-blue-700">
              Clinical Specialties
            </span>
            <h1 className="mt-2 font-display text-3xl font-extrabold leading-tight text-[#071d37] sm:text-4xl lg:text-[42px]">
              Departments <span className="text-blue-700">We Serve</span>
            </h1>
            <p className="mt-2 max-w-[470px] text-sm leading-relaxed text-navy-600">
              Our instruments, equipment and consumables support a wide range of hospital departments
              and clinical specialties. Each department has specific requirements, and we tailor our
              product supply accordingly.
            </p>
          </div>

          <div className="mt-5 flex max-w-[540px] flex-wrap items-center gap-y-3">
            {serviceHighlights.map(({ label, icon: Icon }, index) => (
              <div
                key={index}
                className={`flex min-w-[48%] items-center gap-2.5 py-1 sm:min-w-0 sm:pr-4 ${index > 0 ? 'sm:border-l sm:border-blue-200 sm:pl-4' : ''}`}
              >
                <Icon className="h-6 w-6 shrink-0 text-blue-600" strokeWidth={2} />
                <span className="text-[10px] font-semibold leading-tight text-navy-800 sm:text-[11px]">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-5 sm:py-6">
        <div className="container-x">
          <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
            {departments.map((department) => (
              <DepartmentCard key={department.slug} department={department} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-gradient-to-r from-[#0752cf] via-[#0754d2] to-[#063eaa] py-6 sm:py-7">
        <img
          src="/images/business-overview-surgery.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-y-0 left-0 h-full w-1/3 object-cover object-[30%_center] opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-800/30 via-blue-700/90 to-blue-800/20" />
        <div className="container-x relative grid items-center gap-6 text-center text-white md:grid-cols-[1fr_auto] md:text-left">
          <div>
            <h2 className="font-display text-xl font-bold sm:text-2xl">
              Looking for Instruments for Your Department?
            </h2>
            <p className="mt-1 text-sm text-blue-100">
              Contact us for department-specific product recommendations and quotations.
            </p>
            <Link
              to="/request-a-quote"
              className="mt-4 inline-flex items-center gap-2 rounded-md bg-white px-5 py-2.5 text-xs font-bold text-blue-700 shadow-sm transition-colors hover:bg-blue-50"
            >
              Request a Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="flex justify-center divide-x divide-white/25 md:justify-end">
            {supportHighlights.map(({ label, icon: Icon }, index) => (
              <div key={index} className="flex min-w-[84px] flex-col items-center gap-2 px-3 sm:px-5">
                <Icon className="h-6 w-6 text-cyan-300" strokeWidth={1.7} />
                <span className="text-[10px] leading-tight text-blue-50">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
