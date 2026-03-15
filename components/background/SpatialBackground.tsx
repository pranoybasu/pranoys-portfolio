'use client';

import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useTheme } from 'next-themes';
import * as THREE from 'three';

function Starfield({ lightMode }: { lightMode: boolean }) {
  const starsRef = useRef<THREE.Points>(null);
  const particlesRef = useRef<THREE.Points>(null);
  
  const starPositions = (() => {
    const positions = new Float32Array(200 * 3);
    for (let i = 0; i < 200; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return positions;
  })();

  const particlePositions = (() => {
    const positions = new Float32Array(150 * 3);
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

  const starOpacity = lightMode ? 0.15 : 0.6;
  const particleOpacity = lightMode ? 0.1 : 0.4;
  const starColor = lightMode ? '#6366f1' : '#3b82f6';
  const particleColor = lightMode ? '#8b5cf6' : '#06b6d4';

  return (
    <>
      <points ref={starsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[starPositions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.06}
          color={starColor}
          transparent
          opacity={starOpacity}
          sizeAttenuation
        />
      </points>
      
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[particlePositions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.04}
          color={particleColor}
          transparent
          opacity={particleOpacity}
          sizeAttenuation
        />
      </points>
    </>
  );
}

function SpatialObjects({ lightMode }: { lightMode: boolean }) {
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

  const o = lightMode ? 0.12 : 1;

  useFrame((state) => {
    const time = state.clock.elapsedTime;

    if (sphere1Ref.current) {
      sphere1Ref.current.rotation.x = time * 0.2;
      sphere1Ref.current.rotation.y = time * 0.3;
      sphere1Ref.current.position.y = Math.sin(time * 0.5) * 2 + 3;
      sphere1Ref.current.position.x = Math.cos(time * 0.3) * 1.5 - 5;
    }

    if (sphere2Ref.current) {
      sphere2Ref.current.rotation.x = -time * 0.15;
      sphere2Ref.current.rotation.y = time * 0.25;
      sphere2Ref.current.position.y = Math.cos(time * 0.6) * 1.5 + 0;
      sphere2Ref.current.position.x = Math.sin(time * 0.4) * 1.2 + 6;
    }

    if (sphere3Ref.current) {
      sphere3Ref.current.rotation.x = time * 0.18;
      sphere3Ref.current.rotation.y = -time * 0.22;
      sphere3Ref.current.position.y = Math.sin(time * 0.45) * 1.8 - 4;
      sphere3Ref.current.position.x = Math.cos(time * 0.35) * 2;
    }

    if (torusRef.current) {
      torusRef.current.rotation.x = time * 0.4;
      torusRef.current.rotation.y = time * 0.3;
      torusRef.current.rotation.z = time * 0.2;
      torusRef.current.position.y = Math.sin(time * 0.4) * 2 + 1;
      torusRef.current.position.z = Math.cos(time * 0.3) * 1 - 3;
    }

    if (torus2Ref.current) {
      torus2Ref.current.rotation.x = -time * 0.35;
      torus2Ref.current.rotation.y = time * 0.25;
      torus2Ref.current.rotation.z = -time * 0.18;
      torus2Ref.current.position.y = Math.cos(time * 0.5) * 1.5 - 3;
      torus2Ref.current.position.x = Math.sin(time * 0.3) * 1.8 + 5;
    }

    if (octahedronRef.current) {
      octahedronRef.current.rotation.x = time * 0.25;
      octahedronRef.current.rotation.y = time * 0.35;
      octahedronRef.current.position.y = Math.sin(time * 0.7) * 2 + 4;
      octahedronRef.current.position.x = Math.cos(time * 0.5) * 2 + 4;
      octahedronRef.current.position.z = Math.sin(time * 0.4) * 1;
    }

    if (octahedron2Ref.current) {
      octahedron2Ref.current.rotation.x = -time * 0.28;
      octahedron2Ref.current.rotation.y = time * 0.32;
      octahedron2Ref.current.position.y = Math.cos(time * 0.6) * 1.8 - 1;
      octahedron2Ref.current.position.x = Math.sin(time * 0.48) * 1.5 - 6;
    }

    if (dodecahedronRef.current) {
      dodecahedronRef.current.rotation.x = time * 0.18;
      dodecahedronRef.current.rotation.y = time * 0.22;
      dodecahedronRef.current.rotation.z = time * 0.15;
      dodecahedronRef.current.position.y = Math.cos(time * 0.55) * 1.5 - 4;
      dodecahedronRef.current.position.x = Math.sin(time * 0.35) * 2 - 4;
    }

    if (dodecahedron2Ref.current) {
      dodecahedron2Ref.current.rotation.x = -time * 0.2;
      dodecahedron2Ref.current.rotation.y = time * 0.24;
      dodecahedron2Ref.current.rotation.z = -time * 0.16;
      dodecahedron2Ref.current.position.y = Math.sin(time * 0.48) * 1.6 + 2;
      dodecahedron2Ref.current.position.x = Math.cos(time * 0.38) * 1.4 + 6;
    }

    if (cubeRef.current) {
      cubeRef.current.rotation.x = time * 0.3;
      cubeRef.current.rotation.y = time * 0.2;
      cubeRef.current.position.y = Math.sin(time * 0.45) * 1.8 + 5;
      cubeRef.current.position.x = Math.cos(time * 0.6) * 1.2;
      cubeRef.current.position.z = Math.sin(time * 0.5) * 1.5 + 1;
    }

    if (cube2Ref.current) {
      cube2Ref.current.rotation.x = -time * 0.25;
      cube2Ref.current.rotation.y = time * 0.28;
      cube2Ref.current.position.y = Math.cos(time * 0.52) * 1.4 - 5;
      cube2Ref.current.position.x = Math.sin(time * 0.42) * 1.6 - 5;
    }

    if (tetrahedronRef.current) {
      tetrahedronRef.current.rotation.x = time * 0.35;
      tetrahedronRef.current.rotation.y = time * 0.4;
      tetrahedronRef.current.rotation.z = time * 0.25;
      tetrahedronRef.current.position.y = Math.sin(time * 0.65) * 2 + 1;
      tetrahedronRef.current.position.x = Math.cos(time * 0.45) * 1.8 + 7;
    }

    if (icosahedronRef.current) {
      icosahedronRef.current.rotation.x = time * 0.22;
      icosahedronRef.current.rotation.y = -time * 0.26;
      icosahedronRef.current.position.y = Math.cos(time * 0.58) * 2 + 5;
      icosahedronRef.current.position.x = Math.sin(time * 0.36) * 1.4 - 7;
    }

    if (coneRef.current) {
      coneRef.current.rotation.x = time * 0.28;
      coneRef.current.rotation.z = time * 0.32;
      coneRef.current.position.y = Math.sin(time * 0.5) * 1.6 - 5;
      coneRef.current.position.x = Math.cos(time * 0.55) * 1.7 + 7;
    }
  });

  return (
    <>
      <mesh ref={sphere1Ref} position={[-5, 3, -2]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="#3b82f6" wireframe transparent opacity={0.5 * o} />
      </mesh>

      <mesh ref={sphere2Ref} position={[6, 0, -2]}>
        <sphereGeometry args={[0.4, 32, 32]} />
        <meshStandardMaterial color="#06b6d4" transparent opacity={0.6 * o} metalness={0.5} roughness={0.2} />
      </mesh>

      <mesh ref={sphere3Ref} position={[0, -4, -1]}>
        <sphereGeometry args={[0.45, 32, 32]} />
        <meshStandardMaterial color="#10b981" transparent opacity={0.55 * o} metalness={0.6} roughness={0.3} />
      </mesh>

      <mesh ref={torusRef} position={[0, 1, -3]}>
        <torusGeometry args={[0.5, 0.18, 16, 32]} />
        <meshStandardMaterial color="#ec4899" transparent opacity={0.5 * o} metalness={0.6} roughness={0.3} />
      </mesh>

      <mesh ref={torus2Ref} position={[5, -3, -2]}>
        <torusGeometry args={[0.45, 0.16, 16, 32]} />
        <meshStandardMaterial color="#f97316" transparent opacity={0.55 * o} metalness={0.5} roughness={0.4} />
      </mesh>

      <mesh ref={octahedronRef} position={[4, 4, -1]}>
        <octahedronGeometry args={[0.4]} />
        <meshStandardMaterial color="#8b5cf6" transparent opacity={0.6 * o} metalness={0.7} roughness={0.2} />
      </mesh>

      <mesh ref={octahedron2Ref} position={[-6, -1, -1]}>
        <octahedronGeometry args={[0.38]} />
        <meshStandardMaterial color="#a855f7" transparent opacity={0.58 * o} metalness={0.65} roughness={0.25} />
      </mesh>

      <mesh ref={dodecahedronRef} position={[-4, -4, -1]}>
        <dodecahedronGeometry args={[0.35]} />
        <meshStandardMaterial color="#14b8a6" wireframe transparent opacity={0.5 * o} />
      </mesh>

      <mesh ref={dodecahedron2Ref} position={[6, 2, -2]}>
        <dodecahedronGeometry args={[0.38]} />
        <meshStandardMaterial color="#06b6d4" transparent opacity={0.52 * o} metalness={0.55} roughness={0.35} />
      </mesh>

      <mesh ref={cubeRef} position={[0, 5, 1]}>
        <boxGeometry args={[0.4, 0.4, 0.4]} />
        <meshStandardMaterial color="#6366f1" transparent opacity={0.6 * o} metalness={0.4} roughness={0.4} />
      </mesh>

      <mesh ref={cube2Ref} position={[-5, -5, 0]}>
        <boxGeometry args={[0.42, 0.42, 0.42]} />
        <meshStandardMaterial color="#3b82f6" transparent opacity={0.58 * o} metalness={0.45} roughness={0.38} />
      </mesh>

      <mesh ref={tetrahedronRef} position={[7, 1, -1]}>
        <tetrahedronGeometry args={[0.4]} />
        <meshStandardMaterial color="#eab308" transparent opacity={0.54 * o} metalness={0.6} roughness={0.3} />
      </mesh>

      <mesh ref={icosahedronRef} position={[-7, 5, -2]}>
        <icosahedronGeometry args={[0.38]} />
        <meshStandardMaterial color="#84cc16" wireframe transparent opacity={0.48 * o} />
      </mesh>

      <mesh ref={coneRef} position={[7, -5, -1]}>
        <coneGeometry args={[0.35, 0.7, 32]} />
        <meshStandardMaterial color="#ef4444" transparent opacity={0.56 * o} metalness={0.5} roughness={0.35} />
      </mesh>
    </>
  );
}

export default function SpatialBackground() {
  const { theme } = useTheme();
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const isLight = mounted && theme === 'light';

  if (!mounted) {
    return (
      <div className="fixed inset-0 pointer-events-none z-0">
        <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
          <ambientLight intensity={0.4} />
          <pointLight position={[10, 10, 10]} intensity={0.5} />
          <pointLight position={[-10, -10, -5]} intensity={0.3} />
          <Starfield lightMode={false} />
          <SpatialObjects lightMode={false} />
        </Canvas>
      </div>
    );
  }

  if (isMobile) {
    return (
      <div className="fixed inset-0 pointer-events-none z-0 bg-gradient-to-b from-white via-gray-50 to-white dark:from-cosmic-darker dark:via-cosmic-dark dark:to-cosmic-darker" />
    );
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
        <ambientLight intensity={isLight ? 0.6 : 0.4} />
        <pointLight position={[10, 10, 10]} intensity={isLight ? 0.3 : 0.5} />
        <pointLight position={[-10, -10, -5]} intensity={isLight ? 0.2 : 0.3} />
        <Starfield lightMode={isLight} />
        <SpatialObjects lightMode={isLight} />
      </Canvas>
    </div>
  );
}
