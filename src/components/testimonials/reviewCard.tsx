import React from 'react'
import Stars from '../utils/stars'
import Image from 'next/image'

interface Props {
  name: string
  profile: string | undefined
  review: string
}

const ReviewCard = (props: Props) => {
  return (
    <div className={`flex flex-col rounded-lg md:w-1/4 px-4 py-4 gap-4 shadow-2xl bg-white`}>
      <div className={`flex flex-row gap-4`}>
        {props.profile ? (
          <Image src={props.profile} alt="profilePicture" height={30} width={30} />
        ) : (
          // <div className='bg-mono-500 h-8 w-8 justify-center items-center'>
          <p
            className={`flex bg-mono-500 text-white h-10 w-10 text-center items-center justify-center rounded-full leading-normal`}
          >
            {props.name[0]}
          </p>
          // </div>
        )}
        <div className="flex flex-col justify-start text-xs gap-1">
          <Stars size={12} gap={'[2px]'} color={'#ffd250'} />
          <h6>{props.name}</h6>
        </div>
      </div>
      <div className="flex bg-mono-200 text-xs md:text-sm rounded-md p-2">
        <p>{props.review}</p>
      </div>
    </div>
  )
}

export default ReviewCard
