// Medical brands and manufacturers.
// IMPORTANT: Only list brands where a verified supply relationship exists.
// Do NOT claim authorised dealership or exclusive distribution without
// documentary confirmation. Do NOT invent brand logos.
// Until the verified brand list is available, display a product-category
// strip instead of fabricated manufacturer logos.

export interface Brand {
  name: string;
  category: string;
  verified: boolean;
}

export const brands: Brand[] = [
  // Replace with verified brand partnerships when confirmed.
  // Example structure — all entries start as unverified:
  // { name: 'Example Brand', category: 'Surgical Instruments', verified: true }
];

export const brandCategories = [
  'Distal Radius Locking Systems',
  'Tibia & Femur Locking Plates',
  'Pediatric Orthopedic Plates',
  'Reconstruction & Clavicle Plates',
  'External Fixator Clamps & Rods',
  'Ilizarov Ring Fixation Systems',
  'Cortical & Cancellous Locking Screws',
  'Deformity Correction & Limb Lengthening',
];

export const hasVerifiedBrands = brands.filter((b) => b.verified).length > 0;
