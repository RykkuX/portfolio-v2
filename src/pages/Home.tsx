import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import TypographyDemo from '../components/common/TypographyDemo';

const Home: React.FC = () => {
  return (
    <div className="Home">
      <HeroSection />
      <ProjectsSection />
      {/* <TypographyDemo /> */}
    </div>
  );
};

export default Home; 