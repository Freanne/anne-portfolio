import React from 'react'
import image from '/anne-removebg-preview.png'
import NavBar from './NavBar'


const Header = () => {
  return (
    <header className='relative'>
      <div className='absolute top-0 left-0 w-full'>
            <NavBar/>
      </div>
      <div className='grid xl:grid-cols-2'>
            <div className='bg-[#fbc30a] flex items-center justify-center pt-16' >
              <img src={image} alt="" className='' style={{width:"300px"}}/>
            </div>
            <div className=' xl:pt-20 pl-8 bg-[#F8F8F8]'>
                <h1 className='text-3xl mt-12 m-5'> Hello !</h1>
                <h1 className='text-3xl m-5 font-bold'> Je suis Anne-Marie AKOTEGNON</h1>
                <h2 className='m-5'> Je suis étudiante en fin de formation en Génie Logiciel. Passionnée par la technologie, je suis en formation pour être Développeur Front-End et je me base sur React JS pour développer mes interfaces.</h2>
                <div className='text-center'>
                    <button className='bg-[#FEC400] shadow-xl rounded-full p-2 w-36 mb-4'> Hire me </button>
                </div>
            </div>
        </div>
      
    </header>

  )
}

export default Header
