import React, {useEffect, useState} from 'react'
import {Link} from "react-router-dom"
import axios from 'axios'
import {motion} from "framer-motion"


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

  const variants = {
    hidden: {opacity: 0},
    show: {opacity: 1, transition:{staggerChildren: 0.2}}
  }

  const item = {
    hidden: {opacity: 0, y:100},
    show: {opacity: 1, y:0, transition:{duration: 0.2}}
  }

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
    <motion.div
      variants={variants} 
      initial="hidden" 
      animate="show"
    >

      <motion.div variants={item}><CategoryCard image={wedding} title="wedding" to="/wedding"/></motion.div>
      <motion.div variants={item}><CategoryCard image={nature} title="nature" to="/nature"/></motion.div>
      <motion.div variants={item}><CategoryCard image={urban} title="urban" to="/urban"/></motion.div>
      <motion.div variants={item}><CategoryCard image={portrait} title="portrait" to="/portrait"/></motion.div>
    
    </motion.div>
  )
}
