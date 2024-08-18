import React from 'react';
import Navbar from "./components/NavMenu/Navbar/Navbar";
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Box, Text } from '@react-three/drei';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Canvas style={{ height: "100vh" }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />

        {/* Add a rotating Box */}
        <Box args={[1, 1, 1]} position={[-2, 0, 0]}>
          <meshStandardMaterial attach="material" color="blue" />
        </Box>

        {/* Add some text */}
        <Text position={[2, 0, 0]} fontSize={0.5} color="white">
          Hello R3F
        </Text>

        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default App;

