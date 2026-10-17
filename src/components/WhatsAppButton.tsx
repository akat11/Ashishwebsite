import { MessageCircle } from 'lucide-react';
import { businessConfig, buildWhatsAppLink } from '@/config/business';

export default function WhatsAppButton() {
  // Only show floating button when a valid WhatsApp number is configured.
  if (!businessConfig.whatsappConfigured) {
    return null;
  }

  return (
    <a
      href={buildWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
