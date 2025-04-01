
import { Media, Project } from '@/payload-types'
import Image from 'next/image'
import React from 'react'

interface Props {
  data: Project
}

const ProjectCard = (props: Props) => {
  const { data } = props

  const date = () => {
    const dd = data.date.slice(8,10)
    const mm = data.date.slice(5,7)
    const yyyy = data.date.slice(0,4)
    const formattedDate = `${dd}/${mm}/${yyyy}`
    return formattedDate
  }
  return (
    <div
      className={`aspect-[4/3] ${data.images ? 'flex' : 'hidden'} flex-col rounded-lg shadow-lg relative overflow-hidden`}
    >
      {/* <Link href="/projects/"> */}
      <div className="">
        <Image src={(data.images[0]?.image as Media).url!} alt="Project Photo" fill={true} className="object-cover" />
      </div>
      <div className="hidden absolute sm:flex hover:opacity-100 opacity-0 transform transition-opacity duration-150 ease-in-out h-full w-full z-[5] bg-mono-200 bg-opacity-90 py-8 px-8 text-center justify-between flex-col">
        <h3>{data.title}</h3>
        <p>{data.description}</p>
        <p>{date()}</p>
      </div>
      {/* </Link> */}
    </div>
  )
}

export default ProjectCard
