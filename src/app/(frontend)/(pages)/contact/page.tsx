import ContactForm from '@/components/contactForm'
import React from 'react'

const Page = () => {
  return (
    <div className='flex flex-col flex-1'>
      <span className='fixed w-full h-16 bg-[rgba(46,46,46)]'/> 
      <span className='w-full h-16'/>
      <h1>Contact Us</h1>
      <ContactForm />

    </div>
  )
}

export default Page