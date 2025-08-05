import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import TypographyDemo from '../components/common/TypographyDemo';
import ToolkitSection from '../components/sections/ToolkitSection';
import ServicesSection from '../components/sections/ServicesSection';
import ContactSection from '../components/sections/ContactSection';
import Footer from '../components/sections/Footer';


const Home: React.FC = () => {
  return (
    <div className="Home">
      <HeroSection />
      <ProjectsSection />
      <ServicesSection/>
      <ToolkitSection />
      <ContactSection/>
      <Footer/>
      {/* <TypographyDemo /> */}
    </div>
  );
};

export default Home; 