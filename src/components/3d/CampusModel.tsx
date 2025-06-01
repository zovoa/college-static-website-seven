import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

// Campus building model
const Model = () => {
  const group = useRef<THREE.Group>(null);
  const { scene } = useThree();
  
  // Simulating a 3D model since we don't have an actual GLTF file
  useEffect(() => {
    if (group.current) {
      // Set up lighting to highlight the model
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
      const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
      directionalLight.position.set(5, 10, 5);
      
      scene.add(ambientLight);
      scene.add(directionalLight);
    }
  }, [scene]);

  // Subtle rotation animation
  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.1;
    }
  });

  return (
    <group ref={group}>
      {/* Main campus building */}
      <group position={[0, -1, 0]}>
        {/* Main building */}
        <mesh position={[0, 0.5, 0]} castShadow receiveShadow>
          <boxGeometry args={[5, 2, 3]} />
          <meshStandardMaterial color="#d2b48c" roughness={0.7} metalness={0.1} />
        </mesh>
        
        {/* Roof */}
        <mesh position={[0, 1.75, 0]} castShadow>
          <coneGeometry args={[3.5, 1.5, 4]} />
          <meshStandardMaterial color="#8B4513" roughness={0.8} />
        </mesh>
        
        {/* Windows */}
        {[-1.5, 0, 1.5].map((x, i) => (
          <mesh key={i} position={[x, 0.5, 1.51]} castShadow>
            <planeGeometry args={[0.8, 1]} />
            <meshStandardMaterial color="#87CEEB" metalness={0.9} roughness={0.1} />
          </mesh>
        ))}
        
        {/* Door */}
        <mesh position={[0, -0.25, 1.51]} castShadow>
          <planeGeometry args={[1, 1.5]} />
          <meshStandardMaterial color="#8B4513" roughness={0.7} />
        </mesh>
        
        {/* Columns */}
        {[-2, 2].map((x, i) => (
          <mesh key={i} position={[x, 0, 1.3]} castShadow>
            <cylinderGeometry args={[0.2, 0.2, 2, 16]} />
            <meshStandardMaterial color="#F5F5DC" roughness={0.5} />
          </mesh>
        ))}
      </group>
      
      {/* Surrounding environment */}
      <mesh position={[0, -1.1, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color="#4a7c59" roughness={1} />
      </mesh>
      
      {/* Trees */}
      {[
        [-4, 0, -3],
        [4, 0, -2],
        [-3, 0, 4],
        [5, 0, 3],
        [-6, 0, 0],
      ].map((pos, i) => (
        <group key={i} position={[pos[0], -1, pos[2]]}>
          <mesh castShadow>
            <cylinderGeometry args={[0.2, 0.3, 1, 8]} />
            <meshStandardMaterial color="#8B4513" roughness={1} />
          </mesh>
          <mesh position={[0, 1, 0]} castShadow>
            <coneGeometry args={[1, 2, 8]} />
            <meshStandardMaterial color="#228B22" roughness={0.8} />
          </mesh>
        </group>
      ))}
      
      {/* Water feature / pond */}
      <mesh position={[3, -0.9, -4]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <circleGeometry args={[2, 32]} />
        <meshStandardMaterial color="#4682B4" roughness={0.2} metalness={0.8} />
      </mesh>
    </group>
  );
};

const CampusModel: React.FC = () => {
  return (
    <div className="w-full h-full">
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[8, 5, 8]} fov={35} />
        <fog attach="fog" args={['#cad8de', 8, 30]} />
        <Environment preset="sunset" />
        
        <Model />
        
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2 - 0.1}
          minPolarAngle={Math.PI / 6}
          rotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
};

export default CampusModel;