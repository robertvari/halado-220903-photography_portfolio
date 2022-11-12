import React from 'react'
import {Link} from "react-router-dom"

function CategoryCard({image, title, to}){
  return <Link to={`/photos${to}`} className='category-card-container'>
      <img src={image} alt="" />
      <h1>{title}</h1>
    </Link>
}


export default function PhotosPage() {
  return (
    <div>
      <CategoryCard image="https://source.unsplash.com/random/?wedding" title="wedding" to="/wedding"/>
      <CategoryCard image="https://source.unsplash.com/random/?nature" title="nature" to="/nature"/>
      <CategoryCard image="https://source.unsplash.com/random/?urban" title="urban" to="/urban"/>
      <CategoryCard image="https://source.unsplash.com/random/?portrait" title="portrait" to="/portrait"/>
    </div>
  )
}
