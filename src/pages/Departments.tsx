import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BadgeCheck,
  FileText,
  Headset,
  ShieldCheck,
  Truck,
  UsersRound,
} from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import DepartmentCard from '@/components/DepartmentCard';
import BottomCTA from '@/components/BottomCTA';
import { departments } from '@/data/departments';

const serviceHighlights = [
  { label: 'Specialized Implant Range', icon: BadgeCheck },
  { label: 'Hospital & Clinic Supply', icon: ShieldCheck },
  { label: 'Dedicated Surgical Support', icon: UsersRound },
  { label: 'Pan-India Delivery Network', icon: Truck },
];

const supportHighlights = [
  { label: 'Technical Guidance', icon: Headset },
  { label: 'Department Quotations', icon: FileText },
  { label: 'Pan-India Distribution', icon: Truck },
];

export default function Departments() {
  return (
    <>
      <SEO
        title="Orthopedic Clinical Specialties & Departments We Serve | Vinayak Surgicals"
        description="We supply orthopedic implants, locking plate systems, and external fixators across hospital surgical departments including orthopaedic surgery, trauma care, limb reconstruction, pediatric orthopaedics, hand & wrist surgery, and foot & ankle surgery."
        canonical="https://vinyanaksurgicals.com/departments"
        keywords="orthopedic departments, trauma surgery supply, limb reconstruction, pediatric orthopaedics, hand surgery implants, foot and ankle surgery, hospital procurement India"
        image="/images/categories/tibia-locking-plates.jpg"
      />

      <Breadcrumbs crumbs={[{ label: 'Departments' }]} />

      {/* Hero Banner with Restored Surgical Image Backdrop */}
      <section className="hero-standard bg-[#F4F8FB] border-b border-[#E0E8EF]">
        <img
          src="/images/hero-surgical-scene.jpg"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 h-full w-full object-cover object-[70%_center] md:w-[58%] opacity-30 lg:opacity-40"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#F4F8FB] via-[#F4F8FB]/95 to-transparent"
        />

        <div className="container-x relative z-10 w-full">
          <div className="hero-standard-inner max-w-3xl">
            <span className="section-eyebrow">
              Clinical Specialties
            </span>
            <h1 className="mt-2 text-page-title">
              Departments <span className="text-[#159A9C]">We Serve</span>
            </h1>
            <p className="mt-4 text-body-large">
              Our locking plate systems, external fixators, and precision trauma instruments support clinical specialties across hospital surgical suites. Each department has distinct procedural requirements, and we supply targeted fixation hardware tailored to their demands.
            </p>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 border-t border-[#E0E8EF] pt-6">
              {serviceHighlights.map(({ label, icon: Icon }) => (
                <div key={label} className="flex items-center gap-2.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#123B66] border border-[#E0E8EF] shadow-xs">
                    <Icon className="h-5 w-5 text-[#159A9C]" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-[#172B3A] leading-snug">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Departments Grid */}
      <section className="section-padding bg-white">
        <div className="container-x">
          <div className="mb-8 sm:mb-10">
            <span className="section-eyebrow">Surgical Disciplines</span>
            <h2 className="mt-2 text-section-title">
              Explore Specialties &amp; Matching Systems
            </h2>
            <p className="mt-2 text-body-regular">
              Select any surgical department to review clinical implant solutions, anatomically shaped plates, and compatible screws.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((department) => (
              <DepartmentCard key={department.slug} department={department} />
            ))}
          </div>
        </div>
      </section>

      {/* Department Consultation CTA with Restored Surgery Photo */}
      <section className="relative isolate overflow-hidden bg-gradient-to-r from-[#123B66] via-[#123B66] to-[#0c2642] py-14 sm:py-18 text-white">
        <img
          src="/images/business-overview-surgery.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 h-full w-1/3 object-cover object-[30%_center] opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#123B66]/90 via-[#123B66]/95 to-[#0c2642]" />

        <div className="container-x relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="max-w-xl">
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white leading-snug">
              Looking for Specialized Hardware for Your Department?
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#bcccdc]">
              Contact our sales desk for department-specific product recommendations, sizing trials, and comprehensive hospital tender quotations.
            </p>
            <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-4">
              <Link
                to="/request-a-quote"
                className="btn-teal shadow-md"
              >
                <span>Request a Department Quote</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="flex justify-center divide-x divide-white/20">
            {supportHighlights.map(({ label, icon: Icon }, index) => (
              <div key={index} className="flex flex-col items-center gap-2 px-4 sm:px-6">
                <Icon className="h-7 w-7 text-[#159A9C]" />
                <span className="text-xs sm:text-sm font-semibold text-[#d9e2ec] text-center max-w-[100px]">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BottomCTA
        eyebrow="ORTHOPAEDIC SUPPLY PARTNER"
        title={
          <>
            <span className="text-[#38BDF8]">Reliable</span> Supply for Demanding
            <br className="hidden sm:inline" /> Surgical Care
          </>
        }
        description="High-quality orthopaedic implants, fixation systems and reliable healthcare supply across India."
        primaryButtonText="Get in Touch"
        primaryButtonLink="/contact-us"
        secondaryButtonText="Request a Quote"
        secondaryButtonLink="/request-a-quote"
        backgroundImage="/images/about-cta-background.png"
      />
    </>
  );
}
