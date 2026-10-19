import { MessageCircle, Phone } from 'lucide-react';
import { businessConfig, buildWhatsAppLink } from '@/config/business';

export default function WhatsAppButton() {
  if (businessConfig.whatsappConfigured) {
    return (
      <a
        href={buildWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Vinayak Surgicals on WhatsApp"
        className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all hover:scale-105 hover:bg-[#1da851] hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
      >
        <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" />
      </a>
    );
  }

  // Fallback direct contact trigger for quick enquiries
  return (
    <a
      href={`tel:${businessConfig.phoneRaw}`}
      aria-label="Call Vinayak Surgicals"
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-[#123B66] text-white shadow-lg transition-all hover:scale-105 hover:bg-[#0c2642] hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#159A9C] focus:ring-offset-2"
    >
      <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-[#159A9C]" />
    </a>
  );
}
