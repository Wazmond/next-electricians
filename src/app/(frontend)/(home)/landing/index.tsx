import LandingImage from './landingImage'
import React from 'react'

const Landing = () => {
  return (
    <div className="h-svh w-screen">
      <LandingImage />
      {/* Temporary component until I can get PayloadCMS properly setup. too much headache for now. this is a later feature */}
      <h2>Landing</h2>
      {/* Payload image. with a button on btm right to pick different photos and 'check it out' */}
      {/* More vibrant and personal, photos of Lach and Hugh on either side of screen, and display photo in middle? */}
      {/* If more luxurious, 3/4? of screen of photo, and have the buttons, dimmed with vignette */}
    </div>
  )
}

export default Landing
