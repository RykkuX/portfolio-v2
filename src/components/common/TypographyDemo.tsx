import React from 'react';
import { typographyClasses, colorClasses } from '../../utils/typography';

const TypographyDemo: React.FC = () => {
  return (
    <div className="min-h-screen bg-primary-dark text-white p-4 sm:p-6 md:p-8 lg:p-12">
      <div className="max-w-7xl mx-auto">
        {/* Main Title - Responsive sizing */}
        <h1 className={`${typographyClasses.responsiveH1} ${colorClasses.accent} text-center sm:text-left mb-6 sm:mb-8 lg:mb-12 leading-tight`}>
          Typography System
        </h1>
        
        <div className="space-y-8 sm:space-y-10 lg:space-y-12">
          {/* Desktop vs Mobile Typography Comparison */}
          <section className="space-y-4 sm:space-y-6">
            <h2 className={`${typographyClasses.responsiveH2} ${colorClasses.accentBright} text-center sm:text-left`}>
              Desktop vs Mobile Typography
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              {/* Desktop Typography */}
              <div className="bg-secondary-dark p-4 sm:p-6 rounded-lg">
                <h3 className={`${typographyClasses.responsiveH3} ${colorClasses.accent} mb-4`}>
                  Desktop (sm: breakpoint and above)
                </h3>
                <div className="space-y-3">
                  <h1 className={`${typographyClasses.h1} leading-tight`}>H1 - 177px</h1>
                  <h2 className={`${typographyClasses.h2} leading-tight`}>H2 - 132px</h2>
                  <h3 className={`${typographyClasses.h3} leading-tight`}>H3 - 99px</h3>
                  <h4 className={`${typographyClasses.h4} leading-tight`}>H4 - 73px</h4>
                  <h5 className={`${typographyClasses.h5} leading-tight`}>H5 - 55px</h5>
                  <h6 className={`${typographyClasses.h6} leading-tight`}>H6 - 41px</h6>
                  <p className={`${typographyClasses.bodyLg}`}>Body Large - 30px</p>
                  <p className={`${typographyClasses.body}`}>Body - 16px</p>
                  <p className={`${typographyClasses.link}`}>Link - 17px</p>
                  <p className={`${typographyClasses.caption}`}>Caption - 13px</p>
                </div>
              </div>

              {/* Mobile Typography */}
              <div className="bg-secondary-dark p-4 sm:p-6 rounded-lg">
                <h3 className={`${typographyClasses.responsiveH3} ${colorClasses.accent} mb-4`}>
                  Mobile (below sm: breakpoint)
                </h3>
                <div className="space-y-3">
                  <h1 className={`${typographyClasses.mobileH1} leading-tight`}>H1 - 73px</h1>
                  <h2 className={`${typographyClasses.mobileH2} leading-tight`}>H2 - 55px</h2>
                  <h3 className={`${typographyClasses.mobileH3} leading-tight`}>H3 - 41px</h3>
                  <p className={`${typographyClasses.mobileBodyLg}`}>Body Large - 24px</p>
                  <p className={`${typographyClasses.mobileBody}`}>Body - 15px</p>
                  <p className={`${typographyClasses.mobileLink}`}>Link - 16px</p>
                  <p className={`${typographyClasses.mobileCaption}`}>Caption - 12px</p>
                </div>
              </div>
            </div>
          </section>

          {/* Responsive Typography Demo */}
          <section className="space-y-4 sm:space-y-6">
            <h2 className={`${typographyClasses.responsiveH2} ${colorClasses.accentBright} text-center sm:text-left`}>
              Responsive Typography (Mobile-First)
            </h2>
            <div className="space-y-3 sm:space-y-4">
              <h1 className={`${typographyClasses.responsiveH1} leading-tight`}>
                H1 - Scales from 73px to 177px
              </h1>
              <h2 className={`${typographyClasses.responsiveH2} leading-tight`}>
                H2 - Scales from 55px to 132px
              </h2>
              <h3 className={`${typographyClasses.responsiveH3} leading-tight`}>
                H3 - Scales from 41px to 99px
              </h3>
              <h4 className={`${typographyClasses.responsiveH4} leading-tight`}>
                H4 - Scales from 41px to 73px
              </h4>
              <h5 className={`${typographyClasses.responsiveH5} leading-tight`}>
                H5 - Scales from 55px to 55px
              </h5>
              <h6 className={`${typographyClasses.responsiveH6} leading-tight`}>
                H6 - Scales from 73px to 41px
              </h6>
            </div>
          </section>

          {/* Responsive Body Text */}
          <section className="space-y-4 sm:space-y-6">
            <h3 className={`${typographyClasses.responsiveH3} ${colorClasses.accentBright} text-center sm:text-left`}>
              Responsive Body Text
            </h3>
            <div className="space-y-3 sm:space-y-4">
              <p className={`${typographyClasses.responsiveBodyLg} leading-relaxed`}>
                Body Large - This scales from 24px on mobile to 30px on desktop. Perfect for important paragraphs and descriptions that need to be readable across all device sizes.
              </p>
              <p className={`${typographyClasses.responsiveBody} leading-relaxed`}>
                Body - This scales from 15px on mobile to 16px on desktop. The standard body text size for regular content and paragraphs with optimal reading experience.
              </p>
              <p className={`${typographyClasses.responsiveLink} leading-relaxed`}>
                Link - This scales from 16px on mobile to 17px on desktop. Optimized for navigation links and interactive elements that need to be easily tappable.
              </p>
              <p className={`${typographyClasses.responsiveCaption} leading-relaxed`}>
                Caption - This scales from 12px on mobile to 13px on desktop. The smallest text size, ideal for captions, labels, and secondary information.
              </p>
            </div>
          </section>

          {/* Color Palette Section */}
          <section className="space-y-4 sm:space-y-6">
            <h3 className={`${typographyClasses.responsiveH3} ${colorClasses.accentBright} text-center sm:text-left`}>
              Color Palette
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6">
              <div className="bg-primary-dark p-4 sm:p-6 rounded-lg border border-accent-blue">
                <h4 className={`${typographyClasses.responsiveH5} ${colorClasses.accent} mb-2`}>Primary Dark</h4>
                <p className={`${typographyClasses.responsiveBody} ${colorClasses.primary}`}>#000814 - Main background color</p>
              </div>
              <div className="bg-secondary-dark p-4 sm:p-6 rounded-lg border border-accent-blue">
                <h4 className={`${typographyClasses.responsiveH5} ${colorClasses.accent} mb-2`}>Secondary Dark</h4>
                <p className={`${typographyClasses.responsiveBody} ${colorClasses.primary}`}>#001d3d - Secondary background</p>
              </div>
              <div className="bg-accent-blue p-4 sm:p-6 rounded-lg border border-accent-yellow">
                <h4 className={`${typographyClasses.responsiveH5} text-white mb-2`}>Accent Blue</h4>
                <p className={`${typographyClasses.responsiveBody} text-white`}>#003566 - Accent color</p>
              </div>
              <div className="bg-accent-yellow p-4 sm:p-6 rounded-lg border border-accent-blue">
                <h4 className={`${typographyClasses.responsiveH5} text-primary-dark mb-2`}>Accent Yellow</h4>
                <p className={`${typographyClasses.responsiveBody} text-primary-dark`}>#ffc300 - Primary accent</p>
              </div>
              <div className="bg-accent-bright-yellow p-4 sm:p-6 rounded-lg border border-accent-blue sm:col-span-2 lg:col-span-1">
                <h4 className={`${typographyClasses.responsiveH5} text-primary-dark mb-2`}>Bright Yellow</h4>
                <p className={`${typographyClasses.responsiveBody} text-primary-dark`}>#ffd60a - Bright accent</p>
              </div>
            </div>
          </section>

          {/* Font Families Section */}
          <section className="space-y-4 sm:space-y-6">
            <h3 className={`${typographyClasses.responsiveH3} ${colorClasses.accentBright} text-center sm:text-left`}>
              Font Families
            </h3>
            <div className="space-y-4 sm:space-y-6">
              <div className="bg-secondary-dark p-4 sm:p-6 rounded-lg">
                <h4 className={`${typographyClasses.responsiveH5} ${colorClasses.accent} mb-2 sm:mb-3`}>
                  Roboto Mono (Headings)
                </h4>
                <p className={`${typographyClasses.responsiveBody} font-roboto-mono leading-relaxed`}>
                  This is Roboto Mono font used for headings, code snippets, and monospace elements. 
                  It provides excellent readability and a technical aesthetic across all screen sizes.
                </p>
              </div>
              <div className="bg-secondary-dark p-4 sm:p-6 rounded-lg">
                <h4 className={`${typographyClasses.responsiveH5} ${colorClasses.accent} mb-2 sm:mb-3`}>
                  Inter (Body Text)
                </h4>
                <p className={`${typographyClasses.responsiveBody} font-inter leading-relaxed`}>
                  This is Inter font used for body text, paragraphs, descriptions, and navigation elements. 
                  It's optimized for screen readability and scales beautifully from mobile to desktop.
                </p>
              </div>
            </div>
          </section>

          {/* Interactive Elements */}
          <section className="space-y-4 sm:space-y-6">
            <h3 className={`${typographyClasses.responsiveH3} ${colorClasses.accentBright} text-center sm:text-left`}>
              Interactive Elements
            </h3>
            <div className="space-y-3 sm:space-y-4 flex flex-col sm:flex-row sm:items-center sm:space-x-4 sm:space-y-0">
              <button className="bg-accent-yellow text-primary-dark px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-inter text-sm sm:text-base lg:text-link hover:bg-accent-bright-yellow transition-colors duration-200 w-full sm:w-auto">
                Primary Button
              </button>
              <button className="border border-accent-yellow text-accent-yellow px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-inter text-sm sm:text-base lg:text-link hover:bg-accent-yellow hover:text-primary-dark transition-colors duration-200 w-full sm:w-auto">
                Secondary Button
              </button>
              <a href="#" className="text-accent-yellow font-inter text-sm sm:text-base lg:text-link hover:text-accent-bright-yellow transition-colors duration-200 underline text-center sm:text-left">
                Navigation Link
              </a>
            </div>
          </section>

          {/* Usage Examples */}
          <section className="space-y-4 sm:space-y-6">
            <h3 className={`${typographyClasses.responsiveH3} ${colorClasses.accentBright} text-center sm:text-left`}>
              Usage Examples
            </h3>
            <div className="bg-secondary-dark p-4 sm:p-6 rounded-lg">
              <h4 className={`${typographyClasses.responsiveH5} ${colorClasses.accent} mb-4`}>
                Typography Utility Usage
              </h4>
              <div className="space-y-2 font-mono text-sm">
                <p className="text-accent-yellow">// Import the utility</p>
                <p className="text-white">import {`{ typographyClasses, colorClasses }`} from '../../utils/typography';</p>
                <br />
                <p className="text-accent-yellow">// Use responsive classes</p>
                <p className="text-white">{`<h1 className={typographyClasses.responsiveH1}>Title</h1>`}</p>
                <p className="text-white">{`<p className={typographyClasses.responsiveBody}>Content</p>`}</p>
                <br />
                <p className="text-accent-yellow">// Combine with colors</p>
                <p className="text-white">{`<h2 className={\`${typographyClasses.responsiveH2} ${colorClasses.accent}\`}>Heading</h2>`}</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TypographyDemo; 