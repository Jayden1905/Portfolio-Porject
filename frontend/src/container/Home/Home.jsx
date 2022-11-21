import React from "react";
import Header from "../Header/Header";
import { motion } from "framer-motion";
import { showContent } from "../../animation";

export default function Home() {
  return (
    <motion.div
      variants={showContent}
      initial="hidden"
      animate="show"
      className="sm:px-24 px-10 w-full h-100vh flex justify-center items-center"
    >
      <Header />
    </motion.div>
  );
}
