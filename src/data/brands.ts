// Medical brands and manufacturers with user-confirmed supply relationships.

export interface Brand {
  name: string;
  logo: string;
  verified: boolean;
}

export const brands: Brand[] = [
  { name: 'Stryker', logo: '/images/brands-logo-stryker.png', verified: true },
  { name: 'DePuy Synthes', logo: '/images/brands-logo-depuy-synthes.png', verified: true },
  { name: 'Zimmer Biomet', logo: '/images/brands-logo-zimmer-biomet.png', verified: true },
  { name: 'Smith+Nephew', logo: '/images/brands-logo-smith-nephew.png', verified: true },
  { name: 'KARL STORZ', logo: '/images/brands-logo-storz.png', verified: true },
  { name: 'Medtronic', logo: '/images/brands-logo-medtronic.png', verified: true },
  { name: 'B. Braun', logo: '/images/brands-logo-bbraun.png', verified: true },
  { name: 'CONMED', logo: '/images/brands-logo-conmed.png', verified: true },
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
