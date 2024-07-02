import React from 'react'

export default function Exp():React.ReactNode {
  return (
    <>
    <div className='bg-white py-5 px-2'>
        <div className='grid lg:grid-cols-3 sm:grid-cols-1'>
            <div className='bg-[#FFF250] sha m-3 rounded-lg border-1 shadow border-black'>
                <div className='grid grid-cols-2 p-4 gap-4'>
                    <img src="./exp.png" className='w-20 sha h-auto my-auto bg-[#D29EFB] rounded-lg' alt="Experience Icon" />
                    <div className='flex flex-col mr-5 justify-center'>
                        <h1 className='font-extrabold lg:text-4xl text-2xl'><span className='bg-black text-white p-1 rounded-lg'>2+</span> Years</h1>
                        <span className='text-lg my-2 font-bold text-right text-black'>Experience</span>
                    </div>
                    </div>
                </div>
            <div className='bg-[#FFF250] m-3 rounded-lg border-1 sha border-black'>
            <div className='grid grid-cols-2 p-4 gap-4'>
                    <img src="./proj.png" className='w-20 sha h-auto my-auto bg-[#D29EFB] rounded-lg' alt="Experience Icon" />
                    <div className='flex flex-col mr-5 justify-center'>
                        <h1 className='font-extrabold lg:text-4xl text-2xl'><span className='bg-black text-white p-1 rounded-lg mr-3'>30+</span>Cool</h1>
                        <span className='text-lg my-2 font-bold text-right text-black'>Projects</span>
                    </div>
                    </div>
            </div>
            <div className='bg-[#FFF250] m-3 rounded-lg border-1 sha border-black'>
                <div className='grid grid-cols-2 p-4 gap-4'>
                    <img src="./cln.png" className='w-20 sha h-auto my-auto bg-[#D29EFB] rounded-lg' alt="Experience Icon" />
                    <div className='flex flex-col justify-center'>
                        <h1 className='font-extrabold  lg:text-4xl text-2xl text-black'><span className='bg-black text-white p-1 rounded-lg'>5+</span> Happy</h1>
                        <span className='text-lg my-2 mx-5 font-bold text-right text-black'>Clients</span>
                    </div>
                    </div>
            </div>
        </div>
        <h1 className='text-center text-lg my-5 mukta-medium'>Everything is nothing and nothing is eveything<br/><span className='font-bold mukta-bold'>.Lord Shiva.</span></h1>
    </div>
    </>
  )
}
