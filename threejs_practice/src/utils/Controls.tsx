import React, { useRef, useEffect } from 'react'
import { extend, ReactThreeFiber,  useThree, useFrame } from 'react-three-fiber'

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

extend({ OrbitControls })

declare global {
  namespace JSX {
    interface IntrinsicElements {
      readonly orbitControls: ReactThreeFiber.Object3DNode<OrbitControls, typeof OrbitControls>
    }
  }
}

interface Props extends ReactThreeFiber.Object3DNode<OrbitControls, typeof OrbitControls> {
  defaultCameraPosition?: [number, number, number],
  lookTop?: boolean
}

export default function Controls(props: Props) {
  const {
    camera,
    gl: { domElement }
  } = useThree()
  const controls = useRef<OrbitControls>()
  const { defaultCameraPosition } = props

  useFrame(() => {controls.current?.update()
    if (props.lookTop) {
      camera.lookAt(0, 200, 0); // Vecter3で定義したところを見る
    }
    
  })

  useEffect(() => {
    if (defaultCameraPosition !== undefined) {
      camera.position.set(...defaultCameraPosition)
      
      //camera.far = 2900
    }
  }, [camera, defaultCameraPosition])

  return <orbitControls enableRotate={false} ref={controls} args={[camera, domElement]} screenSpacePanning {...props} />
}