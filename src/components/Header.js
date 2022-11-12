import React from 'react'
import SocialLinks from './micro/SocialLinks'
import {Link} from "react-router-dom"

export default function Header() {
  return (
    <header>
      <Link to="/" className='page-title-container'>
        <h1>Atum Hartwin</h1>
        <div>photography</div>
      </Link>


      <nav>
        <Link to="/about">about</Link>
        <Link to="/photos">photos</Link>
        <Link to="/contact">contact</Link>
      </nav>

      <SocialLinks/>
    </header>
  )
}
