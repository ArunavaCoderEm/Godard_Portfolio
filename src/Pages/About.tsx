import React from "react";
import TextRotate from "../Components/Rottext";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const AboutMe = (): React.ReactNode => {
  return (
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
        <span className="mr-2">✨</span> About <span className="ml-2">✨</span>
      </button>
      <div
        id="about"
        className="flex mt-10 items-center justify-center min-h-screen py-5 bg-[#0F0F0F]"
      >
        <div className="lg:max-w-6xl w-full my-5 shadow-lg rounded-lg overflow-hidden grid grid-cols-1 md:grid-cols-2">
          <div className="md:flex-shrink-0 md:mx-1 lg:mx-2 flex items-center lg:p-5 bg-[#0F0F0F]">
            <img
              className="lg:h-[30rem] w-full rounded-lg object-cover"
              src="./meabb.jpg"
              alt="Profile"
            />
          </div>
          <div className="lg:p-4 md:mx-0 w-full mt-4">
            <div className="p-8 bg-[#0F0F0F] rounded-lg shadow-lg border border-[#6EACDA]">
              <div className="uppercase tracking-wide text-xl text-[#6EACDA] font-extrabold">
                Hello 👋🏼 !
              </div>
              <h1 className="mt-2 text-3xl text-white font-bold">
                <span className="text-[#6EACDA] font-extrabold">I am</span>{" "}
                Arunava Dutta.
              </h1>
              <div className="py-2">
                <h2 className="text-lg text-[#6EACDA] font-semibold mb-2">
                  I am a -
                </h2>
                <TextRotate />
              </div>
              <p className="mt-2 text-white font-light">
                <ul className="list-disc pl-5">
                  <li>
                    Developer passionate about building clean web applications
                    with simple, effective functionalities.
                  </li>
                  <li>
                    Enjoys turning designs into code and is eager to learn new
                    skills, tools, and languages.
                  </li>
                  <li>Experienced in building GUIs using Python.</li>
                  <li>
                    Has experience in solo full-stack projects and has
                    participated in hackathons.
                  </li>
                  <li>Often wins hackathons with team contributions.</li>
                  <li>
                    Currently learning app development with Flutter and Dart.
                  </li>
                  <li>Also learning DevOps.</li>
                </ul>
              </p>
              <div className="mt-6">
                <Link
                  to={
                    "https://drive.google.com/file/d/1ZTmD1gjbP1XSh3FyWEcCVA8QUl_MPtF7/view?usp=sharing"
                  }
                  target="_blank"
                  className="relative inline-flex items-center justify-center overflow-hidden rounded-md bg-[#6EACDA] px-4 py-2 text-lg font-bold text-black border-2 border-black transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
                >
                  <span className="text-sm">My Resume</span>
                  <div className="absolute inset-0 flex items-center justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-13deg)_translateX(100%)]">
                    <div className="relative w-8 h-full" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutMe;
