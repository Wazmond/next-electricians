import LandingImage, { getServerSideProps } from '@/fetching'
import React from 'react'

const Landing = () => {
  return (
    <div className="h-svh w-screen bg-purple-500">
      <div className="bg-gray-700 h-5/6 w-full" />
      <h2>Landing</h2>
      {/* Payload image. with a button on btm right to pick different photos and 'check it out' */}
      {/* More vibrant and personal, photos of Lach and Hugh on either side of screen, and display photo in middle? */}
      {/* If more luxurious, 3/4? of screen of photo, and have the buttons, dimmed with vignette */}
      <LandingImage />
    </div>
  )
}

export default Landing
