import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar():React.ReactNode {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const [menu, setmenu] = useState<string>("home")

  return (
    <header className="bg-white shadow-md">
      <div className="flex h-16 w-full items-center px-4 md:px-6">
      <Link
      to="/"
      onClick={() => setmenu("home")}
      className="mr-6 flex items-center text-black hover:text-gray-800 transition-colors duration-300"
    >
      <span className="anton-sc-regular hover:tracking-wider transition-all duration-200 tracking-wide text-2xl shat selection:bg-[#FFF250]">
        <span className='font-extrabold'>.</span>
        GODARD
        <span className='font-extrabold'>.</span>
      </span>
    </Link>
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
            <Link
            onClick={() => setmenu("home")}
            to="/" className= {`text-sm rounded-lg p-2 font-semibold hover:underline underline-offset-4 ${menu === 'home' ? "ctaac" : "cta"}`}>
              <span className='relative z-10'>Home</span>
            </Link>
            <Link 
            onClick={() => setmenu("about")}
            to="/" className={`text-sm rounded-lg p-2 font-semibold hover:underline underline-offset-4 ${menu === 'about' ? "ctaac" : "cta"}`}>
                <span className='relative z-10'>About</span>
            </Link>
            <Link 
            onClick={() => setmenu("projets")}
            to="/" className={`text-sm rounded-lg p-2 font-semibold hover:underline underline-offset-4 ${menu === 'projects' ? "ctaac" : "cta"}`}>
                <span className='relative z-10'>Projects</span>
            </Link>
            <Link 
            onClick={() => setmenu("testimonial")}
            to="/" className={`text-sm rounded-lg p-2 font-semibold hover:underline underline-offset-4 ${menu === 'testimonial' ? "ctaac" : "cta"}`}>
                <span className='relative z-10'>Testimonials</span>
            </Link>
          </nav>
        </div>
        <div className="hidden md:flex ml-auto p-2">
          <Link
            to="/"
            className="inline-flex h-9  items-center justify-center rounded-md bg-[#FFF250] text-black px-4 py-2 text-sm font-semibold transition-all duration-200 shadow hover:translate-y-1 mukta-medium sha border-black border-2"
          >
            Contact Me
          </Link>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden z-[10]">
          <nav className="flex px-4 flex-col rounded-lg items-center gap-4 py-4">
            <Link 
            onClick={() => setmenu("home")}
            to="/" className={`text-sm rounded-lg p-2 ${menu === 'home' ? "bg-black sha text-white" : "bg-[#D29EFB]"} w-80 flex items-center justify-center font-semibold hover:underline underline-offset-4`}>
              Home
            </Link>
            <Link 
            onClick={() => setmenu("about")}
            to="/" className={`text-sm p-2 rounded-lg ${menu === 'about' ? "bg-black sha text-white" : "bg-[#D29EFB]"} w-80 flex items-center justify-center font-semibold hover:underline underline-offset-4`}>
              About
            </Link>
            <Link 
            onClick={() => setmenu("projects")}
            to="/" className={`text-sm p-2 rounded-lg ${menu === 'projects' ? "bg-black sha text-white" : "bg-[#D29EFB]"} w-80 flex items-center justify-center font-semibold hover:underline underline-offset-4`}>
              Projects
            </Link>
            <Link 
            onClick={() => setmenu("testimonial")}
            to="/" className={`text-sm p-2 rounded-lg ${menu === 'testimonial' ? "bg-black sha text-white" : "bg-[#D29EFB]"} w-80 flex items-center justify-center font-semibold hover:underline underline-offset-4`}>
              Testimonials
            </Link>
            <Link
              to="/"
              className="inline-flex h-9 p-2 items-center justify-center rounded-md bg-[#FFF250] text-black w-80 my-7 transition-all duration-200 shadow hover:translate-y-1 sha border-black border-2"
            >
              Contact
            </Link>
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
