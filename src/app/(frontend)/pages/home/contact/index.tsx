'use client'

import InputField from './inputFields'
import { useForm } from '@formspree/react'
import React from 'react'

const Contact = () => {
  const [state, handleSubmit] = useForm('xkggpblq')

  return (
    <div className="w-full bg-white font-robotoSerif flex flex-col items-center gap-4 py-12 px-12">
      <h2 className="text-center">Get in touch with NextElectricians</h2>

      {state.succeeded ? (
        <p className='text-center'>{`Thank's for your enquiry, a NextElectrician will be in touch with you shortly.`}</p>
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
    </div>
  )
}

export default Contact
