import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Canvas } from '@react-three/fiber';
import { PerformanceMonitor } from '@react-three/drei';
import * as THREE from 'three';

// Particle component
const Particles = ({ count = 200 }) => {
  const mesh = useRef<THREE.InstancedMesh>(null);
  const light = useRef<THREE.PointLight>(null);
  
  // Create particles
  const dummy = new THREE.Object3D();
  const particles = new Float32Array(count * 3);
  const scales = new Float32Array(count);
  
  for (let i = 0; i < count; i++) {
    const i3 = i * 3;
    particles[i3] = (Math.random() - 0.5) * 25;
    particles[i3 + 1] = (Math.random() - 0.5) * 15;
    particles[i3 + 2] = (Math.random() - 0.5) * 10;
    
    scales[i] = Math.random() * 0.5 + 0.1;
  }
  
  useFrame((state) => {
    if (mesh.current) {
      const time = state.clock.getElapsedTime();
      
      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        
        dummy.position.set(
          particles[i3],
          particles[i3 + 1] + Math.sin(time * 0.1 + i * 0.1) * 0.5,
          particles[i3 + 2]
        );
        
        const scale = scales[i] * (1 + Math.sin(time * 0.3 + i) * 0.2);
        dummy.scale.set(scale, scale, scale);
        dummy.updateMatrix();
        
        mesh.current.setMatrixAt(i, dummy.matrix);
      }
      
      mesh.current.instanceMatrix.needsUpdate = true;
    }
    
    if (light.current) {
      light.current.position.set(
        Math.sin(state.clock.getElapsedTime() * 0.3) * 8,
        Math.cos(state.clock.getElapsedTime() * 0.5) * 5,
        Math.sin(state.clock.getElapsedTime() * 0.2) * 10
      );
    }
  });
  
  return (
    <>
      <pointLight ref={light} distance={15} intensity={10} color="#9ce3ff" />
      <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.6} />
      </instancedMesh>
    </>
  );
};

const ParticleBackground: React.FC = () => {
  const [degraded, degrade] = React.useState(false);
  
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <Canvas dpr={[1, 2]}>
        <PerformanceMonitor onDecline={() => degrade(true)} />
        <fog attach="fog" args={['#071c26', 5, 30]} />
        <Particles count={degraded ? 100 : 200} />
      </Canvas>
    </div>
  );
};

export default ParticleBackground;