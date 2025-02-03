// export async function getServerSideProps() {
//   const res = await fetch(`${process.env.POSTGRES_URL}/api/projects`)
//   const projects = await res.json()
//   return { props: { projects } }
// }
// export default function LandingImage({ projects }: any) {
//   return <div>{projects}</div>
// }
'use client'
import Image from 'next/image'
import Img1 from 'public/images/projects/recessedIndoor/IMG_5104.jpg'
import Img2 from 'public/images/projects/tvWallLighting/IMG_5579.jpg'
import Img3 from 'public/images/projects/tvs/tv1.jpg'
import { useCallback, useEffect, useState } from 'react'

import { MdKeyboardArrowLeft } from 'react-icons/md'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { FaRegCircle } from 'react-icons/fa'
import { FaCircle } from 'react-icons/fa'
import CTAButton from '@/components/ctaButton'
import Link from 'next/link'

const LandingImage = () => {
  const [img, setImg] = useState<number>(0)
  const [fade, setFade] = useState<boolean>(false)

  const images = [Img1, Img2, Img3]

  const prevImg = useCallback(() => {
    setFade(true)
    setTimeout(() => {
      setImg((prev) => (prev - 1 + images.length) % images.length)
      setFade(false)
    }, 150)
  }, [images.length])

  const nextImg = useCallback(() => {
    setFade(true)
    setTimeout(() => {
      setImg((prev) => (prev + 1) % images.length)
      setFade(false)
    }, 150)
  }, [images.length])

  useEffect(() => {
    const timer = setTimeout(nextImg, 3000)
    return () => clearTimeout(timer)
  }, [nextImg])

  useEffect(() => {
    const timer = setTimeout(prevImg, 3000)
    return () => clearTimeout(timer)
  }, [prevImg])

  return (
    <>
      {images && (
        <Image
          src={images[img]}
          alt="featuredImage"
          fill={true}
          className={`transition-opacity object-cover duration-300 ${fade ? 'opacity-0' : 'opacity-100'}`}
        />
      )}

      <div className="h-full w-full absolute z-[2] bg-black opacity-70" />

      <div className="absolute text-white z-[3] self-center text-center gap-2">
        <h2 className='font-robotoSerif tracking-[1px]'>lorem ipsum something here</h2>
        <h1 className="font-robotoSerif tracking-[1px] mt-2 mb-4">We are your <span className="font-medium">NextElectricians</span>!</h1>
        <div className='flex flex-row gap-4 justify-center'>
          <CTAButton href="#contact" className="bg-blue-500 hover:bg-blue-300 text-white" text="Get In Touch Now"/>
          <CTAButton href="/projects" className="border-white border-2 text-white" text="View Projects"/>
        </div>
      </div>

      <div className="absolute flex flex-col gap-2 self-end items-center z-[3] mb-4">
        <div className="text-mono-500 border border-mono-500 hover:border-white hover:text-white rounded-md px-4">
          <button aria-label="Find out more button">More Info</button>
        </div>

        <div className="flex flex-row text-mono-500">
          <button onClick={prevImg} aria-label="Previous Image">
            <MdKeyboardArrowLeft size={25} className="text-mono-500 hover:text-white" />
          </button>

          <div className="flex group">
            {images.map((_, index) => (
              <button
                key={index}
                aria-label="Select to view"
                onClick={() => setImg(index)}
                className="hover:text-white"
              >
                {index == img ? (
                  <FaCircle size={12} className="mx-2 text-mono-500 hover:text-white" />
                ) : (
                  <FaRegCircle size={10} className="mx-2 text-mono-500 hover:text-white" />
                )}
              </button>
            ))}
          </div>

          <button onClick={nextImg} aria-label="Next Image">
            <MdKeyboardArrowRight size={25} className="text-mono-500 hover:text-white" />
          </button>
        </div>
      </div>
    </>
  )
}
export default LandingImage
