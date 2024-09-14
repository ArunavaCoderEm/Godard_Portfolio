import React, { useEffect, useState } from "react";
import Procard from "../Components/Procard";
import { ProjLbImg, projectsList } from "../Context/Project";
import { Link } from "react-router-dom";

export default function Projects(): React.ReactNode {
  const [pro, setpro] = useState<ProjLbImg[]>([]);

  useEffect(() => {
    setpro(projectsList);
  }, pro);

  return (
    <>
      <button className="flex shaw items-center mt-10 w-36 absolute right-0 left-0 mx-auto backdrop-blur-sm bg-black/60 text-white font-semibold px-4 py-1 rounded-full shadow-lg sha focus:outline-none">
        <span className="mr-2">✨</span> Projects{" "}
        <span className="ml-2">✨</span>
      </button>
      <div
        id="projects"
        className="mt-32 grid lg:grid-cols-4 md:grid-cols-2 p-4 gap-3 sm:grid-cols-1"
      >
        {pro.map((item, index) => (
          <div key={index} className="col-span-1">
            <Procard
              img={item.img}
              title={item.label}
              desc={item.desc}
              gh={item.ghlink}
              dep={item.deplink}
              auth={item.auth}
              used={item.used}
            />
          </div>
        ))}
      </div>

      <Link
        to={"https://github.com/ArunavaCoderEm?tab=repositories"}
        target="_blank"
        className="text-white mt-5 mb-10 mx-auto flex justify-center hover:text-[#6EACDA] transition-all duration-300 text-center inssha w-[22rem] p-1 rounded-full hover:translate-y-1"
      >
        🎁 More Projects Available On My GitHub 🎁
      </Link>
    </>
  );
}
