// import { payload } from '@/hooks/payload'
// import { unstable_cache } from 'next/cache'
import HeaderBg from '@/components/HeaderBg'
import React from 'react'

const Page = () => {
  // const cached = unstable_cache(
  //   async () => {
  //     const res = await payload.find({
  //       collection: "services"
  //     })
  //     return res
  //   },
  //   [],
  //   {
  //     revalidate: 60
  //   }
  // )

  // const services = await cached()

  // console.log(services)
  return (
    <div className="flex flex-col flex-1">
      <HeaderBg />
      <span className="w-full h-16" />
      <div className="w-full max-w-[1178px] self-center p-8 flex flex-col gap-4 text-center">
        <h1>Our Services</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus nesciunt veniam
          impedit tempore expedita possimus non corrupti, nihil sequi fuga voluptatem repellat
          sapiente, aliquid corporis inventore iusto harum obcaecati quo?
        </p>
        {/* <div className=''>
          Make it a grid element and render the <ServicesCard /> component
        </div> */}
      </div>
    </div>
  )
}

export default Page
