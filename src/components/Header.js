import React from 'react';

const Header = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleResumeDownload = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // Place your resume.pdf in the public folder
    link.download = 'Khushi_Pandya_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header className="header">
      <div className="top-bar">
        <div className="top-left-links">
          <button onClick={() => scrollToSection('services')} className="nav-btn">WORK</button>
          <button onClick={() => scrollToSection('skills-experience')} className="nav-btn">SKILLS</button>
          <button onClick={() => scrollToSection('skills-experience')} className="nav-btn">EXPERIENCE</button>
        </div>
        <div className="top-links">
          <button onClick={() => scrollToSection('contact')} className="nav-btn">CONTACT</button>
          <button onClick={handleResumeDownload} className="nav-btn">RESUME</button>
        </div>
      </div>
      
      <nav className="navbar">
        <div className="logo">
          <h1>KHUSHI PANDYA</h1>
        </div>
      </nav>
    </header>
  );
};

export default Header;