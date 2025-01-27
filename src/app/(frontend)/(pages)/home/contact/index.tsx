import ContactForm from '@/components/contactForm'
import React from 'react'

const Contact = () => {
  return (
    <div className="self-center w-full max-w-[1178px] px-8 font-robotoSerif flex flex-col items-center gap-4 py-8">
      <h2 className="text-center">Get in touch with NextElectricians</h2>
      <ContactForm />
    </div>
  )
}

export default Contact
