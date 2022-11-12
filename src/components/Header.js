import React from 'react'
import SocialLinks from './micro/SocialLinks'

export default function Header() {
  return (
    <header>
      <a href="" className='page-title-container'>
        <h1>Atum Hartwin</h1>
        <div>photography</div>
      </a>


      <nav>
        <a href="">about</a>
        <a href="">photos</a>
        <a href="">contact</a>
      </nav>

      <SocialLinks/>
    </header>
  )
}
