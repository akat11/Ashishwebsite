import { useState, useCallback } from 'react';
import SEO from '@/components/SEO';
import CinematicHero from '@/components/home/CinematicHero';
import InteractiveAnatomy from '@/components/home/InteractiveAnatomy';
import FlagshipShowcase from '@/components/home/FlagshipShowcase';
import ProductDiscoveryEngine from '@/components/home/ProductDiscoveryEngine';
import CategoryShowcase from '@/components/home/CategoryShowcase';
import SpecialtySpotlight from '@/components/home/SpecialtySpotlight';
import ClinicalEngineering from '@/components/home/ClinicalEngineering';
import WhyVinayak from '@/components/home/WhyVinayak';
import SectorsServed from '@/components/home/SectorsServed';
import HomeCTA from '@/components/home/HomeCTA';
import QuickSpecModal from '@/components/home/QuickSpecModal';
import CatalogueRequestModal from '@/components/home/CatalogueRequestModal';
import type { Product } from '@/data/products';

export default function Home() {
  const [selectedProductForSpec, setSelectedProductForSpec] = useState<Product | null>(null);
  const [selectedProductForCatalogue, setSelectedProductForCatalogue] = useState<Product | null>(null);
  const [isCatalogueModalOpen, setIsCatalogueModalOpen] = useState(false);

  const handleOpenCatalogueModal = useCallback((product?: Product) => {
    setSelectedProductForCatalogue(product || null);
    setIsCatalogueModalOpen(true);
  }, []);

  const handleCloseCatalogueModal = useCallback(() => {
    setIsCatalogueModalOpen(false);
    setSelectedProductForCatalogue(null);
  }, []);

  const handleCloseSpecModal = useCallback(() => {
    setSelectedProductForSpec(null);
  }, []);

  return (
    <>
      <SEO
        title="Vinayak Surgicals — Precision Implants & Complete Fixation Systems"
        description="Pioneering orthopaedic fixation solutions with precision engineering, advanced biomaterials, and unwavering commitment to clinical excellence. Supplying locking plates, external fixators, and screws across India."
        canonical="https://vinayaksurgicals.vercel.app/"
        keywords="orthopedic locking plates, external fixator systems, ilizarov rings, distal radius plates, proximal tibia locking plate, femur locking plates, orthopedic screws, trauma implants, Kanpur, Uttar Pradesh, India, Vinayak Surgicals"
        image="/images/categories/distal-radius-locking-plates.jpg"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'Vinayak Surgicals',
          url: 'https://vinayaksurgicals.vercel.app',
          potentialAction: {
            '@type': 'SearchAction',
            target: 'https://vinayaksurgicals.vercel.app/products?q={search_term_string}',
            'query-input': 'required name=search_term_string',
          },
        }}
      />

      {/* 1. Cinematic Hero Section with 3D Studio & Live Telemetry HUD */}
      <CinematicHero />

      {/* 2. Signature Feature: 3D WebGL Interactive Anatomical Trauma Explorer (Three.js) */}
      <InteractiveAnatomy
        onSelectProduct={setSelectedProductForSpec}
        onRequestCatalogue={handleOpenCatalogueModal}
      />

      {/* 3. Curated Flagship Editorial Showcase (Visual Variety) */}
      <FlagshipShowcase
        onInspectProduct={setSelectedProductForSpec}
        onRequestCatalogue={handleOpenCatalogueModal}
      />

      {/* 4. Advanced Product Discovery Engine with Live Search & Filtering */}
      <ProductDiscoveryEngine
        onInspectProduct={setSelectedProductForSpec}
        onRequestCatalogue={handleOpenCatalogueModal}
      />

      {/* 5. Complete Anatomical Product Categories Portfolio */}
      <CategoryShowcase />

      {/* 6. Clinical Engineering, Biomaterials & Hospital Supply Overview */}
      <ClinicalEngineering />

      {/* 7. Specialized High-Acuity Systems (Intramedullary Nailing & External Fixation) */}
      <SpecialtySpotlight
        onInspectProduct={setSelectedProductForSpec}
      />

      {/* 8. Why Choose Vinayak & Surgical Support Services */}
      <WhyVinayak />

      {/* 9. Healthcare Sectors & Institutional Distribution Network */}
      <SectorsServed />

      {/* 10. Final Clinical Quotation & Technical Desk CTA */}
      <HomeCTA onRequestCatalogue={handleOpenCatalogueModal} />

      {/* Interactive Quick Specification Drawer / Modal */}
      <QuickSpecModal
        product={selectedProductForSpec}
        onClose={handleCloseSpecModal}
        onRequestCatalogue={handleOpenCatalogueModal}
      />

      {/* Interactive Technical Monograph & Catalogue Request Modal */}
      <CatalogueRequestModal
        product={selectedProductForCatalogue}
        isOpen={isCatalogueModalOpen}
        onClose={handleCloseCatalogueModal}
      />
    </>
  );
}
