'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Starfield component with stars and particles
function Starfield() {
  const starsRef = useRef<THREE.Points>(null);
  const particlesRef = useRef<THREE.Points>(null);
  
  const starPositions = (() => {
    const positions = new Float32Array(200 * 3); // 200 stars
    for (let i = 0; i < 200; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 50; // x
      positions[i * 3 + 1] = (Math.random() - 0.5) * 50; // y
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20; // z
    }
    return positions;
  })();

  const particlePositions = (() => {
    const positions = new Float32Array(150 * 3); // 150 floating particles
    for (let i = 0; i < 150; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 40;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 40;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 15;
    }
    return positions;
  })();

  useFrame((state) => {
    if (starsRef.current) {
      starsRef.current.rotation.y = state.clock.elapsedTime * 0.01;
    }
    if (particlesRef.current) {
      particlesRef.current.rotation.y = -state.clock.elapsedTime * 0.008;
      particlesRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.15) * 0.08;
    }
  });

  return (
    <>
      {/* Stars */}
      <points ref={starsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[starPositions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.06}
          color="#3b82f6"
          transparent
          opacity={0.6}
          sizeAttenuation
        />
      </points>
      
      {/* Floating Particles */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[particlePositions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.04}
          color="#06b6d4"
          transparent
          opacity={0.4}
          sizeAttenuation
        />
      </points>
    </>
  );
}

// Enhanced 3D spatial objects with distinct geometric shapes
function SpatialObjects() {
  const sphere1Ref = useRef<THREE.Mesh>(null);
  const sphere2Ref = useRef<THREE.Mesh>(null);
  const sphere3Ref = useRef<THREE.Mesh>(null);
  const torusRef = useRef<THREE.Mesh>(null);
  const torus2Ref = useRef<THREE.Mesh>(null);
  const octahedronRef = useRef<THREE.Mesh>(null);
  const octahedron2Ref = useRef<THREE.Mesh>(null);
  const dodecahedronRef = useRef<THREE.Mesh>(null);
  const dodecahedron2Ref = useRef<THREE.Mesh>(null);
  const cubeRef = useRef<THREE.Mesh>(null);
  const cube2Ref = useRef<THREE.Mesh>(null);
  const tetrahedronRef = useRef<THREE.Mesh>(null);
  const icosahedronRef = useRef<THREE.Mesh>(null);
  const coneRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const time = state.clock.elapsedTime;

    // Sphere 1 - Blue wireframe (top left area)
    if (sphere1Ref.current) {
      sphere1Ref.current.rotation.x = time * 0.2;
      sphere1Ref.current.rotation.y = time * 0.3;
      sphere1Ref.current.position.y = Math.sin(time * 0.5) * 2 + 3;
      sphere1Ref.current.position.x = Math.cos(time * 0.3) * 1.5 - 5;
    }

    // Sphere 2 - Cyan solid (right side)
    if (sphere2Ref.current) {
      sphere2Ref.current.rotation.x = -time * 0.15;
      sphere2Ref.current.rotation.y = time * 0.25;
      sphere2Ref.current.position.y = Math.cos(time * 0.6) * 1.5 + 0;
      sphere2Ref.current.position.x = Math.sin(time * 0.4) * 1.2 + 6;
    }

    // Sphere 3 - Green (bottom center)
    if (sphere3Ref.current) {
      sphere3Ref.current.rotation.x = time * 0.18;
      sphere3Ref.current.rotation.y = -time * 0.22;
      sphere3Ref.current.position.y = Math.sin(time * 0.45) * 1.8 - 4;
      sphere3Ref.current.position.x = Math.cos(time * 0.35) * 2;
    }

    // Torus 1 - Pink (center area)
    if (torusRef.current) {
      torusRef.current.rotation.x = time * 0.4;
      torusRef.current.rotation.y = time * 0.3;
      torusRef.current.rotation.z = time * 0.2;
      torusRef.current.position.y = Math.sin(time * 0.4) * 2 + 1;
      torusRef.current.position.z = Math.cos(time * 0.3) * 1 - 3;
    }

    // Torus 2 - Orange (right bottom)
    if (torus2Ref.current) {
      torus2Ref.current.rotation.x = -time * 0.35;
      torus2Ref.current.rotation.y = time * 0.25;
      torus2Ref.current.rotation.z = -time * 0.18;
      torus2Ref.current.position.y = Math.cos(time * 0.5) * 1.5 - 3;
      torus2Ref.current.position.x = Math.sin(time * 0.3) * 1.8 + 5;
    }

    // Octahedron 1 - Violet (top right)
    if (octahedronRef.current) {
      octahedronRef.current.rotation.x = time * 0.25;
      octahedronRef.current.rotation.y = time * 0.35;
      octahedronRef.current.position.y = Math.sin(time * 0.7) * 2 + 4;
      octahedronRef.current.position.x = Math.cos(time * 0.5) * 2 + 4;
      octahedronRef.current.position.z = Math.sin(time * 0.4) * 1;
    }

    // Octahedron 2 - Purple (left side)
    if (octahedron2Ref.current) {
      octahedron2Ref.current.rotation.x = -time * 0.28;
      octahedron2Ref.current.rotation.y = time * 0.32;
      octahedron2Ref.current.position.y = Math.cos(time * 0.6) * 1.8 - 1;
      octahedron2Ref.current.position.x = Math.sin(time * 0.48) * 1.5 - 6;
    }

    // Dodecahedron 1 - Teal wireframe (bottom left)
    if (dodecahedronRef.current) {
      dodecahedronRef.current.rotation.x = time * 0.18;
      dodecahedronRef.current.rotation.y = time * 0.22;
      dodecahedronRef.current.rotation.z = time * 0.15;
      dodecahedronRef.current.position.y = Math.cos(time * 0.55) * 1.5 - 4;
      dodecahedronRef.current.position.x = Math.sin(time * 0.35) * 2 - 4;
    }

    // Dodecahedron 2 - Aqua (center right)
    if (dodecahedron2Ref.current) {
      dodecahedron2Ref.current.rotation.x = -time * 0.2;
      dodecahedron2Ref.current.rotation.y = time * 0.24;
      dodecahedron2Ref.current.rotation.z = -time * 0.16;
      dodecahedron2Ref.current.position.y = Math.sin(time * 0.48) * 1.6 + 2;
      dodecahedron2Ref.current.position.x = Math.cos(time * 0.38) * 1.4 + 6;
    }

    // Cube 1 - Indigo (top center)
    if (cubeRef.current) {
      cubeRef.current.rotation.x = time * 0.3;
      cubeRef.current.rotation.y = time * 0.2;
      cubeRef.current.position.y = Math.sin(time * 0.45) * 1.8 + 5;
      cubeRef.current.position.x = Math.cos(time * 0.6) * 1.2;
      cubeRef.current.position.z = Math.sin(time * 0.5) * 1.5 + 1;
    }

    // Cube 2 - Blue solid (left bottom)
    if (cube2Ref.current) {
      cube2Ref.current.rotation.x = -time * 0.25;
      cube2Ref.current.rotation.y = time * 0.28;
      cube2Ref.current.position.y = Math.cos(time * 0.52) * 1.4 - 5;
      cube2Ref.current.position.x = Math.sin(time * 0.42) * 1.6 - 5;
    }

    // Tetrahedron - Yellow (far right)
    if (tetrahedronRef.current) {
      tetrahedronRef.current.rotation.x = time * 0.35;
      tetrahedronRef.current.rotation.y = time * 0.4;
      tetrahedronRef.current.rotation.z = time * 0.25;
      tetrahedronRef.current.position.y = Math.sin(time * 0.65) * 2 + 1;
      tetrahedronRef.current.position.x = Math.cos(time * 0.45) * 1.8 + 7;
    }

    // Icosahedron - Lime (top far left)
    if (icosahedronRef.current) {
      icosahedronRef.current.rotation.x = time * 0.22;
      icosahedronRef.current.rotation.y = -time * 0.26;
      icosahedronRef.current.position.y = Math.cos(time * 0.58) * 2 + 5;
      icosahedronRef.current.position.x = Math.sin(time * 0.36) * 1.4 - 7;
    }

    // Cone - Red (bottom far right)
    if (coneRef.current) {
      coneRef.current.rotation.x = time * 0.28;
      coneRef.current.rotation.z = time * 0.32;
      coneRef.current.position.y = Math.sin(time * 0.5) * 1.6 - 5;
      coneRef.current.position.x = Math.cos(time * 0.55) * 1.7 + 7;
    }
  });

  return (
    <>
      {/* Sphere 1 - Blue wireframe */}
      <mesh ref={sphere1Ref} position={[-5, 3, -2]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial
          color="#3b82f6"
          wireframe
          transparent
          opacity={0.5}
        />
      </mesh>

      {/* Sphere 2 - Cyan solid */}
      <mesh ref={sphere2Ref} position={[6, 0, -2]}>
        <sphereGeometry args={[0.4, 32, 32]} />
        <meshStandardMaterial
          color="#06b6d4"
          transparent
          opacity={0.6}
          metalness={0.5}
          roughness={0.2}
        />
      </mesh>

      {/* Sphere 3 - Green */}
      <mesh ref={sphere3Ref} position={[0, -4, -1]}>
        <sphereGeometry args={[0.45, 32, 32]} />
        <meshStandardMaterial
          color="#10b981"
          transparent
          opacity={0.55}
          metalness={0.6}
          roughness={0.3}
        />
      </mesh>

      {/* Torus 1 - Pink */}
      <mesh ref={torusRef} position={[0, 1, -3]}>
        <torusGeometry args={[0.5, 0.18, 16, 32]} />
        <meshStandardMaterial
          color="#ec4899"
          transparent
          opacity={0.5}
          metalness={0.6}
          roughness={0.3}
        />
      </mesh>

      {/* Torus 2 - Orange */}
      <mesh ref={torus2Ref} position={[5, -3, -2]}>
        <torusGeometry args={[0.45, 0.16, 16, 32]} />
        <meshStandardMaterial
          color="#f97316"
          transparent
          opacity={0.55}
          metalness={0.5}
          roughness={0.4}
        />
      </mesh>

      {/* Octahedron 1 - Violet */}
      <mesh ref={octahedronRef} position={[4, 4, -1]}>
        <octahedronGeometry args={[0.4]} />
        <meshStandardMaterial
          color="#8b5cf6"
          transparent
          opacity={0.6}
          metalness={0.7}
          roughness={0.2}
        />
      </mesh>

      {/* Octahedron 2 - Purple */}
      <mesh ref={octahedron2Ref} position={[-6, -1, -1]}>
        <octahedronGeometry args={[0.38]} />
        <meshStandardMaterial
          color="#a855f7"
          transparent
          opacity={0.58}
          metalness={0.65}
          roughness={0.25}
        />
      </mesh>

      {/* Dodecahedron 1 - Teal wireframe */}
      <mesh ref={dodecahedronRef} position={[-4, -4, -1]}>
        <dodecahedronGeometry args={[0.35]} />
        <meshStandardMaterial
          color="#14b8a6"
          wireframe
          transparent
          opacity={0.5}
        />
      </mesh>

      {/* Dodecahedron 2 - Aqua */}
      <mesh ref={dodecahedron2Ref} position={[6, 2, -2]}>
        <dodecahedronGeometry args={[0.38]} />
        <meshStandardMaterial
          color="#06b6d4"
          transparent
          opacity={0.52}
          metalness={0.55}
          roughness={0.35}
        />
      </mesh>

      {/* Cube 1 - Indigo */}
      <mesh ref={cubeRef} position={[0, 5, 1]}>
        <boxGeometry args={[0.4, 0.4, 0.4]} />
        <meshStandardMaterial
          color="#6366f1"
          transparent
          opacity={0.6}
          metalness={0.4}
          roughness={0.4}
        />
      </mesh>

      {/* Cube 2 - Blue solid */}
      <mesh ref={cube2Ref} position={[-5, -5, 0]}>
        <boxGeometry args={[0.42, 0.42, 0.42]} />
        <meshStandardMaterial
          color="#3b82f6"
          transparent
          opacity={0.58}
          metalness={0.45}
          roughness={0.38}
        />
      </mesh>

      {/* Tetrahedron - Yellow */}
      <mesh ref={tetrahedronRef} position={[7, 1, -1]}>
        <tetrahedronGeometry args={[0.4]} />
        <meshStandardMaterial
          color="#eab308"
          transparent
          opacity={0.54}
          metalness={0.6}
          roughness={0.3}
        />
      </mesh>

      {/* Icosahedron - Lime wireframe */}
      <mesh ref={icosahedronRef} position={[-7, 5, -2]}>
        <icosahedronGeometry args={[0.38]} />
        <meshStandardMaterial
          color="#84cc16"
          wireframe
          transparent
          opacity={0.48}
        />
      </mesh>

      {/* Cone - Red */}
      <mesh ref={coneRef} position={[7, -5, -1]}>
        <coneGeometry args={[0.35, 0.7, 32]} />
        <meshStandardMaterial
          color="#ef4444"
          transparent
          opacity={0.56}
          metalness={0.5}
          roughness={0.35}
        />
      </mesh>
    </>
  );
}

export default function SpatialBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={0.5} />
        <pointLight position={[-10, -10, -5]} intensity={0.3} />
        <Starfield />
        <SpatialObjects />
      </Canvas>
    </div>
  );
}