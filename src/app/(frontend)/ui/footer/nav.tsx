import Link from 'next/link'
import React from 'react'

const Nav = () => {
  return (
    <div className="hidden sm:flex flex-row gap-5 text-mono-500 tracking-wider font-robotoSerif">
      <Link href="/" className="group">
        <h2 className="transition-colors duration-100 ease-in-out group hover:text-mono-50">
          Home
        </h2>
      </Link>
      <Link href="/about" className="group">
        <h2 className="transition-colors duration-100 ease-in-out group hover:text-mono-50">
          About
        </h2>
      </Link>
      <Link href="/services" className="group">
        <h2 className="transition-colors duration-100 ease-in-out group hover:text-mono-50">
          Services
        </h2>
      </Link>
      <Link href="/projects" className="group">
        <h2 className="transition-colors duration-100 ease-in-out group hover:text-mono-50">
          Projects
        </h2>
      </Link>
      <Link href="/contact" className="group">
        <h2 className="transition-colors duration-100 ease-in-out group hover:text-mono-50">
          Contact
        </h2>
      </Link>
    </div>
  )
}

export default Nav
