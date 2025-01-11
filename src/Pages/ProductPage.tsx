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
            behavior: "smooth"
        })
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
      className="grid m-5 rounded-md min-h-[35rem] bg-red-500 grid-cols-1 gap-y-10 mt-20 mukta relative h-auto"
    > 
        lk
    </motion.div>
  );
}
