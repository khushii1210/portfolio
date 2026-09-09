import { Link } from 'react-router-dom';
import useScrollFadeIn from '../hooks/useScrollFadeIn';

const Services = () => {
  const services = [
    {
      title: "WEB DEVELOPMENT",
      description: "Modern web applications\nbuilt with cutting-edge technologies",
      image: "webDev.jpg",
      link: "VIEW PROJECTS →",
      path: "/web-development"
    },
    {
      title: "UI/UX DESIGN",
      description: "User-centered design that\ncreates meaningful experiences",
      image: "UI.jpg",
      link: "VIEW DESIGNS →",
      path: "/ui-ux"
    }
  ];

  const [ref, isVisible] = useScrollFadeIn();

  return (
    <section className="services-section" id="services" ref={ref}>
      <div className={`services-grid ${isVisible ? 'fade-in' : ''}`}>
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-image">
              <img src={service.image} alt={service.title} />
            </div>
            <div className="service-content">
              <h3>{service.title}</h3>
              <p style={{ whiteSpace: 'pre-line' }}>{service.description}</p>
              <Link to={service.path} className="service-link">{service.link}</Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;