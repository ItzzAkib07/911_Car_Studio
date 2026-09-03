import React, { useEffect, useRef, useState, useCallback } from "react";
import * as THREE from "three";

const Car3DViewer = ({ activeBenefit, onSelectBenefit, activeMode, setActiveMode }) => {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const carGroupRef = useRef(null);
  const shieldMeshRef = useRef(null);
  const ceramicLayerRef = useRef(null);
  const dropletsRef = useRef([]);
  const laserScannerRef = useRef(null);
  const animFrameIdRef = useRef(null);
  const isDraggingRef = useRef(false);
  const previousMousePositionRef = useRef({ x: 0, y: 0 });
  const targetRotationRef = useRef({ x: 0.25, y: 0.8 });
  const currentRotationRef = useRef({ x: 0.25, y: 0.8 });
  const isAutoRotateRef = useRef(true);
  const [isAutoRotate, setIsAutoRotate] = useState(true);

  // Synchronize auto rotate ref
  useEffect(() => {
    isAutoRotateRef.current = isAutoRotate;
  }, [isAutoRotate]);

  // Benefit focus camera targets & scanner position
  const getBenefitCoordinates = useCallback((benefitIndex) => {
    switch (benefitIndex) {
      case 0: // Enhances look (Hood)
        return { targetRot: { x: 0.35, y: 0.6 }, scannerPos: new THREE.Vector3(0, 0.7, 1.4), scale: 1.1 };
      case 1: // Protects paint (Front Bumper)
        return { targetRot: { x: 0.2, y: 0.2 }, scannerPos: new THREE.Vector3(0, 0.3, 2.2), scale: 1.15 };
      case 2: // Long lasting (Full chassis bond)
        return { targetRot: { x: 0.3, y: 1.57 }, scannerPos: new THREE.Vector3(1.2, 0.5, 0), scale: 1.05 };
      case 3: // Hydrophobic (Roof & Windshield)
        return { targetRot: { x: 0.45, y: 0.9 }, scannerPos: new THREE.Vector3(0, 1.1, 0.2), scale: 1.1 };
      case 4: // UV & Chemical (Roof & Glass)
        return { targetRot: { x: 0.5, y: 1.2 }, scannerPos: new THREE.Vector3(0, 1.2, -0.3), scale: 1.1 };
      case 5: // Increases value (Full 360 overview)
        return { targetRot: { x: 0.3, y: 2.3 }, scannerPos: new THREE.Vector3(0, 0.6, 0), scale: 1.0 };
      default:
        return null;
    }
  }, []);

  // When activeBenefit changes from parent, adjust camera & highlight
  useEffect(() => {
    if (activeBenefit !== null && activeBenefit !== undefined) {
      const config = getBenefitCoordinates(activeBenefit);
      if (config) {
        targetRotationRef.current = { ...config.targetRot };
        if (laserScannerRef.current) {
          laserScannerRef.current.position.copy(config.scannerPos);
          laserScannerRef.current.visible = true;
        }
      }
    }
  }, [activeBenefit, getBenefitCoordinates]);

  // Main Three.js Scene Setup
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || 600;
    const height = container.clientHeight || 450;

    // 1. Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.fog = new THREE.FogExp2(0x0a0a0a, 0.045);

    // 2. Camera
    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
    camera.position.set(0, 2.2, 6.2);
    cameraRef.current = camera;

    // 3. Renderer with high visual fidelity
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35;
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // 4. Lighting Rig (Luxury Studio Detailing Bay)
    const ambientLight = new THREE.AmbientLight(0xfff5ea, 1.2);
    scene.add(ambientLight);

    // Key Light (Warm Champagne)
    const keyLight = new THREE.DirectionalLight(0xf5d5b5, 3.2);
    keyLight.position.set(4, 7, 5);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 1024;
    keyLight.shadow.mapSize.height = 1024;
    scene.add(keyLight);

    // Fill Light (Cool Studio Contrast)
    const fillLight = new THREE.DirectionalLight(0xd4e4ff, 1.6);
    fillLight.position.set(-5, 4, -3);
    scene.add(fillLight);

    // Rim/Hair Light (Champagne Gold Edge Accents)
    const rimLight = new THREE.DirectionalLight(0xebbb8d, 2.5);
    rimLight.position.set(0, 5, -6);
    scene.add(rimLight);

    // Front Fascia Studio Softbox Light (Highlights front bumper curves, hood shine, and 4-point LEDs)
    const frontStudioLight = new THREE.DirectionalLight(0xfff5ea, 2.4);
    frontStudioLight.position.set(0, 3.8, 6.5);
    scene.add(frontStudioLight);

    // Under-chassis soft neon ground bounce
    const underGlow = new THREE.PointLight(0xebbb8d, 1.8, 8);
    underGlow.position.set(0, 0.2, 0);
    scene.add(underGlow);

    // 5. Studio Turntable Ground
    const turntableGroup = new THREE.Group();
    scene.add(turntableGroup);

    // Main floor disc
    const floorGeo = new THREE.CylinderGeometry(3.6, 3.6, 0.08, 64);
    const floorMat = new THREE.MeshStandardMaterial({
      color: 0x111111,
      roughness: 0.25,
      metalness: 0.85,
    });
    const floorMesh = new THREE.Mesh(floorGeo, floorMat);
    floorMesh.position.y = -0.04;
    floorMesh.receiveShadow = true;
    turntableGroup.add(floorMesh);

    // Glowing concentric outer neon ring
    const ringGeo = new THREE.RingGeometry(3.45, 3.55, 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xebbb8d,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.85,
    });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    ringMesh.rotation.x = -Math.PI / 2;
    ringMesh.position.y = 0.01;
    turntableGroup.add(ringMesh);

    // Inner concentric neon ring
    const innerRingGeo = new THREE.RingGeometry(2.1, 2.15, 64);
    const innerRingMat = new THREE.MeshBasicMaterial({
      color: 0xebbb8d,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.5,
    });
    const innerRingMesh = new THREE.Mesh(innerRingGeo, innerRingMat);
    innerRingMesh.rotation.x = -Math.PI / 2;
    innerRingMesh.position.y = 0.01;
    turntableGroup.add(innerRingMesh);

    // 6. BUILD PROCEDURAL 3D SUPERCAR MODEL (Porsche 911 Aerodynamic Silhouette)
    const carGroup = new THREE.Group();
    carGroupRef.current = carGroup;
    scene.add(carGroup);

    // Paint Materials
    const paintMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x141414,
      metalness: 0.88,
      roughness: 0.12,
      clearcoat: 1.0,
      clearcoatRoughness: 0.04,
      reflectivity: 0.95,
      sheen: 0.6,
      sheenColor: new THREE.Color(0xebbb8d),
    });

    const carbonMaterial = new THREE.MeshStandardMaterial({
      color: 0x0a0a0a,
      roughness: 0.4,
      metalness: 0.6,
    });

    const glassMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x151c24,
      metalness: 0.95,
      roughness: 0.05,
      transmission: 0.7,
      transparent: true,
      opacity: 0.88,
      reflectivity: 1.0,
    });

    const goldAlloyMaterial = new THREE.MeshStandardMaterial({
      color: 0xebbb8d,
      metalness: 0.92,
      roughness: 0.22,
    });

    const chromeMaterial = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      metalness: 0.98,
      roughness: 0.05,
    });

    const ledHeadlightMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.95,
    });

    const ledTaillightMat = new THREE.MeshBasicMaterial({
      color: 0xff2233,
      transparent: true,
      opacity: 0.95,
    });

    // 6A. Main Sculpted Lower Chassis
    const chassisGeo = new THREE.BoxGeometry(1.84, 0.38, 4.3);
    const chassisMesh = new THREE.Mesh(chassisGeo, paintMaterial);
    chassisMesh.position.set(0, 0.4, 0);
    chassisMesh.castShadow = true;
    chassisMesh.receiveShadow = true;
    carGroup.add(chassisMesh);

    // 6B. Muscular Front Fenders (Left & Right Raised Wheel Arches)
    const createFrontFender = (x) => {
      const fenderGroup = new THREE.Group();
      const fenderGeo = new THREE.CylinderGeometry(0.5, 0.52, 1.45, 32, 1, false, 0, Math.PI);
      const fenderMesh = new THREE.Mesh(fenderGeo, paintMaterial);
      fenderMesh.rotation.z = Math.PI / 2;
      fenderMesh.rotation.y = x > 0 ? 0 : Math.PI;
      fenderMesh.scale.set(0.48, 0.38, 1.0);
      fenderGroup.add(fenderMesh);

      fenderGroup.position.set(x, 0.48, 1.35);
      fenderGroup.castShadow = true;
      return fenderGroup;
    };
    carGroup.add(createFrontFender(0.72));
    carGroup.add(createFrontFender(-0.72));

    // 6C. Sculpted Low-Slung Front Hood with Aerodynamic Power Crease
    const hoodGeo = new THREE.BoxGeometry(1.15, 0.12, 1.45);
    const hoodMesh = new THREE.Mesh(hoodGeo, paintMaterial);
    hoodMesh.position.set(0, 0.48, 1.35);
    hoodMesh.rotation.x = 0.08;
    hoodMesh.castShadow = true;
    carGroup.add(hoodMesh);

    // Central Hood Power Bulge
    const hoodBulgeGeo = new THREE.BoxGeometry(0.65, 0.05, 1.35);
    const hoodBulge = new THREE.Mesh(hoodBulgeGeo, paintMaterial);
    hoodBulge.position.set(0, 0.53, 1.35);
    hoodBulge.rotation.x = 0.08;
    carGroup.add(hoodBulge);

    // Twin Hood NACA Cooling Vents (Gloss Carbon)
    const createHoodVent = (x) => {
      const ventGeo = new THREE.BoxGeometry(0.18, 0.02, 0.35);
      const ventMesh = new THREE.Mesh(ventGeo, carbonMaterial);
      ventMesh.position.set(x, 0.55, 1.15);
      ventMesh.rotation.x = 0.08;
      return ventMesh;
    };
    carGroup.add(createHoodVent(-0.35));
    carGroup.add(createHoodVent(0.35));

    // 6D. Sculpted Front Bumper Fascia & Nose
    const noseUpperGeo = new THREE.BoxGeometry(1.72, 0.26, 0.55);
    const noseUpper = new THREE.Mesh(noseUpperGeo, paintMaterial);
    noseUpper.position.set(0, 0.42, 2.05);
    noseUpper.rotation.x = 0.14;
    noseUpper.castShadow = true;
    carGroup.add(noseUpper);

    // Front Nose Tip (Aerodynamic Smooth Curve)
    const noseTipGeo = new THREE.CylinderGeometry(0.82, 0.84, 0.28, 32, 1, false, 0, Math.PI);
    const noseTip = new THREE.Mesh(noseTipGeo, paintMaterial);
    noseTip.rotation.z = Math.PI / 2;
    noseTip.rotation.y = Math.PI;
    noseTip.scale.set(0.4, 0.98, 0.5);
    noseTip.position.set(0, 0.34, 2.25);
    noseTip.castShadow = true;
    carGroup.add(noseTip);

    // 911 Studio Gold Crest on Front Nose
    const crestGeo = new THREE.BoxGeometry(0.09, 0.02, 0.12);
    const crestMesh = new THREE.Mesh(crestGeo, goldAlloyMaterial);
    crestMesh.position.set(0, 0.47, 2.12);
    crestMesh.rotation.x = 0.35;
    carGroup.add(crestMesh);

    // 6E. Triple Front Air Intakes (Center Radiator + Twin Brake Ducts)
    const centerGrilleGeo = new THREE.BoxGeometry(0.88, 0.18, 0.2);
    const centerGrille = new THREE.Mesh(centerGrilleGeo, carbonMaterial);
    centerGrille.position.set(0, 0.24, 2.22);
    carGroup.add(centerGrille);

    const createSideIntake = (x) => {
      const intakeGroup = new THREE.Group();
      const intakeMesh = new THREE.Mesh(new THREE.BoxGeometry(0.36, 0.16, 0.18), carbonMaterial);
      intakeGroup.add(intakeMesh);

      // Horizontal LED DRL Light Strip
      const drlMesh = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.025, 0.04), ledHeadlightMat);
      drlMesh.position.set(0, 0.1, 0.08);
      intakeGroup.add(drlMesh);

      // Carbon Aero Canard Fin
      const canardMesh = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.18, 0.2), carbonMaterial);
      canardMesh.position.set(x > 0 ? 0.2 : -0.2, 0, 0);
      intakeGroup.add(canardMesh);

      intakeGroup.position.set(x, 0.24, 2.16);
      return intakeGroup;
    };
    carGroup.add(createSideIntake(-0.64));
    carGroup.add(createSideIntake(0.64));

    // 6F. Aggressive Carbon-Fiber Front Splitter with Aero Winglets
    const splitterCenter = new THREE.Mesh(new THREE.BoxGeometry(1.92, 0.04, 0.52), carbonMaterial);
    splitterCenter.position.set(0, 0.13, 2.15);
    carGroup.add(splitterCenter);

    const createSplitterWinglet = (x) => {
      const winglet = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.12, 0.28), carbonMaterial);
      winglet.position.set(x, 0.18, 2.22);
      return winglet;
    };
    carGroup.add(createSplitterWinglet(-0.96));
    carGroup.add(createSplitterWinglet(0.96));

    // 6G. Porsche 911 Signature 4-Point Matrix LED Headlight Pods
    const createSignatureHeadlight = (x) => {
      const hlGroup = new THREE.Group();

      // Slanted Oval Headlight Pod Bucket
      const podGeo = new THREE.CylinderGeometry(0.18, 0.22, 0.12, 24);
      const podMesh = new THREE.Mesh(podGeo, carbonMaterial);
      podMesh.rotation.x = 0.55;
      podMesh.rotation.z = x > 0 ? -0.15 : 0.15;
      hlGroup.add(podMesh);

      // Glass Cover Outer Lens
      const lensGeo = new THREE.CylinderGeometry(0.16, 0.2, 0.04, 24);
      const lensMesh = new THREE.Mesh(lensGeo, glassMaterial);
      lensMesh.position.set(0, 0.04, 0);
      podMesh.add(lensMesh);

      // Central Projector Eye Lens
      const projGeo = new THREE.SphereGeometry(0.07, 16, 16, 0, Math.PI * 2, 0, Math.PI / 2);
      const projMesh = new THREE.Mesh(projGeo, ledHeadlightMat);
      projMesh.rotation.x = -Math.PI / 2;
      projMesh.position.set(0, 0.06, 0);
      podMesh.add(projMesh);

      // Quad Matrix LED DRL Points
      const dPoints = [
        { x: -0.07, y: 0.07 },
        { x: 0.07, y: 0.07 },
        { x: -0.07, y: -0.07 },
        { x: 0.07, y: -0.07 },
      ];
      dPoints.forEach((dp) => {
        const pt = new THREE.Mesh(new THREE.BoxGeometry(0.025, 0.025, 0.02), ledHeadlightMat);
        pt.position.set(dp.x, 0.065, dp.y);
        podMesh.add(pt);
      });

      // Luminous Forward Light Glow
      const hlBeam = new THREE.PointLight(0xfffaea, 1.6, 5);
      hlBeam.position.set(0, 0.1, 0.3);
      hlGroup.add(hlBeam);

      hlGroup.position.set(x, 0.56, 1.82);
      return hlGroup;
    };
    carGroup.add(createSignatureHeadlight(-0.62));
    carGroup.add(createSignatureHeadlight(0.62));

    // 6H. Streamlined Cabin & Roof Dome (Porsche teardrop roofline)
    const cabinGeo = new THREE.SphereGeometry(1.0, 32, 24, 0, Math.PI * 2, 0, Math.PI / 2);
    const cabinMesh = new THREE.Mesh(cabinGeo, paintMaterial);
    cabinMesh.scale.set(0.8, 0.54, 1.75);
    cabinMesh.position.set(0, 0.58, -0.15);
    cabinMesh.castShadow = true;
    carGroup.add(cabinMesh);

    // Windshield & Windows (Glass Layer)
    const glassDomeGeo = new THREE.SphereGeometry(0.98, 32, 24, 0, Math.PI * 2, 0, Math.PI / 2);
    const glassDomeMesh = new THREE.Mesh(glassDomeGeo, glassMaterial);
    glassDomeMesh.scale.set(0.79, 0.53, 1.7);
    glassDomeMesh.position.set(0, 0.59, -0.15);
    carGroup.add(glassDomeMesh);

    // Aerodynamic Carbon Side Mirrors with LED Indicators
    const createSideMirror = (x) => {
      const mirrorGroup = new THREE.Group();
      const armMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.12, 12), carbonMaterial);
      armMesh.rotation.z = x > 0 ? -0.45 : 0.45;
      armMesh.position.set(0, 0, 0);
      mirrorGroup.add(armMesh);

      const housingMesh = new THREE.Mesh(new THREE.SphereGeometry(0.1, 16, 12), carbonMaterial);
      housingMesh.scale.set(1.4, 0.75, 0.9);
      housingMesh.position.set(x > 0 ? 0.08 : -0.08, 0.06, 0);
      mirrorGroup.add(housingMesh);

      const mirrorFace = new THREE.Mesh(new THREE.PlaneGeometry(0.12, 0.07), chromeMaterial);
      mirrorFace.rotation.y = x > 0 ? -Math.PI / 2 : Math.PI / 2;
      mirrorFace.position.set(x > 0 ? 0.08 : -0.08, 0.06, -0.07);
      mirrorGroup.add(mirrorFace);

      const indMesh = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.02, 0.02), ledHeadlightMat);
      indMesh.position.set(x > 0 ? 0.08 : -0.08, 0.06, 0.07);
      mirrorGroup.add(indMesh);

      mirrorGroup.position.set(x, 0.72, 0.45);
      return mirrorGroup;
    };
    carGroup.add(createSideMirror(-0.84));
    carGroup.add(createSideMirror(0.84));

    // 6I. Rear Deck & Engine Cover
    const rearDeckGeo = new THREE.BoxGeometry(1.78, 0.44, 1.4);
    const rearDeckMesh = new THREE.Mesh(rearDeckGeo, paintMaterial);
    rearDeckMesh.position.set(0, 0.46, -1.45);
    rearDeckMesh.castShadow = true;
    carGroup.add(rearDeckMesh);

    // Rear Active Spoiler Wing
    const wingGeo = new THREE.BoxGeometry(1.7, 0.04, 0.35);
    const wingMesh = new THREE.Mesh(wingGeo, carbonMaterial);
    wingMesh.position.set(0, 0.85, -2.05);
    carGroup.add(wingMesh);

    // Wing Struts
    const strutLeft = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.22, 0.06), carbonMaterial);
    strutLeft.position.set(-0.55, 0.74, -2.02);
    const strutRight = strutLeft.clone();
    strutRight.position.x = 0.55;
    carGroup.add(strutLeft);
    carGroup.add(strutRight);

    // Rear Wheel Arches (Fenders)
    const rearArchPositions = [
      { x: -0.92, z: -1.3 },
      { x: 0.92, z: -1.3 },
    ];
    rearArchPositions.forEach((pos) => {
      const archGeo = new THREE.CylinderGeometry(0.48, 0.48, 0.12, 24, 1, false, 0, Math.PI);
      const archMesh = new THREE.Mesh(archGeo, paintMaterial);
      archMesh.rotation.z = Math.PI / 2;
      archMesh.rotation.y = pos.x > 0 ? 0 : Math.PI;
      archMesh.position.set(pos.x, 0.45, pos.z);
      carGroup.add(archMesh);
    });

    // 6J. 4 Luxury Detailed Alloy Wheels
    const createWheel = (x, z) => {
      const wheelGroup = new THREE.Group();

      // Tire (Rubber)
      const tireGeo = new THREE.CylinderGeometry(0.38, 0.38, 0.24, 32);
      const tireMat = new THREE.MeshStandardMaterial({ color: 0x1c1c1c, roughness: 0.85, metalness: 0.1 });
      const tireMesh = new THREE.Mesh(tireGeo, tireMat);
      tireMesh.rotation.z = Math.PI / 2;
      tireMesh.castShadow = true;
      wheelGroup.add(tireMesh);

      // Alloy Rim (Champagne Gold)
      const rimGeo = new THREE.CylinderGeometry(0.28, 0.28, 0.25, 24);
      const rimMesh = new THREE.Mesh(rimGeo, goldAlloyMaterial);
      rimMesh.rotation.z = Math.PI / 2;
      wheelGroup.add(rimMesh);

      // Rim Center Cap with 911 detail
      const capGeo = new THREE.CylinderGeometry(0.1, 0.1, 0.26, 16);
      const capMesh = new THREE.Mesh(capGeo, chromeMaterial);
      capMesh.rotation.z = Math.PI / 2;
      wheelGroup.add(capMesh);

      // Brake Caliper (Performance Gold)
      const caliperGeo = new THREE.BoxGeometry(0.14, 0.18, 0.1);
      const caliperMesh = new THREE.Mesh(caliperGeo, goldAlloyMaterial);
      caliperMesh.position.set(x > 0 ? -0.06 : 0.06, 0.12, 0);
      wheelGroup.add(caliperMesh);

      wheelGroup.position.set(x, 0.38, z);
      return wheelGroup;
    };

    const wheels = [
      createWheel(-0.94, 1.3),
      createWheel(0.94, 1.3),
      createWheel(-0.94, -1.3),
      createWheel(0.94, -1.3),
    ];
    wheels.forEach((w) => carGroup.add(w));

    // 6K. Full-Width Rear LED Taillight Bar
    const taillightBarGeo = new THREE.BoxGeometry(1.6, 0.06, 0.04);
    const taillightBar = new THREE.Mesh(taillightBarGeo, ledTaillightMat);
    taillightBar.position.set(0, 0.56, -2.16);
    carGroup.add(taillightBar);

    // Rear Quad Chrome Exhaust Tips
    const createExhaust = (x) => {
      const tip = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.18, 16), chromeMaterial);
      tip.rotation.x = Math.PI / 2;
      tip.position.set(x, 0.24, -2.18);
      return tip;
    };
    carGroup.add(createExhaust(-0.55));
    carGroup.add(createExhaust(-0.42));
    carGroup.add(createExhaust(0.42));
    carGroup.add(createExhaust(0.55));

    // 7. INTERACTIVE 3D SHIELD ENVELOPE (PPF Mode & Ceramic Mode)
    // 7A. PPF Hexagonal Hologram Shield
    const shieldGeo = new THREE.IcosahedronGeometry(2.75, 2);
    const shieldMat = new THREE.MeshBasicMaterial({
      color: 0xebbb8d,
      wireframe: true,
      transparent: true,
      opacity: 0.0,
    });
    const shieldMesh = new THREE.Mesh(shieldGeo, shieldMat);
    shieldMesh.position.set(0, 0.6, 0);
    shieldMeshRef.current = shieldMesh;
    carGroup.add(shieldMesh);

    // 7B. Ceramic 9H Nanotech Shimmer Layer
    const ceramicGeo = new THREE.IcosahedronGeometry(2.6, 3);
    const ceramicMat = new THREE.MeshPhysicalMaterial({
      color: 0xf5d5b5,
      transparent: true,
      opacity: 0.0,
      roughness: 0.0,
      transmission: 0.9,
      reflectivity: 1.0,
      clearcoat: 1.0,
    });
    const ceramicMesh = new THREE.Mesh(ceramicGeo, ceramicMat);
    ceramicMesh.position.set(0, 0.6, 0);
    ceramicLayerRef.current = ceramicMesh;
    carGroup.add(ceramicMesh);

    // 7C. Hydrophobic Rain Droplet Simulation
    const dropletsGroup = new THREE.Group();
    const dropletGeo = new THREE.SphereGeometry(0.04, 8, 8);
    const dropletMat = new THREE.MeshPhysicalMaterial({
      color: 0x99ddff,
      transmission: 0.95,
      transparent: true,
      opacity: 0.85,
      roughness: 0.0,
    });

    const droplets = [];
    for (let i = 0; i < 45; i++) {
      const drop = new THREE.Mesh(dropletGeo, dropletMat);
      drop.position.set(
        (Math.random() - 0.5) * 2.2,
        1.6 + Math.random() * 1.5,
        (Math.random() - 0.5) * 3.8
      );
      drop.userData = {
        speed: 0.04 + Math.random() * 0.05,
        initY: 1.6 + Math.random() * 1.5,
        rollOffset: (Math.random() - 0.5) * 0.02,
      };
      droplets.push(drop);
      dropletsGroup.add(drop);
    }
    dropletsGroup.visible = false;
    dropletsRef.current = { group: dropletsGroup, list: droplets };
    carGroup.add(dropletsGroup);

    // 7D. Active Laser Inspection Beacon (Scanner Ring)
    const scannerGroup = new THREE.Group();
    const scanRing = new THREE.Mesh(
      new THREE.RingGeometry(0.2, 0.28, 32),
      new THREE.MeshBasicMaterial({ color: 0xebbb8d, side: THREE.DoubleSide, transparent: true, opacity: 0.9 })
    );
    scanRing.rotation.x = -Math.PI / 2;
    scannerGroup.add(scanRing);

    const scanBeacon = new THREE.PointLight(0xebbb8d, 2.5, 3);
    scannerGroup.add(scanBeacon);

    scannerGroup.position.set(0, 0.7, 1.4);
    scannerGroup.visible = false;
    laserScannerRef.current = scannerGroup;
    carGroup.add(scannerGroup);

    // 8. Event Handlers for Drag, Orbit & Touch
    const onPointerDown = (e) => {
      isDraggingRef.current = true;
      setIsAutoRotate(false);
      previousMousePositionRef.current = {
        x: e.clientX || (e.touches && e.touches[0].clientX) || 0,
        y: e.clientY || (e.touches && e.touches[0].clientY) || 0,
      };
    };

    const onPointerMove = (e) => {
      if (!isDraggingRef.current) return;
      const clientX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
      const clientY = e.clientY || (e.touches && e.touches[0].clientY) || 0;
      const deltaX = clientX - previousMousePositionRef.current.x;
      const deltaY = clientY - previousMousePositionRef.current.y;

      targetRotationRef.current.y += deltaX * 0.008;
      targetRotationRef.current.x = Math.max(0.05, Math.min(0.85, targetRotationRef.current.x + deltaY * 0.005));

      previousMousePositionRef.current = { x: clientX, y: clientY };
    };

    const onPointerUp = () => {
      isDraggingRef.current = false;
    };

    const domEl = renderer.domElement;
    domEl.addEventListener("mousedown", onPointerDown);
    window.addEventListener("mousemove", onPointerMove);
    window.addEventListener("mouseup", onPointerUp);

    domEl.addEventListener("touchstart", onPointerDown, { passive: true });
    window.addEventListener("touchmove", onPointerMove, { passive: true });
    window.addEventListener("touchend", onPointerUp);

    // 9. Resize Handler
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.fov = newWidth < 600 ? 50 : 42;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };
    window.addEventListener("resize", handleResize);

    // 10. Animation Loop
    let clock = new THREE.Clock();

    const animate = () => {
      animFrameIdRef.current = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth camera orbit interpolation
      if (isAutoRotateRef.current) {
        targetRotationRef.current.y += 0.004;
      }

      currentRotationRef.current.x += (targetRotationRef.current.x - currentRotationRef.current.x) * 0.06;
      currentRotationRef.current.y += (targetRotationRef.current.y - currentRotationRef.current.y) * 0.06;

      const isMobile = (containerRef.current ? containerRef.current.clientWidth : window.innerWidth) < 768;
      const radius = isMobile ? 6.9 : 6.2;
      const targetCenterY = isMobile ? 0.38 : 0.45;

      camera.position.x = radius * Math.sin(currentRotationRef.current.y) * Math.cos(currentRotationRef.current.x);
      camera.position.z = radius * Math.cos(currentRotationRef.current.y) * Math.cos(currentRotationRef.current.x);
      camera.position.y = Math.max(0.7, radius * Math.sin(currentRotationRef.current.x));
      camera.lookAt(0, targetCenterY, 0);

      // Rotate ground turntable ring
      turntableGroup.rotation.y = elapsedTime * 0.15;

      // Animate active scanner beacon pulse
      if (laserScannerRef.current && laserScannerRef.current.visible) {
        const pulse = 1 + Math.sin(elapsedTime * 6) * 0.25;
        laserScannerRef.current.scale.set(pulse, pulse, pulse);
      }

      // Animate PPF shield pulse
      if (shieldMeshRef.current && shieldMeshRef.current.visible) {
        shieldMeshRef.current.rotation.y = elapsedTime * 0.3;
        shieldMeshRef.current.rotation.x = Math.sin(elapsedTime * 0.4) * 0.1;
      }

      // Animate Ceramic shimmer
      if (ceramicLayerRef.current && ceramicLayerRef.current.visible) {
        ceramicLayerRef.current.rotation.y = -elapsedTime * 0.2;
      }

      // Animate Hydrophobic rain roll-off
      if (dropletsRef.current && dropletsRef.current.group.visible) {
        dropletsRef.current.list.forEach((drop) => {
          drop.position.y -= drop.userData.speed;
          drop.position.x += drop.userData.rollOffset;
          // Hit car surface and bounce/reset
          if (drop.position.y < 0.3) {
            drop.position.y = drop.userData.initY;
          }
        });
      }

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animFrameIdRef.current);
      window.removeEventListener("resize", handleResize);
      domEl.removeEventListener("mousedown", onPointerDown);
      window.removeEventListener("mousemove", onPointerMove);
      window.removeEventListener("mouseup", onPointerUp);
      domEl.removeEventListener("touchstart", onPointerDown);
      window.removeEventListener("touchmove", onPointerMove);
      window.removeEventListener("touchend", onPointerUp);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  // Update visual mode effects (PPF, Ceramic, Hydrophobic, Gloss)
  useEffect(() => {
    if (!shieldMeshRef.current || !ceramicLayerRef.current || !dropletsRef.current) return;

    // Reset all layers
    shieldMeshRef.current.material.opacity = 0;
    shieldMeshRef.current.visible = false;
    ceramicLayerRef.current.material.opacity = 0;
    ceramicLayerRef.current.visible = false;
    dropletsRef.current.group.visible = false;

    if (activeMode === "ppf") {
      shieldMeshRef.current.visible = true;
      shieldMeshRef.current.material.opacity = 0.45;
    } else if (activeMode === "ceramic") {
      ceramicLayerRef.current.visible = true;
      ceramicLayerRef.current.material.opacity = 0.35;
    } else if (activeMode === "hydrophobic") {
      dropletsRef.current.group.visible = true;
      ceramicLayerRef.current.visible = true;
      ceramicLayerRef.current.material.opacity = 0.25;
    }
  }, [activeMode]);

  return (
    <div className="w-full relative rounded-[1.65rem] max-md:rounded-[1.35rem] overflow-hidden flex flex-col select-none">
      {/* 3D Canvas Area */}
      <div
        className="relative w-full h-[520px] max-lg:h-[460px] max-md:h-[420px] cursor-grab active:cursor-grabbing touch-none"
        ref={containerRef}
      >
        {/* Top HUD Badges */}
        <div className="absolute top-5 max-md:top-3.5 left-6 max-md:left-3.5 right-6 max-md:right-3.5 flex items-center justify-between gap-4 max-md:gap-2 z-10 pointer-events-none">
          <div className="inline-flex items-center gap-2.5 py-2 max-md:py-1.5 px-4.5 max-md:px-3.5 rounded-full bg-[#0c0c0c]/80 border border-[#EBBB8D]/35 backdrop-blur-md text-[#EBBB8D] text-xs max-md:text-[0.68rem] font-black tracking-[0.12rem] uppercase shadow-lg">
            <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981] animate-pulse"></span>
            <span>911 STUDIO 3D LAB</span>
          </div>

          <button
            className={`pointer-events-auto inline-flex items-center gap-2.5 py-2 max-md:py-1.5 px-4.5 max-md:px-3.5 rounded-full backdrop-blur-md text-xs max-md:text-[0.65rem] font-extrabold tracking-[0.08rem] cursor-pointer transition-all duration-300 border ${
              isAutoRotate
                ? "bg-[#EBBB8D]/20 border-[#EBBB8D] text-[#EBBB8D] shadow-[0_0_15px_rgba(235,187,141,0.25)]"
                : "bg-[#121212]/90 border-[#EBBB8D]/30 text-[#F5D5B5] hover:bg-[#EBBB8D]/20 hover:border-[#EBBB8D] hover:text-[#EBBB8D]"
            }`}
            onClick={() => setIsAutoRotate((prev) => !prev)}
            title={isAutoRotate ? "Pause Turntable" : "Auto-Rotate Turntable"}
          >
            <i className="fa-solid fa-arrows-rotate"></i>
            <span>{isAutoRotate ? "360° TURNTABLE" : "PAUSED"}</span>
          </button>
        </div>

        {/* Floating Interaction Hint */}
        <div className="absolute top-18 max-md:top-14 left-1/2 -translate-x-1/2 inline-flex items-center gap-2 py-1.5 px-4 max-md:px-3 rounded-full bg-[#0a0a0a]/65 border border-[#EBBB8D]/20 backdrop-blur-md text-[#F5D5B5] text-xs max-md:text-[0.66rem] font-bold tracking-wide pointer-events-none z-[5] opacity-90 whitespace-nowrap max-md:max-w-[90%] text-center">
          <i className="fa-solid fa-hand-pointer text-[#EBBB8D]"></i>
          <span>Drag to Rotate 360° • Click Cards to Inspect</span>
        </div>
      </div>

      {/* Dedicated Bottom Controls Dock (Positioned below the canvas so 3D model is never obscured) */}
      <div className="flex items-center justify-between max-md:flex-col gap-5 max-md:gap-2.5 p-4 max-md:p-3 px-7 max-md:px-4 bg-[#0a0a0a]/95 border-t border-[#EBBB8D]/20 backdrop-blur-xl z-10 flex-wrap">
        <div className="inline-flex items-center gap-2 text-[#EBBB8D] text-xs max-md:text-[0.72rem] font-black tracking-[0.1rem] uppercase">
          <i className="fa-solid fa-layer-group text-sm"></i>
          <span>ACTIVE 3D LAYER:</span>
        </div>

        <div className="flex items-center gap-2.5 max-md:grid max-md:grid-cols-2 max-md:w-full flex-wrap">
          {[
            { key: "gloss", label: "MIRROR GLOSS", icon: "fa-solid fa-star" },
            { key: "ceramic", label: "9H CERAMIC", icon: "fa-solid fa-shield-halved" },
            { key: "ppf", label: "SELF-HEALING PPF", icon: "fa-solid fa-gem" },
            { key: "hydrophobic", label: "HYDROPHOBIC RAIN", icon: "fa-solid fa-droplet" },
          ].map((mode) => {
            const isActive = activeMode === mode.key;
            return (
              <button
                key={mode.key}
                className={`inline-flex items-center justify-center gap-2 py-2.5 max-md:py-2 px-5 max-md:px-2 rounded-full text-xs max-md:text-[0.7rem] font-extrabold tracking-wider cursor-pointer transition-all duration-300 whitespace-nowrap border max-md:w-full ${
                  isActive
                    ? "bg-gradient-to-r from-[#EBBB8D] via-[#F5D5B5] to-[#C99765] text-[#111] border-white shadow-[0_4px_18px_rgba(235,187,141,0.45)]"
                    : "bg-[#EBBB8D]/8 border-[#EBBB8D]/25 text-neutral-300 hover:bg-[#EBBB8D]/18 hover:border-[#EBBB8D] hover:text-white"
                }`}
                onClick={() => setActiveMode(mode.key)}
              >
                <i className={`${mode.icon} ${isActive ? "text-[#111]" : "text-[#EBBB8D]"}`}></i>
                <span>{mode.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Car3DViewer;
