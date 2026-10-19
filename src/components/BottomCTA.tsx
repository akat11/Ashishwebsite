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
  eyebrow = "Let's Work Together",
  title = 'Ready to Discuss Your Medical Supply Requirements?',
  description = 'Our team is here to assist with product availability, sizing recommendations, and formal institutional quotations.',
  primaryButtonText = 'Request a Quote',
  primaryButtonLink = '/request-a-quote',
  secondaryButtonText,
  secondaryButtonLink,
  showPhoneSecondary = false,
  backgroundImage,
}: BottomCTAProps) {
  return (
    <section className="relative isolate overflow-hidden bg-[#123B66] py-14 sm:py-18 text-white">
      {backgroundImage && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: `url('${backgroundImage}')` }}
        />
      )}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-r from-[#123B66] via-[#123B66]/95 to-[#0c2642]/90"
      />

      <div className="container-x relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div className="max-w-xl">
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#159A9C]">
            {eyebrow}
          </span>
          <h2 className="mt-2 font-display text-2xl sm:text-3xl font-extrabold text-white leading-snug">
            {title}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#bcccdc]">
            {description}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3.5 shrink-0">
          <Link to={primaryButtonLink} className="btn-teal shadow-md">
            <span>{primaryButtonText}</span>
            <ArrowRight className="h-4 w-4" />
          </Link>

          {showPhoneSecondary ? (
            <a
              href={`tel:${businessConfig.phoneRaw}`}
              className="btn-secondary !bg-white/10 !text-white !border-white/30 hover:!bg-white hover:!text-[#123B66]"
            >
              <Phone className="h-4 w-4 text-[#159A9C]" />
              <span>{secondaryButtonText || businessConfig.phone}</span>
            </a>
          ) : secondaryButtonText && secondaryButtonLink ? (
            <Link
              to={secondaryButtonLink}
              className="btn-secondary !bg-white/10 !text-white !border-white/30 hover:!bg-white hover:!text-[#123B66]"
            >
              <span>{secondaryButtonText}</span>
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}
