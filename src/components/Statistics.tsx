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
      displayValue: businessConfig.statistics.productCount,
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
      displayValue: 'Pan-India Enquiries',
      label: 'Service Coverage',
      isNumeric: false,
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animated) {
            setAnimated(true);
            // Animate numeric counters
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
              }
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [animated]);

  return (
    <section ref={sectionRef} className="bg-navy-900 py-16">
      <div className="container-x">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat) => {
            const display = stat.isNumeric
              ? counts[stat.label] !== undefined
                ? String(counts[stat.label])
                : String(stat.value)
              : stat.displayValue;

            return (
              <div
                key={stat.label}
                className="text-center"
              >
                <div className="flex h-14 w-14 mx-auto items-center justify-center rounded-full bg-navy-800 mb-4">
                  <stat.icon className="h-6 w-6 text-cyan-400" />
                </div>
                <div className="text-3xl lg:text-4xl font-display font-bold text-white">
                  {display}
                </div>
                <div className="mt-1.5 text-sm text-navy-300">
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
