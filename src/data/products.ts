export interface Product {
  slug: string;
  name: string;
  category: string; // category slug
  description: string;
  image: string;
  specs: { label: string; value: string }[];
  featured: boolean;
}

export const products: Product[] = [
  {
    "slug": "volar-distal-radius-locking-plate-2-7mm",
    "name": "Volar Distal Radius Locking Plate 2.7mm",
    "category": "distal-radius-locking-plates",
    "description": "Anatomically pre-contoured volar locking plate designed for stable fixation of intra-articular and extra-articular distal radius fractures. Features low profile design with divergent subchondral locking screws.",
    "image": "/images/products/distal-radius-volar.jpg",
    "specs": [
      {
        "label": "Catalogue Code (SS316L)",
        "value": "Right: S2125R.03–S2125R.07 | Left: S2125L.03–S2125L.07"
      },
      {
        "label": "Catalogue Code (TT Gr.5)",
        "value": "Right: T2125R.03–T2125R.07 | Left: T2125L.03–T2125L.07"
      },
      {
        "label": "Available Sizes",
        "value": "3, 4, 5, 6, 7 Holes"
      },
      {
        "label": "Compatible Screws",
        "value": "2.7mm Locking Screw, 2.7mm Cortex Screw, 2.4mm Locking Screw"
      },
      {
        "label": "Configuration",
        "value": "Right and Left Anatomical Variants"
      },
      {
        "label": "Material",
        "value": "Stainless Steel 316L / Titanium Grade 5"
      },
      {
        "label": "Image Representation",
        "value": "Authentic family studio render (Refer to technical specifications below for exact model dimensions & hole counts)"
      }
    ],
    "featured": true
  },
  {
    "slug": "l-distal-radius-locking-plate-2-7mm",
    "name": "L Distal Radius Locking Plate 2.7mm",
    "category": "distal-radius-locking-plates",
    "description": "L-shaped distal radius locking plate engineered for styloid process fixation and radial column stabilization with dedicated 3-hole head geometry.",
    "image": "/images/products/distal-radius-volar.jpg",
    "specs": [
      {
        "label": "Catalogue Code (SS316L)",
        "value": "Right: S2122R.03–S2122R.06 | Left: S2122L.03–S2122L.06"
      },
      {
        "label": "Catalogue Code (TT Gr.5)",
        "value": "Right: T2122R.03–T2122R.06 | Left: T2122L.03–T2122L.06"
      },
      {
        "label": "Head Geometry",
        "value": "Head 3 Hole"
      },
      {
        "label": "Shaft Lengths",
        "value": "3, 4, 5, 6 Holes"
      },
      {
        "label": "Compatible Screws",
        "value": "2.7mm Locking Screw, 2.7mm Cortex Screw"
      },
      {
        "label": "Material",
        "value": "Stainless Steel 316L / Titanium Grade 5"
      },
      {
        "label": "Image Representation",
        "value": "Authentic family studio render (Refer to technical specifications below for exact model dimensions & hole counts)"
      }
    ],
    "featured": false
  },
  {
    "slug": "volar-distal-radius-extra-articular-locking-plate-2-7mm",
    "name": "Volar Distal Radius Extra-articular Locking Plate 2.7mm",
    "category": "distal-radius-locking-plates",
    "description": "Designed specifically for extra-articular distal radius fractures with 4-hole transverse head contour providing buttress support without joint penetration.",
    "image": "/images/products/distal-radius-volar.jpg",
    "specs": [
      {
        "label": "Catalogue Code (SS316L)",
        "value": "Right: S2127R.03–S2127R.06 | Left: S2127L.03–S2127L.06"
      },
      {
        "label": "Catalogue Code (TT Gr.5)",
        "value": "Right: T2127R.03–T2127R.06 | Left: T2127L.03–T2127L.06"
      },
      {
        "label": "Head Configuration",
        "value": "4 Holes Head"
      },
      {
        "label": "Shaft Sizes",
        "value": "4+3, 4+4, 4+5, 4+6 Holes"
      },
      {
        "label": "Compatible Screws",
        "value": "2.7mm Locking Screw, 2.7mm Cortex Screw"
      },
      {
        "label": "Material",
        "value": "Stainless Steel 316L / Titanium Grade 5"
      },
      {
        "label": "Image Representation",
        "value": "Authentic family studio render (Refer to technical specifications below for exact model dimensions & hole counts)"
      }
    ],
    "featured": false
  },
  {
    "slug": "volar-va-two-column-distal-radius-locking-plate-2-4-2-7mm",
    "name": "Volar V.A. Two-Column Distal Radius Locking Plate Wide 2.4-2.7mm",
    "category": "distal-radius-locking-plates",
    "description": "Variable-angle (V.A.) two-column locking plate offering ±15° screw angulation for targeted fragment capture across both radial and intermediate columns.",
    "image": "/images/products/distal-radius-volar.jpg",
    "specs": [
      {
        "label": "Catalogue Code (SS316L)",
        "value": "Right: S2131R.02–S2131R.05 | Left: S2131L.02–S2131L.05"
      },
      {
        "label": "Catalogue Code (TT Gr.5)",
        "value": "Right: T2131R.02–T2131R.05 | Left: T2131L.02–T2131L.05"
      },
      {
        "label": "Head Configuration",
        "value": "6 / 7 Holes Wide"
      },
      {
        "label": "Shaft Sizes",
        "value": "2, 3, 4, 5 Holes"
      },
      {
        "label": "Compatible Screws",
        "value": "2.4mm V.A. Locking Screw, 2.7mm Locking Screw, 2.7mm Cortex Screw"
      },
      {
        "label": "Material",
        "value": "Stainless Steel 316L / Titanium Grade 5"
      },
      {
        "label": "Image Representation",
        "value": "Authentic family studio render (Refer to technical specifications below for exact model dimensions & hole counts)"
      }
    ],
    "featured": true
  },
  {
    "slug": "volar-two-column-distal-radius-locking-plate-wide-2-7mm",
    "name": "Volar Two-Column Distal Radius Locking Plate Wide 2.7mm",
    "category": "distal-radius-locking-plates",
    "description": "Standard two-column plate design providing broad subchondral support with distinct radial and intermediate column screw trajectories.",
    "image": "/images/products/distal-radius-volar.jpg",
    "specs": [
      {
        "label": "Catalogue Code (SS316L)",
        "value": "Right: S2133R.02–S2133R.05 | Left: S2133L.02–S2133L.05"
      },
      {
        "label": "Catalogue Code (TT Gr.5)",
        "value": "Right: T2133R.02–T2133R.05 | Left: T2133L.02–T2133L.05"
      },
      {
        "label": "Head Configuration",
        "value": "7 Holes Wide"
      },
      {
        "label": "Shaft Sizes",
        "value": "2, 3, 4, 5 Holes"
      },
      {
        "label": "Compatible Screws",
        "value": "2.7mm Locking Screw, 2.7mm Cortex Screw"
      },
      {
        "label": "Material",
        "value": "Stainless Steel 316L / Titanium Grade 5"
      },
      {
        "label": "Image Representation",
        "value": "Authentic family studio render (Refer to technical specifications below for exact model dimensions & hole counts)"
      }
    ],
    "featured": false
  },
  {
    "slug": "volar-copies-distal-radius-locking-plate-2-7-3-5mm",
    "name": "Volar Copies Distal Radius Locking Plate Standard 2.7-3.5mm",
    "category": "distal-radius-locking-plates",
    "description": "Hybrid locking plate utilizing 2.7mm locking screws distally in the 6-hole head and robust 3.5mm cortex/locking screws in the diaphysis for high purchase strength.",
    "image": "/images/products/distal-radius-volar.jpg",
    "specs": [
      {
        "label": "Catalogue Code (SS316L)",
        "value": "Right: S2138R.03–S2138R.06 | Left: S2138L.03–S2138L.06"
      },
      {
        "label": "Catalogue Code (TT Gr.5)",
        "value": "Right: T2138R.03–T2138R.06 | Left: T2138L.03–T2138L.06"
      },
      {
        "label": "Head Configuration",
        "value": "6 Holes"
      },
      {
        "label": "Shaft Sizes",
        "value": "3, 4, 5, 6 Holes"
      },
      {
        "label": "Compatible Screws",
        "value": "3.5mm Locking Screw, 3.5mm Cortex Screw, 2.7mm Locking Screw"
      },
      {
        "label": "Material",
        "value": "Stainless Steel 316L / Titanium Grade 5"
      },
      {
        "label": "Image Representation",
        "value": "Authentic family studio render (Refer to technical specifications below for exact model dimensions & hole counts)"
      }
    ],
    "featured": false
  },
  {
    "slug": "volar-rim-distal-radius-locking-plate-standard-2-7mm",
    "name": "Volar Rim Distal Radius Locking Plate Standard 2.7mm",
    "category": "distal-radius-locking-plates",
    "description": "Distal rim contour plate specifically designed for marginal rim fractures and radiocarpal fracture-dislocations requiring extreme distal screw fixation.",
    "image": "/images/products/distal-radius-volar.jpg",
    "specs": [
      {
        "label": "Catalogue Code (SS316L)",
        "value": "Right: S2140R.03–S2140R.06 | Left: S2140L.03–S2140L.06"
      },
      {
        "label": "Catalogue Code (TT Gr.5)",
        "value": "Right: T2140R.03–T2140R.06 | Left: T2140L.03–T2140L.06"
      },
      {
        "label": "Head Configuration",
        "value": "6 Holes Distal Rim"
      },
      {
        "label": "Shaft Sizes",
        "value": "3, 4, 5, 6 Holes"
      },
      {
        "label": "Compatible Screws",
        "value": "2.7mm Locking Screw, 2.7mm Cortex Screw"
      },
      {
        "label": "Material",
        "value": "Stainless Steel 316L / Titanium Grade 5"
      },
      {
        "label": "Image Representation",
        "value": "Authentic family studio render (Refer to technical specifications below for exact model dimensions & hole counts)"
      }
    ],
    "featured": false
  },
  {
    "slug": "va-volar-rim-distal-radius-locking-plate-2-7mm",
    "name": "V.A. Volar Rim Distal Radius Locking Plate Standard 2.7mm",
    "category": "distal-radius-locking-plates",
    "description": "Variable-angle volar rim plate combining marginal buttress tabs with multi-axial locking trajectory to preserve joint anatomy and prevent extensor tendon irritation.",
    "image": "/images/products/distal-radius-volar.jpg",
    "specs": [
      {
        "label": "Catalogue Code (SS316L)",
        "value": "Right: S2309R.03–S2309R.06 | Left: S2309L.03–S2309L.06"
      },
      {
        "label": "Catalogue Code (TT Gr.5)",
        "value": "Right: T2309R.03–T2309R.06 | Left: T2309L.03–T2309L.06"
      },
      {
        "label": "Head Configuration",
        "value": "6 Holes Variable Angle Rim"
      },
      {
        "label": "Shaft Sizes",
        "value": "3, 4, 5, 6 Holes"
      },
      {
        "label": "Compatible Screws",
        "value": "2.4mm V.A. Locking Screw, 2.7mm Locking Screw"
      },
      {
        "label": "Material",
        "value": "Stainless Steel 316L / Titanium Grade 5"
      },
      {
        "label": "Image Representation",
        "value": "Authentic family studio render (Refer to technical specifications below for exact model dimensions & hole counts)"
      }
    ],
    "featured": false
  },
  {
    "slug": "wrist-locking-plate-medium-2-5mm",
    "name": "Wrist Locking Plate Medium 2.5mm",
    "category": "distal-radius-locking-plates",
    "description": "Low-profile wrist fusion and periarticular fixation plate designed for carpal, radiocarpal, and distal radial reconstructive procedures.",
    "image": "/images/products/distal-radius-volar.jpg",
    "specs": [
      {
        "label": "Catalogue Code (TT Gr.5)",
        "value": "Right: T2173R.03–T2173R.07 | Left: T2173L.03–T2173L.07"
      },
      {
        "label": "Available Sizes",
        "value": "3, 4, 5, 6, 7 Holes"
      },
      {
        "label": "Compatible Screws",
        "value": "2.5mm Locking Screw, 2.5mm Cortex Screw"
      },
      {
        "label": "Profile",
        "value": "Medium Profile Anatomical Contour"
      },
      {
        "label": "Material",
        "value": "Titanium Grade 5"
      },
      {
        "label": "Image Representation",
        "value": "Authentic family studio render (Refer to technical specifications below for exact model dimensions & hole counts)"
      }
    ],
    "featured": false
  },
  {
    "slug": "proximal-radius-neck-locking-plate-2-7mm",
    "name": "Proximal Radius Neck Locking Plate 2.7mm",
    "category": "distal-radius-locking-plates",
    "description": "Anatomically curved plate tailored for fractures of the radial head and radial neck, designed to respect the safe zone of the radial head without impinging on the PRUJ.",
    "image": "/images/products/distal-radius-volar.jpg",
    "specs": [
      {
        "label": "Catalogue Code (SS316L)",
        "value": "S2135.02–S2135.05"
      },
      {
        "label": "Catalogue Code (TT Gr.5)",
        "value": "T2135.02–T2135.05"
      },
      {
        "label": "Available Sizes",
        "value": "2, 3, 4, 5 Holes"
      },
      {
        "label": "Compatible Screws",
        "value": "2.7mm Locking Screw, 2.7mm Cortex Screw"
      },
      {
        "label": "Material",
        "value": "Stainless Steel 316L / Titanium Grade 5"
      },
      {
        "label": "Image Representation",
        "value": "Authentic family studio render (Refer to technical specifications below for exact model dimensions & hole counts)"
      }
    ],
    "featured": false
  },
  {
    "slug": "proximal-lateral-tibia-locking-plate-5-0mm",
    "name": "Proximal Lateral Tibia Locking Plate 5.0mm",
    "category": "tibia-locking-plates",
    "description": "Anatomically shaped plate for lateral stabilization of proximal tibial plateau fractures, metaphyseal fractures, and nonunions with raft screw support under the articular surface.",
    "image": "/images/products/tibia-plate.jpg",
    "specs": [
      {
        "label": "Catalogue Code (SS316L)",
        "value": "Right: S2071R.03–S2071R.13 | Left: S2071L.03–S2071L.13"
      },
      {
        "label": "Catalogue Code (TT Gr.5)",
        "value": "Right: T2071R.03–T2071R.13 | Left: T2071L.03–T2071L.13"
      },
      {
        "label": "Available Sizes",
        "value": "3 to 13 Holes"
      },
      {
        "label": "Compatible Screws",
        "value": "5.0mm Locking Screw, 5.0mm Cancellous Locking Screw, 4.5mm Cortex Screw"
      },
      {
        "label": "Configuration",
        "value": "Right and Left Anatomical Variants"
      },
      {
        "label": "Material",
        "value": "Stainless Steel 316L / Titanium Grade 5"
      },
      {
        "label": "Image Representation",
        "value": "Authentic family studio render (Refer to technical specifications below for exact model dimensions & hole counts)"
      }
    ],
    "featured": true
  },
  {
    "slug": "proximal-lateral-tibia-locking-plate-6-5-5-0mm",
    "name": "Proximal Lateral Tibia Locking Plate 6.5-5.0mm",
    "category": "tibia-locking-plates",
    "description": "Heavy-duty proximal lateral tibial locking plate featuring dual proximal 6.5mm cancellous screw holes for massive condylar split depression fractures.",
    "image": "/images/products/tibia-plate.jpg",
    "specs": [
      {
        "label": "Catalogue Code (SS316L)",
        "value": "Right: S2072R.03–S2072R.13 | Left: S2072L.03–S2072L.13"
      },
      {
        "label": "Catalogue Code (TT Gr.5)",
        "value": "Right: T2072R.03–T2072R.13 | Left: T2072L.03–T2072L.13"
      },
      {
        "label": "Available Sizes",
        "value": "3 to 13 Holes"
      },
      {
        "label": "Compatible Screws",
        "value": "5.0mm Locking Screw, 6.5mm Cancellous Locking Screw, 4.5mm Cortex Screw"
      },
      {
        "label": "Material",
        "value": "Stainless Steel 316L / Titanium Grade 5"
      },
      {
        "label": "Image Representation",
        "value": "Authentic family studio render (Refer to technical specifications below for exact model dimensions & hole counts)"
      }
    ],
    "featured": false
  },
  {
    "slug": "distal-medial-tibia-locking-plate-with-tab-3-5mm",
    "name": "Distal Medial Tibia Locking Plate With Tab 3.5mm",
    "category": "tibia-locking-plates",
    "description": "Low-profile anatomically contoured plate with distal tab providing dedicated medial malleolus buttressing and subchondral pilon fracture stabilization.",
    "image": "/images/products/tibia-plate.jpg",
    "specs": [
      {
        "label": "Catalogue Code (SS316L)",
        "value": "Right: S2078R.04–S2078R.14 | Left: S2078L.04–S2078L.14"
      },
      {
        "label": "Catalogue Code (TT Gr.5)",
        "value": "Right: T2078R.04–T2078R.14 | Left: T2078L.04–T2078L.14"
      },
      {
        "label": "Available Sizes",
        "value": "4 to 14 Holes"
      },
      {
        "label": "Compatible Screws",
        "value": "3.5mm Locking Screw, 3.5mm Cancellous Locking Screw, 3.5mm Cortex Screw"
      },
      {
        "label": "Features",
        "value": "Medial Malleolar Distal Extension Tab"
      },
      {
        "label": "Material",
        "value": "Stainless Steel 316L / Titanium Grade 5"
      },
      {
        "label": "Image Representation",
        "value": "Authentic family studio render (Refer to technical specifications below for exact model dimensions & hole counts)"
      }
    ],
    "featured": true
  },
  {
    "slug": "distal-medial-tibia-low-bend-locking-plate-3-5mm",
    "name": "Distal Medial Tibia Low Bend Locking Plate 3.5mm",
    "category": "tibia-locking-plates",
    "description": "Pre-shaped with subtle low-bend contour to minimize soft tissue tension along the subcutaneous border of the distal anteromedial tibia.",
    "image": "/images/products/tibia-plate.jpg",
    "specs": [
      {
        "label": "Catalogue Code (SS316L)",
        "value": "Right: S2082R.04–S2082R.14 | Left: S2082L.04–S2082L.14"
      },
      {
        "label": "Catalogue Code (TT Gr.5)",
        "value": "Right: T2082R.04–T2082R.14 | Left: T2082L.04–T2082L.14"
      },
      {
        "label": "Available Sizes",
        "value": "4 to 14 Holes"
      },
      {
        "label": "Compatible Screws",
        "value": "3.5mm Locking Screw, 3.5mm Cancellous Locking Screw, 3.5mm Cortex Screw"
      },
      {
        "label": "Material",
        "value": "Stainless Steel 316L / Titanium Grade 5"
      },
      {
        "label": "Image Representation",
        "value": "Authentic family studio render (Refer to technical specifications below for exact model dimensions & hole counts)"
      }
    ],
    "featured": false
  },
  {
    "slug": "anterolateral-distal-tibia-locking-plate-3-5mm",
    "name": "Anterolateral Distal Tibia Locking Plate 3.5mm",
    "category": "tibia-locking-plates",
    "description": "Anterolateral distal tibia plate designed for pilon fractures with joint depression where a medial incision would compromise soft-tissue viability.",
    "image": "/images/products/tibia-plate.jpg",
    "specs": [
      {
        "label": "Catalogue Code (SS316L)",
        "value": "Right: S2083R.04–S2083R.14 | Left: S2083L.04–S2083L.14"
      },
      {
        "label": "Catalogue Code (TT Gr.5)",
        "value": "Right: T2083R.04–T2083R.14 | Left: T2083L.04–T2083L.14"
      },
      {
        "label": "Available Sizes",
        "value": "4 to 14 Holes"
      },
      {
        "label": "Compatible Screws",
        "value": "3.5mm Locking Screw, 3.5mm Cancellous Locking Screw, 3.5mm Cortex Screw"
      },
      {
        "label": "Material",
        "value": "Stainless Steel 316L / Titanium Grade 5"
      },
      {
        "label": "Image Representation",
        "value": "Authentic family studio render (Refer to technical specifications below for exact model dimensions & hole counts)"
      }
    ],
    "featured": false
  },
  {
    "slug": "metaphyseal-locking-plate-distal-medial-tibia-3-5-5-0mm",
    "name": "Metaphyseal Locking Plate For Distal Medial Tibia 3.5-5.0mm",
    "category": "tibia-locking-plates",
    "description": "Transition plate combining distal 3.5mm locking hole clusters with diaphyseal 5.0mm dynamic locking holes for extensive distal tibial meta-diaphyseal fractures.",
    "image": "/images/products/tibia-plate.jpg",
    "specs": [
      {
        "label": "Catalogue Code (SS316L)",
        "value": "Right: S2094R.03–S2094R.11 | Left: S2094L.03–S2094L.11"
      },
      {
        "label": "Catalogue Code (TT Gr.5)",
        "value": "Right: T2094R.03–T2094R.11 | Left: T2094L.03–T2094L.11"
      },
      {
        "label": "Available Sizes",
        "value": "4+3 to 4+11 Holes"
      },
      {
        "label": "Compatible Screws",
        "value": "3.5mm Locking Screw, 5.0mm Locking Screw, 3.5mm Cortex Screw"
      },
      {
        "label": "Material",
        "value": "Stainless Steel 316L / Titanium Grade 5"
      },
      {
        "label": "Image Representation",
        "value": "Authentic family studio render (Refer to technical specifications below for exact model dimensions & hole counts)"
      }
    ],
    "featured": false
  },
  {
    "slug": "proximal-tibia-locking-plate-3-5mm",
    "name": "Proximal Tibia Locking Plate 3.5mm",
    "category": "tibia-locking-plates",
    "description": "Low-profile 3.5mm proximal tibia plate providing multi-directional screw fixation in smaller bone morphology or complex comminuted tibial plateau injuries.",
    "image": "/images/products/tibia-plate.jpg",
    "specs": [
      {
        "label": "Catalogue Code (SS316L)",
        "value": "Right: S2088R.04–S2088R.12 | Left: S2088L.04–S2088L.12"
      },
      {
        "label": "Catalogue Code (TT Gr.5)",
        "value": "Right: T2088R.04–T2088R.12 | Left: T2088L.04–T2088L.12"
      },
      {
        "label": "Available Sizes",
        "value": "4 to 12 Holes"
      },
      {
        "label": "Compatible Screws",
        "value": "3.5mm Locking Screw, 3.5mm Cancellous Locking Screw, 3.5mm Cortex Screw"
      },
      {
        "label": "Material",
        "value": "Stainless Steel 316L / Titanium Grade 5"
      },
      {
        "label": "Image Representation",
        "value": "Authentic family studio render (Refer to technical specifications below for exact model dimensions & hole counts)"
      }
    ],
    "featured": false
  },
  {
    "slug": "proximal-tibia-raft-locking-plate-3-5mm",
    "name": "Proximal Tibia Locking Plate 3.5mm (Raft Plate)",
    "category": "tibia-locking-plates",
    "description": "Equipped with parallel transverse subchondral screw holes forming a rigid horizontal raft to prevent articular subsidence in lateral tibial plateau fractures.",
    "image": "/images/products/tibia-plate.jpg",
    "specs": [
      {
        "label": "Catalogue Code (SS316L)",
        "value": "Right: S2114R.04–S2114R.12 | Left: S2114L.04–S2114L.12"
      },
      {
        "label": "Catalogue Code (TT Gr.5)",
        "value": "Right: T2114R.04–T2114R.12 | Left: T2114L.04–T2114L.12"
      },
      {
        "label": "Available Sizes",
        "value": "4 to 12 Holes"
      },
      {
        "label": "Compatible Screws",
        "value": "3.5mm Locking Screw, 3.5mm Cortex Screw"
      },
      {
        "label": "Special Function",
        "value": "Subchondral Raft Screw Alignment"
      },
      {
        "label": "Material",
        "value": "Stainless Steel 316L / Titanium Grade 5"
      },
      {
        "label": "Image Representation",
        "value": "Authentic family studio render (Refer to technical specifications below for exact model dimensions & hole counts)"
      }
    ],
    "featured": false
  },
  {
    "slug": "proximal-medial-tibia-locking-plate-3-5mm",
    "name": "Proximal Medial Tibia Locking Plate 3.5mm",
    "category": "tibia-locking-plates",
    "description": "Anatomical medial tibial plateau plate engineered to resist varus collapse and support posteromedial shear fragments.",
    "image": "/images/products/tibia-plate.jpg",
    "specs": [
      {
        "label": "Catalogue Code (SS316L)",
        "value": "Right: S2090R.04–S2090R.12 | Left: S2090L.04–S2090L.12"
      },
      {
        "label": "Catalogue Code (TT Gr.5)",
        "value": "Right: T2090R.04–T2090R.12 | Left: T2090L.04–T2090L.12"
      },
      {
        "label": "Available Sizes",
        "value": "4 to 12 Holes"
      },
      {
        "label": "Compatible Screws",
        "value": "3.5mm Locking Screw, 3.5mm Cancellous Locking Screw"
      },
      {
        "label": "Material",
        "value": "Stainless Steel 316L / Titanium Grade 5"
      },
      {
        "label": "Image Representation",
        "value": "Authentic family studio render (Refer to technical specifications below for exact model dimensions & hole counts)"
      }
    ],
    "featured": false
  },
  {
    "slug": "posterior-medial-proximal-tibia-locking-plate-3-5mm",
    "name": "Posterior Medial Proximal Tibia Locking Plate 3.5mm",
    "category": "tibia-locking-plates",
    "description": "Compact posterior-medial buttress plate for direct posterior approach in Moore Type I/II and Schatzker IV/VI coronal split fractures.",
    "image": "/images/products/tibia-plate.jpg",
    "specs": [
      {
        "label": "Catalogue Code (SS316L)",
        "value": "S2117.01–S2117.04"
      },
      {
        "label": "Catalogue Code (TT Gr.5)",
        "value": "T2117.01–T2117.04"
      },
      {
        "label": "Available Sizes",
        "value": "1, 2, 3, 4 Holes"
      },
      {
        "label": "Compatible Screws",
        "value": "3.5mm Locking Screw, 3.5mm Cancellous Locking Screw"
      },
      {
        "label": "Material",
        "value": "Stainless Steel 316L / Titanium Grade 5"
      },
      {
        "label": "Image Representation",
        "value": "Authentic family studio render (Refer to technical specifications below for exact model dimensions & hole counts)"
      }
    ],
    "featured": false
  },
  {
    "slug": "proximal-medial-tibia-locking-plate-5-0mm",
    "name": "Proximal Medial Tibia Locking Plate 5.0mm",
    "category": "tibia-locking-plates",
    "description": "Rigid 5.0mm medial plate providing robust load-sharing buttress stability in bicondylar tibial plateau fracture configurations.",
    "image": "/images/products/tibia-plate.jpg",
    "specs": [
      {
        "label": "Catalogue Code (SS316L)",
        "value": "Right: S2091R.04–S2091R.12 | Left: S2091L.04–S2091L.12"
      },
      {
        "label": "Catalogue Code (TT Gr.5)",
        "value": "Right: T2091R.04–T2091R.12 | Left: T2091L.04–T2091L.12"
      },
      {
        "label": "Available Sizes",
        "value": "4 to 12 Holes"
      },
      {
        "label": "Compatible Screws",
        "value": "5.0mm Locking Screw, 5.0mm Cancellous Locking Screw"
      },
      {
        "label": "Material",
        "value": "Stainless Steel 316L / Titanium Grade 5"
      },
      {
        "label": "Image Representation",
        "value": "Authentic family studio render (Refer to technical specifications below for exact model dimensions & hole counts)"
      }
    ],
    "featured": false
  },
  {
    "slug": "tomofix-locking-plate-5-0mm",
    "name": "Tomofix High Tibia Osteotomy Locking Plate 5.0mm",
    "category": "tibia-locking-plates",
    "description": "Specialized medial opening-wedge high tibial osteotomy (HTO) internal fixator plate providing rigid angle-stable fixation without bone graft collapse.",
    "image": "/images/products/tibia-plate.jpg",
    "specs": [
      {
        "label": "Catalogue Code (SS316L)",
        "value": "S2118.04"
      },
      {
        "label": "Catalogue Code (TT Gr.5)",
        "value": "T2118.04 (also T2357.04)"
      },
      {
        "label": "Standard Profile",
        "value": "4 Hole Diaphyseal with T-Shaped Proximal Cluster"
      },
      {
        "label": "Compatible Screws",
        "value": "5.0mm Locking Screw, 5.0mm Cancellous Locking Screw"
      },
      {
        "label": "Indication",
        "value": "Medial Opening-Wedge High Tibial Osteotomy"
      },
      {
        "label": "Material",
        "value": "Stainless Steel 316L / Titanium Grade 5"
      },
      {
        "label": "Image Representation",
        "value": "Authentic family studio render (Refer to technical specifications below for exact model dimensions & hole counts)"
      }
    ],
    "featured": false
  },
  {
    "slug": "distal-femur-locking-plate-5-0mm",
    "name": "Distal Femur Locking Plate 5.0mm",
    "category": "femur-locking-plates",
    "description": "Anatomically contoured condylar locking plate for supracondylar, intra-articular, and periprosthetic distal femur fractures. Multi-hole distal cluster provides stable screw fixations above the knee joint.",
    "image": "/images/products/femur-plate.jpg",
    "specs": [
      {
        "label": "Catalogue Code (SS316L)",
        "value": "Right: S2076R.03–S2076R.13 | Left: S2076L.03–S2076L.13"
      },
      {
        "label": "Catalogue Code (TT Gr.5)",
        "value": "Right: T2076R.03–T2076R.13 | Left: T2076L.03–T2076L.13"
      },
      {
        "label": "Available Sizes",
        "value": "3 to 13 Holes"
      },
      {
        "label": "Compatible Screws",
        "value": "5.0mm Locking Screw, 5.0mm Cancellous Locking Screw, 4.5mm Cortex Screw"
      },
      {
        "label": "Configuration",
        "value": "Right and Left Anatomical Variants"
      },
      {
        "label": "Material",
        "value": "Stainless Steel 316L / Titanium Grade 5"
      },
      {
        "label": "Image Representation",
        "value": "Authentic family studio render (Refer to technical specifications below for exact model dimensions & hole counts)"
      }
    ],
    "featured": true
  },
  {
    "slug": "distal-femur-locking-plate-6-5-5-0mm",
    "name": "Distal Femur Locking Plate 6.5-5.0mm",
    "category": "femur-locking-plates",
    "description": "High-caliber distal femoral plate incorporating 6.5mm cancellous locking screws in the distal condyle for osteoporotic bone and complex comminution.",
    "image": "/images/products/femur-plate.jpg",
    "specs": [
      {
        "label": "Catalogue Code (SS316L)",
        "value": "Right: S2077R.03–S2077R.13 | Left: S2077L.03–S2077L.13"
      },
      {
        "label": "Catalogue Code (TT Gr.5)",
        "value": "Right: T2077R.03–T2077R.13 | Left: T2077L.03–T2077L.13"
      },
      {
        "label": "Available Sizes",
        "value": "3 to 13 Holes"
      },
      {
        "label": "Compatible Screws",
        "value": "5.0mm Locking Screw, 6.5mm Cancellous Locking Screw, 4.5mm Cortex Screw"
      },
      {
        "label": "Material",
        "value": "Stainless Steel 316L / Titanium Grade 5"
      },
      {
        "label": "Image Representation",
        "value": "Authentic family studio render (Refer to technical specifications below for exact model dimensions & hole counts)"
      }
    ],
    "featured": false
  },
  {
    "slug": "proximal-femur-locking-plate-7-3-5-0mm",
    "name": "Proximal Femur Locking Plate 7.3-5.0mm",
    "category": "femur-locking-plates",
    "description": "Comprehensive proximal femoral plate featuring converging 7.3mm cannulated locking screws across the femoral neck paired with a rigid 5.0mm diaphyseal shaft.",
    "image": "/images/products/femur-plate.jpg",
    "specs": [
      {
        "label": "Catalogue Code (SS316L)",
        "value": "Right: S2084R.02–S2084R.12 | Left: S2084L.02–S2084L.12"
      },
      {
        "label": "Catalogue Code (TT Gr.5)",
        "value": "Right: T2084R.02–T2084R.12 | Left: T2084L.02–T2084L.12"
      },
      {
        "label": "Available Sizes",
        "value": "2 to 12 Holes"
      },
      {
        "label": "Compatible Screws",
        "value": "5.0mm Locking Screw, 7.3mm Cannulated Cancellous Locking Screw, 4.5mm Cortex Screw"
      },
      {
        "label": "Material",
        "value": "Stainless Steel 316L / Titanium Grade 5"
      },
      {
        "label": "Image Representation",
        "value": "Authentic family studio render (Refer to technical specifications below for exact model dimensions & hole counts)"
      }
    ],
    "featured": true
  },
  {
    "slug": "proximal-femoral-locking-plate-type-1-5-0-6-5mm",
    "name": "Proximal Femoral Locking Plate Type-I 5.0-6.5mm",
    "category": "femur-locking-plates",
    "description": "Type-I proximal femoral fixation plate utilizing 6.5mm cancellous locking screws for trochanteric and subtrochanteric fracture stability.",
    "image": "/images/products/femur-plate.jpg",
    "specs": [
      {
        "label": "Catalogue Code (SS316L)",
        "value": "S2085.03–S2085.11"
      },
      {
        "label": "Catalogue Code (TT Gr.5)",
        "value": "T2085.03–T2085.11"
      },
      {
        "label": "Available Sizes",
        "value": "3 to 11 Holes"
      },
      {
        "label": "Compatible Screws",
        "value": "5.0mm Locking Screw, 6.5mm Cancellous Locking Screw"
      },
      {
        "label": "Material",
        "value": "Stainless Steel 316L / Titanium Grade 5"
      },
      {
        "label": "Image Representation",
        "value": "Authentic family studio render (Refer to technical specifications below for exact model dimensions & hole counts)"
      }
    ],
    "featured": false
  },
  {
    "slug": "proximal-femoral-locking-plate-type-3-5-0-7-3mm",
    "name": "Proximal Femoral Locking Plate Type-III 5.0-7.3mm",
    "category": "femur-locking-plates",
    "description": "Type-III proximal femoral system with reinforced lateral trochanteric profile designed to withstand peak axial and torsional forces.",
    "image": "/images/products/femur-plate.jpg",
    "specs": [
      {
        "label": "Catalogue Code (TT Gr.5)",
        "value": "Right: T2406R.03–T2406R.11 | Left: T2406L.03–T2406L.11"
      },
      {
        "label": "Available Sizes",
        "value": "3 to 11 Holes"
      },
      {
        "label": "Compatible Screws",
        "value": "5.0mm Locking Screw, 7.3mm Cannulated Cancellous Locking Screw"
      },
      {
        "label": "Material",
        "value": "Titanium Grade 5"
      },
      {
        "label": "Image Representation",
        "value": "Authentic family studio render (Refer to technical specifications below for exact model dimensions & hole counts)"
      }
    ],
    "featured": false
  },
  {
    "slug": "proximal-femur-lateral-locking-plate-5-0mm",
    "name": "Proximal Femur Lateral Locking Plate 5.0mm",
    "category": "femur-locking-plates",
    "description": "Lateral contoured plate optimized for intertrochanteric, subtrochanteric, and combined proximal femoral shaft fractures.",
    "image": "/images/products/femur-plate.jpg",
    "specs": [
      {
        "label": "Catalogue Code (SS316L)",
        "value": "Right: S2337R.04–S2337R.10 | Left: S2337L.04–S2337L.10"
      },
      {
        "label": "Catalogue Code (TT Gr.5)",
        "value": "Right: T2337R.04–T2337R.10 | Left: T2337L.04–T2337L.10"
      },
      {
        "label": "Available Sizes",
        "value": "4 to 10 Holes"
      },
      {
        "label": "Compatible Screws",
        "value": "5.0mm Locking Screw, 5.0mm Cancellous Locking Screw"
      },
      {
        "label": "Material",
        "value": "Stainless Steel 316L / Titanium Grade 5"
      },
      {
        "label": "Image Representation",
        "value": "Authentic family studio render (Refer to technical specifications below for exact model dimensions & hole counts)"
      }
    ],
    "featured": false
  },
  {
    "slug": "proximal-femoral-gt-locking-plate-5-0mm",
    "name": "Proximal Femoral GT Locking Plate 5.0mm",
    "category": "femur-locking-plates",
    "description": "Specialized Greater Trochanter (GT) plate designed for isolated trochanteric avulsions and lateral wall reconstruction.",
    "image": "/images/products/femur-plate.jpg",
    "specs": [
      {
        "label": "Catalogue Code (TT Gr.5)",
        "value": "Right: T2176R.04–T2176R.08 | Left: T2176L.04–T2176L.08"
      },
      {
        "label": "Available Sizes",
        "value": "4, 5, 6, 7, 8 Holes"
      },
      {
        "label": "Compatible Screws",
        "value": "5.0mm Locking Screw, 4.5mm Cortex Screw"
      },
      {
        "label": "Material",
        "value": "Titanium Grade 5"
      },
      {
        "label": "Image Representation",
        "value": "Authentic family studio render (Refer to technical specifications below for exact model dimensions & hole counts)"
      }
    ],
    "featured": false
  },
  {
    "slug": "trochanteric-buttress-locking-plate-combined",
    "name": "Trochanteric Buttress Locking Plate Combined with PFN Nail 3.5mm",
    "category": "femur-locking-plates",
    "description": "Designed for use alongside Proximal Femoral Nails (PFN) to provide lateral buttressing and prevent lateral wall blowout in unstable pertrochanteric fractures.",
    "image": "/images/products/femur-plate.jpg",
    "specs": [
      {
        "label": "Catalogue Code (SS316L)",
        "value": "S2302.02–S2302.04"
      },
      {
        "label": "Catalogue Code (TT Gr.5)",
        "value": "T2302.02–T2302.04"
      },
      {
        "label": "Available Sizes",
        "value": "2, 3, 4 Holes"
      },
      {
        "label": "Compatible Screws",
        "value": "3.5mm Locking Screw, 3.5mm Cancellous Locking Screw"
      },
      {
        "label": "Special Function",
        "value": "Co-fixation with Cephalomedullary Nails"
      },
      {
        "label": "Material",
        "value": "Stainless Steel 316L / Titanium Grade 5"
      },
      {
        "label": "Image Representation",
        "value": "Authentic family studio render (Refer to technical specifications below for exact model dimensions & hole counts)"
      }
    ],
    "featured": false
  },
  {
    "slug": "distal-medial-femur-locking-plate-5-0mm",
    "name": "Distal Medial Femur Locking Plate 5.0mm",
    "category": "femur-locking-plates",
    "description": "Medial femoral condylar plate used in dual-plating constructs for severe comminuted distal femoral fractures and nonunions.",
    "image": "/images/products/femur-plate.jpg",
    "specs": [
      {
        "label": "Catalogue Code (SS316L)",
        "value": "Right: S2146R.02–S2146R.08 | Left: S2146L.02–S2146L.08"
      },
      {
        "label": "Catalogue Code (TT Gr.5)",
        "value": "Right: T2146R.02–T2146R.08 | Left: T2146L.02–T2146L.08"
      },
      {
        "label": "Available Sizes",
        "value": "2 to 8 Holes"
      },
      {
        "label": "Compatible Screws",
        "value": "5.0mm Locking Screw, 5.0mm Cancellous Locking Screw"
      },
      {
        "label": "Material",
        "value": "Stainless Steel 316L / Titanium Grade 5"
      },
      {
        "label": "Image Representation",
        "value": "Authentic family studio render (Refer to technical specifications below for exact model dimensions & hole counts)"
      }
    ],
    "featured": false
  },
  {
    "slug": "condylar-buttress-locking-plate-5-0mm",
    "name": "Condylar Buttress Locking Plate 5.0mm",
    "category": "femur-locking-plates",
    "description": "Buttress locking plate contoured for complex intra-articular femoral condyle fractures with sagittal split components.",
    "image": "/images/products/femur-plate.jpg",
    "specs": [
      {
        "label": "Catalogue Code (SS316L)",
        "value": "Right: S2175R.03–S2175R.09 | Left: S2175L.03–S2175L.09"
      },
      {
        "label": "Catalogue Code (TT Gr.5)",
        "value": "Right: T2175R.03–T2175R.09 | Left: T2175L.03–T2175L.09"
      },
      {
        "label": "Available Sizes",
        "value": "3 to 9 Holes"
      },
      {
        "label": "Compatible Screws",
        "value": "5.0mm Locking Screw, 4.5mm Cortex Screw"
      },
      {
        "label": "Material",
        "value": "Stainless Steel 316L / Titanium Grade 5"
      },
      {
        "label": "Image Representation",
        "value": "Authentic family studio render (Refer to technical specifications below for exact model dimensions & hole counts)"
      }
    ],
    "featured": false
  },
  {
    "slug": "dhs-locking-plate-short-barrel",
    "name": "DHS Locking Plate Short Barrel (130° / 135°)",
    "category": "femur-locking-plates",
    "description": "Dynamic Hip Screw (DHS) barrel plate with locking shaft holes, combining controlled dynamic impaction of the femoral neck with angle-stable diaphyseal locking.",
    "image": "/images/products/femur-plate.jpg",
    "specs": [
      {
        "label": "Catalogue Code (SS316L)",
        "value": "S2074.3003–S2074.3010 (130°), S2074.3503–S2074.3510 (135°)"
      },
      {
        "label": "Catalogue Code (TT Gr.5)",
        "value": "T2074.3003–T2074.3010 (130°), T2074.3503–T2074.3510 (135°)"
      },
      {
        "label": "Barrel Angles",
        "value": "130° and 135° Barrel Options"
      },
      {
        "label": "Available Sizes",
        "value": "3 to 10 Holes"
      },
      {
        "label": "Compatible Screws",
        "value": "5.0mm Locking Screw, 4.5mm Cortex Screw, DHS Lag Screw"
      },
      {
        "label": "Material",
        "value": "Stainless Steel 316L / Titanium Grade 5"
      },
      {
        "label": "Image Representation",
        "value": "Authentic family studio render (Refer to technical specifications below for exact model dimensions & hole counts)"
      }
    ],
    "featured": false
  },
  {
    "slug": "proximal-humerus-locking-plate-3-5mm",
    "name": "Proximal Humerus Locking Plate 3.5mm (PHILOS Type)",
    "category": "humerus-locking-plates",
    "description": "Anatomically pre-shaped internal fixation plate for 2-part, 3-part, and 4-part proximal humerus fractures. Features convergent/divergent locking screw configuration for secure purchase in cancellous humeral head bone.",
    "image": "/images/products/humerus-plate.jpg",
    "specs": [
      {
        "label": "Catalogue Code (SS316L)",
        "value": "S2079.02–S2079.10"
      },
      {
        "label": "Catalogue Code (TT Gr.5)",
        "value": "T2079.02–T2079.10"
      },
      {
        "label": "Available Sizes",
        "value": "2, 3, 4, 5, 6, 7, 8, 10 Holes"
      },
      {
        "label": "Compatible Screws",
        "value": "3.5mm Locking Screw, 3.5mm Cancellous Locking Screw, 3.5mm Cortex Screw"
      },
      {
        "label": "Features",
        "value": "Suture holes for rotator cuff tendon reattachment"
      },
      {
        "label": "Material",
        "value": "Stainless Steel 316L / Titanium Grade 5"
      },
      {
        "label": "Image Representation",
        "value": "Authentic family studio render (Refer to technical specifications below for exact model dimensions & hole counts)"
      }
    ],
    "featured": true
  },
  {
    "slug": "proximal-humerus-gt-locking-plate-3-5mm",
    "name": "Proximal Humerus GT Locking Plate 3.5mm",
    "category": "humerus-locking-plates",
    "description": "Contoured specifically for greater tuberosity avulsion and split fractures, preserving supraspinatus tendon insertions.",
    "image": "/images/products/humerus-plate.jpg",
    "specs": [
      {
        "label": "Catalogue Code (TT Gr.5)",
        "value": "Right: T2392R.03–T2392R.06 | Left: T2392L.03–T2392L.06"
      },
      {
        "label": "Available Sizes",
        "value": "3, 4, 5, 6 Holes"
      },
      {
        "label": "Compatible Screws",
        "value": "3.5mm Locking Screw, 3.5mm Cancellous Locking Screw"
      },
      {
        "label": "Material",
        "value": "Titanium Grade 5"
      },
      {
        "label": "Image Representation",
        "value": "Authentic family studio render (Refer to technical specifications below for exact model dimensions & hole counts)"
      }
    ],
    "featured": false
  },
  {
    "slug": "proximal-lateral-humerus-locking-plate-3-5mm",
    "name": "Proximal Lateral Humerus Locking Plate 3.5mm",
    "category": "humerus-locking-plates",
    "description": "Low-profile lateral plate extending from the humeral head down the proximal shaft for extended meta-diaphyseal fracture patterns.",
    "image": "/images/products/humerus-plate.jpg",
    "specs": [
      {
        "label": "Catalogue Code (SS316L)",
        "value": "Right: S2145R.04–S2145R.10 | Left: S2145L.04–S2145L.10"
      },
      {
        "label": "Catalogue Code (TT Gr.5)",
        "value": "Right: T2145R.04–T2145R.10 | Left: T2145L.04–T2145L.10"
      },
      {
        "label": "Available Sizes",
        "value": "4 to 10 Holes"
      },
      {
        "label": "Compatible Screws",
        "value": "3.5mm Locking Screw, 3.5mm Cortex Screw"
      },
      {
        "label": "Material",
        "value": "Stainless Steel 316L / Titanium Grade 5"
      },
      {
        "label": "Image Representation",
        "value": "Authentic family studio render (Refer to technical specifications below for exact model dimensions & hole counts)"
      }
    ],
    "featured": false
  },
  {
    "slug": "distal-humerus-locking-plate-2-7-3-5mm",
    "name": "Distal Humerus Locking Plate Right/Left 2.7-3.5mm",
    "category": "humerus-locking-plates",
    "description": "Dorsolateral distal humerus plate with distal extension wrapping around the lateral epicondyle, used in parallel or orthogonal dual-column fixation constructs.",
    "image": "/images/products/humerus-plate.jpg",
    "specs": [
      {
        "label": "Catalogue Code (SS316L)",
        "value": "Right: S2106R.03–S2106R.14 | Left: S2106L.03–S2106L.14"
      },
      {
        "label": "Catalogue Code (TT Gr.5)",
        "value": "Right: T2106R.03–T2106R.14 | Left: T2106L.03–T2106L.14"
      },
      {
        "label": "Available Sizes",
        "value": "3 to 14 Holes"
      },
      {
        "label": "Compatible Screws",
        "value": "3.5mm Locking Screw, 2.7mm Locking Screw, 3.5mm Cancellous Locking Screw"
      },
      {
        "label": "Material",
        "value": "Stainless Steel 316L / Titanium Grade 5"
      },
      {
        "label": "Image Representation",
        "value": "Authentic family studio render (Refer to technical specifications below for exact model dimensions & hole counts)"
      }
    ],
    "featured": true
  },
  {
    "slug": "distal-medial-humeral-locking-plate-2-7-3-5mm",
    "name": "Distal Medial Humeral Locking Plate 2.7-3.5mm",
    "category": "humerus-locking-plates",
    "description": "Pre-shaped for the medial humeral column, providing distal locking screw trajectories that engage the medial epicondyle and trochlea.",
    "image": "/images/products/humerus-plate.jpg",
    "specs": [
      {
        "label": "Catalogue Code (SS316L)",
        "value": "Right: S2108R.03–S2108R.14 | Left: S2108L.03–S2108L.14"
      },
      {
        "label": "Catalogue Code (TT Gr.5)",
        "value": "Right: T2108R.03–T2108R.14 | Left: T2108L.03–T2108L.14"
      },
      {
        "label": "Available Sizes",
        "value": "3 to 14 Holes"
      },
      {
        "label": "Compatible Screws",
        "value": "3.5mm Locking Screw, 2.7mm Locking Screw, 3.5mm Cortex Screw"
      },
      {
        "label": "Material",
        "value": "Stainless Steel 316L / Titanium Grade 5"
      },
      {
        "label": "Image Representation",
        "value": "Authentic family studio render (Refer to technical specifications below for exact model dimensions & hole counts)"
      }
    ],
    "featured": false
  },
  {
    "slug": "olecranon-locking-plate-3-5mm",
    "name": "Olecranon Locking Plate 3.5mm",
    "category": "humerus-locking-plates",
    "description": "Anatomical proximal ulna plate contoured to wrap over the olecranon tip, providing multi-planar subchondral locking purchase into the trochlear notch.",
    "image": "/images/products/humerus-plate.jpg",
    "specs": [
      {
        "label": "Catalogue Code (SS316L)",
        "value": "Right: S2115R.02–S2115R.12 | Left: S2115L.02–S2115L.12"
      },
      {
        "label": "Catalogue Code (TT Gr.5)",
        "value": "Right: T2115R.02–T2115R.12 | Left: T2115L.02–T2115L.12"
      },
      {
        "label": "Available Sizes",
        "value": "2 to 12 Holes"
      },
      {
        "label": "Compatible Screws",
        "value": "3.5mm Locking Screw, 3.5mm Cancellous Locking Screw, 3.5mm Cortex Screw"
      },
      {
        "label": "Material",
        "value": "Stainless Steel 316L / Titanium Grade 5"
      },
      {
        "label": "Image Representation",
        "value": "Authentic family studio render (Refer to technical specifications below for exact model dimensions & hole counts)"
      }
    ],
    "featured": false
  },
  {
    "slug": "extra-articular-distal-humerus-locking-plate-3-5mm",
    "name": "Extra-articular Distal Humerus Locking Plate 3.5mm",
    "category": "humerus-locking-plates",
    "description": "Designed for extra-articular distal third humerus shaft fractures, avoiding the need for extensive joint dissection while locking the distal metaphysis.",
    "image": "/images/products/humerus-plate.jpg",
    "specs": [
      {
        "label": "Catalogue Code (SS316L)",
        "value": "Right: S2116R.04–S2116R.14 | Left: S2116L.04–S2116L.14"
      },
      {
        "label": "Catalogue Code (TT Gr.5)",
        "value": "Right: T2116R.04–T2116R.14 | Left: T2116L.04–T2116L.14"
      },
      {
        "label": "Available Sizes",
        "value": "4 to 14 Holes"
      },
      {
        "label": "Compatible Screws",
        "value": "3.5mm Locking Screw, 3.5mm Cancellous Locking Screw"
      },
      {
        "label": "Material",
        "value": "Stainless Steel 316L / Titanium Grade 5"
      },
      {
        "label": "Image Representation",
        "value": "Authentic family studio render (Refer to technical specifications below for exact model dimensions & hole counts)"
      }
    ],
    "featured": false
  },
  {
    "slug": "distal-ulna-locking-plate-2-0mm",
    "name": "Distal Ulna Locking Plate 2.0mm",
    "category": "humerus-locking-plates",
    "description": "Micro-profile 2.0mm locking plate contoured to seat over the ulnar styloid and distal ulnar head without soft tissue impingement.",
    "image": "/images/products/humerus-plate.jpg",
    "specs": [
      {
        "label": "Catalogue Code (TT Gr.5)",
        "value": "T2063.05–T2063.09"
      },
      {
        "label": "Available Sizes",
        "value": "5, 6, 7, 8, 9 Holes"
      },
      {
        "label": "Compatible Screws",
        "value": "2.0mm Locking Screw, 2.0mm Micro Cortex Screw"
      },
      {
        "label": "Material",
        "value": "Titanium Grade 5"
      },
      {
        "label": "Image Representation",
        "value": "Authentic family studio render (Refer to technical specifications below for exact model dimensions & hole counts)"
      }
    ],
    "featured": false
  },
  {
    "slug": "small-locking-plate-3-5mm",
    "name": "Small Locking Plate 3.5mm",
    "category": "reconstruction-locking-plates",
    "description": "Universal small fragment straight locking plate for diaphysis fractures of the radius, ulna, fibula, and pelvic reconstruction. Combines dynamic compression with locking stability.",
    "image": "/images/products/reconstruction-plate.jpg",
    "specs": [
      {
        "label": "Catalogue Code (SS316L)",
        "value": "S2057.03–S2057.16"
      },
      {
        "label": "Catalogue Code (TT Gr.5)",
        "value": "T2057.03–T2057.16"
      },
      {
        "label": "Available Sizes",
        "value": "3 to 16 Holes"
      },
      {
        "label": "Compatible Screws",
        "value": "3.5mm Locking Screw, 3.5mm Cancellous Locking Screw, 3.5mm Cortex Screw"
      },
      {
        "label": "Material",
        "value": "Stainless Steel 316L / Titanium Grade 5"
      },
      {
        "label": "Image Representation",
        "value": "Authentic family studio render (Refer to technical specifications below for exact model dimensions & hole counts)"
      }
    ],
    "featured": true
  },
  {
    "slug": "small-locking-plate-2-7mm",
    "name": "Small Locking Plate 2.7mm",
    "category": "reconstruction-locking-plates",
    "description": "Precision small locking plate for forearm, pediatric bones, clavicle, and metacarpal diaphyseal stabilization.",
    "image": "/images/products/reconstruction-plate.jpg",
    "specs": [
      {
        "label": "Catalogue Code (SS316L)",
        "value": "S2087.04–S2087.12"
      },
      {
        "label": "Catalogue Code (TT Gr.5)",
        "value": "T2087.04–T2087.12"
      },
      {
        "label": "Available Sizes",
        "value": "4 to 12 Holes"
      },
      {
        "label": "Compatible Screws",
        "value": "2.7mm Locking Screw, 2.7mm Cortex Screw"
      },
      {
        "label": "Material",
        "value": "Stainless Steel 316L / Titanium Grade 5"
      },
      {
        "label": "Image Representation",
        "value": "Authentic family studio render (Refer to technical specifications below for exact model dimensions & hole counts)"
      }
    ],
    "featured": false
  },
  {
    "slug": "narrow-locking-plate-5-0mm",
    "name": "Narrow Locking Plate 5.0mm",
    "category": "reconstruction-locking-plates",
    "description": "Large fragment straight locking plate for humeral and tibial diaphysis fractures requiring robust bending stiffness.",
    "image": "/images/products/reconstruction-plate.jpg",
    "specs": [
      {
        "label": "Catalogue Code (SS316L)",
        "value": "S2058.04–S2058.20"
      },
      {
        "label": "Catalogue Code (TT Gr.5)",
        "value": "T2058.04–T2058.20"
      },
      {
        "label": "Available Sizes",
        "value": "4 to 20 Holes"
      },
      {
        "label": "Compatible Screws",
        "value": "5.0mm Locking Screw, 5.0mm Cancellous Locking Screw, 4.5mm Cortex Screw"
      },
      {
        "label": "Material",
        "value": "Stainless Steel 316L / Titanium Grade 5"
      },
      {
        "label": "Image Representation",
        "value": "Authentic family studio render (Refer to technical specifications below for exact model dimensions & hole counts)"
      }
    ],
    "featured": false
  },
  {
    "slug": "broad-locking-plate-5-0mm",
    "name": "Broad Locking Plate 5.0mm",
    "category": "reconstruction-locking-plates",
    "description": "Heavy-duty broad plate engineered for femur shaft fractures, complex nonunions, and periprosthetic fractures requiring maximum torsional rigidity.",
    "image": "/images/products/reconstruction-plate.jpg",
    "specs": [
      {
        "label": "Catalogue Code (SS316L)",
        "value": "S2059.04–S2059.22"
      },
      {
        "label": "Catalogue Code (TT Gr.5)",
        "value": "T2059.04–T2059.22"
      },
      {
        "label": "Available Sizes",
        "value": "4 to 22 Holes"
      },
      {
        "label": "Compatible Screws",
        "value": "5.0mm Locking Screw, 5.0mm Cancellous Locking Screw, 4.5mm Cortex Screw, 6.5mm Cancellous Screw"
      },
      {
        "label": "Material",
        "value": "Stainless Steel 316L / Titanium Grade 5"
      },
      {
        "label": "Image Representation",
        "value": "Authentic family studio render (Refer to technical specifications below for exact model dimensions & hole counts)"
      }
    ],
    "featured": true
  },
  {
    "slug": "one-third-tubular-locking-plate-round-hole-3-5mm",
    "name": "One-third Tubular Locking Plate Round Hole 3.5mm",
    "category": "reconstruction-locking-plates",
    "description": "Thin semi-tubular locking plate ideal for lateral malleolus fibula fractures and non-load-bearing cortical bone fixation.",
    "image": "/images/products/reconstruction-plate.jpg",
    "specs": [
      {
        "label": "Catalogue Code (SS316L)",
        "value": "S2110.03–S2110.14"
      },
      {
        "label": "Catalogue Code (TT Gr.5)",
        "value": "T2110.03–T2110.14"
      },
      {
        "label": "Available Sizes",
        "value": "3 to 14 Holes"
      },
      {
        "label": "Compatible Screws",
        "value": "3.5mm Locking Screw, 3.5mm Cancellous Locking Screw, 3.5mm Cortex Screw"
      },
      {
        "label": "Material",
        "value": "Stainless Steel 316L / Titanium Grade 5"
      },
      {
        "label": "Image Representation",
        "value": "Authentic family studio render (Refer to technical specifications below for exact model dimensions & hole counts)"
      }
    ],
    "featured": false
  },
  {
    "slug": "one-third-tubular-locking-plate-dc-hole-3-5mm",
    "name": "One-third Tubular Locking Plate D.C Hole 3.5mm",
    "category": "reconstruction-locking-plates",
    "description": "One-third tubular profile incorporating combination dynamic compression (D.C) and threaded locking holes for flexible screw placement.",
    "image": "/images/products/reconstruction-plate.jpg",
    "specs": [
      {
        "label": "Catalogue Code (SS316L)",
        "value": "S2111.03–S2111.14"
      },
      {
        "label": "Catalogue Code (TT Gr.5)",
        "value": "T2111.03–T2111.14"
      },
      {
        "label": "Available Sizes",
        "value": "3 to 14 Holes"
      },
      {
        "label": "Compatible Screws",
        "value": "3.5mm Locking Screw, 3.5mm Cancellous Locking Screw, 3.5mm Cortex Screw"
      },
      {
        "label": "Material",
        "value": "Stainless Steel 316L / Titanium Grade 5"
      },
      {
        "label": "Image Representation",
        "value": "Authentic family studio render (Refer to technical specifications below for exact model dimensions & hole counts)"
      }
    ],
    "featured": false
  },
  {
    "slug": "reconstruction-locking-plate-straight-dc-hole-2-7mm",
    "name": "Reconstruction Locking Plate Straight DC Hole 2.7mm",
    "category": "reconstruction-locking-plates",
    "description": "Malleable 2.7mm reconstruction plate with scalloped edge geometry allowing 3-dimensional manual contouring for clavicle, pelvis, and mandible.",
    "image": "/images/products/reconstruction-plate.jpg",
    "specs": [
      {
        "label": "Catalogue Code (SS316L)",
        "value": "S2322.04–S2322.25"
      },
      {
        "label": "Catalogue Code (TT Gr.5)",
        "value": "T2322.04–T2322.25"
      },
      {
        "label": "Available Sizes",
        "value": "4 to 25 Holes"
      },
      {
        "label": "Compatible Screws",
        "value": "2.7mm Locking Screw, 2.7mm Cortex Screw"
      },
      {
        "label": "Material",
        "value": "Stainless Steel 316L / Titanium Grade 5"
      },
      {
        "label": "Image Representation",
        "value": "Authentic family studio render (Refer to technical specifications below for exact model dimensions & hole counts)"
      }
    ],
    "featured": false
  },
  {
    "slug": "reconstruction-locking-plate-straight-round-hole-3-5mm",
    "name": "Reconstruction Locking Plate Straight Round Hole 3.5mm",
    "category": "reconstruction-locking-plates",
    "description": "Straight 3.5mm reconstruction plate with round locking holes, easily bent in multiple planes for pelvic rim and periacetabular reconstruction.",
    "image": "/images/products/reconstruction-plate.jpg",
    "specs": [
      {
        "label": "Catalogue Code (SS316L)",
        "value": "S2064.04–S2064.25"
      },
      {
        "label": "Catalogue Code (TT Gr.5)",
        "value": "T2064.04–T2064.25"
      },
      {
        "label": "Available Sizes",
        "value": "4 to 25 Holes"
      },
      {
        "label": "Compatible Screws",
        "value": "3.5mm Locking Screw, 3.5mm Cancellous Locking Screw, 3.5mm Cortex Screw"
      },
      {
        "label": "Material",
        "value": "Stainless Steel 316L / Titanium Grade 5"
      },
      {
        "label": "Image Representation",
        "value": "Authentic family studio render (Refer to technical specifications below for exact model dimensions & hole counts)"
      }
    ],
    "featured": false
  },
  {
    "slug": "reconstruction-locking-plate-straight-dc-hole-3-5mm",
    "name": "Reconstruction Locking Plate Straight D.C Hole 3.5mm",
    "category": "reconstruction-locking-plates",
    "description": "Reconstruction plate combining 3.5mm dynamic compression slots and locking threads, accommodating both axial compression and angular stability.",
    "image": "/images/products/reconstruction-plate.jpg",
    "specs": [
      {
        "label": "Catalogue Code (SS316L)",
        "value": "S2065.04–S2065.25"
      },
      {
        "label": "Catalogue Code (TT Gr.5)",
        "value": "T2065.04–T2065.25"
      },
      {
        "label": "Available Sizes",
        "value": "4 to 25 Holes"
      },
      {
        "label": "Compatible Screws",
        "value": "3.5mm Locking Screw, 3.5mm Cancellous Locking Screw, 3.5mm Cortex Screw"
      },
      {
        "label": "Material",
        "value": "Stainless Steel 316L / Titanium Grade 5"
      },
      {
        "label": "Image Representation",
        "value": "Authentic family studio render (Refer to technical specifications below for exact model dimensions & hole counts)"
      }
    ],
    "featured": false
  },
  {
    "slug": "pediatric-hip-locking-plate-2-7mm",
    "name": "Pediatric Hip Locking Plate 2.7mm (100° / 110° / 130°)",
    "category": "pediatric-locking-plates",
    "description": "Designed specifically for infant and early pediatric proximal femoral varus, valgus, and rotational osteotomies, with dedicated neck screw trajectories.",
    "image": "/images/products/pediatric-hip-plate.jpg",
    "specs": [
      {
        "label": "Angles Available",
        "value": "100°, 110°, 130° Angulation"
      },
      {
        "label": "Available Sizes",
        "value": "3, 4, 5 Holes"
      },
      {
        "label": "Compatible Screws",
        "value": "2.7mm Locking Screw, 2.7mm Cortex Screw"
      },
      {
        "label": "Indication",
        "value": "Pediatric Proximal Femur Osteotomy"
      },
      {
        "label": "Material",
        "value": "Stainless Steel 316L / Titanium Grade 5"
      },
      {
        "label": "Image Representation",
        "value": "Authentic family studio render (Refer to technical specifications below for exact model dimensions & hole counts)"
      }
    ],
    "featured": true
  },
  {
    "slug": "pediatric-hip-locking-plate-3-5mm",
    "name": "Pediatric Hip Locking Plate 3.5mm (100° / 110° / 120°)",
    "category": "pediatric-locking-plates",
    "description": "Intermediate pediatric hip plate providing rigid fixation in children aged 5–10 years undergoing femoral osteotomy or fracture stabilization.",
    "image": "/images/products/pediatric-hip-plate.jpg",
    "specs": [
      {
        "label": "Angles Available",
        "value": "100°, 110°, 130° Angulation"
      },
      {
        "label": "Available Sizes",
        "value": "3, 4, 5, 6 Holes"
      },
      {
        "label": "Compatible Screws",
        "value": "3.5mm Locking Screw, 3.5mm Cancellous Locking Screw"
      },
      {
        "label": "Material",
        "value": "Stainless Steel 316L / Titanium Grade 5"
      },
      {
        "label": "Image Representation",
        "value": "Authentic family studio render (Refer to technical specifications below for exact model dimensions & hole counts)"
      }
    ],
    "featured": false
  },
  {
    "slug": "pediatric-hip-locking-plate-5-0mm",
    "name": "Pediatric Hip Locking Plate 5.0mm (100°–150°)",
    "category": "pediatric-locking-plates",
    "description": "Adolescent hip locking plate offering high load bearing capacity for corrective osteotomy in Perthes disease, SCFE, and hip dysplasia.",
    "image": "/images/products/pediatric-hip-plate.jpg",
    "specs": [
      {
        "label": "Angles Available",
        "value": "100°, 110°, 130° Angulation"
      },
      {
        "label": "Available Sizes",
        "value": "3 to 7 Holes"
      },
      {
        "label": "Compatible Screws",
        "value": "5.0mm Locking Screw, 5.0mm Cancellous Locking Screw"
      },
      {
        "label": "Material",
        "value": "Stainless Steel 316L / Titanium Grade 5"
      },
      {
        "label": "Image Representation",
        "value": "Authentic family studio render (Refer to technical specifications below for exact model dimensions & hole counts)"
      }
    ],
    "featured": false
  },
  {
    "slug": "pediatric-condylar-locking-plate-3-5mm",
    "name": "Pediatric Condylar Locking Plate 3.5mm",
    "category": "pediatric-locking-plates",
    "description": "Distal femoral condylar locking plate designed for pediatric distal femur fractures and supracondylar extension/flexion osteotomies.",
    "image": "/images/products/pediatric-hip-plate.jpg",
    "specs": [
      {
        "label": "Available Sizes",
        "value": "4, 6, 8 Holes"
      },
      {
        "label": "Compatible Screws",
        "value": "3.5mm Locking Screw, 3.5mm Cancellous Locking Screw"
      },
      {
        "label": "Indication",
        "value": "Pediatric Distal Femoral Osteotomy & Fractures"
      },
      {
        "label": "Material",
        "value": "Stainless Steel 316L / Titanium Grade 5"
      },
      {
        "label": "Image Representation",
        "value": "Authentic family studio render (Refer to technical specifications below for exact model dimensions & hole counts)"
      }
    ],
    "featured": false
  },
  {
    "slug": "pediatric-condylar-locking-plate-5-0mm",
    "name": "Pediatric Condylar Locking Plate 5.0mm",
    "category": "pediatric-locking-plates",
    "description": "Robust adolescent distal femoral condylar plate with multi-planar distal screw holes respecting the distal femoral growth physis.",
    "image": "/images/products/pediatric-hip-plate.jpg",
    "specs": [
      {
        "label": "Available Sizes",
        "value": "4, 6, 8, 10 Holes"
      },
      {
        "label": "Compatible Screws",
        "value": "5.0mm Locking Screw, 5.0mm Cancellous Locking Screw"
      },
      {
        "label": "Material",
        "value": "Stainless Steel 316L / Titanium Grade 5"
      },
      {
        "label": "Image Representation",
        "value": "Authentic family studio render (Refer to technical specifications below for exact model dimensions & hole counts)"
      }
    ],
    "featured": false
  },
  {
    "slug": "calcaneal-locking-f-type-plate-3-5mm",
    "name": "Calcaneal Locking F-Type Plate Right/Left 3.5mm",
    "category": "specialized-locking-plates",
    "description": "F-shaped low-profile plate for fixation of intra-articular calcaneus fractures, providing subtalar joint buttressing and tuberosity reduction.",
    "image": "/images/products/calcaneal-plate.jpg",
    "specs": [
      {
        "label": "Catalogue Code (SS316L)",
        "value": "Right: S2097R.60–S2097R.80 | Left: S2097L.60–S2097L.80"
      },
      {
        "label": "Catalogue Code (TT Gr.5)",
        "value": "Right: T2097R.60–T2097R.80 | Left: T2097L.60–T2097L.80"
      },
      {
        "label": "Lengths Available",
        "value": "60mm, 70mm, 80mm"
      },
      {
        "label": "Compatible Screws",
        "value": "3.5mm Locking Screw, 3.5mm Cancellous Locking Screw"
      },
      {
        "label": "Material",
        "value": "Stainless Steel 316L / Titanium Grade 5"
      },
      {
        "label": "Image Representation",
        "value": "Authentic family studio render (Refer to technical specifications below for exact model dimensions & hole counts)"
      }
    ],
    "featured": true
  },
  {
    "slug": "calcaneal-locking-plate-3-5mm",
    "name": "Calcaneal Locking Plate Right/Left 3.5mm",
    "category": "specialized-locking-plates",
    "description": "Anatomical perimeter calcaneal plate stabilizing the sustentaculum tali, anterior process, and posterior tuberosity with multiple locking points.",
    "image": "/images/products/calcaneal-plate.jpg",
    "specs": [
      {
        "label": "Catalogue Code (SS316L)",
        "value": "Right: S2100R.60–S2100R.80 | Left: S2100L.60–S2100L.80"
      },
      {
        "label": "Catalogue Code (TT Gr.5)",
        "value": "Right: T2100R.60–T2100R.80 | Left: T2100L.60–T2100L.80"
      },
      {
        "label": "Lengths Available",
        "value": "60mm, 68mm, 76mm, 80mm"
      },
      {
        "label": "Compatible Screws",
        "value": "3.5mm Locking Screw, 3.5mm Cancellous Locking Screw"
      },
      {
        "label": "Material",
        "value": "Stainless Steel 316L / Titanium Grade 5"
      },
      {
        "label": "Image Representation",
        "value": "Authentic family studio render (Refer to technical specifications below for exact model dimensions & hole counts)"
      }
    ],
    "featured": false
  },
  {
    "slug": "calcaneal-posterior-locking-plate-3-5mm",
    "name": "Calcaneal Posterior Locking Plate 3.5mm",
    "category": "specialized-locking-plates",
    "description": "Designed for targeted fixation of the posterior tuberosity and beak fractures of the calcaneus through a minimal-incision approach.",
    "image": "/images/products/calcaneal-plate.jpg",
    "specs": [
      {
        "label": "Catalogue Code (TT Gr.5)",
        "value": "Right: T2340R.06–T2340R.09 | Left: T2340L.06–T2340L.09"
      },
      {
        "label": "Available Sizes",
        "value": "6, 7, 8, 9 Holes"
      },
      {
        "label": "Compatible Screws",
        "value": "3.5mm Locking Screw, 3.5mm Cancellous Locking Screw"
      },
      {
        "label": "Material",
        "value": "Titanium Grade 5"
      },
      {
        "label": "Image Representation",
        "value": "Authentic family studio render (Refer to technical specifications below for exact model dimensions & hole counts)"
      }
    ],
    "featured": false
  },
  {
    "slug": "clavicle-hook-locking-plate-3-5mm",
    "name": "Clavicle Hook Locking Plate 3.5mm (Hook Depth 12mm / 15mm)",
    "category": "specialized-locking-plates",
    "description": "Acromioclavicular (AC) joint stabilization plate featuring a smooth sub-acromial hook for Neer Type II distal clavicle fractures and Tossy III AC dislocations.",
    "image": "/images/products/clavicle-hook-plate.jpg",
    "specs": [
      {
        "label": "Catalogue Code (SS316L)",
        "value": "Right: S2101R.05–S2101R.08 | Left: S2101L.05–S2101L.08"
      },
      {
        "label": "Catalogue Code (TT Gr.5)",
        "value": "Right: T2101R.05–T2101R.08 | Left: T2101L.05–T2101L.08"
      },
      {
        "label": "Hook Depths",
        "value": "12mm and 15mm Hook Depths"
      },
      {
        "label": "Available Sizes",
        "value": "5, 6, 7, 8 Holes"
      },
      {
        "label": "Compatible Screws",
        "value": "3.5mm Locking Screw, 3.5mm Cortex Screw"
      },
      {
        "label": "Material",
        "value": "Stainless Steel 316L / Titanium Grade 5"
      },
      {
        "label": "Image Representation",
        "value": "Authentic family studio render (Refer to technical specifications below for exact model dimensions & hole counts)"
      }
    ],
    "featured": true
  },
  {
    "slug": "superior-anterior-clavicle-locking-plate-3-5mm",
    "name": "Superior Anterior Clavicle Locking Plate 3.5mm",
    "category": "specialized-locking-plates",
    "description": "S-shaped anatomical clavicle shaft plate pre-bent to match the natural curvature of the middle and lateral thirds of the clavicle.",
    "image": "/images/products/clavicle-hook-plate.jpg",
    "specs": [
      {
        "label": "Catalogue Code (SS316L)",
        "value": "Right: S2104R.06–S2104R.10 | Left: S2104L.06–S2104L.10"
      },
      {
        "label": "Catalogue Code (TT Gr.5)",
        "value": "Right: T2104R.06–T2104R.10 | Left: T2104L.06–T2104L.10"
      },
      {
        "label": "Available Sizes",
        "value": "6, 7, 8, 9, 10 Holes"
      },
      {
        "label": "Compatible Screws",
        "value": "3.5mm Locking Screw, 3.5mm Cancellous Locking Screw"
      },
      {
        "label": "Material",
        "value": "Stainless Steel 316L / Titanium Grade 5"
      },
      {
        "label": "Image Representation",
        "value": "Authentic family studio render (Refer to technical specifications below for exact model dimensions & hole counts)"
      }
    ],
    "featured": false
  },
  {
    "slug": "distal-fibula-locking-plate-2-7mm",
    "name": "Distal Fibula Locking Plate 2.7mm",
    "category": "specialized-locking-plates",
    "description": "Anatomically contoured lateral malleolar plate with distal 2.7mm locking screw cluster providing secure purchase in small distal fibula fragments.",
    "image": "/images/products/calcaneal-plate.jpg",
    "specs": [
      {
        "label": "Catalogue Code (SS316L)",
        "value": "S2393.03–S2393.08"
      },
      {
        "label": "Catalogue Code (TT Gr.5)",
        "value": "T2393.03–T2393.08"
      },
      {
        "label": "Available Sizes",
        "value": "3, 4, 5, 6, 7, 8 Holes"
      },
      {
        "label": "Compatible Screws",
        "value": "2.7mm Locking Screw, 2.7mm Cortex Screw"
      },
      {
        "label": "Material",
        "value": "Stainless Steel 316L / Titanium Grade 5"
      },
      {
        "label": "Image Representation",
        "value": "Authentic family studio render (Refer to technical specifications below for exact model dimensions & hole counts)"
      }
    ],
    "featured": false
  },
  {
    "slug": "lateral-distal-fibula-locking-plate-3-5mm",
    "name": "Lateral Distal Fibula Locking Plate 3.5mm",
    "category": "specialized-locking-plates",
    "description": "Contoured lateral fibula plate for Danis-Weber Type B and C ankle fractures, with dedicated syndesmotic screw slots.",
    "image": "/images/products/calcaneal-plate.jpg",
    "specs": [
      {
        "label": "Catalogue Code (TT Gr.5)",
        "value": "Right: T2172R.05–T2172R.11 | Left: T2172L.05–T2172L.11"
      },
      {
        "label": "Available Sizes",
        "value": "5 to 11 Holes"
      },
      {
        "label": "Compatible Screws",
        "value": "3.5mm Locking Screw, 3.5mm Cortex Screw"
      },
      {
        "label": "Material",
        "value": "Titanium Grade 5"
      },
      {
        "label": "Image Representation",
        "value": "Authentic family studio render (Refer to technical specifications below for exact model dimensions & hole counts)"
      }
    ],
    "featured": false
  },
  {
    "slug": "l-fusion-locking-plate-2-7mm",
    "name": "L Fusion Locking Plate 2.7mm",
    "category": "specialized-locking-plates",
    "description": "L-shaped low profile fusion plate for tarsometatarsal (Lisfranc) and midfoot arthrodesis procedures.",
    "image": "/images/products/calcaneal-plate.jpg",
    "specs": [
      {
        "label": "Catalogue Code (TT Gr.5)",
        "value": "Right: T2155R.00 | Left: T2155L.00"
      },
      {
        "label": "Configurations",
        "value": "Short and Long Arms"
      },
      {
        "label": "Compatible Screws",
        "value": "2.7mm Locking Screw, 2.7mm Micro Cortex Screw"
      },
      {
        "label": "Material",
        "value": "Titanium Grade 5"
      },
      {
        "label": "Image Representation",
        "value": "Authentic family studio render (Refer to technical specifications below for exact model dimensions & hole counts)"
      }
    ],
    "featured": false
  },
  {
    "slug": "mtp-fusion-locking-plate-2-7mm",
    "name": "MTP Fusion Locking Plate 2.7mm",
    "category": "specialized-locking-plates",
    "description": "First metatarsophalangeal (MTP) arthrodesis plate with pre-set dorsiflexion and valgus angles for hallux rigidus treatment.",
    "image": "/images/products/calcaneal-plate.jpg",
    "specs": [
      {
        "label": "Catalogue Code (TT Gr.5)",
        "value": "Right: T2165R.00 | Left: T2165L.00"
      },
      {
        "label": "Available Sizes",
        "value": "Short, Standard, Long"
      },
      {
        "label": "Compatible Screws",
        "value": "2.7mm Locking Screw, 2.7mm Micro Cortex Screw"
      },
      {
        "label": "Pre-set Angles",
        "value": "Dorsiflexion 0°, 5°, 10°"
      },
      {
        "label": "Material",
        "value": "Titanium Grade 5"
      },
      {
        "label": "Image Representation",
        "value": "Authentic family studio render (Refer to technical specifications below for exact model dimensions & hole counts)"
      }
    ],
    "featured": false
  },
  {
    "slug": "microlock-t-locking-plate-1-5mm",
    "name": "Microlock T Locking Plate 1.5mm (4 Holes Head)",
    "category": "specialized-locking-plates",
    "description": "Ultra-thin mini fragment titanium locking plate for phalangeal fractures and small bone osteotomies of the hand.",
    "image": "/images/products/calcaneal-plate.jpg",
    "specs": [
      {
        "label": "Catalogue Code (TT Gr.5)",
        "value": "T2410.04–T2410.08"
      },
      {
        "label": "Head Configuration",
        "value": "4 Holes Head"
      },
      {
        "label": "Shaft Sizes",
        "value": "4, 5, 6, 7, 8 Holes"
      },
      {
        "label": "Compatible Screws",
        "value": "1.5mm Microlock Cortex Screw, 1.5mm Microlock Locking Screw"
      },
      {
        "label": "Material",
        "value": "Titanium Grade 5"
      },
      {
        "label": "Image Representation",
        "value": "Authentic family studio render (Refer to technical specifications below for exact model dimensions & hole counts)"
      }
    ],
    "featured": false
  },
  {
    "slug": "microlock-condylar-locking-plate-2-4mm",
    "name": "Microlock Condylar Locking Plate 2.4mm",
    "category": "specialized-locking-plates",
    "description": "Miniature condylar plate designed for metacarpal and proximal phalangeal base and head periarticular fractures.",
    "image": "/images/products/calcaneal-plate.jpg",
    "specs": [
      {
        "label": "Catalogue Code (TT Gr.5)",
        "value": "T2427.03–T2427.07"
      },
      {
        "label": "Available Sizes",
        "value": "3, 4, 5, 6, 7 Holes"
      },
      {
        "label": "Compatible Screws",
        "value": "2.4mm Microlock Cortex Screw, 2.4mm Microlock Locking Screw"
      },
      {
        "label": "Material",
        "value": "Titanium Grade 5"
      },
      {
        "label": "Image Representation",
        "value": "Authentic family studio render (Refer to technical specifications below for exact model dimensions & hole counts)"
      }
    ],
    "featured": false
  },
  {
    "slug": "va-first-mtp-fusion-locking-plate-2-4-2-7mm",
    "name": "V.A. First MTP Fusion Locking Plate 2.4-2.7mm",
    "category": "specialized-locking-plates",
    "description": "Variable-angle first MTP joint arthrodesis plate with compression slot allowing intra-operative joint compression and angle-stable fixation.",
    "image": "/images/products/calcaneal-plate.jpg",
    "specs": [
      {
        "label": "Catalogue Code (TT Gr.5)",
        "value": "Right: T2401R.00 | Left: T2401L.00"
      },
      {
        "label": "Pre-set Angles",
        "value": "0°, 5°, 10° Dorsiflexion"
      },
      {
        "label": "Compatible Screws",
        "value": "2.4mm V.A. Locking Screw, 2.7mm Locking Screw"
      },
      {
        "label": "Material",
        "value": "Titanium Grade 5"
      },
      {
        "label": "Image Representation",
        "value": "Authentic family studio render (Refer to technical specifications below for exact model dimensions & hole counts)"
      }
    ],
    "featured": false
  },
  {
    "slug": "locking-screw-3-5mm",
    "name": "3.5mm Locking Screw (Standard & Star Hex)",
    "category": "locking-screws-accessories",
    "description": "Self-tapping locking screw designed for angular stable fixation in 3.5mm small fragment locking plates. Features precision threaded head matching plate eyelets.",
    "image": "/images/products/locking-screws.jpg",
    "specs": [
      {
        "label": "Catalogue Code (SS316L)",
        "value": "S1027.010–S1027.060"
      },
      {
        "label": "Catalogue Code (TT Gr.5)",
        "value": "T1027.010–T1027.060"
      },
      {
        "label": "Lengths Available",
        "value": "10mm to 60mm (in 2mm increments)"
      },
      {
        "label": "Drive Types",
        "value": "Standard Hex & Star Hex (Stardrive T15)"
      },
      {
        "label": "Thread Profile",
        "value": "Self-Tapping Cortical Thread"
      },
      {
        "label": "Material",
        "value": "Stainless Steel 316L / Titanium Grade 5"
      },
      {
        "label": "Image Representation",
        "value": "Authentic family studio render (Refer to technical specifications below for exact model dimensions & hole counts)"
      }
    ],
    "featured": true
  },
  {
    "slug": "cancellous-locking-screw-3-5mm-fully-threaded",
    "name": "3.5mm Cancellous Locking Screw Fully Threaded",
    "category": "locking-screws-accessories",
    "description": "Deep-profile thread optimized for maximum pullout strength in metaphyseal cancellous bone and osteopenic bone structures.",
    "image": "/images/products/locking-screws.jpg",
    "specs": [
      {
        "label": "Catalogue Code (SS316L)",
        "value": "S1029.010–S1029.060"
      },
      {
        "label": "Catalogue Code (TT Gr.5)",
        "value": "T1029.010–T1029.060"
      },
      {
        "label": "Lengths Available",
        "value": "10mm to 60mm"
      },
      {
        "label": "Drive Types",
        "value": "Standard Hex & Star Hex"
      },
      {
        "label": "Material",
        "value": "Stainless Steel 316L / Titanium Grade 5"
      },
      {
        "label": "Image Representation",
        "value": "Authentic family studio render (Refer to technical specifications below for exact model dimensions & hole counts)"
      }
    ],
    "featured": false
  },
  {
    "slug": "locking-screw-5-0mm",
    "name": "5.0mm Locking Screw (Standard & Star Hex)",
    "category": "locking-screws-accessories",
    "description": "High-strength large fragment locking screw for 5.0mm distal femur, proximal tibia, broad and narrow locking plates.",
    "image": "/images/products/locking-screws.jpg",
    "specs": [
      {
        "label": "Catalogue Code (SS316L)",
        "value": "S1031.014–S1031.100"
      },
      {
        "label": "Catalogue Code (TT Gr.5)",
        "value": "T1031.014–T1031.100"
      },
      {
        "label": "Lengths Available",
        "value": "14mm to 100mm"
      },
      {
        "label": "Drive Types",
        "value": "Standard Hex & Star Hex (T25)"
      },
      {
        "label": "Thread Profile",
        "value": "Self-Tapping Cortical Thread"
      },
      {
        "label": "Material",
        "value": "Stainless Steel 316L / Titanium Grade 5"
      },
      {
        "label": "Image Representation",
        "value": "Authentic family studio render (Refer to technical specifications below for exact model dimensions & hole counts)"
      }
    ],
    "featured": true
  },
  {
    "slug": "cancellous-locking-screw-5-0mm-fully-threaded",
    "name": "5.0mm Cancellous Locking Screw Fully Threaded",
    "category": "locking-screws-accessories",
    "description": "Designed for condylar and metaphyseal femoral and tibial plate fixation, offering expanded core-to-thread ratio in soft bone.",
    "image": "/images/products/locking-screws.jpg",
    "specs": [
      {
        "label": "Catalogue Code (SS316L)",
        "value": "S1033.020–S1033.100"
      },
      {
        "label": "Catalogue Code (TT Gr.5)",
        "value": "T1033.020–T1033.100"
      },
      {
        "label": "Lengths Available",
        "value": "20mm to 100mm"
      },
      {
        "label": "Thread Profile",
        "value": "Fully Threaded Cancellous"
      },
      {
        "label": "Material",
        "value": "Stainless Steel 316L / Titanium Grade 5"
      },
      {
        "label": "Image Representation",
        "value": "Authentic family studio render (Refer to technical specifications below for exact model dimensions & hole counts)"
      }
    ],
    "featured": false
  },
  {
    "slug": "cannulated-cancellous-locking-screw-6-5mm",
    "name": "6.5mm Cannulated Cancellous Locking Screw",
    "category": "locking-screws-accessories",
    "description": "Cannulated locking screw for guidewire-assisted insertion into proximal lateral tibia and distal femur condylar holes.",
    "image": "/images/products/locking-screws.jpg",
    "specs": [
      {
        "label": "Catalogue Code (SS316L)",
        "value": "S1045.020–S1045.120 (32mm Thread), S1044.020–S1044.120 (Full)"
      },
      {
        "label": "Catalogue Code (TT Gr.5)",
        "value": "T1045.020–T1045.120 (32mm), T1044.020–T1044.120 (Full)"
      },
      {
        "label": "Lengths Available",
        "value": "20mm to 120mm"
      },
      {
        "label": "Cannulation",
        "value": "Guide Wire Compatible Cannulated Core"
      },
      {
        "label": "Material",
        "value": "Stainless Steel 316L / Titanium Grade 5"
      },
      {
        "label": "Image Representation",
        "value": "Authentic family studio render (Refer to technical specifications below for exact model dimensions & hole counts)"
      }
    ],
    "featured": false
  },
  {
    "slug": "cannulated-cancellous-locking-screw-7-3mm",
    "name": "7.3mm Cannulated Cancellous Locking Screw Fully Threaded",
    "category": "locking-screws-accessories",
    "description": "Heavy femoral neck cannulated locking screw providing rigid fixation across femoral neck fracture lines in proximal femur plates.",
    "image": "/images/products/locking-screws.jpg",
    "specs": [
      {
        "label": "Catalogue Code (SS316L)",
        "value": "S1049.030–S1049.100"
      },
      {
        "label": "Catalogue Code (TT Gr.5)",
        "value": "T1049.030–T1049.100"
      },
      {
        "label": "Lengths Available",
        "value": "30mm to 100mm"
      },
      {
        "label": "Cannulation",
        "value": "Guide Wire Guided Cannulated Core"
      },
      {
        "label": "Material",
        "value": "Stainless Steel 316L / Titanium Grade 5"
      },
      {
        "label": "Image Representation",
        "value": "Authentic family studio render (Refer to technical specifications below for exact model dimensions & hole counts)"
      }
    ],
    "featured": false
  },
  {
    "slug": "locking-screw-2-7mm",
    "name": "2.7mm Locking Screw (Standard & Star Hex)",
    "category": "locking-screws-accessories",
    "description": "Precision 2.7mm locking screw for distal radius, distal fibula, and mini fragment plates with low profile head.",
    "image": "/images/products/locking-screws.jpg",
    "specs": [
      {
        "label": "Catalogue Code (SS316L)",
        "value": "S1025.010–S1025.040"
      },
      {
        "label": "Catalogue Code (TT Gr.5)",
        "value": "T1025.010–T1025.040"
      },
      {
        "label": "Lengths Available",
        "value": "10mm to 40mm"
      },
      {
        "label": "Drive Types",
        "value": "Standard Hex & Star Hex (T8)"
      },
      {
        "label": "Material",
        "value": "Stainless Steel 316L / Titanium Grade 5"
      },
      {
        "label": "Image Representation",
        "value": "Authentic family studio render (Refer to technical specifications below for exact model dimensions & hole counts)"
      }
    ],
    "featured": false
  },
  {
    "slug": "variable-angle-locking-screw-2-4mm-star-hex",
    "name": "2.4mm Variable Angle (V.A.) Locking Screw Star Hex",
    "category": "locking-screws-accessories",
    "description": "Engineered for variable-angle distal radius plates, allowing locked fixation up to 15 degrees off the central plate axis.",
    "image": "/images/products/locking-screws.jpg",
    "specs": [
      {
        "label": "Catalogue Code (SS316L)",
        "value": "S1021.008–S1021.030"
      },
      {
        "label": "Catalogue Code (TT Gr.5)",
        "value": "T1021.008–T1021.030"
      },
      {
        "label": "Lengths Available",
        "value": "8mm to 30mm"
      },
      {
        "label": "Drive Type",
        "value": "Star Hex (T8)"
      },
      {
        "label": "Angulation Range",
        "value": "±15° Multi-Directional Locked Trajectory"
      },
      {
        "label": "Material",
        "value": "Stainless Steel 316L / Titanium Grade 5"
      },
      {
        "label": "Image Representation",
        "value": "Authentic family studio render (Refer to technical specifications below for exact model dimensions & hole counts)"
      }
    ],
    "featured": false
  },
  {
    "slug": "microlock-locking-screws-1-5-2-0-2-4mm",
    "name": "Microlock Locking Screws (1.5mm / 2.0mm / 2.4mm)",
    "category": "locking-screws-accessories",
    "description": "Miniature titanium locking screws dedicated to hand, wrist, and cranio-maxillofacial reconstruction plates.",
    "image": "/images/products/locking-screws.jpg",
    "specs": [
      {
        "label": "Catalogue Code (TT Gr.5)",
        "value": "T1171 (1.5mm), T1173 (2.0mm), T1175 (2.4mm)"
      },
      {
        "label": "Lengths Available",
        "value": "6mm to 32mm depending on diameter"
      },
      {
        "label": "Application",
        "value": "Hand, Wrist & Small Bone Fixation"
      },
      {
        "label": "Material",
        "value": "Titanium Grade 5"
      },
      {
        "label": "Image Representation",
        "value": "Authentic family studio render (Refer to technical specifications below for exact model dimensions & hole counts)"
      }
    ],
    "featured": false
  },
  {
    "slug": "orthopedic-spacer-wiremount",
    "name": "Orthopedic Spacers & Wiremounts (3.5mm / 5.0mm)",
    "category": "locking-screws-accessories",
    "description": "Precision spacers and wiremount accessories designed to elevate plates off periosteum and provide cerclage cable anchoring.",
    "image": "/images/products/locking-screws.jpg",
    "specs": [
      {
        "label": "Catalogue Code (SS316L)",
        "value": "S1062.000 / S1063.000 (Spacer), S1064.000 / S1065.000 (Wiremount)"
      },
      {
        "label": "Catalogue Code (TT Gr.5)",
        "value": "T1062.000 / T1063.000 (Spacer), T1064.000 / T1065.000 (Wiremount)"
      },
      {
        "label": "Sizes Available",
        "value": "3.5mm and 5.0mm"
      },
      {
        "label": "Special Variant",
        "value": "5.0mm Wiremount Type-II (S1097.000 / T1097.000)"
      },
      {
        "label": "Material",
        "value": "Stainless Steel 316L / Titanium Grade 5"
      },
      {
        "label": "Image Representation",
        "value": "Authentic family studio render (Refer to technical specifications below for exact model dimensions & hole counts)"
      }
    ],
    "featured": false
  },
  {
    "slug": "ao-clamp-single-pin",
    "name": "A.O Clamp Single Pin",
    "category": "external-fixator-clamps",
    "description": "Standard A.O type external fixator clamp connecting an 11mm connecting rod to a 4.5mm or 5.0mm Schanz screw with secure single-bolt tightening.",
    "image": "/images/products/external-fixator-clamp.jpg",
    "specs": [
      {
        "label": "Catalogue Code",
        "value": "S6001.00"
      },
      {
        "label": "Size",
        "value": "4.5mm X 11mm"
      },
      {
        "label": "Rod Compatibility",
        "value": "11mm Connecting Rod"
      },
      {
        "label": "Pin Compatibility",
        "value": "4.5mm & 5.0mm Schanz Screws"
      },
      {
        "label": "Tightening Drive",
        "value": "11mm Hex Nut / T-Handle Spanner"
      },
      {
        "label": "Material",
        "value": "Surgical Stainless Steel"
      },
      {
        "label": "Image Representation",
        "value": "Authentic family studio render (Refer to technical specifications below for exact model dimensions & hole counts)"
      }
    ],
    "featured": true
  },
  {
    "slug": "ao-clamp-double-pin",
    "name": "A.O Clamp Double Pin",
    "category": "external-fixator-clamps",
    "description": "Dual-pin A.O clamp securing two parallel or convergent Schanz screws to a single 11mm connecting rod for enhanced fragment stability.",
    "image": "/images/products/external-fixator-clamp.jpg",
    "specs": [
      {
        "label": "Catalogue Code",
        "value": "S6002.00"
      },
      {
        "label": "Size",
        "value": "4.5mm X 11mm"
      },
      {
        "label": "Pin Capacity",
        "value": "Dual Pin (Two Schanz Screws)"
      },
      {
        "label": "Rod Compatibility",
        "value": "11mm Connecting Rod"
      },
      {
        "label": "Material",
        "value": "Surgical Stainless Steel"
      },
      {
        "label": "Image Representation",
        "value": "Authentic family studio render (Refer to technical specifications below for exact model dimensions & hole counts)"
      }
    ],
    "featured": false
  },
  {
    "slug": "open-clamp-ao-type",
    "name": "Open Clamp (A.O. Type)",
    "category": "external-fixator-clamps",
    "description": "Snap-on open clamp permitting direct lateral insertion onto existing 11mm connecting rods without disassembling the existing frame construct.",
    "image": "/images/products/external-fixator-clamp.jpg",
    "specs": [
      {
        "label": "Catalogue Code",
        "value": "S6003.00"
      },
      {
        "label": "Size",
        "value": "4.5mm X 11mm"
      },
      {
        "label": "Mechanism",
        "value": "Lateral Snap-Fit Open Jaw"
      },
      {
        "label": "Rod Compatibility",
        "value": "11mm Connecting Rod"
      },
      {
        "label": "Material",
        "value": "Surgical Stainless Steel"
      },
      {
        "label": "Image Representation",
        "value": "Authentic family studio render (Refer to technical specifications below for exact model dimensions & hole counts)"
      }
    ],
    "featured": false
  },
  {
    "slug": "rod-to-rod-clamp",
    "name": "Rod to Rod Clamp",
    "category": "external-fixator-clamps",
    "description": "Heavy-duty clamp coupling two 11mm connecting rods at arbitrary angles to build delta frames, bi-planar frames, and bridge constructs.",
    "image": "/images/products/external-fixator-clamp.jpg",
    "specs": [
      {
        "label": "Catalogue Code",
        "value": "S6004.00"
      },
      {
        "label": "Size",
        "value": "4.5mm X 11mm (11mm Rod Coupling)"
      },
      {
        "label": "Articulation",
        "value": "360° Rotational Frame Bridging"
      },
      {
        "label": "Material",
        "value": "Surgical Stainless Steel"
      },
      {
        "label": "Image Representation",
        "value": "Authentic family studio render (Refer to technical specifications below for exact model dimensions & hole counts)"
      }
    ],
    "featured": false
  },
  {
    "slug": "transverse-clamp",
    "name": "Transverse Clamp",
    "category": "external-fixator-clamps",
    "description": "Transverse clamping element providing cross-linking between parallel longitudinal connecting rods to substantially boost frame torsional rigidity.",
    "image": "/images/products/external-fixator-clamp.jpg",
    "specs": [
      {
        "label": "Catalogue Code",
        "value": "S6005.00"
      },
      {
        "label": "Size",
        "value": "4.5mm X 11mm"
      },
      {
        "label": "Application",
        "value": "Transverse Cross-Bracing"
      },
      {
        "label": "Material",
        "value": "Surgical Stainless Steel"
      },
      {
        "label": "Image Representation",
        "value": "Authentic family studio render (Refer to technical specifications below for exact model dimensions & hole counts)"
      }
    ],
    "featured": false
  },
  {
    "slug": "universal-joint-for-two-rod",
    "name": "Universal Joint For Two Rod",
    "category": "external-fixator-clamps",
    "description": "Multi-axial articulation joint connecting dual fixator rods with omnidirectional angular freedom before definitive lock-down.",
    "image": "/images/products/external-fixator-clamp.jpg",
    "specs": [
      {
        "label": "Catalogue Code",
        "value": "S6006.00"
      },
      {
        "label": "Size",
        "value": "4.5mm X 11mm"
      },
      {
        "label": "Freedom",
        "value": "Multi-Axial Spherical Joint Freedom"
      },
      {
        "label": "Material",
        "value": "Surgical Stainless Steel"
      },
      {
        "label": "Image Representation",
        "value": "Authentic family studio render (Refer to technical specifications below for exact model dimensions & hole counts)"
      }
    ],
    "featured": false
  },
  {
    "slug": "compression-distraction-device-clamp",
    "name": "Compression Distraction Device Clamp",
    "category": "external-fixator-clamps",
    "description": "Precision mechanical device mounted on external fixator frames providing controlled, millimeter-scale distraction or compression of fracture fragments.",
    "image": "/images/products/external-fixator-clamp.jpg",
    "specs": [
      {
        "label": "Catalogue Code",
        "value": "S6014.00"
      },
      {
        "label": "Drive Mechanism",
        "value": "Graduated Threaded Lead Screw"
      },
      {
        "label": "Frame Compatibility",
        "value": "Standard A.O 11mm Frame System"
      },
      {
        "label": "Material",
        "value": "Surgical Stainless Steel"
      },
      {
        "label": "Image Representation",
        "value": "Authentic family studio render (Refer to technical specifications below for exact model dimensions & hole counts)"
      }
    ],
    "featured": true
  },
  {
    "slug": "charnley-compression-clamp",
    "name": "Charnley Compression Clamp",
    "category": "external-fixator-clamps",
    "description": "Classic Charnley compression clamp designed for knee arthrodesis, ankle fusion, and rigid transverse bone apposition with high compressive force.",
    "image": "/images/products/external-fixator-clamp.jpg",
    "specs": [
      {
        "label": "Catalogue Code",
        "value": "S6016.150 (150mm), S6016.200 (200mm)"
      },
      {
        "label": "Available Sizes",
        "value": "150mm and 200mm Span"
      },
      {
        "label": "Indication",
        "value": "Knee Arthrodesis and Ankle Fusion"
      },
      {
        "label": "Material",
        "value": "Surgical Stainless Steel"
      },
      {
        "label": "Image Representation",
        "value": "Authentic family studio render (Refer to technical specifications below for exact model dimensions & hole counts)"
      }
    ],
    "featured": false
  },
  {
    "slug": "aesculap-type-clamp",
    "name": "Aesculap Type Clamps (Multi-Size)",
    "category": "external-fixator-clamps",
    "description": "Compact round-body external fixator clamp system available in pin-to-rod and rod-to-rod configurations across 2.5mm to 8.0mm sizes.",
    "image": "/images/products/external-fixator-clamp.jpg",
    "specs": [
      {
        "label": "Catalogue Codes",
        "value": "S6025.00 (2.5×4.0mm), S6061.11 (3.5×4.0mm), S6026.00 (4.0×4.0mm), S6027.00 (4.5×8.0mm), S6028.00 (8.0×8.0mm)"
      },
      {
        "label": "Available Diameters",
        "value": "2.5mm, 3.5mm, 4.0mm, 4.5mm, 8.0mm"
      },
      {
        "label": "Design",
        "value": "Low Profile Cylindrical Body with Captive Locking"
      },
      {
        "label": "Material",
        "value": "Surgical Stainless Steel"
      },
      {
        "label": "Image Representation",
        "value": "Authentic family studio render (Refer to technical specifications below for exact model dimensions & hole counts)"
      }
    ],
    "featured": false
  },
  {
    "slug": "jess-type-clamps-distractor",
    "name": "Jess Type Clamps & Distractor System",
    "category": "external-fixator-clamps",
    "description": "Joshi's External Stabilization System (JESS) miniature clamps and distractors for hand, wrist, foot, pediatric trauma and contracture corrections.",
    "image": "/images/products/external-fixator-clamp.jpg",
    "specs": [
      {
        "label": "Catalogue Codes (Clamps)",
        "value": "S6032.00 (Small), S6033.00 (Medium), S6034.00 (Large)"
      },
      {
        "label": "Catalogue Codes (Distractors)",
        "value": "S6035.050–S6035.150 (M4 Single), S6036.050–S6036.250 (M4 Double), S6037.100–S6037.400 (M6 Double)"
      },
      {
        "label": "Distractor Lengths",
        "value": "50mm to 400mm"
      },
      {
        "label": "Application",
        "value": "Hand, Wrist, Pediatric & Foot Fixation"
      },
      {
        "label": "Material",
        "value": "Surgical Stainless Steel"
      },
      {
        "label": "Image Representation",
        "value": "Authentic family studio render (Refer to technical specifications below for exact model dimensions & hole counts)"
      }
    ],
    "featured": false
  },
  {
    "slug": "ilizarov-full-ring",
    "name": "Ilizarov Full Ring",
    "category": "ilizarov-rings-instruments",
    "description": "Complete 360-degree circular Ilizarov ring providing closed ring structural rigidity for multi-ring circular frames in deformity correction and limb lengthening.",
    "image": "/images/products/ilizarov-ring-system.jpg",
    "specs": [
      {
        "label": "Catalogue Code",
        "value": "S6057.120–S6057.200"
      },
      {
        "label": "Inner Diameters",
        "value": "120mm, 140mm, 160mm, 180mm, 200mm"
      },
      {
        "label": "Hole Pattern",
        "value": "Equispaced Transfixion Wire & Threaded Rod Holes"
      },
      {
        "label": "Application",
        "value": "Circular Frame Segment Stabilization"
      },
      {
        "label": "Material",
        "value": "Surgical Stainless Steel"
      },
      {
        "label": "Image Representation",
        "value": "Authentic family studio render (Refer to technical specifications below for exact model dimensions & hole counts)"
      }
    ],
    "featured": true
  },
  {
    "slug": "ilizarov-half-ring",
    "name": "Ilizarov Half Ring",
    "category": "ilizarov-rings-instruments",
    "description": "Standard 180-degree half ring segment joined with connecting bolts to form full rings or used individually near joint flexion creases.",
    "image": "/images/products/ilizarov-ring-system.jpg",
    "specs": [
      {
        "label": "Catalogue Code",
        "value": "S6055.080–S6055.240"
      },
      {
        "label": "Inner Diameters",
        "value": "80mm, 100mm, 120mm, 140mm, 160mm, 180mm, 200mm, 220mm, 240mm"
      },
      {
        "label": "Application",
        "value": "Modular Ring Assembly"
      },
      {
        "label": "Material",
        "value": "Surgical Stainless Steel"
      },
      {
        "label": "Image Representation",
        "value": "Authentic family studio render (Refer to technical specifications below for exact model dimensions & hole counts)"
      }
    ],
    "featured": false
  },
  {
    "slug": "ilizarov-5-8-ring",
    "name": "Ilizarov 5/8 Ring",
    "category": "ilizarov-rings-instruments",
    "description": "Open 5/8 ring segment engineered specifically for proximal tibia and distal femur rings, providing ample clearance for knee flexion without impinging popliteal structures.",
    "image": "/images/products/ilizarov-ring-system.jpg",
    "specs": [
      {
        "label": "Catalogue Code",
        "value": "S6056.120–S6056.200"
      },
      {
        "label": "Inner Diameters",
        "value": "120mm, 140mm, 160mm, 180mm, 200mm"
      },
      {
        "label": "Anatomical Benefit",
        "value": "Joint Flexion Clearance"
      },
      {
        "label": "Material",
        "value": "Surgical Stainless Steel"
      },
      {
        "label": "Image Representation",
        "value": "Authentic family studio render (Refer to technical specifications below for exact model dimensions & hole counts)"
      }
    ],
    "featured": false
  },
  {
    "slug": "italian-femoral-arch-90-120",
    "name": "Italian Femoral Arch (90° / 120°)",
    "category": "ilizarov-rings-instruments",
    "description": "Heavy reinforced femoral arch segment with curved slots for proximal femur fixation where a complete circular ring cannot be accommodated.",
    "image": "/images/products/ilizarov-ring-system.jpg",
    "specs": [
      {
        "label": "Catalogue Code",
        "value": "S6058.00 (90° Arch), S6059.00 (120° Arch)"
      },
      {
        "label": "Arc Geometries",
        "value": "90 Degree and 120 Degree Variants"
      },
      {
        "label": "Pin Connection",
        "value": "Multi-Angle Slotted Pin Fixation"
      },
      {
        "label": "Material",
        "value": "Surgical Stainless Steel"
      },
      {
        "label": "Image Representation",
        "value": "Authentic family studio render (Refer to technical specifications below for exact model dimensions & hole counts)"
      }
    ],
    "featured": false
  },
  {
    "slug": "connecting-rod-11mm-8mm-4mm",
    "name": "Fixator Connecting Rods (11mm / 8mm / 4mm)",
    "category": "ilizarov-rings-instruments",
    "description": "Rigid longitudinal connecting rods available in 11mm, 8mm, and 4mm diameters across extensive lengths for standard, medium, and mini external fixator frames.",
    "image": "/images/products/ilizarov-ring-system.jpg",
    "specs": [
      {
        "label": "Catalogue Codes",
        "value": "S6007.100–S6007.500 (11mm), S6029.100–S6029.400 (8mm), S6022.100–S6022.300 (4mm)"
      },
      {
        "label": "Diameters",
        "value": "11mm, 8.0mm, 4.0mm"
      },
      {
        "label": "Available Lengths",
        "value": "100mm to 500mm"
      },
      {
        "label": "Material",
        "value": "Surgical Stainless Steel"
      },
      {
        "label": "Image Representation",
        "value": "Authentic family studio render (Refer to technical specifications below for exact model dimensions & hole counts)"
      }
    ],
    "featured": false
  },
  {
    "slug": "threaded-rod-6-0mm-slotted",
    "name": "Threaded Rods 6.0mm & Slotted Threaded Rods",
    "category": "ilizarov-rings-instruments",
    "description": "Precision continuous threaded rods and slotted threaded rods used for inter-ring connection, compression-distraction spanning, and hinge assembly.",
    "image": "/images/products/ilizarov-ring-system.jpg",
    "specs": [
      {
        "label": "Catalogue Codes",
        "value": "S6060.050–S6060.400 (Standard), S6112.050–S6112.400 (Slotted)"
      },
      {
        "label": "Diameter",
        "value": "6.0mm Metric Pitch"
      },
      {
        "label": "Available Lengths",
        "value": "50mm to 400mm"
      },
      {
        "label": "Material",
        "value": "High Tensile Stainless Steel"
      },
      {
        "label": "Image Representation",
        "value": "Authentic family studio render (Refer to technical specifications below for exact model dimensions & hole counts)"
      }
    ],
    "featured": false
  },
  {
    "slug": "telescopic-rod-hinges-supports",
    "name": "Telescopic Rods, Hinges & Posts",
    "category": "ilizarov-rings-instruments",
    "description": "Dynamic frame components including telescopic rods for gradual limb lengthening, male/female/90° hinges for angular deformity correction, and male/female posts.",
    "image": "/images/products/ilizarov-ring-system.jpg",
    "specs": [
      {
        "label": "Catalogue Codes (Telescopic)",
        "value": "S6061.100–S6061.250 (100mm to 250mm)"
      },
      {
        "label": "Catalogue Codes (Hinges)",
        "value": "S6062.00 (Male), S6063.00 (Female), S6064.00 (90°)"
      },
      {
        "label": "Catalogue Codes (Posts)",
        "value": "S6066.01–S6066.04 (Post Male 1-4H), S6067.01–S6067.04 (Post Female 1-4H)"
      },
      {
        "label": "Material",
        "value": "Surgical Stainless Steel"
      },
      {
        "label": "Image Representation",
        "value": "Authentic family studio render (Refer to technical specifications below for exact model dimensions & hole counts)"
      }
    ],
    "featured": false
  },
  {
    "slug": "wire-fixation-bolts-nuts-washers",
    "name": "Wire Fixation Bolts, Connecting Bolts, Nuts & Washers",
    "category": "ilizarov-rings-instruments",
    "description": "Complete assembly hardware for circular fixators including center-hole wire fixation bolts, side-slotted wire fixation bolts, connecting bolts, nuts, and specialized washers.",
    "image": "/images/products/ilizarov-ring-system.jpg",
    "specs": [
      {
        "label": "Catalogue Codes (Bolts)",
        "value": "S6072.00 (Center Hole), S6073.00 (Side Slotted), S6074.00 (Connecting Bolt)"
      },
      {
        "label": "Catalogue Codes (Nuts)",
        "value": "S6075.00 (Nut), S6076.00 (Square Nut), S6077.00 (Nylon Nut)"
      },
      {
        "label": "Catalogue Codes (Washers)",
        "value": "S6083.00 (Simple), S6084.00 (Conical Couple), S6085.00 (Split), S6086.00 (Flat), S6087.00 (Slotted)"
      },
      {
        "label": "Material",
        "value": "Surgical Stainless Steel"
      },
      {
        "label": "Image Representation",
        "value": "Authentic family studio render (Refer to technical specifications below for exact model dimensions & hole counts)"
      }
    ],
    "featured": false
  },
  {
    "slug": "olive-wires-tension-kirschner-wires",
    "name": "Olive Wires & Tension Kirschner Wires 400mm",
    "category": "ilizarov-rings-instruments",
    "description": "High tensile transfixion wires for Ilizarov ring fixation. Olive wires provide bone fragment compression, while bayonet and trocar points ensure smooth cortical penetration.",
    "image": "/images/products/ilizarov-ring-system.jpg",
    "specs": [
      {
        "label": "Catalogue Codes (Olive)",
        "value": "S6088.15 / S6088.18 (Bayonet), S6090.15 / S6090.18 (Trocar)"
      },
      {
        "label": "Catalogue Codes (Tension)",
        "value": "S6089.15 / S6089.18 (Bayonet), S6091.15 / S6091.18 (Trocar)"
      },
      {
        "label": "Wire Diameters",
        "value": "1.5mm and 1.8mm"
      },
      {
        "label": "Length",
        "value": "400mm"
      },
      {
        "label": "Point Geometries",
        "value": "Bayonet Point and Trocar Point"
      },
      {
        "label": "Material",
        "value": "Implant Grade Surgical Stainless Steel"
      },
      {
        "label": "Image Representation",
        "value": "Authentic family studio render (Refer to technical specifications below for exact model dimensions & hole counts)"
      }
    ],
    "featured": true
  },
  {
    "slug": "wire-tensioner-dynametric-manual",
    "name": "Wire Tensioner (Dynametric & Manual)",
    "category": "ilizarov-rings-instruments",
    "description": "Calibrated wire tensioners designed to impart uniform axial tension up to 130 kgf onto Ilizarov transfixion wires to prevent wire deflection under load.",
    "image": "/images/products/ilizarov-ring-system.jpg",
    "specs": [
      {
        "label": "Catalogue Code (Dynametric)",
        "value": "S6092.00"
      },
      {
        "label": "Catalogue Code (Manual)",
        "value": "S6093.00"
      },
      {
        "label": "Tension Gauge",
        "value": "Graduated Dial / Spring Scale up to 130 kgf"
      },
      {
        "label": "Application",
        "value": "Accurate Transfixion Wire Pre-Tensioning"
      },
      {
        "label": "Material",
        "value": "Surgical Stainless Steel"
      },
      {
        "label": "Image Representation",
        "value": "Authentic family studio render (Refer to technical specifications below for exact model dimensions & hole counts)"
      }
    ],
    "featured": false
  },
  {
    "slug": "fixator-spanners-trocar-instruments",
    "name": "Fixator Spanners & Trocar Instrumentation System",
    "category": "ilizarov-rings-instruments",
    "description": "Complete instrumentation set for external fixator assembly and adjustment, including 7mm, 8mm, 10mm, 11mm T-handle and open spanners, ring spanners, and trocars.",
    "image": "/images/products/ilizarov-ring-system.jpg",
    "specs": [
      {
        "label": "Spanner Codes",
        "value": "S6008.07–S6008.11 (T-Handle 7-11mm), S6012.07–S6012.11 (Open), S6094.00 (Ring 10mm), S6095.00 (Combination 10mm), S6096.00 (L-Spanner)"
      },
      {
        "label": "Trocar Codes",
        "value": "S6009.00 (Triple Trocar), S6010.00 (Triple Trocar With Handle), S6011.00 (T-Handle for Schanz/Steinmann)"
      },
      {
        "label": "Sizes Included",
        "value": "7mm, 8mm, 10mm, 11mm"
      },
      {
        "label": "Material",
        "value": "Hardened Surgical Stainless Steel"
      },
      {
        "label": "Image Representation",
        "value": "Authentic family studio render (Refer to technical specifications below for exact model dimensions & hole counts)"
      }
    ],
    "featured": false
  }
];

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((p) => p.category === categorySlug);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
