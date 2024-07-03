import React from 'react';
import TextRotate from '../Components/Rottext';

const AboutMe = ():React.ReactNode => {
  return (
    <>
    <button className="flex items-center my-5 w-32 absolute right-0 left-0 mx-auto backdrop-blur-sm bg-black/60 text-white font-semibold px-4 py-1 rounded-full shadow-lg sha focus:outline-none">
        <span className="mr-2">✨</span> About <span className="ml-2">✨</span>
    </button>
    <div className="bg-gray-100 flex items-center pt-5 justify-center min-h-screen py-5">
      <div className="max-w-4xl bg-white shadow-lg sha rounded-lg overflow-hidden grid grid-cols-1 md:grid-cols-2">
        <div className="md:flex-shrink-0 sha">
          <img
            className="h-[30rem] w-full object-cover"
            src="./meab.JPG"
            alt="Profile"
            />
        </div>
        <div className="p-8 bg-gradient-to-bl from-[#FFF250] to-[#a09606]">
          <div className="uppercase tracking-wide text-xl text-black font-extrabold mukta">Hello 👋🏼 !</div>
          <h1 className="mt-2 text-2xl leading-tight font-medium text-black"><span className='text-white font-extrabold p-1 mukta drop-shadow-lg'>I am</span> Arunava Dutta.</h1>
          <div className='py-2 mukta'>
            <h2 className='mx-1 my-2 w-full text-lg font-bold'>I am a -</h2>
            <TextRotate />
          </div>
          <p className="mt-2 text-black font-thin">
            <li className='list-disx'>
            Developer passionate about building clean web applications with simple, effective functionalities.
            </li>
            <li className='list-disx'>
            Enjoys turning designs into code and is eager to learn new skills, tools, and languages.
            </li>
            <li className='list-disx'>
            Experienced in solo full-stack projects and has participated in hackathons.
            </li>
            <li className='list-disx'>
            Often wins hackathons with team contributions.
            </li>
          </p>
          <div className="mt-6">
            <button className="px-4 py-2 bg-[#D29EFB] rounded-md font-semibold mukta hover:translate-x-2 transition-all duration-300 focus:outline-none mukta tracking-wide border-2 border-black">
              My Resume
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default AboutMe;
