import React from "react";
import { motion } from "framer-motion";
import LargeWork from "./LargeWork";
import useScroll from "../../hooks/useScroll";
import { workTitle } from "../../animation";
import { useGlobalContext } from "../../components/Context/ContextProvider";
import SmallWork from "./SmallWork";

const Works = () => {
  const { works } = useGlobalContext();
  const [text, textControl] = useScroll();
  return (
    <div className="h-full w-full overflow-hidden bg-dark p-10 sm:p-24">
      <div className="mt-16 h-[4rem] overflow-hidden">
        <motion.h1
          id="Works"
          ref={text}
          variants={workTitle}
          initial="hidden"
          animate={textControl}
          className="text-center font-saira_light text-4xl font-semibold leading-[3rem] sm:text-5xl md:leading-[4rem] lg:leading-[4rem]"
        >
          My recent projects
        </motion.h1>
      </div>
      <div className="mt-28 hidden w-full flex-col gap-10 lg:flex">
        {works.map((data, index) => (
          <LargeWork
            key={index}
            image={data.imgUrl}
            title={data.title}
            description={data.description}
            link={data.projectLink}
          />
        ))}
      </div>
      <div className="mt-28 flex w-full flex-col gap-20 lg:hidden">
        {works.map((data, index) => (
          <SmallWork
            key={index}
            imageUrl={data.imgUrl}
            title={data.title}
            description={data.description}
            year={data.year}
            link={data.projectLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Works;
