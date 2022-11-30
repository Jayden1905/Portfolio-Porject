import React from "react";
import { motion } from "framer-motion";
import Work from "./Work";
import useScroll from "../../hooks/useScroll";
import { workTitle } from "../../animation";
import { useGlobalContext } from "../../components/Context/ContextProvider";

const Works = () => {
  const { works } = useGlobalContext();
  const [text, textControl] = useScroll();
  return (
    <div
      id="Works"
      className="h-full w-full overflow-hidden bg-dark p-10 sm:p-24"
    >
      <div className="overflow-hidden">
        <motion.h1
          ref={text}
          variants={workTitle}
          initial="hidden"
          animate={textControl}
          className="text-center font-saira_light text-4xl font-semibold leading-[3rem] sm:text-5xl md:leading-[4rem] lg:leading-[4rem]"
        >
          My recent works.
        </motion.h1>
      </div>
      <div className="mt-28 hidden w-full flex-col gap-10 lg:flex">
        {works.map((data, index) => (
          <Work
            key={index}
            image={data.imgUrl}
            title={data.title}
            description={data.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Works;
