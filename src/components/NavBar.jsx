import { useState } from "react";
import { MdMenu, MdClose, MdDarkMode, MdOutlineLightMode } from "react-icons/md";

const NavBar = ({darkMode, toggleDarkMode}) => {
  const [isOpen, setIsOpen] = useState(false);
  

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };


  return (
    <div >
        <nav className={`md:rounded-3xl md:shadow-lg md:mt-5 md:border md:text-center md:justify-items-center md:mx-10 md:h-16 md:bg-gray ${darkMode ? 'text-white' :  'text-black'}`}>
      
        <button className="md:hidden absolute right-4 top-4" onClick={toggleMenu}>
          {isOpen ? <MdClose className="text-4xl" /> : <MdMenu className="text-4xl" />}
        </button>
        {/* <MdDarkMode/> */}
        <ul className={`p-4 md:flex flex-col md:flex-row md:p-4 justify-end pr-36 text-lg font-medium ${isOpen ? "md:justify-end bg-transparent" : "hidden"} xl:pl-auto`}>
          <li className="mr-auto">
            <button onClick={toggleDarkMode}>
            {darkMode ? <MdOutlineLightMode className="text-4xl icon-container" /> :  <MdDarkMode className="text-4xl icon-container"/>  }
            </button>
          </li>
          <li className="mr-20">
            <a href="#home" className={`${darkMode ? "" : ""} `}>
              Accueil
            </a>
          </li>
          <li className="mr-20">
            <a href="#skills">
              Compétences
            </a>
          </li>
          <li className="mr-20">
            <a href="#projet">
              Projets
            </a>
          </li>
          <li className="mr-20">
            <a href="#contact">
              Contact
            </a>
          </li>
        </ul>

      </nav>

    </div>
  )
}
export default NavBar;