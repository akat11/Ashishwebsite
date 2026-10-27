import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Plus, Trash2, RotateCcw, CheckCircle2, MessageCircle } from 'lucide-react';
import { businessConfig, buildQuoteEnquiryWhatsAppLink } from '@/config/business';
import { isValidEmail, isValidPhone } from '@/utils/validation';

type FormStatus = 'idle' | 'submitting' | 'whatsapp_opened';

interface QuoteLine {
  product: string;
  quantity: string;
  specification: string;
}

export default function QuoteForm() {
  const [searchParams] = useSearchParams();
  const prefilledProduct = searchParams.get('product') || '';
  const prefilledCode = searchParams.get('code') || '';
  const prefilledCategory = searchParams.get('category') || '';

  const [status, setStatus] = useState<FormStatus>('idle');
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [whatsappUrl, setWhatsappUrl] = useState<string>('');
  const [formData, setFormData] = useState({
    orgName: '',
    contactPerson: '',
    dept: '',
    contactPhone: '',
    contactEmail: '',
    destination: '',
    additional: '',
  });

  const [lines, setLines] = useState<QuoteLine[]>(() => {
    if (prefilledProduct || prefilledCode) {
      return [
        {
          product: prefilledProduct,
          quantity: '1',
          specification: prefilledCode
            ? `Catalogue Code: ${prefilledCode}`
            : prefilledCategory
            ? `Category: ${prefilledCategory}`
            : '',
        },
      ];
    }
    return [{ product: '', quantity: '', specification: '' }];
  });

  useEffect(() => {
    if (prefilledProduct || prefilledCode) {
      setLines([
        {
          product: prefilledProduct,
          quantity: '1',
          specification: prefilledCode
            ? `Catalogue Code: ${prefilledCode}`
            : prefilledCategory
            ? `Category: ${prefilledCategory}`
            : '',
        },
      ]);
    }
  }, [prefilledProduct, prefilledCode, prefilledCategory]);

  const addLine = () => {
    setLines((prev) => [...prev, { product: '', quantity: '', specification: '' }]);
  };

  const removeLine = (idx: number) => {
    setLines((prev) => prev.filter((_, i) => i !== idx));
  };

  const clearLines = () => {
    setLines([{ product: '', quantity: '', specification: '' }]);
  };

  const updateLine = (idx: number, field: keyof QuoteLine, value: string) => {
    setLines((prev) => prev.map((l, i) => (i === idx ? { ...l, [field]: value } : l)));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === 'submitting') return;

    const nextErrors: Record<string, string> = {};
    if (!formData.orgName.trim()) nextErrors.orgName = 'Please enter your organisation or hospital name.';
    if (!formData.contactPerson.trim()) nextErrors.contactPerson = 'Please enter the contact person name.';
    if (!formData.contactPhone.trim()) {
      nextErrors.contactPhone = 'Please enter your phone number.';
    } else if (!isValidPhone(formData.contactPhone)) {
      nextErrors.contactPhone = 'Please enter a valid phone number (at least 7 to 15 digits).';
    }
    if (!formData.contactEmail.trim()) {
      nextErrors.contactEmail = 'Please enter your email address.';
    } else if (!isValidEmail(formData.contactEmail)) {
      nextErrors.contactEmail = 'Please enter a valid email address.';
    }

    const validItems = lines.filter((l) => l.product.trim());
    if (validItems.length === 0) {
      nextErrors.products = 'Please specify at least one product for quotation.';
    }

    setFormErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus('submitting');

    const url = buildQuoteEnquiryWhatsAppLink({
      orgName: formData.orgName,
      contactPerson: formData.contactPerson,
      contactPhone: formData.contactPhone,
      contactEmail: formData.contactEmail,
      dept: formData.dept,
      destination: formData.destination,
      additional: formData.additional,
      items: validItems,
    });

    setWhatsappUrl(url);

    try {
      window.open(url, '_blank', 'noopener,noreferrer');
    } catch {
      // Ignored: fallback URL is rendered in the notification box below
    }

    setStatus('whatsapp_opened');
  };

  const emailSubject = encodeURIComponent(`Institutional Quotation Request — ${formData.orgName || 'Hospital/Clinic'}`);
  const emailBody = encodeURIComponent(
    `Dear Vinayak Surgicals Sales Team,\n\n` +
    `Please provide a formal itemized quotation for the following requirements:\n\n` +
    `--- INSTITUTION & CONTACT ---\n` +
    `Organisation: ${formData.orgName || 'N/A'}\n` +
    `Contact Person: ${formData.contactPerson || 'N/A'}\n` +
    `Department: ${formData.dept || 'N/A'}\n` +
    `Phone: ${formData.contactPhone || 'N/A'}\n` +
    `Email: ${formData.contactEmail || 'N/A'}\n` +
    `Delivery Destination: ${formData.destination || 'N/A'}\n\n` +
    `--- REQUIRED ITEMS ---\n` +
    lines.filter(l => l.product.trim()).map((l, i) => `${i + 1}. Product: ${l.product}\n   Quantity: ${l.quantity || 'TBD'}\n   Spec/Code: ${l.specification || 'Standard'}`).join('\n\n') +
    `\n\n--- ADDITIONAL NOTES ---\n` +
    `${formData.additional || 'None'}\n\n` +
    `Thank you.`
  );

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Prefill indicator banner if navigated from a product page */}
      {prefilledProduct && (
        <div className="flex items-center justify-between rounded-xl bg-[#e6f4f4] border border-[#159A9C]/30 px-4 py-3 text-xs sm:text-sm text-[#0d5c5d]">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-[#159A9C] shrink-0" />
            <span>
              Pre-filled from product catalogue:{' '}
              <strong className="text-[#123B66]">{prefilledProduct}</strong>
              {prefilledCode ? ` (Code: ${prefilledCode})` : ''}
            </span>
          </div>
          <button
            type="button"
            onClick={clearLines}
            className="text-xs font-semibold text-[#159A9C] hover:underline shrink-0 ml-2"
          >
            Reset
          </button>
        </div>
      )}

      {/* Organisation details */}
      <div className="space-y-4">
        <h3 className="font-display text-sm font-bold text-[#123B66] uppercase tracking-wider">
          Organisation &amp; Contact Details
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="orgName" className="label-field">
              Organisation Name <span className="text-[#dc2626]">*</span>
            </label>
            <input
              id="orgName"
              name="orgName"
              type="text"
              required
              value={formData.orgName}
              onChange={handleInputChange}
              className={`input-field ${formErrors.orgName ? '!border-[#dc2626]' : ''}`}
              placeholder="Hospital, clinic or institution"
            />
            {formErrors.orgName && (
              <p className="mt-1 text-xs font-medium text-[#dc2626]">{formErrors.orgName}</p>
            )}
          </div>
          <div>
            <label htmlFor="contactPerson" className="label-field">
              Contact Person <span className="text-[#dc2626]">*</span>
            </label>
            <input
              id="contactPerson"
              name="contactPerson"
              type="text"
              required
              value={formData.contactPerson}
              onChange={handleInputChange}
              className={`input-field ${formErrors.contactPerson ? '!border-[#dc2626]' : ''}`}
              placeholder="Doctor or Procurement Lead"
            />
            {formErrors.contactPerson && (
              <p className="mt-1 text-xs font-medium text-[#dc2626]">{formErrors.contactPerson}</p>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="dept" className="label-field">
              Department
            </label>
            <input
              id="dept"
              name="dept"
              type="text"
              value={formData.dept}
              onChange={handleInputChange}
              className="input-field"
              placeholder="e.g. Orthopaedics, OT, Central Stores"
            />
          </div>
          <div>
            <label htmlFor="contactPhone" className="label-field">
              Phone Number <span className="text-[#dc2626]">*</span>
            </label>
            <input
              id="contactPhone"
              name="contactPhone"
              type="tel"
              required
              value={formData.contactPhone}
              onChange={handleInputChange}
              className={`input-field ${formErrors.contactPhone ? '!border-[#dc2626]' : ''}`}
              placeholder="+91 98765 43210"
            />
            {formErrors.contactPhone && (
              <p className="mt-1 text-xs font-medium text-[#dc2626]">{formErrors.contactPhone}</p>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="contactEmail" className="label-field">
              Email Address <span className="text-[#dc2626]">*</span>
            </label>
            <input
              id="contactEmail"
              name="contactEmail"
              type="email"
              required
              value={formData.contactEmail}
              onChange={handleInputChange}
              className={`input-field ${formErrors.contactEmail ? '!border-[#dc2626]' : ''}`}
              placeholder="procurement@hospital.org"
            />
            {formErrors.contactEmail && (
              <p className="mt-1 text-xs font-medium text-[#dc2626]">{formErrors.contactEmail}</p>
            )}
          </div>
          <div>
            <label htmlFor="destination" className="label-field">
              Delivery Destination
            </label>
            <input
              id="destination"
              name="destination"
              type="text"
              value={formData.destination}
              onChange={handleInputChange}
              className="input-field"
              placeholder="City, State (e.g. Kanpur, UP)"
            />
          </div>
        </div>
      </div>

      {/* Product lines */}
      <div className="space-y-4 pt-2">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <h3 className="font-display text-sm font-bold text-[#123B66] uppercase tracking-wider">
              Required Implants &amp; Fixators
            </h3>
            <span className="rounded-full bg-[#E0E8EF] px-2 py-0.5 text-[11px] font-bold text-[#123B66]">
              {lines.length} {lines.length === 1 ? 'item' : 'items'}
            </span>
          </div>
          <div className="flex items-center gap-3">
            {(lines.length > 1 || lines[0].product) && (
              <button
                type="button"
                onClick={clearLines}
                className="inline-flex items-center gap-1 text-xs text-[#5E6F7D] hover:text-[#dc2626] transition-colors"
                title="Reset all lines"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                <span>Reset</span>
              </button>
            )}
            <button
              type="button"
              onClick={addLine}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#159A9C] hover:text-[#117c7e] transition-colors"
            >
              <Plus className="h-4 w-4" />
              <span>Add Another Product</span>
            </button>
          </div>
        </div>

        {formErrors.products && (
          <p role="alert" className="text-xs font-medium text-[#dc2626] bg-red-50 border border-red-200 rounded-lg p-2.5">
            {formErrors.products}
          </p>
        )}

        {lines.map((line, idx) => (
          <div key={idx} className="rounded-xl border border-[#E0E8EF] p-4 bg-[#F4F8FB]/80">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-[#123B66] uppercase tracking-wider">
                Product Line Item #{idx + 1}
              </span>
              {lines.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeLine(idx)}
                  className="text-[#5E6F7D] hover:text-[#dc2626] transition-colors p-1"
                  aria-label={`Remove product line ${idx + 1}`}
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              )}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="label-field">
                  Product Name <span className="text-[#dc2626]">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={line.product}
                  onChange={(e) => updateLine(idx, 'product', e.target.value)}
                  className="input-field"
                  placeholder="e.g. Distal Radius Volar Plate 2.4mm"
                />
              </div>
              <div>
                <label className="label-field">Estimated Quantity</label>
                <input
                  type="text"
                  value={line.quantity}
                  onChange={(e) => updateLine(idx, 'quantity', e.target.value)}
                  className="input-field"
                  placeholder="e.g. 10 sets"
                />
              </div>
              <div>
                <label className="label-field">Specification / Material</label>
                <input
                  type="text"
                  value={line.specification}
                  onChange={(e) => updateLine(idx, 'specification', e.target.value)}
                  className="input-field"
                  placeholder="e.g. 5 Holes Left, SS 316L / Titanium"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Additional requirements */}
      <div>
        <label htmlFor="additional" className="label-field">
          Additional Requirements or Special Notes
        </label>
        <textarea
          id="additional"
          name="additional"
          rows={3}
          value={formData.additional}
          onChange={handleInputChange}
          className="input-field min-h-[90px] resize-y"
          placeholder="Any custom lengths, trial instruments, delivery timelines, or tender specifications..."
        />
      </div>

      <div className="flex items-start gap-3">
        <input
          id="consent"
          name="consent"
          type="checkbox"
          required
          className="mt-1 h-4 w-4 rounded border-[#E0E8EF] text-[#123B66] focus:ring-[#159A9C]"
        />
        <label htmlFor="consent" className="text-xs sm:text-sm text-[#5E6F7D] leading-relaxed">
          I consent to Vinayak Surgicals contacting me with product availability, specifications, and quotation pricing.
        </label>
      </div>

      {status === 'whatsapp_opened' && (
        <div className="rounded-xl border border-emerald-300 bg-emerald-50/80 p-4 sm:p-5 text-xs sm:text-sm text-[#062D56] space-y-3 animate-fade-in">
          <div className="flex items-start gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xs">
              <MessageCircle className="h-5 w-5" />
            </div>
            <div className="space-y-1">
              <p className="font-bold text-[#062D56] text-sm sm:text-base">
                Quotation Requisition Prepared in WhatsApp
              </p>
              <p className="text-slate-600 leading-relaxed text-xs sm:text-sm">
                Your itemized requisition has been formatted and loaded into WhatsApp. <strong>Please click &ldquo;Send&rdquo; in WhatsApp</strong> to transmit your requirements directly to our sales desk at <strong>+91 99355 86478</strong>.
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
            <div className="flex items-center gap-2">
              <a
                href={`mailto:${businessConfig.email}?subject=${emailSubject}&body=${emailBody}`}
                className="text-xs text-slate-600 hover:text-[#0875D1] font-semibold underline underline-offset-2 transition-colors"
              >
                Or Send via Email Client
              </a>
              <span className="text-slate-300">|</span>
              <button
                type="button"
                onClick={() => setStatus('idle')}
                className="text-xs text-slate-500 hover:text-[#0875D1] font-semibold underline underline-offset-2 transition-colors cursor-pointer"
              >
                Edit Requisition
              </button>
            </div>
          </div>
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="btn-primary w-full shadow-sm inline-flex items-center justify-center gap-2 !bg-[#25D366] hover:!bg-[#20ba59]"
      >
        <MessageCircle className="h-5 w-5" />
        <span>
          {status === 'submitting'
            ? 'Preparing WhatsApp Quotation...'
            : status === 'whatsapp_opened'
            ? 'Re-Open WhatsApp with Quotation'
            : 'Submit Quotation Request via WhatsApp'}
        </span>
      </button>
    </form>
  );
}
