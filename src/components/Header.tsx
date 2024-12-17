'use client'
import React, { useEffect, useState } from 'react'
import Logo from 'public/images/logo-transparent-3.png'
import Image from 'next/image'

import { PiPhoneCallThin } from 'react-icons/pi'
import HeaderButtons from './HeaderButtons'

import { FaGoogle } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaFacebookF } from 'react-icons/fa'
import Link from 'next/link'

export const Header = () => {
  const [bgState, setBgState] = useState<boolean>(false)

  useEffect(() => {
    const transitionValue = 100
    const scrollValue = window.scrollY
    if (scrollValue > transitionValue) {
      setBgState(true)
    } else {
      setBgState(false)
    }
  }, [])

  return (
    <div className={`fixed z-10 flex flex-row h-16 w-full justify-evenly`}>
      <Image src={Logo} alt="logo" height={64} />
      <div
        className="flex h-12 gap-5 text-sm tracking-widest align-middle font-robotoSerif"
        style={{ color: 'var(--header-text-color)' }}
      >
        <HeaderButtons title="Home" page="" />
        <HeaderButtons title="About" page="about" />
        <HeaderButtons title="Services" page="services" />
        <HeaderButtons title="Projects" page="projects" />
        <HeaderButtons title="Contact" page="contact" />
      </div>
      {/* <div className="flex flex-row h-12 text-sm tracking-widest items-center">
        <PiPhoneCallThin size={30} color={'#fff'} />
        <h2 className="text-headerText align-middle font-robotoSerif">+61 400 000 000</h2>
      </div> */}
      <div className="flex flex-row gap-5 h-12 items-center">
        <Link href={'https://g.co/kgs/DXmE18Y'} target="_blank">
          <FaGoogle size={30} color={'#fff'} />
        </Link>
        <Link href={'https://www.instagram.com/nextelectricians/'} target="_blank">
          <FaInstagram size={30} color={'#fff'} />
        </Link>
        <Link href={'https://g.co/kgs/DXmE18Y'} target="_blank">
          <FaFacebookF size={30} color={'#fff'} />
        </Link>
      </div>
    </div>
  )
}
