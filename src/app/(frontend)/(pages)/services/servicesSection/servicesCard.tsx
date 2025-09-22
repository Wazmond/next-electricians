'use client'
import { Service } from '@/payload-types'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

interface Props {
  service: Service
  index: number
  serviceParam: number
}

const ServicesCard = ({ service, index, serviceParam }: Props) => {
  const [borderRadius, setBorderRadius] = useState<string>('12px')

  useEffect(() => {
    if (window.innerWidth > 768 && serviceParam === index) {
      setBorderRadius('12px 0 0 12px')
    } else {
      setBorderRadius('12px')
    }
  }, [serviceParam, index])

  return (
    <div
      className="bg-[#f6f6f6] transition-all duration-150 ease-in-out rounded-lg"
      style={{ borderRadius: borderRadius }}
    >
      <Link
        href={`/services?service=${index}`}
        replace={true}
        scroll={false}
        onClick={() => console.log(index + ' has been pressed')}
      >
        <div
          style={{ borderRadius: borderRadius }}
          className={`${service ? 'flex' : 'hidden'} flex-row rounded-xl relative h-16 w-full px-4 gap-2 items-center bg-white border-2 border-white hover:cursor-pointer hover:border-next-blue`}
        >
          <h3 className="text-blue-900 font-robotoMono tracking-normal">{service.title}</h3>
        </div>
      </Link>
      <div
        className={`${serviceParam === index && 'scale-y-100'} scale-y-0 md:hidden transform origin-top transition-transform duration-200 ease-in-out w-full`}
      >
        <p
          className={`${serviceParam === index ? 'inline-block' : 'hidden'} p-4 text-left tracking-wider leading-relaxed`}
        >
          {service.description}
        </p>
      </div>
    </div>
  )
}

export default ServicesCard
