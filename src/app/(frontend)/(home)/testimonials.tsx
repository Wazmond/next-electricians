import ReviewCard from '@/components/testimonials/reviewCard'
import Stars from '@/components/utils/stars'
import React from 'react'

const Testimonials = () => {
  return (
    <div
      className={`flex flex-col justify-center items-center font-robotoSerif py-8 bg-mono-300 w-screen gap-4`}
    >
      <div>
        <h1>{`Trusted by many, here's why`}</h1>
        <div className={`flex flex-row justify-center items-center gap-2`}>
          <Stars size={12} color={'#ffd250'} gap={'[2px]'} />
          <p className={`text-sm`}>5.0 rating of 9 reviews</p>
        </div>
      </div>

      <div className="relative w-screen overflow-hidden">
        <div className='flex flex-row overflow-x-scroll gap-4 justify-center'>
          <ReviewCard name="John S." review="lorem asdjajldkajdlka" profile={undefined} />
          <ReviewCard name="John S." review="lorem asdjajldkajdlka" profile={undefined} className="scroll-snap-center"/>
          <ReviewCard name="John S." review="lorem asdjajldkajdlka" profile={undefined} />
        </div>
        <div className={`absolute h-full w-20 top-0 left-0 bg-gradient-to-r from-mono-300 from-25% to-transparent`}/>
        <div className={`absolute h-full w-20 top-0 right-0 bg-gradient-to-l from-mono-300 from-25% to-transparent`}/>
      </div>
    </div>
  )
}

export default Testimonials
