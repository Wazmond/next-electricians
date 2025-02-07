'use client'
import React from 'react'
import InputField from './inputFields'
import { useForm } from '@formspree/react'

const ContactForm = () => {
  const [state, handleSubmit] = useForm('xvgzqrry')

  return (
    <>
      {state.succeeded ? (
        <p className="text-center">{`Thank's for your enquiry, a NextElectrician will be in touch with you shortly.`}</p>
      ) : (
        <form
          onSubmit={handleSubmit}
          method="post"
          className="flex flex-col gap-4 items-center w-full max-w-lg"
        >
          <InputField state name="name" title="Name" type="text" placeholder="e.g John Smith" />
          <InputField
            state
            name="phone"
            title="Phone Number"
            type="tel"
            placeholder="e.g 0412 345 678"
          />
          <InputField
            state
            name="email"
            title="Email Address"
            type="email"
            placeholder="e.g email.address@example.com"
          />
          <InputField
            state
            name="desc"
            title="Description"
            type="text"
            placeholder="e.g I want my home to look stunning, please do some lighting magic!"
          />
          <button
            type="submit"
            disabled={state.submitting}
            className="w-auto bg-blue-400 text-white py-2 px-4 rounded-lg"
          >
            {state.submitting ? 'Submitting...' : 'Get a callback'}
          </button>
        </form>
      )}
    </>
  )
}

export default ContactForm
