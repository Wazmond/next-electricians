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
import Img1 from 'public/images/Contemporary-Bathroom-Lighting-and-Design.webp'
import Img2 from 'public/images/driveway-lighting-that-match-a-modern-homes-aesthetic.webp'
import Img3 from 'public/images/gen_inside.webp'
import { useCallback, useEffect, useState } from 'react'

import { MdKeyboardArrowLeft } from 'react-icons/md'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { FaRegCircle } from 'react-icons/fa'
import { FaCircle } from 'react-icons/fa'

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
    <div
      className={`relative h-[80vh] w-full overflow-hidden flex flex-row justify-center bg-black`}
    >
      {images && (
        <Image
          src={images[img]}
          alt="featuredImage"
          fill={true}
          className={`transition-opacity duration-300 ${fade ? 'opacity-0' : 'opacity-100'}`}
        />
      )}

      <div className="h-full w-full absolute z-[2] bg-black opacity-70" />

      <div className="absolute text-white z-[3] self-center text-center">
        <h2>We are your NextElectricians!</h2>
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
    </div>
  )
}
export default LandingImage
