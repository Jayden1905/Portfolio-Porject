import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  contactAnim,
  contactParent,
  hamburgerButtom,
  hamburgerTop,
} from "../../animation";
import { useGlobalContext } from "../Context/ContextProvider";
import Logo from "../Logo/Logo";
import NavItems from "./NavItems";
import Social from "./Social";

const Navbar = () => {
  const { mouseDefault, mouseScaleUp, mouseSocialLinks, windowDimension } =
    useGlobalContext();
  const [open, setOpen] = useState(false);

  const navToggle = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className="sticky flex w-full items-center justify-between p-16 lg:justify-center">
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
                height: windowDimension.windowWidth > 1024 ? "44rem" : "100vh",
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
          <Logo />
        </div>
        <Social open={open} />
      </div>
      <div className="z-10">
        <motion.div
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
        </motion.div>
        <NavItems open={open} />
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
          className="bg-circle absolute mr-20 h-12 w-12 rounded-full bg-black transition-all duration-500 ease-out group-hover:mr-0 group-hover:w-[8rem]"
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
};

export default Navbar;
