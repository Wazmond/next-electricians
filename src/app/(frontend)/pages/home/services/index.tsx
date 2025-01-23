import React from 'react'

import { SlWrench } from 'react-icons/sl'
import { VscRobot } from 'react-icons/vsc'
import { HiOutlineLightBulb } from 'react-icons/hi'
import { RxLightningBolt, RxMagnifyingGlass } from 'react-icons/rx'
import { RiShieldFlashLine } from 'react-icons/ri'
import ServicesCard from './servicesCard'

const HomeServices = () => {
  return (
    <div className="w-full h-auto bg-sky-600 flex relative justify-center text-white py-8 px-8">
      <div className="w-full max-w-[1178px] flex flex-col text-center gap-4">
        <h2>Our Services</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 rounded-lg overflow-clip">
          <ServicesCard title="Maintenance" icon={SlWrench} />
          <ServicesCard title="Home Automation" icon={VscRobot} />
          <ServicesCard title="Power, Lights & Cabling" icon={HiOutlineLightBulb} />
          <ServicesCard title="Energy Saving Solutions" icon={RxLightningBolt} />
          <ServicesCard title="Fault Find & Rectification" icon={RxMagnifyingGlass} />
          <ServicesCard title="Surge Protection" icon={RiShieldFlashLine} />
        </div>
      </div>
    </div>
  )
}

export default HomeServices
