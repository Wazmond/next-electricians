import React from 'react'
import ProjectCard from './projectCard'
import { payload } from '@/hooks/payload'
import { Project } from '@/payload-types'

const ProjectsComponent = async () => {
  const response = await payload.find({
    collection: "projects"
  })
  const projects = response.docs
  return (
    <>
    {projects ? (    
      <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-4">
        {projects.map((data: Project) => (
          <ProjectCard key={data.id} data={data} />
        ))}
      </div>
    ) : (
      <p className='text-mono-500'>
        Loading projects...
      </p>
    )}

    </>

  )
}

export default ProjectsComponent
