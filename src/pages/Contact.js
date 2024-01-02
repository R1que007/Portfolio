import React, { useRef } from 'react'
import emailjs from 'emailjs-com'

const ContactMe = () => {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm(
      process.env.REACT_APP_PUBLIC_KEY,
      process.env.REACT_APP_TEMPATE_ID,
      form.current,
      process.env.REACT_APP_USER_ID
    ).then(
      result => console.log(result.text),
      error => console.log(error.text)
    )
    e.target.reset()
  }
  return (
    <>
    <div>How to contact Me</div>
    <form ref={form} onSubmit={sendEmail}>
    <label>Name</label>
    <input type='text' name='user_name' required />
    <label>Email</label>
    <input type='email' name='user_email' required />
    <label>Message</label>
    <textarea name='message' required />
    <input type='submit' value='Send' />
    </form>
    </>
  )
}

export default ContactMe