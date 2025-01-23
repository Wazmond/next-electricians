import Link from 'next/link'
import React from 'react'

const Nav = () => {
  return (
    <div className="relative w-auto flex flex-col tracking-wider font-robotoSerif justify-center text-center">
      <div className="flex flex-row flex-wrap sm:flex-col">
        <Link href="/" className="flex-1 px-2">
          <p className="transition-colors duration-100 ease-in-out  hover:text-mono-50">Home</p>
        </Link>
        <span className="max-[245px]:hidden sm:hidden h-[8px] w-[8px] rounded-full bg-mono-400 self-center" />
        <Link href="/about" className="flex-1 px-2">
          <p className="transition-colors duration-100 ease-in-out  hover:text-mono-50">About</p>
        </Link>
        <span className="max-[245px]:hidden sm:hidden h-[8px] w-[8px] rounded-full bg-mono-400 self-center" />
        <Link href="/services" className="flex-1 px-2">
          <p className="transition-colors duration-100 ease-in-out  hover:text-mono-50">Services</p>
        </Link>
      </div>

      <div className="flex flex-row flex-wrap sm:flex-col">
        <span className="flex-1" />
        <Link href="/projects" className="flex-[2] px-2">
          <p className="transition-colors duration-100 ease-in-out  hover:text-mono-50">Projects</p>
        </Link>
        <span className="max-[245px]:hidden sm:hidden h-[8px] w-[8px] rounded-full bg-mono-400 self-center" />
        <Link href="/contact" className="flex-[2] px-2">
          <p className="transition-colors duration-100 ease-in-out  hover:text-mono-50">Contact</p>
        </Link>
        <span className="flex-1" />
      </div>
    </div>
  )
}

export default Nav
