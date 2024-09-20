import { motion } from "framer-motion";
import React from "react";
import Email from "../Icons/Email";
import Phone from "../Icons/Phone";
import Name from "../Icons/Name";
import Message from "../Icons/Message";
import Send from "../Icons/Send";

const ContactForm = (): React.ReactNode => {
  return (
    <motion.div
      initial={{ opacity: 0.5, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.0,
        duration: 0.4,
        ease: "easeInOut",
      }}
      id="contact"
      className="flex flex-col items-center mt-5 justify-center min-h-screen mukta p-6"
    >
      <button className="flex items-center mt-10 mb-8 px-4 py-1 w-36 mx-auto backdrop-blur-sm bg-black/60 text-white font-semibold rounded-full sha focus:outline-none mukta">
        <span className="mr-2">✨</span> Contact{" "}
        <span className="ml-2">✨</span>
      </button>

      <div className="flex flex-col p-2 md:flex-row justify-center items-start w-full max-w-4xl bg-gradient-to-bl from-[#6EACDA] to-[#6EACDA]/60 mukta sha rounded-lg overflow-hidden">
        <div className="w-full md:w-1/3 lg:h-64 rounded-lg sha bg-[#121316] text-white p-6 flex flex-col items-start justify-center">
          <h2 className="text-xl mukta font-extrabold mb-4">
            My Contact Info :
          </h2>
          <p className="text-sm mb-2 sm:text-center text-left">
            <span className="font-semibold mukta mb-2 text-md mr-4 flex gap-2 items-center "><Email /> Email :</span>{" "}
            <span className="text-[#6EACDA] text-md">meard06@gmail.com</span>
          </p>
          <p className="text-sm sm:text-center text-left">
            <span className="font-semibold mukta mb-2 text-md flex items-center gap-2 mr-3"><Phone /> Phone :</span>{" "}
            <span className="text-[#6EACDA] text-md">+91 8695260699</span>
          </p>
        </div>

        <div className="w-full md:w-2/3 p-6">
          <h2 className="text-3xl font-extrabold mukta mb-4 text-black">
            Get in Touch :
          </h2>
          <form
            className="space-y-4"
            action="https://api.web3forms.com/submit"
            method="POST"
          >
            <input
              type="hidden"
              name="access_key"
              value="041feffe-0e52-4a22-858e-514df26fcbba"
            />
            <div>
              <label
                className="flex gap-2 items-center mukta text-lg font-semibold mb-2 text-[#0F0F0F]"
                htmlFor="name"
              >
                <Name />
                Name
              </label>
              <input
                id="name"
                type="name"
                name="name"
                required
                className="w-full font-semibold px-4 py-2 sha mukta text-sm border border-gray-300 rounded-lg focus:outline-none"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label
                className="flex gap-2 items-center mukta text-lg font-semibold mb-2 text-[#0F0F0F]"
                htmlFor="email"
              >
                <Email />
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                className="w-full font-semibold px-4 mukta sha py-2 text-sm border border-gray-300 rounded-lg focus:outline-none"
                placeholder="youremail@gmail.com"
              />
            </div>
            <div>
              <label
                className="flex gap-2 items-center text-lg lgkta font-semibold mb-2 text-[#0F0F0F]"
                htmlFor="message"
              >
                <Message />
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                className="w-full font-semibold px-4 sha mukta py-2 text-sm border border-gray-300 rounded-lg focus:outline-none"
                rows={4}
                placeholder="Type your message..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full flex gap-2 items-center justify-center mukta sha bg-gradient-to-bl from-black/80 to-black/60 text-white font-semibold px-4 py-2 transition-all divide-neutral-300 hover:scale-95 rounded-lg focus:outline-none"
            >
              <Send />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactForm;
