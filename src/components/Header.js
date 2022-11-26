import React, {useState, useEffect} from 'react'
import SocialLinks from './micro/SocialLinks'
import {Link, useLocation} from "react-router-dom"
import axios from 'axios'
import {motion} from "framer-motion"

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
      <motion.div whileHover={{scale:1.14}}>
        <Link to="/" className='page-title-container'>
          <motion.h1 initial={{opacity:0, x:-100}} animate={{opacity:1, x:0}}>{name}</motion.h1>
          
          <motion.h2 initial={{opacity:0, x:-100}} animate={{opacity:1, x:0, transition:{delay:0.2}}}>{subtitle}</motion.h2>
        </Link>
      </motion.div>

      <nav>
        <motion.div whileHover={{scale:1.3}}> <Link to="/about" className={location.pathname === "/about"? "active":""}>about</Link> </motion.div>
        <motion.div whileHover={{scale:1.3}}><Link to="/photos" className={location.pathname === "/photos"? "active":""}>photos</Link></motion.div>
        <motion.div whileHover={{scale:1.3}}><Link to="/contact" className={location.pathname === "/contact"? "active":""}>contact</Link></motion.div>
      </nav>

      <SocialLinks/>
    </header>
  )
}
