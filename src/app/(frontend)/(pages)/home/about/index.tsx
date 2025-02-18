import Image from 'next/image'
import React from 'react'
import aboutPhoto from 'public/images/next-about.jpg'

const About = () => {
  return (
    <>
      <h2 className="font-robotoSerif text-center">Who Are We and Why Choose Us?</h2>
      <div className="flex flex-col w-full items-center md:flex-row justify-center gap-8">
        <div className="w-auto max-w-[500px] h-auto bg-mono-200 rounded shadow-md p-4">
          <p className="text-wrap">
            {`We’re Lachlan and Hugh - licensed electricians with over five years of experience working with commercial projects, including solar and data installations. 
            Now, we’re bringing our expertise to homes and businesses, helping you create spaces with professional lighting, cabling, and electrical solutions. 
            Our goal is to provide high-quality electrical services that enhance your space while ensuring safety and efficiency. We take pride in every project we complete. `}
          </p>
        </div>
        <div className="rounded-lg overflow-clip relative h-auto w-full max-w-[375px] aspect-[3/4]">
          <Image src={aboutPhoto} alt="Photo of NextElectricians" className="object-cover" fill />
        </div>
      </div>
    </>
  )
}

export default About  