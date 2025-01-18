'use client'
import ProjectCard from '@/components/projectCard'
import Link from 'next/link'
import React from 'react'
import projectsData from 'src/collections/projectsData.json'

export interface ProjectsType {
  title: string
  desc: string
  date: string
  image: string
  featured: boolean
}

const Projects = () => {
  //This segment is to be replaced when PayloadCMS is up and running, or atleast when I learn how to use it hahaha.
  const data: ProjectsType[] = projectsData

  return (
    <div className="bg-white gap-6 py-8 px-8 border flex flex-col self-center w-full items-center font-robotoSerif max-w-[1112px]">
      <h2>Our Previous Projects</h2>
      <div className="w-full flex flex-row flex-wrap gap-4">
        {data.map((data: ProjectsType, key: number) => (
            <ProjectCard key={key} data={data} />
        ))}
      </div>

      <Link className="w-auto bg-blue-400 text-white py-2 px-4 rounded-lg" href="/projects">
        View More
      </Link>
    </div>
  )
}

export default Projects
