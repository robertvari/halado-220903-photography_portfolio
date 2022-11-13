import React from 'react'
import SocialLinks from './micro/SocialLinks'
import {Link, useLocation} from "react-router-dom"

export default function Header() {
  const location = useLocation()

  return (
    <header>
      <Link to="/" className='page-title-container'>
        <h1>Atum Hartwin</h1>
        <h2>photography</h2>
      </Link>

      <nav>
        <Link to="/about" className={location.pathname === "/about"? "active":""}>about</Link>
        <Link to="/photos" className={location.pathname === "/photos"? "active":""}>photos</Link>
        <Link to="/contact" className={location.pathname === "/contact"? "active":""}>contact</Link>
      </nav>

      <SocialLinks/>
    </header>
  )
}
