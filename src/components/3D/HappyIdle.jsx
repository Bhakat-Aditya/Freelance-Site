import { Canvas } from '@react-three/fiber';
import { Environment, ContactShadows } from '@react-three/drei';
import React, { Suspense } from 'react';
// Import the component gltfjsx just made for you!
// Adjust the import path and component name based on what it generated
import ModelIdle from './Model-idle'; 

export default function Scene() {
  return (
    <Canvas camera={{ position: [0, 1.5, 4], fov: 50 }}>
      {/* Lighting is crucial for a premium look */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} />
      <Environment preset="city" /> {/* Adds realistic reflections */}

      {/* Suspense handles the loading state of the 3D model */}
      <Suspense fallback={null}>
        {/* We move the model down slightly so it stands on the "floor" */}
        <group position={[0, -1, 0]}>
          <ModelIdle />
          {/* Adds a nice, grounded shadow beneath your avatar */}
          <ContactShadows opacity={0.4} scale={10} blur={2} far={4} />
        </group>
      </Suspense>
    </Canvas>
  );
}