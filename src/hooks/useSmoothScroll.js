import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollToPlugin from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

const useSmoothScroll = () => {
  useEffect(() => {
    // Get all anchor links
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach((link) => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        
        // Don't prevent default for external links or special cases
        if (href === '#' || href.startsWith('http')) {
          return;
        }

        e.preventDefault();

        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          gsap.to(window, {
            duration: 2.5,
            scrollTo: {
              y: targetElement,
              autoKill: true,
              offsetY: 80
            },
            ease: 'sine.inOut'
          });
        }
      });
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener('click', () => {});
      });
    };
  }, []);
};

export default useSmoothScroll;
