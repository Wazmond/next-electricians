import ContactForm from '@/components/contactForm'
import HeaderBg from '@/components/HeaderBg'
import React from 'react'

const Page = () => {
  return (
    <div className="flex flex-col flex-1">
      <HeaderBg />
      <span className="w-full h-16" />
      <div className="self-center w-full max-w-[1178px] px-8 py-8 flex flex-col gap-4 items-center">
        <h1>Contact Us</h1>
        <ContactForm />
      </div>
    </div>
  )
}

export default Page
