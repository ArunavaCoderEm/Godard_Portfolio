import React from 'react';
import TextRotate from '../Components/Rottext';
import { Link } from 'react-router-dom';

const AboutMe = ():React.ReactNode => {

  return (
    <>
    <button className="flex items-center my-5 w-32 absolute right-0 left-0 mx-auto backdrop-blur-sm bg-black/60 text-white font-semibold px-4 py-1 rounded-full shadow-lg sha focus:outline-none">
        <span className="mr-2">✨</span> About <span className="ml-2">✨</span>
    </button>
    <div id='about' className="bg-white flex items-center pt-10 justify-center min-h-screen py-5">
      <div className="max-w-4xl my-5 bg-white shadow-lg sha rounded-lg overflow-hidden grid grid-cols-1 md:grid-cols-2">
        <div className="md:flex-shrink-0 p-5 bg-gray-100 sha">
          <img
            className="h-[30rem] w-full sha rounded-lg object-cover"
            src="./meabb.jpg"
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
          <Link 
          to={"https://drive.google.com/file/d/1aPWVMnXyPKCn_2wuS9aA_W4IbmVrlca6/view?usp=sharing"} 
          target='_blank'
          className="group/button sha relative inline-flex items-center justify-center overflow-hidden rounded-md bg-[#D29EFB] px-4 py-1.5 text-xl text-black border-2 border-black transition-all duration-300 ease-in-out hover:scale-105 mukta font-bold hover:shadow-lg hover:shadow-gray-900/30">
            <span className="text-sm">My Resume</span>
            <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
              <div className="relative h-full w-8 bg-white/20" />
            </div>
          </Link>
          </div>
        </div>
      </div>
    </div>
      <div className='bg-gradient-to-bl sha from-[#D29EFB] to-[#6e0eb7] absolute right-0 left-0 mx-auto w-80 p-4 rounded-lg mt-[-30px]'>
      <h2 className='text-center text-xl font-extrabold backdrop-blur-sm bg-white/30 inssha p-1 rounded-full mukta mb-3'>📱 My Socials 📱</h2>
        <div className='grid grid-cols-5 gap-4'>
          <Link to="https://github.com/ArunavaCoderEm" className='transition-all duration-200 hover:scale-90'>
            <img src="./github.png" className='w-10 shawg' alt="" />
          </Link>
          <Link to="https://www.linkedin.com/in/arunava-dutta-2b94bb253/" className='transition-all duration-200 hover:scale-90'>
            <img src="./li.png" className='w-10 shawg rounded-full' alt="" />
          </Link>
          <Link to="https://www.instagram.com/goduttaem/" className='transition-all duration-200 hover:scale-90'>
            <img src="./insta.jpg" className='w-10 shawg rounded-full' alt="" />
          </Link>
          <Link to="https://x.com/GoDutta" className='transition-all duration-200 hover:scale-90'>
            <img src="./x.jpg" className='w-10 shawg rounded-full' alt="" />
          </Link>
          <Link to="https://discord.com/invite/39uaVFMgEH" className='transition-all duration-200 hover:scale-90'>
            <img src="./disc.png" className='w-10 shawg rounded-full' alt="" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
