import React from "react";
import Header from "../Header/Header";
import { motion } from "framer-motion";
import { showContent } from "../../animation";
import About from "../About/About";

export default function Home() {
  return (
    <motion.div
      variants={showContent}
      initial="hidden"
      animate="show"
      className=" w-screen h-full flex flex-col justify-center items-center"
    >
      <Header />
      <About />
    </motion.div>
  );
}
