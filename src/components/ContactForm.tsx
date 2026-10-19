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

      {status === 'error' && (
        <div className="flex items-start gap-3 rounded-lg border border-red-200 bg-red-50 p-4 text-xs sm:text-sm text-red-800">
          <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#dc2626]" />
          <div>
            <p className="font-semibold text-red-900">Form submission service note:</p>
            <p className="mt-0.5 text-red-700">
              For immediate assistance, please call us directly or click below to connect on WhatsApp. Our medical supply team is ready to help.
            </p>
            {businessConfig.whatsappConfigured && (
              <a
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp mt-2.5 !py-2 !px-4 !text-xs"
              >
                Chat on WhatsApp
              </a>
            )}
          </div>
        </div>
      )}

      {status === 'success' && (
        <div className="flex items-start gap-3 rounded-lg border border-green-200 bg-green-50 p-4 text-xs sm:text-sm text-green-800">
          <CheckCircle2 className="h-5 w-5 shrink-0 text-[#16a34a]" />
          <p>Thank you for your enquiry. Our team will review your requirements and respond within 1–2 business days.</p>
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="btn-primary w-full shadow-sm"
      >
        {status === 'submitting' ? 'Submitting Enquiry...' : 'Send Enquiry'}
        <Send className="h-4 w-4" />
      </button>
    </form>
  );
}
