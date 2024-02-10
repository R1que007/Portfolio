import React from 'react'
import mapImg from '../images/ealifemap.png'
const AboutMe = () => {
  return (
    <>
      
      <div className='about-me'>
        <h1 className='about-me-heading'>About Me</h1>
        <img src={mapImg} alt='rotating photo of a life map' />
      </div>
    </>
  )
}

export default AboutMe