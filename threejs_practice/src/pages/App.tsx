import React, { useRef, useState, useEffect }  from 'react';
// eslint-disable-next-line
import {Canvas, useFrame } from 'react-three-fiber'
import THREE, { Mesh, Vector3 } from 'three';
import Controls from '../utils/Controls';
import rocket from '../assets/rocket.svg'

const cubeCount = 1000
let nowCount : number = 0

const App: React.FC = () => {
  const [cubeList, setCubeList] = useState({})
  useEffect(()=> {
    const tmp = {}
    for (let i = 0; i < cubeCount ; i++ ) {
      tmp[nowCount] = <Box position={[0, 10, 0]} boxId={nowCount}/>
      nowCount++;
    }
    setCubeList(tmp)
  },[])

  return (
    <>
      <div style={{ height: '100VH', width: '100VW', position: 'absolute', top: '0px'}}>
        <div style={{
          margin: ' auto',
          width: 'max-content',
          fontFamily: 'fantasy',
          fontSize: '64px',
          // WebkitTextStroke: '2px #FFF',
          color:'#FFF',
          marginTop: '30VH'
          }}>
          <div style={{display: 'flex'}}>
            <img src={rocket} style={{width:'200px', margin:'auto', marginBottom:'16px'} } alt='' />
          </div>
          <div>
            Into the Space
          </div>
          
        </div>

      </div>
      <div style={{ position: 'absolute', top: '0px'}}>
        <Canvas style={{ width: '100VW', height: '100VH' }}>
          <Controls defaultCameraPosition={[0, 1.25, 1]} target={new Vector3(0, 0, 0)} lookTop={true}/>
          {Object.keys(cubeList).map((_, i) => {
            return (
              <Box position={[getRandomInt(-50, 50), 100, getRandomInt(-50, 50)]} boxId={i}/>
            )
          })}
          <directionalLight />
        </Canvas>
      </div>
    </>
  )
}

type boxProps = {
  position: Vector3
  boxId: number
}

const Box: React.FC<boxProps> = (props) => {
  const ref = useRef({} as Mesh);
  useFrame(() => {
    if (true) {
      ref.current.rotation.y = ref.current.rotation.z += getRandomInt(1, 9) * 0.01
      ref.current.position.y -= getRandomInt(1, 9) * 0.1
      if (ref.current.position.y < 0) {
        ref.current.position.y = getRandomInt(250, 400)

        ref.current.position.x = getRandomInt(-100, 100)
        ref.current.position.z = getRandomInt(-100, 100)
      }
    }

  });
  return (
    <>
      
      {/* {ref.map(()=>{ */}
      <mesh ref={ref} {...props} >
        <boxGeometry attach='geometry' />
        <meshBasicMaterial attach='material' color='#fff' opacity={0.8} transparent />
      </mesh>
      {/* })} */}
    </>
  );
}

export default App;


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}