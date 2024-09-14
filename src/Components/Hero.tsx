import React from "react";
import { BackgroundBeamsWithCollision } from "./UI/background-beams-with-collision";
import { motion } from "framer-motion";

export default function Hero(): React.ReactNode {
  return (
    <>
      <BackgroundBeamsWithCollision>
        <motion.div
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.0,
            duration: 0.4,
            ease: "easeInOut",
          }}
          className="grid grid-cols-1 gap-y-10 mt-20 mukta relative h-auto"
        >
          <motion.div
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.0,
              duration: 0.4,
              ease: "easeInOut",
            }}
            className="hidden lg:flex absolute z-[52] inset-0 justify-center items-center"
          >
            <h1 className="text-left mukta-bold bg-clip-text text-transparent bg-gradient-to-b from-[#6EACDA] via-[#6EACDA] to-white font-extrabold tracking-wider txt opacity-30 selection:bg-[#FFF250]">
              GODARD
            </h1>
          </motion.div>
          <motion.button
            initial={{ opacity: 0.5, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.0,
              duration: 0.4,
              ease: "easeInOut",
            }}
            className="flex items-center w-32 absolute right-0 left-0 mx-auto my-2 backdrop-blur-sm bg-black/30 text-white font-semibold px-4 py-1 rounded-full shadow-lg focus:outline-none"
          >
            <span className="mr-2">✨</span> Home{" "}
            <span className="ml-2">✨</span>
          </motion.button>
          <motion.div
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.0,
              duration: 0.4,
              ease: "easeInOut",
            }}
            className="flex flex-col mt-5 justify-center items-center p-3 relative"
          >
            <div className="blob mt-10 lg:w-[550px] lg:h-[500px] w-full h-96 bg-[url('/me.jpg')] mx-auto lg:mt-[5%] sm:mt-[10%] relative z-10"></div>
            <div className="relative z-20 my-3 p-3">
              <h1 className="text-3xl lg:text-5xl font-extrabold bg-clip-text bg-gradient-to-b text-transparent from-[#6EACDA] via-[#6EACDA] to-[#fff] mukta text-center">Design In Mind To Code In Reality</h1>
            </div>
            <p className="text-white/60 mukta text-md lg:text-xl mb-5 text-center p-3">Code is like humor. When you have to explain it, it’s bad. The best code is the one that is clean, clear, and easy to understand.</p>
          </motion.div>
        </motion.div>
        <h1
          onClick={() => window.scrollTo(0, 550)}
          className="text-xl absolute font-thin cursor-pointer hidden tracking-tight lg:flex h-[75vh] py-1 mb-1 z-[55] right-0 text-[#6EACDA] mukta vertical-text mt-10"
        >
          SCROLL DOWN
        </h1>
      </BackgroundBeamsWithCollision>
    </>
  );
}
