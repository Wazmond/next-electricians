'use client'
import { Media, Service } from '@/payload-types'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import React from 'react'

const ServiceInformation = ({ docs }: { docs: Service[] }) => {
  const searchParams = useSearchParams()
  const serviceId = Number(searchParams.get('service') ?? 1) - 1
  return (
    <div
      style={{
        borderTopLeftRadius: `${serviceId == 1 ? '0' : '12px'}`,
        borderBottomLeftRadius: `${serviceId == docs.length ? '0' : '12px'}`,
      }}
      className="flex flex-1 flex-col items-center bg-white rounded-tr-xl rounded-br-xl rounded-bl-lg p-4 gap-4 z-[2]"
    >
      <div className="relative w-full h-[400px] aspect-auto flex items-center justify-center">
        <Image
          src={(docs[serviceId].image as Media).url!}
          alt={(docs[serviceId].image as Media).alt}
          height={(docs[serviceId].image as Media).height as number}
          width={(docs[serviceId].image as Media).width as number}
          className="object-contain max-w-full max-h-full"
        />
      </div>

      <h3>{docs[serviceId].title}</h3>
      <p>{docs[serviceId].description}</p>
    </div>
  )
}

export default ServiceInformation
