import React, {useEffect, useState} from 'react'
import axios from 'axios';

export default function ContactPage() {
  const [email, set_email] = useState("")

  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:3001/site-info"
    }).then(res => set_email(res.data.email))
  }, [])

  return (
    <div className='contact-container'>
      <h1>Let's work together</h1>
      <h2>{email}</h2>

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
