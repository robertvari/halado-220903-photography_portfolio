import React from 'react'

export default function ImageSlider({images, title, slogen}) {
  return (
    <div className='image-slider-container'>
        <img src={images[0]} alt="" />
        <h1>{title}</h1>
        <h2>{slogen}</h2>
    </div>
  )
}
