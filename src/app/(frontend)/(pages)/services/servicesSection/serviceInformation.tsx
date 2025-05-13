'use client'
import { Media, Service } from '@/payload-types'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import React from 'react'

interface Props {
  docs: Service[]
  serviceParam: number
}
const ServiceInformation = ({ docs, serviceParam }: Props) => {
  return (
    <div
      style={{
        borderTopLeftRadius: `${serviceParam == 0 ? '0' : '12px'}`,
        borderBottomLeftRadius: `${serviceParam == docs.length ? '0' : '12px'}`,
      }}
      className="flex flex-1 flex-col items-center bg-white rounded-tr-xl rounded-br-xl rounded-bl-lg p-4 gap-4 z-[2]"
    >
      <div className="relative w-full h-[400px] aspect-auto flex items-center justify-center">
        <Image
          src={(docs[serviceParam].image as Media).url!}
          alt={(docs[serviceParam].image as Media).alt}
          height={(docs[serviceParam].image as Media).height as number}
          width={(docs[serviceParam].image as Media).width as number}
          className="object-contain max-w-full max-h-full"
        />
      </div>

      <h3>{docs[serviceParam].title}</h3>
      <p>{docs[serviceParam].description}</p>
    </div>
  )
}

export default ServiceInformation
