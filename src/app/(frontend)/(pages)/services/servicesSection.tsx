import MiddleColumn from '@/components/servicesComponent/midCol'
import ServicesCard from '@/components/servicesComponent/servicesCard'
import { payload } from '@/hooks/payload'
import { Media } from '@/payload-types'
import Image from 'next/image'
import React from 'react'

interface Props {
  paramId: number
}

const ServicesSection = async ({ paramId }: Props) => {
  const { docs } = await payload.find({
    collection: 'services',
  })

  return (
    <div className="max-w-[1178px] w-full self-center flex flex-row">
      {/* Services column with all services */}
      <div className="relative flex flex-1 flex-row h-min">
        <div className=" flex flex-col w-full gap-2">
          {docs.map((service, index) => (
            <ServicesCard service={service} index={index + 1} param={paramId} key={service.id} />
          ))}
        </div>
        <MiddleColumn param={paramId} docs={docs} />
      </div>
      <div
        style={{
          borderTopLeftRadius: `${paramId == 1 ? '0' : '12px'}`,
          borderBottomLeftRadius: `${paramId == docs.length ? '0' : '12px'}`,
        }}
        className="flex flex-1 flex-col items-center bg-white rounded-tr-xl rounded-br-xl rounded-bl-lg p-4 gap-4 z-[2]"
      >
        <div className="relative w-full h-[400px] aspect-auto flex items-center justify-center">
          {/* <Image
            src={(docs[paramId - 1].image as Media).url!}
            alt={(docs[paramId - 1].image as Media).alt}
            height={(docs[paramId - 1].image as Media).height as number}
            width={(docs[paramId - 1].image as Media).width as number}
            className="object-contain max-w-full max-h-full"
          /> */}
        </div>

        <h3>{docs[paramId - 1].title}</h3>
        <p>{docs[paramId - 1].description}</p>
      </div>
    </div>
  )
}

export default ServicesSection
