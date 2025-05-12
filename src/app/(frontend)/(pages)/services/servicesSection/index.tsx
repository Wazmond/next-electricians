import MiddleColumn from '@/components/servicesComponent/midCol'
import ServicesCard from '@/components/servicesComponent/servicesCard'
import { payload } from '@/hooks/payload'
import React from 'react'
import ServiceInformation from './information'

const ServicesSection = async () => {
  const { docs } = await payload.find({ collection: 'services' })

  return (
    <div className="max-w-[1178px] w-full self-center flex flex-row">
      <div className="relative flex flex-1 flex-row h-min">
        <div className=" flex flex-col w-full gap-2">
          {docs.map((service, index) => (
            <ServicesCard service={service} index={index + 1} key={service.id} />
          ))}
        </div>
        <MiddleColumn docs={docs} />
      </div>
      <ServiceInformation docs={docs} />
    </div>
  )
}

export default ServicesSection
