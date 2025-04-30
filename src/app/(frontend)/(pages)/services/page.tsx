import EnquiryForm from '@/components/enquiryForm'
import HeaderBg from '@/components/HeaderBg'
import ServicesComponent from '@/components/servicesComponent'
// import ServicesCard from '@/components/servicesCard'
import { payload } from '@/hooks/payload'
import { Service } from '@/payload-types'
import React, { Suspense } from 'react'

type Props = {
  searchParams: Promise<{ service?: number }>
}
const Page = async ({ searchParams }: Props) => {
  const pageContent = await payload.findGlobal({
    slug: 'servicesPage',
  })

  // const { docs } = await payload.find({
  //   collection: 'services',
  // })

  return (
    <div className="flex flex-col flex-1">
      <HeaderBg />
      <div className="mt-16 w-full self-center flex flex-col text-center">
        <div className="max-w-[1178px] self-center p-8 flex flex-col gap-4 text-center">
          <h1>{pageContent.title}</h1>
          <p>{pageContent.text}</p>
        </div>
        <EnquiryForm text={pageContent.enquiryTitle} buttonText="Enquire Now" />

        <section className="bg-light-blue w-full items-center flex justify-center py-8">
          <ServicesComponent searchParams={searchParams} />
        </section>
      </div>
    </div>
  )
}

export default Page
