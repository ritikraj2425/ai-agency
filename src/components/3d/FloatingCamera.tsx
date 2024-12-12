import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

export function FloatingCamera() {
  const cameraRef = useRef<THREE.PerspectiveCamera>(null);
  const time = useRef(0);

  useFrame((state, delta) => {
    time.current += delta;
    if (cameraRef.current) {
      cameraRef.current.position.y = Math.sin(time.current) * 0.3;
      cameraRef.current.rotation.x = Math.sin(time.current * 0.5) * 0.1;
    }
  });

  return <PerspectiveCamera ref={cameraRef} makeDefault position={[0, 0, 5]} />;
}