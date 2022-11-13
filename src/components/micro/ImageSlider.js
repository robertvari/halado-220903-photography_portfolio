import React, { useEffect, useState } from 'react'

export default function ImageSlider({images, title, slogen}) {
  const [current_image, set_current_image] = useState("")
  const [image_index, set_image_index] = useState(0)
  let _index = 0

  // set first image
  useEffect(() => {
    set_current_image(images[image_index])
  }, [images, image_index])

  // start interval
  useEffect(() => {
    const interval = setInterval(() => {
      _index ++
      if(_index >= images.length){
        _index = 0
      }
      set_image_index(_index)
    }, 1000)
    return () => clearInterval(interval)
  }, [images])

  return (
    <div className='image-slider-container'>
        <img src={current_image} alt="" />
        <h1>{title}</h1>
        <h2>{slogen}</h2>
    </div>
  )
}
