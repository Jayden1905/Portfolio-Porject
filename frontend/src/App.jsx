import React from "react";
import { motion } from "framer-motion";

import {
  About,
  Footer,
  Header,
  Skills,
  Testimonials,
  Works,
} from "./container";

import { Navbar } from "./components";
import Cursor from "./components/Cursor/Cursor";
import ContextProvider from "./components/Context/ContextProvider";
import { showContent } from "./animation";

const App = () => {
  return (
    <ContextProvider>
      <div className="relative flex min-h-screen w-full flex-col bg-dark text-white">
        <Cursor />
        <Navbar />
        <motion.div
          variants={showContent}
          initial="hidden"
          animate="show"
          className="px-16"
        >
          <Header />
          <About />
          <Works />
          <Skills />
          <Testimonials />
          <Footer />
        </motion.div>
      </div>
    </ContextProvider>
  );
};

export default App;
