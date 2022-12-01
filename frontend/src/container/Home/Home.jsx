import React from "react";
import Header from "../Header/Header";
import { motion } from "framer-motion";
import { showContent } from "../../animation";
import About from "../About/About";
import Works from "../Works/Works";
import Skills from "../Skills/Skills";

export default function Home() {
  return (
    <motion.div
      variants={showContent}
      initial="hidden"
      animate="show"
      className=" flex h-full w-screen flex-col items-center justify-center"
    >
      <Header />
      <About />
      <Works />
      <Skills />
    </motion.div>
  );
}
