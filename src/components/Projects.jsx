import React from 'react'
import Card from './Card'
import { projects } from './data'
const Projects = ({darkMode, toggleDarkMode}) => {
  return (
    <div id="projet" className={`${darkMode ? "" : ""}`}>
      <h1 className={`mt-16 text-center font-bold text-2xl ${darkMode ? "text-[#F8F8F8]" : ""}`}> PROJETS <hr className={`mx-auto  ${darkMode ? "bg-[#ae8602]" : "bg-[#FEC400]"}`} style={{width:"200px", height:"5px"}}/></h1>
      {
        projects.map((item, index) =>
          <Card
            key={index}
            image={item.image}
            name={item.name}
            description={item.description}
            lienG={item.lien_github}
            lienV={item.lien_vercel}
            darkMode={darkMode}
            toggleDarkMode={toggleDarkMode}
          />        
        )
      }
    </div>
  )
}

export default Projects
