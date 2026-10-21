import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';
import { businessConfig } from '@/config/business';

export interface BottomCTAProps {
  eyebrow?: string;
  title?: React.ReactNode;
  description?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  showPhoneSecondary?: boolean;
  backgroundImage?: string;
  className?: string;
}

export default function BottomCTA({
  eyebrow = 'ORTHOPAEDIC SUPPLY PARTNER',
  title = (
    <>
      <span className="text-[#38BDF8]">Reliable</span> Supply for Demanding
      <br className="hidden sm:inline" /> Surgical Care
    </>
  ),
  description = 'High-quality orthopaedic implants, fixation systems and reliable healthcare supply across India.',
  primaryButtonText = 'Get in Touch',
  primaryButtonLink = '/contact-us',
  secondaryButtonText = 'Request a Quote',
  secondaryButtonLink = '/request-a-quote',
  showPhoneSecondary = false,
  backgroundImage = '/images/about-cta-background.png',
  className = '',
}: BottomCTAProps) {
  return (
    <section className={`relative isolate overflow-hidden bg-[#061C33] py-16 sm:py-20 lg:py-24 text-white ${className}`}>
      {/* Background Orthopaedic Hardware Image with Natural Metal Tones */}
      {backgroundImage && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 bg-cover bg-no-repeat bg-[position:right_center] sm:bg-[position:75%_center] lg:bg-[position:70%_center] xl:bg-[position:65%_center]"
          style={{
            backgroundImage: `url('${backgroundImage}')`,
            filter: 'saturate(0.72) brightness(0.92) contrast(1.04)',
          }}
        />
      )}

      {/* Gentle, Cohesive Navy Gradient: Seamless blend with zero harsh vertical transition */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-r from-[#061C33]/90 via-[#061C33]/70 via-40% to-[#061C33]/20"
      />

      <div className="container-x relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-10">
        {/* Left Side: Eyebrow, Heading, Description */}
        <div className="max-w-xl xl:max-w-2xl">
          <div className="mb-3">
            <span className="text-xs sm:text-sm font-bold tracking-widest text-[#00C2FF] uppercase">
              {eyebrow}
            </span>
          </div>

          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-extrabold text-white tracking-tight leading-[1.18] drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]">
            {title}
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-200 leading-relaxed max-w-lg drop-shadow-[0_1px_4px_rgba(0,0,0,0.35)]">
            {description}
          </p>
        </div>

        {/* Right Side: Primary and Secondary CTA Buttons */}
        <div className="flex flex-wrap sm:flex-nowrap items-center gap-3.5 sm:gap-4 shrink-0 w-full sm:w-auto">
          <Link
            to={primaryButtonLink}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#00BAF2] to-[#0091FF] px-7 py-3.5 text-sm sm:text-base font-bold text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:brightness-110 hover:-translate-y-0.5 transition-all duration-200"
          >
            <span>{primaryButtonText}</span>
            <ArrowRight className="h-4 w-4" />
          </Link>

          {showPhoneSecondary ? (
            <a
              href={`tel:${businessConfig.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/80 bg-[#061E38]/80 hover:bg-[#082952]/90 hover:border-white px-7 py-3.5 text-sm sm:text-base font-bold text-white shadow-xs hover:-translate-y-0.5 transition-all duration-200 backdrop-blur-xs"
            >
              <Phone className="h-4 w-4 text-[#00C2FF]" />
              <span>{secondaryButtonText || businessConfig.phone}</span>
            </a>
          ) : secondaryButtonText && secondaryButtonLink ? (
            <Link
              to={secondaryButtonLink}
              className="inline-flex items-center justify-center rounded-xl border border-white/80 bg-[#061E38]/80 hover:bg-[#082952]/90 hover:border-white px-7 py-3.5 text-sm sm:text-base font-bold text-white shadow-xs hover:-translate-y-0.5 transition-all duration-200 backdrop-blur-xs"
            >
              <span>{secondaryButtonText}</span>
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}
