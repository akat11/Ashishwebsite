/**
 * Verified Interactive Product Anatomy Configuration
 * 
 * Strict Accuracy Policy:
 * 1. Only products with confirmed studio image correspondence and verified catalogue
 *    engineering specifications are included in the interactive hotspot allowlist.
 * 2. Hotspots use percentage-based coordinates (0-100%) mapped precisely to verified
 *    engineering features visible on the authentic implant studio photography.
 * 3. Products not in this registry retain the standard, clean product image viewer.
 */

export interface ProductHotspot {
  id: string;
  number: number;
  title: string;
  zone: 'head' | 'neck' | 'shaft' | 'hole' | 'tip' | 'buttress';
  x: number; // percentage from left (0 - 100)
  y: number; // percentage from top (0 - 100)
  featureName: string;
  description: string;
  verifiedSpecs: { label: string; value: string }[];
  clinicalSignificance?: string;
}

export interface ProductAnatomyDef {
  productSlug: string;
  productName: string;
  categoryName: string;
  anatomicalRegion: string;
  headline: string;
  summary: string;
  verifiedHotspots: ProductHotspot[];
}

export const PRODUCT_ANATOMY_REGISTRY: Record<string, ProductAnatomyDef> = {
  // 1. Flagship Distal Radius Locking Plate
  'volar-distal-radius-locking-plate-2-7mm': {
    productSlug: 'volar-distal-radius-locking-plate-2-7mm',
    productName: 'Volar Distal Radius Locking Plate 2.7mm',
    categoryName: 'Distal Radius Locking Plates',
    anatomicalRegion: 'Wrist & Distal Forearm',
    headline: 'Anatomically Contoured Volar Buttress Architecture',
    summary:
      'Engineered for rigid internal fixation of intra-articular and extra-articular distal radius fractures (AO/OTA 23-A/B/C). Features divergent subchondral locking clusters, a chamfered watershed profile, and dynamic compression shaft combi-holes.',
    verifiedHotspots: [
      {
        id: 'vdr-subchondral-cluster',
        number: 1,
        title: 'Distal Subchondral Locking Row',
        zone: 'head',
        x: 73,
        y: 23,
        featureName: 'Multi-Hole Fixed-Angle Subchondral Cluster',
        description:
          'Transverse row of precision-threaded locking holes angled to create a subchondral raft beneath the lunate and scaphoid articular facets, preventing post-reduction articular collapse.',
        verifiedSpecs: [
          { label: 'Compatible Screws', value: '2.7mm Locking, 2.4mm Locking Screws' },
          { label: 'Locking Trajectory', value: 'Divergent fixed-angle subchondral alignment' },
          { label: 'Articular Support', value: 'Lunate & scaphoid facet buttress' },
        ],
        clinicalSignificance:
          'Provides stable angular support in osteoporotic bone without risking joint surface penetration.',
      },
      {
        id: 'vdr-watershed-contour',
        number: 2,
        title: 'Low-Profile Watershed Line Margin',
        zone: 'neck',
        x: 64,
        y: 32,
        featureName: 'Anatomical Watershed Chamfered Edge',
        description:
          'Pre-contoured distal margin designed to seat strictly proximal to the volar watershed line, preventing mechanical friction or attrition against the flexor pollicis longus (FPL) tendon.',
        verifiedSpecs: [
          { label: 'Edge Profile', value: 'Rounded, ultra-low profile chamfer' },
          { label: 'Lateral Variants', value: 'Dedicated Right & Left anatomical pre-shapes' },
          { label: 'Laser Identification', value: "Laser-marked 'R' / 'L' variant indicator" },
        ],
        clinicalSignificance:
          'Eliminates the need for aggressive intraoperative contouring and protects adjacent soft-tissue envelopes.',
      },
      {
        id: 'vdr-oblong-slot',
        number: 3,
        title: 'Oblong Alignment & K-Wire Window',
        zone: 'hole',
        x: 55,
        y: 43,
        featureName: 'Metaphyseal Elongated Compression Slot',
        description:
          'Central oblong window enabling fine longitudinal plate adjustment and preliminary cortex screw or K-wire reduction before committing to angular locking trajectories.',
        verifiedSpecs: [
          { label: 'Hole Type', value: 'Elongated dynamic compression slot' },
          { label: 'Compatible Screws', value: '2.7mm Cortex Screw, Provisional K-Wires' },
          { label: 'Function', value: 'Provisional cortex screw reduction & length adjustment' },
        ],
        clinicalSignificance:
          'Allows the surgeon to restore anatomical radial length before locking the diaphyseal shaft.',
      },
      {
        id: 'vdr-combi-shaft',
        number: 4,
        title: 'Diaphyseal Dynamic Combi-Holes',
        zone: 'shaft',
        x: 38,
        y: 60,
        featureName: 'Dual-Function Combi-Hole System',
        description:
          'Combines a threaded conical locking unit for angular stability with a dynamic compression unit (DCU) for axial interfragmentary loading according to AO principles.',
        verifiedSpecs: [
          { label: 'Shaft Lengths', value: '3, 4, 5, 6, 7 Holes available' },
          { label: 'Compatible Screws', value: '2.7mm Locking, 2.7mm Cortex Screws' },
          { label: 'Biomaterial Grade', value: 'SS 316L (ASTM F138) / Titanium Gr. 5 (ASTM F136)' },
        ],
        clinicalSignificance:
          'Permits hybrid fixation combining dynamic compression with rigid angular locking.',
      },
      {
        id: 'vdr-tapered-tip',
        number: 5,
        title: 'Tapered Gliding Insertion Tip',
        zone: 'tip',
        x: 18,
        y: 76,
        featureName: 'Beveled Diaphyseal Submuscular Lead',
        description:
          'Rounded, tapered distal shaft profile engineered to facilitate minimally invasive percutaneous plate osteosynthesis (MIPO) and smooth gliding beneath the pronator quadratus muscle.',
        verifiedSpecs: [
          { label: 'Tip Geometry', value: 'Bullet-nosed beveled lead' },
          { label: 'Traceability', value: 'Laser-etched catalogue and batch heat code' },
          { label: 'Standards Compliance', value: 'ISO 13485:2016 & ASTM F138 / F136' },
        ],
        clinicalSignificance:
          'Reduces surgical dissection and minimizes periosteal stripping along the radial diaphysis.',
      },
    ],
  },

  // 2. Flagship Proximal Lateral Tibia Locking Plate
  'proximal-lateral-tibia-locking-plate-5-0mm': {
    productSlug: 'proximal-lateral-tibia-locking-plate-5-0mm',
    productName: 'Proximal Lateral Tibia Locking Plate 5.0mm',
    categoryName: 'Tibia Locking Plates',
    anatomicalRegion: 'Knee & Proximal Tibia',
    headline: 'High-Strength Tibial Plateau Subchondral Raft System',
    summary:
      'Engineered for complex bicondylar and lateral tibial plateau split-depression fractures (Schatzker I–VI). Provides multi-planar raft screw trajectories beneath the articular surface and a rigid load-sharing diaphyseal shaft.',
    verifiedHotspots: [
      {
        id: 'plt-raft-cluster',
        number: 1,
        title: 'Subchondral Plateau Raft Cluster',
        zone: 'head',
        x: 58,
        y: 16,
        featureName: 'Multi-Hole Subchondral Raft Matrix',
        description:
          'Divergent and parallel locking screw holes oriented horizontally to create a rigid subchondral raft directly beneath the lateral articular plateau, sustaining compressed osteochondral fragments.',
        verifiedSpecs: [
          { label: 'Compatible Screws', value: '5.0mm Locking, 5.0mm Cancellous Locking' },
          { label: 'Cluster Orientation', value: 'Anatomical subchondral raft trajectory' },
          { label: 'Fracture Targets', value: 'Schatzker II, V, VI plateau depression' },
        ],
        clinicalSignificance:
          'Prevents secondary articular depression during early postoperative weight bearing.',
      },
      {
        id: 'plt-metaphyseal-flare',
        number: 2,
        title: 'Lateral Condylar Anatomical Flare',
        zone: 'neck',
        x: 55,
        y: 27,
        featureName: 'Pre-Contoured Metaphyseal Buttress Curve',
        description:
          'Anatomically matched to the lateral tibial condyle flare and anterolateral metaphysis. Provides immediate buttress stability against knee varus moments without cold plate-bending.',
        verifiedSpecs: [
          { label: 'Pre-Shape Design', value: 'Right & Left lateral tibial variants' },
          { label: 'Indicator', value: "Laser-marked 'R' / 'L' lateral orientation" },
          { label: 'Configuration', value: 'Right and Left Anatomical Variants' },
        ],
        clinicalSignificance:
          'Protects the lateral meniscus and preserves native tibial joint alignment.',
      },
      {
        id: 'plt-combi-shaft',
        number: 3,
        title: 'Staggered Diaphyseal Combi-Holes',
        zone: 'shaft',
        x: 38,
        y: 43,
        featureName: 'High-Load Dynamic Compression Shaft',
        description:
          'Staggered combi-hole row distributing tensile and torsional stresses along the tibial shaft, offering fixed-angle rigidity and compression options for comminuted fractures.',
        verifiedSpecs: [
          { label: 'Available Sizes', value: '3 to 13 Shaft Holes' },
          { label: 'Compatible Screws', value: '5.0mm Locking, 4.5mm Cortex Screws' },
          { label: 'Material Options', value: 'Stainless Steel 316L / Titanium Grade 5' },
        ],
        clinicalSignificance:
          'Spans extensive metaphyseal comminution without compromising cortical vascularity.',
      },
      {
        id: 'plt-bullet-tip',
        number: 4,
        title: 'Bulleted Submuscular Insertion Tip',
        zone: 'tip',
        x: 24,
        y: 53,
        featureName: 'Tapered Diaphyseal Insertion End',
        description:
          'Streamlined bulleted lead facilitates submuscular tunnel passage beneath the anterior compartment musculature, minimizing incision size in compromised trauma soft-tissue envelopes.',
        verifiedSpecs: [
          { label: 'Lead Geometry', value: 'Bulleted, low-profile tapered end' },
          { label: 'Traceability', value: 'Laser-etched catalogue reference (S2071 / T2071)' },
          { label: 'Quality Markings', value: 'ISO 13485 batch and heat lot marking' },
        ],
        clinicalSignificance:
          'Enables safe minimally invasive plating in high-energy trauma conditions.',
      },
    ],
  },

  // 3. Flagship Distal Femur Locking Plate
  'distal-femur-locking-plate-5-0mm': {
    productSlug: 'distal-femur-locking-plate-5-0mm',
    productName: 'Distal Femur Locking Plate 5.0mm',
    categoryName: 'Femur & Hip Locking Plates',
    anatomicalRegion: 'Knee & Distal Thigh',
    headline: 'High-Energy Condylar Buttress & Supracondylar Fixation',
    summary:
      'Designed for severe supracondylar, intra-articular condylar split, and periprosthetic fractures of the distal femur. Features an expanded lateral condylar cluster and heavy-duty diaphyseal shaft to resist high varus bending moments.',
    verifiedHotspots: [
      {
        id: 'dfp-condylar-cluster',
        number: 1,
        title: 'Distal Condylar Multi-Screw Cluster',
        zone: 'head',
        x: 79,
        y: 23,
        featureName: 'Expanded Condylar Locking Array',
        description:
          'Multi-hole condylar array engineered to accommodate divergent 5.0mm locking screws across the femoral condyles, securing coronal and sagittal fractures superior to the patellofemoral joint.',
        verifiedSpecs: [
          { label: 'Compatible Screws', value: '5.0mm Locking, 5.0mm Cancellous, 4.5mm Cortex' },
          { label: 'Trajectory Plan', value: 'Multi-directional distal condylar divergence' },
          { label: 'Indications', value: 'AO/OTA 33-A/B/C supracondylar & condylar fractures' },
        ],
        clinicalSignificance:
          'Provides maximum purchase in cancellous bone and around total knee arthroplasty prostheses.',
      },
      {
        id: 'dfp-supracondylar-contour',
        number: 2,
        title: 'Lateral Supracondylar Anatomical Curve',
        zone: 'neck',
        x: 67,
        y: 34,
        featureName: 'Anatomically Contoured Supracondylar Flare',
        description:
          'Follows the physiological valgus curvature and anteroposterior bow of the lateral distal femur, ensuring close plate-bone apposition without impingement on the iliotibial band.',
        verifiedSpecs: [
          { label: 'Anatomical Fit', value: 'Specific Right and Left lateral profiles' },
          { label: 'Identification', value: "Laser-marked 'R' / 'L' supracondylar marker" },
          { label: 'Profile Height', value: 'Low-profile chamfered lateral flange' },
        ],
        clinicalSignificance:
          'Eliminates intraoperative contouring and minimizes postoperative lateral knee irritation.',
      },
      {
        id: 'dfp-diaphyseal-shaft',
        number: 3,
        title: 'Rigid Load-Sharing Combi Shaft',
        zone: 'shaft',
        x: 45,
        y: 53,
        featureName: 'Heavy-Duty Diaphyseal Combi-Holes',
        description:
          'Thickened diaphyseal section providing angle-stable locking and compression options engineered to withstand heavy cyclic loading during early mobilization.',
        verifiedSpecs: [
          { label: 'Hole Span', value: '3 to 13 Diaphyseal Holes available' },
          { label: 'Compatible Screws', value: '5.0mm Locking, 4.5mm Cortex Screws' },
          { label: 'Biomaterial Grade', value: 'SS 316L (ASTM F138) / Titanium Gr. 5 (ASTM F136)' },
        ],
        clinicalSignificance:
          'Offers bridge plating capability with high fatigue resistance across metaphyseal defect zones.',
      },
      {
        id: 'dfp-traceable-tip',
        number: 4,
        title: 'Chamfered Submuscular Lead & Lot ID',
        zone: 'tip',
        x: 20,
        y: 74,
        featureName: 'Tapered Proximal Gliding Tip',
        description:
          'Smoothly beveled proximal shaft end designed for submuscular insertion along the vastus lateralis, with laser-etched permanent catalogue and batch numbers.',
        verifiedSpecs: [
          { label: 'Tip Geometry', value: 'Beveled submuscular tunneling lead' },
          { label: 'Catalogue Code', value: 'S2076 (SS316L) / T2076 (Titanium Gr. 5) Series' },
          { label: 'Traceability', value: 'Laser etched heat code & ISO 13485 verification' },
        ],
        clinicalSignificance:
          'Facilitates minimally invasive bridge-plating without wide formal exposure.',
      },
    ],
  },

  // 4. Flagship Proximal Humerus Locking Plate (PHILOS Type)
  'proximal-humerus-locking-plate-3-5mm': {
    productSlug: 'proximal-humerus-locking-plate-3-5mm',
    productName: 'Proximal Humerus Locking Plate 3.5mm (PHILOS Type)',
    categoryName: 'Humerus & Upper Extremity Locking Plates',
    anatomicalRegion: 'Shoulder & Upper Extremity',
    headline: 'Fixed-Angle Calcar-Supporting Proximal Humerus Architecture',
    summary:
      'Engineered for 2-part, 3-part, and 4-part proximal humerus fractures in young and osteoporotic patients (Neer classification). Features convergent/divergent screw clusters, calcar buttress screws, and peripheral suture eyelets for rotator cuff tendon reattachment.',
    verifiedHotspots: [
      {
        id: 'php-head-cluster',
        number: 1,
        title: 'Humeral Head Multi-Planar Cluster',
        zone: 'head',
        x: 72,
        y: 23,
        featureName: 'Fixed-Angle Cancellous Head Cluster',
        description:
          'Multi-hole cluster featuring divergent and convergent locking screw trajectories engineered for secure purchase in poor-quality osteoporotic bone of the humeral head.',
        verifiedSpecs: [
          { label: 'Compatible Screws', value: '3.5mm Locking, 3.5mm Cancellous Locking' },
          { label: 'Screw Orientation', value: 'Multi-directional divergent/convergent array' },
          { label: 'Clinical Targets', value: 'Neer 2-, 3-, 4-part humeral head fractures' },
        ],
        clinicalSignificance:
          'Greatly decreases the risk of secondary screw cutout and intra-articular perforation.',
      },
      {
        id: 'php-suture-eyelets',
        number: 2,
        title: 'Rotator Cuff Suture Eyelets',
        zone: 'feature',
        x: 77,
        y: 31,
        featureName: 'Peripheral Suture Attachment Eyelets',
        description:
          'Small chamfered perimeter eyelets designed for passing non-absorbable heavy sutures to neutralize muscular forces from the supraspinatus, infraspinatus, and subscapularis tendons.',
        verifiedSpecs: [
          { label: 'Hole Design', value: 'Chamfered suture eyelets preventing suture fraying' },
          { label: 'Function', value: 'Tuberosity fragment fixation & cuff augmentation' },
          { label: 'Position', value: 'Anterior and posterior head perimeter' },
        ],
        clinicalSignificance:
          'Enables simultaneous anatomical reconstruction of displaced greater and lesser tuberosities.',
      },
      {
        id: 'php-calcar-buttress',
        number: 3,
        title: 'Medial Calcar Supporting Screws',
        zone: 'buttress',
        x: 67,
        y: 28,
        featureName: 'Inferomedial Calcar Screw Trajectory',
        description:
          'Strategically angled inferomedial locking screw holes engineered to engage the dense medial cortical bone (calcar) of the humeral neck, resisting varus collapse.',
        verifiedSpecs: [
          { label: 'Target Anatomy', value: 'Inferomedial humeral neck (calcar)' },
          { label: 'Mechanical Role', value: 'Varus moment neutralization' },
          { label: 'Screw Type', value: '3.5mm angle-stable locking screw' },
        ],
        clinicalSignificance:
          'Biomechanical key to preventing primary and secondary varus deformity in comminuted fractures.',
      },
      {
        id: 'php-combi-shaft',
        number: 4,
        title: 'Diaphyseal Shaft Combi-Holes',
        zone: 'shaft',
        x: 38,
        y: 62,
        featureName: '3.5mm Dynamic Compression & Locking Shaft',
        description:
          'Shaft combi-holes allowing precise plate-to-shaft fixation and axial compression along the lateral humerus, with low profile to prevent soft-tissue tension.',
        verifiedSpecs: [
          { label: 'Available Sizes', value: '2, 3, 4, 5, 6, 7, 8, 10 Shaft Holes' },
          { label: 'Compatible Screws', value: '3.5mm Locking, 3.5mm Cortex Screws' },
          { label: 'Biomaterial Grade', value: 'Stainless Steel 316L / Titanium Grade 5' },
        ],
        clinicalSignificance:
          'Provides solid diaphyseal anchorage while preserving the ascending branch of the anterior humeral circumflex artery.',
      },
      {
        id: 'php-insertion-tip',
        number: 5,
        title: 'Chamfered Distal Gliding Lead',
        zone: 'tip',
        x: 23,
        y: 76,
        featureName: 'Tapered Distal Insertion Tip',
        description:
          'Low-profile chamfered distal tip facilitating subdeltoid passage with laser-marked catalogue codes for immediate surgical confirmation.',
        verifiedSpecs: [
          { label: 'Catalogue Code', value: 'S2079 (SS316L) / T2079 (Titanium Gr. 5) Series' },
          { label: 'Tip Profile', value: 'Rounded atraumatic lead' },
          { label: 'Standard', value: 'ASTM F138 & ISO 13485:2016 Certified' },
        ],
        clinicalSignificance:
          'Protects the axillary nerve zone during insertion through anterolateral or deltopectoral approaches.',
      },
    ],
  },
};

/**
 * Returns verified interactive anatomy definition if product has verified annotations,
 * or null if product should use the standard clean viewer.
 */
export function getProductAnatomy(slug?: string): ProductAnatomyDef | null {
  if (!slug) return null;
  return PRODUCT_ANATOMY_REGISTRY[slug] || null;
}
