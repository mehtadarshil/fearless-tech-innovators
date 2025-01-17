import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function Character() {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.3;
    }
  });

  return (
    <group ref={group}>
      <mesh
        castShadow
        receiveShadow
        position={[0, 0, 0]}
      >
        <boxGeometry args={[1, 2, 1]} />
        <meshStandardMaterial color="#cfb673" />
      </mesh>
    </group>
  );
}

export default function ThreeCharacter() {
  return <Character />;
}