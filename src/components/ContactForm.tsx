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
type FieldName = 'name' | 'phone' | 'email' | 'message' | 'consent';
type FieldErrors = Partial<Record<FieldName, string>>;

const inputClassName =
  'min-h-10 w-full rounded-md border border-slate-200 bg-white py-2 pl-14 pr-3 text-xs text-slate-800 placeholder:text-slate-400 transition-colors focus:border-[#0866f5] focus:outline-none focus:ring-1 focus:ring-[#0866f5]';

const requiredMark = <span style={{ color: '#dc2626' }}>*</span>;

const validationMessageClass = 'mt-1 text-xs font-medium';
const fieldIconSlotClassName =
  'pointer-events-none absolute inset-y-0 left-0 flex w-10 items-center justify-center text-slate-500';

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errors, setErrors] = useState<FieldErrors>({});

  const handleChange = (e: React.ChangeEvent<HTMLFormElement>) => {
    const field = e.target.name as FieldName;
    if (field in errors) {
      setErrors((current) => ({ ...current, [field]: undefined }));
    }
    if (status === 'error') setStatus('idle');
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const nextErrors: FieldErrors = {};

    if (!String(data.get('name') ?? '').trim()) {
      nextErrors.name = 'Please enter your name.';
    }
    if (!String(data.get('phone') ?? '').trim()) {
      nextErrors.phone = 'Please enter your phone number.';
    }
    const email = String(data.get('email') ?? '').trim();
    if (!email) {
      nextErrors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = 'Please enter a valid email address.';
    }
    if (!String(data.get('message') ?? '').trim()) {
      nextErrors.message = 'Please describe your requirements.';
    }
    if (data.get('consent') !== 'on') {
      nextErrors.consent = 'Please provide consent to continue.';
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus('idle');
      return;
    }

    setStatus('submitting');

    // Without a configured backend, do not claim that an enquiry was sent.
    setTimeout(() => {
      setStatus('error');
    }, 800);
  };

  const fieldClass = (field: FieldName) =>
    `${inputClassName} ${errors[field] ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`;

  return (
    <form noValidate onSubmit={handleSubmit} onChange={handleChange} className="mt-5 space-y-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-xs font-semibold text-slate-700">
            Name {requiredMark}
          </label>
          <div className="relative">
            <span aria-hidden="true" className={fieldIconSlotClassName}>
              <UserRound className="h-4 w-4" />
            </span>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? 'name-error' : undefined}
              className={fieldClass('name')}
              placeholder="Your full name"
            />
          </div>
          {errors.name && <p id="name-error" role="alert" className={validationMessageClass} style={{ color: '#dc2626' }}>{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="organisation" className="mb-1.5 block text-xs font-semibold text-slate-700">
            Organisation
          </label>
          <div className="relative">
            <span aria-hidden="true" className={fieldIconSlotClassName}>
              <Building2 className="h-4 w-4" />
            </span>
            <input
              id="organisation"
              name="organisation"
              type="text"
              autoComplete="organization"
              className={inputClassName}
              placeholder="Hospital or clinic name"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-xs font-semibold text-slate-700">
            Phone {requiredMark}
          </label>
          <div className="relative">
            <span aria-hidden="true" className={fieldIconSlotClassName}>
              <Phone className="h-4 w-4" />
            </span>
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={errors.phone ? 'phone-error' : undefined}
              className={fieldClass('phone')}
              placeholder="Your phone number"
            />
          </div>
          {errors.phone && <p id="phone-error" role="alert" className={validationMessageClass} style={{ color: '#dc2626' }}>{errors.phone}</p>}
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-xs font-semibold text-slate-700">
            Email {requiredMark}
          </label>
          <div className="relative">
            <span aria-hidden="true" className={fieldIconSlotClassName}>
              <Mail className="h-4 w-4" />
            </span>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? 'email-error' : undefined}
              className={fieldClass('email')}
              placeholder="Your email address"
            />
          </div>
          {errors.email && <p id="email-error" role="alert" className={validationMessageClass} style={{ color: '#dc2626' }}>{errors.email}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="enquiryType" className="mb-1.5 block text-xs font-semibold text-slate-700">
          Enquiry Type
        </label>
        <div className="relative">
          <span aria-hidden="true" className={fieldIconSlotClassName}>
            <Tag className="h-4 w-4" />
          </span>
          <select
            id="enquiryType"
            name="enquiryType"
            className={`${inputClassName} appearance-none`}
          >
            <option value="general">General Enquiry</option>
            <option value="product">Product Availability</option>
            <option value="quotation">Quotation Request</option>
            <option value="institutional">Institutional Supply</option>
            <option value="sourcing">Product Sourcing</option>
            <option value="support">Support / After-Sales</option>
          </select>
          <span aria-hidden="true" className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-600">
            ▾
          </span>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-xs font-semibold text-slate-700">
          Message {requiredMark}
        </label>
        <div className="relative">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-0 top-0 flex w-10 justify-center pt-3 text-slate-500"
          >
            <FileText className="h-4 w-4" />
          </span>
          <textarea
            id="message"
            name="message"
            rows={4}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? 'message-error' : undefined}
            className={`${fieldClass('message')} min-h-0 resize-y py-2.5 pl-14`}
            placeholder="Describe your requirements..."
          />
        </div>
        {errors.message && <p id="message-error" role="alert" className={validationMessageClass} style={{ color: '#dc2626' }}>{errors.message}</p>}
      </div>

      <div>
        <div className="flex items-start gap-2.5">
          <input
            id="consent"
            name="consent"
            type="checkbox"
            aria-invalid={Boolean(errors.consent)}
            aria-describedby={errors.consent ? 'consent-error' : undefined}
            className="mt-0.5 h-4 w-4 shrink-0 rounded border-slate-300 text-[#0866f5] focus:ring-[#0866f5]"
          />
          <label htmlFor="consent" className="text-xs leading-relaxed text-slate-600">
            I consent to Vinyanak Surgicals contacting me regarding this enquiry, in accordance with
            the{' '}
            <Link to="/privacy-policy" className="font-medium text-[#0866f5] underline">
              Privacy Policy
            </Link>
            .
          </label>
        </div>
        {errors.consent && <p id="consent-error" role="alert" className={validationMessageClass} style={{ color: '#dc2626' }}>{errors.consent}</p>}
      </div>

      {status === 'error' && (
        <div className="flex items-start gap-2.5 rounded-md border border-red-100 bg-red-50 p-3 text-xs text-red-700">
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
                className="mt-2 inline-flex items-center rounded-md bg-[#25D366] px-3 py-1.5 text-xs font-semibold text-white"
              >
                Chat on WhatsApp
              </a>
            )}
          </div>
        </div>
      )}

      {status === 'success' && (
        <div className="flex items-start gap-2.5 rounded-md border border-green-100 bg-green-50 p-3 text-xs text-green-700">
          <CheckCircle2 className="h-4 w-4 shrink-0" />
          <p>Thank you for your enquiry. We will respond within 1–2 business days.</p>
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-md bg-[#0866f5] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-wait disabled:opacity-70"
      >
        {status === 'submitting' ? 'Sending...' : 'Send Enquiry'}
        <Send className="h-4 w-4" />
      </button>
    </form>
  );
}
