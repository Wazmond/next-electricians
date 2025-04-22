'use client'
import React, { useEffect, useState } from 'react'
import { IoClose } from 'react-icons/io5'
import Image from 'next/image'
import { Media, Project } from '@/payload-types'
import { useRouter } from 'next/navigation'

interface Props {
  data: Project
  isModal: boolean
}

const ProjectUi = ({ data, isModal }: Props) => {
  const [mainImage, setMainImage] = useState<number>(0)
  const router = useRouter()
  const handleImageClick = (index: number) => {
    setMainImage(index)
  }

  const formattedDate = new Date(data.date).toLocaleString('en-US', {
    month: 'long',
    year: 'numeric',
  })

  // Will need to create a placeholder box of images until the images load ( images ? image : placeholder )
  return (
    <div className="flex flex-col bg-white gap-4 p-4 w-full max-w-[1000px]">
      {/* Will need to configure sizing of the main and details bit */}
      <div className="flex flex-col h-auto md:flex-row items-center md:items-start gap-4">
        <div className="flex flex-col items-end order-1 md:order-2">
          {isModal && (
            <button className="bg-mono-600 rounded-full p-1" onClick={() => router.back()}>
              <IoClose size={32} color="white" />
            </button>
          )}
          <div className="text-start flex flex-col text-black gap-2">
            <h3 className="font-roboto">{data.title}</h3>
            <p className="text-mono-700 font-roboto text-xs">{formattedDate}</p>
            <p>{data.description}</p>
          </div>
        </div>
        <div
          className={`max-w-[500px] w-full md:min-w-[500px] max-h-[500px] h-auto flex relative order-2 md:order-1 `}
        >
          {(data.images[mainImage].image as Media).url ? (
            <Image
              src={(data.images[mainImage].image as Media).url!}
              alt={(data.images[mainImage].image as Media).alt!}
              height={(data.images[mainImage].image as Media).height!}
              width={(data.images[mainImage].image as Media).width!}
              className="object-contain"
            />
          ) : (
            <span className="h-[500px] w-[500px] flex-shrink bg-mono-500 animate-pulse" />
          )}
        </div>
      </div>

      <div className="h-auto w-full flex flex-row gap-4 items-start overflow-x-scroll">
        {data.images ? (
          data.images.map((image, index) => {
            return (
              <button
                key={image.id}
                onClick={() => handleImageClick(index)}
                className="h-auto w-auto flex flex-shrink-0"
              >
                <div className="max-h-[100px] max-w-[100px] h-auto w-auto relative ">
                  <Image
                    src={(image.image as Media).url!}
                    alt={(image.image as Media).alt!}
                    height={(image.image as Media).height!}
                    width={(image.image as Media).width!}
                    className="object-contain"
                  />
                </div>
              </button>
            )
          })
        ) : (
          <>
            <span className="h-[100px] w-[100px] flex-shrink-0 bg-mono-500 animate-pulse" />
            <span className="h-[100px] w-[100px] flex-shrink-0 bg-mono-500 animate-pulse" />
            <span className="h-[100px] w-[100px] flex-shrink-0 bg-mono-500 animate-pulse" />
          </>
        )}
      </div>
    </div>
  )
}

export default ProjectUi
