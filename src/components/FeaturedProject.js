import useScrollFadeIn from '../hooks/useScrollFadeIn';

const SkillsExperience = () => {
  const [ref, isVisible] = useScrollFadeIn();
  const skills = [
    { 
      category: "UI/UX", 
      items: ["Figma", "Spline"] 
    },
    { 
      category: "FRONTEND", 
      items: ["React", "JavaScript", "HTML/CSS","GSAP", "TypeScript - learing"] 
    },
    { 
      category: "BACKEND", 
      items: ["Node.js", "Express", "REST APIs"] 
    },
    { 
      category: "DATABASE", 
      items: ["MongoDB", "PostgreSQL"] 
    }
  ];

  return (
    <section className="skills-experience" id="skills-experience" ref={ref}>
      <div className={`skills-experience-content ${isVisible ? 'fade-in' : ''}`}>
        <div className="skills-section">
          <span className="section-label">MY SKILLS</span>
          <h2>TECHNICAL<br/>EXPERTISE</h2>
          <div className="skills-categories">
            {skills.map((skillGroup, index) => (
              <div key={index} className="skill-category">
                <h4>{skillGroup.category}</h4>
                <div className="category-items">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <span key={skillIndex} className="category-item">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="experience-section">
          <span className="section-label">MY JOURNEY</span>
          <h2>WORK<br/>EXPERIENCE</h2>
          <div className="experience-item">
            <div className="exp-header">
              <h4>Technical Intern</h4>
              <span className="exp-period">1.5 Months</span>
            </div>
            <h5>Jio</h5>
            <ul className="experience-points">
              <li>Built a document-based chatbot using Python, FastAPI, React, and Gemini API, enabling users to query PDF and CSV/Excel files through contextual conversations with conversation history support</li>
              <li>Implemented multi-format document ingestion and processing, using text chunking optimized for chunk size and overlap to improve semantic retrieval through ChromaDB</li>
              <li>Developed a query rewriting module that transformed vague user questions into more precise retrieval queries, improving the relevance of responses across complex documents</li>
              <li>Designed and documented RESTful APIs using FastAPI, integrating the backend with a React frontend to create a seamless question-answering workflow with persistent conversation history</li>
              <li>Developed an admin dashboard for document upload and deletion, metadata management, and real-time monitoring of application settings</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsExperience;