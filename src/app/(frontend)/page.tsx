import React from 'react'
import Landing from './(home)/landing'
import About from './(home)/about'
import Testimonials from './(home)/testimonials'
import Contact from './(home)/contact'

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
