import React from "react";
import { Home } from "./container";
import { Navbar } from "./components";
import Cursor from "./components/Cursor/Cursor";
import ContextProvider from "./components/Context/ContextProvider";
import { motion } from "framer-motion";
import Loading from "./components/Loading/Loading";
import { useState } from "react";
import { useEffect } from "react";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading((prev) => !prev);
    }, 2400);
  }, []);

  return (
    <ContextProvider>
      <motion.div
        id="Home"
        className="flex flex-col overflow-x-hidden scroll-smooth text-white"
      >
        {loading && <Loading />}
        {!loading && (
          <>
            <Cursor />
            <Navbar />
            <Home />
          </>
        )}
      </motion.div>
    </ContextProvider>
  );
};

export default App;
