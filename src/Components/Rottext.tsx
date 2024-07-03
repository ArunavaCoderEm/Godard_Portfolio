
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const text = ['Comp. Coder', 'ML Buff', 'Web Dev.']

const TextFlip = () => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((state) => {
        if (state >= text.length - 1) return 0
        return state + 1
      })
    }, 2000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="relative flex w-full items-center justify-start py-4 text-center">
      <AnimatePresence mode="wait">
        <motion.div
          className="absolute cursor-text text-3xl sha rounded-md p-1 font-bold mukta tracking-tight text-black"
          key={index}
          initial={{ rotateX: 90, opacity: 0 }}
          animate={{ rotateX: 0, opacity: 1 }}
          exit={{ rotateX: -90, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {text[index]}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default TextFlip
