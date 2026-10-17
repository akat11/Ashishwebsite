import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AlertCircle,
  Building2,
  CheckCircle2,
  FileText,
  Mail,
  Phone,
  Send,
  Tag,
  UserRound,
} from 'lucide-react';
import { businessConfig, buildWhatsAppLink } from '@/config/business';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

const inputClassName =
  'w-full rounded-md border border-slate-200 bg-white py-2 pl-8 pr-3 text-[10px] text-slate-800 placeholder:text-slate-400 transition-colors focus:border-[#0866f5] focus:outline-none focus:ring-1 focus:ring-[#0866f5]';

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    // Without a configured backend, do not claim that an enquiry was sent.
    setTimeout(() => {
      setStatus('error');
    }, 800);
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 space-y-3">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1 block text-[10px] font-semibold text-slate-700">
            Name *
          </label>
          <div className="relative">
            <UserRound aria-hidden="true" className="absolute left-2.5 top-1/2 h-3 w-3 -translate-y-1/2 text-slate-400" />
            <input id="name" name="name" type="text" required className={inputClassName} placeholder="Your full name" />
          </div>
        </div>
        <div>
          <label htmlFor="organisation" className="mb-1 block text-[10px] font-semibold text-slate-700">
            Organisation
          </label>
          <div className="relative">
            <Building2 aria-hidden="true" className="absolute left-2.5 top-1/2 h-3 w-3 -translate-y-1/2 text-slate-400" />
            <input
              id="organisation"
              name="organisation"
              type="text"
              className={inputClassName}
              placeholder="Hospital or clinic name"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="mb-1 block text-[10px] font-semibold text-slate-700">
            Phone *
          </label>
          <div className="relative">
            <Phone aria-hidden="true" className="absolute left-2.5 top-1/2 h-3 w-3 -translate-y-1/2 text-slate-400" />
            <input id="phone" name="phone" type="tel" required className={inputClassName} placeholder="Your phone number" />
          </div>
        </div>
        <div>
          <label htmlFor="email" className="mb-1 block text-[10px] font-semibold text-slate-700">
            Email *
          </label>
          <div className="relative">
            <Mail aria-hidden="true" className="absolute left-2.5 top-1/2 h-3 w-3 -translate-y-1/2 text-slate-400" />
            <input id="email" name="email" type="email" required className={inputClassName} placeholder="Your email address" />
          </div>
        </div>
      </div>

      <div>
        <label htmlFor="enquiryType" className="mb-1 block text-[10px] font-semibold text-slate-700">
          Enquiry Type
        </label>
        <div className="relative">
          <Tag aria-hidden="true" className="absolute left-2.5 top-1/2 h-3 w-3 -translate-y-1/2 text-slate-400" />
          <select id="enquiryType" name="enquiryType" className={`${inputClassName} appearance-none`}>
            <option value="general">General Enquiry</option>
            <option value="product">Product Availability</option>
            <option value="quotation">Quotation Request</option>
            <option value="institutional">Institutional Supply</option>
            <option value="sourcing">Product Sourcing</option>
            <option value="support">Support / After-Sales</option>
          </select>
          <span aria-hidden="true" className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-slate-500">
            ▾
          </span>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1 block text-[10px] font-semibold text-slate-700">
          Message *
        </label>
        <div className="relative">
          <FileText aria-hidden="true" className="absolute left-2.5 top-2.5 h-3 w-3 text-slate-400" />
          <textarea
            id="message"
            name="message"
            rows={3}
            required
            className={`${inputClassName} resize-y py-2`}
            placeholder="Describe your requirements..."
          />
        </div>
      </div>

      <div className="flex items-start gap-2">
        <input
          id="consent"
          name="consent"
          type="checkbox"
          required
          className="mt-0.5 h-3.5 w-3.5 shrink-0 rounded border-slate-300 text-[#0866f5] focus:ring-[#0866f5]"
        />
        <label htmlFor="consent" className="text-[9px] leading-relaxed text-slate-600">
          I consent to Vinyanak Surgicals contacting me regarding this enquiry, in accordance with
          the{' '}
          <Link to="/privacy-policy" className="font-medium text-[#0866f5] underline">
            Privacy Policy
          </Link>
          .
        </label>
      </div>

      {status === 'error' && (
        <div className="flex items-start gap-2 rounded-md border border-red-100 bg-red-50 p-3 text-[10px] text-red-700">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          <div>
            <p className="font-semibold">Form submission is not yet configured.</p>
            <p className="mt-0.5">
              Please use WhatsApp or call us directly for now. Our team will assist you.
            </p>
            {businessConfig.whatsappConfigured && (
              <a
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center rounded-md bg-[#25D366] px-3 py-1.5 text-[10px] font-semibold text-white"
              >
                Chat on WhatsApp
              </a>
            )}
          </div>
        </div>
      )}

      {status === 'success' && (
        <div className="flex items-start gap-2 rounded-md border border-green-100 bg-green-50 p-3 text-[10px] text-green-700">
          <CheckCircle2 className="h-4 w-4 shrink-0" />
          <p>Thank you for your enquiry. We will respond within 1–2 business days.</p>
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#0866f5] px-4 py-2.5 text-[11px] font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-wait disabled:opacity-70"
      >
        {status === 'submitting' ? 'Sending...' : 'Send Enquiry'}
        <Send className="h-3.5 w-3.5" />
      </button>
    </form>
  );
}
