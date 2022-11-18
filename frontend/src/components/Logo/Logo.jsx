import React from "react";
import { motion } from "framer-motion";
import { useGlobalContext } from "../Context/ContextProvider";
import { textAnim, textAnimParent, logoAnim } from "../../animation";

export default function Logo() {
  const logo = ["O", "D", "D", "I", "N", "A", "R", "Y"];
  const { mouseSocialLinks, mouseDefault } = useGlobalContext();

  return (
    <motion.div variants={logoAnim} initial="hidden" animate="show">
      <motion.a
        href="#"
        className="mr-5 flex cursor-pointer font-saira text-4xl tracking-widest"
        onMouseEnter={mouseSocialLinks}
        onMouseLeave={mouseDefault}
        variants={textAnimParent}
        initial="hidden"
        animate="visible"
      >
        {logo.map((word, index) => (
          <motion.span
            className="text-3xl"
            variants={textAnim}
            transition={{
              repeat: Infinity,
              duration: 1,
              repeatType: "loop",
              repeatDelay: 4,
            }}
            key={index}
          >
            {word}
          </motion.span>
        ))}
      </motion.a>
    </motion.div>
  );
}
