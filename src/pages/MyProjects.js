import React, { useState, useEffect } from 'react'
import backgroundImage from '../images/Lama.png'; // Path to your background image

const MyProjects = () => {
  //State to track whether the image is loaded
  const [imageLoaded, setImageLoaded] = useState(false)

  //Effect to preload the background image
  useEffect(() => {
    const img = new Image()
    img.src = backgroundImage
    img.onload = () => {
      setImageLoaded(true)
    }
  }, [])

  const project = {
      title: 'Laugh Host: 3001',
      description: 'Our capstone project, developed at LEARN Academy, is a React frontend application paired with a Rails API backend. It features full CRUD functionality and user authentication using Devise for signup, login, and logout.',
      technologies: ['React', 'JavaScript', 'HTML', 'CSS', 'Ruby on Rails'],
      githubLink: 'https://github.com/R1que007',
      demoLink: 'https://laughhost3001.onrender.com'
  };

  return (
      <div className="center-content">
          <div className="card" style={{backgroundImage: `url(${backgroundImage})` }}>
              <h2 className="card-title">{project.title}</h2>
              <p className="card-description">{project.description}</p>

              <h3 className="card-subtitle">Technologies Used:</h3>
              <ul className="card-technologies">
                  {project.technologies.map((tech, index) => (
                      <li key={index}>{tech}</li>
                  ))}
              </ul>

              <div className="card-links">
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="card-link">GitHub Repository</a>
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="card-link">Demo</a>
              </div>
          </div>
      </div>
  );
}

export default MyProjects;