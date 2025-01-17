import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls } from '@react-three/drei';

function Character(props: any) {
  const group = useRef<THREE.Group>();
  const { nodes, materials } = useGLTF('/character.glb');

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.3;
    }
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={new THREE.BoxGeometry(1, 2, 1)}
        material={new THREE.MeshStandardMaterial({ color: '#cfb673' })}
      >
        <meshStandardMaterial color="#cfb673" />
      </mesh>
    </group>
  );
}

export default function ThreeCharacter() {
  return (
    <div className="absolute inset-0 z-0">
      <canvas id="three-canvas" className="w-full h-full" />
    </div>
  );
}