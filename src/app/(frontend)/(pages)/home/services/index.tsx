import React from 'react'

import { SlWrench } from 'react-icons/sl'
import { VscRobot } from 'react-icons/vsc'
import { HiOutlineLightBulb } from 'react-icons/hi'
import { RxLightningBolt, RxMagnifyingGlass } from 'react-icons/rx'
import { RiShieldFlashLine } from 'react-icons/ri'
import ServicesCard from './servicesCard'
import CTAButton from '@/components/ctaButton'

const HomeServices = () => {
  return (
    <>
      <div className="w-full max-w-[1178px] flex flex-col items-center gap-4">
        <h2 className="font-robotoSerif">Our Services</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quas eveniet iusto impedit harum architecto optio tempora. Voluptatum praesentium asperiores, sapiente, culpa repellat mollitia velit cupiditate quae dolorum, eum amet.</p>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-2 rounded-lg">
          <ServicesCard title="Maintenance" icon={SlWrench} />
          <ServicesCard title="Home Automation" icon={VscRobot} />
          <ServicesCard title="Power, Lights & Cabling" icon={HiOutlineLightBulb} />
          <ServicesCard title="Energy Saving Solutions" icon={RxLightningBolt} />
          <ServicesCard title="Fault Find & Rectification" icon={RxMagnifyingGlass} />
          <ServicesCard title="Surge Protection" icon={RiShieldFlashLine} />
        </div>
        <CTAButton href="#contact" className="bg-blue-500 hover:bg-blue-300 text-white" text="Get a Quote"/>
      </div>
    </>
  )
}

export default HomeServices
