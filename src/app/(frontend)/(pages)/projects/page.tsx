import HeaderBg from '@/components/HeaderBg'
import ProjectsComponent from '@/components/projectsComponent'
import React from 'react'

const Page = () => {
  return (
    <div className="flex flex-col flex-1">
      <HeaderBg />
      <span className="w-full h-16" />
      <div className="w-full max-w-[1178px] self-center p-8 flex flex-col gap-4 text-center">
        <h1>Our Work</h1>
        <p className="text-center">
          At Next Electricians, we take pride in our work. Every project is completed with attention
          to detail and care, treating your home as if it were our own. No matter the size of the
          job, we ensure professionalism, respect, and high-quality work from start to finish. See
          some of our recent protects below:
        </p>
        <ProjectsComponent />
      </div>
    </div>
  )
}

export default Page
