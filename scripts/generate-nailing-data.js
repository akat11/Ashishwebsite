import fs from 'fs';

const nailingProducts = [
  {
    slug: 'inter-locking-tibia-nail',
    name: 'Inter-Locking Tibia Nail',
    category: 'nailing-systems',
    description: 'Anatomically contoured tibial intramedullary nail with proximal and distal locking options for stable fixation of diaphyseal, metaphyseal and distal tibial shaft fractures.',
    image: '/images/products/inter-locking-tibia-nail.jpg',
    specs: [
      { label: 'Catalogue Code (SS316L)', value: 'S3001.08260 – S3001.11380' },
      { label: 'Catalogue Code (TT Gr.5)', value: 'T3001.08260 – T3001.11380' },
      { label: 'Available Diameters', value: '∅ 8.0mm, ∅ 9.0mm, ∅ 10.0mm, ∅ 11.0mm' },
      { label: 'Available Lengths', value: '260mm, 280mm, 300mm, 320mm, 340mm, 360mm, 380mm' },
      { label: 'Compatible Screws', value: '4.9mm Inter-Locking Screw, 3.9mm Inter-Locking Screw' },
      { label: 'Associated End Caps', value: '0mm, 5mm, 10mm, 15mm (SS: S3002.00–15 | TT: T3002.00–15)' },
      { label: 'Material', value: 'Stainless Steel 316L / Titanium Grade 5' },
      { label: 'Catalogue Reference', value: 'Nailing Products Catalogue — Page 01' }
    ],
    featured: true
  },
  {
    slug: 'tibia-nail',
    name: 'Tibia Nail',
    category: 'nailing-systems',
    description: 'Cannulated intramedullary tibial fixation nail designed for standard reamed and unreamed tibial shaft fracture stabilization with multi-planar locking holes.',
    image: '/images/products/tibia-nail.jpg',
    specs: [
      { label: 'Catalogue Code (SS316L)', value: 'S3003.08260 – S3003.11380' },
      { label: 'Catalogue Code (TT Gr.5)', value: 'T3003.08260 – T3003.11380' },
      { label: 'Available Diameters', value: '∅ 8.0mm, ∅ 9.0mm, ∅ 10.0mm, ∅ 11.0mm' },
      { label: 'Available Lengths', value: '260mm, 280mm, 300mm, 320mm, 340mm, 360mm, 380mm' },
      { label: 'Compatible Screws', value: '4.9mm Inter-Locking Screw, 3.9mm Inter-Locking Screw' },
      { label: 'Associated End Caps', value: '0mm, 5mm, 10mm, 15mm (SS: S3004.00–15 | TT: T3004.00–15)' },
      { label: 'Material', value: 'Stainless Steel 316L / Titanium Grade 5' },
      { label: 'Catalogue Reference', value: 'Nailing Products Catalogue — Page 02' }
    ],
    featured: true
  },
  {
    slug: 'expert-tibia-nail',
    name: 'Expert Tibia Nail',
    category: 'nailing-systems',
    description: 'Advanced multi-directional tibial nailing system featuring Herzog bend, oblique proximal locking screws, and multi-planar distal locking for proximal third, middle, and distal third tibial fractures.',
    image: '/images/products/expert-tibia-nail.jpg',
    specs: [
      { label: 'Catalogue Code (SS316L)', value: 'S3005.08255 – S3005.11390' },
      { label: 'Catalogue Code (TT Gr.5)', value: 'T3005.08255 – T3005.11390' },
      { label: 'Available Diameters', value: '∅ 8.0mm, ∅ 8.5mm, ∅ 9.0mm, ∅ 9.5mm, ∅ 10.0mm, ∅ 10.5mm, ∅ 11.0mm' },
      { label: 'Available Lengths', value: '255mm, 270mm, 285mm, 300mm, 315mm, 330mm, 345mm, 360mm, 375mm, 390mm' },
      { label: 'Compatible Screws', value: '4.3mm Inter-Locking Screw, 4.7mm Inter-Locking Screw' },
      { label: 'Associated End Caps', value: 'Standard (0mm, 5mm, 10mm, 15mm) & End Cap With Lock Pin (S3006.00 / T3006.00)' },
      { label: 'Material', value: 'Stainless Steel 316L / Titanium Grade 5' },
      { label: 'Catalogue Reference', value: 'Nailing Products Catalogue — Page 03' }
    ],
    featured: true
  },
  {
    slug: 'sirus-tibia-nail',
    name: 'Sirus Tibia Nail',
    category: 'nailing-systems',
    description: 'Precision engineered tibial intramedullary nail with optimized proximal contouring and durable locking geometry for fast anatomical alignment and early mobilization.',
    image: '/images/products/sirus-tibia-nail.jpg',
    specs: [
      { label: 'Catalogue Code (SS316L)', value: 'S3008.08260 – S3008.10380' },
      { label: 'Catalogue Code (TT Gr.5)', value: 'T3008.08260 – T3008.10380' },
      { label: 'Available Diameters', value: '∅ 8.0mm, ∅ 9.0mm, ∅ 10.0mm' },
      { label: 'Available Lengths', value: '260mm, 280mm, 300mm, 320mm, 340mm, 360mm, 380mm' },
      { label: 'Compatible Screws', value: '4.9mm Inter-Locking Screw, 3.9mm Inter-Locking Screw' },
      { label: 'Associated End Caps', value: '0mm, 5mm, 10mm, 15mm (SS: S3009.00–15 | TT: T3009.00–15)' },
      { label: 'Material', value: 'Stainless Steel 316L / Titanium Grade 5' },
      { label: 'Catalogue Reference', value: 'Nailing Products Catalogue — Page 04' }
    ],
    featured: false
  },
  {
    slug: 'inter-locking-femur-nail',
    name: 'Inter-Locking Femur Nail',
    category: 'nailing-systems',
    description: 'Anatomic radius of curvature femoral intramedullary nail designed for subtrochanteric, shaft, and supracondylar femoral fracture fixation with static and dynamic proximal/distal locking options.',
    image: '/images/products/inter-locking-femur-nail.jpg',
    specs: [
      { label: 'Catalogue Code (SS316L)', value: 'S3010.09340 – S3010.12440' },
      { label: 'Catalogue Code (TT Gr.5)', value: 'T3010.09340 – T3010.12440' },
      { label: 'Available Diameters', value: '∅ 9.0mm, ∅ 10.0mm, ∅ 11.0mm, ∅ 12.0mm' },
      { label: 'Available Lengths', value: '340mm, 360mm, 380mm, 400mm, 420mm, 440mm' },
      { label: 'Compatible Screws', value: '4.9mm Inter-Locking Screw' },
      { label: 'Associated End Caps', value: '0mm, 5mm, 10mm, 15mm (SS: S3011.00–15 | TT: T3011.00–15)' },
      { label: 'Material', value: 'Stainless Steel 316L / Titanium Grade 5' },
      { label: 'Catalogue Reference', value: 'Nailing Products Catalogue — Page 05' }
    ],
    featured: true
  },
  {
    slug: 'femur-nail',
    name: 'Femur Nail',
    category: 'nailing-systems',
    description: 'Standard cannulated femoral intramedullary nail engineered for diaphyseal femur fractures, non-unions, and osteotomies with reliable rotational and axial stability.',
    image: '/images/products/femur-nail.jpg',
    specs: [
      { label: 'Catalogue Code (SS316L)', value: 'S3012.09340 – S3012.12440' },
      { label: 'Catalogue Code (TT Gr.5)', value: 'T3012.09340 – T3012.12440' },
      { label: 'Available Diameters', value: '∅ 9.0mm, ∅ 10.0mm, ∅ 11.0mm, ∅ 12.0mm' },
      { label: 'Available Lengths', value: '340mm, 360mm, 380mm, 400mm, 420mm, 440mm' },
      { label: 'Compatible Screws', value: '4.9mm Inter-Locking Screw' },
      { label: 'Associated End Caps', value: '0mm, 5mm, 10mm, 15mm (SS: S3013.00–15 | TT: T3013.00–15)' },
      { label: 'Material', value: 'Stainless Steel 316L / Titanium Grade 5' },
      { label: 'Catalogue Reference', value: 'Nailing Products Catalogue — Page 06' }
    ],
    featured: true
  },
  {
    slug: 'expert-femur-nail',
    name: 'Expert Femur Nail',
    category: 'nailing-systems',
    description: 'Right and Left anatomical femoral nail system with multi-planar proximal recon locking options and distal dynamic locking for complex subtrochanteric and femoral shaft fractures.',
    image: '/images/products/expert-femur-nail.jpg',
    specs: [
      { label: 'Catalogue Code (SS316L)', value: 'Right: S3014R.09320–S3014R.12440 | Left: S3014L.09320–S3014L.12440' },
      { label: 'Catalogue Code (TT Gr.5)', value: 'Right: T3014R.09320–T3014R.12440 | Left: T3014L.09320–T3014L.12440' },
      { label: 'Configuration', value: 'Right (R) and Left (L) Anatomical Variants' },
      { label: 'Available Diameters', value: '∅ 9.0mm, ∅ 10.0mm, ∅ 11.0mm, ∅ 12.0mm' },
      { label: 'Available Lengths', value: '320mm, 340mm, 360mm, 380mm, 400mm, 420mm, 440mm' },
      { label: 'Compatible Screws', value: '4.9mm Inter-Locking Screw, 6.4mm Proximal Femoral Screw' },
      { label: 'Associated End Caps', value: '0mm, 5mm, 10mm, 15mm (SS: S3015.00–15 | TT: T3015.00–15)' },
      { label: 'Material', value: 'Stainless Steel 316L / Titanium Grade 5' },
      { label: 'Catalogue Reference', value: 'Nailing Products Catalogue — Page 07' }
    ],
    featured: true
  },
  {
    slug: 'sirus-femur-nail',
    name: 'Sirus Femur Nail',
    category: 'nailing-systems',
    description: 'High-strength femoral intramedullary nail with specialized proximal geometry for rapid insertion and rigid anatomical fixation in high-energy femoral trauma.',
    image: '/images/products/sirus-femur-nail.jpg',
    specs: [
      { label: 'Catalogue Code (SS316L)', value: 'Right: S3016R.09340–S3016R.12440 | Left: S3016L.09340–S3016L.12440' },
      { label: 'Catalogue Code (TT Gr.5)', value: 'Right: T3016R.09340–T3016R.12440 | Left: T3016L.09340–T3016L.12440' },
      { label: 'Configuration', value: 'Right (R) and Left (L) Anatomical Variants' },
      { label: 'Available Diameters', value: '∅ 9.0mm, ∅ 10.0mm, ∅ 11.0mm, ∅ 12.0mm' },
      { label: 'Available Lengths', value: '340mm, 360mm, 380mm, 400mm, 420mm, 440mm' },
      { label: 'Compatible Screws', value: '4.9mm Inter-Locking Screw, 6.4mm Proximal Femoral Screw' },
      { label: 'Associated End Caps', value: '0mm, 5mm, 10mm, 15mm (SS: S3017.00–15 | TT: T3017.00–15)' },
      { label: 'Material', value: 'Stainless Steel 316L / Titanium Grade 5' },
      { label: 'Catalogue Reference', value: 'Nailing Products Catalogue — Page 08' }
    ],
    featured: false
  },
  {
    slug: 'recon-nail',
    name: 'Recon Nail (Reconstruction Femur Nail)',
    category: 'nailing-systems',
    description: 'Long reconstruction femoral nail providing proximal femoral neck fixation via two cephalocervical screws in combination with distal shaft locking for ipsilateral femoral neck and shaft fractures.',
    image: '/images/products/recon-nail.jpg',
    specs: [
      { label: 'Catalogue Code (SS316L)', value: 'Right: S3018R.09340–S3018R.12440 | Left: S3018L.09340–S3018L.12440' },
      { label: 'Catalogue Code (TT Gr.5)', value: 'Right: T3018R.09340–T3018R.12440 | Left: T3018L.09340–T3018L.12440' },
      { label: 'Configuration', value: 'Right (R) and Left (L) Anatomical Variants' },
      { label: 'Available Diameters', value: '∅ 9.0mm, ∅ 10.0mm, ∅ 11.0mm, ∅ 12.0mm' },
      { label: 'Available Lengths', value: '340mm, 360mm, 380mm, 400mm, 420mm, 440mm' },
      { label: 'Compatible Screws', value: '4.9mm Inter-Locking Screw, 6.4mm Proximal Femoral Screw' },
      { label: 'Material', value: 'Stainless Steel 316L / Titanium Grade 5' },
      { label: 'Catalogue Reference', value: 'Nailing Products Catalogue — Page 09' }
    ],
    featured: false
  },
  {
    slug: 'recon-nail-short',
    name: 'Recon Nail Short',
    category: 'nailing-systems',
    description: 'Short reconstruction nail engineered for pertrochanteric fractures, intertrochanteric fractures, and combined basocervical hip fracture patterns.',
    image: '/images/products/recon-nail-short.jpg',
    specs: [
      { label: 'Catalogue Code (SS316L)', value: 'S3020.09180 – S3020.12220' },
      { label: 'Catalogue Code (TT Gr.5)', value: 'T3020.09180 – T3020.12220' },
      { label: 'Available Diameters', value: '∅ 9.0mm, ∅ 10.0mm, ∅ 11.0mm, ∅ 12.0mm' },
      { label: 'Available Lengths', value: '180mm, 200mm, 220mm' },
      { label: 'Compatible Screws', value: '4.9mm Inter-Locking Screw, 6.4mm Proximal Femoral Screw' },
      { label: 'Associated End Caps', value: '0mm, 5mm, 10mm, 15mm (SS: S3019.00–15 | TT: T3019.00–15)' },
      { label: 'Material', value: 'Stainless Steel 316L / Titanium Grade 5' },
      { label: 'Catalogue Reference', value: 'Nailing Products Catalogue — Page 10' }
    ],
    featured: false
  },
  {
    slug: 'inter-locking-humerus-nail',
    name: 'Inter-Locking Humerus Nail',
    category: 'nailing-systems',
    description: 'Antegrade and retrograde intramedullary humeral nail designed for humeral shaft fractures, non-unions, and pathological lesions with multi-hole proximal and distal fixation.',
    image: '/images/products/inter-locking-humerus-nail.jpg',
    specs: [
      { label: 'Catalogue Code (SS316L)', value: 'S3021.06180 – S3021.09300' },
      { label: 'Catalogue Code (TT Gr.5)', value: 'T3021.06180 – T3021.09300' },
      { label: 'Available Diameters', value: '∅ 6.0mm, ∅ 7.0mm, ∅ 8.0mm, ∅ 9.0mm' },
      { label: 'Available Lengths', value: '180mm, 200mm, 220mm, 240mm, 260mm, 280mm, 300mm' },
      { label: 'Compatible Screws', value: '3.9mm, 3.4mm, 2.9mm Inter-Locking Screws' },
      { label: 'Associated End Caps', value: '0mm, 5mm, 10mm, 15mm (SS: S3022.00–15 | TT: T3022.00–15)' },
      { label: 'Material', value: 'Stainless Steel 316L / Titanium Grade 5' },
      { label: 'Catalogue Reference', value: 'Nailing Products Catalogue — Page 11' }
    ],
    featured: true
  },
  {
    slug: 'humerus-nail',
    name: 'Humerus Nail',
    category: 'nailing-systems',
    description: 'Intramedullary humeral shaft fixation nail with targeted transverse locking holes utilizing dedicated 3.4mm interlocking bolts for rotational stability.',
    image: '/images/products/humerus-nail.jpg',
    specs: [
      { label: 'Catalogue Code (SS316L)', value: 'S3023.06180 – S3023.09300' },
      { label: 'Catalogue Code (TT Gr.5)', value: 'T3023.06180 – T3023.09300' },
      { label: 'Available Diameters', value: '∅ 6.0mm, ∅ 7.0mm, ∅ 8.0mm, ∅ 9.0mm' },
      { label: 'Available Lengths', value: '180mm, 200mm, 220mm, 240mm, 260mm, 280mm, 300mm' },
      { label: 'Compatible Screws', value: '3.4mm Inter-Locking Bolt' },
      { label: 'Associated End Caps', value: '0mm, 5mm, 10mm, 15mm (SS: S3024.00–15 | TT: T3024.00–15)' },
      { label: 'Material', value: 'Stainless Steel 316L / Titanium Grade 5' },
      { label: 'Catalogue Reference', value: 'Nailing Products Catalogue — Page 12' }
    ],
    featured: false
  },
  {
    slug: 'multilock-humerus-short-nail',
    name: 'Multilock Humerus Short Nail',
    category: 'nailing-systems',
    description: 'Anatomical short humeral nail for proximal humerus 2-part, 3-part, and select 4-part fractures with multi-planar locking options and suture eyelets.',
    image: '/images/products/multilock-humerus-short-nail.jpg',
    specs: [
      { label: 'Catalogue Code (TT Gr.5)', value: 'Right: T3025R.65150–T3025R.85150 | Left: T3025L.65150–T3025L.85150' },
      { label: 'Configuration', value: 'Right (R) and Left (L) Anatomical Variants' },
      { label: 'Available Diameters', value: '∅ 6.5mm, ∅ 7.0mm, ∅ 7.5mm, ∅ 8.0mm, ∅ 8.5mm' },
      { label: 'Length', value: '150mm' },
      { label: 'Compatible Screws', value: '3.5mm, 4.0mm, 4.5mm Multilock Screws' },
      { label: 'Material', value: 'Titanium Grade 5' },
      { label: 'Catalogue Reference', value: 'Nailing Products Catalogue — Page 13' }
    ],
    featured: false
  },
  {
    slug: 'multilock-humerus-long-nail',
    name: 'Multilock Humerus Long Nail',
    category: 'nailing-systems',
    description: 'Extended multi-lock humeral nail system for combined proximal humeral fractures with diaphyseal extension, offering multi-planar angular stable screw fixation.',
    image: '/images/products/multilock-humerus-long-nail.jpg',
    specs: [
      { label: 'Catalogue Code (TT Gr.5)', value: 'Right: T3026R.65180–T3026R.80300 | Left: T3026L.65180–T3026L.80300' },
      { label: 'Configuration', value: 'Right (R) and Left (L) Anatomical Variants' },
      { label: 'Available Diameters', value: '∅ 6.5mm, ∅ 7.0mm, ∅ 7.5mm, ∅ 8.0mm' },
      { label: 'Available Lengths', value: '180mm, 200mm, 220mm, 240mm, 260mm, 280mm, 300mm' },
      { label: 'Compatible Screws', value: '3.5mm, 4.0mm, 4.5mm Multilock Screws' },
      { label: 'Associated End Caps', value: '0mm, 5mm, 10mm, 15mm (SS: S3027.00–15 | TT: T3027.00–15)' },
      { label: 'Material', value: 'Titanium Grade 5' },
      { label: 'Catalogue Reference', value: 'Nailing Products Catalogue — Page 14' }
    ],
    featured: false
  },
  {
    slug: 'proximal-femur-nail-pfn',
    name: 'Proximal Femur Nail (PFN 130° / 135°)',
    category: 'nailing-systems',
    description: 'Long cephalomedullary nail system featuring dual proximal screw fixation (anti-rotation hip pin and femoral neck lag screw) designed for high-instability pertrochanteric and subtrochanteric fractures.',
    image: '/images/products/proximal-femur-nail-pfn.jpg',
    specs: [
      { label: 'Catalogue Code 130° (SS316L)', value: 'S3028.09340 – S3028.12420' },
      { label: 'Catalogue Code 135° (SS316L)', value: 'S3030.09340 – S3030.12420' },
      { label: 'Catalogue Code 130° (TT Gr.5)', value: 'T3028.09340 – T3028.12420' },
      { label: 'Catalogue Code 135° (TT Gr.5)', value: 'T3030.09340 – T3030.12420' },
      { label: 'CCD Angles', value: '130° and 135°' },
      { label: 'Available Diameters', value: '∅ 9.0mm, ∅ 10.0mm, ∅ 11.0mm, ∅ 12.0mm' },
      { label: 'Available Lengths', value: '340mm, 360mm, 380mm, 400mm, 420mm' },
      { label: 'Compatible Screws', value: '4.9mm Inter-Locking Screw, 6.4mm Proximal Femoral Screw, 8.0mm Proximal Femoral Screw' },
      { label: 'Material', value: 'Stainless Steel 316L / Titanium Grade 5' },
      { label: 'Catalogue Reference', value: 'Nailing Products Catalogue — Pages 15–16' }
    ],
    featured: true
  },
  {
    slug: 'proximal-femur-nail-short',
    name: 'Proximal Femur Nail Short (PFN Short 130° / 135°)',
    category: 'nailing-systems',
    description: 'Short cephalomedullary nail (250mm) engineered for stable osteosynthesis of trochanteric and intertrochanteric fractures with dual proximal femoral screw configuration.',
    image: '/images/products/proximal-femur-nail-short.jpg',
    specs: [
      { label: 'Catalogue Code 130° (SS316L)', value: 'S3032.09250 – S3032.12250' },
      { label: 'Catalogue Code 135° (SS316L)', value: 'S3034.09250 – S3034.12250' },
      { label: 'Catalogue Code 130° (TT Gr.5)', value: 'T3032.09250 – T3032.12250' },
      { label: 'Catalogue Code 135° (TT Gr.5)', value: 'T3034.09250 – T3034.12250' },
      { label: 'CCD Angles', value: '130° and 135°' },
      { label: 'Length', value: '250mm' },
      { label: 'Available Diameters', value: '∅ 9.0mm, ∅ 10.0mm, ∅ 11.0mm, ∅ 12.0mm' },
      { label: 'Compatible Screws', value: '4.9mm Inter-Locking Screw, 6.4mm Proximal Femoral Screw, 8.0mm Proximal Femoral Screw' },
      { label: 'Associated End Caps', value: '0mm, 5mm, 10mm, 15mm (SS: S3033.00–15 | TT: T3033.00–15)' },
      { label: 'Material', value: 'Stainless Steel 316L / Titanium Grade 5' },
      { label: 'Catalogue Reference', value: 'Nailing Products Catalogue — Page 17' }
    ],
    featured: false
  },
  {
    slug: 'trochanteric-femur-nail-short',
    name: 'Trochanteric Femur Nail Short (TFN Short 130° / 135°)',
    category: 'nailing-systems',
    description: 'Compact 180mm trochanteric nail with optimized mediolateral angle for minimally invasive entry through the trochanteric tip in elderly hip fracture management.',
    image: '/images/products/trochanteric-femur-nail-short.jpg',
    specs: [
      { label: 'Catalogue Code 130° (SS316L)', value: 'S3035.09180 – S3035.12180' },
      { label: 'Catalogue Code 135° (SS316L)', value: 'S3037.09180 – S3037.12180' },
      { label: 'Catalogue Code 130° (TT Gr.5)', value: 'T3035.09180 – T3035.12180' },
      { label: 'Catalogue Code 135° (TT Gr.5)', value: 'T3037.09180 – T3037.12180' },
      { label: 'CCD Angles', value: '130° and 135°' },
      { label: 'Length', value: '180mm' },
      { label: 'Available Diameters', value: '∅ 9.0mm, ∅ 10.0mm, ∅ 11.0mm, ∅ 12.0mm' },
      { label: 'Compatible Screws', value: '4.9mm Inter-Locking Screw, 6.4mm Proximal Femoral Screw, 8.0mm Proximal Femoral Screw' },
      { label: 'Associated End Caps', value: '0mm, 5mm, 10mm, 15mm (SS: S3036.00–15 | TT: T3036.00–15)' },
      { label: 'Material', value: 'Stainless Steel 316L / Titanium Grade 5' },
      { label: 'Catalogue Reference', value: 'Nailing Products Catalogue — Page 18' }
    ],
    featured: false
  },
  {
    slug: 'pfna-nail-long',
    name: 'P.F.N.A. Nail Long (Proximal Femoral Nail Antirotation)',
    category: 'nailing-systems',
    description: 'Anatomic long intramedullary nail with single helical blade technology for femoral neck compaction and superior cut-out resistance in osteoporotic trochanteric and subtrochanteric fractures.',
    image: '/images/products/pfna-nail-long.jpg',
    specs: [
      { label: 'Catalogue Code (SS316L)', value: 'Right: S3038R.09340–S3038R.12420 | Left: S3038L.09340–S3038L.12420' },
      { label: 'Catalogue Code (TT Gr.5)', value: 'Right: T3038R.09340–T3038R.12420 | Left: T3038L.09340–T3038L.12420' },
      { label: 'Configuration', value: 'Right (R) and Left (L) Anatomical Variants' },
      { label: 'Available Diameters', value: '∅ 9.0mm, ∅ 10.0mm, ∅ 11.0mm, ∅ 12.0mm' },
      { label: 'Available Lengths', value: '340mm, 360mm, 380mm, 400mm, 420mm' },
      { label: 'Compatible Components', value: '4.9mm Inter-Locking Screw, P.F.N.A. Lag Screw, P.F.N.A. Helical Nail Blade' },
      { label: 'Material', value: 'Stainless Steel 316L / Titanium Grade 5' },
      { label: 'Catalogue Reference', value: 'Nailing Products Catalogue — Page 19' }
    ],
    featured: true
  },
  {
    slug: 'pfna-nail-short',
    name: 'P.F.N.A. Nail Short (170mm / 240mm)',
    category: 'nailing-systems',
    description: 'Short intramedullary antirotation system in 170mm and 240mm lengths designed for pertrochanteric fractures (AO/OTA 31-A1 and 31-A2) with biomechanically optimized helical blade fixation.',
    image: '/images/products/pfna-nail-short.jpg',
    specs: [
      { label: 'Catalogue Code (SS316L)', value: 'S3040.09170 – S3040.12240' },
      { label: 'Catalogue Code (TT Gr.5)', value: 'T3040.09170 – T3040.12240' },
      { label: 'Available Diameters', value: '∅ 9.0mm, ∅ 10.0mm, ∅ 11.0mm, ∅ 12.0mm' },
      { label: 'Available Lengths', value: '170mm, 240mm' },
      { label: 'Compatible Components', value: '4.9mm Inter-Locking Screw, P.F.N.A. Lag Screw, P.F.N.A. Helical Nail Blade' },
      { label: 'Associated End Caps', value: 'End Cap With Pin, Standard End Cap, Lock Screw (SS: S3041–43 | TT: T3041–43)' },
      { label: 'Material', value: 'Stainless Steel 316L / Titanium Grade 5' },
      { label: 'Catalogue Reference', value: 'Nailing Products Catalogue — Page 20' }
    ],
    featured: false
  },
  {
    slug: 'pfna-plus-nail-long',
    name: 'P.F.N.A. Plus Nail Long',
    category: 'nailing-systems',
    description: 'Advanced titanium long intramedullary hip fracture system featuring anatomical bow and integrated compression blade mechanism for complex proximal femur reconstructions.',
    image: '/images/products/pfna-plus-nail-long.jpg',
    specs: [
      { label: 'Catalogue Code (TT Gr.5)', value: 'Right: T3044R.09340–T3044R.12420 | Left: T3044L.09340–T3044L.12420' },
      { label: 'Configuration', value: 'Right (R) and Left (L) Anatomical Variants' },
      { label: 'Available Diameters', value: '∅ 9.0mm, ∅ 10.0mm, ∅ 11.0mm, ∅ 12.0mm' },
      { label: 'Available Lengths', value: '340mm, 360mm, 380mm, 400mm, 420mm' },
      { label: 'Compatible Components', value: '4.9mm Inter-Locking Screw Type-II, P.F.N.A. Plus Compression Blade / Screw' },
      { label: 'Material', value: 'Titanium Grade 5' },
      { label: 'Catalogue Reference', value: 'Nailing Products Catalogue — Page 21' }
    ],
    featured: false
  },
  {
    slug: 'pfna-plus-nail-short',
    name: 'P.F.N.A. Plus Nail Short',
    category: 'nailing-systems',
    description: 'Titanium short proximal femoral nail in 170mm, 200mm, and 240mm lengths featuring specialized dynamic locking and compression screw technology for unstable pertrochanteric fractures.',
    image: '/images/products/pfna-plus-nail-short.jpg',
    specs: [
      { label: 'Catalogue Code (TT Gr.5)', value: 'T3046.09170 – T3046.12240' },
      { label: 'Available Diameters', value: '∅ 9.0mm, ∅ 10.0mm, ∅ 11.0mm, ∅ 12.0mm' },
      { label: 'Available Lengths', value: '170mm, 200mm, 240mm' },
      { label: 'Compatible Components', value: '4.9mm Inter-Locking Screw Type-II, P.F.N.A. Plus Compression Blade / Screw' },
      { label: 'Associated End Caps', value: '0mm, 5mm, 10mm, 15mm & Lock Screw (TT: T3047.00–15, T3048.00)' },
      { label: 'Material', value: 'Titanium Grade 5' },
      { label: 'Catalogue Reference', value: 'Nailing Products Catalogue — Page 22' }
    ],
    featured: false
  },
  {
    slug: 'supracondylar-femoral-nail',
    name: 'Supracondylar Femoral Nail',
    category: 'nailing-systems',
    description: 'Retrograde intramedullary nail designed for supracondylar distal femur fractures, periprosthetic fractures above total knee arthroplasty, and distal femoral non-unions.',
    image: '/images/products/supracondylar-femoral-nail.jpg',
    specs: [
      { label: 'Catalogue Code (SS316L)', value: 'S3049.09150 – S3049.12300' },
      { label: 'Catalogue Code (TT Gr.5)', value: 'T3049.09150 – T3049.12300' },
      { label: 'Available Diameters', value: '∅ 9.0mm, ∅ 10.0mm, ∅ 11.0mm, ∅ 12.0mm' },
      { label: 'Available Lengths', value: '150mm, 200mm, 250mm, 300mm' },
      { label: 'Compatible Screws', value: '4.9mm Inter-Locking Screw, 6.5mm Cancellous Screw Fully Threaded' },
      { label: 'Associated End Caps', value: '0mm, 5mm, 10mm, 15mm (SS: S3050.00–15 | TT: T3050.00–15)' },
      { label: 'Material', value: 'Stainless Steel 316L / Titanium Grade 5' },
      { label: 'Catalogue Reference', value: 'Nailing Products Catalogue — Page 23' }
    ],
    featured: false
  },
  {
    slug: 'retrograde-femoral-nail',
    name: 'Retrograde Femoral Nail',
    category: 'nailing-systems',
    description: 'Comprehensive retrograde femoral nailing system (180mm–400mm) for distal third femoral shaft fractures, ipsilateral femoral and tibial fractures (floating knee), and polytrauma patients.',
    image: '/images/products/retrograde-femoral-nail.jpg',
    specs: [
      { label: 'Catalogue Code (SS316L)', value: 'S3051.09180 – S3051.12400' },
      { label: 'Catalogue Code (TT Gr.5)', value: 'T3051.09180 – T3051.12400' },
      { label: 'Available Diameters', value: '∅ 9.0mm, ∅ 10.0mm, ∅ 11.0mm, ∅ 12.0mm' },
      { label: 'Available Lengths', value: '180mm, 200mm, 280mm, 300mm, 320mm, 340mm, 360mm, 380mm, 400mm' },
      { label: 'Compatible Screws', value: '4.9mm Inter-Locking Screw' },
      { label: 'Associated End Caps', value: '0mm, 5mm, 10mm, 15mm (SS: S3052.00–15 | TT: T3052.00–15)' },
      { label: 'Material', value: 'Stainless Steel 316L / Titanium Grade 5' },
      { label: 'Catalogue Reference', value: 'Nailing Products Catalogue — Page 24' }
    ],
    featured: false
  },
  {
    slug: 'ankle-arthrodesis-nail',
    name: 'Ankle Arthrodesis Nail',
    category: 'nailing-systems',
    description: 'Tibiotalocalcaneal (TTC) retrograde arthrodesis nail designed for severe hindfoot and ankle joint fusion, Charcot neuroarthropathy, failed ankle replacements, and avascular talar necrosis.',
    image: '/images/products/ankle-arthrodesis-nail.jpg',
    specs: [
      { label: 'Catalogue Code (SS316L)', value: 'S3053.09150 – S3053.12300' },
      { label: 'Catalogue Code (TT Gr.5)', value: 'T3053.09150 – T3053.12300' },
      { label: 'Available Diameters', value: '∅ 9.0mm, ∅ 10.0mm, ∅ 11.0mm, ∅ 12.0mm' },
      { label: 'Available Lengths', value: '150mm, 180mm, 210mm, 240mm, 270mm, 300mm' },
      { label: 'Compatible Components', value: '4.9mm Inter-Locking Screw, Ankle Arthrodesis Compression Screw (S3055.70 / T3055.70)' },
      { label: 'Associated End Caps', value: '0mm, 5mm, 10mm, 15mm (SS: S3054.00–15 | TT: T3054.00–15)' },
      { label: 'Material', value: 'Stainless Steel 316L / Titanium Grade 5' },
      { label: 'Catalogue Reference', value: 'Nailing Products Catalogue — Page 25' }
    ],
    featured: false
  },
  {
    slug: 'elastic-nail-ten',
    name: 'Titanium Elastic Nail (TEN / Elastic Nail)',
    category: 'nailing-systems',
    description: 'Flexible intramedullary nails engineered for pediatric diaphyseal long bone fractures (femur, tibia, humerus, forearm) and adult clavicle or small bone stabilization.',
    image: '/images/products/elastic-nail-ten.jpg',
    specs: [
      { label: 'Catalogue Code (SS316L)', value: 'S3056.15300 – S3056.40440' },
      { label: 'Catalogue Code (TT Gr.5)', value: 'T3056.15300 – T3056.40440' },
      { label: 'Available Diameters', value: '∅ 1.5mm, ∅ 2.0mm, ∅ 2.5mm, ∅ 3.0mm, ∅ 3.5mm, ∅ 4.0mm' },
      { label: 'Available Lengths', value: '300mm, 400mm, 440mm' },
      { label: 'Associated End Caps', value: '∅ 1.5–2.5mm and ∅ 3.0–4.0mm (SS: S3057.25/40 | TT: T3057.25/40)' },
      { label: 'Material', value: 'Titanium Grade 5 / Stainless Steel 316L' },
      { label: 'Catalogue Reference', value: 'Nailing Products Catalogue — Page 26' }
    ],
    featured: true
  },
  {
    slug: 'kuntscher-cloverleaf-nail-femur',
    name: 'Kuntscher Cloverleaf Nail For Femur (K-Nail Femur)',
    category: 'nailing-systems',
    description: 'Classic slotted cloverleaf cross-section femoral intramedullary nail providing three-point contact and elastic impaction for transverse and short oblique femoral midshaft fractures.',
    image: '/images/products/kuntscher-cloverleaf-nail-femur.jpg',
    specs: [
      { label: 'Catalogue Code (SS316L)', value: 'S3058.06200 – S3058.13440' },
      { label: 'Cross-Section Profile', value: 'Open Cloverleaf (C-Type Slotted) Elastic Profile' },
      { label: 'Available Diameters', value: '∅ 6.0mm, ∅ 7.0mm, ∅ 8.0mm, ∅ 9.0mm, ∅ 10.0mm, ∅ 11.0mm, ∅ 12.0mm, ∅ 13.0mm' },
      { label: 'Available Lengths', value: '200mm to 440mm (in 10mm increments across 25 size steps)' },
      { label: 'Material', value: 'Stainless Steel 316L' },
      { label: 'Catalogue Reference', value: 'Nailing Products Catalogue — Page 27' }
    ],
    featured: false
  },
  {
    slug: 'v-nail-for-tibia',
    name: 'V-Nail For Tibia',
    category: 'nailing-systems',
    description: 'Anatomic V-profile fluted intramedullary nail for stabilization of tibial diaphysis fractures offering torsional resistance and predictable endosteal fit.',
    image: '/images/products/v-nail-for-tibia.jpg',
    specs: [
      { label: 'Catalogue Code (SS316L)', value: 'S3059.06200 – S3059.12360' },
      { label: 'Cross-Section Profile', value: 'V-Shaped Fluted Longitudinal Profile' },
      { label: 'Available Diameters', value: '∅ 6.0mm, ∅ 7.0mm, ∅ 8.0mm, ∅ 9.0mm, ∅ 10.0mm, ∅ 11.0mm, ∅ 12.0mm' },
      { label: 'Available Lengths', value: '200mm to 360mm (in 10mm increments across 17 size steps)' },
      { label: 'Material', value: 'Stainless Steel 316L' },
      { label: 'Catalogue Reference', value: 'Nailing Products Catalogue — Page 28' }
    ],
    featured: false
  },
  {
    slug: 'enders-nail',
    name: 'Enders Nail',
    category: 'nailing-systems',
    description: 'Curved flexible condylo-cephalic intramedullary nail for multiple pin bundle osteosynthesis of intertrochanteric, subtrochanteric, and shaft fractures.',
    image: '/images/products/enders-nail.jpg',
    specs: [
      { label: 'Catalogue Code (SS316L)', value: 'S3060.20160 – S3060.45440' },
      { label: 'Available Diameters', value: '∅ 2.0mm, ∅ 2.5mm, ∅ 3.0mm, ∅ 3.5mm, ∅ 4.0mm, ∅ 4.5mm' },
      { label: 'Available Lengths', value: '160mm to 440mm (in 10mm increments across 29 size steps)' },
      { label: 'Design Feature', value: 'Eyelet drive head with flattened distal bevel for stacked insertion' },
      { label: 'Material', value: 'Stainless Steel 316L' },
      { label: 'Catalogue Reference', value: 'Nailing Products Catalogue — Page 29' }
    ],
    featured: false
  },
  {
    slug: 'square-nail-radius-ulna',
    name: 'Square Nail For Radius & Ulna',
    category: 'nailing-systems',
    description: 'Square section forearm intramedullary nails engineered for rotational and axial stabilization of radius and ulna fractures with minimal periosteal disruption.',
    image: '/images/products/square-nail-radius-ulna.jpg',
    specs: [
      { label: 'Catalogue Code Radius (SS316L)', value: 'S3061.20160 – S3061.40280' },
      { label: 'Catalogue Code Ulna (SS316L)', value: 'S3062.20160 – S3062.40280' },
      { label: 'Anatomical Variants', value: 'Radius Specific and Ulna Specific Implants' },
      { label: 'Available Diameters', value: '∅ 2.0mm, ∅ 2.5mm, ∅ 3.0mm, ∅ 3.5mm, ∅ 4.0mm' },
      { label: 'Available Lengths', value: '160mm to 280mm (in 10mm increments)' },
      { label: 'Material', value: 'Stainless Steel 316L' },
      { label: 'Catalogue Reference', value: 'Nailing Products Catalogue — Page 30' }
    ],
    featured: false
  },
  {
    slug: 'rush-nail',
    name: 'Rush Nail',
    category: 'nailing-systems',
    description: 'Dynamic hooked-head intramedullary pin for resilient long bone fracture fixation, utilizing dynamic elastic compression for stable bone union.',
    image: '/images/products/rush-nail.jpg',
    specs: [
      { label: 'Catalogue Code (SS316L)', value: 'S3063.20160 – S3063.45360' },
      { label: 'Head Geometry', value: 'Spoon-beveled hooked head with sledge-runner point' },
      { label: 'Available Diameters', value: '∅ 2.0mm, ∅ 2.5mm, ∅ 3.0mm, ∅ 3.5mm, ∅ 4.0mm, ∅ 4.5mm' },
      { label: 'Available Lengths', value: '160mm to 360mm (in 10mm increments)' },
      { label: 'Material', value: 'Stainless Steel 316L' },
      { label: 'Catalogue Reference', value: 'Nailing Products Catalogue — Page 31' }
    ],
    featured: false
  },
  {
    slug: 'screw-intramedullary-nail',
    name: 'Screw Intramedullary Nail',
    category: 'nailing-systems',
    description: 'Threaded tip intramedullary nail for pediatric, hand, and specialized orthopaedic fixation requiring positive cortical anchoring and length maintenance.',
    image: '/images/products/screw-intramedullary-nail.jpg',
    specs: [
      { label: 'Catalogue Code (SS316L)', value: 'S3064.20160 – S3064.35300' },
      { label: 'Available Diameters', value: '∅ 2.0mm, ∅ 2.5mm, ∅ 3.0mm, ∅ 3.5mm' },
      { label: 'Available Lengths', value: '160mm, 170mm, 180mm, 190mm, 200mm, 210mm, 220mm, 240mm, 260mm, 280mm, 300mm' },
      { label: 'Design Feature', value: 'Threaded proximal tip for stable cortical engagement' },
      { label: 'Material', value: 'Stainless Steel 316L' },
      { label: 'Catalogue Reference', value: 'Nailing Products Catalogue — Page 32' }
    ],
    featured: false
  },
  {
    slug: 'interlocking-screws-nailing-hardware',
    name: 'Inter-Locking Screws, Bolts & Fixation Hardware',
    category: 'nailing-systems',
    description: 'Comprehensive suite of cortical, cancellous, and self-tapping interlocking screws, proximal femoral screws, and P.F.N.A. helical blades from 2.9mm to 8.0mm in SS316L and Titanium Grade 5.',
    image: '/images/products/interlocking-screws-nailing-hardware.jpg',
    specs: [
      { label: '2.9mm Inter-Locking Screw', value: '16mm – 50mm (SS: S1064.016–050 | TT: T1064.016–050)' },
      { label: '3.4mm Inter-Locking Screw', value: '16mm – 50mm (SS: S1065.016–050 | TT: T1065.016–050)' },
      { label: '3.4mm Inter-Locking Bolt', value: '16mm – 50mm (SS: S1075.016–050 | TT: T1075.016–050)' },
      { label: '3.9mm Inter-Locking Screw', value: '16mm – 90mm (SS: S1066.016–090 | TT: T1066.016–090)' },
      { label: '4.9mm Inter-Locking Screw', value: '16mm – 100mm (SS: S1067.016–100 | TT: T1067.016–100)' },
      { label: '4.3mm & 4.7mm Expert Screws', value: '26mm – 90mm (SS: S1072–73 | TT: T1072–73)' },
      { label: '6.4mm & 8.0mm Hip Screws', value: '55mm – 120mm (SS: S1070–71 | TT: T1070–71)' },
      { label: 'P.F.N.A. Lag Screw & Blades', value: '65mm – 125mm (SS: S1077 | TT: T1077)' },
      { label: 'Materials', value: 'Implant-Grade Stainless Steel 316L / Titanium Grade 5' },
      { label: 'Catalogue Reference', value: 'Nailing Products Catalogue — Pages 33–41' }
    ],
    featured: false
  }
];

const tsContent = `import type { Product } from '../types/index.ts';

export const nailingProducts: Product[] = ${JSON.stringify(nailingProducts, null, 2)};
`;

fs.writeFileSync('src/data/nailingProducts.ts', tsContent);
console.log('Successfully generated src/data/nailingProducts.ts with', nailingProducts.length, 'products!');
