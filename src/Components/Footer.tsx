import React from 'react'

const MinimalSocialsFooter = ():React.ReactNode => {
  return (
    <div className="flex w-full flex-col items-center justify-between gap-5 border-t border-gray-900/5 pt-8 sm:flex-row dark:border-white/5">
      <p className="text-xs text-gray-600 dark:text-gray-100">
        Copyright © {new Date().getFullYear()}{' '}
        <a
          href="https://twitter.com/justansub"
          className=" text-red-500 underline hover:text-red-500 "
        >
          SyntaxUI
        </a>{' '}
      </p>
    </div>
  )
}

export default MinimalSocialsFooter
