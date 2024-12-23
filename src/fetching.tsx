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
import { useState } from 'react'

import { MdKeyboardArrowLeft } from 'react-icons/md'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { FaRegCircle } from 'react-icons/fa'
import { FaCircle } from 'react-icons/fa'

const LandingImage = () => {
  const [img, setImg] = useState<number>(0)
  const images = [Img1, Img2, Img3]

  const prevImg = () => {
    img - 1 < 0 ? setImg(2) : setImg(img - 1)
  }
  const nextImg = () => {
    img + 1 > 2 ? setImg(0) : setImg(img + 1)
  }

  return (
    <div className={`relative h-[80vh] w-full overflow-hidden flex flex-row justify-center`}>
      {images && <Image src={images[img]} alt="featuredImage" className="object-cover" />}
      <div className="h-full w-full absolute z-[2] bg-black opacity-70" />

      <div className="absolute flex flex-col gap-2 self-end items-center z-10 mb-4">
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
                  <FaCircle size={10} className="mx-2 text-mono-500 hover:text-white" />
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
