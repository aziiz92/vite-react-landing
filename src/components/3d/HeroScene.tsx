import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useMemo, useRef } from "react";
import type { Mesh } from "three";

function SpinningKnot() {
  const meshRef = useRef<Mesh>(null);

  const colors = useMemo(
    () => ({
      base: "#ffffff",
      accent: "#a78bfa",
    }),
    [],
  );

  useFrame((state) => {
    const mesh = meshRef.current;
    if (!mesh) return;
    const t = state.clock.getElapsedTime();
    mesh.rotation.x = t * 0.18;
    mesh.rotation.y = t * 0.24;
  });

  return (
    <Float speed={1.1} rotationIntensity={0.25} floatIntensity={0.35}>
      <mesh ref={meshRef}>
        <torusKnotGeometry args={[0.85, 0.28, 128, 16]} />
        <meshStandardMaterial
          color={colors.base}
          metalness={0.25}
          roughness={0.15}
          emissive={colors.accent}
          emissiveIntensity={0.35}
        />
      </mesh>
    </Float>
  );
}

export function HeroScene() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 3.2], fov: 45 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[3, 3, 3]} intensity={1.2} />
      <SpinningKnot />
    </Canvas>
  );
}

export default HeroScene;
