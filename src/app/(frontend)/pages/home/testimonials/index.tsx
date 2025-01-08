import ReviewCard from './reviewCard'
import Stars from '@/components/stars'
import Link from 'next/link'
import React from 'react'

const Testimonials = () => {
  return (
    <div
      className={`flex flex-col justify-center items-center font-robotoSerif py-8 bg-mono-200 w-full gap-4`}
    >
      <div>
        <h1>{`Trusted by many, here's why`}</h1>
        <div className={`flex flex-row justify-center items-center gap-2`}>
          <Stars size={12} color={'#ffd250'} gap={'[2px]'} />
          <p className={`text-sm`}>5.0 rating of 9 reviews</p>
        </div>
      </div>

      <div className="relative w-screen flex px-8 md:px-2 flex-row flex-wrap gap-4 justify-center items-stretch">
        <ReviewCard
          name="Raymond H."
          review="Wonderful electricians. Couldnt recommend them enough they are professional and tidy and fair on pricing! They installed my car charger quick and without any issues! 5 stars"
          profile={undefined}
        />
        <ReviewCard
          name="Rachael V."
          review="Hugh and Lachlan were really helpful in some of my small electrical needs in my new build. Pendant lights look fab and their general advise and ideas were really insightful! Will definitely get them back for more jobs in the future!"
          profile={undefined}
          className="scroll-snap-center"
        />
        <ReviewCard
          name="Joshua M."
          review="Great customer service from Hugh and Lachlan. I needed a few gpos installed they did an amazing job, very quick and efficient."
          profile={undefined}
        />
      </div>

      <Link
        href="https://g.co/kgs/DXmE18Y"
        target="_blank"
        className="bg-white hover:bg-mono-300 transition-colors duration-100 ease-in-out p-2 rounded-lg shadow-lg"
      >
        Click to view more
      </Link>
    </div>
  )
}

export default Testimonials
