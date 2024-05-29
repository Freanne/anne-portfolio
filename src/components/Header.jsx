import React from 'react'
import image from '/anne-removebg-preview.png'
import NavBar from './NavBar'



const Header = ({darkMode, toggleDarkMode}) => {
  return (
    <header id="home" className={`relative z-1 ${darkMode ? "dark": ""}`}>
      <div className='absolute z-20 top-0 left-0 w-full'>
            <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      </div>
      <div className='grid xl:grid-cols-2 h-full'>
            <div className={`flex items-center justify-center `} >
              <div className={`w-72 h-72 flex items-center justify-center animated-image  ${darkMode ? "bg-[#ae8602]" : "bg-[#fbc30a]"} rounded-full mt-12`}>
                  <img src={image} alt="" className='w-full h-full object-cover rounded-full ' style={{width:"250px"}}/>
              </div>
             
            </div>
            <div className={`xl:pt-20 mx-4 ${darkMode ? "bg-[#1A1A1A] text-[#F8F8F8]" : " bg-[#F8F8F8]"}`}>
                <h1 className='text-3xl mt-12'> Salut !</h1>
                <h1 className='text-3xl mt-4 font-bold'> Je suis Anne-Marie AKOTEGNON</h1>
                <h2 className=' text-justify mt-4 font-medium text-lg flex items-center justify-center'> 
                Je suis étudiante en dernière année de formation en Génie Logiciel et je suis passionnée par la technologie. Actuellement, je me spécialise en tant que Développeuse Front-End, en utilisant React JS pour créer des interfaces utilisateur interactives et intuitives. Je suis constamment à la recherche de nouvelles connaissances et compétences pour améliorer mes capacités et rester à la pointe des tendances technologiques. Mon objectif est de contribuer à des projets innovants et de collaborer avec des équipes dynamiques pour créer des expériences utilisateur exceptionnelles.
                </h2>
                <div className='m-5 text-xl font-semibold'>
                    <button 
                      className={`${darkMode ? "bg-[#ae8602]" : "bg-[#FEC400]" } shadow-xl rounded-full p-4 m-5`} 
                      onClick={() => window.location.href="mailto:akotegnonannemarie@gmail.com"}
                      formTarget='_blank'
                    > 
                          Embauchez-moi !
                    </button>
                </div>
            </div>
        </div>
      
    </header>

  )
}

export default Header
