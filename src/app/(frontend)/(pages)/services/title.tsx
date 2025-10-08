import EnquiryForm from '@/components/enquiryForm'
import { payload } from '@/hooks/payload'
import React from 'react'

const ServicesTitle = async () => {
  const pageContent = await payload.findGlobal({
    slug: 'servicesPage',
  })

  return (
    <>
      <div className="max-w-[1178px] self-center p-8 flex flex-col gap-4 text-center">
        <h1>{pageContent.title}</h1>
        <p>{pageContent.text}</p>
        <p></p>
      </div>
      <EnquiryForm text={pageContent.enquiryTitle} buttonText="Enquire Now" />
    </>
  )
}

export default ServicesTitle

//⚡ General Electrical
// Power point installations and upgrades
//
// Lighting design, installation & LED upgrades
//
// Switchboard upgrades and safety checks
//
// Rewiring and electrical fit-outs
//
// Smoke alarm installation & compliance
//
// Ceiling fans and exhaust systems
//
// 🏗️ Commercial Projects
// Office and retail fit-outs
//
// Power and lighting solutions for businesses
//
// Energy-efficient lighting upgrades
//
// Maintenance and scheduled servicing
//
// Emergency and exit lighting systems
//
// Electrical compliance & certification
//
// 🏠 Residential Services
// New builds and renovations
//
// Smart home wiring & automation
//
// Appliance installations
//
// Home theatre & data cabling
//
// Security lighting and systems
//
// EV charger installations
//
// 📡 Communications & Data
// Structured cabling (Cat6, Cat6A, Cat7)
//
// Fibre optic installation and termination
//
// Network racks and patch panels
//
// Data point installation
//
// Audio-visual setups
//
// NBN-ready wiring
//
// 🛠️ Maintenance & Repairs
// Fault finding and troubleshooting
//
// 24/7 emergency electrical services
//
// Preventative maintenance programs
//
// Thermal imaging and safety audits
//
// Electrical testing & tagging
//
// Ongoing support and service contracts