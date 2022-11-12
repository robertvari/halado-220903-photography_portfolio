import React from 'react'

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

      <div>
        <i class="fa fa-youtube-play" aria-hidden="true"></i>
        <i class="fa fa-linkedin-square" aria-hidden="true"></i>
        <i class="fa fa-instagram" aria-hidden="true"></i>
        <i class="fa fa-facebook-official" aria-hidden="true"></i>
      </div>
    </header>
  )
}
