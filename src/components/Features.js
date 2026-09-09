import useScrollFadeIn from '../hooks/useScrollFadeIn';

const Contact = () => {
  const [ref, isVisible] = useScrollFadeIn();
  const contactInfo = [
    {
      label: "EMAIL",
      value: "pandyakhushi1210@gmail.com",
      link: "mailto:pandyakhushi1210@gmail.com",
      external: false
    },
    {
      label: "PHONE",
      value: "+91 7016201167",
      link: "tel:+917016201167",
      external: false
    },
    {
      label: "LINKEDIN",
      value: "linkedin.com/in/khushi-pandya-014377338/",
      link: "https://www.linkedin.com/in/khushi-pandya-014377338/",
      external: true
    }
  ];

  const handleContactClick = (e, link, external) => {
    if (!external) {
      e.preventDefault();
      window.location.href = link;
    }
  };

  return (
    <section className="contact" id="contact" ref={ref}>
      <div className={`contact-grid ${isVisible ? 'fade-in' : ''}`}>
        {contactInfo.map((info, index) => (
          <a 
            key={index} 
            href={info.link} 
            className="contact-item" 
            onClick={(e) => handleContactClick(e, info.link, info.external)}
            target={info.external ? "_blank" : "_self"}
            rel={info.external ? "noopener noreferrer" : ""}
          >
            <h4>{info.label}</h4>
            <p>{info.value}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;