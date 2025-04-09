import Image from 'next/image'
import React from 'react'
import aboutPhoto from 'public/images/next-about.jpg'
import { HomePage, Media } from '@/payload-types'

interface Props {
  pageContent: HomePage
}

const About = ({ pageContent }: Props) => {
  return (
    <>
      <h2 className="font-robotoSerif text-center">{pageContent.aboutTitle}</h2>
      <div className="flex flex-col w-full items-center md:flex-row justify-center gap-8">
        <div className="w-auto max-w-[500px] h-auto bg-mono-200 rounded shadow-md p-4">
          <p className="text-wrap">{pageContent.aboutText}</p>
        </div>
        <div className="rounded-lg overflow-clip relative h-auto w-full max-w-[375px] aspect-[3/4]">
          <Image
            src={(pageContent.aboutImage as Media).url!}
            alt={(pageContent.aboutImage as Media).alt!}
            className="object-cover"
            fill
          />
        </div>
      </div>
    </>
  )
}

export default About
