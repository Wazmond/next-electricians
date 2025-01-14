import React from 'react'

const About = () => {
  return (
    <>
      <div className="bg-white md:px-12 py-4 border flex flex-col justify-center items-center font-robotoSerif">
        <h2>Who are we and why us?</h2>
        <div className="flex flex-row flex-1 gap-4 flex-wrap items-center justify-center">
          <p className="flex flex-1 bg-mono-200 py-2 px-4 text-wrap">
            {`NextElectricians offers expert domestic and commercial electrical services. From installations to TV and data cabling, we ensure safe, tidy, and high-quality results. Call now for your free quote!`}
          </p>
          {/* Personal image */}
          {/* <Image /> */}
          <div className="flex max-w-[800px]">
            <span className="h-[750px] w-[1000px] bg-green-900 object-cover" />
          </div>
        </div>
      </div>

      <div className="bg-white md:px-12 py-8 border flex flex-col items-center font-robotoSerif">
        <h2>Who Are We and Why Choose Us?</h2>
        <div className="flex flex-row flex-wrap max-w-[1112px] gap-6 items-center justify-center">
          <p className="flex flex-1 bg-mono-200 p-4 rounded shadow-md text-center">
            {`NextElectricians offers expert domestic and commercial electrical services. From installations to TV and data cabling, we ensure safe, tidy, and high-quality results. Call now for your free quote!`}
          </p>
          {/* Placeholder for Image */}
          <div className="flex flex-1">
            <div className="w-[1000px] h-[1000px] bg-green-900 object-cover rounded-md"></div>
          </div>
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
