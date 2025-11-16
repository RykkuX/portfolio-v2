import React, { useState, useRef, useEffect } from 'react';
import { typographyClasses, colorClasses } from '../../utils/typography';
import { Icon } from "@iconify/react";

// Toolkit data structure
const toolkitData = {
  'Software Architecture': {
    gridCols: 3,
    tools: [
      { name: 'Micro services', icon: 'carbon:microservices-2' },
      { name: 'System Design', icon: 'carbon:network-4' },
      { name: 'API Design', icon: 'carbon:api' }
    ]
  },
  'Data Analytics | AI / Machine Learning': {
    gridCols: 4,
    tools: [
      { name: 'Python', icon: 'devicon-plain:python' },
      { name: 'Tensor Flow', icon: 'simple-icons:tensorflow' },
      { name: 'PyTorch', icon: 'cib:pytorch' },
      { name: 'OpenAI', icon: 'streamline-logos:openai-logo' }
    ]
  },
  'SOFTWARE DEVELOPMENT': {
    gridCols: 5,
    tools: [
      { name: 'React', icon: 'hugeicons:react' },
      { name: 'Java Script', icon: 'material-symbols-light:javascript-sharp' },
      { name: 'Type Script', icon: 'simple-icons:typescript' },
      { name: 'SQL', icon: 'lineicons:mysql' },
      { name: 'PHP', icon: 'mdi:language-php' }
    ]
  },
  'DEVOPS': {
    gridCols: 3,
    tools: [
      { name: 'Terraform', icon: 'mdi:terraform' },
      { name: 'GitHub', icon: 'mdi:github' },
      { name: 'Azure', icon: 'devicon-plain:azure' },
    ]
  },
  'INFORMATION / CYBER - SECURITY': {
    gridCols: 5,
    tools: [
      { name: 'Kali Linux', icon: 'simple-icons:kalilinux' },
      { name: 'Nmap', icon: 'arcticons:nmap-wrapper' },
      { name: 'Splunk', icon: 'simple-icons:splunk' },
      { name: 'Wire shark', icon: 'simple-icons:wireshark' },
      { name: 'Meta  sploit', icon: 'simple-icons:metasploit' }
    ]
  }
};

// Tool item component
const ToolItem = ({ tool, hasBorder = true, className = '' }) => (
  <div className={`${hasBorder ? 'border-r border-black' : ''} flex items-center justify-center bg-accent-yellow hover:bg-accent-bright-yellow transition-colors duration-200 ${className} shadow-md hover:shadow-lg`}>
    <div className="text-center">
      <Icon 
        icon={tool.icon} 
        className={`${colorClasses.black} w-10 h-10 mb-2 mx-auto drop-shadow-sm font-extrabold`}
      />
      <span className={`${typographyClasses.responsiveBody} font-mono text-black drop-shadow-sm`}>{tool.name}</span>
    </div>
  </div>
);

// Section component
const ToolkitSectionCard = ({ title, data, className = '' }) => {
  const gridRef = useRef(null);

  useEffect(() => {
    if (gridRef.current && data.layout !== 'complex') {
      gridRef.current.style.setProperty('--grid-cols', data.gridCols);
    }
  }, [data.gridCols, data.layout]);

  const renderTools = () => {
    // Dynamic grid layout using CSS custom properties
    return (
      <div 
        ref={gridRef}
        className="grid h-32"
        style={{ 
          gridTemplateColumns: `repeat(${data.gridCols}, minmax(0, 1fr))` 
        }}
      >
        {data.tools.map((tool, index) => (
          <ToolItem
            key={`${title}-${index}`}
            tool={tool}
            hasBorder={index < data.tools.length - 1}
          />
        ))}
      </div>
    );
  };

  return (
    <div className={className}>
      <div className="bg-accent-yellow border-2 border-black rounded-lg overflow-hidden h-full shadow-lg">
        <div className="bg-accent-yellow border-b-2 border-black p-4 shadow-sm">
          <h3 className={`${typographyClasses.responsiveH7} text-black text-center font-mono drop-shadow-sm opacity-80`}>
            {title}
          </h3>
        </div>
        {renderTools()}
      </div>
    </div>
  );
};

const ToolkitSection = () => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer to detect when section enters/exits viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.3, // Trigger when 30% of section is visible
        rootMargin: '0px'
      }
    );

    const currentSection = sectionRef.current;

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} id="toolkit" className="snap-section min-h-screen bg-gray-200 py-16 px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Main Toolkit Container with Door Panels */}
        <div className="relative overflow-hidden rounded-3xl shadow-2xl">
          {/* Door Panels */}
          <div 
            className={`absolute top-0 bottom-0 left-0 w-1/2 bg-accent-yellow border-4 border-black z-20 transition-transform duration-[1500ms] ease-in-out origin-right rounded-l-3xl ${
              isInView ? '-translate-x-full' : 'translate-x-0'
            }`}
            style={{ transformStyle: 'preserve-3d' }}
          />
          <div 
            className={`absolute top-0 bottom-0 right-0 w-1/2 bg-accent-yellow border-4 border-black z-20 transition-transform duration-[1500ms] ease-in-out origin-left rounded-r-3xl ${
              isInView ? 'translate-x-full' : 'translate-x-0'
            }`}
            style={{ transformStyle: 'preserve-3d' }}
          />
          
          {/* Toolkit Content */}
          <div className="bg-accent-yellow rounded-3xl p-6 md:p-8 lg:p-12 border-4 border-black relative z-10">
          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Software Architecture Section */}
            <ToolkitSectionCard
              title="Architecture"
              data={toolkitData['Software Architecture']}
              className="lg:col-span-1"
            />

            {/* Data Analytics | AI / Machine Learning Section */}
            <ToolkitSectionCard
              title="Data Analytics | AI / Machine Learning"
              data={toolkitData['Data Analytics | AI / Machine Learning']}
              className="lg:col-span-2"
            />

            {/* Software Development Section */}
            <ToolkitSectionCard
              title="SOFTWARE DEVELOPMENT"
              data={toolkitData['SOFTWARE DEVELOPMENT']}
              className="lg:col-span-2"
            />

            {/* DevOps Section */}
            <ToolkitSectionCard
              title="DEVOPS"
              data={toolkitData['DEVOPS']}
              className="lg:col-span-1"
            />

            {/* Information / Cyber-Security Section */}
            <ToolkitSectionCard
              title="INFORMATION / CYBER - SECURITY"
              data={toolkitData['INFORMATION / CYBER - SECURITY']}
              className="lg:col-span-3"
            />

          </div>
          </div>
        </div>

        {/* Bottom Description */}
        <div className="text-center mt-10">
          <p className={`${typographyClasses.responsiveBody} text-gray-600 max-w-7xl mx-auto`}>
            This toolkit represents my comprehensive approach to modern software development, 
            from ideation and planning through deployment and security. Each tool is carefully 
            selected to maximize efficiency and deliver exceptional results.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ToolkitSection;