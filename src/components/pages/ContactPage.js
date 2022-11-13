import React from 'react'

export default function ContactPage() {
  return (
    <div className='contact-container'>
      <h1>Let's work together</h1>
      <h2>atomhartwin@gmail.com</h2>

      <form action="">
        <h2>name</h2>
        <input type="text" />

        <h2>email</h2>
        <input type="text" />

        <h2>phone</h2>
        <input type="text" />

        <h2>message</h2>
        <textarea name="" id="" cols="30" rows="10"></textarea>
      </form>

      <button>send</button>
    </div>
  )
}
