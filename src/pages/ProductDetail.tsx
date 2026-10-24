import { useState } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import {
  ArrowRight,
  Copy,
  CheckCheck,
  ShieldCheck,
  FileText,
  MessageCircle,
  Sparkles,
  Layers,
} from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumbs from '@/components/Breadcrumbs';
import ProductCard from '@/components/ProductCard';
import BottomCTA from '@/components/BottomCTA';
import CatalogueRequestModal from '@/components/home/CatalogueRequestModal';
import { productCategories } from '@/data/categories';
import { getProductBySlug, getProductsByCategory } from '@/data/products';
import { buildProductWhatsAppLink } from '@/config/business';
import InteractiveProductViewer from '@/components/product/InteractiveProductViewer';
import { getProductAnatomy } from '@/data/productAnatomy';

export default function ProductDetail() {
  const { category: catSlug, product: prodSlug } = useParams<{ category: string; product: string }>();
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const [isCatalogueModalOpen, setIsCatalogueModalOpen] = useState(false);

  const category = productCategories.find((c) => c.slug === catSlug);
  const product = getProductBySlug(prodSlug ?? '');

  if (!category || !product || product.category !== category.slug) {
    return <Navigate to="/products" replace />;
  }

  const anatomyDef = getProductAnatomy(product.slug);
  const relatedProducts = getProductsByCategory(category.slug)
    .filter((p) => p.slug !== product.slug)
    .slice(0, 4);

  // Extract primary catalogue codes
  const ssCodeSpec = product.specs.find((s) => s.label.toLowerCase().includes('ss316l'));
  const tiCodeSpec = product.specs.find((s) => s.label.toLowerCase().includes('tt') || s.label.toLowerCase().includes('titanium'));
  const primaryCode = ssCodeSpec ? ssCodeSpec.value : (tiCodeSpec ? tiCodeSpec.value : '');

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(text);
    setTimeout(() => setCopiedCode(null), 2500);
  };

  const quoteUrl = `/request-a-quote?product=${encodeURIComponent(product.name)}&code=${encodeURIComponent(primaryCode)}&category=${encodeURIComponent(category.name)}`;
  const whatsappUrl = buildProductWhatsAppLink(product.name);

  return (
    <>
      <SEO
        title={`${product.name} — Technical Monograph & Specifications | Vinayak Surgicals`}
        description={`${product.description} Verified catalogue specifications in implant-grade Stainless Steel 316L and Titanium Grade 5.`}
        canonical={`https://vinyanaksurgicals.com/products/${category.slug}/${product.slug}`}
        image={product.image}
        type="product"
        keywords={`${product.name}, ${category.name}, orthopedic implants, catalogue codes, compatible screws, Vinayak Surgicals, trauma implants Kanpur India`}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Product',
          name: product.name,
          image: product.image.startsWith('http') ? product.image : `https://vinayaksurgicals.vercel.app${product.image}`,
          description: product.description,
          category: category.name,
          sku: primaryCode || product.slug,
          mpn: primaryCode || product.slug,
          material: 'Stainless Steel 316L / Titanium Grade 5',
          brand: {
            '@type': 'Brand',
            name: 'Vinayak Surgicals',
          },
        }}
      />

      <Breadcrumbs
        crumbs={[
          { label: 'Products', path: '/products' },
          { label: category.shortName, path: `/products/${category.slug}` },
          { label: product.name },
        ]}
      />

      {/* Main Product Showcase Viewport */}
      <section className="bg-white py-12 sm:py-16 border-b border-slate-200">
        <div className="container-x">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Column: Interactive Product Anatomy Viewer (5.5 cols) */}
            <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-4">
              <InteractiveProductViewer
                product={product}
                categoryShortName={category.shortName}
                onRequestMonograph={() => setIsCatalogueModalOpen(true)}
                whatsappInquiryUrl={whatsappUrl}
              />

              {/* Quick Actions Under Image */}
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 p-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs sm:text-sm font-bold shadow-xs transition-colors"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>WhatsApp Inquiry</span>
                </a>
                <button
                  onClick={() => setIsCatalogueModalOpen(true)}
                  className="inline-flex items-center justify-center gap-2 p-3 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 text-xs sm:text-sm font-bold shadow-xs transition-colors"
                >
                  <FileText className="h-4 w-4 text-[#0875D1]" />
                  <span>Request Monograph</span>
                </button>
              </div>
            </div>

            {/* Right Column: Engineering Information & Specs (6.5 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-[#0875D1]/10 px-3 py-1 text-xs font-mono font-bold uppercase tracking-wider text-[#0875D1] mb-2.5">
                  <Sparkles className="h-3 w-3" />
                  <span>{category.name}</span>
                </div>

                <h1 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#062D56] tracking-tight leading-tight">
                  {product.name}
                </h1>

                <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <Link
                  to={quoteUrl}
                  className="btn-cyan text-xs sm:text-sm py-3 px-6 shadow-md"
                >
                  <span>Request Formal Hospital Quote</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/contact-us"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 px-5 py-3 text-xs sm:text-sm font-semibold text-slate-700 transition-colors shadow-2xs"
                >
                  <span>Consult Technical Desk</span>
                </Link>
              </div>

              {/* Technical Specifications Matrix */}
              <div className="pt-4 border-t border-slate-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-display text-base font-bold text-[#062D56] flex items-center gap-2">
                    <Layers className="h-4 w-4 text-[#0875D1]" />
                    <span>Verified Engineering Specifications</span>
                  </h3>
                  <span className="text-[11px] font-mono text-slate-400">
                    Source: Manufacturer Monograph
                  </span>
                </div>

                <div className="rounded-2xl border border-slate-200 overflow-hidden divide-y divide-slate-100 text-xs sm:text-sm shadow-2xs">
                  {product.specs.map((spec, i) => {
                    const isCode = spec.label.toLowerCase().includes('code');
                    return (
                      <div
                        key={spec.label}
                        className={`grid grid-cols-1 sm:grid-cols-[200px_1fr] p-3.5 gap-1.5 sm:gap-4 items-center ${
                          i % 2 === 0 ? 'bg-white' : 'bg-slate-50/70'
                        }`}
                      >
                        <span className="font-semibold text-slate-600 sm:text-slate-700">
                          {spec.label}
                        </span>
                        <div className="flex items-center justify-between gap-2">
                          <span className="font-mono text-slate-900 font-medium break-words">
                            {spec.value}
                          </span>
                          {isCode && (
                            <button
                              onClick={() => copyToClipboard(spec.value)}
                              className="p-1 rounded-md text-slate-400 hover:text-[#0875D1] transition-colors shrink-0"
                              title="Copy catalogue code"
                            >
                              {copiedCode === spec.value ? (
                                <CheckCheck className="h-4 w-4 text-emerald-600" />
                              ) : (
                                <Copy className="h-4 w-4" />
                              )}
                            </button>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Compliance Note */}
              <div className="p-4 rounded-2xl bg-[#F8FAFC] border border-slate-200 text-xs text-slate-600 space-y-1">
                <div className="font-bold text-[#062D56] flex items-center gap-1.5">
                  <ShieldCheck className="h-4 w-4 text-[#0875D1]" />
                  <span>Quality &amp; Traceability Assurance</span>
                </div>
                <p className="leading-relaxed">
                  Every implant is laser marked with lot identifiers and heat codes. Dimensional inspection conforms strictly to ISO 13485 standards. Itemized Material Test Certificates (MTC) are provided with hospital tender dispatches.
                </p>
              </div>
            </div>
          </div>

          {/* Biomechanical Engineering Analysis (Only rendered when verified anatomy definitions exist) */}
          {anatomyDef && (
            <div className="mt-16 pt-12 border-t border-slate-200">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0875D1]/10 text-[#0875D1] text-[11px] font-mono font-bold uppercase tracking-wider mb-2 border border-[#0875D1]/20">
                    <Sparkles className="h-3.5 w-3.5 text-[#12C8E8]" />
                    <span>Clinical Anatomy &amp; Engineering Profile</span>
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#062D56] tracking-tight">
                    {anatomyDef.headline}
                  </h2>
                  <p className="mt-2 text-sm text-slate-600 max-w-2xl leading-relaxed">
                    {anatomyDef.summary}
                  </p>
                </div>
                <div className="text-xs font-mono text-slate-600 bg-[#F8FAFC] px-3.5 py-2 rounded-xl border border-slate-200/90 shrink-0 shadow-2xs">
                  Anatomical Complex: <span className="font-bold text-[#062D56]">{anatomyDef.anatomicalRegion}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {anatomyDef.verifiedHotspots.map((hotspot) => (
                  <div
                    key={hotspot.id}
                    className="rounded-2xl border border-slate-200/90 bg-white p-5 shadow-2xs hover:border-[#0875D1]/50 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
                  >
                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between gap-2">
                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#062D56] text-white font-mono text-xs font-bold shadow-2xs">
                          {hotspot.number}
                        </span>
                        <span className="text-[10.5px] font-mono font-bold text-[#0875D1] uppercase tracking-wider bg-[#0875D1]/10 px-2.5 py-0.5 rounded-md">
                          {hotspot.featureName}
                        </span>
                      </div>
                      <h3 className="font-display text-base font-bold text-[#062D56]">
                        {hotspot.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {hotspot.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5 text-[11px] font-mono">
                      {hotspot.verifiedSpecs.slice(0, 2).map((s) => (
                        <div key={s.label} className="flex items-center justify-between gap-2 text-slate-500">
                          <span className="text-slate-400">{s.label}:</span>
                          <span className="font-semibold text-slate-800 truncate">{s.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Related Products Section */}
          {relatedProducts.length > 0 && (
            <div className="mt-18 pt-14 border-t border-slate-200">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-[#062D56]">
                    Related Implants in {category.shortName}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Complementary anatomical configurations and alternative screw hole patterns.
                  </p>
                </div>
                <Link
                  to={`/products/${category.slug}`}
                  className="btn-cyan text-xs py-2 px-4 shrink-0"
                >
                  <span>View All in {category.shortName}</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map((p) => (
                  <ProductCard key={p.slug} product={p} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Technical Monograph Request Modal */}
      <CatalogueRequestModal
        product={product}
        isOpen={isCatalogueModalOpen}
        onClose={() => setIsCatalogueModalOpen(false)}
      />

      {/* Bottom CTA */}
      <BottomCTA
        eyebrow="PRODUCT REQUISITION"
        title={`Request a Hospital Quote for ${product.name}`}
        description="Our sales and logistics desk prepares official proposals with itemized batch pricing and delivery timelines within 1 business day."
        primaryButtonText="Request Quotation"
        primaryButtonLink={quoteUrl}
        secondaryButtonText="WhatsApp Inquiry"
        secondaryButtonLink={whatsappUrl}
      />
    </>
  );
}
