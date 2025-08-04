import React from 'react';
import { typographyClasses, colorClasses, spacingClasses } from '../../utils/typography';

const ToolkitSection: React.FC = () => {
  return (
    <section id="toolkit" className="snap-section min-h-screen bg-gray-100 py-16 px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Title Toolkits*/}
        {/* Main Toolkit Container */}
        <div className="bg-accent-yellow rounded-3xl p-6 md:p-8 lg:p-12 shadow-2xl border-4 border-black">
          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Project Management Section */}
            <div className="lg:col-span-1">
              <div className="bg-accent-yellow border-2 border-black rounded-lg overflow-hidden h-full">
                <div className="bg-accent-yellow border-b-2 border-black p-4">
                  <h3 className={`${typographyClasses.responsiveH6} text-black text-center font-mono`}>
                    Project Management
                  </h3>
                </div>
                <div className="grid grid-cols-3 h-32">
                  <div className="border-r border-black flex items-center justify-center bg-accent-yellow hover:bg-accent-bright-yellow transition-colors duration-200">
                    <div className="text-center">
                      <div className="text-2xl mb-1">📋</div>
                      <span className="text-xs font-mono text-black">Jira</span>
                    </div>
                  </div>
                  <div className="border-r border-black flex items-center justify-center bg-accent-yellow hover:bg-accent-bright-yellow transition-colors duration-200">
                    <div className="text-center">
                      <div className="text-2xl mb-1">📊</div>
                      <span className="text-xs font-mono text-black">Google Workspace</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-center bg-accent-yellow hover:bg-accent-bright-yellow transition-colors duration-200">
                    <div className="text-center">
                      <div className="text-2xl mb-1">🔷</div>
                      <span className="text-xs font-mono text-black">Microsoft</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Data Analytics | AI / Machine Learning Section */}
            <div className="lg:col-span-2">
              <div className="bg-accent-yellow border-2 border-black rounded-lg overflow-hidden h-full">
                <div className="bg-accent-yellow border-b-2 border-black p-4">
                  <h3 className={`${typographyClasses.responsiveH6} text-black text-center font-mono`}>
                    Data Analytics | AI / Machine Learning
                  </h3>
                </div>
                <div className="grid grid-cols-4 h-32">
                  <div className="border-r border-black flex items-center justify-center bg-accent-yellow hover:bg-accent-bright-yellow transition-colors duration-200">
                    <div className="text-center">
                      <div className="text-3xl mb-1">🐍</div>
                      <span className="text-xs font-mono text-black">Python</span>
                    </div>
                  </div>
                  <div className="border-r border-black flex items-center justify-center bg-accent-yellow hover:bg-accent-bright-yellow transition-colors duration-200">
                    <div className="text-center">
                      <div className="text-2xl mb-1">📈</div>
                      <span className="text-xs font-mono text-black">TensorFlow</span>
                    </div>
                  </div>
                  <div className="border-r border-black flex items-center justify-center bg-accent-yellow hover:bg-accent-bright-yellow transition-colors duration-200">
                    <div className="text-center">
                      <div className="text-2xl mb-1">🔥</div>
                      <span className="text-xs font-mono text-black">PyTorch</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-center bg-accent-yellow hover:bg-accent-bright-yellow transition-colors duration-200">
                    <div className="text-center">
                      <div className="text-2xl mb-1">🤖</div>
                      <span className="text-xs font-mono text-black">OpenAI</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Software Development Section */}
            <div className="lg:col-span-2">
              <div className="bg-accent-yellow border-2 border-black rounded-lg overflow-hidden h-full">
                <div className="bg-accent-yellow border-b-2 border-black p-4">
                  <h3 className={`${typographyClasses.responsiveH6} text-black text-center font-mono`}>
                    SOFTWARE DEVELOPMENT
                  </h3>
                </div>
                <div className="grid grid-cols-5 h-32">
                  {[...Array(5)].map((_, index) => (
                    <div 
                      key={index}
                      className={`${index < 4 ? 'border-r border-black' : ''} flex items-center justify-center bg-accent-yellow hover:bg-accent-bright-yellow transition-colors duration-200`}
                    >
                      <div className="text-center">
                        <div className="text-2xl mb-1">🏗️</div>
                        <span className="text-xs font-mono text-black">Terraform</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* DevOps Section */}
            <div className="lg:col-span-1">
              <div className="bg-accent-yellow border-2 border-black rounded-lg overflow-hidden h-full">
                <div className="bg-accent-yellow border-b-2 border-black p-4">
                  <h3 className={`${typographyClasses.responsiveH6} text-black text-center font-mono`}>
                    DEVOPS
                  </h3>
                </div>
                <div className="grid grid-cols-2 h-32">
                  <div className="border-r border-black">
                    <div className="h-1/2 border-b border-black flex items-center justify-center bg-accent-yellow hover:bg-accent-bright-yellow transition-colors duration-200">
                      <div className="text-center">
                        <div className="text-xl mb-1">🏗️</div>
                        <span className="text-xs font-mono text-black">Terraform</span>
                      </div>
                    </div>
                    <div className="h-1/2 flex items-center justify-center bg-accent-yellow hover:bg-accent-bright-yellow transition-colors duration-200">
                      <div className="text-center">
                        <div className="text-xl mb-1">☁️</div>
                        <span className="text-xs font-mono text-black">Azure</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="h-1/2 border-b border-black flex items-center justify-center bg-accent-yellow hover:bg-accent-bright-yellow transition-colors duration-200">
                      <div className="text-center">
                        <div className="text-xl mb-1">🐙</div>
                        <span className="text-xs font-mono text-black">GitHub</span>
                      </div>
                    </div>
                    <div className="h-1/2 flex items-center justify-center bg-accent-yellow hover:bg-accent-bright-yellow transition-colors duration-200">
                      <div className="text-center">
                        <div className="text-xl mb-1">☁️</div>
                        <span className="text-xs font-mono text-black">AWS</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Information / Cyber-Security Section */}
            <div className="lg:col-span-3">
              <div className="bg-accent-yellow border-2 border-black rounded-lg overflow-hidden h-full">
                <div className="bg-accent-yellow border-b-2 border-black p-4">
                  <h3 className={`${typographyClasses.responsiveH6} text-black text-center font-mono`}>
                    INFORMATION / CYBER - SECURITY
                  </h3>
                </div>
                <div className="grid grid-cols-5 h-32">
                  {[...Array(5)].map((_, index) => (
                    <div 
                      key={index}
                      className={`${index < 4 ? 'border-r border-black' : ''} flex items-center justify-center bg-accent-yellow hover:bg-accent-bright-yellow transition-colors duration-200`}
                    >
                      <div className="text-center">
                        <div className="text-2xl mb-1">🏗️</div>
                        <span className="text-xs font-mono text-black">Terraform</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Description */}
        <div className="text-center mt-12">
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