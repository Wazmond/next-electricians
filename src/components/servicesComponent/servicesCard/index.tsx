'use client'
import { Service } from '@/payload-types'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import React from 'react'

interface Props {
  service: Service
  index: number
}

const ServicesCard = ({ service, index }: Props) => {
  const searchParams = useSearchParams()
  const serviceId = Number(searchParams.get('service') ?? 1)
  return (
    <Link
      href={`/services?service=${index}`}
      replace={true}
      scroll={false}
      onClick={() => console.log(index + ' has been pressed')}
    >
      <div
        style={{ borderRadius: `12px ${serviceId == index ? '0 0' : '12px 12px'} 12px` }}
        className={`${service.image ? 'flex' : 'hidden'} flex-row relative h-16 w-full p-4 gap-2 justify-between items-start bg-white border-2 border-white hover:cursor-pointer hover:border-next-blue`}
      >
        <h3 className="text-blue-900 font-robotoMono">{service.title}</h3>
      </div>
    </Link>
  )
}

export default ServicesCard
