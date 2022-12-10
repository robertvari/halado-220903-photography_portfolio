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
  const [categories, set_categories] = useState([])

  const variants = {
    hidden: {opacity: 0},
    show: {opacity: 1, transition:{staggerChildren: 0.2}}
  }

  const item = {
    hidden: {opacity: 0, y:100},
    show: {opacity: 1, y:0, transition:{duration: 0.2}}
  }

  let API_URL = process.env.REACT_APP_API_URL

  useEffect(() => {
    axios({
      url: `${API_URL}/categories/`,
      method: "get"
    }).then(res => set_categories(res.data))
  }, [])


  return (
    <motion.div
      variants={variants} 
      initial="hidden" 
      animate="show"
    >

      {
        categories.map(category_data => <CategoryCard image={category_data.image} title={category_data.name} to={`/${category_data.name}/`}/>)
      }
    
    </motion.div>
  )
}
