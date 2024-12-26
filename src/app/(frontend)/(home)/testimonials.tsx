import ReviewCard from '@/components/testimonials/reviewCard'
import Stars from '@/components/utils/stars'
import React from 'react'

const Testimonials = () => {
  return (
    <div className={`flex flex-col justify-center items-center font-robotoSerif py-8`}>
      <h1>Trusted by many, here's why</h1>
      <div className={`flex flex-row justify-center items-center gap-2`}>
        <Stars size={12} color={'#ffd250'} gap={'[2px]'}/>
        <p className={`text-sm`}>5.0 rating of 9 reviews</p>
      </div>

      <div className={`flex flex-row justify-center mt-4 w-full gap-4`}>
        <ReviewCard name="John S." review="lorem asdjajldkajdlka" profile={undefined}/>
        <ReviewCard name="John S." review="lorem asdjajldkajdlka" profile={undefined}/>
        <ReviewCard name="John S." review="lorem asdjajldkajdlka" profile={undefined}/>
      </div>
    </div>
  )
}

export default Testimonials
