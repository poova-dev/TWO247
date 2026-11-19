// 3D Interactive Travel Globe with Real-Time Flight Paths
// Powered by Three.js WebGL

export function initHero3D() {
  const container = document.getElementById("hero-3d-container");
  if (!container) return;

  // Reduced motion preference check
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  // Load Three.js from local vendor with CDN fallback
  const loadScript = (src) => {
    return new Promise((resolve, reject) => {
      if (window.THREE) return resolve(window.THREE);
      const s = document.createElement("script");
      s.src = src;
      s.onload = () => resolve(window.THREE);
      s.onerror = reject;
      document.head.appendChild(s);
    });
  };

  loadScript("js/vendor/three.min.js")
    .catch(() => loadScript("https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"))
    .then((THREE) => {
      buildGlobe(THREE, container);
    })
    .catch((err) => {
      console.warn("Three.js could not be initialized:", err);
    });
}

function buildGlobe(THREE, container) {
  const width = container.clientWidth || window.innerWidth;
  const height = container.clientHeight || window.innerHeight;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
  camera.position.z = 220;

  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  container.appendChild(renderer.domElement);

  // Group for all rotating 3D elements
  const globeGroup = new THREE.Group();
  scene.add(globeGroup);

  // Globe radius
  const R = 70;

  // 1. Globe Wireframe Sphere
  const sphereGeo = new THREE.SphereGeometry(R, 36, 36);
  const sphereMat = new THREE.MeshBasicMaterial({
    color: 0x123B5D,
    wireframe: true,
    transparent: true,
    opacity: 0.18
  });
  const sphereMesh = new THREE.Mesh(sphereGeo, sphereMat);
  globeGroup.add(sphereMesh);

  // 2. Inner Glow Sphere
  const innerGeo = new THREE.SphereGeometry(R * 0.98, 32, 32);
  const innerMat = new THREE.MeshBasicMaterial({
    color: 0x071A2B,
    transparent: true,
    opacity: 0.85
  });
  const innerMesh = new THREE.Mesh(innerGeo, innerMat);
  globeGroup.add(innerMesh);

  // 3. Point Cloud Continents / Celestial dots
  const particleCount = 1200;
  const particleGeo = new THREE.BufferGeometry();
  const positions = new Float32Array(particleCount * 3);
  const colors = new Float32Array(particleCount * 3);

  const colorNavy = new THREE.Color(0x38BDF8); // Azure
  const colorGold = new THREE.Color(0xF59E0B); // Amber

  for (let i = 0; i < particleCount; i++) {
    const phi = Math.acos(-1 + (2 * i) / particleCount);
    const theta = Math.sqrt(particleCount * Math.PI) * phi;

    const x = R * Math.cos(theta) * Math.sin(phi);
    const y = R * Math.sin(theta) * Math.sin(phi);
    const z = R * Math.cos(phi);

    positions[i * 3] = x;
    positions[i * 3 + 1] = y;
    positions[i * 3 + 2] = z;

    const chosenColor = Math.random() > 0.8 ? colorGold : colorNavy;
    colors[i * 3] = chosenColor.r;
    colors[i * 3 + 1] = chosenColor.g;
    colors[i * 3 + 2] = chosenColor.b;
  }

  particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  particleGeo.setAttribute("color", new THREE.BufferAttribute(colors, 3));

  const particleMat = new THREE.PointsMaterial({
    size: 1.8,
    vertexColors: true,
    transparent: true,
    opacity: 0.85
  });
  const pointCloud = new THREE.Points(particleGeo, particleMat);
  globeGroup.add(pointCloud);

  // 4. Celestial Orbital Rings
  const ringGeo = new THREE.RingGeometry(R * 1.25, R * 1.27, 64);
  const ringMat = new THREE.MeshBasicMaterial({
    color: 0xF59E0B,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 0.35
  });
  const ringMesh = new THREE.Mesh(ringGeo, ringMat);
  ringMesh.rotation.x = Math.PI / 2.8;
  ringMesh.rotation.y = Math.PI / 6;
  globeGroup.add(ringMesh);

  // 5. Geographic coordinates helper (Lat/Lon to 3D Cartesian on Sphere)
  function latLonToVector3(lat, lon, radius) {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lon + 180) * (Math.PI / 180);
    const x = -(radius * Math.sin(phi) * Math.cos(theta));
    const z = radius * Math.sin(phi) * Math.sin(theta);
    const y = radius * Math.cos(phi);
    return new THREE.Vector3(x, y, z);
  }

  // Major TWO247 Travel Destinations
  const destinations = {
    mumbai: { lat: 19.076, lon: 72.8777, name: "Mumbai (Hub)" },
    dubai: { lat: 25.2048, lon: 55.2708, name: "Dubai" },
    maldives: { lat: 3.2028, lon: 73.2207, name: "Maldives" },
    singapore: { lat: 1.3521, lon: 103.8198, name: "Singapore" },
    paris: { lat: 48.8566, lon: 2.3522, name: "Paris" },
    kashmir: { lat: 34.0837, lon: 74.7973, name: "Kashmir" }
  };

  // 6. Draw 3D Curved Flight Paths
  const flightArcs = [];
  const hubPos = latLonToVector3(destinations.mumbai.lat, destinations.mumbai.lon, R);

  // Add hub beacon point
  const hubGeo = new THREE.SphereGeometry(1.6, 16, 16);
  const hubMat = new THREE.MeshBasicMaterial({ color: 0xF59E0B });
  const hubMesh = new THREE.Mesh(hubGeo, hubMat);
  hubMesh.position.copy(hubPos);
  globeGroup.add(hubMesh);

  const targets = [destinations.dubai, destinations.maldives, destinations.singapore, destinations.paris, destinations.kashmir];

  targets.forEach((dest) => {
    const targetPos = latLonToVector3(dest.lat, dest.lon, R);

    // Destination beacon
    const destMesh = new THREE.Mesh(
      new THREE.SphereGeometry(1.2, 16, 16),
      new THREE.MeshBasicMaterial({ color: 0x38BDF8 })
    );
    destMesh.position.copy(targetPos);
    globeGroup.add(destMesh);

    // Calculate elevated midpoint for 3D trajectory
    const midPoint = new THREE.Vector3().addVectors(hubPos, targetPos).multiplyScalar(0.5);
    const distance = hubPos.distanceTo(targetPos);
    midPoint.setLength(R + distance * 0.28); // Arch altitude

    const curve = new THREE.QuadraticBezierCurve3(hubPos, midPoint, targetPos);
    const points = curve.getPoints(50);
    const curveGeo = new THREE.BufferGeometry().setFromPoints(points);

    const curveMat = new THREE.LineBasicMaterial({
      color: 0xF59E0B,
      transparent: true,
      opacity: 0.65
    });
    const line = new THREE.Line(curveGeo, curveMat);
    globeGroup.add(line);

    // Animated Flight Particle / Light Pulse
    const pulseMesh = new THREE.Mesh(
      new THREE.SphereGeometry(1.2, 12, 12),
      new THREE.MeshBasicMaterial({ color: 0xFFFFFF })
    );
    globeGroup.add(pulseMesh);

    flightArcs.push({
      curve: curve,
      pulse: pulseMesh,
      progress: Math.random() // Staggered starting times
    });
  });

  // Position globe aesthetically towards right side on desktop
  const updateGlobePosition = () => {
    if (window.innerWidth >= 1024) {
      globeGroup.position.x = 42;
      globeGroup.position.y = -4;
      camera.position.z = 210;
    } else {
      globeGroup.position.x = 0;
      globeGroup.position.y = -10;
      camera.position.z = 240;
    }
  };
  updateGlobePosition();

  // Mouse Interaction (Inertia tilt)
  let mouseX = 0;
  let mouseY = 0;
  let targetRotationX = 0;
  let targetRotationY = 0;

  window.addEventListener("mousemove", (e) => {
    mouseX = (e.clientX / window.innerWidth) * 2 - 1;
    mouseY = -(e.clientY / window.innerHeight) * 2 + 1;

    targetRotationY = mouseX * 0.45;
    targetRotationX = -mouseY * 0.35;
  }, { passive: true });

  // Animation Loop
  let frameId;
  const clock = new THREE.Clock();

  function animate() {
    frameId = requestAnimationFrame(animate);
    const delta = clock.getDelta();

    // Constant slow rotation + mouse tilt smoothing
    globeGroup.rotation.y += 0.003;
    globeGroup.rotation.y += (targetRotationY - globeGroup.rotation.y) * 0.04;
    globeGroup.rotation.x += (targetRotationX - globeGroup.rotation.x) * 0.04;

    // Orbital ring slight counter-rotation
    ringMesh.rotation.z += 0.005;

    // Animate glowing flight pulses along 3D curves
    flightArcs.forEach((arc) => {
      arc.progress += delta * 0.35;
      if (arc.progress > 1) arc.progress = 0;
      const pos = arc.curve.getPoint(arc.progress);
      arc.pulse.position.copy(pos);
    });

    renderer.render(scene, camera);
  }

  animate();

  // Resize handler
  const onResize = () => {
    const w = container.clientWidth || window.innerWidth;
    const h = container.clientHeight || window.innerHeight;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
    updateGlobePosition();
  };

  window.addEventListener("resize", onResize, { passive: true });
}

document.addEventListener("DOMContentLoaded", initHero3D);
