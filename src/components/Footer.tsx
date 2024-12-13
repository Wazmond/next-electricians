import Image from 'next/image'
import React from 'react'
import Logo from 'public/images/logo-transparent-3.png'

const Footer = () => {
  return (
    <div className="flex flex-row h-32 bg-stone-700">
      <Image src={Logo} alt="logo" objectFit="contain" />
    </div>
  )
}

export default Footer
