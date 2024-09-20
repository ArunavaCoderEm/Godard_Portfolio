import React, { useEffect, useState } from "react";
import Skillcard from "../Components/Skillcard";
import { LabeledValue, skills, tools } from "../Context/SkillsInt";
import { motion } from "framer-motion";
import Tools from "../Icons/Tools";
import SkillsI from "../Icons/Skills";

const Skills = (): React.ReactNode => {
  const [activeTab, setActiveTab] = useState<string>("skills");

  const [skill, setskill] = useState<LabeledValue[]>([]);
  const [tool, settools] = useState<LabeledValue[]>([]);

  useEffect(() => {
    setskill(skills);
    settools(tools);
  }, [skill]);

  return (
    <>
      <motion.button
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.0,
          duration: 0.4,
          ease: "easeInOut",
        }}
        className="flex shaw items-center mt-10 w-32 absolute right-0 left-0 mx-auto backdrop-blur-sm bg-black/60 text-white font-semibold px-4 py-1 rounded-full shadow-lg sha focus:outline-none"
      >
        <span className="mr-2">✨</span> Skills <span className="ml-2">✨</span>
      </motion.button>
      <motion.div
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.0,
          duration: 0.4,
          ease: "easeInOut",
        }}
        id="skills"
        className="grid lg:grid-cols-2 mt-32 sm:grid-cols-1"
      >
        <div className="p-5 flex flex-col items-center">
          <h1 className="text-4xl p-5 bg-clip-text text-transparent bg-gradient-to-b from-[#6EACDA] to-white font-extrabold">
            What Are My Programming Skills ?
          </h1>
          <h3 className="px-5 lg:ml-2 my-2 text-white/80 mukta font-normal rounded-lg p-5">
            My expertise lies in{" "}
            <span className="font-semibold text-[#6EACDA]">
              Frontend development,{" "}
            </span>
            creating engaging UIs for{" "}
            <span className="font-semibold text-[#6EACDA]">websites</span> and{" "}
            <span className="font-semibold text-[#6EACDA]">apps.</span> I'm also
            comfortable with{" "}
            <span className="font-semibold text-[#6EACDA]">
              Backend development,
            </span>{" "}
            giving me a broader skillset. To stay sharp, I tackle competitive
            coding challenges on platforms like{" "}
            <span className="font-semibold text-[#6EACDA]">
              HackerRank (5-⭐)
            </span>{" "}
            and <span className="font-semibold text-[#6EACDA]">LeetCode.</span>{" "}
            It's a great way to learn, grow, and enjoy solving problems !
          </h3>

          <div className="my-2">
            <img src="https://leetcard.jacoblin.cool/Arunava_Dutta?theme=dark&font=raleway&radius=10" />
          </div>
          <div className="w-80 mt-5 flex items-center justify-center">
            <button
              onClick={() => setActiveTab("skills")}
              className="relative mx-1 inline-flex items-center justify-start  px-5 py-3 overflow-hidden font-bold rounded-full group"
            >
              <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-[#6EACDA] opacity-[3%]"></span>
              <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-[#6EACDA] opacity-100 group-hover:-translate-x-8"></span>
              <span
                className={`relative flex gap-2 items-center w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900 ${
                  activeTab === "skills"
                    ? "underline decoration-2 underline-offset-4"
                    : ""
                }`}
              >
                <SkillsI /> My Skills
              </span>
              <span className="absolute inset-0 border-2 border-[#6EACDA] rounded-full"></span>
            </button>
            <button
              onClick={() => setActiveTab("tools")}
              className="relative mx-1 inline-flex items-center justify-start  px-5 py-3 overflow-hidden font-bold rounded-full group"
            >
              <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
              <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
              <span
                className={`relative flex gap-2 items-center w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900 ${
                  activeTab === "tools"
                    ? "underline decoration-2 underline-offset-4"
                    : ""
                }`}
              >
                <Tools /> My Tools
              </span>
              <span className="absolute inset-0 border-2 border-white rounded-full"></span>
            </button>
          </div>
        </div>
        <div className="p-5 bg-gradient-to-bl from-[#6EACDA] to-[#6EACDA]/60 m-2 rounded-lg">
          {activeTab === "skills" ? (
            <div className="grid gap-1 mx-auto place-items-center my-16 lg:grid-cols-5 grid-cols-4">
              {skill.map((item, index) => (
                <div
                  key={index}
                  className="col-span-1 flex flex-col justify-center items-center"
                >
                  <Skillcard img={item.img} lbl={item.label} />
                </div>
              ))}
            </div>
          ) : (
            <div className="grid gap-1 lg:grid-cols-5 grid-cols-4 my-16 ">
              {tool.map((item, index) => (
                <div key={index} className="col-span-1">
                  <Skillcard img={item.img} lbl={item.label} />
                </div>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </>
  );
};

export default Skills;
