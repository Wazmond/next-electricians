import HeaderBg from '@/components/HeaderBg'
import ProjectsComponent from '@/components/projectsComponent'
import { payload } from '@/hooks/payload'
import React from 'react'

const Page = async () => {
  const pageContent = await payload.findGlobal({ slug: 'projectsPage' })
  return (
    <div className="flex flex-col flex-1">
      <HeaderBg />
      <span className="w-full h-16" />
      <div className="w-full max-w-[1178px] self-center p-8 flex flex-col gap-4 text-center">
        <h1>{pageContent?.title}</h1>
        <p className="text-center">{pageContent?.text}</p>
        <ProjectsComponent />
      </div>
    </div>
  )
}

export default Page
