import React from 'react'

export default function About():React.ReactNode {
  return (
    <>
    <button className="flex items-center w-32 absolute right-0 left-0 mx-auto mb-2 backdrop-blur-sm bg-black/60 text-white font-semibold px-4 py-1 rounded-full shadow-lg sha focus:outline-none">
        <span className="mr-2">✨</span> About <span className="ml-2">✨</span>
    </button>
    </>
  )
}
