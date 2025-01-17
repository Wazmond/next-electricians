import { ProjectsType } from '@/app/(frontend)/pages/home/projects'
import Image from 'next/image'
import React from 'react'

interface Props {
  key: number
  data: ProjectsType
}

const ProjectCard = (props: Props) => {
  return (
    <div
      className={`w-[calc((100%/2)-8px)] aspect-[4/3] ${props.data.image ? 'flex' : 'hidden'} flex-col rounded-lg shadow-lg border relative overflow-hidden`}
    >
      <div className="">
        <Image src={props.data.image} alt="Project Photo" fill={true} className="object-cover" />
      </div>

      <div className="hidden sm:flex">
        <h3>{props.data.title}</h3>
        <p>{props.data.desc}</p>
        <p>{props.data.date}</p>
      </div>
    </div>
  )
}

export default ProjectCard
