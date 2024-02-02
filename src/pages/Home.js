import React from 'react'
import { Container } from 'reactstrap'
import proImg from '../images/Rique.png'
import '../App.css'
const Home = () => {
  return (
    <div className='HomeName'> 
        <Container className='HomeName'>
            <h1 className='FirstNameText'>Enrique-------</h1>
            <h1 className='LastNameText'>-------Aguirre</h1>
        </Container>
          <div id='PhotoContainer'> 
          <img src={proImg} alt='A very handsome guy' className='rotate' />
          </div>
          <h1 className='full-stack'>Full-Stack Web Developer
          </h1>
          <h4 className='LastNameText'>JavaScript - React - Ruby on Rails </h4>
    </div>
  )
}

export default Home