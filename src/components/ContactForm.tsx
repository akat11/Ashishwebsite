import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Building2,
  FileText,
  Mail,
  MessageCircle,
  Phone,
  Send,
  Tag,
  UserRound,
} from 'lucide-react';
import { buildContactEnquiryWhatsAppLink } from '@/config/business';
import { isValidEmail, isValidPhone, sanitizeString } from '@/utils/validation';

type FormStatus = 'idle' | 'submitting' | 'whatsapp_opened';
type FieldName = 'name' | 'phone' | 'email' | 'message' | 'consent';
type FieldErrors = Partial<Record<FieldName, string>>;

const ENQUIRY_PURPOSE_LABELS: Record<string, string> = {
  general: 'General Medical Supply Enquiry',
  product: 'Product Availability & Sizing',
  quotation: 'Institutional Quotation Request',
  sourcing: 'Specialized Implants Sourcing',
  support: 'After-Sales & Instrumentation Support',
};

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errors, setErrors] = useState<FieldErrors>({});
  const [whatsappUrl, setWhatsappUrl] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLFormElement>) => {
    const field = e.target.name as FieldName;
    if (field in errors) {
      setErrors((current) => ({ ...current, [field]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === 'submitting') return;

    const data = new FormData(e.currentTarget);
    const nextErrors: FieldErrors = {};

    const name = sanitizeString(data.get('name'));
    const organisation = sanitizeString(data.get('organisation'));
    const phone = sanitizeString(data.get('phone'));
    const email = sanitizeString(data.get('email'));
    const enquiryType = sanitizeString(data.get('enquiryType')) || 'general';
    const message = sanitizeString(data.get('message'));

    if (!name) {
      nextErrors.name = 'Please enter your full name.';
    }
    if (!phone) {
      nextErrors.phone = 'Please enter your phone number.';
    } else if (!isValidPhone(phone)) {
      nextErrors.phone = 'Please enter a valid phone number (e.g. +91 99355 86478).';
    }
    if (!email) {
      nextErrors.email = 'Please enter your email address.';
    } else if (!isValidEmail(email)) {
      nextErrors.email = 'Please enter a valid email address (e.g. doctor@hospital.org).';
    }
    if (!message) {
      nextErrors.message = 'Please describe your requirements or enquiry.';
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

    const purposeLabel = ENQUIRY_PURPOSE_LABELS[enquiryType] || enquiryType;
    const url = buildContactEnquiryWhatsAppLink({
      name,
      organisation,
      phone,
      email,
      enquiryPurpose: purposeLabel,
      message,
    });

    setWhatsappUrl(url);

    // Open WhatsApp in new tab / app
    try {
      window.open(url, '_blank', 'noopener,noreferrer');
    } catch {
      // Ignored: fallback URL is rendered in the notification box below
    }

    setStatus('whatsapp_opened');
  };

  const inputClasses = (hasError?: boolean) =>
    `w-full min-h-[46px] rounded-lg border bg-white py-2.5 pl-11 pr-3.5 text-sm text-[#172B3A] placeholder:text-[#9FB3C8] transition-colors focus:outline-none ${
      hasError
        ? 'border-[#dc2626] focus:border-[#dc2626] focus:ring-1 focus:ring-[#dc2626]'
        : 'border-[#E0E8EF] focus:border-[#159A9C] focus:ring-2 focus:ring-[#159A9C]/20'
    }`;

  return (
    <form noValidate onSubmit={handleSubmit} onChange={handleChange} className="mt-6 space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="label-field">
            Full Name <span className="text-[#dc2626]">*</span>
          </label>
          <div className="relative">
            <span aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 flex w-11 items-center justify-center text-[#5E6F7D]">
              <UserRound className="h-4 w-4" />
            </span>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? 'name-error' : undefined}
              className={inputClasses(Boolean(errors.name))}
              placeholder="e.g. Dr. Rajesh Sharma"
            />
          </div>
          {errors.name && (
            <p id="name-error" role="alert" className="mt-1 text-xs font-medium text-[#dc2626]">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="organisation" className="label-field">
            Hospital / Organisation
          </label>
          <div className="relative">
            <span aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 flex w-11 items-center justify-center text-[#5E6F7D]">
              <Building2 className="h-4 w-4" />
            </span>
            <input
              id="organisation"
              name="organisation"
              type="text"
              autoComplete="organization"
              className={inputClasses()}
              placeholder="e.g. Apollo / City Ortho Clinic"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="label-field">
            Phone Number <span className="text-[#dc2626]">*</span>
          </label>
          <div className="relative">
            <span aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 flex w-11 items-center justify-center text-[#5E6F7D]">
              <Phone className="h-4 w-4" />
            </span>
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={errors.phone ? 'phone-error' : undefined}
              className={inputClasses(Boolean(errors.phone))}
              placeholder="e.g. +91 98765 43210"
            />
          </div>
          {errors.phone && (
            <p id="phone-error" role="alert" className="mt-1 text-xs font-medium text-[#dc2626]">
              {errors.phone}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="label-field">
            Email Address <span className="text-[#dc2626]">*</span>
          </label>
          <div className="relative">
            <span aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 flex w-11 items-center justify-center text-[#5E6F7D]">
              <Mail className="h-4 w-4" />
            </span>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? 'email-error' : undefined}
              className={inputClasses(Boolean(errors.email))}
              placeholder="doctor@hospital.org"
            />
          </div>
          {errors.email && (
            <p id="email-error" role="alert" className="mt-1 text-xs font-medium text-[#dc2626]">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="enquiryType" className="label-field">
          Enquiry Purpose
        </label>
        <div className="relative">
          <span aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 flex w-11 items-center justify-center text-[#5E6F7D]">
            <Tag className="h-4 w-4" />
          </span>
          <select
            id="enquiryType"
            name="enquiryType"
            className={`${inputClasses()} appearance-none pr-8 cursor-pointer`}
          >
            <option value="general">General Medical Supply Enquiry</option>
            <option value="product">Product Availability &amp; Sizing</option>
            <option value="quotation">Institutional Quotation Request</option>
            <option value="sourcing">Specialized Implants Sourcing</option>
            <option value="support">After-Sales &amp; Instrumentation Support</option>
          </select>
          <span aria-hidden="true" className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-[#5E6F7D]">
            ▼
          </span>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="label-field">
          Message &amp; Requirements <span className="text-[#dc2626]">*</span>
        </label>
        <div className="relative">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-0 top-0 flex w-11 justify-center pt-3 text-[#5E6F7D]"
          >
            <FileText className="h-4 w-4" />
          </span>
          <textarea
            id="message"
            name="message"
            rows={4}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? 'message-error' : undefined}
            className={`${inputClasses(Boolean(errors.message))} min-h-[110px] resize-y py-2.5 pl-11`}
            placeholder="Please detail your required products, sizes, quantities, and delivery location..."
          />
        </div>
        {errors.message && (
          <p id="message-error" role="alert" className="mt-1 text-xs font-medium text-[#dc2626]">
            {errors.message}
          </p>
        )}
      </div>

      <div>
        <div className="flex items-start gap-3">
          <input
            id="consent"
            name="consent"
            type="checkbox"
            aria-invalid={Boolean(errors.consent)}
            aria-describedby={errors.consent ? 'consent-error' : undefined}
            className="mt-1 h-4 w-4 shrink-0 rounded border-[#E0E8EF] text-[#123B66] focus:ring-[#159A9C]"
          />
          <label htmlFor="consent" className="text-xs sm:text-sm leading-relaxed text-[#5E6F7D]">
            I consent to Vinayak Surgicals contacting me regarding this enquiry, in accordance with the{' '}
            <Link to="/privacy-policy" className="font-semibold text-[#123B66] hover:underline">
              Privacy Policy
            </Link>
            .
          </label>
        </div>
        {errors.consent && (
          <p id="consent-error" role="alert" className="mt-1 text-xs font-medium text-[#dc2626]">
            {errors.consent}
          </p>
        )}
      </div>

      {/* Submission status & instructions */}
      {status === 'whatsapp_opened' && (
        <div className="rounded-xl border border-emerald-300 bg-emerald-50/80 p-4 sm:p-5 text-xs sm:text-sm text-[#062D56] space-y-3 animate-fade-in">
          <div className="flex items-start gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xs">
              <MessageCircle className="h-5 w-5" />
            </div>
            <div className="space-y-1">
              <p className="font-bold text-[#062D56] text-sm sm:text-base">
                WhatsApp Ready — Press Send in WhatsApp
              </p>
              <p className="text-slate-600 leading-relaxed text-xs sm:text-sm">
                Your enquiry has been formatted and loaded into WhatsApp. <strong>Please click &ldquo;Send&rdquo; in WhatsApp</strong> to transmit your requirements directly to our clinical supply desk at <strong>+91 99355 86478</strong>.
              </p>
            </div>
          </div>

          <div className="pt-2 border-t border-emerald-200/80 flex flex-wrap items-center justify-between gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-white text-xs sm:text-sm font-bold transition-all shadow-xs"
            >
              <MessageCircle className="h-4 w-4" />
              <span>Click Here if WhatsApp Didn&apos;t Open Automatically</span>
            </a>
            <button
              type="button"
              onClick={() => setStatus('idle')}
              className="text-xs text-slate-500 hover:text-[#0875D1] font-semibold underline underline-offset-2 transition-colors cursor-pointer"
            >
              Edit Form / Send Another
            </button>
          </div>
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="btn-primary w-full shadow-sm flex items-center justify-center gap-2 !py-3"
      >
        <MessageCircle className="h-4 w-4 text-[#25D366]" />
        <span>
          {status === 'submitting'
            ? 'Preparing WhatsApp Message...'
            : status === 'whatsapp_opened'
            ? 'Re-Open WhatsApp with Enquiry'
            : 'Send Enquiry via WhatsApp'}
        </span>
        <Send className="h-3.5 w-3.5 opacity-70" />
      </button>
    </form>
  );
}
