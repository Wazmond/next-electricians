import { payload } from '@/hooks/payload'
import React, { Suspense } from 'react'
import ServicesCard from './servicesCard'
import { Media, Service } from '@/payload-types'
import Image from 'next/image'
import MiddleColumn from './midCol'

type Props = {
  searchParams: Promise<{ service?: number }>
}

const ServicesComponent = async ({ searchParams }: Props) => {
  const { docs } = await payload.find({
    collection: 'services',
  })

  const param: number = (await searchParams).service ?? 1

  return (
    <div className="max-w-[1178px] w-full self-center flex flex-row">
      {/* Services column with all services */}
      <div className="relative flex flex-1 flex-row h-min">
        <div className=" flex flex-col w-full gap-2">
          {docs.map((service, index) => (
            <ServicesCard service={service} index={index + 1} param={param} key={service.id} />
          ))}
        </div>
        <MiddleColumn param={param} docs={docs} />
      </div>

      {/* <div
        style={{
          borderTopLeftRadius: `${param == 1 ? '0' : '12px'}`,
          borderBottomLeftRadius: `${param == docs.length ? '0' : '12px'}`,
        }}
        className="flex flex-1 flex-col items-center bg-white rounded-tr-xl rounded-br-xl rounded-bl-lg p-4 gap-4 z-[2]"
      >
        <Suspense fallback={<></>}>
          <div className="relative w-full h-[400px] aspect-auto flex items-center justify-center">
            <Image
              src={(docs[param - 1].image as Media).url!}
              alt={(docs[param - 1].image as Media).alt}
              height={(docs[param - 1].image as Media).height as number}
              width={(docs[param - 1].image as Media).width as number}
              className="object-contain max-w-full max-h-full"
            />
          </div>

          <h3>{docs[param - 1].title}</h3>
          <p>{docs[param - 1].description}</p>
        </Suspense>
      </div> */}
    </div>
  )
}

export default ServicesComponent
