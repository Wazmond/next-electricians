'use client'
import { useForm } from '@formspree/react'
import React from 'react'
import InputField from '../inputFields'

interface Props {
  text?: string
  buttonText: string
}
const EnquireForm = (props: Props) => {
  const { text, buttonText } = props

  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORM_KEY as string)

  return (
    <div className="w-full py-4 px-8 bg-next-blue text-white flex flex-col gap-4 items-center font-robotoMono">
      {text && <h2 className="font-medium">{text}</h2>}
      {state.succeeded ? (
        <p className="text-center">{`Thank's for your enquiry, a NextElectrician will be in touch with you shortly.`}</p>
      ) : (
        <form
          onSubmit={handleSubmit}
          method="post"
          className="flex flex-row max-[900px]:flex-wrap max-[900px]:gap-2 gap-6 items-center justify-center"
        >
          <InputField state name="name" type="text" placeholder="Name" />
          <InputField state name="phone" type="tel" placeholder="Phone Number" />
          <InputField state name="email" type="email" placeholder="Email Address" />
          <button
            type="submit"
            disabled={state.submitting}
            className="max-[900px]:w-auto w-full bg-white text-black py-2 px-4 rounded-lg border-2 border-white hover:border-black hover:bg-mono-200"
          >
            {state.submitting ? 'Submitting...' : 'Enquire Now!'}
          </button>
        </form>
      )}
    </div>
  )
}

export default EnquireForm
