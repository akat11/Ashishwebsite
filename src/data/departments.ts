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
      'Implant systems, anatomical locking plates, bone screws and external fixation frames for comprehensive fracture treatment and trauma surgery.',
    image: 'https://images.pexels.com/photos/24022933/pexels-photo-24022933.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    icon: 'Bone',
    relatedCategories: ['tibia-locking-plates', 'femur-locking-plates', 'distal-radius-locking-plates', 'external-fixator-clamps'],
  },
  {
    slug: 'trauma-surgery',
    name: 'Trauma & Emergency Care',
    description:
      'Emergency stabilization and acute fracture management implants including modular external fixators, bridging clamps and compression devices.',
    image: 'https://images.pexels.com/photos/39459348/pexels-photo-39459348.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    icon: 'Ambulance',
    relatedCategories: ['external-fixator-clamps', 'ilizarov-rings-instruments', 'femur-locking-plates', 'tibia-locking-plates'],
  },
  {
    slug: 'deformity-correction',
    name: 'Limb Reconstruction & Ilizarov',
    description:
      'Circular ring fixators, threaded rods, hinges, dynamic struts and transfixion wire systems for complex deformity correction and limb lengthening.',
    image: 'https://images.pexels.com/photos/33916261/pexels-photo-33916261.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    icon: 'Maximize2',
    relatedCategories: ['ilizarov-rings-instruments', 'external-fixator-clamps'],
  },
  {
    slug: 'pediatric-orthopaedics',
    name: 'Pediatric Orthopaedics',
    description:
      'Specially sized hip and condylar locking plates engineered for pediatric fractures, osteotomies, and congenital deformity corrections.',
    image: 'https://images.pexels.com/photos/7108415/pexels-photo-7108415.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    icon: 'Baby',
    relatedCategories: ['pediatric-locking-plates'],
  },
  {
    slug: 'hand-wrist-surgery',
    name: 'Hand & Upper Extremity',
    description:
      'Dedicated volar distal radius plates, wrist arthrodesis plates, humerus plates and miniature Microlock systems for delicate bone anatomy.',
    image: 'https://images.pexels.com/photos/7789639/pexels-photo-7789639.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    icon: 'Crosshair',
    relatedCategories: ['distal-radius-locking-plates', 'humerus-locking-plates', 'specialized-locking-plates'],
  },
  {
    slug: 'foot-ankle-surgery',
    name: 'Foot & Ankle Surgery',
    description:
      'Anatomically contoured calcaneal plates, distal fibula plates, and MTP/L-fusion plates for complex hindfoot and forefoot reconstruction.',
    image: 'https://images.pexels.com/photos/11748826/pexels-photo-11748826.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    icon: 'Shield',
    relatedCategories: ['specialized-locking-plates', 'tibia-locking-plates'],
  },
];
