import React from "react";
import { motion } from "framer-motion";
import { aboutText, imageShow, lineAbout } from "../../animation";
import { useGlobalContext } from "../../components/Context/ContextProvider";
import useScroll from "../../hooks/useScroll";
import { urlFor } from "../../client";

export default function SmallWork({
  imageUrl,
  title,
  description,
  year,
  link,
}) {
  const { mouseView, mouseDefault } = useGlobalContext();
  const [image, imageControl] = useScroll();
  const [line, lineControl] = useScroll();
  const [text, textControl] = useScroll();
  return (
    <div className="">
      <motion.a
        onMouseEnter={mouseView}
        onMouseLeave={mouseDefault}
        href={link}
        target="_blank"
      >
        <motion.div
          ref={image}
          variants={imageShow}
          initial="hidden"
          animate={imageControl}
          className="bg-secondary px-5 py-10 transition-all duration-700 ease-out sm:px-10 sm:py-20"
        >
          <motion.img
            src={urlFor(imageUrl)}
            alt="capture"
            className="h-full w-full object-center"
          />
        </motion.div>
      </motion.a>
      <motion.div className="mt-10 flex w-full flex-col transition-all duration-500 ease-out">
        <motion.h1
          ref={text}
          variants={aboutText}
          initial="hidden"
          animate={textControl}
          className="font-saira text-3xl transition-all duration-500 ease-out group-hover:opacity-30"
        >
          {title}
        </motion.h1>
        <motion.div
          ref={line}
          variants={lineAbout}
          initial="hidden"
          animate={lineControl}
          className="mt-6 mb-6 h-[1px] bg-white opacity-30"
        ></motion.div>
        <motion.div
          ref={text}
          variants={aboutText}
          initial="hidden"
          animate={textControl}
          className="flex justify-between"
        >
          <h1 className="font-saira_light text-xl transition-all duration-500 ease-out">
            {description}
          </h1>
          <h1>{year}</h1>
        </motion.div>
      </motion.div>
    </div>
  );
}
