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
  const param: number = (await searchParams).service ?? 1

  console.log('Param: ' + param)
  console.log('Docs Length: ' + docs.length)
  console.log('Docs: ' + JSON.stringify(docs))

  return (
    <div className="max-w-[1178px] self-center flex flex-row">
      {/* Services column with all services */}
      <div className="flex flex-1 flex-col gap-2 h-auto">
        {docs.map((service, index) => (
          <ServicesCard service={service} index={index + 1} id={param} key={service.id} />
        ))}
      </div>
      {/* Services details half with details of services */}
      <div className="flex flex-col w-8 bg-white">
        <span
          style={{ flex: `${param === 1 ? '0' : `${param - 1}`}  1 0%` }}
          className={`bg-light-blue rounded-br-2xl transition-all duration-150 ease-out`}
        />
        <span className={`h-[120px]`} />
        <span
          style={{ flex: `${param === docs.length ? '0' : `${docs.length - param}`} 1 0%` }}
          className={`bg-light-blue rounded-tr-2xl transition-all duration-150 ease-out`}
        />
      </div>
      <div className="flex flex-1 flex-col items-center bg-white rounded-tr-lg rounded-br-lg rounded-bl-lg p-4 gap-4 z-[2]">
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
        {/* {docs && docs.map((service) => <ServicesCard key={service.id} service={service} />)} */}
        {/* <div>{(await searchParams).service && <h1>{(await searchParams).service}</h1>}</div> */}
      </div>
    </div>
  )
}

export default ServicesComponent
