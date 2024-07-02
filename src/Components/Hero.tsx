import React from 'react'

export default function Hero():React.ReactNode {
  return (
    <>
    <div className='grid grid-cols-1 gap-y-10'>
    <div className="h-screen hidden lg:flex absolute w-screen overflow-hidden justify-center items-center">
        <h1 className="text-white text-center font-extrabold tracking-widest txt opacity-10">GODARD</h1>
    </div>



        <div className='flex justify-center items-center'>
            <div className="blob mx-auto lg:mt-[5%] sm:mt-[10%]"></div>
        </div>
        <div className='flex justify-center items-center'>
            <h1 className='text-center text-white text-4xl font-extrabold'>Hola 👋</h1>
        </div>
    </div>
    </>
  )
}
