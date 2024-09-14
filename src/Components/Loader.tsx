import React from 'react'

export default function Loader():React.ReactNode {
  return (
    <div className='bg-[#0b0c0e] flex-col overflow-hidden mukta flex items-center justify-center h-screen'>
      <div className="loading-wave">
        <div className="loading-bar"></div>
        <div className="loading-bar"></div>
        <div className="loading-bar"></div>
        <div className="loading-bar"></div>
      </div>
        <h1 className='text-white my-4 font-thin text-xl'><span className='glow font-bold'>G</span>odar<span className='glow font-bold'>d</span></h1>
    </div>
  )
}
