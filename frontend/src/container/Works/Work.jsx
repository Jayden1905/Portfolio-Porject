import React from "react";
import { motion } from "framer-motion";
import { useGlobalContext } from "../../components/Context/ContextProvider";
import { useState } from "react";
import useScroll from "../../hooks/useScroll";
import { lineAbout, aboutText } from "../../animation";
import { urlFor } from "../../client";

export default function Work({ image, title, description }) {
  const { mouseView, mouseDefault, mousePosition } = useGlobalContext();
  const [hover, setHover] = useState(false);
  const [line, lineControl] = useScroll();
  const [text, textControl] = useScroll();

  const projectEnter = () => {
    mouseView();
    setHover(true);
  };

  const projectLeave = () => {
    mouseDefault();
    setHover(false);
  };
  return (
    <motion.a
      href="/#"
      onMouseEnter={projectEnter}
      onMouseLeave={projectLeave}
      className="group relative h-full w-full"
    >
      <motion.div
        initial={{
          opacity: 0,
          scale: 0,
        }}
        animate={
          hover
            ? {
                opacity: 1,
                scale: 1,
                x: mousePosition.x - 300,
                y: mousePosition.y - 300,
              }
            : {
                opacity: 0,
                scale: 0,
                x: mousePosition.x - 300,
                y: mousePosition.y - 300,
              }
        }
        className={`project pointer-events-none fixed top-20 left-16 z-10 bg-secondary px-10 py-20 transition-all duration-300 ease-out`}
      >
        <motion.div className={`h-[350px] w-[500px]`}>
          <img
            src={urlFor(image)}
            alt="ignite"
            className="h-full w-full object-center"
          />
        </motion.div>
      </motion.div>
      <motion.div
        ref={text}
        variants={aboutText}
        initial="hidden"
        animate={textControl}
        className="mb-16 flex w-full items-center justify-between px-32 transition-all duration-500 ease-out group-hover:px-28 xl:px-48 xl:group-hover:px-44"
      >
        <h1 className="font-saira text-6xl transition-all duration-500 ease-out group-hover:opacity-30">
          {title}
        </h1>
        <h1 className="font-saira_light text-xl transition-all duration-500 ease-out group-hover:opacity-30">
          {description}
        </h1>
      </motion.div>
      <motion.div
        ref={line}
        variants={lineAbout}
        initial="hidden"
        animate={lineControl}
        className="mt-6 mb-6 h-[1px] bg-white opacity-30"
      ></motion.div>
    </motion.a>
  );
}
