'use client'
import { useSearchParams } from 'next/navigation'
import React from 'react'
import { Service } from '@/payload-types'
import ServiceInformation from './serviceInformation'
import MiddleColumn from './middleColumn'
import ServicesCard from './servicesCard'

const SearchParamClient = ({ docs }: { docs: Service[] }) => {
  const searchParams = useSearchParams()
  const serviceParam = Number(searchParams.get('service') ?? 1)
  return (
    <>
      <div className="relative flex flex-1 flex-row h-min">
        <div className="flex flex-col w-full gap-2">
          {docs.map((service, index) => (
            <ServicesCard
              service={service}
              index={index + 1}
              serviceParam={serviceParam}
              key={index}
            />
          ))}
        </div>
        <MiddleColumn docs={docs} serviceParam={serviceParam} />
      </div>
      <ServiceInformation docs={docs} serviceParam={serviceParam - 1} />
    </>
  )
}

export default SearchParamClient
