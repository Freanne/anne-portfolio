import React from 'react'
import image from '/html.png'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaGitAlt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

const Skills = ({darkMode, toggleDarkMode}) => {
  return (
    <div className={`${darkMode ? "" :""} xl:m-20 m-8 `} >
        <h1 className={`m-10 text-center font-bold text-2xl ${darkMode ? "text-[#F8F8F8]" : "text-black"}`}> SKILLS <hr className={`mx-auto  ${darkMode ? "bg-[#ae8602]" : "bg-[#FEC400]"}`} style={{width:"200px", height:"5px"}}/></h1>
        
        
        <div className='grid md:grid-cols-3 sm:grid-cols-2'>
                <div className={`border-[1px] m-2 p-4 flex flex-col items-center  hover:bg-[#000000] hover:text-white shadow-xl bg-white`}>
                        <FaHtml5 className='text-4xl mb-2'/>
                        <span className='text-xl font-medium'>HTML</span>
                   
                </div>
                <div className={`border-[1px] m-2 p-4 flex flex-col items-center  hover:bg-[#000000] hover:text-white shadow-xl  bg-white`}>
                        <FaCss3 className='text-4xl mb-2 '/>
                        <span className='text-xl font-medium'>CSS</span>
                </div>
                <div className={`border-[1px] m-2 p-4 flex flex-col items-center hover:bg-[#000000] hover:text-white shadow-xl  bg-white`}>
                        <IoLogoJavascript className='text-4xl mb-2'/>
                        <span className='text-xl font-medium'>Javascript</span>
                </div>

                <div className={`border-[1px] m-2 p-4 flex flex-col items-center  hover:bg-[#000000] hover:text-white shadow-xl bg-white`}>
                        <FaGitAlt className='text-4xl mb-2'/>
                        <span className='text-xl font-medium'>Git</span>
                </div>
                <div className={`border-[1px] m-2 p-4 flex flex-col items-center hover:bg-[#000000] hover:text-white shadow-xl bg-white`}>
                        <FaReact className='text-4xl mb-2'/>
                        <span className='text-xl font-medium'>React JS</span>
                </div>
                <div className={`border-[1px] m-2 p-4 flex flex-col items-center hover:bg-[#000000] hover:text-white shadow-xl bg-white`}>
                        <RiTailwindCssFill className='text-4xl mb-2'/>
                        <span className='text-xl font-medium'> TailwindCss</span>
                </div>
        </div>
        
    </div>

  )
}

export default Skills
