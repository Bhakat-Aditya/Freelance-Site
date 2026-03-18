import React, { useEffect, useMemo, useRef } from 'react'
import { useGraph, useFrame } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'
import * as THREE from 'three'

export default function TalkingOnPhone(props) {
  const group = useRef()
  const phoneRef = useRef()
  
  // Load the model
  const { scene, animations } = useGLTF('/talking-on-phone.glb')
  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  const { actions } = useAnimations(animations, group)

  // Identify the hand bone
  const handBone = nodes.RightHand || nodes.mixamorigRightHand

  // RE-ENABLE ANIMATION
  useEffect(() => {
    if (actions) {
      const actionName = Object.keys(actions)[0]
      if (actionName && actions[actionName]) {
        actions[actionName].reset().fadeIn(0.5).play()
      }
    }
  }, [actions])

  // TRACK HAND MOVEMENT
  useFrame(() => {
    if (handBone && phoneRef.current) {
      const worldPos = new THREE.Vector3()
      const worldQuat = new THREE.Quaternion()
      
      handBone.getWorldPosition(worldPos)
      handBone.getWorldQuaternion(worldQuat)

      phoneRef.current.position.copy(worldPos)
      phoneRef.current.quaternion.copy(worldQuat)
      
      // Fine-tune position so it's in the palm, not the wrist
      phoneRef.current.translateX(0.02) 
      phoneRef.current.translateY(0.1)
    }
  })

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature">
          <primitive object={nodes.Hips} />
          <skinnedMesh name="avaturn_body" geometry={nodes.avaturn_body.geometry} material={materials.avaturn_body_material} skeleton={nodes.avaturn_body.skeleton} />
          <skinnedMesh name="avaturn_hair_0" geometry={nodes.avaturn_hair_0.geometry} material={materials.avaturn_hair_0_material} skeleton={nodes.avaturn_hair_0.skeleton} />
          <skinnedMesh name="avaturn_shoes_0" geometry={nodes.avaturn_shoes_0.geometry} material={materials.avaturn_shoes_0_material} skeleton={nodes.avaturn_shoes_0.skeleton} />
          <skinnedMesh name="avaturn_look_0" geometry={nodes.avaturn_look_0.geometry} material={materials.avaturn_look_0_material} skeleton={nodes.avaturn_look_0.skeleton} />
        </group>
      </group>

      {/* THE PHONE */}
      <mesh ref={phoneRef}>
        <boxGeometry args={[0.02, 0.16, 0.08]} />
        <meshStandardMaterial color="#050505" roughness={0.1} />
        <pointLight intensity={0.3} distance={0.5} color="#3b82f6" />
      </mesh>
    </group>
  )
}

useGLTF.preload('/talking-on-phone.glb')