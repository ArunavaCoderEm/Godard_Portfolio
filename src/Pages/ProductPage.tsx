import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { projectsList, ProjLbImg } from "../Context/Project";
import {
  Airplay,
  ArrowLeftCircle,
  ArrowRightCircle,
  GitCommit,
  Link2,
  TypeOutline,
  User,
} from "lucide-react";

export default function ProductPage(): React.ReactNode {
  const param = useParams();

  const nav = useNavigate();
  const id: number | undefined = Number(param.id);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [param.id]);

  const element: ProjLbImg = projectsList[id ?? 0];

  const len: number = projectsList.length;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
      className="min-h-screen bg-gradient-to-b from-[#070707] to-[#121212] p-4 mt-20 mukta md:p-6 lg:p-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col h-full space-y-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0 bg-black/40 p-6 rounded-2xl backdrop-blur-sm">
            <div className="space-y-2">
              <motion.h1
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-4xl lg:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#6EACDA] via-[#8BC6EC] to-[#9FACE6]"
              >
                {element.label}
              </motion.h1>
            </div>
            <div className="flex items-center space-x-3">
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-xl flex items-center space-x-2">
                <User className="w-5 h-5 text-[#6EACDA]" />
                <span className="text-white font-medium">{element.auth}</span>
              </div>
              {element.type && (
                <p className="text-black rounded-md flex items-center gap-2 bg-white px-3 py-1 text-lg">
                  <TypeOutline className="w-4 h-4" />
                  {element.type}
                </p>
              )}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 h-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-[#6EACDA] to-[#9FACE6] rounded-2xl blur opacity-30 group-hover:opacity-50 h-[510px] transition duration-300"></div>
              <div className="relative">
                <img
                  src={element.img}
                  className="w-full h-[500px] object-cover rounded-xl shadow-2xl"
                  alt={element.label}
                />
              </div>
              <div className="mt-5 p-2 flex gap-2 justify-center items-center">
                <button className="bg-white text-black px-3 py-2 flex items-center gap-2 rounded-md">
                  <Link2 className="w-4" />
                  Live
                </button>
                <button className="bg-white text-black px-3 py-2 flex items-center gap-2 rounded-md">
                  <GitCommit />
                  Github
                </button>
              </div>
            </motion.div>

            <div className="flex flex-col justify-between space-y-6">
              <div className="bg-black/80 p-6 rounded-xl backdrop-blur-sm">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Project Overview
                </h2>
                <p className="text-[#6EACDA] leading-relaxed text-lg">
                  {element.desc}
                </p>
                <p className="text-gray-300 mt-6 leading-relaxed text-lg">
                  {element.maxdesc}
                </p>
                <p className="text-[#6EACDA] font-bold mt-6 leading-relaxed text-lg">
                  {element.speciality}
                </p>
                <div className="mt-8">
                  <h2 className="text-2xl font-bold text-white mb-4">
                    Project Team
                  </h2>
                  <div>
                    {element?.team?.map((itm: string, idx: number) => {
                      return (
                        <p
                          className="bg-[#6EACDA]/40 p-2 text-white ml-2 inline-block rounded-md"
                          key={idx}
                        >
                          {itm}
                        </p>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-3">
                  {element.used.split(",").map((item: string, idx: number) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-xl flex items-center space-x-2"
                    >
                      <Airplay className="w-4 h-4 text-[#6EACDA]" />
                      <span className="text-white">{item.trim()}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center pt-8">
            <button
              onClick={() =>
                nav(`/projectpage/${id - 1}/${projectsList[id - 1].label}`)
              }
              disabled={id === 0}
              className={`flex items-center space-x-2 px-6 py-3 rounded-xl transition-all duration-300 ${
                id === 0
                  ? "bg-gray-700/50 cursor-not-allowed"
                  : "bg-gradient-to-r from-[#6EACDA] to-[#9FACE6] hover:shadow-lg hover:shadow-[#6EACDA]/20"
              }`}
            >
              <ArrowLeftCircle className="w-5 h-5" />
              <span className="font-semibold">Previous Project</span>
            </button>

            <button
              onClick={() =>
                nav(`/projectpage/${id + 1}/${projectsList[id + 1].label}`)
              }
              disabled={id === len - 1}
              className={`flex items-center space-x-2 px-6 py-3 rounded-xl transition-all duration-300 ${
                id === len - 1
                  ? "bg-gray-700/50 cursor-not-allowed"
                  : "bg-gradient-to-r from-[#9FACE6] to-[#6EACDA] hover:shadow-lg hover:shadow-[#6EACDA]/20"
              }`}
            >
              <span className="font-semibold">Next Project</span>
              <ArrowRightCircle className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
