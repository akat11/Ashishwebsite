import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';
import { businessConfig } from '@/config/business';

export interface BottomCTAProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  showPhoneSecondary?: boolean;
  backgroundImage?: string;
}

export default function BottomCTA({
  eyebrow = 'PARTNER WITH US',
  title = 'Ready to Elevate Your Surgical Solutions?',
  description = 'Connect with our orthopaedic specialists to discuss bulk institutional supply, technical specifications, or custom product requirements.',
  primaryButtonText = 'Get in Touch',
  primaryButtonLink = '/contact-us',
  secondaryButtonText = 'Request a Quote',
  secondaryButtonLink = '/request-a-quote',
  showPhoneSecondary = false,
  backgroundImage = '/images/hero-surgical-scene.jpg',
}: BottomCTAProps) {
  return (
    <section className="relative isolate overflow-hidden bg-[#062D56] py-16 sm:py-20 text-white">
      {backgroundImage && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url('${backgroundImage}')` }}
        />
      )}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-r from-[#032449] via-[#062D56]/95 to-[#0875D1]/80"
      />

      <div className="container-x relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        <div className="max-w-2xl">
          <span className="section-eyebrow text-[#12C8E8]">
            {eyebrow}
          </span>
          <h2 className="mt-3 font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight">
            {title}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-xl">
            {description}
          </p>
        </div>

        <div className="flex flex-wrap justify-center md:justify-end gap-3.5 shrink-0">
          <Link to={primaryButtonLink} className="btn-cyan">
            <span>{primaryButtonText}</span>
            <ArrowRight className="h-4 w-4" />
          </Link>

          {showPhoneSecondary ? (
            <a
              href={`tel:${businessConfig.phoneRaw}`}
              className="btn-pill !border-white/30 !bg-white/10 !text-white hover:!bg-white hover:!text-[#062D56]"
            >
              <Phone className="h-4 w-4 text-[#12C8E8]" />
              <span>{secondaryButtonText || businessConfig.phone}</span>
            </a>
          ) : secondaryButtonText && secondaryButtonLink ? (
            <Link
              to={secondaryButtonLink}
              className="btn-pill !border-white/30 !bg-white/10 !text-white hover:!bg-white hover:!text-[#062D56]"
            >
              <span>{secondaryButtonText}</span>
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}
