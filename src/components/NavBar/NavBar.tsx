import React from 'react'
import Logo from '../../images/logo-transparent-3.png'
import Image from 'next/image'
import Link from 'next/link'

export const NavBar = () => {
  return (
    <div>
      <Image src={Logo} alt="logo" />
      <div className="bg-red-500">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </div>
  )
}
