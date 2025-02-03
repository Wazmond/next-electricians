import Link from 'next/link'
import React from 'react'

interface Props {
  href: string
  target?: string
  className?: string
  text: string
}
const CTAButton = (props: Props) => {
  return (
    <Link
      href={`${props.href}`}
      target={props.target ? props.target : '_self'}
      scroll={true}
      className={`${props.className} transition-colors duration-100 ease-in-out p-2 rounded-lg shadow-lg font-robotoMono`}
    >
      {props.text}
    </Link>
  )
}

export default CTAButton
