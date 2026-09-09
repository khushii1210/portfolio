import React from 'react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h2>CREATIVE<br/>DEVELOPER<br/>& DESIGNER</h2>
        </div>
        
        <div className="hero-image">
          <img 
            src="/khushi.png" 
            alt="Profile"
          />
        </div>
        
        <div className="hero-large-text">
          <h1>PORTFOLIO</h1>
        </div>
        
        <div className="hero-cta">
          <button className="btn-primary">VIEW WORK</button>
          <span className="explore-text">EXPLORE PROJECTS</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;