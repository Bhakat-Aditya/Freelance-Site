import React, { useEffect } from 'react' // 1. ADD useEffect HERE
import { useGraph } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'

export default function Model(props) {
  const group = React.useRef()
  const { scene, animations } = useGLTF('/typing.glb')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  const { actions } = useAnimations(animations, group)

  // 2. ADD THIS ENTIRE BLOCK TO PLAY THE ANIMATION
  useEffect(() => {
    // Find the first animation in the file and play it
    const actionName = Object.keys(actions)[0];
    if (actionName && actions[actionName]) {
      actions[actionName].reset().fadeIn(0.5).play();
    }
  }, [actions]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="empty_1">
        <group name="FBX_Root">
          <group name="Armature">
            <primitive object={nodes.Hips} />
            <skinnedMesh name="avaturn_body" geometry={nodes.avaturn_body.geometry} material={materials.avaturn_body_material} skeleton={nodes.avaturn_body.skeleton} />
            <skinnedMesh name="avaturn_hair_0" geometry={nodes.avaturn_hair_0.geometry} material={materials.avaturn_hair_0_material} skeleton={nodes.avaturn_hair_0.skeleton} />
            <skinnedMesh name="avaturn_shoes_0" geometry={nodes.avaturn_shoes_0.geometry} material={materials.avaturn_shoes_0_material} skeleton={nodes.avaturn_shoes_0.skeleton} />
            <skinnedMesh name="avaturn_look_0" geometry={nodes.avaturn_look_0.geometry} material={materials.avaturn_look_0_material} skeleton={nodes.avaturn_look_0.skeleton} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/typing.glb')