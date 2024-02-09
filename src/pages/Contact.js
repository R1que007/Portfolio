import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      process.env.REACT_APP_EMAILJS_SERVICE_ID, 
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID, 
      form.current, 
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY)
      .then((result) => {
        console.log(result.text);
        //Reset form fields after successful subbission
        form.current.reset()
        //Show message indicating message sent
        setMessageSent(true)
        //Hide message after 3 seconds
        setTimeout(() => setMessageSent(false), 3000)
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <>
      <div className='contactForm'>
        <form ref={form} onSubmit={sendEmail}>
          <div>
            <label>Name</label><br />
            <input
              type="text"
              name="user_name"
              className='input-field'
              placeholder='Elo Muse'
            />
          </div>
          <div>
            <label>Email</label><br />
            <input
              type="email"
              name="user_email"
              className='input-field'
              placeholder="Imlookingtohire@work.com"
            />
          </div>
          <div>
            <label>Message</label><br />
            <textarea
              name="message"
              className='textarea-field'
              placeholder="You're hired"
            />
          </div>
          <div>
            <input type="submit" value="Send" className='submit-button' />
          </div>
          {messageSent && (
            <div
              classname="message-container">
              <span style={{ color: 'green' }}>Your message was sent. Thank you!</span>
            </div>
          )}
        </form>
      </div>
    </>
  );
};
export default ContactUs