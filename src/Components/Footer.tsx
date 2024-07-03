import React from 'react'
import { Link } from 'react-router-dom'

const MinimalSocialsFooter = (props:any):React.ReactNode => {
  return (
    <div className="flex w-full flex-col items-center justify-center sm:flex-row gap-5 border-t border-gray-900/5 bg-[#121316] dark:border-white/5">
      <h1 className="text-white p-3">© 2024 Arunava Dutta. All rights reserved.</h1>
      <div className="flex items-center">
        <h1 className="text-[#FFF250] p-3">Developed by Arunava Dutta</h1>
        <span className="text-gray-400 mx-2">|</span>
        <a href={props.contact} className="text-[#FFF250] hover:underline">
          Contact
        </a>
        <span className="text-gray-400 mx-2">|</span>
        <Link to="/privacy" className="text-[#FFF250] hover:underline">
          Privacy Policy
        </Link>
      </div>
    </div>
  )
}

export default MinimalSocialsFooter
