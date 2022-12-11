import React, {useEffect, useState} from 'react'
import axios from 'axios';
import {motion} from "framer-motion"


export default function ContactPage() {
  const [contact_email, set_contact_email] = useState("")

  const [name, set_name] = useState("")
  const [name_error, set_name_error] = useState(false)

  const [email, set_email] = useState("")
  const [email_error, set_email_error] = useState(false)

  const [phone, set_phone] = useState("")
  const [phone_error, set_phone_error] = useState(false)

  const [message, set_message] = useState("")
  const [message_error, set_message_error] = useState(false)


  const variants ={
    hidden: {opacity: 0},
    show: {opacity:1, transition: {staggerChildren: 0.05}}
  }

  const label_item = {
    hidden:{opacity:0, x: -100},
    show:{opacity:1, x: 0, transition: {duration: 0.1}}
  }

  const input_item = {
    hidden:{opacity:0, x: 100},
    show:{opacity:1, x: 0, transition: {duration: 0.1}}
  }

  let API_URL = process.env.REACT_APP_API_URL

  const validateEmail = () => {
      var re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      return re.test(email)
    };

  const check_errors = () => {
    set_name_error(false)
    set_email_error(false)
    set_phone_error(false)
    set_message_error(false)

    let form_valid = true

    if(name.length === 0){
      set_name_error(true)
      form_valid = false
    }

    if(!validateEmail()){
      set_email_error(true)
      form_valid = false
    }

    if(phone.length === 0){
      set_phone_error(true)
      form_valid = false
    }

    if(message.length === 0){
      set_message_error(true)
      form_valid = false
    }

    return form_valid
  }

  const send_form = (e) => {
    e.preventDefault()

    if(!check_errors()) return

    console.log("send form")
  }

  useEffect(() => {
    axios({
      method: "get",
      url: `${API_URL}/siteinfo/`
    }).then(res => set_contact_email(res.data.email))
  }, [])

  return (
    <motion.div className='contact-container' initial={{opacity:0}} animate={{opacity:1}}>
      <h1>Let's work together</h1>
      <h2>{contact_email}</h2>

      <motion.form action="" variants={variants} initial="hidden" animate="show">
        <motion.h2 variants={label_item}>name</motion.h2>

        <div>
          {name_error&& <small className='error'>Name Error</small>}
          <motion.input type="text" className={`${name_error? "error-field": ""}`} variants={input_item} value={name} onChange={e => set_name(e.target.value)}/>
        </div>

        <motion.h2 variants={label_item}>email</motion.h2>
        <div>
          {email_error&& <small className='error'>Email Error</small>}
          <motion.input className={`${email_error? "error-field": ""}`} type="text" variants={input_item} value={email} onChange={e => set_email(e.target.value)}/>
        </div>

        <motion.h2 variants={label_item}>phone</motion.h2>
        <div>
          {phone_error&& <small className='error'>Phone Error</small>}
          <motion.input className={`${phone_error? "error-field": ""}`} type="text" variants={input_item} value={phone} onChange={e => set_phone(e.target.value)}/>
        </div>

        <motion.h2 variants={label_item}>message</motion.h2>
        <div>
          {message_error&& <small className='error'>Message Error</small>}
          <motion.textarea className={`${message_error? "error-field": ""}`} cols="30" rows="10" variants={input_item} value={message} onChange={e => set_message(e.target.value)}/>
        </div>
      </motion.form>

      <motion.button initial={{opacity: 0, x:50}} animate={{opacity:1, x:0, transition:{delay:0.3}}} onClick={send_form}>send</motion.button>
    </motion.div>
  )
}
