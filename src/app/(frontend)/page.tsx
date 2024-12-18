import { Header } from '@/components/Header'
import React from 'react'
import Landing from './(home)/landing'
import About from './(home)/about'
import Footer from '@/components/Footer'

const Page = () => {
  return (
    <div>
      {/* <div className='h-screen bg-stone-600'/> */}
      <Header />
      <Landing />
      <About />
      <Footer />
    </div>
  )
}

export default Page
