import { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import { ANATOMY_REGIONS } from '@/data/anatomyRegions';

interface ThreeAnatomyViewerProps {
  activeRegionId: string;
  onSelectRegion: (regionId: string) => void;
  isTurntableActive: boolean;
  onToggleTurntable: () => void;
  onResetView: () => void;
}

export default function ThreeAnatomyViewer({
  activeRegionId,
  onSelectRegion,
  isTurntableActive,
  onToggleTurntable,
  onResetView,
}: ThreeAnatomyViewerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasWebGL, setHasWebGL] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  // References to keep Three.js instances alive without re-creating
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const modelGroupRef = useRef<THREE.Group | null>(null);
  const bonesMapRef = useRef<Map<string, THREE.Mesh>>(new Map());
  const animationFrameIdRef = useRef<number | null>(null);

  // Camera animation target references
  const targetCamPos = useRef<THREE.Vector3>(new THREE.Vector3(0, 0, 5.4));
  const targetLookAt = useRef<THREE.Vector3>(new THREE.Vector3(0, 0, 0));
  const currentLookAt = useRef<THREE.Vector3>(new THREE.Vector3(0, 0, 0));

  // Pointer drag controls for 3D orbit
  const isDraggingRef = useRef(false);
  const previousMousePosition = useRef({ x: 0, y: 0 });

  // Turntable ref to allow toggling without re-instantiating the WebGL scene
  const isTurntableActiveRef = useRef(isTurntableActive);
  useEffect(() => {
    isTurntableActiveRef.current = isTurntableActive;
  }, [isTurntableActive]);

  // Update target camera position when activeRegionId changes
  useEffect(() => {
    const region = ANATOMY_REGIONS.find((r) => r.id === activeRegionId);
    if (region) {
      targetCamPos.current.set(...region.cameraPosition);
      targetLookAt.current.set(...region.cameraTarget);

      // Highlight corresponding bones in the 3D scene
      if (bonesMapRef.current.size > 0) {
        bonesMapRef.current.forEach((mesh, boneKey) => {
          const isSelected = region.bones.some((b) => boneKey.includes(b));
          const mat = mesh.material as THREE.MeshStandardMaterial;
          if (mat) {
            if (isSelected) {
              mat.color.setHex(0x12c8e8); // Luminous surgical cyan
              mat.emissive.setHex(0x0a5666);
              mat.roughness = 0.2;
              mat.metalness = 0.7;
            } else {
              mat.color.setHex(0xd8e4ee); // Clinical osteo-ivory / titanium
              mat.emissive.setHex(0x061e33);
              mat.roughness = 0.45;
              mat.metalness = 0.25;
            }
          }
        });
      }
    } else {
      targetCamPos.current.set(0, 0, 5.4);
      targetLookAt.current.set(0, 0, 0);
    }
  }, [activeRegionId]);

  // Reset View handler
  const handleReset = useCallback(() => {
    targetCamPos.current.set(0, 0, 5.4);
    targetLookAt.current.set(0, 0, 0);
    if (modelGroupRef.current) {
      modelGroupRef.current.rotation.y = 0;
      modelGroupRef.current.rotation.x = 0;
    }
    onResetView();
  }, [onResetView]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Detect WebGL support
    try {
      const testCanvas = document.createElement('canvas');
      const gl = testCanvas.getContext('webgl') || testCanvas.getContext('experimental-webgl');
      if (!gl) {
        setHasWebGL(false);
        setIsLoading(false);
        return;
      }
    } catch {
      setHasWebGL(false);
      setIsLoading(false);
      return;
    }

    // 2. Initialize Three.js Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Clinical deep surgical navy background gradient simulation
    scene.fog = new THREE.FogExp2(0x04192d, 0.12);

    const width = container.clientWidth;
    const height = container.clientHeight || 640;

    const camera = new THREE.PerspectiveCamera(
      width < 480 ? 44 : width < 768 ? 40 : 36,
      width / height,
      0.1,
      50
    );
    camera.position.set(0, 0, 5.4);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    rendererRef.current = renderer;

    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // 3. Clinical Lighting Environment (Dramatic surgical studio lights)
    // Key light (Teal/Cyan rim light)
    const keyLight = new THREE.DirectionalLight(0x12c8e8, 2.5);
    keyLight.position.set(4, 5, 4);
    scene.add(keyLight);

    // Fill light (Deep clinical blue)
    const fillLight = new THREE.DirectionalLight(0x38bdf8, 1.8);
    fillLight.position.set(-4, -2, 3);
    scene.add(fillLight);

    // Back / Rim Light (Crisp white specular contour)
    const backRimLight = new THREE.DirectionalLight(0xffffff, 2.0);
    backRimLight.position.set(0, 4, -4);
    scene.add(backRimLight);

    // Ambient light
    const ambientLight = new THREE.AmbientLight(0x0a2238, 1.6);
    scene.add(ambientLight);

    // 4. Build Detailed Anatomical 3D Skeletal Mesh Group
    const modelGroup = new THREE.Group();
    modelGroupRef.current = modelGroup;
    const bonesMap = new Map<string, THREE.Mesh>();
    bonesMapRef.current = bonesMap;

    // Helper material generator
    const createBoneMaterial = (colorHex: number = 0xd8e4ee) => {
      return new THREE.MeshStandardMaterial({
        color: new THREE.Color(colorHex),
        roughness: 0.4,
        metalness: 0.3,
        emissive: new THREE.Color(0x061e33),
      });
    };

    // A. Cranium & Skull
    const skullGeo = new THREE.SphereGeometry(0.38, 24, 20);
    skullGeo.scale(1, 1.25, 1.15);
    const skull = new THREE.Mesh(skullGeo, createBoneMaterial());
    skull.position.set(0, 2.2, 0);
    modelGroup.add(skull);
    bonesMap.set('skull', skull);

    // Jaw / Mandible
    const jawGeo = new THREE.BoxGeometry(0.26, 0.18, 0.28);
    const jaw = new THREE.Mesh(jawGeo, createBoneMaterial());
    jaw.position.set(0, 1.82, 0.1);
    modelGroup.add(jaw);
    bonesMap.set('jaw', jaw);

    // B. Cervical, Thoracic & Lumbar Spine (Spinal Column with vertebra discs)
    const spineGroup = new THREE.Group();
    for (let i = 0; i < 14; i++) {
      const vertebraGeo = new THREE.CylinderGeometry(0.09, 0.1, 0.07, 16);
      const vertebra = new THREE.Mesh(vertebraGeo, createBoneMaterial());
      vertebra.position.set(0, 1.7 - i * 0.12, -0.04);
      spineGroup.add(vertebra);
    }
    modelGroup.add(spineGroup);

    // C. Rib Cage & Thoracic Cavity
    const ribGroup = new THREE.Group();
    for (let r = 0; r < 7; r++) {
      const ribRadius = 0.38 + Math.sin(r * 0.4) * 0.14;
      const ribGeo = new THREE.TorusGeometry(ribRadius, 0.024, 10, 28, Math.PI * 1.5);
      const rib = new THREE.Mesh(ribGeo, createBoneMaterial());
      rib.rotation.x = Math.PI / 2 + 0.1;
      rib.rotation.z = -Math.PI * 0.75;
      rib.position.set(0, 1.5 - r * 0.14, -0.02);
      ribGroup.add(rib);
    }
    // Sternum (Chest plate)
    const sternumGeo = new THREE.BoxGeometry(0.08, 0.65, 0.03);
    const sternum = new THREE.Mesh(sternumGeo, createBoneMaterial());
    sternum.position.set(0, 1.15, 0.42);
    ribGroup.add(sternum);
    modelGroup.add(ribGroup);
    bonesMap.set('ribs', sternum);

    // D. Clavicles (Shoulder Girdle)
    [-1, 1].forEach((side) => {
      const clavicleCurve = new THREE.CubicBezierCurve3(
        new THREE.Vector3(0, 1.62, 0.15),
        new THREE.Vector3(side * 0.4, 1.66, 0.1),
        new THREE.Vector3(side * 0.7, 1.6, 0.0),
        new THREE.Vector3(side * 0.95, 1.55, -0.05)
      );
      const clavicleGeo = new THREE.TubeGeometry(clavicleCurve, 16, 0.032, 10, false);
      const clavicle = new THREE.Mesh(clavicleGeo, createBoneMaterial());
      modelGroup.add(clavicle);
      bonesMap.set(side > 0 ? 'clavicle_R' : 'clavicle_L', clavicle);
    });

    // E. Upper Extremities: Humerus, Radius & Ulna, Hands
    [-1, 1].forEach((side) => {
      const sidePrefix = side > 0 ? '_R' : '_L';

      // Humerus (Upper arm bone)
      const humerusGeo = new THREE.CylinderGeometry(0.055, 0.05, 0.85, 14);
      const humerus = new THREE.Mesh(humerusGeo, createBoneMaterial());
      humerus.position.set(side * 1.05, 1.05, -0.05);
      humerus.rotation.z = -side * 0.15;
      modelGroup.add(humerus);
      bonesMap.set('humerus' + sidePrefix, humerus);

      // Elbow joint marker
      const elbowGeo = new THREE.SphereGeometry(0.065, 12, 12);
      const elbow = new THREE.Mesh(elbowGeo, createBoneMaterial());
      elbow.position.set(side * 1.18, 0.58, -0.05);
      modelGroup.add(elbow);

      // Radius & Ulna (Forearm)
      const radiusGeo = new THREE.CylinderGeometry(0.04, 0.035, 0.78, 12);
      const radius = new THREE.Mesh(radiusGeo, createBoneMaterial());
      radius.position.set(side * 1.25, 0.15, -0.02);
      radius.rotation.z = -side * 0.12;
      modelGroup.add(radius);
      bonesMap.set('radius' + sidePrefix, radius);

      const ulnaGeo = new THREE.CylinderGeometry(0.038, 0.032, 0.78, 12);
      const ulna = new THREE.Mesh(ulnaGeo, createBoneMaterial());
      ulna.position.set(side * 1.33, 0.15, -0.04);
      ulna.rotation.z = -side * 0.12;
      modelGroup.add(ulna);
      bonesMap.set('ulna' + sidePrefix, ulna);

      // Wrist joint & Metacarpals (Hand)
      const handGeo = new THREE.BoxGeometry(0.12, 0.26, 0.04);
      const hand = new THREE.Mesh(handGeo, createBoneMaterial());
      hand.position.set(side * 1.36, -0.32, 0);
      modelGroup.add(hand);
      bonesMap.set('hand' + sidePrefix, hand);
    });

    // F. Pelvic Girdle (Hip & Sacrum)
    const pelvisGeo = new THREE.CylinderGeometry(0.48, 0.38, 0.44, 20);
    pelvisGeo.scale(1.1, 0.9, 0.75);
    const pelvis = new THREE.Mesh(pelvisGeo, createBoneMaterial());
    pelvis.position.set(0, 0.12, 0);
    modelGroup.add(pelvis);
    bonesMap.set('pelvis', pelvis);

    // G. Lower Extremities: Femur, Patella, Tibia & Fibula, Feet
    [-1, 1].forEach((side) => {
      const sidePrefix = side > 0 ? '_R' : '_L';

      // Femur (Thigh bone)
      const femurGeo = new THREE.CylinderGeometry(0.075, 0.065, 1.25, 16);
      const femur = new THREE.Mesh(femurGeo, createBoneMaterial());
      femur.position.set(side * 0.42, -0.68, 0.04);
      femur.rotation.z = side * 0.08;
      modelGroup.add(femur);
      bonesMap.set('femur' + sidePrefix, femur);

      // Patella / Knee Joint
      const kneeGeo = new THREE.SphereGeometry(0.095, 14, 14);
      const knee = new THREE.Mesh(kneeGeo, createBoneMaterial());
      knee.position.set(side * 0.48, -1.38, 0.1);
      modelGroup.add(knee);
      bonesMap.set('patella' + sidePrefix, knee);

      // Tibia (Shin bone)
      const tibiaGeo = new THREE.CylinderGeometry(0.068, 0.052, 1.22, 16);
      const tibia = new THREE.Mesh(tibiaGeo, createBoneMaterial());
      tibia.position.set(side * 0.48, -2.05, 0.04);
      modelGroup.add(tibia);
      bonesMap.set('tibia' + sidePrefix, tibia);

      // Fibula (Lateral slender bone)
      const fibulaGeo = new THREE.CylinderGeometry(0.03, 0.026, 1.18, 12);
      const fibula = new THREE.Mesh(fibulaGeo, createBoneMaterial());
      fibula.position.set(side * 0.58, -2.05, 0.0);
      modelGroup.add(fibula);
      bonesMap.set('fibula' + sidePrefix, fibula);

      // Tarsals & Metatarsals (Foot)
      const footGeo = new THREE.BoxGeometry(0.14, 0.08, 0.35);
      const foot = new THREE.Mesh(footGeo, createBoneMaterial());
      foot.position.set(side * 0.5, -2.72, 0.12);
      modelGroup.add(foot);
      bonesMap.set('foot' + sidePrefix, foot);
    });

    // Position and scale the entire skeleton comfortably in the viewport to prevent edge clipping
    modelGroup.position.set(0, 0.1, 0);
    modelGroup.scale.set(0.88, 0.88, 0.88);
    scene.add(modelGroup);

    // 5. Interactive Mouse Orbit Controls (Direct Drag without heavy controls library)
    const handleMouseDown = (e: MouseEvent) => {
      isDraggingRef.current = true;
      previousMousePosition.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDraggingRef.current || !modelGroupRef.current) return;
      const deltaX = e.clientX - previousMousePosition.current.x;
      const deltaY = e.clientY - previousMousePosition.current.y;

      modelGroupRef.current.rotation.y += deltaX * 0.008;
      modelGroupRef.current.rotation.x = Math.max(
        -0.35,
        Math.min(0.35, modelGroupRef.current.rotation.x + deltaY * 0.006)
      );

      previousMousePosition.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseUp = () => {
      isDraggingRef.current = false;
    };

    // Touch controls for mobile
    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        isDraggingRef.current = true;
        previousMousePosition.current = {
          x: e.touches[0].clientX,
          y: e.touches[0].clientY,
        };
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDraggingRef.current || !modelGroupRef.current || e.touches.length !== 1) return;
      const deltaX = e.touches[0].clientX - previousMousePosition.current.x;
      const deltaY = e.touches[0].clientY - previousMousePosition.current.y;

      modelGroupRef.current.rotation.y += deltaX * 0.008;
      modelGroupRef.current.rotation.x = Math.max(
        -0.3,
        Math.min(0.3, modelGroupRef.current.rotation.x + deltaY * 0.006)
      );

      previousMousePosition.current = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY,
      };
    };

    const domElement = renderer.domElement;
    domElement.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    domElement.addEventListener('touchstart', handleTouchStart, { passive: true });
    domElement.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleMouseUp);

    // 6. Handle Window & Container Resize with Dynamic FOV
    const handleResize = () => {
      if (!container || !camera || !renderer) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight || 640;
      camera.aspect = newWidth / newHeight;
      // Adjust FOV dynamically on mobile/tablet portrait views to keep entire skeleton in view
      if (newWidth < 480) {
        camera.fov = 44;
      } else if (newWidth < 768) {
        camera.fov = 40;
      } else {
        camera.fov = 36;
      }
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    let resizeObserver: ResizeObserver | null = null;
    if (typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(() => handleResize());
      resizeObserver.observe(container);
    }
    window.addEventListener('resize', handleResize);

    // 7. Animation Loop with Smooth Camera Lerp & Turntable
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameIdRef.current = requestAnimationFrame(animate);

      const delta = clock.getDelta();

      // Smooth camera interpolation towards target
      camera.position.lerp(targetCamPos.current, 0.06);
      currentLookAt.current.lerp(targetLookAt.current, 0.06);
      camera.lookAt(currentLookAt.current);

      // Auto turntable rotation when idle and user is not manually dragging
      if (isTurntableActiveRef.current && !isDraggingRef.current && modelGroupRef.current) {
        modelGroupRef.current.rotation.y += delta * 0.25;
      }

      renderer.render(scene, camera);
    };

    animate();
    setIsLoading(false);

    // Cleanup on unmount
    return () => {
      if (animationFrameIdRef.current) cancelAnimationFrame(animationFrameIdRef.current);
      if (resizeObserver) resizeObserver.disconnect();
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleMouseUp);
      domElement.removeEventListener('mousedown', handleMouseDown);
      domElement.removeEventListener('touchstart', handleTouchStart);
      domElement.removeEventListener('touchmove', handleTouchMove);

      // Dispose geometries and materials
      bonesMap.forEach((mesh) => {
        mesh.geometry.dispose();
        if (Array.isArray(mesh.material)) {
          mesh.material.forEach((m) => m.dispose());
        } else {
          mesh.material.dispose();
        }
      });
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-[580px] sm:h-[640px] lg:h-full lg:min-h-[640px] rounded-3xl overflow-hidden bg-gradient-to-b from-[#031525] via-[#051e36] to-[#031525] border border-white/15 shadow-2xl flex items-center justify-center">
      {/* 3D Canvas Mount Point */}
      {hasWebGL ? (
        <div
          ref={containerRef}
          className="w-full h-full cursor-grab active:cursor-grabbing select-none"
          title="Click and drag to rotate the 3D anatomical model"
        />
      ) : (
        /* Pristine High-Resolution Static Fallback if WebGL unavailable */
        <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-[#04192D]">
          <img
            src="/images/categories/femur-locking-plates.jpg"
            alt="Orthopaedic anatomical implant reference"
            className="max-h-72 object-contain opacity-80 mb-4"
          />
          <p className="text-sm text-slate-300 font-mono">
            WebGL Acceleration Unavailable — Viewing High-Definition Implant Anatomy
          </p>
        </div>
      )}

      {/* Loading Overlay */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#031525]/80 backdrop-blur-xs z-20">
          <div className="flex items-center gap-2.5 text-xs font-mono text-[#12C8E8]">
            <div className="h-4 w-4 animate-spin rounded-full border-2 border-[#12C8E8] border-t-transparent" />
            <span>CALIBRATING 3D SKELETAL GEOMETRY...</span>
          </div>
        </div>
      )}

      {/* Interactive HUD Overlays & Studio Coordinates */}
      <div className="absolute top-4 left-4 z-10 flex flex-col gap-1.5 pointer-events-none">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/15 text-[11px] font-mono text-[#12C8E8]">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>REAL-TIME 3D THREE.JS WEBGL RENDERER</span>
        </div>
        <span className="text-[10px] font-mono text-slate-400 pl-1">
          ORBIT: 360° DRAG &bull; CAMERA LERP: ACTIVE
        </span>
      </div>

      {/* On-Canvas Viewport Controls (Turntable & Reset) */}
      <div className="absolute bottom-4 left-4 z-10 flex items-center gap-2">
        <button
          onClick={onToggleTurntable}
          className={`px-3 py-1.5 rounded-xl text-xs font-mono font-semibold backdrop-blur-md border transition-all ${
            isTurntableActive
              ? 'bg-[#12C8E8] text-[#031525] border-[#12C8E8]'
              : 'bg-black/60 text-slate-300 border-white/15 hover:bg-black/80 hover:text-white'
          }`}
          title="Toggle 360° Turntable Rotation"
        >
          {isTurntableActive ? '⏸ Turntable' : '▶ Turntable'}
        </button>
        <button
          onClick={handleReset}
          className="px-3 py-1.5 rounded-xl text-xs font-mono font-semibold bg-black/60 text-slate-300 border border-white/15 hover:bg-black/80 hover:text-white backdrop-blur-md transition-all"
          title="Reset Camera & Skeletal Rotation"
        >
          ↺ Reset View
        </button>
      </div>

      {/* Anatomical Regions Quick Selector Overlay on Viewport */}
      <div className="absolute top-4 right-4 z-10 hidden sm:flex flex-col gap-1.5 max-w-[210px]">
        <span className="text-[10.5px] font-mono uppercase tracking-wider text-slate-400 text-right pr-1">
          Anatomical Focus Targets:
        </span>
        {ANATOMY_REGIONS.map((region) => {
          const isSelected = region.id === activeRegionId;
          return (
            <button
              key={region.id}
              onClick={() => onSelectRegion(region.id)}
              className={`text-left px-3 py-1.5 rounded-xl text-xs font-medium backdrop-blur-md transition-all border ${
                isSelected
                  ? 'bg-[#12C8E8]/20 border-[#12C8E8] text-[#12C8E8] font-bold shadow-md shadow-[#12C8E8]/20'
                  : 'bg-black/40 border-white/10 text-slate-300 hover:bg-black/60 hover:text-white'
              }`}
            >
              <div className="flex items-center justify-between gap-1">
                <span className="truncate">{region.name}</span>
                {isSelected && <span className="h-1.5 w-1.5 rounded-full bg-[#12C8E8]" />}
              </div>
            </button>
          );
        })}
      </div>

      {/* Interaction Hint */}
      <div className="absolute bottom-4 right-4 z-10 pointer-events-none text-right hidden md:block">
        <span className="text-[11px] font-mono text-slate-400 bg-black/50 px-3 py-1.5 rounded-lg border border-white/10">
          💡 Drag to rotate 3D skeleton &bull; Click targets to zoom
        </span>
      </div>
    </div>
  );
}
