import CTAButton from '@/components/ctaButton'
import ProjectsComponent from '@/components/projectsComponent'
import Link from 'next/link'
import React from 'react'

const Projects = () => {
  //This segment is to be replaced when PayloadCMS is up and running, or atleast when I learn how to use it hahaha.

  return (
    <div className="gap-6 py-8 flex flex-col self-center w-full items-center font-robotoSerif max-w-[1178px] px-8">
      <h2>Our Previous Projects</h2>
      <ProjectsComponent />
      <CTAButton href="/projects" text='View More' className='bg-white hover:bg-mono-300 text-black'/>
    </div>
  )
}

export default Projects
 