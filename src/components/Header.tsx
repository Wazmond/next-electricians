'use client'
import React, { useEffect, useState } from 'react'
import Logo from 'public/images/logo-transparent-3.png'
import Image from 'next/image'

import { PiPhoneCallThin } from 'react-icons/pi'
import HeaderButtons from './header/HeaderButtons'

import { FaGoogle } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaFacebookF } from 'react-icons/fa'
import Link from 'next/link'
import NavButtons from './header/SmNav'
import Socials from './header/socials'

export const Header = () => {
  const [bgState, setBgState] = useState<number>(0.0)
  const [menuState, setMenuState] = useState<boolean>(false)

  useEffect(() => {
    const handleScroll = () => {
      const transitionValue = 100
      const scrollValue = window.scrollY
      scrollValue < transitionValue ? setBgState(scrollValue / transitionValue) : setBgState(1)
    }
    handleScroll()

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <div
        className={`fixed z-[9] flex flex-col transform ${menuState ? 'scale-y-100' : 'scale-y-0'} origin-top overflow-hidden w-full bg-white transition-transform duration-150 ease-in-out`}
      >
        <span className="h-16 border-b-2 border-mono-500" />
        <div>
          <NavButtons redir="" title="Home" setMenuState={setMenuState} />
          <NavButtons redir="about" title="About" setMenuState={setMenuState} />
          <NavButtons redir="services" title="Services" setMenuState={setMenuState} />
          <NavButtons redir="projects" title="Projects" setMenuState={setMenuState} />
          <NavButtons redir="contact" title="Contact" setMenuState={setMenuState} />
        </div>

        <div className={`flex flex-row gap-5 self-center my-2`}>
          <Socials size={25} base={'black'} hovered={'mono-500'} />
        </div>
      </div>

      <div
        className={`fixed z-10 flex flex-row h-16 w-full justify-between items-center md:justify-evenly px-5`}
        style={{ backgroundColor: `rgba(46, 46, 46, ${bgState}` }}
      >
        <div className={`relative aspect-[174/64] h-12`}>
          <Image src={Logo} alt="logo" fill={true} objectFit="contain" />
        </div>
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
          <Socials size={20} base={'white'} hovered={'mono-500'} />
        </div>

        <div
          className={`${!menuState && 'md:hidden'} flex flex-col h-12 w-12 items-center justify-evenly hover:cursor-pointer`}
          aria-label="Menu Button"
        >
          <button
            className="flex flex-col justify-between h-6 w-8 group"
            onClick={() => setMenuState(!menuState)}
          >
            <span
              className={`${menuState ? 'bg-black' : 'bg-white'} group-hover:bg-mono-500 h-0.5 w-8 transition-all ${menuState ? 'rotate-45 translate-y-2.5' : ''}`}
            />
            <span
              className={`bg-white h-0.5 w-8 transition-all group-hover:bg-mono-500 ${menuState ? 'opacity-0' : 'opacity-100'}`}
            />
            <span
              className={`${menuState ? 'bg-black' : 'bg-white'} group-hover:bg-mono-500 h-0.5 w-8 transition-all ${menuState ? '-rotate-45 -translate-y-2.5' : ''}`}
            />
          </button>
        </div>
      </div>
    </>
  )
}
