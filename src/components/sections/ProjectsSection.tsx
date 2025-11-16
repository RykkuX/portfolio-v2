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
      title: 'Proventous Platform',
      technologies: ['Laravel', 'React', 'PHP', 'MySQL', 'REST API'],
      websiteUrl: 'https://proventous.com/',
      imageUrl: '/Proventous.png',
      description: 'A Laravel-based application with React frontend for the Proventous platform. The project handles candidate management, employer dashboards, and various business operations. As System Design Architect and Full Stack Developer, I designed the scalable system architecture, implemented secure authentication and authorization systems, built RESTful APIs for seamless frontend-backend communication, and developed responsive React components for candidate and employer dashboards.',
      category: 'Web Application'   
    },
    {
      id: '2',
      title: 'E-Portfolio',
      technologies: ['React', 'TypeScript', 'Tailwind CSS'],
      codebaseUrl: 'https://github.com/username/e-portfolio',
      imageUrl: '/placeholder-project-2.jpg',
      description: 'Personal portfolio website showcasing projects and skills',
      category: 'Portfolio'
    },
    {
      id: '3',
      title: 'Task Management System',
      technologies: ['Node.js', 'MongoDB', 'Express'],
      websiteUrl: 'https://task-manager-demo.com',
      codebaseUrl: 'https://github.com/username/task-manager',
      imageUrl: '/placeholder-project-3.jpg',
      description: 'Full-stack task management application with real-time updates',
      category: 'Web Application'
    },
    {
      id: '4',
      title: 'Data Analytics Dashboard',
      technologies: ['Python', 'Django', 'PostgreSQL'],
      websiteUrl: 'https://analytics-dashboard.com',
      imageUrl: '/placeholder-project-4.jpg',
      description: 'Interactive dashboard for data visualization and analytics',
      category: 'Data Analytics'
    }
  ];

  const [activeProjectIndex, setActiveProjectIndex] = useState(0);

  const activeProject = projects[activeProjectIndex];

  return (
    <section id="projects" className="snap-section min-h-screen bg-primary-dark text-white py-16 sm:py-20 lg:py-24 relative overflow-hidden">
      {/* 3D Background Image Layer */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="min-[600px]:-mt-16 perspective-[4000px] perspective-origin-top-right transform-3d relative h-full">
          <div 
            className="relative transition-opacity duration-500"
            style={{
              transform: 'scale(1.5) rotateX(47deg) rotateY(31deg) rotate(324deg) translateX(25%)',
            }}
          >
            <div className="relative">
              {/* Project Image */}
              <div className="border-2 border-[#171717] rounded-4xl overflow-hidden bg-secondary-dark transition-all duration-500">
                {activeProject.imageUrl && !activeProject.imageUrl.includes('placeholder') ? (
                  <img
                    src={activeProject.imageUrl}
                    alt={activeProject.title}
                    className="w-full h-96 object-cover transition-opacity duration-500"
                  />
                ) : (
                  <div className="w-full h-96 bg-gradient-to-br from-secondary-dark via-accent-blue to-primary-dark flex items-center justify-center">
                    <div className="text-center text-gray-400 transition-all duration-500">
                      <div className="text-6xl mb-4">📱</div>
                      <p className={`${typographyClasses.responsiveBody} text-gray-500`}>
                        {activeProject.title}
                      </p>
                    </div>
                  </div>
                )}
              </div>
              {/* Gradient Overlay */}
              <div className="absolute inset-0 w-[200%] size-full bg-gradient-to-r from-primary-dark via-primary-dark/80 to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Layer */}
      <div className="relative z-10 w-full min-h-screen">
        {/* Container with responsive padding matching Figma spacing */}
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-[148px] py-12 sm:py-16 md:py-20 lg:py-24">
          {/* Top Row: "Projects" label and "Visit >" link */}
          <div className="flex items-start justify-between mb-6 sm:mb-8 md:mb-10 lg:mb-12">
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

          {/* Project Title - Figma: font-size:24px, font-weight:500 */}
          <h3 
            className="font-roboto-mono font-medium text-white mb-4 sm:mb-6 md:mb-8 transition-all duration-500"
            style={{
              fontSize: 'clamp(20px, 2vw, 24px)',
            }}
          >
            {activeProject.title}
          </h3>

          {/* Description - Figma: font-size:18px, font-weight:700, max-width:962px */}
          <p 
            className="font-inter font-bold text-white leading-normal mb-6 sm:mb-8 md:mb-10 lg:mb-12 max-w-4xl transition-all duration-500"
            style={{
              fontSize: 'clamp(16px, 1.8vw, 18px)',
            }}
          >
            {activeProject.description}
          </p>

          {/* Tech Stack Labels - Figma: font-size:16px, font-weight:500, color:#FFC300 */}
          <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16">
            <div className="flex flex-wrap gap-3 sm:gap-4">
              {activeProject.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="font-roboto-mono font-medium text-[#FFC300]"
                  style={{
                    fontSize: 'clamp(14px, 1.5vw, 16px)',
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Carousel Container - Positioned below tech stack with proper spacing */}
          <div className="relative -mx-4 sm:-mx-6 md:-mx-8 lg:-mx-[148px] px-4 sm:px-6 md:px-8 lg:px-[148px] mt-8 sm:mt-10 md:mt-12 lg:mt-16">
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
        w-[320px] sm:w-[384px] md:w-[400px] lg:w-[420px]
        transition-all duration-300
        ${isActive ? 'scale-105' : 'scale-100 opacity-70'}
        cursor-pointer
      `}
    >
      <div
        className={`
          bg-primary-dark border-2 rounded-lg p-6 h-full
          transition-all duration-300
          ${isActive ? 'border-accent-yellow shadow-lg shadow-accent-yellow/20' : 'border-secondary-dark'}
        `}
      >
          {/* Project Image */}
          <div className="mb-6 bg-secondary-dark rounded-lg overflow-hidden aspect-video flex items-center justify-center">
            {project.imageUrl && !project.imageUrl.includes('placeholder') ? (
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="text-center text-gray-500">
                <div className="text-4xl mb-2">📱</div>
                <p className={`${typographyClasses.responsiveCaption} text-gray-600`}>
                  {project.title}
                </p>
              </div>
            )}
          </div>

          {/* Project Title */}
          <h4
            className={`
              ${typographyClasses.responsiveH5} ${colorClasses.accent} mb-3
              transition-colors duration-300
            `}
          >
            {project.title}
          </h4>

          {/* Description */}
          <p
            className={`
              ${typographyClasses.responsiveBody} ${colorClasses.muted} mb-4
              overflow-hidden
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
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className={`
                  ${typographyClasses.responsiveCaption}
                  px-3 py-1 rounded-full
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
          <div className="flex flex-wrap gap-4 pt-2">
            {project.websiteUrl && (
              <a
                href={project.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className={`
                  ${typographyClasses.responsiveLink} ${colorClasses.accent}
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
                  ${typographyClasses.responsiveLink} ${colorClasses.accent}
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