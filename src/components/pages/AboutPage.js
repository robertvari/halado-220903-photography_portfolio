import React, { useState, useEffect } from 'react'
import axios from 'axios'


export default function AboutPage() {
  const [image, set_image] = useState("")
  const [text, set_text] = useState("")

  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:3001/about"
    }).then(res => {set_image(res.data.image); set_text(res.data.text)})
  }, [])

  return (
    <div className='about-container'>
      <img src={image} alt="" />

      <div className='text-container'>
        <p>{text}</p>
      </div>
    </div>
  )
}
