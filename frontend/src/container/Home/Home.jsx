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
      className="sm:px-24 px-10 w-screen h-100vh flex flex-col justify-center items-center"
    >
      <Header />
      <About />
    </motion.div>
  );
}
