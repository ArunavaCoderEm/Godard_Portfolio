import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { projectsList, ProjLbImg } from "../Context/Project";
import { Airplay, ArrowLeftCircle, ArrowRightCircle, User } from "lucide-react";

export default function ProductPage(): React.ReactNode {
  const param = useParams();

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
      initial={{ opacity: 0.5 }}
      whileInView={{ opacity: 1 }}
      transition={{
        delay: 0.0,
        duration: 0.4,
        ease: "easeInOut",
      }}
      className="grid m-5 z-[103] rounded-md min-h-screen bg-[#070707]/70 grid-cols-1 gap-y-10 mt-20 p-1 md:p-3 mukta relative h-auto"
    >
      <div className="flex flex-col h-screen">
        <div className="rounded-md flex md:flex-row flex-col justify-between items-center h-[15%] w-full px-3 py-2">
          <h1 className="text-3xl lg:text-5xl font-extrabold bg-clip-text bg-gradient-to-b text-transparent from-[#6EACDA] via-[#6EACDA] to-[#fff] mukta text-left">
            {element.label}
          </h1>
          <h2 className="text-black flex items-center gap-2 bg-white px-3 py-2 rounded-md">
            <User className="w-4 h-4" />
            {element.auth}
          </h2>
        </div>

        <div className="rounded-md gap-2 flex-grow h-[70%] w-full grid md:grid-cols-2 grid-cols-1">
          <div className="p-3 flex items-center justify-center">
            <img src={element.img} className="bg-red-500 h-96 w-full object-fit rounded-md" alt="img" />
          </div>
          <div className="p-3 flex items-center justify-center">
            <h2 className="text-white">{element.desc}</h2>
          </div>
        </div>

        <div className="items-center justify-between rounded-md flex md:flex-row p-3 flex-col h-[15%] w-full">
          <div className="flex p-3 gap-2 items-center">
            {element.used.split(",").map((item: string, idx: number) => {
              return (
                <>
                  <h3
                    key={idx}
                    className="text-black flex items-center gap-2 bg-white rounded-md px-3 py-2"
                  >
                    <Airplay className="w-4 h-4" />
                    {item}
                  </h3>
                </>
              );
            })}
          </div>
          <div className="flex items-center justify-center gap-3">
            <button disabled={id === 0} className={`bg-[#6EACDA] px-3 py-2 hover:opacity-90 transition-all duration-150 rounded-md text-black tracking-tight flex items-center gap-2 ${id === 0 ? "cursor-not-allowed" : ""}`}>
              <ArrowLeftCircle className="w-4 h-4" /> Prev
            </button>
            <button disabled={id === len - 1} className={`bg-[#6EACDA] px-3 py-2 hover:opacity-90 transition-all duration-150 rounded-md text-black tracking-tight flex items-center gap-2 ${id === len - 1 ? "cursor-not-allowed" : ""}`}>
              Next <ArrowRightCircle className="w-4 h-4" />{" "}
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
