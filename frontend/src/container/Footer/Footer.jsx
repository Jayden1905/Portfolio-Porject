import React from "react";
import { motion } from "framer-motion";
import { useGlobalContext } from "../../components/Context/ContextProvider";

const Footer = () => {
  const { mouseSocialLinks, mouseDefault } = useGlobalContext();
  return (
    <footer class="flex w-full flex-col items-center justify-center px-10 py-10 font-saira shadow sm:px-24 md:flex-row  md:justify-between">
      <span class="text-center text-lg text-white">
        © 2022
        <motion.a
          onMouseEnter={mouseSocialLinks}
          onMouseLeave={mouseDefault}
          href="#Home"
          class="ml-2"
        >
          ODDINARY
        </motion.a>
        . All Rights Reserved.
      </span>
      <ul class="mt-3 flex flex-wrap items-center justify-center text-lg text-white sm:mt-0">
        <motion.li onMouseEnter={mouseSocialLinks} onMouseLeave={mouseDefault}>
          <a
            href="https://www.facebook.com/kyawza.yannaing.77"
            class="mr-4 md:mr-6"
          >
            Facebook
          </a>
        </motion.li>
        <li>
          <motion.a
            onMouseEnter={mouseSocialLinks}
            onMouseLeave={mouseDefault}
            href="https://www.instagram.com/kz_potay/?igshid=YTY2NzY3YTc%3D"
            class="mr-4 md:mr-6"
          >
            Instagram
          </motion.a>
        </li>
        <li>
          <motion.a
            onMouseEnter={mouseSocialLinks}
            onMouseLeave={mouseDefault}
            href="https://www.youtube.com/@kyawzayannaing8007"
            class="mr-4 md:mr-6"
          >
            Youtube
          </motion.a>
        </li>
        <li>
          <motion.a
            onMouseEnter={mouseSocialLinks}
            onMouseLeave={mouseDefault}
            href="https://github.com/Jayden1905"
          >
            GitHub
          </motion.a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
