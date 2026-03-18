import { Canvas } from '@react-three/fiber';
import { Environment, ContactShadows } from '@react-three/drei';
import React, { Suspense } from 'react';
import HappyIdle from './HappyIdle.jsx'; // Importing your avatar!

export default function Scene() {
  return (
    <Canvas camera={{ position: [0, 1.5, 4], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} />
      <Environment preset="city" /> 

      <Suspense fallback={null}>
        <group position={[0, -1, 0]}>
          <HappyIdle />
          <ContactShadows opacity={0.4} scale={10} blur={2} far={4} />
        </group>
      </Suspense>
    </Canvas>
  );
}