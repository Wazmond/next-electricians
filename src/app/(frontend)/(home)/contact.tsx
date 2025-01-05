"use client";

import { useForm, ValidationError } from '@formspree/react'
import React from 'react'

const Contact = () => {
  const [state, handleSubmit] = useForm('xkggpblq')
  if (state.succeeded) {
    return <p>Thank's for your enquiry, a NextElectrician will be in touch with you shortly.</p>
  }

  return (
    <div className="w-full bg-white">
      <h2>Get in touch with NextElectricians</h2>

      <form onSubmit={handleSubmit} method="post">
        <div>
          <label className="uppercase">Name</label>
          <input name="name" id="name" type="text" />
          <ValidationError prefix="name" field="name" errors={state.errors} />
        </div>
        <div>
          <label className="uppercase">Phone Number</label>
          <input name="phone" id="phone" type="number" />
          <ValidationError prefix="phone" field="phone" errors={state.errors} />
        </div>
        <div>
          <label className="uppercase">Email Address</label>
          <input name="email" id="email" type="text" />
          <ValidationError prefix="email" field="email" errors={state.errors} />
        </div>
        <div>
          <label className="uppercase">Description</label>
          <input name="desc" id="desc" type="text" />
          <ValidationError prefix="desc" field="desc" errors={state.errors} />
        </div>
        <button type="submit" disabled={state.submitting}>
          Send
        </button>
      </form>
    </div>
  )
}

export default Contact
