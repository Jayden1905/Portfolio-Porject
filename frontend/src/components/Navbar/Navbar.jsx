import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  hamburgerButtom,
  hamburgerTop,
  navBarAnimation,
  popUp,
  popUpParent,
} from "../../animation";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navToggle = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className="relative flex w-full items-center justify-center py-20 px-28">
      <motion.div
        className="absolute top-0 w-screen bg-secondary transition-all duration-200 ease-linear"
        variants={navBarAnimation}
        initial="hidden"
        animate={open ? "show" : "hidden"}
      ></motion.div>
      <div className="z-10 mr-5 sm:mr-28">
        <h1 className="mr-5 font-saira text-4xl tracking-widest">JAYDEN</h1>
      </div>
      <div className="z-10 mr-auto">
        <div
          className="hamburger flex cursor-pointer flex-col gap-2"
          onClick={navToggle}
        >
          <motion.div
            variants={hamburgerTop}
            animate={open ? "open" : "close"}
            className="h-[3px] w-10 cursor-pointer bg-primary"
          ></motion.div>
          <motion.div
            variants={hamburgerButtom}
            animate={open ? "open" : "close"}
            className="h-[3px] w-10 translate-x-10 cursor-pointer bg-primary"
          ></motion.div>
        </div>
        {navigation()}
      </div>
      <div className="z-10">Contact Me</div>
    </div>
  );

  function navigation() {
    return (
      <motion.ul
        className={`nav-menu absolute top-[150%] z-10 flex flex-col gap-10`}
        variants={popUpParent}
        animate={open ? "open" : "close"}
      >
        <motion.li
          className="nav-item hover: cursor-pointer font-saira text-4xl tracking-wider transition-all duration-500 hover:ml-4"
          variants={popUp}
        >
          About me
        </motion.li>
        <motion.li
          className="nav-item hover: cursor-pointer font-saira text-4xl tracking-wider transition-all duration-500 hover:ml-4"
          variants={popUp}
        >
          Skill set
        </motion.li>
        <motion.li
          className="nav-item hover: cursor-pointer font-saira text-4xl tracking-wider transition-all duration-500 hover:ml-4"
          variants={popUp}
        >
          Projects
        </motion.li>
        <motion.li
          className="nav-item hover: cursor-pointer font-saira text-4xl tracking-wider transition-all duration-500 hover:ml-4"
          variants={popUp}
        >
          Hire Me
        </motion.li>
        <motion.li
          className="nav-item hover: cursor-pointer font-saira text-4xl tracking-wider transition-all duration-500 hover:ml-4"
          variants={popUp}
        >
          Contact Me
        </motion.li>
      </motion.ul>
    );
  }
};

export default Navbar;
