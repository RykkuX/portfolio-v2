import React from 'react';
import { typographyClasses, colorClasses } from '../../utils/typography';
import { useSmoothScroll } from '../hooks/useSmoothScroll';


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
      title: 'THRIBO WEB APP',
      technologies: ['JavaScript', 'ReactJS', 'Azure'],
      websiteUrl: 'https://thribo-web-app.com',
      imageUrl: '/placeholder-project-1.jpg',
      description: 'A comprehensive web application for digital marketing solutions',
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

  return (
    <section id="projects" className="snap-section min-h-screen bg-primary-dark text-white py-16 sm:py-20 lg:py-24">
      <div className="w-full max-w-4xl sm:max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <h2 className={`${typographyClasses.responsiveH2} ${colorClasses.accent} text-center sm:text-left mb-4`}>
            Recent Works
          </h2>
          <p className={`${typographyClasses.responsiveBody} ${colorClasses.primary} text-center sm:text-left max-w-3xl`}>
            Explore my latest projects showcasing web development, data analytics, and innovative solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="mt-12 sm:mt-16 lg:mt-20 text-center">
          <button className="border-2 border-accent-yellow text-accent-yellow px-8 sm:px-10 py-3 sm:py-4 rounded-lg font-inter text-sm sm:text-base lg:text-link hover:bg-accent-yellow hover:text-primary-dark transition-all duration-300 transform hover:scale-105">
            VIEW ALL PROJECTS
          </button>
        </div>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-secondary-dark rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]">
      
      {/* Project Preview/Thumbnail */}
      <div className="bg-white p-4 sm:p-6">
        <div className="space-y-4">
          {/* Mini Navigation Bar */}
          <div className="flex items-center justify-between text-xs sm:text-sm text-gray-600 border-b border-gray-200 pb-2">
            <div className="flex items-center space-x-4">
              <span className="font-medium">Home</span>
              <span>About Us</span>
              <span>Services</span>
              <span>Feature Projects</span>
            </div>
            <button className="bg-blue-500 text-white px-3 py-1 rounded text-xs">Contact</button>
          </div>

          {/* Main Content */}
          <div className="space-y-3">
            <h3 className="text-lg sm:text-xl font-bold text-gray-800">
              {project.title}
            </h3>
            <p className="text-sm text-gray-600">
              {project.description}
            </p>
            
            {/* Placeholder Image */}
            <div className="bg-gray-200 h-32 sm:h-40 rounded-lg flex items-center justify-center">
              <div className="text-center text-gray-500">
                <div className="text-4xl mb-2">📱</div>
                <p className="text-sm">Project Preview</p>
                <p className="text-xs">{project.title}</p>
              </div>
            </div>

            {/* Sub-sections */}
            <div className="grid grid-cols-3 gap-2 text-xs">
              <div className="bg-gray-50 p-2 rounded text-center">
                <div className="text-blue-500 mb-1">+</div>
                <p className="text-gray-700">Feature 1</p>
              </div>
              <div className="bg-gray-50 p-2 rounded text-center">
                <div className="text-blue-500 mb-1">+</div>
                <p className="text-gray-700">Feature 2</p>
              </div>
              <div className="bg-gray-50 p-2 rounded text-center">
                <div className="text-blue-500 mb-1">+</div>
                <p className="text-gray-700">Feature 3</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Details */}
      <div className="bg-accent-blue p-4 sm:p-6">
        <div className="space-y-4">
          {/* Project Title */}
          <h3 className={`${typographyClasses.responsiveH5} text-white font-bold`}>
            {project.title}
          </h3>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Call to Action Links */}
          <div className="flex flex-wrap gap-4 pt-2">
            {project.websiteUrl && (
              <a
                href={project.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`${typographyClasses.responsiveLink} ${colorClasses.accent} hover:text-accent-bright-yellow transition-colors duration-200 underline`}
              >
                see website &gt;
              </a>
            )}
            {project.codebaseUrl && (
              <a
                href={project.codebaseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`${typographyClasses.responsiveLink} ${colorClasses.accent} hover:text-accent-bright-yellow transition-colors duration-200 underline`}
              >
                see codebase &gt;
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection; 