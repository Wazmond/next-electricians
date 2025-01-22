import Link from 'next/link'
import React from 'react'

const Nav = () => {
  return (
    <div className="relative w-full flex flex-row flex-wrap text-mono-500 tracking-wider font-robotoSerif text-center justify-evenly">
      <Link href="/" className="group w-[calc(33%-1px)]">
        <h4 className="transition-colors duration-100 ease-in-out group hover:text-mono-50">
          Home
        </h4>
      </Link>
      <Link href="/about" className="group w-[calc(33%-1px)]">
        <h4 className="transition-colors duration-100 ease-in-out group hover:text-mono-50">
          About
        </h4>
      </Link>
      <Link href="/services" className="group w-[calc(33%-1px)]">
        <h4 className="transition-colors duration-100 ease-in-out group hover:text-mono-50">
          Services
        </h4>
      </Link>
      <Link href="/projects" className="group w-[calc(49.5%-1.5px)]">
        <h4 className="transition-colors duration-100 ease-in-out group hover:text-mono-50">
          Projects
        </h4>
      </Link>
      <Link href="/contact" className="group w-[calc(49.5%-1.5px)]">
        <h4 className="transition-colors duration-100 ease-in-out group hover:text-mono-50">
          Contact
        </h4>
      </Link>
    </div>
  )
}

export default Nav
