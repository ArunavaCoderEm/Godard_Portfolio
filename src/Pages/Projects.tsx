import React, { useEffect, useState } from 'react'
import Procard from '../Components/Procard'
import { ProjLbImg, projectsList } from '../Context/Project'

export default function Projects():React.ReactNode {

  const [pro, setpro] = useState<ProjLbImg[]>([])

  useEffect(() => {
    setpro(projectsList)
  },pro)

  return (
    <>
      <button className="flex shaw items-center mt-28 w-36 absolute right-0 left-0 mx-auto backdrop-blur-sm bg-black/60 text-white font-semibold px-4 py-1 rounded-full shadow-lg sha focus:outline-none">
        <span className="mr-2">✨</span> Projects <span className="ml-2">✨</span>
    </button>
    <div className='mt-44 grid lg:grid-cols-4 sm:grid-cols-1'>
        {pro.map((item, index) => (
                <div key={index} className="col-span-1">
                    <Procard 
                        img = {item.img}
                        lbl = {item.label}
                        />
                </div>
            ))}
    </div>
    </>
  )
}
