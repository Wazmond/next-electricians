import Link from 'next/link'
import React from 'react'

const Nav = () => {
  return (
    <div className="relative w-full flex flex-col text-mono-500 tracking-wider font-robotoSerif justify-center text-center">
      <div className="flex flex-row sm:flex-col">
        <Link href="/" className="flex-1">
          <h4 className="transition-colors duration-100 ease-in-out  hover:text-mono-50">Home</h4>
        </Link>
        <span className="sm:hidden h-[8px] w-[8px] rounded-full bg-mono-500 self-center" />
        <Link href="/about" className="flex-1">
          <h4 className="transition-colors duration-100 ease-in-out  hover:text-mono-50">About</h4>
        </Link>
        <span className="sm:hidden h-[8px] w-[8px] rounded-full bg-mono-500 self-center" />
        <Link href="/services" className="flex-1">
          <h4 className="transition-colors duration-100 ease-in-out  hover:text-mono-50">
            Services
          </h4>
        </Link>
      </div>

      <div className="flex flex-row sm:flex-col">
        <span className="flex-1" />
        <Link href="/projects" className="flex-[2]">
          <h4 className="transition-colors duration-100 ease-in-out  hover:text-mono-50">
            Projects
          </h4>
        </Link>
        <span className="sm:hidden h-[8px] w-[8px] rounded-full bg-mono-500 self-center" />
        <Link href="/contact" className="flex-[2]">
          <h4 className="transition-colors duration-100 ease-in-out  hover:text-mono-50">
            Contact
          </h4>
        </Link>
        <span className="flex-1" />
      </div>
    </div>
  )
}

export default Nav
