import React from 'react'
import ImageSlider from './micro/ImageSlider'

export default function LandingPage() {
  return (
    <div>
      <ImageSlider images={["https://source.unsplash.com/random/?city&1"]} title="Test title" slogen="Slogen"/>
    </div>
  )
}