import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Layers,
  Headphones,
  Truck,
  Sparkles,
  Wrench,
  Settings,
  GraduationCap,
  Globe2,
  ArrowRight,
} from 'lucide-react';

const whyChooseCards = [
  {
    icon: ShieldCheck,
    title: 'Certified Quality Assurance',
    description:
      'Implant-grade raw materials, 100% optical CMM dimensional tolerances, and rigorous cleaning compliant with hospital sterilization protocols.',
    badge: 'ISO 13485',
  },
  {
    icon: Layers,
    title: 'Comprehensive Trauma Range',
    description:
      'Over 110 fixation systems covering anatomically contoured locking plates, intramedullary nails, Ilizarov rings, and precision cortical/cancellous screws.',
    badge: '110+ Systems',
  },
  {
    icon: Headphones,
    title: 'Surgeon & Clinical Support',
    description:
      'Expert technical assistance, sizing consultation, and prompt delivery of compatible surgical drill guides, depth gauges, and torque limiters.',
    badge: '24/7 Desk',
  },
  {
    icon: Truck,
    title: 'Pan-India Distribution',
    description:
      'Rapid 24–48 hour dispatch from our central Kanpur logistics center to major hospitals, trauma centers, and medical distributors nationwide.',
    badge: '24-48h Dispatch',
  },
];

const expertiseServices = [
  {
    icon: Sparkles,
    title: 'Product Recommendation',
    description: 'Expert technical guidance on selecting the right implant geometry and screw trajectory for complex trauma cases.',
    link: '/services',
  },
  {
    icon: Wrench,
    title: 'Surgical Instrument Sets',
    description: 'Complete dedicated orthopedic instrument containers and tray sets tailored for seamless intraoperative ergonomics.',
    link: '/services',
  },
  {
    icon: Settings,
    title: 'Customized Fixation Solutions',
    description: 'Specialized sizing and customized implant adaptations fabricated according to institutional surgical requirements.',
    link: '/services',
  },
  {
    icon: GraduationCap,
    title: 'Workshops & Technical Training',
    description: 'Hands-on clinical demonstrations and technical instrument handling workshops for surgical teams and OT technicians.',
    link: '/about-us',
  },
  {
    icon: Headphones,
    title: 'Responsive After-Sales Support',
    description: 'Dedicated replenishment assistance, tray maintenance guidance, and immediate hospital stock support.',
    link: '/contact-us',
  },
  {
    icon: Globe2,
    title: 'Institutional Tender Supply',
    description: 'Compliant institutional supply for government medical colleges, defense hospitals, and public health procurement authorities.',
    link: '/services',
  },
];

export default function WhyVinayak() {
  return (
    <section className="bg-gradient-to-b from-[#F5FAFD] via-white to-[#F8FAFC] py-20 sm:py-28 border-t border-slate-200/60 relative overflow-hidden">
      {/* Decorative Wave Accent */}
      <div className="absolute inset-0 pointer-events-none opacity-40" aria-hidden="true">
        <svg
          className="absolute -top-10 -left-16 w-[700px] h-[800px]"
          viewBox="0 0 780 1000"
          fill="none"
        >
          <path
            d="M-60 60 C180 140 320 300 250 500 C180 700 420 840 580 880"
            stroke="url(#waveGrad1)"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="waveGrad1" x1="0" y1="0" x2="650" y2="1000" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0875D1" stopOpacity="0.5" />
              <stop offset="1" stopColor="#12C8E8" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container-x relative z-10 space-y-20 sm:space-y-24">
        {/* Part 1: Why Choose Us */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
            <span className="text-xs font-bold tracking-widest text-[#0fb2ce] uppercase block mb-2">
              WHY CHOOSE VINAYAK SURGICALS
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#062D56] tracking-tight font-display">
              Your Trusted Orthopaedic Manufacturing Partner
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              We combine precision metallurgical engineering, comprehensive trauma inventory, and dedicated clinical support to serve India's demanding surgical community.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseCards.map(({ icon: Icon, title, description, badge }) => (
              <div
                key={title}
                className="rounded-3xl p-6 bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E6F8FB] border border-[#BCEEF5] text-[#0875D1] group-hover:bg-[#0875D1] group-hover:text-white group-hover:border-[#0875D1] transition-all duration-300 shadow-xs">
                      <Icon className="h-6 w-6 stroke-[1.8]" />
                    </div>
                    <span className="text-[10.5px] font-mono font-bold text-[#0875D1] bg-[#0875D1]/10 px-2.5 py-1 rounded-full">
                      {badge}
                    </span>
                  </div>

                  <h3 className="font-display text-base sm:text-lg font-bold text-[#062D56] mb-2 leading-snug">
                    {title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Part 2: Surgical Services & Support */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-14">
            <div className="max-w-2xl">
              <span className="text-xs font-bold tracking-widest text-[#0fb2ce] uppercase block mb-2">
                OUR CLINICAL EXPERTISE
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#062D56] tracking-tight font-display">
                End-to-End Surgical Services
              </h2>
              <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
                Specialized hospital assistance, from tailored instrumentation to emergency case replenishment.
              </p>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-xl border border-[#0875D1] px-5 py-2.5 text-xs sm:text-sm font-bold text-[#0875D1] hover:bg-[#0875D1] hover:text-white transition-all shadow-xs shrink-0"
            >
              <span>Explore All Services</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertiseServices.map(({ icon: Icon, title, description, link }) => (
              <Link
                key={title}
                to={link}
                className="group rounded-3xl bg-white p-6 border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-start justify-between gap-4"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#E6F8FB] border border-[#BCEEF5] text-[#0875D1] group-hover:bg-[#0875D1] group-hover:text-white group-hover:border-[#0875D1] transition-all duration-300">
                  <Icon className="h-6 w-6 stroke-[1.8]" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display text-sm sm:text-base font-bold text-[#062D56] group-hover:text-[#0875D1] transition-colors leading-snug">
                    {title}
                  </h3>
                  <p className="mt-1.5 text-xs text-slate-500 line-clamp-2 leading-relaxed">
                    {description}
                  </p>
                </div>
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-400 group-hover:bg-[#0875D1] group-hover:text-white transition-colors mt-0.5">
                  <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
