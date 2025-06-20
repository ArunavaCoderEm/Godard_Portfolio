import React, { useEffect, useState } from "react";
import Procard from "../Components/Procard";
import { ProjLbImg, projectsList } from "../Context/Project";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import MWork from "../Icons/MWork";

export default function Projects(): React.ReactNode {
  const [pro, setpro] = useState<ProjLbImg[]>([]);

  useEffect(() => {
    setpro(projectsList);
  }, pro);

  return (
    <>
      <motion.button
        initial={{ opacity: 0.5, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.0,
          duration: 0.4,
          ease: "easeInOut",
        }}
        className="flex items-center mt-10 w-36 absolute right-0 left-0 mx-auto backdrop-blur-sm bg-black/60 text-white font-semibold px-4 py-1 rounded-full mukta focus:outline-none"
      >
        <span className="mr-2 mukta">✨</span> Projects{" "}
        <span className="ml-2">✨</span>
      </motion.button>
      <motion.div
        initial={{ opacity: 0.5, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.0,
          duration: 0.4,
          ease: "easeInOut",
        }}
        id="projects"
        className="mt-32 grid lg:grid-cols-4 md:grid-cols-2 p-4 gap-3 sm:grid-cols-1"
      >
        {pro.map((item, idx) => (
          <div key={idx} className="col-span-1">
            <Link 
              to={`/projectpage/${item.index}/${item.label}`}
              >
              <Procard
                img={item.img}
                title={item.label}
                desc={item.desc}
                type={item.type}
                gh={item.ghlink}
                dep={item.deplink}
                auth={item.auth}
                used={item.used}
              />
            </Link>
          </div>
        ))}
      </motion.div>

      <Link
        to={"https://github.com/ArunavaCoderEm?tab=repositories"}
        target="_blank"
        className="text-white mt-5 mb-10 mx-auto bg-black/80 sha flex justify-center hover:text-[#6EACDA] transition-all items-center gap-2 duration-300 text-center mukta w-[22rem] p-1 rounded-full hover:translate-y-1"
      >
        <MWork /> More Projects On My GitHub →
      </Link>
    </>
  );
}
