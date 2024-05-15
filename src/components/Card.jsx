
import { FaGithub } from "react-icons/fa";

const Card = ({image, name, description,lienG,lienV, darkMode, toggleDarkMode}) => {
  return (
    <div className={`${darkMode ? "dark" : " "}`}>
        <div className={`shadow-xl border-[1px] border-b-[10px] border-r-[10px] p-8 m-8 xl:m-20 rounded-3xl hover:shadow-slate-100 ${darkMode ? "" : "bg-white"}`} >
            <div className='grid xl:grid-cols-2 items-center '>
                    <div className=" border-2 border-gray"> 
                        <img src={image} alt=""/>
                    </div>
                    
                    <div className={`xl:ml-8 ${darkMode ? "text-white" : ""}`}>
                        <h1 className="text-2xl font-semibold mt-8">{name}</h1>
                        <p className="mt-4">{description}</p>
                        <div className="flex items-center mt-8">
                            <a href={lienG}><FaGithub className="text-4xl mr-12"/></a>
                            <a href={lienV} className={`${darkMode ? "bg-[#ae8602]" : "bg-[#fbc30a]"} font-semibold p-2 rounded-lg shadow-sm`}>Visitez le projet</a>
                        </div>
                        
                            
                       
                    </div>
            </div>
        
        </div>
    </div>
  )
}

export default Card
