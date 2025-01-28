import ProjectsComponent from '@/components/projectsComponent'
import Link from 'next/link'
import React from 'react'

const Projects = () => {
  //This segment is to be replaced when PayloadCMS is up and running, or atleast when I learn how to use it hahaha.

  return (
    <div className="gap-6 py-8 flex flex-col self-center w-full items-center font-robotoSerif max-w-[1178px] px-8">
      <h2>Our Previous Projects</h2>
      <ProjectsComponent />
      <Link className="w-auto bg-white drop-shadow-lg py-2 px-4 rounded-lg" href="/projects">
        View More
      </Link>
    </div>
  )
}

export default Projects
