import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { RotateCw, Eye, Layers, Cpu, Compass } from 'lucide-react';

interface BrickVisualizer3DProps {
  className?: string;
  enableControls?: boolean;
}

export const BrickVisualizer3D: React.FC<BrickVisualizer3DProps> = ({
  className = '',
  enableControls = true,
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [viewMode, setViewMode] = useState<'solid' | 'wireframe' | 'density'>('solid');
  const [isRotating, setIsRotating] = useState(true);
  const [activeHighlight, setActiveHighlight] = useState<string>('Interlocking Core');

  const sceneRef = useRef<THREE.Scene | null>(null);
  const brickGroupRef = useRef<THREE.Group | null>(null);
  const materialsRef = useRef<{
    solid: THREE.Material[];
    wireframe: THREE.Material[];
    density: THREE.Material[];
  } | null>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Dimensions
    const width = container.clientWidth || 500;
    const height = container.clientHeight || 450;

    // Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(4.5, 3.2, 5.0);
    camera.lookAt(0, 0, 0);

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0x22c55e, 2.5); // Lime/eco green accent light
    dirLight1.position.set(5, 8, 4);
    dirLight1.castShadow = true;
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x38bdf8, 1.2); // Cool blue rim light
    dirLight2.position.set(-5, -2, -4);
    scene.add(dirLight2);

    const pointLight = new THREE.PointLight(0x4ade80, 2.0, 10);
    pointLight.position.set(0, 2, 2);
    scene.add(pointLight);

    // Group for Brick
    const brickGroup = new THREE.Group();
    brickGroupRef.current = brickGroup;
    scene.add(brickGroup);

    // Create Procedural Texture for Recycled Composite
    const createRecycledTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 512;
      canvas.height = 512;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        // Base dark forest green
        ctx.fillStyle = '#0d2818';
        ctx.fillRect(0, 0, 512, 512);

        // Flecks of recycled plastic polymers (white, lime, emerald specks)
        for (let i = 0; i < 400; i++) {
          const x = Math.random() * 512;
          const y = Math.random() * 512;
          const radius = Math.random() * 2.5 + 0.5;
          const colors = [
            'rgba(34, 197, 94, 0.45)',
            'rgba(163, 230, 53, 0.4)',
            'rgba(240, 253, 244, 0.35)',
            'rgba(20, 83, 45, 0.6)',
            'rgba(52, 211, 153, 0.4)',
          ];
          ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          ctx.fill();
        }

        // Subtle geometric micro-circuit lines (representing AI optimization)
        ctx.strokeStyle = 'rgba(74, 222, 128, 0.2)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        for (let j = 0; j < 6; j++) {
          const startY = j * 85 + 20;
          ctx.moveTo(0, startY);
          ctx.lineTo(150, startY);
          ctx.lineTo(200, startY + 30);
          ctx.lineTo(512, startY + 30);
        }
        ctx.stroke();
      }
      const texture = new THREE.CanvasTexture(canvas);
      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.RepeatWrapping;
      return texture;
    };

    const recycledTex = createRecycledTexture();

    // Materials definition
    const solidMat = new THREE.MeshStandardMaterial({
      map: recycledTex,
      color: 0x154c2e,
      roughness: 0.35,
      metalness: 0.2,
      bumpMap: recycledTex,
      bumpScale: 0.05,
    });

    const studMat = new THREE.MeshStandardMaterial({
      color: 0x22c55e,
      roughness: 0.25,
      metalness: 0.3,
      emissive: 0x0a3319,
      emissiveIntensity: 0.4,
    });

    const wireframeMat = new THREE.MeshBasicMaterial({
      color: 0x4ade80,
      wireframe: true,
      transparent: true,
      opacity: 0.85,
    });

    const densityMat = new THREE.MeshStandardMaterial({
      color: 0x10b981,
      roughness: 0.5,
      metalness: 0.1,
      emissive: 0x166534,
      emissiveIntensity: 0.6,
    });

    materialsRef.current = {
      solid: [solidMat, studMat],
      wireframe: [wireframeMat, wireframeMat],
      density: [densityMat, densityMat],
    };

    // Brick Geometry Construct
    // Main brick body: 3.2 x 1.3 x 1.8
    const brickBodyGeom = new THREE.BoxGeometry(3.4, 1.3, 1.9, 4, 3, 4);
    const bodyMesh = new THREE.Mesh(brickBodyGeom, solidMat);
    bodyMesh.castShadow = true;
    bodyMesh.receiveShadow = true;
    brickGroup.add(bodyMesh);

    // Add glowing edges
    const edgesGeom = new THREE.EdgesGeometry(brickBodyGeom);
    const edgesLine = new THREE.LineSegments(
      edgesGeom,
      new THREE.LineBasicMaterial({ color: 0x86efac, linewidth: 2, transparent: true, opacity: 0.6 })
    );
    brickGroup.add(edgesLine);

    // 3 Interlocking top studs (modular construction studs)
    const studGeom = new THREE.CylinderGeometry(0.32, 0.32, 0.35, 24);
    const studPositions = [-1.0, 0, 1.0];
    const studs: THREE.Mesh[] = [];

    studPositions.forEach((xPos) => {
      // Top stud
      const stud = new THREE.Mesh(studGeom, studMat);
      stud.position.set(xPos, 0.65 + 0.175, 0);
      stud.castShadow = true;
      brickGroup.add(stud);
      studs.push(stud);

      // Edge for top stud
      const studEdges = new THREE.LineSegments(
        new THREE.EdgesGeometry(studGeom),
        new THREE.LineBasicMaterial({ color: 0x4ade80, transparent: true, opacity: 0.5 })
      );
      stud.add(studEdges);

      // Hollow core simulation (cavities inside for weight reduction & acoustic buffering)
      const coreGeom = new THREE.CylinderGeometry(0.24, 0.24, 1.32, 20);
      const coreMat = new THREE.MeshStandardMaterial({
        color: 0x05130b,
        roughness: 0.8,
        metalness: 0.1,
      });
      const core = new THREE.Mesh(coreGeom, coreMat);
      core.position.set(xPos, 0, 0);
      brickGroup.add(core);
    });

    // Sub-elements: Subtle glowing AI circuit dots on front face
    const aiTraceGroup = new THREE.Group();
    for (let i = -1.2; i <= 1.2; i += 0.6) {
      const dotGeom = new THREE.SphereGeometry(0.04, 12, 12);
      const dotMat = new THREE.MeshBasicMaterial({ color: 0xa3e635 });
      const dot = new THREE.Mesh(dotGeom, dotMat);
      dot.position.set(i, 0, 0.96);
      aiTraceGroup.add(dot);
    }
    brickGroup.add(aiTraceGroup);

    // Floating micro-particles around the brick
    const particleCount = 40;
    const particleGeom = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 6;
      positions[i + 1] = (Math.random() - 0.5) * 4;
      positions[i + 2] = (Math.random() - 0.5) * 6;
    }
    particleGeom.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x4ade80,
      size: 0.06,
      transparent: true,
      opacity: 0.7,
    });
    const particles = new THREE.Points(particleGeom, particleMat);
    scene.add(particles);

    // Shadow Floor
    const planeGeom = new THREE.PlaneGeometry(12, 12);
    const planeMat = new THREE.ShadowMaterial({ opacity: 0.3 });
    const plane = new THREE.Mesh(planeGeom, planeMat);
    plane.rotation.x = -Math.PI / 2;
    plane.position.y = -1.2;
    plane.receiveShadow = true;
    scene.add(plane);

    // Initial slight tilt
    brickGroup.rotation.x = 0.25;
    brickGroup.rotation.y = -0.55;

    // Mouse Interaction
    let isDragging = false;
    let prevMouseX = 0;
    let prevMouseY = 0;

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const deltaX = e.clientX - prevMouseX;
      const deltaY = e.clientY - prevMouseY;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;

      brickGroup.rotation.y += deltaX * 0.008;
      brickGroup.rotation.x += deltaY * 0.008;
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    // Touch support for mobile
    let prevTouchX = 0;
    let prevTouchY = 0;
    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        isDragging = true;
        prevTouchX = e.touches[0].clientX;
        prevTouchY = e.touches[0].clientY;
      }
    };
    const onTouchMove = (e: TouchEvent) => {
      if (!isDragging || e.touches.length !== 1) return;
      const deltaX = e.touches[0].clientX - prevTouchX;
      const deltaY = e.touches[0].clientY - prevTouchY;
      prevTouchX = e.touches[0].clientX;
      prevTouchY = e.touches[0].clientY;

      brickGroup.rotation.y += deltaX * 0.008;
      brickGroup.rotation.x += deltaY * 0.008;
    };
    const onTouchEnd = () => {
      isDragging = false;
    };

    const domElement = renderer.domElement;
    domElement.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    domElement.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onTouchEnd);

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Gentle auto-rotation when not dragging
      if (isRotating && !isDragging) {
        brickGroup.rotation.y += 0.006;
        brickGroup.position.y = Math.sin(elapsedTime * 1.5) * 0.08;
      }

      // Slowly rotate particle field
      particles.rotation.y = elapsedTime * 0.03;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      domElement.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      domElement.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      brickBodyGeom.dispose();
      solidMat.dispose();
      studMat.dispose();
      wireframeMat.dispose();
      densityMat.dispose();
      particleGeom.dispose();
      particleMat.dispose();
    };
  }, []);

  // Update view mode materials
  useEffect(() => {
    if (!brickGroupRef.current || !materialsRef.current) return;
    const bodyMesh = brickGroupRef.current.children[0] as THREE.Mesh;
    const mats = materialsRef.current;

    if (bodyMesh) {
      if (viewMode === 'solid') {
        bodyMesh.material = mats.solid[0];
      } else if (viewMode === 'wireframe') {
        bodyMesh.material = mats.wireframe[0];
      } else if (viewMode === 'density') {
        bodyMesh.material = mats.density[0];
      }
    }
  }, [viewMode]);

  const handleResetOrientation = () => {
    if (brickGroupRef.current) {
      brickGroupRef.current.rotation.x = 0.25;
      brickGroupRef.current.rotation.y = -0.55;
    }
  };

  return (
    <div className={`relative flex flex-col items-center select-none ${className}`}>
      {/* 3D Canvas Mounting Point */}
      <div
        ref={mountRef}
        className="w-full h-[380px] sm:h-[440px] md:h-[500px] cursor-grab active:cursor-grabbing relative"
        title="Click and drag to rotate the 3D EcoBrick"
      />

      {/* Floating Interactive HUD Controls */}
      {enableControls && (
        <div className="absolute bottom-3 inset-x-2 sm:inset-x-4 flex flex-wrap items-center justify-between gap-2 p-2.5 rounded-2xl bg-charcoal-900/85 backdrop-blur-md border border-emerald-500/20 text-xs shadow-xl">
          {/* Mode Switchers */}
          <div className="flex items-center space-x-1.5">
            <button
              onClick={() => {
                setViewMode('solid');
                setActiveHighlight('Recycled Polymer Matrix');
              }}
              className={`px-2.5 py-1.5 rounded-lg flex items-center space-x-1 font-medium transition-all ${
                viewMode === 'solid'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-emerald-300 hover:text-white hover:bg-emerald-950/40'
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Polymer</span>
            </button>

            <button
              onClick={() => {
                setViewMode('wireframe');
                setActiveHighlight('AI Stress & Geometry Grid');
              }}
              className={`px-2.5 py-1.5 rounded-lg flex items-center space-x-1 font-medium transition-all ${
                viewMode === 'wireframe'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-emerald-300 hover:text-white hover:bg-emerald-950/40'
              }`}
            >
              <Cpu className="w-3.5 h-3.5" />
              <span>AI Matrix</span>
            </button>

            <button
              onClick={() => {
                setViewMode('density');
                setActiveHighlight('Composite Density Analysis');
              }}
              className={`px-2.5 py-1.5 rounded-lg flex items-center space-x-1 font-medium transition-all ${
                viewMode === 'density'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-emerald-300 hover:text-white hover:bg-emerald-950/40'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Density</span>
            </button>
          </div>

          {/* Action buttons: Auto-rotate & reset */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setIsRotating(!isRotating)}
              className={`p-1.5 rounded-lg border transition-all ${
                isRotating
                  ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300'
                  : 'border-charcoal-700 text-slate-400 hover:text-slate-200'
              }`}
              title={isRotating ? 'Pause auto-rotation' : 'Resume auto-rotation'}
            >
              <RotateCw className={`w-3.5 h-3.5 ${isRotating ? 'animate-spin-slow' : ''}`} />
            </button>

            <button
              onClick={handleResetOrientation}
              className="p-1.5 rounded-lg border border-charcoal-700 text-slate-400 hover:text-white hover:border-emerald-500/40 transition-all"
              title="Reset angle"
            >
              <Compass className="w-3.5 h-3.5" />
            </button>

            <span className="hidden sm:inline-block text-[11px] text-slate-400 pl-1 border-l border-charcoal-700">
              Drag to inspect 360°
            </span>
          </div>
        </div>
      )}

      {/* Floating Active Spec Pill */}
      <div className="absolute top-3 left-3 sm:left-4 px-3 py-1.5 rounded-full bg-forest-950/80 backdrop-blur-md border border-eco-bright/30 flex items-center space-x-2 shadow-lg">
        <span className="w-2 h-2 rounded-full bg-eco-bright animate-ping" />
        <span className="text-[11px] font-mono tracking-wide text-emerald-200">
          PROTOTYPE MODEL: {activeHighlight}
        </span>
      </div>
    </div>
  );
};
