import Image from 'next/image'
import BgImage from 'public/images/projects/tvWallLighting/IMG_5579.jpg'
import CTAButton from '@/components/ctaButton'
import { HomePage } from '@/payload-types'

interface Props {
  pageContent: HomePage
}
const LandingImage = ({ pageContent }: Props) => {
  return (
    <>
      <Image
        src={BgImage}
        alt="featuredImage"
        fill={true}
        className={`transition-opacity object-cover duration-300`}
      />

      <div className="h-full w-full absolute z-[2] bg-black opacity-70" />

      <div className="absolute text-white z-[3] self-center text-center gap-2">
        <h2 className="font-robotoSerif tracking-[1px]">{pageContent.subTitle}</h2>
        <h1 className="font-robotoSerif tracking-[1px] mt-2 mb-4">
          {pageContent.title ? (
            pageContent.title
          ) : (
            <>
              We are your <span className="font-medium">NextElectricians</span>!
            </>
          )}
        </h1>
        <div className="flex flex-row gap-4 justify-center">
          <CTAButton
            href="#contact"
            className="bg-blue-500 hover:bg-blue-300 text-white"
            text="Get In Touch Now"
          />
          <CTAButton
            href="#projects"
            className="border-white hover:bg-[rgba(255,255,255,0.3)] border-2 text-white"
            text="View Projects"
          />
        </div>
      </div>

      <div className="absolute flex flex-col gap-2 self-end items-center z-[3] mb-4">
        <div className="text-mono-500 border border-mono-500 hover:border-white hover:text-white rounded-md px-4">
          <button aria-label="Find out more button">More Info</button>
        </div>
      </div>
    </>
  )
}
export default LandingImage
