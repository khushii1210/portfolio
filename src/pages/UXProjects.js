import { useRef } from 'react';
import { Link } from 'react-router-dom';
import '../styles/ProjectPages.css';

const UXProjects = () => {
  const videoRefs = [useRef(null), useRef(null), useRef(null)];

  const projects = [
    {
      id: 1,
      title: "Product Page",
      video: "product.mp4"
    },
    {
      id: 2,
      title: "Dashboard",
      video: "dashboard.mp4"
    },
    {
      id: 3,
      title: "Landing Page",
      video: "landing.mp4"
    }
  ];

  const handleMouseEnter = (index) => {
    if (videoRefs[index].current) {
      videoRefs[index].current.play();
    }
  };

  const handleMouseLeave = (index) => {
    if (videoRefs[index].current) {
      videoRefs[index].current.pause();
      videoRefs[index].current.currentTime = 0;
    }
  };

  return (
    <div className="project-page">
      <header className="project-header">
        <div className="header-content">
          <Link to="/" className="back-link">← BACK TO HOME</Link>
          <h1>UI/UX PROJECTS</h1>
        </div>
      </header>

      <section className="ux-projects-showcase">
        <div className="ux-projects-list">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="ux-project-fullscreen"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <div className="ux-project-content">
                <h2>{project.title}</h2>
                <div className="ux-video-container">
                  <video 
                    ref={videoRefs[index]} 
                    className="ux-project-video"
                    src={project.video}
                    muted
                    loop
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default UXProjects;
