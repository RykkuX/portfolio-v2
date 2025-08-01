import { useEffect, useCallback } from 'react';

export const useSmoothScroll = () => {
  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, []);

  const scrollToNextSection = useCallback(() => {
    const sections = document.querySelectorAll('.snap-section');
    const currentScrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;

    for (let i = 0; i < sections.length; i++) {
      const section = sections[i] as HTMLElement;
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.offsetHeight;

      if (currentScrollPosition < sectionTop + windowHeight / 2) {
        section.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
        break;
      }
    }
  }, []);

  const scrollToPreviousSection = useCallback(() => {
    const sections = document.querySelectorAll('.snap-section');
    const currentScrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;

    for (let i = sections.length - 1; i >= 0; i--) {
      const section = sections[i] as HTMLElement;
      const sectionTop = section.offsetTop;

      if (currentScrollPosition > sectionTop + windowHeight / 2) {
        section.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
        break;
      }
    }
  }, []);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowDown':
        case 'PageDown':
          event.preventDefault();
          scrollToNextSection();
          break;
        case 'ArrowUp':
        case 'PageUp':
          event.preventDefault();
          scrollToPreviousSection();
          break;
        case 'Home':
          event.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
          break;
        case 'End':
          event.preventDefault();
          window.scrollTo({ 
            top: document.documentElement.scrollHeight, 
            behavior: 'smooth' 
          });
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [scrollToNextSection, scrollToPreviousSection]);

  return {
    scrollToSection,
    scrollToNextSection,
    scrollToPreviousSection,
  };
}; 