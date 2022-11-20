import React, { Suspense } from "react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import AnimatedSphere from "./AnimatedSphere";

const Header = () => {
  return (
    <div className="flex h-[60vh] w-full items-center justify-center overflow-hidden lg:justify-between">
      <div className="content z-10 w-full">
        <h1 className="top-0 select-none font-saira text-5xl leading-[4rem]">
          Hi, I am Jayden and
        </h1>
        <h1 className="top-0 select-none font-saira text-5xl leading-[4rem]">
          I am a web developer.
        </h1>
      </div>
      <motion.div className="absolute top-0 left-0 h-full w-full lg:relative lg:h-[500px] lg:w-[800px]">
        <Canvas className="canvas">
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[-2, 5 - 2]} intensity={1} />
          <Suspense fallback={null}>
            <AnimatedSphere />
          </Suspense>
        </Canvas>
      </motion.div>
    </div>
  );
};

export default Header;
