import React from 'react'
import Card from './Card'
import { projects } from './data'
const Projects = () => {
  return (
    <div className=''>
      <h1 className='mt-16 text-center'> PROJECTS <hr className='mx-auto bg-red-500'  style={{width:"100px", height:"2px"}}/></h1>
      {
        projects.map((item, index) =>
          <Card
            key={index}
            image={item.image}
            name={item.name}
            description={item.description}
            lienG={item.lien_github}
            lienV={item.lien_vercel}
          />        
        )
      }
    </div>
  )
}

export default Projects
