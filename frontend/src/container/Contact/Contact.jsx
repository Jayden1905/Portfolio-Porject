import React, { useState } from "react";
import { client } from "../../client";
import { motion } from "framer-motion";
import { useGlobalContext } from "../../components/Context/ContextProvider";
import { aboutText, formShow } from "../../animation";
import useScroll from "../../hooks/useScroll";

export default function Contact() {
  const { mouseSocialLinks, mouseDefault } = useGlobalContext();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [title, titleControl] = useScroll();
  const [form, formControl] = useScroll();

  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const contact = {
      _type: "contact",
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    client
      .create(contact)
      .then(() => {
        setLoading(false);
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div
        id="Contact"
        className="mt-14 flex h-screen w-full flex-col items-center justify-center gap-6 sm:mt-0"
      >
        <motion.h1
          ref={title}
          variants={aboutText}
          initial="hidden"
          animate={titleControl}
          className="mb-20 font-saira text-4xl sm:text-5xl"
        >
          Contact Me
        </motion.h1>
        <motion.form
          onSubmit={handleSubmit}
          ref={form}
          variants={formShow}
          initial="hidden"
          animate={formControl}
          className="flex w-full flex-col items-center justify-center gap-6 transition-all duration-700 ease-out"
        >
          <div className="flex w-full flex-col items-center justify-center">
            <input
              className="w-[65%] rounded-3xl border-2 border-white bg-dark py-2 px-6 font-saira text-white !outline-none transition-all duration-700 ease-out sm:w-[50%] md:w-[40%] lg:w-[30%]"
              type="text"
              placeholder="Your Name"
              name="name"
              value={name}
              onChange={handleChangeInput}
              required
            />
          </div>
          <div className="flex w-full flex-col items-center justify-center">
            <input
              className="w-[65%] rounded-3xl border-2 border-white bg-dark py-2 px-6 font-saira text-white !outline-none sm:w-[50%] md:w-[40%] lg:w-[30%]"
              type="email"
              placeholder="Your Email"
              name="email"
              value={email}
              onChange={handleChangeInput}
              required
            />
          </div>
          <div className="flex w-full flex-col items-center justify-center">
            <textarea
              className="h-[20rem] w-[65%] rounded-3xl border-2 border-white bg-dark py-2 px-6 font-saira text-white !outline-none sm:w-[50%] md:w-[40%] lg:w-[30%]"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
              required
            />
          </div>
          <motion.button
            onMouseEnter={mouseSocialLinks}
            onMouseLeave={mouseDefault}
            type="submit"
            className="mt-10 w-[12rem] rounded-3xl bg-white py-2 px-6 font-saira text-lg font-bold text-dark outline-none"
          >
            {!loading ? "Send Message" : "Sending..."}
          </motion.button>
        </motion.form>
      </div>
    </>
  );
}
