import './App.css'
import React from 'react'
import { Routes, Route } from "react-router-dom"
import AboutMe from './pages/AboutMe.js'
import Home from './pages/Home.js'
import MyProjects from './pages/MyProjects.js'
import Contact from './pages/Contact'
import Header from './components/Header.js'
import Footer from './components/Footer.js'

const App = () => {
  return (
    <div className='App'>
      <Header />
        <Routes>
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/" element={<Home />} />
          <Route path="/myprojects" element={<MyProjects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      <Footer />
    </div>
  )
}

export default App
