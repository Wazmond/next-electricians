import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface Props {
  data: ProjectsDataType
}

const ProjectCard = (props: Props) => {
  return (
    <div
      className={`aspect-[4/3] ${props.data.image ? 'flex' : 'hidden'} flex-col rounded-lg shadow-lg relative overflow-hidden`}
    >
      <Link href="/projects/">
        <div className="">
          <Image src={props.data.image} alt="Project Photo" fill={true} className="object-cover" />
        </div>

        <div className="hidden absolute sm:flex hover:opacity-100 opacity-0 transform transition-opacity duration-150 ease-in-out h-full w-full z-[5] bg-mono-200 bg-opacity-90 py-8 px-8 text-center justify-between flex-col">
          <h3>{props.data.title}</h3>
          <p>{props.data.desc}</p>
          <p>{props.data.date}</p>
        </div>
      </Link>
    </div>
  )
}

export default ProjectCard
