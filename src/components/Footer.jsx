
import React from 'react';
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa';

const Footer = ({ darkMode, toggleDarkMode }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center">
      <hr className="m-6 bg-slate-600" />
      <div className={`md:w-1/3 ${darkMode ? 'text-white' : 'text-black'} ${darkMode ? 'text-white' : 'text-black'} md:text-center`}>
        <h1 className="font-bold pl-6">Téléphone</h1>
        <p>+229 60-82-89-08</p>
      </div>
      <div className={`md:w-1/3  mt-2 items-center justify-center ${darkMode ? 'text-white' : 'text-black'} md:text-center`}>
        <h1 className="font-bold">Suivez-moi</h1>
        <div className="flex justify-center">
          <a href="https://www.facebook.com/annemarie.akotegnon/"><FaFacebookSquare className="text-xl mr-2" /></a>
          <a href="https://www.instagram.com/annemarieakotegnon/"><FaInstagramSquare className="text-xl mr-2" /></a>
          <a href="https://x.com/AkotegnonAnne"><FaTwitterSquare className="text-xl" /></a>
        </div>
      </div>
      <div className={`md:w-1/3 mt-2 ${darkMode ? 'text-white' : 'text-black'} ${darkMode ? 'text-white' : 'text-black'} md:text-center`}>
        All right reserved © 2024
      </div>
    </div>
  );
};

export default Footer;
// import React from 'react';
// import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa';

// const Footer = ({ darkMode, toggleDarkMode }) => {
//   return (
//     <div className="flex flex-col md:flex-row items-center justify-center">
//       <hr className="my-6" />
//       <div className={`md:w-1/3 ${darkMode ? 'text-white' : 'text-black'}`}>
//         <h1 className="font-bold">Téléphone</h1>
//         <p>+229 60-82-89-08</p>
//       </div>
//       <div className={`md:w-1/3 items-center justify-center ${darkMode ? 'text-white' : 'text-black'}`}>
//         <h1 className="font-bold">Suivez-moi</h1>
//         <div className="flex">
//           <a href="#"><FaFacebookSquare className="text-xl mr-2" /></a>
//           <a href="#"><FaInstagramSquare className="text-xl mr-2" /></a>
//           <a href="#"><FaTwitterSquare className="text-xl" /></a>
//         </div>
//       </div>
//       <div className={`md:w-1/3 ${darkMode ? 'text-white' : 'text-black'}`}>
//         All right reserved © 2024
//       </div>
//     </div>
//   );
// };

// export default Footer;





// import React from 'react'
// import { FaFacebookSquare } from "react-icons/fa";
// import { FaInstagramSquare } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";

// const Footer = ({darkMode, toggleDarkMode}) => {
//   return (
//     <div >
//         <hr className={'m-6'} />
//         <div className={`md:`}>
//         <div className={` items-center justify-center  ${darkMode ? "text-white": "text-black"}`}>
//             <h1 className='font-bold'>Téléphone</h1>
//             <p>+229 60-82-89-08</p>

//         </div>
//       <div className={` h-24 items-center justify-center ${darkMode ? "text-white": "text-black"}`}>
//         <h1 className='font-bold'>Suivez-moi</h1>
//         <div className={`flex`}>
//             <a href=""><FaFacebookSquare className='text-xl mr-2'/></a>
//             <a href=""><FaInstagramSquare className='text-xl mr-2'/></a>
//             <a href=""><FaXTwitter className='text-xl' /></a>
//         </div>
        
//       </div>

//       <div className={` ${darkMode ? "text-white": "text-black"}`}>
//             All right reserved © 2024
//       </div>
//     </div>
//         </div>
       
//   )
// }

// export default Footer
