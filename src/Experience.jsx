import { useThree, extend } from "@react-three/fiber";
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import {
  OrbitControls,
  TransformControls,
  PivotControls,
  Html,
  Text,
  Float,
  MeshReflectorMaterial,
} from "@react-three/drei";
import { useRef } from "react";

// extend({ OrbitControls })

export default function Experience() {
  // const { camera, gl } = useThree()
  const cubeRef = useRef();
  const sphereRef = useRef();

  return (
    <>
      {/* <orbitControls args={ [ camera, gl.domElement ] } /> */}
      <OrbitControls makeDefault />
      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />
      <Float speed={6} floatIntensity={2}>
        <Text
          font="./bangers-v20-latin-regular.woff"
          fontSize={1}
          color="salmon"
          position-y={2}
          maxWidth={2} //line breaker at 2
          textAlign="center"
        >
          I LOVE R3F
        </Text>
      </Float>
      <PivotControls
        anchor={[0, 0, 0]}
        depthTest={false}
        fixed={true}
        scale={100}
      >
        <mesh ref={sphereRef} position-x={-2}>
          <sphereGeometry />
          <meshStandardMaterial color="orange" />
          <Html
            position={[1, 1, 0]} //text position
            wrapperClass="label"
            center
            distanceFactor={8} //simulate perspective: far-small, close-big
            occlude={[sphereRef, cubeRef]} //hidesphere behind cube view
          >
            THis is a sphere 🔥
          </Html>
        </mesh>
      </PivotControls>
      <mesh ref={cubeRef} position-x={2} scale={1.5}>
        <boxGeometry />
        <meshStandardMaterial color="mediumpurple" />
      </mesh>
      <TransformControls object={cubeRef} mode="rotate" />

      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        {/* <meshStandardMaterial color="greenyellow" /> */}
        <MeshReflectorMaterial
          resolution={512}
          blur={[1000, 1000]}
          mixBlur={1}
          mirror={0.5} //make the reflection more clear
          color="lightseagreen"
        />
      </mesh>
    </>
  );
}
