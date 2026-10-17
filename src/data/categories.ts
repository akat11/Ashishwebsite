export interface ProductCategory {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  image: string;
  icon: string; // lucide-react icon name
  productCount: number;
}

export const productCategories: ProductCategory[] = [
  {
    slug: 'distal-radius-locking-plates',
    name: 'Distal Radius Locking Plates',
    shortName: 'Distal Radius',
    description:
      'Anatomically contoured titanium and stainless-steel locking plates for distal radius fracture fixation, including Volar, Volar Rim, Two-Column, L-Plates and Variable Angle systems.',
    image: '/images/categories/distal-radius-locking-plates.jpg',
    icon: 'Activity',
    productCount: 10,
  },
  {
    slug: 'tibia-locking-plates',
    name: 'Tibia Locking Plates',
    shortName: 'Tibia Plates',
    description:
      'Comprehensive locking plate systems for proximal, medial, posterior and distal tibial fractures, low-bend distal medial plates, anterolateral plates, and osteotomy solutions.',
    image: '/images/categories/tibia-locking-plates.jpg',
    icon: 'Bone',
    productCount: 12,
  },
  {
    slug: 'femur-locking-plates',
    name: 'Femur & Hip Locking Plates',
    shortName: 'Femur & Hip',
    description:
      'High-strength anatomical locking plates for proximal femur, greater trochanter, distal lateral and medial femur, condylar buttress, DHS locking, and Femoral Neck System (FNS).',
    image: '/images/categories/femur-locking-plates.jpg',
    icon: 'Layers',
    productCount: 11,
  },
  {
    slug: 'humerus-locking-plates',
    name: 'Humerus & Upper Extremity Locking Plates',
    shortName: 'Humerus Plates',
    description:
      'Anatomical locking plates for upper extremity fractures including proximal humerus (PHILOS design), greater tuberosity, distal humerus, olecranon, and extra-articular humeral plates.',
    image: '/images/categories/humerus-locking-plates.jpg',
    icon: 'Crosshair',
    productCount: 8,
  },
  {
    slug: 'reconstruction-locking-plates',
    name: 'Small, Large & Reconstruction Locking Plates',
    shortName: 'Reconstruction & Straight',
    description:
      'Versatile straight, broad, narrow, and one-third tubular locking plates in 2.7mm, 3.5mm and 5.0mm systems with dynamic compression (D.C) and round locking holes.',
    image: '/images/categories/reconstruction-locking-plates.jpg',
    icon: 'Maximize2',
    productCount: 9,
  },
  {
    slug: 'pediatric-locking-plates',
    name: 'Pediatric Locking Plates',
    shortName: 'Pediatric Plates',
    description:
      'Specialized pediatric hip and condylar locking plates designed for pediatric trauma and corrective osteotomies, available in 100°, 110°, and 130° angles across 2.7mm, 3.5mm, and 5.0mm sizes.',
    image: '/images/categories/pediatric-locking-plates.jpg',
    icon: 'Baby',
    productCount: 5,
  },
  {
    slug: 'specialized-locking-plates',
    name: 'Specialized Locking Plates (Foot, Ankle & Hand)',
    shortName: 'Foot, Ankle & Hand',
    description:
      'Anatomical specialty implants including Calcaneal (F-Type, posterior, combined), Distal Fibula, Clavicle Hook, MTP/L-Fusion, and 1.5mm–2.4mm Microlock mini fragment systems.',
    image: '/images/categories/specialized-locking-plates.jpg',
    icon: 'Shield',
    productCount: 12,
  },
  {
    slug: 'locking-screws-accessories',
    name: 'Locking Screws & Fixation Components',
    shortName: 'Screws & Fixation',
    description:
      'Precision cortical, cancellous, variable-angle (V.A.), star-hex and cannulated locking screws from 1.5mm to 7.3mm, along with orthopedic spacers and wiremounts in SS 316L and Titanium Grade 5.',
    image: '/images/categories/locking-screws-accessories.jpg',
    icon: 'CircleDot',
    productCount: 10,
  },
  {
    slug: 'external-fixator-clamps',
    name: 'External Fixator Systems & Clamps',
    shortName: 'Fixator Clamps',
    description:
      'Modular external fixation clamping systems including A.O Type (single pin, double pin, open clamp, rod-to-rod), Aesculap type, and Jess type clamps, plus compression-distraction devices.',
    image: '/images/categories/external-fixator-clamps.jpg',
    icon: 'Wrench',
    productCount: 10,
  },
  {
    slug: 'ilizarov-rings-instruments',
    name: 'Ilizarov Ring System, Rods & Instruments',
    shortName: 'Rings, Rods & Tools',
    description:
      'Circular Ilizarov fixation frames with full rings, half rings, 5/8 rings, Italian arches, connecting rods, threaded rods, Olive and K-wires, dynametric wire tensioners, and spanners.',
    image: '/images/categories/ilizarov-rings-instruments.jpg',
    icon: 'Circle',
    productCount: 11,
  },
];
