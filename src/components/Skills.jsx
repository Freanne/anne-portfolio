import React from 'react'
import image from '/html.png'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaGitAlt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

const Skills = () => {
  return (
    <div className='m-12' >
        <h1 className='m-10 text-center'> SKILLS <hr className='mx-auto bg-red-500'  style={{width:"100px", height:"2px"}}/></h1>
        
        
        <div className='grid md:grid-cols-3 sm:grid-cols-2'>
                <div className="border-2 m-2 p-4 flex flex-col items-center bg-gray-100 shadow-xl">
                        <FaHtml5 className='text-4xl mb-2'/>
                        <span>HTML</span>
                   
                </div>
                <div className="border-2 m-2 p-4 flex flex-col items-center bg-gray-100 shadow-xl">
                        <FaCss3 className='text-4xl mb-2'/>
                        <span>CSS</span>
                </div>
                <div className="border-2 m-2 p-4 flex flex-col items-center bg-gray-100 shadow-xl">
                        <IoLogoJavascript className='text-4xl mb-2'/>
                        <span>Javascript</span>
                </div>

                <div className="border-2 m-2 p-4 flex flex-col items-center bg-gray-100 shadow-xl ">
                        <FaGitAlt className='text-4xl mb-2'/>
                        <span>Git</span>
                </div>
                <div className="border-2 m-2 p-4 flex flex-col items-center bg-gray-100 shadow-xl">
                        <FaReact className='text-4xl mb-2'/>
                        <span>React JS</span>
                </div>
                <div className="border-2 m-2 p-4 flex flex-col items-center bg-gray-100 shadow-xl">
                        <RiTailwindCssFill className='text-4xl mb-2'/>
                        <span> TailWindCss</span>
                </div>
        </div>
        
    </div>

  )
}

export default Skills
