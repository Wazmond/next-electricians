import Image from 'next/image'
import React from 'react'
import Logo from 'public/images/logo-transparent-3.png'
import Link from 'next/link'
import { FaGoogle, FaInstagram, FaFacebookF } from 'react-icons/fa'
import Nav from './nav'

const Footer = () => {
  return (
    <div className="flex flex-col items-center gap-3 bg-mono-900 py-3">
      {/* <Image src={Logo} alt="logo" objectFit="contain" /> */}

      <h2 className="text-mono-400 tracking-widest font-robotoSerif">NextElectricians Pty Ltd</h2>
      <Nav />

      
      <div className="flex flex-row gap-5 items-center">
        <Link href={'https://g.co/kgs/DXmE18Y'} target="_blank" className="group">
          <FaGoogle
            size={20}
            className="transition-colors duration-100 ease-in-out group hover:text-mono-50 text-mono-500"
          />
        </Link>
        <Link
          href={'https://www.instagram.com/nextelectricians/'}
          target="_blank"
          className="group"
        >
          <FaInstagram
            size={20}
            className="transition-colors duration-100 ease-in-out group hover:text-mono-50 text-mono-500"
          />
        </Link>
        <Link href={'https://g.co/kgs/DXmE18Y'} target="_blank" className="group">
          <FaFacebookF
            size={20}
            className="transition-colors duration-100 ease-in-out group hover:text-mono-50 text-mono-500"
          />
        </Link>
      </div>
      <h3></h3>
    </div>
  )
}

export default Footer
