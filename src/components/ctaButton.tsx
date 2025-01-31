import Link from 'next/link'
import React from 'react'

interface Props {
  href: string
  target?: string
  bgColor: string
  hovered: string
  textColor: string
  text: string
}
const CTAButton = ( props: Props ) => {
  return (
    <Link
    href={`${props.href}`}
    target={`${props.target}`}
    scroll={true}
    className={`bg-${props.bgColor} hover:bg-${props.hovered} text-${props.textColor} transition-colors duration-100 ease-in-out p-2 rounded-lg shadow-lg`}
  >
    {props.text}
  </Link>
  )
}

export default CTAButton