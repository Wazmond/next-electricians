import { Media, Service } from '@/payload-types'
import Image from 'next/image'
import React from 'react'

interface Props {
  service: Service
}

const ServicesCard = ({ service }: Props) => {
  const { title, image, description } = service
  return (
    <div
      className={`${image ? 'flex' : 'hidden'} flex-row rounded-lg shadow-lg relative h-[120px] w-full p-4 justify-between bg-white border hover:cursor-pointer`}
    >
      <div className="flex flex-col text-left font-robotoMono">
        <h3 className="text-blue-900">{title}</h3>
        <p>{description}</p>
      </div>
      <div className="relative h-full aspect-square">
        <Image src={(image as Media).url!} alt={(image as Media).alt!} fill={true} />
      </div>
    </div>
  )
}

export default ServicesCard
