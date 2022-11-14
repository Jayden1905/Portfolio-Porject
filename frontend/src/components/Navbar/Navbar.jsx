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

  const navToggle = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className="sticky flex w-full items-center lg:justify-center justify-between py-20 px-20">
      <motion.div
        className={`absolute top-0 left-0 w-screen bg-secondary transition-all duration-200 ease-linear`}
        initial={{
          height: 0,
          transition: {
            delay: 1,
          },
        }}
        animate={
          open
            ? {
                height: windowDimension.windowWidth > 1024 ? "75vh" : "100vh",
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
            <motion.a
              className="mr-5 font-saira flex cursor-pointer text-4xl tracking-widest"
              onMouseEnter={mouseSocialLinks}
              onMouseLeave={mouseDefault}
            >
              <span>J</span>
              <span>A</span>
              <span>Y</span>
              <span>D</span>
              <span>E</span>
              <span>N</span>
            </motion.a>
          </motion.div>
        </div>
        <motion.div
          className={`absolute lg:top-[52.3vh] top-[80vh] flex flex-col lg:gap-4 gap-2 ${
            open ? "" : "pointer-events-none"
          }`}
          variants={popUpParentLink}
          onMouseEnter={mouseSocialLinks}
          onMouseLeave={mouseDefault}
          initial="close"
          animate={open ? "open" : "close"}
        >
          {social.map((item) => {
            return (
              <motion.div
                key={item.name}
                className={`w-full overflow-hidden`}
                variants={popUpLink}
              >
                <motion.a
                  href="#"
                  className="cursor-pointer lg:text-lg text-sm font-extralight tracking-wider"
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
        className="group z-10 ml-auto lg:flex hidden cursor-pointer items-center justify-center"
        variants={contactParent}
        initial="hidden"
        animate="show"
      >
        <motion.div
          className="bg-circle z-1 absolute mr-20 h-12 w-12 rounded-full bg-black transition-all duration-500 ease-out group-hover:mr-0 group-hover:w-[8rem]"
          variants={contactAnim}
        ></motion.div>
        <motion.h1
          className="z-10 font-saira text-lg ml-1 tracking-wider transition-all duration-100 ease-out"
          variants={contactAnim}
        >
          Contact Me
        </motion.h1>
      </motion.div>
    </div>
  );

  function navigation(mouseChangeBackground, mouseDefault, open) {
    const items = [
      { name: "About me", id: 1, hoverState: false },
      { name: "Skill set", id: 2, hoverState: false },
      { name: "Projects", id: 3, hoverState: false },
      { name: "Hire me", id: 4, hoverState: false },
      { name: "Contact me", id: 5, hoverState: false },
    ];

    return (
      <motion.ul
        className={`nav-menu ${
          open ? "" : "pointer-events-none"
        } absolute lg:top-[150%] top-[100%] z-10 left-20 lg:left-[23.2rem] flex flex-col lg:gap-10 gap-4`}
        variants={popUpParent}
        initial="close"
        animate={open ? "open" : "close"}
        onMouseEnter={mouseChangeBackground}
        onMouseLeave={mouseDefault}
      >
        {items.map((item) => {
          return (
            <motion.div
              key={item.id}
              className="h-full w-[20rem] cursor-pointer overflow-hidden hover:pl-6 transition-all duration-500"
            >
              <motion.li
                className="transition-all duration-500"
                variants={popUp}
              >
                <motion.p
                  className={`font-saira lg:text-4xl text-3xl tracking-wider ${item.id}`}
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
