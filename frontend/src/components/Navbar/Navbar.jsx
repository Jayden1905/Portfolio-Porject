import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  contactAnim,
  contactParent,
  hamburgerButtom,
  hamburgerTop,
  logoAnim,
  popUp,
  popUpLink,
  popUpParent,
  popUpParentLink,
  textAnim,
  textAnimParent,
} from "../../animation";
import { useGlobalContext } from "../Context/ContextProvider";

const Navbar = () => {
  const {
    mouseDefault,
    mouseScaleUp,
    mouseChangeBackground,
    mouseSocialLinks,
    windowDimension,
  } = useGlobalContext();
  const [open, setOpen] = useState(false);

  const social = [
    { name: "Facebook" },
    { name: "Instagram" },
    { name: "YouTube" },
    { name: "Git Hub" },
  ];

  const logo = ["Y", "O", "U", "N", "G", "D", "E", "V"];

  const navToggle = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className="sticky flex w-full items-center justify-between py-20 px-20 lg:justify-center">
      <motion.div
        className={`absolute top-0 left-0 w-screen bg-secondary transition-all duration-700 ease-out`}
        initial={{
          height: 0,
          transition: {
            delay: 1,
          },
        }}
        animate={
          open
            ? {
                height: windowDimension.windowWidth > 1024 ? "48rem" : "100vh",
              }
            : {
                height: 0,
                transition: {
                  delay: 1,
                },
              }
        }
      ></motion.div>
      <div className="z-10 mr-0 lg:mr-[8rem]">
        <div className="h-full w-full overflow-hidden">
          <motion.div variants={logoAnim} initial="hidden" animate="show">
            <motion.div
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
            </motion.div>
          </motion.div>
        </div>
        <motion.div
          className={`absolute top-[80vh] flex flex-col gap-2 lg:top-[31.7rem] lg:gap-4 ${
            open ? "" : "pointer-events-none"
          }`}
          variants={popUpParentLink}
          onMouseEnter={mouseSocialLinks}
          onMouseLeave={mouseDefault}
          initial="close"
          animate={open ? "open" : "close"}
        >
          {social.map((item, index) => {
            return (
              <motion.div
                key={index}
                className={`w-full overflow-hidden`}
                variants={popUpLink}
              >
                <motion.a
                  href="#"
                  className="cursor-pointer text-sm font-extralight tracking-wider lg:text-lg"
                >
                  {item.name}
                </motion.a>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
      <div className="z-10">
        <div
          onMouseEnter={mouseScaleUp}
          onMouseLeave={mouseDefault}
          className="hamburger flex cursor-pointer flex-col gap-[10px] p-4"
          onClick={navToggle}
        >
          <motion.div
            variants={hamburgerTop}
            animate={open ? "open" : "close" && "animate"}
            className="h-[1px] cursor-pointer bg-primary"
          ></motion.div>
          <motion.div
            variants={hamburgerButtom}
            animate={open ? "open" : "close" && "animate"}
            className="h-[1px] cursor-pointer bg-primary"
          ></motion.div>
        </div>
        {navigation(mouseChangeBackground, mouseDefault, open)}
      </div>
      <motion.div
        onMouseEnter={mouseSocialLinks}
        onMouseLeave={mouseDefault}
        className="group z-10 ml-auto hidden cursor-pointer items-center justify-center lg:flex"
        variants={contactParent}
        initial="hidden"
        animate="show"
      >
        <motion.div
          className="bg-circle z-1 absolute mr-20 h-12 w-12 rounded-full bg-black transition-all duration-500 ease-out group-hover:mr-0 group-hover:w-[8rem]"
          variants={contactAnim}
        ></motion.div>
        <motion.h1
          className="z-10 ml-1 font-saira text-lg tracking-wider transition-all duration-100 ease-out"
          variants={contactAnim}
        >
          Contact Me
        </motion.h1>
      </motion.div>
    </div>
  );

  function navigation(mouseChangeBackground, mouseDefault, open) {
    const items = [
      { name: "About me" },
      { name: "Skill set" },
      { name: "Projects" },
      { name: "Hire me" },
      { name: "Contact me" },
    ];

    return (
      <motion.ul
        className={`nav-menu ${
          open ? " " : "pointer-events-none"
        } absolute top-[100%] left-20 z-10 flex flex-col gap-4 lg:top-[150%] lg:left-[25.5rem] lg:gap-10`}
        variants={popUpParent}
        initial="close"
        animate={open ? "open" : "close"}
        onMouseEnter={mouseChangeBackground}
        onMouseLeave={mouseDefault}
      >
        {items.map((item, index) => {
          return (
            <motion.div
              key={index}
              className="h-full w-[20rem] cursor-pointer overflow-hidden transition-all duration-500 hover:pl-6"
            >
              <motion.li
                className="transition-all duration-500"
                variants={popUp}
              >
                <motion.p
                  className={`font-saira text-3xl tracking-wider lg:text-4xl ${item.id}`}
                >
                  {item.name}
                </motion.p>
              </motion.li>
            </motion.div>
          );
        })}
      </motion.ul>
    );
  }
};

export default Navbar;
