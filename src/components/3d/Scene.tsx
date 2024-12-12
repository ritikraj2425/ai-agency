import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { FloatingCamera } from './FloatingCamera';

export function Scene() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas>
        <Suspense fallback={null}>
          <FloatingCamera />
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <mesh>
            <torusKnotGeometry args={[1, 0.3, 128, 16]} />
            <meshStandardMaterial color="#9333EA" wireframe />
          </mesh>
        </Suspense>
      </Canvas>
    </div>
  );
}