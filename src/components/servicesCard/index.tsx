import { Media, Service } from '@/payload-types'
import Image from 'next/image'
import React from 'react'

interface Props {
  service: Service
}

const ServicesCard = ({ service }: Props) => {
  const { title, image, description, services } = service
  return (
    <div
      className={`${image ? 'flex' : 'hidden'} flex-row rounded-lg shadow-lg relative h-auto w-full p-4 gap-2 justify-between items-start bg-white border-2 border-white hover:cursor-pointer hover:border-next-blue`}
    >
      <div className="flex flex-col text-left font-robotoMono text-clip">
        <h3 className="text-blue-900">{title}</h3>
        <p>{description}</p>
      </div>
      <div className="relative h-[84px] aspect-square">
        <Image
          src={(image as Media).url!}
          alt={(image as Media).alt!}
          height={(image as Media).height!}
          width={(image as Media).width!}
          className="object-cover"
        />
      </div>
    </div>
  )
}

// export default ServicesCard
