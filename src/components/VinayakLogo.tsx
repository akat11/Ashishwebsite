import { Link } from 'react-router-dom';

interface VinayakLogoProps {
  className?: string;
  isDark?: boolean;
}

export default function VinayakLogo({ className = '', isDark = false }: VinayakLogoProps) {
  return (
    <Link to="/" className={`inline-flex items-center gap-2.5 group ${className}`} aria-label="Vinayak Surgicals Home">
      {/* Stylized Orthopaedic Cross / Molecule Icon */}
      <div className="relative flex h-8 w-8 items-center justify-center shrink-0">
        <svg viewBox="0 0 32 32" fill="none" className="h-8 w-8 transition-transform group-hover:scale-105" aria-hidden="true">
          {/* Top block */}
          <rect x="12" y="2" width="8" height="8" rx="2.5" fill="#0875D1" />
          {/* Bottom block */}
          <rect x="12" y="22" width="8" height="8" rx="2.5" fill="#0875D1" />
          {/* Left block */}
          <rect x="2" y="12" width="8" height="8" rx="2.5" fill="#12C8E8" />
          {/* Right block */}
          <rect x="22" y="12" width="8" height="8" rx="2.5" fill="#12C8E8" />
          {/* Center core */}
          <circle cx="16" cy="16" r="3.5" fill={isDark ? '#032449' : '#0875D1'} />
        </svg>
      </div>

      <div className="flex flex-col">
        <span
          className={`font-display text-[20px] sm:text-[22px] font-extrabold tracking-tight leading-none transition-colors ${
            isDark ? 'text-white' : 'text-[#062D56] group-hover:text-[#0875D1]'
          }`}
        >
          Vinayak
        </span>
        <span
          className={`text-[9.5px] sm:text-[10px] font-bold uppercase tracking-[0.22em] mt-1 leading-none ${
            isDark ? 'text-[#12C8E8]' : 'text-[#0875D1]'
          }`}
        >
          Surgicals
        </span>
      </div>
    </Link>
  );
}
