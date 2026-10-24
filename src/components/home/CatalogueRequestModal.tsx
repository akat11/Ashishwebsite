import { useState, useCallback } from 'react';
import { X, Send, CheckCircle2, ShieldCheck, Mail, Phone, Building, User } from 'lucide-react';
import type { Product } from '@/data/products';
import { useModalA11y } from '@/hooks/useModalA11y';

interface CatalogueRequestModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function CatalogueRequestModal({
  product,
  isOpen,
  onClose,
}: CatalogueRequestModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    requirementType: 'Hospital Procurement',
  });

  const handleResetAndClose = useCallback(() => {
    setSubmitted(false);
    onClose();
  }, [onClose]);

  useModalA11y(isOpen, handleResetAndClose);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate instant dispatch acknowledgment
    setSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#031525]/80 backdrop-blur-md transition-all animate-fade-in"
      onClick={handleResetAndClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="catalogue-modal-title"
    >
      <div
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden text-slate-800 animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-gradient-to-r from-[#062D56] to-[#0875D1] text-white p-5 sm:p-6 relative border-b border-white/10">
          <button
            type="button"
            onClick={handleResetAndClose}
            className="absolute top-4 right-4 p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white/90 hover:text-white transition-colors cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-[#12C8E8]"
            aria-label="Close dialogue"
          >
            <X className="h-5 w-5 pointer-events-none" />
          </button>
          <div className="flex items-center gap-2 text-[#12C8E8] text-xs font-bold uppercase tracking-wider mb-2">
            <ShieldCheck className="h-4 w-4 shrink-0" />
            <span>Orthopaedic Technical Documentation Desk</span>
          </div>
          <h3
            id="catalogue-modal-title"
            className="font-display text-xl sm:text-2xl font-extrabold text-white !text-white leading-snug tracking-tight"
            style={{ color: '#ffffff' }}
          >
            Request Technical Monograph &amp; Catalogue
          </h3>
          {product ? (
            <div className="mt-3 p-2.5 rounded-lg bg-white/10 border border-white/15">
              <span className="text-[11px] font-mono font-bold text-[#12C8E8] block uppercase tracking-wider">
                Requested Implant System:
              </span>
              <p
                className="text-sm font-bold text-white !text-white mt-0.5 break-words"
                style={{ color: '#ffffff' }}
              >
                {product.name}
              </p>
            </div>
          ) : (
            <p className="mt-1.5 text-xs text-slate-200">
              Complete Vinayak Surgicals Trauma &amp; Fixation Systems Catalogue
            </p>
          )}
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <h4 className="font-display text-lg font-bold text-[#062D56]">
              Request Received Successfully
            </h4>
            <p className="text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
              Our clinical logistics desk has logged your request for{' '}
              <strong className="text-slate-900">{product ? product.name : 'Catalogue'}</strong>. Our Kanpur headquarters team will send the official product monograph and institutional pricing directly to your contact within 1–2 business hours.
            </p>
            <button
              onClick={handleResetAndClose}
              className="btn-cyan mt-4 w-full"
            >
              <span>Done</span>
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div>
              <label className="label-field text-xs">
                Full Name / Doctor Name <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <User className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                <input
                  type="text"
                  required
                  placeholder="Dr. Rajesh Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="input-field pl-9 text-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="label-field text-xs">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                  <input
                    type="email"
                    required
                    placeholder="doctor@hospital.org"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="input-field pl-9 text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="label-field text-xs">
                  Mobile / WhatsApp <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="input-field pl-9 text-sm"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="label-field text-xs">Hospital / Organization</label>
                <div className="relative">
                  <Building className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Apollo / Fortis / Clinic"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    className="input-field pl-9 text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="label-field text-xs">Requirement Type</label>
                <select
                  value={formData.requirementType}
                  onChange={(e) => setFormData({ ...formData, requirementType: e.target.value })}
                  className="input-field text-sm"
                >
                  <option value="Hospital Procurement">Hospital Procurement</option>
                  <option value="Surgeon Personal Stock">Surgeon Personal Stock</option>
                  <option value="Distributor Partnership">Distributor Partnership</option>
                  <option value="Government / Defense Tender">Government / Defense Tender</option>
                </select>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="btn-cyan w-full justify-center shadow-md py-3 text-sm font-bold"
              >
                <Send className="h-4 w-4" />
                <span>Submit &amp; Request Monograph Dispatch</span>
              </button>
              <p className="text-[11px] text-center text-slate-400 mt-2">
                🔒 Strictly confidential. Your details are used solely to fulfill technical catalogue requests.
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
