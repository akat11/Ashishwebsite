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
export function buildProductWhatsAppLink(productName: string, specsSummary?: string): string {
  const msg = [
    'Hello Vinayak Surgicals,',
    '',
    'I would like to enquire about the following product:',
    `Product: ${productName}`,
    specsSummary ? `Specifications: ${specsSummary}` : '',
    '',
    'Please share availability, specifications and pricing.',
    '',
    'Thank you.',
  ]
    .filter(Boolean)
    .join('\n');
  return buildWhatsAppLink(msg);
}

export interface ContactEnquiryPayload {
  name: string;
  organisation?: string;
  phone: string;
  email: string;
  enquiryPurpose: string;
  message: string;
}

export function buildContactEnquiryMessage(data: ContactEnquiryPayload): string {
  return [
    'Hello Vinayak Surgicals,',
    '',
    'I would like to submit a medical supply enquiry.',
    '',
    `Name: ${data.name.trim()}`,
    `Hospital / Organisation: ${data.organisation?.trim() || 'Not specified'}`,
    `Phone: ${data.phone.trim()}`,
    `Email: ${data.email.trim()}`,
    `Enquiry Purpose: ${data.enquiryPurpose.trim()}`,
    '',
    'Message / Requirements:',
    data.message.trim(),
    '',
    'Please contact me regarding this enquiry.',
    '',
    'Thank you.',
  ].join('\n');
}

export function buildContactEnquiryWhatsAppLink(data: ContactEnquiryPayload): string {
  return buildWhatsAppLink(buildContactEnquiryMessage(data));
}

export interface QuoteItemPayload {
  product: string;
  quantity?: string;
  specification?: string;
}

export interface QuoteEnquiryPayload {
  orgName: string;
  contactPerson: string;
  contactPhone: string;
  contactEmail: string;
  dept?: string;
  destination?: string;
  additional?: string;
  items: QuoteItemPayload[];
}

export function buildQuoteEnquiryMessage(data: QuoteEnquiryPayload): string {
  const validItems = data.items.filter((item) => item.product.trim());
  const itemsText =
    validItems.length > 0
      ? validItems
          .map(
            (item, i) =>
              `${i + 1}. ${item.product.trim()} | Qty: ${item.quantity?.trim() || 'TBD'} | Spec/Code: ${
                item.specification?.trim() || 'Standard'
              }`
          )
          .join('\n')
      : 'No specific items listed';

  return [
    'Hello Vinayak Surgicals,',
    '',
    'I would like to request an official quotation for the following orthopaedic supplies:',
    '',
    `Hospital / Facility: ${data.orgName.trim() || 'Not specified'}`,
    `Contact Person: ${data.contactPerson.trim() || 'Not specified'}`,
    `Phone: ${data.contactPhone.trim() || 'Not specified'}`,
    `Email: ${data.contactEmail.trim() || 'Not specified'}`,
    data.dept?.trim() ? `Department: ${data.dept.trim()}` : '',
    data.destination?.trim() ? `Delivery City / State: ${data.destination.trim()}` : '',
    '',
    'Required Products:',
    itemsText,
    '',
    data.additional?.trim() ? `Additional Notes / Instructions:\n${data.additional.trim()}\n` : '',
    'Please share itemized batch pricing, availability, and delivery timelines.',
    '',
    'Thank you.',
  ]
    .filter(Boolean)
    .join('\n');
}

export function buildQuoteEnquiryWhatsAppLink(data: QuoteEnquiryPayload): string {
  return buildWhatsAppLink(buildQuoteEnquiryMessage(data));
}

export interface MonographRequestPayload {
  productName?: string;
  catalogueCode?: string;
  doctorName: string;
  organization?: string;
  phone: string;
  email: string;
  requirementType?: string;
}

export function buildMonographRequestMessage(data: MonographRequestPayload): string {
  return [
    'Hello Vinayak Surgicals,',
    '',
    'I would like to request an official Technical Monograph & Catalogue.',
    '',
    `Doctor / Contact Name: ${data.doctorName.trim()}`,
    `Hospital / Organization: ${data.organization?.trim() || 'Not specified'}`,
    `Phone: ${data.phone.trim()}`,
    `Email: ${data.email.trim()}`,
    data.requirementType ? `Requirement Type: ${data.requirementType}` : '',
    '',
    data.productName
      ? `Requested Implant System: ${data.productName}${data.catalogueCode ? ` (${data.catalogueCode})` : ''}`
      : 'Requested Item: Complete Vinayak Surgicals Trauma & Fixation Systems Catalogue',
    '',
    'Please send the official product monograph PDF and technical specifications.',
    '',
    'Thank you.',
  ]
    .filter(Boolean)
    .join('\n');
}

export function buildMonographRequestWhatsAppLink(data: MonographRequestPayload): string {
  return buildWhatsAppLink(buildMonographRequestMessage(data));
}
