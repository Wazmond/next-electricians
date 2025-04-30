import EnquiryForm from '@/components/enquiryForm'
import HeaderBg from '@/components/HeaderBg'
import ServicesComponent from '@/components/servicesComponent'
import MiddleColumn from '@/components/servicesComponent/midCol'
import ServicesCard from '@/components/servicesComponent/servicesCard'
// import ServicesCard from '@/components/servicesCard'
import { payload } from '@/hooks/payload'
import { Media, Service } from '@/payload-types'
import Image from 'next/image'
import React, { Suspense } from 'react'

type Props = {
  searchParams: { service?: number }
}
const Page = async ({ searchParams }: Props) => {
  const pageContent = await payload.findGlobal({
    slug: 'servicesPage',
  })

  const { docs } = await payload.find({
    collection: 'services',
  })

  const param: number = searchParams.service ?? 1

  return (
    <div className="flex flex-col flex-1">
      <HeaderBg />
      <div className="mt-16 w-full self-center flex flex-col text-center">
        <div className="max-w-[1178px] self-center p-8 flex flex-col gap-4 text-center">
          <h1>{pageContent.title}</h1>
          <p>{pageContent.text}</p>
        </div>
        <EnquiryForm text={pageContent.enquiryTitle} buttonText="Enquire Now" />

        <section className="bg-light-blue w-full items-center flex justify-center py-8">
          <div className="max-w-[1178px] w-full self-center flex flex-row">
            {/* Services column with all services */}
            <div className="relative flex flex-1 flex-row h-min">
              <Suspense fallback={<></>}>
                <div className=" flex flex-col w-full gap-2">
                  {docs.map((service, index) => (
                    <ServicesCard
                      service={service}
                      index={index + 1}
                      param={param}
                      key={service.id}
                    />
                  ))}
                </div>
              </Suspense>
              <MiddleColumn param={param} docs={docs} />
            </div>

            <div
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
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Page
