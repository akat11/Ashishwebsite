import { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import {
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Maximize2,
  Minimize2,
  Eye,
  EyeOff,
  ShieldCheck,
  CheckCircle2,
  X,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Layers,
  FileText,
  Move,
  Info,
  MessageCircle,
} from 'lucide-react';
import type { Product } from '@/data/products';
import { getProductAnatomy, type ProductHotspot, type ProductAnatomyDef } from '@/data/productAnatomy';

interface InteractiveProductViewerProps {
  product: Product;
  categoryShortName?: string;
  onRequestMonograph?: () => void;
  whatsappInquiryUrl?: string;
}

export default function InteractiveProductViewer({
  product,
  categoryShortName,
  onRequestMonograph,
  whatsappInquiryUrl,
}: InteractiveProductViewerProps) {
  // Retrieve verified anatomy definitions if in allowlist
  const anatomyDef: ProductAnatomyDef | null = getProductAnatomy(product.slug);
  const hasHotspots = Boolean(anatomyDef && anatomyDef.verifiedHotspots.length > 0);
  const hotspots: ProductHotspot[] = useMemo(
    () => anatomyDef?.verifiedHotspots || [],
    [anatomyDef]
  );

  // Interaction State
  const [scale, setScale] = useState<number>(1);
  const [pan, setPan] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const dragStartRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const panStartRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  // Hotspots Visibility & Active Selection
  const [showHotspots, setShowHotspots] = useState<boolean>(true);
  const [activeHotspotId, setActiveHotspotId] = useState<string | null>(null);

  // Fullscreen Modal State
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  // Container References
  const stageRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  const activeHotspot = hotspots.find((h) => h.id === activeHotspotId) || null;
  const activeIndex = activeHotspot ? hotspots.findIndex((h) => h.id === activeHotspotId) : -1;

  // Reset viewer and selection state whenever navigating to a different product
  useEffect(() => {
    setActiveHotspotId(null);
    setScale(1);
    setPan({ x: 0, y: 0 });
    setIsFullscreen(false);
  }, [product.slug]);

  // Zoom Handlers
  const handleZoomIn = useCallback(() => {
    setScale((prev) => Math.min(Number((prev + 0.35).toFixed(2)), 3.0));
  }, []);

  const handleZoomOut = useCallback(() => {
    setScale((prev) => {
      const next = Math.max(Number((prev - 0.35).toFixed(2)), 1.0);
      if (next === 1.0) setPan({ x: 0, y: 0 });
      return next;
    });
  }, []);

  const handleResetZoom = useCallback(() => {
    setScale(1);
    setPan({ x: 0, y: 0 });
  }, []);

  // Hotspot Navigation
  const selectNextHotspot = useCallback(() => {
    if (hotspots.length === 0) return;
    if (activeIndex === -1 || activeIndex === hotspots.length - 1) {
      setActiveHotspotId(hotspots[0].id);
    } else {
      setActiveHotspotId(hotspots[activeIndex + 1].id);
    }
  }, [hotspots, activeIndex]);

  const selectPrevHotspot = useCallback(() => {
    if (hotspots.length === 0) return;
    if (activeIndex <= 0) {
      setActiveHotspotId(hotspots[hotspots.length - 1].id);
    } else {
      setActiveHotspotId(hotspots[activeIndex - 1].id);
    }
  }, [hotspots, activeIndex]);

  // Mouse Drag / Panning
  const handleMouseDown = (e: React.MouseEvent) => {
    if (scale <= 1) return;
    setIsDragging(true);
    dragStartRef.current = { x: e.clientX, y: e.clientY };
    panStartRef.current = { ...pan };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || scale <= 1) return;
    const dx = e.clientX - dragStartRef.current.x;
    const dy = e.clientY - dragStartRef.current.y;
    // Bound panning to prevent image disappearing
    const maxPan = 140 * (scale - 1);
    setPan({
      x: Math.max(-maxPan, Math.min(maxPan, panStartRef.current.x + dx)),
      y: Math.max(-maxPan, Math.min(maxPan, panStartRef.current.y + dy)),
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Touch Drag / Panning
  const handleTouchStart = (e: React.TouchEvent) => {
    if (scale <= 1 || e.touches.length !== 1) return;
    setIsDragging(true);
    dragStartRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    panStartRef.current = { ...pan };
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || scale <= 1 || e.touches.length !== 1) return;
    const dx = e.touches[0].clientX - dragStartRef.current.x;
    const dy = e.touches[0].clientY - dragStartRef.current.y;
    const maxPan = 140 * (scale - 1);
    setPan({
      x: Math.max(-maxPan, Math.min(maxPan, panStartRef.current.x + dx)),
      y: Math.max(-maxPan, Math.min(maxPan, panStartRef.current.y + dy)),
    });
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  // Keyboard navigation & Esc key handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (isFullscreen) {
          setIsFullscreen(false);
          handleResetZoom();
        } else if (activeHotspotId) {
          setActiveHotspotId(null);
        }
      } else if (hasHotspots && showHotspots) {
        if (e.key === 'ArrowRight') {
          selectNextHotspot();
        } else if (e.key === 'ArrowLeft') {
          selectPrevHotspot();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFullscreen, activeHotspotId, hasHotspots, showHotspots, selectNextHotspot, selectPrevHotspot, handleResetZoom]);

  // Fullscreen Body Scroll Lock
  useEffect(() => {
    if (isFullscreen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isFullscreen]);

  return (
    <div className="space-y-4">
      {/* Main Interactive Stage Card */}
      <div
        ref={stageRef}
        className="relative rounded-3xl border border-slate-200 bg-gradient-to-b from-[#F8FAFC] via-[#F1F6FA] to-[#EDF5FA] overflow-hidden shadow-sm flex flex-col justify-between"
      >
        {/* Top Floating Telemetry & Control Bar */}
        <div className="relative z-20 p-3 sm:p-4 flex flex-wrap items-center justify-between gap-2 border-b border-slate-200/70 bg-white/70 backdrop-blur-md">
          {/* Anatomical Mode Badge */}
          <div className="flex items-center gap-2 min-w-0">
            {hasHotspots ? (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#0875D1]/10 text-[#0875D1] text-[11px] font-mono font-bold uppercase tracking-wider truncate border border-[#0875D1]/20">
                <Sparkles className="h-3 w-3 shrink-0 text-[#12C8E8]" />
                <span className="truncate">Interactive Anatomy ({hotspots.length} Markers)</span>
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 text-[11px] font-mono font-bold uppercase tracking-wider truncate border border-slate-200">
                <ShieldCheck className="h-3 w-3 shrink-0 text-slate-500" />
                <span className="truncate">Verified Clinical Studio Photography</span>
              </span>
            )}
          </div>

          {/* Interactive Toolbar */}
          <div className="flex items-center gap-1 bg-white/90 p-1 rounded-xl border border-slate-200 shadow-2xs">
            {/* Toggle Hotspots Button (if hotspots available) */}
            {hasHotspots && (
              <button
                type="button"
                onClick={() => {
                  setShowHotspots((prev) => !prev);
                  if (showHotspots) setActiveHotspotId(null);
                }}
                className={`p-1.5 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors cursor-pointer ${
                  showHotspots
                    ? 'bg-[#0875D1] text-white shadow-2xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
                title={showHotspots ? 'Hide technical markers' : 'Display technical markers'}
                aria-label={showHotspots ? 'Hide technical markers' : 'Display technical markers'}
              >
                {showHotspots ? <Eye className="h-3.5 w-3.5" /> : <EyeOff className="h-3.5 w-3.5" />}
                <span className="hidden sm:inline text-[11px]">
                  {showHotspots ? 'Markers' : 'Clean'}
                </span>
              </button>
            )}

            <div className="h-4 w-px bg-slate-200 mx-0.5" aria-hidden="true" />

            {/* Zoom Controls */}
            <button
              type="button"
              onClick={handleZoomOut}
              disabled={scale <= 1}
              className="p-1.5 rounded-lg text-slate-600 hover:text-[#0875D1] hover:bg-slate-100 disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer"
              title="Zoom Out"
              aria-label="Zoom Out"
            >
              <ZoomOut className="h-3.5 w-3.5" />
            </button>

            <span className="text-[11px] font-mono font-bold text-slate-500 px-1 select-none min-w-[34px] text-center">
              {Math.round(scale * 100)}%
            </span>

            <button
              type="button"
              onClick={handleZoomIn}
              disabled={scale >= 3}
              className="p-1.5 rounded-lg text-slate-600 hover:text-[#0875D1] hover:bg-slate-100 disabled:opacity-30 disabled:pointer-events-none transition-colors cursor-pointer"
              title="Zoom In"
              aria-label="Zoom In"
            >
              <ZoomIn className="h-3.5 w-3.5" />
            </button>

            {scale > 1 && (
              <button
                type="button"
                onClick={handleResetZoom}
                className="p-1.5 rounded-lg text-slate-600 hover:text-[#0875D1] hover:bg-slate-100 transition-colors cursor-pointer"
                title="Reset zoom to 100%"
                aria-label="Reset zoom to 100%"
              >
                <RotateCcw className="h-3.5 w-3.5" />
              </button>
            )}

            <div className="h-4 w-px bg-slate-200 mx-0.5" aria-hidden="true" />

            {/* Fullscreen Expand */}
            <button
              type="button"
              onClick={() => setIsFullscreen(true)}
              className="p-1.5 rounded-lg text-slate-600 hover:text-[#0875D1] hover:bg-slate-100 transition-colors cursor-pointer"
              title="Expand to Fullscreen Inspection Mode"
              aria-label="Expand to Fullscreen Inspection Mode"
            >
              <Maximize2 className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        {/* Central Viewport Stage with Zoom, Pan, and Percentage Hotspots */}
        <div
          ref={imageContainerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className={`relative aspect-[4/3] w-full min-h-[340px] sm:min-h-[400px] flex items-center justify-center p-6 sm:p-10 select-none overflow-hidden ${
            scale > 1 ? (isDragging ? 'cursor-grabbing' : 'cursor-grab') : 'cursor-default'
          }`}
        >
          {/* Subtle Studio Pedestal Shadow */}
          <div
            className="pointer-events-none absolute inset-x-14 bottom-8 h-14 rounded-full bg-gradient-to-r from-transparent via-[#0875D1]/10 to-transparent blur-xl"
            aria-hidden="true"
          />

          {/* Scaled & Translated Layer */}
          <div
            className="relative w-full h-full max-h-full max-w-full aspect-[4/3] flex items-center justify-center transition-transform duration-150 ease-out"
            style={{
              transform: `translate(${pan.x}px, ${pan.y}px) scale(${scale})`,
              transformOrigin: 'center center',
            }}
          >
            {/* The Actual Implant Image with WebP & Fallback */}
            <picture className="h-full w-full flex items-center justify-center">
              {product.image?.endsWith('.jpg') && (
                <source srcSet={product.image.replace(/\.jpg$/, '.webp')} type="image/webp" />
              )}
              <img
                src={product.image}
                alt={product.name}
                decoding="async"
                draggable={false}
                className="max-h-full max-w-full object-contain filter drop-shadow-md select-none pointer-events-none"
              />
            </picture>

            {/* Hotspots Overlay (Only visible when active & showHotspots is true) */}
            {hasHotspots && showHotspots && (
              <div
                className="absolute inset-0 pointer-events-auto"
                aria-label="Interactive implant technical features"
              >
                {hotspots.map((hotspot) => {
                  const isActive = activeHotspotId === hotspot.id;

                  return (
                    <div
                      key={hotspot.id}
                      className="absolute -translate-x-1/2 -translate-y-1/2 z-20 group"
                      style={{
                        left: `${hotspot.x}%`,
                        top: `${hotspot.y}%`,
                      }}
                    >
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveHotspotId(isActive ? null : hotspot.id);
                        }}
                        className={`relative flex items-center justify-center rounded-full transition-all duration-300 focus:outline-hidden focus:ring-2 focus:ring-[#12C8E8] cursor-pointer ${
                          isActive
                            ? 'h-8 w-8 bg-[#12C8E8] text-[#062D56] shadow-lg shadow-[#12C8E8]/40 scale-110 z-30 ring-2 ring-white'
                            : 'h-7 w-7 bg-[#062D56]/90 text-white hover:bg-[#0875D1] shadow-md border border-white/80'
                        }`}
                        aria-label={`Technical Hotspot ${hotspot.number}: ${hotspot.title}`}
                        aria-expanded={isActive}
                      >
                        {/* Animated Pulsing Ring */}
                        {!isActive && (
                          <span className="absolute -inset-1 rounded-full bg-[#12C8E8] opacity-35 animate-ping pointer-events-none" />
                        )}

                        <span className="text-xs font-mono font-extrabold leading-none">
                          {hotspot.number}
                        </span>
                      </button>

                      {/* Hover Tooltip Preview */}
                      {!isActive && (
                        <div className="pointer-events-none absolute left-1/2 bottom-full -translate-x-1/2 mb-2 hidden sm:group-hover:flex flex-col items-center z-40 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          <div className="rounded-lg bg-[#062D56]/95 backdrop-blur-xs px-2.5 py-1 text-[11px] font-semibold text-white whitespace-nowrap shadow-lg border border-white/10">
                            {hotspot.number}. {hotspot.title}
                          </div>
                          <div className="w-2 h-2 bg-[#062D56] rotate-45 -mt-1" />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Pan Hint Indicator when Zoomed */}
          {scale > 1 && (
            <div className="pointer-events-none absolute bottom-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-xs text-[10px] font-mono text-white/90">
              <Move className="h-3 w-3 text-[#12C8E8]" />
              <span>Drag to Pan</span>
            </div>
          )}

          {/* Left Corner Series Badge */}
          {categoryShortName && (
            <div className="pointer-events-none absolute top-3 left-3 px-2.5 py-0.5 rounded-md bg-white/90 backdrop-blur-xs border border-slate-200 text-[#062D56] text-[10.5px] font-mono font-bold shadow-2xs">
              {categoryShortName}
            </div>
          )}

          {/* Right Corner ISO Quality Stamp */}
          <div className="pointer-events-none absolute bottom-3 right-3 flex items-center gap-1 text-[10px] font-mono text-emerald-700 bg-white/90 backdrop-blur-xs px-2 py-0.5 rounded-md border border-emerald-200/80 shadow-2xs">
            <ShieldCheck className="h-3 w-3 text-emerald-600" />
            <span>ISO 13485</span>
          </div>
        </div>

        {/* Hotspot Quick-Selector Pill Row (When Hotspots exist) */}
        {hasHotspots && showHotspots && (
          <div className="p-3 bg-slate-50/90 border-t border-slate-200/80 flex items-center justify-between gap-2 overflow-x-auto">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 shrink-0 hidden sm:inline">
              Anatomy Tour:
            </span>
            <div className="flex items-center gap-1.5 overflow-x-auto py-0.5 scrollbar-none">
              {hotspots.map((h) => {
                const isSelected = activeHotspotId === h.id;
                return (
                  <button
                    key={h.id}
                    type="button"
                    onClick={() => setActiveHotspotId(isSelected ? null : h.id)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
                      isSelected
                        ? 'bg-[#0875D1] text-white shadow-xs scale-102'
                        : 'bg-white text-slate-600 hover:bg-slate-200/70 border border-slate-200/80'
                    }`}
                  >
                    <span
                      className={`h-4 w-4 rounded-full flex items-center justify-center text-[10px] font-mono font-bold ${
                        isSelected ? 'bg-white text-[#0875D1]' : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {h.number}
                    </span>
                    <span className="truncate max-w-[140px]">{h.title}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Contextual Technical Information Panel (Docked directly under stage when a marker is clicked) */}
      {activeHotspot && (
        <div className="relative rounded-2xl border border-[#0875D1]/30 bg-white p-5 sm:p-6 shadow-md animate-fade-in text-slate-800">
          {/* Panel Header */}
          <div className="flex items-start justify-between gap-4 pb-3.5 border-b border-slate-100">
            <div className="space-y-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center justify-center h-5 w-5 rounded-full bg-[#12C8E8] text-[#062D56] font-mono text-xs font-bold shadow-2xs">
                  {activeHotspot.number}
                </span>
                <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#0875D1] bg-[#0875D1]/10 px-2 py-0.5 rounded">
                  {activeHotspot.featureName}
                </span>
                <span className="text-[11px] font-mono text-slate-400 capitalize">
                  Zone: {activeHotspot.zone}
                </span>
              </div>
              <h3 className="font-display text-lg sm:text-xl font-bold text-[#062D56]">
                {activeHotspot.title}
              </h3>
            </div>

            <button
              type="button"
              onClick={() => setActiveHotspotId(null)}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer shrink-0"
              title="Close specification panel and return to clean image view"
              aria-label="Close specification panel"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Description */}
          <p className="mt-3.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
            {activeHotspot.description}
          </p>

          {/* Clinical Significance Note if present */}
          {activeHotspot.clinicalSignificance && (
            <div className="mt-3 flex items-start gap-2 text-xs font-medium text-emerald-800 bg-emerald-50/80 p-2.5 rounded-xl border border-emerald-200/60">
              <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>{activeHotspot.clinicalSignificance}</span>
            </div>
          )}

          {/* Verified Specifications Table for this Hotspot */}
          <div className="mt-4 rounded-xl border border-slate-200 overflow-hidden divide-y divide-slate-100 text-xs">
            {activeHotspot.verifiedSpecs.map((spec, i) => (
              <div
                key={spec.label}
                className={`grid grid-cols-1 sm:grid-cols-[160px_1fr] p-2.5 gap-1 sm:gap-3 ${
                  i % 2 === 0 ? 'bg-white' : 'bg-slate-50/70'
                }`}
              >
                <span className="font-semibold text-slate-500">{spec.label}</span>
                <span className="font-mono font-medium text-slate-900">{spec.value}</span>
              </div>
            ))}
          </div>

          {/* Stepper Footer */}
          <div className="mt-4 pt-3.5 border-t border-slate-100 flex items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={selectPrevHotspot}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-semibold transition-colors cursor-pointer"
                aria-label="Previous technical hotspot"
              >
                <ChevronLeft className="h-3.5 w-3.5" />
                <span>Prev Feature</span>
              </button>
              <button
                type="button"
                onClick={selectNextHotspot}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-semibold transition-colors cursor-pointer"
                aria-label="Next technical hotspot"
              >
                <span>Next Feature</span>
                <ChevronRight className="h-3.5 w-3.5" />
              </button>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setActiveHotspotId(null)}
                className="text-slate-500 hover:text-[#0875D1] font-semibold transition-colors cursor-pointer text-xs"
              >
                Clear Marker
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Fullscreen Modal Viewport */}
      {isFullscreen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#020F1C]/95 backdrop-blur-xl animate-fade-in p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="fullscreen-implant-title"
        >
          <div className="relative w-full h-full max-w-6xl max-h-[92vh] flex flex-col bg-[#031525] rounded-3xl border border-white/15 overflow-hidden shadow-2xl">
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-white/10 flex items-center justify-between gap-4 text-white bg-[#020F1C]/80">
              <div className="flex items-center gap-3">
                <span className="p-2 rounded-xl bg-[#12C8E8]/10 text-[#12C8E8] border border-[#12C8E8]/30">
                  <Layers className="h-4 w-4" />
                </span>
                <div>
                  <h3 id="fullscreen-implant-title" className="font-display text-sm sm:text-base font-bold text-white">
                    {product.name} — Full-Resolution Technical Inspection
                  </h3>
                  <p className="text-[11px] font-mono text-[#12C8E8]">
                    {anatomyDef ? anatomyDef.headline : 'Verified Engineering Monograph View'}
                  </p>
                </div>
              </div>

              {/* Fullscreen Actions */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleZoomOut}
                  disabled={scale <= 1}
                  className="p-2 rounded-xl bg-white/10 text-white/90 hover:bg-white/20 disabled:opacity-30 cursor-pointer"
                  title="Zoom Out"
                >
                  <ZoomOut className="h-4 w-4" />
                </button>
                <span className="text-xs font-mono font-bold text-slate-300 min-w-[36px] text-center">
                  {Math.round(scale * 100)}%
                </span>
                <button
                  type="button"
                  onClick={handleZoomIn}
                  disabled={scale >= 3}
                  className="p-2 rounded-xl bg-white/10 text-white/90 hover:bg-white/20 disabled:opacity-30 cursor-pointer"
                  title="Zoom In"
                >
                  <ZoomIn className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={handleResetZoom}
                  className="p-2 rounded-xl bg-white/10 text-white/90 hover:bg-white/20 cursor-pointer"
                  title="Reset Scale"
                >
                  <RotateCcw className="h-4 w-4" />
                </button>
                <div className="h-5 w-px bg-white/20 mx-1" />
                <button
                  type="button"
                  onClick={() => {
                    setIsFullscreen(false);
                    handleResetZoom();
                  }}
                  className="p-2 rounded-xl bg-white/10 text-white hover:bg-white/25 cursor-pointer"
                  title="Exit Fullscreen (Esc)"
                  aria-label="Exit Fullscreen"
                >
                  <Minimize2 className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Modal Body: Split view of stage & technical drawer */}
            <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 min-h-0 overflow-hidden">
              {/* Fullscreen Stage (8 cols) */}
              <div
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                className={`lg:col-span-8 relative flex items-center justify-center p-8 overflow-hidden select-none bg-gradient-to-b from-[#031525] to-[#020F1C] ${
                  scale > 1 ? (isDragging ? 'cursor-grabbing' : 'cursor-grab') : 'cursor-default'
                }`}
              >
                <div
                  className="relative w-full h-full aspect-[4/3] max-h-full max-w-full flex items-center justify-center transition-transform duration-100"
                  style={{
                    transform: `translate(${pan.x}px, ${pan.y}px) scale(${scale})`,
                    transformOrigin: 'center center',
                  }}
                >
                  <picture className="h-full w-full flex items-center justify-center">
                    {product.image?.endsWith('.jpg') && (
                      <source srcSet={product.image.replace(/\.jpg$/, '.webp')} type="image/webp" />
                    )}
                    <img
                      src={product.image}
                      alt={product.name}
                      decoding="async"
                      draggable={false}
                      className="max-h-full max-w-full object-contain filter drop-shadow-2xl select-none pointer-events-none"
                    />
                  </picture>

                  {/* Hotspots in Fullscreen */}
                  {hasHotspots && showHotspots && (
                    <div className="absolute inset-0 pointer-events-auto">
                      {hotspots.map((hotspot) => {
                        const isActive = activeHotspotId === hotspot.id;
                        return (
                          <div
                            key={hotspot.id}
                            className="absolute -translate-x-1/2 -translate-y-1/2 z-20"
                            style={{
                              left: `${hotspot.x}%`,
                              top: `${hotspot.y}%`,
                            }}
                          >
                            <button
                              type="button"
                              onClick={() => setActiveHotspotId(isActive ? null : hotspot.id)}
                              className={`relative flex items-center justify-center rounded-full transition-all duration-300 cursor-pointer ${
                                isActive
                                  ? 'h-9 w-9 bg-[#12C8E8] text-[#062D56] shadow-xl shadow-[#12C8E8]/50 ring-4 ring-white'
                                  : 'h-8 w-8 bg-[#062D56]/90 text-white hover:bg-[#0875D1] border-2 border-white/80'
                              }`}
                              aria-label={`Hotspot ${hotspot.number}: ${hotspot.title}`}
                            >
                              <span className="text-xs font-mono font-bold">{hotspot.number}</span>
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>

              {/* Fullscreen Sidebar (4 cols) */}
              <div className="lg:col-span-4 bg-[#051C33] border-t lg:border-t-0 lg:border-l border-white/10 p-5 sm:p-6 overflow-y-auto flex flex-col justify-between text-white">
                {activeHotspot ? (
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="h-5 w-5 rounded-full bg-[#12C8E8] text-[#062D56] font-mono text-xs font-bold flex items-center justify-center">
                          {activeHotspot.number}
                        </span>
                        <span className="text-xs font-mono text-[#12C8E8] uppercase tracking-wider font-bold">
                          {activeHotspot.featureName}
                        </span>
                      </div>
                      <h4 className="font-display text-lg font-bold text-white">
                        {activeHotspot.title}
                      </h4>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {activeHotspot.description}
                    </p>

                    <div className="rounded-xl border border-white/10 bg-white/5 divide-y divide-white/10 text-xs">
                      {activeHotspot.verifiedSpecs.map((spec) => (
                        <div key={spec.label} className="p-2.5 flex flex-col gap-0.5">
                          <span className="text-slate-400 text-[11px] uppercase">{spec.label}</span>
                          <span className="font-mono text-white font-medium">{spec.value}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-2 flex items-center justify-between">
                      <button
                        type="button"
                        onClick={selectPrevHotspot}
                        className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold"
                      >
                        ← Prev
                      </button>
                      <button
                        type="button"
                        onClick={() => setActiveHotspotId(null)}
                        className="text-xs text-slate-400 hover:text-white"
                      >
                        Deselect
                      </button>
                      <button
                        type="button"
                        onClick={selectNextHotspot}
                        className="px-3 py-1.5 rounded-lg bg-[#12C8E8] text-[#062D56] text-xs font-bold"
                      >
                        Next →
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4 text-center my-auto p-4">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-[#12C8E8]">
                      <Info className="h-6 w-6" />
                    </div>
                    <h4 className="font-display text-base font-bold text-white">
                      Anatomical Feature Inspection
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed max-w-xs mx-auto">
                      Click any numbered marker on the implant or select from the list below to inspect verified engineering tolerances, screw trajectories, and clinical functions.
                    </p>

                    {hasHotspots && (
                      <div className="pt-2 flex flex-col gap-1.5 text-left">
                        {hotspots.map((h) => (
                          <button
                            key={h.id}
                            type="button"
                            onClick={() => setActiveHotspotId(h.id)}
                            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-slate-200 flex items-center gap-2 transition-colors cursor-pointer"
                          >
                            <span className="h-5 w-5 rounded-full bg-white/10 text-[#12C8E8] font-mono text-xs font-bold flex items-center justify-center">
                              {h.number}
                            </span>
                            <span className="font-medium truncate">{h.title}</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* Footer Monograph & WhatsApp Quick CTAs */}
                <div className="pt-4 border-t border-white/10 space-y-2">
                  <button
                    type="button"
                    onClick={() => {
                      setIsFullscreen(false);
                      if (onRequestMonograph) onRequestMonograph();
                    }}
                    className="w-full btn-cyan text-xs !py-2.5 justify-center"
                  >
                    <FileText className="h-3.5 w-3.5" />
                    <span>Request Full Technical Monograph</span>
                  </button>
                  {whatsappInquiryUrl && (
                    <a
                      href={whatsappInquiryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-semibold transition-colors"
                    >
                      <MessageCircle className="h-3.5 w-3.5" />
                      <span>Inquire via WhatsApp</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
