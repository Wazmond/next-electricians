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
import ServicesTitle from './title'
import ServicesSection from './servicesSection'

type Props = {
  searchParams: Promise<{ service?: number }>
}
const Page = async ({ searchParams }: Props) => {
  const paramId: number = (await searchParams).service ?? 1

  return (
    <div className="flex flex-col flex-1">
      <HeaderBg />
      <div className="mt-16 w-full self-center flex flex-col text-center">
        <Suspense fallback={<p>Loading...</p>}>
          <ServicesTitle />
        </Suspense>
        <section className="bg-light-blue w-full items-center flex justify-center py-8">
          <Suspense fallback={<p>Loading...</p>}>
            <ServicesSection paramId={paramId} />
          </Suspense>
        </section>
      </div>
    </div>
  )
}

export default Page
