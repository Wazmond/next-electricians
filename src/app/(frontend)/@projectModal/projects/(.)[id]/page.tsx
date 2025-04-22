import ProjectDetails from '@/components/projectDetails'
import React from 'react'

interface Props {
  params: {
    id: string
  }
}

const page = async ({ params }: Props) => {
  const { id } = await params
  return (
    <div className="fixed h-full w-full flex bg-black/50 items-center justify-center p-8">
      <ProjectDetails id={Number(id)} isModal={true} />
    </div>
  )
}

export default page
