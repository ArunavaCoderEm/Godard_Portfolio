import React from 'react'

export default function Hero():React.ReactNode {
  return (
    <>
    <div className='grid grid-cols-1 gap-y-10'>
    <div className="h-screen hidden lg:flex absolute w-screen overflow-hidden justify-center items-center">
        <h1 className="text-center bg-clip-text text-transparent bg-gradient-to-b from-yellow-200 to-white font-extrabold tracking-widest txt opacity-30 selection:bg-[#FFF250]">GODARD</h1>
    </div>

        <div className='flex justify-center items-center'>
            <div className="blob bg-[url('./me.jpg')] mx-auto lg:mt-[5%] sm:mt-[10%]"></div>
            <h1 className="text-xl font-thin cursor-pointer hidden lg:flex h-[85vh] py-1 mb-1 right-0 text-[#FFF250] vertical-text">SCROLL DOWN</h1>
        </div>
        <div className='flex justify-center items-center'>
        <h1 className='text-center text-5xl bg-clip-text text-transparent bg-gradient-to-b from-yellow-200 to-white font-extrabold mt-3 selection:bg-[#FFF250] mukta-bold'>
        .Design in mind to code in reality.
        </h1>
        </div>
        <h2 className='mx-10 mb-10 selection:bg-[#FFF250] leading-relaxed text-center text-gray-600 text-xl font-extralight'>
        Coding is the art of turning ideas into reality through logic and creativity. It's a puzzle-solving adventure where every line of code builds something new, where bugs are challenges to overcome, and where each keystroke shapes the digital world around us.
        </h2>
    </div>
    </>
  )
}
