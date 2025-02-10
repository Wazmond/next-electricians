import CTAButton from '@/components/ctaButton'
import ProjectsComponent from '@/components/projectsComponent'
import React from 'react'

const Projects = () => {
  //This segment is to be replaced when PayloadCMS is up and running, or atleast when I learn how to use it hahaha.

  return (
    <>
      <h2 className='font-robotoSerif'>Our Previous Projects</h2>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis nostrum consequatur magnam, libero reiciendis iusto impedit fuga officiis possimus harum tenetur voluptas sequi similique placeat, autem doloribus alias at nihil.</p>
      <ProjectsComponent />
      <CTAButton
        href="/projects"
        text="View More"
        className="bg-white hover:bg-mono-300 text-black border border-mono-500"
      />
    </>
  )
}

export default Projects
