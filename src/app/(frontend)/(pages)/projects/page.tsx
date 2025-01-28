import ProjectsComponent from '@/components/projectsComponent'
import React from 'react'

const Page = () => {
  return (
    <div className="flex flex-col flex-1">
      <span className="fixed w-full h-16 bg-[rgba(46,46,46)]" />
      <span className="w-full h-16" />
      <div className="w-full max-w-[1178px] self-center px-8 py-8 flex flex-col gap-4 text-center">
        <h1>Projects</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus nesciunt veniam
          impedit tempore expedita possimus non corrupti, nihil sequi fuga voluptatem repellat
          sapiente, aliquid corporis inventore iusto harum obcaecati quo?
        </p>
        <ProjectsComponent />
      </div>
    </div>
  )
}

export default Page
