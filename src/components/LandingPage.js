import React from 'react'
import ImageSlider from './micro/ImageSlider'

export default function LandingPage() {
  return (
    <div>
      <ImageSlider images={["https://source.unsplash.com/random/?city&1"]} title="Ut nec vulputate erat" slogen="Nunc sodales velit quis sem ullamcorper euismod. Morbi elementum risus non arcu pellentesque pellentesque. Duis id neque dui. Etiam ut pellentesque tellus, nec mollis odio."/>
    </div>
  )
}