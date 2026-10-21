import { useEffect, useRef, useState } from 'react';
import { Building2, Clock, Globe2, Layers } from 'lucide-react';

function useCounter(target: number, duration = 1800, shouldStart = false) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;

    if (
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      setValue(target);
      return;
    }

    let startTimestamp: number | null = null;
    let frameId: number;

    const animate = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = timestamp - startTimestamp;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic curve
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(eased * target));

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      } else {
        setValue(target);
      }
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [target, duration, shouldStart]);

  return value;
}

export default function StatisticsStrip() {
  const [hasEntered, setHasEntered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (hasEntered) return;
    const element = containerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setHasEntered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [hasEntered]);

  const count500 = useCounter(500, 1800, hasEntered);
  const count1000 = useCounter(1000, 1800, hasEntered);
  const count24 = useCounter(24, 1600, hasEntered);

  const stats = [
    {
      icon: Layers,
      value: `${count500}+`,
      label: 'Product Variants',
    },
    {
      icon: Building2,
      value: `${count1000}+`,
      label: 'Healthcare Partners',
    },
    {
      icon: Globe2,
      value: 'Pan India',
      label: 'Distribution Network',
    },
    {
      icon: Clock,
      value: `${count24}/7`,
      label: 'Support & Assistance',
    },
  ];

  return (
    <div
      ref={containerRef}
      className="mt-16 rounded-2xl bg-[#032449]/80 border border-white/15 p-6 sm:p-8 shadow-2xl backdrop-blur-xs relative overflow-hidden"
    >
      {/* Subtle ambient cyan glow behind */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-[#12C8E8]/10 blur-2xl"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-0 lg:divide-x lg:divide-white/15 text-center relative z-10">
        {stats.map(({ icon: Icon, value, label }, idx) => (
          <div
            key={label}
            className={`flex flex-col items-center justify-center ${
              idx === 0
                ? 'lg:pr-6'
                : idx === stats.length - 1
                  ? 'lg:pl-6'
                  : 'lg:px-6'
            }`}
          >
            <Icon className="h-7 w-7 sm:h-8 sm:w-8 text-[#12C8E8] mb-2.5" strokeWidth={1.8} />
            <div className="font-display text-3xl sm:text-4xl font-extrabold text-[#12C8E8] tracking-tight">
              {value}
            </div>
            <div className="mt-1.5 text-xs sm:text-sm font-semibold tracking-wide text-slate-300">
              {label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}