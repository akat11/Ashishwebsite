export interface AnatomyRegionDef {
  id: string;
  name: string;
  subTitle: string;
  categorySlug: string;
  categoryName: string;
  cameraTarget: [number, number, number];
  cameraPosition: [number, number, number];
  bones: string[];
  clinicalIndications: string[];
  biomechanicalProfile: string;
  flagshipImplants: {
    name: string;
    slug: string;
    categorySlug: string;
    image: string;
    specs: string;
    material: string;
    code: string;
  }[];
}

export const ANATOMY_REGIONS: AnatomyRegionDef[] = [
  {
    id: 'wrist-hand',
    name: 'Wrist & Distal Radius',
    subTitle: 'Volar, Dorsal & Columnar Articular Trauma',
    categorySlug: 'distal-radius-locking-plates',
    categoryName: 'Distal Radius Locking Plates',
    cameraTarget: [1.8, 0.4, 0],
    cameraPosition: [2.5, 0.5, 3.2],
    bones: ['radius_R', 'ulna_R', 'hand_R'],
    clinicalIndications: [
      'Intra-articular and extra-articular distal radius fractures (AO/OTA 23-A, B, C)',
      'Radial styloid fractures requiring column-specific buttressing',
      'Volar rim fractures with low-profile subchondral support',
    ],
    biomechanicalProfile:
      'Divergent subchondral locking screws provide angular stability and prevent articular collapse without dorsal soft-tissue impingement.',
    flagshipImplants: [
      {
        name: 'Volar Distal Radius Locking Plate 2.7mm',
        slug: 'volar-distal-radius-locking-plate-2-7mm',
        categorySlug: 'distal-radius-locking-plates',
        image: '/images/products/volar-distal-radius-locking-plate-2-7mm.jpg',
        specs: '3, 4, 5, 6, 7 Holes | Right & Left Anatomical',
        material: 'Titanium Gr. 5 & SS 316L',
        code: 'S2125R.03–S2125R.07 / T2125R.03',
      },
      {
        name: 'L Distal Radius Locking Plate 2.7mm',
        slug: 'l-distal-radius-locking-plate-2-7mm',
        categorySlug: 'distal-radius-locking-plates',
        image: '/images/products/l-distal-radius-locking-plate-2-7mm.jpg',
        specs: 'Head 3-Hole | 3, 4, 5, 6 Shaft Holes',
        material: 'Titanium Gr. 5 & SS 316L',
        code: 'S2122R.03–S2122R.06 / T2122',
      },
    ],
  },
  {
    id: 'hip-femur',
    name: 'Femur & Hip Joint',
    subTitle: 'Trochanteric, Neck & Diaphyseal Load-Bearing Fixation',
    categorySlug: 'femur-locking-plates',
    categoryName: 'Femur & Hip Locking Plates',
    cameraTarget: [0.7, -0.6, 0],
    cameraPosition: [1.6, -0.4, 4.0],
    bones: ['femur_R', 'pelvis'],
    clinicalIndications: [
      'Intertrochanteric, subtrochanteric, and femoral neck fractures (AO/OTA 31-A, B)',
      'Distal femoral condylar fractures requiring multi-planar fixed-angle support',
      'Periprosthetic and osteoporotic proximal femur comminuted fractures',
    ],
    biomechanicalProfile:
      'Heavy metaphyseal anatomical plates and intramedullary nails engineered to withstand high cyclic varus bending moments during full weight bearing.',
    flagshipImplants: [
      {
        name: 'Proximal Femur Locking Plate 4.5mm/5.0mm',
        slug: 'proximal-femur-locking-plate-4-5mm-5-0mm',
        categorySlug: 'femur-locking-plates',
        image: '/images/categories/femur-locking-plates.jpg',
        specs: '95° & 135° Contours | 4 to 14 Holes',
        material: 'Titanium Gr. 5 & SS 316L',
        code: 'S2410R / T2410R Series',
      },
      {
        name: 'Distal Lateral Femur Locking Plate',
        slug: 'distal-lateral-femur-locking-plate-4-5mm-5-0mm',
        categorySlug: 'femur-locking-plates',
        image: '/images/categories/femur-locking-plates.jpg',
        specs: 'Condylar Buttress Curve | Multi-Screw Trajectory',
        material: 'Titanium Gr. 5 & SS 316L',
        code: 'S2415R / T2415R Series',
      },
    ],
  },
  {
    id: 'knee-tibia',
    name: 'Knee & Tibia',
    subTitle: 'Plateau & Tibial Diaphysis Reconstruction',
    categorySlug: 'tibia-locking-plates',
    categoryName: 'Tibia Locking Plates',
    cameraTarget: [-0.65, -1.8, 0],
    cameraPosition: [-0.4, -1.5, 3.8],
    bones: ['tibia_L', 'fibula_L', 'patella_L'],
    clinicalIndications: [
      'Schatzker I-VI tibial plateau fractures with bicondylar comminution',
      'Distal medial tibia pilon fractures requiring subcutaneous periarticular plating',
      'High-energy tibial shaft fractures with soft-tissue compromise',
    ],
    biomechanicalProfile:
      'Low-profile metadiaphyseal pre-contoured plates combined with multi-axial locking screws that respect periosteal vascularity.',
    flagshipImplants: [
      {
        name: 'Proximal Tibia Medial Locking Plate',
        slug: 'proximal-tibia-medial-locking-plate-3-5mm-4-5mm-combo',
        categorySlug: 'tibia-locking-plates',
        image: '/images/categories/tibia-locking-plates.jpg',
        specs: '3.5mm/4.5mm Combo Holes | 4 to 12 Holes',
        material: 'Titanium Gr. 5 & SS 316L',
        code: 'S2312R / T2312R Series',
      },
      {
        name: 'Distal Medial Tibia Locking Plate',
        slug: 'distal-medial-tibia-locking-plate-3-5mm',
        categorySlug: 'tibia-locking-plates',
        image: '/images/categories/tibia-locking-plates.jpg',
        specs: 'Low-bend distal contour | Subcutaneous insertion',
        material: 'Titanium Gr. 5 & SS 316L',
        code: 'S2320R / T2320R Series',
      },
    ],
  },
  {
    id: 'shoulder-humerus',
    name: 'Shoulder & Humerus',
    subTitle: 'Proximal Humerus (PHILOS) & Bicolumnar Fixation',
    categorySlug: 'humerus-locking-plates',
    categoryName: 'Humerus Locking Plates',
    cameraTarget: [-1.4, 1.3, 0],
    cameraPosition: [-1.6, 1.4, 3.4],
    bones: ['humerus_L', 'clavicle_L'],
    clinicalIndications: [
      '2-, 3-, and 4-part proximal humerus fractures (Neer classification)',
      'Humeral shaft non-unions and comminuted fractures',
      'Distal humerus bicolumnar intra-articular fractures (AO 13-C)',
    ],
    biomechanicalProfile:
      'Calcar-supporting divergent screw trajectories in proximal head resist varus displacement in osteopenic bone, with suture eyelets for cuff augmentation.',
    flagshipImplants: [
      {
        name: 'Proximal Humerus PHILOS Type Locking Plate',
        slug: 'proximal-humerus-locking-plate-philos-3-5mm',
        categorySlug: 'humerus-locking-plates',
        image: '/images/categories/humerus-locking-plates.jpg',
        specs: '3 to 8 Shaft Holes | Multi-Plane Calcar Divergence',
        material: 'Titanium Gr. 5 & SS 316L',
        code: 'S2210 / T2210 PHILOS',
      },
      {
        name: 'Distal Humerus Extra-Articular Plate',
        slug: 'distal-humerus-extra-articular-locking-plate-3-5mm',
        categorySlug: 'humerus-locking-plates',
        image: '/images/categories/humerus-locking-plates.jpg',
        specs: 'Posterolateral column contour | Spiral shaft alignment',
        material: 'Titanium Gr. 5 & SS 316L',
        code: 'S2225 / T2225 Series',
      },
    ],
  },
  {
    id: 'ankle-foot',
    name: 'Ankle & Foot Complex',
    subTitle: 'Hindfoot, Midfoot & Digital Trauma Stabilization',
    categorySlug: 'specialized-locking-plates',
    categoryName: 'Specialized Locking Plates (Foot & Ankle)',
    cameraTarget: [0.7, -3.1, 0],
    cameraPosition: [0.9, -2.8, 3.2],
    bones: ['foot_R', 'foot_L'],
    clinicalIndications: [
      'Calcaneus intra-articular depression fractures (Sanders Type II-IV)',
      'Distal fibula lateral malleolar fractures and syndesmotic disruption',
      'First metatarsophalangeal (MTP) joint arthrodesis and mini-fragment trauma',
    ],
    biomechanicalProfile:
      'Low-profile 1.5mm–3.5mm titanium perimeter plates engineered to accommodate complex tarsal anatomy without soft tissue dehiscence.',
    flagshipImplants: [
      {
        name: 'Calcaneal Locking Plate (F-Type / Perimeter)',
        slug: 'calcaneal-locking-plate-3-5mm',
        categorySlug: 'specialized-locking-plates',
        image: '/images/categories/specialized-locking-plates.jpg',
        specs: 'Subtalar joint buttress | Anatomical lateral wall fit',
        material: 'Titanium Gr. 5 & SS 316L',
        code: 'S2510 / T2510 Series',
      },
      {
        name: 'Distal Fibula Lateral Locking Plate',
        slug: 'distal-fibula-locking-plate-3-5mm',
        categorySlug: 'specialized-locking-plates',
        image: '/images/categories/specialized-locking-plates.jpg',
        specs: 'Syndesmotic screw trajectories | Low-profile distal rim',
        material: 'Titanium Gr. 5 & SS 316L',
        code: 'S2520 / T2520 Series',
      },
    ],
  },
  {
    id: 'deformity-limb',
    name: 'Complex Deformity & External Fixation',
    subTitle: 'Circular Ilizarov Ring Frames & Modular Clamps',
    categorySlug: 'ilizarov-rings-instruments',
    categoryName: 'Ilizarov Rings & External Fixators',
    cameraTarget: [0, -1.0, 0],
    cameraPosition: [0, -0.8, 4.6],
    bones: ['femur_R', 'femur_L', 'tibia_R', 'tibia_L'],
    clinicalIndications: [
      'Open Gustilo-Anderson Type III fractures with massive bone and soft-tissue loss',
      'Limb lengthening and multi-apical post-traumatic deformity correction',
      'Chronic osteomyelitis, infected non-union, and joint contracture distension',
    ],
    biomechanicalProfile:
      'Multiplanar circular tensioned wire frames providing controlled axial micro-motion for distraction osteogenesis alongside rigid rotational resistance.',
    flagshipImplants: [
      {
        name: 'Ilizarov Full & 5/8 Ring System',
        slug: 'ilizarov-full-rings-threaded-rods',
        categorySlug: 'ilizarov-rings-instruments',
        image: '/images/categories/ilizarov-rings-instruments.jpg',
        specs: 'High-Strength Aluminum & Stainless Steel | 80mm to 220mm',
        material: 'High-Strength Light Alloy & SS',
        code: 'IL-RING-80..220',
      },
      {
        name: 'A.O. Modular External Fixation Clamps',
        slug: 'ao-type-pin-to-rod-clamps',
        categorySlug: 'external-fixator-clamps',
        image: '/images/categories/external-fixator-clamps.jpg',
        specs: 'Single Pin / Double Pin / Rod-to-Rod (11mm & 8mm)',
        material: 'Stainless Steel 316L',
        code: 'EX-AO-PIN-ROD',
      },
    ],
  },
];
