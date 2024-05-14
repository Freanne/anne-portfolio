import { useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

  return (
    <div >

<nav className="md:rounded-3xl md:shadow-lg md:mt-5 md:border md:text-center md:justify-items-center md:mx-10 md:h-16 md:bg-gray">
        <button className="md:hidden absolute right-4 top-4" onClick={toggleMenu}>
          {isOpen ? <MdClose className="text-4xl" /> : <MdMenu className="text-4xl" />}
        </button>
        <ul className={`p-4 md:flex flex-col md:flex-row md:p-4 justify-end pr-36 text-lg font-medium ${isOpen ? "md:justify-end" : "hidden"} xl:pl-auto`}>
          <li className="mr-20">
            <a href="" >
              Home
            </a>
            <hr />
          </li>
          <li className="mr-20">
            <a href="#skills">
              Skills
            </a>
          </li>
          <li className="mr-20">
            <a href="#projects">
              Projects
            </a>
          </li>
          <li className="mr-20">
            <a href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>


      {/* <nav className="rounded-3xl shadow-lg mt-5 border text-center justify-items-center mx-10 h-16 bg-gray " >
          
        <ul className="p-4 flex justify-end pr-36 text-lg font-medium xl:pl-auhref">
      
          <li className="mr-20 ">
            Home
            <hr />
          </li>
          <li className="mr-20  ">
            Skills
            <hr />
          </li>
          <li className="mr-20  ">
            Projects
            <hr />
          </li>
          <li className="">
            Contact
            <hr className="bg-red-300"/>
          </li>
        </ul>
      </nav> */}
    </div>
  );
};

export default NavBar;

// import React, { useState } from "react";
// // import { a } from "react-router-dom";
// import { MdDarkMode } from "react-icons/md";

// const NavBar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const hrefggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div>
//       <nav className="rounded-3xl shadow-lg mt-5 border text-center justify-items-center mx-10 h-16 bg-gray">
//         <button
//           className="md:hidden absolute right-4 hrefp-4"
//           onClick={hrefggleMenu}
//         >
//           <MdDarkMode />
//         </button>
//         <ul
//           className={`p-4 flex justify-end pr-36 text-lg font-medium ${
//             isOpen ? "block" : "hidden"
//           } xl:pl-auto`}
//         >
//           <li className="mr-20">
//             <a href="/" onClick={hrefggleMenu}>
//               Home
//             </a>
//             <hr />
//           </li>
//           <li className="mr-20">
//             <a href="/skills" onClick={hrefggleMenu}>
//               Skills
//             </a>
//             <hr />
//           </li>
//           <li className="mr-20">
//             <a href="/projects" onClick={hrefggleMenu}>
//               Projects
//             </a>
//             <hr />
//           </li>
//           <li>
//             <a href="/contact" onClick={hrefggleMenu}>
//               Contact
//             </a>
//             <hr className="bg-red-300" />
//           </li>
//         </ul>
//       </nav>
//     </div>
//   );
// };

// export default NavBar;

