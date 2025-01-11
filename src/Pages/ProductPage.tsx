import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { projectsList, ProjLbImg } from "../Context/Project";

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

  return (
    <motion.div
      initial={{ opacity: 0.5 }}
      whileInView={{ opacity: 1 }}
      transition={{
        delay: 0.0,
        duration: 0.4,
        ease: "easeInOut",
      }}
      className="grid m-5 z-[103] rounded-md min-h-screen bg-[#070707] grid-cols-1 gap-y-10 mt-20 p-1 md:p-3 mukta relative h-auto"
    >
      <div className="flex flex-col h-screen">

        <div className="bg-red-500 rounded-md flex-shrink-0 flex-grow-0 h-[15%] w-full">
          ui
        </div>


        <div className="bg-green-500 rounded-md flex-grow h-[70%] w-full">iou</div>


        <div className="bg-blue-500 rounded-md flex-shrink-0 flex-grow-0 h-[15%] w-full">
          end
        </div>

      </div>
    </motion.div>
  );
}
