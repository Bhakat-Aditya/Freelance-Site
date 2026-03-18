import React, { useRef, useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

export default function HappyIdle(props) {
  const group = useRef();
  
  // 1. Load the renamed file from the public folder
  const { scene, animations } = useGLTF('/happy-idle.glb');
  
  // 2. Extract the animation actions
  const { actions } = useAnimations(animations, group);

  // 3. Auto-play the animation when the component loads
  useEffect(() => {
    // Mixamo usually packs the animation as the first action. 
    // This dynamically finds and plays it!
    const actionName = Object.keys(actions)[0];
    if (actionName && actions[actionName]) {
      actions[actionName].reset().fadeIn(0.5).play();
    }
  }, [actions]);

  return (
    <group ref={group} {...props} dispose={null}>
      {/* The primitive tag renders the entire model perfectly */}
      <primitive object={scene} />
    </group>
  );
}

// Preload ensures the model is ready before the user scrolls to it
useGLTF.preload('/happy-idle.glb');