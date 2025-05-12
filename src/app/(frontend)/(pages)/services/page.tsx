import HeaderBg from '@/components/HeaderBg'
import React, { Suspense } from 'react'
import ServicesTitle from './title'
import ServicesSection from './servicesSection'

const Page = () => {
  return (
    <div className="flex flex-col flex-1">
      <HeaderBg />
      <div className="mt-16 w-full self-center flex flex-col text-center">
        <Suspense fallback={<p>Loading...</p>}>
          <ServicesTitle />
        </Suspense>
        <section className="bg-light-blue w-full items-center flex justify-center py-8">
          <Suspense fallback={<p>Loading...</p>}>
            <ServicesSection />
          </Suspense>
        </section>
      </div>
    </div>
  )
}

export default Page
