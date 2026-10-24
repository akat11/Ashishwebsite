import {
  BadgeCheck,
  ShieldCheck,
  Truck,
  UsersRound,
} from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import DepartmentCard from '@/components/DepartmentCard';
import BottomCTA from '@/components/BottomCTA';
import PageHero from '@/components/PageHero';
import { departments } from '@/data/departments';

const serviceHighlights = [
  { label: 'Specialized Trauma Plates', icon: BadgeCheck },
  { label: 'Hospital OT Replenishment', icon: ShieldCheck },
  { label: 'Dedicated Sizing Support', icon: UsersRound },
  { label: '24-48h Pan-India Dispatch', icon: Truck },
];

export default function Departments() {
  return (
    <>
      <SEO
        title="Clinical Specialties & Surgical Departments We Serve | Vinayak Surgicals"
        description="Supplying specialized orthopaedic implants, locking plate systems, and external fixators tailored to hospital surgical departments across India."
        canonical="https://vinayaksurgicals.vercel.app/departments"
        keywords="orthopedic departments, trauma surgery supply, limb reconstruction, pediatric orthopaedics, hand surgery implants, foot and ankle surgery, hospital procurement India"
        image="/images/categories/tibia-locking-plates.jpg"
      />

      <Breadcrumbs crumbs={[{ label: 'Departments' }]} />

      {/* Cinematic MedTech Hero */}
      <PageHero
        eyebrow="CLINICAL SPECIALTIES"
        title={
          <>
            Specialized Surgical Hardware for{' '}
            <span className="bg-gradient-to-r from-[#12C8E8] via-[#38BDF8] to-[#93C5FD] bg-clip-text text-transparent">
              Hospital Departments
            </span>
          </>
        }
        subtitle="Each surgical specialty presents unique anatomical biomechanics and fracture reduction demands. We supply targeted fixation hardware, intramedullary nails, and modular circular fixators tailored to hospital trauma suites and operating rooms across India."
        backgroundImage="/images/hero-surgical-scene.jpg"
      >
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 border-t border-white/10 pt-6">
          {serviceHighlights.map(({ label, icon: Icon }) => (
            <div key={label} className="flex items-center gap-2 text-xs font-mono text-slate-300">
              <Icon className="h-4 w-4 text-[#12C8E8] shrink-0" />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </PageHero>

      {/* Main Departments Grid */}
      <section className="bg-[#F8FAFC] py-16 sm:py-24 border-b border-slate-200">
        <div className="container-x">
          <div className="max-w-2xl mb-12 sm:mb-14">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#0fb2ce] block mb-2">
              DEPARTMENTAL ALLOCATIONS
            </span>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#062D56] tracking-tight">
              Hospital Surgical Specialties
            </h2>
            <p className="mt-2.5 text-sm sm:text-base text-slate-600 leading-relaxed">
              Select a clinical department below to explore targeted locking plate systems, dedicated instruments, and implant sizes tailored to its procedural schedule.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((dept) => (
              <DepartmentCard key={dept.slug} department={dept} />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <BottomCTA
        eyebrow="DEPARTMENTAL CONTRACTS"
        title="Establish an Institutional Rate Contract for Your Surgical Department"
        description="Contact our Kanpur hospital supply desk for itemized department quotation lists, drill guide allocations, and sterile container sets."
        primaryButtonText="Request Department Proposal"
        primaryButtonLink="/request-a-quote"
        secondaryButtonText="Contact Surgical Desk"
        secondaryButtonLink="/contact-us"
      />
    </>
  );
}
