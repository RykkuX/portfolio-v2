import React from 'react';
import { typographyClasses, colorClasses, combinedClasses } from '../../utils/typography';

const Footer: React.FC = () => {
  const footerLinks = [
    'EMAIL',
    'FACEBOOK',
    'GITHUB',
    'LINKEDIN',
    'INSTAGRAM',
    'RESUME'
  ];

  return (
    <footer className="bg-primary-dark min-h-full border-t border-gray-600 overflow-hidden ">
      {/* Footer Content */}
      <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-5">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
          
          <div className="flex flex-col items-start flex-1">
            {/* Name Typography */}
            <h1 className={`text-accent-yellow font-mono font-black ${typographyClasses.responsiveCaption} tracking-tight text-left opacity-75`}>
              LLYCOSAUZA
            </h1>
            {/* Copyright */}
            <span className={`${typographyClasses.responsiveCaption} text-gray-400 font-mono mt-1`}>
              ALL RIGHTS RESERVED / 2025
            </span>
          </div>
          {/* Footer Links */}
          <div className="flex flex-wrap gap-x-8 gap-y-2 justify-end">
            {footerLinks.map((link, index) => (
              <a 
                key={index}
                href="#"
                className={`${typographyClasses.responsiveCaption} ${colorClasses.primary} font-mono hover:${colorClasses.accent} transition-colors duration-300 whitespace-nowrap`}
              >
                {link}
              </a>
            ))}
          </div>
        </div>       
      </div>
    </footer>
  );
}
export default Footer;

