import { useState } from 'react';
import { Send, Plus, Trash2, AlertCircle } from 'lucide-react';
import { businessConfig, buildWhatsAppLink } from '@/config/business';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

interface QuoteLine {
  product: string;
  quantity: string;
  specification: string;
}

export default function QuoteForm() {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [lines, setLines] = useState<QuoteLine[]>([
    { product: '', quantity: '', specification: '' },
  ]);

  const addLine = () => {
    setLines([...lines, { product: '', quantity: '', specification: '' }]);
  };

  const removeLine = (idx: number) => {
    setLines(lines.filter((_, i) => i !== idx));
  };

  const updateLine = (idx: number, field: keyof QuoteLine, value: string) => {
    setLines(lines.map((l, i) => (i === idx ? { ...l, [field]: value } : l)));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    // Form submission requires a backend service to actually send the enquiry.
    setTimeout(() => {
      setStatus('error');
    }, 800);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
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
              className="input-field"
              placeholder="City, State (e.g. Kanpur, UP)"
            />
          </div>
        </div>
      </div>

      {/* Product lines */}
      <div className="space-y-4 pt-2">
        <div className="flex items-center justify-between">
          <h3 className="font-display text-sm font-bold text-[#123B66] uppercase tracking-wider">
            Required Implants &amp; Fixators
          </h3>
          <button
            type="button"
            onClick={addLine}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#159A9C] hover:text-[#117c7e] transition-colors"
          >
            <Plus className="h-4 w-4" />
            Add Another Product
          </button>
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
        <div className="flex items-start gap-3 rounded-xl bg-red-50 border border-red-200 p-4 text-xs sm:text-sm text-red-800">
          <AlertCircle className="h-5 w-5 shrink-0 mt-0.5 text-[#dc2626]" />
          <div>
            <p className="font-semibold text-red-900">Quotation submission note:</p>
            <p className="mt-0.5 text-red-700">
              Please contact our sales desk directly via phone or WhatsApp with your requirements list. Our team will prepare and send a customized quotation promptly.
            </p>
            {businessConfig.whatsappConfigured && (
              <a
                href={buildWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp mt-2.5 !py-2 !px-4 !text-xs"
              >
                Send Request via WhatsApp
              </a>
            )}
          </div>
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="btn-primary w-full shadow-sm"
      >
        {status === 'submitting' ? 'Submitting Request...' : 'Submit Quotation Request'}
        <Send className="h-4 w-4" />
      </button>
    </form>
  );
}
