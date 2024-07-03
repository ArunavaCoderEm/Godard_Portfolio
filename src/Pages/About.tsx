// src/components/AboutMe.jsx

import React from 'react';

const AboutMe = ():React.ReactNode => {
  return (
    <>
      <button className="flex items-center w-32 mt-5 absolute right-0 left-0 mx-auto mb-2 backdrop-blur-sm bg-black/60 text-white font-semibold px-4 py-1 rounded-full shadow-lg sha focus:outline-none">
        <span className="mr-2">✨</span> About <span className="ml-2">✨</span>
    </button>
    <div className="bg-gray-100 flex items-center justify-center min-h-screen py-5">
      <div className="max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden grid grid-cols-1 md:grid-cols-2">
        <div className="md:flex-shrink-0 sha">
          <img
            className="h-full w-full object-cover"
            src="./me.jpg"
            alt="Profile"
            />
        </div>
        <div className="p-8 bg-[#FFF250]">
          <div className="uppercase tracking-wide text-xl text-black font-extrabold mukta">Hello 👋 !</div>
          <h1 className="mt-2 text-2xl leading-tight font-medium text-black">Arunava Dutta</h1>
          <p className="mt-2 text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
          </p>
          <div className="mt-4">
            <a
              href="#contact"
              className="text-indigo-500 hover:text-indigo-700 font-semibold text-sm"
              >
              Contact Me
            </a>
          </div>
          <div className="mt-6">
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 focus:outline-none">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default AboutMe;
