import React from 'react'

const MyProjects = () => {
   // Sample project data
   const project = {
    title: 'Sample Project',
    description: 'This is a sample project created with React.',
    technologies: ['React', 'JavaScript', 'HTML', 'CSS'],
    githubLink: 'https://github.com/R1que007',
    demoLink: 'https://laughhost3001.onrender.com'
};
return (
  <div className="card-container">
      <div className="card">
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

export default MyProjects