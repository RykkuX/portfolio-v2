import React from 'react';
import { typographyClasses, colorClasses, spacingClasses } from '../../utils/typography';

const ContactSection: React.FC = () => {
  const socialLinks = [
    'EMAIL',
    'FACEBOOK', 
    'GITHUB',
    'LINKEDIN',
    'INSTAGRAM',
    'RESUME'
  ];

  const footerLinks = [
    'PROJECT',
    'SERVICES', 
    'TOOLBOX',
    'ABOUT ME',
    'EMAIL ME',
    'BOOK A CALL'
  ];

  return (
    <section id="contact" className="snap-section min-h-min bg-primary-dark relative overflow-hidden">
      
      {/* Main Content */}
      <div className="min-h-screen flex flex-col justify-center px-4">
        <div className="mx-auto w-full text-center">

          {/* Contact Label */}
          <div className={`${spacingClasses.sectionTopSpacing}`}>
            <span className={`${typographyClasses.responsiveBody} ${colorClasses.accent} font-mono tracking-wider`}>
              CONTACT
            </span>
          </div>

          {/* Main Heading */}
          <div className={`${spacingClasses.subtitleSpacing} mt-5`}>
            <h2 className={`${typographyClasses.responsiveH4} ${colorClasses.primary} font-mono leading-tight max-w-7xl mx-auto`}>
              WORK WITH ME AND<br />
              TRANSFORM YOUR VISION!
            </h2>
          </div>

          {/* Subheading */}
          <div className={`${spacingClasses.subtitleSpacing}`}>
            <p className={`${typographyClasses.responsiveBody} text-gray-400 font-mono`}>
              OR GET A COFFEE :)
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-10">
            <a
              href="mailto:llycosauza@gmail.com"
              className="bg-accent-yellow text-primary-dark px-8 py-4 font-mono font-bold text-mobile-body md:text-medium-body lg:text-body hover:bg-accent-bright-yellow transition-colors duration-300 w-64 min-w-[16rem] text-center inline-block"
              style={{ minWidth: '16rem', maxWidth: '16rem' }}
            >
              SEND ME AN EMAIL
            </a>
            <a
              href="https://calendly.com/llycosauza"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent-yellow text-primary-dark px-8 py-4 font-mono font-bold text-mobile-body md:text-medium-body lg:text-body hover:bg-accent-bright-yellow transition-colors duration-300 w-64 min-w-[16rem] text-center inline-block"
              style={{ minWidth: '16rem', maxWidth: '16rem' }}
            >
              BOOK A CALL
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;