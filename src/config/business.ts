// Central business configuration file for Vinayak Surgicals
// All business details are stored here to avoid duplication across the site.

export const businessConfig = {
  name: 'Vinayak Surgicals',
  legalName: 'Vinayak Surgicals',
  tagline: 'Orthopedic Locking Plates & External Fixator Systems',
  description:
    'Supplying orthopedic locking plate systems, external fixators, Ilizarov rings and fixation screws in implant-grade Stainless Steel 316L and Titanium to orthopedic surgeons, hospitals and trauma centers.',

  // Contact details
  phone: '+91 99355 86478',
  phoneRaw: '+919935586478',
  whatsapp: '919935586478',
  email: 'ashishkumar864@gmail.com',
  emailSecondary: '',

  // Address
  address: {
    line1: 'Nankari, IIT Kanpur',
    line2: 'Kanpur Nagar',
    city: 'Kanpur Nagar',
    state: 'Uttar Pradesh',
    pincode: '208016',
    country: 'India',
    formatted: 'Nankari, IIT Kanpur, Kanpur Nagar, Uttar Pradesh – 208016, India',
  },

  // Business hours
  businessHours: [
    { day: 'Monday – Friday', hours: '9:30 AM – 7:00 PM' },
    { day: 'Saturday', hours: '10:00 AM – 6:00 PM' },
    { day: 'Sunday', hours: 'Closed' },
  ],

  // Social links — leave empty until verified
  social: {
    facebook: '',
    instagram: '',
    linkedin: '',
    twitter: '',
  },

  // Website
  website: 'https://vinayaksurgicals.vercel.app',

  // WhatsApp configuration flag
  whatsappConfigured: true,

  // Default WhatsApp message
  whatsappDefaultMessage:
    'Hello Vinayak Surgicals, I would like to enquire about orthopedic locking plates and external fixator systems. Please contact me regarding product availability and quotation.',

  // Service areas
  serviceAreas: [
    'Kanpur',
    'Lucknow',
    'Agra',
    'Varanasi',
    'Allahabad (Prayagraj)',
    'Gorakhpur',
    'Meerut',
    'Bareilly',
    'Jhansi',
    'Aligarh',
    'Moradabad',
    'Saharanpur',
    'Noida & Greater Noida',
    'Ghaziabad',
  ],

  // Statistics derived from real data where possible
  statistics: {
    productCategories: 10, // Based on actual catalogue categories
    productCount: 'Multiple Product Categories',
    brandsSupplied: 'Verified Brands on Request',
    citiesCovered: 14, // Based on serviceAreas list
    yearsInBusiness: 'Pan-India Enquiries', // Replace with confirmed year when available
  },

  // Homepage hero statistics
  heroStatistics: [
    {
      id: 'fixation-systems',
      displayValue: '110+',
      numericTarget: 110,
      suffix: '+',
      label: 'Fixation Systems',
      highlight: false,
    },
    {
      id: 'implant-biomaterials',
      displayValue: '316L / Gr.5',
      label: 'Implant Biomaterials',
      highlight: true,
    },
    {
      id: 'pan-india-distribution',
      displayValue: '28+ States',
      numericTarget: 28,
      suffix: '+ States',
      label: 'Pan-India Distribution',
      highlight: false,
    },
  ],
} as const;

// Helper: build a WhatsApp link with optional custom message
export function buildWhatsAppLink(message?: string): string {
  const text = encodeURIComponent(message ?? businessConfig.whatsappDefaultMessage);
  return `https://wa.me/${businessConfig.whatsapp}?text=${text}`;
}

// Helper: build a product-specific WhatsApp enquiry link
export function buildProductWhatsAppLink(productName: string): string {
  const msg = `Hello Vinayak Surgicals, I would like to enquire about the following product: ${productName}. Please share availability, specifications and pricing.`;
  return buildWhatsAppLink(msg);
}
