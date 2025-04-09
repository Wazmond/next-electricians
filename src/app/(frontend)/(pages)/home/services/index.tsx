import React from 'react'

import { SlWrench } from 'react-icons/sl'
import { VscRobot } from 'react-icons/vsc'
import { HiOutlineLightBulb } from 'react-icons/hi'
import { RxLightningBolt, RxMagnifyingGlass } from 'react-icons/rx'
import { RiShieldFlashLine } from 'react-icons/ri'
import ServicesCard from './servicesCard'
import CTAButton from '@/components/ctaButton'
import { HomePage } from '@/payload-types'

interface Props {
  pageContent: HomePage
}
const HomeServices = ({ pageContent }: Props) => {
  return (
    <>
      <div className="w-full max-w-[1178px] flex flex-col items-center gap-4">
        <h2 className="font-robotoSerif">{pageContent.servicesTitle}</h2>
        <p className="text-center">{pageContent.servicesText}</p>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-2 rounded-lg">
          <ServicesCard title="Maintenance" icon={SlWrench} />
          <ServicesCard title="Intelligent Lighting Solutions" icon={VscRobot} />
          <ServicesCard title="Power, Lights & Cabling" icon={HiOutlineLightBulb} />
          <ServicesCard title="Energy Saving Solutions" icon={RxLightningBolt} />
          <ServicesCard title="Fault Find & Rectification" icon={RxMagnifyingGlass} />
          {/* <ServicesCard title="Data Cabling" icon={RiShieldFlashLine} /> */}
          <ServicesCard title="CCTV Installations" icon={RiShieldFlashLine} />
        </div>
        <CTAButton
          href="#contact"
          className="bg-blue-500 hover:bg-blue-300 text-white"
          text="Get a Quote"
        />
      </div>
    </>
  )
}

export default HomeServices
