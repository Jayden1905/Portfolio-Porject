import React from "react";
import { motion } from "framer-motion";
import useScroll from "../../hooks/useScroll";
import {
  aboutHeader,
  aboutText,
  aboutTitle,
  lineAbout,
  showContent,
} from "../../animation";

const About = () => {
  const [title, titleControl] = useScroll();
  const [header, headerControl] = useScroll();
  const [line, lineControl] = useScroll();
  const [text, textControl] = useScroll();

  return (
    <motion.div
      variants={showContent}
      initial="hidden"
      animate="show"
      id="About"
      className="h-full w-full overflow-hidden bg-secondary p-10 sm:mt-24 sm:p-24"
    >
      <div className="overflow-hidden">
        <motion.h1
          ref={title}
          variants={aboutTitle}
          initial="hidden"
          animate={titleControl}
          className="font-saira_light text-3xl font-semibold leading-[3rem] md:text-4xl md:leading-[4rem] lg:text-5xl lg:leading-[4rem]"
        >
          Hello, I am Oddinary. I am a freelance web-developer & my websites can
          ensure long term success.
        </motion.h1>
      </div>
      <div className="mt-20 flex h-full w-full pb-[4.8rem]">
        <div className="ml-auto w-full md:w-[75%] lg:w-[60%]">
          <div className="title overflow-hidden">
            <motion.p
              ref={header}
              variants={aboutHeader}
              initial="hidden"
              animate={headerControl}
              className="text-md font-saira_light"
            >
              Developing a website is similar to writing a tale, which is what I
              love to do. Similarly, designing a website to make it usable is
              similar to influencing the path of users when they arrive at a
              website. I took my tasks very seriously, whether I am designing or
              developing a website or web application for a client. If the last
              year has taught me anything about web development, it is that
              innovation keeps you alive. As a result, I strive and integrate
              creativity into all I do for my clients.
            </motion.p>
          </div>
          <motion.div
            ref={line}
            variants={lineAbout}
            initial="hidden"
            animate={lineControl}
            className="mt-8 h-[1px] bg-white opacity-30"
          ></motion.div>
          <div className="mt-20 grid grid-cols-1 gap-16 md:grid-cols-2">
            <div>
              <motion.p
                ref={text}
                variants={aboutText}
                initial="hidden"
                animate={textControl}
                className="font-saira text-4xl"
              >
                Name
              </motion.p>
              <motion.div
                ref={text}
                variants={lineAbout}
                initial="hidden"
                animate={textControl}
                className="mt-6 mb-6 h-[1px] bg-white opacity-30"
              ></motion.div>
              <motion.p
                ref={text}
                variants={aboutText}
                initial="hidden"
                animate={textControl}
                className="font-saira_light"
              >
                I am Kyaw Za Yan Naing.
              </motion.p>
            </div>
            <div>
              <motion.p
                ref={text}
                variants={aboutText}
                initial="hidden"
                animate={textControl}
                className="font-saira text-4xl"
              >
                Age
              </motion.p>
              <motion.div
                ref={text}
                variants={lineAbout}
                initial="hidden"
                animate={textControl}
                className="mt-6 mb-6 h-[1px] bg-white opacity-30"
              ></motion.div>
              <motion.p
                ref={text}
                variants={aboutText}
                initial="hidden"
                animate={textControl}
                className="font-saira_light"
              >
                I am 19 years old.
              </motion.p>
            </div>
            <div>
              <motion.p
                ref={text}
                variants={aboutText}
                initial="hidden"
                animate={textControl}
                className="font-saira text-4xl"
              >
                Location
              </motion.p>
              <motion.div
                ref={text}
                variants={lineAbout}
                initial="hidden"
                animate={textControl}
                className="mt-6 mb-6 h-[1px] bg-white opacity-30"
              ></motion.div>
              <motion.p
                ref={text}
                variants={aboutText}
                initial="hidden"
                animate={textControl}
                className="font-saira_light"
              >
                I am based in Myanmar.
              </motion.p>
            </div>
            <div>
              <motion.p
                ref={text}
                variants={aboutText}
                initial="hidden"
                animate={textControl}
                className="font-saira text-4xl"
              >
                Occupation
              </motion.p>
              <motion.div
                ref={text}
                variants={lineAbout}
                initial="hidden"
                animate={textControl}
                className="mt-6 mb-6 h-[1px] bg-white opacity-30"
              ></motion.div>
              <motion.p
                ref={text}
                variants={aboutText}
                initial="hidden"
                animate={textControl}
                className="font-saira_light"
              >
                I am a full time student and freelance developer.
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
