import React from 'react'
import Nav from './nav'
import Socials from '@/components/socials'

const Footer = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center px-12 gap-3 bg-mono-900 py-3 font-robotoSerif text-white">
      {/* <Image src={Logo} alt="logo" objectFit="contain" /> */}

      {/* <h3 className="text-mono-400 tracking-widest font-robotoSerif">NextElectricians Pty Ltd</h3> */}
      <span className="flex flex-1 " />
      <div className="flex flex-1 flex-col w-full">
        <h3>Explore</h3>
        <Nav />
      </div>

      <div className='flex-col text-center'>
        <h3 className='underline'>Contact Us</h3>
        <p>ABN: 64 682 401 510</p>
        <p>Hugh@NextElectricians.com.au</p>
        <p>Ph: 0435 367 571</p>
      </div>

      <div className="flex flex-1 flex-col">
        <h3 className="underline">Our Socials</h3>
        <div className="flex flex-row gap-5 items-center">
          <Socials size={20} base="text-mono-500" hovered="hover:text-mono-50" />
        </div>
      </div>
    </div>
  )
}

export default Footer
