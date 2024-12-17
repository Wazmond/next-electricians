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
  const [menuState, setMenuState] = useState<boolean>(false)

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
    <div className={`fixed z-10 flex flex-row h-16 w-full justify-between md:justify-evenly px-5`}>
      <Image src={Logo} alt="logo" height={64} />
      <div
        // className=" md:flex transition-all duration-300 ease-in-out w-0 overflow-hidden md:w-[386.8px] h-12 gap-5 text-sm tracking-widest align-middle font-robotoSerif"
        className="hidden md:flex h-12 gap-5 text-sm tracking-widest align-middle font-robotoSerif"
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

      <div className="hidden md:flex flex-row gap-5 h-12 items-center">
        <Link href={'https://g.co/kgs/DXmE18Y'} target="_blank" aria-label="Google">
          <FaGoogle size={25} color={'#fff'} />
        </Link>
        <Link
          href={'https://www.instagram.com/nextelectricians/'}
          target="_blank"
          aria-label="Instagram"
        >
          <FaInstagram size={25} color={'#fff'} />
        </Link>
        <Link href={'https://g.co/kgs/DXmE18Y'} target="_blank" aria-label="Facebook">
          <FaFacebookF size={25} color={'#fff'} />
        </Link>
      </div>

      <div
        className="md:hidden flex flex-col h-12 w-12 items-center justify-evenly hover:cursor-pointer"
        aria-label="Menu Button"
      >
        <button
          className="flex flex-col justify-between h-6 w-8"
          onClick={() => {
            setMenuState(!menuState), console.log(menuState)
          }}
        >
          <span
            className={`bg-white h-0.5 w-8 transition-all ${menuState ? 'rotate-45 translate-y-2.5' : ''}`}
          />
          <span
            className={`bg-white h-0.5 w-8 transition-opacity ${menuState ? 'opacity-0' : 'opacity-100'}`}
          />
          <span
            className={`bg-white h-0.5 w-8 transition-all ${menuState ? '-rotate-45 -translate-y-2.5' : ''}`}
          />
        </button>
      </div>
    </div>
  )
}
