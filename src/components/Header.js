import React, {useState, useEffect} from 'react'
import SocialLinks from './micro/SocialLinks'
import {Link, useLocation} from "react-router-dom"
import axios from 'axios'

export default function Header() {
  const location = useLocation()
  const [name, set_name] = useState("")
  const [subtitle, set_subtitle] = useState("")

  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:3001/site-info"
    }).then(res => {set_name(res.data.name); set_subtitle(res.data.subtitle)})
  }, [])

  return (
    <header>
      <Link to="/" className='page-title-container'>
        <h1>{name}</h1>
        <h2>{subtitle}</h2>
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
