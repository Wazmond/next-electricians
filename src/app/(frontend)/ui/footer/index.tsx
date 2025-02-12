import React from 'react'
import Nav from './nav'
import Socials from '@/components/socials'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className="bg-mono-900 flex flex-col">
      {/* <Image src={Logo} alt="logo" objectFit="contain" /> */}

      {/* <h3 className="text-mono-400 tracking-widest font-robotoSerif">NextElectricians Pty Ltd</h3> */}
      {/* <span className="flex flex-1" /> */}
      <div className="h-full w-full max-sm:max-w-[450px] max-w-[1178px] place-self-center flex flex-col sm:flex-row py-3 px-12 gap-3 font-robotoSerif text-white">
        <div className="flex flex-1 flex-col w-full text-center text-mono-400">
          <h3 className="underline underline-offset-4 mb-1 text-white">Explore</h3>
          <Nav />
        </div>

        <div className="flex-col text-center text-mono-400">
          <h3 className="text-white underline underline-offset-4 mb-1">Contact Us</h3>
          <p>Licence: 468948C</p>
          <p>admin@NextElectricians.com.au</p>
          <p>Ph: 0435 367 571</p>
        </div>

        <div className="flex flex-1 flex-col text-center items-center">
          <h3 className="underline underline-offset-4 mb-2">Our Socials</h3>
          <div className="flex flex-row gap-5 items-center">
            <Socials size={20} base="text-mono-400" hovered="hover:text-mono-50" />
          </div>
        </div>
      </div>
      <div className="flex flex-row flex-wrap text-mono-500 gap-2 justify-center">
        <p>© 2025</p>
        <p>NextElectricians Pty Ltd</p>
        <p>ABN: 64 682 401 510</p>
      </div>
      <div className="flex flex-row flex-wrap text-mono-500 gap-2 justify-center text-sm">
        <Link href="/privacyPolicy" className="hover:text-mono-50">
          Privacy Policy
        </Link>
        <span className="h-0 w-2" />
        <Link href="" className="hover:text-mono-50">
          Terms and Conditions
        </Link>
      </div>
    </div>
  )
}

export default Footer
