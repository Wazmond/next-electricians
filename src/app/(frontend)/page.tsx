import React from 'react'
import Landing from './(home)/landing'
import About from './(home)/about'
import Testimonials from './(home)/testimonials'

const Page = () => {
  return (
    <div>
      {/* <div className='h-screen bg-stone-600'/> */}
      <Landing />
      <About />
      <Testimonials />
    </div>
  )
}

export default Page
