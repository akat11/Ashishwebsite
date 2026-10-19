import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Send, Plus, Trash2, AlertCircle, RotateCcw, Mail, CheckCircle2 } from 'lucide-react';
import { businessConfig, buildWhatsAppLink } from '@/config/business';

type FormStatus = 'idle' | 'submitting' | 'submitted' | 'error';

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
  };

  const generateEnquirySummary = () => {
    const validLines = lines.filter((l) => l.product.trim());
    const itemsText = validLines.length > 0
      ? validLines.map((l, i) => `${i + 1}. ${l.product} | Qty: ${l.quantity || 'TBD'} | Spec: ${l.specification || 'Standard'}`).join('\n')
      : 'No specific items specified';

    return `*Quotation Request — Vinyanak Surgicals*\n\n` +
      `*Facility:* ${formData.orgName || 'N/A'}\n` +
      `*Contact Person:* ${formData.contactPerson || 'N/A'}\n` +
      `*Phone:* ${formData.contactPhone || 'N/A'}\n` +
      `*Email:* ${formData.contactEmail || 'N/A'}\n` +
      `*Department:* ${formData.dept || 'N/A'}\n` +
      `*Destination:* ${formData.destination || 'N/A'}\n\n` +
      `*Required Products:*\n${itemsText}\n\n` +
      (formData.additional ? `*Additional Notes:*\n${formData.additional}` : '');
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    // Backend API hook simulation with fallback instructions
    setTimeout(() => {
      setStatus('error');
    }, 600);
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
              className="input-field"
              placeholder="Hospital, clinic or institution"
            />
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
              className="input-field"
              placeholder="Doctor or Procurement Lead"
            />
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
              className="input-field"
              placeholder="+91 98765 43210"
            />
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
              className="input-field"
              placeholder="procurement@hospital.org"
            />
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

      {status === 'error' && (
        <div className="flex items-start gap-3 rounded-xl bg-amber-50 border border-amber-200 p-4 text-xs sm:text-sm text-amber-900">
          <AlertCircle className="h-5 w-5 shrink-0 mt-0.5 text-amber-600" />
          <div className="space-y-2">
            <p className="font-semibold text-amber-900">Direct Procurement Routing:</p>
            <p className="text-amber-800 leading-relaxed">
              To guarantee immediate processing without email server delays, please forward your quotation requirements directly to our sales desk via Email or WhatsApp. All your form details are pre-packaged:
            </p>
            <div className="flex flex-wrap gap-2.5 pt-1">
              <a
                href={`mailto:${businessConfig.email}?subject=${emailSubject}&body=${emailBody}`}
                className="btn-primary !bg-[#123B66] hover:!bg-[#0c2642] !py-2 !px-4 !text-xs inline-flex items-center gap-1.5"
              >
                <Mail className="h-3.5 w-3.5" />
                <span>Submit via Official Email</span>
              </a>
              {businessConfig.whatsappConfigured && (
                <a
                  href={buildWhatsAppLink(generateEnquirySummary())}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp !py-2 !px-4 !text-xs inline-flex items-center gap-1.5"
                >
                  <span>Submit via WhatsApp</span>
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="btn-primary w-full shadow-sm"
      >
        {status === 'submitting' ? 'Processing Request...' : 'Submit Quotation Request'}
        <Send className="h-4 w-4" />
      </button>
    </form>
  );
}
