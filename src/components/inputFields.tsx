import { ValidationError } from '@formspree/react'
import React from 'react'

interface Props {
  state: any
  title?: string
  type: string
  name: string
  placeholder: string
}

const InputField = (props: Props) => {
  return (
    <div className="flex flex-col w-full gap-1 text-black">
      {props.title && <label className="uppercase text-sm">{props.title}</label>}
      {props.name == 'desc' ? (
        <textarea
          name={`${props.name}`}
          id={`${props.name}`}
          className="border py-2 px-4 resize-none text-sm"
          placeholder={`${props.placeholder}`}
          wrap="soft"
          rows={4}
        />
      ) : (
        <input
          name={`${props.name}`}
          id={`${props.name}`}
          type={`${props.type}`}
          className="border py-2 px-4 text-sm"
          placeholder={`${props.placeholder}`}
        />
      )}
      <ValidationError
        prefix={`${props.name}`}
        field={`${props.name}`}
        errors={props.state.errors}
      />
    </div>
  )
}

export default InputField
