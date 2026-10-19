export interface Department {
  slug: string;
  name: string;
  description: string;
  image: string;
  icon: string;
  relatedCategories: string[];
}

export const departments: Department[] = [
  {
    slug: 'orthopaedics',
    name: 'Orthopaedic Surgery',
    description:
      'Implant systems, anatomical locking plates, bone screws and external fixation frames for trauma and elective cases.',
    image: '/images/categories/tibia-locking-plates.jpg',
    icon: 'Bone',
    relatedCategories: ['tibia-locking-plates', 'femur-locking-plates', 'distal-radius-locking-plates', 'external-fixator-clamps'],
  },
  {
    slug: 'trauma-surgery',
    name: 'Trauma & Emergency Care',
    description:
      'Emergency stabilization and acute fracture management implants including modular fixation systems.',
    image: '/images/categories/external-fixator-clamps.jpg',
    icon: 'Ambulance',
    relatedCategories: ['external-fixator-clamps', 'ilizarov-rings-instruments', 'femur-locking-plates', 'tibia-locking-plates'],
  },
  {
    slug: 'deformity-correction',
    name: 'Limb Reconstruction & Ilizarov',
    description:
      'Circular ring fixators, threaded rods, hinges, dynamic struts and transfixion wire systems for complex deformity correction and limb lengthening.',
    image: '/images/categories/ilizarov-rings-instruments.jpg',
    icon: 'Maximize2',
    relatedCategories: ['ilizarov-rings-instruments', 'external-fixator-clamps'],
  },
  {
    slug: 'pediatric-orthopaedics',
    name: 'Pediatric Orthopaedics',
    description:
      'Specially sized hip and condylar locking plates engineered for pediatric fractures, osteotomies, and congenital deformity corrections.',
    image: '/images/categories/pediatric-locking-plates.jpg',
    icon: 'Baby',
    relatedCategories: ['pediatric-locking-plates'],
  },
  {
    slug: 'hand-wrist-surgery',
    name: 'Hand & Upper Extremity',
    description:
      'Dedicated volar distal radius plates, wrist arthrodesis plates, humerus plates and fixation solutions for upper limb fractures.',
    image: '/images/categories/distal-radius-locking-plates.jpg',
    icon: 'Hand',
    relatedCategories: ['distal-radius-locking-plates', 'humerus-locking-plates', 'specialized-locking-plates'],
  },
  {
    slug: 'foot-ankle-surgery',
    name: 'Foot & Ankle Surgery',
    description:
      'Anatomically contoured calcaneal plates, distal fibula plates, and MTP/L-fusion plates for complex hindfoot and forefoot reconstruction.',
    image: '/images/products/calcaneal-plate.jpg',
    icon: 'Footprints',
    relatedCategories: ['specialized-locking-plates', 'tibia-locking-plates'],
  },
];
