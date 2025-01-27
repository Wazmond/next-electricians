'use client'

import ContactForm from '@/components/contactForm'
import { useForm } from '@formspree/react'
import React from 'react'

const Contact = () => {
  const [state, handleSubmit] = useForm('xkggpblq')

  return (
    <div className="self-center w-full max-w-[1178px] px-8 font-robotoSerif flex flex-col items-center gap-4 py-8">
      <h2 className="text-center">Get in touch with NextElectricians</h2>

      {state.succeeded ? (
        <p className="text-center">{`Thank's for your enquiry, a NextElectrician will be in touch with you shortly.`}</p>
      ) : (
        <ContactForm state={state} handleSubmit={handleSubmit}/>
      )}
    </div>
  )
}

export default Contact
