import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';

const ThreeScene = () => {
    const meshRef = useRef();

    return (
        <Canvas>
            <mesh ref={meshRef}>
                <boxBufferGeometry args={[1,1,1]} />
                <meshStandardMaterial color="orange" />
            </mesh>
        </Canvas>
    );
};

export default ThreeScene;