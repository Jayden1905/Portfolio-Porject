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
      <div className="h-[6rem] overflow-hidden sm:h-[8rem]">
        <motion.h1
          variants={loadingTitle}
          initial="hidden"
          animate="show"
          className="font-sairatext-white text-8xl transition-all delay-700 duration-1000 ease-in-out sm:text-9xl"
        >
          HELLO!
        </motion.h1>
      </div>
    </div>
  );
}
