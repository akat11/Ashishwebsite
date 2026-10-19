import { institutions } from '@/data/institutions';

export default function InstitutionMarquee() {
  const items = [...institutions, ...institutions];

  return (
    <section className="bg-[#F4F8FB] border-y border-[#E0E8EF] py-10 sm:py-12">
      <div className="container-x">
        <p className="text-center text-xs sm:text-sm font-bold uppercase tracking-[0.16em] text-[#123B66] mb-6">
          Supporting Hospitals &amp; Healthcare Institutions Across Our Service Network
        </p>
      </div>
      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#F4F8FB] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#F4F8FB] to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {items.map((inst, idx) => (
            <div
              key={`${inst.name}-${idx}`}
              className="flex items-center gap-3 px-8 shrink-0 py-1"
            >
              <span className="text-sm sm:text-base font-semibold text-[#172B3A] whitespace-nowrap">
                {inst.name}
              </span>
              <span className="text-xs font-medium text-[#159A9C] bg-[#e8f7f7] px-2 py-0.5 rounded-full whitespace-nowrap">
                {inst.city}
              </span>
              <span className="text-[#E0E8EF] ml-6" aria-hidden="true">&bull;</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
