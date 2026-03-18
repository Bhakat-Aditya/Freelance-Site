import { Canvas } from '@react-three/fiber';
import { Environment, ContactShadows } from '@react-three/drei';
import React, { Suspense } from 'react';

// IMPORT YOUR CONTROLLER HERE
import AvatarController from './AvatarController'; 

export default function Scene() {
  return (
    <Canvas camera={{ position: [0, 1.5, 4], fov: 50 }}>
      {/* Lighting is crucial for a premium look */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} />
      <Environment preset="city" /> 

      <Suspense fallback={null}>
        
        {/* RENDER THE MAGICAL CONTROLLER HERE */}
        <AvatarController />
        
        <ContactShadows position={[0, -1, 0]} opacity={0.4} scale={10} blur={2} far={4} />
      </Suspense>
    </Canvas>
  );
}