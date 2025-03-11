import React from 'react'
import projectsData from 'src/collections/projectsData.json'
import ProjectCard from './projectCard'

const ProjectsComponent = () => {
  return (
    <>
    <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-4">
      {projectsData.map((data: ProjectsDataType, key: number) => (
        <ProjectCard key={key} data={data} />
      ))}
    </div>
    </>

  )
}

export default ProjectsComponent
