import { payload } from '@/hooks/payload'
import React, { Suspense } from 'react'
import ServicesCard from './servicesCard'
import { Media, Service } from '@/payload-types'
import Image from 'next/image'

type Props = {
  searchParams: Promise<{ service?: number }>
}

const ServicesComponent = async ({ searchParams }: Props) => {
  const { docs } = await payload.find({
    collection: 'services',
  })

  // console.log(await searchParams)
  const param: number = (await searchParams).service ?? 0

  console.log('Param: ' + param)
  console.log('Docs Length: ' + docs.length)

  return (
    <div className="p-8 flex flex-row bg-light-blue w-full">
      {/* Services column with all services */}
      <div className="flex flex-col gap-2 h-auto flex-1">
        {docs.map((service, index) => (
          <ServicesCard service={service} index={index + 1} id={param} key={service.id} />
        ))}
      </div>
      {/* Services details half with details of services */}
      <div className="flex flex-col h-full w-8 bg-white">
        <span
          style={{ height: `calc(${param == 1 ? 0 : param - 1}/${docs.length})` }}
          className={`bg-light-blue`}
        />
        <span style={{ height: `calc(1/${docs.length})` }} className={``} />
        <span
          style={{
            height: `calc(${param == docs.length ? 0 : docs.length - param}/${docs.length})`,
          }}
          className={`bg-light-blue`}
        />
      </div>
      <div className="flex flex-col items-center bg-white rounded-tr-lg rounded-br-lg rounded-bl-lg flex-1 p-4 gap-4 z-[2]">
        <Suspense fallback={<></>}>
          <div className="relative w-full aspect-auto">
            <Image
              src={(docs[param].image as Media).url!}
              alt={(docs[param].image as Media).alt}
              height={(docs[param].image as Media).height as number}
              width={(docs[param].image as Media).width as number}
              className="object-contain"
            />
          </div>

          <h3>{docs[param].title}</h3>
          <p>{docs[param].description}</p>
        </Suspense>
      </div>
      {/* {docs && docs.map((service) => <ServicesCard key={service.id} service={service} />)} */}
      {/* <div>{(await searchParams).service && <h1>{(await searchParams).service}</h1>}</div> */}
    </div>
  )
}

export default ServicesComponent
