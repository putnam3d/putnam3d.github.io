// src/GLTFModel.js
import React from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const GLTFModel = ({ url }) => {
  const { scene } = useLoader(GLTFLoader, url);

  return <primitive object={scene} />;
};

export default GLTFModel;
