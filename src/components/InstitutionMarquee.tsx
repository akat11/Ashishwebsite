import { institutions } from '@/data/institutions';

export default function InstitutionMarquee() {
  const items = [...institutions, ...institutions];

  return (
    <section className="bg-navy-50 border-y border-navy-100 py-10">
      <div className="container-x">
        <p className="text-center text-sm font-semibold uppercase tracking-[0.15em] text-navy-500 mb-6">
          Healthcare Institutions Across Our Service Region
        </p>
      </div>
      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-navy-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-navy-50 to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {items.map((inst, idx) => (
            <div
              key={`${inst.name}-${idx}`}
              className="flex items-center gap-3 px-8 shrink-0"
            >
              <span className="text-base font-medium text-navy-700 whitespace-nowrap">
                {inst.name}
              </span>
              <span className="text-xs text-navy-400 whitespace-nowrap">
                {inst.city}
              </span>
              <span className="text-medical-300 ml-4">|</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
