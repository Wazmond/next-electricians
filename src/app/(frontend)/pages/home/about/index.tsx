import React from 'react'

const About = () => {
  return (
    <div className="bg-white gap-6 py-8 border flex flex-col items-center font-robotoSerif max-w-[1178px] px-8 w-full self-center">
      <h2>Who Are We and Why Choose Us?</h2>
      <div className="flex flex-col md:flex-row gap-8 px-8 md:px-0">
        <div className="flex-1 bg-mono-200 rounded shadow-md">
          <p className="text-wrap h-auto w-full">
            {`NextElectricians offers expert domestic and commercial electrical services. From installations to TV and data cabling, we ensure safe, tidy, and high-quality results. Call now for your free quote!`}
          </p>
        </div>
        {/* Placeholder for Image */}
        <div className="flex-1 md:flex-[2] ">
          <div className="w-64 h-64 bg-green-900 object-cover rounded-md"></div>
        </div>
      </div>
    </div>
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
