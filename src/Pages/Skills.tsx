import React, { useEffect, useState } from 'react';
import Skillcard from '../Components/Skillcard';
import { LabeledValue, skills, tools } from '../Context/SkillsInt';

const Skills = ():React.ReactNode => {

  const [activeTab, setActiveTab] = useState<string>("skills");

    const [skill, setskill] = useState<LabeledValue[]>([])
    const [tool, settools] = useState<LabeledValue[]>([])
  
  useEffect(() => {
      setskill(skills);
      settools(tools);
  },[skill])


  return (
   <>
    <button className="flex shaw items-center mt-32 w-32 absolute right-0 left-0 mx-auto backdrop-blur-sm bg-black/60 text-white font-semibold px-4 py-1 rounded-full shadow-lg sha focus:outline-none">
        <span className="mr-2">✨</span> Skills <span className="ml-2">✨</span>
    </button>
    <div id='skills' className='grid lg:grid-cols-2 mt-48 sm:grid-cols-1'>
        <div className='p-5 flex flex-col items-center'>
            <h1 className='text-4xl p-5 bg-clip-text text-transparent bg-gradient-to-b from-yellow-400 to-white font-extrabold'>
            What Are My Programming Skills ?
            </h1>
            <h3 className='px-5 my-2 text-gray-400 mukta font-normal rounded-lg p-5'>
            My expertise lies in front-end development,
            where I build the user interfaces that make websites and apps engaging. I'm also comfortable on the back-end, giving me a broader development skillset. To stay sharp, I tackle competitive coding challenges on platforms like HackerRank (5-⭐) and LeetCode (340+). It's a great way to learn, grow, and enjoy the thrill of solving problems !  
            </h3>
            
            <div className='w-80 mt-5 flex items-center justify-center'>
            <button 
                onClick={() => setActiveTab('skills')}
            className="relative mx-1 inline-flex items-center justify-start  px-5 py-3 overflow-hidden font-bold rounded-full group">
                <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-[#FFF250] opacity-[3%]"></span>
                <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-[#FFF250] opacity-100 group-hover:-translate-x-8"></span>
                <span className={`relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900 ${activeTab === 'skills' ? "underline decoration-2 underline-offset-4" : ""}`}>My Skills</span>
                <span className="absolute inset-0 border-2 border-[#FFF250] rounded-full"></span>
            </button>
            <button 
             onClick={() => setActiveTab('tools')}
            className="relative mx-1 inline-flex items-center justify-start  px-5 py-3 overflow-hidden font-bold rounded-full group">
                <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
                <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
                <span className={`relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900 ${activeTab === 'tools' ? "underline decoration-2 underline-offset-4" : ""}`}>My Tools</span>
                <span className="absolute inset-0 border-2 border-white rounded-full"></span>
            </button>
            </div>

        </div>
    <div className='p-5 bg-gradient-to-bl from-[#FFF250] to-[#a09606] m-2 rounded-lg'>
        { activeTab === "skills" 
            ?
            <div className='grid gap-0 lg:grid-cols-5 grid-cols-4'>
            {skill.map((item, index) => (
                <div key={index} className="col-span-1">
                    <Skillcard 
                        img = {item.img}
                        lbl = {item.label}
                        />
                </div>
            ))}

            </div>
            :

            <div className='grid gap-0 lg:grid-cols-5 grid-cols-4'>
            {tool.map((item, index) => (
                <div key={index} className="col-span-1">
                    <Skillcard 
                        img = {item.img}
                        lbl = {item.label}
                        />
                </div>
            ))}

            </div>
        }
        </div>
    </div>
   </>
  );
};

export default Skills;
