import React from 'react';
import { Canvas } from '@react-three/fiber';


function MainScene(){
    return (
        <Canvas>
            <ambientLight intensity={0.1} />
            <directionalLight color="rgb(253, 242, 200)" position={[0,0,5]} />
            <mesh>
                <boxGeometry args={[2,2,2]} />
                <meshStandardMaterial />
            </mesh>
        </Canvas>
    );
}

export default MainScene;