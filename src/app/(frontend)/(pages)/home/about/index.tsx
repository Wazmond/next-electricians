import Image from 'next/image'
import React from 'react'
import aboutPhoto from 'public/images/next-about.jpg'

const About = () => {
  return (
    <>
      <h2 className="font-robotoSerif">Who Are We and Why Choose Us?</h2>
      <div className="flex flex-col max-md:items-center md:flex-row gap-8 px-8">
        <div className="bg-mono-200 rounded shadow-md max-w-[500px] p-4">
          <p className="text-wrap h-auto w-full">
            {`We’re Lachlan and Hugh - licensed electricians with over five years of experience working with commercial projects, including solar and data installations. 
            Now, we’re bringing our expertise to homes and businesses, helping you create spaces with professional lighting, cabling, and electrical solutions. 
            Our goal is to provide high-quality electrical services that enhance your space while ensuring safety and efficiency. We take pride in every project we complete. `}
          </p>
        </div>
        {/* Placeholder for Image */}
        <div className="border rounded-lg overflow-hidden relative w-full max-w-[375px] h-auto aspect-[3/4]">
          <Image src={aboutPhoto} alt="Photo of NextElectricians" className="object-cover" fill />
        </div>
      </div>
    </>
  )
}

export default About

{
  /* <p className="flex flex-1 min-w-[300px] bg-mono-200 py-2 px-4 text-wrap">
          {`Electricians based in Sydney. Domestic, commercials. Call us today for your free quote!
        NextElectricians strives to be a reliable and efficient who can deliver excellent solutions.
        We start and finish each job in the tidiest and safest way possible. We also provide ideas
        depending on the systems our clients need. Whether we’re hired for electrical, TV, or data
        cabling, our crew will ensure quality results every time. Whether you’re a domestic or
        commercial client, we can accommodate your needs. Rest assured that you’ll receive a clean
        and friendly service from us. We also have products from well-known electrical companies
        that come in a wide range of styles and designs`}
        </p> */
}
