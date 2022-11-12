import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  hamburgerButtom,
  hamburgerTop,
  navBarAnimation,
  popUp,
  popUpLink,
  popUpParent,
  popUpParentLink,
} from "../../animation";
import { useGlobalContext } from "../Context/ContextProvider";
import facebook from "../../assets/icons8-facebook.svg";

const Navbar = () => {
  const {
    mouseDefault,
    mouseScaleUp,
    mouseChangeBackground,
    mouseSocialLinks,
  } = useGlobalContext();
  const [open, setOpen] = useState(false);

  const social = [
    {
      name: "Facebook",
      svg: facebook,
    },
    { name: "Instagram" },
    { name: "YouTube" },
    { name: "Git Hub" },
  ];

  const navToggle = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className="sticky flex w-full items-center justify-center py-20 px-[10rem]">
      <motion.div
        className="absolute top-0 w-screen bg-secondary transition-all duration-200 ease-linear"
        variants={navBarAnimation}
        initial="hidden"
        animate={open ? "show" : "hidden"}
      ></motion.div>
      <div className="z-10 mr-5 sm:mr-[13rem]">
        <motion.a
          className="mr-5 font-saira cursor-pointer text-[1.8rem] tracking-widest"
          onMouseEnter={mouseScaleUp}
          onMouseLeave={mouseDefault}
        >
          JAYDEN
        </motion.a>
        <motion.div
          className={`absolute top-[52.3vh] flex flex-col gap-4 ${
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
                  className="cursor-pointer text-lg font-extralight tracking-wider"
                >
                  {item.name}
                </motion.a>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
      <div className="z-10 mr-auto">
        <div
          onMouseEnter={mouseScaleUp}
          onMouseLeave={mouseDefault}
          className="hamburger flex cursor-pointer flex-col gap-2 p-4"
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
        onMouseEnter={mouseScaleUp}
        onMouseLeave={mouseDefault}
        className="group z-10 lg:flex hidden cursor-pointer items-center justify-center"
      >
        <div className="bg-circle z-1 absolute mr-20 h-12 w-[3rem] rounded-full bg-black transition-all duration-500 ease-out group-hover:mr-0 group-hover:w-[8rem]"></div>
        <h1 className="z-10 font-saira text-xl tracking-wide">Contact Me</h1>
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
        } absolute top-[150%] z-10 flex flex-col gap-10`}
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
                  className={`font-saira text-4xl tracking-wider ${item.id}`}
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
