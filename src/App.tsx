import React, { useEffect, useState } from "react"
import Page from "./Page"
import Loader from "./Components/Loader";
import { AnimatePresence, motion } from "framer-motion";

export default function App () :React.ReactNode {

  const [load, setload] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setload(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  setTimeout(() => {
    setload(false)
  }, 2500);


  return (
    <>
      <AnimatePresence>
        {load ? (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: 200 }} 
            transition={{ duration: 1 }}
          >
            <Loader />
          </motion.div>
        ) : (
          <motion.div
            key="page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <Page />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}