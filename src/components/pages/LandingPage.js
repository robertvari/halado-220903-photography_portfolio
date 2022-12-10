import axios from 'axios'
import React, { useState, useEffect } from 'react'
import ImageSlider from '../micro/ImageSlider'

export default function LandingPage() {
  const [images, set_images] = useState([])
  const [title, set_title] = useState("")
  const [slogen, set_slogen] = useState("")

  let API_URL = process.env.REACT_APP_API_URL

  const fetch_data = () => {
    axios({
      method: "get",
      url: `${API_URL}/landing-page/`
    }).then(res => {
      set_images(res.data.images)
      set_title(res.data.title)
      set_slogen(res.data.slogen)
    })
  }

  useEffect(fetch_data, [])

  return (
    <div>
      <ImageSlider images={images} title={title} slogen={slogen}/>
    </div>
  )
}