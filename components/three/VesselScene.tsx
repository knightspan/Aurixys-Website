"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage, useGLTF } from "@react-three/drei";

function Model({ src }: { src: string }) {
  const gltf = useGLTF(src);
  return <primitive object={gltf.scene} />;
}

export function VesselScene({ src }: { src: string }) {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ position: [3, 1.5, 4], fov: 35 }}
      gl={{ antialias: true, alpha: false }}
    >
      <color attach="background" args={["#111316"]} />
      <Stage intensity={0.4} environment="city" adjustCamera={1.1}>
        <Model src={src} />
      </Stage>
      <OrbitControls
        enableDamping
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.3}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 2.2}
      />
    </Canvas>
  );
}
