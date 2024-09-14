import React from 'react';
import TextRotate from '../Components/Rottext';
import { Link } from 'react-router-dom';

const AboutMe = (): React.ReactNode => {

  return (
    <>
      <button className="flex my-5 items-center mt-3 w-32 absolute right-0 left-0 mx-auto backdrop-blur-sm bg-[#16423C]/60 text-white font-semibold px-4 py-1 rounded-full shadow-lg sha focus:outline-none">
        <span className="mr-2">✨</span> About <span className="ml-2">✨</span>
      </button>
      <div id='about' className="flex items-center pt-10 justify-center min-h-screen py-5">
        <div className="max-w-6xl my-5 shadow-lg sha rounded-lg overflow-hidden grid grid-cols-1 md:grid-cols-2">
          <div className="md:flex-shrink-0 p-5 bg-gray-100 sha">
            <img
              className="h-[30rem] w-full sha rounded-lg object-cover"
              src="./meabb.jpg"
              alt="Profile"
            />
          </div>
          <div className='p-2'>
            <div className="p-8 bg-gradient-to-bl rounded-lg sha from-[#FFF250] to-[#a09606]">
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
                  I also have experience in building GUIs using python.
                </li>
                <li className='list-disx'>
                  Experienced in solo full-stack projects and has participated in hackathons.
                </li>
                <li className='list-disx'>
                  Often wins hackathons with team contributions.
                </li>
                <li className='list-disx'>
                  Learning app development in flutter - dart.
                </li>
                <li className='list-disx'>
                  Learning DevOps.
                </li>
              </p>
              <div className="mt-6">
                <Link 
                  to={"https://drive.google.com/file/d/1ZTmD1gjbP1XSh3FyWEcCVA8QUl_MPtF7/view?usp=sharing"} 
                  target='_blank'
                  className="group/button sha relative inline-flex items-center justify-center overflow-hidden rounded-md bg-[#D29EFB] px-4 py-1.5 text-xl text-black border-2 border-black transition-all duration-300 ease-in-out hover:scale-105 mukta font-bold hover:shadow-lg hover:shadow-gray-900/30">
                  <span className="text-sm">My Resume</span>
                  <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
                    <div className="relative h-full w-8 20" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default AboutMe;