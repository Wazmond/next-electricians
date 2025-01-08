import React from 'react'
import Nav from './nav'
import Socials from '@/components/socials'

const Footer = () => {
  return (
    <div className="flex flex-col items-center gap-3 bg-mono-900 py-3">
      {/* <Image src={Logo} alt="logo" objectFit="contain" /> */}

      <h2 className="text-mono-400 tracking-widest font-robotoSerif">NextElectricians Pty Ltd</h2>
      <Nav />

      <div className="flex flex-row gap-5 items-center">
        <Socials size={20} base="text-mono-500" hovered="hover:text-mono-50" />
      </div>
    </div>
  )
}

export default Footer
