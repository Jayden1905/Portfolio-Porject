import React from "react";
import { motion } from "framer-motion";
import { loadingTitle, topLoading } from "../../animation";

export default function Loading() {
  return (
    <div className="fixed z-40 flex h-screen w-full flex-col items-center justify-center">
      <motion.div
        variants={topLoading}
        initial="hidden"
        animate="show"
        className="absolute top-0 h-full w-full bg-secondary"
      ></motion.div>
      <div className="h-[6rem] overflow-hidden sm:h-[10rem]">
        <motion.h1
          variants={loadingTitle}
          initial="hidden"
          animate="show"
          className="font-saira text-4xl text-white transition-all delay-500 duration-1000 ease-in-out sm:text-6xl md:text-8xl lg:text-9xl"
        >
          Hi, I'm Jayden.
        </motion.h1>
      </div>
    </div>
  );
}
