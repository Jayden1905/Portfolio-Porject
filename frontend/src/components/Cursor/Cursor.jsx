import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cursorAnimation } from "../../animation";
import { useGlobalContext } from "../Context/useContext";

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 800,
    y: 500,
  });
  const { mouseVarient } = useGlobalContext();
  console.log(mouseVarient);

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <motion.div
      variants={cursorAnimation(mousePosition)}
      className="pointer-events-none absolute z-50 flex h-14 w-14 items-center justify-center rounded-full border-2 border-solid border-[rgba(255,255,255,0.3)] transition-all duration-700 ease-out"
      animate={mouseVarient}
    >
      <motion.div
        className={`h-1 w-1 rounded-full ${
          mouseVarient === "default" || mouseVarient === "socialLinks"
            ? "bg-white"
            : ""
        } opacity-100`}
      ></motion.div>
    </motion.div>
  );
};

export default Cursor;
