import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';
import { Sparkles } from 'lucide-react';

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
    <section className="relative isolate overflow-hidden bg-[#020F1C] text-white py-16 sm:py-20 lg:py-24 border-b border-white/10">
      {/* Background Studio Image */}
      {backgroundImage && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 bg-cover bg-[center_35%] opacity-20 sm:opacity-25 md:inset-y-0 md:left-auto md:right-0 md:w-[58%] md:opacity-35"
          style={{ backgroundImage: `url('${backgroundImage}')` }}
        />
      )}

      {/* Volumetric Radial Glows */}
      <div
        className="pointer-events-none absolute -top-24 -left-24 h-96 w-96 rounded-full bg-[#0875D1]/20 blur-[130px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/2 right-0 h-96 w-96 rounded-full bg-[#12C8E8]/15 blur-[140px]"
        aria-hidden="true"
      />

      {/* Clinical Grid Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20 select-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(18,200,232,0.18) 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
        aria-hidden="true"
      />

      {/* Subtle overlay gradient to guarantee perfect contrast */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-r from-[#020F1C] via-[#020F1C]/90 to-transparent"
      />

      <div className="container-x relative z-10 w-full">
        <div className="max-w-3xl">
          {eyebrow && (
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-xs font-mono font-bold uppercase tracking-wider text-[#12C8E8] backdrop-blur-md border border-white/15 mb-4 shadow-xs">
              <Sparkles className="h-3.5 w-3.5" />
              <span>{eyebrow}</span>
            </div>
          )}

          <h1 className="font-display text-[clamp(2rem,3.4vw+0.6rem,3.5rem)] font-extrabold leading-[1.12] tracking-tight text-white">
            {title}
          </h1>

          {subtitle && (
            <div className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
              {subtitle}
            </div>
          )}

          {(ctaPrimary || ctaSecondary) && (
            <div className="mt-8 flex flex-wrap gap-4">
              {ctaPrimary && (
                <Link to={ctaPrimary.to} className="btn-cyan text-xs sm:text-sm py-3 px-6 shadow-md">
                  <span>{ctaPrimary.text}</span>
                  {ctaPrimary.icon}
                </Link>
              )}
              {ctaSecondary &&
                (ctaSecondary.to ? (
                  <Link
                    to={ctaSecondary.to}
                    className="inline-flex items-center gap-2 rounded-xl border border-white/25 bg-white/10 hover:bg-white/20 px-6 py-3 text-xs sm:text-sm font-semibold text-white backdrop-blur-xs transition-all hover:border-white/40 shadow-xs"
                  >
                    {ctaSecondary.icon}
                    <span>{ctaSecondary.text}</span>
                  </Link>
                ) : (
                  <a
                    href={ctaSecondary.href}
                    className="inline-flex items-center gap-2 rounded-xl border border-white/25 bg-white/10 hover:bg-white/20 px-6 py-3 text-xs sm:text-sm font-semibold text-white backdrop-blur-xs transition-all hover:border-white/40 shadow-xs"
                  >
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
