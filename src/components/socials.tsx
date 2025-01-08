import Link from 'next/link'
import React from 'react'
import { FaFacebookF, FaGoogle, FaInstagram } from 'react-icons/fa'

interface Props {
    size: number,
    base: string,
    hovered: string,
}
const Socials: React.FC<Props> = (props) => {
  return (
    <>
      <Link href={'https://g.co/kgs/DXmE18Y'} target="_blank" aria-label="Google">
        <FaGoogle size={props.size} className={`${props.base} ${props.hovered}`} />
      </Link>
      <Link
        href={'https://www.instagram.com/nextelectricians/'}
        target="_blank"
        aria-label="Instagram"
      >
        <FaInstagram size={props.size} className={`${props.base} ${props.hovered}`} />
      </Link>
      <Link href={'https://g.co/kgs/DXmE18Y'} target="_blank" aria-label="Facebook">
        <FaFacebookF size={props.size} className={`${props.base} ${props.hovered}`} />
      </Link>
    </>
  )
}

export default Socials
