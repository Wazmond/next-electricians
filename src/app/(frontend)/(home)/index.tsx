import React from 'react'
import Landing from './landing'
import About from './about'
import Testimonials from './testimonials'
import Contact from './contact'

const Page = () => {
  return (
    <div className={`flex flex-col w-full overflow-hidden`}>
      {/* <div className='h-screen bg-stone-600'/> */}
      <Landing />
      <About />
      <Testimonials />
      <Contact />
    </div>
  )
}

export default Page
