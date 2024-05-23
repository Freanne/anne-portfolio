import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = ({darkMode, toggleDarkMode}) => {
  return (
    <div>
        <hr className={'m-6 '} />
        <div className={` grid grid-cols-3`}>
        <div className={`mx-12 items-center justify-center  ${darkMode ? "text-white": "text-black"}`}>
            <h1 className='font-bold'>Téléphone</h1>
            <p>+229 60-82-89-08</p>

        </div>
      <div className={`mx-12 h-24 items-center justify-center ${darkMode ? "text-white": "text-black"}`}>
        <h1 className='font-bold'>Suivez-moi</h1>
        <div className={`flex`}>
            <a href=""><FaFacebookSquare className='text-xl mr-2'/></a>
            <a href=""><FaInstagramSquare className='text-xl mr-2'/></a>
            <a href=""><FaXTwitter className='text-xl' /></a>
        </div>
        
      </div>

      <div className={`mx-12 ${darkMode ? "text-white": "text-black"}`}>
            All right reserved © 2024
      </div>
    </div>
        </div>
       
  )
}

export default Footer
