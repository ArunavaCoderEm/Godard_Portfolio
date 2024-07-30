import React from 'react'
import { Link } from 'react-router-dom'

export default function Exp():React.ReactNode {
  return (
    <>
    <div className='bg-white py-5 px-2'>
    <button className="flex items-center w-32 absolute right-0 left-0 mx-auto mb-2 backdrop-blur-sm bg-black/60 text-white font-semibold px-4 py-1 rounded-full shadow-lg sha focus:outline-none">
        <span className="mr-2">✨</span> Works <span className="ml-2">✨</span>
    </button>
        <div className='grid lg:grid-cols-3 mt-10 sm:grid-cols-1'>
            
            <div className='bg-gradient-to-bl from-[#FFF250] to-[#9b9107] m-3 rounded-lg border-1 sha border-black'>
                <Link to={"https://github.com/ArunavaCoderEm?tab=repositories"} target='_black' className='grid grid-cols-2 hover:scale-95 transition-all duration-300 p-4 gap-4'>
                    <img src="./proj.png" className='w-20 sha h-auto my-auto bg-[#D29EFB] rounded-lg' alt="Experience Icon" />
                    <div className='flex flex-col mr-5 justify-center'>
                        <h1 className='font-extrabold lg:text-4xl text-2xl'><span className='bg-black text-white p-1 rounded-lg mr-3'>2+</span>Years</h1>
                        <span className='text-lg my-2 font-bold text-right text-black'>Experience</span>
                    </div>
                    </Link>
            </div>
            
            <div className='bg-gradient-to-bl from-[#FFF250] to-[#9b9107] m-3 rounded-lg border-1 sha border-black'>
                <Link to={"https://github.com/ArunavaCoderEm?tab=repositories"} target='_black' className='grid grid-cols-2 hover:scale-95 transition-all duration-300 p-4 gap-4'>
                    <img src="./proj.png" className='w-20 sha h-auto my-auto bg-[#D29EFB] rounded-lg' alt="Experience Icon" />
                    <div className='flex flex-col mr-5 justify-center'>
                        <h1 className='font-extrabold lg:text-4xl text-2xl'><span className='bg-black text-white p-1 rounded-lg mr-3'>30+</span>Cool</h1>
                        <span className='text-lg my-2 font-bold text-right text-black'>Projects</span>
                    </div>
                    </Link>
            </div>
            <div className='bg-gradient-to-bl from-[#FFF250] to-[#9b9107] m-3 rounded-lg border-1 sha border-black'>
                <Link to={"https://www.linkedin.com/in/arunava-dutta-2b94bb253/"} target='_blank' className='grid hover:scale-95 transition-all duration-300 grid-cols-2 p-4 gap-4'>
                    <img src="./cln.png" className='w-20 sha h-auto my-auto bg-[#D29EFB] rounded-lg' alt="Experience Icon" />
                    <div className='flex flex-col justify-center'>
                        <h1 className='font-extrabold  lg:text-4xl text-2xl text-black'><span className='bg-black text-white p-1 rounded-lg'>5+</span> Happy</h1>
                        <span className='text-lg my-2 mx-5 font-bold text-right text-black'>Clients</span>
                    </div>
                    </Link>
            </div>
        </div>
        <h1 className='text-center text-lg my-5 mukta-medium'>"Everything is nothing and nothing is eveything"<br/><span className='font-bold mukta-bold'>.Lord Shiva.</span></h1>
    </div>
    </>
  )
}
