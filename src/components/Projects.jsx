import React from 'react'
import Card from './Card'
import { projects } from './data'
const Projects = ({darkMode, toggleDarkMode}) => {
  return (
    <div className={`${darkMode ? "" : ""}`}>
      <h1 className={`mt-16 text-center textfont-bold ${darkMode ? "text-[#F8F8F8]" : ""}`}> PROJECTS <hr className='mx-auto bg-[#ae8602]'  style={{width:"100px", height:"4px"}}/></h1>
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
