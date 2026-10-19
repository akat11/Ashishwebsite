import { useEffect, useRef, useState } from 'react';
import { Boxes, Package, MapPin, Globe2 } from 'lucide-react';
import { businessConfig } from '@/config/business';
import { productCategories } from '@/data/categories';

interface StatItem {
  icon: typeof Boxes;
  value: number;
  displayValue: string;
  label: string;
  isNumeric: boolean;
}

export default function Statistics() {
  const sectionRef = useRef<HTMLElement>(null);
  const [animated, setAnimated] = useState(false);
  const [counts, setCounts] = useState<Record<string, number>>({});

  const stats: StatItem[] = [
    {
      icon: Boxes,
      value: productCategories.length,
      displayValue: String(productCategories.length),
      label: 'Product Categories',
      isNumeric: true,
    },
    {
      icon: Package,
      value: 0,
      displayValue: '500+ Implants',
      label: 'Products in Catalogue',
      isNumeric: false,
    },
    {
      icon: MapPin,
      value: businessConfig.statistics.citiesCovered,
      displayValue: String(businessConfig.statistics.citiesCovered),
      label: 'Cities & Service Areas',
      isNumeric: true,
    },
    {
      icon: Globe2,
      value: 0,
      displayValue: 'Pan-India',
      label: 'Service & Hospital Network',
      isNumeric: false,
    },
  ];

  useEffect(() => {
    const timers: ReturnType<typeof setInterval>[] = [];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animated) {
            setAnimated(true);
            stats.forEach((stat) => {
              if (stat.isNumeric && stat.value > 0) {
                const duration = 1500;
                const steps = 40;
                const increment = stat.value / steps;
                let current = 0;
                let step = 0;
                const timer = setInterval(() => {
                  step++;
                  current += increment;
                  if (step >= steps) {
                    current = stat.value;
                    clearInterval(timer);
                  }
                  setCounts((prev) => ({
                    ...prev,
                    [stat.label]: Math.round(current),
                  }));
                }, duration / steps);
                timers.push(timer);
              }
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      observer.disconnect();
      timers.forEach((t) => clearInterval(t));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [animated]);

  return (
    <section ref={sectionRef} className="bg-[#0c2642] py-14 sm:py-18 text-white border-y border-[#123B66]">
      <div className="container-x">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {stats.map((stat) => {
            const display = stat.isNumeric
              ? counts[stat.label] !== undefined
                ? String(counts[stat.label])
                : String(stat.value)
              : stat.displayValue;

            return (
              <div key={stat.label} className="text-center group">
                <div className="flex h-14 w-14 mx-auto items-center justify-center rounded-2xl bg-[#123B66] text-[#159A9C] mb-4 shadow-sm group-hover:scale-105 transition-transform">
                  <stat.icon className="h-7 w-7" />
                </div>
                <div className="font-display text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-white leading-tight">
                  {display}
                </div>
                <div className="mt-2 text-sm sm:text-base font-medium text-[#bcccdc]">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
