import { Media, Service } from '@/payload-types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface Props {
  service: Service
  param: number
  index: number
}

const ServicesCard = ({ service, param, index }: Props) => {
  return (
    <Link href={`/services?service=${index}`} scroll={false} shallow>
      <div
        style={{ borderRadius: `12px ${param == index ? '0 0' : '12px 12px'} 12px` }}
        className={`${service.image ? 'flex' : 'hidden'} flex-row relative h-16 w-full p-4 gap-2 justify-between items-start bg-white border-2 border-white hover:cursor-pointer hover:border-next-blue`}
      >
        <h3 className="text-blue-900 font-robotoMono">{service.title}</h3>
      </div>
    </Link>
  )
}

export default ServicesCard
