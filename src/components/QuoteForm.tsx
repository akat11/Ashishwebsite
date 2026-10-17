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
    // Until configured, show an informational message.
    setTimeout(() => {
      setStatus('error');
    }, 800);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Organisation details */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold text-navy-700 uppercase tracking-wider">Organisation Details</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="orgName" className="label-field">Organisation Name *</label>
            <input id="orgName" name="orgName" type="text" required className="input-field" placeholder="Hospital, clinic or institution name" />
          </div>
          <div>
            <label htmlFor="contactPerson" className="label-field">Contact Person *</label>
            <input id="contactPerson" name="contactPerson" type="text" required className="input-field" placeholder="Full name" />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="dept" className="label-field">Department</label>
            <input id="dept" name="dept" type="text" className="input-field" placeholder="e.g. Procurement, Surgery, OT" />
          </div>
          <div>
            <label htmlFor="contactPhone" className="label-field">Phone *</label>
            <input id="contactPhone" name="contactPhone" type="tel" required className="input-field" placeholder="Phone number" />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="contactEmail" className="label-field">Email *</label>
            <input id="contactEmail" name="contactEmail" type="email" required className="input-field" placeholder="Email address" />
          </div>
          <div>
            <label htmlFor="destination" className="label-field">Delivery Destination</label>
            <input id="destination" name="destination" type="text" className="input-field" placeholder="City, State" />
          </div>
        </div>
      </div>

      {/* Product lines */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-navy-700 uppercase tracking-wider">Product Requirements</h3>
          <button type="button" onClick={addLine} className="flex items-center gap-1 text-xs font-medium text-medical-600 hover:text-medical-700">
            <Plus className="h-4 w-4" />
            Add Product
          </button>
        </div>

        {lines.map((line, idx) => (
          <div key={idx} className="rounded-md border border-navy-100 p-4 bg-navy-50/50">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold text-navy-500">Product {idx + 1}</span>
              {lines.length > 1 && (
                <button type="button" onClick={() => removeLine(idx)} className="text-navy-400 hover:text-error-500">
                  <Trash2 className="h-4 w-4" />
                </button>
              )}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="label-field">Product Name *</label>
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
                <label className="label-field">Quantity</label>
                <input
                  type="text"
                  value={line.quantity}
                  onChange={(e) => updateLine(idx, 'quantity', e.target.value)}
                  className="input-field"
                  placeholder="e.g. 10"
                />
              </div>
              <div>
                <label className="label-field">Specification</label>
                <input
                  type="text"
                  value={line.specification}
                  onChange={(e) => updateLine(idx, 'specification', e.target.value)}
                  className="input-field"
                  placeholder="e.g. 5 Holes Right, SS316L / Titanium"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Additional requirements */}
      <div>
        <label htmlFor="additional" className="label-field">Additional Requirements</label>
        <textarea id="additional" name="additional" rows={3} className="input-field" placeholder="Any other specifications, delivery timeline, or notes..." />
      </div>

      <div className="flex items-start gap-2">
        <input id="consent" name="consent" type="checkbox" required className="mt-1 h-4 w-4 rounded border-navy-300 text-medical-600 focus:ring-medical-500" />
        <label htmlFor="consent" className="text-sm text-navy-600">
          I consent to Vinyanak Surgicals contacting me regarding this quotation request.
        </label>
      </div>

      {status === 'error' && (
        <div className="flex items-start gap-3 rounded-md bg-error-50 border border-error-100 p-4 text-sm text-error-600">
          <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" />
          <div>
            <p className="font-medium">Form submission is not yet configured.</p>
            <p className="mt-1">
              Please use WhatsApp or call us directly with your requirements. We will prepare your quotation promptly.
            </p>
            {businessConfig.whatsappConfigured && (
              <a href={buildWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="btn-whatsapp mt-3 !py-2 !text-xs">
                Chat on WhatsApp
              </a>
            )}
          </div>
        </div>
      )}

      <button type="submit" disabled={status === 'submitting'} className="btn-primary w-full">
        {status === 'submitting' ? 'Submitting...' : 'Submit Quotation Request'}
        <Send className="h-4 w-4" />
      </button>
    </form>
  );
}
