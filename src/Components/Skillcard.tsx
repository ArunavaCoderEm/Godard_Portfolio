import React from 'react'

export default function Skillcard(props: any):React.ReactNode {
  return (
    <div className='mx-2 flex flex-col items-center justify-center bg-[#484747] px-3 py-1 my-2 rounded-lg'>
        <img src={props.img} className='p-1 rounded-full w-12 shawg' alt="" />
        <h1 className='font-bold text-white mukta'>{props.lbl}</h1>
    </div>  
  )
}
