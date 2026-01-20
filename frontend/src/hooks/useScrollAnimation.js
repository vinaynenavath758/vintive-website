import { useEffect } from 'react';

const useScrollAnimation = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          entry.target.classList.remove('hidden');
        } else {
          // Remove revealed class when scrolling up past the element
          if (entry.boundingClientRect.top > 0) {
            entry.target.classList.remove('revealed');
            entry.target.classList.add('hidden');
          }
        }
      });
    }, observerOptions);

    // Observe all elements with reveal-on-scroll class
    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);
};

export default useScrollAnimation;
