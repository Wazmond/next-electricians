import React from 'react'
import Stars from '@/components/stars'
import Image from 'next/image'

interface Props {
  name: string
  profile: string | undefined
  review: string
  className?: string
}

const ReviewCard = (props: Props) => {
  return (
    <div
      className={`w-auto md:w-[350px] flex flex-col rounded-lg p-4 gap-4 bg-white shadow-lg ${props.className}`}
    >
      <div className={`flex flex-row gap-4`}>
        {props.profile ? (
          <Image src={props.profile} alt="profilePicture" height={30} width={30} />
        ) : (
          <p
            className={`flex bg-mono-500 text-white h-10 w-10 text-center items-center justify-center rounded-full leading-normal`}
          >
            {props.name[0]}
          </p>
        )}
        <div className="flex flex-col justify-start text-xs gap-1">
          <Stars size={12} gap={'[2px]'} color={'#ffd250'} />
          <h6>{props.name}</h6>
        </div>
      </div>
      <div className="flex h-full bg-mono-200 text-xs md:text-sm rounded-md p-2">
        <p>{props.review}</p>
      </div>
    </div>
  )
}

export default ReviewCard
