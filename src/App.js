import './App.css'
import AboutMe from './components/AboutMe'
import ContactMe from './components/ContactMe'
import Projects from './components/Projects'
import Tools from './components/Tools'
import proImg from './images/Rock.jpg'

const App = () => {
  return (
    <>
     <header>
      <AboutMe />
      <Projects />
      <ContactMe />
      <Tools />
      </header>
    <div className='app'>
     
        <div className='Container'>
          <div id='havingGrad'>
            <p>I AM ENRIQUE NOT IGLESIAS</p>
              Having graduated from Learn Academy's full stack web developer bootcamp, I now possess a strong skill set in JavaScript, Ruby, Ruby on Rails, TDD, HTML, CSS, Git, and PostgreSQL. As a Marine Corps veteran, my leadership in aircraft maintenance cultivated discipline and a mission-driven work ethic. My experience as a behavior therapist fueled my passion for integrating technology into applied behavior analysis through web applications. With a Master's degree in Educational Psychology, I offer a unique perspective on how people learn and interact with technology, enabling me to create impactful, user-friendly web applications. Excited to contribute my diverse background and skills to the dynamic field of web development.
          </div> 
         <img src={proImg} alt='A very hansome guy'/>
        </div>
      <div id='aboutMePage'>
        hAllo VerNiice
      </div>
    </div>
    </>
  )
}

export default App
