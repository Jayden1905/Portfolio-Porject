import React from "react";
import { motion } from "framer-motion";
import { aboutText, lineAbout } from "../../animation";
import useScroll from "../../hooks/useScroll";

export const Info = ({ data, index }) => {
  const [text, textControl] = useScroll();

  return (
    <div key={index}>
      <div className="overflow-hidden">
        <motion.p
          ref={text}
          variants={aboutText}
          initial="hidden"
          animate={textControl}
          className="font-saira text-4xl"
        >
          {data.title}
        </motion.p>
      </div>
      <motion.div
        ref={text}
        variants={lineAbout}
        initial="hidden"
        animate={textControl}
        className="mt-6 mb-6 h-[1px] bg-white opacity-30"
      ></motion.div>
      <motion.p
        ref={text}
        variants={aboutText}
        initial="hidden"
        animate={textControl}
        className="font-saira_light"
      >
        {data.description}
      </motion.p>
    </div>
  );
};
