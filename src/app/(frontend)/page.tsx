import React from 'react'
import Landing from './pages/home/landing'
import About from './pages/home/about'
import Testimonials from './pages/home/testimonials'
import Contact from './pages/home/contact'
import Projects from './pages/home/projects'
import HomeServices from './pages/home/services'

const Page = () => {
  return (
    <div className={`flex flex-col w-full overflow-hidden`}>
      {/* <div className='h-screen bg-stone-600'/> */}
      <Landing />
      <About />
      <HomeServices />
      <Projects />
      <Testimonials />
      <Contact />
    </div>
  )
}

export default Page
