
import { FaGithub } from "react-icons/fa";

const Card = ({image, name, description,lienG,lienV}) => {
  return (
    <div className="">
        <div className="shadow-xl border-2 p-8 m-8 xl:m-20 rounded-xl ">
            <div className='grid xl:grid-cols-2 items-center '>
                    <div className=" border-2 border-gray"> 
                        <img src={image} alt="" />
                    </div>
                    
                    <div className='xl:ml-8'>
                        <h1 className="text-2xl font-semibold mt-8">{name}</h1>
                        <p className="mt-4">{description}</p>
                        <div className="flex items-center mt-8">
                            <a href={lienG}><FaGithub className="text-4xl mr-12"/></a>
                            <a href={lienV} className="bg-[#FEC400] text-black font-semibold p-2 rounded-lg shadow-sm">Visitez le projet</a>
                        </div>
                        
                            
                       
                    </div>
            </div>
        
        </div>
    </div>
  )
}

export default Card
