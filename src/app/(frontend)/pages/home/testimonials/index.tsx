import ReviewCard from './reviewCard'
import Stars from '@/components/utils/stars'
import React from 'react'

const Testimonials = () => {
  return (
    <div
      className={`flex flex-col justify-center items-center font-robotoSerif py-8 bg-mono-300 w-full gap-4`}
    >
      <div>
        <h1>{`Trusted by many, here's why`}</h1>
        <div className={`flex flex-row justify-center items-center gap-2`}>
          <Stars size={12} color={'#ffd250'} gap={'[2px]'} />
          <p className={`text-sm`}>5.0 rating of 9 reviews</p>
        </div>
      </div>

      <div className="relative w-screen overflow-hidden flex px-8 md:px-2 flex-row flex-wrap gap-4 justify-center items-stretch">
        <ReviewCard
          name="John S."
          review="Couldn’t recommend Hugh highly enough. Very professional and friendly and would happily use him again."
          profile={undefined}
        />
        <ReviewCard
          name="John S."
          review="Wonderful electricians. Couldnt recommend them enough they are professional and tidy and fair on pricing! They installed my car charger quick and without any issues! 5 stars"
          profile={undefined}
          className="scroll-snap-center"
        />
        <ReviewCard
          name="John S."
          review="Great customer service from Hugh and Lachlan. I needed a few gpos installed they did an amazing job, very quick and efficient."
          profile={undefined}
        />
      </div>
    </div>
  )
}

export default Testimonials
