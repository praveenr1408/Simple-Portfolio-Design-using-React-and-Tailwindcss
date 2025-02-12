import React from 'react'
import Card from './Card'
import Ecommerce from '../assets/projects/e-commerce.jpeg'
import Portfolio from '../assets/projects/portfolio.jpeg'
import StudentManagement from '../assets/projects/student-management.jpeg'
function Projects() {
  const cardData = [
    {
      title: 'E commerce',
      image: Ecommerce
    },

    {
      title: 'Portfolio',
      image: Portfolio
    },

    {
      title: 'StudentManagement',
      image: StudentManagement
    },
    
    
  ]


  return (
    <section id='project-section' className='w-full h-auto  flex flex-col items-center justify-center gap-10 py-10'>
      {/* project titile and decription */}
      <div className='flex flex-col items-center gap-5'>
        <h1 className='text-center text-4xl font-bold'>Projects</h1>
        <p className='text-center w-[80%]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus magnam velit commodi blanditiis sint eum quibusdam! Temporibus deserunt velit perspiciatis tempore aspernatur hic veniam recusandae ducimus iusto, dolores maxime ipsa.</p>
      </div>

      <div className='flex gap-10 flex-wrap justify-center'>

        {cardData.map((data) => (
          <Card title={data.title} image={data.image} />
        ))}

      </div>

    </section>
  )
}

export default Projects