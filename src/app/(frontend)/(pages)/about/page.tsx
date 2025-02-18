import React from 'react'

const Page = () => {
  return (
    <div className='flex flex-col flex-1'>
      <span className='fixed w-full h-16 bg-[rgba(46,46,46)]'/> 
      <span className='w-full h-16'/>
      <div className="w-full max-w-[1178px] self-center p-8 flex flex-col gap-4 text-center">
        <h1>About Us</h1>
        <p className="text-wrap">
            {`We’re Lachlan and Hugh - licensed electricians with over five years of experience working with commercial projects, including solar and data installations. 
            Now, we’re bringing our expertise to homes and businesses, helping you create spaces with professional lighting, cabling, and electrical solutions. 
            Our goal is to provide high-quality electrical services that enhance your space while ensuring safety and efficiency. We take pride in every project we complete. `}
          </p>      
      </div>
    </div>
  )
}

export default Page