import React from 'react';
import { typographyClasses, colorClasses, spacingClasses } from '../../utils/typography';
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
        <div className="w-full sm:max-w-4xl md:max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto">
          {/* Main Title - Updated height container for new font sizes */}
          <div className={spacingClasses.titleSpacing}>
            {/* Updated fixed height container to accommodate new mobile sizing */}
            <div className="h-[122px] sm:h-[145px] md:h-[300px] lg:h-[430px] flex items-center justify-center sm:justify-start">
              <h1 className={`${typographyClasses.heroTitle} ${colorClasses.accent} text-center sm:text-left`}>
                <TypingEffect 
                  words={jobTitles}
                  speed={150}
                  deleteSpeed={75}
                  pauseTime={2000}
                />
              </h1>
            </div>
          </div>

          {/* Action Verbs with Burger Layout on Small Screens */}
          <div
            className="text-center sm:text-left flex flex-col items-center sm:flex-row sm:justify-start sm:items-center gap-y-2 gap-x-6 sm:gap-y-0 sm:gap-x-8 md:gap-x-8 lg:gap-x-20 xl:gap-x-24 opacity-75"
          >
            {/* Burger layout for mobile: grid with 3 rows */}
            <div className="w-full flex flex-col items-center sm:flex-row sm:items-center sm:w-auto my-8">
              {/* Top row: ideate, develop */}
              <div className="flex flex-row justify-center w-full sm:w-auto">
                <p
                  className={`
                    ${typographyClasses.responsiveBodyLg} ${colorClasses.primary} font-mono tracking-wide
                    transition-all duration-300
                    hover:text-green-400
                    hover:drop-shadow-[0_0_16px_rgba(34,197,94,0.7)]
                    hover:scale-105
                  `}
                >
                  ideate.
                </p>
                <p
                  className={`ml-4 sm:ml-0 sm:ml-8 md:ml-12 lg:ml-16
                    ${typographyClasses.responsiveBodyLg} ${colorClasses.primary} font-mono tracking-wide
                    transition-all duration-300
                    hover:text-yellow-300
                    hover:drop-shadow-[0_0_16px_rgba(253,224,71,0.7)]
                    hover:scale-105
                  `}
                >
                  develop.
                </p>
              </div>
              {/* Middle row: automate */}
              <div className="flex flex-row justify-center w-full sm:w-auto mt-2 sm:mt-0 sm:ml-8 md:ml-12 lg:ml-16">
                <p
                  className={`
                    ${typographyClasses.responsiveBodyLg} ${colorClasses.primary} font-mono tracking-wide
                    transition-all duration-300
                    hover:text-orange-400
                    hover:drop-shadow-[0_0_16px_rgba(251,146,60,0.95)]
                    hover:scale-105
                  `}
                >
                  automate.
                </p>
              </div>
              {/* Bottom row: protect, attack */}
              <div className="flex flex-row justify-center w-full sm:w-auto mt-2 sm:mt-0 sm:ml-8 md:ml-12 lg:ml-16">
                <p
                  className={`
                    ${typographyClasses.responsiveBodyLg} ${colorClasses.primary} font-mono tracking-wide
                    transition-all duration-300
                    hover:text-blue-400
                    hover:drop-shadow-[0_0_16px_rgba(96,165,250,0.7)]
                    hover:scale-105
                  `}
                >
                  protect.
                </p>
                <p
                  className={`ml-4 sm:ml-0 sm:ml-8 md:ml-12 lg:ml-16
                    ${typographyClasses.responsiveBodyLg} ${colorClasses.primary} font-mono tracking-wide
                    transition-all duration-300
                    hover:text-red-400
                    hover:drop-shadow-[0_10px_16px_rgba(248,113,113,0.7)]
                    hover:scale-105
                  `}
                >
                  attack.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator Icon */}
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