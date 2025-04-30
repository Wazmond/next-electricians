import { Media, Service } from '@/payload-types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface Props {
  service: Service
  id: number
  index: number
}

const ServicesCard = ({ service, id, index }: Props) => {
  return (
    // Change width of card Padding or Margin to fill gap between card and details component
    <Link href={`/services?service=${index}`} scroll={false}>
      <div
        className={`${service.image ? 'flex' : 'hidden'} flex-row rounded-lg relative h-auto w-full p-4 gap-2 justify-between items-start bg-white border-2 border-white hover:cursor-pointer hover:border-next-blue`}
      >
        <div className="flex flex-col text-left font-robotoMono text-clip">
          <h3 className="text-blue-900">{service.title}</h3>
        </div>
        <div className="relative h-[84px] aspect-square">
          <Image
            src={(service.image as Media).url!}
            alt={(service.image as Media).alt!}
            height={(service.image as Media).height!}
            width={(service.image as Media).width!}
            className="object-cover"
          />
        </div>
      </div>
    </Link>
  )
}

export default ServicesCard
