// import React from 'react'

// const Contact = ({darkMode, toggleDarkMode}) => {
//   return (
//     <div className='text-center m-12'>
//       <h1 className={`mt-16 text-center font-bold text-2xl ${darkMode ? "text-[#F8F8F8]" : ""}`}> CONTACT <hr className={`mx-auto  ${darkMode ? "bg-[#ae8602]" : "bg-[#FEC400]"}`} style={{width:"200px", height:"5px"}}/></h1>
//       <form action="" className='grid grid-cols-2 mt-10 bg-white shadow-xl border-[1px]'>
//         <div className='grid '>
//             <label htmlFor="" className='mt-8'>Nom & Prénom
//                 <input type="text" name="" id="" className=' ml-2 border-2 rounded-md h-10 w-52 ' />
//             </label>
//             <label htmlFor="" className=''> Donnez Email 
//                 <input type="text" name="" id="" className='ml-2 border-2 rounded-md h-10 w-52 ' />
//             </label>
//         </div>
//         <div className='grid'>
//             <label htmlFor="">Message </label>
//             <textarea name="" id="" cols="10" rows="10" className='border-2 mb-5 mr-4'></textarea>
           
//         </div>
//       </form>
//     </div>
//   )
// }

// export default Contact


import React, { useState } from 'react';

const Contact = ({ darkMode, toggleDarkMode }) => {


  return (
    <div className='text-center m-12'>
    <h1 className={`mt-16 text-center font-bold text-2xl ${darkMode ? "text-[#F8F8F8]" : ""}`}>
      CONTACT
      <hr className={`mx-auto ${darkMode ? "bg-[#ae8602]" : "bg-[#FEC400]"}`} style={{ width: "200px", height: "5px" }} />
    </h1>
  
    <iframe 
      src="https://tally.so/embed/n9dVvK?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" 
      loading="lazy" 
      width="100%" 
      height="313" 
      frameBorder="0" 
      marginHeight="0" 
      marginWidth="0" 
      title="Contact form"
    ></iframe>
  </div>
  );
}

export default Contact;


      {/* <form onSubmit={handleSubmit} className='grid grid-cols-2 mt-10 bg-white shadow-xl border-[1px]'>
        <div className='grid '>
          <label htmlFor="name" className='mt-8'>Nom & Prénom
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className='ml-2 border-2 rounded-md h-10 w-52'
            />
          </label>
          <label htmlFor="email" className=''> Donnez Email
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className='ml-2 border-2 rounded-md h-10 w-52'
            />
          </label>
        </div>
        <div className='grid'>
          <label htmlFor="message">Message </label>
          <textarea
            name="message"
            id="message"
            cols="10"
            rows="10"
            value={formData.message}
            onChange={handleChange}
            className='border-2 mb-5 mr-4'
          ></textarea>
        </div>
        <button type="submit" className='bg-[#FEC400] shadow-xl rounded-full p-2 w-36 mb-4 col-span-2 mx-auto'>Send</button>
      </form> */}