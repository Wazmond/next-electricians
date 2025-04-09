import CTAButton from '@/components/ctaButton'
import ReviewCard from './reviewCard'
import Stars from '@/components/stars'
import React from 'react'
import { HomePage } from '@/payload-types'

interface Props {
  pageContent: HomePage
}

const Testimonials = ({ pageContent }: Props) => {
  return (
    <>
      <div className="text-black font-robotoSerif">
        <h2>{pageContent.testimonialsTitle}</h2>
        <div className={`flex flex-row justify-center items-center gap-2`}>
          <Stars size={12} color={'#ffd250'} gap={'[2px]'} />
          <p className={`text-sm font-robotoSerif`}>5.0 rating of 9 reviews</p>
        </div>
      </div>

      <div className="relative flex max-w-[1178px] w-full px-8 flex-row flex-wrap gap-4 md:gap-8 justify-center items-stretch">
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

      <CTAButton
        href="https://g.co/kgs/DXmE18Y"
        target="_blank"
        className="bg-white hover:bg-mono-300 text-black border border-mono-500"
        text="View More"
      />
    </>
  )
}

export default Testimonials
