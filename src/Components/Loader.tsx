import React from 'react'

export default function Loader():React.ReactNode {
  return (
    <div className='bg-[#0b0c0e] overflow-hidden flex items-center justify-center h-screen'>
      <div className="loading-wave">
        <div className="loading-bar"></div>
        <div className="loading-bar"></div>
        <div className="loading-bar"></div>
        <div className="loading-bar"></div>
      </div>
    </div>
  )
}
