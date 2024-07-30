import React from 'react'

export default function Skillcard(props: any):React.ReactNode {
  return (
    <div className='mx-auto flex flex-col w-20 lg:w-24 md:w-24 items-center justify-center bg-[#484747] px-2 py-1 my-2 rounded-lg px-3'>
        <img src={props.img} className='p-1 rounded-full w-12 shawg' alt="" />
        <h1 className='font-bold text-white mukta'>{props.lbl}</h1>
    </div>  
  )
}
