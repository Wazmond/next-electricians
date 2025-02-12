import CTAButton from '@/components/ctaButton'
import ProjectsComponent from '@/components/projectsComponent'
import React from 'react'

const Projects = () => {
  //This segment is to be replaced when PayloadCMS is up and running, or atleast when I learn how to use it hahaha.

  return (
    <>
      <h2 className='font-robotoSerif'>Our Work</h2>
      <p>{`At Next Electricians, we take pride in our work. Every project is completed with attention to detail and care, 
      treating your home as if it were our own. No matter the size of the job, we ensure professionalism, respect, and 
      high-quality work from start to finish. See some of our recent protects below:`}</p>
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
