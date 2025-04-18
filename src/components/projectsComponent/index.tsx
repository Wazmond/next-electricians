import React from 'react'
import ProjectCard from './projectCard'
import { payload } from '@/hooks/payload'
import { Project } from '@/payload-types'
import { unstable_cache } from 'next/cache'

const ProjectsComponent = async () => {
  // const { docs } = await payload.find({
  //   collection: "projects"
  // })
  const cached = unstable_cache(
    async () => {
      const { docs } = await payload.find({
        collection: 'projects',
      })
      return docs
    },
    [],
    {
      revalidate: 60,
    },
  )

  const projects = await cached()

  return (
    <>
      {projects ? (
        <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-4">
          {projects.map((data: Project) => (
            <ProjectCard key={data.id} data={data} />
          ))}
        </div>
      ) : (
        <p className="text-mono-500">Loading projects...</p>
      )}
    </>
  )
}

export default ProjectsComponent
