import React from "react";
import { motion } from "framer-motion";
import { popUpLink, popUpParentLink } from "../../animation";
import { useGlobalContext } from "../Context/ContextProvider";

export default function Social({ open }) {
  const { mouseSocialLinks, mouseDefault } = useGlobalContext();
  const social = [
    { name: "Facebook" },
    { name: "Instagram" },
    { name: "YouTube" },
    { name: "Git Hub" },
  ];

  return (
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
  );
}
