import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Exp(): React.ReactNode {
  return (
    <div className="py-5 px-2">
      <button className="flex items-center w-32 mx-auto mb-4 backdrop-blur-sm bg-black/60 text-white font-semibold px-4 py-1 rounded-full shadow-lg sha focus:outline-none">
        <span className="mr-2">✨</span> Works <span className="ml-2">✨</span>
      </button>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="bg-gradient-to-br from-[#6EACDA] to-[#4B92DB] rounded-lg border-2 border-black shadow-lg"
        >
          <Link to="https://github.com/ArunavaCoderEm?tab=repositories" target='_blank' className='flex flex-col md:flex-row items-center p-6 gap-4 bg-white rounded-lg hover:bg-[#6EACDA] transition-all duration-300'>
            <img src="./hi22.png" className='w-24 h-auto rounded-lg' alt="Experience Icon" />
            <div className='flex flex-col'>
              <h1 className='font-extrabold text-2xl lg:text-3xl'><span className='bg-black text-white p-1 rounded-lg mr-3'>2+</span> Years</h1>
              <span className='text-lg font-bold text-black mt-3'>Experience</span>
            </div>
          </Link>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="bg-gradient-to-br from-[#6EACDA] to-[#4B92DB] rounded-lg border-2 border-black shadow-lg"
        >
          <Link to="https://github.com/ArunavaCoderEm?tab=repositories" target='_blank' className='flex flex-col md:flex-row items-center p-6 gap-4 bg-white rounded-lg hover:bg-[#6EACDA] transition-all duration-300'>
            <img src="./hi33.png" className='w-24 h-auto rounded-lg' alt="Experience Icon" />
            <div className='flex flex-col'>
              <h1 className='font-extrabold text-2xl lg:text-3xl'><span className='bg-black text-white p-1 rounded-lg mr-3'>30+</span> Cool</h1>
              <span className='text-lg font-bold text-black mt-3'>Projects</span>
            </div>
          </Link>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="bg-gradient-to-br from-[#6EACDA] to-[#4B92DB] rounded-lg border-2 border-black shadow-lg"
        >
          <Link to="https://www.linkedin.com/in/arunava-dutta-2b94bb253/" target='_blank' className='flex flex-col md:flex-row items-center p-6 gap-4 bg-white rounded-lg hover:bg-[#6EACDA] transition-all duration-300'>
            <img src="./cln.png" className='w-24 h-auto rounded-lg' alt="Experience Icon" />
            <div className='flex flex-col'>
              <h1 className='font-extrabold text-2xl lg:text-3xl'><span className='bg-black text-white p-1 rounded-lg mr-3'>5+</span> Happy</h1>
              <span className='text-lg font-bold text-black mt-3'>Clients</span>
            </div>
          </Link>
        </motion.div>
        
      </div>
      
      <h1 className='text-center text-lg my-5 mukta-medium'>
        "Everything is nothing and nothing is everything"<br />
        <span className='font-bold mukta-bold'>.Lord Shiva.</span>
      </h1>
    </div>
  );
}
