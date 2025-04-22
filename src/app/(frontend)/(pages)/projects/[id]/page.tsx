import HeaderBg from '@/components/HeaderBg'
import ProjectDetails from '@/components/projectDetails'
import React from 'react'

type Props = Promise<{ id: string }>

const page = async ({ params }: { params: Props }) => {
  const { id } = await params
  return (
    <>
      <HeaderBg />
      <div className="mt-20 relative">
        <ProjectDetails id={Number(id)} isModal={false} />
      </div>
    </>
  )
}

export default page
