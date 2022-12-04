import React from "react";
import { motion } from "framer-motion";
import { cursorAnimation } from "../../animation";
import { useGlobalContext } from "../Context/ContextProvider";

const Cursor = () => {
  const { mouseVarient, mousePosition } = useGlobalContext();

  return (
    <motion.div
      variants={cursorAnimation(mousePosition)}
      className="pointer-events-none fixed -top-[6px] -left-[4px] z-50 hidden h-14 w-14 items-center justify-center rounded-full border-solid border-[rgba(255,255,255,0.3)] transition-all duration-700 ease-out lg:flex"
      initial={{
        borderColor: "rgba(255,255,255,0.3)",
        borderWidth: 1,
      }}
      animate={mouseVarient}
    >
      <motion.div
        className={`h-[4px] w-[4px] rounded-full font-saira_light text-dark ${
          mouseVarient === "default" || mouseVarient === "scaleUpBlur"
            ? "bg-white"
            : ""
        } opacity-100`}
      ></motion.div>
      {mouseVarient === "view" && (
        <motion.h1 className="-translate-x-[2px] font-saira_light text-sm text-white">
          view
        </motion.h1>
      )}
    </motion.div>
  );
};

export default Cursor;
