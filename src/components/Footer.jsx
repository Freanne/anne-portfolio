import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='border-t-8 grid grid-cols-3'>
      <div className='border-2 flex h-24 items-center justify-center'>
        <FaFacebookSquare className='text-3xl mr-4'/>
        <FaInstagramSquare className='text-3xl mr-4'/>
        <FaXTwitter className='text-3xl' />
      </div>
      <div className=' border-2 text-2xl font-medium flex items-center justify-center'>
        <h1 className='text-center'> Build by <a href="">Anne-Marie</a></h1>
      </div>
      <div className='border-2'>
      copyright 2022
      </div>
    </div>
  )
}

export default Footer
