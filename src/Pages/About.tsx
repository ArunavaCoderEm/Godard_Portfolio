// src/components/AboutMe.jsx

import React from 'react';
import TextRotate from '../Components/Rottext';

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
        <div className="p-8 bg-gradient-to-bl from-[#FFF250] to-[#a09606]">
          <div className="uppercase tracking-wide text-xl text-black font-extrabold mukta">Hello 👋 !</div>
          <h1 className="mt-2 text-2xl leading-tight font-medium text-black"><span className='text-white font-extrabold p-1 mukta'>I am</span> Arunava Dutta.</h1>
          <div className='py-2 mukta'>
            <h2 className='mx-1 w-full'>I am a</h2>
            <TextRotate />
          </div>
          <p className="mt-2 text-black font-thin">
          I’m a developer passionate about building clean web applications with simple, effective functionalities. I love turning designs into code and am always eager to learn new skills, tools, and languages. I've worked on numerous solo full-stack projects and participated in hackathons, often winning with my team.
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
