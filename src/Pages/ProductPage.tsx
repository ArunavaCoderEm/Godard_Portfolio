import { motion } from "framer-motion";
import React from "react";

export default function ProductPage(): React.ReactNode {
  return (
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
      ProductPage
    </motion.div>
  );
}
