import { Link } from "react-router-dom";
import { MdDarkMode } from "react-icons/md";

const NavBar = () => {
  return (
    <div >
      <nav className="rounded-3xl shadow-lg mt-5 border text-center justify-items-center mx-10 h-16 bg-gray " >
          
        <ul className="p-4 flex justify-end pr-36 text-lg font-medium xl:pl-auto">
      
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
      </nav>
    </div>
  );
};

export default NavBar;