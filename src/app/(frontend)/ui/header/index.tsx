'use client'
import React, { useEffect, useRef, useState } from 'react'
import LogoLight from 'public/images/next-logo-white.png'
import LogoDark from 'public/images/next-logo.png'
import Image from 'next/image'

import HeaderButtons from './headerButtons'

import Link from 'next/link'
import NavButtons from './smNav'
import Socials from '@/components/socials'

const Header = () => {
  const [bgState, setBgState] = useState<number>(0.0)
  const [menuState, setMenuState] = useState<boolean>(false)
  const menuRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handleClose = (e: MouseEvent) => {
      if (!menuRef.current?.contains(e.target as Node)) {
        setMenuState(false)
      }
    }
    window.addEventListener('click', handleClose)
    return () => {
      window.removeEventListener('click', handleClose)
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const transitionValue = 100
      const scrollValue = window.scrollY
      if (scrollValue < transitionValue) {
        setBgState(scrollValue / transitionValue)
      } else {
        setBgState(1)
      }
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
        className={`fixed z-[8] ${menuState ? 'h-full' : 'h-0'} w-screen transition-colors duration-150 ease-in-out`}
        style={{ backgroundColor: `rgba(0, 0, 0, ${menuState ? '0.7' : '0'}` }}
      >
        <div
          ref={menuRef}
          className={`fixed z-[9] flex flex-col transform ${menuState ? 'scale-y-100' : 'scale-y-0'} origin-top overflow-hidden w-full bg-white transition-transform duration-150 ease-in-out`}
        >
          <span className="h-20 border-b-2 border-mono-500" />
          <div className="font-robotoSerif text-lg tracking-widest">
            <NavButtons redir="" title="Home" setMenuState={setMenuState} />
            <NavButtons redir="about" title="About" setMenuState={setMenuState} />
            <NavButtons redir="services" title="Services" setMenuState={setMenuState} />
            <NavButtons redir="projects" title="Projects" setMenuState={setMenuState} />
            <NavButtons redir="contact" title="Contact" setMenuState={setMenuState} />
          </div>

          <div className={`flex flex-row gap-10 self-center my-2 py-4`}>
            <Socials size={25} base={'text-black'} hovered={'hover:text-mono-500'} />
          </div>
        </div>
      </div>

      <div
        className={`fixed z-10 flex flex-row h-20 w-full justify-between items-center md:justify-evenly px-5`}
        style={{ backgroundColor: `rgba(46, 46, 46, ${menuState ? '0' : bgState}` }}
        ref={menuRef}
      >
        <Link className={`relative aspect-[174/64] h-16`} href="/">
          <Image
            src={menuState ? LogoDark : LogoLight}
            alt="logo"
            className="object-fit"
            fill={true}
            priority={true}
          />
        </Link>
        <div
          className="hidden md:flex h-16 gap-8 text-lg tracking-widest align-middle font-robotoSerif"
          style={{ color: 'var(--header-text-color)' }}
        >
          <HeaderButtons title="Home" page="" />
          <HeaderButtons title="About" page="about" />
          <HeaderButtons title="Services" page="services" />
          <HeaderButtons title="Projects" page="projects" />
          <HeaderButtons title="Contact" page="contact" />
        </div>

        <div className="hidden md:flex flex-row gap-5 h-12 items-center">
          <Socials size={24} base={'text-white'} hovered={'hover:text-mono-500'} />
        </div>

        <button
          className={`${!menuState && 'md:hidden'} flex flex-col h-12 w-12 py-3 px-2 justify-between group hover:cursor-pointer`}
          aria-label="MenuButton"
          onClick={() => setMenuState(!menuState)}
        >
          <span
            className={`${menuState ? 'bg-black' : 'bg-white'} h-0.5 w-8 transition-all ${menuState ? 'rotate-45 translate-y-2.5' : ''}`}
          />
          <span
            className={`bg-white h-0.5 w-8 transition-all ${menuState ? 'opacity-0' : 'opacity-100'}`}
          />
          <span
            className={`${menuState ? 'bg-black' : 'bg-white'} h-0.5 w-8 transition-all ${menuState ? '-rotate-45 -translate-y-2.5' : ''}`}
          />
        </button>
      </div>
    </>
  )
}

export default Header
