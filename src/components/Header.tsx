import React from 'react'
import Logo from '../images/logo-transparent-3.png'
import Image from 'next/image'
import Link from 'next/link'

import { PiPhoneCallThin } from "react-icons/pi";

export const Header = () => {

  return (
    <div className={`fixed z-10 flex flex-row h-16 justify-evenly`}>
      <Image src={Logo} alt="logo" priority={true}/>
      <div className="flex gap-5 text-sm tracking-widest align-middle" style={{color: "var(--header-text-color)", fontFamily: "RobotoSerif"}}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <div className='flex flex-row text-sm tracking-widest align-middle'>
        <PiPhoneCallThin size={30} color={'#fff'} />
        <p className="text-headerText">+61 400 000 000</p>
      </div> 
    </div>
  )
}
