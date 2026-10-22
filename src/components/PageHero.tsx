import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';

export interface PageHeroProps {
  eyebrow?: string;
  title: string | ReactNode;
  subtitle?: string | ReactNode;
  backgroundImage?: string;
  children?: ReactNode;
  ctaPrimary?: {
    text: string;
    to: string;
    icon?: ReactNode;
  };
  ctaSecondary?: {
    text: string;
    to?: string;
    href?: string;
    icon?: ReactNode;
  };
}

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  backgroundImage,
  children,
  ctaPrimary,
  ctaSecondary,
}: PageHeroProps) {
  return (
    <section className="hero-standard bg-[#F4F8FB] border-b border-[#E0E8EF]">
      {backgroundImage && (
        <>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-0 bg-cover bg-[center_35%] opacity-25 sm:opacity-30 md:inset-y-0 md:left-auto md:right-0 md:w-[55%] md:opacity-40 lg:opacity-50"
            style={{ backgroundImage: `url('${backgroundImage}')` }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-[#F4F8FB]/90 via-[#F4F8FB]/95 to-[#F4F8FB] md:bg-gradient-to-r md:from-[#F4F8FB] md:via-[#F4F8FB]/95 md:via-55% md:to-transparent"
          />
        </>
      )}

      <div className="container-x relative z-10 w-full">
        <div className="hero-standard-inner max-w-3xl">
          {eyebrow && <span className="section-eyebrow">{eyebrow}</span>}
          <h1 className="mt-2 text-page-title">{title}</h1>
          {subtitle && (
            <div className="mt-4 text-body-large text-[#5E6F7D] leading-relaxed">
              {subtitle}
            </div>
          )}

          {(ctaPrimary || ctaSecondary) && (
            <div className="mt-8 flex flex-wrap gap-4">
              {ctaPrimary && (
                <Link to={ctaPrimary.to} className="btn-primary">
                  <span>{ctaPrimary.text}</span>
                  {ctaPrimary.icon}
                </Link>
              )}
              {ctaSecondary &&
                (ctaSecondary.to ? (
                  <Link to={ctaSecondary.to} className="btn-secondary">
                    {ctaSecondary.icon}
                    <span>{ctaSecondary.text}</span>
                  </Link>
                ) : (
                  <a href={ctaSecondary.href} className="btn-secondary">
                    {ctaSecondary.icon}
                    <span>{ctaSecondary.text}</span>
                  </a>
                ))}
            </div>
          )}

          {children}
        </div>
      </div>
    </section>
  );
}
