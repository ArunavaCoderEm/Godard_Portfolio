import React, { useState } from 'react';

export default function Navbar(props:any):React.ReactNode {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const [menu, setmenu] = useState<string>("home")

  return (
    <header className="bg-white shadow-md">
      <div className="flex h-16 w-full items-center px-4 md:px-6">
      <a
      href={props.home}
      onClick={() => setmenu("home")}
      className="mr-6 flex items-center text-black hover:text-gray-800 transition-colors duration-300"
    >
      <span className="anton-sc-regular hover:tracking-wider transition-all duration-200 tracking-wide text-2xl shat selection:bg-[#FFF250]">
        <span className='font-extrabold'>.</span>
        GODARD
        <span className='font-extrabold'>.</span>
      </span>
    </a>
        <div className="ml-auto flex items-center md:hidden">
          <button onClick={toggleMenu} className="p-2 focus:outline-none">
            {menuOpen ? (
              <CloseIcon className="h-6 w-6" />
            ) : (
              <HamburgerIcon className="h-6 w-6" />
            )}
          </button>
        </div>
        <div className="hidden md:flex flex-1 justify-center">
          <nav className="flex selection:bg-[#FFF250] items-center gap-4 sm:gap-6">
            <a
            onClick={() => setmenu("home")}
            href={props.home} className= {`text-sm rounded-lg p-2 font-semibold hover:underline underline-offset-4 ${menu === 'home' ? "ctaac" : "cta"}`}>
              <span className='relative z-10'>Home</span>
            </a>
            <a 
            onClick={() => setmenu("about")}
            href={props.about} className={`text-sm rounded-lg p-2 font-semibold hover:underline underline-offset-4 ${menu === 'about' ? "ctaac" : "cta"}`}>
                <span className='relative z-10'>About</span>
            </a>
            <a 
            onClick={() => setmenu("skills")}
            href={props.skills} className={`text-sm rounded-lg p-2 font-semibold hover:underline underline-offset-4 ${menu === 'skills' ? "ctaac" : "cta"}`}>
                <span className='relative z-10'>skills</span>
            </a>
            <a 
            onClick={() => setmenu("projects")}
            href={props.projects} className={`text-sm rounded-lg p-2 font-semibold hover:underline underline-offset-4 ${menu === 'projects' ? "ctaac" : "cta"}`}>
                <span className='relative z-10'>Projects</span>
            </a>
          </nav>
        </div>
        <div className="hidden md:flex ml-auto p-2">
          <a
            href={props.contact}
            onClick={() => setmenu("")}
            className="inline-flex h-9  items-center justify-center rounded-md bg-[#FFF250] text-black px-4 py-2 text-sm font-semibold transition-all duration-200 shadow hover:translate-y-1 mukta-medium sha border-black border-2"
          >
             <svg xmlns="http://www.w3.org/2000/svg" className='w-4 mx-1' viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
            Contact Me
          </a>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden z-[10]">
          <nav className="flex px-4 flex-col rounded-lg items-center gap-4 py-4">
            <a 
            onClick={() => setmenu("home")}
            href={props.home} className={`text-sm rounded-lg p-2 ${menu === 'home' ? "bg-black sha text-white" : "bg-[#D29EFB]"} w-80 flex items-center justify-center font-semibold hover:underline underline-offset-4`}>
              Home
            </a>
            <a 
            onClick={() => setmenu("about")}
            href={props.about} className={`text-sm p-2 rounded-lg ${menu === 'about' ? "bg-black sha text-white" : "bg-[#D29EFB]"} w-80 flex items-center justify-center font-semibold hover:underline underline-offset-4`}>
              About
            </a>
            <a 
            onClick={() => setmenu("skills")}
            href={props.skills} className={`text-sm p-2 rounded-lg ${menu === 'skills' ? "bg-black sha text-white" : "bg-[#D29EFB]"} w-80 flex items-center justify-center font-semibold hover:underline underline-offset-4`}>
              Skills
            </a>
            <a 
            onClick={() => setmenu("projects")}
            href={props.projects} className={`text-sm p-2 rounded-lg ${menu === 'projects' ? "bg-black sha text-white" : "bg-[#D29EFB]"} w-80 flex items-center justify-center font-semibold hover:underline underline-offset-4`}>
              Projects
            </a>
            <a
              href={props.contact}
              onClick={() => setmenu("")}
              className="inline-flex h-9 p-2 items-center justify-center rounded-md bg-[#FFF250] text-black w-80 my-7 transition-all duration-200 shadow hover:translate-y-1 sha border-black border-2"
            >
               <svg xmlns="http://www.w3.org/2000/svg" className='w-4 mx-1' viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg>
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

function HamburgerIcon(props :any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function CloseIcon(props :any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="red"
      stroke="red"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}
