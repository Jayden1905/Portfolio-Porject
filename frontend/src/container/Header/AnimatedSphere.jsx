import React from "react";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";
import { useGlobalContext } from "../../components/Context/ContextProvider";

export default function AnimatedSphere() {
  const { windowDimension } = useGlobalContext();
  const scale = () => {
    if (windowDimension.windowWidth < 620) {
      return 1.6;
    } else if (windowDimension.windowWidth < 1024) {
      return 2;
    } else {
      return 2.8;
    }
  };
  return (
    <Sphere visible args={[1, 100, 200]} scale={scale()}>
      <MeshDistortMaterial
        color="#8352fd"
        attach="material"
        distort={0.3}
        speed={1}
        roughness={0}
      />
    </Sphere>
  );
}
