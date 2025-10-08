import { payload } from '@/hooks/payload'
import React from 'react'
import SearchParamClient from './searchParamClient'

const ServicesSection = async () => {
  const { docs } = await payload.find({ collection: 'services' })

  return (
    <>
      {docs.length > 0 && (
        <div className="max-w-[1178px] w-full self-center flex flex-row p-4">
          <SearchParamClient docs={docs} />
        </div>
      )}
    </>
  )
}

export default ServicesSection
