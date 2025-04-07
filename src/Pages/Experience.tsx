import { motion } from "framer-motion";
import React from "react";
import Skillcard from "../Components/Skillcard";
import { Link } from "react-router-dom";

export default function Experience(): React.ReactNode {
  return (
    <>
      <motion.div
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.0,
          duration: 0.4,
          ease: "easeInOut",
        }}
        className="py-5 px-10 mukta"
      >
        <button className="flex my-5 items-center m-3 w-32 absolute right-0 left-0 mx-auto backdrop-blur-sm bg-black/60 text-white font-semibold px-4 py-1 rounded-full shadow-lg focus:outline-none">
          <span className="mr-2">✨</span> Experience{" "}
          <span className="ml-2">✨</span>
        </button>
        <div className="grid gap-x-4 grid-cols-1 md:grid-cols-2 mt-10 items-center justify-center py-5 bg-[#0F0F0F]">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="bg-gradient-to-br from-[#6EACDA] mt-6 to-[#4B92DB] rounded-lg border-2 border-black shadow-lg"
          >
            <div className="flex flex-col md:flex-row items-center p-6 gap-4 bg-white rounded-lg hover:bg-[#6EACDA] transition-all duration-300">
                
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="bg-gradient-to-br from-[#6EACDA] mt-6 to-[#4B92DB] rounded-lg border-2 border-black shadow-lg"
          >
            <Link
              to="https://github.com/ArunavaCoderEm?tab=repositories"
              target="_blank"
              className="flex flex-col md:flex-row items-center p-6 gap-4 bg-white rounded-lg hover:bg-[#6EACDA] transition-all duration-300"
            >
              <img
                src="./hi33.png"
                className="lg:w-24 w-10 h-auto rounded-lg"
                alt="Experience Icon"
              />
              <div className="flex flex-col">
                <h1 className="font-extrabold text-xl lg:text-3xl">
                  <span className="bg-black text-white p-1 rounded-lg mr-3">
                    30+
                  </span>{" "}
                  Cool
                </h1>
                <span className="text-lg font-bold text-black mt-3">
                  Projects
                </span>
              </div>
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="bg-gradient-to-br from-[#6EACDA] mt-6 to-[#4B92DB] rounded-lg border-2 border-black shadow-lg"
          >
            <Link
              to="https://github.com/ArunavaCoderEm?tab=repositories"
              target="_blank"
              className="flex flex-col md:flex-row items-center p-6 gap-4 bg-white rounded-lg hover:bg-[#6EACDA] transition-all duration-300"
            >
              <img
                src="./hi33.png"
                className="lg:w-24 w-10 h-auto rounded-lg"
                alt="Experience Icon"
              />
              <div className="flex flex-col">
                <h1 className="font-extrabold text-xl lg:text-3xl">
                  <span className="bg-black text-white p-1 rounded-lg mr-3">
                    30+
                  </span>{" "}
                  Cool
                </h1>
                <span className="text-lg font-bold text-black mt-3">
                  Projects
                </span>
              </div>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}
