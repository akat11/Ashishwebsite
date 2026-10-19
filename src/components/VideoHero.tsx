import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Gem,
  Headphones,
  ShieldCheck,
  Truck,
} from 'lucide-react';

const serviceHighlights = [
  { icon: Gem, title: <>Premium<br />Quality</> },
  { icon: ShieldCheck, title: <>Trusted<br />Brands</> },
  { icon: Truck, title: <>Pan-India<br />Supply</> },
  { icon: Headphones, title: <>Dedicated<br />Support</> },
];

export default function VideoHero() {
  return (
    <section className="relative isolate flex min-h-[370px] items-center overflow-hidden bg-[#031b31] py-7 sm:min-h-[390px] lg:min-h-[350px]">
      <img
        src="/images/hero-surgical-scene.jpg"
        alt="Orthopedic implants and surgical team in an operating theatre"
        className="absolute inset-0 h-full w-full object-cover object-[62%_center]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#031b31]/95 via-[#052746]/90 to-[#062747]/15" />
      <div className="absolute inset-y-0 left-0 w-full bg-[linear-gradient(110deg,rgba(3,27,49,0.55),transparent_82%)]" />

      <div className="container-x relative">
        <div className="max-w-[520px]">
          <span className="inline-flex rounded-full border border-blue-300/20 bg-blue-500/20 px-2.5 py-1 text-[8px] font-bold uppercase tracking-[0.12em] text-blue-100">
            Orthopedic Implants &amp; External Fixation Systems
          </span>
          <h1 className="mt-2.5 font-display text-3xl font-extrabold leading-[1.07] tracking-tight text-white sm:text-4xl lg:text-[38px]">
            Precision Orthopedic
            <span className="block text-[#11a7ff]">Locking Plates.</span>
            <span className="block">Complete Fixation Solutions.</span>
          </h1>
          <p className="mt-2.5 max-w-[390px] text-[10px] leading-relaxed text-blue-50/90 sm:text-[11px]">
            Supplying high-quality orthopedic locking plates, external fixators, Ilizarov rings and
            fixation screws to hospitals, clinics and healthcare professionals across India.
          </p>

          <div className="mt-3.5 flex max-w-[390px] divide-x divide-white/20">
            {serviceHighlights.map(({ icon: Icon, title }, index) => (
              <div
                key={index}
                className={`flex flex-1 flex-col gap-1 px-2 first:pl-0 ${index === serviceHighlights.length - 1 ? 'pr-0' : ''}`}
              >
                <Icon className="h-4 w-4 text-sky-300" strokeWidth={1.8} />
                <span className="text-[8px] font-medium leading-tight text-white/90">{title}</span>
              </div>
            ))}
          </div>

          <div className="mt-3.5 flex flex-wrap gap-2">
            <Link
              to="/request-a-quote"
              className="inline-flex items-center gap-1.5 rounded-md bg-blue-600 px-3.5 py-2 text-[9px] font-bold text-white shadow-md transition-colors hover:bg-blue-500"
            >
              Request a Quote
              <ArrowRight className="h-3 w-3" />
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center gap-1.5 rounded-md border border-white/50 bg-[#06182c]/50 px-3.5 py-2 text-[9px] font-bold text-white transition-colors hover:bg-white/10"
            >
              Explore Products
              <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
