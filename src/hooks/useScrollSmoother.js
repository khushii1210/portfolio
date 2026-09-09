import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

const useScrollSmoother = () => {
  useEffect(() => {
    // Handle anchor link clicks with smooth scroll using GSAP
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach((link) => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        
        if (href === '#' || href.startsWith('http')) {
          return;
        }

        e.preventDefault();

        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          // Use GSAP to smoothly scroll to element
          gsap.to(window, {
            duration: 1.5,
            scrollTo: {
              y: targetElement,
              offsetY: 80,
              autoKill: true
            },
            ease: 'sine.inOut',
            overwrite: 'auto'
          });
        }
      });
    });

    // Cleanup
    return () => {
      links.forEach((link) => {
        link.removeEventListener('click', () => {});
      });
    };
  }, []);
};

export default useScrollSmoother;
