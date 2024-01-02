import React from 'react'
import { Container } from 'reactstrap'
import proImg from '../images/Rique.png'
const Home = () => {
  return (
    <div className='HomeName'> 
        <Container className='HomeName'>
            <h1 className='FirstNameText'>Enrique-------</h1>
            <h1 className='LastNameText'>-------Aguirre</h1>
        </Container>
          <div id='PhotoContainer'>
            <marquee
             behavior="alternate" direction= "left" loop="10" width= "100%" scrollamount="15" scrolldelay="1" >
            <img src={proImg} alt='A very hansome guy' /> 
            </marquee>
          </div>
          <h1 className='full-stack'>Full-Stack Web Developer</h1>
    </div>
  )
}

export default Home