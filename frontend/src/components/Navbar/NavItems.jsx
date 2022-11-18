import React from "react";
import { motion } from "framer-motion";
import { popUpParent, popUp } from "../../animation";
import { useGlobalContext } from "../Context/ContextProvider";

export default function NavItems({ open }) {
  const { mouseChangeBackground, mouseDefault } = useGlobalContext();
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
            <motion.li className="transition-all duration-500" variants={popUp}>
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
