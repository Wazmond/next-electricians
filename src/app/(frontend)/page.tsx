import React from 'react'
import Landing from './(pages)/home/landing'
import About from './(pages)/home/about'
import Testimonials from './(pages)/home/testimonials'
import Contact from './(pages)/home/contact'
import Projects from './(pages)/home/projects'
import HomeServices from './(pages)/home/services'
import EnquiryForm from '@/components/enquiryForm'
import { payload } from '@/hooks/payload'

const Page = async () => {
  const pageContent = await payload.findGlobal({ slug: 'homePage' })
  return (
    <div className={`flex flex-col w-full overflow-hidden`}>
      {/* <div className='h-screen bg-stone-600'/> */}
      <section className="relative h-[80vh] w-full overflow-hidden flex flex-row justify-center bg-black">
        <Landing pageContent={pageContent} />
      </section>
      <section className="w-full gap-6 py-8 flex flex-col items-center max-w-[1178px] px-8 self-center">
        <About pageContent={pageContent} />
      </section>
      <section className="w-full h-auto bg-mono-200 flex relative justify-center text-black py-8 px-8">
        <HomeServices pageContent={pageContent} />
      </section>
      <section className="gap-6 py-8 flex flex-col self-center w-full items-center max-w-[1178px] px-8">
        <Projects pageContent={pageContent} />
      </section>
      <EnquiryForm text={pageContent.enquiryTitle} buttonText="Enquire now!" />
      <section className="flex flex-col justify-center items-center py-8 bg-mono-200 w-full gap-4">
        <Testimonials pageContent={pageContent} />
      </section>
      <section
        className="self-center w-full max-w-[1178px] px-8 flex flex-col items-center gap-4 py-8"
        id="contact"
      >
        <Contact />
      </section>
    </div>
  )
}

export default Page
