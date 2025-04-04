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
      className={`aspect-[4/3] ${image ? 'flex' : 'hidden'} flex-col rounded-lg shadow-lg relative overflow-hidden`}
    >
      <div className="">
        <Image
          src={(image as Media).url!}
          alt={(image as Media).alt!}
          fill={true}
          className="object-cover"
        />
      </div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}

export default ServicesCard
