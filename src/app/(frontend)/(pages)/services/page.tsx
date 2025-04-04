// import { payload } from '@/hooks/payload'
// import { unstable_cache } from 'next/cache'
import HeaderBg from '@/components/HeaderBg'
import ServicesCard from '@/components/servicesCard'
import { payload } from '@/hooks/payload'
import { Service } from '@/payload-types'
import { unstable_cache } from 'next/cache'
import React from 'react'

const Page = async () => {
  const cached = unstable_cache(
    async () => {
      const res = await payload.find({
        collection: 'services',
      })
      return res
    },
    [],
    {
      revalidate: 60,
    },
  )

  const { docs } = await cached()
  return (
    <div className="flex flex-col flex-1">
      <HeaderBg />
      <span className="w-full h-16" />
      <div className="w-full self-center flex flex-col gap-4 text-center">
        <div className="max-w-[1178px] self-center p-8 flex flex-col gap-4 text-center">
          <h1>Our Services</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus nesciunt veniam
            impedit tempore expedita possimus non corrupti, nihil sequi fuga voluptatem repellat
            sapiente, aliquid corporis inventore iusto harum obcaecati quo?
          </p>
        </div>
        <div className="w-full p-8 bg-mono-200 items-center flex justify-center">
          <div className="w-full max-w-[1178px] grid grid-cols-2 gap-16">
            {docs.map((service: Service, _) => (
              <ServicesCard service={service} key={service.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
