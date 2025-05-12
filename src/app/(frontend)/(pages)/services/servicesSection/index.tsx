import { payload } from '@/hooks/payload'
import React from 'react'
import SearchParamClient from './searchParamClient'

const ServicesSection = async () => {
  const { docs } = await payload.find({ collection: 'services' })

  return (
    <div className="max-w-[1178px] w-full self-center flex flex-row">
      <SearchParamClient docs={docs} />
    </div>
  )
}

export default ServicesSection
