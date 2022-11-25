import React, { useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import {
  aboutMeBtn,
  circle,
  introAnim,
  titleAnim,
  waveAnim,
  waveContainer,
} from "../../animation";

const Header = () => {
  const title = Array.from("websites");
  const [hover, setHover] = useState(false);

  const hoverHandler = () => {
    setHover((prev) => !prev);
  };

  return (
    <motion.div className="flex w-screen h-[70vh] justify-center items-center">
      <div className="flex flex-col gap-10 justify-center items-center">
        <motion.div className="flex flex-col sm:items-start items-center justify-center sm:gap-0 gap-6">
          <div className="overflow-hidden">
            <motion.h1
              variants={titleAnim}
              className="font-saira_light select-none tracking-wide sm:text-3xl text-2xl lg:pl-0 sm:pl-20 pl-0"
            >
              I develop ideas into
            </motion.h1>
          </div>
          <motion.h1
            variants={waveContainer}
            initial="hidden"
            animate="visible"
            className="flex overflow-hidden select-none font-saira_light lg:text-[12rem] sm:text-[8rem] text-[5rem] sm:leading-[12rem] leading-normal lg:pl-20"
          >
            {title.map((letter, index) => (
              <motion.span key={index} variants={waveAnim}>
                {letter}
              </motion.span>
            ))}
          </motion.h1>
        </motion.div>
        <div className="about-me flex sm:justify-between justify-center relative top-32">
          <motion.a
            onMouseEnter={hoverHandler}
            onMouseLeave={hoverHandler}
            variants={circle}
            whileHover={{ color: "black" }}
            href="#About"
            style={{ originX: 0, originY: 1 }}
            className="circle md:ml-[13%] ml-0 cursor-pointer bg-black w-40 h-40 rounded-full sm:flex hidden flex-col justify-center items-center gap-4 transition-all duration-500 ease-out"
          >
            <motion.div
              variants={aboutMeBtn}
              initial="initial"
              animate={hover ? "animate" : "initial"}
              className="w-1 h-1 absolute bg-white rounded-full transition-all duration-300 ease-out"
            ></motion.div>
            <p className="z-10 select-none">About me</p>
            <FontAwesomeIcon className="z-10" icon={faArrowDown} />
          </motion.a>
          <motion.p
            variants={introAnim}
            className="select-none xl:w-[35%] lg:w-[45%] sm:w-[50%] w-[80%] font-saira_light tracking-wide leading-7"
          >
            My name is Kyaw Za Yan Naing and my friends call me Jayden. I am a
            frontend web-developer and a full-time student based in Myanmar.
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
