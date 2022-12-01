import React from "react";
import { motion } from "framer-motion";
import useScroll from "../../hooks/useScroll";
import {
  aboutHeader,
  aboutText,
  lineAbout,
  showContent,
} from "../../animation";
import { useGlobalContext } from "../../components/Context/ContextProvider";
import Skill from "./Skill";

const Skills = () => {
  const { skills } = useGlobalContext();
  const [title, titleControl] = useScroll();
  const [header, headerControl] = useScroll();
  const [line, lineControl] = useScroll();

  return (
    <motion.div
      variants={showContent}
      initial="hidden"
      animate="show"
      className="h-full w-full overflow-hidden bg-secondary p-10 sm:p-24"
    >
      <div className="overflow-hidden">
        <motion.h1
          id="Skills"
          ref={title}
          variants={aboutText}
          initial="hidden"
          animate={titleControl}
          className="text-center font-saira_light text-3xl font-semibold leading-[3rem] md:text-4xl md:leading-[4rem] lg:text-5xl lg:leading-[4rem]"
        >
          What I can do & my experience in web-development.
        </motion.h1>
      </div>
      <div className="mt-20 flex h-full w-full items-center justify-center">
        <div className="w-full md:w-[75%] lg:w-[60%]">
          <div className="title overflow-hidden">
            <motion.p
              ref={header}
              variants={aboutHeader}
              initial="hidden"
              animate={headerControl}
              className="text-md text-justify font-saira_light"
            >
              I don't have much of a experience in web-development since I had
              been learning by myself most of the time for the past two years. I
              had been preparing since 2021 with a goal of being able to develop
              any ideas that come in my mind into websites. I had been learning
              consistently and keep growing stronger. Even though I know the
              fact that I have so much more rooms to grow, I am confident in my
              skills that I can build decent websites efficiently in a short
              amount of time which can ensure long term success.
            </motion.p>
          </div>
          <motion.div
            ref={line}
            variants={lineAbout}
            initial="hidden"
            animate={lineControl}
            className="mt-8 h-[1px] bg-white opacity-30"
          ></motion.div>
          <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-2">
            {skills.map((data, index) => (
              <Skill data={data} key={index} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
