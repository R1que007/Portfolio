import React from 'react'
import AboutMe from './components/AboutMe'
import ContactMe from './components/ContactMe'
import Projects from './components/Projects'
import Tools from './components/Tools'
import './App.css'

const App = () => {
  return (
    <>
    <div>
      <h1>Enrique</h1>
      <AboutMe />
      <ContactMe />
      <Projects />
      <Tools />
    </div>
    </>
  )
}

export default App
