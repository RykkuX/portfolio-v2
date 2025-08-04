import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import TypographyDemo from '../components/common/TypographyDemo';
import ToolkitSection from '../components/sections/ToolkitSection';

const Home: React.FC = () => {
  return (
    <div className="Home">
      <HeroSection />
      <ProjectsSection />
      <ToolkitSection />
      {/* <TypographyDemo /> */}
    </div>
  );
};

export default Home; 