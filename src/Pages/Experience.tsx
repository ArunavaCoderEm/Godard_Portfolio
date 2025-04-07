import { motion } from "framer-motion";
import React from "react";

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
          <span className="mr-2">✨</span> Experiences{" "}
          <span className="ml-2">✨</span>
        </button>
        <div className="grid gap-x-4 grid-cols-1 md:grid-cols-2 mt-10 items-center justify-center py-5 bg-[#0F0F0F]">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="bg-gradient-to-br from-[#6EACDA] mt-6 to-[#4B92DB] rounded-lg border-2 border-black shadow-lg"
          >
            <div className="p-6 gap-2 bg-white flex flex-col rounded-lg hover:bg-[#6EACDA] transition-all duration-300">
              <h1 className="font-bold text-xl">Techno Billion AI</h1>
              <h2 className="font-bold text-md">SDE Intern</h2>
              <h3 className="text-xs font-bold">Feb 2025 - Present</h3>
              <p className="text-sm tracking-tight">
                In TBAI I am the SDE Intern and bulding a product to make sure AI reaches everybody and is usable by everybody using modern technologies.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="bg-gradient-to-br from-[#6EACDA] mt-6 to-[#4B92DB] rounded-lg border-2 border-black shadow-lg"
          >
            <div className="p-6 gap-2 bg-white flex flex-col rounded-lg hover:bg-[#6EACDA] transition-all duration-300">
              <h1 className="font-bold text-xl">FinnoFarms</h1>
              <h2 className="font-bold text-md">Web Developer</h2>
              <h3 className="text-xs font-bold">July 2024 - Dec 2024</h3>
              <p className="text-sm tracking-tight">
                In this company I along with the team built a full stack website
                that serves products to the customers directly from the farmers.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="bg-gradient-to-br from-[#6EACDA] mt-6 to-[#4B92DB] rounded-lg border-2 border-black shadow-lg"
          >
            <div className="p-6 gap-2 bg-white flex flex-col rounded-lg hover:bg-[#6EACDA] transition-all duration-300">
              <h1 className="font-bold text-xl">GDG On Campus TMSL</h1>
              <h2 className="font-bold text-md">Web Developer</h2>
              <h3 className="text-xs font-bold">Sept 2024 - Present</h3>
              <p className="text-sm tracking-tight">
                I am a dedicated member of the Web Developer Team in the Google
                Developer Student Club. Building and teaching web stuffs.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}
