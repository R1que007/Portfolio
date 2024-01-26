import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';



export const ContactUs = () => {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_i3sq21r", 'template_u11a76c', form.current, 'N1esR4gcZDpWte-Qn')
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
              placeholder='Your Name'
            />
          </div>
          <div>
            <label>Email</label><br />
            <input
              type="email"
              name="user_email"
              className='input-field'
              placeholder='Your Email'
            />
          </div>
          <div>
            <label>Message</label><br />
            <textarea
              name="message"
              className='textarea-field'
              placeholder='Write a message'
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