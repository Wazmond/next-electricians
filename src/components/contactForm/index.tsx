'use client'
import React from 'react'
import InputField from './inputFields'

interface Props {
  handleSubmit: any,
  state: any
}

const ContactForm = (props: Props) => {

  return (
    <form
    onSubmit={props.handleSubmit}
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
      disabled={props.state.submitting}
      className="w-auto bg-blue-400 text-white py-2 px-4 rounded-lg"
    >
      {props.state.submitting ? 'Submitting...' : 'Get a callback'}
    </button>
  </form>
  )
}

export default ContactForm