import React from "react";
import { motion } from "framer-motion";
import { useGlobalContext } from "../../components/Context/ContextProvider";
import useScroll from "../../hooks/useScroll";
import { aboutText, lineAbout } from "../../animation";
import { urlFor } from "../../client";

export default function Skill({ data }) {
  const { mouseSocialLinks, mouseDefault } = useGlobalContext();
  const [text, textControl] = useScroll();
  return (
    <div>
      <div className="flex items-center justify-between overflow-hidden">
        <motion.div
          ref={text}
          variants={aboutText}
          initial="hidden"
          animate={textControl}
          className="h-14 w-14"
        >
          <img
            src={urlFor(data.icon)}
            alt="react"
            onMouseEnter={mouseSocialLinks}
            onMouseLeave={mouseDefault}
            className="h-full w-full object-cover grayscale transition-all duration-500 ease-out hover:grayscale-0"
          />
        </motion.div>
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
}
