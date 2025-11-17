import React, { useState } from 'react';
import { typographyClasses, colorClasses } from '../../utils/typography';
import Carousel from '../common/Carousel';

interface Project {
  id: string;
  title: string;
  technologies: string[];
  websiteUrl?: string;
  codebaseUrl?: string;
  imageUrl: string;
  description: string;
  category: string;
}

const ProjectsSection: React.FC = () => {
  // Sample project data - this will come from admin interface in the future
  const projects: Project[] = [
    {
      id: '1',
      title: 'Project Access Granted',
      technologies: ['React', 'Next.js', 'Cybersecurity'],
      websiteUrl: 'https://project-ag.org/',
      imageUrl: '/Project AG.png',
      description: 'Project Access Granted (Project-AG) is a Cyber Security Group established in Iloilo City. A collective of passionate professionals in cybersecurity, software development, and IT innovation. The platform showcases the team, achievements, and community initiatives. As Co-Founder, I helped establish the organization and develop the web presence for our cybersecurity community.',
      category: 'Cybersecurity'
    },
    {
      id: '2',
      title: 'Portfolio v2',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
      codebaseUrl: 'https://github.com/RykkuX/portfolio-v2',
      imageUrl: '/Portfolio.png',
      description: 'Modern personal portfolio website built with React and TypeScript, featuring responsive design, smooth animations, and dynamic content sections. Showcases projects, skills, and professional experience with a clean, minimalist interface optimized for performance and user experience.',
      category: 'Portfolio'
    },
    {
      id: '3',
      title: 'Worka HRMS',
      technologies: ['Laravel', 'React', 'MySQL', 'REST API', 'Flutter', 'Dart'],
      websiteUrl: 'https://worka.bblabs.dev/auth/login',
      imageUrl: '/Worka.png',
      description: 'A comprehensive, unified open-source Human Resource Management System designed to streamline workforce management for organizations. Features include employee management, attendance tracking, leave management, and organizational hierarchy. As System Design Architect and Full Stack Developer, I designed the system architecture and developed core features for efficient HR operations.',
      category: 'Web Application'
    },
    {
      id: '4',
      title: 'Peacock',
      technologies: ['Laravel', 'React', 'MySQL', 'WebSockets'],
      websiteUrl: 'https://hubomoto.worka.bblabs.dev/noticeboard',
      imageUrl: '/Peacock.png',
      description: 'An organizational notification and communication platform designed to replace email-like behavior inside companies. Think of it as "Slack meets email meets compliance tool" - purpose-built for organizations that need structured, auditable, and engaging internal communications. As System Designer and Full Stack Developer, I built the notification system, real-time updates, and compliance tracking features.',
      category: 'Communication Platform'
    },
    {
      id: '5',
      title: 'Proventous Platform',
      technologies: ['Laravel', 'React', 'PHP', 'MySQL'],
      websiteUrl: 'https://proventous.com/',
      imageUrl: '/Proventous.png',
      description: 'A Laravel-based application with React frontend for the Proventous platform. The project handles candidate management, employer dashboards, and various business operations. As System Design Architect and Full Stack Developer, I designed the scalable system architecture, implemented secure authentication and authorization systems, built RESTful APIs for seamless frontend-backend communication, and developed responsive React components for candidate and employer dashboards.',
      category: 'Web Application'   
    },
    {
      id: '6',
      title: 'ISATech Society',
      technologies: ['JavaScript', 'Next.js', 'CSS'],
      websiteUrl: 'https://www.isatech.club/',
      imageUrl: '/isatech.png',
      description: 'ISATech Society (ISAT U Innovators and Technopreneurs Society) is a student-led organization at Iloilo Science and Technology University dedicated to nurturing innovation, creativity, and entrepreneurship.',
      category: 'Startup'
    }
  ];

  const [activeProjectIndex, setActiveProjectIndex] = useState(0);

  const activeProject = projects[activeProjectIndex];

  return (
    <section id="projects" className="snap-section min-h-screen bg-primary-dark text-white py-8 sm:py-12 lg:py-16 relative overflow-hidden">
      {/* 3D Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <div className="min-[600px]:-mt-16 perspective-[4000px] perspective-origin-top-right transform-3d relative h-full w-full">
          <div 
            className="relative transition-all duration-700 ease-in-out"
            style={{
              transform: 'scale(1.5) rotateX(47deg) rotateY(31deg) rotate(324deg) translateX(25%)',
            }}
          >
            <div className="relative">
              {/* Project Image - Dynamic based on active project */}
              <div className="border-2 border-[#171717] rounded-4xl overflow-hidden bg-secondary-dark transition-all duration-700">
                {activeProject.imageUrl && !activeProject.imageUrl.includes('placeholder') ? (
                  <img
                    key={activeProject.id}
                    src={activeProject.imageUrl}
                    alt={activeProject.title}
                    className="w-full h-96 object-cover transition-all duration-700 opacity-60"
                  />
                ) : (
                  <div className="w-full h-96 bg-gradient-to-br from-secondary-dark via-accent-blue to-primary-dark flex items-center justify-center opacity-60">
                    <div className="text-center text-gray-400 transition-all duration-700">
                      <div className="text-6xl mb-4">📱</div>
                      <p className={`${typographyClasses.responsiveBody} text-gray-500`}>
                        {activeProject.title}
                      </p>
                    </div>
                  </div>
                )}
              </div>
              {/* Gradient Overlay - Lighter for better background visibility */}
              <div className="absolute inset-0 w-[200%] size-full bg-gradient-to-r from-primary-dark via-primary-dark/50 to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Layer */}
      <div className="relative z-20 w-full min-h-screen">
        {/* Container with responsive padding matching Figma spacing */}
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-[148px] py-6 sm:py-8 md:py-10 lg:py-12">
          {/* Top Row: "Projects" label and "Visit >" link */}
          <div className="flex items-start justify-between mb-4 sm:mb-6 md:mb-8">
            {/* "Projects" Label - Figma: font-size:24px, font-weight:500, color:#FFD60A */}
            <h2 
              className="font-roboto-mono font-medium text-[#FFD60A] transition-all duration-500"
              style={{
                fontSize: 'clamp(20px, 2vw, 24px)',
              }}
            >
              Projects
            </h2>

            {/* "Visit >" Link - Figma: font-size:16px, font-weight:500, color:#FFC300 */}
            {activeProject.websiteUrl && (
              <a
                href={activeProject.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-roboto-mono font-medium text-[#FFC300] hover:text-[#FFD60A] transition-colors duration-200 underline"
                style={{
                  fontSize: 'clamp(14px, 1.5vw, 16px)',
                }}
              >
                Visit &gt;
              </a>
            )}
          </div>

          {/* Project Title - Left aligned */}
          <h3 
            className="font-roboto-mono font-medium text-white mb-3 sm:mb-4 transition-all duration-500 text-left"
            style={{
              fontSize: 'clamp(18px, 1.8vw, 20px)',
            }}
          >
            {activeProject.title}
          </h3>

          {/* Main Content Area with Description and Tech Stack */}
          <div className="min-h-auto flex flex-col">
            {/* Description - Left aligned with responsive body typography */}
            <p 
              className={`${typographyClasses.responsiveBody} text-white opacity-75 max-w-4xl transition-all duration-500 line-clamp-4 text-left`}
            >
              {activeProject.description}
            </p>

            {/* Tech Stack Labels - Positioned bottom-right with minimal spacing */}
            <div className="flex justify-end mt-3 sm:mt-4 md:mt-5">
              <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 justify-end">
                {activeProject.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="font-roboto-mono font-medium text-[#FFC300] transition-all duration-300 hover:text-[#FFD60A]"
                    style={{
                      fontSize: 'clamp(12px, 1.3vw, 14px)',
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Carousel Container - Reduced spacing and more compact */}
          <div className="relative -mx-4 sm:-mx-6 md:-mx-8 lg:-mx-[148px] px-4 sm:px-6 md:px-8 lg:px-[148px] mt-8 sm:mt-10 md:mt-12 opacity-80 hover:opacity-100 transition-opacity duration-300">
            <Carousel
              items={projects}
              onActiveIndexChange={setActiveProjectIndex}
              renderItem={(project, index, isActive) => (
                <ProjectCard
                  project={project}
                  isActive={isActive}
                />
              )}
              itemClassName="flex-shrink-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: Project;
  isActive: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, isActive }) => {
  return (
    <div
      className={`
        w-[240px] sm:w-[280px] md:w-[300px] lg:w-[320px]
        transition-all duration-300
        cursor-pointer
        p-2
      `}
    >
      <div
        className={`
          bg-primary-dark border-2 rounded-lg p-4 h-full
          transition-all duration-300
          ${isActive ? 'border-accent-yellow shadow-lg shadow-accent-yellow/20 scale-105' : 'border-secondary-dark scale-100 opacity-70'}
        `}
      >
          {/* Project Image */}
          <div className="mb-3 bg-secondary-dark rounded-lg overflow-hidden aspect-video flex items-center justify-center">
            {project.imageUrl && !project.imageUrl.includes('placeholder') ? (
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="text-center text-gray-500">
                <div className="text-3xl mb-1">📱</div>
                <p className="text-xs text-gray-600">
                  {project.title}
                </p>
              </div>
            )}
          </div>

          {/* Project Title */}
          <h4
            className={`
              ${typographyClasses.responsiveH7} ${colorClasses.accent} mb-2
              transition-colors duration-300 text-sm
            `}
          >
            {project.title}
          </h4>

          {/* Description */}
          <p
            className={`
              ${colorClasses.muted} mb-3
              overflow-hidden text-xs
            `}
            style={{
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
            }}
          >
            {project.description}
          </p>

          {/* Tech Tags */}
          <div className="flex flex-wrap gap-1.5 mb-3">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className={`
                  text-xs
                  px-2 py-0.5 rounded-full
                  border border-accent-yellow/30 text-accent-yellow
                  bg-accent-yellow/10
                  transition-all duration-200
                  ${isActive ? 'border-accent-yellow bg-accent-yellow/20' : ''}
                `}
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-3 pt-1">
            {project.websiteUrl && (
              <a
                href={project.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className={`
                  text-xs ${colorClasses.accent}
                  hover:text-accent-bright-yellow transition-colors duration-200
                  underline
                `}
              >
                Visit &gt;
              </a>
            )}
            {project.codebaseUrl && (
              <a
                href={project.codebaseUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className={`
                  text-xs ${colorClasses.accent}
                  hover:text-accent-bright-yellow transition-colors duration-200
                  underline
                `}
              >
                Codebase &gt;
              </a>
            )}
          </div>
        </div>
      </div>
    );
};

export default ProjectsSection; 