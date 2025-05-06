import EnquiryForm from '@/components/enquiryForm'
import { payload } from '@/hooks/payload'
import React from 'react'

const ServicesTitle = async () => {
  const pageContent = await payload.findGlobal({
    slug: 'servicesPage',
  })

  return (
    <>
      <div className="max-w-[1178px] self-center p-8 flex flex-col gap-4 text-center">
        <h1>{pageContent.title}</h1>
        <p>{pageContent.text}</p>
      </div>
      <EnquiryForm text={pageContent.enquiryTitle} buttonText="Enquire Now" />
    </>
  )
}

export default ServicesTitle
