import React from 'react';
import { typographyClasses, colorClasses } from '../../utils/typography';
import TypingEffect from '../common/TypingEffect';
import { useSmoothScroll } from '../hooks/useSmoothScroll';

const HeroSection: React.FC = () => {
  const { scrollToNextSection } = useSmoothScroll();
  
  const jobTitles = [
    'Computer Scientist',
    'Software Engineer', 
    'Data Analyst',
    'DevOps Engineer',
    'Cybersecurity Specialist'
  ];

  return (
    <section id="hero" className="snap-section min-h-screen bg-primary-dark relative overflow-hidden">
      
      {/* Content Container */}
      <div className="relative z-10 flex flex-col justify-center min-h-screen px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="w-full max-w-4xl sm:max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto">
          
          {/* Main Title - Fixed height container */}
          <div className="mb-6 sm:mb-8 lg:mb-12">
            {/* Fixed height container to prevent layout shifts */}
            <div className="h-[178px] sm:h-[230px] md:h-[296px] lg:h-[386px] flex items-center justify-center sm:justify-start">
              <h1 className={`${typographyClasses.responsiveH1} ${colorClasses.accent} text-center sm:text-left leading-tight`}>
                <TypingEffect 
                  words={jobTitles}
                  speed={150}
                  deleteSpeed={75}
                  pauseTime={2000}
                />
              </h1>
            </div>
          </div>

          {/* Action Verbs with Glow Hover Effects */}
          <div className="text-center sm:text-left flex flex-col sm:flex-row sm:justify-start sm:items-center gap-y-2 gap-x-6 sm:gap-y-0 sm:gap-x-8 md:gap-x-12 lg:gap-x-16 opacity-75">
            <p
              className={`
                ${typographyClasses.responsiveBodyLg} ${colorClasses.primary} font-mono tracking-wide
                transition-shadow duration-300
                hover:text-green-400
                hover:text-shadow-[0_0_16px_4px_rgba(34,197,94,0.7)]
                hover:scale-105
              `}
            >
              ideate.
            </p>
            <p
              className={`
                ${typographyClasses.responsiveBodyLg} ${colorClasses.primary} font-mono tracking-wide
                transition-shadow duration-300
                hover:text-yellow-300
                hover:text-shadow-[0_0_16px_4px_rgba(253,224,71,0.7)]
                hover:scale-105
              `}
            >
              develop.
            </p>
            <p
              className={`
                ${typographyClasses.responsiveBodyLg} ${colorClasses.primary} font-mono tracking-wide
                transition-shadow duration-300
                hover:text-orange-400
                hover:text-shadow-[0_0_32px_8px_rgba(251,146,60,0.95)]
                hover:scale-105
              `}
            >
              automate.
            </p>
            <p
              className={`
                ${typographyClasses.responsiveBodyLg} ${colorClasses.primary} font-mono tracking-wide
                transition-shadow duration-300
                hover:text-blue-400
                hover:text-shadow-[0_0_16px_4px_rgba(96,165,250,0.7)]
                hover:scale-105
              `}
            >
              protect.
            </p>
            <p
              className={`
                ${typographyClasses.responsiveBodyLg} ${colorClasses.primary} font-mono tracking-wide
                transition-shadow duration-300
                hover:text-red-400
                hover:text-shadow-[0_10px_16px_4px_rgba(248,113,113,0.7)]
                hover:scale-105
              `}
            >
              attack.
            </p>
          </div>

          {/* Call to Action Button */}
          <div className="mt-8 sm:mt-12 lg:mt-16 text-center sm:text-left">
            <button 
              onClick={scrollToNextSection}
              className="border-2 border-accent-yellow text-accent-yellow px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-inter text-sm sm:text-base lg:text-link hover:bg-accent-yellow hover:text-primary-dark transition-all duration-300 transform hover:scale-105"
            >
              VIEW PROJECTS
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        onClick={scrollToNextSection}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer hover:scale-110 transition-transform duration-200"
      >
        <div className="w-6 h-10 border-2 border-accent-yellow rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent-yellow rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 