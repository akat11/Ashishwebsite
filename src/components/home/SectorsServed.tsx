import { Building2, Stethoscope, ShieldCheck, Globe2, FileText } from 'lucide-react';

const industries = [
  {
    icon: Building2,
    title: 'Multi-Specialty Hospitals',
    description: 'Primary, secondary, and tertiary hospital networks demanding certified trauma hardware with emergency OT replenishment.',
  },
  {
    icon: Stethoscope,
    title: 'Orthopaedic Clinics',
    description: 'Specialist bone & joint practices requiring dedicated locking plate trays, screw caddies, and ergonomic insertion tools.',
  },
  {
    icon: ShieldCheck,
    title: 'Trauma & Emergency Centers',
    description: 'High-acuity emergency rooms requiring 24-48h access to versatile locking plates and rapid-application external fixators.',
  },
  {
    icon: Globe2,
    title: 'Medical Distributors',
    description: 'Regional and national healthcare distributors seeking dependable manufacturer pricing and marketing support.',
  },
  {
    icon: FileText,
    title: 'Institutional & Government Tenders',
    description: 'Compliant fulfillment for central medical colleges, defense procurement, railway hospitals, and public health authorities.',
  },
];

export default function SectorsServed() {
  return (
    <section className="bg-white py-20 sm:py-24 border-t border-slate-200/60">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <span className="text-xs font-bold tracking-widest text-[#0fb2ce] uppercase block mb-2">
            HEALTHCARE SECTORS WE SUPPLY
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#062D56] tracking-tight font-display">
            Trusted Across India's Healthcare Ecosystem
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-500 leading-relaxed">
            From premier metropolitan trauma institutes to district healthcare supply chains, Vinyanak Surgicals delivers reliable orthopaedic solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {industries.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-3xl p-6 bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-[#0875D1] shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center flex flex-col items-center justify-between group"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white border border-slate-200 text-[#0875D1] mb-5 group-hover:bg-[#0875D1] group-hover:text-white group-hover:border-[#0875D1] transition-all duration-300 shadow-xs">
                <Icon className="h-7 w-7 stroke-[1.8]" />
              </div>
              <div>
                <h3 className="font-display text-sm sm:text-[15px] font-bold text-[#062D56] mb-2 leading-snug">
                  {title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
