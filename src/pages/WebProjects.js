import React from 'react';
import { Link } from 'react-router-dom';
import useScrollFadeIn from '../hooks/useScrollFadeIn';
import '../styles/ProjectPages.css';

const WebProjects = () => {
  const [ref, isVisible] = useScrollFadeIn();
  const projects = [
    {
      id: 1,
      title: "NeuroStack",
      description: "A developer knowledge platform that connects notes, code snippets, and bug solutions through an interactive knowledge graph and AI assistant.",
      image: "neurostack.png",
      link: "https://github.com/khushii1210/NeuroStack"
    },
    {
      id: 2,
      title: "ContribFlow",
      description: "An AI-powered open-source contribution assistant that analyzes repositories, finds contribution opportunities, assesses change impact, and reviews code before a PR.",
      image: "Contribflow.png",
      link: "https://github.com/Jeel3011/ContribFlow"
    }
  ];

  return (
    <div className="project-page">
      <header className="project-header">
        <div className="header-content">
          <Link to="/" className="back-link">← BACK TO HOME</Link>
          <h1>WEB DEVELOPMENT PROJECTS</h1>
        </div>
      </header>

      <section className="projects-showcase" ref={ref}>
        <div className={`projects-container ${isVisible ? 'fade-in' : ''}`}>
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">VIEW PROJECT →</a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default WebProjects;
