import React, {useEffect, useState} from 'react'
import {Link} from "react-router-dom"
import axios from 'axios'


function CategoryCard({image, title, to}){
  return <Link to={`/photos${to}`} className='category-card-container'>
      <img src={image} alt="" />
      <h1>{title}</h1>
    </Link>
}


export default function PhotosPage() {
  const [images, set_images] = useState([])
  const [wedding, set_wedding] = useState("")
  const [nature, set_nature] = useState("")
  const [urban, set_urban] = useState("")
  const [portrait, set_portrait] = useState("")

  const get_random_item = (items) => {
    return items[ Math.floor(Math.random() * items.length)]
  }

  useEffect(() => {
    axios({
      url: "http://localhost:3001/photos",
      method: "get"
    }).then(res => set_images(res.data))
  }, [])

  useEffect(() => {
    if(images.length > 0){
      set_wedding( get_random_item(images.filter(image_data => image_data.category === "wedding")).image )
      set_urban(get_random_item(images.filter(image_data => image_data.category === "urban")).image)
      set_nature(get_random_item(images.filter(image_data => image_data.category === "nature")).image)
      set_portrait(get_random_item(images.filter(image_data => image_data.category === "portrait")).image)

      console.log(
        images.filter(image_data => image_data.category === "wedding")
      )
    }
  }, [images])

  return (
    <div>
      <CategoryCard image={wedding} title="wedding" to="/wedding"/>
      <CategoryCard image={nature} title="nature" to="/nature"/>
      <CategoryCard image={urban} title="urban" to="/urban"/>
      <CategoryCard image={portrait} title="portrait" to="/portrait"/>
    </div>
  )
}
