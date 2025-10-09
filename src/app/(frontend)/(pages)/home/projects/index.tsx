import CTAButton from '@/components/ctaButton'
import ProjectsComponent from '@/components/projectsComponent'
import { HomePage } from '@/payload-types'
import React from 'react'
import ProjectImages from './project-images'

interface Props {
  pageContent: HomePage
}

const Projects = ({ pageContent }: Props) => {
  return (
    <>
      <h2 className="font-robotoSerif">{pageContent.projectsTitle}</h2>
      <p>{pageContent.projectsText}</p>
      {/* <ProjectsComponent /> */}
      <div className="w-full">
        <ProjectImages />
      </div>
      {/* <CTAButton
        href="/projects"
        text="View More"
        className="bg-white hover:bg-mono-300 text-black border border-mono-500"
      /> */}
    </>
  )
}

export default Projects
