import CTAButton from '@/components/ctaButton'
import ProjectsComponent from '@/components/projectsComponent'
import Link from 'next/link'
import React from 'react'

const Projects = () => {
  //This segment is to be replaced when PayloadCMS is up and running, or atleast when I learn how to use it hahaha.

  return (
    <>
      <h2>Our Previous Projects</h2>
      <ProjectsComponent />
      <CTAButton href="/projects" text='View More' className='bg-white hover:bg-mono-300 text-black'/>
    </>
  )
}

export default Projects
 