import React, { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import {
  aboutMeBtn,
  arrow,
  circle,
  titleAnim,
  waveAnim,
  waveContainer,
} from "../../animation";
import { useGlobalContext } from "../../components/Context/ContextProvider";

const Header = () => {
  const { mouseScaleUp, mouseDefault } = useGlobalContext();
  const title = Array.from("websites");
  const [hover, setHover] = useState(false);

  const hoverHandler = () => {
    setHover((prev) => !prev);
  };

  return (
    <motion.div className="flex h-[87vh] w-screen items-center justify-center bg-dark px-10 sm:h-[70vh] sm:px-24">
      <div className="flex flex-col items-center justify-center gap-10">
        <motion.div className="flex flex-col items-center justify-center gap-6 sm:items-start sm:gap-0">
          <div className="overflow-hidden">
            <motion.h1
              variants={titleAnim}
              className="select-none pl-0 font-saira_light text-2xl tracking-wide transition-all duration-700 ease-out sm:pl-20 sm:text-3xl lg:pl-0"
            >
              I develop ideas into
            </motion.h1>
          </div>
          <motion.h1
            variants={waveContainer}
            className="flex select-none overflow-hidden font-saira_light text-[5rem] leading-normal sm:text-[8rem] sm:leading-[12rem] lg:pl-20 lg:text-[12rem]"
          >
            {title.map((letter, index) => (
              <motion.span key={index} variants={waveAnim}>
                {letter}
              </motion.span>
            ))}
          </motion.h1>
        </motion.div>
        <div className="about-me flex w-full justify-center">
          <motion.a
            onMouseEnter={hoverHandler}
            onMouseLeave={hoverHandler}
            variants={circle}
            whileHover={{ color: "black" }}
            href="#About"
            style={{ originX: 0, originY: 1 }}
            className="circle relative top-28 hidden h-40 w-40 cursor-pointer flex-col items-center justify-center gap-4 rounded-full bg-black transition-all duration-1000 ease-out sm:flex"
          >
            <motion.div
              variants={aboutMeBtn}
              initial="initial"
              animate={hover ? "animate" : "initial"}
              className="absolute h-1 w-1 rounded-full bg-white transition-all duration-500 ease-out"
            ></motion.div>
            <p className="z-10 select-none">About me</p>
            <FontAwesomeIcon className="z-10" icon={faArrowDown} />
          </motion.a>
          <motion.a
            className="mt-56 block cursor-pointer sm:hidden"
            href="#About"
            onMouseEnter={mouseScaleUp}
            onMouseLeave={mouseDefault}
            variants={arrow}
          >
            <FontAwesomeIcon className="z-10 h-4" icon={faArrowDown} />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
