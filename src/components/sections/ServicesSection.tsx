import React from 'react';
import { typographyClasses, colorClasses, spacingClasses } from '../../utils/typography';

const ServicesSection: React.FC = () => {
  const services = [
    {
      title: 'DevOps',
      description: 'Streamline your development lifecycle with automated CI/CD pipelines, infrastructure as code, and cloud-native solutions that reduce deployment time and increase reliability.'
    },
    {
      title: 'Data Analytics',
      description: 'Transform raw data into actionable insights with advanced analytics, machine learning models, and interactive dashboards that drive informed decision-making.'
    },
    {
        title: 'Cybersecurity',
        description: 'Protect your digital assets with comprehensive security assessments, penetration testing, and implementation of security frameworks that safeguard against modern threats.'
      },
    {
      title: 'Project Management',
      description: 'Orchestrate complex technical projects with agile methodologies, clear communication, and strategic planning to ensure on-time delivery and stakeholder alignment.'
    },
    {
        title: 'Software Development', 
        description: 'Build robust, scalable applications using modern frameworks and best practices. From web applications to enterprise solutions, I deliver clean, maintainable code.'
      }
  ];

  return (
    <section id="services" className="snap-section min-h-screen bg-primary-dark relative overflow-hidden">
      
      {/* Content */}
      <div className="min-h-screen flex flex-col justify-center px-4 sm:px-6 md:px-8 lg:px-12 py-16">
        <div className="max-w-6xl mx-auto w-full">
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-x-12 gap-y-16 lg:gap-y-20 [&>*:nth-child(5)]:md:max-lg:col-span-full [&>*:nth-child(5)]:md:max-lg:justify-self-center [&>*:nth-child(1)]:lg:col-span-2 [&>*:nth-child(2)]:lg:col-span-2 [&>*:nth-child(3)]:lg:col-span-2 [&>*:nth-child(4)]:lg:col-span-2 [&>*:nth-child(4)]:lg:col-start-2 [&>*:nth-child(5)]:lg:col-span-2 [&>*:nth-child(5)]:lg:col-start-4">
    {services.map((service, index) => (
        <div key={index} className="space-y-6 max-w-sm">
            {/* Service Title */}
            <h3 className={`${typographyClasses.responsiveH6} ${colorClasses.primary} font-mono`}>
                {service.title}
            </h3>
  
            {/* Horizontal Line */}
            <div className="h-px w-full bg-accent-bright-yellow"></div>
                
            {/* Service Description */}
            <p className={`${typographyClasses.responsiveBody} ${colorClasses.muted} leading-relaxed`}>
                {service.description}
            </p>
        </div>
    ))}
</div>

          {/* Call to Action Button */}
          <div className="flex justify-end mt-20">
            <button className="bg-accent-yellow text-primary-dark px-6 py-3 rounded font-inter font-medium text-mobile-body md:text-medium-body lg:text-body hover:bg-accent-bright-yellow transition-colors duration-300">
              Let's Talk
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServicesSection;