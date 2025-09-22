import HeaderBg from '@/components/HeaderBg'
import ProjectsComponent from '@/components/projectsComponent'
import { payload } from '@/hooks/payload'
import React from 'react'
import Link from 'next/link'

const Page = async () => {
  const pageContent = await payload.findGlobal({ slug: 'projectsPage' })
  return (
    <div className="flex flex-col flex-1">
      <HeaderBg />
      <span className="w-full h-16" />
      <div className="w-full max-w-[1178px] self-center p-8 flex flex-col gap-4 text-center">
        <h1>{pageContent?.title}</h1>
        <p className="text-center">{pageContent?.text}</p>
        <p className="text-center">{"Have a project in mind? Big or small, we're ready to help bring it to life."}</p>
        <p className="text-center"><Link href={"/contact"} className={'text-blue-800'}>Contact us</Link> to get started</p>
        <ProjectsComponent />
      </div>
    </div>
  )
}

export default Page

//Here’s a look at some of our recent work:
//
// 🔧 University Gym Electrical Upgrade – Sydney
// Scope: Full electrical upgrade for a university gym facility
// Works:
//
// New switchboard installation
//
// LED high bay lighting
//
// Power upgrades for gym equipment
//
// Data and comms cabling throughout
//
// Emergency lighting & compliance
//
// 🏢 Commercial Office Fit-Out – Surry Hills
// Scope: Complete fit-out for a modern tech office
// Works:
//
// Custom lighting layout
//
// Power distribution and floor boxes
//
// Structured data cabling
//
// Boardroom AV integration
//
// Security and access control wiring
//
// 🏠 Luxury Residential Renovation – Inner West
// Scope: Electrical works for a full home renovation
// Works:
//
// Smart lighting and automation
//
// EV charger install
//
// Rewiring and switchboard upgrade
//
// Outdoor and garden lighting
//
// Feature pendant and strip lighting
//
// 🧰 Ongoing Maintenance – Strata Properties
// Scope: Electrical servicing for multiple apartment blocks
// Services Provided:
//
// Fault finding & repairs
//
// Lighting upgrades in common areas
//
// Smoke alarm compliance
//
// Electrical testing & tagging
//
// Preventative maintenance
//
// Have a project in mind? Big or small, we’re ready to help bring it to life.